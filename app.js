'use strict';
const APP_VERSION = '0.6.0';
const LS_KEY = 'buhpom.v1';
const HAS_ANDROID = typeof window.Android !== 'undefined';
const IS_IOS = !HAS_ANDROID && (/iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
const IS_STANDALONE = !!(window.navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches));

// ---------- состояние ----------
function defaults() {
  return {
    ver: 1, clients: [], status: {}, manual: [],
    settings: { name: '', reportEmail: '', hour: 9, days: [5, 1, 0], extraOff: [], extraWork: [], welcomeDone: false },
    values: { bv: VALUES_DEFAULT.bv.v, mzp: VALUES_DEFAULT.mzp.v, refi: VALUES_DEFAULT.refi.v },
  };
}
function load() {
  const d = defaults();
  try {
    const s = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
    if (s && Array.isArray(s.clients)) {
      return Object.assign(d, s, {
        settings: Object.assign(d.settings, s.settings || {}),
        values: Object.assign(d.values, s.values || {}),
        status: s.status || {}, manual: s.manual || [],
      });
    }
  } catch (e) { /* повреждённые данные — начинаем с нуля */ }
  return d;
}
let S = load();
if (S.settings.daysV !== 2) { S.settings.days = [5, 1, 0]; S.settings.daysV = 2; } // 0.3.0: по умолчанию за 5 дней и за сутки
function save() {
  localStorage.setItem(LS_KEY, JSON.stringify(S));
  rebuildCalendarSets();
  syncReminders();
}
const ui = { filterClient: '', calY: 0, calM: 0, calSel: '', clientDraft: null, kbQuery: '', calcTab: 'vat', repPeriod: 'curm', repClient: '', repFrom: '', repTo: '' };

// ---------- даты ----------
const pad = n => String(n).padStart(2, '0');
const D = (y, m, d) => new Date(y, m - 1, d, 12);
const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const parse = s => { const [y, m, d] = s.split('-').map(Number); return D(y, m, d); };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const lastDay = (y, m) => new Date(y, m, 0).getDate();
const today = () => { const n = new Date(); return D(n.getFullYear(), n.getMonth() + 1, n.getDate()); };
const diffDays = (a, b) => Math.round((b - a) / 86400000);
const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const MONTHS_G = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const ROMAN = ['I', 'II', 'III', 'IV'];
const fmt = d => pad(d.getDate()) + '.' + pad(d.getMonth() + 1) + '.' + d.getFullYear();
const fmtShort = d => pad(d.getDate()) + '.' + pad(d.getMonth() + 1);
const fmtWd = d => WD[d.getDay()] + ', ' + d.getDate() + ' ' + MONTHS_G[d.getMonth()];
function monthDate(y, m, day) {
  const t = new Date(y, m - 1, 1, 12);
  const Y = t.getFullYear(), M = t.getMonth() + 1;
  const dd = day === 'last' ? lastDay(Y, M) : Math.min(day, lastDay(Y, M));
  return D(Y, M, dd);
}

// ---------- производственный календарь ----------
function orthodoxEaster(y) {
  const a = y % 4, b = y % 7, c = y % 19;
  const d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7;
  const s = d + e + 114;
  const jm = Math.floor(s / 31), jd = (s % 31) + 1;
  return addDays(D(y, jm, jd), 13); // юлианская → григорианская (1900–2099)
}
const radunCache = {};
function radunitsa(y) { return radunCache[y] || (radunCache[y] = ymd(addDays(orthodoxEaster(y), 9))); }
let OFF = new Set(), WORK = new Set();
function rebuildCalendarSets() {
  OFF = new Set(); WORK = new Set();
  Object.values(TRANSFERS).forEach(t => { t.off.forEach(x => OFF.add(x)); t.work.forEach(x => WORK.add(x)); });
  (S.settings.extraOff || []).forEach(x => OFF.add(x));
  (S.settings.extraWork || []).forEach(x => { WORK.add(x); OFF.delete(x); });
}
function holidayName(d) {
  const k = pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  if (FIXED_HOLIDAYS[k]) return FIXED_HOLIDAYS[k];
  if (ymd(d) === radunitsa(d.getFullYear())) return 'Радуница';
  return null;
}
function isWork(d) {
  const s = ymd(d);
  if (WORK.has(s)) return true;
  if (OFF.has(s)) return false;
  const w = d.getDay();
  if (w === 0 || w === 6) return false;
  return !holidayName(d);
}
function shiftDate(d, dir) {
  let x = d, g = 0;
  while (!isWork(x) && g++ < 20) x = addDays(x, dir === 'prev' ? -1 : 1);
  return x;
}
function addWorkDays(d, n) {
  let x = d, k = 0, step = n >= 0 ? 1 : -1;
  while (k < Math.abs(n)) { x = addDays(x, step); if (isWork(x)) k++; }
  return x;
}
function countWorkDays(a, b) { // включительно
  let n = 0;
  for (let x = a; x <= b; x = addDays(x, 1)) if (isWork(x)) n++;
  return n;
}

// ---------- генерация задач ----------
function periodsFor(freq, y0, y1) {
  const out = [];
  for (let y = y0; y <= y1; y++) {
    if (freq === 'month') for (let m = 1; m <= 12; m++) out.push({ key: y + '-' + pad(m), label: MONTHS[m - 1] + ' ' + y, y, end: m });
    else if (freq === 'quarter') for (let q = 1; q <= 4; q++) out.push({ key: y + '-Q' + q, label: ROMAN[q - 1] + ' квартал ' + y, y, end: q * 3 });
    else out.push({ key: String(y), label: y + ' год', y });
  }
  return out;
}
function rawDue(rule, p) {
  if (rule.freq === 'year') return monthDate(p.y + (rule.yOff || 0), rule.month, rule.day);
  return monthDate(p.y, p.end + (rule.offset || 0), rule.day);
}
const CUSTOM_TYPES = { decl: 'подать отчёт', pay: 'уплатить', other: 'другое' };
const CUSTOM_OFFS = { 1: 'месяца, следующего за периодом', 0: 'последнего месяца периода', 2: 'второго месяца после периода' };
function customDesc(r) {
  const f = r.freq === 'month' ? 'ежемесячно' : r.freq === 'quarter' ? 'ежеквартально' : 'ежегодно';
  const off = r.offset === undefined ? 1 : Number(r.offset), yOff = r.yOff === undefined ? 1 : Number(r.yOff);
  const day = r.day === 'last' || Number(r.day) >= 31 ? 'последнего дня' : r.day + '-го числа';
  const when = r.freq === 'year'
    ? `до ${r.day === 'last' ? 'конца ' + MONTHS_G[(Number(r.month) || 1) - 1] : r.day + ' ' + MONTHS_G[(Number(r.month) || 1) - 1]} ${yOff ? 'следующего года' : 'того же года'}`
    : `до ${day} ${CUSTOM_OFFS[off] || CUSTOM_OFFS[1]}`;
  return `${CUSTOM_TYPES[r.type || 'decl']}, ${f}, ${when}`;
}
function customRules(c) {
  return (c.custom || []).map(r => ({
    id: 'u_' + r.id, group: 'Свои налоги и отчёты', title: r.title + ' за {p}', freq: r.freq,
    offset: r.offset === undefined ? 1 : Number(r.offset), yOff: r.yOff === undefined ? 1 : Number(r.yOff),
    month: Number(r.month) || 1, day: r.day === 'last' || Number(r.day) >= 31 ? 'last' : (Number(r.day) || 20),
    shift: r.shift === 'prev' ? 'prev' : 'next', type: r.type || 'decl', kb: null,
    note: 'Добавлено вручную: ' + customDesc(r) + (r.note ? '. ' + r.note : '.'),
  }));
}
function rulesFor(c) { return RULES.filter(r => r.applies(c)).concat(customRules(c)); }
function clientName(id) { const c = S.clients.find(x => x.id === id); return c ? c.name : ''; }

function allTasks(from, to) {
  const fromS = ymd(from), toS = ymd(to), res = [];
  const y0 = from.getFullYear() - 2, y1 = to.getFullYear() + 1;
  for (const c of S.clients) {
    if (c.archived) continue;
    const since = c.since || '2000-01-01';
    for (const r of rulesFor(c)) {
      for (const p of periodsFor(r.freq, y0, y1)) {
        if (r.skip && r.skip(p)) continue;
        const raw = rawDue(r, p), due = shiftDate(raw, r.shift), dueS = ymd(due);
        if (dueS < fromS || dueS > toS || dueS < since) continue;
        const id = c.id + '|' + r.id + '|' + p.key, st = S.status[id] || {};
        res.push({ id, clientId: c.id, client: c.name, rule: r, title: r.title.replace('{p}', p.label), period: p.label,
          raw, due, dueS, shifted: ymd(raw) !== dueS, type: r.type, done: !!st.done, doneAt: st.at || '', note: st.note || '' });
      }
    }
  }
  for (const m of S.manual) {
    for (const ds of expandManual(m, from, to)) {
      const id = 'm|' + m.id + '|' + ds, st = S.status[id] || {}, due = parse(ds);
      res.push({ id, clientId: m.clientId || '', client: clientName(m.clientId), rule: null, manual: m, title: m.title, period: '',
        raw: due, due, dueS: ds, shifted: false, type: 'manual', done: !!st.done, doneAt: st.at || '', note: st.note || m.note || '' });
    }
  }
  res.sort((a, b) => a.dueS < b.dueS ? -1 : a.dueS > b.dueS ? 1 : a.client.localeCompare(b.client, 'ru'));
  return res;
}
function expandManual(m, from, to) {
  const out = [], fromS = ymd(from), toS = ymd(to);
  if (!m.date) return out;
  if (!m.repeat || m.repeat === 'none') { if (m.date >= fromS && m.date <= toS) out.push(m.date); return out; }
  const b = parse(m.date), step = { month: 1, quarter: 3, year: 12 }[m.repeat] || 1;
  for (let i = 0; i < 400; i++) {
    const d = monthDate(b.getFullYear(), b.getMonth() + 1 + i * step, b.getDate());
    const s = ymd(d);
    if (s > toS) break;
    if (s >= fromS) out.push(s);
  }
  return out;
}
function findTask(id) {
  const t = today();
  return allTasks(addDays(t, -800), addDays(t, 800)).find(x => x.id === id);
}

