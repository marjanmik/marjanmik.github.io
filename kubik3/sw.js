// Кубик: работа без интернета. Версия кэша меняется при каждом выпуске.
const CACHE = 'kubik-0.12.0';
// кэш 'kubik-bank' (обновлённая база вопросов) не трогаем: его ведёт сама игра
const FILES = ['./', 'index.html', 'style.css?v=0.12.0', 'game.js?v=0.12.0', 'ru.json?v=0.12.0', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== 'kubik-bank').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  if (u.searchParams.has('fresh')) return; // «Обновить вопросы»: прямо в сеть, мимо кэша
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); }
    return r;
  }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});
