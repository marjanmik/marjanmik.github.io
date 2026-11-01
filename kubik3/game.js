var et=0,$6=1,tt=2;var l7=1,Ct=2,c3=3,M0=0,Y2=1,O5=2,E5=0,p3=1,Y6=2,Q6=3,K6=4,rt=5;var y0=100,it=101,Ht=102,Vt=103,nt=104,Lt=200,at=201,ot=202,st=203,J6=204,j6=205,Mt=206,lt=207,dt=208,ct=209,pt=210,ut=211,At=212,mt=213,ht=214,L4=0,a4=1,o4=2,e3=3,s4=4,M4=5,l4=6,d4=7,e8=0,ft=1,xt=2,f5=0,t8=1,C8=2,r8=3,i8=4,H8=5,V8=6,n8=7;var L8=300,l0=301,b0=302,X4=303,q4=304,d7=306,c4=1e3,b5=1001,p4=1002,b2=1003,vt=1004;var c7=1005;var w2=1006,$4=1007;var d0=1008;var j2=1009,a8=1010,o8=1011,u3=1012,Y4=1013,x5=1014,v5=1015,S5=1016,Q4=1017,K4=1018,A3=1020,s8=35902,M8=35899,l8=1021,d8=1022,s5=1023,T5=1026,c0=1027,c8=1028,J4=1029,p0=1030,j4=1031;var e9=1033,p7=33776,u7=33777,A7=33778,m7=33779,t9=35840,C9=35841,r9=35842,i9=35843,H9=36196,V9=37492,n9=37496,L9=37488,a9=37489,h7=37490,o9=37491,s9=37808,M9=37809,l9=37810,d9=37811,c9=37812,p9=37813,u9=37814,A9=37815,m9=37816,h9=37817,f9=37818,x9=37819,v9=37820,S9=37821,g9=36492,Z9=36494,_9=36495,y9=36283,b9=36284,f7=36285,T9=36286;var D3=2300,u4=2301,V4=2302,I6=2303,F6=2400,D6=2401,k6=2402;var St=3200;var w9=0,gt=1,G5="",I2="srgb",k3="srgb-linear",N3="linear",t2="srgb";var n4=7680;var Zt=519,_t=512,yt=513,bt=514,O9=515,Tt=516,wt=517,E9=518,Ot=519,Et=35044;var p8="300 es",A5=2e3,t3=2001;function ni(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Li(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function U3(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Rt(){let r=U3("canvas");return r.style.display="block",r}var ve={},C3=null;function u8(...r){let e="THREE."+r.shift();C3?C3("log",e,...r):console.log(e,...r)}function Pt(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function O1(...r){r=Pt(r);let e="THREE."+r.shift();if(C3)C3("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function R1(...r){r=Pt(r);let e="THREE."+r.shift();if(C3)C3("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Z0(...r){let e=r.join(" ");e in ve||(ve[e]=!0,O1(...r))}function Bt(r,e,t){return new Promise(function(C,i){function H(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(H,t);break;default:C()}}setTimeout(H,t)})}var It={[L4]:a4,[o4]:l4,[s4]:d4,[e3]:M4,[a4]:L4,[l4]:o4,[d4]:s4,[M4]:e3},w5=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let C=this._listeners;C[e]===void 0&&(C[e]=[]),C[e].indexOf(t)===-1&&C[e].push(t)}hasEventListener(e,t){let C=this._listeners;return C===void 0?!1:C[e]!==void 0&&C[e].indexOf(t)!==-1}removeEventListener(e,t){let C=this._listeners;if(C===void 0)return;let i=C[e];if(i!==void 0){let H=i.indexOf(t);H!==-1&&i.splice(H,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let C=t[e.type];if(C!==void 0){e.target=this;let i=C.slice(0);for(let H=0,V=i.length;H<V;H++)i[H].call(this,e);e.target=null}}},P2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Se=1234567,P3=Math.PI/180,r3=180/Math.PI;function T0(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,C=Math.random()*4294967295|0;return(P2[r&255]+P2[r>>8&255]+P2[r>>16&255]+P2[r>>24&255]+"-"+P2[e&255]+P2[e>>8&255]+"-"+P2[e>>16&15|64]+P2[e>>24&255]+"-"+P2[t&63|128]+P2[t>>8&255]+"-"+P2[t>>16&255]+P2[t>>24&255]+P2[C&255]+P2[C>>8&255]+P2[C>>16&255]+P2[C>>24&255]).toLowerCase()}function U1(r,e,t){return Math.max(e,Math.min(t,r))}function A8(r,e){return(r%e+e)%e}function ai(r,e,t,C,i){return C+(r-e)*(i-C)/(t-e)}function oi(r,e,t){return r!==e?(t-r)/(e-r):0}function B3(r,e,t){return(1-t)*r+t*e}function si(r,e,t,C){return B3(r,e,1-Math.exp(-t*C))}function Mi(r,e=1){return e-Math.abs(A8(r,e*2)-e)}function li(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function di(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ci(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pi(r,e){return r+Math.random()*(e-r)}function ui(r){return r*(.5-Math.random())}function Ai(r){r!==void 0&&(Se=r);let e=Se+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mi(r){return r*P3}function hi(r){return r*r3}function fi(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function xi(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vi(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Si(r,e,t,C,i){let H=Math.cos,V=Math.sin,n=H(t/2),a=V(t/2),L=H((e+C)/2),o=V((e+C)/2),M=H((e-C)/2),s=V((e-C)/2),l=H((C-e)/2),u=V((C-e)/2);switch(i){case"XYX":r.set(n*o,a*M,a*s,n*L);break;case"YZY":r.set(a*s,n*o,a*M,n*L);break;case"ZXZ":r.set(a*M,a*s,n*o,n*L);break;case"XZX":r.set(n*o,a*u,a*l,n*L);break;case"YXY":r.set(a*l,n*o,a*u,n*L);break;case"ZYZ":r.set(a*u,a*l,n*o,n*L);break;default:O1("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function K0(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function G2(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var m8={DEG2RAD:P3,RAD2DEG:r3,generateUUID:T0,clamp:U1,euclideanModulo:A8,mapLinear:ai,inverseLerp:oi,lerp:B3,damp:si,pingpong:Mi,smoothstep:li,smootherstep:di,randInt:ci,randFloat:pi,randFloatSpread:ui,seededRandom:Ai,degToRad:mi,radToDeg:hi,isPowerOfTwo:fi,ceilPowerOfTwo:xi,floorPowerOfTwo:vi,setQuaternionFromProperEuler:Si,normalize:G2,denormalize:K0},g8=class g8{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,C=this.y,i=e.elements;return this.x=i[0]*t+i[3]*C+i[6],this.y=i[1]*t+i[4]*C+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=U1(this.x,e.x,t.x),this.y=U1(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=U1(this.x,e,t),this.y=U1(this.y,e,t),this}clampLength(e,t){let C=this.length();return this.divideScalar(C||1).multiplyScalar(U1(C,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let C=this.dot(e)/t;return Math.acos(U1(C,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,C=this.y-e.y;return t*t+C*C}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,C){return this.x=e.x+(t.x-e.x)*C,this.y=e.y+(t.y-e.y)*C,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let C=Math.cos(t),i=Math.sin(t),H=this.x-e.x,V=this.y-e.y;return this.x=H*C-V*i+e.x,this.y=H*i+V*C+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};g8.prototype.isVector2=!0;var m1=g8,A2=class{constructor(e=0,t=0,C=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=C,this._w=i}static slerpFlat(e,t,C,i,H,V,n){let a=C[i+0],L=C[i+1],o=C[i+2],M=C[i+3],s=H[V+0],l=H[V+1],u=H[V+2],f=H[V+3];if(M!==f||a!==s||L!==l||o!==u){let c=a*s+L*l+o*u+M*f;c<0&&(s=-s,l=-l,u=-u,f=-f,c=-c);let d=1-n;if(c<.9995){let v=Math.acos(c),y=Math.sin(v);d=Math.sin(d*v)/y,n=Math.sin(n*v)/y,a=a*d+s*n,L=L*d+l*n,o=o*d+u*n,M=M*d+f*n}else{a=a*d+s*n,L=L*d+l*n,o=o*d+u*n,M=M*d+f*n;let v=1/Math.sqrt(a*a+L*L+o*o+M*M);a*=v,L*=v,o*=v,M*=v}}e[t]=a,e[t+1]=L,e[t+2]=o,e[t+3]=M}static multiplyQuaternionsFlat(e,t,C,i,H,V){let n=C[i],a=C[i+1],L=C[i+2],o=C[i+3],M=H[V],s=H[V+1],l=H[V+2],u=H[V+3];return e[t]=n*u+o*M+a*l-L*s,e[t+1]=a*u+o*s+L*M-n*l,e[t+2]=L*u+o*l+n*s-a*M,e[t+3]=o*u-n*M-a*s-L*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,C,i){return this._x=e,this._y=t,this._z=C,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let C=e._x,i=e._y,H=e._z,V=e._order,n=Math.cos,a=Math.sin,L=n(C/2),o=n(i/2),M=n(H/2),s=a(C/2),l=a(i/2),u=a(H/2);switch(V){case"XYZ":this._x=s*o*M+L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M-s*l*u;break;case"YXZ":this._x=s*o*M+L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M+s*l*u;break;case"ZXY":this._x=s*o*M-L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M-s*l*u;break;case"ZYX":this._x=s*o*M-L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M+s*l*u;break;case"YZX":this._x=s*o*M+L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M-s*l*u;break;case"XZY":this._x=s*o*M-L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M+s*l*u;break;default:O1("Quaternion: .setFromEuler() encountered an unknown order: "+V)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let C=t/2,i=Math.sin(C);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(C),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,C=t[0],i=t[4],H=t[8],V=t[1],n=t[5],a=t[9],L=t[2],o=t[6],M=t[10],s=C+n+M;if(s>0){let l=.5/Math.sqrt(s+1);this._w=.25/l,this._x=(o-a)*l,this._y=(H-L)*l,this._z=(V-i)*l}else if(C>n&&C>M){let l=2*Math.sqrt(1+C-n-M);this._w=(o-a)/l,this._x=.25*l,this._y=(i+V)/l,this._z=(H+L)/l}else if(n>M){let l=2*Math.sqrt(1+n-C-M);this._w=(H-L)/l,this._x=(i+V)/l,this._y=.25*l,this._z=(a+o)/l}else{let l=2*Math.sqrt(1+M-C-n);this._w=(V-i)/l,this._x=(H+L)/l,this._y=(a+o)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let C=e.dot(t)+1;return C<1e-8?(C=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=C):(this._x=0,this._y=-e.z,this._z=e.y,this._w=C)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=C),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(U1(this.dot(e),-1,1)))}rotateTowards(e,t){let C=this.angleTo(e);if(C===0)return this;let i=Math.min(1,t/C);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let C=e._x,i=e._y,H=e._z,V=e._w,n=t._x,a=t._y,L=t._z,o=t._w;return this._x=C*o+V*n+i*L-H*a,this._y=i*o+V*a+H*n-C*L,this._z=H*o+V*L+C*a-i*n,this._w=V*o-C*n-i*a-H*L,this._onChangeCallback(),this}slerp(e,t){let C=e._x,i=e._y,H=e._z,V=e._w,n=this.dot(e);n<0&&(C=-C,i=-i,H=-H,V=-V,n=-n);let a=1-t;if(n<.9995){let L=Math.acos(n),o=Math.sin(L);a=Math.sin(a*L)/o,t=Math.sin(t*L)/o,this._x=this._x*a+C*t,this._y=this._y*a+i*t,this._z=this._z*a+H*t,this._w=this._w*a+V*t,this._onChangeCallback()}else this._x=this._x*a+C*t,this._y=this._y*a+i*t,this._z=this._z*a+H*t,this._w=this._w*a+V*t,this.normalize();return this}slerpQuaternions(e,t,C){return this.copy(e).slerp(t,C)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),C=Math.random(),i=Math.sqrt(1-C),H=Math.sqrt(C);return this.set(i*Math.sin(e),i*Math.cos(e),H*Math.sin(t),H*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z8=class Z8{constructor(e=0,t=0,C=0){this.x=e,this.y=t,this.z=C}set(e,t,C){return C===void 0&&(C=this.z),this.x=e,this.y=t,this.z=C,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ge.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ge.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,C=this.y,i=this.z,H=e.elements;return this.x=H[0]*t+H[3]*C+H[6]*i,this.y=H[1]*t+H[4]*C+H[7]*i,this.z=H[2]*t+H[5]*C+H[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,C=this.y,i=this.z,H=e.elements,V=1/(H[3]*t+H[7]*C+H[11]*i+H[15]);return this.x=(H[0]*t+H[4]*C+H[8]*i+H[12])*V,this.y=(H[1]*t+H[5]*C+H[9]*i+H[13])*V,this.z=(H[2]*t+H[6]*C+H[10]*i+H[14])*V,this}applyQuaternion(e){let t=this.x,C=this.y,i=this.z,H=e.x,V=e.y,n=e.z,a=e.w,L=2*(V*i-n*C),o=2*(n*t-H*i),M=2*(H*C-V*t);return this.x=t+a*L+V*M-n*o,this.y=C+a*o+n*L-H*M,this.z=i+a*M+H*o-V*L,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,C=this.y,i=this.z,H=e.elements;return this.x=H[0]*t+H[4]*C+H[8]*i,this.y=H[1]*t+H[5]*C+H[9]*i,this.z=H[2]*t+H[6]*C+H[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=U1(this.x,e.x,t.x),this.y=U1(this.y,e.y,t.y),this.z=U1(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=U1(this.x,e,t),this.y=U1(this.y,e,t),this.z=U1(this.z,e,t),this}clampLength(e,t){let C=this.length();return this.divideScalar(C||1).multiplyScalar(U1(C,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,C){return this.x=e.x+(t.x-e.x)*C,this.y=e.y+(t.y-e.y)*C,this.z=e.z+(t.z-e.z)*C,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let C=e.x,i=e.y,H=e.z,V=t.x,n=t.y,a=t.z;return this.x=i*a-H*n,this.y=H*V-C*a,this.z=C*n-i*V,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let C=e.dot(this)/t;return this.copy(e).multiplyScalar(C)}projectOnPlane(e){return l6.copy(this).projectOnVector(e),this.sub(l6)}reflect(e){return this.sub(l6.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let C=this.dot(e)/t;return Math.acos(U1(C,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,C=this.y-e.y,i=this.z-e.z;return t*t+C*C+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,C){let i=Math.sin(t)*e;return this.x=i*Math.sin(C),this.y=Math.cos(t)*e,this.z=i*Math.cos(C),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,C){return this.x=e*Math.sin(t),this.y=C,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),C=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=C,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,C=Math.sqrt(1-t*t);return this.x=C*Math.cos(e),this.y=t,this.z=C*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Z8.prototype.isVector3=!0;var w=Z8,l6=new w,ge=new A2,_8=class _8{constructor(e,t,C,i,H,V,n,a,L){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,C,i,H,V,n,a,L)}set(e,t,C,i,H,V,n,a,L){let o=this.elements;return o[0]=e,o[1]=i,o[2]=n,o[3]=t,o[4]=H,o[5]=a,o[6]=C,o[7]=V,o[8]=L,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,C=e.elements;return t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=C[3],t[4]=C[4],t[5]=C[5],t[6]=C[6],t[7]=C[7],t[8]=C[8],this}extractBasis(e,t,C){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),C.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let C=e.elements,i=t.elements,H=this.elements,V=C[0],n=C[3],a=C[6],L=C[1],o=C[4],M=C[7],s=C[2],l=C[5],u=C[8],f=i[0],c=i[3],d=i[6],v=i[1],y=i[4],h=i[7],S=i[2],g=i[5],b=i[8];return H[0]=V*f+n*v+a*S,H[3]=V*c+n*y+a*g,H[6]=V*d+n*h+a*b,H[1]=L*f+o*v+M*S,H[4]=L*c+o*y+M*g,H[7]=L*d+o*h+M*b,H[2]=s*f+l*v+u*S,H[5]=s*c+l*y+u*g,H[8]=s*d+l*h+u*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],C=e[1],i=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8];return t*V*o-t*n*L-C*H*o+C*n*a+i*H*L-i*V*a}invert(){let e=this.elements,t=e[0],C=e[1],i=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8],M=o*V-n*L,s=n*a-o*H,l=L*H-V*a,u=t*M+C*s+i*l;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/u;return e[0]=M*f,e[1]=(i*L-o*C)*f,e[2]=(n*C-i*V)*f,e[3]=s*f,e[4]=(o*t-i*a)*f,e[5]=(i*H-n*t)*f,e[6]=l*f,e[7]=(C*a-L*t)*f,e[8]=(V*t-C*H)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,C,i,H,V,n){let a=Math.cos(H),L=Math.sin(H);return this.set(C*a,C*L,-C*(a*V+L*n)+V+e,-i*L,i*a,-i*(-L*V+a*n)+n+t,0,0,1),this}scale(e,t){return Z0("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(d6.makeScale(e,t)),this}rotate(e){return Z0("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(d6.makeRotation(-e)),this}translate(e,t){return Z0("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(d6.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),C=Math.sin(e);return this.set(t,-C,0,C,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,C=e.elements;for(let i=0;i<9;i++)if(t[i]!==C[i])return!1;return!0}fromArray(e,t=0){for(let C=0;C<9;C++)this.elements[C]=e[C+t];return this}toArray(e=[],t=0){let C=this.elements;return e[t]=C[0],e[t+1]=C[1],e[t+2]=C[2],e[t+3]=C[3],e[t+4]=C[4],e[t+5]=C[5],e[t+6]=C[6],e[t+7]=C[7],e[t+8]=C[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_8.prototype.isMatrix3=!0;var P1=_8,d6=new P1,Ze=new P1().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_e=new P1().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gi(){let r={enabled:!0,workingColorSpace:k3,spaces:{},convert:function(i,H,V){return this.enabled===!1||H===V||!H||!V||(this.spaces[H].transfer===t2&&(i.r=z5(i.r),i.g=z5(i.g),i.b=z5(i.b)),this.spaces[H].primaries!==this.spaces[V].primaries&&(i.applyMatrix3(this.spaces[H].toXYZ),i.applyMatrix3(this.spaces[V].fromXYZ)),this.spaces[V].transfer===t2&&(i.r=J0(i.r),i.g=J0(i.g),i.b=J0(i.b))),i},workingToColorSpace:function(i,H){return this.convert(i,this.workingColorSpace,H)},colorSpaceToWorking:function(i,H){return this.convert(i,H,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===G5?N3:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,H=this.workingColorSpace){return i.fromArray(this.spaces[H].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,H,V){return i.copy(this.spaces[H].toXYZ).multiply(this.spaces[V].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,H){return Z0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,H)},toWorkingColorSpace:function(i,H){return Z0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,H)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],C=[.3127,.329];return r.define({[k3]:{primaries:e,whitePoint:C,transfer:N3,toXYZ:Ze,fromXYZ:_e,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:I2},outputColorSpaceConfig:{drawingBufferColorSpace:I2}},[I2]:{primaries:e,whitePoint:C,transfer:t2,toXYZ:Ze,fromXYZ:_e,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:I2}}}),r}var X1=gi();function z5(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function J0(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var F0,A4=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let C;if(e instanceof HTMLCanvasElement)C=e;else{F0===void 0&&(F0=U3("canvas")),F0.width=e.width,F0.height=e.height;let i=F0.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),C=F0}return C.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=U3("canvas");t.width=e.width,t.height=e.height;let C=t.getContext("2d");C.drawImage(e,0,0,e.width,e.height);let i=C.getImageData(0,0,e.width,e.height),H=i.data;for(let V=0;V<H.length;V++)H[V]=z5(H[V]/255)*255;return C.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let C=0;C<t.length;C++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[C]=Math.floor(z5(t[C]/255)*255):t[C]=z5(t[C]);return{data:t,width:e.width,height:e.height}}else return O1("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zi=0,i3=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zi++}),this.uuid=T0(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let C={uuid:this.uuid,url:""},i=this.data;if(i!==null){let H;if(Array.isArray(i)){H=[];for(let V=0,n=i.length;V<n;V++)i[V].isDataTexture?H.push(c6(i[V].image)):H.push(c6(i[V]))}else H=c6(i);C.url=H}return t||(e.images[this.uuid]=C),C}};function c6(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A4.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(O1("Texture: Unable to serialize Texture."),{})}var _i=0,p6=new w,X2=class r extends w5{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,C=b5,i=b5,H=w2,V=d0,n=s5,a=j2,L=r.DEFAULT_ANISOTROPY,o=G5){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_i++}),this.uuid=T0(),this.name="",this.source=new i3(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=C,this.wrapT=i,this.magFilter=H,this.minFilter=V,this.anisotropy=L,this.format=n,this.internalFormat=null,this.type=a,this.offset=new m1(0,0),this.repeat=new m1(1,1),this.center=new m1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new P1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(p6).x}get height(){return this.source.getSize(p6).y}get depth(){return this.source.getSize(p6).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let C=e[t];if(C===void 0){O1(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){O1(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&C&&i.isVector2&&C.isVector2||i&&C&&i.isVector3&&C.isVector3||i&&C&&i.isMatrix3&&C.isMatrix3?i.copy(C):this[t]=C}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let C={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(C.userData=this.userData),t||(e.textures[this.uuid]=C),C}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L8)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case c4:e.x=e.x-Math.floor(e.x);break;case b5:e.x=e.x<0?0:1;break;case p4:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case c4:e.y=e.y-Math.floor(e.y);break;case b5:e.y=e.y<0?0:1;break;case p4:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};X2.DEFAULT_IMAGE=null;X2.DEFAULT_MAPPING=L8;X2.DEFAULT_ANISOTROPY=1;var y8=class y8{constructor(e=0,t=0,C=0,i=1){this.x=e,this.y=t,this.z=C,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,C,i){return this.x=e,this.y=t,this.z=C,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,C=this.y,i=this.z,H=this.w,V=e.elements;return this.x=V[0]*t+V[4]*C+V[8]*i+V[12]*H,this.y=V[1]*t+V[5]*C+V[9]*i+V[13]*H,this.z=V[2]*t+V[6]*C+V[10]*i+V[14]*H,this.w=V[3]*t+V[7]*C+V[11]*i+V[15]*H,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,C,i,H,a=e.elements,L=a[0],o=a[4],M=a[8],s=a[1],l=a[5],u=a[9],f=a[2],c=a[6],d=a[10];if(Math.abs(o-s)<.01&&Math.abs(M-f)<.01&&Math.abs(u-c)<.01){if(Math.abs(o+s)<.1&&Math.abs(M+f)<.1&&Math.abs(u+c)<.1&&Math.abs(L+l+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(L+1)/2,h=(l+1)/2,S=(d+1)/2,g=(o+s)/4,b=(M+f)/4,m=(u+c)/4;return y>h&&y>S?y<.01?(C=0,i=.707106781,H=.707106781):(C=Math.sqrt(y),i=g/C,H=b/C):h>S?h<.01?(C=.707106781,i=0,H=.707106781):(i=Math.sqrt(h),C=g/i,H=m/i):S<.01?(C=.707106781,i=.707106781,H=0):(H=Math.sqrt(S),C=b/H,i=m/H),this.set(C,i,H,t),this}let v=Math.sqrt((c-u)*(c-u)+(M-f)*(M-f)+(s-o)*(s-o));return Math.abs(v)<.001&&(v=1),this.x=(c-u)/v,this.y=(M-f)/v,this.z=(s-o)/v,this.w=Math.acos((L+l+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=U1(this.x,e.x,t.x),this.y=U1(this.y,e.y,t.y),this.z=U1(this.z,e.z,t.z),this.w=U1(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=U1(this.x,e,t),this.y=U1(this.y,e,t),this.z=U1(this.z,e,t),this.w=U1(this.w,e,t),this}clampLength(e,t){let C=this.length();return this.divideScalar(C||1).multiplyScalar(U1(C,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,C){return this.x=e.x+(t.x-e.x)*C,this.y=e.y+(t.y-e.y)*C,this.z=e.z+(t.z-e.z)*C,this.w=e.w+(t.w-e.w)*C,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};y8.prototype.isVector4=!0;var l2=y8,m4=class extends w5{constructor(e=1,t=1,C={}){super(),C=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:w2,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},C),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=C.depth,this.scissor=new l2(0,0,e,t),this.scissorTest=!1,this.viewport=new l2(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:C.depth},H=new X2(i),V=C.count;for(let n=0;n<V;n++)this.textures[n]=H.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(C),this.depthBuffer=C.depthBuffer,this.stencilBuffer=C.stencilBuffer,this.resolveColorBuffer=C.resolveColorBuffer,this.resolveDepthBuffer=C.resolveDepthBuffer,this.resolveStencilBuffer=C.resolveStencilBuffer,this.storeMultisampledColorBuffer=C.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=C.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=C.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=C.depthTexture,this.samples=C.samples,this.multiview=C.multiview,this.useArrayDepthTexture=C.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:w2,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let C=0;C<this.textures.length;C++)this.textures[C].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,C=1){if(this.width!==e||this.height!==t||this.depth!==C){this.width=e,this.height=t,this.depth=C;for(let i=0,H=this.textures.length;i<H;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=C,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,C=e.textures.length;t<C;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new i3(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},J2=class extends m4{constructor(e=1,t=1,C={}){super(e,t,C),this.isWebGLRenderTarget=!0}},z3=class extends X2{constructor(e=null,t=1,C=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:C,depth:i},this.magFilter=b2,this.minFilter=b2,this.wrapR=b5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var h4=class extends X2{constructor(e=null,t=1,C=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:C,depth:i},this.magFilter=b2,this.minFilter=b2,this.wrapR=b5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var W4=class W4{constructor(e,t,C,i,H,V,n,a,L,o,M,s,l,u,f,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,C,i,H,V,n,a,L,o,M,s,l,u,f,c)}set(e,t,C,i,H,V,n,a,L,o,M,s,l,u,f,c){let d=this.elements;return d[0]=e,d[4]=t,d[8]=C,d[12]=i,d[1]=H,d[5]=V,d[9]=n,d[13]=a,d[2]=L,d[6]=o,d[10]=M,d[14]=s,d[3]=l,d[7]=u,d[11]=f,d[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new W4().fromArray(this.elements)}copy(e){let t=this.elements,C=e.elements;return t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=C[3],t[4]=C[4],t[5]=C[5],t[6]=C[6],t[7]=C[7],t[8]=C[8],t[9]=C[9],t[10]=C[10],t[11]=C[11],t[12]=C[12],t[13]=C[13],t[14]=C[14],t[15]=C[15],this}copyPosition(e){let t=this.elements,C=e.elements;return t[12]=C[12],t[13]=C[13],t[14]=C[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,C){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),C.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),C.setFromMatrixColumn(this,2),this)}makeBasis(e,t,C){return this.set(e.x,t.x,C.x,0,e.y,t.y,C.y,0,e.z,t.z,C.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,C=e.elements,i=1/D0.setFromMatrixColumn(e,0).length(),H=1/D0.setFromMatrixColumn(e,1).length(),V=1/D0.setFromMatrixColumn(e,2).length();return t[0]=C[0]*i,t[1]=C[1]*i,t[2]=C[2]*i,t[3]=0,t[4]=C[4]*H,t[5]=C[5]*H,t[6]=C[6]*H,t[7]=0,t[8]=C[8]*V,t[9]=C[9]*V,t[10]=C[10]*V,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,C=e.x,i=e.y,H=e.z,V=Math.cos(C),n=Math.sin(C),a=Math.cos(i),L=Math.sin(i),o=Math.cos(H),M=Math.sin(H);if(e.order==="XYZ"){let s=V*o,l=V*M,u=n*o,f=n*M;t[0]=a*o,t[4]=-a*M,t[8]=L,t[1]=l+u*L,t[5]=s-f*L,t[9]=-n*a,t[2]=f-s*L,t[6]=u+l*L,t[10]=V*a}else if(e.order==="YXZ"){let s=a*o,l=a*M,u=L*o,f=L*M;t[0]=s+f*n,t[4]=u*n-l,t[8]=V*L,t[1]=V*M,t[5]=V*o,t[9]=-n,t[2]=l*n-u,t[6]=f+s*n,t[10]=V*a}else if(e.order==="ZXY"){let s=a*o,l=a*M,u=L*o,f=L*M;t[0]=s-f*n,t[4]=-V*M,t[8]=u+l*n,t[1]=l+u*n,t[5]=V*o,t[9]=f-s*n,t[2]=-V*L,t[6]=n,t[10]=V*a}else if(e.order==="ZYX"){let s=V*o,l=V*M,u=n*o,f=n*M;t[0]=a*o,t[4]=u*L-l,t[8]=s*L+f,t[1]=a*M,t[5]=f*L+s,t[9]=l*L-u,t[2]=-L,t[6]=n*a,t[10]=V*a}else if(e.order==="YZX"){let s=V*a,l=V*L,u=n*a,f=n*L;t[0]=a*o,t[4]=f-s*M,t[8]=u*M+l,t[1]=M,t[5]=V*o,t[9]=-n*o,t[2]=-L*o,t[6]=l*M+u,t[10]=s-f*M}else if(e.order==="XZY"){let s=V*a,l=V*L,u=n*a,f=n*L;t[0]=a*o,t[4]=-M,t[8]=L*o,t[1]=s*M+f,t[5]=V*o,t[9]=l*M-u,t[2]=u*M-l,t[6]=n*o,t[10]=f*M+s}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yi,e,bi)}lookAt(e,t,C){let i=this.elements;return e5.subVectors(e,t),e5.lengthSq()===0&&(e5.z=1),e5.normalize(),j5.crossVectors(C,e5),j5.lengthSq()===0&&(Math.abs(C.z)===1?e5.x+=1e-4:e5.z+=1e-4,e5.normalize(),j5.crossVectors(C,e5)),j5.normalize(),D7.crossVectors(e5,j5),i[0]=j5.x,i[4]=D7.x,i[8]=e5.x,i[1]=j5.y,i[5]=D7.y,i[9]=e5.y,i[2]=j5.z,i[6]=D7.z,i[10]=e5.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let C=e.elements,i=t.elements,H=this.elements,V=C[0],n=C[4],a=C[8],L=C[12],o=C[1],M=C[5],s=C[9],l=C[13],u=C[2],f=C[6],c=C[10],d=C[14],v=C[3],y=C[7],h=C[11],S=C[15],g=i[0],b=i[4],m=i[8],Z=i[12],R=i[1],I=i[5],N=i[9],G=i[13],P=i[2],U=i[6],Q=i[10],Y=i[14],r1=i[3],X=i[7],e1=i[11],C1=i[15];return H[0]=V*g+n*R+a*P+L*r1,H[4]=V*b+n*I+a*U+L*X,H[8]=V*m+n*N+a*Q+L*e1,H[12]=V*Z+n*G+a*Y+L*C1,H[1]=o*g+M*R+s*P+l*r1,H[5]=o*b+M*I+s*U+l*X,H[9]=o*m+M*N+s*Q+l*e1,H[13]=o*Z+M*G+s*Y+l*C1,H[2]=u*g+f*R+c*P+d*r1,H[6]=u*b+f*I+c*U+d*X,H[10]=u*m+f*N+c*Q+d*e1,H[14]=u*Z+f*G+c*Y+d*C1,H[3]=v*g+y*R+h*P+S*r1,H[7]=v*b+y*I+h*U+S*X,H[11]=v*m+y*N+h*Q+S*e1,H[15]=v*Z+y*G+h*Y+S*C1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],C=e[4],i=e[8],H=e[12],V=e[1],n=e[5],a=e[9],L=e[13],o=e[2],M=e[6],s=e[10],l=e[14],u=e[3],f=e[7],c=e[11],d=e[15],v=a*l-L*s,y=n*l-L*M,h=n*s-a*M,S=V*l-L*o,g=V*s-a*o,b=V*M-n*o;return t*(f*v-c*y+d*h)-C*(u*v-c*S+d*g)+i*(u*y-f*S+d*b)-H*(u*h-f*g+c*b)}determinantAffine(){let e=this.elements,t=e[0],C=e[4],i=e[8],H=e[1],V=e[5],n=e[9],a=e[2],L=e[6],o=e[10];return t*(V*o-n*L)-C*(H*o-n*a)+i*(H*L-V*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,C){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=C),this}invert(){let e=this.elements,t=e[0],C=e[1],i=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8],M=e[9],s=e[10],l=e[11],u=e[12],f=e[13],c=e[14],d=e[15],v=t*n-C*V,y=t*a-i*V,h=t*L-H*V,S=C*a-i*n,g=C*L-H*n,b=i*L-H*a,m=o*f-M*u,Z=o*c-s*u,R=o*d-l*u,I=M*c-s*f,N=M*d-l*f,G=s*d-l*c,P=v*G-y*N+h*I+S*R-g*Z+b*m;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(n*G-a*N+L*I)*U,e[1]=(i*N-C*G-H*I)*U,e[2]=(f*b-c*g+d*S)*U,e[3]=(s*g-M*b-l*S)*U,e[4]=(a*R-V*G-L*Z)*U,e[5]=(t*G-i*R+H*Z)*U,e[6]=(c*h-u*b-d*y)*U,e[7]=(o*b-s*h+l*y)*U,e[8]=(V*N-n*R+L*m)*U,e[9]=(C*R-t*N-H*m)*U,e[10]=(u*g-f*h+d*v)*U,e[11]=(M*h-o*g-l*v)*U,e[12]=(n*Z-V*I-a*m)*U,e[13]=(t*I-C*Z+i*m)*U,e[14]=(f*y-u*S-c*v)*U,e[15]=(o*S-M*y+s*v)*U,this}scale(e){let t=this.elements,C=e.x,i=e.y,H=e.z;return t[0]*=C,t[4]*=i,t[8]*=H,t[1]*=C,t[5]*=i,t[9]*=H,t[2]*=C,t[6]*=i,t[10]*=H,t[3]*=C,t[7]*=i,t[11]*=H,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],C=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,C,i))}makeTranslation(e,t,C){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,C,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),C=Math.sin(e);return this.set(1,0,0,0,0,t,-C,0,0,C,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),C=Math.sin(e);return this.set(t,0,C,0,0,1,0,0,-C,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),C=Math.sin(e);return this.set(t,-C,0,0,C,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let C=Math.cos(t),i=Math.sin(t),H=1-C,V=e.x,n=e.y,a=e.z,L=H*V,o=H*n;return this.set(L*V+C,L*n-i*a,L*a+i*n,0,L*n+i*a,o*n+C,o*a-i*V,0,L*a-i*n,o*a+i*V,H*a*a+C,0,0,0,0,1),this}makeScale(e,t,C){return this.set(e,0,0,0,0,t,0,0,0,0,C,0,0,0,0,1),this}makeShear(e,t,C,i,H,V){return this.set(1,C,H,0,e,1,V,0,t,i,1,0,0,0,0,1),this}compose(e,t,C){let i=this.elements,H=t._x,V=t._y,n=t._z,a=t._w,L=H+H,o=V+V,M=n+n,s=H*L,l=H*o,u=H*M,f=V*o,c=V*M,d=n*M,v=a*L,y=a*o,h=a*M,S=C.x,g=C.y,b=C.z;return i[0]=(1-(f+d))*S,i[1]=(l+h)*S,i[2]=(u-y)*S,i[3]=0,i[4]=(l-h)*g,i[5]=(1-(s+d))*g,i[6]=(c+v)*g,i[7]=0,i[8]=(u+y)*b,i[9]=(c-v)*b,i[10]=(1-(s+f))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,C){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let H=this.determinantAffine();if(H===0)return C.set(1,1,1),t.identity(),this;let V=D0.set(i[0],i[1],i[2]).length(),n=D0.set(i[4],i[5],i[6]).length(),a=D0.set(i[8],i[9],i[10]).length();H<0&&(V=-V),d5.copy(this);let L=1/V,o=1/n,M=1/a;return d5.elements[0]*=L,d5.elements[1]*=L,d5.elements[2]*=L,d5.elements[4]*=o,d5.elements[5]*=o,d5.elements[6]*=o,d5.elements[8]*=M,d5.elements[9]*=M,d5.elements[10]*=M,t.setFromRotationMatrix(d5),C.x=V,C.y=n,C.z=a,this}makePerspective(e,t,C,i,H,V,n=A5,a=!1){let L=this.elements,o=2*H/(t-e),M=2*H/(C-i),s=(t+e)/(t-e),l=(C+i)/(C-i),u,f;if(a)u=H/(V-H),f=V*H/(V-H);else if(n===A5)u=-(V+H)/(V-H),f=-2*V*H/(V-H);else if(n===t3)u=-V/(V-H),f=-V*H/(V-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return L[0]=o,L[4]=0,L[8]=s,L[12]=0,L[1]=0,L[5]=M,L[9]=l,L[13]=0,L[2]=0,L[6]=0,L[10]=u,L[14]=f,L[3]=0,L[7]=0,L[11]=-1,L[15]=0,this}makeOrthographic(e,t,C,i,H,V,n=A5,a=!1){let L=this.elements,o=2/(t-e),M=2/(C-i),s=-(t+e)/(t-e),l=-(C+i)/(C-i),u,f;if(a)u=1/(V-H),f=V/(V-H);else if(n===A5)u=-2/(V-H),f=-(V+H)/(V-H);else if(n===t3)u=-1/(V-H),f=-H/(V-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return L[0]=o,L[4]=0,L[8]=0,L[12]=s,L[1]=0,L[5]=M,L[9]=0,L[13]=l,L[2]=0,L[6]=0,L[10]=u,L[14]=f,L[3]=0,L[7]=0,L[11]=0,L[15]=1,this}equals(e){let t=this.elements,C=e.elements;for(let i=0;i<16;i++)if(t[i]!==C[i])return!1;return!0}fromArray(e,t=0){for(let C=0;C<16;C++)this.elements[C]=e[C+t];return this}toArray(e=[],t=0){let C=this.elements;return e[t]=C[0],e[t+1]=C[1],e[t+2]=C[2],e[t+3]=C[3],e[t+4]=C[4],e[t+5]=C[5],e[t+6]=C[6],e[t+7]=C[7],e[t+8]=C[8],e[t+9]=C[9],e[t+10]=C[10],e[t+11]=C[11],e[t+12]=C[12],e[t+13]=C[13],e[t+14]=C[14],e[t+15]=C[15],e}};W4.prototype.isMatrix4=!0;var i2=W4,D0=new w,d5=new i2,yi=new w(0,0,0),bi=new w(1,1,1),j5=new w,D7=new w,e5=new w,ye=new i2,be=new A2,o5=class r{constructor(e=0,t=0,C=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=C,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,C,i=this._order){return this._x=e,this._y=t,this._z=C,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,C=!0){let i=e.elements,H=i[0],V=i[4],n=i[8],a=i[1],L=i[5],o=i[9],M=i[2],s=i[6],l=i[10];switch(t){case"XYZ":this._y=Math.asin(U1(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-o,l),this._z=Math.atan2(-V,H)):(this._x=Math.atan2(s,L),this._z=0);break;case"YXZ":this._x=Math.asin(-U1(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(n,l),this._z=Math.atan2(a,L)):(this._y=Math.atan2(-M,H),this._z=0);break;case"ZXY":this._x=Math.asin(U1(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-M,l),this._z=Math.atan2(-V,L)):(this._y=0,this._z=Math.atan2(a,H));break;case"ZYX":this._y=Math.asin(-U1(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(s,l),this._z=Math.atan2(a,H)):(this._x=0,this._z=Math.atan2(-V,L));break;case"YZX":this._z=Math.asin(U1(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-o,L),this._y=Math.atan2(-M,H)):(this._x=0,this._y=Math.atan2(n,l));break;case"XZY":this._z=Math.asin(-U1(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(s,L),this._y=Math.atan2(n,H)):(this._x=Math.atan2(-o,l),this._y=0);break;default:O1("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,C===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,C){return ye.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ye,t,C)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return be.setFromEuler(this),this.setFromQuaternion(be,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};o5.DEFAULT_ORDER="XYZ";var H3=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ti=0,Te=new w,k0=new A2,F5=new i2,k7=new w,T3=new w,wi=new w,Oi=new A2,we=new w(1,0,0),Oe=new w(0,1,0),Ee=new w(0,0,1),Re={type:"added"},Ei={type:"removed"},N0={type:"childadded",child:null},u6={type:"childremoved",child:null},q2=class r extends w5{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ti++}),this.uuid=T0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new w,t=new o5,C=new A2,i=new w(1,1,1);function H(){C.setFromEuler(t,!1)}function V(){t.setFromQuaternion(C,void 0,!1)}t._onChange(H),C._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:C},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new i2},normalMatrix:{value:new P1}}),this.matrix=new i2,this.matrixWorld=new i2,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return k0.setFromAxisAngle(e,t),this.quaternion.multiply(k0),this}rotateOnWorldAxis(e,t){return k0.setFromAxisAngle(e,t),this.quaternion.premultiply(k0),this}rotateX(e){return this.rotateOnAxis(we,e)}rotateY(e){return this.rotateOnAxis(Oe,e)}rotateZ(e){return this.rotateOnAxis(Ee,e)}translateOnAxis(e,t){return Te.copy(e).applyQuaternion(this.quaternion),this.position.add(Te.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(we,e)}translateY(e){return this.translateOnAxis(Oe,e)}translateZ(e){return this.translateOnAxis(Ee,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(F5.copy(this.matrixWorld).invert())}lookAt(e,t,C){e.isVector3?k7.copy(e):k7.set(e,t,C);let i=this.parent;this.updateWorldMatrix(!0,!1),T3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?F5.lookAt(T3,k7,this.up):F5.lookAt(k7,T3,this.up),this.quaternion.setFromRotationMatrix(F5),i&&(F5.extractRotation(i.matrixWorld),k0.setFromRotationMatrix(F5),this.quaternion.premultiply(k0.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(R1("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Re),N0.child=e,this.dispatchEvent(N0),N0.child=null):R1("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let C=0;C<arguments.length;C++)this.remove(arguments[C]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ei),u6.child=e,this.dispatchEvent(u6),u6.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),F5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),F5.multiply(e.parent.matrixWorld)),e.applyMatrix4(F5),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Re),N0.child=e,this.dispatchEvent(N0),N0.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let C=0,i=this.children.length;C<i;C++){let V=this.children[C].getObjectByProperty(e,t);if(V!==void 0)return V}}getObjectsByProperty(e,t,C=[]){this[e]===t&&C.push(this);let i=this.children;for(let H=0,V=i.length;H<V;H++)i[H].getObjectsByProperty(e,t,C);return C}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T3,e,wi),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T3,Oi,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let C=0,i=t.length;C<i;C++)t[C].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let C=0,i=t.length;C<i;C++)t[C].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,C=e.y,i=e.z,H=this.matrix.elements;H[12]+=t-H[0]*t-H[4]*C-H[8]*i,H[13]+=C-H[1]*t-H[5]*C-H[9]*i,H[14]+=i-H[2]*t-H[6]*C-H[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let C=0,i=t.length;C<i;C++)t[C].updateMatrixWorld(e)}updateWorldMatrix(e,t,C=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||C)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,C=!0),t===!0){let H=this.children;for(let V=0,n=H.length;V<n;V++)H[V].updateWorldMatrix(!1,!0,C)}}toJSON(e){let t=e===void 0||typeof e=="string",C={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},C.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(n=>({...n,boundingBox:n.boundingBox?n.boundingBox.toJSON():void 0,boundingSphere:n.boundingSphere?n.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(n=>({...n})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function H(n,a){return n[a.uuid]===void 0&&(n[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=H(e.geometries,this.geometry);let n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){let a=n.shapes;if(Array.isArray(a))for(let L=0,o=a.length;L<o;L++){let M=a[L];H(e.shapes,M)}else H(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(H(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let n=[];for(let a=0,L=this.material.length;a<L;a++)n.push(H(e.materials,this.material[a]));i.material=n}else i.material=H(e.materials,this.material);if(this.children.length>0){i.children=[];for(let n=0;n<this.children.length;n++)i.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let n=0;n<this.animations.length;n++){let a=this.animations[n];i.animations.push(H(e.animations,a))}}if(t){let n=V(e.geometries),a=V(e.materials),L=V(e.textures),o=V(e.images),M=V(e.shapes),s=V(e.skeletons),l=V(e.animations),u=V(e.nodes);n.length>0&&(C.geometries=n),a.length>0&&(C.materials=a),L.length>0&&(C.textures=L),o.length>0&&(C.images=o),M.length>0&&(C.shapes=M),s.length>0&&(C.skeletons=s),l.length>0&&(C.animations=l),u.length>0&&(C.nodes=u)}return C.object=i,C;function V(n){let a=[];for(let L in n){let o=n[L];delete o.metadata,a.push(o)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let C=0;C<e.children.length;C++){let i=e.children[C];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};q2.DEFAULT_UP=new w(0,1,0);q2.DEFAULT_MATRIX_AUTO_UPDATE=!0;q2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var m5=class extends q2{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ri={type:"move"},V3=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new m5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new m5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new m5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let C of e.hand.values())this._getHandJoint(t,C)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,C){let i=null,H=null,V=null,n=this._targetRay,a=this._grip,L=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(L&&e.hand){V=!0;for(let f of e.hand.values()){let c=t.getJointPose(f,C),d=this._getHandJoint(L,f);c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=c.radius),d.visible=c!==null}let o=L.joints["index-finger-tip"],M=L.joints["thumb-tip"],s=o.position.distanceTo(M.position),l=.02,u=.005;L.inputState.pinching&&s>l+u?(L.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!L.inputState.pinching&&s<=l-u&&(L.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(H=t.getPose(e.gripSpace,C),H!==null&&(a.matrix.fromArray(H.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,H.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(H.linearVelocity)):a.hasLinearVelocity=!1,H.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(H.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(i=t.getPose(e.targetRaySpace,C),i===null&&H!==null&&(i=H),i!==null&&(n.matrix.fromArray(i.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,i.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(i.linearVelocity)):n.hasLinearVelocity=!1,i.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(i.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Ri)))}return n!==null&&(n.visible=i!==null),a!==null&&(a.visible=H!==null),L!==null&&(L.visible=V!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let C=new m5;C.matrixAutoUpdate=!1,C.visible=!1,e.joints[t.jointName]=C,e.add(C)}return e.joints[t.jointName]}},Ft={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},e0={h:0,s:0,l:0},N7={h:0,s:0,l:0};function A6(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var F1=class{constructor(e,t,C){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,C)}set(e,t,C){if(t===void 0&&C===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,C);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=I2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X1.colorSpaceToWorking(this,t),this}setRGB(e,t,C,i=X1.workingColorSpace){return this.r=e,this.g=t,this.b=C,X1.colorSpaceToWorking(this,i),this}setHSL(e,t,C,i=X1.workingColorSpace){if(e=A8(e,1),t=U1(t,0,1),C=U1(C,0,1),t===0)this.r=this.g=this.b=C;else{let H=C<=.5?C*(1+t):C+t-C*t,V=2*C-H;this.r=A6(V,H,e+1/3),this.g=A6(V,H,e),this.b=A6(V,H,e-1/3)}return X1.colorSpaceToWorking(this,i),this}setStyle(e,t=I2){function C(H){H!==void 0&&parseFloat(H)<1&&O1("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let H,V=i[1],n=i[2];switch(V){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return C(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,t);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return C(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,t);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return C(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,t);break;default:O1("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let H=i[1],V=H.length;if(V===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,t);if(V===6)return this.setHex(parseInt(H,16),t);O1("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=I2){let C=Ft[e.toLowerCase()];return C!==void 0?this.setHex(C,t):O1("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=z5(e.r),this.g=z5(e.g),this.b=z5(e.b),this}copyLinearToSRGB(e){return this.r=J0(e.r),this.g=J0(e.g),this.b=J0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=I2){return X1.workingToColorSpace(B2.copy(this),e),Math.round(U1(B2.r*255,0,255))*65536+Math.round(U1(B2.g*255,0,255))*256+Math.round(U1(B2.b*255,0,255))}getHexString(e=I2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X1.workingColorSpace){X1.workingToColorSpace(B2.copy(this),t);let C=B2.r,i=B2.g,H=B2.b,V=Math.max(C,i,H),n=Math.min(C,i,H),a,L,o=(n+V)/2;if(n===V)a=0,L=0;else{let M=V-n;switch(L=o<=.5?M/(V+n):M/(2-V-n),V){case C:a=(i-H)/M+(i<H?6:0);break;case i:a=(H-C)/M+2;break;case H:a=(C-i)/M+4;break}a/=6}return e.h=a,e.s=L,e.l=o,e}getRGB(e,t=X1.workingColorSpace){return X1.workingToColorSpace(B2.copy(this),t),e.r=B2.r,e.g=B2.g,e.b=B2.b,e}getStyle(e=I2){X1.workingToColorSpace(B2.copy(this),e);let t=B2.r,C=B2.g,i=B2.b;return e!==I2?`color(${e} ${t.toFixed(3)} ${C.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(C*255)},${Math.round(i*255)})`}offsetHSL(e,t,C){return this.getHSL(e0),this.setHSL(e0.h+e,e0.s+t,e0.l+C)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,C){return this.r=e.r+(t.r-e.r)*C,this.g=e.g+(t.g-e.g)*C,this.b=e.b+(t.b-e.b)*C,this}lerpHSL(e,t){this.getHSL(e0),e.getHSL(N7);let C=B3(e0.h,N7.h,t),i=B3(e0.s,N7.s,t),H=B3(e0.l,N7.l,t);return this.setHSL(C,i,H),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,C=this.g,i=this.b,H=e.elements;return this.r=H[0]*t+H[3]*C+H[6]*i,this.g=H[1]*t+H[4]*C+H[7]*i,this.b=H[2]*t+H[5]*C+H[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},B2=new F1;F1.NAMES=Ft;var G3=class extends q2{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new o5,this.environmentIntensity=1,this.environmentRotation=new o5,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},c5=new w,D5=new w,m6=new w,k5=new w,U0=new w,z0=new w,Pe=new w,h6=new w,f6=new w,x6=new w,v6=new l2,S6=new l2,g6=new l2,i0=class r{constructor(e=new w,t=new w,C=new w){this.a=e,this.b=t,this.c=C}static getNormal(e,t,C,i){i.subVectors(C,t),c5.subVectors(e,t),i.cross(c5);let H=i.lengthSq();return H>0?i.multiplyScalar(1/Math.sqrt(H)):i.set(0,0,0)}static getBarycoord(e,t,C,i,H){c5.subVectors(i,t),D5.subVectors(C,t),m6.subVectors(e,t);let V=c5.dot(c5),n=c5.dot(D5),a=c5.dot(m6),L=D5.dot(D5),o=D5.dot(m6),M=V*L-n*n;if(M===0)return H.set(0,0,0),null;let s=1/M,l=(L*a-n*o)*s,u=(V*o-n*a)*s;return H.set(1-l-u,u,l)}static containsPoint(e,t,C,i){return this.getBarycoord(e,t,C,i,k5)===null?!1:k5.x>=0&&k5.y>=0&&k5.x+k5.y<=1}static getInterpolation(e,t,C,i,H,V,n,a){return this.getBarycoord(e,t,C,i,k5)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(H,k5.x),a.addScaledVector(V,k5.y),a.addScaledVector(n,k5.z),a)}static getInterpolatedAttribute(e,t,C,i,H,V){return v6.setScalar(0),S6.setScalar(0),g6.setScalar(0),v6.fromBufferAttribute(e,t),S6.fromBufferAttribute(e,C),g6.fromBufferAttribute(e,i),V.setScalar(0),V.addScaledVector(v6,H.x),V.addScaledVector(S6,H.y),V.addScaledVector(g6,H.z),V}static isFrontFacing(e,t,C,i){return c5.subVectors(C,t),D5.subVectors(e,t),c5.cross(D5).dot(i)<0}set(e,t,C){return this.a.copy(e),this.b.copy(t),this.c.copy(C),this}setFromPointsAndIndices(e,t,C,i){return this.a.copy(e[t]),this.b.copy(e[C]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,C,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,C),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return c5.subVectors(this.c,this.b),D5.subVectors(this.a,this.b),c5.cross(D5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,C,i,H){return r.getInterpolation(e,this.a,this.b,this.c,t,C,i,H)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let C=this.a,i=this.b,H=this.c,V,n;U0.subVectors(i,C),z0.subVectors(H,C),h6.subVectors(e,C);let a=U0.dot(h6),L=z0.dot(h6);if(a<=0&&L<=0)return t.copy(C);f6.subVectors(e,i);let o=U0.dot(f6),M=z0.dot(f6);if(o>=0&&M<=o)return t.copy(i);let s=a*M-o*L;if(s<=0&&a>=0&&o<=0)return V=a/(a-o),t.copy(C).addScaledVector(U0,V);x6.subVectors(e,H);let l=U0.dot(x6),u=z0.dot(x6);if(u>=0&&l<=u)return t.copy(H);let f=l*L-a*u;if(f<=0&&L>=0&&u<=0)return n=L/(L-u),t.copy(C).addScaledVector(z0,n);let c=o*u-l*M;if(c<=0&&M-o>=0&&l-u>=0)return Pe.subVectors(H,i),n=(M-o)/(M-o+(l-u)),t.copy(i).addScaledVector(Pe,n);let d=1/(c+f+s);return V=f*d,n=s*d,t.copy(C).addScaledVector(U0,V).addScaledVector(z0,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},H0=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,C=e.length;t<C;t+=3)this.expandByPoint(p5.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,C=e.count;t<C;t++)this.expandByPoint(p5.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,C=e.length;t<C;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let C=p5.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(C),this.max.copy(e).add(C),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let C=e.geometry;if(C!==void 0){let H=C.getAttribute("position");if(t===!0&&H!==void 0&&e.isInstancedMesh!==!0)for(let V=0,n=H.count;V<n;V++)e.isMesh===!0?e.getVertexPosition(V,p5):p5.fromBufferAttribute(H,V),p5.applyMatrix4(e.matrixWorld),this.expandByPoint(p5);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),U7.copy(e.boundingBox)):(C.boundingBox===null&&C.computeBoundingBox(),U7.copy(C.boundingBox)),U7.applyMatrix4(e.matrixWorld),this.union(U7)}let i=e.children;for(let H=0,V=i.length;H<V;H++)this.expandByObject(i[H],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,p5),p5.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,C;return e.normal.x>0?(t=e.normal.x*this.min.x,C=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,C=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,C+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,C+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,C+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,C+=e.normal.z*this.min.z),t<=-e.constant&&C>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(w3),z7.subVectors(this.max,w3),G0.subVectors(e.a,w3),W0.subVectors(e.b,w3),X0.subVectors(e.c,w3),t0.subVectors(W0,G0),C0.subVectors(X0,W0),x0.subVectors(G0,X0);let t=[0,-t0.z,t0.y,0,-C0.z,C0.y,0,-x0.z,x0.y,t0.z,0,-t0.x,C0.z,0,-C0.x,x0.z,0,-x0.x,-t0.y,t0.x,0,-C0.y,C0.x,0,-x0.y,x0.x,0];return!Z6(t,G0,W0,X0,z7)||(t=[1,0,0,0,1,0,0,0,1],!Z6(t,G0,W0,X0,z7))?!1:(G7.crossVectors(t0,C0),t=[G7.x,G7.y,G7.z],Z6(t,G0,W0,X0,z7))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,p5).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(p5).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(N5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),N5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),N5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),N5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),N5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),N5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),N5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),N5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(N5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},N5=[new w,new w,new w,new w,new w,new w,new w,new w],p5=new w,U7=new H0,G0=new w,W0=new w,X0=new w,t0=new w,C0=new w,x0=new w,w3=new w,z7=new w,G7=new w,v0=new w;function Z6(r,e,t,C,i){for(let H=0,V=r.length-3;H<=V;H+=3){v0.fromArray(r,H);let n=i.x*Math.abs(v0.x)+i.y*Math.abs(v0.y)+i.z*Math.abs(v0.z),a=e.dot(v0),L=t.dot(v0),o=C.dot(v0);if(Math.max(-Math.max(a,L,o),Math.min(a,L,o))>n)return!1}return!0}var f2=new w,W7=new m1,Pi=0,a5=class extends w5{constructor(e,t,C=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pi++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=C,this.usage=Et,this.updateRanges=[],this.gpuType=v5,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,C){e*=this.itemSize,C*=t.itemSize;for(let i=0,H=this.itemSize;i<H;i++)this.array[e+i]=t.array[C+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,C=this.count;t<C;t++)W7.fromBufferAttribute(this,t),W7.applyMatrix3(e),this.setXY(t,W7.x,W7.y);else if(this.itemSize===3)for(let t=0,C=this.count;t<C;t++)f2.fromBufferAttribute(this,t),f2.applyMatrix3(e),this.setXYZ(t,f2.x,f2.y,f2.z);return this}applyMatrix4(e){for(let t=0,C=this.count;t<C;t++)f2.fromBufferAttribute(this,t),f2.applyMatrix4(e),this.setXYZ(t,f2.x,f2.y,f2.z);return this}applyNormalMatrix(e){for(let t=0,C=this.count;t<C;t++)f2.fromBufferAttribute(this,t),f2.applyNormalMatrix(e),this.setXYZ(t,f2.x,f2.y,f2.z);return this}transformDirection(e){for(let t=0,C=this.count;t<C;t++)f2.fromBufferAttribute(this,t),f2.transformDirection(e),this.setXYZ(t,f2.x,f2.y,f2.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let C=this.array[e*this.itemSize+t];return this.normalized&&(C=K0(C,this.array)),C}setComponent(e,t,C){return this.normalized&&(C=G2(C,this.array)),this.array[e*this.itemSize+t]=C,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=K0(t,this.array)),t}setX(e,t){return this.normalized&&(t=G2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=K0(t,this.array)),t}setY(e,t){return this.normalized&&(t=G2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=K0(t,this.array)),t}setZ(e,t){return this.normalized&&(t=G2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=K0(t,this.array)),t}setW(e,t){return this.normalized&&(t=G2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,C){return e*=this.itemSize,this.normalized&&(t=G2(t,this.array),C=G2(C,this.array)),this.array[e+0]=t,this.array[e+1]=C,this}setXYZ(e,t,C,i){return e*=this.itemSize,this.normalized&&(t=G2(t,this.array),C=G2(C,this.array),i=G2(i,this.array)),this.array[e+0]=t,this.array[e+1]=C,this.array[e+2]=i,this}setXYZW(e,t,C,i,H){return e*=this.itemSize,this.normalized&&(t=G2(t,this.array),C=G2(C,this.array),i=G2(i,this.array),H=G2(H,this.array)),this.array[e+0]=t,this.array[e+1]=C,this.array[e+2]=i,this.array[e+3]=H,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var W3=class extends a5{constructor(e,t,C){super(new Uint16Array(e),t,C)}};var X3=class extends a5{constructor(e,t,C){super(new Uint32Array(e),t,C)}};var W2=class extends a5{constructor(e,t,C){super(new Float32Array(e),t,C)}},Bi=new H0,O3=new w,_6=new w,n3=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let C=this.center;t!==void 0?C.copy(t):Bi.setFromPoints(e).getCenter(C);let i=0;for(let H=0,V=e.length;H<V;H++)i=Math.max(i,C.distanceToSquared(e[H]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let C=this.center.distanceToSquared(e);return t.copy(e),C>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;O3.subVectors(e,this.center);let t=O3.lengthSq();if(t>this.radius*this.radius){let C=Math.sqrt(t),i=(C-this.radius)*.5;this.center.addScaledVector(O3,i/C),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_6.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(O3.copy(e.center).add(_6)),this.expandByPoint(O3.copy(e.center).sub(_6))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ii=0,L5=new i2,y6=new q2,q0=new w,t5=new H0,E3=new H0,y2=new w,h5=class r extends w5{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ii++}),this.uuid=T0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ni(e)?X3:W3)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,C=0){this.groups.push({start:e,count:t,materialIndex:C})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let C=this.attributes.normal;if(C!==void 0){let H=new P1().getNormalMatrix(e);C.applyNormalMatrix(H),C.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return L5.makeRotationFromQuaternion(e),this.applyMatrix4(L5),this}rotateX(e){return L5.makeRotationX(e),this.applyMatrix4(L5),this}rotateY(e){return L5.makeRotationY(e),this.applyMatrix4(L5),this}rotateZ(e){return L5.makeRotationZ(e),this.applyMatrix4(L5),this}translate(e,t,C){return L5.makeTranslation(e,t,C),this.applyMatrix4(L5),this}scale(e,t,C){return L5.makeScale(e,t,C),this.applyMatrix4(L5),this}lookAt(e){return y6.lookAt(e),y6.updateMatrix(),this.applyMatrix4(y6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(q0).negate(),this.translate(q0.x,q0.y,q0.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let C=[];for(let i=0,H=e.length;i<H;i++){let V=e[i];C.push(V.x,V.y,V.z||0)}this.setAttribute("position",new W2(C,3))}else{let C=Math.min(e.length,t.count);for(let i=0;i<C;i++){let H=e[i];t.setXYZ(i,H.x,H.y,H.z||0)}e.length>t.count&&O1("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new H0);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R1("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let C=0,i=t.length;C<i;C++){let H=t[C];t5.setFromBufferAttribute(H),this.morphTargetsRelative?(y2.addVectors(this.boundingBox.min,t5.min),this.boundingBox.expandByPoint(y2),y2.addVectors(this.boundingBox.max,t5.max),this.boundingBox.expandByPoint(y2)):(this.boundingBox.expandByPoint(t5.min),this.boundingBox.expandByPoint(t5.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R1('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new n3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R1("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let C=this.boundingSphere.center;if(t5.setFromBufferAttribute(e),t)for(let H=0,V=t.length;H<V;H++){let n=t[H];E3.setFromBufferAttribute(n),this.morphTargetsRelative?(y2.addVectors(t5.min,E3.min),t5.expandByPoint(y2),y2.addVectors(t5.max,E3.max),t5.expandByPoint(y2)):(t5.expandByPoint(E3.min),t5.expandByPoint(E3.max))}t5.getCenter(C);let i=0;for(let H=0,V=e.count;H<V;H++)y2.fromBufferAttribute(e,H),i=Math.max(i,C.distanceToSquared(y2));if(t)for(let H=0,V=t.length;H<V;H++){let n=t[H],a=this.morphTargetsRelative;for(let L=0,o=n.count;L<o;L++)y2.fromBufferAttribute(n,L),a&&(q0.fromBufferAttribute(e,L),y2.add(q0)),i=Math.max(i,C.distanceToSquared(y2))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&R1('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R1("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let C=t.position,i=t.normal,H=t.uv,V=this.getAttribute("tangent");(V===void 0||V.count!==C.count)&&(V=new a5(new Float32Array(4*C.count),4),this.setAttribute("tangent",V));let n=[],a=[];for(let m=0;m<C.count;m++)n[m]=new w,a[m]=new w;let L=new w,o=new w,M=new w,s=new m1,l=new m1,u=new m1,f=new w,c=new w;function d(m,Z,R){L.fromBufferAttribute(C,m),o.fromBufferAttribute(C,Z),M.fromBufferAttribute(C,R),s.fromBufferAttribute(H,m),l.fromBufferAttribute(H,Z),u.fromBufferAttribute(H,R),o.sub(L),M.sub(L),l.sub(s),u.sub(s);let I=1/(l.x*u.y-u.x*l.y);isFinite(I)&&(f.copy(o).multiplyScalar(u.y).addScaledVector(M,-l.y).multiplyScalar(I),c.copy(M).multiplyScalar(l.x).addScaledVector(o,-u.x).multiplyScalar(I),n[m].add(f),n[Z].add(f),n[R].add(f),a[m].add(c),a[Z].add(c),a[R].add(c))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let m=0,Z=v.length;m<Z;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new w,h=new w,S=new w,g=new w;function b(m){S.fromBufferAttribute(i,m),g.copy(S);let Z=n[m];y.copy(Z),y.sub(S.multiplyScalar(S.dot(Z))).normalize(),h.crossVectors(g,Z);let I=h.dot(a[m])<0?-1:1;V.setXYZW(m,y.x,y.y,y.z,I)}for(let m=0,Z=v.length;m<Z;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let C=this.getAttribute("normal");if(C===void 0||C.count!==t.count)C=new a5(new Float32Array(t.count*3),3),this.setAttribute("normal",C);else for(let s=0,l=C.count;s<l;s++)C.setXYZ(s,0,0,0);let i=new w,H=new w,V=new w,n=new w,a=new w,L=new w,o=new w,M=new w;if(e)for(let s=0,l=e.count;s<l;s+=3){let u=e.getX(s+0),f=e.getX(s+1),c=e.getX(s+2);i.fromBufferAttribute(t,u),H.fromBufferAttribute(t,f),V.fromBufferAttribute(t,c),o.subVectors(V,H),M.subVectors(i,H),o.cross(M),n.fromBufferAttribute(C,u),a.fromBufferAttribute(C,f),L.fromBufferAttribute(C,c),n.add(o),a.add(o),L.add(o),C.setXYZ(u,n.x,n.y,n.z),C.setXYZ(f,a.x,a.y,a.z),C.setXYZ(c,L.x,L.y,L.z)}else for(let s=0,l=t.count;s<l;s+=3)i.fromBufferAttribute(t,s+0),H.fromBufferAttribute(t,s+1),V.fromBufferAttribute(t,s+2),o.subVectors(V,H),M.subVectors(i,H),o.cross(M),C.setXYZ(s+0,o.x,o.y,o.z),C.setXYZ(s+1,o.x,o.y,o.z),C.setXYZ(s+2,o.x,o.y,o.z);this.normalizeNormals(),C.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,C=e.count;t<C;t++)y2.fromBufferAttribute(e,t),y2.normalize(),e.setXYZ(t,y2.x,y2.y,y2.z)}toNonIndexed(){function e(n,a){let L=n.array,o=n.itemSize,M=n.normalized,s=new L.constructor(a.length*o),l=0,u=0;for(let f=0,c=a.length;f<c;f++){n.isInterleavedBufferAttribute?l=a[f]*n.data.stride+n.offset:l=a[f]*o;for(let d=0;d<o;d++)s[u++]=L[l++]}return new a5(s,o,M)}if(this.index===null)return O1("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,C=this.index.array,i=this.attributes;for(let n in i){let a=i[n],L=e(a,C);t.setAttribute(n,L)}let H=this.morphAttributes;for(let n in H){let a=[],L=H[n];for(let o=0,M=L.length;o<M;o++){let s=L[o],l=e(s,C);a.push(l)}t.morphAttributes[n]=a}t.morphTargetsRelative=this.morphTargetsRelative;let V=this.groups;for(let n=0,a=V.length;n<a;n++){let L=V[n];t.addGroup(L.start,L.count,L.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let L in a)a[L]!==void 0&&(e[L]=a[L]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let C=this.attributes;for(let a in C){let L=C[a];e.data.attributes[a]=L.toJSON(e.data)}let i={},H=!1;for(let a in this.morphAttributes){let L=this.morphAttributes[a],o=[];for(let M=0,s=L.length;M<s;M++){let l=L[M];o.push(l.toJSON(e.data))}o.length>0&&(i[a]=o,H=!0)}H&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let V=this.groups;V.length>0&&(e.data.groups=JSON.parse(JSON.stringify(V)));let n=this.boundingSphere;return n!==null&&(e.data.boundingSphere=n.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let C=e.index;C!==null&&this.setIndex(C.clone());let i=e.attributes;for(let L in i){let o=i[L];this.setAttribute(L,o.clone(t))}let H=e.morphAttributes;for(let L in H){let o=[],M=H[L];for(let s=0,l=M.length;s<l;s++)o.push(M[s].clone(t));this.morphAttributes[L]=o}this.morphTargetsRelative=e.morphTargetsRelative;let V=e.groups;for(let L=0,o=V.length;L<o;L++){let M=V[L];this.addGroup(M.start,M.count,M.materialIndex)}let n=e.boundingBox;n!==null&&(this.boundingBox=n.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var b6=new w,Fi=new w,Di=new P1,u5=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,C,i){return this.normal.set(e,t,C),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,C){let i=b6.subVectors(C,t).cross(Fi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,C=!0){let i=e.delta(b6),H=this.normal.dot(i);if(H===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let V=-(e.start.dot(this.normal)+this.constant)/H;return C===!0&&(V<0||V>1)?null:t.copy(e.start).addScaledVector(i,V)}intersectsLine(e){let t=this.distanceToPoint(e.start),C=this.distanceToPoint(e.end);return t<0&&C>0||C<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let C=t||Di.getNormalMatrix(e),i=this.coplanarPoint(b6).applyMatrix4(e),H=this.normal.applyMatrix3(C).normalize();return this.constant=-i.dot(H),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ki=0,V0=class extends w5{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ki++}),this.uuid=T0(),this.name="",this.type="Material",this.blending=p3,this.side=M0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=J6,this.blendDst=j6,this.blendEquation=y0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new F1(0,0,0),this.blendAlpha=0,this.depthFunc=e3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zt,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=n4,this.stencilZFail=n4,this.stencilZPass=n4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let C=e[t];if(C===void 0){O1(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){O1(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(C):i&&i.isVector2&&C&&C.isVector2||i&&i.isEuler&&C&&C.isEuler||i&&i.isVector3&&C&&C.isVector3?i.copy(C):this[t]=C}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let C={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};C.uuid=this.uuid,C.type=this.type,C.blending=this.blending,C.side=this.side,C.shadowSide=this.shadowSide,C.vertexColors=this.vertexColors,C.opacity=this.opacity,C.transparent=this.transparent,C.blendSrc=this.blendSrc,C.blendDst=this.blendDst,C.blendEquation=this.blendEquation,C.blendSrcAlpha=this.blendSrcAlpha,C.blendDstAlpha=this.blendDstAlpha,C.blendEquationAlpha=this.blendEquationAlpha,C.blendColor=this.blendColor.getHex(),C.blendAlpha=this.blendAlpha,C.depthFunc=this.depthFunc,C.depthTest=this.depthTest,C.depthWrite=this.depthWrite,C.colorWrite=this.colorWrite,C.clipIntersection=this.clipIntersection,C.clipShadows=this.clipShadows,C.stencilWriteMask=this.stencilWriteMask,C.stencilFunc=this.stencilFunc,C.stencilRef=this.stencilRef,C.stencilFuncMask=this.stencilFuncMask,C.stencilFail=this.stencilFail,C.stencilZFail=this.stencilZFail,C.stencilZPass=this.stencilZPass,C.stencilWrite=this.stencilWrite,C.polygonOffset=this.polygonOffset,C.polygonOffsetFactor=this.polygonOffsetFactor,C.polygonOffsetUnits=this.polygonOffsetUnits,C.dithering=this.dithering,C.alphaTest=this.alphaTest,C.alphaHash=this.alphaHash,C.alphaToCoverage=this.alphaToCoverage,C.premultipliedAlpha=this.premultipliedAlpha,C.forceSinglePass=this.forceSinglePass,C.allowOverride=this.allowOverride,C.visible=this.visible,C.toneMapped=this.toneMapped,C.name=this.name,this.color&&this.color.isColor&&(C.color=this.color.getHex()),this.roughness!==void 0&&(C.roughness=this.roughness),this.metalness!==void 0&&(C.metalness=this.metalness),this.sheen!==void 0&&(C.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(C.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(C.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(C.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(C.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(C.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(C.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(C.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(C.shininess=this.shininess),this.clearcoat!==void 0&&(C.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(C.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(C.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(C.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(C.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,C.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(C.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(C.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(C.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(C.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(C.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(C.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(C.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(C.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(C.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(C.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(C.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(C.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(C.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(C.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(C.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(C.lightMap=this.lightMap.toJSON(e).uuid,C.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(C.aoMap=this.aoMap.toJSON(e).uuid,C.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(C.bumpMap=this.bumpMap.toJSON(e).uuid,C.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(C.normalMap=this.normalMap.toJSON(e).uuid,C.normalMapType=this.normalMapType,C.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(C.displacementMap=this.displacementMap.toJSON(e).uuid,C.displacementScale=this.displacementScale,C.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(C.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(C.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(C.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(C.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(C.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(C.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(C.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(C.combine=this.combine)),this.envMapRotation!==void 0&&(C.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(C.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(C.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(C.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(C.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(C.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(C.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(C.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(C.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(C.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(C.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(C.size=this.size),this.sizeAttenuation!==void 0&&(C.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(C.clippingPlanes=this.clippingPlanes.map(H=>H.toJSON())),this.rotation!==void 0&&(C.rotation=this.rotation),this.depthPacking!==void 0&&(C.depthPacking=this.depthPacking),this.linewidth!==void 0&&(C.linewidth=this.linewidth),this.linecap!==void 0&&(C.linecap=this.linecap),this.linejoin!==void 0&&(C.linejoin=this.linejoin),this.dashSize!==void 0&&(C.dashSize=this.dashSize),this.gapSize!==void 0&&(C.gapSize=this.gapSize),this.scale!==void 0&&(C.scale=this.scale),this.wireframe!==void 0&&(C.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(C.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(C.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(C.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(C.flatShading=this.flatShading),this.fog!==void 0&&(C.fog=this.fog),Object.keys(this.userData).length>0&&(C.userData=this.userData);function i(H){let V=[];for(let n in H){let a=H[n];delete a.metadata,V.push(a)}return V}if(t){let H=i(e.textures),V=i(e.images);H.length>0&&(C.textures=H),V.length>0&&(C.images=V)}return C}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new F1().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(C=>new u5().fromJSON(C))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let C=e.normalScale;Array.isArray(C)===!1&&(C=[C,C]),this.normalScale=new m1().fromArray(C)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new m1().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,C=null;if(t!==null){let i=t.length;C=new Array(i);for(let H=0;H!==i;++H)C[H]=t[H].clone()}return this.clippingPlanes=C,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var U5=new w,T6=new w,X7=new w,q7=new w,q3=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,U5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let C=t.dot(this.direction);return C<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,C)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=U5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(U5.copy(this.origin).addScaledVector(this.direction,t),U5.distanceToSquared(e))}distanceSqToSegment(e,t,C,i){T6.copy(e).add(t).multiplyScalar(.5),X7.copy(t).sub(e).normalize(),q7.copy(this.origin).sub(T6);let H=e.distanceTo(t)*.5,V=-this.direction.dot(X7),n=q7.dot(this.direction),a=-q7.dot(X7),L=q7.lengthSq(),o=Math.abs(1-V*V),M,s,l,u;if(o>0)if(M=V*a-n,s=V*n-a,u=H*o,M>=0)if(s>=-u)if(s<=u){let f=1/o;M*=f,s*=f,l=M*(M+V*s+2*n)+s*(V*M+s+2*a)+L}else s=H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;else s=-H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;else s<=-u?(M=Math.max(0,-(-V*H+n)),s=M>0?-H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+L):s<=u?(M=0,s=Math.min(Math.max(-H,-a),H),l=s*(s+2*a)+L):(M=Math.max(0,-(V*H+n)),s=M>0?H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+L);else s=V>0?-H:H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;return C&&C.copy(this.origin).addScaledVector(this.direction,M),i&&i.copy(T6).addScaledVector(X7,s),l}intersectSphere(e,t){if(e.radius<0)return null;U5.subVectors(e.center,this.origin);let C=U5.dot(this.direction),i=U5.dot(U5)-C*C,H=e.radius*e.radius;if(i>H)return null;let V=Math.sqrt(H-i),n=C-V,a=C+V;return a<0?null:n<0?this.at(a,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let C=-(this.origin.dot(e.normal)+e.constant)/t;return C>=0?C:null}intersectPlane(e,t){let C=this.distanceToPlane(e);return C===null?null:this.at(C,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let C,i,H,V,n,a,L=1/this.direction.x,o=1/this.direction.y,M=1/this.direction.z,s=this.origin;return L>=0?(C=(e.min.x-s.x)*L,i=(e.max.x-s.x)*L):(C=(e.max.x-s.x)*L,i=(e.min.x-s.x)*L),o>=0?(H=(e.min.y-s.y)*o,V=(e.max.y-s.y)*o):(H=(e.max.y-s.y)*o,V=(e.min.y-s.y)*o),C>V||H>i||((H>C||isNaN(C))&&(C=H),(V<i||isNaN(i))&&(i=V),M>=0?(n=(e.min.z-s.z)*M,a=(e.max.z-s.z)*M):(n=(e.max.z-s.z)*M,a=(e.min.z-s.z)*M),C>a||n>i)||((n>C||C!==C)&&(C=n),(a<i||i!==i)&&(i=a),i<0)?null:this.at(C>=0?C:i,t)}intersectsBox(e){return this.intersectBox(e,U5)!==null}intersectTriangle(e,t,C,i,H){let V=this.origin,n=this.direction,a=n.x,L=n.y,o=n.z,M=e.x-V.x,s=e.y-V.y,l=e.z-V.z,u=t.x-V.x,f=t.y-V.y,c=t.z-V.z,d=C.x-V.x,v=C.y-V.y,y=C.z-V.z,h=Math.abs(a),S=Math.abs(L),g=Math.abs(o),b,m,Z,R,I,N,G,P,U,Q,Y,r1;if(h>=S&&h>=g?(Z=a,N=M,U=u,r1=d,a>=0?(b=L,m=o,R=s,I=l,G=f,P=c,Q=v,Y=y):(b=o,m=L,R=l,I=s,G=c,P=f,Q=y,Y=v)):S>=g?(Z=L,N=s,U=f,r1=v,L>=0?(b=o,m=a,R=l,I=M,G=c,P=u,Q=y,Y=d):(b=a,m=o,R=M,I=l,G=u,P=c,Q=d,Y=y)):(Z=o,N=l,U=c,r1=y,o>=0?(b=a,m=L,R=M,I=s,G=u,P=f,Q=d,Y=v):(b=L,m=a,R=s,I=M,G=f,P=u,Q=v,Y=d)),Z===0)return null;let X=b/Z,e1=m/Z,C1=1/Z,b1=R-X*N,_1=I-e1*N,V2=G-X*U,q1=P-e1*U,J1=Q-X*r1,q=Y-e1*r1,j=J1*q1-q*V2,h1=b1*q-_1*J1,B1=V2*_1-q1*b1;if(i){if(j<0||h1<0||B1<0)return null}else if((j<0||h1<0||B1<0)&&(j>0||h1>0||B1>0))return null;let u1=j+h1+B1;if(u1===0)return null;let N1=C1*(j*N+h1*U+B1*r1);return(u1>0?N1<0:N1>0)?null:this.at(N1/u1,H)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$3=class extends V0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new F1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new o5,this.combine=e8,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Be=new i2,S0=new q3,$7=new n3,Ie=new w,Y7=new w,Q7=new w,K7=new w,w6=new w,J7=new w,Fe=new w,j7=new w,$2=class extends q2{constructor(e=new h5,t=new $3){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,C=Object.keys(t);if(C.length>0){let i=t[C[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,V=i.length;H<V;H++){let n=i[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=H}}}}getVertexPosition(e,t){let C=this.geometry,i=C.attributes.position,H=C.morphAttributes.position,V=C.morphTargetsRelative;t.fromBufferAttribute(i,e);let n=this.morphTargetInfluences;if(H&&n){J7.set(0,0,0);for(let a=0,L=H.length;a<L;a++){let o=n[a],M=H[a];o!==0&&(w6.fromBufferAttribute(M,e),V?J7.addScaledVector(w6,o):J7.addScaledVector(w6.sub(t),o))}t.add(J7)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let C=this.geometry,i=this.material,H=this.matrixWorld;i!==void 0&&(C.boundingSphere===null&&C.computeBoundingSphere(),$7.copy(C.boundingSphere),$7.applyMatrix4(H),S0.copy(e.ray).recast(e.near),!($7.containsPoint(S0.origin)===!1&&(S0.intersectSphere($7,Ie)===null||S0.origin.distanceToSquared(Ie)>(e.far-e.near)**2))&&(Be.copy(H).invert(),S0.copy(e.ray).applyMatrix4(Be),!(C.boundingBox!==null&&S0.intersectsBox(C.boundingBox)===!1)&&this._computeIntersections(e,t,S0)))}_computeIntersections(e,t,C){let i,H=this.geometry,V=this.material,n=H.index,a=H.attributes.position,L=H.attributes.uv,o=H.attributes.uv1,M=H.attributes.normal,s=H.groups,l=H.drawRange;if(n!==null)if(Array.isArray(V))for(let u=0,f=s.length;u<f;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),y=Math.min(n.count,Math.min(c.start+c.count,l.start+l.count));for(let h=v,S=y;h<S;h+=3){let g=n.getX(h),b=n.getX(h+1),m=n.getX(h+2);i=e4(this,d,e,C,L,o,M,g,b,m),i&&(i.faceIndex=Math.floor(h/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let u=Math.max(0,l.start),f=Math.min(n.count,l.start+l.count);for(let c=u,d=f;c<d;c+=3){let v=n.getX(c),y=n.getX(c+1),h=n.getX(c+2);i=e4(this,V,e,C,L,o,M,v,y,h),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(V))for(let u=0,f=s.length;u<f;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),y=Math.min(a.count,Math.min(c.start+c.count,l.start+l.count));for(let h=v,S=y;h<S;h+=3){let g=h,b=h+1,m=h+2;i=e4(this,d,e,C,L,o,M,g,b,m),i&&(i.faceIndex=Math.floor(h/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let u=Math.max(0,l.start),f=Math.min(a.count,l.start+l.count);for(let c=u,d=f;c<d;c+=3){let v=c,y=c+1,h=c+2;i=e4(this,V,e,C,L,o,M,v,y,h),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}}};function Ni(r,e,t,C,i,H,V,n){let a;if(e.side===Y2?a=C.intersectTriangle(V,H,i,!0,n):a=C.intersectTriangle(i,H,V,e.side===M0,n),a===null)return null;j7.copy(n),j7.applyMatrix4(r.matrixWorld);let L=t.ray.origin.distanceTo(j7);return L<t.near||L>t.far?null:{distance:L,point:j7.clone(),object:r}}function e4(r,e,t,C,i,H,V,n,a,L){r.getVertexPosition(n,Y7),r.getVertexPosition(a,Q7),r.getVertexPosition(L,K7);let o=Ni(r,e,t,C,Y7,Q7,K7,Fe);if(o){let M=new w;i0.getBarycoord(Fe,Y7,Q7,K7,M),i&&(o.uv=i0.getInterpolatedAttribute(i,n,a,L,M,new m1)),H&&(o.uv1=i0.getInterpolatedAttribute(H,n,a,L,M,new m1)),V&&(o.normal=i0.getInterpolatedAttribute(V,n,a,L,M,new w),o.normal.dot(C.direction)>0&&o.normal.multiplyScalar(-1));let s={a:n,b:a,c:L,normal:new w,materialIndex:0};i0.getNormal(Y7,Q7,K7,s.normal),o.face=s,o.barycoord=M}return o}var f4=class extends X2{constructor(e=null,t=1,C=1,i,H,V,n,a,L=b2,o=b2,M,s){super(null,V,n,a,L,o,i,H,M,s),this.isDataTexture=!0,this.image={data:e,width:t,height:C},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var g0=new n3,Ui=new m1(.5,.5),t4=new w,L3=class{constructor(e=new u5,t=new u5,C=new u5,i=new u5,H=new u5,V=new u5){this.planes=[e,t,C,i,H,V]}set(e,t,C,i,H,V){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(C),n[3].copy(i),n[4].copy(H),n[5].copy(V),this}copy(e){let t=this.planes;for(let C=0;C<6;C++)t[C].copy(e.planes[C]);return this}setFromProjectionMatrix(e,t=A5,C=!1){let i=this.planes,H=e.elements,V=H[0],n=H[1],a=H[2],L=H[3],o=H[4],M=H[5],s=H[6],l=H[7],u=H[8],f=H[9],c=H[10],d=H[11],v=H[12],y=H[13],h=H[14],S=H[15];if(i[0].setComponents(L-V,l-o,d-u,S-v).normalize(),i[1].setComponents(L+V,l+o,d+u,S+v).normalize(),i[2].setComponents(L+n,l+M,d+f,S+y).normalize(),i[3].setComponents(L-n,l-M,d-f,S-y).normalize(),C)i[4].setComponents(a,s,c,h).normalize(),i[5].setComponents(L-a,l-s,d-c,S-h).normalize();else if(i[4].setComponents(L-a,l-s,d-c,S-h).normalize(),t===A5)i[5].setComponents(L+a,l+s,d+c,S+h).normalize();else if(t===t3)i[5].setComponents(a,s,c,h).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),g0.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),g0.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(g0)}intersectsSprite(e){g0.center.set(0,0,0);let t=Ui.distanceTo(e.center);return g0.radius=.7071067811865476+t,g0.applyMatrix4(e.matrixWorld),this.intersectsSphere(g0)}intersectsSphere(e){let t=this.planes,C=e.center,i=-e.radius;for(let H=0;H<6;H++)if(t[H].distanceToPoint(C)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let C=0;C<6;C++){let i=t[C];if(t4.x=i.normal.x>0?e.max.x:e.min.x,t4.y=i.normal.y>0?e.max.y:e.min.y,t4.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(t4)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let C=0;C<6;C++)if(t[C].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Y3=class extends X2{constructor(e=[],t=l0,C,i,H,V,n,a,L,o){super(e,t,C,i,H,V,n,a,L,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Q3=class extends X2{constructor(e,t,C,i,H,V,n,a,L){super(e,t,C,i,H,V,n,a,L),this.isCanvasTexture=!0,this.needsUpdate=!0}};var n0=class extends X2{constructor(e,t,C=x5,i,H,V,n=b2,a=b2,L,o=T5,M=1){if(o!==T5&&o!==c0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let s={width:e,height:t,depth:M};super(s,i,H,V,n,a,o,C,L),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new i3(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},x4=class extends n0{constructor(e,t=x5,C=l0,i,H,V=b2,n=b2,a,L=T5){let o={width:e,height:e,depth:1},M=[o,o,o,o,o,o];super(e,e,t,C,i,H,V,n,a,L),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},K3=class extends X2{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},L0=class r extends h5{constructor(e=1,t=1,C=1,i=1,H=1,V=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:C,widthSegments:i,heightSegments:H,depthSegments:V};let n=this;i=Math.floor(i),H=Math.floor(H),V=Math.floor(V);let a=[],L=[],o=[],M=[],s=0,l=0;u("z","y","x",-1,-1,C,t,e,V,H,0),u("z","y","x",1,-1,C,t,-e,V,H,1),u("x","z","y",1,1,e,C,t,i,V,2),u("x","z","y",1,-1,e,C,-t,i,V,3),u("x","y","z",1,-1,e,t,C,i,H,4),u("x","y","z",-1,-1,e,t,-C,i,H,5),this.setIndex(a),this.setAttribute("position",new W2(L,3)),this.setAttribute("normal",new W2(o,3)),this.setAttribute("uv",new W2(M,2));function u(f,c,d,v,y,h,S,g,b,m,Z){let R=h/b,I=S/m,N=h/2,G=S/2,P=g/2,U=b+1,Q=m+1,Y=0,r1=0,X=new w;for(let e1=0;e1<Q;e1++){let C1=e1*I-G;for(let b1=0;b1<U;b1++){let _1=b1*R-N;X[f]=_1*v,X[c]=C1*y,X[d]=P,L.push(X.x,X.y,X.z),X[f]=0,X[c]=0,X[d]=g>0?1:-1,o.push(X.x,X.y,X.z),M.push(b1/b),M.push(1-e1/m),Y+=1}}for(let e1=0;e1<m;e1++)for(let C1=0;C1<b;C1++){let b1=s+C1+U*e1,_1=s+C1+U*(e1+1),V2=s+(C1+1)+U*(e1+1),q1=s+(C1+1)+U*e1;a.push(b1,_1,q1),a.push(_1,V2,q1),r1+=6}n.addGroup(l,r1,Z),l+=r1,s+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var C5=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){O1("Curve: .getPoint() not implemented.")}getPointAt(e,t){let C=this.getUtoTmapping(e);return this.getPoint(C,t)}getPoints(e=5){let t=[];for(let C=0;C<=e;C++)t.push(this.getPoint(C/e));return t}getSpacedPoints(e=5){let t=[];for(let C=0;C<=e;C++)t.push(this.getPointAt(C/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],C,i=this.getPoint(0),H=0;t.push(0);for(let V=1;V<=e;V++)C=this.getPoint(V/e),H+=C.distanceTo(i),t.push(H),i=C;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let C=this.getLengths(),i=0,H=C.length,V;t?V=t:V=e*C[H-1];let n=0,a=H-1,L;for(;n<=a;)if(i=Math.floor(n+(a-n)/2),L=C[i]-V,L<0)n=i+1;else if(L>0)a=i-1;else{a=i;break}if(i=a,C[i]===V)return i/(H-1);let o=C[i],s=C[i+1]-o,l=(V-o)/s;return(i+l)/(H-1)}getTangent(e,t){let i=e-1e-4,H=e+1e-4;i<0&&(i=0),H>1&&(H=1);let V=this.getPoint(i),n=this.getPoint(H),a=t||(V.isVector2?new m1:new w);return a.copy(n).sub(V).normalize(),a}getTangentAt(e,t){let C=this.getUtoTmapping(e);return this.getTangent(C,t)}computeFrenetFrames(e,t=!1){let C=new w,i=[],H=[],V=[],n=new w,a=new i2;for(let l=0;l<=e;l++){let u=l/e;i[l]=this.getTangentAt(u,new w)}H[0]=new w,V[0]=new w;let L=Number.MAX_VALUE,o=Math.abs(i[0].x),M=Math.abs(i[0].y),s=Math.abs(i[0].z);o<=L&&(L=o,C.set(1,0,0)),M<=L&&(L=M,C.set(0,1,0)),s<=L&&C.set(0,0,1),n.crossVectors(i[0],C).normalize(),H[0].crossVectors(i[0],n),V[0].crossVectors(i[0],H[0]);for(let l=1;l<=e;l++){if(H[l]=H[l-1].clone(),V[l]=V[l-1].clone(),n.crossVectors(i[l-1],i[l]),n.length()>Number.EPSILON){n.normalize();let u=Math.acos(U1(i[l-1].dot(i[l]),-1,1));H[l].applyMatrix4(a.makeRotationAxis(n,u))}V[l].crossVectors(i[l],H[l])}if(t===!0){let l=Math.acos(U1(H[0].dot(H[e]),-1,1));l/=e,i[0].dot(n.crossVectors(H[0],H[e]))>0&&(l=-l);for(let u=1;u<=e;u++)H[u].applyMatrix4(a.makeRotationAxis(i[u],l*u)),V[u].crossVectors(i[u],H[u])}return{tangents:i,normals:H,binormals:V}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},a3=class extends C5{constructor(e=0,t=0,C=1,i=1,H=0,V=Math.PI*2,n=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=C,this.yRadius=i,this.aStartAngle=H,this.aEndAngle=V,this.aClockwise=n,this.aRotation=a}getPoint(e,t=new m1){let C=t,i=Math.PI*2,H=this.aEndAngle-this.aStartAngle,V=Math.abs(H)<Number.EPSILON;for(;H<0;)H+=i;for(;H>i;)H-=i;H<Number.EPSILON&&(V?H=0:H=i),this.aClockwise===!0&&!V&&(H===i?H=-i:H=H-i);let n=this.aStartAngle+e*H,a=this.aX+this.xRadius*Math.cos(n),L=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let o=Math.cos(this.aRotation),M=Math.sin(this.aRotation),s=a-this.aX,l=L-this.aY;a=s*o-l*M+this.aX,L=s*M+l*o+this.aY}return C.set(a,L)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},v4=class extends a3{constructor(e,t,C,i,H,V){super(e,t,C,C,i,H,V),this.isArcCurve=!0,this.type="ArcCurve"}};function h8(){let r=0,e=0,t=0,C=0;function i(H,V,n,a){r=H,e=n,t=-3*H+3*V-2*n-a,C=2*H-2*V+n+a}return{initCatmullRom:function(H,V,n,a,L){i(V,n,L*(n-H),L*(a-V))},initNonuniformCatmullRom:function(H,V,n,a,L,o,M){let s=(V-H)/L-(n-H)/(L+o)+(n-V)/o,l=(n-V)/o-(a-V)/(o+M)+(a-n)/M;s*=o,l*=o,i(V,n,s,l)},calc:function(H){let V=H*H,n=V*H;return r+e*H+t*V+C*n}}}var De=new w,ke=new w,O6=new h8,E6=new h8,R6=new h8,S4=class extends C5{constructor(e=[],t=!1,C="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=C,this.tension=i}getPoint(e,t=new w){let C=t,i=this.points,H=i.length,V=(H-(this.closed?0:1))*e,n=Math.floor(V),a=V-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/H)+1)*H:a===0&&n===H-1&&(n=H-2,a=1);let L,o;this.closed||n>0?L=i[(n-1)%H]:(ke.subVectors(i[0],i[1]).add(i[0]),L=ke);let M=i[n%H],s=i[(n+1)%H];if(this.closed||n+2<H?o=i[(n+2)%H]:(De.subVectors(i[H-1],i[H-2]).add(i[H-1]),o=De),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,u=Math.pow(L.distanceToSquared(M),l),f=Math.pow(M.distanceToSquared(s),l),c=Math.pow(s.distanceToSquared(o),l);f<1e-4&&(f=1),u<1e-4&&(u=f),c<1e-4&&(c=f),O6.initNonuniformCatmullRom(L.x,M.x,s.x,o.x,u,f,c),E6.initNonuniformCatmullRom(L.y,M.y,s.y,o.y,u,f,c),R6.initNonuniformCatmullRom(L.z,M.z,s.z,o.z,u,f,c)}else this.curveType==="catmullrom"&&(O6.initCatmullRom(L.x,M.x,s.x,o.x,this.tension),E6.initCatmullRom(L.y,M.y,s.y,o.y,this.tension),R6.initCatmullRom(L.z,M.z,s.z,o.z,this.tension));return C.set(O6.calc(a),E6.calc(a),R6.calc(a)),C}copy(e){super.copy(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,C=this.points.length;t<C;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ne(r,e,t,C,i){let H=(C-e)*.5,V=(i-t)*.5,n=r*r,a=r*n;return(2*t-2*C+H+V)*a+(-3*t+3*C-2*H-V)*n+H*r+t}function zi(r,e){let t=1-r;return t*t*e}function Gi(r,e){return 2*(1-r)*r*e}function Wi(r,e){return r*r*e}function I3(r,e,t,C){return zi(r,e)+Gi(r,t)+Wi(r,C)}function Xi(r,e){let t=1-r;return t*t*t*e}function qi(r,e){let t=1-r;return 3*t*t*r*e}function $i(r,e){return 3*(1-r)*r*r*e}function Yi(r,e){return r*r*r*e}function F3(r,e,t,C,i){return Xi(r,e)+qi(r,t)+$i(r,C)+Yi(r,i)}var J3=class extends C5{constructor(e=new m1,t=new m1,C=new m1,i=new m1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=C,this.v3=i}getPoint(e,t=new m1){let C=t,i=this.v0,H=this.v1,V=this.v2,n=this.v3;return C.set(F3(e,i.x,H.x,V.x,n.x),F3(e,i.y,H.y,V.y,n.y)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},g4=class extends C5{constructor(e=new w,t=new w,C=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=C,this.v3=i}getPoint(e,t=new w){let C=t,i=this.v0,H=this.v1,V=this.v2,n=this.v3;return C.set(F3(e,i.x,H.x,V.x,n.x),F3(e,i.y,H.y,V.y,n.y),F3(e,i.z,H.z,V.z,n.z)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},j3=class extends C5{constructor(e=new m1,t=new m1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new m1){let C=t;return e===1?C.copy(this.v2):(C.copy(this.v2).sub(this.v1),C.multiplyScalar(e).add(this.v1)),C}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new m1){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Z4=class extends C5{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let C=t;return e===1?C.copy(this.v2):(C.copy(this.v2).sub(this.v1),C.multiplyScalar(e).add(this.v1)),C}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},e7=class extends C5{constructor(e=new m1,t=new m1,C=new m1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=C}getPoint(e,t=new m1){let C=t,i=this.v0,H=this.v1,V=this.v2;return C.set(I3(e,i.x,H.x,V.x),I3(e,i.y,H.y,V.y)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_4=class extends C5{constructor(e=new w,t=new w,C=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=C}getPoint(e,t=new w){let C=t,i=this.v0,H=this.v1,V=this.v2;return C.set(I3(e,i.x,H.x,V.x),I3(e,i.y,H.y,V.y),I3(e,i.z,H.z,V.z)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},t7=class extends C5{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new m1){let C=t,i=this.points,H=(i.length-1)*e,V=Math.floor(H),n=H-V,a=i[V===0?V:V-1],L=i[V],o=i[V>i.length-2?i.length-1:V+1],M=i[V>i.length-3?i.length-1:V+2];return C.set(Ne(n,a.x,L.x,o.x,M.x),Ne(n,a.y,L.y,o.y,M.y)),C}copy(e){super.copy(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,C=this.points.length;t<C;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(new m1().fromArray(i))}return this}},Ue=Object.freeze({__proto__:null,ArcCurve:v4,CatmullRomCurve3:S4,CubicBezierCurve:J3,CubicBezierCurve3:g4,EllipseCurve:a3,LineCurve:j3,LineCurve3:Z4,QuadraticBezierCurve:e7,QuadraticBezierCurve3:_4,SplineCurve:t7}),y4=class extends C5{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let C=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ue[C](t,e))}return this}getPoint(e,t){let C=e*this.getLength(),i=this.getCurveLengths(),H=0;for(;H<i.length;){if(i[H]>=C){let V=i[H]-C,n=this.curves[H],a=n.getLength(),L=a===0?0:1-V/a;return n.getPointAt(L,t)}H++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let C=0,i=this.curves.length;C<i;C++)t+=this.curves[C].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let C=0;C<=e;C++)t.push(this.getPoint(C/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],C;for(let i=0,H=this.curves;i<H.length;i++){let V=H[i],n=V.isEllipseCurve?e*2:V.isLineCurve||V.isLineCurve3?1:V.isSplineCurve?e*V.points.length:e,a=V.getPoints(n);for(let L=0;L<a.length;L++){let o=a[L];C&&C.equals(o)||(t.push(o),C=o)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,C=e.curves.length;t<C;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,C=this.curves.length;t<C;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,C=e.curves.length;t<C;t++){let i=e.curves[t];this.curves.push(new Ue[i.type]().fromJSON(i))}return this}},C7=class extends y4{constructor(e){super(),this.type="Path",this.currentPoint=new m1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,C=e.length;t<C;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let C=new j3(this.currentPoint.clone(),new m1(e,t));return this.curves.push(C),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,C,i){let H=new e7(this.currentPoint.clone(),new m1(e,t),new m1(C,i));return this.curves.push(H),this.currentPoint.set(C,i),this}bezierCurveTo(e,t,C,i,H,V){let n=new J3(this.currentPoint.clone(),new m1(e,t),new m1(C,i),new m1(H,V));return this.curves.push(n),this.currentPoint.set(H,V),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),C=new t7(t);return this.curves.push(C),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,C,i,H,V){let n=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+n,t+a,C,i,H,V),this}absarc(e,t,C,i,H,V){return this.absellipse(e,t,C,C,i,H,V),this}ellipse(e,t,C,i,H,V,n,a){let L=this.currentPoint.x,o=this.currentPoint.y;return this.absellipse(e+L,t+o,C,i,H,V,n,a),this}absellipse(e,t,C,i,H,V,n,a){let L=new a3(e,t,C,i,H,V,n,a);if(this.curves.length>0){let M=L.getPoint(0);M.equals(this.currentPoint)||this.lineTo(M.x,M.y)}this.curves.push(L);let o=L.getPoint(1);return this.currentPoint.copy(o),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},o3=class extends C7{constructor(e){super(e),this.uuid=T0(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let C=0,i=this.holes.length;C<i;C++)t[C]=this.holes[C].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,C=e.holes.length;t<C;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,C=this.holes.length;t<C;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,C=e.holes.length;t<C;t++){let i=e.holes[t];this.holes.push(new C7().fromJSON(i))}return this}};function Qi(r,e,t=2){let C=e&&e.length,i=C?e[0]*t:r.length,H=Dt(r,0,i,t,!0),V=[];if(!H||H.next===H.prev)return V;let n,a,L;if(C&&(H=tH(r,e,H,t)),r.length>80*t){n=r[0],a=r[1];let o=n,M=a;for(let s=t;s<i;s+=t){let l=r[s],u=r[s+1];l<n&&(n=l),u<a&&(a=u),l>o&&(o=l),u>M&&(M=u)}L=Math.max(o-n,M-a),L=L!==0?32767/L:0}return r7(H,V,t,n,a,L,0),V}function Dt(r,e,t,C,i){let H;if(i===MH(r,e,t,C)>0)for(let V=e;V<t;V+=C)H=ze(V/C|0,r[V],r[V+1],H);else for(let V=t-C;V>=e;V-=C)H=ze(V/C|0,r[V],r[V+1],H);return H&&s3(H,H.next)&&(H7(H),H=H.next),H}function _0(r,e){if(!r)return r;e||(e=r);let t=r,C;do if(C=!1,!t.steiner&&(s3(t,t.next)||c2(t.prev,t,t.next)===0)){if(H7(t),t=e=t.prev,t===t.next)break;C=!0}else t=t.next;while(C||t!==e);return e}function r7(r,e,t,C,i,H,V){if(!r)return;!V&&H&&VH(r,C,i,H);let n=r;for(;r.prev!==r.next;){let a=r.prev,L=r.next;if(H?Ji(r,C,i,H):Ki(r)){e.push(a.i,r.i,L.i),H7(r),r=L.next,n=L.next;continue}if(r=L,r===n){V?V===1?(r=ji(_0(r),e),r7(r,e,t,C,i,H,2)):V===2&&eH(r,e,t,C,i,H):r7(_0(r),e,t,C,i,H,1);break}}}function Ki(r){let e=r.prev,t=r,C=r.next;if(c2(e,t,C)>=0)return!1;let i=e.x,H=t.x,V=C.x,n=e.y,a=t.y,L=C.y,o=Math.min(i,H,V),M=Math.min(n,a,L),s=Math.max(i,H,V),l=Math.max(n,a,L),u=C.next;for(;u!==e;){if(u.x>=o&&u.x<=s&&u.y>=M&&u.y<=l&&R3(i,n,H,a,V,L,u.x,u.y)&&c2(u.prev,u,u.next)>=0)return!1;u=u.next}return!0}function Ji(r,e,t,C){let i=r.prev,H=r,V=r.next;if(c2(i,H,V)>=0)return!1;let n=i.x,a=H.x,L=V.x,o=i.y,M=H.y,s=V.y,l=Math.min(n,a,L),u=Math.min(o,M,s),f=Math.max(n,a,L),c=Math.max(o,M,s),d=N6(l,u,e,t,C),v=N6(f,c,e,t,C),y=r.prevZ,h=r.nextZ;for(;y&&y.z>=d&&h&&h.z<=v;){if(y.x>=l&&y.x<=f&&y.y>=u&&y.y<=c&&y!==i&&y!==V&&R3(n,o,a,M,L,s,y.x,y.y)&&c2(y.prev,y,y.next)>=0||(y=y.prevZ,h.x>=l&&h.x<=f&&h.y>=u&&h.y<=c&&h!==i&&h!==V&&R3(n,o,a,M,L,s,h.x,h.y)&&c2(h.prev,h,h.next)>=0))return!1;h=h.nextZ}for(;y&&y.z>=d;){if(y.x>=l&&y.x<=f&&y.y>=u&&y.y<=c&&y!==i&&y!==V&&R3(n,o,a,M,L,s,y.x,y.y)&&c2(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;h&&h.z<=v;){if(h.x>=l&&h.x<=f&&h.y>=u&&h.y<=c&&h!==i&&h!==V&&R3(n,o,a,M,L,s,h.x,h.y)&&c2(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function ji(r,e){let t=r;do{let C=t.prev,i=t.next.next;!s3(C,i)&&Nt(C,t,t.next,i)&&i7(C,i)&&i7(i,C)&&(e.push(C.i,t.i,i.i),H7(t),H7(t.next),t=r=i),t=t.next}while(t!==r);return _0(t)}function eH(r,e,t,C,i,H){let V=r;do{let n=V.next.next;for(;n!==V.prev;){if(V.i!==n.i&&aH(V,n)){let a=Ut(V,n);V=_0(V,V.next),a=_0(a,a.next),r7(V,e,t,C,i,H,0),r7(a,e,t,C,i,H,0);return}n=n.next}V=V.next}while(V!==r)}function tH(r,e,t,C){let i=[];for(let H=0,V=e.length;H<V;H++){let n=e[H]*C,a=H<V-1?e[H+1]*C:r.length,L=Dt(r,n,a,C,!1);L===L.next&&(L.steiner=!0),i.push(LH(L))}i.sort(CH);for(let H=0;H<i.length;H++)t=rH(i[H],t);return t}function CH(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let C=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=C-i}return t}function rH(r,e){let t=iH(r,e);if(!t)return e;let C=Ut(t,r);return _0(C,C.next),_0(t,t.next)}function iH(r,e){let t=e,C=r.x,i=r.y,H=-1/0,V;if(s3(r,t))return t;do{if(s3(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let M=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(M<=C&&M>H&&(H=M,V=t.x<t.next.x?t:t.next,M===C))return V}t=t.next}while(t!==e);if(!V)return null;let n=V,a=V.x,L=V.y,o=1/0;t=V;do{if(C>=t.x&&t.x>=a&&C!==t.x&&kt(i<L?C:H,i,a,L,i<L?H:C,i,t.x,t.y)){let M=Math.abs(i-t.y)/(C-t.x);i7(t,r)&&(M<o||M===o&&(t.x>V.x||t.x===V.x&&HH(V,t)))&&(V=t,o=M)}t=t.next}while(t!==n);return V}function HH(r,e){return c2(r.prev,r,e.prev)<0&&c2(e.next,r,r.next)<0}function VH(r,e,t,C){let i=r;do i.z===0&&(i.z=N6(i.x,i.y,e,t,C)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,nH(i)}function nH(r){let e,t=1;do{let C=r,i;r=null;let H=null;for(e=0;C;){e++;let V=C,n=0;for(let L=0;L<t&&(n++,V=V.nextZ,!!V);L++);let a=t;for(;n>0||a>0&&V;)n!==0&&(a===0||!V||C.z<=V.z)?(i=C,C=C.nextZ,n--):(i=V,V=V.nextZ,a--),H?H.nextZ=i:r=i,i.prevZ=H,H=i;C=V}H.nextZ=null,t*=2}while(e>1);return r}function N6(r,e,t,C,i){return r=(r-t)*i|0,e=(e-C)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function LH(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function kt(r,e,t,C,i,H,V,n){return(i-V)*(e-n)>=(r-V)*(H-n)&&(r-V)*(C-n)>=(t-V)*(e-n)&&(t-V)*(H-n)>=(i-V)*(C-n)}function R3(r,e,t,C,i,H,V,n){return!(r===V&&e===n)&&kt(r,e,t,C,i,H,V,n)}function aH(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!oH(r,e)&&(i7(r,e)&&i7(e,r)&&sH(r,e)&&(c2(r.prev,r,e.prev)||c2(r,e.prev,e))||s3(r,e)&&c2(r.prev,r,r.next)>0&&c2(e.prev,e,e.next)>0)}function c2(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function s3(r,e){return r.x===e.x&&r.y===e.y}function Nt(r,e,t,C){let i=r4(c2(r,e,t)),H=r4(c2(r,e,C)),V=r4(c2(t,C,r)),n=r4(c2(t,C,e));return!!(i!==H&&V!==n||i===0&&C4(r,t,e)||H===0&&C4(r,C,e)||V===0&&C4(t,r,C)||n===0&&C4(t,e,C))}function C4(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function r4(r){return r>0?1:r<0?-1:0}function oH(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Nt(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function i7(r,e){return c2(r.prev,r,r.next)<0?c2(r,e,r.next)>=0&&c2(r,r.prev,e)>=0:c2(r,e,r.prev)<0||c2(r,r.next,e)<0}function sH(r,e){let t=r,C=!1,i=(r.x+e.x)/2,H=(r.y+e.y)/2;do t.y>H!=t.next.y>H&&t.next.y!==t.y&&i<(t.next.x-t.x)*(H-t.y)/(t.next.y-t.y)+t.x&&(C=!C),t=t.next;while(t!==r);return C}function Ut(r,e){let t=U6(r.i,r.x,r.y),C=U6(e.i,e.x,e.y),i=r.next,H=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,C.next=t,t.prev=C,H.next=C,C.prev=H,C}function ze(r,e,t,C){let i=U6(r,e,t);return C?(i.next=C.next,i.prev=C,C.next.prev=i,C.next=i):(i.prev=i,i.next=i),i}function H7(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function U6(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function MH(r,e,t,C){let i=0;for(let H=e,V=t-C;H<t;H+=C)i+=(r[V]-r[H])*(r[H+1]+r[V+1]),V=H;return i}var z6=class{static triangulate(e,t,C=2){return Qi(e,t,C)}},j0=class r{static area(e){let t=e.length,C=0;for(let i=t-1,H=0;H<t;i=H++)C+=e[i].x*e[H].y-e[H].x*e[i].y;return C*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let C=[],i=[],H=[];Ge(e),We(C,e);let V=e.length;t.forEach(Ge);for(let a=0;a<t.length;a++)i.push(V),V+=t[a].length,We(C,t[a]);let n=z6.triangulate(C,i);for(let a=0;a<n.length;a+=3)H.push(n.slice(a,a+3));return H}};function Ge(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function We(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var V7=class r extends h5{constructor(e=1,t=1,C=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:C,heightSegments:i};let H=e/2,V=t/2,n=Math.floor(C),a=Math.floor(i),L=n+1,o=a+1,M=e/n,s=t/a,l=[],u=[],f=[],c=[];for(let d=0;d<o;d++){let v=d*s-V;for(let y=0;y<L;y++){let h=y*M-H;u.push(h,-v,0),f.push(0,0,1),c.push(y/n),c.push(1-d/a)}}for(let d=0;d<a;d++)for(let v=0;v<n;v++){let y=v+L*d,h=v+L*(d+1),S=v+1+L*(d+1),g=v+1+L*d;l.push(y,h,g),l.push(h,S,g)}this.setIndex(l),this.setAttribute("position",new W2(u,3)),this.setAttribute("normal",new W2(f,3)),this.setAttribute("uv",new W2(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var n7=class r extends h5{constructor(e=new o3([new m1(0,.5),new m1(-.5,-.5),new m1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let C=[],i=[],H=[],V=[],n=0,a=0;if(Array.isArray(e)===!1)L(e);else for(let o=0;o<e.length;o++)L(e[o]),this.addGroup(n,a,o),n+=a,a=0;this.setIndex(C),this.setAttribute("position",new W2(i,3)),this.setAttribute("normal",new W2(H,3)),this.setAttribute("uv",new W2(V,2));function L(o){let M=i.length/3,s=o.extractPoints(t),l=s.shape,u=s.holes;j0.isClockWise(l)===!1&&(l=l.reverse());for(let c=0,d=u.length;c<d;c++){let v=u[c];j0.isClockWise(v)===!0&&(u[c]=v.reverse())}let f=j0.triangulateShape(l,u);for(let c=0,d=u.length;c<d;c++){let v=u[c];l=l.concat(v)}for(let c=0,d=l.length;c<d;c++){let v=l[c];i.push(v.x,v.y,0),H.push(0,0,1),V.push(v.x,v.y)}for(let c=0,d=f.length;c<d;c++){let v=f[c],y=v[0]+M,h=v[1]+M,S=v[2]+M;C.push(y,h,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return lH(t,e)}static fromJSON(e,t){let C=[];for(let i=0,H=e.shapes.length;i<H;i++){let V=t[e.shapes[i]];C.push(V)}return new r(C,e.curveSegments)}};function lH(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,C=r.length;t<C;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}function w0(r){let e={};for(let t in r){e[t]={};for(let C in r[t]){let i=r[t][C];if(Xe(i))i.isRenderTargetTexture?(O1("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][C]=null):e[t][C]=i.clone();else if(Array.isArray(i))if(Xe(i[0])){let H=[];for(let V=0,n=i.length;V<n;V++)H[V]=i[V].clone();e[t][C]=H}else e[t][C]=i.slice();else e[t][C]=i}}return e}function D2(r){let e={};for(let t=0;t<r.length;t++){let C=w0(r[t]);for(let i in C)e[i]=C[i]}return e}function Xe(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function dH(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function f8(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:X1.workingColorSpace}var zt={clone:w0,merge:D2},cH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,r5=class extends V0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cH,this.fragmentShader=pH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=w0(e.uniforms),this.uniformsGroups=dH(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let V=this.uniforms[i].value;V&&V.isTexture?t.uniforms[i]={type:"t",value:V.toJSON(e).uuid}:V&&V.isColor?t.uniforms[i]={type:"c",value:V.getHex()}:V&&V.isVector2?t.uniforms[i]={type:"v2",value:V.toArray()}:V&&V.isVector3?t.uniforms[i]={type:"v3",value:V.toArray()}:V&&V.isVector4?t.uniforms[i]={type:"v4",value:V.toArray()}:V&&V.isMatrix3?t.uniforms[i]={type:"m3",value:V.toArray()}:V&&V.isMatrix4?t.uniforms[i]={type:"m4",value:V.toArray()}:t.uniforms[i]={value:V}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let C={};for(let i in this.extensions)this.extensions[i]===!0&&(C[i]=!0);return Object.keys(C).length>0&&(t.extensions=C),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let C in e.uniforms){let i=e.uniforms[C];switch(this.uniforms[C]={},i.type){case"t":this.uniforms[C].value=t[i.value]||null;break;case"c":this.uniforms[C].value=new F1().setHex(i.value);break;case"v2":this.uniforms[C].value=new m1().fromArray(i.value);break;case"v3":this.uniforms[C].value=new w().fromArray(i.value);break;case"v4":this.uniforms[C].value=new l2().fromArray(i.value);break;case"m3":this.uniforms[C].value=new P1().fromArray(i.value);break;case"m4":this.uniforms[C].value=new i2().fromArray(i.value);break;default:this.uniforms[C].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let C in e.extensions)this.extensions[C]=e.extensions[C];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},b4=class extends r5{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},M3=class extends V0{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new F1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w9,this.normalScale=new m1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new o5,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var T4=class extends V0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=St,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},w4=class extends V0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $0(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function P6(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var a0=class{constructor(e,t,C,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(C),this.sampleValues=t,this.valueSize=C,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,C=this._cachedIndex,i=t[C],H=t[C-1];C:{e:{let V;t:{r:if(!(e<i)){for(let n=C+2;;){if(i===void 0){if(e<H)break r;return C=t.length,this._cachedIndex=C,this.copySampleValue_(C-1)}if(C===n)break;if(H=i,i=t[++C],e<i)break e}V=t.length;break t}if(!(e>=H)){let n=t[1];e<n&&(C=2,H=n);for(let a=C-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===a)break;if(i=H,H=t[--C-1],e>=H)break e}V=C,C=0;break t}break C}for(;C<V;){let n=C+V>>>1;e<t[n]?V=n:C=n+1}if(i=t[C],H=t[C-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return C=t.length,this._cachedIndex=C,this.copySampleValue_(C-1)}this._cachedIndex=C,this.intervalChanged_(C,H,i)}return this.interpolate_(C,H,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,C=this.sampleValues,i=this.valueSize,H=e*i;for(let V=0;V!==i;++V)t[V]=C[H+V];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},O4=class extends a0{constructor(e,t,C,i){super(e,t,C,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F6,endingEnd:F6}}intervalChanged_(e,t,C){let i=this.parameterPositions,H=e-2,V=e+1,n=i[H],a=i[V];if(n===void 0)switch(this.getSettings_().endingStart){case D6:H=e,n=2*t-C;break;case k6:H=i.length-2,n=t+i[H]-i[H+1];break;default:H=e,n=C}if(a===void 0)switch(this.getSettings_().endingEnd){case D6:V=e,a=2*C-t;break;case k6:V=1,a=C+i[1]-i[0];break;default:V=e-1,a=t}let L=(C-t)*.5,o=this.valueSize;this._weightPrev=L/(t-n),this._weightNext=L/(a-C),this._offsetPrev=H*o,this._offsetNext=V*o}interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=this._offsetPrev,M=this._offsetNext,s=this._weightPrev,l=this._weightNext,u=(C-t)/(i-t),f=u*u,c=f*u,d=-s*c+2*s*f-s*u,v=(1+s)*c+(-1.5-2*s)*f+(-.5+s)*u+1,y=(-1-l)*c+(1.5+l)*f+.5*u,h=l*c-l*f;for(let S=0;S!==n;++S)H[S]=d*V[o+S]+v*V[L+S]+y*V[a+S]+h*V[M+S];return H}},E4=class extends a0{constructor(e,t,C,i){super(e,t,C,i)}interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=(C-t)/(i-t),M=1-o;for(let s=0;s!==n;++s)H[s]=V[L+s]*M+V[a+s]*o;return H}},R4=class extends a0{constructor(e,t,C,i){super(e,t,C,i)}interpolate_(e){return this.copySampleValue_(e-1)}},P4=class extends a0{interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=this.inTangents,M=this.outTangents;if(!o||!M){let u=(C-t)/(i-t),f=1-u;for(let c=0;c!==n;++c)H[c]=V[L+c]*f+V[a+c]*u;return H}let s=n*2,l=e-1;for(let u=0;u!==n;++u){let f=V[L+u],c=V[a+u],d=l*s+u*2,v=M[d],y=M[d+1],h=e*s+u*2,S=o[h],g=o[h+1],b=AH(C,t,v,S,i);H[u]=Gt(b,f,y,g,c)}return H}};function Gt(r,e,t,C,i){let H=1-r;return H*H*H*e+3*H*H*r*t+3*H*r*r*C+r*r*r*i}function uH(r,e,t,C,i){let H=1-r;return 3*H*H*(t-e)+6*H*r*(C-t)+3*r*r*(i-C)}function AH(r,e,t,C,i){let H=(r-e)/(i-e);for(let V=0;V<8;V++){let n=Gt(H,e,t,C,i)-r;if(Math.abs(n)<1e-10)break;let a=uH(H,e,t,C,i);if(Math.abs(a)<1e-10)break;H=Math.max(0,Math.min(1,H-n/a))}return H}var i5=class{constructor(e,t,C,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$0(t,this.TimeBufferType),this.values=$0(C,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,C;if(t.toJSON!==this.toJSON)C=t.toJSON(e);else{C={name:e.name,times:$0(e.times,Array),values:$0(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(C.interpolation=i),P6(e.settings)&&(C.settings={inTangents:$0(e.settings.inTangents,Array),outTangents:$0(e.settings.outTangents,Array)})}return C.type=e.ValueTypeName,C}InterpolantFactoryMethodDiscrete(e){return new R4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new O4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new P4(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case D3:t=this.InterpolantFactoryMethodDiscrete;break;case u4:t=this.InterpolantFactoryMethodLinear;break;case V4:t=this.InterpolantFactoryMethodSmooth;break;case I6:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let C="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(C);return O1("KeyframeTrack:",C),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return D3;case this.InterpolantFactoryMethodLinear:return u4;case this.InterpolantFactoryMethodSmooth:return V4;case this.InterpolantFactoryMethodBezier:return I6}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let C=0,i=t.length;C!==i;++C)t[C]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let C=0,i=t.length;C!==i;++C)t[C]*=e;P6(this.settings)&&(qe(this.settings.inTangents,e),qe(this.settings.outTangents,e))}return this}trim(e,t){let C=this.times,i=C.length,H=0,V=i-1;for(;H!==i&&C[H]<e;)++H;for(;V!==-1&&C[V]>t;)--V;if(++V,H!==0||V!==i){H>=V&&(V=Math.max(V,1),H=V-1);let n=this.getValueSize();this.times=C.slice(H,V),this.values=this.values.slice(H*n,V*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R1("KeyframeTrack: Invalid value size in track.",this),e=!1);let C=this.times,i=this.values,H=C.length;H===0&&(R1("KeyframeTrack: Track is empty.",this),e=!1);let V=null;for(let n=0;n!==H;n++){let a=C[n];if(typeof a=="number"&&isNaN(a)){R1("KeyframeTrack: Time is not a valid number.",this,n,a),e=!1;break}if(V!==null&&V>a){R1("KeyframeTrack: Out of order keys.",this,n,a,V),e=!1;break}V=a}if(i!==void 0&&Li(i))for(let n=0,a=i.length;n!==a;++n){let L=i[n];if(isNaN(L)){R1("KeyframeTrack: Value is not a valid number.",this,n,L),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),C=this.getValueSize(),i=this.getInterpolation()===V4,H=e.length-1,V=1;for(let n=1;n<H;++n){let a=!1,L=e[n],o=e[n+1];if(L!==o&&(n!==1||L!==e[0]))if(i)a=!0;else{let M=n*C,s=M-C,l=M+C;for(let u=0;u!==C;++u){let f=t[M+u];if(f!==t[s+u]||f!==t[l+u]){a=!0;break}}}if(a){if(n!==V){e[V]=e[n];let M=n*C,s=V*C;for(let l=0;l!==C;++l)t[s+l]=t[M+l]}++V}}if(H>0){e[V]=e[H];for(let n=H*C,a=V*C,L=0;L!==C;++L)t[a+L]=t[n+L];++V}return V!==e.length?(this.times=e.slice(0,V),this.values=t.slice(0,V*C)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),C=this.constructor,i=new C(this.name,e,t);return i.createInterpolant=this.createInterpolant,P6(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function qe(r,e){for(let t=0,C=r.length;t!==C;t+=2)r[t]*=e}i5.prototype.ValueTypeName="";i5.prototype.TimeBufferType=Float32Array;i5.prototype.ValueBufferType=Float32Array;i5.prototype.DefaultInterpolation=u4;var o0=class extends i5{constructor(e,t,C){super(e,t,C)}};o0.prototype.ValueTypeName="bool";o0.prototype.ValueBufferType=Array;o0.prototype.DefaultInterpolation=D3;o0.prototype.InterpolantFactoryMethodLinear=void 0;o0.prototype.InterpolantFactoryMethodSmooth=void 0;var B4=class extends i5{constructor(e,t,C,i){super(e,t,C,i)}};B4.prototype.ValueTypeName="color";var I4=class extends i5{constructor(e,t,C,i){super(e,t,C,i)}};I4.prototype.ValueTypeName="number";var F4=class extends a0{constructor(e,t,C,i){super(e,t,C,i)}interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=(C-t)/(i-t),L=e*n;for(let o=L+n;L!==o;L+=4)A2.slerpFlat(H,0,V,L-n,V,L,a);return H}},L7=class extends i5{constructor(e,t,C,i){super(e,t,C,i)}InterpolantFactoryMethodLinear(e){return new F4(this.times,this.values,this.getValueSize(),e)}};L7.prototype.ValueTypeName="quaternion";L7.prototype.InterpolantFactoryMethodSmooth=void 0;var s0=class extends i5{constructor(e,t,C){super(e,t,C)}};s0.prototype.ValueTypeName="string";s0.prototype.ValueBufferType=Array;s0.prototype.DefaultInterpolation=D3;s0.prototype.InterpolantFactoryMethodLinear=void 0;s0.prototype.InterpolantFactoryMethodSmooth=void 0;var D4=class extends i5{constructor(e,t,C,i){super(e,t,C,i)}};D4.prototype.ValueTypeName="vector";var k4=class{constructor(e,t,C){let i=this,H=!1,V=0,n=0,a,L=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=C,this._abortController=null,this.itemStart=function(o){n++,H===!1&&i.onStart!==void 0&&i.onStart(o,V,n),H=!0},this.itemEnd=function(o){V++,i.onProgress!==void 0&&i.onProgress(o,V,n),V===n&&(H=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(o){i.onError!==void 0&&i.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),a?a(o):o},this.setURLModifier=function(o){return a=o,this},this.addHandler=function(o,M){return L.push(o,M),this},this.removeHandler=function(o){let M=L.indexOf(o);return M!==-1&&L.splice(M,2),this},this.getHandler=function(o){for(let M=0,s=L.length;M<s;M+=2){let l=L[M],u=L[M+1];if(l.global&&(l.lastIndex=0),l.test(o))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wt=new k4,N4=class{constructor(e){this.manager=e!==void 0?e:Wt,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let C=this;return new Promise(function(i,H){C.load(e,i,t,H)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};N4.DEFAULT_MATERIAL_NAME="__DEFAULT";var a7=class extends q2{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new F1(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var B6=new i2,$e=new w,Ye=new w,U4=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new m1(512,512),this.mapType=j2,this.map=null,this.mapPass=null,this.matrix=new i2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new L3,this._frameExtents=new m1(1,1),this._viewportCount=1,this._viewports=[new l2(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$e.setFromMatrixPosition(e.matrixWorld),t.position.copy($e),Ye.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ye),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,C,i){B6.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),C.setFromProjectionMatrix(B6,e.coordinateSystem,e.reversedDepth);let H=this._frameExtents,V=i?i.z/H.x:1,n=i?i.w/H.y:1,a=i?i.x/H.x:0,L=i?i.y/H.y:0;e.coordinateSystem===t3||e.reversedDepth?t.set(.5*V,0,0,.5*V+a,0,.5*n,0,.5*n+L,0,0,1,0,0,0,0,1):t.set(.5*V,0,0,.5*V+a,0,.5*n,0,.5*n+L,0,0,.5,.5,0,0,0,1),t.multiply(B6)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},i4=new w,H4=new A2,y5=new w,o7=class extends q2{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new i2,this.projectionMatrix=new i2,this.projectionMatrixInverse=new i2,this.coordinateSystem=A5,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(i4,H4,y5),y5.x===1&&y5.y===1&&y5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(i4,H4,y5.set(1,1,1)).invert()}updateWorldMatrix(e,t,C=!1){super.updateWorldMatrix(e,t,C),this.matrixWorld.decompose(i4,H4,y5),y5.x===1&&y5.y===1&&y5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(i4,H4,y5.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},r0=new w,Qe=new m1,Ke=new m1,F2=class extends o7{constructor(e=50,t=1,C=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=C,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=r3*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(P3*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return r3*2*Math.atan(Math.tan(P3*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,C){r0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(r0.x,r0.y).multiplyScalar(-e/r0.z),r0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),C.set(r0.x,r0.y).multiplyScalar(-e/r0.z)}getViewSize(e,t){return this.getViewBounds(e,Qe,Ke),t.subVectors(Ke,Qe)}setViewOffset(e,t,C,i,H,V){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=C,this.view.offsetY=i,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(P3*.5*this.fov)/this.zoom,C=2*t,i=this.aspect*C,H=-.5*i,V=this.view;if(this.view!==null&&this.view.enabled){let a=V.fullWidth,L=V.fullHeight;H+=V.offsetX*i/a,t-=V.offsetY*C/L,i*=V.width/a,C*=V.height/L}let n=this.filmOffset;n!==0&&(H+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(H,H+i,t,t-C,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var l3=class extends o7{constructor(e=-1,t=1,C=1,i=-1,H=.1,V=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=C,this.bottom=i,this.near=H,this.far=V,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,C,i,H,V){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=C,this.view.offsetY=i,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),C=(this.right+this.left)/2,i=(this.top+this.bottom)/2,H=C-e,V=C+e,n=i+t,a=i-t;if(this.view!==null&&this.view.enabled){let L=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=L*this.view.offsetX,V=H+L*this.view.width,n-=o*this.view.offsetY,a=n-o*this.view.height}this.projectionMatrix.makeOrthographic(H,V,n,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},G6=class extends U4{constructor(){super(new l3(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},d3=class extends a7{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(q2.DEFAULT_UP),this.updateMatrix(),this.target=new q2,this.shadow=new G6}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},s7=class extends a7{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Y0=-90,Q0=1,z4=class extends q2{constructor(e,t,C){super(),this.type="CubeCamera",this.renderTarget=C,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new F2(Y0,Q0,e,t);i.layers=this.layers,this.add(i);let H=new F2(Y0,Q0,e,t);H.layers=this.layers,this.add(H);let V=new F2(Y0,Q0,e,t);V.layers=this.layers,this.add(V);let n=new F2(Y0,Q0,e,t);n.layers=this.layers,this.add(n);let a=new F2(Y0,Q0,e,t);a.layers=this.layers,this.add(a);let L=new F2(Y0,Q0,e,t);L.layers=this.layers,this.add(L)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[C,i,H,V,n,a]=t;for(let L of t)this.remove(L);if(e===A5)C.up.set(0,1,0),C.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),V.up.set(0,0,1),V.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===t3)C.up.set(0,-1,0),C.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),V.up.set(0,0,-1),V.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let L of t)this.add(L),L.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:C,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[H,V,n,a,L,o]=this.children,M=e.getRenderTarget(),s=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let f=C.texture.generateMipmaps;C.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(C,0,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,H),e.setRenderTarget(C,1,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,V),e.setRenderTarget(C,2,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(C,3,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(C,4,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,L),C.texture.generateMipmaps=f,e.setRenderTarget(C,5,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(M,s,l),e.xr.enabled=u,C.texture.needsPMREMUpdate=!0}},G4=class extends F2{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var x8="\\[\\]\\.:\\/",mH=new RegExp("["+x8+"]","g"),v8="[^"+x8+"]",hH="[^"+x8.replace("\\.","")+"]",fH=/((?:WC+[\/:])*)/.source.replace("WC",v8),xH=/(WCOD+)?/.source.replace("WCOD",hH),vH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",v8),SH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",v8),gH=new RegExp("^"+fH+xH+vH+SH+"$"),ZH=["material","materials","bones","map"],W6=class{constructor(e,t,C){let i=C||s2.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let C=this._targetGroup.nCachedObjects_,i=this._bindings[C];i!==void 0&&i.getValue(e,t)}setValue(e,t){let C=this._bindings;for(let i=this._targetGroup.nCachedObjects_,H=C.length;i!==H;++i)C[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,C=e.length;t!==C;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,C=e.length;t!==C;++t)e[t].unbind()}},s2=class r{constructor(e,t,C){this.path=t,this.parsedPath=C||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,C){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,C):new r(e,t,C)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mH,"")}static parseTrackName(e){let t=gH.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let C={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=C.nodeName&&C.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let H=C.nodeName.substring(i+1);ZH.indexOf(H)!==-1&&(C.nodeName=C.nodeName.substring(0,i),C.objectName=H)}if(C.propertyName===null||C.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return C}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let C=e.skeleton.getBoneByName(t);if(C!==void 0)return C}if(e.children){let C=function(H){for(let V=0;V<H.length;V++){let n=H[V];if(n.name===t||n.uuid===t)return n;let a=C(n.children);if(a)return a}return null},i=C(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)e[t++]=C[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)C[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)C[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)C[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,C=t.objectName,i=t.propertyName,H=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){O1("PropertyBinding: No target node found for track: "+this.path+".");return}if(C){let L=t.objectIndex;switch(C){case"materials":if(!e.material){R1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){R1("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){R1("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===L){L=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){R1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){R1("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[C]===void 0){R1("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[C]}if(L!==void 0){if(e[L]===void 0){R1("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[L]}}let V=e[i];if(V===void 0){let L=t.nodeName;R1("PropertyBinding: Trying to update property for track: "+L+"."+i+" but it wasn't found.",e);return}let n=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?n=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(n=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(H!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){R1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){R1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[H]!==void 0&&(H=e.morphTargetDictionary[H])}a=this.BindingType.ArrayElement,this.resolvedProperty=V,this.propertyIndex=H}else V.fromArray!==void 0&&V.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=V):Array.isArray(V)?(a=this.BindingType.EntireArray,this.resolvedProperty=V):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][n]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};s2.Composite=W6;s2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};s2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};s2.prototype.GetterByBindingType=[s2.prototype._getValue_direct,s2.prototype._getValue_array,s2.prototype._getValue_arrayElement,s2.prototype._getValue_toArray];s2.prototype.SetterByBindingTypeAndVersioning=[[s2.prototype._setValue_direct,s2.prototype._setValue_direct_setNeedsUpdate,s2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[s2.prototype._setValue_array,s2.prototype._setValue_array_setNeedsUpdate,s2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[s2.prototype._setValue_arrayElement,s2.prototype._setValue_arrayElement_setNeedsUpdate,s2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[s2.prototype._setValue_fromArray,s2.prototype._setValue_fromArray_setNeedsUpdate,s2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var is=new Float32Array(1);var Je=new i2,M7=class{constructor(e,t,C=0,i=1/0){this.ray=new q3(e,t),this.near=C,this.far=i,this.camera=null,this.layers=new H3,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R1("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Je.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Je),this}intersectObject(e,t=!0,C=[]){return X6(e,this,C,t),C.sort(je),C}intersectObjects(e,t=!0,C=[]){for(let i=0,H=e.length;i<H;i++)X6(e[i],this,C,t);return C.sort(je),C}};function je(r,e){return r.distance-e.distance}function X6(r,e,t,C){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&C===!0){let H=r.children;for(let V=0,n=H.length;V<n;V++)X6(H[V],e,t,!0)}}var b8=class b8{constructor(e,t,C,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,C,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let C=0;C<4;C++)this.elements[C]=e[C+t];return this}set(e,t,C,i){let H=this.elements;return H[0]=e,H[2]=t,H[1]=C,H[3]=i,this}};b8.prototype.isMatrix2=!0;var q6=b8;function S8(r,e,t,C){let i=_H(C);switch(t){case l8:return r*e;case c8:return r*e/i.components*i.byteLength;case J4:return r*e/i.components*i.byteLength;case p0:return r*e*2/i.components*i.byteLength;case j4:return r*e*2/i.components*i.byteLength;case d8:return r*e*3/i.components*i.byteLength;case s5:return r*e*4/i.components*i.byteLength;case e9:return r*e*4/i.components*i.byteLength;case p7:case u7:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case A7:case m7:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case C9:case i9:return Math.max(r,16)*Math.max(e,8)/4;case t9:case r9:return Math.max(r,8)*Math.max(e,8)/2;case H9:case V9:case L9:case a9:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case n9:case h7:case o9:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case s9:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case M9:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case l9:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case d9:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case c9:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case p9:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case u9:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case A9:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case m9:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case h9:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case f9:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case x9:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case v9:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case S9:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case g9:case Z9:case _9:return Math.ceil(r/4)*Math.ceil(e/4)*16;case y9:case b9:return Math.ceil(r/4)*Math.ceil(e/4)*8;case f7:case T9:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _H(r){switch(r){case j2:case a8:return{byteLength:1,components:1};case u3:case o8:case S5:return{byteLength:2,components:1};case Q4:case K4:return{byteLength:2,components:4};case x5:case Y4:case v5:return{byteLength:4,components:1};case s8:case M8:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?O1("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lC(){let r=null,e=!1,t=null,C=null;function i(H,V){C=r.requestAnimationFrame(i),t(H,V)}return{start:function(){e!==!0&&t!==null&&r!==null&&(C=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(C),e=!1},setAnimationLoop:function(H){t=H},setContext:function(H){r=H}}}function bH(r){let e=new WeakMap;function t(n,a){let L=n.array,o=n.usage,M=L.byteLength,s=r.createBuffer();r.bindBuffer(a,s),r.bufferData(a,L,o),n.onUploadCallback();let l;if(L instanceof Float32Array)l=r.FLOAT;else if(typeof Float16Array<"u"&&L instanceof Float16Array)l=r.HALF_FLOAT;else if(L instanceof Uint16Array)n.isFloat16BufferAttribute?l=r.HALF_FLOAT:l=r.UNSIGNED_SHORT;else if(L instanceof Int16Array)l=r.SHORT;else if(L instanceof Uint32Array)l=r.UNSIGNED_INT;else if(L instanceof Int32Array)l=r.INT;else if(L instanceof Int8Array)l=r.BYTE;else if(L instanceof Uint8Array)l=r.UNSIGNED_BYTE;else if(L instanceof Uint8ClampedArray)l=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+L);return{buffer:s,type:l,bytesPerElement:L.BYTES_PER_ELEMENT,version:n.version,size:M}}function C(n,a,L){let o=a.array,M=a.updateRanges;if(r.bindBuffer(L,n),M.length===0)r.bufferSubData(L,0,o);else{M.sort((l,u)=>l.start-u.start);let s=0;for(let l=1;l<M.length;l++){let u=M[s],f=M[l];f.start<=u.start+u.count+1?u.count=Math.max(u.count,f.start+f.count-u.start):(++s,M[s]=f)}M.length=s+1;for(let l=0,u=M.length;l<u;l++){let f=M[l];r.bufferSubData(L,f.start*o.BYTES_PER_ELEMENT,o,f.start,f.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)}function H(n){n.isInterleavedBufferAttribute&&(n=n.data);let a=e.get(n);a&&(r.deleteBuffer(a.buffer),e.delete(n))}function V(n,a){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let o=e.get(n);(!o||o.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let L=e.get(n);if(L===void 0)e.set(n,t(n,a));else if(L.version<n.version){if(L.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");C(L.buffer,n,a),L.version=n.version}}return{get:i,remove:H,update:V}}var TH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wH=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BH=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FH=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,DH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UH=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zH=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$H=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,KH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eV=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tV=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CV=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rV=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iV=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HV=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VV="gl_FragColor = linearToOutputTexel( gl_FragColor );",nV=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LV=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,aV=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oV=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sV=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MV=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lV=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dV=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cV=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pV=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uV=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AV=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mV=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hV=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fV=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xV=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vV=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SV=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gV=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZV=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_V=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yV=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bV=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TV=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wV=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OV=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EV=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RV=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PV=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BV=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IV=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FV=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DV=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kV=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NV=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UV=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zV=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GV=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WV=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XV=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qV=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$V=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YV=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jV=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,en=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tn=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cn=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rn=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hn=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vn=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nn=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ln=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,an=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,on=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sn=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mn=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ln=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dn=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cn=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pn=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,un=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,An=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mn=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hn=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fn=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vn=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sn=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gn=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zn=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_n=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tn=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wn=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,On=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,En=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rn=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bn=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,In=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fn=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dn=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kn=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Un=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zn=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gn=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wn=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xn=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qn=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$n=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yn=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qn=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kn=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jn=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jn=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k1={alphahash_fragment:TH,alphahash_pars_fragment:wH,alphamap_fragment:OH,alphamap_pars_fragment:EH,alphatest_fragment:RH,alphatest_pars_fragment:PH,aomap_fragment:BH,aomap_pars_fragment:IH,batching_pars_vertex:FH,batching_vertex:DH,begin_vertex:kH,beginnormal_vertex:NH,bsdfs:UH,iridescence_fragment:zH,bumpmap_pars_fragment:GH,clipping_planes_fragment:WH,clipping_planes_pars_fragment:XH,clipping_planes_pars_vertex:qH,clipping_planes_vertex:$H,color_fragment:YH,color_pars_fragment:QH,color_pars_vertex:KH,color_vertex:JH,common:jH,cube_uv_reflection_fragment:eV,defaultnormal_vertex:tV,displacementmap_pars_vertex:CV,displacementmap_vertex:rV,emissivemap_fragment:iV,emissivemap_pars_fragment:HV,colorspace_fragment:VV,colorspace_pars_fragment:nV,envmap_fragment:LV,envmap_common_pars_fragment:aV,envmap_pars_fragment:oV,envmap_pars_vertex:sV,envmap_physical_pars_fragment:xV,envmap_vertex:MV,fog_vertex:lV,fog_pars_vertex:dV,fog_fragment:cV,fog_pars_fragment:pV,gradientmap_pars_fragment:uV,lightmap_pars_fragment:AV,lights_lambert_fragment:mV,lights_lambert_pars_fragment:hV,lights_pars_begin:fV,lights_toon_fragment:vV,lights_toon_pars_fragment:SV,lights_phong_fragment:gV,lights_phong_pars_fragment:ZV,lights_physical_fragment:_V,lights_physical_pars_fragment:yV,lights_fragment_begin:bV,lights_fragment_maps:TV,lights_fragment_end:wV,lightprobes_pars_fragment:OV,logdepthbuf_fragment:EV,logdepthbuf_pars_fragment:RV,logdepthbuf_pars_vertex:PV,logdepthbuf_vertex:BV,map_fragment:IV,map_pars_fragment:FV,map_particle_fragment:DV,map_particle_pars_fragment:kV,metalnessmap_fragment:NV,metalnessmap_pars_fragment:UV,morphinstance_vertex:zV,morphcolor_vertex:GV,morphnormal_vertex:WV,morphtarget_pars_vertex:XV,morphtarget_vertex:qV,normal_fragment_begin:$V,normal_fragment_maps:YV,normal_pars_fragment:QV,normal_pars_vertex:KV,normal_vertex:JV,normalmap_pars_fragment:jV,clearcoat_normal_fragment_begin:en,clearcoat_normal_fragment_maps:tn,clearcoat_pars_fragment:Cn,iridescence_pars_fragment:rn,opaque_fragment:Hn,packing:Vn,premultiplied_alpha_fragment:nn,project_vertex:Ln,dithering_fragment:an,dithering_pars_fragment:on,roughnessmap_fragment:sn,roughnessmap_pars_fragment:Mn,shadowmap_pars_fragment:ln,shadowmap_pars_vertex:dn,shadowmap_vertex:cn,shadowmask_pars_fragment:pn,skinbase_vertex:un,skinning_pars_vertex:An,skinning_vertex:mn,skinnormal_vertex:hn,specularmap_fragment:fn,specularmap_pars_fragment:xn,tonemapping_fragment:vn,tonemapping_pars_fragment:Sn,transmission_fragment:gn,transmission_pars_fragment:Zn,uv_pars_fragment:_n,uv_pars_vertex:yn,uv_vertex:bn,worldpos_vertex:Tn,background_vert:wn,background_frag:On,backgroundCube_vert:En,backgroundCube_frag:Rn,cube_vert:Pn,cube_frag:Bn,depth_vert:In,depth_frag:Fn,distance_vert:Dn,distance_frag:kn,equirect_vert:Nn,equirect_frag:Un,linedashed_vert:zn,linedashed_frag:Gn,meshbasic_vert:Wn,meshbasic_frag:Xn,meshlambert_vert:qn,meshlambert_frag:$n,meshmatcap_vert:Yn,meshmatcap_frag:Qn,meshnormal_vert:Kn,meshnormal_frag:Jn,meshphong_vert:jn,meshphong_frag:eL,meshphysical_vert:tL,meshphysical_frag:CL,meshtoon_vert:rL,meshtoon_frag:iL,points_vert:HL,points_frag:VL,shadow_vert:nL,shadow_frag:LL,sprite_vert:aL,sprite_frag:oL},M1={common:{diffuse:{value:new F1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new P1},alphaMap:{value:null},alphaMapTransform:{value:new P1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new P1}},envmap:{envMap:{value:null},envMapRotation:{value:new P1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new P1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new P1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new P1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new P1},normalScale:{value:new m1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new P1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new P1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new P1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new P1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new F1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new F1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new P1},alphaTest:{value:0},uvTransform:{value:new P1}},sprite:{diffuse:{value:new F1(16777215)},opacity:{value:1},center:{value:new m1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new P1},alphaMap:{value:null},alphaMapTransform:{value:new P1},alphaTest:{value:0}}},P5={basic:{uniforms:D2([M1.common,M1.specularmap,M1.envmap,M1.aomap,M1.lightmap,M1.fog]),vertexShader:k1.meshbasic_vert,fragmentShader:k1.meshbasic_frag},lambert:{uniforms:D2([M1.common,M1.specularmap,M1.envmap,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.fog,M1.lights,{emissive:{value:new F1(0)},envMapIntensity:{value:1}}]),vertexShader:k1.meshlambert_vert,fragmentShader:k1.meshlambert_frag},phong:{uniforms:D2([M1.common,M1.specularmap,M1.envmap,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.fog,M1.lights,{emissive:{value:new F1(0)},specular:{value:new F1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:k1.meshphong_vert,fragmentShader:k1.meshphong_frag},standard:{uniforms:D2([M1.common,M1.envmap,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.roughnessmap,M1.metalnessmap,M1.fog,M1.lights,{emissive:{value:new F1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:k1.meshphysical_vert,fragmentShader:k1.meshphysical_frag},toon:{uniforms:D2([M1.common,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.gradientmap,M1.fog,M1.lights,{emissive:{value:new F1(0)}}]),vertexShader:k1.meshtoon_vert,fragmentShader:k1.meshtoon_frag},matcap:{uniforms:D2([M1.common,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.fog,{matcap:{value:null}}]),vertexShader:k1.meshmatcap_vert,fragmentShader:k1.meshmatcap_frag},points:{uniforms:D2([M1.points,M1.fog]),vertexShader:k1.points_vert,fragmentShader:k1.points_frag},dashed:{uniforms:D2([M1.common,M1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:k1.linedashed_vert,fragmentShader:k1.linedashed_frag},depth:{uniforms:D2([M1.common,M1.displacementmap]),vertexShader:k1.depth_vert,fragmentShader:k1.depth_frag},normal:{uniforms:D2([M1.common,M1.bumpmap,M1.normalmap,M1.displacementmap,{opacity:{value:1}}]),vertexShader:k1.meshnormal_vert,fragmentShader:k1.meshnormal_frag},sprite:{uniforms:D2([M1.sprite,M1.fog]),vertexShader:k1.sprite_vert,fragmentShader:k1.sprite_frag},background:{uniforms:{uvTransform:{value:new P1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:k1.background_vert,fragmentShader:k1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new P1}},vertexShader:k1.backgroundCube_vert,fragmentShader:k1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:k1.cube_vert,fragmentShader:k1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:k1.equirect_vert,fragmentShader:k1.equirect_frag},distance:{uniforms:D2([M1.common,M1.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:k1.distance_vert,fragmentShader:k1.distance_frag},shadow:{uniforms:D2([M1.lights,M1.fog,{color:{value:new F1(0)},opacity:{value:1}}]),vertexShader:k1.shadow_vert,fragmentShader:k1.shadow_frag}};P5.physical={uniforms:D2([P5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new P1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new P1},clearcoatNormalScale:{value:new m1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new P1},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new P1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new P1},sheen:{value:0},sheenColor:{value:new F1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new P1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new P1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new P1},transmissionSamplerSize:{value:new m1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new P1},attenuationDistance:{value:0},attenuationColor:{value:new F1(0)},specularColor:{value:new F1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new P1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new P1},anisotropyVector:{value:new m1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new P1}}]),vertexShader:k1.meshphysical_vert,fragmentShader:k1.meshphysical_frag};var R9={r:0,b:0,g:0},sL=new i2,dC=new P1;dC.set(-1,0,0,0,1,0,0,0,1);function ML(r,e,t,C,i,H){let V=new F1(0),n=i===!0?0:1,a,L,o=null,M=0,s=null;function l(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let h=v.backgroundBlurriness>0;y=e.get(y,h)}return y}function u(v){let y=!1,h=l(v);h===null?c(V,n):h&&h.isColor&&(c(h,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,H):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,H),(r.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(v,y){let h=l(y);h&&(h.isCubeTexture||h.mapping===d7)?(L===void 0&&(L=new $2(new L0(1,1,1),new r5({name:"BackgroundCubeMaterial",uniforms:w0(P5.backgroundCube.uniforms),vertexShader:P5.backgroundCube.vertexShader,fragmentShader:P5.backgroundCube.fragmentShader,side:Y2,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),L.geometry.deleteAttribute("normal"),L.geometry.deleteAttribute("uv"),L.onBeforeRender=function(S,g,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(L.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(L)),L.material.uniforms.envMap.value=h,L.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,L.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,L.material.uniforms.backgroundRotation.value.setFromMatrix4(sL.makeRotationFromEuler(y.backgroundRotation)).transpose(),h.isCubeTexture&&h.isRenderTargetTexture===!1&&L.material.uniforms.backgroundRotation.value.premultiply(dC),L.material.toneMapped=X1.getTransfer(h.colorSpace)!==t2,(o!==h||M!==h.version||s!==r.toneMapping)&&(L.material.needsUpdate=!0,o=h,M=h.version,s=r.toneMapping),L.layers.enableAll(),v.unshift(L,L.geometry,L.material,0,0,null)):h&&h.isTexture&&(a===void 0&&(a=new $2(new V7(2,2),new r5({name:"BackgroundMaterial",uniforms:w0(P5.background.uniforms),vertexShader:P5.background.vertexShader,fragmentShader:P5.background.fragmentShader,side:M0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(a)),a.material.uniforms.t2D.value=h,a.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,a.material.toneMapped=X1.getTransfer(h.colorSpace)!==t2,h.matrixAutoUpdate===!0&&h.updateMatrix(),a.material.uniforms.uvTransform.value.copy(h.matrix),(o!==h||M!==h.version||s!==r.toneMapping)&&(a.material.needsUpdate=!0,o=h,M=h.version,s=r.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null))}function c(v,y){v.getRGB(R9,f8(r)),t.buffers.color.setClear(R9.r,R9.g,R9.b,y,H)}function d(){L!==void 0&&(L.geometry.dispose(),L.material.dispose(),L=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return V},setClearColor:function(v,y=1){V.set(v),n=y,c(V,n)},getClearAlpha:function(){return n},setClearAlpha:function(v){n=v,c(V,n)},render:u,addToRenderList:f,dispose:d}}function lL(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),C={},i=s(null),H=i,V=!1;function n(I,N,G,P,U){let Q=!1,Y=M(I,P,G,N);H!==Y&&(H=Y,L(H.object)),Q=l(I,P,G,U),Q&&u(I,P,G,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(Q||V)&&(V=!1,h(I,N,G,P),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function a(){return r.createVertexArray()}function L(I){return r.bindVertexArray(I)}function o(I){return r.deleteVertexArray(I)}function M(I,N,G,P){let U=P.wireframe===!0,Q=C[N.id];Q===void 0&&(Q={},C[N.id]=Q);let Y=I.isInstancedMesh===!0?I.id:0,r1=Q[Y];r1===void 0&&(r1={},Q[Y]=r1);let X=r1[G.id];X===void 0&&(X={},r1[G.id]=X);let e1=X[U];return e1===void 0&&(e1=s(a()),X[U]=e1),e1}function s(I){let N=[],G=[],P=[];for(let U=0;U<t;U++)N[U]=0,G[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:P,object:I,attributes:{},index:null}}function l(I,N,G,P){let U=H.attributes,Q=N.attributes,Y=0,r1=G.getAttributes();for(let X in r1)if(r1[X].location>=0){let C1=U[X],b1=Q[X];if(b1===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(b1=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(b1=I.instanceColor)),C1===void 0||C1.attribute!==b1||b1&&C1.data!==b1.data)return!0;Y++}return H.attributesNum!==Y||H.index!==P}function u(I,N,G,P){let U={},Q=N.attributes,Y=0,r1=G.getAttributes();for(let X in r1)if(r1[X].location>=0){let C1=Q[X];C1===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(C1=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(C1=I.instanceColor));let b1={};b1.attribute=C1,C1&&C1.data&&(b1.data=C1.data),U[X]=b1,Y++}H.attributes=U,H.attributesNum=Y,H.index=P}function f(){let I=H.newAttributes;for(let N=0,G=I.length;N<G;N++)I[N]=0}function c(I){d(I,0)}function d(I,N){let G=H.newAttributes,P=H.enabledAttributes,U=H.attributeDivisors;G[I]=1,P[I]===0&&(r.enableVertexAttribArray(I),P[I]=1),U[I]!==N&&(r.vertexAttribDivisor(I,N),U[I]=N)}function v(){let I=H.newAttributes,N=H.enabledAttributes;for(let G=0,P=N.length;G<P;G++)N[G]!==I[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function y(I,N,G,P,U,Q,Y){Y===!0?r.vertexAttribIPointer(I,N,G,U,Q):r.vertexAttribPointer(I,N,G,P,U,Q)}function h(I,N,G,P){f();let U=P.attributes,Q=G.getAttributes(),Y=N.defaultAttributeValues;for(let r1 in Q){let X=Q[r1];if(X.location>=0){let e1=U[r1];if(e1===void 0&&(r1==="instanceMatrix"&&I.instanceMatrix&&(e1=I.instanceMatrix),r1==="instanceColor"&&I.instanceColor&&(e1=I.instanceColor)),e1!==void 0){let C1=e1.normalized,b1=e1.itemSize,_1=e.get(e1);if(_1===void 0)continue;let V2=_1.buffer,q1=_1.type,J1=_1.bytesPerElement,q=q1===r.INT||q1===r.UNSIGNED_INT||e1.gpuType===Y4;if(e1.isInterleavedBufferAttribute){let j=e1.data,h1=j.stride,B1=e1.offset;if(j.isInstancedInterleavedBuffer){for(let u1=0;u1<X.locationSize;u1++)d(X.location+u1,j.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let u1=0;u1<X.locationSize;u1++)c(X.location+u1);r.bindBuffer(r.ARRAY_BUFFER,V2);for(let u1=0;u1<X.locationSize;u1++)y(X.location+u1,b1/X.locationSize,q1,C1,h1*J1,(B1+b1/X.locationSize*u1)*J1,q)}else{if(e1.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)d(X.location+j,e1.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=e1.meshPerAttribute*e1.count)}else for(let j=0;j<X.locationSize;j++)c(X.location+j);r.bindBuffer(r.ARRAY_BUFFER,V2);for(let j=0;j<X.locationSize;j++)y(X.location+j,b1/X.locationSize,q1,C1,b1*J1,b1/X.locationSize*j*J1,q)}}else if(Y!==void 0){let C1=Y[r1];if(C1!==void 0)switch(C1.length){case 2:r.vertexAttrib2fv(X.location,C1);break;case 3:r.vertexAttrib3fv(X.location,C1);break;case 4:r.vertexAttrib4fv(X.location,C1);break;default:r.vertexAttrib1fv(X.location,C1)}}}}v()}function S(){Z();for(let I in C){let N=C[I];for(let G in N){let P=N[G];for(let U in P){let Q=P[U];for(let Y in Q)o(Q[Y].object),delete Q[Y];delete P[U]}}delete C[I]}}function g(I){if(C[I.id]===void 0)return;let N=C[I.id];for(let G in N){let P=N[G];for(let U in P){let Q=P[U];for(let Y in Q)o(Q[Y].object),delete Q[Y];delete P[U]}}delete C[I.id]}function b(I){for(let N in C){let G=C[N];for(let P in G){let U=G[P];if(U[I.id]===void 0)continue;let Q=U[I.id];for(let Y in Q)o(Q[Y].object),delete Q[Y];delete U[I.id]}}}function m(I){for(let N in C){let G=C[N],P=I.isInstancedMesh===!0?I.id:0,U=G[P];if(U!==void 0){for(let Q in U){let Y=U[Q];for(let r1 in Y)o(Y[r1].object),delete Y[r1];delete U[Q]}delete G[P],Object.keys(G).length===0&&delete C[N]}}}function Z(){R(),V=!0,H!==i&&(H=i,L(H.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:n,reset:Z,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:g,releaseStatesOfObject:m,releaseStatesOfProgram:b,initAttributes:f,enableAttribute:c,disableUnusedAttributes:v}}function dL(r,e,t){let C;function i(a){C=a}function H(a,L){r.drawArrays(C,a,L),t.update(L,C,1)}function V(a,L,o){o!==0&&(r.drawArraysInstanced(C,a,L,o),t.update(L,C,o))}function n(a,L,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(C,a,0,L,0,o);let s=0;for(let l=0;l<o;l++)s+=L[l];t.update(s,C,1)}this.setMode=i,this.render=H,this.renderInstances=V,this.renderMultiDraw=n}function cL(r,e,t,C){let i;function H(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function V(b){return!(b!==s5&&C.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function n(b){let m=b===S5&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==j2&&b!==v5&&!m&&C.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function a(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let L=t.precision!==void 0?t.precision:"highp",o=a(L);o!==L&&(O1("WebGLRenderer:",L,"not supported, using",o,"instead."),L=o);let M=t.logarithmicDepthBuffer===!0,s=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&s===!1&&O1("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),c=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),h=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),g=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:a,textureFormatReadable:V,textureTypeReadable:n,precision:L,logarithmicDepthBuffer:M,reversedDepthBuffer:s,maxTextures:l,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:c,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:h,maxSamples:S,samples:g}}function pL(r){let e=this,t=null,C=0,i=!1,H=!1,V=new u5,n=new P1,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(M,s){let l=M.length!==0||s||C!==0||i;return i=s,C=M.length,l},this.beginShadows=function(){H=!0,o(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(M,s){t=o(M,s,0)},this.setState=function(M,s,l){let u=M.clippingPlanes,f=M.clipIntersection,c=M.clipShadows,d=r.get(M);if(!i||u===null||u.length===0||H&&!c)H?o(null):L();else{let v=H?0:C,y=v*4,h=d.clippingState||null;a.value=h,h=o(u,s,y,l);for(let S=0;S!==y;++S)h[S]=t[S];d.clippingState=h,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function L(){a.value!==t&&(a.value=t,a.needsUpdate=C>0),e.numPlanes=C,e.numIntersection=0}function o(M,s,l,u){let f=M!==null?M.length:0,c=null;if(f!==0){if(c=a.value,u!==!0||c===null){let d=l+f*4,v=s.matrixWorldInverse;n.getNormalMatrix(v),(c===null||c.length<d)&&(c=new Float32Array(d));for(let y=0,h=l;y!==f;++y,h+=4)V.copy(M[y]).applyMatrix4(v,n),V.normal.toArray(c,h),c[h+3]=V.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,c}}var h3=4,uL=6,AL=20,mL=256,x7=new l3,Xt=new F1,T8=null,w8=0,O8=0,E8=!1,hL=new w,O0=new w,B9=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,C=.1,i=100,H={}){let{size:V=256,position:n=hL}=H;T8=this._renderer.getRenderTarget(),w8=this._renderer.getActiveCubeFace(),O8=this._renderer.getActiveMipmapLevel(),E8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(V);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,C,i,a,n),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$t(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(T8,w8,O8),this._renderer.xr.enabled=E8,e.scissorTest=!1,m3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===l0||e.mapping===b0?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),T8=this._renderer.getRenderTarget(),w8=this._renderer.getActiveCubeFace(),O8=this._renderer.getActiveMipmapLevel(),E8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let C=t||this._allocateTargets();return this._textureToCubeUV(e,C),this._applyPMREM(C),this._cleanup(C),C}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,C={magFilter:w2,minFilter:w2,generateMipmaps:!1,type:S5,format:s5,colorSpace:k3,depthBuffer:!1},i=qt(e,t,C);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qt(e,t,C);let{_lodMax:H}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fL(H)),this._blurMaterial=vL(H,e,t),this._ggxMaterial=xL(H,e,t)}return i}_compileMaterial(e){let t=new $2(new h5,e);this._renderer.compile(t,x7)}_sceneToCubeUV(e,t,C,i,H){let a=new F2(90,1,t,C),L=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],M=this._renderer,s=M.autoClear,l=M.toneMapping;M.getClearColor(Xt),M.toneMapping=f5,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(i),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $2(new L0,new $3({name:"PMREM.Background",side:Y2,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,c=f.material,d=!1,v=e.background;v?v.isColor&&(c.color.copy(v),e.background=null,d=!0):(c.color.copy(Xt),d=!0);for(let y=0;y<6;y++){let h=y%3;h===0?(a.up.set(0,L[y],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x+o[y],H.y,H.z)):h===1?(a.up.set(0,0,L[y]),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y+o[y],H.z)):(a.up.set(0,L[y],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y,H.z+o[y]));let S=this._cubeSize;m3(i,h*S,y>2?S:0,S,S),M.setRenderTarget(i),d&&M.render(f,a),M.render(e,a)}M.toneMapping=l,M.autoClear=s,e.background=v}_textureToCubeUV(e,t){let C=this._renderer,i=e.mapping===l0||e.mapping===b0;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yt()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$t());let H=i?this._cubemapMaterial:this._equirectMaterial,V=this._lodMeshes[0];V.material=H;let n=H.uniforms;n.envMap.value=e;let a=this._cubeSize;m3(t,0,0,3*a,2*a),C.setRenderTarget(t),C.render(V,x7)}_applyPMREM(e){let t=this._renderer,C=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let H=1;H<i;H++)this._applyGGXFilter(e,H-1,H);t.autoClear=C}_applyGGXFilter(e,t,C){let i=this._renderer,H=this._pingPongRenderTarget,V=this._ggxMaterial,n=this._lodMeshes[C];n.material=V;let a=V.uniforms,L=C/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),M=Math.sqrt(L*L-o*o),s=L*1.25,l=M*s,{_lodMax:u}=this,f=this._sizeLods[C],c=3*f*(C>u-h3?C-u+h3:0),d=4*(this._cubeSize-f);a.envMap.value=e.texture,a.roughness.value=l,a.mipInt.value=u-t,m3(H,c,d,3*f,2*f),i.setRenderTarget(H),i.render(n,x7),a.envMap.value=H.texture,a.roughness.value=0,a.mipInt.value=u-C,m3(e,c,d,3*f,2*f),i.setRenderTarget(e),i.render(n,x7)}_blur(e,t,C,i){let H=this._pingPongRenderTarget,V=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,H,t,C,V),this._blurPass(H,e,C,C,V)}_blurPass(e,t,C,i,H){let V=this._renderer,n=this._blurMaterial,a=this._lodMeshes[i];a.material=n;let L=n.uniforms;L.envMap.value=e.texture,L.sigma.value=H,L.mipInt.value=this._lodMax-C;let o=this._sizeLods[i],M=3*o*(i>this._lodMax-h3?i-this._lodMax+h3:0),s=4*(this._cubeSize-o);m3(t,M,s,3*o,2*o),V.setRenderTarget(t),V.render(a,x7)}};function fL(r){let e=[],t=[],C=r,i=r-h3+1+uL;for(let H=0;H<i;H++){let V=Math.pow(2,C);e.push(V);let n=1/(V-2),a=-n,L=1+n,o=[a,a,L,a,L,L,a,a,L,L,a,L],M=6,s=6,l=3,u=new Float32Array(l*s*M),f=new Float32Array(l*s*M);for(let d=0;d<M;d++){let v=d%3*2/3-1,y=d>2?0:-1,h=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];u.set(h,l*s*d);for(let S=0;S<s;S++){let g=o[S*2]*2-1,b=o[S*2+1]*2-1;d===0?O0.set(1,b,g):d===1?O0.set(-g,1,-b):d===2?O0.set(-g,b,1):d===3?O0.set(-1,b,-g):d===4?O0.set(-g,-1,b):O0.set(g,b,-1),O0.toArray(f,(d*s+S)*l)}}let c=new h5;c.setAttribute("position",new a5(u,l)),c.setAttribute("outputDirection",new a5(f,l)),t.push(new $2(c,null)),C>h3&&C--}return{lodMeshes:t,sizeLods:e}}function qt(r,e,t){let C=new J2(r,e,t);return C.texture.mapping=d7,C.texture.name="PMREM.cubeUv",C.scissorTest=!0,C}function m3(r,e,t,C,i){r.viewport.set(e,t,C,i),r.scissor.set(e,t,C,i)}function xL(r,e,t){return new r5({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:D9(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:E5,depthTest:!1,depthWrite:!1})}function vL(r,e,t){return new r5({name:"SphericalGaussianBlur",defines:{SAMPLES:AL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:D9(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:E5,depthTest:!1,depthWrite:!1})}function $t(){return new r5({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:D9(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:E5,depthTest:!1,depthWrite:!1})}function Yt(){return new r5({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:D9(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:E5,depthTest:!1,depthWrite:!1})}function D9(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var I9=class extends J2{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let C={width:e,height:e,depth:1},i=[C,C,C,C,C,C];this.texture=new Y3(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let C={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new L0(5,5,5),H=new r5({name:"CubemapFromEquirect",uniforms:w0(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,side:Y2,blending:E5});H.uniforms.tEquirect.value=t;let V=new $2(i,H),n=t.minFilter;return t.minFilter===d0&&(t.minFilter=w2),new z4(1,10,this).update(e,V),t.minFilter=n,V.geometry.dispose(),V.material.dispose(),this}clear(e,t=!0,C=!0,i=!0){let H=e.getRenderTarget();for(let V=0;V<6;V++)e.setRenderTarget(this,V),e.clear(t,C,i);e.setRenderTarget(H)}};function SL(r){let e=new WeakMap,t=new WeakMap,C=null;function i(s,l=!1){return s==null?null:l?V(s):H(s)}function H(s){if(s&&s.isTexture){let l=s.mapping;if(l===X4||l===q4)if(e.has(s)){let u=e.get(s).texture;return n(u,s.mapping)}else{let u=s.image;if(u&&u.height>0){let f=new I9(u.height);return f.fromEquirectangularTexture(r,s),e.set(s,f),s.addEventListener("dispose",L),n(f.texture,s.mapping)}else return null}}return s}function V(s){if(s&&s.isTexture){let l=s.mapping,u=l===X4||l===q4,f=l===l0||l===b0;if(u||f){let c=t.get(s),d=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return C===null&&(C=new B9(r)),c=u?C.fromEquirectangular(s,c):C.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),c.texture;if(c!==void 0)return c.texture;{let v=s.image;return u&&v&&v.height>0||f&&v&&a(v)?(C===null&&(C=new B9(r)),c=u?C.fromEquirectangular(s):C.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),s.addEventListener("dispose",o),c.texture):null}}}return s}function n(s,l){return l===X4?s.mapping=l0:l===q4&&(s.mapping=b0),s}function a(s){let l=0,u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function L(s){let l=s.target;l.removeEventListener("dispose",L);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(s){let l=s.target;l.removeEventListener("dispose",o);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function M(){e=new WeakMap,t=new WeakMap,C!==null&&(C.dispose(),C=null)}return{get:i,dispose:M}}function gL(r){let e={};function t(C){if(e[C]!==void 0)return e[C];let i=r.getExtension(C);return e[C]=i,i}return{has:function(C){return t(C)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(C){let i=t(C);return i===null&&Z0("WebGLRenderer: "+C+" extension not supported."),i}}}function ZL(r,e,t,C){let i={},H=new WeakMap;function V(M){let s=M.target;s.index!==null&&e.remove(s.index);for(let u in s.attributes)e.remove(s.attributes[u]);s.removeEventListener("dispose",V),delete i[s.id];let l=H.get(s);l&&(e.remove(l),H.delete(s)),C.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,t.memory.geometries--}function n(M,s){return i[s.id]===!0||(s.addEventListener("dispose",V),i[s.id]=!0,t.memory.geometries++),s}function a(M){let s=M.attributes;for(let l in s)e.update(s[l],r.ARRAY_BUFFER)}function L(M){let s=[],l=M.index,u=M.attributes.position,f=0;if(u===void 0)return;if(l!==null){let v=l.array;f=l.version;for(let y=0,h=v.length;y<h;y+=3){let S=v[y+0],g=v[y+1],b=v[y+2];s.push(S,g,g,b,b,S)}}else{let v=u.array;f=u.version;for(let y=0,h=v.length/3-1;y<h;y+=3){let S=y+0,g=y+1,b=y+2;s.push(S,g,g,b,b,S)}}let c=new(u.count>=65535?X3:W3)(s,1);c.version=f;let d=H.get(M);d&&e.remove(d),H.set(M,c)}function o(M){let s=H.get(M);if(s){let l=M.index;l!==null&&s.version<l.version&&L(M)}else L(M);return H.get(M)}return{get:n,update:a,getWireframeAttribute:o}}function _L(r,e,t){let C;function i(M){C=M}let H,V;function n(M){H=M.type,V=M.bytesPerElement}function a(M,s){r.drawElements(C,s,H,M*V),t.update(s,C,1)}function L(M,s,l){l!==0&&(r.drawElementsInstanced(C,s,H,M*V,l),t.update(s,C,l))}function o(M,s,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(C,s,0,H,M,0,l);let f=0;for(let c=0;c<l;c++)f+=s[c];t.update(f,C,1)}this.setMode=i,this.setIndex=n,this.render=a,this.renderInstances=L,this.renderMultiDraw=o}function yL(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function C(H,V,n){switch(t.calls++,V){case r.TRIANGLES:t.triangles+=n*(H/3);break;case r.LINES:t.lines+=n*(H/2);break;case r.LINE_STRIP:t.lines+=n*(H-1);break;case r.LINE_LOOP:t.lines+=n*H;break;case r.POINTS:t.points+=n*H;break;default:R1("WebGLInfo: Unknown draw mode:",V);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:C}}function bL(r,e,t){let C=new WeakMap,i=new l2;function H(V,n,a){let L=V.morphTargetInfluences,o=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,M=o!==void 0?o.length:0,s=C.get(n);if(s===void 0||s.count!==M){let Z=function(){b.dispose(),C.delete(n),n.removeEventListener("dispose",Z)};s!==void 0&&s.texture.dispose();let l=n.morphAttributes.position!==void 0,u=n.morphAttributes.normal!==void 0,f=n.morphAttributes.color!==void 0,c=n.morphAttributes.position||[],d=n.morphAttributes.normal||[],v=n.morphAttributes.color||[],y=0;l===!0&&(y=1),u===!0&&(y=2),f===!0&&(y=3);let h=n.attributes.position.count*y,S=1;h>e.maxTextureSize&&(S=Math.ceil(h/e.maxTextureSize),h=e.maxTextureSize);let g=new Float32Array(h*S*4*M),b=new z3(g,h,S,M);b.type=v5,b.needsUpdate=!0;let m=y*4;for(let R=0;R<M;R++){let I=c[R],N=d[R],G=v[R],P=h*S*4*R;for(let U=0;U<I.count;U++){let Q=U*m;l===!0&&(i.fromBufferAttribute(I,U),g[P+Q+0]=i.x,g[P+Q+1]=i.y,g[P+Q+2]=i.z,g[P+Q+3]=0),u===!0&&(i.fromBufferAttribute(N,U),g[P+Q+4]=i.x,g[P+Q+5]=i.y,g[P+Q+6]=i.z,g[P+Q+7]=0),f===!0&&(i.fromBufferAttribute(G,U),g[P+Q+8]=i.x,g[P+Q+9]=i.y,g[P+Q+10]=i.z,g[P+Q+11]=G.itemSize===4?i.w:1)}}s={count:M,texture:b,size:new m1(h,S)},C.set(n,s),n.addEventListener("dispose",Z)}if(V.isInstancedMesh===!0&&V.morphTexture!==null)a.getUniforms().setValue(r,"morphTexture",V.morphTexture,t);else{let l=0;for(let f=0;f<L.length;f++)l+=L[f];let u=n.morphTargetsRelative?1:1-l;a.getUniforms().setValue(r,"morphTargetBaseInfluence",u),a.getUniforms().setValue(r,"morphTargetInfluences",L)}a.getUniforms().setValue(r,"morphTargetsTexture",s.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",s.size)}return{update:H}}function TL(r,e,t,C,i){let H=new WeakMap;function V(L){let o=i.render.frame,M=L.geometry,s=e.get(L,M);if(H.get(s)!==o&&(e.update(s),H.set(s,o)),L.isInstancedMesh&&(L.hasEventListener("dispose",a)===!1&&L.addEventListener("dispose",a),H.get(L)!==o&&(t.update(L.instanceMatrix,r.ARRAY_BUFFER),L.instanceColor!==null&&t.update(L.instanceColor,r.ARRAY_BUFFER),H.set(L,o))),L.isSkinnedMesh){let l=L.skeleton;H.get(l)!==o&&(l.update(),H.set(l,o))}return s}function n(){H=new WeakMap}function a(L){let o=L.target;o.removeEventListener("dispose",a),C.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:V,dispose:n}}var wL={[t8]:"LINEAR_TONE_MAPPING",[C8]:"REINHARD_TONE_MAPPING",[r8]:"CINEON_TONE_MAPPING",[i8]:"ACES_FILMIC_TONE_MAPPING",[V8]:"AGX_TONE_MAPPING",[n8]:"NEUTRAL_TONE_MAPPING",[H8]:"CUSTOM_TONE_MAPPING"};function OL(r,e,t,C,i,H){let V=new J2(e,t,{type:r,depthBuffer:i,stencilBuffer:H,samples:C?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),n=null,a=null,L=new h5;L.setAttribute("position",new W2([-1,3,0,-1,-1,0,3,-1,0],3)),L.setAttribute("uv",new W2([0,2,0,0,2,0],2));let o=new b4({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),M=new $2(L,o),s=new l3(-1,1,1,-1,0,1),l=null,u=null,f=!1,c,d=null,v=[],y=!1;this.setSize=function(h,S){V.setSize(h,S),n!==null&&n.setSize(h,S),a!==null&&a.setSize(h,S);for(let g=0;g<v.length;g++){let b=v[g];b.setSize&&b.setSize(h,S)}},this.setEffects=function(h){v=h,y=v.length>0&&v[0].isRenderPass===!0;let S=V.width,g=V.height;v.length>0&&n===null&&(n=new J2(S,g,{type:S5,depthBuffer:!1,stencilBuffer:!1}),a=new J2(S,g,{type:S5,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<v.length;b++){let m=v[b];m.setSize&&m.setSize(S,g)}},this.begin=function(h,S){if(f||h.toneMapping===f5&&v.length===0)return!1;if(d=S,S!==null){let g=S.width,b=S.height;(V.width!==g||V.height!==b)&&this.setSize(g,b)}return y===!1&&h.setRenderTarget(V),c=h.toneMapping,h.toneMapping=f5,!0},this.hasRenderPass=function(){return y},this.end=function(h,S){h.toneMapping=c,f=!0;let g=V,b=n;for(let m=0;m<v.length;m++){let Z=v[m];Z.enabled!==!1&&(Z.render(h,b,g,S),Z.needsSwap!==!1&&(g=b,b=b===n?a:n))}if(l!==h.outputColorSpace||u!==h.toneMapping){l=h.outputColorSpace,u=h.toneMapping,o.defines={},X1.getTransfer(l)===t2&&(o.defines.SRGB_TRANSFER="");let m=wL[u];m&&(o.defines[m]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=g.texture,h.setRenderTarget(d),h.render(M,s),d=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){V.dispose(),n!==null&&n.dispose(),a!==null&&a.dispose(),L.dispose(),o.dispose()}}var cC=new X2,B8=new n0(1,1),pC=new z3,uC=new h4,AC=new Y3,Qt=[],Kt=[],Jt=new Float32Array(16),jt=new Float32Array(9),eC=new Float32Array(4);function x3(r,e,t){let C=r[0];if(C<=0||C>0)return r;let i=e*t,H=Qt[i];if(H===void 0&&(H=new Float32Array(i),Qt[i]=H),e!==0){C.toArray(H,0);for(let V=1,n=0;V!==e;++V)n+=t,r[V].toArray(H,n)}return H}function v2(r,e){if(r.length!==e.length)return!1;for(let t=0,C=r.length;t<C;t++)if(r[t]!==e[t])return!1;return!0}function S2(r,e){for(let t=0,C=e.length;t<C;t++)r[t]=e[t]}function k9(r,e){let t=Kt[e];t===void 0&&(t=new Int32Array(e),Kt[e]=t);for(let C=0;C!==e;++C)t[C]=r.allocateTextureUnit();return t}function EL(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function RL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(v2(t,e))return;r.uniform2fv(this.addr,e),S2(t,e)}}function PL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(v2(t,e))return;r.uniform3fv(this.addr,e),S2(t,e)}}function BL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(v2(t,e))return;r.uniform4fv(this.addr,e),S2(t,e)}}function IL(r,e){let t=this.cache,C=e.elements;if(C===void 0){if(v2(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),S2(t,e)}else{if(v2(t,C))return;eC.set(C),r.uniformMatrix2fv(this.addr,!1,eC),S2(t,C)}}function FL(r,e){let t=this.cache,C=e.elements;if(C===void 0){if(v2(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),S2(t,e)}else{if(v2(t,C))return;jt.set(C),r.uniformMatrix3fv(this.addr,!1,jt),S2(t,C)}}function DL(r,e){let t=this.cache,C=e.elements;if(C===void 0){if(v2(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),S2(t,e)}else{if(v2(t,C))return;Jt.set(C),r.uniformMatrix4fv(this.addr,!1,Jt),S2(t,C)}}function kL(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function NL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(v2(t,e))return;r.uniform2iv(this.addr,e),S2(t,e)}}function UL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(v2(t,e))return;r.uniform3iv(this.addr,e),S2(t,e)}}function zL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(v2(t,e))return;r.uniform4iv(this.addr,e),S2(t,e)}}function GL(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function WL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(v2(t,e))return;r.uniform2uiv(this.addr,e),S2(t,e)}}function XL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(v2(t,e))return;r.uniform3uiv(this.addr,e),S2(t,e)}}function qL(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(v2(t,e))return;r.uniform4uiv(this.addr,e),S2(t,e)}}function $L(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i);let H;this.type===r.SAMPLER_2D_SHADOW?(B8.compareFunction=t.isReversedDepthBuffer()?E9:O9,H=B8):H=cC,t.setTexture2D(e||H,i)}function YL(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i),t.setTexture3D(e||uC,i)}function QL(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i),t.setTextureCube(e||AC,i)}function KL(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i),t.setTexture2DArray(e||pC,i)}function JL(r){switch(r){case 5126:return EL;case 35664:return RL;case 35665:return PL;case 35666:return BL;case 35674:return IL;case 35675:return FL;case 35676:return DL;case 5124:case 35670:return kL;case 35667:case 35671:return NL;case 35668:case 35672:return UL;case 35669:case 35673:return zL;case 5125:return GL;case 36294:return WL;case 36295:return XL;case 36296:return qL;case 35678:case 36198:case 36298:case 36306:case 35682:return $L;case 35679:case 36299:case 36307:return YL;case 35680:case 36300:case 36308:case 36293:return QL;case 36289:case 36303:case 36311:case 36292:return KL}}function jL(r,e){r.uniform1fv(this.addr,e)}function ea(r,e){let t=x3(e,this.size,2);r.uniform2fv(this.addr,t)}function ta(r,e){let t=x3(e,this.size,3);r.uniform3fv(this.addr,t)}function Ca(r,e){let t=x3(e,this.size,4);r.uniform4fv(this.addr,t)}function ra(r,e){let t=x3(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ia(r,e){let t=x3(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ha(r,e){let t=x3(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Va(r,e){r.uniform1iv(this.addr,e)}function na(r,e){r.uniform2iv(this.addr,e)}function La(r,e){r.uniform3iv(this.addr,e)}function aa(r,e){r.uniform4iv(this.addr,e)}function oa(r,e){r.uniform1uiv(this.addr,e)}function sa(r,e){r.uniform2uiv(this.addr,e)}function Ma(r,e){r.uniform3uiv(this.addr,e)}function la(r,e){r.uniform4uiv(this.addr,e)}function da(r,e,t){let C=this.cache,i=e.length,H=k9(t,i);v2(C,H)||(r.uniform1iv(this.addr,H),S2(C,H));let V;this.type===r.SAMPLER_2D_SHADOW?V=B8:V=cC;for(let n=0;n!==i;++n)t.setTexture2D(e[n]||V,H[n])}function ca(r,e,t){let C=this.cache,i=e.length,H=k9(t,i);v2(C,H)||(r.uniform1iv(this.addr,H),S2(C,H));for(let V=0;V!==i;++V)t.setTexture3D(e[V]||uC,H[V])}function pa(r,e,t){let C=this.cache,i=e.length,H=k9(t,i);v2(C,H)||(r.uniform1iv(this.addr,H),S2(C,H));for(let V=0;V!==i;++V)t.setTextureCube(e[V]||AC,H[V])}function ua(r,e,t){let C=this.cache,i=e.length,H=k9(t,i);v2(C,H)||(r.uniform1iv(this.addr,H),S2(C,H));for(let V=0;V!==i;++V)t.setTexture2DArray(e[V]||pC,H[V])}function Aa(r){switch(r){case 5126:return jL;case 35664:return ea;case 35665:return ta;case 35666:return Ca;case 35674:return ra;case 35675:return ia;case 35676:return Ha;case 5124:case 35670:return Va;case 35667:case 35671:return na;case 35668:case 35672:return La;case 35669:case 35673:return aa;case 5125:return oa;case 36294:return sa;case 36295:return Ma;case 36296:return la;case 35678:case 36198:case 36298:case 36306:case 35682:return da;case 35679:case 36299:case 36307:return ca;case 35680:case 36300:case 36308:case 36293:return pa;case 36289:case 36303:case 36311:case 36292:return ua}}var I8=class{constructor(e,t,C){this.id=e,this.addr=C,this.cache=[],this.type=t.type,this.setValue=JL(t.type)}},F8=class{constructor(e,t,C){this.id=e,this.addr=C,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Aa(t.type)}},D8=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,C){let i=this.seq;for(let H=0,V=i.length;H!==V;++H){let n=i[H];n.setValue(e,t[n.id],C)}}},R8=/(\w+)(\])?(\[|\.)?/g;function tC(r,e){r.seq.push(e),r.map[e.id]=e}function ma(r,e,t){let C=r.name,i=C.length;for(R8.lastIndex=0;;){let H=R8.exec(C),V=R8.lastIndex,n=H[1],a=H[2]==="]",L=H[3];if(a&&(n=n|0),L===void 0||L==="["&&V+2===i){tC(t,L===void 0?new I8(n,r,e):new F8(n,r,e));break}else{let M=t.map[n];M===void 0&&(M=new D8(n),tC(t,M)),t=M}}}var f3=class{constructor(e,t){this.seq=[],this.map={};let C=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let V=0;V<C;++V){let n=e.getActiveUniform(t,V),a=e.getUniformLocation(t,n.name);ma(n,a,this)}let i=[],H=[];for(let V of this.seq)V.type===e.SAMPLER_2D_SHADOW||V.type===e.SAMPLER_CUBE_SHADOW||V.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(V):H.push(V);i.length>0&&(this.seq=i.concat(H))}setValue(e,t,C,i){let H=this.map[t];H!==void 0&&H.setValue(e,C,i)}setOptional(e,t,C){let i=t[C];i!==void 0&&this.setValue(e,C,i)}static upload(e,t,C,i){for(let H=0,V=t.length;H!==V;++H){let n=t[H],a=C[n.id];a.needsUpdate!==!1&&n.setValue(e,a.value,i)}}static seqWithValue(e,t){let C=[];for(let i=0,H=e.length;i!==H;++i){let V=e[i];V.id in t&&C.push(V)}return C}};function CC(r,e,t){let C=r.createShader(e);return r.shaderSource(C,t),r.compileShader(C),C}var ha=37297,fa=0;function xa(r,e){let t=r.split(`
`),C=[],i=Math.max(e-6,0),H=Math.min(e+6,t.length);for(let V=i;V<H;V++){let n=V+1;C.push(`${n===e?">":" "} ${n}: ${t[V]}`)}return C.join(`
`)}var rC=new P1;function va(r){X1._getMatrix(rC,X1.workingColorSpace,r);let e=`mat3( ${rC.elements.map(t=>t.toFixed(4))} )`;switch(X1.getTransfer(r)){case N3:return[e,"LinearTransferOETF"];case t2:return[e,"sRGBTransferOETF"];default:return O1("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function iC(r,e,t){let C=r.getShaderParameter(e,r.COMPILE_STATUS),H=(r.getShaderInfoLog(e)||"").trim();if(C&&H==="")return"";let V=/ERROR: 0:(\d+)/.exec(H);if(V){let n=parseInt(V[1]);return t.toUpperCase()+`

`+H+`

`+xa(r.getShaderSource(e),n)}else return H}function Sa(r,e){let t=va(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ga={[t8]:"Linear",[C8]:"Reinhard",[r8]:"Cineon",[i8]:"ACESFilmic",[V8]:"AgX",[n8]:"Neutral",[H8]:"Custom"};function Za(r,e){let t=ga[e];return t===void 0?(O1("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var P9=new w;function _a(){X1.getLuminanceCoefficients(P9);let r=P9.x.toFixed(4),e=P9.y.toFixed(4),t=P9.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ya(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(S7).join(`
`)}function ba(r){let e=[];for(let t in r){let C=r[t];C!==!1&&e.push("#define "+t+" "+C)}return e.join(`
`)}function Ta(r,e){let t={},C=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<C;i++){let H=r.getActiveAttrib(e,i),V=H.name,n=1;H.type===r.FLOAT_MAT2&&(n=2),H.type===r.FLOAT_MAT3&&(n=3),H.type===r.FLOAT_MAT4&&(n=4),t[V]={type:H.type,location:r.getAttribLocation(e,V),locationSize:n}}return t}function S7(r){return r!==""}function HC(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function VC(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wa=/^[ \t]*#include +<([\w\d./]+)>/gm;function k8(r){return r.replace(wa,Ea)}var Oa=new Map;function Ea(r,e){let t=k1[e];if(t===void 0){let C=Oa.get(e);if(C!==void 0)t=k1[C],O1('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,C);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return k8(t)}var Ra=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nC(r){return r.replace(Ra,Pa)}function Pa(r,e,t,C){let i="";for(let H=parseInt(e);H<parseInt(t);H++)i+=C.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return i}function LC(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ba={[l7]:"SHADOWMAP_TYPE_PCF",[c3]:"SHADOWMAP_TYPE_VSM"};function Ia(r){return Ba[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fa={[l0]:"ENVMAP_TYPE_CUBE",[b0]:"ENVMAP_TYPE_CUBE",[d7]:"ENVMAP_TYPE_CUBE_UV"};function Da(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Fa[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var ka={[b0]:"ENVMAP_MODE_REFRACTION"};function Na(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ka[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ua={[e8]:"ENVMAP_BLENDING_MULTIPLY",[ft]:"ENVMAP_BLENDING_MIX",[xt]:"ENVMAP_BLENDING_ADD"};function za(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ua[r.combine]||"ENVMAP_BLENDING_NONE"}function Ga(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,C=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:C,maxMip:t}}function Wa(r,e,t,C){let i=r.getContext(),H=t.defines,V=t.vertexShader,n=t.fragmentShader,a=Ia(t),L=Da(t),o=Na(t),M=za(t),s=Ga(t),l=ya(t),u=ba(H),f=i.createProgram(),c,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(S7).join(`
`),c.length>0&&(c+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(S7).join(`
`),d.length>0&&(d+=`
`)):(c=[LC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(S7).join(`
`),d=[LC(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+L:"",t.envMap?"#define "+o:"",t.envMap?"#define "+M:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==f5?"#define TONE_MAPPING":"",t.toneMapping!==f5?k1.tonemapping_pars_fragment:"",t.toneMapping!==f5?Za("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",k1.colorspace_pars_fragment,Sa("linearToOutputTexel",t.outputColorSpace),_a(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(S7).join(`
`)),V=k8(V),V=HC(V,t),V=VC(V,t),n=k8(n),n=HC(n,t),n=VC(n,t),V=nC(V),n=nC(n),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,d=["#define varying in",t.glslVersion===p8?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+c+V,h=v+d+n,S=CC(i,i.VERTEX_SHADER,y),g=CC(i,i.FRAGMENT_SHADER,h);i.attachShader(f,S),i.attachShader(f,g),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function b(I){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(f)||"",G=i.getShaderInfoLog(S)||"",P=i.getShaderInfoLog(g)||"",U=N.trim(),Q=G.trim(),Y=P.trim(),r1=!0,X=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(r1=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,S,g);else{let e1=iC(i,S,"vertex"),C1=iC(i,g,"fragment");R1("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+e1+`
`+C1)}else U!==""?O1("WebGLProgram: Program Info Log:",U):(Q===""||Y==="")&&(X=!1);X&&(I.diagnostics={runnable:r1,programLog:U,vertexShader:{log:Q,prefix:c},fragmentShader:{log:Y,prefix:d}})}i.deleteShader(S),i.deleteShader(g),m=new f3(i,f),Z=Ta(i,f)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let Z;this.getAttributes=function(){return Z===void 0&&b(this),Z};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(f,ha)),R},this.destroy=function(){C.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fa++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=g,this}var Xa=0,N8=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,C){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(C)===!1&&(i.add(C),C.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let C of t)C.usedTimes--,C.usedTimes===0&&this.shaderCache.delete(C.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,C=t.get(e);return C===void 0&&(C=new Set,t.set(e,C)),C}_getShaderStage(e){let t=this.shaderCache,C=t.get(e);return C===void 0&&(C=new U8(e),t.set(e,C)),C}},U8=class{constructor(e){this.id=Xa++,this.code=e,this.usedTimes=0}};function qa(r){return r===p0||r===h7||r===f7}function $a(r,e,t,C,i,H){let V=new H3,n=new N8,a=new Set,L=[],o=new Map,M=C.logarithmicDepthBuffer,s=C.precision,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(m){return a.add(m),m===0?"uv":`uv${m}`}function f(m,Z,R,I,N,G){let P=I.fog,U=N.geometry,Q=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,r1=e.get(m.envMap||Q,Y),X=r1&&r1.mapping===d7?r1.image.height:null,e1=l[m.type];m.precision!==null&&(s=C.getMaxPrecision(m.precision),s!==m.precision&&O1("WebGLProgram.getParameters:",m.precision,"not supported, using",s,"instead."));let C1=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,b1=C1!==void 0?C1.length:0,_1=0;U.morphAttributes.position!==void 0&&(_1=1),U.morphAttributes.normal!==void 0&&(_1=2),U.morphAttributes.color!==void 0&&(_1=3);let V2,q1,J1,q;if(e1){let L2=P5[e1];V2=L2.vertexShader,q1=L2.fragmentShader}else{V2=m.vertexShader,q1=m.fragmentShader;let L2=n.getVertexShaderStage(m),j1=n.getFragmentShaderStage(m);n.update(m,L2,j1),J1=L2.id,q=j1.id}let j=r.getRenderTarget(),h1=r.state.buffers.depth.getReversed(),B1=N.isInstancedMesh===!0,u1=N.isBatchedMesh===!0,N1=!!m.map,x2=!!m.matcap,z1=!!r1,Q1=!!m.aoMap,n2=!!m.lightMap,W1=!!m.bumpMap&&m.wireframe===!1,M2=!!m.normalMap,_2=!!m.displacementMap,K2=!!m.emissiveMap,d2=!!m.metalnessMap,m2=!!m.roughnessMap,E=m.anisotropy>0,E2=m.clearcoat>0,C2=m.dispersion>0,x=m.retroreflectivity>0,p=m.iridescence>0,B=m.sheen>0,k=m.transmission>0,W=E&&!!m.anisotropyMap,H1=E2&&!!m.clearcoatMap,V1=E2&&!!m.clearcoatNormalMap,$=E2&&!!m.clearcoatRoughnessMap,J=p&&!!m.iridescenceMap,n1=p&&!!m.iridescenceThicknessMap,g1=B&&!!m.sheenColorMap,s1=B&&!!m.sheenRoughnessMap,L1=!!m.specularMap,Z1=!!m.specularColorMap,w1=!!m.specularIntensityMap,I1=k&&!!m.transmissionMap,O=k&&!!m.thicknessMap,a1=!!m.gradientMap,K=!!m.alphaMap,o1=m.alphaTest>0,c1=!!m.alphaHash,t1=!!m.extensions,y1=f5;m.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(y1=r.toneMapping);let v1={shaderID:e1,shaderType:m.type,shaderName:m.name,vertexShader:V2,fragmentShader:q1,defines:m.defines,customVertexShaderID:J1,customFragmentShaderID:q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:s,batching:u1,batchingColor:u1&&N._colorsTexture!==null,instancing:B1,instancingColor:B1&&N.instanceColor!==null,instancingMorph:B1&&N.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:X1.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:N1,matcap:x2,envMap:z1,envMapMode:z1&&r1.mapping,envMapCubeUVHeight:X,aoMap:Q1,lightMap:n2,bumpMap:W1,normalMap:M2,displacementMap:_2,emissiveMap:K2,normalMapObjectSpace:M2&&m.normalMapType===gt,normalMapTangentSpace:M2&&m.normalMapType===w9,packedNormalMap:M2&&m.normalMapType===w9&&qa(m.normalMap.format),metalnessMap:d2,roughnessMap:m2,anisotropy:E,anisotropyMap:W,clearcoat:E2,clearcoatMap:H1,clearcoatNormalMap:V1,clearcoatRoughnessMap:$,dispersion:C2,retroreflection:x,iridescence:p,iridescenceMap:J,iridescenceThicknessMap:n1,sheen:B,sheenColorMap:g1,sheenRoughnessMap:s1,specularMap:L1,specularColorMap:Z1,specularIntensityMap:w1,transmission:k,transmissionMap:I1,thicknessMap:O,gradientMap:a1,opaque:m.transparent===!1&&m.blending===p3&&m.alphaToCoverage===!1,alphaMap:K,alphaTest:o1,alphaHash:c1,combine:m.combine,mapUv:N1&&u(m.map.channel),aoMapUv:Q1&&u(m.aoMap.channel),lightMapUv:n2&&u(m.lightMap.channel),bumpMapUv:W1&&u(m.bumpMap.channel),normalMapUv:M2&&u(m.normalMap.channel),displacementMapUv:_2&&u(m.displacementMap.channel),emissiveMapUv:K2&&u(m.emissiveMap.channel),metalnessMapUv:d2&&u(m.metalnessMap.channel),roughnessMapUv:m2&&u(m.roughnessMap.channel),anisotropyMapUv:W&&u(m.anisotropyMap.channel),clearcoatMapUv:H1&&u(m.clearcoatMap.channel),clearcoatNormalMapUv:V1&&u(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(m.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&u(m.iridescenceMap.channel),iridescenceThicknessMapUv:n1&&u(m.iridescenceThicknessMap.channel),sheenColorMapUv:g1&&u(m.sheenColorMap.channel),sheenRoughnessMapUv:s1&&u(m.sheenRoughnessMap.channel),specularMapUv:L1&&u(m.specularMap.channel),specularColorMapUv:Z1&&u(m.specularColorMap.channel),specularIntensityMapUv:w1&&u(m.specularIntensityMap.channel),transmissionMapUv:I1&&u(m.transmissionMap.channel),thicknessMapUv:O&&u(m.thicknessMap.channel),alphaMapUv:K&&u(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(M2||E),vertexNormals:!!U.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(N1||K),fog:!!P,useFog:m.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||U.attributes.normal===void 0&&M2===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:h1,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:b1,morphTextureStride:_1,numSunLights:Z.sun.length,numDirLights:Z.directional.length,numPointLights:Z.point.length,numSpotLights:Z.spot.length,numSpotLightMaps:Z.spotLightMap.length,numRectAreaLights:Z.rectArea.length,numHemiLights:Z.hemi.length,numSunLightShadows:Z.sunShadowMap.length,numDirLightShadows:Z.directionalShadowMap.length,numPointLightShadows:Z.pointShadowMap.length,numSpotLightShadows:Z.spotShadowMap.length,numSpotLightShadowsWithMaps:Z.numSpotLightShadowsWithMaps,numLightProbes:Z.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:y1,decodeVideoTexture:N1&&m.map.isVideoTexture===!0&&X1.getTransfer(m.map.colorSpace)===t2,decodeVideoTextureEmissive:K2&&m.emissiveMap.isVideoTexture===!0&&X1.getTransfer(m.emissiveMap.colorSpace)===t2,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===O5,flipSided:m.side===Y2,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:t1&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(t1&&m.extensions.multiDraw===!0||u1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return v1.vertexUv1s=a.has(1),v1.vertexUv2s=a.has(2),v1.vertexUv3s=a.has(3),a.clear(),v1}function c(m){let Z=[];if(m.shaderID?Z.push(m.shaderID):(Z.push(m.customVertexShaderID),Z.push(m.customFragmentShaderID)),m.defines!==void 0)for(let R in m.defines)Z.push(R),Z.push(m.defines[R]);return m.isRawShaderMaterial===!1&&(d(Z,m),v(Z,m),Z.push(r.outputColorSpace)),Z.push(m.customProgramCacheKey),Z.join()}function d(m,Z){m.push(Z.precision),m.push(Z.outputColorSpace),m.push(Z.envMapMode),m.push(Z.envMapCubeUVHeight),m.push(Z.mapUv),m.push(Z.alphaMapUv),m.push(Z.lightMapUv),m.push(Z.aoMapUv),m.push(Z.bumpMapUv),m.push(Z.normalMapUv),m.push(Z.displacementMapUv),m.push(Z.emissiveMapUv),m.push(Z.metalnessMapUv),m.push(Z.roughnessMapUv),m.push(Z.anisotropyMapUv),m.push(Z.clearcoatMapUv),m.push(Z.clearcoatNormalMapUv),m.push(Z.clearcoatRoughnessMapUv),m.push(Z.iridescenceMapUv),m.push(Z.iridescenceThicknessMapUv),m.push(Z.sheenColorMapUv),m.push(Z.sheenRoughnessMapUv),m.push(Z.specularMapUv),m.push(Z.specularColorMapUv),m.push(Z.specularIntensityMapUv),m.push(Z.transmissionMapUv),m.push(Z.thicknessMapUv),m.push(Z.combine),m.push(Z.fogExp2),m.push(Z.sizeAttenuation),m.push(Z.morphTargetsCount),m.push(Z.morphAttributeCount),m.push(Z.numSunLights),m.push(Z.numDirLights),m.push(Z.numPointLights),m.push(Z.numSpotLights),m.push(Z.numSpotLightMaps),m.push(Z.numHemiLights),m.push(Z.numRectAreaLights),m.push(Z.numSunLightShadows),m.push(Z.numDirLightShadows),m.push(Z.numPointLightShadows),m.push(Z.numSpotLightShadows),m.push(Z.numSpotLightShadowsWithMaps),m.push(Z.numLightProbes),m.push(Z.shadowMapType),m.push(Z.toneMapping),m.push(Z.numClippingPlanes),m.push(Z.numClipIntersection),m.push(Z.depthPacking)}function v(m,Z){V.disableAll(),Z.instancing&&V.enable(0),Z.instancingColor&&V.enable(1),Z.instancingMorph&&V.enable(2),Z.matcap&&V.enable(3),Z.envMap&&V.enable(4),Z.normalMapObjectSpace&&V.enable(5),Z.normalMapTangentSpace&&V.enable(6),Z.clearcoat&&V.enable(7),Z.iridescence&&V.enable(8),Z.alphaTest&&V.enable(9),Z.vertexColors&&V.enable(10),Z.vertexAlphas&&V.enable(11),Z.vertexUv1s&&V.enable(12),Z.vertexUv2s&&V.enable(13),Z.vertexUv3s&&V.enable(14),Z.vertexTangents&&V.enable(15),Z.anisotropy&&V.enable(16),Z.alphaHash&&V.enable(17),Z.batching&&V.enable(18),Z.dispersion&&V.enable(19),Z.retroreflection&&V.enable(24),Z.batchingColor&&V.enable(20),Z.gradientMap&&V.enable(21),Z.packedNormalMap&&V.enable(22),Z.vertexNormals&&V.enable(23),m.push(V.mask),V.disableAll(),Z.fog&&V.enable(0),Z.useFog&&V.enable(1),Z.flatShading&&V.enable(2),Z.logarithmicDepthBuffer&&V.enable(3),Z.reversedDepthBuffer&&V.enable(4),Z.skinning&&V.enable(5),Z.morphTargets&&V.enable(6),Z.morphNormals&&V.enable(7),Z.morphColors&&V.enable(8),Z.premultipliedAlpha&&V.enable(9),Z.shadowMapEnabled&&V.enable(10),Z.doubleSided&&V.enable(11),Z.flipSided&&V.enable(12),Z.useDepthPacking&&V.enable(13),Z.dithering&&V.enable(14),Z.transmission&&V.enable(15),Z.sheen&&V.enable(16),Z.opaque&&V.enable(17),Z.pointsUvs&&V.enable(18),Z.decodeVideoTexture&&V.enable(19),Z.decodeVideoTextureEmissive&&V.enable(20),Z.alphaToCoverage&&V.enable(21),Z.numLightProbeGrids>0&&V.enable(22),Z.hasPositionAttribute&&V.enable(23),m.push(V.mask)}function y(m){let Z=l[m.type],R;if(Z){let I=P5[Z];R=zt.clone(I.uniforms)}else R=m.uniforms;return R}function h(m,Z){let R=o.get(Z);return R!==void 0?++R.usedTimes:(R=new Wa(r,Z,m,i),L.push(R),o.set(Z,R)),R}function S(m){if(--m.usedTimes===0){let Z=L.indexOf(m);L[Z]=L[L.length-1],L.pop(),o.delete(m.cacheKey),m.destroy()}}function g(m){n.remove(m)}function b(){n.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:y,acquireProgram:h,releaseProgram:S,releaseShaderCache:g,programs:L,dispose:b}}function Ya(){let r=new WeakMap;function e(V){return r.has(V)}function t(V){let n=r.get(V);return n===void 0&&(n={},r.set(V,n)),n}function C(V){r.delete(V)}function i(V,n,a){r.get(V)[n]=a}function H(){r=new WeakMap}return{has:e,get:t,remove:C,update:i,dispose:H}}function Qa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function aC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function oC(){let r=[],e=0,t=[],C=[],i=[];function H(){e=0,t.length=0,C.length=0,i.length=0}function V(s){let l=0;return s.isInstancedMesh&&(l+=2),s.isSkinnedMesh&&(l+=1),l}function n(s,l,u,f,c,d){let v=r[e];return v===void 0?(v={id:s.id,object:s,geometry:l,material:u,materialVariant:V(s),groupOrder:f,renderOrder:s.renderOrder,z:c,group:d},r[e]=v):(v.id=s.id,v.object=s,v.geometry=l,v.material=u,v.materialVariant=V(s),v.groupOrder=f,v.renderOrder=s.renderOrder,v.z=c,v.group=d),e++,v}function a(s,l,u,f,c,d,v){v.reversedDepth===!0&&(c=-c);let y=n(s,l,u,f,c,d);u.transmission>0?C.push(y):u.transparent===!0?i.push(y):t.push(y)}function L(s,l,u,f,c,d){let v=n(s,l,u,f,c,d);u.transmission>0?C.unshift(v):u.transparent===!0?i.unshift(v):t.unshift(v)}function o(s,l){t.length>1&&t.sort(s||Qa),C.length>1&&C.sort(l||aC),i.length>1&&i.sort(l||aC)}function M(){for(let s=e,l=r.length;s<l;s++){let u=r[s];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:C,transparent:i,init:H,push:a,unshift:L,finish:M,sort:o}}function Ka(){let r=new WeakMap;function e(C,i){let H=r.get(C),V;return H===void 0?(V=new oC,r.set(C,[V])):i>=H.length?(V=new oC,H.push(V)):V=H[i],V}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ja(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new F1};break;case"SpotLight":t={position:new w,direction:new w,color:new F1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new F1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new F1,groundColor:new F1};break;case"RectAreaLight":t={color:new F1,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function ja(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m1};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m1};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m1,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var eo=0;function to(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Co(r){let e=new Ja,t=ja(),C={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let L=0;L<9;L++)C.probe.push(new w);let i=new w,H=new i2,V=new i2;function n(L){let o=0,M=0,s=0;for(let N=0;N<9;N++)C.probe[N].set(0,0,0);let l=0,u=0,f=0,c=0,d=0,v=0,y=0,h=0,S=0,g=0,b=0,m=0,Z=0,R=0;L.sort(to);for(let N=0,G=L.length;N<G;N++){let P=L[N],U=P.color,Q=P.intensity,Y=P.distance,r1=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===p0?r1=P.shadow.map.texture:r1=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)o+=U.r*Q,M+=U.g*Q,s+=U.b*Q;else if(P.isLightProbe){for(let X=0;X<9;X++)C.probe[X].addScaledVector(P.sh.coefficients[X],Q);R++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let e1=P.shadow,C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize.copy(e1.mapSize).multiply(e1.getFrameExtents()),C.sunShadow[u]=C1,C.sunShadowMap[u]=r1;let b1=e1.getViewportCount();for(let _1=0;_1<b1;_1++)C.sunShadowMatrix[f+_1]=e1.getMatrix(_1),C.sunShadowCascade[f+_1]=e1._cascadeData[_1];f+=b1,u++}C.sun[l]=X,l++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let e1=P.shadow,C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize=e1.mapSize,C.directionalShadow[c]=C1,C.directionalShadowMap[c]=r1,C.directionalShadowMatrix[c]=P.shadow.matrix,S++}C.directional[c]=X,c++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(Q),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,C.spot[v]=X;let e1=P.shadow;if(P.map&&(C.spotLightMap[m]=P.map,m++,e1.updateMatrices(P),P.castShadow&&Z++),C.spotLightMatrix[v]=e1.matrix,P.castShadow){let C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize=e1.mapSize,C.spotShadow[v]=C1,C.spotShadowMap[v]=r1,b++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(U).multiplyScalar(Q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),C.rectArea[y]=X,y++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let e1=P.shadow,C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize=e1.mapSize,C1.shadowCameraNear=e1.camera.near,C1.shadowCameraFar=e1.camera.far,C.pointShadow[d]=C1,C.pointShadowMap[d]=r1,C.pointShadowMatrix[d]=P.shadow.matrix,g++}C.point[d]=X,d++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Q),X.groundColor.copy(P.groundColor).multiplyScalar(Q),C.hemi[h]=X,h++}}y>0&&(r.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=M1.LTC_FLOAT_1,C.rectAreaLTC2=M1.LTC_FLOAT_2):(C.rectAreaLTC1=M1.LTC_HALF_1,C.rectAreaLTC2=M1.LTC_HALF_2)),C.ambient[0]=o,C.ambient[1]=M,C.ambient[2]=s;let I=C.hash;(I.sunLength!==l||I.directionalLength!==c||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==y||I.hemiLength!==h||I.numSunShadows!==u||I.numDirectionalShadows!==S||I.numPointShadows!==g||I.numSpotShadows!==b||I.numSpotMaps!==m||I.numLightProbes!==R)&&(C.sun.length=l,C.directional.length=c,C.spot.length=v,C.rectArea.length=y,C.point.length=d,C.hemi.length=h,C.sunShadow.length=u,C.sunShadowMap.length=u,C.sunShadowMatrix.length=f,C.sunShadowCascade.length=f,C.directionalShadow.length=S,C.directionalShadowMap.length=S,C.directionalShadowMatrix.length=S,C.pointShadow.length=g,C.pointShadowMap.length=g,C.pointShadowMatrix.length=g,C.spotShadow.length=b,C.spotShadowMap.length=b,C.spotLightMatrix.length=b+m-Z,C.spotLightMap.length=m,C.numSpotLightShadowsWithMaps=Z,C.numLightProbes=R,I.sunLength=l,I.directionalLength=c,I.pointLength=d,I.spotLength=v,I.rectAreaLength=y,I.hemiLength=h,I.numSunShadows=u,I.numDirectionalShadows=S,I.numPointShadows=g,I.numSpotShadows=b,I.numSpotMaps=m,I.numLightProbes=R,C.version=eo++)}function a(L,o){let M=0,s=0,l=0,u=0,f=0,c=0,d=o.matrixWorldInverse;for(let v=0,y=L.length;v<y;v++){let h=L[v];if(h.isSunLight){let S=C.sun[M];S.direction.setFromMatrixPosition(h.matrixWorld),S.direction.transformDirection(d),M++}else if(h.isDirectionalLight){let S=C.directional[s];S.direction.setFromMatrixPosition(h.matrixWorld),i.setFromMatrixPosition(h.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(d),s++}else if(h.isSpotLight){let S=C.spot[u];S.position.setFromMatrixPosition(h.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(h.matrixWorld),i.setFromMatrixPosition(h.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(d),u++}else if(h.isRectAreaLight){let S=C.rectArea[f];S.position.setFromMatrixPosition(h.matrixWorld),S.position.applyMatrix4(d),V.identity(),H.copy(h.matrixWorld),H.premultiply(d),V.extractRotation(H),S.halfWidth.set(h.width*.5,0,0),S.halfHeight.set(0,h.height*.5,0),S.halfWidth.applyMatrix4(V),S.halfHeight.applyMatrix4(V),f++}else if(h.isPointLight){let S=C.point[l];S.position.setFromMatrixPosition(h.matrixWorld),S.position.applyMatrix4(d),l++}else if(h.isHemisphereLight){let S=C.hemi[c];S.direction.setFromMatrixPosition(h.matrixWorld),S.direction.transformDirection(d),c++}}}return{setup:n,setupView:a,state:C}}function sC(r){let e=new Co(r),t=[],C=[],i=[];function H(s){M.camera=s,t.length=0,C.length=0,i.length=0}function V(s){t.push(s)}function n(s){C.push(s)}function a(s){i.push(s)}function L(){e.setup(t)}function o(s){e.setupView(t,s)}let M={lightsArray:t,shadowsArray:C,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:M,setupLights:L,setupLightsView:o,pushLight:V,pushShadow:n,pushLightProbeGrid:a}}function ro(r){let e=new WeakMap;function t(i,H=0){let V=e.get(i),n;return V===void 0?(n=new sC(r),e.set(i,[n])):H>=V.length?(n=new sC(r),V.push(n)):n=V[H],n}function C(){e=new WeakMap}return{get:t,dispose:C}}var io=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ho=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vo=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],no=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],MC=new i2,v7=new w,P8=new w;function Lo(r,e,t){let C=new L3,i=new m1,H=new m1,V=new l2,n=new T4,a=new w4,L={},o=t.maxTextureSize,M={[M0]:Y2,[Y2]:M0,[O5]:O5},s=new r5({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new m1},radius:{value:4}},vertexShader:io,fragmentShader:Ho}),l=s.clone();l.defines.HORIZONTAL_PASS=1;let u=new h5;u.setAttribute("position",new a5(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new $2(u,s),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l7;let d=this.type;this.render=function(g,b,m){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||g.length===0)return;this.type===Ct&&(O1("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=l7);let Z=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(E5),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==this.type;G&&b.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=g.length;P<U;P++){let Q=g[P],Y=Q.shadow;if(Y===void 0){O1("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let r1=Y.getFrameExtents();i.multiply(r1),H.copy(Y.mapSize),(i.x>o||i.y>o)&&(i.x>o&&(H.x=Math.floor(o/r1.x),i.x=H.x*r1.x,Y.mapSize.x=H.x),i.y>o&&(H.y=Math.floor(o/r1.y),i.y=H.y*r1.y,Y.mapSize.y=H.y));let X=r.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=X,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===c3){if(Q.isPointLight){O1("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new J2(i.x,i.y,{format:p0,type:S5,minFilter:w2,magFilter:w2,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new n0(i.x,i.y,v5),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=T5,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=b2,Y.map.depthTexture.magFilter=b2}else Q.isPointLight?(Y.map=new I9(i.x),Y.map.depthTexture=new x4(i.x,x5)):(Y.map=new J2(i.x,i.y),Y.map.depthTexture=new n0(i.x,i.y,x5)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=T5,this.type===l7?(Y.map.depthTexture.compareFunction=X?E9:O9,Y.map.depthTexture.minFilter=w2,Y.map.depthTexture.magFilter=w2):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=b2,Y.map.depthTexture.magFilter=b2);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let e1=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,m);for(let C1=0;C1<e1;C1++){let b1=Y.getCamera(C1);if(Q.isPointLight){let _1=Y.camera,V2=Y.matrix,q1=Q.distance||_1.far;q1!==_1.far&&(_1.far=q1,_1.updateProjectionMatrix()),v7.setFromMatrixPosition(Q.matrixWorld),_1.position.copy(v7),P8.copy(_1.position),P8.add(Vo[C1]),_1.up.copy(no[C1]),_1.lookAt(P8),_1.updateMatrixWorld(),V2.makeTranslation(-v7.x,-v7.y,-v7.z),MC.multiplyMatrices(_1.projectionMatrix,_1.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(MC,_1.coordinateSystem,_1.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)r.setRenderTarget(Y.map,C1),r.clear();else{C1===0&&(r.setRenderTarget(Y.map),r.clear());let _1=Y.getViewport(C1);V.set(H.x*_1.x,H.y*_1.y,H.x*_1.z,H.y*_1.w),N.viewport(V)}C=Y.getFrustum(C1),h(b,m,b1,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===c3&&v(Y,m),Y.needsUpdate=!1}d=this.type,c.needsUpdate=!1,r.setRenderTarget(Z,R,I)};function v(g,b){let m=e.update(f);s.defines.VSM_SAMPLES!==g.blurSamples&&(s.defines.VSM_SAMPLES=g.blurSamples,l.defines.VSM_SAMPLES=g.blurSamples,s.needsUpdate=!0,l.needsUpdate=!0),g.mapPass===null?g.mapPass=new J2(i.x,i.y,{format:p0,type:S5}):(g.mapPass.width!==g.map.width||g.mapPass.height!==g.map.height)&&g.mapPass.setSize(g.map.width,g.map.height),s.uniforms.shadow_pass.value=g.map.depthTexture,s.uniforms.resolution.value.set(g.map.width,g.map.height),s.uniforms.radius.value=g.radius,r.setRenderTarget(g.mapPass),r.clear(),r.renderBufferDirect(b,null,m,s,f,null),l.uniforms.shadow_pass.value=g.mapPass.texture,l.uniforms.resolution.value.set(g.map.width,g.map.height),l.uniforms.radius.value=g.radius,r.setRenderTarget(g.map),r.clear(),r.renderBufferDirect(b,null,m,l,f,null)}function y(g,b,m,Z){let R=null,I=m.isPointLight===!0?g.customDistanceMaterial:g.customDepthMaterial;if(I!==void 0)R=I;else if(R=m.isPointLight===!0?a:n,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let N=R.uuid,G=b.uuid,P=L[N];P===void 0&&(P={},L[N]=P);let U=P[G];U===void 0&&(U=R.clone(),P[G]=U,b.addEventListener("dispose",S)),R=U}if(R.visible=b.visible,R.wireframe=b.wireframe,Z===c3?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:M[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,m.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=r.properties.get(R);N.light=m}return R}function h(g,b,m,Z,R){if(g.visible===!1)return;if(g.layers.test(b.layers)&&(g.isMesh||g.isLine||g.isPoints)&&(g.castShadow||g.receiveShadow&&R===c3)&&(!g.frustumCulled||g.intersectsFrustum(C))){g.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,g.matrixWorld);let G=e.update(g),P=g.material;if(Array.isArray(P)){let U=G.groups;for(let Q=0,Y=U.length;Q<Y;Q++){let r1=U[Q],X=P[r1.materialIndex];if(X&&X.visible){let e1=y(g,X,Z,R);g.onBeforeShadow(r,g,b,m,G,e1,r1),r.renderBufferDirect(m,null,G,e1,g,r1),g.onAfterShadow(r,g,b,m,G,e1,r1)}}}else if(P.visible){let U=y(g,P,Z,R);g.onBeforeShadow(r,g,b,m,G,U,null),r.renderBufferDirect(m,null,G,U,g,null),g.onAfterShadow(r,g,b,m,G,U,null)}}let N=g.children;for(let G=0,P=N.length;G<P;G++)h(N[G],b,m,Z,R)}function S(g){g.target.removeEventListener("dispose",S);for(let m in L){let Z=L[m],R=g.target.uuid;R in Z&&(Z[R].dispose(),delete Z[R])}}}function ao(r,e){function t(){let O=!1,a1=new l2,K=null,o1=new l2(0,0,0,0);return{setMask:function(c1){K!==c1&&!O&&(r.colorMask(c1,c1,c1,c1),K=c1)},setLocked:function(c1){O=c1},setClear:function(c1,t1,y1,v1,L2){L2===!0&&(c1*=v1,t1*=v1,y1*=v1),a1.set(c1,t1,y1,v1),o1.equals(a1)===!1&&(r.clearColor(c1,t1,y1,v1),o1.copy(a1))},reset:function(){O=!1,K=null,o1.set(-1,0,0,0)}}}function C(){let O=!1,a1=!1,K=null,o1=null,c1=null;return{setReversed:function(t1){if(a1!==t1){let y1=e.get("EXT_clip_control");t1?y1.clipControlEXT(y1.LOWER_LEFT_EXT,y1.ZERO_TO_ONE_EXT):y1.clipControlEXT(y1.LOWER_LEFT_EXT,y1.NEGATIVE_ONE_TO_ONE_EXT),a1=t1;let v1=c1;c1=null,this.setClear(v1)}},getReversed:function(){return a1},setTest:function(t1){t1?j(r.DEPTH_TEST):h1(r.DEPTH_TEST)},setMask:function(t1){K!==t1&&!O&&(r.depthMask(t1),K=t1)},setFunc:function(t1){if(a1&&(t1=It[t1]),o1!==t1){switch(t1){case L4:r.depthFunc(r.NEVER);break;case a4:r.depthFunc(r.ALWAYS);break;case o4:r.depthFunc(r.LESS);break;case e3:r.depthFunc(r.LEQUAL);break;case s4:r.depthFunc(r.EQUAL);break;case M4:r.depthFunc(r.GEQUAL);break;case l4:r.depthFunc(r.GREATER);break;case d4:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}o1=t1}},setLocked:function(t1){O=t1},setClear:function(t1){c1!==t1&&(c1=t1,a1&&(t1=1-t1),r.clearDepth(t1))},reset:function(){O=!1,K=null,o1=null,c1=null,a1=!1}}}function i(){let O=!1,a1=null,K=null,o1=null,c1=null,t1=null,y1=null,v1=null,L2=null;return{setTest:function(j1){O||(j1?j(r.STENCIL_TEST):h1(r.STENCIL_TEST))},setMask:function(j1){a1!==j1&&!O&&(r.stencilMask(j1),a1=j1)},setFunc:function(j1,l5,Z5){(K!==j1||o1!==l5||c1!==Z5)&&(r.stencilFunc(j1,l5,Z5),K=j1,o1=l5,c1=Z5)},setOp:function(j1,l5,Z5){(t1!==j1||y1!==l5||v1!==Z5)&&(r.stencilOp(j1,l5,Z5),t1=j1,y1=l5,v1=Z5)},setLocked:function(j1){O=j1},setClear:function(j1){L2!==j1&&(r.clearStencil(j1),L2=j1)},reset:function(){O=!1,a1=null,K=null,o1=null,c1=null,t1=null,y1=null,v1=null,L2=null}}}let H=new t,V=new C,n=new i,a=new WeakMap,L=new WeakMap,o={},M={},s={},l=new WeakMap,u=[],f=null,c=!1,d=null,v=null,y=null,h=null,S=null,g=null,b=null,m=new F1(0,0,0),Z=0,R=!1,I=null,N=null,G=null,P=null,U=null,Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,r1=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(r1=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=r1>=1):X.indexOf("OpenGL ES")!==-1&&(r1=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=r1>=2);let e1=null,C1={},b1=r.getParameter(r.SCISSOR_BOX),_1=r.getParameter(r.VIEWPORT),V2=new l2().fromArray(b1),q1=new l2().fromArray(_1);function J1(O,a1,K,o1){let c1=new Uint8Array(4),t1=r.createTexture();r.bindTexture(O,t1),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let y1=0;y1<K;y1++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(a1,0,r.RGBA,1,1,o1,0,r.RGBA,r.UNSIGNED_BYTE,c1):r.texImage2D(a1+y1,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,c1);return t1}let q={};q[r.TEXTURE_2D]=J1(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=J1(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=J1(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=J1(r.TEXTURE_3D,r.TEXTURE_3D,1,1),H.setClear(0,0,0,1),V.setClear(1),n.setClear(0),j(r.DEPTH_TEST),V.setFunc(e3),W1(!1),M2($6),j(r.CULL_FACE),Q1(E5);function j(O){o[O]!==!0&&(r.enable(O),o[O]=!0)}function h1(O){o[O]!==!1&&(r.disable(O),o[O]=!1)}function B1(O,a1){return s[O]!==a1?(r.bindFramebuffer(O,a1),s[O]=a1,O===r.DRAW_FRAMEBUFFER&&(s[r.FRAMEBUFFER]=a1),O===r.FRAMEBUFFER&&(s[r.DRAW_FRAMEBUFFER]=a1),!0):!1}function u1(O,a1){let K=u,o1=!1;if(O){K=l.get(a1),K===void 0&&(K=[],l.set(a1,K));let c1=O.textures;if(K.length!==c1.length||K[0]!==r.COLOR_ATTACHMENT0){for(let t1=0,y1=c1.length;t1<y1;t1++)K[t1]=r.COLOR_ATTACHMENT0+t1;K.length=c1.length,o1=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,o1=!0);o1&&r.drawBuffers(K)}function N1(O){return f!==O?(r.useProgram(O),f=O,!0):!1}let x2={[y0]:r.FUNC_ADD,[it]:r.FUNC_SUBTRACT,[Ht]:r.FUNC_REVERSE_SUBTRACT};x2[Vt]=r.MIN,x2[nt]=r.MAX;let z1={[Lt]:r.ZERO,[at]:r.ONE,[ot]:r.SRC_COLOR,[J6]:r.SRC_ALPHA,[pt]:r.SRC_ALPHA_SATURATE,[dt]:r.DST_COLOR,[Mt]:r.DST_ALPHA,[st]:r.ONE_MINUS_SRC_COLOR,[j6]:r.ONE_MINUS_SRC_ALPHA,[ct]:r.ONE_MINUS_DST_COLOR,[lt]:r.ONE_MINUS_DST_ALPHA,[ut]:r.CONSTANT_COLOR,[At]:r.ONE_MINUS_CONSTANT_COLOR,[mt]:r.CONSTANT_ALPHA,[ht]:r.ONE_MINUS_CONSTANT_ALPHA};function Q1(O,a1,K,o1,c1,t1,y1,v1,L2,j1){if(O===E5){c===!0&&(h1(r.BLEND),c=!1);return}if(c===!1&&(j(r.BLEND),c=!0),O!==rt){if(O!==d||j1!==R){if((v!==y0||S!==y0)&&(r.blendEquation(r.FUNC_ADD),v=y0,S=y0),j1)switch(O){case p3:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y6:r.blendFunc(r.ONE,r.ONE);break;case Q6:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K6:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:R1("WebGLState: Invalid blending: ",O);break}else switch(O){case p3:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y6:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Q6:R1("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K6:R1("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:R1("WebGLState: Invalid blending: ",O);break}y=null,h=null,g=null,b=null,m.set(0,0,0),Z=0,d=O,R=j1}return}c1=c1||a1,t1=t1||K,y1=y1||o1,(a1!==v||c1!==S)&&(r.blendEquationSeparate(x2[a1],x2[c1]),v=a1,S=c1),(K!==y||o1!==h||t1!==g||y1!==b)&&(r.blendFuncSeparate(z1[K],z1[o1],z1[t1],z1[y1]),y=K,h=o1,g=t1,b=y1),(v1.equals(m)===!1||L2!==Z)&&(r.blendColor(v1.r,v1.g,v1.b,L2),m.copy(v1),Z=L2),d=O,R=!1}function n2(O,a1){O.side===O5?h1(r.CULL_FACE):j(r.CULL_FACE);let K=O.side===Y2;a1&&(K=!K),W1(K),O.blending===p3&&O.transparent===!1?Q1(E5):Q1(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),V.setFunc(O.depthFunc),V.setTest(O.depthTest),V.setMask(O.depthWrite),H.setMask(O.colorWrite);let o1=O.stencilWrite;n.setTest(o1),o1&&(n.setMask(O.stencilWriteMask),n.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),n.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K2(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):h1(r.SAMPLE_ALPHA_TO_COVERAGE)}function W1(O){I!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),I=O)}function M2(O){O!==et?(j(r.CULL_FACE),O!==N&&(O===$6?r.cullFace(r.BACK):O===tt?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):h1(r.CULL_FACE),N=O}function _2(O){O!==G&&(Y&&r.lineWidth(O),G=O)}function K2(O,a1,K){O?(j(r.POLYGON_OFFSET_FILL),(P!==a1||U!==K)&&(P=a1,U=K,V.getReversed()&&(a1=-a1),r.polygonOffset(a1,K))):h1(r.POLYGON_OFFSET_FILL)}function d2(O){O?j(r.SCISSOR_TEST):h1(r.SCISSOR_TEST)}function m2(O){O===void 0&&(O=r.TEXTURE0+Q-1),e1!==O&&(r.activeTexture(O),e1=O)}function E(O,a1,K){K===void 0&&(e1===null?K=r.TEXTURE0+Q-1:K=e1);let o1=C1[K];o1===void 0&&(o1={type:void 0,texture:void 0},C1[K]=o1),(o1.type!==O||o1.texture!==a1)&&(e1!==K&&(r.activeTexture(K),e1=K),r.bindTexture(O,a1||q[O]),o1.type=O,o1.texture=a1)}function E2(){let O=C1[e1];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function C2(){try{r.compressedTexImage2D(...arguments)}catch(O){R1("WebGLState:",O)}}function x(){try{r.compressedTexImage3D(...arguments)}catch(O){R1("WebGLState:",O)}}function p(){try{r.texSubImage2D(...arguments)}catch(O){R1("WebGLState:",O)}}function B(){try{r.texSubImage3D(...arguments)}catch(O){R1("WebGLState:",O)}}function k(){try{r.compressedTexSubImage2D(...arguments)}catch(O){R1("WebGLState:",O)}}function W(){try{r.compressedTexSubImage3D(...arguments)}catch(O){R1("WebGLState:",O)}}function H1(){try{r.texStorage2D(...arguments)}catch(O){R1("WebGLState:",O)}}function V1(){try{r.texStorage3D(...arguments)}catch(O){R1("WebGLState:",O)}}function $(){try{r.texImage2D(...arguments)}catch(O){R1("WebGLState:",O)}}function J(){try{r.texImage3D(...arguments)}catch(O){R1("WebGLState:",O)}}function n1(O){return M[O]!==void 0?M[O]:r.getParameter(O)}function g1(O,a1){M[O]!==a1&&(r.pixelStorei(O,a1),M[O]=a1)}function s1(O){V2.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),V2.copy(O))}function L1(O){q1.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),q1.copy(O))}function Z1(O,a1){let K=L.get(a1);K===void 0&&(K=new WeakMap,L.set(a1,K));let o1=K.get(O);o1===void 0&&(o1=r.getUniformBlockIndex(a1,O.name),K.set(O,o1))}function w1(O,a1){let o1=L.get(a1).get(O);a.get(a1)!==o1&&(r.uniformBlockBinding(a1,o1,O.__bindingPointIndex),a.set(a1,o1))}function I1(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),V.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},M={},e1=null,C1={},s={},l=new WeakMap,u=[],f=null,c=!1,d=null,v=null,y=null,h=null,S=null,g=null,b=null,m=new F1(0,0,0),Z=0,R=!1,I=null,N=null,G=null,P=null,U=null,V2.set(0,0,r.canvas.width,r.canvas.height),q1.set(0,0,r.canvas.width,r.canvas.height),H.reset(),V.reset(),n.reset()}return{buffers:{color:H,depth:V,stencil:n},enable:j,disable:h1,bindFramebuffer:B1,drawBuffers:u1,useProgram:N1,setBlending:Q1,setMaterial:n2,setFlipSided:W1,setCullFace:M2,setLineWidth:_2,setPolygonOffset:K2,setScissorTest:d2,activeTexture:m2,bindTexture:E,unbindTexture:E2,compressedTexImage2D:C2,compressedTexImage3D:x,texImage2D:$,texImage3D:J,pixelStorei:g1,getParameter:n1,updateUBOMapping:Z1,uniformBlockBinding:w1,texStorage2D:H1,texStorage3D:V1,texSubImage2D:p,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:s1,viewport:L1,reset:I1}}function oo(r,e,t,C,i,H,V){let n=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),L=new m1,o=new WeakMap,M=new Set,s,l=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(x,p){return u?new OffscreenCanvas(x,p):U3("canvas")}function c(x,p,B){let k=1,W=C2(x);if((W.width>B||W.height>B)&&(k=B/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let H1=Math.floor(k*W.width),V1=Math.floor(k*W.height);s===void 0&&(s=f(H1,V1));let $=p?f(H1,V1):s;return $.width=H1,$.height=V1,$.getContext("2d").drawImage(x,0,0,H1,V1),O1("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+H1+"x"+V1+")."),$}else return"data"in x&&O1("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function d(x){return x.generateMipmaps}function v(x){r.generateMipmap(x)}function y(x){return x.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?r.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function h(x,p,B,k,W,H1=!1){if(x!==null){if(r[x]!==void 0)return r[x];O1("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V1;k&&(V1=e.get("EXT_texture_norm16"),V1||O1("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=p;if(p===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8),B===r.UNSIGNED_SHORT&&V1&&($=V1.R16_EXT),B===r.SHORT&&V1&&($=V1.R16_SNORM_EXT)),p===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),p===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8),B===r.UNSIGNED_SHORT&&V1&&($=V1.RG16_EXT),B===r.SHORT&&V1&&($=V1.RG16_SNORM_EXT)),p===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),p===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),p===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),p===r.RGB&&(B===r.UNSIGNED_SHORT&&V1&&($=V1.RGB16_EXT),B===r.SHORT&&V1&&($=V1.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),p===r.RGBA){let J=H1?N3:X1.getTransfer(W);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=J===t2?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&V1&&($=V1.RGBA16_EXT),B===r.SHORT&&V1&&($=V1.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(x,p){let B;return x?p===null||p===x5||p===A3?B=r.DEPTH24_STENCIL8:p===v5?B=r.DEPTH32F_STENCIL8:p===u3&&(B=r.DEPTH24_STENCIL8,O1("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===x5||p===A3?B=r.DEPTH_COMPONENT24:p===v5?B=r.DEPTH_COMPONENT32F:p===u3&&(B=r.DEPTH_COMPONENT16),B}function g(x,p){return d(x)===!0||x.isFramebufferTexture&&x.minFilter!==b2&&x.minFilter!==w2?Math.log2(Math.max(p.width,p.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?p.mipmaps.length:1}function b(x){let p=x.target;p.removeEventListener("dispose",b),Z(p),p.isVideoTexture&&o.delete(p),p.isHTMLTexture&&M.delete(p)}function m(x){let p=x.target;p.removeEventListener("dispose",m),I(p)}function Z(x){let p=C.get(x);if(p.__webglInit===void 0)return;let B=x.source,k=l.get(B);if(k){let W=k[p.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(x),Object.keys(k).length===0&&l.delete(B)}C.remove(x)}function R(x){let p=C.get(x);r.deleteTexture(p.__webglTexture);let B=x.source,k=l.get(B);delete k[p.__cacheKey],V.memory.textures--}function I(x){let p=C.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),C.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(p.__webglFramebuffer[k]))for(let W=0;W<p.__webglFramebuffer[k].length;W++)r.deleteFramebuffer(p.__webglFramebuffer[k][W]);else r.deleteFramebuffer(p.__webglFramebuffer[k]);p.__webglDepthbuffer&&r.deleteRenderbuffer(p.__webglDepthbuffer[k])}else{if(Array.isArray(p.__webglFramebuffer))for(let k=0;k<p.__webglFramebuffer.length;k++)r.deleteFramebuffer(p.__webglFramebuffer[k]);else r.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&r.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&r.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let k=0;k<p.__webglColorRenderbuffer.length;k++)p.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(p.__webglColorRenderbuffer[k]);p.__webglDepthRenderbuffer&&r.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let B=x.textures;for(let k=0,W=B.length;k<W;k++){let H1=C.get(B[k]);H1.__webglTexture&&(r.deleteTexture(H1.__webglTexture),V.memory.textures--),C.remove(B[k])}C.remove(x)}let N=0;function G(){N=0}function P(){return N}function U(x){N=x}function Q(){let x=N;return x>=i.maxTextures&&O1("WebGLTextures: Trying to use "+(x+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,x}function Y(x){let p=[];return p.push(x.wrapS),p.push(x.wrapT),p.push(x.wrapR||0),p.push(x.magFilter),p.push(x.minFilter),p.push(x.anisotropy),p.push(x.internalFormat),p.push(x.format),p.push(x.type),p.push(x.generateMipmaps),p.push(x.premultiplyAlpha),p.push(x.flipY),p.push(x.unpackAlignment),p.push(x.colorSpace),p.join()}function r1(x,p){let B=C.get(x);if(x.isVideoTexture&&E(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&B.__version!==x.version){let k=x.image;if(k===null)O1("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)O1("WebGLRenderer: Texture marked for update but image is incomplete");else{h1(B,x,p);return}}else x.isExternalTexture&&(B.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+p)}function X(x,p){let B=C.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){h1(B,x,p);return}else x.isExternalTexture&&(B.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+p)}function e1(x,p){let B=C.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){h1(B,x,p);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+p)}function C1(x,p){let B=C.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&B.__version!==x.version){B1(B,x,p);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+p)}let b1={[c4]:r.REPEAT,[b5]:r.CLAMP_TO_EDGE,[p4]:r.MIRRORED_REPEAT},_1={[b2]:r.NEAREST,[vt]:r.NEAREST_MIPMAP_NEAREST,[c7]:r.NEAREST_MIPMAP_LINEAR,[w2]:r.LINEAR,[$4]:r.LINEAR_MIPMAP_NEAREST,[d0]:r.LINEAR_MIPMAP_LINEAR},V2={[_t]:r.NEVER,[Ot]:r.ALWAYS,[yt]:r.LESS,[O9]:r.LEQUAL,[bt]:r.EQUAL,[E9]:r.GEQUAL,[Tt]:r.GREATER,[wt]:r.NOTEQUAL};function q1(x,p){if(p.type===v5&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===w2||p.magFilter===$4||p.magFilter===c7||p.magFilter===d0||p.minFilter===w2||p.minFilter===$4||p.minFilter===c7||p.minFilter===d0)&&O1("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(x,r.TEXTURE_WRAP_S,b1[p.wrapS]),r.texParameteri(x,r.TEXTURE_WRAP_T,b1[p.wrapT]),(x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY)&&r.texParameteri(x,r.TEXTURE_WRAP_R,b1[p.wrapR]),r.texParameteri(x,r.TEXTURE_MAG_FILTER,_1[p.magFilter]),r.texParameteri(x,r.TEXTURE_MIN_FILTER,_1[p.minFilter]),p.compareFunction&&(r.texParameteri(x,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(x,r.TEXTURE_COMPARE_FUNC,V2[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===b2||p.minFilter!==c7&&p.minFilter!==d0||p.type===v5&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||C.get(p).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,i.getMaxAnisotropy())),C.get(p).__currentAnisotropy=p.anisotropy}}}function J1(x,p){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,p.addEventListener("dispose",b));let k=p.source,W=l.get(k);W===void 0&&(W={},l.set(k,W));let H1=Y(p);if(H1!==x.__cacheKey){W[H1]===void 0&&(W[H1]={texture:r.createTexture(),usedTimes:0},V.memory.textures++,B=!0),W[H1].usedTimes++;let V1=W[x.__cacheKey];V1!==void 0&&(W[x.__cacheKey].usedTimes--,V1.usedTimes===0&&R(p)),x.__cacheKey=H1,x.__webglTexture=W[H1].texture}return B}function q(x,p,B){return Math.floor(Math.floor(x/B)/p)}function j(x,p,B,k){let H1=x.updateRanges;if(H1.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,p.width,p.height,B,k,p.data);else{H1.sort((g1,s1)=>g1.start-s1.start);let V1=0;for(let g1=1;g1<H1.length;g1++){let s1=H1[V1],L1=H1[g1],Z1=s1.start+s1.count,w1=q(L1.start,p.width,4),I1=q(s1.start,p.width,4);L1.start<=Z1+1&&w1===I1&&q(L1.start+L1.count-1,p.width,4)===w1?s1.count=Math.max(s1.count,L1.start+L1.count-s1.start):(++V1,H1[V1]=L1)}H1.length=V1+1;let $=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),n1=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,p.width);for(let g1=0,s1=H1.length;g1<s1;g1++){let L1=H1[g1],Z1=Math.floor(L1.start/4),w1=Math.ceil(L1.count/4),I1=Z1%p.width,O=Math.floor(Z1/p.width),a1=w1,K=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,I1),t.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,I1,O,a1,K,B,k,p.data)}x.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,n1)}}function h1(x,p,B){let k=r.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),p.isData3DTexture&&(k=r.TEXTURE_3D);let W=J1(x,p),H1=p.source;t.bindTexture(k,x.__webglTexture,r.TEXTURE0+B);let V1=C.get(H1);if(H1.version!==V1.__version||W===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let K=X1.getPrimaries(X1.workingColorSpace),o1=p.colorSpace===G5?null:X1.getPrimaries(p.colorSpace),c1=p.colorSpace===G5||K===o1?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,c1)}t.pixelStorei(r.UNPACK_ALIGNMENT,p.unpackAlignment);let J=c(p.image,!1,i.maxTextureSize);J=E2(p,J);let n1=H.convert(p.format,p.colorSpace),g1=H.convert(p.type),s1=h(p.internalFormat,n1,g1,p.normalized,p.colorSpace,p.isVideoTexture);q1(k,p);let L1,Z1=p.mipmaps,w1=p.isVideoTexture!==!0,I1=V1.__version===void 0||W===!0,O=H1.dataReady,a1=g(p,J);if(p.isDepthTexture)s1=S(p.format===c0,p.type),I1&&(w1?t.texStorage2D(r.TEXTURE_2D,1,s1,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,s1,J.width,J.height,0,n1,g1,null));else if(p.isDataTexture)if(Z1.length>0){w1&&I1&&t.texStorage2D(r.TEXTURE_2D,a1,s1,Z1[0].width,Z1[0].height);for(let K=0,o1=Z1.length;K<o1;K++)L1=Z1[K],w1?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,L1.width,L1.height,n1,g1,L1.data):t.texImage2D(r.TEXTURE_2D,K,s1,L1.width,L1.height,0,n1,g1,L1.data);p.generateMipmaps=!1}else w1?(I1&&t.texStorage2D(r.TEXTURE_2D,a1,s1,J.width,J.height),O&&j(p,J,n1,g1)):t.texImage2D(r.TEXTURE_2D,0,s1,J.width,J.height,0,n1,g1,J.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){w1&&I1&&t.texStorage3D(r.TEXTURE_2D_ARRAY,a1,s1,Z1[0].width,Z1[0].height,J.depth);for(let K=0,o1=Z1.length;K<o1;K++)if(L1=Z1[K],p.format!==s5)if(n1!==null)if(w1){if(O)if(p.layerUpdates.size>0){let c1=S8(L1.width,L1.height,p.format,p.type);for(let t1 of p.layerUpdates){let y1=L1.data.subarray(t1*c1/L1.data.BYTES_PER_ELEMENT,(t1+1)*c1/L1.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,t1,L1.width,L1.height,1,n1,y1)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,L1.width,L1.height,J.depth,n1,L1.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,s1,L1.width,L1.height,J.depth,0,L1.data,0,0);else O1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w1?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,L1.width,L1.height,J.depth,n1,g1,L1.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,s1,L1.width,L1.height,J.depth,0,n1,g1,L1.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{w1&&I1&&t.texStorage2D(r.TEXTURE_2D,a1,s1,Z1[0].width,Z1[0].height);for(let K=0,o1=Z1.length;K<o1;K++)L1=Z1[K],p.format!==s5?n1!==null?w1?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,L1.width,L1.height,n1,L1.data):t.compressedTexImage2D(r.TEXTURE_2D,K,s1,L1.width,L1.height,0,L1.data):O1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w1?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,L1.width,L1.height,n1,g1,L1.data):t.texImage2D(r.TEXTURE_2D,K,s1,L1.width,L1.height,0,n1,g1,L1.data)}else if(p.isDataArrayTexture)if(w1){if(I1&&t.texStorage3D(r.TEXTURE_2D_ARRAY,a1,s1,J.width,J.height,J.depth),O)if(p.layerUpdates.size>0){let K=S8(J.width,J.height,p.format,p.type);for(let o1 of p.layerUpdates){let c1=J.data.subarray(o1*K/J.data.BYTES_PER_ELEMENT,(o1+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,o1,J.width,J.height,1,n1,g1,c1)}p.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,n1,g1,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,s1,J.width,J.height,J.depth,0,n1,g1,J.data);else if(p.isData3DTexture)w1?(I1&&t.texStorage3D(r.TEXTURE_3D,a1,s1,J.width,J.height,J.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,n1,g1,J.data)):t.texImage3D(r.TEXTURE_3D,0,s1,J.width,J.height,J.depth,0,n1,g1,J.data);else if(p.isFramebufferTexture){if(I1)if(w1)t.texStorage2D(r.TEXTURE_2D,a1,s1,J.width,J.height);else{let K=J.width,o1=J.height;for(let c1=0;c1<a1;c1++)t.texImage2D(r.TEXTURE_2D,c1,s1,K,o1,0,n1,g1,null),K>>=1,o1>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in r){let K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),M.add(p),K.onpaint=o1=>{let c1=o1.changedElements;for(let t1 of M)c1.includes(t1.image)&&(t1.needsUpdate=!0)},K.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{let c1=r.RGBA,t1=r.RGBA,y1=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,c1,t1,y1,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Z1.length>0){if(w1&&I1){let K=C2(Z1[0]);t.texStorage2D(r.TEXTURE_2D,a1,s1,K.width,K.height)}for(let K=0,o1=Z1.length;K<o1;K++)L1=Z1[K],w1?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,n1,g1,L1):t.texImage2D(r.TEXTURE_2D,K,s1,n1,g1,L1);p.generateMipmaps=!1}else if(w1){if(I1){let K=C2(J);t.texStorage2D(r.TEXTURE_2D,a1,s1,K.width,K.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,n1,g1,J)}else t.texImage2D(r.TEXTURE_2D,0,s1,n1,g1,J);d(p)&&v(k),V1.__version=H1.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function B1(x,p,B){if(p.image.length!==6)return;let k=J1(x,p),W=p.source;t.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture,r.TEXTURE0+B);let H1=C.get(W);if(W.version!==H1.__version||k===!0){t.activeTexture(r.TEXTURE0+B);let V1=X1.getPrimaries(X1.workingColorSpace),$=p.colorSpace===G5?null:X1.getPrimaries(p.colorSpace),J=p.colorSpace===G5||V1===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let n1=p.isCompressedTexture||p.image[0].isCompressedTexture,g1=p.image[0]&&p.image[0].isDataTexture,s1=[];for(let t1=0;t1<6;t1++)!n1&&!g1?s1[t1]=c(p.image[t1],!0,i.maxCubemapSize):s1[t1]=g1?p.image[t1].image:p.image[t1],s1[t1]=E2(p,s1[t1]);let L1=s1[0],Z1=H.convert(p.format,p.colorSpace),w1=H.convert(p.type),I1=h(p.internalFormat,Z1,w1,p.normalized,p.colorSpace),O=p.isVideoTexture!==!0,a1=H1.__version===void 0||k===!0,K=W.dataReady,o1=g(p,L1);q1(r.TEXTURE_CUBE_MAP,p);let c1;if(n1){O&&a1&&t.texStorage2D(r.TEXTURE_CUBE_MAP,o1,I1,L1.width,L1.height);for(let t1=0;t1<6;t1++){c1=s1[t1].mipmaps;for(let y1=0;y1<c1.length;y1++){let v1=c1[y1];p.format!==s5?Z1!==null?O?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,0,0,v1.width,v1.height,Z1,v1.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,I1,v1.width,v1.height,0,v1.data):O1("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,0,0,v1.width,v1.height,Z1,w1,v1.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,I1,v1.width,v1.height,0,Z1,w1,v1.data)}}}else{if(c1=p.mipmaps,O&&a1){c1.length>0&&o1++;let t1=C2(s1[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,o1,I1,t1.width,t1.height)}for(let t1=0;t1<6;t1++)if(g1){O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,0,0,s1[t1].width,s1[t1].height,Z1,w1,s1[t1].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,I1,s1[t1].width,s1[t1].height,0,Z1,w1,s1[t1].data);for(let y1=0;y1<c1.length;y1++){let L2=c1[y1].image[t1].image;O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,0,0,L2.width,L2.height,Z1,w1,L2.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,I1,L2.width,L2.height,0,Z1,w1,L2.data)}}else{O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,0,0,Z1,w1,s1[t1]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,I1,Z1,w1,s1[t1]);for(let y1=0;y1<c1.length;y1++){let v1=c1[y1];O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,0,0,Z1,w1,v1.image[t1]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,I1,Z1,w1,v1.image[t1])}}}d(p)&&v(r.TEXTURE_CUBE_MAP),H1.__version=W.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function u1(x,p,B,k,W,H1){let V1=H.convert(B.format,B.colorSpace),$=H.convert(B.type),J=h(B.internalFormat,V1,$,B.normalized,B.colorSpace),n1=C.get(p),g1=C.get(B);if(g1.__renderTarget=p,!n1.__hasExternalTextures){let s1=Math.max(1,p.width>>H1),L1=Math.max(1,p.height>>H1);W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?t.texImage3D(W,H1,J,s1,L1,p.depth,0,V1,$,null):t.texImage2D(W,H1,J,s1,L1,0,V1,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,x),m2(p)?n.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,W,g1.__webglTexture,0,d2(p)):(W===r.TEXTURE_2D||W>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,W,g1.__webglTexture,H1),t.bindFramebuffer(r.FRAMEBUFFER,null)}function N1(x,p,B){if(r.bindRenderbuffer(r.RENDERBUFFER,x),p.depthBuffer){let k=p.depthTexture,W=k&&k.isDepthTexture?k.type:null,H1=S(p.stencilBuffer,W),V1=p.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;m2(p)?n.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,d2(p),H1,p.width,p.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,d2(p),H1,p.width,p.height):r.renderbufferStorage(r.RENDERBUFFER,H1,p.width,p.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,V1,r.RENDERBUFFER,x)}else{let k=p.textures;for(let W=0;W<k.length;W++){let H1=k[W],V1=H.convert(H1.format,H1.colorSpace),$=H.convert(H1.type),J=h(H1.internalFormat,V1,$,H1.normalized,H1.colorSpace);m2(p)?n.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,d2(p),J,p.width,p.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,d2(p),J,p.width,p.height):r.renderbufferStorage(r.RENDERBUFFER,J,p.width,p.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function x2(x,p,B){let k=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,x),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=C.get(p.depthTexture);if(W.__renderTarget=p,(!W.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,p.depthTexture.addEventListener("dispose",b)),W.__webglTexture===void 0){W.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),q1(r.TEXTURE_CUBE_MAP,p.depthTexture);let n1=H.convert(p.depthTexture.format),g1=H.convert(p.depthTexture.type),s1;p.depthTexture.format===T5?s1=r.DEPTH_COMPONENT24:p.depthTexture.format===c0&&(s1=r.DEPTH24_STENCIL8);for(let L1=0;L1<6;L1++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L1,0,s1,p.width,p.height,0,n1,g1,null)}}else r1(p.depthTexture,0);let H1=W.__webglTexture,V1=d2(p),$=k?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,J=p.depthTexture.format===c0?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(p.depthTexture.format===T5)m2(p)?n.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,$,H1,0,V1):r.framebufferTexture2D(r.FRAMEBUFFER,J,$,H1,0);else if(p.depthTexture.format===c0)m2(p)?n.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,$,H1,0,V1):r.framebufferTexture2D(r.FRAMEBUFFER,J,$,H1,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z1(x){let p=C.get(x),B=x.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==x.depthTexture){let k=x.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),k){let W=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),p.__depthDisposeCallback=W}p.__boundDepthTexture=k}if(x.depthTexture&&!p.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)x2(p.__webglFramebuffer[k],x,k);else{let k=x.texture.mipmaps;k&&k.length>0?x2(p.__webglFramebuffer[0],x,0):x2(p.__webglFramebuffer,x,0)}else if(B){p.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,p.__webglFramebuffer[k]),p.__webglDepthbuffer[k]===void 0)p.__webglDepthbuffer[k]=r.createRenderbuffer(),N1(p.__webglDepthbuffer[k],x,!1);else{let W=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H1=p.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,H1),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,H1)}}else{let k=x.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(r.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=r.createRenderbuffer(),N1(p.__webglDepthbuffer,x,!1);else{let W=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H1=p.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,H1),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,H1)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q1(x,p,B){let k=C.get(x);p!==void 0&&u1(k.__webglFramebuffer,x,x.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&z1(x)}function n2(x){let p=x.texture,B=C.get(x),k=C.get(p);x.addEventListener("dispose",m);let W=x.textures,H1=x.isWebGLCubeRenderTarget===!0,V1=W.length>1;if(V1||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=p.version,V.memory.textures++),H1){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let J=0;J<p.mipmaps.length;J++)B.__webglFramebuffer[$][J]=r.createFramebuffer()}else B.__webglFramebuffer[$]=r.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<p.mipmaps.length;$++)B.__webglFramebuffer[$]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(V1)for(let $=0,J=W.length;$<J;$++){let n1=C.get(W[$]);n1.__webglTexture===void 0&&(n1.__webglTexture=r.createTexture(),V.memory.textures++)}if(x.samples>0&&m2(x)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){let J=W[$];B.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let n1=H.convert(J.format,J.colorSpace),g1=H.convert(J.type),s1=h(J.internalFormat,n1,g1,J.normalized,J.colorSpace,x.isXRRenderTarget===!0),L1=d2(x);r.renderbufferStorageMultisample(r.RENDERBUFFER,L1,s1,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,B.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),N1(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(H1){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),q1(r.TEXTURE_CUBE_MAP,p);for(let $=0;$<6;$++)if(p.mipmaps&&p.mipmaps.length>0)for(let J=0;J<p.mipmaps.length;J++)u1(B.__webglFramebuffer[$][J],x,p,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else u1(B.__webglFramebuffer[$],x,p,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(p)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V1){for(let $=0,J=W.length;$<J;$++){let n1=W[$],g1=C.get(n1),s1=r.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(s1=x.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(s1,g1.__webglTexture),q1(s1,n1),u1(B.__webglFramebuffer,x,n1,r.COLOR_ATTACHMENT0+$,s1,0),d(n1)&&v(s1)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&($=x.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,k.__webglTexture),q1($,p),p.mipmaps&&p.mipmaps.length>0)for(let J=0;J<p.mipmaps.length;J++)u1(B.__webglFramebuffer[J],x,p,r.COLOR_ATTACHMENT0,$,J);else u1(B.__webglFramebuffer,x,p,r.COLOR_ATTACHMENT0,$,0);d(p)&&v($),t.unbindTexture()}x.depthBuffer&&z1(x)}function W1(x){let p=x.textures;for(let B=0,k=p.length;B<k;B++){let W=p[B];if(d(W)){let H1=y(x),V1=C.get(W).__webglTexture;t.bindTexture(H1,V1),v(H1),t.unbindTexture()}}}let M2=[],_2=[];function K2(x){if(x.samples>0){if(m2(x)===!1){let p=x.textures,B=x.width,k=x.height,W=r.COLOR_BUFFER_BIT,H1=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V1=C.get(x),$=p.length>1;if($)for(let n1=0;n1<p.length;n1++)t.bindFramebuffer(r.FRAMEBUFFER,V1.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+n1,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,V1.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+n1,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,V1.__webglMultisampledFramebuffer);let J=x.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,V1.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,V1.__webglFramebuffer);for(let n1=0;n1<p.length;n1++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=r.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,V1.__webglColorRenderbuffer[n1]);let g1=C.get(p[n1]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,g1,0)}r.blitFramebuffer(0,0,B,k,0,0,B,k,W,r.NEAREST),a===!0&&(M2.length=0,_2.length=0,M2.push(r.COLOR_ATTACHMENT0+n1),x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&(M2.push(H1),_2.push(H1),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_2)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,M2))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let n1=0;n1<p.length;n1++){t.bindFramebuffer(r.FRAMEBUFFER,V1.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+n1,r.RENDERBUFFER,V1.__webglColorRenderbuffer[n1]);let g1=C.get(p[n1]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,V1.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+n1,r.TEXTURE_2D,g1,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,V1.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&a){let p=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[p])}}}function d2(x){return Math.min(i.maxSamples,x.samples)}function m2(x){let p=C.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function E(x){let p=V.render.frame;o.get(x)!==p&&(o.set(x,p),x.update())}function E2(x,p){let B=x.colorSpace,k=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==k3&&B!==G5&&(X1.getTransfer(B)===t2?(k!==s5||W!==j2)&&O1("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):R1("WebGLTextures: Unsupported texture color space:",B)),p}function C2(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(L.width=x.naturalWidth||x.width,L.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(L.width=x.displayWidth,L.height=x.displayHeight):(L.width=x.width,L.height=x.height),L}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=r1,this.setTexture2DArray=X,this.setTexture3D=e1,this.setTextureCube=C1,this.rebindTextures=Q1,this.setupRenderTarget=n2,this.updateRenderTargetMipmap=W1,this.updateMultisampleRenderTarget=K2,this.setupDepthRenderbuffer=z1,this.setupFrameBufferTexture=u1,this.useMultisampledRTT=m2,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function so(r,e){function t(C,i=G5){let H,V=X1.getTransfer(i);if(C===j2)return r.UNSIGNED_BYTE;if(C===Q4)return r.UNSIGNED_SHORT_4_4_4_4;if(C===K4)return r.UNSIGNED_SHORT_5_5_5_1;if(C===s8)return r.UNSIGNED_INT_5_9_9_9_REV;if(C===M8)return r.UNSIGNED_INT_10F_11F_11F_REV;if(C===a8)return r.BYTE;if(C===o8)return r.SHORT;if(C===u3)return r.UNSIGNED_SHORT;if(C===Y4)return r.INT;if(C===x5)return r.UNSIGNED_INT;if(C===v5)return r.FLOAT;if(C===S5)return r.HALF_FLOAT;if(C===l8)return r.ALPHA;if(C===d8)return r.RGB;if(C===s5)return r.RGBA;if(C===T5)return r.DEPTH_COMPONENT;if(C===c0)return r.DEPTH_STENCIL;if(C===c8)return r.RED;if(C===J4)return r.RED_INTEGER;if(C===p0)return r.RG;if(C===j4)return r.RG_INTEGER;if(C===e9)return r.RGBA_INTEGER;if(C===p7||C===u7||C===A7||C===m7)if(V===t2)if(H=e.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(C===p7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(C===u7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(C===A7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(C===m7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=e.get("WEBGL_compressed_texture_s3tc"),H!==null){if(C===p7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(C===u7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(C===A7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(C===m7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(C===t9||C===C9||C===r9||C===i9)if(H=e.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(C===t9)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(C===C9)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(C===r9)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(C===i9)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(C===H9||C===V9||C===n9||C===L9||C===a9||C===h7||C===o9)if(H=e.get("WEBGL_compressed_texture_etc"),H!==null){if(C===H9||C===V9)return V===t2?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(C===n9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(C===L9)return H.COMPRESSED_R11_EAC;if(C===a9)return H.COMPRESSED_SIGNED_R11_EAC;if(C===h7)return H.COMPRESSED_RG11_EAC;if(C===o9)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(C===s9||C===M9||C===l9||C===d9||C===c9||C===p9||C===u9||C===A9||C===m9||C===h9||C===f9||C===x9||C===v9||C===S9)if(H=e.get("WEBGL_compressed_texture_astc"),H!==null){if(C===s9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(C===M9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(C===l9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(C===d9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(C===c9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(C===p9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(C===u9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(C===A9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(C===m9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(C===h9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(C===f9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(C===x9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(C===v9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(C===S9)return V===t2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(C===g9||C===Z9||C===_9)if(H=e.get("EXT_texture_compression_bptc"),H!==null){if(C===g9)return V===t2?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(C===Z9)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(C===_9)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(C===y9||C===b9||C===f7||C===T9)if(H=e.get("EXT_texture_compression_rgtc"),H!==null){if(C===y9)return H.COMPRESSED_RED_RGTC1_EXT;if(C===b9)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(C===f7)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(C===T9)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return C===A3?r.UNSIGNED_INT_24_8:r[C]!==void 0?r[C]:null}return{convert:t}}var Mo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lo=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,z8=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let C=new K3(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=C}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,C=new r5({vertexShader:Mo,fragmentShader:lo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $2(new V7(20,20),C)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},G8=class extends w5{constructor(e,t){super();let C=this,i=null,H=1,V=null,n="local-floor",a=1,L=null,o=null,M=null,s=null,l=null,u=null,f=typeof XRWebGLBinding<"u",c=new z8,d={},v=t.getContextAttributes(),y=null,h=null,S=[],g=[],b=new m1,m=null,Z=null,R=new F2;R.viewport=new l2;let I=new F2;I.viewport=new l2;let N=[R,I],G=new G4,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new V3,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new V3,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new V3,S[q]=j),j.getHandSpace()};function Q(q){let j=g.indexOf(q.inputSource);if(j===-1)return;let h1=S[j];h1!==void 0&&(h1.update(q.inputSource,q.frame,L||V),h1.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",r1);for(let q=0;q<S.length;q++){let j=g[q];j!==null&&(g[q]=null,S[q].disconnect(j))}P=null,U=null,c.reset();for(let q in d)delete d[q];if(e.setRenderTarget(y),l=null,s=null,M=null,i=null,h=null,J1.stop(),C.isPresenting=!1,e.setPixelRatio(m),e.setSize(b.width,b.height,!1),Z!==null){let q=Z.camera;q.fov=Z.fov,q.zoom=Z.zoom,q.updateProjectionMatrix(),Z=null}C.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){H=q,C.isPresenting===!0&&O1("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){n=q,C.isPresenting===!0&&O1("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return L||V},this.setReferenceSpace=function(q){L=q},this.getBaseLayer=function(){return s!==null?s:l},this.getBinding=function(){return M===null&&f&&(M=new XRWebGLBinding(i,t)),M},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",r1),v.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(b),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let h1=null,B1=null,u1=null;v.depth&&(u1=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,h1=v.stencil?c0:T5,B1=v.stencil?A3:x5);let N1={colorFormat:t.RGBA8,depthFormat:u1,scaleFactor:H};M=this.getBinding(),s=M.createProjectionLayer(N1),i.updateRenderState({layers:[s]}),e.setPixelRatio(1),e.setSize(s.textureWidth,s.textureHeight,!1),h=new J2(s.textureWidth,s.textureHeight,{format:s5,type:j2,depthTexture:new n0(s.textureWidth,s.textureHeight,B1,void 0,void 0,void 0,void 0,void 0,void 0,h1),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1,resolveStencilBuffer:s.ignoreDepthValues===!1,storeMultisampledDepthBuffer:s.ignoreDepthValues===!1,storeMultisampledStencilBuffer:s.ignoreDepthValues===!1})}else{let h1={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:H};l=new XRWebGLLayer(i,t,h1),i.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),h=new J2(l.framebufferWidth,l.framebufferHeight,{format:s5,type:j2,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}h.isXRRenderTarget=!0,this.setFoveation(a),L=null,V=await i.requestReferenceSpace(n),J1.setContext(i),J1.start(),C.isPresenting=!0,C.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function r1(q){for(let j=0;j<q.removed.length;j++){let h1=q.removed[j],B1=g.indexOf(h1);B1>=0&&(g[B1]=null,S[B1].disconnect(h1))}for(let j=0;j<q.added.length;j++){let h1=q.added[j],B1=g.indexOf(h1);if(B1===-1){for(let N1=0;N1<S.length;N1++)if(N1>=g.length){g.push(h1),B1=N1;break}else if(g[N1]===null){g[N1]=h1,B1=N1;break}if(B1===-1)break}let u1=S[B1];u1&&u1.connect(h1)}}let X=new w,e1=new w;function C1(q,j,h1){X.setFromMatrixPosition(j.matrixWorld),e1.setFromMatrixPosition(h1.matrixWorld);let B1=X.distanceTo(e1),u1=j.projectionMatrix.elements,N1=h1.projectionMatrix.elements,x2=u1[14]/(u1[10]-1),z1=u1[14]/(u1[10]+1),Q1=(u1[9]+1)/u1[5],n2=(u1[9]-1)/u1[5],W1=(u1[8]-1)/u1[0],M2=(N1[8]+1)/N1[0],_2=x2*W1,K2=x2*M2,d2=B1/(-W1+M2),m2=d2*-W1;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(m2),q.translateZ(d2),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),u1[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let E=x2+d2,E2=z1+d2,C2=_2-m2,x=K2+(B1-m2),p=Q1*z1/E2*E,B=n2*z1/E2*E;q.projectionMatrix.makePerspective(C2,x,p,B,E,E2),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function b1(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,h1=q.far;c.texture!==null&&(c.depthNear>0&&(j=c.depthNear),c.depthFar>0&&(h1=c.depthFar)),G.near=I.near=R.near=j,G.far=I.far=R.far=h1,(P!==G.near||U!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,U=G.far),G.layers.mask=q.layers.mask|6,R.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let B1=q.parent,u1=G.cameras;b1(G,B1);for(let N1=0;N1<u1.length;N1++)b1(u1[N1],B1);u1.length===2?C1(G,R,I):G.projectionMatrix.copy(R.projectionMatrix),Z===null&&q.isPerspectiveCamera&&(Z={camera:q,fov:q.fov,zoom:q.zoom}),_1(q,G,B1)};function _1(q,j,h1){h1===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(h1.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=r3*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(s===null&&l===null))return a},this.setFoveation=function(q){a=q,s!==null&&(s.fixedFoveation=q),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=q)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(G)},this.getCameraTexture=function(q){return d[q]};let V2=null;function q1(q,j){if(o=j.getViewerPose(L||V),u=j,o!==null){let h1=o.views;l!==null&&(e.setRenderTargetFramebuffer(h,l.framebuffer),e.setRenderTarget(h));let B1=!1;h1.length!==G.cameras.length&&(G.cameras.length=0,B1=!0);for(let z1=0;z1<h1.length;z1++){let Q1=h1[z1],n2=null;if(l!==null)n2=l.getViewport(Q1);else{let M2=M.getViewSubImage(s,Q1);n2=M2.viewport,z1===0&&(e.setRenderTargetTextures(h,M2.colorTexture,M2.depthStencilTexture),e.setRenderTarget(h))}let W1=N[z1];W1===void 0&&(W1=new F2,W1.layers.enable(z1),W1.viewport=new l2,N[z1]=W1),W1.matrix.fromArray(Q1.transform.matrix),W1.matrix.decompose(W1.position,W1.quaternion,W1.scale),W1.projectionMatrix.fromArray(Q1.projectionMatrix),W1.projectionMatrixInverse.copy(W1.projectionMatrix).invert(),W1.viewport.set(n2.x,n2.y,n2.width,n2.height),z1===0&&(G.matrix.copy(W1.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),B1===!0&&G.cameras.push(W1)}let u1=i.enabledFeatures;if(u1&&u1.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){M=C.getBinding();let z1=M.getDepthInformation(h1[0]);z1&&z1.isValid&&z1.texture&&c.init(z1,i.renderState)}if(u1&&u1.includes("camera-access")&&f){e.state.unbindTexture(),M=C.getBinding();for(let z1=0;z1<h1.length;z1++){let Q1=h1[z1].camera;if(Q1){let n2=d[Q1];n2||(n2=new K3,d[Q1]=n2);let W1=M.getCameraImage(Q1);n2.sourceTexture=W1}}}}for(let h1=0;h1<S.length;h1++){let B1=g[h1],u1=S[h1];B1!==null&&u1!==void 0&&u1.update(B1,j,L||V)}V2&&V2(q,j),j.detectedPlanes&&C.dispatchEvent({type:"planesdetected",data:j}),u=null}let J1=new lC;J1.setAnimationLoop(q1),this.setAnimationLoop=function(q){V2=q},this.dispose=function(){}}},co=new i2,mC=new P1;mC.set(-1,0,0,0,1,0,0,0,1);function po(r,e){function t(c,d){c.matrixAutoUpdate===!0&&c.updateMatrix(),d.value.copy(c.matrix)}function C(c,d){d.color.getRGB(c.fogColor.value,f8(r)),d.isFog?(c.fogNear.value=d.near,c.fogFar.value=d.far):d.isFogExp2&&(c.fogDensity.value=d.density)}function i(c,d,v,y,h){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?H(c,d):d.isMeshLambertMaterial?(H(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(H(c,d),M(c,d)):d.isMeshPhongMaterial?(H(c,d),o(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(H(c,d),s(c,d),d.isMeshPhysicalMaterial&&l(c,d,h)):d.isMeshMatcapMaterial?(H(c,d),u(c,d)):d.isMeshDepthMaterial?H(c,d):d.isMeshDistanceMaterial?(H(c,d),f(c,d)):d.isMeshNormalMaterial?H(c,d):d.isLineBasicMaterial?(V(c,d),d.isLineDashedMaterial&&n(c,d)):d.isPointsMaterial?a(c,d,v,y):d.isSpriteMaterial?L(c,d):d.isShadowMaterial?(c.color.value.copy(d.color),c.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function H(c,d){c.opacity.value=d.opacity,d.color&&c.diffuse.value.copy(d.color),d.emissive&&c.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.bumpMap&&(c.bumpMap.value=d.bumpMap,t(d.bumpMap,c.bumpMapTransform),c.bumpScale.value=d.bumpScale,d.side===Y2&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,t(d.normalMap,c.normalMapTransform),c.normalScale.value.copy(d.normalScale),d.side===Y2&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,t(d.displacementMap,c.displacementMapTransform),c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,c.emissiveMapTransform)),d.specularMap&&(c.specularMap.value=d.specularMap,t(d.specularMap,c.specularMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest);let v=e.get(d),y=v.envMap,h=v.envMapRotation;y&&(c.envMap.value=y,c.envMapRotation.value.setFromMatrix4(co.makeRotationFromEuler(h)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(mC),c.reflectivity.value=d.reflectivity,c.ior.value=d.ior,c.refractionRatio.value=d.refractionRatio),d.lightMap&&(c.lightMap.value=d.lightMap,c.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,c.lightMapTransform)),d.aoMap&&(c.aoMap.value=d.aoMap,c.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,c.aoMapTransform))}function V(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform))}function n(c,d){c.dashSize.value=d.dashSize,c.totalSize.value=d.dashSize+d.gapSize,c.scale.value=d.scale}function a(c,d,v,y){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.size.value=d.size*v,c.scale.value=y*.5,d.map&&(c.map.value=d.map,t(d.map,c.uvTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function L(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.rotation.value=d.rotation,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function o(c,d){c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4)}function M(c,d){d.gradientMap&&(c.gradientMap.value=d.gradientMap)}function s(c,d){c.metalness.value=d.metalness,d.metalnessMap&&(c.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,c.metalnessMapTransform)),c.roughness.value=d.roughness,d.roughnessMap&&(c.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,c.roughnessMapTransform)),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)}function l(c,d,v){c.ior.value=d.ior,d.sheen>0&&(c.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),c.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(c.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,c.sheenColorMapTransform)),d.sheenRoughnessMap&&(c.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,c.sheenRoughnessMapTransform))),d.clearcoat>0&&(c.clearcoat.value=d.clearcoat,c.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(c.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,c.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(c.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Y2&&c.clearcoatNormalScale.value.negate())),d.dispersion>0&&(c.dispersion.value=d.dispersion),d.retroreflectivity>0&&(c.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(c.iridescence.value=d.iridescence,c.iridescenceIOR.value=d.iridescenceIOR,c.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(c.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,c.iridescenceMapTransform)),d.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),d.transmission>0&&(c.transmission.value=d.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(c.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,c.transmissionMapTransform)),c.thickness.value=d.thickness,d.thicknessMap&&(c.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=d.attenuationDistance,c.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(c.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(c.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=d.specularIntensity,c.specularColor.value.copy(d.specularColor),d.specularColorMap&&(c.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,c.specularColorMapTransform)),d.specularIntensityMap&&(c.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,c.specularIntensityMapTransform))}function u(c,d){d.matcap&&(c.matcap.value=d.matcap)}function f(c,d){let v=e.get(d).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:C,refreshMaterialUniforms:i}}function uo(r,e,t,C){let i={},H={},V=[],n=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function a(h,S){let g=S.program;C.uniformBlockBinding(h,g)}function L(h,S){let g=i[h.id];g===void 0&&(c(h),g=o(h),i[h.id]=g,h.addEventListener("dispose",v));let b=S.program;C.updateUBOMapping(h,b);let m=e.render.frame;H[h.id]!==m&&(s(h),H[h.id]=m)}function o(h){let S=M();h.__bindingPointIndex=S;let g=r.createBuffer(),b=h.__size,m=h.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,b,m),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,g),g}function M(){for(let h=0;h<n;h++)if(V.indexOf(h)===-1)return V.push(h),h;return R1("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(h){let S=i[h.id],g=h.uniforms,b=h.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let m=0,Z=g.length;m<Z;m++){let R=g[m];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)l(R[I],m,I,b);else l(R,m,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function l(h,S,g,b){if(f(h,S,g,b)===!0){let m=h.__offset,Z=h.value;if(Array.isArray(Z)){let R=0;for(let I=0;I<Z.length;I++){let N=Z[I],G=d(N);u(N,h.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else u(Z,h.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,m,h.__data)}}function u(h,S,g){typeof h=="number"||typeof h=="boolean"?S[0]=h:h.isMatrix3?(S[0]=h.elements[0],S[1]=h.elements[1],S[2]=h.elements[2],S[3]=0,S[4]=h.elements[3],S[5]=h.elements[4],S[6]=h.elements[5],S[7]=0,S[8]=h.elements[6],S[9]=h.elements[7],S[10]=h.elements[8],S[11]=0):ArrayBuffer.isView(h)?S.set(new h.constructor(h.buffer,h.byteOffset,S.length)):h.toArray(S,g)}function f(h,S,g,b){let m=h.value,Z=S+"_"+g;if(b[Z]===void 0)return typeof m=="number"||typeof m=="boolean"?b[Z]=m:ArrayBuffer.isView(m)?b[Z]=m.slice():b[Z]=m.clone(),!0;{let R=b[Z];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return b[Z]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function c(h){let S=h.uniforms,g=0,b=16;for(let Z=0,R=S.length;Z<R;Z++){let I=Array.isArray(S[Z])?S[Z]:[S[Z]];for(let N=0,G=I.length;N<G;N++){let P=I[N],U=Array.isArray(P.value)?P.value:[P.value];for(let Q=0,Y=U.length;Q<Y;Q++){let r1=U[Q],X=d(r1),e1=g%b,C1=e1%X.boundary,b1=e1+C1;g+=C1,b1!==0&&b-b1<X.storage&&(g+=b-b1),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=g,g+=X.storage}}}let m=g%b;return m>0&&(g+=b-m),h.__size=g,h.__cache={},this}function d(h){let S={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(S.boundary=4,S.storage=4):h.isVector2?(S.boundary=8,S.storage=8):h.isVector3||h.isColor?(S.boundary=16,S.storage=12):h.isVector4?(S.boundary=16,S.storage=16):h.isMatrix3?(S.boundary=48,S.storage=48):h.isMatrix4?(S.boundary=64,S.storage=64):h.isTexture?O1("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(h)?(S.boundary=16,S.storage=h.byteLength):O1("WebGLRenderer: Unsupported uniform value type.",h),S}function v(h){let S=h.target;S.removeEventListener("dispose",v);let g=V.indexOf(S.__bindingPointIndex);V.splice(g,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete H[S.id]}function y(){for(let h in i)r.deleteBuffer(i[h]);V=[],i={},H={}}return{bind:a,update:L,dispose:y}}var Ao=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),R5=null;function mo(){return R5===null&&(R5=new f4(Ao,16,16,p0,S5),R5.name="DFG_LUT",R5.minFilter=w2,R5.magFilter=w2,R5.wrapS=b5,R5.wrapT=b5,R5.generateMipmaps=!1,R5.needsUpdate=!0),R5}var F9=class{constructor(e={}){let{canvas:t=Rt(),context:C=null,depth:i=!0,stencil:H=!1,alpha:V=!1,antialias:n=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:L=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:s=!1,outputBufferType:l=j2}=e;this.isWebGLRenderer=!0;let u;if(C!==null){if(typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=C.getContextAttributes().alpha}else u=V;let f=l,c=new Set([e9,j4,J4]),d=new Set([j2,x5,u3,A3,Q4,K4]),v=new Uint32Array(4),y=new Int32Array(4),h=new w,S=null,g=null,b=[],m=[],Z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=f5,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,G=null,P=null,U=null;this._outputColorSpace=I2;let Q=0,Y=0,r1=null,X=-1,e1=null,C1=new l2,b1=new l2,_1=null,V2=new F1(0),q1=0,J1=t.width,q=t.height,j=1,h1=null,B1=null,u1=new l2(0,0,J1,q),N1=new l2(0,0,J1,q),x2=!1,z1=new L3,Q1=!1,n2=!1,W1=new i2,M2=new w,_2=new l2,K2={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},d2=!1;function m2(){return r1===null?j:1}let E=C;function E2(A,T){return t.getContext(A,T)}let C2,x,p,B,k,W,H1,V1,$,J,n1,g1,s1,L1,Z1,w1,I1,O,a1,K,o1,c1,t1;try{let A={alpha:!0,depth:i,stencil:H,antialias:n,premultipliedAlpha:a,preserveDrawingBuffer:L,powerPreference:o,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",L2,!1),t.addEventListener("webglcontextrestored",j1,!1),t.addEventListener("webglcontextcreationerror",l5,!1),E===null){let T="webgl2";if(E=E2(T,A),E===null)throw E2(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}y1()}catch(A){throw t.removeEventListener("webglcontextlost",L2,!1),t.removeEventListener("webglcontextrestored",j1,!1),t.removeEventListener("webglcontextcreationerror",l5,!1),R1("WebGLRenderer: "+A.message),A}function y1(){C2=new gL(E),C2.init(),o1=new so(E,C2),x=new cL(E,C2,e,o1),p=new ao(E,C2),x.reversedDepthBuffer&&s&&p.buffers.depth.setReversed(!0),G=E.createFramebuffer(),P=E.createFramebuffer(),U=E.createFramebuffer(),B=new yL(E),k=new Ya,W=new oo(E,C2,p,k,x,o1,B),H1=new SL(R),V1=new bH(E),c1=new lL(E,V1),$=new ZL(E,V1,B,c1),J=new TL(E,$,V1,c1,B),O=new bL(E,x,W),Z1=new pL(k),n1=new $a(R,H1,C2,x,c1,Z1),g1=new po(R,k),s1=new Ka,L1=new ro(C2),I1=new ML(R,H1,p,J,u,a),w1=new Lo(R,J,x),t1=new uo(E,B,x,p),a1=new dL(E,C2,B),K=new _L(E,C2,B),B.programs=n1.programs,R.capabilities=x,R.extensions=C2,R.properties=k,R.renderLists=s1,R.shadowMap=w1,R.state=p,R.info=B}f!==j2&&(Z=new OL(f,t.width,t.height,n,i,H));let v1=new G8(R,E);this.xr=v1,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let A=C2.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=C2.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(J1,q,!1))},this.getSize=function(A){return A.set(J1,q)},this.setSize=function(A,T,z=!0){if(v1.isPresenting){O1("WebGLRenderer: Can't change size while VR device is presenting.");return}J1=A,q=T,t.width=Math.floor(A*j),t.height=Math.floor(T*j),z===!0&&(t.style.width=A+"px",t.style.height=T+"px"),Z!==null&&Z.setSize(t.width,t.height),this.setViewport(0,0,A,T)},this.getDrawingBufferSize=function(A){return A.set(J1*j,q*j).floor()},this.setDrawingBufferSize=function(A,T,z){J1=A,q=T,j=z,t.width=Math.floor(A*z),t.height=Math.floor(T*z),this.setViewport(0,0,A,T)},this.setEffects=function(A){if(f===j2){R1("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let T=0;T<A.length;T++)if(A[T].isOutputPass===!0){O1("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(C1)},this.getViewport=function(A){return A.copy(u1)},this.setViewport=function(A,T,z,F){A.isVector4?u1.set(A.x,A.y,A.z,A.w):u1.set(A,T,z,F),p.viewport(C1.copy(u1).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(N1)},this.setScissor=function(A,T,z,F){A.isVector4?N1.set(A.x,A.y,A.z,A.w):N1.set(A,T,z,F),p.scissor(b1.copy(N1).multiplyScalar(j).round())},this.getScissorTest=function(){return x2},this.setScissorTest=function(A){p.setScissorTest(x2=A)},this.setOpaqueSort=function(A){h1=A},this.setTransparentSort=function(A){B1=A},this.getClearColor=function(A){return A.copy(I1.getClearColor())},this.setClearColor=function(){I1.setClearColor(...arguments)},this.getClearAlpha=function(){return I1.getClearAlpha()},this.setClearAlpha=function(){I1.setClearAlpha(...arguments)},this.clear=function(A=!0,T=!0,z=!0){let F=0;if(A){let D=!1;if(r1!==null){let d1=r1.texture.format;D=c.has(d1)}if(D){let d1=r1.texture.type,A1=d.has(d1),l1=I1.getClearColor(),f1=I1.getClearAlpha(),S1=l1.r,D1=l1.g,G1=l1.b;A1?(v[0]=S1,v[1]=D1,v[2]=G1,v[3]=f1,E.clearBufferuiv(E.COLOR,0,v)):(y[0]=S1,y[1]=D1,y[2]=G1,y[3]=f1,E.clearBufferiv(E.COLOR,0,y))}else F|=E.COLOR_BUFFER_BIT}T&&(F|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&E.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",L2,!1),t.removeEventListener("webglcontextrestored",j1,!1),t.removeEventListener("webglcontextcreationerror",l5,!1),I1.dispose(),s1.dispose(),L1.dispose(),k.dispose(),H1.dispose(),J.dispose(),c1.dispose(),t1.dispose(),n1.dispose(),v1.dispose(),v1.removeEventListener("sessionstart",de),v1.removeEventListener("sessionend",ce),f0.stop()};function L2(A){A.preventDefault(),u8("WebGLRenderer: Context Lost."),I=!0}function j1(){u8("WebGLRenderer: Context Restored."),I=!1;let A=B.autoReset,T=w1.enabled,z=w1.autoUpdate,F=w1.needsUpdate,D=w1.type;y1(),B.autoReset=A,w1.enabled=T,w1.autoUpdate=z,w1.needsUpdate=F,w1.type=D}function l5(A){R1("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z5(A){let T=A.target;T.removeEventListener("dispose",Z5),ei(T)}function ei(A){ti(A),k.remove(A)}function ti(A){let T=k.get(A).programs;T!==void 0&&(T.forEach(function(z){n1.releaseProgram(z)}),A.isShaderMaterial&&n1.releaseShaderCache(A))}this.renderBufferDirect=function(A,T,z,F,D,d1){T===null&&(T=K2);let A1=D.isMesh&&D.matrixWorld.determinantAffine()<0,l1=ii(A,T,z,F,D);p.setMaterial(F,A1);let f1=z.index,S1=1;if(F.wireframe===!0){if(f1=$.getWireframeAttribute(z),f1===void 0)return;S1=2}let D1=z.drawRange,G1=z.attributes.position,x1=D1.start*S1,e2=(D1.start+D1.count)*S1;d1!==null&&(x1=Math.max(x1,d1.start*S1),e2=Math.min(e2,(d1.start+d1.count)*S1)),f1!==null?(x1=Math.max(x1,0),e2=Math.min(e2,f1.count)):G1!=null&&(x1=Math.max(x1,0),e2=Math.min(e2,G1.count));let h2=e2-x1;if(h2<0||h2===1/0)return;c1.setup(D,F,l1,z,f1);let o2,H2=a1;if(f1!==null&&(o2=V1.get(f1),H2=K,H2.setIndex(o2)),D.isMesh)F.wireframe===!0?(p.setLineWidth(F.wireframeLinewidth*m2()),H2.setMode(E.LINES)):H2.setMode(E.TRIANGLES);else if(D.isLine){let R2=F.linewidth;R2===void 0&&(R2=1),p.setLineWidth(R2*m2()),D.isLineSegments?H2.setMode(E.LINES):D.isLineLoop?H2.setMode(E.LINE_LOOP):H2.setMode(E.LINE_STRIP)}else D.isPoints?H2.setMode(E.POINTS):D.isSprite&&H2.setMode(E.TRIANGLES);if(D.isBatchedMesh)if(C2.get("WEBGL_multi_draw"))H2.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let R2=D._multiDrawStarts,p1=D._multiDrawCounts,z2=D._multiDrawCount,Y1=f1?V1.get(f1).bytesPerElement:1,n5=k.get(F).currentProgram.getUniforms();for(let _5=0;_5<z2;_5++)n5.setValue(E,"_gl_DrawID",_5),H2.render(R2[_5]/Y1,p1[_5])}else if(D.isInstancedMesh)H2.renderInstances(x1,h2,D.count);else if(z.isInstancedBufferGeometry){let R2=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,p1=Math.min(z.instanceCount,R2);H2.renderInstances(x1,h2,p1)}else H2.render(x1,h2)};function le(A,T,z,F){N!==null&&A.isNodeMaterial&&N.setObject(F,A),Q1===!0&&Z1.setState(A,z,!1),A.transparent===!0&&A.side===O5&&A.forceSinglePass===!1?(A.side=Y2,A.needsUpdate=!0,F7(A,T,F),A.side=M0,A.needsUpdate=!0,F7(A,T,F),A.side=O5):F7(A,T,F)}this.compile=function(A,T,z=null){z===null&&(z=A),N!==null&&N.renderStart(A,T,z),g=L1.get(z),g.init(T),m.push(g),z.traverseVisible(function(D){D.isLight&&D.layers.test(T.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),A!==z&&A.traverseVisible(function(D){D.isLight&&D.layers.test(T.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights(),N!==null&&N.updateLights(g.state.lightsArray),n2=this.localClippingEnabled,Q1=Z1.init(this.clippingPlanes,n2),Q1===!0&&Z1.setGlobalState(this.clippingPlanes,T),N!==null&&w1.render(g.state.shadowsArray,z,T);let F=new Set;return A.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let d1=D.material;if(d1)if(Array.isArray(d1))for(let A1=0;A1<d1.length;A1++){let l1=d1[A1];le(l1,z,T,D),F.add(l1)}else le(d1,z,T,D),F.add(d1)}),g=m.pop(),N!==null&&N.renderEnd(),F},this.compileAsync=function(A,T,z=null){let F=this.compile(A,T,z);return new Promise(D=>{function d1(){if(F.forEach(function(A1){let f1=k.get(A1).currentProgram;(f1===void 0||f1.isReady())&&F.delete(A1)}),F.size===0){D(A);return}setTimeout(d1,10)}C2.get("KHR_parallel_shader_compile")!==null?d1():setTimeout(d1,10)})};let s6=null;function Ci(A){s6&&s6(A)}function de(){f0.stop()}function ce(){f0.start()}let f0=new lC;f0.setAnimationLoop(Ci),typeof self<"u"&&f0.setContext(self),this.setAnimationLoop=function(A){s6=A,v1.setAnimationLoop(A),A===null?f0.stop():f0.start()},v1.addEventListener("sessionstart",de),v1.addEventListener("sessionend",ce),this.render=function(A,T){if(T!==void 0&&T.isCamera!==!0){R1("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,T);let z=v1.enabled===!0&&v1.isPresenting===!0,F=Z!==null&&(r1===null||z)&&Z.begin(R,r1);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),v1.enabled===!0&&v1.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(v1.cameraAutoUpdate===!0&&v1.updateCamera(T),T=v1.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,T,r1),g=L1.get(A,m.length),g.init(T),g.state.textureUnits=W.getTextureUnits(),m.push(g),W1.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),z1.setFromProjectionMatrix(W1,A5,T.reversedDepth),n2=this.localClippingEnabled,Q1=Z1.init(this.clippingPlanes,n2),S=s1.get(A,b.length),S.init(),b.push(S),v1.enabled===!0&&v1.isPresenting===!0){let A1=R.xr.getDepthSensingMesh();A1!==null&&M6(A1,T,-1/0,R.sortObjects)}M6(A,T,0,R.sortObjects),S.finish(),N!==null&&N.updateLights(g.state.lightsArray),R.sortObjects===!0&&S.sort(h1,B1),d2=v1.enabled===!1||v1.isPresenting===!1||v1.hasDepthSensing()===!1,d2&&I1.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q1===!0&&Z1.beginShadows();let D=g.state.shadowsArray;if(w1.render(D,A,T),Q1===!0&&Z1.endShadows(),(F&&Z.hasRenderPass())===!1){let A1=S.opaque,l1=S.transmissive;if(g.setupLights(),T.isArrayCamera){let f1=T.cameras;if(l1.length>0)for(let S1=0,D1=f1.length;S1<D1;S1++){let G1=f1[S1];ue(A1,l1,A,G1)}d2&&I1.render(A);for(let S1=0,D1=f1.length;S1<D1;S1++){let G1=f1[S1];pe(S,A,G1,G1.viewport)}}else l1.length>0&&ue(A1,l1,A,T),d2&&I1.render(A),pe(S,A,T)}r1!==null&&Y===0&&(W.updateMultisampleRenderTarget(r1),W.updateRenderTargetMipmap(r1)),F&&Z.end(R),A.isScene===!0&&A.onAfterRender(R,A,T),c1.resetDefaultState(),X=-1,e1=null,m.pop(),m.length>0?(g=m[m.length-1],W.setTextureUnits(g.state.textureUnits),Q1===!0&&Z1.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,N!==null&&N.renderEnd()};function M6(A,T,z,F){if(A.visible===!1)return;if(A.layers.test(T.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(T);else if(A.isLightProbeGrid)g.pushLightProbeGrid(A);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(z1)){F&&_2.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W1);let A1=J.update(A),l1=A.material;l1.visible&&S.push(A,A1,l1,z,_2.z,null,T)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(z1))){let A1=J.update(A),l1=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_2.copy(A.boundingSphere.center)):(A1.boundingSphere===null&&A1.computeBoundingSphere(),_2.copy(A1.boundingSphere.center)),_2.applyMatrix4(A.matrixWorld).applyMatrix4(W1)),Array.isArray(l1)){let f1=A1.groups;for(let S1=0,D1=f1.length;S1<D1;S1++){let G1=f1[S1],x1=l1[G1.materialIndex];x1&&x1.visible&&S.push(A,A1,x1,z,_2.z,G1,T)}}else l1.visible&&S.push(A,A1,l1,z,_2.z,null,T)}}let d1=A.children;for(let A1=0,l1=d1.length;A1<l1;A1++)M6(d1[A1],T,z,F)}function pe(A,T,z,F){let{opaque:D,transmissive:d1,transparent:A1}=A;g.setupLightsView(z),Q1===!0&&Z1.setGlobalState(R.clippingPlanes,z),F&&p.viewport(C1.copy(F)),D.length>0&&I7(D,T,z),d1.length>0&&I7(d1,T,z),A1.length>0&&I7(A1,T,z),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function ue(A,T,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(g.state.transmissionRenderTarget[F.id]===void 0){let x1=C2.has("EXT_color_buffer_half_float")||C2.has("EXT_color_buffer_float");g.state.transmissionRenderTarget[F.id]=new J2(1,1,{generateMipmaps:!0,type:x1?S5:j2,minFilter:d0,samples:Math.max(4,x.samples),stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:X1.workingColorSpace})}let d1=g.state.transmissionRenderTarget[F.id],A1=F.viewport||C1;d1.setSize(A1.z*R.transmissionResolutionScale,A1.w*R.transmissionResolutionScale);let l1=R.getRenderTarget(),f1=R.getActiveCubeFace(),S1=R.getActiveMipmapLevel();R.setRenderTarget(d1),R.getClearColor(V2),q1=R.getClearAlpha(),q1<1&&R.setClearColor(16777215,.5),R.clear(),d2&&I1.render(z);let D1=R.toneMapping;R.toneMapping=f5;let G1=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),g.setupLightsView(F),Q1===!0&&Z1.setGlobalState(R.clippingPlanes,F),I7(A,z,F),W.updateMultisampleRenderTarget(d1),W.updateRenderTargetMipmap(d1),C2.has("WEBGL_multisampled_render_to_texture")===!1){let x1=!1;for(let e2=0,h2=T.length;e2<h2;e2++){let o2=T[e2],{object:H2,geometry:R2,material:p1,group:z2}=o2;if(p1.side===O5&&H2.layers.test(F.layers)){let Y1=p1.side;p1.side=Y2,p1.needsUpdate=!0,Ae(H2,z,F,R2,p1,z2),p1.side=Y1,p1.needsUpdate=!0,x1=!0}}x1===!0&&(W.updateMultisampleRenderTarget(d1),W.updateRenderTargetMipmap(d1))}R.setRenderTarget(l1,f1,S1),R.setClearColor(V2,q1),G1!==void 0&&(F.viewport=G1),R.toneMapping=D1}function I7(A,T,z){let F=T.isScene===!0?T.overrideMaterial:null;for(let D=0,d1=A.length;D<d1;D++){let A1=A[D],{object:l1,geometry:f1,group:S1}=A1,D1=A1.material;D1.allowOverride===!0&&F!==null&&(D1=F),l1.layers.test(z.layers)&&Ae(l1,T,z,f1,D1,S1)}}function Ae(A,T,z,F,D,d1){N!==null&&D.isNodeMaterial&&N.setObject(A,D),A.onBeforeRender(R,T,z,F,D,d1),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),D.onBeforeRender(R,T,z,F,A,d1),D.transparent===!0&&D.side===O5&&D.forceSinglePass===!1?(D.side=Y2,D.needsUpdate=!0,R.renderBufferDirect(z,T,F,D,A,d1),D.side=M0,D.needsUpdate=!0,R.renderBufferDirect(z,T,F,D,A,d1),D.side=O5):R.renderBufferDirect(z,T,F,D,A,d1),A.onAfterRender(R,T,z,F,D,d1)}function F7(A,T,z){T.isScene!==!0&&(T=K2);let F=k.get(A),D=g.state.lights,d1=g.state.shadowsArray,A1=D.state.version,l1=n1.getParameters(A,D.state,d1,T,z,g.state.lightProbeGridArray),f1=n1.getProgramCacheKey(l1),S1=F.programs;F.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?T.environment:null,F.fog=T.fog;let D1=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;F.envMap=H1.get(A.envMap||F.environment,D1),F.envMapRotation=F.environment!==null&&A.envMap===null?T.environmentRotation:A.envMapRotation,S1===void 0&&(A.addEventListener("dispose",Z5),S1=new Map,F.programs=S1);let G1=S1.get(f1);if(G1!==void 0){if(F.currentProgram===G1&&F.lightsStateVersion===A1)return he(A,l1),G1}else l1.uniforms=n1.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,z,l1),A.onBeforeCompile(l1,R),G1=n1.acquireProgram(l1,f1),S1.set(f1,G1),F.uniforms=l1.uniforms;let x1=F.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(x1.clippingPlanes=Z1.uniform),he(A,l1),F.needsLights=Vi(A),F.lightsStateVersion=A1,F.needsLights&&(x1.ambientLightColor.value=D.state.ambient,x1.lightProbe.value=D.state.probe,x1.sunLights.value=D.state.sun,x1.sunLightShadows.value=D.state.sunShadow,x1.directionalLights.value=D.state.directional,x1.directionalLightShadows.value=D.state.directionalShadow,x1.spotLights.value=D.state.spot,x1.spotLightShadows.value=D.state.spotShadow,x1.rectAreaLights.value=D.state.rectArea,x1.ltc_1.value=D.state.rectAreaLTC1,x1.ltc_2.value=D.state.rectAreaLTC2,x1.pointLights.value=D.state.point,x1.pointLightShadows.value=D.state.pointShadow,x1.hemisphereLights.value=D.state.hemi,x1.sunShadowMatrix.value=D.state.sunShadowMatrix,x1.sunShadowCascade.value=D.state.sunShadowCascade,x1.directionalShadowMatrix.value=D.state.directionalShadowMatrix,x1.spotLightMatrix.value=D.state.spotLightMatrix,x1.spotLightMap.value=D.state.spotLightMap,x1.pointShadowMatrix.value=D.state.pointShadowMatrix),F.lightProbeGrid=g.state.lightProbeGridArray.length>0,F.currentProgram=G1,F.uniformsList=null,G1}function me(A){if(A.uniformsList===null){let T=A.currentProgram.getUniforms();A.uniformsList=f3.seqWithValue(T.seq,A.uniforms)}return A.uniformsList}function he(A,T){let z=k.get(A);z.outputColorSpace=T.outputColorSpace,z.batching=T.batching,z.batchingColor=T.batchingColor,z.instancing=T.instancing,z.instancingColor=T.instancingColor,z.instancingMorph=T.instancingMorph,z.skinning=T.skinning,z.morphTargets=T.morphTargets,z.morphNormals=T.morphNormals,z.morphColors=T.morphColors,z.morphTargetsCount=T.morphTargetsCount,z.numClippingPlanes=T.numClippingPlanes,z.numIntersection=T.numClipIntersection,z.vertexAlphas=T.vertexAlphas,z.vertexTangents=T.vertexTangents,z.toneMapping=T.toneMapping}function ri(A,T){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;h.setFromMatrixPosition(T.matrixWorld);for(let z=0,F=A.length;z<F;z++){let D=A[z];if(D.texture!==null&&D.boundingBox.containsPoint(h))return D}return null}function ii(A,T,z,F,D){T.isScene!==!0&&(T=K2),W.resetTextureUnits();let d1=T.fog,A1=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?T.environment:null,l1=r1===null?R.outputColorSpace:r1.isXRRenderTarget===!0?r1.texture.colorSpace:X1.workingColorSpace,f1=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,S1=H1.get(F.envMap||A1,f1),D1=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,G1=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),x1=!!z.morphAttributes.position,e2=!!z.morphAttributes.normal,h2=!!z.morphAttributes.color,o2=f5;F.toneMapped&&(r1===null||r1.isXRRenderTarget===!0)&&(o2=R.toneMapping);let H2=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,R2=H2!==void 0?H2.length:0,p1=k.get(F),z2=g.state.lights;if(Q1===!0&&(n2===!0||A!==e1)){let a2=A===e1&&F.id===X;Z1.setState(F,A,a2)}let Y1=!1;F.version===p1.__version?(p1.needsLights&&p1.lightsStateVersion!==z2.state.version||p1.outputColorSpace!==l1||D.isBatchedMesh&&p1.batching===!1||!D.isBatchedMesh&&p1.batching===!0||D.isBatchedMesh&&p1.batchingColor===!0&&D._colorsTexture===null||D.isBatchedMesh&&p1.batchingColor===!1&&D._colorsTexture!==null||D.isInstancedMesh&&p1.instancing===!1||!D.isInstancedMesh&&p1.instancing===!0||D.isSkinnedMesh&&p1.skinning===!1||!D.isSkinnedMesh&&p1.skinning===!0||D.isInstancedMesh&&p1.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&p1.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&p1.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&p1.instancingMorph===!1&&D.morphTexture!==null||p1.envMap!==S1||F.fog===!0&&p1.fog!==d1||p1.numClippingPlanes!==void 0&&(p1.numClippingPlanes!==Z1.numPlanes||p1.numIntersection!==Z1.numIntersection)||p1.vertexAlphas!==D1||p1.vertexTangents!==G1||p1.morphTargets!==x1||p1.morphNormals!==e2||p1.morphColors!==h2||p1.toneMapping!==o2||p1.morphTargetsCount!==R2||!!p1.lightProbeGrid!=g.state.lightProbeGridArray.length>0)&&(Y1=!0):(Y1=!0,p1.__version=F.version);let n5=p1.currentProgram;Y1===!0&&(n5=F7(F,T,D),N&&F.isNodeMaterial&&N.onUpdateProgram(F,n5,p1));let _5=!1,Q5=!1,B0=!1,r2=n5.getUniforms(),u2=p1.uniforms;if(p.useProgram(n5.program)&&(_5=!0,Q5=!0,B0=!0),F.id!==X&&(X=F.id,Q5=!0),p1.needsLights){let a2=ri(g.state.lightProbeGridArray,D);p1.lightProbeGrid!==a2&&(p1.lightProbeGrid=a2,Q5=!0)}if(_5||e1!==A){p.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),r2.setValue(E,"projectionMatrix",A.projectionMatrix),r2.setValue(E,"viewMatrix",A.matrixWorldInverse);let J5=r2.map.cameraPosition;J5!==void 0&&J5.setValue(E,M2.setFromMatrixPosition(A.matrixWorld)),x.logarithmicDepthBuffer&&r2.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&r2.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),e1!==A&&(e1=A,Q5=!0,B0=!0)}if(p1.needsLights&&(z2.state.sunShadowMap.length>0&&r2.setValue(E,"sunShadowMap",z2.state.sunShadowMap,W),z2.state.directionalShadowMap.length>0&&r2.setValue(E,"directionalShadowMap",z2.state.directionalShadowMap,W),z2.state.spotShadowMap.length>0&&r2.setValue(E,"spotShadowMap",z2.state.spotShadowMap,W),z2.state.pointShadowMap.length>0&&r2.setValue(E,"pointShadowMap",z2.state.pointShadowMap,W)),D.isSkinnedMesh){r2.setOptional(E,D,"bindMatrix"),r2.setOptional(E,D,"bindMatrixInverse");let a2=D.skeleton;a2&&(a2.boneTexture===null&&a2.computeBoneTexture(),r2.setValue(E,"boneTexture",a2.boneTexture,W))}D.isBatchedMesh&&(r2.setOptional(E,D,"batchingTexture"),r2.setValue(E,"batchingTexture",D._matricesTexture,W),r2.setOptional(E,D,"batchingIdTexture"),r2.setValue(E,"batchingIdTexture",D._indirectTexture,W),r2.setOptional(E,D,"batchingColorTexture"),D._colorsTexture!==null&&r2.setValue(E,"batchingColorTexture",D._colorsTexture,W));let K5=z.morphAttributes;if((K5.position!==void 0||K5.normal!==void 0||K5.color!==void 0)&&O.update(D,z,n5),(Q5||p1.receiveShadow!==D.receiveShadow)&&(p1.receiveShadow=D.receiveShadow,r2.setValue(E,"receiveShadow",D.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&T.environment!==null&&(u2.envMapIntensity.value=T.environmentIntensity),u2.dfgLUT!==void 0&&(u2.dfgLUT.value=mo()),Q5){if(r2.setValue(E,"toneMappingExposure",R.toneMappingExposure),p1.needsLights&&Hi(u2,B0),d1&&F.fog===!0&&g1.refreshFogUniforms(u2,d1),g1.refreshMaterialUniforms(u2,F,j,q,g.state.transmissionRenderTarget[A.id]),p1.needsLights&&p1.lightProbeGrid){let a2=p1.lightProbeGrid;u2.probesSH.value=a2.texture,u2.probesMin.value.copy(a2.boundingBox.min),u2.probesMax.value.copy(a2.boundingBox.max),u2.probesResolution.value.copy(a2.resolution)}f3.upload(E,me(p1),u2,W)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(f3.upload(E,me(p1),u2,W),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&r2.setValue(E,"center",D.center),r2.setValue(E,"modelViewMatrix",D.modelViewMatrix),r2.setValue(E,"normalMatrix",D.normalMatrix),r2.setValue(E,"modelMatrix",D.matrixWorld),F.uniformsGroups!==void 0){let a2=F.uniformsGroups;for(let J5=0,I0=a2.length;J5<I0;J5++){let xe=a2[J5];t1.update(xe,n5),t1.bind(xe,n5)}}return n5}function Hi(A,T){A.ambientLightColor.needsUpdate=T,A.lightProbe.needsUpdate=T,A.sunLights.needsUpdate=T,A.sunLightShadows.needsUpdate=T,A.directionalLights.needsUpdate=T,A.directionalLightShadows.needsUpdate=T,A.pointLights.needsUpdate=T,A.pointLightShadows.needsUpdate=T,A.spotLights.needsUpdate=T,A.spotLightShadows.needsUpdate=T,A.rectAreaLights.needsUpdate=T,A.hemisphereLights.needsUpdate=T}function Vi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return r1},this.setRenderTargetTextures=function(A,T,z){let F=k.get(A);F.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=T,k.get(A.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,T){let z=k.get(A);z.__webglFramebuffer=T,z.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(A,T=0,z=0){r1=A,Q=T,Y=z;let F=null,D=!1,d1=!1;if(A){let l1=k.get(A);if(l1.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(E.FRAMEBUFFER,l1.__webglFramebuffer),C1.copy(A.viewport),b1.copy(A.scissor),_1=A.scissorTest,p.viewport(C1),p.scissor(b1),p.setScissorTest(_1),X=-1;return}else if(l1.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(l1.__hasExternalTextures)W.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let D1=A.depthTexture;if(l1.__boundDepthTexture!==D1){if(D1!==null&&k.has(D1)&&(A.width!==D1.image.width||A.height!==D1.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}let f1=A.texture;(f1.isData3DTexture||f1.isDataArrayTexture||f1.isCompressedArrayTexture)&&(d1=!0);let S1=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(S1[T])?F=S1[T][z]:F=S1[T],D=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?F=k.get(A).__webglMultisampledFramebuffer:Array.isArray(S1)?F=S1[z]:F=S1,C1.copy(A.viewport),b1.copy(A.scissor),_1=A.scissorTest}else C1.copy(u1).multiplyScalar(j).floor(),b1.copy(N1).multiplyScalar(j).floor(),_1=x2;if(z!==0&&(F=G),p.bindFramebuffer(E.FRAMEBUFFER,F)&&p.drawBuffers(A,F),p.viewport(C1),p.scissor(b1),p.setScissorTest(_1),D){let l1=k.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+T,l1.__webglTexture,z)}else if(d1){let l1=T;for(let f1=0;f1<A.textures.length;f1++){let S1=k.get(A.textures[f1]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+f1,S1.__webglTexture,z,l1)}}else if(A!==null&&z!==0){let l1=k.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,l1.__webglTexture,z)}X=-1};function fe(A){let T=k.get(A);return(T.__readFormat!==A.format||T.__readType!==A.type)&&(T.__readFormat=A.format,T.__readType=A.type,T.__formatReadable=x.textureFormatReadable(A.format),T.__typeReadable=x.textureTypeReadable(A.type)),T}this.readRenderTargetPixels=function(A,T,z,F,D,d1,A1,l1=0){if(!(A&&A.isWebGLRenderTarget)){R1("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let f1=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&A1!==void 0&&(f1=f1[A1]),f1){p.bindFramebuffer(E.FRAMEBUFFER,f1);try{let S1=A.textures[l1],D1=S1.format,G1=S1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+l1);let x1=fe(S1);if(x1.__formatReadable===!1){R1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(x1.__typeReadable===!1){R1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=A.width-F&&z>=0&&z<=A.height-D&&E.readPixels(T,z,F,D,o1.convert(D1),o1.convert(G1),d1)}finally{let S1=r1!==null?k.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,S1)}}},this.readRenderTargetPixelsAsync=async function(A,T,z,F,D,d1,A1,l1=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let f1=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&A1!==void 0&&(f1=f1[A1]),f1)if(T>=0&&T<=A.width-F&&z>=0&&z<=A.height-D){p.bindFramebuffer(E.FRAMEBUFFER,f1);let S1=A.textures[l1],D1=S1.format,G1=S1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+l1);let x1=fe(S1);if(x1.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(x1.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let e2=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,e2),E.bufferData(E.PIXEL_PACK_BUFFER,d1.byteLength,E.STREAM_READ),E.readPixels(T,z,F,D,o1.convert(D1),o1.convert(G1),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let h2=r1!==null?k.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,h2);let o2=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Bt(E,o2,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,e2),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,d1),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(e2),E.deleteSync(o2),d1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,T=null,z=0){let F=Math.pow(2,-z),D=Math.floor(A.image.width*F),d1=Math.floor(A.image.height*F),A1=T!==null?T.x:0,l1=T!==null?T.y:0;W.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,A1,l1,D,d1),p.unbindTexture()},this.copyTextureToTexture=function(A,T,z=null,F=null,D=0,d1=0){let A1,l1,f1,S1,D1,G1,x1,e2,h2,o2=A.isCompressedTexture?A.mipmaps[d1]:A.image;if(z!==null)A1=z.max.x-z.min.x,l1=z.max.y-z.min.y,f1=z.isBox3?z.max.z-z.min.z:1,S1=z.min.x,D1=z.min.y,G1=z.isBox3?z.min.z:0;else{let u2=Math.pow(2,-D);A1=Math.floor(o2.width*u2),l1=Math.floor(o2.height*u2),A.isDataArrayTexture?f1=o2.depth:A.isData3DTexture?f1=Math.floor(o2.depth*u2):f1=1,S1=0,D1=0,G1=0}F!==null?(x1=F.x,e2=F.y,h2=F.z):(x1=0,e2=0,h2=0);let H2=o1.convert(T.format),R2=o1.convert(T.type),p1;T.isData3DTexture?(W.setTexture3D(T,0),p1=E.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(W.setTexture2DArray(T,0),p1=E.TEXTURE_2D_ARRAY):(W.setTexture2D(T,0),p1=E.TEXTURE_2D),p.activeTexture(E.TEXTURE0),p.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,T.flipY),p.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),p.pixelStorei(E.UNPACK_ALIGNMENT,T.unpackAlignment);let z2=p.getParameter(E.UNPACK_ROW_LENGTH),Y1=p.getParameter(E.UNPACK_IMAGE_HEIGHT),n5=p.getParameter(E.UNPACK_SKIP_PIXELS),_5=p.getParameter(E.UNPACK_SKIP_ROWS),Q5=p.getParameter(E.UNPACK_SKIP_IMAGES);p.pixelStorei(E.UNPACK_ROW_LENGTH,o2.width),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,o2.height),p.pixelStorei(E.UNPACK_SKIP_PIXELS,S1),p.pixelStorei(E.UNPACK_SKIP_ROWS,D1),p.pixelStorei(E.UNPACK_SKIP_IMAGES,G1);let B0=A.isDataArrayTexture||A.isData3DTexture,r2=T.isDataArrayTexture||T.isData3DTexture;if(A.isDepthTexture){let u2=k.get(A),K5=k.get(T),a2=k.get(u2.__renderTarget),J5=k.get(K5.__renderTarget);p.bindFramebuffer(E.READ_FRAMEBUFFER,a2.__webglFramebuffer),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,J5.__webglFramebuffer);for(let I0=0;I0<f1;I0++)B0&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(A).__webglTexture,D,G1+I0),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(T).__webglTexture,d1,h2+I0)),E.blitFramebuffer(S1,D1,A1,l1,x1,e2,A1,l1,E.DEPTH_BUFFER_BIT,E.NEAREST);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(D!==0||A.isRenderTargetTexture||k.has(A)){let u2=k.get(A),K5=k.get(T);p.bindFramebuffer(E.READ_FRAMEBUFFER,P),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,U);for(let a2=0;a2<f1;a2++)B0?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,u2.__webglTexture,D,G1+a2):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,u2.__webglTexture,D),r2?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,K5.__webglTexture,d1,h2+a2):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,K5.__webglTexture,d1),D!==0?E.blitFramebuffer(S1,D1,A1,l1,x1,e2,A1,l1,E.COLOR_BUFFER_BIT,E.NEAREST):r2?E.copyTexSubImage3D(p1,d1,x1,e2,h2+a2,S1,D1,A1,l1):E.copyTexSubImage2D(p1,d1,x1,e2,S1,D1,A1,l1);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else r2?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(p1,d1,x1,e2,h2,A1,l1,f1,H2,R2,o2.data):T.isCompressedArrayTexture?E.compressedTexSubImage3D(p1,d1,x1,e2,h2,A1,l1,f1,H2,o2.data):E.texSubImage3D(p1,d1,x1,e2,h2,A1,l1,f1,H2,R2,o2):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,d1,x1,e2,A1,l1,H2,R2,o2.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,d1,x1,e2,o2.width,o2.height,H2,o2.data):E.texSubImage2D(E.TEXTURE_2D,d1,x1,e2,A1,l1,H2,R2,o2);p.pixelStorei(E.UNPACK_ROW_LENGTH,z2),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Y1),p.pixelStorei(E.UNPACK_SKIP_PIXELS,n5),p.pixelStorei(E.UNPACK_SKIP_ROWS,_5),p.pixelStorei(E.UNPACK_SKIP_IMAGES,Q5),d1===0&&T.generateMipmaps&&E.generateMipmap(p1),p.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),p.unbindTexture()},this.resetState=function(){Q=0,Y=0,r1=null,p.reset(),c1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return A5}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X1._getDrawingBufferColorSpace(e),t.unpackColorSpace=X1._getUnpackColorSpace()}};var g7=new w;function M5(r,e,t,C,i,H){let V=2*Math.PI*i/4,n=Math.max(H-2*i,0),a=Math.PI/4;g7.copy(e),g7[C]=0,g7.normalize();let L=.5*V/(V+n),o=1-g7.angleTo(r)/a;return Math.sign(g7[t])===1?o*L:n/(V+n)+L+L*(1-o)}var N9=class r extends L0{constructor(e=1,t=1,C=1,i=2,H=.1){let V=i*2+1;if(H=Math.min(e/2,t/2,C/2,H),super(1,1,1,V,V,V),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:C,segments:i,radius:H},V===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let a=new w,L=new w,o=new w(e,t,C).divideScalar(2).subScalar(H),M=this.attributes.position.array,s=this.attributes.normal.array,l=this.attributes.uv.array,u=M.length/6,f=new w,c=.5/V;for(let d=0,v=0;d<M.length;d+=3,v+=2)switch(a.fromArray(M,d),L.copy(a),L.x-=Math.sign(L.x)*c,L.y-=Math.sign(L.y)*c,L.z-=Math.sign(L.z)*c,L.normalize(),M[d+0]=o.x*Math.sign(a.x)+L.x*H,M[d+1]=o.y*Math.sign(a.y)+L.y*H,M[d+2]=o.z*Math.sign(a.z)+L.z*H,s[d+0]=L.x,s[d+1]=L.y,s[d+2]=L.z,Math.floor(d/u)){case 0:f.set(1,0,0),l[v+0]=M5(f,L,"z","y",H,C),l[v+1]=1-M5(f,L,"y","z",H,t);break;case 1:f.set(-1,0,0),l[v+0]=1-M5(f,L,"z","y",H,C),l[v+1]=1-M5(f,L,"y","z",H,t);break;case 2:f.set(0,1,0),l[v+0]=1-M5(f,L,"x","z",H,e),l[v+1]=M5(f,L,"z","x",H,C);break;case 3:f.set(0,-1,0),l[v+0]=1-M5(f,L,"x","z",H,e),l[v+1]=1-M5(f,L,"z","x",H,C);break;case 4:f.set(0,0,1),l[v+0]=1-M5(f,L,"x","y",H,e),l[v+1]=1-M5(f,L,"y","x",H,t);break;case 5:f.set(0,0,-1),l[v+0]=M5(f,L,"x","y",H,e),l[v+1]=1-M5(f,L,"y","x",H,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var g5=["U","F","R","B","L","D"],Z7={U:"#f2f2ee",D:"#ffd21f",F:"#11a85c",B:"#2563d9",R:"#e0303a",L:"#ff7a1a"},W8={U:[0,1,0],D:[0,-1,0],R:[1,0,0],L:[-1,0,0],F:[0,0,1],B:[0,0,-1]},hC={U:[0,0,-1],D:[0,0,1],F:[0,1,0],B:[0,1,0],R:[0,1,0],L:[0,1,0]},fo=["x","y","z"],B5=Math.PI/2;function fC(r){let e=[Math.abs(r.x),Math.abs(r.y),Math.abs(r.z)],t=e.indexOf(Math.max(...e)),C=Math.sign([r.x,r.y,r.z][t]);return[["L","R"],["D","U"],["B","F"]][t][C>0?1:0]}var U9=r=>Math.round(r*2)/2;function xo(r,e,t){let C=(t-1)/2,i,H;switch(r){case"U":i=e.x,H=e.z;break;case"D":i=e.x,H=-e.z;break;case"F":i=e.x,H=-e.y;break;case"B":i=-e.x,H=-e.y;break;case"R":i=-e.z,H=-e.y;break;case"L":i=e.z,H=-e.y;break}return Math.round(H+C)*t+Math.round(i+C)}function vo(r,e){let t=r/2,C=e,i=new o3;i.moveTo(-t+C,-t),i.lineTo(t-C,-t),i.quadraticCurveTo(t,-t,t,-t+C),i.lineTo(t,t-C),i.quadraticCurveTo(t,t,t-C,t),i.lineTo(-t+C,t),i.quadraticCurveTo(-t,t,-t,t-C),i.lineTo(-t,-t+C),i.quadraticCurveTo(-t,-t,-t+C,-t);let H=new n7(i,6),V=H.attributes.position,n=H.attributes.uv;for(let a=0;a<V.count;a++)n.setXY(a,V.getX(a)/r+.5,V.getY(a)/r+.5);return H}function z9(r,e){let t=document.createElement("canvas");t.width=t.height=r,e(t.getContext("2d"),r);let C=new Q3(t);return C.colorSpace=I2,C.anisotropy=4,C}function So(r){let e=parseInt(r.slice(1),16);return(.299*(e>>16)+.587*(e>>8&255)+.114*(e&255))/255}var G9=class{constructor(e){this.el=e,this.renderer=new F9({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=I2,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new G3,this.camera=new F2(30,1,.1,100),this.camera.position.set(0,0,15),this.scene.add(new s7(16777215,1.6));let t=new d3(16777215,1.9);t.position.set(4,7,9),this.scene.add(t);let C=new d3(16777215,.5);C.position.set(-6,-3,4),this.scene.add(C),this.root=new m5,this.scene.add(this.root),this.baseView=new A2().setFromEuler(new o5(.5,-.65,0,"XYZ")),this.root.quaternion.copy(this.baseView),this.raycaster=new M7,this.tweens=[],this.queue=[],this.turning=!1,this.dirty=!0,this.autoSpin=!1,this.mode="view",this.allowOrbitInView=!0,this.onTap=null,this.onSwipe=null,this.labelCache=new Map,this.labelFn=null,this.n=3,this._buildTextures(),this._build(),this._bindInput(),this.fill=.78,new ResizeObserver(()=>this.resize()).observe(e),this.resize();let i=H=>{this._frame(H),requestAnimationFrame(i)};requestAnimationFrame(i)}_buildTextures(){this.texQ=z9(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.fillStyle="#9aa3b5",e.font='700 74px -apple-system, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("?",t/2,t/2+4)}),this.texX=z9(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.38)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(40,40),e.lineTo(88,88),e.moveTo(88,40),e.lineTo(40,88),e.stroke()})}setSize(e){if(e=e===2?2:3,e!==this.n){this.tweens=[],this.queue=[],this.turning=!1;for(let t of[...this.root.children])this.root.remove(t);this.n=e,this._build(),this.resize()}}_build(){let e=this.n,t=(e-1)/2,C=[];for(let n=0;n<e;n++)C.push(n-t);let i=new N9(.97,.97,.97,3,.12),H=new M3({color:1316380,roughness:.55,metalness:.1}),V=vo(.84,.13);this.cubies=[],this.stickers=[];for(let n of C)for(let a of C)for(let L of C){if(Math.max(Math.abs(n),Math.abs(a),Math.abs(L))<t)continue;let o=new m5;o.position.set(n,a,L),o.userData.home=new w(n,a,L),o.add(new $2(i,H));for(let M of g5){let s=W8[M];if(!(s[0]&&s[0]*t===n||s[1]&&s[1]*t===a||s[2]&&s[2]*t===L))continue;let l=new M3({color:Z7[M],roughness:.38,metalness:0}),u=new $2(V,l),f=new w(...s),c=new w(...hC[M]),d=new w().crossVectors(c,f);u.quaternion.setFromRotationMatrix(new i2().makeBasis(d,c,f)),u.position.copy(f).multiplyScalar(.487),u.userData={color:M,center:e===3&&Math.abs(n)+Math.abs(a)+Math.abs(L)===1},o.add(u),this.stickers.push(u)}this.root.add(o),this.cubies.push(o)}}resize(){let e=this.el.clientWidth||1,t=this.el.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t;let C=2.62*this.n/3,i=m8.degToRad(this.camera.fov)/2,H=Math.atan(Math.tan(i)*this.camera.aspect),V=Math.min(i,H);this.camera.position.z=C/Math.sin(V*this.fill),this.camera.updateProjectionMatrix(),this.dirty=!0}reset(){this.tweens=[],this.queue=[],this.turning=!1;for(let e of this.cubies)e.parent!==this.root&&this.root.attach(e);for(let e of[...this.root.children])this.cubies.includes(e)||this.root.remove(e);for(let e of this.cubies)e.position.copy(e.userData.home),e.quaternion.identity();for(let e of this.stickers)e.scale.set(1,1,1);this.dirty=!0}info(e){let t=e.getWorldQuaternion(new A2),C=this.root.getWorldQuaternion(new A2).invert(),i=new w(0,0,1).applyQuaternion(t).applyQuaternion(C),H=fC(i),V=e.parent,n=xo(H,V.position,this.n);return{sticker:e,face:H,idx:n,key:H+n,color:e.userData.color,cubie:V}}cells(){return this.stickers.map(e=>this.info(e))}isSolved(){let e={};for(let t of this.stickers){let{face:C,color:i}=this.info(t);if(e[C]&&e[C]!==i)return!1;e[C]=i}return!0}setLook(e,t,C){let i=e.material,H=new F1(Z7[e.userData.color]),V=null,n=H;C?(V=C,n=new F1(16777215)):t==="hidden"?(V=this._texQ(this._rotOf(e)),n=new F1("#5d6679")):t==="locked"?(V=null,n=new F1("#2b303b")):t==="wrong"&&(V=this.texX,n=H.clone().multiplyScalar(.55)),i.map!==V&&(i.map=V,i.needsUpdate=!0),i.color.copy(n),C&&t==="locked"&&i.color.setScalar(.45),this.dirty=!0}_rotOf(e){let t=e.getWorldQuaternion(new A2),C=this.root.getWorldQuaternion(new A2).invert(),i=new w(0,1,0).applyQuaternion(t).applyQuaternion(C),H=new w(0,0,1).applyQuaternion(t).applyQuaternion(C),V=fC(H),n=new w(...hC[V]),a=Math.atan2(new w().crossVectors(n,i).dot(new w(...W8[V])),n.dot(i));return(Math.round(a/B5)%4+4)%4}_texQ(e){if(this.qTexs=this.qTexs||[],!this.qTexs[e]){let t=this.texQ.clone();t.center.set(.5,.5),t.rotation=-e*B5,t.needsUpdate=!0,this.qTexs[e]=t}return this.qTexs[e]}hiddenLabel(e,t=0){let C="h|"+e+"|"+t;if(this.labelCache.has(C))return this.labelCache.get(C);let i=z9(256,(H,V)=>{H.fillStyle="#5d6679",H.fillRect(0,0,V,V);let n=new Path2D(e);H.save(),H.translate(V*.22,V*.22),H.scale(V*.56/24,V*.56/24),H.fillStyle="rgba(255,255,255,0.62)",H.fill(n),H.restore()});return t&&(i.center.set(.5,.5),i.rotation=-t*B5,i.needsUpdate=!0),this.labelCache.set(C,i),i}centerLabel(e,t,C,i=0){let H=e+"|"+(t||"")+"|"+(C||"");if(i){let L=H+"|"+i;if(!this.labelCache.has(L)){let o=this.centerLabel(e,t,C,0).clone();o.center.set(.5,.5),o.rotation=-i*B5,o.needsUpdate=!0,this.labelCache.set(L,o)}return this.labelCache.get(L)}if(this.labelCache.has(H))return this.labelCache.get(H);let V=Z7[e],n=So(V)>.6?"#1d2230":"#ffffff",a=z9(256,(L,o)=>{if(L.fillStyle=V,L.fillRect(0,0,o,o),t){let M=new Path2D(t);L.save(),L.translate(o*.18,o*.18),L.scale(o*.64/24,o*.64/24),L.fillStyle=n,L.fill(M),L.restore()}C&&(L.beginPath(),L.arc(o*.8,o*.2,o*.15,0,Math.PI*2),L.fillStyle=C==="ok"?"#0f8a4a":"#c62a33",L.fill(),L.lineWidth=o*.025,L.strokeStyle="#ffffff",L.stroke(),L.strokeStyle="#ffffff",L.lineWidth=o*.04,L.lineCap="round",L.lineJoin="round",L.beginPath(),C==="ok"?(L.moveTo(o*.73,o*.2),L.lineTo(o*.785,o*.255),L.lineTo(o*.875,o*.15)):(L.moveTo(o*.75,o*.15),L.lineTo(o*.85,o*.25),L.moveTo(o*.85,o*.15),L.lineTo(o*.75,o*.25)),L.stroke())});return this.labelCache.set(H,a),a}pop(e){this.tween(260,t=>{let C=1+Math.sin(t*Math.PI)*.18;e.scale.set(C,C,1)})}turn(e,t=!0,C=190){return new Promise(i=>{this.queue.push({move:e,animate:t,dur:C,resolve:i}),this.turning||this._next()})}get busy(){return this.turning||this.queue.length>0}_next(){let e=this.queue.shift();if(!e){this.turning=!1;return}this.turning=!0;let{ax:t,l:C,d:i}=e.move,H=new m5;this.root.add(H);let V=this.cubies.filter(a=>Math.abs(a.position[t]-C)<.25);for(let a of V)H.attach(a);let n=()=>{H.rotation[t]=i*B5,H.updateMatrixWorld(!0);for(let a of V){this.root.attach(a),a.position.set(U9(a.position.x),U9(a.position.y),U9(a.position.z));let L=new i2().makeRotationFromQuaternion(a.quaternion),o=L.elements;for(let M=0;M<16;M++)o[M]=Math.round(o[M]);a.quaternion.setFromRotationMatrix(L)}this.root.remove(H),this.dirty=!0,e.resolve(),this._next()};if(!e.animate){n();return}this.tween(e.dur,a=>{H.rotation[t]=i*B5*(1-Math.pow(1-a,3))},n)}viewFor(e){let t=new A2,C=(i,H)=>t.setFromEuler(new o5(i,H,0,"XYZ"));switch(e){case"U":C(B5,0);break;case"D":C(-B5,0);break;case"R":C(0,-B5);break;case"L":C(0,B5);break;case"B":C(0,Math.PI);break;default:t.identity()}return this.baseView.clone().multiply(t)}showFace(e,t=450){this.rotateTo(this.viewFor(e),t)}rotateTo(e,t=450){let C=this.root.quaternion.clone();this.tween(t,i=>{let H=i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;this.root.quaternion.slerpQuaternions(C,e,H)})}spin(e=1300){let t=this.root.quaternion.clone();this.tween(e,C=>{let i=1-Math.pow(1-C,3),H=new A2().setFromAxisAngle(new w(0,1,0),i*Math.PI*2);this.root.quaternion.copy(H.multiply(t))})}tween(e,t,C){this.tweens.push({t0:performance.now(),dur:e,fn:t,done:C}),this.dirty=!0}_frame(e){if(this.tweens.length){let t=this.tweens;this.tweens=[];let C=[];for(let i of t){let H=Math.min(1,(e-i.t0)/i.dur);i.fn(H),H<1?C.push(i):i.done&&i.done()}this.tweens=C.concat(this.tweens),this.dirty=!0}if(this.autoSpin&&!this.drag){let t=new A2().setFromAxisAngle(new w(0,1,0),.004);this.root.quaternion.premultiply(t),this.dirty=!0}this.dirty&&(this.dirty=!1,this.renderer.render(this.scene,this.camera))}_pick(e){let t=this.canvas.getBoundingClientRect(),C=new m1((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);this.raycaster.setFromCamera(C,this.camera);let i=this.raycaster.intersectObjects(this.stickers,!1)[0];return i?i.object:null}_screen(e){let t=this.root.localToWorld(e.clone()).project(this.camera),C=this.canvas.getBoundingClientRect();return new m1((t.x+1)/2*C.width,(1-t.y)/2*C.height)}moveFromSwipe(e,t){let C=this.info(e),i=new w(...W8[C.face]),H=C.cubie.position.clone().add(i.clone().multiplyScalar(.5)),V=this._screen(H),n=null;for(let l=0;l<3;l++){if(Math.abs([i.x,i.y,i.z][l])>.5)continue;let u=new w;u.setComponent(l,1);let f=this._screen(H.clone().add(u.clone().multiplyScalar(.5))).sub(V);if(f.length()<.001)continue;let c=f.normalize().dot(t);(!n||Math.abs(c)>Math.abs(n.dot))&&(n={a:u,dot:c})}if(!n||Math.abs(n.dot)<.35)return null;let a=n.a.clone().multiplyScalar(Math.sign(n.dot)),L=new w().crossVectors(i,a),o=[L.x,L.y,L.z],M=o.findIndex(l=>Math.abs(l)>.5),s=fo[M];return{ax:s,l:U9(C.cubie.position[s]),d:Math.sign(o[M])}}_bindInput(){let e=this.canvas;e.addEventListener("pointerdown",C=>{this.drag||(e.setPointerCapture(C.pointerId),this.drag={id:C.pointerId,x:C.clientX,y:C.clientY,lx:C.clientX,ly:C.clientY,s:this._pick(C),mode:null})}),e.addEventListener("pointermove",C=>{let i=this.drag;if(!i||i.id!==C.pointerId)return;let H=C.clientX-i.x,V=C.clientY-i.y;if(!i.mode){if(Math.hypot(H,V)<10)return;if(this.mode==="solve"&&i.s){i.mode="done";let n=this.moveFromSwipe(i.s,new m1(H,V).normalize());n&&this.onSwipe&&this.onSwipe(n);return}i.mode=this.mode==="view"&&!this.allowOrbitInView?"none":"orbit"}if(i.mode==="orbit"){let n=C.clientX-i.lx,a=C.clientY-i.ly,L=.0105,o=new A2().setFromAxisAngle(new w(0,1,0),n*L),M=new A2().setFromAxisAngle(new w(1,0,0),a*L);this.root.quaternion.premultiply(o).premultiply(M),this.dirty=!0}i.lx=C.clientX,i.ly=C.clientY});let t=C=>{let i=this.drag;!i||i.id!==C.pointerId||(this.drag=null,!i.mode&&C.type==="pointerup"&&i.s&&this.mode==="tap"&&this.onTap&&this.onTap(this.info(i.s)))};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}};var X8="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z";var xC="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z";var vC="M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z";var SC="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z";var gC="M9,12C9,11.19 9.3,10.5 9.89,9.89C10.5,9.3 11.19,9 12,9C12.81,9 13.5,9.3 14.11,9.89C14.7,10.5 15,11.19 15,12C15,12.81 14.7,13.5 14.11,14.11C13.5,14.7 12.81,15 12,15C11.19,15 10.5,14.7 9.89,14.11C9.3,13.5 9,12.81 9,12M5.53,8.44L7.31,10.22L5.53,12L7.31,13.78L5.53,15.56L2,12L5.53,8.44M8.44,18.47L10.22,16.69L12,18.47L13.78,16.69L15.56,18.47L12,22L8.44,18.47M18.47,15.56L16.69,13.78L18.47,12L16.69,10.22L18.47,8.44L22,12L18.47,15.56M15.56,5.53L13.78,7.31L12,5.53L10.22,7.31L8.44,5.53L12,2L15.56,5.53Z";var ZC="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z";var _C="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var yC="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z";var bC="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";var TC="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var wC="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.68 7.35 7.38 5.73 9.07 4.1 11 4.1 11.83 4.1 12.41 4.69 13 5.28 13 6.1V12.15L14.6 10.6L16 12L12 16L8 12L9.4 10.6L11 12.15V6.1Q9.1 6.45 8.05 7.94 7 9.43 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 9.8 16.45 8.76 15.9 7.73 15 7V4.68Q16.85 5.55 17.93 7.26 19 9 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M12 11.05Z";var OC="M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z";var EC="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M11 13H7V8.8L8.3 6H10.3L8.9 9H11V13M17 13H13V8.8L14.3 6H16.3L14.9 9H17V13Z";var RC="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var PC="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var BC="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z";var IC="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4";var FC="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z";var DC="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z";var kC="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22";var NC="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z";var UC="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var zC="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z";var GC="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z";var WC="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z";var XC="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z";var qC="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var $C="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var YC="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z";var QC="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var KC="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z";var JC="M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z";var jC="M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z";var er="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";var tr="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z";var Cr="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z";var rr="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";var ir="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";var Hr="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12";var Vr="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z";var nr="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z";var Lr="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z",ar="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z";var or="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z";var sr="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z";var Mr="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var lr="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var _7=[{id:"history",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",icon:YC},{id:"geography",name:"\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F",icon:PC},{id:"literature",name:"\u041B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",icon:SC},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430",icon:GC},{id:"science",name:"\u041D\u0430\u0443\u043A\u0430",icon:vC},{id:"painting",name:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C",icon:qC},{id:"people",name:"\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",icon:xC},{id:"cinema",name:"\u041A\u0438\u043D\u043E",icon:zC},{id:"journalism",name:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438\u043A\u0430",icon:WC},{id:"logic",name:"\u041B\u043E\u0433\u0438\u043A\u0430 \u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0438",icon:KC},{id:"sport",name:"\u0421\u043F\u043E\u0440\u0442",icon:Cr},{id:"cooking",name:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F",icon:yC},{id:"architecture",name:"\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",icon:XC},{id:"quotes",name:"\u041A\u0438\u043D\u043E\u0446\u0438\u0442\u0430\u0442\u044B \u0438 \u043A\u0430\u0434\u0440\u044B",icon:EC},{id:"cartoons",name:"\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",icon:Hr},{id:"games",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",icon:FC},{id:"belarus",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438",icon:ZC},{id:"etymology",name:"\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432",icon:nr},{id:"inventions",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0439",icon:OC},{id:"computers",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B",icon:NC},{id:"my",name:"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",icon:X8}],dr=jC,T2=Object.fromEntries(_7.map(r=>[r.id,r])),$1={hint:UC,undo:sr,view:gC,soundOn:Mr,soundOff:lr,star:rr,starOff:ir,help:DC,close:TC,check:_C,turn:JC,home:kC,shuffle:tr,flag:BC,trophy:or,back:bC,plus:QC,del:RC,save:Lr,load:ar,edit:$C,my:X8,timer:Vr,update:wC,report:IC,share:er},K1=(r,e="ic")=>`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${r}"/></svg>`;var X5=null,u0={on:!0};function W9(){if(!X5){let r=window.AudioContext||window.webkitAudioContext;if(!r)return;X5=new r}X5.state==="suspended"&&X5.resume()}function W5(r,e,t,C="sine",i=.18,H){let V=X5.currentTime+e,n=X5.createOscillator(),a=X5.createGain();n.type=C,n.frequency.setValueAtTime(r,V),H&&n.frequency.exponentialRampToValueAtTime(H,V+t),a.gain.setValueAtTime(1e-4,V),a.gain.exponentialRampToValueAtTime(i,V+.012),a.gain.exponentialRampToValueAtTime(1e-4,V+t),n.connect(a).connect(X5.destination),n.start(V),n.stop(V+t+.02)}function O2(r){if(!(!u0.on||!X5))switch(r){case"ok":W5(660,0,.14),W5(990,.1,.22);break;case"bad":W5(220,0,.28,"triangle",.2,150);break;case"turn":W5(340,0,.06,"triangle",.12,260);break;case"tap":W5(520,0,.05,"sine",.08);break;case"tick":W5(1200,0,.04,"square",.04);break;case"deny":W5(180,0,.12,"square",.05);break;case"win":[523,659,784,1047].forEach((e,t)=>W5(e,t*.11,.3,"sine",.16));break;case"stage":[784,1047].forEach((e,t)=>W5(e,t*.09,.18,"sine",.12));break}}var cr="kubik.my.v1",I5={q:300,a:80,e:400};function go(){try{let r=JSON.parse(localStorage.getItem(cr));if(r&&Array.isArray(r.list))return{list:r.list,next:r.next||r.list.reduce((e,t)=>Math.max(e,t.id),0)+1}}catch{}return{list:[],next:1}}var k2=go();function $8(){try{return localStorage.setItem(cr,JSON.stringify(k2)),!0}catch{return!1}}var b7=r=>k2.list.filter(e=>!e.lv||e.lv===+r),q9=r=>k2.list.find(e=>e.id===+r),y7=r=>String(r||"").replace(/\s+/g," ").trim(),q8=r=>y7(r).toLowerCase().replace(/ё/g,"\u0435");function Y8(r,e){return r.q?r.q.length>I5.q?`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${I5.q} \u0437\u043D\u0430\u043A\u043E\u0432.`:r.a[0]?r.a.slice(1).some(t=>!t)?"\u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430.":r.a.some(t=>t.length>I5.a)?`\u041E\u0442\u0432\u0435\u0442 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${I5.a} \u0437\u043D\u0430\u043A\u043E\u0432.`:new Set(r.a.map(q8)).size!==4?"\u0412\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u043C\u0438.":r.e&&r.e.length>I5.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${I5.e} \u0437\u043D\u0430\u043A\u043E\u0432.`:k2.list.some(t=>t.id!==e&&q8(t.q)===q8(r.q))?"\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C.":"":"\u041D\u0443\u0436\u0435\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.":"\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0430\u043C \u0432\u043E\u043F\u0440\u043E\u0441."}function X9(r){return{q:y7(r.q),a:[0,1,2,3].map(e=>y7(r.a&&r.a[e])),e:y7(r.e),lv:[1,2,3].includes(+r.lv)?+r.lv:0}}function pr(r,e){return e?Object.assign(q9(e),r):k2.list.push({id:k2.next++,...r}),$8()}function ur(r){k2.list=k2.list.filter(e=>e.id!==+r),$8()}var Zo=`# \u041A\u0443\u0431\u0438\u043A: \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.
# \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A, \u0431\u043B\u043E\u043A\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439.
# \u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0431\u043B\u043E\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.
# + \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442
# - \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0438\u0445 \u0442\u0440\u0438)
# = \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C)
# \u0443\u0440\u043E\u0432\u0435\u043D\u044C: 1, 2 \u0438\u043B\u0438 3 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C, \u0442\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F)
# \u0421\u0442\u0440\u043E\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 #, \u0438\u0433\u0440\u0430 \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442.
`;function Ar(r=k2.list){let e=r.map(t=>[t.q,"+ "+t.a[0],...t.a.slice(1).map(C=>"- "+C),...t.e?["= "+t.e]:[],...t.lv?["\u0443\u0440\u043E\u0432\u0435\u043D\u044C: "+t.lv]:[]].join(`
`));return"\uFEFF"+Zo+`
`+e.join(`

`)+`
`}function mr(r){r=String(r).replace(/^﻿/,"").replace(/\r\n?/g,`
`);let e=r.trim();if(e.startsWith("[")||e.startsWith("{"))try{let H=JSON.parse(e);return{items:(Array.isArray(H)?H:H.questions||H.list||[]).map(X9),errors:[]}}catch{}let t=[],C=[];return r.split(/\n\s*\n/).map(H=>H.split(`
`).map(V=>V.trim()).filter(V=>V&&!V.startsWith("#"))).filter(H=>H.length).forEach((H,V)=>{let n={q:[],ok:[],bad:[],e:[],lv:0};for(let L of H){let o=L.match(/^уровень\s*[:\-–—]?\s*(\S+)/i);if(o){n.lv=[1,2,3].includes(+o[1])?+o[1]:0;continue}L[0]==="+"?n.ok.push(L.slice(1)):"-\u2013\u2014".includes(L[0])?n.bad.push(L.slice(1)):L[0]==="="?n.e.push(L.slice(1)):!n.ok.length&&!n.bad.length?n.q.push(L):n.e.push(L)}let a=y7(n.q.join(" ")).slice(0,40)||`\u0431\u043B\u043E\u043A ${V+1}`;if(n.ok.length!==1){C.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u0435\u043D \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0441\u0442\u0440\u043E\u043A\u0430 \u0441 +).`);return}if(n.bad.length!==3){C.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u043D\u044B \u0440\u043E\u0432\u043D\u043E \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430 (\u0441\u0442\u0440\u043E\u043A\u0438 \u0441 -), \u0430 \u0438\u0445 ${n.bad.length}.`);return}t.push(X9({q:n.q.join(" "),a:[n.ok[0],...n.bad],e:n.e.join(" "),lv:n.lv}))}),{items:t,errors:C}}function hr({items:r,errors:e}){let t=0,C=0,i=e.slice();for(let H of r){let V=Y8(H);if(V==="\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C."){C++;continue}if(V){i.push(`\xAB${H.q.slice(0,40)||"\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430"}\xBB: ${V}`);continue}k2.list.push({id:k2.next++,...H}),t++}return $8(),{added:t,dup:C,errors:i}}async function fr(r){let e=await r.arrayBuffer(),t=new TextDecoder("utf-8").decode(e);if(t.includes("\uFFFD"))try{t=new TextDecoder("windows-1251").decode(e)}catch{}return t}var j9="0.7.0",g3={1:{name:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439",scramble:6,about:"\u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F"},2:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",scramble:10,about:"\u0434\u043B\u044F \u044D\u0440\u0443\u0434\u0438\u0442\u043E\u0432"},3:{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",scramble:14,about:"\u0434\u043B\u044F \u0437\u043D\u0430\u0442\u043E\u043A\u043E\u0432"}},_o={1:"#11a85c",2:"#ffd21f",3:"#e0303a"},yo={U:"\u0411\u0435\u043B\u0430\u044F",F:"\u0417\u0435\u043B\u0451\u043D\u0430\u044F",R:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F",B:"\u0421\u0438\u043D\u044F\u044F",L:"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F",D:"\u0416\u0451\u043B\u0442\u0430\u044F"},m0=2,S3={3:{name:"3\xD73",scramble:[6,10,14],bonus:100,free:50,about:"\u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430"},2:{name:"2\xD72",scramble:[4,6,9],bonus:50,free:25,about:"\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438\u0433\u0440\u0430"}},V5=()=>_&&_.size===2?2:3,Z2=()=>V5()*V5(),R0=()=>6*Z2(),yr=()=>S3[V5()].bonus*_.level,n6=()=>S3[V5()].free*_.level,e6=r=>`${r} ${Z3(r,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`,xr=[0,10,15,20,30,45,60,90],bo=r=>r?`${r} \u0441`:"\u043D\u0435\u0442",K8="kubik.state.v1",br="kubik.meta.v1",i1=(r,e=document)=>e.querySelector(r),U2=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ce=r=>{try{return JSON.parse(localStorage.getItem(r))}catch{return null}},Tr=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch{}},$9=r=>Math.floor(Math.random()*r),E0=r=>{for(let e=r.length-1;e>0;e--){let t=$9(e+1);[r[e],r[t]]=[r[t],r[e]]}return r},Z3=(r,e,t,C)=>{let i=r%10,H=r%100;return i===1&&H!==11?e:i>=2&&i<=4&&(H<12||H>14)?t:C},t6=r=>`${r} ${Z3(r,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}`,To=r=>r==="U"||r==="D"?"#1d2230":"#fff",re=(r,e)=>`<span class="sw" style="background:${Z7[r]};color:${To(r)}">${e?K1(T2[e].icon):""}</span>`,g2={},_=Ce(K8),E1=Object.assign({best:0,seen:{},sound:!0,games:0},Ce(br)||{});u0.on=E1.sound;var T1,wr="menu",p2=()=>{_?Tr(K8,_):localStorage.removeItem(K8)},$5=()=>Tr(br,E1);function ie(r,e){return r==="my"?b7(e):g2[r]&&g2[r][e]||[]}function He(r){return _7.filter(e=>ie(e.id,r).length>=Z2()).map(e=>e.id)}var v3=r=>(r.q+"|"+r.a[0]).trim().toLowerCase();function Or(r,e){if(r==="my")return wo(e);let t=ie(r,e),C=r+"-"+e,i=new Set(E1.bad||[]),H=t.map((L,o)=>o).filter(L=>!i.has(v3(t[L]))),V=Z2();H.length<V&&(H=t.map((L,o)=>o));let n=new Set(E1.seen[C]||[]),a=E0(H.filter(L=>!n.has(L)));if(a.length<V){let L=E0(H.filter(o=>n.has(o)));a=a.concat(L),E1.seen[C]=[]}return a.slice(0,V).map(L=>`${r}-${e}-${L}`)}function wo(r){let e=b7(r);if(!e.length)return[];let t="my-"+r,C=new Set(E1.seen[t]||[]),i=E0(e.filter(V=>!C.has(V.id)).map(V=>V.id)),H=Z2();for(i.length<H&&(i=i.concat(E0(e.filter(V=>C.has(V.id)).map(V=>V.id))),E1.seen[t]=[]);i.length<H;)i=i.concat(E0(e.map(V=>V.id)));return _.myq=_.myq||{},i.slice(0,H).map((V,n)=>{let a=`my-${r}-${V}-${n}`,L=q9(V);return _.myq[a]={q:L.q,a:L.a.slice(),e:L.e},a})}function L6(r){if(r.startsWith("my-"))return _.myq[r];if(_.bq&&_.bq[r])return _.bq[r];let[e,t,C]=r.split("-");return ie(e,t)[+C]}function Oo(r){let[e,t,C]=r.split("-");if(!g2[e]&&e!=="my")return;let i=e+"-"+t;E1.seen[i]=E1.seen[i]||[],E1.seen[i].includes(+C)||E1.seen[i].push(+C),$5()}var Er="kubik-bank",Rr="bank.json",J8="kubik.bank.v1",_3=r=>r&&r._meta&&+r._meta.rev||0,vr=r=>Object.keys(r||{}).filter(e=>e!=="_meta").reduce((e,t)=>e+["1","2","3"].reduce((C,i)=>C+(r[t][i]||[]).length,0),0),C6=r=>String(r||"0").split(".").reduce((e,t)=>e*1e3+(+t||0),0);function j8(r){return!r||typeof r!="object"||!r._meta?!1:Object.keys(r).some(e=>e!=="_meta"&&r[e]&&Array.isArray(r[e][1]))}async function Eo(){try{if(window.caches){let r=await(await caches.open(Er)).match(Rr);if(r)return await r.json()}}catch{}return Ce(J8)}async function Ro(r){let e=JSON.stringify(r);try{if(window.caches){await(await caches.open(Er)).put(Rr,new Response(e,{headers:{"Content-Type":"application/json"}})),localStorage.removeItem(J8);return}}catch{}try{localStorage.setItem(J8,e)}catch{}}function Pr(r){let e=r._meta&&r._meta.topics||{};for(let t of Object.keys(r)){if(t==="_meta"||t==="my")continue;let C=e[t]||{};if(T2[t]){C.name&&(T2[t].name=C.name),C.icon&&(T2[t].icon=C.icon);continue}let i={id:t,name:C.name||t,icon:C.icon||dr};_7.splice(_7.findIndex(H=>H.id==="my"),0,i),T2[t]=i}}function Br(r){if(_&&_.stageQ){_.bq=_.bq||{};for(let e of Object.values(_.stageQ))for(let t of e){if(t.startsWith("my-")||_.bq[t])continue;let C=L6(t);C&&(_.bq[t]={q:C.q,a:C.a.slice(),e:C.e})}p2()}for(let e of Object.keys(E1.seen)){let[t,C]=e.split("-");if(t==="my")continue;let i=g2[t]&&g2[t][C]||[],H=r[t]&&r[t][C]||[],V=new Map(H.map((n,a)=>[n.q,a]));E1.seen[e]=E1.seen[e].map(n=>i[n]&&V.get(i[n].q)).filter(n=>n!==void 0)}if(E1.bad&&E1.bad.length){let e=new Set;for(let t of Object.keys(r))if(t!=="_meta")for(let C of["1","2","3"])for(let i of r[t][C]||[])e.add(v3(i));E1.bad=E1.bad.filter(t=>e.has(t))}$5(),g2=r,Pr(g2)}async function Po(){let r=null;try{r=await(await fetch("ru.json?v="+j9)).json()}catch{}let e=await Eo(),t=C=>j8(C)&&C6(C._meta.app)<=C6(j9);g2=t(e)&&(!t(r)||_3(e)>_3(r))?e:r||{},j8(g2)&&Pr(g2)}var Y9=!1;async function Ir(){if(Y9)return;Y9=!0;let r=i1("#m-update");r.classList.add("busy"),r.innerHTML=K1($1.update)+"\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026";let e=null,t="";try{let n=await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"});if(!n.ok)throw new Error(n.status);e=await n.json(),j8(e)||(t="bad",e=null)}catch{t=t||"net"}Y9=!1,r.classList.remove("busy"),Y5();let C=vr(g2),i=n=>(n._meta.date||"").split("-").reverse().join("."),H,V;if(!e)H="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C",V=t==="net"?"\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0430\u0439\u0442\u043E\u043C \u0438\u0433\u0440\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0424\u0430\u0439\u043B \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D. \u0417\u0430\u0433\u0440\u0443\u0437\u0438 ru.json \u0437\u0430\u043D\u043E\u0432\u043E.";else if(C6(e._meta.app)>C6(j9))H="\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B",V="\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0438\u0433\u0440\u044B. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0435\u0449\u0451 \u0440\u0430\u0437.";else if(_3(e)<=_3(g2))H="\u041D\u043E\u0432\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043D\u0435\u0442",V=`\u0423 \u0442\u0435\u0431\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F: ${C} ${Z3(C,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}${g2._meta&&g2._meta.date?`, \u043E\u0442 ${i(g2)}`:""}.`;else{let n=new Set(Object.keys(g2).filter(M=>M!=="_meta"));Br(e),await Ro(e);let a=vr(e),L=a-C,o=Object.keys(e).filter(M=>M!=="_meta"&&!n.has(M)).map(M=>`\xAB${T2[M].name}\xBB`);H="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B",V=`\u0422\u0435\u043F\u0435\u0440\u044C ${a} ${Z3(a,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`+(L>0?`, \u043D\u0430 ${L} \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E.`:L<0?`, \u0431\u044B\u043B\u043E ${C}.`:", \u0447\u0430\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.")+(o.length?` \u041D\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B: ${o.join(", ")}.`:"")+(_&&_.phase==="quiz"?" \u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u044D\u0442\u0430\u043F \u0434\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438.":"")}O2(e?H==="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B"?"ok":"tap":"deny"),N2(`<div class="m-title">${H}</div><div class="m-text"><p>${V}</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Q2)}function Bo(r){let e=[],t=null;for(;e.length<r;){let C="xyz"[$9(3)];if(C===t)continue;let i=V5()===2?.5:1;e.push({ax:C,l:$9(2)?i:-i,d:$9(2)?1:-1}),t=C}return e}function Fr(r){let e=[];for(let t of r){let C=e[e.length-1];if(C&&C.ax===t.ax&&C.l===t.l){let i=((C.d+t.d)%4+4)%4;i===0?e.pop():C.d=i===3?-1:i}else e.push({ax:t.ax,l:t.l,d:t.d})}return e}function Dr(){let r=Fr([..._.scramble,..._.moves]),e=r[r.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}function Io(r){_={v:1,level:r,size:E1.size===2?2:3,phase:"topics",score:0,results:{},topics:R7(r,null),timers:Ve()},p2(),q5()}function Ve(){let r={};for(let e of g5)r[e]=E1.timers&&E1.timers[e]||0;return r}function A0(r){return _&&_.timers&&_.timers[r]||0}function R7(r,e){let t=He(r),C={},i=new Set;if(e)for(let V of g5)t.includes(e[V])&&!i.has(e[V])&&(C[V]=e[V],i.add(e[V]));let H=E0(t.filter(V=>V!=="my"&&!i.has(V)));for(let V of g5)C[V]||(C[V]=H.shift());return C}function Fo(){let r=He(_.level);if(!g5.every(e=>r.includes(_.topics[e]))){_.topics=R7(_.level,_.topics),p2(),q5(),H5(`\u0414\u043B\u044F \xAB\u041C\u043E\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432\xBB \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u043D\u0443\u0436\u043D\u043E ${e6(Z2())}, \u0433\u0440\u0430\u043D\u044C \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430`);return}Object.assign(_,{bq:{},phase:"quiz",scramble:Bo(S3[V5()].scramble[_.level-1]),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0}}),p2(),kr()}function P7(r){wr=r,document.body.classList.remove("loading");for(let e of document.querySelectorAll(".scr"))e.classList.toggle("on",e.id==="scr-"+r);requestAnimationFrame(Q9)}function Q9(){let r=i1("#stage"),e=i1(`#scr-${wr} .cube-slot`);if(!e){r.style.display="none";return}let t=e.getBoundingClientRect();Object.assign(r.style,{display:"block",left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.height+"px"}),T1.resize()}function Y5(){jr(),Q2(),T1.setSize(_?V5():E1.size===2?2:3),T1.reset(),T1.mode="view",T1.autoSpin=!0;for(let C of T1.stickers)T1.setLook(C,"color");let r=i1("#m-continue");_&&_.phase!=="final"?(r.hidden=!1,r.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${_.level}${V5()===2?" \xB7 2\xD72":""}`):r.hidden=!0,i1("#m-sound").innerHTML=K1(u0.on?$1.soundOn:$1.soundOff)+(u0.on?"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0451\u043D":"\u0417\u0432\u0443\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),Y9||(i1("#m-update").innerHTML=K1($1.update)+"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),i1("#m-best").textContent=E1.best&&E1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434: ${E1.best} \xB7 \u043D\u0430 2\xD72: ${E1.best2}`:E1.best?`\u0420\u0435\u043A\u043E\u0440\u0434: ${E1.best}`:E1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 2\xD72: ${E1.best2}`:"";let e=(E1.reports||[]).length,t=i1("#m-reports");t.hidden=!e,t.innerHTML=K1($1.report)+`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${e}`,P7("menu")}function K9(){let r=E1.size===2?2:3,e=S3[r];i1("#lv-size").innerHTML=[3,2].map(t=>`<button data-size="${t}" class="${t===r?"on":""}"><b>${S3[t].name}</b><small>${S3[t].about}, ${e6(6*t*t)}</small></button>`).join(""),i1("#lv-lead").textContent=`\u041A\u0443\u0431\u0438\u043A ${e.name}: \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 6 \u044D\u0442\u0430\u043F\u043E\u0432 \u043F\u043E ${e6(r*r)}, \u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A. \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043D\u0430\u0447\u0430\u0442\u044C?`,i1("#lv-list").innerHTML=[1,2,3].map(t=>`<button class="lv" data-lv="${t}">
    <span class="num" style="background:${_o[t]}">${t}</span>
    <span><b>${g3[t].name}</b><span>${g3[t].about}; \u043A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${t6(e.scramble[t-1])}</span></span></button>`).join(""),P7("levels")}function q5(){Q2(),i1("#tp-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${_.level} \xB7 ${g3[_.level].name}${V5()===2?" \xB7 2\xD72":""}`,i1("#tp-lead").textContent=`\u0412\u044B\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438. \u0413\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u044D\u0442\u0430\u043F \u0438\u0437 ${e6(Z2())}, \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.`;let r=He(_.level),e=b7(_.level).length,t=r.includes("my")?"":`<option disabled>\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u043D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${Z2()-e}</option>`;_.timers||(_.timers=Ve());let C=g5.every(i=>A0(i)===A0("U"));i1("#tp-list").innerHTML=`<label class="tall">${K1($1.timer)}<span>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043E\u0442\u0432\u0435\u0442</span>
    <select id="tp-time"><option value="" disabled${C?"":" selected"}>\u0440\u0430\u0437\u043D\u043E\u0435</option>${xr.map(i=>`<option value="${i}"${C&&A0("U")===i?" selected":""}>${i?`\u0432\u0441\u0435\u043C \u043F\u043E ${i} \u0441`:"\u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select>
    <span class="chev">${K1("M7 10l5 5 5-5z")}</span></label>`+g5.map(i=>`<div class="trow"><label class="tl">${re(i,_.topics[i])}
    <span class="tcol"><small>${yo[i]} \u0433\u0440\u0430\u043D\u044C</small>
    <select data-face="${i}">${r.map(H=>`<option value="${H}"${_.topics[i]===H?" selected":""}>${T2[H].name}</option>`).join("")}${t}</select></span></label>
    <label class="tm${A0(i)?" on":""}">${K1($1.timer)}<span>${bo(A0(i))}</span>
    <select data-tface="${i}" aria-label="\u0422\u0430\u0439\u043C\u0435\u0440">${xr.map(H=>`<option value="${H}"${A0(i)===H?" selected":""}>${H?`${H} \u0441\u0435\u043A\u0443\u043D\u0434`:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select></label></div>`).join("")+`<button class="link mylink" id="tp-my">${K1($1.my)}\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: ${e}${e<Z2()?` \u0438\u0437 ${Z2()} \u043D\u0443\u0436\u043D\u044B\u0445`:""}. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>`,i1("#tp-rand").innerHTML=K1($1.shuffle)+"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",P7("topics")}function kr(){if(Q2(),i1("#g-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${_.level} \xB7 ${g3[_.level].name}${V5()===2?" \xB7 2\xD72":""}`,T1.autoSpin=!1,Do(),T1.rotateTo(T1.baseView,350),P7("game"),_.phase==="quiz"){if(!_.pending&&_.stage&&y3(_.stage)===Z2()&&(_.stage=null,p2(),b3()),!_.pending&&O7()>=R0()){setTimeout(ae,300);return}T1.mode="tap",ne(),_.pending&&zr()}else _.phase==="solve"?(T1.mode="solve",P0()):_.phase==="result"&&(T1.mode="view",P0(),r6());h0()}function Do(){T1.setSize(V5()),T1.reset();for(let r of _.scramble)T1.turn(r,!1);if(_.phase!=="quiz")for(let r of _.moves)T1.turn(r,!1);b3()}function y3(r){let e=0;for(let t=0,C=Z2();t<C;t++)_.cells[r+t]&&e++;return e}function O7(){return Object.keys(_.cells).length}function b3(){let r=_&&_.phase==="quiz";for(let e of T1.cells()){let t=e.sticker;if(!_){T1.setLook(t,"color");continue}let C=r?_.cells[e.key]:null,i=r&&_.stage&&e.face!==_.stage;if(V5()===2&&r&&!C&&!i)T1.setLook(t,"hidden",T1.hiddenLabel(T2[_.topics[e.face]].icon,T1._rotOf(t)));else if(t.userData.center){let H=T1.centerLabel(t.userData.color,T2[_.topics[t.userData.color]].icon,C==="c"?"ok":C==="w"?"bad":null,T1._rotOf(t));T1.setLook(t,i?"locked":"color",H)}else r?T1.setLook(t,C==="c"?"color":C==="w"?"wrong":i?"locked":"hidden"):T1.setLook(t,"color")}}function h0(r){if(!_)return;let e=i1("#g-tip");if(e&&_.phase!=="quiz"&&(e.innerHTML=Nr()),i1("#st-score").textContent=_.score,i1("#st-turns").textContent=_.free?"\u221E":_.tokens,_.phase==="quiz"?(i1("#st-l3").textContent="\u0412\u043E\u043F\u0440\u043E\u0441\u044B",i1("#st-3").textContent=`${O7()}/${R0()}`):(i1("#st-l3").textContent="\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0445\u043E\u0434\u043E\u0432",i1("#st-3").textContent=_.moves.length),r){let t=i1(".pill.turns");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}}function ne(){let r;if(_.stage){let t=y3(_.stage),C=A0(_.stage);r=`\u042D\u0442\u0430\u043F ${_.order.length} \u0438\u0437 6 \xB7 <b>${T2[_.topics[_.stage]].name}</b> \xB7 ${t} \u0438\u0437 ${Z2()}${C?` \xB7 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 ${C} \u0441`:""}.<br>\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0438 \u044D\u0442\u043E\u0439 \u0433\u0440\u0430\u043D\u0438.`}else O7()?r="\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0433\u0440\u0430\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0435\u0451 \u043A\u043B\u0435\u0442\u043A\u0443.":r="\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0430\u043F.<br>\u041A\u0443\u0431\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C.";let e=g5.map(t=>{let C=y3(t);return`<button class="chip ${_.stage===t?"on":C===Z2()?"done":""}" data-face="${t}">${re(t,_.topics[t])}<span>${C}/${Z2()}</span></button>`}).join("");i1("#g-foot").innerHTML=`<div class="tip">${r}</div><div class="chips">${e}</div>`}function ko(){return Fr([..._.scramble,..._.moves]).reduce((r,e)=>r+Math.abs(e.d),0)}function Nr(){if(_.phase!=="solve")return"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.";if(_.free)return`\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C <b>${n6()}</b> \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.`;if(_.tokens<1)return"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0445\u043E\u0434 \u0438\u043B\u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443 \u0437\u0430 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.";let r=ko();return`\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043B\u043E\u0439. \u0412\u0440\u0430\u0449\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443.<br>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0441\u043E\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0437\u0430 <b>${r}</b> ${Z3(r,"\u0445\u043E\u0434","\u0445\u043E\u0434\u0430","\u0445\u043E\u0434\u043E\u0432")} (${m0*r} ${Z3(m0*r,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}).`}function P0(){let r=_.phase==="solve";i1("#g-foot").innerHTML=`<div class="tip" id="g-tip">${Nr()}</div>
  <div class="tools">
    <button class="tool" id="t-undo"${r?"":" disabled"}>${K1($1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    ${r&&!_.free&&_.tokens<1?`<button class="tool hint" id="t-free">${K1($1.turn)}\u0421\u0430\u043C<em>+${n6()}</em></button>`:`<button class="tool hint" id="t-hint"${r&&!_.free?"":" disabled"}>${K1($1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430<em>\u2212${m0}</em></button>`}
    <button class="tool" id="t-view">${K1($1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="t-end"${r?"":" disabled"}>${K1($1.flag)}\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C</button>
  </div>`}function Ur(r){if(!_||_.phase!=="quiz"||_.pending||!i1("#sheet").hidden)return;if(W9(),_.cells[r.key]){H5("\u041D\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0442\u044B \u0443\u0436\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B"),O2("deny");return}if(_.stage&&_.stage!==r.face){H5(`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438 \u044D\u0442\u0430\u043F \xAB${T2[_.topics[_.stage]].name}\xBB`),O2("deny"),T1.showFace(_.stage);return}if(!_.stage){_.stage=r.face,_.order.push(r.face);let t=Or(_.topics[r.face],_.level);if(t.length<Z2()){_.stage=null,_.order.pop(),H5("\u0421\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u044B. \u0414\u043E\u0431\u0430\u0432\u044C \u0438\u0445 \u0432 \u043C\u0435\u043D\u044E \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB."),O2("deny");return}_.stageQ[r.face]=t,O2("stage"),b3()}let e=_.stageQ[r.face][y3(r.face)];_.pending={key:r.key,face:r.face,qid:e,order:E0([0,1,2,3]),limit:A0(r.face)},p2(),ne(),zr()}function zr(){let r=_.pending,e=L6(r.qid),t=T2[_.topics[r.face]];i1("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${re(r.face,_.topics[r.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${_.order.indexOf(r.face)+1} \xB7 \u0432\u043E\u043F\u0440\u043E\u0441 ${y3(r.face)+1} \u0438\u0437 ${Z2()}</span></div>
    ${r.limit?'<div class="qtime"><span class="tbar"><i></i></span><b></b></div>':""}
    <div class="q-text">${U2(e.q)}</div>
    <div class="ans">${r.order.map((C,i)=>`<button data-i="${i}">${U2(e.a[C])}</button>`).join("")}</div>
    <div class="after" hidden></div>`,i1("#sheet").hidden=!1,No()}var J9=null,Q8=0;function T7(){J9&&(clearInterval(J9),J9=null)}function No(){T7();let r=_&&_.pending;if(!r||!r.limit)return;r.deadline||(r.deadline=Date.now()+r.limit*1e3,p2()),Q8=0;let e=()=>{if((_&&_.pending)!==r){T7();return}let C=Math.max(0,r.deadline-Date.now()),i=Math.ceil(C/1e3),H=i1(".qtime");H&&(H.querySelector("b").textContent=`${i} \u0441`,H.querySelector("i").style.width=(100*C/(r.limit*1e3)).toFixed(1)+"%",H.classList.toggle("low",i<=5)),i<=5&&i>0&&i!==Q8&&(Q8=i,O2("tick")),C<=0&&(T7(),Le(-1))};e(),J9=setInterval(e,200)}function Le(r){let e=_.pending;if(!e)return;T7();let t=r===-1;t&&(_.lv.late=(_.lv.late||0)+1);let C=L6(e.qid),i=e.order[r]===0,H=_.level*10;_.cells[e.key]=i?"c":"w",i?(_.tokens++,_.lv.correct++,_.lv.points+=H,_.score+=H):_.lv.wrong++,Oo(e.qid),_.lastKey=e.key,_.pending=null,p2(),O2(i?"ok":"bad");let V=i1(".ans");V.classList.add("done"),V.querySelectorAll("button").forEach((a,L)=>{a.disabled=!0,e.order[L]===0?a.classList.add("ok"):L===r&&a.classList.add("bad")});let n=i1(".after");n.hidden=!1,n.innerHTML=`<div class="verdict ${i?"ok":"bad"}">${K1(i?$1.check:t?$1.timer:$1.close)}${i?"\u0412\u0435\u0440\u043D\u043E, +1 \u043F\u043E\u0432\u043E\u0440\u043E\u0442":t?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E":"\u041D\u0435\u0432\u0435\u0440\u043D\u043E"}</div>
    ${C.e?`<div class="exp">${U2(C.e)}</div>`:""}<button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button>
    ${e.qid.startsWith("my-")?"":`<button class="link rep-open" id="q-rep" data-qid="${U2(e.qid)}">${K1($1.report)}\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?</button>`}`,n.scrollIntoView({block:"nearest",behavior:"smooth"}),h0(i)}function Gr(){jr(),b3();let r=T1.cells().find(t=>t.key===_.lastKey);r&&T1.pop(r.sticker);let e=_.lastKey[0];if(y3(e)===Z2()){let t=[...Array(Z2()).keys()].filter(C=>_.cells[e+C]==="c").length;_.stage=null,p2(),b3(),O7()<R0()&&H5(`\u042D\u0442\u0430\u043F \xAB${T2[_.topics[e]].name}\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D: ${t} \u0438\u0437 ${Z2()}`)}ne(),h0(),O7()>=R0()&&setTimeout(ae,500)}function ae(){_.phase="solve",p2(),b3(),P0(),h0(),T1.mode="solve",T1.spin(900);let r=_.lv.correct;if(_.tokens<1){N2(`<div class="m-title">\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0442\u043E\u0436\u0435 \u043D\u0435\u0442.</p>
      <p>${oe()}</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(e=>e==="free"?a6():e==="retry"?Qr():B7(!1));return}N2(`<div class="m-title">\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A</div><div class="m-text">
    <p>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438: \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ${r} \u0438\u0437 ${R0()}. \u0422\u044B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B ${t6(_.tokens)}.</p>
    <p>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${t6(_.scramble.length)}. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</p>
    <p>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u043D\u043E \u0441\u0442\u043E\u0438\u0442 ${m0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434.</p></div>`,[["ok","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C","primary"]])}async function ee(r,e,t){_.tokens-=e,_.moves.push({...r,c:e}),p2(),h0(),O2("turn"),await T1.turn(r,!0,t?420:190),Yr(),_&&_.phase==="solve"&&!_.free&&_.tokens<1&&(P0(),Wr())}function oe(){return`\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438 \u0431\u0435\u0437 \u0441\u0447\u0451\u0442\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C ${n6()} \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 ${yr()}.`}function Wr(){N2(`<div class="m-title">\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D.</p><p>${oe()}</p>
    <p>\u041C\u043E\u0436\u043D\u043E \u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0445\u043E\u0434\u044B: \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u0440\u043D\u0451\u0442 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["back","\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0443\u0431\u0438\u043A\u0443",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(r=>r==="free"?a6():r==="end"?B7(!1):null)}function a6(){_.free=!0,p2(),P0(),h0(!0),H5("\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435.")}function Xr(r){if(!(!_||_.phase!=="solve"||T1.queue.length>1)){if(W9(),_.free){ee(r,0);return}if(_.tokens<1){Wr(),O2("deny");return}ee(r,1)}}function qr(){if(!_||_.phase!=="solve"||T1.busy)return;let r=_.moves.pop();if(!r){H5("\u041E\u0442\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E");return}_.free||(_.tokens+=1),p2(),P0(),h0(!0),O2("turn"),T1.turn({ax:r.ax,l:r.l,d:-r.d}).then(Yr)}function $r(){if(!_||_.phase!=="solve"||T1.busy||_.free)return;if(_.tokens<m0){H5(`\u0414\u043B\u044F \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043D\u0443\u0436\u043D\u043E ${m0} \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430`),O2("deny");return}let r=Dr();r&&(_.lv.hints++,ee(r,m0,!0))}function Yr(){!_||_.phase!=="solve"||T1.busy||T1.isSolved()&&B7(!0)}var Sr=r=>Math.ceil(R0()*(r===3?49:38)/54);function Uo(r){return r.solved?r.correct>=Sr(3)?3:r.correct>=Sr(2)?2:1:0}function B7(r){let e=_.level,t={correct:_.lv.correct,points:_.lv.points,solved:r,hints:_.lv.hints,free:!!_.free,bonus:r?_.free?n6():yr():0,left:r&&!_.free?_.tokens:0,leftPts:r&&!_.free?_.tokens*5*e:0};t.total=t.points+t.bonus+t.leftPts,t.stars=Uo(t),_.score+=t.bonus+t.leftPts,_.results[e]=t,_.phase="result",p2(),h0(),P0(),T1.mode="view",r?(O2("win"),T1.spin(1400),setTimeout(r6,1500)):r6()}function r6(){let r=_.level,e=_.results[r],t=[1,2,3].map(V=>K1(V<=e.stars?$1.star:$1.starOff,"ic"+(V<=e.stars?"":" off"))).join(""),C=[["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${e.correct} \u0438\u0437 ${R0()}`],["\u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B",e.points],...e.solved&&e.free?[["\u041F\u0440\u0438\u0437\u043E\u0432\u044B\u0435: \u0441\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u043C",e.bonus]]:[],...e.solved&&!e.free?[["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A",e.bonus],[`\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${t6(e.left)}`,e.leftPts]]:[]],i=`<div class="m-title">${e.solved?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${r} \u043F\u0440\u043E\u0439\u0434\u0435\u043D`:"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="stars">${t}</div>
    <div class="rows">${C.map(([V,n])=>`<div><span>${V}</span><b>${n}</b></div>`).join("")}
    <div class="tot"><span>\u0412\u0441\u0435\u0433\u043E \u043E\u0447\u043A\u043E\u0432</span><b>${_.score}</b></div></div>`,H=[];r<3?e.solved?H.push(["next","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]):(H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["next","\u0414\u0430\u043B\u044C\u0448\u0435 \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430",""])):(e.solved||H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["final","\u0418\u0442\u043E\u0433\u0438 \u0438\u0433\u0440\u044B",e.solved?"primary":""])),H.push(["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]),N2(i,H).then(V=>{V==="next"?zo():V==="retry"?Qr():V==="final"?Go():Y5()})}function zo(){let r=_.topics;_.level++,_.phase="topics",_.topics=R7(_.level,r),p2(),q5()}function Qr(){_.score-=_.lv.points+(_.results[_.level]&&_.results[_.level].bonus+_.results[_.level].leftPts||0),delete _.results[_.level],_.phase="topics",p2(),q5()}function Go(){let r=_.score,e=V5()===2?"best2":"best",t=r>(E1[e]||0);t&&(E1[e]=r),E1.games++,$5();let C=[1,2,3].filter(i=>_.results[i]).map(i=>{let H=_.results[i];return`<div><span>${g3[i].name}${H.solved?"":", \u043A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</span><b>${H.total}</b></div>`}).join("");_=null,p2(),N2(`<div class="m-title">\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430</div><div class="stars">${K1($1.trophy)}</div>
    <div class="rows">${C}<div class="tot"><span>\u0418\u0442\u043E\u0433\u043E</span><b>${r}</b></div></div>
    <div class="m-text" style="text-align:center">${t?"\u042D\u0442\u043E \u043D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434.":`\u0420\u0435\u043A\u043E\u0440\u0434${e==="best2"?" \u043D\u0430 2\xD72":""}: ${E1[e]}.`}</div>`,[["new","\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(i=>i==="new"?K9():Y5())}var Kr="menu",Wo={0:"\u043B\u044E\u0431\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",1:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 1",2:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 2",3:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 3"};function E7(r){r&&(Kr=r),Q2(),o6();let e=[1,2,3].map(t=>b7(t).length);i1("#my-lead").innerHTML=k2.list.length?`\u0413\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C, \u0435\u0441\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 (\u0434\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4). \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445.<br>
      <span class="mycount">${[1,2,3].map((t,C)=>`<b class="${e[C]>=9?"ok":""}">\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${t}: ${e[C]}${e[C]<9?` (\u0435\u0449\u0451 ${9-e[C]})`:""}</b>`).join("")}</span>`:"\u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u0438\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0433\u0440\u0430\u043D\u0435\u0439 \u043A\u0443\u0431\u0438\u043A\u0430. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0435\u0442\u043E\u043A \u043D\u0430 \u0433\u0440\u0430\u043D\u0438. \u0414\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4.<br><br>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0437\u0434\u0435\u0441\u044C \u0438\u043B\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0432 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u043C \u0444\u0430\u0439\u043B\u0435 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\xBB.",i1("#my-list").innerHTML=k2.list.map((t,C)=>`<button class="myq" data-id="${t.id}">
    <span class="myq-n">${C+1}</span><span class="myq-t"><b>${U2(t.q)}</b><small><span class="okc">${U2(t.a[0])}</span> \xB7 ${Wo[t.lv||0]}</small></span></button>`).join(""),i1("#my-add").innerHTML=K1($1.plus)+"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",i1("#my-save").innerHTML=K1($1.save)+"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",i1("#my-load").innerHTML=K1($1.load)+"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",i1("#my-save").disabled=!k2.list.length,P7("my")}function Xo(){Kr==="topics"&&_&&_.phase==="topics"?(_.topics=R7(_.level,_.topics),p2(),q5()):Y5()}var w7=0,i6=0;function gr(r){let e=r?q9(r):null;w7=e?e.id:0,i6=e&&e.lv||0;let t=(C,i)=>`<input id="e-a${C}" maxlength="${I5.a}" autocomplete="off" placeholder="${i}" value="${e?U2(e.a[C]):""}">`;i1("#ecard").innerHTML=`<div class="m-title">${e?"\u0412\u043E\u043F\u0440\u043E\u0441":"\u041D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"}</div>
    <label class="fl"><span>\u0412\u043E\u043F\u0440\u043E\u0441</span><textarea id="e-q" rows="3" maxlength="${I5.q}">${e?U2(e.q):""}</textarea></label>
    <label class="fl okf"><span>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442</span>${t(0,"")}</label>
    <div class="fl badf"><span>\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B</span>${t(1,"\u043F\u0435\u0440\u0432\u044B\u0439")}${t(2,"\u0432\u0442\u043E\u0440\u043E\u0439")}${t(3,"\u0442\u0440\u0435\u0442\u0438\u0439")}</div>
    <label class="fl"><span>\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C</span><textarea id="e-e" rows="2" maxlength="${I5.e}">${e?U2(e.e||""):""}</textarea></label>
    <div class="fl"><span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C</span><div class="seg">${[0,1,2,3].map(C=>`<button data-elv="${C}" class="${C===i6?"on":""}">${C||"\u041B\u044E\u0431\u043E\u0439"}</button>`).join("")}</div></div>
    <div class="e-err" id="e-err"></div>
    <div class="m-btns"><button class="btn primary" id="e-ok">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
    ${e?`<button class="btn ghost danger" id="e-del">${K1($1.del)}\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441</button>`:""}
    <button class="btn ghost" id="e-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button></div>`,i1("#edit").hidden=!1,i1("#ecard").scrollTop=0}function o6(){i1("#edit").hidden=!0}function qo(){let r=X9({q:i1("#e-q").value,a:[0,1,2,3].map(C=>i1("#e-a"+C).value),e:i1("#e-e").value,lv:i6}),e=Y8(r,w7);if(e){i1("#e-err").textContent=e,O2("deny");return}if(!pr(r,w7)){i1("#e-err").textContent="\u041F\u0430\u043C\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0430, \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F.";return}let t=!w7;if(o6(),E7(),t){H5(`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D. \u0412\u0441\u0435\u0433\u043E: ${k2.list.length}`);let C=i1("#my-list").lastElementChild;C&&C.scrollIntoView({block:"nearest"})}}function $o(){let r=w7;o6(),N2('<div class="m-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441?</div>',[["yes","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{Q2(),e==="yes"&&(ur(r),H5("\u0412\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0430\u043B\u0451\u043D")),E7()})}async function Yo(){let r="\u041A\u0443\u0431\u0438\u043A - \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.txt",e=new File([Ar()],r,{type:"text/plain"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(C){if(C&&C.name==="AbortError")return}let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=r,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},2e3)}async function Qo(r){if(!r)return;let e;try{e=hr(mr(await fr(r)))}catch{e={added:0,dup:0,errors:["\u0424\u0430\u0439\u043B \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F."]}}let t=[`<p>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: <b>${e.added}</b>.${e.dup?` \u0423\u0436\u0435 \u0431\u044B\u043B\u0438, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B: ${e.dup}.`:""}</p>`];!e.added&&!e.dup&&!e.errors.length&&t.push("<p>\u0412 \u0444\u0430\u0439\u043B\u0435 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0431\u0440\u0430\u0437\u0435\u0446: \u0432\u043E\u043F\u0440\u043E\u0441, \u0441\u0442\u0440\u043E\u043A\u0430 \xAB+ \u0432\u0435\u0440\u043D\u044B\u0439\xBB, \u0442\u0440\u0438 \u0441\u0442\u0440\u043E\u043A\u0438 \xAB- \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439\xBB.</p>"),e.errors.length&&t.push(`<p>\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:</p><ul class="errs">${e.errors.slice(0,12).map(C=>`<li>${U2(C)}</li>`).join("")}${e.errors.length>12?`<li>\u0438 \u0435\u0449\u0451 ${e.errors.length-12}</li>`:""}</ul>`),E7(),N2(`<div class="m-title">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</div><div class="m-text">${t.join("")}</div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Q2)}var Ko=["\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442","\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E","\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0438","\u0423\u0441\u0442\u0430\u0440\u0435\u043B\u043E","\u041E\u043F\u0435\u0447\u0430\u0442\u043A\u0430","\u0414\u0440\u0443\u0433\u043E\u0435"],H6="",se="";function Jo(r){let e=i1(".after");se=e.innerHTML,H6="",e.innerHTML=`<div class="rep" data-qid="${U2(r)}"><div class="rep-t">\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C?</div>
    <div class="rep-r">${Ko.map(t=>`<button data-rr="${U2(t)}">${t}</button>`).join("")}</div>
    <label class="fl"><textarea id="rep-note" rows="2" maxlength="300" placeholder="\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0435\u0448\u044C (\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C)"></textarea></label>
    <div class="e-err" id="rep-err"></div>
    <div class="two-sm"><button class="btn ghost" id="rep-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button><button class="btn primary" id="rep-send">${K1($1.share)}\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div></div>`,e.scrollIntoView({block:"nearest",behavior:"smooth"})}function Me(r){let e=`\u041A\u0443\u0431\u0438\u043A ${j9}, \u0431\u0430\u0437\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u2116${_3(g2)}`,t=(C,i)=>[r.length>1?`${i+1}.`:"",`\u0422\u0435\u043C\u0430: ${T2[C.t]&&T2[C.t].name||C.t}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${C.l}`,`\u0412\u043E\u043F\u0440\u043E\u0441: ${C.q}`,`\u0412\u0435\u0440\u043D\u044B\u0439 \u043F\u043E \u0438\u0433\u0440\u0435: ${C.a[0]}`,`\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B: ${C.a.slice(1).join(" / ")}`,C.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435: ${C.e}`:"",`\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A: ${C.r}`,C.n?`\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ${C.n}`:""].filter(Boolean).join(`
`);return`${e}
${r.length>1?`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${r.length}`:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435"}

${r.map(t).join(`

`)}`}function Jr(r,e){return navigator.share?navigator.share({title:r,text:e}).then(()=>"sent",t=>t&&t.name==="AbortError"?"cancel":Zr(e)):Zr(e)}function Zr(r){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(()=>"copied",()=>"kept"):Promise.resolve("kept")}function jo(){let r=i1(".rep");if(!H6){i1("#rep-err").textContent="\u0412\u044B\u0431\u0435\u0440\u0438, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A",O2("deny");return}let e=r.dataset.qid,t=L6(e);if(!t)return;let[C,i]=e.split("-"),H={d:new Date().toISOString().slice(0,10),t:C,l:+i,q:t.q,a:t.a.slice(),e:t.e||"",r:H6,n:i1("#rep-note").value.trim().slice(0,300),rev:_3(g2)};E1.reports=(E1.reports||[]).filter(a=>v3(a)!==v3(H)).concat(H).slice(-200),E1.bad=E1.bad||[],E1.bad.includes(v3(H))||E1.bad.push(v3(H)),$5();let V=i1(".after");V.innerHTML=se;let n=i1("#q-rep");n&&(n.outerHTML=`<div class="rep-ok">${K1($1.check)}\u0421\u043F\u0430\u0441\u0438\u0431\u043E. \u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430, \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F.</div>`),O2("tap"),Jr("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435",Me([H])).then(a=>{a==="copied"?H5("\u0422\u0435\u043A\u0441\u0442 \u0436\u0430\u043B\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"):a!=="sent"&&H5("\u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430: \u043C\u0435\u043D\u044E \u2192 \xAB\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445\xBB")})}function es(){i1(".after").innerHTML=se}function ts(){let r=E1.reports||[];if(!r.length)return;let e=r.slice().reverse().map(t=>`<li><b>${U2(t.q)}</b><small>${U2(T2[t.t]&&T2[t.t].name||t.t)}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.l} \xB7 ${U2(t.r)}${t.n?" \xB7 "+U2(t.n):""}</small></li>`).join("");N2(`<div class="m-title">\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${r.length}</div><div class="m-text">
    <p>\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u0433\u0440\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0434\u0430\u0451\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B, \u043E\u043D \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442 \u0438\u0445 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.</p>
    <ul class="replist">${e}</ul></div>`,[["send",K1($1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435","primary"],["clear","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A","ghost danger"],["ok","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(t=>{Q2(),t==="send"?Jr("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445",Me(r)).then(C=>{C==="copied"&&H5("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")}):t==="clear"&&N2('<div class="m-title">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A?</div><div class="m-text"><p>\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C\u0441\u044F, \u043F\u043E\u043A\u0430 \u0438\u0445 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u044F\u0442.</p></div>',[["yes","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(C=>{Q2(),C==="yes"&&(E1.reports=[],$5(),Y5())})})}var V6=null;function N2(r,e){i1("#mcard").innerHTML=r+`<div class="m-btns">${e.map(([C,i,H])=>`<button class="btn ${H||""}" data-b="${C}">${i}</button>`).join("")}</div>`;let t=i1("#modal");return t.hidden=!1,t.classList.add("center"),i1("#mcard").scrollTop=0,new Promise(C=>{V6=C})}function Q2(){i1("#modal").hidden=!0,V6=null}function jr(){T7(),i1("#sheet").hidden=!0}var _r;function H5(r){let e=i1("#toast");e.textContent=r,e.classList.add("on"),clearTimeout(_r),_r=setTimeout(()=>e.classList.remove("on"),2400)}function te(){return`<div class="m-title">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</div><div class="help">
  <p>\u041A\u0443\u0431\u0438\u043A \u2014 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u0430 \u0438\u0437 \u0442\u0440\u0451\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439: \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439, \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u0439. \u041A\u0430\u0436\u0434\u0430\u044F \u0433\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u044D\u0442\u0430\u043F, \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.</p>
  <h3>\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u0443\u0431\u0438\u043A\u0430</h3><ul>
  <li><b>3\xD73</b> \u2014 \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430: 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043D\u0430 \u0433\u0440\u0430\u043D\u0438, 54 \u043D\u0430 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0441\u0431\u043E\u0440\u043A\u0430 \u043F\u043E\u0441\u043B\u043E\u0436\u043D\u0435\u0435.</li>
  <li><b>2\xD72</b> \u2014 \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438\u0433\u0440\u0430: 4 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u0433\u0440\u0430\u043D\u0438, 24 \u043D\u0430 \u0443\u0440\u043E\u0432\u0435\u043D\u044C. \u0422\u0430\u043A\u043E\u0439 \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0435\u0440\u0451\u0442 \u0438 \u0442\u043E\u0442, \u043A\u0442\u043E \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u043B. \u041E\u0447\u043A\u043E\u0432 \u0437\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u0432\u0434\u0432\u043E\u0435 \u043C\u0435\u043D\u044C\u0448\u0435.</li>
  <li>\u0420\u0430\u0437\u043C\u0435\u0440 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u043D\u043E\u0432\u043E\u0439 \u0438\u0433\u0440\u043E\u0439 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430 \u0432\u0441\u0435 \u0442\u0440\u0438 \u0443\u0440\u043E\u0432\u043D\u044F.</li></ul>
  <h3>\u0412\u043E\u043F\u0440\u043E\u0441\u044B</h3><ul>
  <li>\u041F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0438\u0437 \u0448\u0435\u0441\u0442\u0438 \u0433\u0440\u0430\u043D\u0435\u0439.</li>
  <li>\u041E\u0434\u043D\u0443 \u0433\u0440\u0430\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0438\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C: \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0432 \u043C\u0435\u043D\u044E. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0443\u0440\u043E\u0432\u043D\u044F, \u0434\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u2014 4.</li>
  <li>\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0438 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u044D\u0442\u0430\u043F. \u041F\u043E\u043A\u0430 \u043E\u043D \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D, \u0434\u0440\u0443\u0433\u0438\u0435 \u0433\u0440\u0430\u043D\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B.</li>
  <li>\u0417\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u2014 \u043E\u0447\u043A\u0438 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041A\u043B\u0435\u0442\u043A\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u0432\u043E\u0439 \u0446\u0432\u0435\u0442.</li>
  <li>\u041D\u0430\u0448\u0451\u043B \u043E\u0448\u0438\u0431\u043A\u0443 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435 \u2014 \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?\xBB \u043F\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u043E\u043C. \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F, \u0430 \u0436\u0430\u043B\u043E\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B.</li>
  <li>\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043C\u043E\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0430\u0439\u043C\u0435\u0440: \u043E\u0442 10 \u0434\u043E 90 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442. \u041D\u0435 \u0443\u0441\u043F\u0435\u043B \u2014 \u043E\u0442\u0432\u0435\u0442 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D \u043A\u0430\u043A \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439. \u0412\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443.</li></ul>
  <h3>\u0421\u0431\u043E\u0440\u043A\u0430</h3><ul>
  <li>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D. \u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438, \u0435\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</li>
  <li>\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</li>
  <li>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0437\u0430 ${m0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</li>
  <li>\u041A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u2014 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C\u0438, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0417\u0430 \u0442\u0430\u043A\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.</li>
  <li>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E. \u041A\u043D\u043E\u043F\u043A\u0430 \xAB\u0412\u0438\u0434\xBB \u0441\u0442\u0430\u0432\u0438\u0442 \u0435\u0433\u043E \u0440\u043E\u0432\u043D\u043E.</li></ul>
  <h3>\u041E\u0447\u043A\u0438</h3><ul>
  <li>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: 10, 20 \u0438\u043B\u0438 30 \u043E\u0447\u043A\u043E\u0432 \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044E.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A 3\xD73: 100, 200 \u0438\u043B\u0438 300 \u043E\u0447\u043A\u043E\u0432 \u0438 \u0435\u0449\u0451 \u043F\u043E 5, 10 \u0438\u043B\u0438 15 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041D\u0430 2\xD72 \u0431\u043E\u043D\u0443\u0441 50, 100 \u0438\u043B\u0438 150.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C: 50, 100 \u0438\u043B\u0438 150 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432, \u043D\u0430 2\xD72 \u2014 25, 50 \u0438\u043B\u0438 75.</li>
  <li>\u0417\u0432\u0451\u0437\u0434\u044B: \u043E\u0434\u043D\u0430 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A, \u0434\u0432\u0435, \u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0438 70% \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 (38 \u0438\u0437 54 \u0438\u043B\u0438 17 \u0438\u0437 24), \u0442\u0440\u0438 \u2014 \u043F\u0440\u0438 90% (49 \u0438\u0437 54 \u0438\u043B\u0438 22 \u0438\u0437 24).</li>
  <li>\u0420\u0435\u043A\u043E\u0440\u0434\u044B \u0434\u043B\u044F 3\xD73 \u0438 2\xD72 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.</li></ul>
  <p>\u0418\u0433\u0440\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430, \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F.</p></div>`}function Cs(){document.addEventListener("pointerdown",W9,{capture:!0});for(let e of document.querySelectorAll('[data-go="menu"]'))e.innerHTML=K1($1.back);i1("#g-home").innerHTML=K1($1.home),i1("#my-back").innerHTML=K1($1.back),i1("#m-my").innerHTML=K1($1.my)+"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",i1("#g-help").innerHTML=K1($1.help),document.querySelectorAll('[data-go="menu"]').forEach(e=>e.addEventListener("click",Y5)),i1("#m-new").addEventListener("click",()=>{_?N2('<div class="m-title">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430?</div><div class="m-text"><p>\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.</p></div>',[["yes","\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{Q2(),e==="yes"&&(_=null,p2(),K9())}):K9()}),i1("#m-continue").addEventListener("click",()=>{_&&(_.phase==="topics"?q5():kr())}),i1("#m-help").addEventListener("click",()=>N2(te(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Q2)),i1("#g-help").addEventListener("click",()=>{let e=_&&_.phase==="result";N2(te(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(()=>{Q2(),e&&r6()})}),i1("#m-sound").addEventListener("click",()=>{u0.on=!u0.on,E1.sound=u0.on,$5(),Y5()}),i1("#g-home").addEventListener("click",Y5),i1("#m-update").addEventListener("click",Ir),i1("#m-reports").addEventListener("click",ts),i1("#lv-size").addEventListener("click",e=>{let t=e.target.closest("[data-size]");if(t){E1.size=+t.dataset.size,$5(),T1.setSize(E1.size),T1.reset();for(let C of T1.stickers)T1.setLook(C,"color");O2("tap"),K9()}}),i1("#lv-list").addEventListener("click",e=>{let t=e.target.closest("[data-lv]");t&&Io(+t.dataset.lv)}),i1("#tp-list").addEventListener("change",e=>{let t=e.target.closest("select");if(!t)return;if(t.id==="tp-time"||t.dataset.tface){_.timers||(_.timers=Ve());let n=+t.value;t.id==="tp-time"?g5.forEach(a=>{_.timers[a]=n}):_.timers[t.dataset.tface]=n,E1.timers={..._.timers},$5(),p2(),q5();return}let C=t.dataset.face,i=t.value,H=_.topics[C],V=g5.find(n=>n!==C&&_.topics[n]===i);V&&(_.topics[V]=H),_.topics[C]=i,p2(),q5()}),i1("#tp-rand").addEventListener("click",()=>{_.topics=R7(_.level,null),p2(),q5()}),i1("#tp-go").addEventListener("click",Fo),i1("#m-my").addEventListener("click",()=>E7("menu")),i1("#tp-list").addEventListener("click",e=>{e.target.closest("#tp-my")&&(e.preventDefault(),E7("topics"))}),i1("#my-back").addEventListener("click",Xo),i1("#my-add").addEventListener("click",()=>gr(0)),i1("#my-list").addEventListener("click",e=>{let t=e.target.closest("[data-id]");t&&gr(+t.dataset.id)}),i1("#my-save").addEventListener("click",Yo),i1("#my-load").addEventListener("click",()=>{i1("#my-file").value="",i1("#my-file").click()}),i1("#my-file").addEventListener("change",e=>Qo(e.target.files[0])),i1("#ecard").addEventListener("click",e=>{let t=e.target.closest("[data-elv]");if(t){i6=+t.dataset.elv,i1("#ecard").querySelectorAll("[data-elv]").forEach(C=>C.classList.toggle("on",C===t));return}e.target.closest("#e-ok")?qo():e.target.closest("#e-del")?$o():e.target.closest("#e-cancel")&&o6()}),i1("#g-foot").addEventListener("click",e=>{let t=e.target.closest(".chip");if(t){T1.showFace(t.dataset.face);return}let C=e.target.closest(".tool");!C||C.disabled||(C.id==="t-undo"?qr():C.id==="t-hint"?$r():C.id==="t-free"?N2(`<div class="m-title">\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443?</div><div class="m-text"><p>${oe()}</p></div>`,[["yes","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(i=>{Q2(),i==="yes"&&a6()}):C.id==="t-view"?T1.rotateTo(T1.baseView):C.id==="t-end"&&N2('<div class="m-title">\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C?</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F. \u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.</p></div>',[["yes","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C","primary"],["no","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435","ghost"]]).then(i=>{Q2(),i==="yes"&&B7(!1)}))}),i1("#qcard").addEventListener("click",e=>{let t=e.target.closest(".ans button");if(t&&!t.disabled){Le(+t.dataset.i);return}if(e.target.closest("#q-next")){Gr();return}let C=e.target.closest("#q-rep");if(C){Jo(C.dataset.qid);return}let i=e.target.closest("[data-rr]");if(i){H6=i.dataset.rr,i1("#rep-err").textContent="",i1(".rep-r").querySelectorAll("button").forEach(H=>H.classList.toggle("on",H===i));return}e.target.closest("#rep-send")?jo():e.target.closest("#rep-cancel")&&es()}),i1("#mcard").addEventListener("click",e=>{let t=e.target.closest("[data-b]");if(!t||!V6)return;let C=V6;Q2(),C(t.dataset.b)}),window.addEventListener("resize",()=>requestAnimationFrame(Q9));let r=new ResizeObserver(()=>requestAnimationFrame(Q9));document.querySelectorAll(".cube-slot").forEach(e=>r.observe(e)),window.addEventListener("orientationchange",()=>setTimeout(Q9,300))}async function rs(){T1=new G9(i1("#stage")),T1.onTap=Ur,T1.onSwipe=Xr,Cs(),await Po(),_&&(_.v!==1||!g3[_.level])&&(_=null,p2()),Y5(),E1.helped||(E1.helped=1,$5(),N2(te(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]])),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}window.__kubik={get S(){return _},get META(){return E1},reportText:Me,pickQuestions:Or,get cube(){return T1},get BANK(){return g2},updateBank:Ir,switchBank:Br,onTap:Ur,answer:Le,afterAnswer:Gr,hint:$r,undo:qr,hintMove:Dr,finishLevel:B7,toSolve:ae,onSwipe:Xr,startFree:a6};rs();