// ---------- напоминания (Android) ----------
function syncReminders() {
  if (!HAS_ANDROID) return;
  try {
    const t = today();
    const items = allTasks(addDays(t, -60), addDays(t, 14)).filter(x => !x.done)
      .map(x => ({ id: x.id, d: x.dueS, t: x.title, c: x.client }));
    Android.saveReminders(JSON.stringify({ hour: Number(S.settings.hour) || 9, days: S.settings.days || [5, 1, 0], items }));
  } catch (e) { console.log('reminders', e); }
}

// ---------- сроки в календарь телефона (.ics) — для iPhone вместо уведомлений ----------
function icsText(months) {
  const t = today(), items = allTasks(addDays(t, -1), addDays(t, months * 31)).filter(x => !x.done);
  const h = Number(S.settings.hour) || 9, days = (S.settings.days && S.settings.days.length ? S.settings.days : [5, 1, 0]);
  const e = x => String(x || '').replace(/\\/g, '\\\\').replace(/[;,]/g, m => '\\' + m).replace(/\r?\n/g, '\\n');
  const fold = l => { const out = []; while (l.length > 36) { out.push(l.slice(0, 36)); l = ' ' + l.slice(36); } out.push(l); return out.join('\r\n'); };
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Buhpomoshnik//RU', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:Бухпомощник'];
  for (const x of items) {
    const d = x.dueS.replace(/-/g, ''), uidv = x.id.replace(/[^\w-]/g, '_') + '@buhpom';
    L.push('BEGIN:VEVENT', 'UID:' + uidv, 'DTSTAMP:' + stamp,
      'DTSTART:' + d + 'T' + pad(h) + '0000', 'DURATION:PT30M',
      fold('SUMMARY:' + e(x.title + (x.client ? ' — ' + x.client : ''))),
      fold('DESCRIPTION:' + e('Срок: ' + fmt(x.due) + (x.shifted ? ' (перенесён с ' + fmt(x.raw) + ')' : '') + (x.note ? '\n' + x.note : '') + '\nПомощник бухгалтера')));
    for (const n of days) L.push('BEGIN:VALARM', 'ACTION:DISPLAY', fold('DESCRIPTION:' + e(x.title)), 'TRIGGER:' + (n ? '-P' + n + 'D' : 'PT0M'), 'END:VALARM');
    L.push('END:VEVENT');
  }
  L.push('END:VCALENDAR');
  return { text: L.join('\r\n') + '\r\n', n: items.length };
}
function exportIcs() {
  const r = icsText(12);
  if (!r.n) { toast('Нет несданных сроков на ближайший год'); return; }
  shareFile('Сроки_бухгалтера.ics', 'text/calendar', r.text, '', 'Сроки бухгалтера', '');
}

// ---------- утилиты UI ----------
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const ICON = {
  home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16 5.2a3.2 3.2 0 010 6M18.5 20c0-2.6-1-4.4-2.6-5.4"/>',
  book: '<path d="M4 4.5h6a2 2 0 012 2V20a2 2 0 00-2-2H4zM20 4.5h-6a2 2 0 00-2 2V20a2 2 0 012-2h6z"/>',
  more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chev: '<path d="M9 5l7 7-7 7"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
};
const icon = (n, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[n]}</svg>`;

function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 2400);
}
function setView(title, html, opt = {}) {
  $('#title').textContent = title;
  $('#back').style.visibility = opt.back ? 'visible' : 'hidden';
  const a = $('#action');
  if (opt.action) { a.innerHTML = opt.action.html; a.dataset.act = opt.action.act; a.dataset.id = opt.action.id || ''; a.style.visibility = 'visible'; }
  else { a.style.visibility = 'hidden'; a.dataset.act = ''; }
  $('#main').innerHTML = html;
}
function setTab(name) {
  const map = { home: 'home', cal: 'cal', clients: 'clients', client: 'clients', cedit: 'clients', kb: 'kb', art: 'kb', task: 'home' };
  const tab = map[name] || 'more';
  document.querySelectorAll('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
}
const go = p => { location.hash = '#/' + p; };

// ---------- карточка задачи ----------
function taskRow(t, opts = {}) {
  const td = today(), over = !t.done && t.due < td, isToday = ymd(td) === t.dueS;
  const cls = ['task', t.done ? 'done' : '', over ? 'over' : '', isToday && !t.done ? 'today' : ''].join(' ');
  const badge = t.type === 'pay' ? '<span class="tag pay">уплата</span>' : t.type === 'decl' ? '<span class="tag decl">отчёт</span>' : '';
  const dateTxt = opts.noDate ? '' : `<span class="dt">${fmtWd(t.due)}</span>`;
  const shift = t.shifted ? `<span class="sh">перенос с ${fmtShort(t.raw)}</span>` : '';
  const late = over ? `<span class="late">просрочено ${diffDays(t.due, td)} дн.</span>` : '';
  return `<div class="${cls}">
    <button class="chk" data-act="toggle" data-id="${esc(t.id)}" aria-label="Отметить">${icon('check')}</button>
    <div class="tb" data-act="open-task" data-id="${esc(t.id)}">
      <div class="tt">${esc(t.title)}</div>
      <div class="ts">${opts.noClient || !t.client ? '' : '<b>' + esc(t.client) + '</b> · '}${dateTxt} ${badge} ${shift} ${late}</div>
    </div></div>`;
}
function section(title, list, opts) {
  if (!list.length) return '';
  return `<h3 class="sec">${title} <span class="cnt">${list.length}</span></h3><div class="card list">${list.map(t => taskRow(t, opts)).join('')}</div>`;
}
function clientFilterSelect() {
  const opts = S.clients.filter(c => !c.archived).map(c => `<option value="${esc(c.id)}" ${ui.filterClient === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('');
  return `<select class="filter" data-change="filter-client"><option value="">Все клиенты</option>${opts}</select>`;
}

// ---------- экраны ----------
function iosInstallHint() {
  if (!IS_IOS || IS_STANDALONE || S.settings.hideInstall) return '';
  return `<div class="card pad inst small">Чтобы приложение было на экране, как обычное: внизу Safari нажмите <b>«Поделиться»</b> (квадрат со стрелкой) → <b>«На экран «Домой»</b> → «Добавить». Данные Safari и значка на экране — разные, поэтому клиентов заводите уже в приложении со значка.
    <div class="btns"><button class="btn" data-act="hide-install">Понятно</button></div></div>`;
}
function viewHome() {
  const td = today(), tdS = ymd(td);
  if (!S.clients.length && !S.manual.length) {
    setView('Сроки', iosInstallHint() + `<div class="card pad welcome">
      <h2>Помощник бухгалтера</h2>
      <p>Добавьте организации и ИП, которые вы ведёте. Приложение само составит календарь сдачи отчётности и уплаты налогов по законодательству РБ, учтёт выходные и переносы и напомнит о сроках.</p>
      <button class="btn primary" data-act="new-client">Добавить клиента</button>
      <button class="btn" data-act="demo">Посмотреть на примере</button>
    </div>`);
    return;
  }
  const st = S.settings, rng = st.homeRange || '31';
  let from = td, to;
  if (rng === 'custom') {
    from = parse(st.homeFrom || tdS); to = parse(st.homeTo || ymd(addDays(td, 31)));
    if (to < from) to = from;
  } else to = addDays(td, Number(rng));
  const fromS = ymd(from), toS = ymd(to);
  let tasks = allTasks(addDays(td < from ? td : from, -365), to);
  if (ui.filterClient) tasks = tasks.filter(t => t.clientId === ui.filterClient);
  const over = tasks.filter(t => !t.done && t.dueS < tdS);
  const inPer = tasks.filter(t => t.dueS >= fromS && t.dueS <= toS);
  const opt = (v, t) => `<option value="${v}" ${v === rng ? 'selected' : ''}>${t}</option>`;
  const picker = `<div class="rng"><label>Показать сроки<select data-change="home-range">${opt('7', 'на неделю')}${opt('14', 'на 2 недели')}${opt('31', 'на месяц')}${opt('92', 'на 3 месяца')}${opt('183', 'на полгода')}${opt('365', 'на год')}${opt('custom', 'за свой период…')}</select></label>
    ${rng === 'custom' ? `<div class="two"><label>с<input type="date" value="${fromS}" data-change="home-from"></label><label>по<input type="date" value="${toS}" data-change="home-to"></label></div>` : ''}</div>`;
  const byMonth = list => {
    const g = {}; list.forEach(t => { const k = t.dueS.slice(0, 7); (g[k] = g[k] || []).push(t); });
    return Object.keys(g).sort().map(k => { const [y, m] = k.split('-').map(Number); return section(MONTHS[m - 1][0].toUpperCase() + MONTHS[m - 1].slice(1) + ' ' + y, g[k]); }).join('');
  };
  let body, stat3;
  if (rng === 'custom') {
    const per = inPer.filter(t => !(t.dueS < tdS && !t.done)); // просроченные уже наверху
    stat3 = `<div class="st"><b>${inPer.filter(t => !t.done).length}</b><span>${fmtShort(from)}–${fmtShort(to)}</span></div>`;
    body = `${section('Просрочено', over)}${byMonth(per)}${!over.length && !per.length ? `<div class="card pad muted">С ${fmt(from)} по ${fmt(to)} сроков нет.</div>` : ''}`;
  } else {
    const tday = tasks.filter(t => t.dueS === tdS);
    const w = ymd(addDays(td, 7));
    const week = tasks.filter(t => t.dueS > tdS && t.dueS <= w && t.dueS <= toS);
    const later = tasks.filter(t => t.dueS > w && t.dueS <= toS);
    const recentDone = tasks.filter(t => t.done && t.dueS < tdS && t.dueS >= ymd(addDays(td, -10)));
    const n = Number(rng);
    stat3 = `<div class="st"><b>${inPer.filter(t => !t.done && t.dueS > tdS).length}</b><span>до ${fmtShort(to)}</span></div>`;
    body = `${section('Просрочено', over)}
    ${section('Сегодня, ' + fmtWd(td), tday, { noDate: true })}
    ${section('Ближайшие 7 дней', week)}
    ${n > 31 ? byMonth(later) : section('До ' + fmt(to), later)}
    ${section('Недавно выполнено', recentDone)}
    ${!over.length && !tday.length && !week.length && !later.length ? `<div class="card pad muted">До ${fmt(to)} сроков нет.</div>` : ''}`;
  }
  const tdOpen = tasks.filter(t => t.dueS === tdS && !t.done).length;
  setView('Сроки', iosInstallHint() + `
    <div class="stats">
      <div class="st ${over.length ? 'red' : ''}"><b>${over.length}</b><span>просрочено</span></div>
      <div class="st ${tdOpen ? 'orange' : ''}"><b>${tdOpen}</b><span>сегодня</span></div>
      ${stat3}
    </div>
    ${picker}
    ${clientFilterSelect()}
    ${body}
  `, { action: { html: icon('plus'), act: 'new-manual' } });
}

function viewCal() {
  const td = today();
  if (!ui.calY) { ui.calY = td.getFullYear(); ui.calM = td.getMonth() + 1; ui.calSel = ymd(td); }
  const y = ui.calY, m = ui.calM, first = D(y, m, 1), nd = lastDay(y, m);
  let tasks = allTasks(D(y, m, 1), D(y, m, nd));
  if (ui.filterClient) tasks = tasks.filter(t => t.clientId === ui.filterClient);
  const byDay = {};
  tasks.forEach(t => (byDay[t.dueS] = byDay[t.dueS] || []).push(t));
  const lead = (first.getDay() + 6) % 7;
  let cells = '';
  for (let i = 0; i < lead; i++) cells += '<div class="cd empty"></div>';
  for (let d = 1; d <= nd; d++) {
    const dt = D(y, m, d), s = ymd(dt), list = byDay[s] || [];
    const hol = holidayName(dt), work = isWork(dt);
    const open = list.filter(t => !t.done), overdue = open.some(t => t.due < td);
    const dots = list.length ? `<i class="dot ${overdue ? 'red' : open.length ? 'blue' : 'green'}">${list.length}</i>` : '';
    cells += `<div class="cd ${work ? '' : 'off'} ${hol ? 'hol' : ''} ${s === ymd(td) ? 'now' : ''} ${s === ui.calSel ? 'sel' : ''}" data-act="cal-day" data-id="${s}">
      <span>${d}</span>${dots}</div>`;
  }
  const sel = ui.calSel ? parse(ui.calSel) : null;
  let dayHtml = '';
  if (sel && sel.getMonth() + 1 === m && sel.getFullYear() === y) {
    const list = byDay[ui.calSel] || [], hol = holidayName(sel);
    const note = hol ? `<div class="muted small">${esc(hol)} — нерабочий день</div>` : WORK.has(ui.calSel) ? '<div class="muted small">Рабочая суббота (перенос)</div>' : OFF.has(ui.calSel) ? '<div class="muted small">Выходной (перенос рабочего дня)</div>' : '';
    dayHtml = `<h3 class="sec">${fmtWd(sel)}</h3>${note}${list.length ? `<div class="card list">${list.map(t => taskRow(t, { noDate: true })).join('')}</div>` : '<div class="card pad muted">Сроков нет.</div>'}`;
  }
  setView('Календарь', `
    <div class="calhead"><button class="ibtn" data-act="cal-prev">${icon('back')}</button>
      <b>${MONTHS[m - 1][0].toUpperCase() + MONTHS[m - 1].slice(1)} ${y}</b>
      <button class="ibtn" data-act="cal-next">${icon('chev')}</button></div>
    <div class="card calgrid">${['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map(x => `<div class="wd">${x}</div>`).join('')}${cells}</div>
    ${clientFilterSelect()}
    ${dayHtml}
    <p class="muted small center">Рабочих дней в месяце: ${countWorkDays(D(y, m, 1), D(y, m, nd))}</p>
  `, { action: { html: icon('plus'), act: 'new-manual' } });
}

function regimeText(c) {
  const r = { osn: 'общая система', usn: 'УСН', ip_pod: 'подоходный налог', ip_ed: 'единый налог' }[c.regime] || '';
  const v = c.vat === 'month' ? 'НДС ежемесячно' : c.vat === 'quarter' ? 'НДС ежеквартально' : 'без НДС';
  return [c.kind === 'ip' ? 'ИП' : 'Организация', r, v, c.employees ? 'есть работники' : ''].filter(Boolean).join(' · ');
}
function viewClients() {
  const td = today(), tdS = ymd(td);
  const tasks = allTasks(addDays(td, -365), addDays(td, 14));
  const active = S.clients.filter(c => !c.archived).sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  const arch = S.clients.filter(c => c.archived);
  const row = c => {
    const mine = tasks.filter(t => t.clientId === c.id && !t.done);
    const o = mine.filter(t => t.dueS < tdS).length, n = mine.filter(t => t.dueS >= tdS).length;
    return `<div class="row" data-act="open-client" data-id="${esc(c.id)}">
      <div class="rb"><div class="tt">${esc(c.name)}</div><div class="ts">${esc(regimeText(c))}</div></div>
      <div class="rc">${o ? `<span class="pill red">${o}</span>` : ''}${n ? `<span class="pill">${n}</span>` : ''}${icon('chev', 'dim')}</div></div>`;
  };
  setView('Клиенты', `
    ${active.length ? `<div class="card list">${active.map(row).join('')}</div>` : '<div class="card pad muted">Клиентов пока нет. Нажмите «+» вверху.</div>'}
    <p class="muted small">Красная цифра — просроченные сроки, серая — сроки на ближайшие 14 дней.</p>
    ${arch.length ? `<h3 class="sec">Архив</h3><div class="card list">${arch.map(row).join('')}</div>` : ''}
  `, { action: { html: icon('plus'), act: 'new-client' } });
}

function viewClient(id) {
  const c = S.clients.find(x => x.id === id);
  if (!c) return go('clients');
  const td = today();
  const tasks = allTasks(addDays(td, -365), addDays(td, 62)).filter(t => t.clientId === id);
  const open = tasks.filter(t => !t.done);
  const obl = rulesFor(c).map(r => `<div class="ob"><b>${esc(r.title.replace(/ (за|на) \{p\}/, ''))}</b><div class="muted small">${esc(r.note)}</div></div>`).join('');
  setView(c.name, `
    <div class="card pad">
      <div class="ts">${esc(regimeText(c))}</div>
      ${c.unp ? `<div>УНП: <b>${esc(c.unp)}</b></div>` : ''}
      ${c.contact ? `<div>Контакт: ${esc(c.contact)}</div>` : ''}
      ${c.email ? `<div>E-mail: ${esc(c.email)}</div>` : ''}
      ${c.since ? `<div class="muted small">Сроки считаются с ${fmt(parse(c.since))}</div>` : ''}
      ${c.note ? `<div class="note">${esc(c.note)}</div>` : ''}
      <div class="btns"><button class="btn" data-act="edit-client" data-id="${esc(id)}">Изменить</button>
      <button class="btn" data-act="mail-client" data-id="${esc(id)}">Письмо клиенту</button>
      <button class="btn" data-act="report-client" data-id="${esc(id)}">Отчёт</button>
      <button class="btn" data-act="add-tax" data-id="${esc(id)}">+ Свой налог</button></div>
    </div>
    ${section('Невыполненные сроки', open, { noClient: true })}
    <h3 class="sec">Обязанности</h3>
    <div class="card pad">${obl || '<span class="muted">Нет.</span>'}</div>
    <div class="btns"><button class="btn" data-act="archive-client" data-id="${esc(id)}">${c.archived ? 'Вернуть из архива' : 'В архив'}</button>
    <button class="btn danger" data-act="delete-client" data-id="${esc(id)}">Удалить</button></div>
  `, { back: true });
}

function emptyClient() {
  const t = today();
  return { id: '', name: '', kind: 'org', unp: '', regime: 'osn', vat: 'month', usnPeriod: 'quarter', employees: true, fsznQuarterly: false,
    realty: false, land: false, eco: false, transport: false, adv: false, eaeu: false, offshore: false, foreign: false, email: '', contact: '', note: '', since: ymd(t), custom: [] };
}
function viewClientEdit(id) {
  if (!ui.clientDraft || ui.clientDraft._for !== id) {
    const base = id === 'new' ? emptyClient() : JSON.parse(JSON.stringify(S.clients.find(x => x.id === id) || emptyClient()));
    base._for = id; ui.clientDraft = base;
  }
  const c = ui.clientDraft;
  const opt = (v, cur, t) => `<option value="${v}" ${v === cur ? 'selected' : ''}>${t}</option>`;
  const chk = (k, t, hint = '') => `<label class="sw"><input type="checkbox" name="${k}" ${c[k] ? 'checked' : ''}><span>${t}${hint ? `<small>${hint}</small>` : ''}</span></label>`;
  const regimes = c.kind === 'ip'
    ? opt('ip_pod', c.regime, 'Общая система (подоходный налог)') + opt('ip_ed', c.regime, 'Единый налог') + opt('usn', c.regime, 'УСН')
    : opt('osn', c.regime, 'Общая система (налог на прибыль)') + opt('usn', c.regime, 'УСН');
  const cust = (c.custom || []).map(r => `<div class="crow"><span><b>${esc(r.title)}</b><br><small class="muted">${esc(customDesc(r))}</small></span>
     <button class="lnk danger" data-act="del-custom" data-id="${esc(r.id)}">убрать</button></div>`).join('');
  setView(id === 'new' ? 'Новый клиент' : 'Изменить клиента', `
    <form id="cf" class="card pad form" onsubmit="return false">
      <label>Название<input name="name" value="${esc(c.name)}" placeholder="ООО «Ромашка» или ИП Иванов И.И." required></label>
      <label>Тип<select name="kind" data-change="draft-rerender">${opt('org', c.kind, 'Организация')}${opt('ip', c.kind, 'Индивидуальный предприниматель')}</select></label>
      <label>УНП<input name="unp" value="${esc(c.unp)}" inputmode="numeric" maxlength="9"></label>
      <label>Система налогообложения<select name="regime" data-change="draft-rerender">${regimes}</select></label>
      ${c.regime === 'usn' ? `<label>Отчётный период УСН<select name="usnPeriod">${opt('quarter', c.usnPeriod, 'Квартал')}${opt('month', c.usnPeriod, 'Месяц')}</select></label>` : ''}
      <label>НДС<select name="vat">${opt('none', c.vat, 'Не плательщик')}${opt('month', c.vat, 'Ежемесячно')}${opt('quarter', c.vat, 'Ежеквартально')}</select></label>
      <label class="sw"><input type="checkbox" name="employees" data-change="draft-rerender" ${c.employees ? 'checked' : ''}><span>Есть работники по трудовым договорам<small>подоходный как агент, ФСЗН, 4-фонд, ПУ-3, Белгосстрах</small></span></label>
      ${c.employees ? `<label>Период уплаты взносов ФСЗН<select name="fsznPeriod">${opt('month', c.fsznQuarterly ? 'quarter' : 'month', 'Месяц')}${opt('quarter', c.fsznQuarterly ? 'quarter' : 'month', 'Квартал')}</select><small>Месяц — до 20-го числа следующего месяца. Квартал — можно при средней численности до 100 человек, до 20-го числа месяца после квартала. 4-фонд в обоих случаях ежеквартально.</small></label>` : ''}
      <div class="grp">Имущественные и другие налоги</div>
      ${chk('realty', 'Налог на недвижимость', c.kind === 'ip' ? 'ИП — по извещению, до 15 ноября' : 'декларация до 20 марта, уплата ежеквартально')}
      ${chk('land', 'Земельный налог', c.kind === 'ip' ? 'ИП — по извещению, до 15 ноября' : 'декларация до 20 февраля, уплата ежеквартально')}
      ${chk('transport', 'Транспортный налог', c.kind === 'ip' ? 'ИП — по извещению, до 15 ноября следующего года' : 'авансы за I–III кварталы, декларация до 20 февраля')}
      ${chk('adv', 'Сбор за размещение рекламы', 'расчёт и уплата ежеквартально')}
      ${chk('eco', 'Экологический налог')}
      ${chk('eaeu', 'Ввоз товаров из ЕАЭС (НДС при импорте)', 'декларация и уплата ежемесячно')}
      ${chk('offshore', 'Оффшорный сбор', 'платежи в оффшорные зоны')}
      ${chk('foreign', 'Налог на доходы иностранных организаций', 'как налоговый агент, ежеквартально')}
      <label>Считать сроки с даты<input type="date" name="since" value="${esc(c.since)}"><small>Сроки раньше этой даты не показываются. Поставьте дату раньше, если нужно отметить уже прошедшие.</small></label>
      <label>Контактное лицо, телефон<input name="contact" value="${esc(c.contact)}"></label>
      <label>E-mail клиента<input type="email" name="email" value="${esc(c.email)}"></label>
      <label>Заметки<textarea name="note" rows="2">${esc(c.note)}</textarea></label>
    </form>
    <h3 class="sec" id="cust">Свои налоги и отчёты</h3>
    <div class="card pad form">
      ${cust || '<div class="muted small">Любой налог, сбор или отчёт, которого нет в списке выше: статистика (12-т, 1-мп), плата за наружную рекламу по договору, аренда земли, курортный сбор и т. п.</div>'}
      <label>Название<input id="cu_t" placeholder="Например: Курортный сбор"></label>
      <div class="two">
        <label>Что сделать<select id="cu_y">${Object.entries(CUSTOM_TYPES).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></label>
        <label>Как часто<select id="cu_f" data-change="custom-freq"><option value="month">ежемесячно</option><option value="quarter" selected>ежеквартально</option><option value="year">ежегодно</option></select></label>
      </div>
      <div class="two">
        <label>Число<select id="cu_d">${Array.from({ length: 30 }, (_, i) => `<option value="${i + 1}" ${i + 1 === 20 ? 'selected' : ''}>${i + 1}</option>`).join('')}<option value="last">последний день</option></select></label>
        <label id="cu_mw" style="display:none">Месяц<select id="cu_m">${MONTHS.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}</select></label>
      </div>
      <label id="cu_ow">Какого месяца<select id="cu_o">${Object.entries(CUSTOM_OFFS).map(([k, v]) => `<option value="${k}" ${k === '1' ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
      <label id="cu_yw" style="display:none">Какого года<select id="cu_yo"><option value="1">следующего за отчётным</option><option value="0">того же года</option></select></label>
      <label>Если срок выпал на выходной<select id="cu_s"><option value="next">перенести на следующий рабочий день</option><option value="prev">перенести на предыдущий рабочий день</option></select></label>
      <button class="btn" data-act="add-custom">Добавить в обязанности клиента</button>
    </div>
    <button class="btn primary wide" data-act="save-client">Сохранить</button>
  `, { back: true });
}
function readDraft() {
  const f = $('#cf'); if (!f || !ui.clientDraft) return;
  const c = ui.clientDraft, fd = new FormData(f);
  ['name', 'kind', 'unp', 'regime', 'usnPeriod', 'vat', 'since', 'contact', 'email', 'note'].forEach(k => { if (fd.has(k)) c[k] = String(fd.get(k)).trim(); });
  if (fd.has('fsznPeriod')) c.fsznQuarterly = fd.get('fsznPeriod') === 'quarter';
  ['employees', 'realty', 'land', 'eco', 'transport', 'adv', 'eaeu', 'offshore', 'foreign'].forEach(k => { const el = f.elements[k]; if (el) c[k] = el.checked; });
  if (c.kind === 'org' && (c.regime === 'ip_pod' || c.regime === 'ip_ed')) c.regime = 'osn';
  if (c.kind === 'ip' && c.regime === 'osn') c.regime = 'ip_pod';
  if (!c.employees) c.fsznQuarterly = false;
}

function viewTask(id) {
  const t = findTask(id);
  if (!t) { setView('Срок', '<div class="card pad muted">Задача не найдена (возможно, клиент удалён).</div>', { back: true }); return; }
  const td = today(), over = !t.done && t.due < td;
  const art = t.rule && t.rule.kb ? KB.find(a => a.id === t.rule.kb) : null;
  setView('Срок', `
    <div class="card pad">
      <h2 class="h2">${esc(t.title)}</h2>
      ${t.client ? `<div><b>${esc(t.client)}</b></div>` : ''}
      <div class="big ${over ? 'redt' : ''}">${fmtWd(t.due)} ${t.due.getFullYear()}</div>
      ${t.shifted ? `<div class="muted small">По закону ${fmt(t.raw)} (${WD[t.raw.getDay()]}) — нерабочий день, срок перенесён.</div>` : ''}
      ${over ? `<div class="redt">Просрочено на ${diffDays(t.due, td)} дн.</div>` : ''}
      ${t.rule ? `<p>${esc(t.rule.note)}</p>` : ''}
      ${t.done ? `<div class="greent">Выполнено${t.doneAt ? ' ' + fmt(parse(t.doneAt)) : ''}</div>` : ''}
      <button class="btn ${t.done ? '' : 'primary'} wide" data-act="toggle" data-id="${esc(t.id)}">${t.done ? 'Снять отметку' : 'Отметить выполненным'}</button>
      <label class="lbl">Заметка<textarea id="tnote" rows="3" placeholder="номер квитанции, сумма, кто подписал...">${esc((S.status[t.id] || {}).note || '')}</textarea></label>
      <button class="btn small" data-act="save-note" data-id="${esc(t.id)}">Сохранить заметку</button>
      ${art ? `<button class="btn wide" data-act="open-art" data-id="${art.id}">Подсказка: ${esc(art.title)}</button>` : ''}
      ${t.manual ? `<button class="btn wide" data-act="edit-manual" data-id="${esc(t.manual.id)}">Изменить задачу</button>` : ''}
    </div>
  `, { back: true });
}

function viewManualEdit(id) {
  const m = id === 'new' ? { id: '', title: '', date: ymd(today()), clientId: ui.filterClient || '', repeat: 'none', note: '' } : S.manual.find(x => x.id === id);
  if (!m) return go('home');
  const opt = (v, cur, t) => `<option value="${esc(v)}" ${v === cur ? 'selected' : ''}>${esc(t)}</option>`;
  setView(id === 'new' ? 'Новая задача' : 'Задача', `
    <form id="mf" class="card pad form" onsubmit="return false">
      <label>Что сделать<input name="title" value="${esc(m.title)}" placeholder="Например: сверка с поставщиком"></label>
      <label>Дата<input type="date" name="date" value="${esc(m.date)}"></label>
      <label>Клиент<select name="clientId">${opt('', m.clientId, 'Без клиента')}${S.clients.filter(c => !c.archived).map(c => opt(c.id, m.clientId, c.name)).join('')}</select></label>
      <label>Повторять<select name="repeat">${opt('none', m.repeat, 'Не повторять')}${opt('month', m.repeat, 'Каждый месяц')}${opt('quarter', m.repeat, 'Каждый квартал')}${opt('year', m.repeat, 'Каждый год')}</select></label>
      <label>Заметка<textarea name="note" rows="2">${esc(m.note)}</textarea></label>
    </form>
    <button class="btn primary wide" data-act="save-manual" data-id="${esc(id)}">Сохранить</button>
    ${id !== 'new' ? `<button class="btn danger wide" data-act="delete-manual" data-id="${esc(id)}">Удалить задачу</button>` : ''}
  `, { back: true });
}

// ---------- справочник и поиск ----------
function stripTags(h) { return h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '); }
function viewKb() {
  const q = ui.kbQuery.trim().toLowerCase();
  let arts = KB, extra = '';
  if (q) {
    const words = q.split(/\s+/).filter(Boolean);
    const score = a => { const t = (a.title + ' ' + a.tags).toLowerCase(), b = stripTags(a.html).toLowerCase(); return words.reduce((s, w) => s + (t.includes(w) ? 3 : 0) + (b.includes(w) ? 1 : 0), 0); };
    arts = KB.map(a => [a, score(a)]).filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]).map(x => x[0]);
    const td = today();
    const tasks = allTasks(addDays(td, -60), addDays(td, 120)).filter(t => words.every(w => (t.title + ' ' + t.client).toLowerCase().includes(w))).slice(0, 12);
    if (tasks.length) extra += section('Сроки', tasks);
  }
  const sites = LAW_SITES.map(s => `<button class="btn small" data-act="law" data-id="${s.site}">${esc(s.name.split(' — ')[0])}</button>`).join('');
  setView('Справочник', `
    <div class="searchbox">${icon('search', 'dim')}<input id="kbq" type="search" placeholder="Поиск: НДС, ПУ-3, пеня, перенос..." value="${esc(ui.kbQuery)}" data-input="kbq"></div>
    <div class="card pad"><div class="small muted">Искать в законодательстве${q ? ` «${esc(ui.kbQuery)}»` : ''}:</div><div class="btns wrap">${sites}</div></div>
    ${extra}
    <h3 class="sec">${q ? 'Статьи справочника' : 'Подсказки и инструкции'}</h3>
    <div class="card list">${arts.map(a => `<div class="row" data-act="open-art" data-id="${a.id}"><div class="rb"><div class="tt">${esc(a.title)}</div></div>${icon('chev', 'dim')}</div>`).join('') || '<div class="pad muted">В справочнике ничего не нашлось — попробуйте поиск по сайтам выше.</div>'}</div>
    <p class="muted small">Сроки и правила сверены на ${RULES_CHECKED}. Перед подачей важных документов проверяйте актуальную редакцию законодательства.</p>
  `);
}
function viewArticle(id) {
  const a = KB.find(x => x.id === id);
  if (!a) return go('kb');
  setView(a.title, `<div class="card pad art">${a.html}</div>
    <div class="card pad"><div class="small muted">Найти по теме «${esc(a.title)}»:</div><div class="btns wrap">${LAW_SITES.slice(0, 3).map(s => `<button class="btn small" data-act="law-topic" data-id="${s.site}" data-q="${esc(a.title)}">${esc(s.name.split(' — ')[0])}</button>`).join('')}</div></div>`, { back: true });
  const v = $('#kb-values');
  if (v) v.innerHTML = '<table class="tbl">' + Object.keys(VALUES_DEFAULT).map(k => `<tr><td>${esc(VALUES_DEFAULT[k].label)}</td><td><b>${esc(S.values[k])}</b></td></tr><tr><td colspan="2" class="muted small">${esc(VALUES_DEFAULT[k].src)}</td></tr>`).join('') + '</table>';
}
function openLaw(site, q) {
  const query = (q || '').trim();
  const url = query ? 'https://www.google.com/search?q=' + encodeURIComponent('site:' + site + ' ' + query) : 'https://' + site;
  openUrl(url);
}
function openUrl(url) { if (HAS_ANDROID) Android.openUrl(url); else window.open(url, '_blank'); }

// ---------- ещё ----------
function viewMore() {
  const item = (act, t, s) => `<div class="row" data-act="${act}"><div class="rb"><div class="tt">${t}</div><div class="ts">${s}</div></div>${icon('chev', 'dim')}</div>`;
  setView('Ещё', `<div class="card list">
    ${item('go-reports', 'Отчёты', 'Что сдано и что нет за период — файл на почту')}
    ${item('go-calc', 'Калькуляторы', 'НДС, пеня, рабочие дни')}
    ${item('new-manual', 'Добавить свою задачу', 'Разовую или повторяющуюся')}
    ${item('go-settings', 'Настройки', 'Напоминания, e-mail, величины, переносы, резервная копия')}
  </div>
  <p class="muted small center">Помощник бухгалтера РБ, версия ${APP_VERSION}. Данные хранятся только на этом телефоне.</p>`);
}

function periodRange(code) {
  const t = today(), y = t.getFullYear(), m = t.getMonth() + 1, q = Math.ceil(m / 3);
  switch (code) {
    case 'curm': return [D(y, m, 1), D(y, m, lastDay(y, m)), MONTHS[m - 1] + ' ' + y];
    case 'prevm': { const p = new Date(y, m - 2, 1, 12); const Y = p.getFullYear(), M = p.getMonth() + 1; return [D(Y, M, 1), D(Y, M, lastDay(Y, M)), MONTHS[M - 1] + ' ' + Y]; }
    case 'curq': return [D(y, q * 3 - 2, 1), D(y, q * 3, lastDay(y, q * 3)), ROMAN[q - 1] + ' квартал ' + y];
    case 'prevq': { const Q = q === 1 ? 4 : q - 1, Y = q === 1 ? y - 1 : y; return [D(Y, Q * 3 - 2, 1), D(Y, Q * 3, lastDay(Y, Q * 3)), ROMAN[Q - 1] + ' квартал ' + Y]; }
    case 'year': return [D(y, 1, 1), D(y, 12, 31), y + ' год'];
    case 'next30': return [t, addDays(t, 30), 'ближайшие 30 дней'];
    default: {
      const a = ui.repFrom ? parse(ui.repFrom) : D(y, m, 1), b = ui.repTo ? parse(ui.repTo) : t;
      return [a, b, fmt(a) + ' – ' + fmt(b)];
    }
  }
}
function reportData() {
  const [a, b, label] = periodRange(ui.repPeriod);
  let tasks = allTasks(a, b);
  if (ui.repClient) tasks = tasks.filter(t => t.clientId === ui.repClient);
  const td = today();
  const st = t => t.done ? 'выполнено' : t.due < td ? 'просрочено' : 'не выполнено';
  return { a, b, label, tasks, st };
}
function viewReports() {
  const r = reportData();
  const per = [['prevq', 'Прошлый квартал'], ['curq', 'Текущий квартал'], ['prevm', 'Прошлый месяц'], ['curm', 'Текущий месяц'], ['next30', 'Ближайшие 30 дней'], ['year', 'Текущий год'], ['custom', 'Свои даты']];
  const done = r.tasks.filter(t => t.done).length, over = r.tasks.filter(t => r.st(t) === 'просрочено').length;
  const byClient = {};
  r.tasks.forEach(t => { const k = t.client || 'Без клиента'; (byClient[k] = byClient[k] || []).push(t); });
  setView('Отчёты', `
    <div class="card pad form">
      <label>Период<select data-change="rep-period">${per.map(p => `<option value="${p[0]}" ${ui.repPeriod === p[0] ? 'selected' : ''}>${p[1]}</option>`).join('')}</select></label>
      ${ui.repPeriod === 'custom' ? `<div class="two"><label>С<input type="date" data-change="rep-from" value="${esc(ui.repFrom || ymd(r.a))}"></label><label>По<input type="date" data-change="rep-to" value="${esc(ui.repTo || ymd(r.b))}"></label></div>` : ''}
      <label>Клиент<select data-change="rep-client"><option value="">Все клиенты</option>${S.clients.map(c => `<option value="${esc(c.id)}" ${ui.repClient === c.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select></label>
      <label>Отправить на e-mail<input type="email" id="repmail" value="${esc(S.settings.reportEmail)}" placeholder="адрес получателя"></label>
      <div class="btns"><button class="btn primary" data-act="rep-send" data-id="html">Отправить отчёт</button><button class="btn" data-act="rep-send" data-id="csv">Таблица для Excel</button></div>
    </div>
    <h3 class="sec">${esc(r.label)}: ${r.tasks.length} сроков, выполнено ${done}${over ? `, просрочено ${over}` : ''}</h3>
    ${Object.keys(byClient).sort((x, y) => x.localeCompare(y, 'ru')).map(k => `<div class="card pad"><b>${esc(k)}</b>
      ${byClient[k].map(t => `<div class="rl ${r.st(t) === 'просрочено' ? 'redt' : t.done ? 'greent' : ''}">${fmtShort(t.due)} ${esc(t.title)} — ${r.st(t)}${t.done && t.doneAt ? ' ' + fmtShort(parse(t.doneAt)) : ''}</div>`).join('')}</div>`).join('') || '<div class="card pad muted">За период сроков нет.</div>'}
  `, { back: true });
}
function reportHtml(r) {
  const byClient = {};
  r.tasks.forEach(t => { const k = t.client || 'Без клиента'; (byClient[k] = byClient[k] || []).push(t); });
  const color = s => s === 'просрочено' ? '#c0392b' : s === 'выполнено' ? '#1e8449' : '#555';
  let body = '';
  Object.keys(byClient).sort((x, y) => x.localeCompare(y, 'ru')).forEach(k => {
    const list = byClient[k], d = list.filter(t => t.done).length;
    const c = S.clients.find(x => x.name === k);
    body += `<h2>${esc(k)}${c && c.unp ? ' <small>УНП ' + esc(c.unp) + '</small>' : ''}</h2><p>Выполнено ${d} из ${list.length}</p>
    <table><tr><th>Срок</th><th>Обязанность</th><th>Статус</th><th>Отметка</th><th>Заметка</th></tr>
    ${list.map(t => `<tr><td>${fmt(t.due)}</td><td>${esc(t.title)}</td><td style="color:${color(r.st(t))}">${r.st(t)}</td><td>${t.done && t.doneAt ? fmt(parse(t.doneAt)) : ''}</td><td>${esc(t.note)}</td></tr>`).join('')}</table>`;
  });
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Отчёт ${esc(r.label)}</title>
<style>body{font-family:Arial,sans-serif;margin:20px;color:#222}h1{font-size:20px}h2{font-size:17px;margin-top:24px}small{color:#666;font-weight:normal}table{border-collapse:collapse;width:100%;font-size:14px}th,td{border:1px solid #ccc;padding:5px 7px;text-align:left;vertical-align:top}th{background:#eef2f7}</style></head>
<body><h1>Отчёт о выполнении сроков: ${esc(r.label)}</h1><p>Сформирован ${fmt(today())}${S.settings.name ? ', бухгалтер: ' + esc(S.settings.name) : ''}. Всего сроков: ${r.tasks.length}, выполнено: ${r.tasks.filter(t => t.done).length}, просрочено: ${r.tasks.filter(t => r.st(t) === 'просрочено').length}.</p>${body || '<p>За период сроков нет.</p>'}</body></html>`;
}
function reportCsv(r) {
  const q = s => '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"';
  const rows = [['Клиент', 'УНП', 'Срок', 'Обязанность', 'Статус', 'Отметка', 'Заметка']];
  r.tasks.forEach(t => { const c = S.clients.find(x => x.id === t.clientId); rows.push([t.client, c ? c.unp : '', fmt(t.due), t.title, r.st(t), t.done && t.doneAt ? fmt(parse(t.doneAt)) : '', t.note]); });
  return '﻿' + rows.map(x => x.map(q).join(';')).join('\r\n');
}
function shareFile(name, mime, content, to, subject, body) {
  if (HAS_ANDROID) { Android.shareFile(name, mime, content, to || '', subject || '', body || ''); return; }
  const blob = new Blob([content], { type: mime + ';charset=utf-8' });
  try {
    const file = new File([blob], name, { type: mime });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: subject || name }).catch(e => { if (e && e.name !== 'AbortError') downloadBlob(blob, name); });
      return;
    }
  } catch (e) { }
  downloadBlob(blob, name);
}
function downloadBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); a.remove();
  toast('Файл сохранён: ' + name);
}
function sendEmail(to, subject, body) {
  if (HAS_ANDROID) Android.sendEmail(to || '', subject, body);
  else location.href = 'mailto:' + encodeURIComponent(to || '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

function viewCalc() {
  const tabs = [['vat', 'НДС'], ['peni', 'Пеня'], ['wd', 'Рабочие дни']];
  let body = '';
  if (ui.calcTab === 'vat') body = `<div class="card pad form">
      <label>Сумма, руб.<input id="v_sum" type="number" inputmode="decimal" step="0.01" data-input="calc"></label>
      <label>Ставка<select id="v_rate" data-change="calc"><option value="20">20%</option><option value="10">10%</option><option value="25">25%</option></select></label>
      <label>Сумма<select id="v_mode" data-change="calc"><option value="in">уже включает НДС (выделить)</option><option value="out">без НДС (начислить сверху)</option></select></label>
      <div id="v_res" class="res"></div></div>`;
  else if (ui.calcTab === 'peni') body = `<div class="card pad form">
      <label>Сумма недоимки, руб.<input id="p_sum" type="number" inputmode="decimal" step="0.01" data-input="calc"></label>
      <div class="two"><label>Срок уплаты<input id="p_due" type="date" data-change="calc"></label><label>Дата уплаты<input id="p_pay" type="date" value="${ymd(today())}" data-change="calc"></label></div>
      <label>Ставка рефинансирования, %<input id="p_refi" type="number" step="0.01" value="${esc(S.values.refi)}" data-input="calc"></label>
      <div id="p_res" class="res"></div>
      <p class="muted small">Пеня = сумма × ставка / 360 × дни. Дни считаются со дня, следующего за сроком, по день уплаты включительно — так считают большинство бухгалтерских программ; при споре сверяйтесь с инспекцией.</p></div>`;
  else body = `<div class="card pad form">
      <div class="two"><label>С<input id="w_a" type="date" value="${ymd(D(today().getFullYear(), today().getMonth() + 1, 1))}" data-change="calc"></label><label>По<input id="w_b" type="date" value="${ymd(D(today().getFullYear(), today().getMonth() + 1, lastDay(today().getFullYear(), today().getMonth() + 1)))}" data-change="calc"></label></div>
      <div id="w_res" class="res"></div>
      <hr><label>Дата<input id="w_d" type="date" value="${ymd(today())}" data-change="calc"></label>
      <label>Плюс рабочих дней<input id="w_n" type="number" value="10" data-input="calc"></label>
      <div id="w_res2" class="res"></div></div>`;
  setView('Калькуляторы', `<div class="seg">${tabs.map(t => `<button class="${ui.calcTab === t[0] ? 'on' : ''}" data-act="calc-tab" data-id="${t[0]}">${t[1]}</button>`).join('')}</div>${body}`, { back: true });
  calcUpdate();
}
const money = n => (Math.round(n * 100) / 100).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function calcUpdate() {
  const v = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  if (ui.calcTab === 'vat') {
    const s = parseFloat(v('v_sum').replace(',', '.')), r = Number(v('v_rate')), el = $('#v_res');
    if (!el) return;
    if (!(s > 0)) { el.innerHTML = '<span class="muted">Введите сумму</span>'; return; }
    if (v('v_mode') === 'in') { const n = s * r / (100 + r); el.innerHTML = `НДС: <b>${money(n)}</b><br>Без НДС: <b>${money(s - n)}</b>`; }
    else { const n = s * r / 100; el.innerHTML = `НДС: <b>${money(n)}</b><br>С НДС: <b>${money(s + n)}</b>`; }
  } else if (ui.calcTab === 'peni') {
    const s = parseFloat(v('p_sum').replace(',', '.')), r = parseFloat(v('p_refi').replace(',', '.')), el = $('#p_res');
    if (!el) return;
    if (!(s > 0) || !v('p_due') || !v('p_pay')) { el.innerHTML = '<span class="muted">Введите сумму и даты</span>'; return; }
    const days = diffDays(parse(v('p_due')), parse(v('p_pay')));
    if (days <= 0) { el.innerHTML = 'Просрочки нет'; return; }
    el.innerHTML = `Дней просрочки: <b>${days}</b><br>Пеня: <b>${money(s * r / 100 / 360 * days)}</b> руб.`;
  } else {
    const el = $('#w_res'), el2 = $('#w_res2');
    if (el && v('w_a') && v('w_b')) {
      const a = parse(v('w_a')), b = parse(v('w_b'));
      el.innerHTML = b < a ? 'Вторая дата раньше первой' : `Рабочих дней: <b>${countWorkDays(a, b)}</b>, календарных: <b>${diffDays(a, b) + 1}</b>`;
    }
    if (el2 && v('w_d')) {
      const n = parseInt(v('w_n'), 10) || 0, d = addWorkDays(parse(v('w_d')), n);
      el2.innerHTML = `Получится: <b>${fmtWd(d)} ${d.getFullYear()}</b>`;
    }
  }
}

function viewSettings() {
  const s = S.settings;
  const dayChk = n => `<label class="inl"><input type="checkbox" name="days" value="${n}" ${(s.days || []).includes(n) ? 'checked' : ''}> ${n === 0 ? 'в день срока' : n === 1 ? 'за сутки' : 'за ' + n + ' дн.'}</label>`;
  setView('Настройки', `
    <form id="sf" class="card pad form" onsubmit="return false">
      <label>Ваше имя (для писем и отчётов)<input name="name" value="${esc(s.name)}"></label>
      <label>E-mail для отчётов по умолчанию<input type="email" name="reportEmail" value="${esc(s.reportEmail)}"></label>
      <label>Во сколько присылать уведомления<select name="hour">${[7, 8, 9, 10, 11, 12, 14, 16, 18, 20].map(h => `<option value="${h}" ${Number(s.hour) === h ? 'selected' : ''}>${pad(h)}:00</option>`).join('')}</select></label>
      <div class="lbl">${HAS_ANDROID ? 'Уведомление в шторке по каждому сроку' : 'Напоминания по каждому сроку'}</div><div class="inlwrap">${[10, 7, 5, 3, 2, 1, 0].map(dayChk).join('')}</div>
      <small class="muted">${HAS_ANDROID ? 'По каждому налогу и отчёту приходит отдельное уведомление, нажатие открывает этот срок. Просроченные — одним общим уведомлением каждый день, пока не отмечены «сдано».' : 'На iPhone напоминания приходят из приложения «Календарь»: сохраните настройки и нажмите ниже «Сроки в Календарь».'}</small>
      <h4>Справочные величины</h4>
      ${Object.keys(VALUES_DEFAULT).map(k => `<label>${esc(VALUES_DEFAULT[k].label)}<input type="number" step="0.01" name="v_${k}" value="${esc(S.values[k])}"><small class="muted">${esc(VALUES_DEFAULT[k].src)}</small></label>`).join('')}
      <h4>Свои переносы рабочих дней</h4>
      <label>Дополнительные выходные (даты через запятую, ГГГГ-ММ-ДД)<input name="extraOff" value="${esc((s.extraOff || []).join(', '))}" placeholder="2026-12-31"></label>
      <label>Дополнительные рабочие дни<input name="extraWork" value="${esc((s.extraWork || []).join(', '))}"></label>
    </form>
    <button class="btn primary wide" data-act="save-settings">Сохранить настройки</button>
    ${HAS_ANDROID ? '<button class="btn wide" data-act="test-notif">Проверить уведомление</button>' : `
    <h3 class="sec">Напоминания в Календаре</h3>
    <div class="card pad"><p class="small">Все несданные сроки на год вперёд попадут в «Календарь» телефона с напоминаниями в выбранные выше дни, в ${pad(Number(s.hour) || 9)}:00. Откроется меню «Поделиться»: выберите «Сохранить в Файлы», потом откройте этот файл в «Файлах» и нажмите «Добавить все». Если меню не появилось, телефон сам предложит добавить события в Календарь. Удобно добавить в отдельный календарь «Бухпомощник»: перед повторной загрузкой (новые клиенты, сдал отчёт) удалите этот календарь в приложении «Календарь», чтобы сроки не задвоились.</p>
      <div class="btns"><button class="btn primary" data-act="ics">Сроки в Календарь</button></div></div>`}
    <h3 class="sec">Резервная копия</h3>
    <div class="card pad"><p class="small">Все данные хранятся только в телефоне. Сохраните копию, например, отправив её себе на почту, — из неё можно восстановить всё на новом телефоне.</p>
      <div class="btns"><button class="btn" data-act="backup">Сохранить копию</button><label class="btn filebtn">Восстановить из файла<input type="file" accept=".json,application/json,text/plain,*/*" data-change="restore"></label></div></div>
    <p class="muted small center">Версия ${APP_VERSION}. Правила сверены на ${RULES_CHECKED}.</p>
  `, { back: true });
}
const parseDates = s => String(s || '').split(/[\s,;]+/).map(x => x.trim()).filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x));

// ---------- демо ----------
function addDemo() {
  const t = today(), since = ymd(D(t.getFullYear(), t.getMonth() + 1, 1));
  S.clients.push(
    Object.assign(emptyClient(), { id: uid(), name: 'ООО «Пример»', unp: '590000000', regime: 'osn', vat: 'month', employees: true, realty: true, since, contact: 'Директор, +375 29 000-00-00' }),
    Object.assign(emptyClient(), { id: uid(), name: 'ЧУП «Сервис-Демо»', unp: '591111111', regime: 'usn', vat: 'none', employees: true, fsznQuarterly: true, since }),
    Object.assign(emptyClient(), { id: uid(), name: 'ИП Петров П.П.', kind: 'ip', unp: '592222222', regime: 'ip_ed', vat: 'none', employees: false, since }),
  );
  // прошедшие сроки примера отмечаем выполненными, кроме одного — чтобы было видно, как выглядит просрочка
  const past = allTasks(D(t.getFullYear(), t.getMonth() + 1, 1), addDays(t, -1));
  past.forEach((x, i) => { if (i !== past.length - 1) S.status[x.id] = { done: true, at: x.dueS }; });
  save();
}

// ---------- действия ----------
const ACT = {
  'toggle': el => {
    const id = el.dataset.id, st = S.status[id] || {};
    if (st.done) { delete st.done; delete st.at; } else { st.done = true; st.at = ymd(today()); }
    if (!st.done && !st.note) delete S.status[id]; else S.status[id] = st;
    save(); render(); toast(st.done ? 'Отмечено как выполненное' : 'Отметка снята');
  },
  'open-task': el => go('task/' + encodeURIComponent(el.dataset.id)),
  'save-note': el => {
    const id = el.dataset.id, st = S.status[id] || {}; st.note = $('#tnote').value.trim();
    if (!st.done && !st.note) delete S.status[id]; else S.status[id] = st;
    save(); toast('Заметка сохранена');
  },
  'add-tax': el => { ui.clientDraft = null; go('cedit/' + encodeURIComponent(el.dataset.id)); setTimeout(() => { const x = $('#cust'); if (x) x.scrollIntoView(); const i = $('#cu_t'); if (i) i.focus(); }, 60); },
  'new-client': () => { ui.clientDraft = null; go('cedit/new'); },
  'hide-install': () => { S.settings.hideInstall = true; save(); render(); },
  'ics': () => exportIcs(),
  'demo': () => { addDemo(); render(); toast('Добавлены три примера. Их можно удалить в «Клиентах».'); },
  'open-client': el => go('client/' + encodeURIComponent(el.dataset.id)),
  'edit-client': el => { ui.clientDraft = null; go('cedit/' + encodeURIComponent(el.dataset.id)); },
  'save-client': () => {
    readDraft();
    const c = ui.clientDraft;
    if (!c.name) { toast('Укажите название'); $('#cf [name=name]').focus(); return; }
    if (c.unp && !/^\d{9}$/.test(c.unp)) { toast('УНП — 9 цифр'); return; }
    const isNew = !c.id; if (isNew) c.id = uid();
    const clean = Object.assign({}, c); delete clean._for;
    const i = S.clients.findIndex(x => x.id === c.id);
    if (i >= 0) S.clients[i] = clean; else S.clients.push(clean);
    ui.clientDraft = null; save();
    history.replaceState(null, '', '#/client/' + encodeURIComponent(c.id)); render();
    toast(isNew ? 'Клиент добавлен, сроки составлены' : 'Сохранено');
  },
  'add-custom': () => {
    readDraft();
    const t = $('#cu_t').value.trim(); if (!t) { toast('Введите название налога или отчёта'); $('#cu_t').focus(); return; }
    const f = $('#cu_f').value, dv = $('#cu_d').value, d = dv === 'last' ? 'last' : Math.max(1, Math.min(30, parseInt(dv, 10) || 20));
    const m = Math.max(1, Math.min(12, parseInt($('#cu_m').value, 10) || 1));
    (ui.clientDraft.custom = ui.clientDraft.custom || []).push({ id: uid(), title: t, type: $('#cu_y').value, freq: f, day: d, month: m,
      offset: Number($('#cu_o').value), yOff: Number($('#cu_yo').value), shift: $('#cu_s').value });
    const saved = S.clients.find(x => x.id === ui.clientDraft.id);
    if (saved) { saved.custom = JSON.parse(JSON.stringify(ui.clientDraft.custom)); save(); }
    viewClientEdit(ui.clientDraft._for);
    toast(saved ? 'Добавлено в обязанности клиента' : 'Добавлено. Нажмите «Сохранить», чтобы создать клиента');
    const x = $('#cust'); if (x) x.scrollIntoView();
  },
  'del-custom': el => {
    readDraft(); ui.clientDraft.custom = (ui.clientDraft.custom || []).filter(r => r.id !== el.dataset.id);
    const saved = S.clients.find(x => x.id === ui.clientDraft.id);
    if (saved) { saved.custom = JSON.parse(JSON.stringify(ui.clientDraft.custom)); save(); }
    viewClientEdit(ui.clientDraft._for);
  },
  'archive-client': el => { const c = S.clients.find(x => x.id === el.dataset.id); c.archived = !c.archived; save(); render(); },
  'delete-client': el => {
    const c = S.clients.find(x => x.id === el.dataset.id);
    if (!confirm('Удалить «' + c.name + '» вместе с отметками? Это нельзя отменить.')) return;
    S.clients = S.clients.filter(x => x.id !== c.id);
    Object.keys(S.status).forEach(k => { if (k.startsWith(c.id + '|')) delete S.status[k]; });
    save(); go('clients');
  },
  'mail-client': el => {
    const c = S.clients.find(x => x.id === el.dataset.id), td = today();
    const list = allTasks(td, addDays(td, 30)).filter(t => t.clientId === c.id && !t.done);
    const prev = new Date(td.getFullYear(), td.getMonth() - 1, 1, 12);
    let docDue = addWorkDays(D(td.getFullYear(), td.getMonth() + 1, 1), 4);
    if (docDue < td) docDue = addWorkDays(td, 2);
    const body = `Добрый день!\n\nПрошу до ${fmt(docDue)} передать первичные документы за ${MONTHS[prev.getMonth()]} ${prev.getFullYear()}: выписки банка, накладные, акты, договоры, кассовые документы, табель.\n\n` +
      (list.length ? `Ближайшие сроки по ${c.name}:\n` + list.map(t => `- ${fmt(t.due)}: ${t.title}`).join('\n') + '\n\n' : '') +
      `С уважением${S.settings.name ? ',\n' + S.settings.name : ''}`;
    sendEmail(c.email, 'Документы и сроки — ' + c.name, body);
  },
  'report-client': el => { ui.repClient = el.dataset.id; go('reports'); },
  'new-manual': () => go('medit/new'),
  'edit-manual': el => go('medit/' + encodeURIComponent(el.dataset.id)),
  'save-manual': el => {
    const fd = new FormData($('#mf')), id = el.dataset.id;
    const m = { id: id === 'new' ? uid() : id, title: String(fd.get('title')).trim(), date: String(fd.get('date')), clientId: String(fd.get('clientId')), repeat: String(fd.get('repeat')), note: String(fd.get('note')).trim() };
    if (!m.title || !m.date) { toast('Заполните название и дату'); return; }
    const i = S.manual.findIndex(x => x.id === m.id);
    if (i >= 0) S.manual[i] = m; else S.manual.push(m);
    save(); history.back(); toast('Задача сохранена');
  },
  'delete-manual': el => {
    if (!confirm('Удалить задачу?')) return;
    S.manual = S.manual.filter(x => x.id !== el.dataset.id);
    Object.keys(S.status).forEach(k => { if (k.startsWith('m|' + el.dataset.id + '|')) delete S.status[k]; });
    save(); go('home');
  },
  'cal-prev': () => { ui.calM--; if (ui.calM < 1) { ui.calM = 12; ui.calY--; } ui.calSel = ''; viewCal(); },
  'cal-next': () => { ui.calM++; if (ui.calM > 12) { ui.calM = 1; ui.calY++; } ui.calSel = ''; viewCal(); },
  'cal-day': el => { ui.calSel = el.dataset.id; viewCal(); },
  'open-art': el => go('art/' + el.dataset.id),
  'law': el => openLaw(el.dataset.id, ui.kbQuery),
  'law-topic': el => openLaw(el.dataset.id, el.dataset.q),
  'go-reports': () => go('reports'), 'go-calc': () => go('calc'), 'go-settings': () => go('settings'),
  'rep-send': el => {
    const r = reportData(), to = ($('#repmail').value || '').trim();
    if (to && to !== S.settings.reportEmail) { S.settings.reportEmail = to; save(); }
    const safe = r.label.replace(/[^\wа-яА-ЯёЁ\- ]+/g, '').replace(/\s+/g, '_');
    const subj = 'Отчёт о сроках: ' + r.label + (ui.repClient ? ' — ' + clientName(ui.repClient) : '');
    const text = `${subj}\nВсего сроков: ${r.tasks.length}, выполнено: ${r.tasks.filter(t => t.done).length}, просрочено: ${r.tasks.filter(t => r.st(t) === 'просрочено').length}.\nПодробности во вложении.`;
    if (el.dataset.id === 'csv') shareFile('Сроки_' + safe + '.csv', 'text/csv', reportCsv(r), to, subj, text);
    else shareFile('Отчёт_' + safe + '.html', 'text/html', reportHtml(r), to, subj, text);
  },
  'calc-tab': el => { ui.calcTab = el.dataset.id; viewCalc(); },
  'save-settings': () => {
    const f = $('#sf'), fd = new FormData(f), s = S.settings;
    s.name = String(fd.get('name')).trim(); s.reportEmail = String(fd.get('reportEmail')).trim(); s.hour = Number(fd.get('hour'));
    s.days = fd.getAll('days').map(Number).sort((a, b) => b - a);
    s.extraOff = parseDates(fd.get('extraOff')); s.extraWork = parseDates(fd.get('extraWork'));
    Object.keys(VALUES_DEFAULT).forEach(k => { const v = parseFloat(String(fd.get('v_' + k)).replace(',', '.')); if (v > 0) S.values[k] = v; });
    save(); toast('Настройки сохранены');
    if (HAS_ANDROID && Android.askNotifications) Android.askNotifications();
  },
  'test-notif': () => { if (HAS_ANDROID) { Android.askNotifications(); Android.testNotification(); } },
  'backup': () => shareFile('Бухпомощник_копия_' + ymd(today()) + '.json', 'application/json', JSON.stringify(S, null, 1), S.settings.reportEmail, 'Резервная копия: Помощник бухгалтера', 'Резервная копия данных приложения от ' + fmt(today()) + '.'),
};
const CHANGE = {
  'filter-client': el => { ui.filterClient = el.value; render(); },
  'home-range': el => {
    S.settings.homeRange = el.value;
    if (el.value === 'custom' && !S.settings.homeFrom) { S.settings.homeFrom = ymd(today()); S.settings.homeTo = ymd(addDays(today(), 31)); }
    save(); render();
  },
  'home-from': el => { if (el.value) { S.settings.homeFrom = el.value; if ((S.settings.homeTo || '') < el.value) S.settings.homeTo = el.value; save(); render(); } },
  'home-to': el => { if (el.value) { S.settings.homeTo = el.value; if ((S.settings.homeFrom || '') > el.value) S.settings.homeFrom = el.value; save(); render(); } },
  'draft-rerender': () => { readDraft(); viewClientEdit(ui.clientDraft._for); },
  'custom-freq': el => {
    const y = el.value === 'year';
    $('#cu_mw').style.display = y ? '' : 'none';
    $('#cu_yw').style.display = y ? '' : 'none';
    $('#cu_ow').style.display = y ? 'none' : '';
  },
  'rep-period': el => { ui.repPeriod = el.value; viewReports(); },
  'rep-from': el => { ui.repFrom = el.value; viewReports(); },
  'rep-to': el => { ui.repTo = el.value; viewReports(); },
  'rep-client': el => { ui.repClient = el.value; viewReports(); },
  'calc': () => calcUpdate(),
  'restore': el => {
    const f = el.files && el.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const d = JSON.parse(rd.result);
        if (!d || !Array.isArray(d.clients)) throw new Error('bad');
        if (!confirm(`Восстановить копию? Клиентов в ней: ${d.clients.length}. Текущие данные будут заменены.`)) return;
        localStorage.setItem(LS_KEY, JSON.stringify(d)); S = load(); save(); go('home'); toast('Данные восстановлены');
      } catch (e) { toast('Это не файл резервной копии'); }
    };
    rd.readAsText(f);
  },
};
const INPUT = {
  'kbq': el => { ui.kbQuery = el.value; clearTimeout(INPUT._t); INPUT._t = setTimeout(() => { const pos = el.selectionStart; viewKb(); const n = $('#kbq'); n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) { } }, 350); },
  'calc': () => calcUpdate(),
};

// ---------- маршруты ----------
const ROUTES = { home: viewHome, cal: viewCal, clients: viewClients, client: viewClient, cedit: viewClientEdit, kb: viewKb, art: viewArticle,
  more: viewMore, reports: viewReports, calc: viewCalc, settings: viewSettings, task: viewTask, medit: viewManualEdit };
function render() {
  const h = location.hash.replace(/^#\/?/, '') || 'home';
  const i = h.indexOf('/'), name = i < 0 ? h : h.slice(0, i), arg = i < 0 ? '' : decodeURIComponent(h.slice(i + 1));
  (ROUTES[name] || viewHome)(arg);
  setTab(name);
}
let lastRoute = '';
window.addEventListener('hashchange', () => { render(); if (location.hash !== lastRoute) window.scrollTo(0, 0); lastRoute = location.hash; });
document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-act]');
  if (el && el.dataset.act && ACT[el.dataset.act]) { ev.preventDefault(); ACT[el.dataset.act](el, ev); return; }
  const tb = ev.target.closest('#tabs button');
  if (tb) go(tb.dataset.tab);
});
document.addEventListener('change', ev => { const el = ev.target.closest('[data-change]'); if (el && CHANGE[el.dataset.change]) CHANGE[el.dataset.change](el, ev); });
document.addEventListener('input', ev => { const el = ev.target.closest('[data-input]'); if (el && INPUT[el.dataset.input]) INPUT[el.dataset.input](el, ev); });
$('#back').addEventListener('click', () => history.length > 1 ? history.back() : go('home'));
// вызывается из Android при возврате в приложение: обновляем списки (могла смениться дата), формы не трогаем
window.appResume = () => {
  const r = (location.hash.replace(/^#\/?/, '') || 'home').split('/')[0];
  if (['home', 'cal', 'clients', 'client'].includes(r)) render();
  syncReminders();
};
rebuildCalendarSets();
render();
syncReminders();
if (!HAS_ANDROID && location.protocol === 'https:' && 'serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => { });
if (!HAS_ANDROID && navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => { });
// iPhone: при возврате в приложение со значка обновляем списки (могла смениться дата)
document.addEventListener('visibilitychange', () => { if (!document.hidden && !HAS_ANDROID) window.appResume(); });
