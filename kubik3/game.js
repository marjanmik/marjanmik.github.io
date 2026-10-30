var be=0,y6=1,Te=2;var C7=1,we=2,o3=3,r0=0,z2=1,g5=2,Z5=0,s3=1,b6=2,T6=3,w6=4,Oe=5;var v0=100,Ee=101,Re=102,Pe=103,Be=104,Ie=200,Fe=201,De=202,ke=203,O6=204,E6=205,Ne=206,Ue=207,ze=208,Ge=209,We=210,Xe=211,qe=212,Ye=213,$e=214,Q7=0,K7=1,J7=2,$0=3,j7=4,e4=5,t4=6,C4=7,R6=0,Qe=1,Ke=2,c5=0,P6=1,B6=2,I6=3,F6=4,D6=5,k6=6,N6=7;var U6=300,i0=301,S0=302,R4=303,P4=304,r7=306,r4=1e3,x5=1001,i4=1002,_2=1003,Je=1004;var i7=1005;var y2=1006,B4=1007;var H0=1008;var X2=1009,z6=1010,G6=1011,M3=1012,I4=1013,p5=1014,u5=1015,A5=1016,F4=1017,D4=1018,l3=1020,W6=35902,X6=35899,q6=1021,Y6=1022,r5=1023,v5=1026,V0=1027,$6=1028,k4=1029,n0=1030,N4=1031;var U4=1033,H7=33776,V7=33777,n7=33778,L7=33779,z4=35840,G4=35841,W4=35842,X4=35843,q4=36196,Y4=37492,$4=37496,Q4=37488,K4=37489,a7=37490,J4=37491,j4=37808,e9=37809,t9=37810,C9=37811,r9=37812,i9=37813,H9=37814,V9=37815,n9=37816,L9=37817,a9=37818,o9=37819,s9=37820,M9=37821,l9=36492,d9=36494,c9=36495,p9=36283,u9=36284,o7=36285,A9=36286;var y3=2300,H4=2301,Y7=2302,u6=2303,A6=2400,m6=2401,h6=2402;var je=3200;var m9=0,et=1,I5="",E2="srgb",b3="srgb-linear",T3="linear",J1="srgb";var $7=7680;var tt=519,Ct=512,rt=513,it=514,h9=515,Ht=516,Vt=517,f9=518,nt=519,Lt=35044;var Q6="300 es",M5=2e3,Q0=2001;function Mr(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lr(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function w3(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function at(){let r=w3("canvas");return r.style.display="block",r}var J8={},K0=null;function K6(...r){let e="THREE."+r.shift();K0?K0("log",e,...r):console.log(e,...r)}function ot(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function w1(...r){r=ot(r);let e="THREE."+r.shift();if(K0)K0("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function O1(...r){r=ot(r);let e="THREE."+r.shift();if(K0)K0("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function f0(...r){let e=r.join(" ");e in J8||(J8[e]=!0,w1(...r))}function st(r,e,t){return new Promise(function(C,i){function H(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(H,t);break;default:C()}}setTimeout(H,t)})}var Mt={[Q7]:K7,[J7]:t4,[j7]:C4,[$0]:e4,[K7]:Q7,[t4]:J7,[C4]:j7,[e4]:$0},S5=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let C=this._listeners;C[e]===void 0&&(C[e]=[]),C[e].indexOf(t)===-1&&C[e].push(t)}hasEventListener(e,t){let C=this._listeners;return C===void 0?!1:C[e]!==void 0&&C[e].indexOf(t)!==-1}removeEventListener(e,t){let C=this._listeners;if(C===void 0)return;let i=C[e];if(i!==void 0){let H=i.indexOf(t);H!==-1&&i.splice(H,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let C=t[e.type];if(C!==void 0){e.target=this;let i=C.slice(0);for(let H=0,V=i.length;H<V;H++)i[H].call(this,e);e.target=null}}},w2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],j8=1234567,S3=Math.PI/180,J0=180/Math.PI;function g0(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,C=Math.random()*4294967295|0;return(w2[r&255]+w2[r>>8&255]+w2[r>>16&255]+w2[r>>24&255]+"-"+w2[e&255]+w2[e>>8&255]+"-"+w2[e>>16&15|64]+w2[e>>24&255]+"-"+w2[t&63|128]+w2[t>>8&255]+"-"+w2[t>>16&255]+w2[t>>24&255]+w2[C&255]+w2[C>>8&255]+w2[C>>16&255]+w2[C>>24&255]).toLowerCase()}function N1(r,e,t){return Math.max(e,Math.min(t,r))}function J6(r,e){return(r%e+e)%e}function dr(r,e,t,C,i){return C+(r-e)*(i-C)/(t-e)}function cr(r,e,t){return r!==e?(t-r)/(e-r):0}function g3(r,e,t){return(1-t)*r+t*e}function pr(r,e,t,C){return g3(r,e,1-Math.exp(-t*C))}function ur(r,e=1){return e-Math.abs(J6(r,e*2)-e)}function Ar(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mr(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function hr(r,e){return r+Math.floor(Math.random()*(e-r+1))}function fr(r,e){return r+Math.random()*(e-r)}function xr(r){return r*(.5-Math.random())}function vr(r){r!==void 0&&(j8=r);let e=j8+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sr(r){return r*S3}function gr(r){return r*J0}function Zr(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function _r(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function br(r,e,t,C,i){let H=Math.cos,V=Math.sin,n=H(t/2),a=V(t/2),L=H((e+C)/2),o=V((e+C)/2),M=H((e-C)/2),s=V((e-C)/2),l=H((C-e)/2),u=V((C-e)/2);switch(i){case"XYX":r.set(n*o,a*M,a*s,n*L);break;case"YZY":r.set(a*s,n*o,a*M,n*L);break;case"ZXZ":r.set(a*M,a*s,n*o,n*L);break;case"XZX":r.set(n*o,a*u,a*l,n*L);break;case"YXY":r.set(a*l,n*o,a*u,n*L);break;case"ZYZ":r.set(a*u,a*l,n*o,n*L);break;default:w1("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function X0(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function F2(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var j6={DEG2RAD:S3,RAD2DEG:J0,generateUUID:g0,clamp:N1,euclideanModulo:J6,mapLinear:dr,inverseLerp:cr,lerp:g3,damp:pr,pingpong:ur,smoothstep:Ar,smootherstep:mr,randInt:hr,randFloat:fr,randFloatSpread:xr,seededRandom:vr,degToRad:Sr,radToDeg:gr,isPowerOfTwo:Zr,ceilPowerOfTwo:_r,floorPowerOfTwo:yr,setQuaternionFromProperEuler:br,normalize:F2,denormalize:X0},H8=class H8{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,C=this.y,i=e.elements;return this.x=i[0]*t+i[3]*C+i[6],this.y=i[1]*t+i[4]*C+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=N1(this.x,e.x,t.x),this.y=N1(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=N1(this.x,e,t),this.y=N1(this.y,e,t),this}clampLength(e,t){let C=this.length();return this.divideScalar(C||1).multiplyScalar(N1(C,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let C=this.dot(e)/t;return Math.acos(N1(C,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,C=this.y-e.y;return t*t+C*C}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,C){return this.x=e.x+(t.x-e.x)*C,this.y=e.y+(t.y-e.y)*C,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let C=Math.cos(t),i=Math.sin(t),H=this.x-e.x,V=this.y-e.y;return this.x=H*C-V*i+e.x,this.y=H*i+V*C+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};H8.prototype.isVector2=!0;var m1=H8,p2=class{constructor(e=0,t=0,C=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=C,this._w=i}static slerpFlat(e,t,C,i,H,V,n){let a=C[i+0],L=C[i+1],o=C[i+2],M=C[i+3],s=H[V+0],l=H[V+1],u=H[V+2],f=H[V+3];if(M!==f||a!==s||L!==l||o!==u){let c=a*s+L*l+o*u+M*f;c<0&&(s=-s,l=-l,u=-u,f=-f,c=-c);let d=1-n;if(c<.9995){let v=Math.acos(c),_=Math.sin(v);d=Math.sin(d*v)/_,n=Math.sin(n*v)/_,a=a*d+s*n,L=L*d+l*n,o=o*d+u*n,M=M*d+f*n}else{a=a*d+s*n,L=L*d+l*n,o=o*d+u*n,M=M*d+f*n;let v=1/Math.sqrt(a*a+L*L+o*o+M*M);a*=v,L*=v,o*=v,M*=v}}e[t]=a,e[t+1]=L,e[t+2]=o,e[t+3]=M}static multiplyQuaternionsFlat(e,t,C,i,H,V){let n=C[i],a=C[i+1],L=C[i+2],o=C[i+3],M=H[V],s=H[V+1],l=H[V+2],u=H[V+3];return e[t]=n*u+o*M+a*l-L*s,e[t+1]=a*u+o*s+L*M-n*l,e[t+2]=L*u+o*l+n*s-a*M,e[t+3]=o*u-n*M-a*s-L*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,C,i){return this._x=e,this._y=t,this._z=C,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let C=e._x,i=e._y,H=e._z,V=e._order,n=Math.cos,a=Math.sin,L=n(C/2),o=n(i/2),M=n(H/2),s=a(C/2),l=a(i/2),u=a(H/2);switch(V){case"XYZ":this._x=s*o*M+L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M-s*l*u;break;case"YXZ":this._x=s*o*M+L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M+s*l*u;break;case"ZXY":this._x=s*o*M-L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M-s*l*u;break;case"ZYX":this._x=s*o*M-L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M+s*l*u;break;case"YZX":this._x=s*o*M+L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M-s*l*u;break;case"XZY":this._x=s*o*M-L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M+s*l*u;break;default:w1("Quaternion: .setFromEuler() encountered an unknown order: "+V)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let C=t/2,i=Math.sin(C);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(C),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,C=t[0],i=t[4],H=t[8],V=t[1],n=t[5],a=t[9],L=t[2],o=t[6],M=t[10],s=C+n+M;if(s>0){let l=.5/Math.sqrt(s+1);this._w=.25/l,this._x=(o-a)*l,this._y=(H-L)*l,this._z=(V-i)*l}else if(C>n&&C>M){let l=2*Math.sqrt(1+C-n-M);this._w=(o-a)/l,this._x=.25*l,this._y=(i+V)/l,this._z=(H+L)/l}else if(n>M){let l=2*Math.sqrt(1+n-C-M);this._w=(H-L)/l,this._x=(i+V)/l,this._y=.25*l,this._z=(a+o)/l}else{let l=2*Math.sqrt(1+M-C-n);this._w=(V-i)/l,this._x=(H+L)/l,this._y=(a+o)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let C=e.dot(t)+1;return C<1e-8?(C=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=C):(this._x=0,this._y=-e.z,this._z=e.y,this._w=C)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=C),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(N1(this.dot(e),-1,1)))}rotateTowards(e,t){let C=this.angleTo(e);if(C===0)return this;let i=Math.min(1,t/C);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let C=e._x,i=e._y,H=e._z,V=e._w,n=t._x,a=t._y,L=t._z,o=t._w;return this._x=C*o+V*n+i*L-H*a,this._y=i*o+V*a+H*n-C*L,this._z=H*o+V*L+C*a-i*n,this._w=V*o-C*n-i*a-H*L,this._onChangeCallback(),this}slerp(e,t){let C=e._x,i=e._y,H=e._z,V=e._w,n=this.dot(e);n<0&&(C=-C,i=-i,H=-H,V=-V,n=-n);let a=1-t;if(n<.9995){let L=Math.acos(n),o=Math.sin(L);a=Math.sin(a*L)/o,t=Math.sin(t*L)/o,this._x=this._x*a+C*t,this._y=this._y*a+i*t,this._z=this._z*a+H*t,this._w=this._w*a+V*t,this._onChangeCallback()}else this._x=this._x*a+C*t,this._y=this._y*a+i*t,this._z=this._z*a+H*t,this._w=this._w*a+V*t,this.normalize();return this}slerpQuaternions(e,t,C){return this.copy(e).slerp(t,C)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),C=Math.random(),i=Math.sqrt(1-C),H=Math.sqrt(C);return this.set(i*Math.sin(e),i*Math.cos(e),H*Math.sin(t),H*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V8=class V8{constructor(e=0,t=0,C=0){this.x=e,this.y=t,this.z=C}set(e,t,C){return C===void 0&&(C=this.z),this.x=e,this.y=t,this.z=C,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ee.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ee.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,C=this.y,i=this.z,H=e.elements;return this.x=H[0]*t+H[3]*C+H[6]*i,this.y=H[1]*t+H[4]*C+H[7]*i,this.z=H[2]*t+H[5]*C+H[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,C=this.y,i=this.z,H=e.elements,V=1/(H[3]*t+H[7]*C+H[11]*i+H[15]);return this.x=(H[0]*t+H[4]*C+H[8]*i+H[12])*V,this.y=(H[1]*t+H[5]*C+H[9]*i+H[13])*V,this.z=(H[2]*t+H[6]*C+H[10]*i+H[14])*V,this}applyQuaternion(e){let t=this.x,C=this.y,i=this.z,H=e.x,V=e.y,n=e.z,a=e.w,L=2*(V*i-n*C),o=2*(n*t-H*i),M=2*(H*C-V*t);return this.x=t+a*L+V*M-n*o,this.y=C+a*o+n*L-H*M,this.z=i+a*M+H*o-V*L,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,C=this.y,i=this.z,H=e.elements;return this.x=H[0]*t+H[4]*C+H[8]*i,this.y=H[1]*t+H[5]*C+H[9]*i,this.z=H[2]*t+H[6]*C+H[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=N1(this.x,e.x,t.x),this.y=N1(this.y,e.y,t.y),this.z=N1(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=N1(this.x,e,t),this.y=N1(this.y,e,t),this.z=N1(this.z,e,t),this}clampLength(e,t){let C=this.length();return this.divideScalar(C||1).multiplyScalar(N1(C,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,C){return this.x=e.x+(t.x-e.x)*C,this.y=e.y+(t.y-e.y)*C,this.z=e.z+(t.z-e.z)*C,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let C=e.x,i=e.y,H=e.z,V=t.x,n=t.y,a=t.z;return this.x=i*a-H*n,this.y=H*V-C*a,this.z=C*n-i*V,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let C=e.dot(this)/t;return this.copy(e).multiplyScalar(C)}projectOnPlane(e){return q9.copy(this).projectOnVector(e),this.sub(q9)}reflect(e){return this.sub(q9.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let C=this.dot(e)/t;return Math.acos(N1(C,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,C=this.y-e.y,i=this.z-e.z;return t*t+C*C+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,C){let i=Math.sin(t)*e;return this.x=i*Math.sin(C),this.y=Math.cos(t)*e,this.z=i*Math.cos(C),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,C){return this.x=e*Math.sin(t),this.y=C,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),C=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=C,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,C=Math.sqrt(1-t*t);return this.x=C*Math.cos(e),this.y=t,this.z=C*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};V8.prototype.isVector3=!0;var T=V8,q9=new T,ee=new p2,n8=class n8{constructor(e,t,C,i,H,V,n,a,L){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,C,i,H,V,n,a,L)}set(e,t,C,i,H,V,n,a,L){let o=this.elements;return o[0]=e,o[1]=i,o[2]=n,o[3]=t,o[4]=H,o[5]=a,o[6]=C,o[7]=V,o[8]=L,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,C=e.elements;return t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=C[3],t[4]=C[4],t[5]=C[5],t[6]=C[6],t[7]=C[7],t[8]=C[8],this}extractBasis(e,t,C){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),C.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let C=e.elements,i=t.elements,H=this.elements,V=C[0],n=C[3],a=C[6],L=C[1],o=C[4],M=C[7],s=C[2],l=C[5],u=C[8],f=i[0],c=i[3],d=i[6],v=i[1],_=i[4],h=i[7],S=i[2],g=i[5],y=i[8];return H[0]=V*f+n*v+a*S,H[3]=V*c+n*_+a*g,H[6]=V*d+n*h+a*y,H[1]=L*f+o*v+M*S,H[4]=L*c+o*_+M*g,H[7]=L*d+o*h+M*y,H[2]=s*f+l*v+u*S,H[5]=s*c+l*_+u*g,H[8]=s*d+l*h+u*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],C=e[1],i=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8];return t*V*o-t*n*L-C*H*o+C*n*a+i*H*L-i*V*a}invert(){let e=this.elements,t=e[0],C=e[1],i=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8],M=o*V-n*L,s=n*a-o*H,l=L*H-V*a,u=t*M+C*s+i*l;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/u;return e[0]=M*f,e[1]=(i*L-o*C)*f,e[2]=(n*C-i*V)*f,e[3]=s*f,e[4]=(o*t-i*a)*f,e[5]=(i*H-n*t)*f,e[6]=l*f,e[7]=(C*a-L*t)*f,e[8]=(V*t-C*H)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,C,i,H,V,n){let a=Math.cos(H),L=Math.sin(H);return this.set(C*a,C*L,-C*(a*V+L*n)+V+e,-i*L,i*a,-i*(-L*V+a*n)+n+t,0,0,1),this}scale(e,t){return f0("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Y9.makeScale(e,t)),this}rotate(e){return f0("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Y9.makeRotation(-e)),this}translate(e,t){return f0("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Y9.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),C=Math.sin(e);return this.set(t,-C,0,C,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,C=e.elements;for(let i=0;i<9;i++)if(t[i]!==C[i])return!1;return!0}fromArray(e,t=0){for(let C=0;C<9;C++)this.elements[C]=e[C+t];return this}toArray(e=[],t=0){let C=this.elements;return e[t]=C[0],e[t+1]=C[1],e[t+2]=C[2],e[t+3]=C[3],e[t+4]=C[4],e[t+5]=C[5],e[t+6]=C[6],e[t+7]=C[7],e[t+8]=C[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n8.prototype.isMatrix3=!0;var E1=n8,Y9=new E1,te=new E1().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ce=new E1().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tr(){let r={enabled:!0,workingColorSpace:b3,spaces:{},convert:function(i,H,V){return this.enabled===!1||H===V||!H||!V||(this.spaces[H].transfer===J1&&(i.r=B5(i.r),i.g=B5(i.g),i.b=B5(i.b)),this.spaces[H].primaries!==this.spaces[V].primaries&&(i.applyMatrix3(this.spaces[H].toXYZ),i.applyMatrix3(this.spaces[V].fromXYZ)),this.spaces[V].transfer===J1&&(i.r=q0(i.r),i.g=q0(i.g),i.b=q0(i.b))),i},workingToColorSpace:function(i,H){return this.convert(i,this.workingColorSpace,H)},colorSpaceToWorking:function(i,H){return this.convert(i,H,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===I5?T3:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,H=this.workingColorSpace){return i.fromArray(this.spaces[H].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,H,V){return i.copy(this.spaces[H].toXYZ).multiply(this.spaces[V].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,H){return f0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,H)},toWorkingColorSpace:function(i,H){return f0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,H)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],C=[.3127,.329];return r.define({[b3]:{primaries:e,whitePoint:C,transfer:T3,toXYZ:te,fromXYZ:Ce,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:E2},outputColorSpaceConfig:{drawingBufferColorSpace:E2}},[E2]:{primaries:e,whitePoint:C,transfer:J1,toXYZ:te,fromXYZ:Ce,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:E2}}}),r}var W1=Tr();function B5(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function q0(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var E0,V4=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let C;if(e instanceof HTMLCanvasElement)C=e;else{E0===void 0&&(E0=w3("canvas")),E0.width=e.width,E0.height=e.height;let i=E0.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),C=E0}return C.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=w3("canvas");t.width=e.width,t.height=e.height;let C=t.getContext("2d");C.drawImage(e,0,0,e.width,e.height);let i=C.getImageData(0,0,e.width,e.height),H=i.data;for(let V=0;V<H.length;V++)H[V]=B5(H[V]/255)*255;return C.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let C=0;C<t.length;C++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[C]=Math.floor(B5(t[C]/255)*255):t[C]=B5(t[C]);return{data:t,width:e.width,height:e.height}}else return w1("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wr=0,j0=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=g0(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let C={uuid:this.uuid,url:""},i=this.data;if(i!==null){let H;if(Array.isArray(i)){H=[];for(let V=0,n=i.length;V<n;V++)i[V].isDataTexture?H.push($9(i[V].image)):H.push($9(i[V]))}else H=$9(i);C.url=H}return t||(e.images[this.uuid]=C),C}};function $9(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?V4.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(w1("Texture: Unable to serialize Texture."),{})}var Or=0,Q9=new T,k2=class r extends S5{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,C=x5,i=x5,H=y2,V=H0,n=r5,a=X2,L=r.DEFAULT_ANISOTROPY,o=I5){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Or++}),this.uuid=g0(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=C,this.wrapT=i,this.magFilter=H,this.minFilter=V,this.anisotropy=L,this.format=n,this.internalFormat=null,this.type=a,this.offset=new m1(0,0),this.repeat=new m1(1,1),this.center=new m1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new E1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Q9).x}get height(){return this.source.getSize(Q9).y}get depth(){return this.source.getSize(Q9).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let C=e[t];if(C===void 0){w1(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){w1(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&C&&i.isVector2&&C.isVector2||i&&C&&i.isVector3&&C.isVector3||i&&C&&i.isMatrix3&&C.isMatrix3?i.copy(C):this[t]=C}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let C={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(C.userData=this.userData),t||(e.textures[this.uuid]=C),C}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U6)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r4:e.x=e.x-Math.floor(e.x);break;case x5:e.x=e.x<0?0:1;break;case i4:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case r4:e.y=e.y-Math.floor(e.y);break;case x5:e.y=e.y<0?0:1;break;case i4:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};k2.DEFAULT_IMAGE=null;k2.DEFAULT_MAPPING=U6;k2.DEFAULT_ANISOTROPY=1;var L8=class L8{constructor(e=0,t=0,C=0,i=1){this.x=e,this.y=t,this.z=C,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,C,i){return this.x=e,this.y=t,this.z=C,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,C=this.y,i=this.z,H=this.w,V=e.elements;return this.x=V[0]*t+V[4]*C+V[8]*i+V[12]*H,this.y=V[1]*t+V[5]*C+V[9]*i+V[13]*H,this.z=V[2]*t+V[6]*C+V[10]*i+V[14]*H,this.w=V[3]*t+V[7]*C+V[11]*i+V[15]*H,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,C,i,H,a=e.elements,L=a[0],o=a[4],M=a[8],s=a[1],l=a[5],u=a[9],f=a[2],c=a[6],d=a[10];if(Math.abs(o-s)<.01&&Math.abs(M-f)<.01&&Math.abs(u-c)<.01){if(Math.abs(o+s)<.1&&Math.abs(M+f)<.1&&Math.abs(u+c)<.1&&Math.abs(L+l+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(L+1)/2,h=(l+1)/2,S=(d+1)/2,g=(o+s)/4,y=(M+f)/4,m=(u+c)/4;return _>h&&_>S?_<.01?(C=0,i=.707106781,H=.707106781):(C=Math.sqrt(_),i=g/C,H=y/C):h>S?h<.01?(C=.707106781,i=0,H=.707106781):(i=Math.sqrt(h),C=g/i,H=m/i):S<.01?(C=.707106781,i=.707106781,H=0):(H=Math.sqrt(S),C=y/H,i=m/H),this.set(C,i,H,t),this}let v=Math.sqrt((c-u)*(c-u)+(M-f)*(M-f)+(s-o)*(s-o));return Math.abs(v)<.001&&(v=1),this.x=(c-u)/v,this.y=(M-f)/v,this.z=(s-o)/v,this.w=Math.acos((L+l+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=N1(this.x,e.x,t.x),this.y=N1(this.y,e.y,t.y),this.z=N1(this.z,e.z,t.z),this.w=N1(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=N1(this.x,e,t),this.y=N1(this.y,e,t),this.z=N1(this.z,e,t),this.w=N1(this.w,e,t),this}clampLength(e,t){let C=this.length();return this.divideScalar(C||1).multiplyScalar(N1(C,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,C){return this.x=e.x+(t.x-e.x)*C,this.y=e.y+(t.y-e.y)*C,this.z=e.z+(t.z-e.z)*C,this.w=e.w+(t.w-e.w)*C,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};L8.prototype.isVector4=!0;var o2=L8,n4=class extends S5{constructor(e=1,t=1,C={}){super(),C=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:y2,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},C),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=C.depth,this.scissor=new o2(0,0,e,t),this.scissorTest=!1,this.viewport=new o2(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:C.depth},H=new k2(i),V=C.count;for(let n=0;n<V;n++)this.textures[n]=H.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(C),this.depthBuffer=C.depthBuffer,this.stencilBuffer=C.stencilBuffer,this.resolveColorBuffer=C.resolveColorBuffer,this.resolveDepthBuffer=C.resolveDepthBuffer,this.resolveStencilBuffer=C.resolveStencilBuffer,this.storeMultisampledColorBuffer=C.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=C.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=C.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=C.depthTexture,this.samples=C.samples,this.multiview=C.multiview,this.useArrayDepthTexture=C.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:y2,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let C=0;C<this.textures.length;C++)this.textures[C].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,C=1){if(this.width!==e||this.height!==t||this.depth!==C){this.width=e,this.height=t,this.depth=C;for(let i=0,H=this.textures.length;i<H;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=C,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,C=e.textures.length;t<C;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new j0(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},W2=class extends n4{constructor(e=1,t=1,C={}){super(e,t,C),this.isWebGLRenderTarget=!0}},O3=class extends k2{constructor(e=null,t=1,C=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:C,depth:i},this.magFilter=_2,this.minFilter=_2,this.wrapR=x5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var L4=class extends k2{constructor(e=null,t=1,C=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:C,depth:i},this.magFilter=_2,this.minFilter=_2,this.wrapR=x5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var E4=class E4{constructor(e,t,C,i,H,V,n,a,L,o,M,s,l,u,f,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,C,i,H,V,n,a,L,o,M,s,l,u,f,c)}set(e,t,C,i,H,V,n,a,L,o,M,s,l,u,f,c){let d=this.elements;return d[0]=e,d[4]=t,d[8]=C,d[12]=i,d[1]=H,d[5]=V,d[9]=n,d[13]=a,d[2]=L,d[6]=o,d[10]=M,d[14]=s,d[3]=l,d[7]=u,d[11]=f,d[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new E4().fromArray(this.elements)}copy(e){let t=this.elements,C=e.elements;return t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=C[3],t[4]=C[4],t[5]=C[5],t[6]=C[6],t[7]=C[7],t[8]=C[8],t[9]=C[9],t[10]=C[10],t[11]=C[11],t[12]=C[12],t[13]=C[13],t[14]=C[14],t[15]=C[15],this}copyPosition(e){let t=this.elements,C=e.elements;return t[12]=C[12],t[13]=C[13],t[14]=C[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,C){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),C.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),C.setFromMatrixColumn(this,2),this)}makeBasis(e,t,C){return this.set(e.x,t.x,C.x,0,e.y,t.y,C.y,0,e.z,t.z,C.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,C=e.elements,i=1/R0.setFromMatrixColumn(e,0).length(),H=1/R0.setFromMatrixColumn(e,1).length(),V=1/R0.setFromMatrixColumn(e,2).length();return t[0]=C[0]*i,t[1]=C[1]*i,t[2]=C[2]*i,t[3]=0,t[4]=C[4]*H,t[5]=C[5]*H,t[6]=C[6]*H,t[7]=0,t[8]=C[8]*V,t[9]=C[9]*V,t[10]=C[10]*V,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,C=e.x,i=e.y,H=e.z,V=Math.cos(C),n=Math.sin(C),a=Math.cos(i),L=Math.sin(i),o=Math.cos(H),M=Math.sin(H);if(e.order==="XYZ"){let s=V*o,l=V*M,u=n*o,f=n*M;t[0]=a*o,t[4]=-a*M,t[8]=L,t[1]=l+u*L,t[5]=s-f*L,t[9]=-n*a,t[2]=f-s*L,t[6]=u+l*L,t[10]=V*a}else if(e.order==="YXZ"){let s=a*o,l=a*M,u=L*o,f=L*M;t[0]=s+f*n,t[4]=u*n-l,t[8]=V*L,t[1]=V*M,t[5]=V*o,t[9]=-n,t[2]=l*n-u,t[6]=f+s*n,t[10]=V*a}else if(e.order==="ZXY"){let s=a*o,l=a*M,u=L*o,f=L*M;t[0]=s-f*n,t[4]=-V*M,t[8]=u+l*n,t[1]=l+u*n,t[5]=V*o,t[9]=f-s*n,t[2]=-V*L,t[6]=n,t[10]=V*a}else if(e.order==="ZYX"){let s=V*o,l=V*M,u=n*o,f=n*M;t[0]=a*o,t[4]=u*L-l,t[8]=s*L+f,t[1]=a*M,t[5]=f*L+s,t[9]=l*L-u,t[2]=-L,t[6]=n*a,t[10]=V*a}else if(e.order==="YZX"){let s=V*a,l=V*L,u=n*a,f=n*L;t[0]=a*o,t[4]=f-s*M,t[8]=u*M+l,t[1]=M,t[5]=V*o,t[9]=-n*o,t[2]=-L*o,t[6]=l*M+u,t[10]=s-f*M}else if(e.order==="XZY"){let s=V*a,l=V*L,u=n*a,f=n*L;t[0]=a*o,t[4]=-M,t[8]=L*o,t[1]=s*M+f,t[5]=V*o,t[9]=l*M-u,t[2]=u*M-l,t[6]=n*o,t[10]=f*M+s}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Er,e,Rr)}lookAt(e,t,C){let i=this.elements;return q2.subVectors(e,t),q2.lengthSq()===0&&(q2.z=1),q2.normalize(),G5.crossVectors(C,q2),G5.lengthSq()===0&&(Math.abs(C.z)===1?q2.x+=1e-4:q2.z+=1e-4,q2.normalize(),G5.crossVectors(C,q2)),G5.normalize(),_7.crossVectors(q2,G5),i[0]=G5.x,i[4]=_7.x,i[8]=q2.x,i[1]=G5.y,i[5]=_7.y,i[9]=q2.y,i[2]=G5.z,i[6]=_7.z,i[10]=q2.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let C=e.elements,i=t.elements,H=this.elements,V=C[0],n=C[4],a=C[8],L=C[12],o=C[1],M=C[5],s=C[9],l=C[13],u=C[2],f=C[6],c=C[10],d=C[14],v=C[3],_=C[7],h=C[11],S=C[15],g=i[0],y=i[4],m=i[8],Z=i[12],R=i[1],I=i[5],N=i[9],G=i[13],P=i[2],U=i[6],Q=i[10],$=i[14],r1=i[3],X=i[7],e1=i[11],C1=i[15];return H[0]=V*g+n*R+a*P+L*r1,H[4]=V*y+n*I+a*U+L*X,H[8]=V*m+n*N+a*Q+L*e1,H[12]=V*Z+n*G+a*$+L*C1,H[1]=o*g+M*R+s*P+l*r1,H[5]=o*y+M*I+s*U+l*X,H[9]=o*m+M*N+s*Q+l*e1,H[13]=o*Z+M*G+s*$+l*C1,H[2]=u*g+f*R+c*P+d*r1,H[6]=u*y+f*I+c*U+d*X,H[10]=u*m+f*N+c*Q+d*e1,H[14]=u*Z+f*G+c*$+d*C1,H[3]=v*g+_*R+h*P+S*r1,H[7]=v*y+_*I+h*U+S*X,H[11]=v*m+_*N+h*Q+S*e1,H[15]=v*Z+_*G+h*$+S*C1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],C=e[4],i=e[8],H=e[12],V=e[1],n=e[5],a=e[9],L=e[13],o=e[2],M=e[6],s=e[10],l=e[14],u=e[3],f=e[7],c=e[11],d=e[15],v=a*l-L*s,_=n*l-L*M,h=n*s-a*M,S=V*l-L*o,g=V*s-a*o,y=V*M-n*o;return t*(f*v-c*_+d*h)-C*(u*v-c*S+d*g)+i*(u*_-f*S+d*y)-H*(u*h-f*g+c*y)}determinantAffine(){let e=this.elements,t=e[0],C=e[4],i=e[8],H=e[1],V=e[5],n=e[9],a=e[2],L=e[6],o=e[10];return t*(V*o-n*L)-C*(H*o-n*a)+i*(H*L-V*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,C){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=C),this}invert(){let e=this.elements,t=e[0],C=e[1],i=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8],M=e[9],s=e[10],l=e[11],u=e[12],f=e[13],c=e[14],d=e[15],v=t*n-C*V,_=t*a-i*V,h=t*L-H*V,S=C*a-i*n,g=C*L-H*n,y=i*L-H*a,m=o*f-M*u,Z=o*c-s*u,R=o*d-l*u,I=M*c-s*f,N=M*d-l*f,G=s*d-l*c,P=v*G-_*N+h*I+S*R-g*Z+y*m;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(n*G-a*N+L*I)*U,e[1]=(i*N-C*G-H*I)*U,e[2]=(f*y-c*g+d*S)*U,e[3]=(s*g-M*y-l*S)*U,e[4]=(a*R-V*G-L*Z)*U,e[5]=(t*G-i*R+H*Z)*U,e[6]=(c*h-u*y-d*_)*U,e[7]=(o*y-s*h+l*_)*U,e[8]=(V*N-n*R+L*m)*U,e[9]=(C*R-t*N-H*m)*U,e[10]=(u*g-f*h+d*v)*U,e[11]=(M*h-o*g-l*v)*U,e[12]=(n*Z-V*I-a*m)*U,e[13]=(t*I-C*Z+i*m)*U,e[14]=(f*_-u*S-c*v)*U,e[15]=(o*S-M*_+s*v)*U,this}scale(e){let t=this.elements,C=e.x,i=e.y,H=e.z;return t[0]*=C,t[4]*=i,t[8]*=H,t[1]*=C,t[5]*=i,t[9]*=H,t[2]*=C,t[6]*=i,t[10]*=H,t[3]*=C,t[7]*=i,t[11]*=H,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],C=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,C,i))}makeTranslation(e,t,C){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,C,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),C=Math.sin(e);return this.set(1,0,0,0,0,t,-C,0,0,C,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),C=Math.sin(e);return this.set(t,0,C,0,0,1,0,0,-C,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),C=Math.sin(e);return this.set(t,-C,0,0,C,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let C=Math.cos(t),i=Math.sin(t),H=1-C,V=e.x,n=e.y,a=e.z,L=H*V,o=H*n;return this.set(L*V+C,L*n-i*a,L*a+i*n,0,L*n+i*a,o*n+C,o*a-i*V,0,L*a-i*n,o*a+i*V,H*a*a+C,0,0,0,0,1),this}makeScale(e,t,C){return this.set(e,0,0,0,0,t,0,0,0,0,C,0,0,0,0,1),this}makeShear(e,t,C,i,H,V){return this.set(1,C,H,0,e,1,V,0,t,i,1,0,0,0,0,1),this}compose(e,t,C){let i=this.elements,H=t._x,V=t._y,n=t._z,a=t._w,L=H+H,o=V+V,M=n+n,s=H*L,l=H*o,u=H*M,f=V*o,c=V*M,d=n*M,v=a*L,_=a*o,h=a*M,S=C.x,g=C.y,y=C.z;return i[0]=(1-(f+d))*S,i[1]=(l+h)*S,i[2]=(u-_)*S,i[3]=0,i[4]=(l-h)*g,i[5]=(1-(s+d))*g,i[6]=(c+v)*g,i[7]=0,i[8]=(u+_)*y,i[9]=(c-v)*y,i[10]=(1-(s+f))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,C){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let H=this.determinantAffine();if(H===0)return C.set(1,1,1),t.identity(),this;let V=R0.set(i[0],i[1],i[2]).length(),n=R0.set(i[4],i[5],i[6]).length(),a=R0.set(i[8],i[9],i[10]).length();H<0&&(V=-V),L5.copy(this);let L=1/V,o=1/n,M=1/a;return L5.elements[0]*=L,L5.elements[1]*=L,L5.elements[2]*=L,L5.elements[4]*=o,L5.elements[5]*=o,L5.elements[6]*=o,L5.elements[8]*=M,L5.elements[9]*=M,L5.elements[10]*=M,t.setFromRotationMatrix(L5),C.x=V,C.y=n,C.z=a,this}makePerspective(e,t,C,i,H,V,n=M5,a=!1){let L=this.elements,o=2*H/(t-e),M=2*H/(C-i),s=(t+e)/(t-e),l=(C+i)/(C-i),u,f;if(a)u=H/(V-H),f=V*H/(V-H);else if(n===M5)u=-(V+H)/(V-H),f=-2*V*H/(V-H);else if(n===Q0)u=-V/(V-H),f=-V*H/(V-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return L[0]=o,L[4]=0,L[8]=s,L[12]=0,L[1]=0,L[5]=M,L[9]=l,L[13]=0,L[2]=0,L[6]=0,L[10]=u,L[14]=f,L[3]=0,L[7]=0,L[11]=-1,L[15]=0,this}makeOrthographic(e,t,C,i,H,V,n=M5,a=!1){let L=this.elements,o=2/(t-e),M=2/(C-i),s=-(t+e)/(t-e),l=-(C+i)/(C-i),u,f;if(a)u=1/(V-H),f=V/(V-H);else if(n===M5)u=-2/(V-H),f=-(V+H)/(V-H);else if(n===Q0)u=-1/(V-H),f=-H/(V-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return L[0]=o,L[4]=0,L[8]=0,L[12]=s,L[1]=0,L[5]=M,L[9]=0,L[13]=l,L[2]=0,L[6]=0,L[10]=u,L[14]=f,L[3]=0,L[7]=0,L[11]=0,L[15]=1,this}equals(e){let t=this.elements,C=e.elements;for(let i=0;i<16;i++)if(t[i]!==C[i])return!1;return!0}fromArray(e,t=0){for(let C=0;C<16;C++)this.elements[C]=e[C+t];return this}toArray(e=[],t=0){let C=this.elements;return e[t]=C[0],e[t+1]=C[1],e[t+2]=C[2],e[t+3]=C[3],e[t+4]=C[4],e[t+5]=C[5],e[t+6]=C[6],e[t+7]=C[7],e[t+8]=C[8],e[t+9]=C[9],e[t+10]=C[10],e[t+11]=C[11],e[t+12]=C[12],e[t+13]=C[13],e[t+14]=C[14],e[t+15]=C[15],e}};E4.prototype.isMatrix4=!0;var t2=E4,R0=new T,L5=new t2,Er=new T(0,0,0),Rr=new T(1,1,1),G5=new T,_7=new T,q2=new T,re=new t2,ie=new p2,C5=class r{constructor(e=0,t=0,C=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=C,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,C,i=this._order){return this._x=e,this._y=t,this._z=C,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,C=!0){let i=e.elements,H=i[0],V=i[4],n=i[8],a=i[1],L=i[5],o=i[9],M=i[2],s=i[6],l=i[10];switch(t){case"XYZ":this._y=Math.asin(N1(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-o,l),this._z=Math.atan2(-V,H)):(this._x=Math.atan2(s,L),this._z=0);break;case"YXZ":this._x=Math.asin(-N1(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(n,l),this._z=Math.atan2(a,L)):(this._y=Math.atan2(-M,H),this._z=0);break;case"ZXY":this._x=Math.asin(N1(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-M,l),this._z=Math.atan2(-V,L)):(this._y=0,this._z=Math.atan2(a,H));break;case"ZYX":this._y=Math.asin(-N1(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(s,l),this._z=Math.atan2(a,H)):(this._x=0,this._z=Math.atan2(-V,L));break;case"YZX":this._z=Math.asin(N1(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-o,L),this._y=Math.atan2(-M,H)):(this._x=0,this._y=Math.atan2(n,l));break;case"XZY":this._z=Math.asin(-N1(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(s,L),this._y=Math.atan2(n,H)):(this._x=Math.atan2(-o,l),this._y=0);break;default:w1("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,C===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,C){return re.makeRotationFromQuaternion(e),this.setFromRotationMatrix(re,t,C)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ie.setFromEuler(this),this.setFromQuaternion(ie,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};C5.DEFAULT_ORDER="XYZ";var e3=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pr=0,He=new T,P0=new p2,w5=new t2,y7=new T,m3=new T,Br=new T,Ir=new p2,Ve=new T(1,0,0),ne=new T(0,1,0),Le=new T(0,0,1),ae={type:"added"},Fr={type:"removed"},B0={type:"childadded",child:null},K9={type:"childremoved",child:null},N2=class r extends S5{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=g0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new C5,C=new p2,i=new T(1,1,1);function H(){C.setFromEuler(t,!1)}function V(){t.setFromQuaternion(C,void 0,!1)}t._onChange(H),C._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:C},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new t2},normalMatrix:{value:new E1}}),this.matrix=new t2,this.matrixWorld=new t2,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return P0.setFromAxisAngle(e,t),this.quaternion.multiply(P0),this}rotateOnWorldAxis(e,t){return P0.setFromAxisAngle(e,t),this.quaternion.premultiply(P0),this}rotateX(e){return this.rotateOnAxis(Ve,e)}rotateY(e){return this.rotateOnAxis(ne,e)}rotateZ(e){return this.rotateOnAxis(Le,e)}translateOnAxis(e,t){return He.copy(e).applyQuaternion(this.quaternion),this.position.add(He.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ve,e)}translateY(e){return this.translateOnAxis(ne,e)}translateZ(e){return this.translateOnAxis(Le,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(w5.copy(this.matrixWorld).invert())}lookAt(e,t,C){e.isVector3?y7.copy(e):y7.set(e,t,C);let i=this.parent;this.updateWorldMatrix(!0,!1),m3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?w5.lookAt(m3,y7,this.up):w5.lookAt(y7,m3,this.up),this.quaternion.setFromRotationMatrix(w5),i&&(w5.extractRotation(i.matrixWorld),P0.setFromRotationMatrix(w5),this.quaternion.premultiply(P0.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(O1("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ae),B0.child=e,this.dispatchEvent(B0),B0.child=null):O1("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let C=0;C<arguments.length;C++)this.remove(arguments[C]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fr),K9.child=e,this.dispatchEvent(K9),K9.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),w5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),w5.multiply(e.parent.matrixWorld)),e.applyMatrix4(w5),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ae),B0.child=e,this.dispatchEvent(B0),B0.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let C=0,i=this.children.length;C<i;C++){let V=this.children[C].getObjectByProperty(e,t);if(V!==void 0)return V}}getObjectsByProperty(e,t,C=[]){this[e]===t&&C.push(this);let i=this.children;for(let H=0,V=i.length;H<V;H++)i[H].getObjectsByProperty(e,t,C);return C}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m3,e,Br),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(m3,Ir,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let C=0,i=t.length;C<i;C++)t[C].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let C=0,i=t.length;C<i;C++)t[C].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,C=e.y,i=e.z,H=this.matrix.elements;H[12]+=t-H[0]*t-H[4]*C-H[8]*i,H[13]+=C-H[1]*t-H[5]*C-H[9]*i,H[14]+=i-H[2]*t-H[6]*C-H[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let C=0,i=t.length;C<i;C++)t[C].updateMatrixWorld(e)}updateWorldMatrix(e,t,C=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||C)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,C=!0),t===!0){let H=this.children;for(let V=0,n=H.length;V<n;V++)H[V].updateWorldMatrix(!1,!0,C)}}toJSON(e){let t=e===void 0||typeof e=="string",C={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},C.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(n=>({...n,boundingBox:n.boundingBox?n.boundingBox.toJSON():void 0,boundingSphere:n.boundingSphere?n.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(n=>({...n})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function H(n,a){return n[a.uuid]===void 0&&(n[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=H(e.geometries,this.geometry);let n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){let a=n.shapes;if(Array.isArray(a))for(let L=0,o=a.length;L<o;L++){let M=a[L];H(e.shapes,M)}else H(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(H(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let n=[];for(let a=0,L=this.material.length;a<L;a++)n.push(H(e.materials,this.material[a]));i.material=n}else i.material=H(e.materials,this.material);if(this.children.length>0){i.children=[];for(let n=0;n<this.children.length;n++)i.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let n=0;n<this.animations.length;n++){let a=this.animations[n];i.animations.push(H(e.animations,a))}}if(t){let n=V(e.geometries),a=V(e.materials),L=V(e.textures),o=V(e.images),M=V(e.shapes),s=V(e.skeletons),l=V(e.animations),u=V(e.nodes);n.length>0&&(C.geometries=n),a.length>0&&(C.materials=a),L.length>0&&(C.textures=L),o.length>0&&(C.images=o),M.length>0&&(C.shapes=M),s.length>0&&(C.skeletons=s),l.length>0&&(C.animations=l),u.length>0&&(C.nodes=u)}return C.object=i,C;function V(n){let a=[];for(let L in n){let o=n[L];delete o.metadata,a.push(o)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let C=0;C<e.children.length;C++){let i=e.children[C];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};N2.DEFAULT_UP=new T(0,1,0);N2.DEFAULT_MATRIX_AUTO_UPDATE=!0;N2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var l5=class extends N2{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dr={type:"move"},t3=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new l5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new l5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new l5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let C of e.hand.values())this._getHandJoint(t,C)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,C){let i=null,H=null,V=null,n=this._targetRay,a=this._grip,L=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(L&&e.hand){V=!0;for(let f of e.hand.values()){let c=t.getJointPose(f,C),d=this._getHandJoint(L,f);c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=c.radius),d.visible=c!==null}let o=L.joints["index-finger-tip"],M=L.joints["thumb-tip"],s=o.position.distanceTo(M.position),l=.02,u=.005;L.inputState.pinching&&s>l+u?(L.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!L.inputState.pinching&&s<=l-u&&(L.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(H=t.getPose(e.gripSpace,C),H!==null&&(a.matrix.fromArray(H.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,H.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(H.linearVelocity)):a.hasLinearVelocity=!1,H.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(H.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(i=t.getPose(e.targetRaySpace,C),i===null&&H!==null&&(i=H),i!==null&&(n.matrix.fromArray(i.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,i.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(i.linearVelocity)):n.hasLinearVelocity=!1,i.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(i.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Dr)))}return n!==null&&(n.visible=i!==null),a!==null&&(a.visible=H!==null),L!==null&&(L.visible=V!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let C=new l5;C.matrixAutoUpdate=!1,C.visible=!1,e.joints[t.jointName]=C,e.add(C)}return e.joints[t.jointName]}},lt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},W5={h:0,s:0,l:0},b7={h:0,s:0,l:0};function J9(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var I1=class{constructor(e,t,C){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,C)}set(e,t,C){if(t===void 0&&C===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,C);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=E2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W1.colorSpaceToWorking(this,t),this}setRGB(e,t,C,i=W1.workingColorSpace){return this.r=e,this.g=t,this.b=C,W1.colorSpaceToWorking(this,i),this}setHSL(e,t,C,i=W1.workingColorSpace){if(e=J6(e,1),t=N1(t,0,1),C=N1(C,0,1),t===0)this.r=this.g=this.b=C;else{let H=C<=.5?C*(1+t):C+t-C*t,V=2*C-H;this.r=J9(V,H,e+1/3),this.g=J9(V,H,e),this.b=J9(V,H,e-1/3)}return W1.colorSpaceToWorking(this,i),this}setStyle(e,t=E2){function C(H){H!==void 0&&parseFloat(H)<1&&w1("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let H,V=i[1],n=i[2];switch(V){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return C(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,t);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return C(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,t);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return C(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,t);break;default:w1("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let H=i[1],V=H.length;if(V===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,t);if(V===6)return this.setHex(parseInt(H,16),t);w1("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=E2){let C=lt[e.toLowerCase()];return C!==void 0?this.setHex(C,t):w1("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=B5(e.r),this.g=B5(e.g),this.b=B5(e.b),this}copyLinearToSRGB(e){return this.r=q0(e.r),this.g=q0(e.g),this.b=q0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=E2){return W1.workingToColorSpace(O2.copy(this),e),Math.round(N1(O2.r*255,0,255))*65536+Math.round(N1(O2.g*255,0,255))*256+Math.round(N1(O2.b*255,0,255))}getHexString(e=E2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W1.workingColorSpace){W1.workingToColorSpace(O2.copy(this),t);let C=O2.r,i=O2.g,H=O2.b,V=Math.max(C,i,H),n=Math.min(C,i,H),a,L,o=(n+V)/2;if(n===V)a=0,L=0;else{let M=V-n;switch(L=o<=.5?M/(V+n):M/(2-V-n),V){case C:a=(i-H)/M+(i<H?6:0);break;case i:a=(H-C)/M+2;break;case H:a=(C-i)/M+4;break}a/=6}return e.h=a,e.s=L,e.l=o,e}getRGB(e,t=W1.workingColorSpace){return W1.workingToColorSpace(O2.copy(this),t),e.r=O2.r,e.g=O2.g,e.b=O2.b,e}getStyle(e=E2){W1.workingToColorSpace(O2.copy(this),e);let t=O2.r,C=O2.g,i=O2.b;return e!==E2?`color(${e} ${t.toFixed(3)} ${C.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(C*255)},${Math.round(i*255)})`}offsetHSL(e,t,C){return this.getHSL(W5),this.setHSL(W5.h+e,W5.s+t,W5.l+C)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,C){return this.r=e.r+(t.r-e.r)*C,this.g=e.g+(t.g-e.g)*C,this.b=e.b+(t.b-e.b)*C,this}lerpHSL(e,t){this.getHSL(W5),e.getHSL(b7);let C=g3(W5.h,b7.h,t),i=g3(W5.s,b7.s,t),H=g3(W5.l,b7.l,t);return this.setHSL(C,i,H),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,C=this.g,i=this.b,H=e.elements;return this.r=H[0]*t+H[3]*C+H[6]*i,this.g=H[1]*t+H[4]*C+H[7]*i,this.b=H[2]*t+H[5]*C+H[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},O2=new I1;I1.NAMES=lt;var E3=class extends N2{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new C5,this.environmentIntensity=1,this.environmentRotation=new C5,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},a5=new T,O5=new T,j9=new T,E5=new T,I0=new T,F0=new T,oe=new T,e6=new T,t6=new T,C6=new T,r6=new o2,i6=new o2,H6=new o2,$5=class r{constructor(e=new T,t=new T,C=new T){this.a=e,this.b=t,this.c=C}static getNormal(e,t,C,i){i.subVectors(C,t),a5.subVectors(e,t),i.cross(a5);let H=i.lengthSq();return H>0?i.multiplyScalar(1/Math.sqrt(H)):i.set(0,0,0)}static getBarycoord(e,t,C,i,H){a5.subVectors(i,t),O5.subVectors(C,t),j9.subVectors(e,t);let V=a5.dot(a5),n=a5.dot(O5),a=a5.dot(j9),L=O5.dot(O5),o=O5.dot(j9),M=V*L-n*n;if(M===0)return H.set(0,0,0),null;let s=1/M,l=(L*a-n*o)*s,u=(V*o-n*a)*s;return H.set(1-l-u,u,l)}static containsPoint(e,t,C,i){return this.getBarycoord(e,t,C,i,E5)===null?!1:E5.x>=0&&E5.y>=0&&E5.x+E5.y<=1}static getInterpolation(e,t,C,i,H,V,n,a){return this.getBarycoord(e,t,C,i,E5)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(H,E5.x),a.addScaledVector(V,E5.y),a.addScaledVector(n,E5.z),a)}static getInterpolatedAttribute(e,t,C,i,H,V){return r6.setScalar(0),i6.setScalar(0),H6.setScalar(0),r6.fromBufferAttribute(e,t),i6.fromBufferAttribute(e,C),H6.fromBufferAttribute(e,i),V.setScalar(0),V.addScaledVector(r6,H.x),V.addScaledVector(i6,H.y),V.addScaledVector(H6,H.z),V}static isFrontFacing(e,t,C,i){return a5.subVectors(C,t),O5.subVectors(e,t),a5.cross(O5).dot(i)<0}set(e,t,C){return this.a.copy(e),this.b.copy(t),this.c.copy(C),this}setFromPointsAndIndices(e,t,C,i){return this.a.copy(e[t]),this.b.copy(e[C]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,C,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,C),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return a5.subVectors(this.c,this.b),O5.subVectors(this.a,this.b),a5.cross(O5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,C,i,H){return r.getInterpolation(e,this.a,this.b,this.c,t,C,i,H)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let C=this.a,i=this.b,H=this.c,V,n;I0.subVectors(i,C),F0.subVectors(H,C),e6.subVectors(e,C);let a=I0.dot(e6),L=F0.dot(e6);if(a<=0&&L<=0)return t.copy(C);t6.subVectors(e,i);let o=I0.dot(t6),M=F0.dot(t6);if(o>=0&&M<=o)return t.copy(i);let s=a*M-o*L;if(s<=0&&a>=0&&o<=0)return V=a/(a-o),t.copy(C).addScaledVector(I0,V);C6.subVectors(e,H);let l=I0.dot(C6),u=F0.dot(C6);if(u>=0&&l<=u)return t.copy(H);let f=l*L-a*u;if(f<=0&&L>=0&&u<=0)return n=L/(L-u),t.copy(C).addScaledVector(F0,n);let c=o*u-l*M;if(c<=0&&M-o>=0&&l-u>=0)return oe.subVectors(H,i),n=(M-o)/(M-o+(l-u)),t.copy(i).addScaledVector(oe,n);let d=1/(c+f+s);return V=f*d,n=s*d,t.copy(C).addScaledVector(I0,V).addScaledVector(F0,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Q5=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,C=e.length;t<C;t+=3)this.expandByPoint(o5.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,C=e.count;t<C;t++)this.expandByPoint(o5.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,C=e.length;t<C;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let C=o5.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(C),this.max.copy(e).add(C),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let C=e.geometry;if(C!==void 0){let H=C.getAttribute("position");if(t===!0&&H!==void 0&&e.isInstancedMesh!==!0)for(let V=0,n=H.count;V<n;V++)e.isMesh===!0?e.getVertexPosition(V,o5):o5.fromBufferAttribute(H,V),o5.applyMatrix4(e.matrixWorld),this.expandByPoint(o5);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),T7.copy(e.boundingBox)):(C.boundingBox===null&&C.computeBoundingBox(),T7.copy(C.boundingBox)),T7.applyMatrix4(e.matrixWorld),this.union(T7)}let i=e.children;for(let H=0,V=i.length;H<V;H++)this.expandByObject(i[H],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,o5),o5.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,C;return e.normal.x>0?(t=e.normal.x*this.min.x,C=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,C=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,C+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,C+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,C+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,C+=e.normal.z*this.min.z),t<=-e.constant&&C>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(h3),w7.subVectors(this.max,h3),D0.subVectors(e.a,h3),k0.subVectors(e.b,h3),N0.subVectors(e.c,h3),X5.subVectors(k0,D0),q5.subVectors(N0,k0),u0.subVectors(D0,N0);let t=[0,-X5.z,X5.y,0,-q5.z,q5.y,0,-u0.z,u0.y,X5.z,0,-X5.x,q5.z,0,-q5.x,u0.z,0,-u0.x,-X5.y,X5.x,0,-q5.y,q5.x,0,-u0.y,u0.x,0];return!V6(t,D0,k0,N0,w7)||(t=[1,0,0,0,1,0,0,0,1],!V6(t,D0,k0,N0,w7))?!1:(O7.crossVectors(X5,q5),t=[O7.x,O7.y,O7.z],V6(t,D0,k0,N0,w7))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,o5).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(o5).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(R5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),R5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),R5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),R5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),R5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),R5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),R5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),R5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(R5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},R5=[new T,new T,new T,new T,new T,new T,new T,new T],o5=new T,T7=new Q5,D0=new T,k0=new T,N0=new T,X5=new T,q5=new T,u0=new T,h3=new T,w7=new T,O7=new T,A0=new T;function V6(r,e,t,C,i){for(let H=0,V=r.length-3;H<=V;H+=3){A0.fromArray(r,H);let n=i.x*Math.abs(A0.x)+i.y*Math.abs(A0.y)+i.z*Math.abs(A0.z),a=e.dot(A0),L=t.dot(A0),o=C.dot(A0);if(Math.max(-Math.max(a,L,o),Math.min(a,L,o))>n)return!1}return!0}var m2=new T,E7=new m1,kr=0,t5=class extends S5{constructor(e,t,C=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kr++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=C,this.usage=Lt,this.updateRanges=[],this.gpuType=u5,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,C){e*=this.itemSize,C*=t.itemSize;for(let i=0,H=this.itemSize;i<H;i++)this.array[e+i]=t.array[C+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,C=this.count;t<C;t++)E7.fromBufferAttribute(this,t),E7.applyMatrix3(e),this.setXY(t,E7.x,E7.y);else if(this.itemSize===3)for(let t=0,C=this.count;t<C;t++)m2.fromBufferAttribute(this,t),m2.applyMatrix3(e),this.setXYZ(t,m2.x,m2.y,m2.z);return this}applyMatrix4(e){for(let t=0,C=this.count;t<C;t++)m2.fromBufferAttribute(this,t),m2.applyMatrix4(e),this.setXYZ(t,m2.x,m2.y,m2.z);return this}applyNormalMatrix(e){for(let t=0,C=this.count;t<C;t++)m2.fromBufferAttribute(this,t),m2.applyNormalMatrix(e),this.setXYZ(t,m2.x,m2.y,m2.z);return this}transformDirection(e){for(let t=0,C=this.count;t<C;t++)m2.fromBufferAttribute(this,t),m2.transformDirection(e),this.setXYZ(t,m2.x,m2.y,m2.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let C=this.array[e*this.itemSize+t];return this.normalized&&(C=X0(C,this.array)),C}setComponent(e,t,C){return this.normalized&&(C=F2(C,this.array)),this.array[e*this.itemSize+t]=C,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=X0(t,this.array)),t}setX(e,t){return this.normalized&&(t=F2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=X0(t,this.array)),t}setY(e,t){return this.normalized&&(t=F2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=X0(t,this.array)),t}setZ(e,t){return this.normalized&&(t=F2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=X0(t,this.array)),t}setW(e,t){return this.normalized&&(t=F2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,C){return e*=this.itemSize,this.normalized&&(t=F2(t,this.array),C=F2(C,this.array)),this.array[e+0]=t,this.array[e+1]=C,this}setXYZ(e,t,C,i){return e*=this.itemSize,this.normalized&&(t=F2(t,this.array),C=F2(C,this.array),i=F2(i,this.array)),this.array[e+0]=t,this.array[e+1]=C,this.array[e+2]=i,this}setXYZW(e,t,C,i,H){return e*=this.itemSize,this.normalized&&(t=F2(t,this.array),C=F2(C,this.array),i=F2(i,this.array),H=F2(H,this.array)),this.array[e+0]=t,this.array[e+1]=C,this.array[e+2]=i,this.array[e+3]=H,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var R3=class extends t5{constructor(e,t,C){super(new Uint16Array(e),t,C)}};var P3=class extends t5{constructor(e,t,C){super(new Uint32Array(e),t,C)}};var D2=class extends t5{constructor(e,t,C){super(new Float32Array(e),t,C)}},Nr=new Q5,f3=new T,n6=new T,C3=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let C=this.center;t!==void 0?C.copy(t):Nr.setFromPoints(e).getCenter(C);let i=0;for(let H=0,V=e.length;H<V;H++)i=Math.max(i,C.distanceToSquared(e[H]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let C=this.center.distanceToSquared(e);return t.copy(e),C>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;f3.subVectors(e,this.center);let t=f3.lengthSq();if(t>this.radius*this.radius){let C=Math.sqrt(t),i=(C-this.radius)*.5;this.center.addScaledVector(f3,i/C),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(n6.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(f3.copy(e.center).add(n6)),this.expandByPoint(f3.copy(e.center).sub(n6))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ur=0,e5=new t2,L6=new N2,U0=new T,Y2=new Q5,x3=new Q5,Z2=new T,d5=class r extends S5{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ur++}),this.uuid=g0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mr(e)?P3:R3)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,C=0){this.groups.push({start:e,count:t,materialIndex:C})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let C=this.attributes.normal;if(C!==void 0){let H=new E1().getNormalMatrix(e);C.applyNormalMatrix(H),C.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return e5.makeRotationFromQuaternion(e),this.applyMatrix4(e5),this}rotateX(e){return e5.makeRotationX(e),this.applyMatrix4(e5),this}rotateY(e){return e5.makeRotationY(e),this.applyMatrix4(e5),this}rotateZ(e){return e5.makeRotationZ(e),this.applyMatrix4(e5),this}translate(e,t,C){return e5.makeTranslation(e,t,C),this.applyMatrix4(e5),this}scale(e,t,C){return e5.makeScale(e,t,C),this.applyMatrix4(e5),this}lookAt(e){return L6.lookAt(e),L6.updateMatrix(),this.applyMatrix4(L6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(U0).negate(),this.translate(U0.x,U0.y,U0.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let C=[];for(let i=0,H=e.length;i<H;i++){let V=e[i];C.push(V.x,V.y,V.z||0)}this.setAttribute("position",new D2(C,3))}else{let C=Math.min(e.length,t.count);for(let i=0;i<C;i++){let H=e[i];t.setXYZ(i,H.x,H.y,H.z||0)}e.length>t.count&&w1("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Q5);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){O1("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let C=0,i=t.length;C<i;C++){let H=t[C];Y2.setFromBufferAttribute(H),this.morphTargetsRelative?(Z2.addVectors(this.boundingBox.min,Y2.min),this.boundingBox.expandByPoint(Z2),Z2.addVectors(this.boundingBox.max,Y2.max),this.boundingBox.expandByPoint(Z2)):(this.boundingBox.expandByPoint(Y2.min),this.boundingBox.expandByPoint(Y2.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&O1('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new C3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){O1("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let C=this.boundingSphere.center;if(Y2.setFromBufferAttribute(e),t)for(let H=0,V=t.length;H<V;H++){let n=t[H];x3.setFromBufferAttribute(n),this.morphTargetsRelative?(Z2.addVectors(Y2.min,x3.min),Y2.expandByPoint(Z2),Z2.addVectors(Y2.max,x3.max),Y2.expandByPoint(Z2)):(Y2.expandByPoint(x3.min),Y2.expandByPoint(x3.max))}Y2.getCenter(C);let i=0;for(let H=0,V=e.count;H<V;H++)Z2.fromBufferAttribute(e,H),i=Math.max(i,C.distanceToSquared(Z2));if(t)for(let H=0,V=t.length;H<V;H++){let n=t[H],a=this.morphTargetsRelative;for(let L=0,o=n.count;L<o;L++)Z2.fromBufferAttribute(n,L),a&&(U0.fromBufferAttribute(e,L),Z2.add(U0)),i=Math.max(i,C.distanceToSquared(Z2))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&O1('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){O1("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let C=t.position,i=t.normal,H=t.uv,V=this.getAttribute("tangent");(V===void 0||V.count!==C.count)&&(V=new t5(new Float32Array(4*C.count),4),this.setAttribute("tangent",V));let n=[],a=[];for(let m=0;m<C.count;m++)n[m]=new T,a[m]=new T;let L=new T,o=new T,M=new T,s=new m1,l=new m1,u=new m1,f=new T,c=new T;function d(m,Z,R){L.fromBufferAttribute(C,m),o.fromBufferAttribute(C,Z),M.fromBufferAttribute(C,R),s.fromBufferAttribute(H,m),l.fromBufferAttribute(H,Z),u.fromBufferAttribute(H,R),o.sub(L),M.sub(L),l.sub(s),u.sub(s);let I=1/(l.x*u.y-u.x*l.y);isFinite(I)&&(f.copy(o).multiplyScalar(u.y).addScaledVector(M,-l.y).multiplyScalar(I),c.copy(M).multiplyScalar(l.x).addScaledVector(o,-u.x).multiplyScalar(I),n[m].add(f),n[Z].add(f),n[R].add(f),a[m].add(c),a[Z].add(c),a[R].add(c))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let m=0,Z=v.length;m<Z;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let _=new T,h=new T,S=new T,g=new T;function y(m){S.fromBufferAttribute(i,m),g.copy(S);let Z=n[m];_.copy(Z),_.sub(S.multiplyScalar(S.dot(Z))).normalize(),h.crossVectors(g,Z);let I=h.dot(a[m])<0?-1:1;V.setXYZW(m,_.x,_.y,_.z,I)}for(let m=0,Z=v.length;m<Z;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)y(e.getX(G+0)),y(e.getX(G+1)),y(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let C=this.getAttribute("normal");if(C===void 0||C.count!==t.count)C=new t5(new Float32Array(t.count*3),3),this.setAttribute("normal",C);else for(let s=0,l=C.count;s<l;s++)C.setXYZ(s,0,0,0);let i=new T,H=new T,V=new T,n=new T,a=new T,L=new T,o=new T,M=new T;if(e)for(let s=0,l=e.count;s<l;s+=3){let u=e.getX(s+0),f=e.getX(s+1),c=e.getX(s+2);i.fromBufferAttribute(t,u),H.fromBufferAttribute(t,f),V.fromBufferAttribute(t,c),o.subVectors(V,H),M.subVectors(i,H),o.cross(M),n.fromBufferAttribute(C,u),a.fromBufferAttribute(C,f),L.fromBufferAttribute(C,c),n.add(o),a.add(o),L.add(o),C.setXYZ(u,n.x,n.y,n.z),C.setXYZ(f,a.x,a.y,a.z),C.setXYZ(c,L.x,L.y,L.z)}else for(let s=0,l=t.count;s<l;s+=3)i.fromBufferAttribute(t,s+0),H.fromBufferAttribute(t,s+1),V.fromBufferAttribute(t,s+2),o.subVectors(V,H),M.subVectors(i,H),o.cross(M),C.setXYZ(s+0,o.x,o.y,o.z),C.setXYZ(s+1,o.x,o.y,o.z),C.setXYZ(s+2,o.x,o.y,o.z);this.normalizeNormals(),C.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,C=e.count;t<C;t++)Z2.fromBufferAttribute(e,t),Z2.normalize(),e.setXYZ(t,Z2.x,Z2.y,Z2.z)}toNonIndexed(){function e(n,a){let L=n.array,o=n.itemSize,M=n.normalized,s=new L.constructor(a.length*o),l=0,u=0;for(let f=0,c=a.length;f<c;f++){n.isInterleavedBufferAttribute?l=a[f]*n.data.stride+n.offset:l=a[f]*o;for(let d=0;d<o;d++)s[u++]=L[l++]}return new t5(s,o,M)}if(this.index===null)return w1("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,C=this.index.array,i=this.attributes;for(let n in i){let a=i[n],L=e(a,C);t.setAttribute(n,L)}let H=this.morphAttributes;for(let n in H){let a=[],L=H[n];for(let o=0,M=L.length;o<M;o++){let s=L[o],l=e(s,C);a.push(l)}t.morphAttributes[n]=a}t.morphTargetsRelative=this.morphTargetsRelative;let V=this.groups;for(let n=0,a=V.length;n<a;n++){let L=V[n];t.addGroup(L.start,L.count,L.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let L in a)a[L]!==void 0&&(e[L]=a[L]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let C=this.attributes;for(let a in C){let L=C[a];e.data.attributes[a]=L.toJSON(e.data)}let i={},H=!1;for(let a in this.morphAttributes){let L=this.morphAttributes[a],o=[];for(let M=0,s=L.length;M<s;M++){let l=L[M];o.push(l.toJSON(e.data))}o.length>0&&(i[a]=o,H=!0)}H&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let V=this.groups;V.length>0&&(e.data.groups=JSON.parse(JSON.stringify(V)));let n=this.boundingSphere;return n!==null&&(e.data.boundingSphere=n.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let C=e.index;C!==null&&this.setIndex(C.clone());let i=e.attributes;for(let L in i){let o=i[L];this.setAttribute(L,o.clone(t))}let H=e.morphAttributes;for(let L in H){let o=[],M=H[L];for(let s=0,l=M.length;s<l;s++)o.push(M[s].clone(t));this.morphAttributes[L]=o}this.morphTargetsRelative=e.morphTargetsRelative;let V=e.groups;for(let L=0,o=V.length;L<o;L++){let M=V[L];this.addGroup(M.start,M.count,M.materialIndex)}let n=e.boundingBox;n!==null&&(this.boundingBox=n.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var a6=new T,zr=new T,Gr=new E1,s5=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,C,i){return this.normal.set(e,t,C),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,C){let i=a6.subVectors(C,t).cross(zr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,C=!0){let i=e.delta(a6),H=this.normal.dot(i);if(H===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let V=-(e.start.dot(this.normal)+this.constant)/H;return C===!0&&(V<0||V>1)?null:t.copy(e.start).addScaledVector(i,V)}intersectsLine(e){let t=this.distanceToPoint(e.start),C=this.distanceToPoint(e.end);return t<0&&C>0||C<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let C=t||Gr.getNormalMatrix(e),i=this.coplanarPoint(a6).applyMatrix4(e),H=this.normal.applyMatrix3(C).normalize();return this.constant=-i.dot(H),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wr=0,K5=class extends S5{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wr++}),this.uuid=g0(),this.name="",this.type="Material",this.blending=s3,this.side=r0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=O6,this.blendDst=E6,this.blendEquation=v0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new I1(0,0,0),this.blendAlpha=0,this.depthFunc=$0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tt,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$7,this.stencilZFail=$7,this.stencilZPass=$7,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let C=e[t];if(C===void 0){w1(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){w1(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(C):i&&i.isVector2&&C&&C.isVector2||i&&i.isEuler&&C&&C.isEuler||i&&i.isVector3&&C&&C.isVector3?i.copy(C):this[t]=C}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let C={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};C.uuid=this.uuid,C.type=this.type,C.blending=this.blending,C.side=this.side,C.shadowSide=this.shadowSide,C.vertexColors=this.vertexColors,C.opacity=this.opacity,C.transparent=this.transparent,C.blendSrc=this.blendSrc,C.blendDst=this.blendDst,C.blendEquation=this.blendEquation,C.blendSrcAlpha=this.blendSrcAlpha,C.blendDstAlpha=this.blendDstAlpha,C.blendEquationAlpha=this.blendEquationAlpha,C.blendColor=this.blendColor.getHex(),C.blendAlpha=this.blendAlpha,C.depthFunc=this.depthFunc,C.depthTest=this.depthTest,C.depthWrite=this.depthWrite,C.colorWrite=this.colorWrite,C.clipIntersection=this.clipIntersection,C.clipShadows=this.clipShadows,C.stencilWriteMask=this.stencilWriteMask,C.stencilFunc=this.stencilFunc,C.stencilRef=this.stencilRef,C.stencilFuncMask=this.stencilFuncMask,C.stencilFail=this.stencilFail,C.stencilZFail=this.stencilZFail,C.stencilZPass=this.stencilZPass,C.stencilWrite=this.stencilWrite,C.polygonOffset=this.polygonOffset,C.polygonOffsetFactor=this.polygonOffsetFactor,C.polygonOffsetUnits=this.polygonOffsetUnits,C.dithering=this.dithering,C.alphaTest=this.alphaTest,C.alphaHash=this.alphaHash,C.alphaToCoverage=this.alphaToCoverage,C.premultipliedAlpha=this.premultipliedAlpha,C.forceSinglePass=this.forceSinglePass,C.allowOverride=this.allowOverride,C.visible=this.visible,C.toneMapped=this.toneMapped,C.name=this.name,this.color&&this.color.isColor&&(C.color=this.color.getHex()),this.roughness!==void 0&&(C.roughness=this.roughness),this.metalness!==void 0&&(C.metalness=this.metalness),this.sheen!==void 0&&(C.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(C.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(C.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(C.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(C.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(C.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(C.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(C.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(C.shininess=this.shininess),this.clearcoat!==void 0&&(C.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(C.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(C.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(C.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(C.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,C.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(C.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(C.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(C.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(C.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(C.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(C.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(C.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(C.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(C.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(C.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(C.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(C.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(C.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(C.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(C.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(C.lightMap=this.lightMap.toJSON(e).uuid,C.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(C.aoMap=this.aoMap.toJSON(e).uuid,C.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(C.bumpMap=this.bumpMap.toJSON(e).uuid,C.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(C.normalMap=this.normalMap.toJSON(e).uuid,C.normalMapType=this.normalMapType,C.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(C.displacementMap=this.displacementMap.toJSON(e).uuid,C.displacementScale=this.displacementScale,C.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(C.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(C.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(C.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(C.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(C.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(C.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(C.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(C.combine=this.combine)),this.envMapRotation!==void 0&&(C.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(C.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(C.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(C.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(C.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(C.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(C.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(C.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(C.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(C.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(C.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(C.size=this.size),this.sizeAttenuation!==void 0&&(C.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(C.clippingPlanes=this.clippingPlanes.map(H=>H.toJSON())),this.rotation!==void 0&&(C.rotation=this.rotation),this.depthPacking!==void 0&&(C.depthPacking=this.depthPacking),this.linewidth!==void 0&&(C.linewidth=this.linewidth),this.linecap!==void 0&&(C.linecap=this.linecap),this.linejoin!==void 0&&(C.linejoin=this.linejoin),this.dashSize!==void 0&&(C.dashSize=this.dashSize),this.gapSize!==void 0&&(C.gapSize=this.gapSize),this.scale!==void 0&&(C.scale=this.scale),this.wireframe!==void 0&&(C.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(C.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(C.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(C.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(C.flatShading=this.flatShading),this.fog!==void 0&&(C.fog=this.fog),Object.keys(this.userData).length>0&&(C.userData=this.userData);function i(H){let V=[];for(let n in H){let a=H[n];delete a.metadata,V.push(a)}return V}if(t){let H=i(e.textures),V=i(e.images);H.length>0&&(C.textures=H),V.length>0&&(C.images=V)}return C}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new I1().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(C=>new s5().fromJSON(C))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let C=e.normalScale;Array.isArray(C)===!1&&(C=[C,C]),this.normalScale=new m1().fromArray(C)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new m1().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,C=null;if(t!==null){let i=t.length;C=new Array(i);for(let H=0;H!==i;++H)C[H]=t[H].clone()}return this.clippingPlanes=C,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var P5=new T,o6=new T,R7=new T,P7=new T,B3=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,P5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let C=t.dot(this.direction);return C<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,C)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=P5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(P5.copy(this.origin).addScaledVector(this.direction,t),P5.distanceToSquared(e))}distanceSqToSegment(e,t,C,i){o6.copy(e).add(t).multiplyScalar(.5),R7.copy(t).sub(e).normalize(),P7.copy(this.origin).sub(o6);let H=e.distanceTo(t)*.5,V=-this.direction.dot(R7),n=P7.dot(this.direction),a=-P7.dot(R7),L=P7.lengthSq(),o=Math.abs(1-V*V),M,s,l,u;if(o>0)if(M=V*a-n,s=V*n-a,u=H*o,M>=0)if(s>=-u)if(s<=u){let f=1/o;M*=f,s*=f,l=M*(M+V*s+2*n)+s*(V*M+s+2*a)+L}else s=H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;else s=-H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;else s<=-u?(M=Math.max(0,-(-V*H+n)),s=M>0?-H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+L):s<=u?(M=0,s=Math.min(Math.max(-H,-a),H),l=s*(s+2*a)+L):(M=Math.max(0,-(V*H+n)),s=M>0?H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+L);else s=V>0?-H:H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;return C&&C.copy(this.origin).addScaledVector(this.direction,M),i&&i.copy(o6).addScaledVector(R7,s),l}intersectSphere(e,t){if(e.radius<0)return null;P5.subVectors(e.center,this.origin);let C=P5.dot(this.direction),i=P5.dot(P5)-C*C,H=e.radius*e.radius;if(i>H)return null;let V=Math.sqrt(H-i),n=C-V,a=C+V;return a<0?null:n<0?this.at(a,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let C=-(this.origin.dot(e.normal)+e.constant)/t;return C>=0?C:null}intersectPlane(e,t){let C=this.distanceToPlane(e);return C===null?null:this.at(C,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let C,i,H,V,n,a,L=1/this.direction.x,o=1/this.direction.y,M=1/this.direction.z,s=this.origin;return L>=0?(C=(e.min.x-s.x)*L,i=(e.max.x-s.x)*L):(C=(e.max.x-s.x)*L,i=(e.min.x-s.x)*L),o>=0?(H=(e.min.y-s.y)*o,V=(e.max.y-s.y)*o):(H=(e.max.y-s.y)*o,V=(e.min.y-s.y)*o),C>V||H>i||((H>C||isNaN(C))&&(C=H),(V<i||isNaN(i))&&(i=V),M>=0?(n=(e.min.z-s.z)*M,a=(e.max.z-s.z)*M):(n=(e.max.z-s.z)*M,a=(e.min.z-s.z)*M),C>a||n>i)||((n>C||C!==C)&&(C=n),(a<i||i!==i)&&(i=a),i<0)?null:this.at(C>=0?C:i,t)}intersectsBox(e){return this.intersectBox(e,P5)!==null}intersectTriangle(e,t,C,i,H){let V=this.origin,n=this.direction,a=n.x,L=n.y,o=n.z,M=e.x-V.x,s=e.y-V.y,l=e.z-V.z,u=t.x-V.x,f=t.y-V.y,c=t.z-V.z,d=C.x-V.x,v=C.y-V.y,_=C.z-V.z,h=Math.abs(a),S=Math.abs(L),g=Math.abs(o),y,m,Z,R,I,N,G,P,U,Q,$,r1;if(h>=S&&h>=g?(Z=a,N=M,U=u,r1=d,a>=0?(y=L,m=o,R=s,I=l,G=f,P=c,Q=v,$=_):(y=o,m=L,R=l,I=s,G=c,P=f,Q=_,$=v)):S>=g?(Z=L,N=s,U=f,r1=v,L>=0?(y=o,m=a,R=l,I=M,G=c,P=u,Q=_,$=d):(y=a,m=o,R=M,I=l,G=u,P=c,Q=d,$=_)):(Z=o,N=l,U=c,r1=_,o>=0?(y=a,m=L,R=M,I=s,G=u,P=f,Q=d,$=v):(y=L,m=a,R=s,I=M,G=f,P=u,Q=v,$=d)),Z===0)return null;let X=y/Z,e1=m/Z,C1=1/Z,b1=R-X*N,_1=I-e1*N,r2=G-X*U,X1=P-e1*U,$1=Q-X*r1,q=$-e1*r1,j=$1*X1-q*r2,h1=b1*q-_1*$1,R1=r2*_1-X1*b1;if(i){if(j<0||h1<0||R1<0)return null}else if((j<0||h1<0||R1<0)&&(j>0||h1>0||R1>0))return null;let u1=j+h1+R1;if(u1===0)return null;let k1=C1*(j*N+h1*U+R1*r1);return(u1>0?k1<0:k1>0)?null:this.at(k1/u1,H)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},I3=class extends K5{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new I1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C5,this.combine=R6,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},se=new t2,m0=new B3,B7=new C3,Me=new T,I7=new T,F7=new T,D7=new T,s6=new T,k7=new T,le=new T,N7=new T,U2=class extends N2{constructor(e=new d5,t=new I3){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,C=Object.keys(t);if(C.length>0){let i=t[C[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,V=i.length;H<V;H++){let n=i[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=H}}}}getVertexPosition(e,t){let C=this.geometry,i=C.attributes.position,H=C.morphAttributes.position,V=C.morphTargetsRelative;t.fromBufferAttribute(i,e);let n=this.morphTargetInfluences;if(H&&n){k7.set(0,0,0);for(let a=0,L=H.length;a<L;a++){let o=n[a],M=H[a];o!==0&&(s6.fromBufferAttribute(M,e),V?k7.addScaledVector(s6,o):k7.addScaledVector(s6.sub(t),o))}t.add(k7)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let C=this.geometry,i=this.material,H=this.matrixWorld;i!==void 0&&(C.boundingSphere===null&&C.computeBoundingSphere(),B7.copy(C.boundingSphere),B7.applyMatrix4(H),m0.copy(e.ray).recast(e.near),!(B7.containsPoint(m0.origin)===!1&&(m0.intersectSphere(B7,Me)===null||m0.origin.distanceToSquared(Me)>(e.far-e.near)**2))&&(se.copy(H).invert(),m0.copy(e.ray).applyMatrix4(se),!(C.boundingBox!==null&&m0.intersectsBox(C.boundingBox)===!1)&&this._computeIntersections(e,t,m0)))}_computeIntersections(e,t,C){let i,H=this.geometry,V=this.material,n=H.index,a=H.attributes.position,L=H.attributes.uv,o=H.attributes.uv1,M=H.attributes.normal,s=H.groups,l=H.drawRange;if(n!==null)if(Array.isArray(V))for(let u=0,f=s.length;u<f;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),_=Math.min(n.count,Math.min(c.start+c.count,l.start+l.count));for(let h=v,S=_;h<S;h+=3){let g=n.getX(h),y=n.getX(h+1),m=n.getX(h+2);i=U7(this,d,e,C,L,o,M,g,y,m),i&&(i.faceIndex=Math.floor(h/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let u=Math.max(0,l.start),f=Math.min(n.count,l.start+l.count);for(let c=u,d=f;c<d;c+=3){let v=n.getX(c),_=n.getX(c+1),h=n.getX(c+2);i=U7(this,V,e,C,L,o,M,v,_,h),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(V))for(let u=0,f=s.length;u<f;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),_=Math.min(a.count,Math.min(c.start+c.count,l.start+l.count));for(let h=v,S=_;h<S;h+=3){let g=h,y=h+1,m=h+2;i=U7(this,d,e,C,L,o,M,g,y,m),i&&(i.faceIndex=Math.floor(h/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let u=Math.max(0,l.start),f=Math.min(a.count,l.start+l.count);for(let c=u,d=f;c<d;c+=3){let v=c,_=c+1,h=c+2;i=U7(this,V,e,C,L,o,M,v,_,h),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}}};function Xr(r,e,t,C,i,H,V,n){let a;if(e.side===z2?a=C.intersectTriangle(V,H,i,!0,n):a=C.intersectTriangle(i,H,V,e.side===r0,n),a===null)return null;N7.copy(n),N7.applyMatrix4(r.matrixWorld);let L=t.ray.origin.distanceTo(N7);return L<t.near||L>t.far?null:{distance:L,point:N7.clone(),object:r}}function U7(r,e,t,C,i,H,V,n,a,L){r.getVertexPosition(n,I7),r.getVertexPosition(a,F7),r.getVertexPosition(L,D7);let o=Xr(r,e,t,C,I7,F7,D7,le);if(o){let M=new T;$5.getBarycoord(le,I7,F7,D7,M),i&&(o.uv=$5.getInterpolatedAttribute(i,n,a,L,M,new m1)),H&&(o.uv1=$5.getInterpolatedAttribute(H,n,a,L,M,new m1)),V&&(o.normal=$5.getInterpolatedAttribute(V,n,a,L,M,new T),o.normal.dot(C.direction)>0&&o.normal.multiplyScalar(-1));let s={a:n,b:a,c:L,normal:new T,materialIndex:0};$5.getNormal(I7,F7,D7,s.normal),o.face=s,o.barycoord=M}return o}var a4=class extends k2{constructor(e=null,t=1,C=1,i,H,V,n,a,L=_2,o=_2,M,s){super(null,V,n,a,L,o,i,H,M,s),this.isDataTexture=!0,this.image={data:e,width:t,height:C},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var h0=new C3,qr=new m1(.5,.5),z7=new T,r3=class{constructor(e=new s5,t=new s5,C=new s5,i=new s5,H=new s5,V=new s5){this.planes=[e,t,C,i,H,V]}set(e,t,C,i,H,V){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(C),n[3].copy(i),n[4].copy(H),n[5].copy(V),this}copy(e){let t=this.planes;for(let C=0;C<6;C++)t[C].copy(e.planes[C]);return this}setFromProjectionMatrix(e,t=M5,C=!1){let i=this.planes,H=e.elements,V=H[0],n=H[1],a=H[2],L=H[3],o=H[4],M=H[5],s=H[6],l=H[7],u=H[8],f=H[9],c=H[10],d=H[11],v=H[12],_=H[13],h=H[14],S=H[15];if(i[0].setComponents(L-V,l-o,d-u,S-v).normalize(),i[1].setComponents(L+V,l+o,d+u,S+v).normalize(),i[2].setComponents(L+n,l+M,d+f,S+_).normalize(),i[3].setComponents(L-n,l-M,d-f,S-_).normalize(),C)i[4].setComponents(a,s,c,h).normalize(),i[5].setComponents(L-a,l-s,d-c,S-h).normalize();else if(i[4].setComponents(L-a,l-s,d-c,S-h).normalize(),t===M5)i[5].setComponents(L+a,l+s,d+c,S+h).normalize();else if(t===Q0)i[5].setComponents(a,s,c,h).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),h0.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),h0.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(h0)}intersectsSprite(e){h0.center.set(0,0,0);let t=qr.distanceTo(e.center);return h0.radius=.7071067811865476+t,h0.applyMatrix4(e.matrixWorld),this.intersectsSphere(h0)}intersectsSphere(e){let t=this.planes,C=e.center,i=-e.radius;for(let H=0;H<6;H++)if(t[H].distanceToPoint(C)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let C=0;C<6;C++){let i=t[C];if(z7.x=i.normal.x>0?e.max.x:e.min.x,z7.y=i.normal.y>0?e.max.y:e.min.y,z7.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(z7)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let C=0;C<6;C++)if(t[C].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var F3=class extends k2{constructor(e=[],t=i0,C,i,H,V,n,a,L,o){super(e,t,C,i,H,V,n,a,L,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},D3=class extends k2{constructor(e,t,C,i,H,V,n,a,L){super(e,t,C,i,H,V,n,a,L),this.isCanvasTexture=!0,this.needsUpdate=!0}};var J5=class extends k2{constructor(e,t,C=p5,i,H,V,n=_2,a=_2,L,o=v5,M=1){if(o!==v5&&o!==V0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let s={width:e,height:t,depth:M};super(s,i,H,V,n,a,o,C,L),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new j0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},o4=class extends J5{constructor(e,t=p5,C=i0,i,H,V=_2,n=_2,a,L=v5){let o={width:e,height:e,depth:1},M=[o,o,o,o,o,o];super(e,e,t,C,i,H,V,n,a,L),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},k3=class extends k2{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},j5=class r extends d5{constructor(e=1,t=1,C=1,i=1,H=1,V=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:C,widthSegments:i,heightSegments:H,depthSegments:V};let n=this;i=Math.floor(i),H=Math.floor(H),V=Math.floor(V);let a=[],L=[],o=[],M=[],s=0,l=0;u("z","y","x",-1,-1,C,t,e,V,H,0),u("z","y","x",1,-1,C,t,-e,V,H,1),u("x","z","y",1,1,e,C,t,i,V,2),u("x","z","y",1,-1,e,C,-t,i,V,3),u("x","y","z",1,-1,e,t,C,i,H,4),u("x","y","z",-1,-1,e,t,-C,i,H,5),this.setIndex(a),this.setAttribute("position",new D2(L,3)),this.setAttribute("normal",new D2(o,3)),this.setAttribute("uv",new D2(M,2));function u(f,c,d,v,_,h,S,g,y,m,Z){let R=h/y,I=S/m,N=h/2,G=S/2,P=g/2,U=y+1,Q=m+1,$=0,r1=0,X=new T;for(let e1=0;e1<Q;e1++){let C1=e1*I-G;for(let b1=0;b1<U;b1++){let _1=b1*R-N;X[f]=_1*v,X[c]=C1*_,X[d]=P,L.push(X.x,X.y,X.z),X[f]=0,X[c]=0,X[d]=g>0?1:-1,o.push(X.x,X.y,X.z),M.push(b1/y),M.push(1-e1/m),$+=1}}for(let e1=0;e1<m;e1++)for(let C1=0;C1<y;C1++){let b1=s+C1+U*e1,_1=s+C1+U*(e1+1),r2=s+(C1+1)+U*(e1+1),X1=s+(C1+1)+U*e1;a.push(b1,_1,X1),a.push(_1,r2,X1),r1+=6}n.addGroup(l,r1,Z),l+=r1,s+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $2=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){w1("Curve: .getPoint() not implemented.")}getPointAt(e,t){let C=this.getUtoTmapping(e);return this.getPoint(C,t)}getPoints(e=5){let t=[];for(let C=0;C<=e;C++)t.push(this.getPoint(C/e));return t}getSpacedPoints(e=5){let t=[];for(let C=0;C<=e;C++)t.push(this.getPointAt(C/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],C,i=this.getPoint(0),H=0;t.push(0);for(let V=1;V<=e;V++)C=this.getPoint(V/e),H+=C.distanceTo(i),t.push(H),i=C;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let C=this.getLengths(),i=0,H=C.length,V;t?V=t:V=e*C[H-1];let n=0,a=H-1,L;for(;n<=a;)if(i=Math.floor(n+(a-n)/2),L=C[i]-V,L<0)n=i+1;else if(L>0)a=i-1;else{a=i;break}if(i=a,C[i]===V)return i/(H-1);let o=C[i],s=C[i+1]-o,l=(V-o)/s;return(i+l)/(H-1)}getTangent(e,t){let i=e-1e-4,H=e+1e-4;i<0&&(i=0),H>1&&(H=1);let V=this.getPoint(i),n=this.getPoint(H),a=t||(V.isVector2?new m1:new T);return a.copy(n).sub(V).normalize(),a}getTangentAt(e,t){let C=this.getUtoTmapping(e);return this.getTangent(C,t)}computeFrenetFrames(e,t=!1){let C=new T,i=[],H=[],V=[],n=new T,a=new t2;for(let l=0;l<=e;l++){let u=l/e;i[l]=this.getTangentAt(u,new T)}H[0]=new T,V[0]=new T;let L=Number.MAX_VALUE,o=Math.abs(i[0].x),M=Math.abs(i[0].y),s=Math.abs(i[0].z);o<=L&&(L=o,C.set(1,0,0)),M<=L&&(L=M,C.set(0,1,0)),s<=L&&C.set(0,0,1),n.crossVectors(i[0],C).normalize(),H[0].crossVectors(i[0],n),V[0].crossVectors(i[0],H[0]);for(let l=1;l<=e;l++){if(H[l]=H[l-1].clone(),V[l]=V[l-1].clone(),n.crossVectors(i[l-1],i[l]),n.length()>Number.EPSILON){n.normalize();let u=Math.acos(N1(i[l-1].dot(i[l]),-1,1));H[l].applyMatrix4(a.makeRotationAxis(n,u))}V[l].crossVectors(i[l],H[l])}if(t===!0){let l=Math.acos(N1(H[0].dot(H[e]),-1,1));l/=e,i[0].dot(n.crossVectors(H[0],H[e]))>0&&(l=-l);for(let u=1;u<=e;u++)H[u].applyMatrix4(a.makeRotationAxis(i[u],l*u)),V[u].crossVectors(i[u],H[u])}return{tangents:i,normals:H,binormals:V}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},i3=class extends $2{constructor(e=0,t=0,C=1,i=1,H=0,V=Math.PI*2,n=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=C,this.yRadius=i,this.aStartAngle=H,this.aEndAngle=V,this.aClockwise=n,this.aRotation=a}getPoint(e,t=new m1){let C=t,i=Math.PI*2,H=this.aEndAngle-this.aStartAngle,V=Math.abs(H)<Number.EPSILON;for(;H<0;)H+=i;for(;H>i;)H-=i;H<Number.EPSILON&&(V?H=0:H=i),this.aClockwise===!0&&!V&&(H===i?H=-i:H=H-i);let n=this.aStartAngle+e*H,a=this.aX+this.xRadius*Math.cos(n),L=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let o=Math.cos(this.aRotation),M=Math.sin(this.aRotation),s=a-this.aX,l=L-this.aY;a=s*o-l*M+this.aX,L=s*M+l*o+this.aY}return C.set(a,L)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},s4=class extends i3{constructor(e,t,C,i,H,V){super(e,t,C,C,i,H,V),this.isArcCurve=!0,this.type="ArcCurve"}};function e8(){let r=0,e=0,t=0,C=0;function i(H,V,n,a){r=H,e=n,t=-3*H+3*V-2*n-a,C=2*H-2*V+n+a}return{initCatmullRom:function(H,V,n,a,L){i(V,n,L*(n-H),L*(a-V))},initNonuniformCatmullRom:function(H,V,n,a,L,o,M){let s=(V-H)/L-(n-H)/(L+o)+(n-V)/o,l=(n-V)/o-(a-V)/(o+M)+(a-n)/M;s*=o,l*=o,i(V,n,s,l)},calc:function(H){let V=H*H,n=V*H;return r+e*H+t*V+C*n}}}var de=new T,ce=new T,M6=new e8,l6=new e8,d6=new e8,M4=class extends $2{constructor(e=[],t=!1,C="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=C,this.tension=i}getPoint(e,t=new T){let C=t,i=this.points,H=i.length,V=(H-(this.closed?0:1))*e,n=Math.floor(V),a=V-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/H)+1)*H:a===0&&n===H-1&&(n=H-2,a=1);let L,o;this.closed||n>0?L=i[(n-1)%H]:(ce.subVectors(i[0],i[1]).add(i[0]),L=ce);let M=i[n%H],s=i[(n+1)%H];if(this.closed||n+2<H?o=i[(n+2)%H]:(de.subVectors(i[H-1],i[H-2]).add(i[H-1]),o=de),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,u=Math.pow(L.distanceToSquared(M),l),f=Math.pow(M.distanceToSquared(s),l),c=Math.pow(s.distanceToSquared(o),l);f<1e-4&&(f=1),u<1e-4&&(u=f),c<1e-4&&(c=f),M6.initNonuniformCatmullRom(L.x,M.x,s.x,o.x,u,f,c),l6.initNonuniformCatmullRom(L.y,M.y,s.y,o.y,u,f,c),d6.initNonuniformCatmullRom(L.z,M.z,s.z,o.z,u,f,c)}else this.curveType==="catmullrom"&&(M6.initCatmullRom(L.x,M.x,s.x,o.x,this.tension),l6.initCatmullRom(L.y,M.y,s.y,o.y,this.tension),d6.initCatmullRom(L.z,M.z,s.z,o.z,this.tension));return C.set(M6.calc(a),l6.calc(a),d6.calc(a)),C}copy(e){super.copy(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,C=this.points.length;t<C;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pe(r,e,t,C,i){let H=(C-e)*.5,V=(i-t)*.5,n=r*r,a=r*n;return(2*t-2*C+H+V)*a+(-3*t+3*C-2*H-V)*n+H*r+t}function Yr(r,e){let t=1-r;return t*t*e}function $r(r,e){return 2*(1-r)*r*e}function Qr(r,e){return r*r*e}function Z3(r,e,t,C){return Yr(r,e)+$r(r,t)+Qr(r,C)}function Kr(r,e){let t=1-r;return t*t*t*e}function Jr(r,e){let t=1-r;return 3*t*t*r*e}function jr(r,e){return 3*(1-r)*r*r*e}function ei(r,e){return r*r*r*e}function _3(r,e,t,C,i){return Kr(r,e)+Jr(r,t)+jr(r,C)+ei(r,i)}var N3=class extends $2{constructor(e=new m1,t=new m1,C=new m1,i=new m1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=C,this.v3=i}getPoint(e,t=new m1){let C=t,i=this.v0,H=this.v1,V=this.v2,n=this.v3;return C.set(_3(e,i.x,H.x,V.x,n.x),_3(e,i.y,H.y,V.y,n.y)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},l4=class extends $2{constructor(e=new T,t=new T,C=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=C,this.v3=i}getPoint(e,t=new T){let C=t,i=this.v0,H=this.v1,V=this.v2,n=this.v3;return C.set(_3(e,i.x,H.x,V.x,n.x),_3(e,i.y,H.y,V.y,n.y),_3(e,i.z,H.z,V.z,n.z)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},U3=class extends $2{constructor(e=new m1,t=new m1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new m1){let C=t;return e===1?C.copy(this.v2):(C.copy(this.v2).sub(this.v1),C.multiplyScalar(e).add(this.v1)),C}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new m1){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},d4=class extends $2{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let C=t;return e===1?C.copy(this.v2):(C.copy(this.v2).sub(this.v1),C.multiplyScalar(e).add(this.v1)),C}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},z3=class extends $2{constructor(e=new m1,t=new m1,C=new m1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=C}getPoint(e,t=new m1){let C=t,i=this.v0,H=this.v1,V=this.v2;return C.set(Z3(e,i.x,H.x,V.x),Z3(e,i.y,H.y,V.y)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},c4=class extends $2{constructor(e=new T,t=new T,C=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=C}getPoint(e,t=new T){let C=t,i=this.v0,H=this.v1,V=this.v2;return C.set(Z3(e,i.x,H.x,V.x),Z3(e,i.y,H.y,V.y),Z3(e,i.z,H.z,V.z)),C}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},G3=class extends $2{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new m1){let C=t,i=this.points,H=(i.length-1)*e,V=Math.floor(H),n=H-V,a=i[V===0?V:V-1],L=i[V],o=i[V>i.length-2?i.length-1:V+1],M=i[V>i.length-3?i.length-1:V+2];return C.set(pe(n,a.x,L.x,o.x,M.x),pe(n,a.y,L.y,o.y,M.y)),C}copy(e){super.copy(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,C=this.points.length;t<C;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,C=e.points.length;t<C;t++){let i=e.points[t];this.points.push(new m1().fromArray(i))}return this}},ue=Object.freeze({__proto__:null,ArcCurve:s4,CatmullRomCurve3:M4,CubicBezierCurve:N3,CubicBezierCurve3:l4,EllipseCurve:i3,LineCurve:U3,LineCurve3:d4,QuadraticBezierCurve:z3,QuadraticBezierCurve3:c4,SplineCurve:G3}),p4=class extends $2{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let C=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ue[C](t,e))}return this}getPoint(e,t){let C=e*this.getLength(),i=this.getCurveLengths(),H=0;for(;H<i.length;){if(i[H]>=C){let V=i[H]-C,n=this.curves[H],a=n.getLength(),L=a===0?0:1-V/a;return n.getPointAt(L,t)}H++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let C=0,i=this.curves.length;C<i;C++)t+=this.curves[C].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let C=0;C<=e;C++)t.push(this.getPoint(C/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],C;for(let i=0,H=this.curves;i<H.length;i++){let V=H[i],n=V.isEllipseCurve?e*2:V.isLineCurve||V.isLineCurve3?1:V.isSplineCurve?e*V.points.length:e,a=V.getPoints(n);for(let L=0;L<a.length;L++){let o=a[L];C&&C.equals(o)||(t.push(o),C=o)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,C=e.curves.length;t<C;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,C=this.curves.length;t<C;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,C=e.curves.length;t<C;t++){let i=e.curves[t];this.curves.push(new ue[i.type]().fromJSON(i))}return this}},W3=class extends p4{constructor(e){super(),this.type="Path",this.currentPoint=new m1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,C=e.length;t<C;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let C=new U3(this.currentPoint.clone(),new m1(e,t));return this.curves.push(C),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,C,i){let H=new z3(this.currentPoint.clone(),new m1(e,t),new m1(C,i));return this.curves.push(H),this.currentPoint.set(C,i),this}bezierCurveTo(e,t,C,i,H,V){let n=new N3(this.currentPoint.clone(),new m1(e,t),new m1(C,i),new m1(H,V));return this.curves.push(n),this.currentPoint.set(H,V),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),C=new G3(t);return this.curves.push(C),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,C,i,H,V){let n=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+n,t+a,C,i,H,V),this}absarc(e,t,C,i,H,V){return this.absellipse(e,t,C,C,i,H,V),this}ellipse(e,t,C,i,H,V,n,a){let L=this.currentPoint.x,o=this.currentPoint.y;return this.absellipse(e+L,t+o,C,i,H,V,n,a),this}absellipse(e,t,C,i,H,V,n,a){let L=new i3(e,t,C,i,H,V,n,a);if(this.curves.length>0){let M=L.getPoint(0);M.equals(this.currentPoint)||this.lineTo(M.x,M.y)}this.curves.push(L);let o=L.getPoint(1);return this.currentPoint.copy(o),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},H3=class extends W3{constructor(e){super(e),this.uuid=g0(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let C=0,i=this.holes.length;C<i;C++)t[C]=this.holes[C].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,C=e.holes.length;t<C;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,C=this.holes.length;t<C;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,C=e.holes.length;t<C;t++){let i=e.holes[t];this.holes.push(new W3().fromJSON(i))}return this}};function ti(r,e,t=2){let C=e&&e.length,i=C?e[0]*t:r.length,H=dt(r,0,i,t,!0),V=[];if(!H||H.next===H.prev)return V;let n,a,L;if(C&&(H=Vi(r,e,H,t)),r.length>80*t){n=r[0],a=r[1];let o=n,M=a;for(let s=t;s<i;s+=t){let l=r[s],u=r[s+1];l<n&&(n=l),u<a&&(a=u),l>o&&(o=l),u>M&&(M=u)}L=Math.max(o-n,M-a),L=L!==0?32767/L:0}return X3(H,V,t,n,a,L,0),V}function dt(r,e,t,C,i){let H;if(i===ui(r,e,t,C)>0)for(let V=e;V<t;V+=C)H=Ae(V/C|0,r[V],r[V+1],H);else for(let V=t-C;V>=e;V-=C)H=Ae(V/C|0,r[V],r[V+1],H);return H&&V3(H,H.next)&&(Y3(H),H=H.next),H}function x0(r,e){if(!r)return r;e||(e=r);let t=r,C;do if(C=!1,!t.steiner&&(V3(t,t.next)||l2(t.prev,t,t.next)===0)){if(Y3(t),t=e=t.prev,t===t.next)break;C=!0}else t=t.next;while(C||t!==e);return e}function X3(r,e,t,C,i,H,V){if(!r)return;!V&&H&&si(r,C,i,H);let n=r;for(;r.prev!==r.next;){let a=r.prev,L=r.next;if(H?ri(r,C,i,H):Ci(r)){e.push(a.i,r.i,L.i),Y3(r),r=L.next,n=L.next;continue}if(r=L,r===n){V?V===1?(r=ii(x0(r),e),X3(r,e,t,C,i,H,2)):V===2&&Hi(r,e,t,C,i,H):X3(x0(r),e,t,C,i,H,1);break}}}function Ci(r){let e=r.prev,t=r,C=r.next;if(l2(e,t,C)>=0)return!1;let i=e.x,H=t.x,V=C.x,n=e.y,a=t.y,L=C.y,o=Math.min(i,H,V),M=Math.min(n,a,L),s=Math.max(i,H,V),l=Math.max(n,a,L),u=C.next;for(;u!==e;){if(u.x>=o&&u.x<=s&&u.y>=M&&u.y<=l&&v3(i,n,H,a,V,L,u.x,u.y)&&l2(u.prev,u,u.next)>=0)return!1;u=u.next}return!0}function ri(r,e,t,C){let i=r.prev,H=r,V=r.next;if(l2(i,H,V)>=0)return!1;let n=i.x,a=H.x,L=V.x,o=i.y,M=H.y,s=V.y,l=Math.min(n,a,L),u=Math.min(o,M,s),f=Math.max(n,a,L),c=Math.max(o,M,s),d=f6(l,u,e,t,C),v=f6(f,c,e,t,C),_=r.prevZ,h=r.nextZ;for(;_&&_.z>=d&&h&&h.z<=v;){if(_.x>=l&&_.x<=f&&_.y>=u&&_.y<=c&&_!==i&&_!==V&&v3(n,o,a,M,L,s,_.x,_.y)&&l2(_.prev,_,_.next)>=0||(_=_.prevZ,h.x>=l&&h.x<=f&&h.y>=u&&h.y<=c&&h!==i&&h!==V&&v3(n,o,a,M,L,s,h.x,h.y)&&l2(h.prev,h,h.next)>=0))return!1;h=h.nextZ}for(;_&&_.z>=d;){if(_.x>=l&&_.x<=f&&_.y>=u&&_.y<=c&&_!==i&&_!==V&&v3(n,o,a,M,L,s,_.x,_.y)&&l2(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;h&&h.z<=v;){if(h.x>=l&&h.x<=f&&h.y>=u&&h.y<=c&&h!==i&&h!==V&&v3(n,o,a,M,L,s,h.x,h.y)&&l2(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function ii(r,e){let t=r;do{let C=t.prev,i=t.next.next;!V3(C,i)&&pt(C,t,t.next,i)&&q3(C,i)&&q3(i,C)&&(e.push(C.i,t.i,i.i),Y3(t),Y3(t.next),t=r=i),t=t.next}while(t!==r);return x0(t)}function Hi(r,e,t,C,i,H){let V=r;do{let n=V.next.next;for(;n!==V.prev;){if(V.i!==n.i&&di(V,n)){let a=ut(V,n);V=x0(V,V.next),a=x0(a,a.next),X3(V,e,t,C,i,H,0),X3(a,e,t,C,i,H,0);return}n=n.next}V=V.next}while(V!==r)}function Vi(r,e,t,C){let i=[];for(let H=0,V=e.length;H<V;H++){let n=e[H]*C,a=H<V-1?e[H+1]*C:r.length,L=dt(r,n,a,C,!1);L===L.next&&(L.steiner=!0),i.push(li(L))}i.sort(ni);for(let H=0;H<i.length;H++)t=Li(i[H],t);return t}function ni(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let C=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=C-i}return t}function Li(r,e){let t=ai(r,e);if(!t)return e;let C=ut(t,r);return x0(C,C.next),x0(t,t.next)}function ai(r,e){let t=e,C=r.x,i=r.y,H=-1/0,V;if(V3(r,t))return t;do{if(V3(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let M=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(M<=C&&M>H&&(H=M,V=t.x<t.next.x?t:t.next,M===C))return V}t=t.next}while(t!==e);if(!V)return null;let n=V,a=V.x,L=V.y,o=1/0;t=V;do{if(C>=t.x&&t.x>=a&&C!==t.x&&ct(i<L?C:H,i,a,L,i<L?H:C,i,t.x,t.y)){let M=Math.abs(i-t.y)/(C-t.x);q3(t,r)&&(M<o||M===o&&(t.x>V.x||t.x===V.x&&oi(V,t)))&&(V=t,o=M)}t=t.next}while(t!==n);return V}function oi(r,e){return l2(r.prev,r,e.prev)<0&&l2(e.next,r,r.next)<0}function si(r,e,t,C){let i=r;do i.z===0&&(i.z=f6(i.x,i.y,e,t,C)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Mi(i)}function Mi(r){let e,t=1;do{let C=r,i;r=null;let H=null;for(e=0;C;){e++;let V=C,n=0;for(let L=0;L<t&&(n++,V=V.nextZ,!!V);L++);let a=t;for(;n>0||a>0&&V;)n!==0&&(a===0||!V||C.z<=V.z)?(i=C,C=C.nextZ,n--):(i=V,V=V.nextZ,a--),H?H.nextZ=i:r=i,i.prevZ=H,H=i;C=V}H.nextZ=null,t*=2}while(e>1);return r}function f6(r,e,t,C,i){return r=(r-t)*i|0,e=(e-C)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function li(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ct(r,e,t,C,i,H,V,n){return(i-V)*(e-n)>=(r-V)*(H-n)&&(r-V)*(C-n)>=(t-V)*(e-n)&&(t-V)*(H-n)>=(i-V)*(C-n)}function v3(r,e,t,C,i,H,V,n){return!(r===V&&e===n)&&ct(r,e,t,C,i,H,V,n)}function di(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!ci(r,e)&&(q3(r,e)&&q3(e,r)&&pi(r,e)&&(l2(r.prev,r,e.prev)||l2(r,e.prev,e))||V3(r,e)&&l2(r.prev,r,r.next)>0&&l2(e.prev,e,e.next)>0)}function l2(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function V3(r,e){return r.x===e.x&&r.y===e.y}function pt(r,e,t,C){let i=W7(l2(r,e,t)),H=W7(l2(r,e,C)),V=W7(l2(t,C,r)),n=W7(l2(t,C,e));return!!(i!==H&&V!==n||i===0&&G7(r,t,e)||H===0&&G7(r,C,e)||V===0&&G7(t,r,C)||n===0&&G7(t,e,C))}function G7(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function W7(r){return r>0?1:r<0?-1:0}function ci(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&pt(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function q3(r,e){return l2(r.prev,r,r.next)<0?l2(r,e,r.next)>=0&&l2(r,r.prev,e)>=0:l2(r,e,r.prev)<0||l2(r,r.next,e)<0}function pi(r,e){let t=r,C=!1,i=(r.x+e.x)/2,H=(r.y+e.y)/2;do t.y>H!=t.next.y>H&&t.next.y!==t.y&&i<(t.next.x-t.x)*(H-t.y)/(t.next.y-t.y)+t.x&&(C=!C),t=t.next;while(t!==r);return C}function ut(r,e){let t=x6(r.i,r.x,r.y),C=x6(e.i,e.x,e.y),i=r.next,H=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,C.next=t,t.prev=C,H.next=C,C.prev=H,C}function Ae(r,e,t,C){let i=x6(r,e,t);return C?(i.next=C.next,i.prev=C,C.next.prev=i,C.next=i):(i.prev=i,i.next=i),i}function Y3(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function x6(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ui(r,e,t,C){let i=0;for(let H=e,V=t-C;H<t;H+=C)i+=(r[V]-r[H])*(r[H+1]+r[V+1]),V=H;return i}var v6=class{static triangulate(e,t,C=2){return ti(e,t,C)}},Y0=class r{static area(e){let t=e.length,C=0;for(let i=t-1,H=0;H<t;i=H++)C+=e[i].x*e[H].y-e[H].x*e[i].y;return C*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let C=[],i=[],H=[];me(e),he(C,e);let V=e.length;t.forEach(me);for(let a=0;a<t.length;a++)i.push(V),V+=t[a].length,he(C,t[a]);let n=v6.triangulate(C,i);for(let a=0;a<n.length;a+=3)H.push(n.slice(a,a+3));return H}};function me(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function he(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var $3=class r extends d5{constructor(e=1,t=1,C=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:C,heightSegments:i};let H=e/2,V=t/2,n=Math.floor(C),a=Math.floor(i),L=n+1,o=a+1,M=e/n,s=t/a,l=[],u=[],f=[],c=[];for(let d=0;d<o;d++){let v=d*s-V;for(let _=0;_<L;_++){let h=_*M-H;u.push(h,-v,0),f.push(0,0,1),c.push(_/n),c.push(1-d/a)}}for(let d=0;d<a;d++)for(let v=0;v<n;v++){let _=v+L*d,h=v+L*(d+1),S=v+1+L*(d+1),g=v+1+L*d;l.push(_,h,g),l.push(h,S,g)}this.setIndex(l),this.setAttribute("position",new D2(u,3)),this.setAttribute("normal",new D2(f,3)),this.setAttribute("uv",new D2(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Q3=class r extends d5{constructor(e=new H3([new m1(0,.5),new m1(-.5,-.5),new m1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let C=[],i=[],H=[],V=[],n=0,a=0;if(Array.isArray(e)===!1)L(e);else for(let o=0;o<e.length;o++)L(e[o]),this.addGroup(n,a,o),n+=a,a=0;this.setIndex(C),this.setAttribute("position",new D2(i,3)),this.setAttribute("normal",new D2(H,3)),this.setAttribute("uv",new D2(V,2));function L(o){let M=i.length/3,s=o.extractPoints(t),l=s.shape,u=s.holes;Y0.isClockWise(l)===!1&&(l=l.reverse());for(let c=0,d=u.length;c<d;c++){let v=u[c];Y0.isClockWise(v)===!0&&(u[c]=v.reverse())}let f=Y0.triangulateShape(l,u);for(let c=0,d=u.length;c<d;c++){let v=u[c];l=l.concat(v)}for(let c=0,d=l.length;c<d;c++){let v=l[c];i.push(v.x,v.y,0),H.push(0,0,1),V.push(v.x,v.y)}for(let c=0,d=f.length;c<d;c++){let v=f[c],_=v[0]+M,h=v[1]+M,S=v[2]+M;C.push(_,h,S),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ai(t,e)}static fromJSON(e,t){let C=[];for(let i=0,H=e.shapes.length;i<H;i++){let V=t[e.shapes[i]];C.push(V)}return new r(C,e.curveSegments)}};function Ai(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,C=r.length;t<C;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}function Z0(r){let e={};for(let t in r){e[t]={};for(let C in r[t]){let i=r[t][C];if(fe(i))i.isRenderTargetTexture?(w1("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][C]=null):e[t][C]=i.clone();else if(Array.isArray(i))if(fe(i[0])){let H=[];for(let V=0,n=i.length;V<n;V++)H[V]=i[V].clone();e[t][C]=H}else e[t][C]=i.slice();else e[t][C]=i}}return e}function P2(r){let e={};for(let t=0;t<r.length;t++){let C=Z0(r[t]);for(let i in C)e[i]=C[i]}return e}function fe(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function mi(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function t8(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:W1.workingColorSpace}var At={clone:Z0,merge:P2},hi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Q2=class extends K5{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hi,this.fragmentShader=fi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Z0(e.uniforms),this.uniformsGroups=mi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let V=this.uniforms[i].value;V&&V.isTexture?t.uniforms[i]={type:"t",value:V.toJSON(e).uuid}:V&&V.isColor?t.uniforms[i]={type:"c",value:V.getHex()}:V&&V.isVector2?t.uniforms[i]={type:"v2",value:V.toArray()}:V&&V.isVector3?t.uniforms[i]={type:"v3",value:V.toArray()}:V&&V.isVector4?t.uniforms[i]={type:"v4",value:V.toArray()}:V&&V.isMatrix3?t.uniforms[i]={type:"m3",value:V.toArray()}:V&&V.isMatrix4?t.uniforms[i]={type:"m4",value:V.toArray()}:t.uniforms[i]={value:V}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let C={};for(let i in this.extensions)this.extensions[i]===!0&&(C[i]=!0);return Object.keys(C).length>0&&(t.extensions=C),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let C in e.uniforms){let i=e.uniforms[C];switch(this.uniforms[C]={},i.type){case"t":this.uniforms[C].value=t[i.value]||null;break;case"c":this.uniforms[C].value=new I1().setHex(i.value);break;case"v2":this.uniforms[C].value=new m1().fromArray(i.value);break;case"v3":this.uniforms[C].value=new T().fromArray(i.value);break;case"v4":this.uniforms[C].value=new o2().fromArray(i.value);break;case"m3":this.uniforms[C].value=new E1().fromArray(i.value);break;case"m4":this.uniforms[C].value=new t2().fromArray(i.value);break;default:this.uniforms[C].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let C in e.extensions)this.extensions[C]=e.extensions[C];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},u4=class extends Q2{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},n3=class extends K5{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new I1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new I1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m9,this.normalScale=new m1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C5,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var A4=class extends K5{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=je,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},m4=class extends K5{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function z0(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function c6(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var e0=class{constructor(e,t,C,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(C),this.sampleValues=t,this.valueSize=C,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,C=this._cachedIndex,i=t[C],H=t[C-1];C:{e:{let V;t:{r:if(!(e<i)){for(let n=C+2;;){if(i===void 0){if(e<H)break r;return C=t.length,this._cachedIndex=C,this.copySampleValue_(C-1)}if(C===n)break;if(H=i,i=t[++C],e<i)break e}V=t.length;break t}if(!(e>=H)){let n=t[1];e<n&&(C=2,H=n);for(let a=C-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===a)break;if(i=H,H=t[--C-1],e>=H)break e}V=C,C=0;break t}break C}for(;C<V;){let n=C+V>>>1;e<t[n]?V=n:C=n+1}if(i=t[C],H=t[C-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return C=t.length,this._cachedIndex=C,this.copySampleValue_(C-1)}this._cachedIndex=C,this.intervalChanged_(C,H,i)}return this.interpolate_(C,H,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,C=this.sampleValues,i=this.valueSize,H=e*i;for(let V=0;V!==i;++V)t[V]=C[H+V];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},h4=class extends e0{constructor(e,t,C,i){super(e,t,C,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:A6,endingEnd:A6}}intervalChanged_(e,t,C){let i=this.parameterPositions,H=e-2,V=e+1,n=i[H],a=i[V];if(n===void 0)switch(this.getSettings_().endingStart){case m6:H=e,n=2*t-C;break;case h6:H=i.length-2,n=t+i[H]-i[H+1];break;default:H=e,n=C}if(a===void 0)switch(this.getSettings_().endingEnd){case m6:V=e,a=2*C-t;break;case h6:V=1,a=C+i[1]-i[0];break;default:V=e-1,a=t}let L=(C-t)*.5,o=this.valueSize;this._weightPrev=L/(t-n),this._weightNext=L/(a-C),this._offsetPrev=H*o,this._offsetNext=V*o}interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=this._offsetPrev,M=this._offsetNext,s=this._weightPrev,l=this._weightNext,u=(C-t)/(i-t),f=u*u,c=f*u,d=-s*c+2*s*f-s*u,v=(1+s)*c+(-1.5-2*s)*f+(-.5+s)*u+1,_=(-1-l)*c+(1.5+l)*f+.5*u,h=l*c-l*f;for(let S=0;S!==n;++S)H[S]=d*V[o+S]+v*V[L+S]+_*V[a+S]+h*V[M+S];return H}},f4=class extends e0{constructor(e,t,C,i){super(e,t,C,i)}interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=(C-t)/(i-t),M=1-o;for(let s=0;s!==n;++s)H[s]=V[L+s]*M+V[a+s]*o;return H}},x4=class extends e0{constructor(e,t,C,i){super(e,t,C,i)}interpolate_(e){return this.copySampleValue_(e-1)}},v4=class extends e0{interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=this.inTangents,M=this.outTangents;if(!o||!M){let u=(C-t)/(i-t),f=1-u;for(let c=0;c!==n;++c)H[c]=V[L+c]*f+V[a+c]*u;return H}let s=n*2,l=e-1;for(let u=0;u!==n;++u){let f=V[L+u],c=V[a+u],d=l*s+u*2,v=M[d],_=M[d+1],h=e*s+u*2,S=o[h],g=o[h+1],y=vi(C,t,v,S,i);H[u]=mt(y,f,_,g,c)}return H}};function mt(r,e,t,C,i){let H=1-r;return H*H*H*e+3*H*H*r*t+3*H*r*r*C+r*r*r*i}function xi(r,e,t,C,i){let H=1-r;return 3*H*H*(t-e)+6*H*r*(C-t)+3*r*r*(i-C)}function vi(r,e,t,C,i){let H=(r-e)/(i-e);for(let V=0;V<8;V++){let n=mt(H,e,t,C,i)-r;if(Math.abs(n)<1e-10)break;let a=xi(H,e,t,C,i);if(Math.abs(a)<1e-10)break;H=Math.max(0,Math.min(1,H-n/a))}return H}var K2=class{constructor(e,t,C,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=z0(t,this.TimeBufferType),this.values=z0(C,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,C;if(t.toJSON!==this.toJSON)C=t.toJSON(e);else{C={name:e.name,times:z0(e.times,Array),values:z0(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(C.interpolation=i),c6(e.settings)&&(C.settings={inTangents:z0(e.settings.inTangents,Array),outTangents:z0(e.settings.outTangents,Array)})}return C.type=e.ValueTypeName,C}InterpolantFactoryMethodDiscrete(e){return new x4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new f4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new h4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new v4(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case y3:t=this.InterpolantFactoryMethodDiscrete;break;case H4:t=this.InterpolantFactoryMethodLinear;break;case Y7:t=this.InterpolantFactoryMethodSmooth;break;case u6:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let C="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(C);return w1("KeyframeTrack:",C),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return y3;case this.InterpolantFactoryMethodLinear:return H4;case this.InterpolantFactoryMethodSmooth:return Y7;case this.InterpolantFactoryMethodBezier:return u6}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let C=0,i=t.length;C!==i;++C)t[C]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let C=0,i=t.length;C!==i;++C)t[C]*=e;c6(this.settings)&&(xe(this.settings.inTangents,e),xe(this.settings.outTangents,e))}return this}trim(e,t){let C=this.times,i=C.length,H=0,V=i-1;for(;H!==i&&C[H]<e;)++H;for(;V!==-1&&C[V]>t;)--V;if(++V,H!==0||V!==i){H>=V&&(V=Math.max(V,1),H=V-1);let n=this.getValueSize();this.times=C.slice(H,V),this.values=this.values.slice(H*n,V*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(O1("KeyframeTrack: Invalid value size in track.",this),e=!1);let C=this.times,i=this.values,H=C.length;H===0&&(O1("KeyframeTrack: Track is empty.",this),e=!1);let V=null;for(let n=0;n!==H;n++){let a=C[n];if(typeof a=="number"&&isNaN(a)){O1("KeyframeTrack: Time is not a valid number.",this,n,a),e=!1;break}if(V!==null&&V>a){O1("KeyframeTrack: Out of order keys.",this,n,a,V),e=!1;break}V=a}if(i!==void 0&&lr(i))for(let n=0,a=i.length;n!==a;++n){let L=i[n];if(isNaN(L)){O1("KeyframeTrack: Value is not a valid number.",this,n,L),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),C=this.getValueSize(),i=this.getInterpolation()===Y7,H=e.length-1,V=1;for(let n=1;n<H;++n){let a=!1,L=e[n],o=e[n+1];if(L!==o&&(n!==1||L!==e[0]))if(i)a=!0;else{let M=n*C,s=M-C,l=M+C;for(let u=0;u!==C;++u){let f=t[M+u];if(f!==t[s+u]||f!==t[l+u]){a=!0;break}}}if(a){if(n!==V){e[V]=e[n];let M=n*C,s=V*C;for(let l=0;l!==C;++l)t[s+l]=t[M+l]}++V}}if(H>0){e[V]=e[H];for(let n=H*C,a=V*C,L=0;L!==C;++L)t[a+L]=t[n+L];++V}return V!==e.length?(this.times=e.slice(0,V),this.values=t.slice(0,V*C)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),C=this.constructor,i=new C(this.name,e,t);return i.createInterpolant=this.createInterpolant,c6(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xe(r,e){for(let t=0,C=r.length;t!==C;t+=2)r[t]*=e}K2.prototype.ValueTypeName="";K2.prototype.TimeBufferType=Float32Array;K2.prototype.ValueBufferType=Float32Array;K2.prototype.DefaultInterpolation=H4;var t0=class extends K2{constructor(e,t,C){super(e,t,C)}};t0.prototype.ValueTypeName="bool";t0.prototype.ValueBufferType=Array;t0.prototype.DefaultInterpolation=y3;t0.prototype.InterpolantFactoryMethodLinear=void 0;t0.prototype.InterpolantFactoryMethodSmooth=void 0;var S4=class extends K2{constructor(e,t,C,i){super(e,t,C,i)}};S4.prototype.ValueTypeName="color";var g4=class extends K2{constructor(e,t,C,i){super(e,t,C,i)}};g4.prototype.ValueTypeName="number";var Z4=class extends e0{constructor(e,t,C,i){super(e,t,C,i)}interpolate_(e,t,C,i){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=(C-t)/(i-t),L=e*n;for(let o=L+n;L!==o;L+=4)p2.slerpFlat(H,0,V,L-n,V,L,a);return H}},K3=class extends K2{constructor(e,t,C,i){super(e,t,C,i)}InterpolantFactoryMethodLinear(e){return new Z4(this.times,this.values,this.getValueSize(),e)}};K3.prototype.ValueTypeName="quaternion";K3.prototype.InterpolantFactoryMethodSmooth=void 0;var C0=class extends K2{constructor(e,t,C){super(e,t,C)}};C0.prototype.ValueTypeName="string";C0.prototype.ValueBufferType=Array;C0.prototype.DefaultInterpolation=y3;C0.prototype.InterpolantFactoryMethodLinear=void 0;C0.prototype.InterpolantFactoryMethodSmooth=void 0;var _4=class extends K2{constructor(e,t,C,i){super(e,t,C,i)}};_4.prototype.ValueTypeName="vector";var y4=class{constructor(e,t,C){let i=this,H=!1,V=0,n=0,a,L=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=C,this._abortController=null,this.itemStart=function(o){n++,H===!1&&i.onStart!==void 0&&i.onStart(o,V,n),H=!0},this.itemEnd=function(o){V++,i.onProgress!==void 0&&i.onProgress(o,V,n),V===n&&(H=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(o){i.onError!==void 0&&i.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),a?a(o):o},this.setURLModifier=function(o){return a=o,this},this.addHandler=function(o,M){return L.push(o,M),this},this.removeHandler=function(o){let M=L.indexOf(o);return M!==-1&&L.splice(M,2),this},this.getHandler=function(o){for(let M=0,s=L.length;M<s;M+=2){let l=L[M],u=L[M+1];if(l.global&&(l.lastIndex=0),l.test(o))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ht=new y4,b4=class{constructor(e){this.manager=e!==void 0?e:ht,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let C=this;return new Promise(function(i,H){C.load(e,i,t,H)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};b4.DEFAULT_MATERIAL_NAME="__DEFAULT";var J3=class extends N2{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new I1(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var p6=new t2,ve=new T,Se=new T,T4=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new m1(512,512),this.mapType=X2,this.map=null,this.mapPass=null,this.matrix=new t2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r3,this._frameExtents=new m1(1,1),this._viewportCount=1,this._viewports=[new o2(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ve.setFromMatrixPosition(e.matrixWorld),t.position.copy(ve),Se.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Se),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,C,i){p6.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),C.setFromProjectionMatrix(p6,e.coordinateSystem,e.reversedDepth);let H=this._frameExtents,V=i?i.z/H.x:1,n=i?i.w/H.y:1,a=i?i.x/H.x:0,L=i?i.y/H.y:0;e.coordinateSystem===Q0||e.reversedDepth?t.set(.5*V,0,0,.5*V+a,0,.5*n,0,.5*n+L,0,0,1,0,0,0,0,1):t.set(.5*V,0,0,.5*V+a,0,.5*n,0,.5*n+L,0,0,.5,.5,0,0,0,1),t.multiply(p6)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},X7=new T,q7=new p2,f5=new T,j3=class extends N2{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new t2,this.projectionMatrix=new t2,this.projectionMatrixInverse=new t2,this.coordinateSystem=M5,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(X7,q7,f5),f5.x===1&&f5.y===1&&f5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(X7,q7,f5.set(1,1,1)).invert()}updateWorldMatrix(e,t,C=!1){super.updateWorldMatrix(e,t,C),this.matrixWorld.decompose(X7,q7,f5),f5.x===1&&f5.y===1&&f5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(X7,q7,f5.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Y5=new T,ge=new m1,Ze=new m1,R2=class extends j3{constructor(e=50,t=1,C=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=C,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=J0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(S3*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return J0*2*Math.atan(Math.tan(S3*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,C){Y5.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Y5.x,Y5.y).multiplyScalar(-e/Y5.z),Y5.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),C.set(Y5.x,Y5.y).multiplyScalar(-e/Y5.z)}getViewSize(e,t){return this.getViewBounds(e,ge,Ze),t.subVectors(Ze,ge)}setViewOffset(e,t,C,i,H,V){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=C,this.view.offsetY=i,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(S3*.5*this.fov)/this.zoom,C=2*t,i=this.aspect*C,H=-.5*i,V=this.view;if(this.view!==null&&this.view.enabled){let a=V.fullWidth,L=V.fullHeight;H+=V.offsetX*i/a,t-=V.offsetY*C/L,i*=V.width/a,C*=V.height/L}let n=this.filmOffset;n!==0&&(H+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(H,H+i,t,t-C,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var L3=class extends j3{constructor(e=-1,t=1,C=1,i=-1,H=.1,V=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=C,this.bottom=i,this.near=H,this.far=V,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,C,i,H,V){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=C,this.view.offsetY=i,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),C=(this.right+this.left)/2,i=(this.top+this.bottom)/2,H=C-e,V=C+e,n=i+t,a=i-t;if(this.view!==null&&this.view.enabled){let L=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=L*this.view.offsetX,V=H+L*this.view.width,n-=o*this.view.offsetY,a=n-o*this.view.height}this.projectionMatrix.makeOrthographic(H,V,n,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},S6=class extends T4{constructor(){super(new L3(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},a3=class extends J3{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(N2.DEFAULT_UP),this.updateMatrix(),this.target=new N2,this.shadow=new S6}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},e7=class extends J3{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var G0=-90,W0=1,w4=class extends N2{constructor(e,t,C){super(),this.type="CubeCamera",this.renderTarget=C,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new R2(G0,W0,e,t);i.layers=this.layers,this.add(i);let H=new R2(G0,W0,e,t);H.layers=this.layers,this.add(H);let V=new R2(G0,W0,e,t);V.layers=this.layers,this.add(V);let n=new R2(G0,W0,e,t);n.layers=this.layers,this.add(n);let a=new R2(G0,W0,e,t);a.layers=this.layers,this.add(a);let L=new R2(G0,W0,e,t);L.layers=this.layers,this.add(L)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[C,i,H,V,n,a]=t;for(let L of t)this.remove(L);if(e===M5)C.up.set(0,1,0),C.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),V.up.set(0,0,1),V.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Q0)C.up.set(0,-1,0),C.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),V.up.set(0,0,-1),V.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let L of t)this.add(L),L.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:C,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[H,V,n,a,L,o]=this.children,M=e.getRenderTarget(),s=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let f=C.texture.generateMipmaps;C.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(C,0,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,H),e.setRenderTarget(C,1,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,V),e.setRenderTarget(C,2,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(C,3,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(C,4,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,L),C.texture.generateMipmaps=f,e.setRenderTarget(C,5,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(M,s,l),e.xr.enabled=u,C.texture.needsPMREMUpdate=!0}},O4=class extends R2{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var C8="\\[\\]\\.:\\/",Si=new RegExp("["+C8+"]","g"),r8="[^"+C8+"]",gi="[^"+C8.replace("\\.","")+"]",Zi=/((?:WC+[\/:])*)/.source.replace("WC",r8),_i=/(WCOD+)?/.source.replace("WCOD",gi),yi=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",r8),bi=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",r8),Ti=new RegExp("^"+Zi+_i+yi+bi+"$"),wi=["material","materials","bones","map"],g6=class{constructor(e,t,C){let i=C||L2.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let C=this._targetGroup.nCachedObjects_,i=this._bindings[C];i!==void 0&&i.getValue(e,t)}setValue(e,t){let C=this._bindings;for(let i=this._targetGroup.nCachedObjects_,H=C.length;i!==H;++i)C[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,C=e.length;t!==C;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,C=e.length;t!==C;++t)e[t].unbind()}},L2=class r{constructor(e,t,C){this.path=t,this.parsedPath=C||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,C){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,C):new r(e,t,C)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Si,"")}static parseTrackName(e){let t=Ti.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let C={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=C.nodeName&&C.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let H=C.nodeName.substring(i+1);wi.indexOf(H)!==-1&&(C.nodeName=C.nodeName.substring(0,i),C.objectName=H)}if(C.propertyName===null||C.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return C}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let C=e.skeleton.getBoneByName(t);if(C!==void 0)return C}if(e.children){let C=function(H){for(let V=0;V<H.length;V++){let n=H[V];if(n.name===t||n.uuid===t)return n;let a=C(n.children);if(a)return a}return null},i=C(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)e[t++]=C[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)C[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)C[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let C=this.resolvedProperty;for(let i=0,H=C.length;i!==H;++i)C[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,C=t.objectName,i=t.propertyName,H=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){w1("PropertyBinding: No target node found for track: "+this.path+".");return}if(C){let L=t.objectIndex;switch(C){case"materials":if(!e.material){O1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){O1("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){O1("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===L){L=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){O1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){O1("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[C]===void 0){O1("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[C]}if(L!==void 0){if(e[L]===void 0){O1("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[L]}}let V=e[i];if(V===void 0){let L=t.nodeName;O1("PropertyBinding: Trying to update property for track: "+L+"."+i+" but it wasn't found.",e);return}let n=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?n=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(n=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(H!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){O1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){O1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[H]!==void 0&&(H=e.morphTargetDictionary[H])}a=this.BindingType.ArrayElement,this.resolvedProperty=V,this.propertyIndex=H}else V.fromArray!==void 0&&V.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=V):Array.isArray(V)?(a=this.BindingType.EntireArray,this.resolvedProperty=V):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][n]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};L2.Composite=g6;L2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};L2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};L2.prototype.GetterByBindingType=[L2.prototype._getValue_direct,L2.prototype._getValue_array,L2.prototype._getValue_arrayElement,L2.prototype._getValue_toArray];L2.prototype.SetterByBindingTypeAndVersioning=[[L2.prototype._setValue_direct,L2.prototype._setValue_direct_setNeedsUpdate,L2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[L2.prototype._setValue_array,L2.prototype._setValue_array_setNeedsUpdate,L2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[L2.prototype._setValue_arrayElement,L2.prototype._setValue_arrayElement_setNeedsUpdate,L2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[L2.prototype._setValue_fromArray,L2.prototype._setValue_fromArray_setNeedsUpdate,L2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eo=new Float32Array(1);var _e=new t2,t7=class{constructor(e,t,C=0,i=1/0){this.ray=new B3(e,t),this.near=C,this.far=i,this.camera=null,this.layers=new e3,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):O1("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _e.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_e),this}intersectObject(e,t=!0,C=[]){return Z6(e,this,C,t),C.sort(ye),C}intersectObjects(e,t=!0,C=[]){for(let i=0,H=e.length;i<H;i++)Z6(e[i],this,C,t);return C.sort(ye),C}};function ye(r,e){return r.distance-e.distance}function Z6(r,e,t,C){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&C===!0){let H=r.children;for(let V=0,n=H.length;V<n;V++)Z6(H[V],e,t,!0)}}var a8=class a8{constructor(e,t,C,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,C,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let C=0;C<4;C++)this.elements[C]=e[C+t];return this}set(e,t,C,i){let H=this.elements;return H[0]=e,H[2]=t,H[1]=C,H[3]=i,this}};a8.prototype.isMatrix2=!0;var _6=a8;function i8(r,e,t,C){let i=Oi(C);switch(t){case q6:return r*e;case $6:return r*e/i.components*i.byteLength;case k4:return r*e/i.components*i.byteLength;case n0:return r*e*2/i.components*i.byteLength;case N4:return r*e*2/i.components*i.byteLength;case Y6:return r*e*3/i.components*i.byteLength;case r5:return r*e*4/i.components*i.byteLength;case U4:return r*e*4/i.components*i.byteLength;case H7:case V7:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case n7:case L7:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case G4:case X4:return Math.max(r,16)*Math.max(e,8)/4;case z4:case W4:return Math.max(r,8)*Math.max(e,8)/2;case q4:case Y4:case Q4:case K4:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $4:case a7:case J4:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case j4:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case e9:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case t9:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case C9:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case r9:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case i9:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case H9:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case V9:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case n9:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case L9:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case a9:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case o9:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case s9:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case M9:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case l9:case d9:case c9:return Math.ceil(r/4)*Math.ceil(e/4)*16;case p9:case u9:return Math.ceil(r/4)*Math.ceil(e/4)*8;case o7:case A9:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Oi(r){switch(r){case X2:case z6:return{byteLength:1,components:1};case M3:case G6:case A5:return{byteLength:2,components:1};case F4:case D4:return{byteLength:2,components:4};case p5:case I4:case u5:return{byteLength:4,components:1};case W6:case X6:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?w1("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ut(){let r=null,e=!1,t=null,C=null;function i(H,V){C=r.requestAnimationFrame(i),t(H,V)}return{start:function(){e!==!0&&t!==null&&r!==null&&(C=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(C),e=!1},setAnimationLoop:function(H){t=H},setContext:function(H){r=H}}}function Ri(r){let e=new WeakMap;function t(n,a){let L=n.array,o=n.usage,M=L.byteLength,s=r.createBuffer();r.bindBuffer(a,s),r.bufferData(a,L,o),n.onUploadCallback();let l;if(L instanceof Float32Array)l=r.FLOAT;else if(typeof Float16Array<"u"&&L instanceof Float16Array)l=r.HALF_FLOAT;else if(L instanceof Uint16Array)n.isFloat16BufferAttribute?l=r.HALF_FLOAT:l=r.UNSIGNED_SHORT;else if(L instanceof Int16Array)l=r.SHORT;else if(L instanceof Uint32Array)l=r.UNSIGNED_INT;else if(L instanceof Int32Array)l=r.INT;else if(L instanceof Int8Array)l=r.BYTE;else if(L instanceof Uint8Array)l=r.UNSIGNED_BYTE;else if(L instanceof Uint8ClampedArray)l=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+L);return{buffer:s,type:l,bytesPerElement:L.BYTES_PER_ELEMENT,version:n.version,size:M}}function C(n,a,L){let o=a.array,M=a.updateRanges;if(r.bindBuffer(L,n),M.length===0)r.bufferSubData(L,0,o);else{M.sort((l,u)=>l.start-u.start);let s=0;for(let l=1;l<M.length;l++){let u=M[s],f=M[l];f.start<=u.start+u.count+1?u.count=Math.max(u.count,f.start+f.count-u.start):(++s,M[s]=f)}M.length=s+1;for(let l=0,u=M.length;l<u;l++){let f=M[l];r.bufferSubData(L,f.start*o.BYTES_PER_ELEMENT,o,f.start,f.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)}function H(n){n.isInterleavedBufferAttribute&&(n=n.data);let a=e.get(n);a&&(r.deleteBuffer(a.buffer),e.delete(n))}function V(n,a){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let o=e.get(n);(!o||o.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let L=e.get(n);if(L===void 0)e.set(n,t(n,a));else if(L.version<n.version){if(L.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");C(L.buffer,n,a),L.version=n.version}}return{get:i,remove:H,update:V}}var Pi=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bi=`#ifdef USE_ALPHAHASH
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
#endif`,Ii=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fi=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Di=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ki=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ni=`#ifdef USE_AOMAP
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
#endif`,Ui=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zi=`#ifdef USE_BATCHING
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
#endif`,Gi=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wi=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xi=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qi=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yi=`#ifdef USE_IRIDESCENCE
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
#endif`,$i=`#ifdef USE_BUMPMAP
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
#endif`,Qi=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ki=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ji=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ji=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,CH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,iH=`#define PI 3.141592653589793
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
} // validated`,HH=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VH=`vec3 transformedNormal = objectNormal;
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
#endif`,nH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sH="gl_FragColor = linearToOutputTexel( gl_FragColor );",MH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lH=`#ifdef USE_ENVMAP
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
#endif`,dH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cH=`#ifdef USE_ENVMAP
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
#endif`,pH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uH=`#ifdef USE_ENVMAP
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
#endif`,AH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xH=`#ifdef USE_GRADIENTMAP
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
}`,vH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZH=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_H=`#ifdef USE_ENVMAP
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
#endif`,yH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OH=`PhysicalMaterial material;
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
#endif`,EH=`uniform sampler2D dfgLUT;
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
}`,RH=`
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
#endif`,PH=`#if defined( RE_IndirectDiffuse )
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
#endif`,BH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IH=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,FH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WH=`#if defined( USE_POINTS_UV )
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
#endif`,XH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$H=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KH=`#ifdef USE_MORPHTARGETS
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
#endif`,JH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eV=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iV=`#ifdef USE_NORMALMAP
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
#endif`,HV=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VV=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nV=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LV=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aV=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oV=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sV=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MV=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lV=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dV=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cV=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pV=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mV=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hV=`float getShadowMask() {
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
}`,fV=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xV=`#ifdef USE_SKINNING
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
#endif`,vV=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SV=`#ifdef USE_SKINNING
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
#endif`,gV=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZV=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_V=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yV=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bV=`#ifdef USE_TRANSMISSION
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
#endif`,TV=`#ifdef USE_TRANSMISSION
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
#endif`,wV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RV=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,PV=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BV=`uniform sampler2D t2D;
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
}`,IV=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FV=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DV=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kV=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NV=`#include <common>
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
}`,UV=`#if DEPTH_PACKING == 3200
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
}`,zV=`#define DISTANCE
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
}`,GV=`#define DISTANCE
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
}`,WV=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XV=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qV=`uniform float scale;
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
}`,YV=`uniform vec3 diffuse;
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
}`,$V=`#include <common>
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
}`,QV=`uniform vec3 diffuse;
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
}`,KV=`#define LAMBERT
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
}`,JV=`#define LAMBERT
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
}`,jV=`#define MATCAP
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
}`,en=`#define MATCAP
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
}`,tn=`#define NORMAL
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
}`,Cn=`#define NORMAL
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
}`,rn=`#define PHONG
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
}`,Hn=`#define PHONG
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
}`,Vn=`#define STANDARD
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
}`,nn=`#define STANDARD
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
}`,Ln=`#define TOON
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
}`,an=`#define TOON
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
}`,on=`uniform float size;
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
}`,sn=`uniform vec3 diffuse;
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
}`,Mn=`#include <common>
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
}`,ln=`uniform vec3 color;
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
}`,dn=`uniform float rotation;
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
}`,cn=`uniform vec3 diffuse;
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
}`,D1={alphahash_fragment:Pi,alphahash_pars_fragment:Bi,alphamap_fragment:Ii,alphamap_pars_fragment:Fi,alphatest_fragment:Di,alphatest_pars_fragment:ki,aomap_fragment:Ni,aomap_pars_fragment:Ui,batching_pars_vertex:zi,batching_vertex:Gi,begin_vertex:Wi,beginnormal_vertex:Xi,bsdfs:qi,iridescence_fragment:Yi,bumpmap_pars_fragment:$i,clipping_planes_fragment:Qi,clipping_planes_pars_fragment:Ki,clipping_planes_pars_vertex:Ji,clipping_planes_vertex:ji,color_fragment:eH,color_pars_fragment:tH,color_pars_vertex:CH,color_vertex:rH,common:iH,cube_uv_reflection_fragment:HH,defaultnormal_vertex:VH,displacementmap_pars_vertex:nH,displacementmap_vertex:LH,emissivemap_fragment:aH,emissivemap_pars_fragment:oH,colorspace_fragment:sH,colorspace_pars_fragment:MH,envmap_fragment:lH,envmap_common_pars_fragment:dH,envmap_pars_fragment:cH,envmap_pars_vertex:pH,envmap_physical_pars_fragment:_H,envmap_vertex:uH,fog_vertex:AH,fog_pars_vertex:mH,fog_fragment:hH,fog_pars_fragment:fH,gradientmap_pars_fragment:xH,lightmap_pars_fragment:vH,lights_lambert_fragment:SH,lights_lambert_pars_fragment:gH,lights_pars_begin:ZH,lights_toon_fragment:yH,lights_toon_pars_fragment:bH,lights_phong_fragment:TH,lights_phong_pars_fragment:wH,lights_physical_fragment:OH,lights_physical_pars_fragment:EH,lights_fragment_begin:RH,lights_fragment_maps:PH,lights_fragment_end:BH,lightprobes_pars_fragment:IH,logdepthbuf_fragment:FH,logdepthbuf_pars_fragment:DH,logdepthbuf_pars_vertex:kH,logdepthbuf_vertex:NH,map_fragment:UH,map_pars_fragment:zH,map_particle_fragment:GH,map_particle_pars_fragment:WH,metalnessmap_fragment:XH,metalnessmap_pars_fragment:qH,morphinstance_vertex:YH,morphcolor_vertex:$H,morphnormal_vertex:QH,morphtarget_pars_vertex:KH,morphtarget_vertex:JH,normal_fragment_begin:jH,normal_fragment_maps:eV,normal_pars_fragment:tV,normal_pars_vertex:CV,normal_vertex:rV,normalmap_pars_fragment:iV,clearcoat_normal_fragment_begin:HV,clearcoat_normal_fragment_maps:VV,clearcoat_pars_fragment:nV,iridescence_pars_fragment:LV,opaque_fragment:aV,packing:oV,premultiplied_alpha_fragment:sV,project_vertex:MV,dithering_fragment:lV,dithering_pars_fragment:dV,roughnessmap_fragment:cV,roughnessmap_pars_fragment:pV,shadowmap_pars_fragment:uV,shadowmap_pars_vertex:AV,shadowmap_vertex:mV,shadowmask_pars_fragment:hV,skinbase_vertex:fV,skinning_pars_vertex:xV,skinning_vertex:vV,skinnormal_vertex:SV,specularmap_fragment:gV,specularmap_pars_fragment:ZV,tonemapping_fragment:_V,tonemapping_pars_fragment:yV,transmission_fragment:bV,transmission_pars_fragment:TV,uv_pars_fragment:wV,uv_pars_vertex:OV,uv_vertex:EV,worldpos_vertex:RV,background_vert:PV,background_frag:BV,backgroundCube_vert:IV,backgroundCube_frag:FV,cube_vert:DV,cube_frag:kV,depth_vert:NV,depth_frag:UV,distance_vert:zV,distance_frag:GV,equirect_vert:WV,equirect_frag:XV,linedashed_vert:qV,linedashed_frag:YV,meshbasic_vert:$V,meshbasic_frag:QV,meshlambert_vert:KV,meshlambert_frag:JV,meshmatcap_vert:jV,meshmatcap_frag:en,meshnormal_vert:tn,meshnormal_frag:Cn,meshphong_vert:rn,meshphong_frag:Hn,meshphysical_vert:Vn,meshphysical_frag:nn,meshtoon_vert:Ln,meshtoon_frag:an,points_vert:on,points_frag:sn,shadow_vert:Mn,shadow_frag:ln,sprite_vert:dn,sprite_frag:cn},M1={common:{diffuse:{value:new I1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new E1},alphaMap:{value:null},alphaMapTransform:{value:new E1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new E1}},envmap:{envMap:{value:null},envMapRotation:{value:new E1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new E1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new E1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new E1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new E1},normalScale:{value:new m1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new E1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new E1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new E1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new E1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new I1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new E1},alphaTest:{value:0},uvTransform:{value:new E1}},sprite:{diffuse:{value:new I1(16777215)},opacity:{value:1},center:{value:new m1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new E1},alphaMap:{value:null},alphaMapTransform:{value:new E1},alphaTest:{value:0}}},y5={basic:{uniforms:P2([M1.common,M1.specularmap,M1.envmap,M1.aomap,M1.lightmap,M1.fog]),vertexShader:D1.meshbasic_vert,fragmentShader:D1.meshbasic_frag},lambert:{uniforms:P2([M1.common,M1.specularmap,M1.envmap,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.fog,M1.lights,{emissive:{value:new I1(0)},envMapIntensity:{value:1}}]),vertexShader:D1.meshlambert_vert,fragmentShader:D1.meshlambert_frag},phong:{uniforms:P2([M1.common,M1.specularmap,M1.envmap,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.fog,M1.lights,{emissive:{value:new I1(0)},specular:{value:new I1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:D1.meshphong_vert,fragmentShader:D1.meshphong_frag},standard:{uniforms:P2([M1.common,M1.envmap,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.roughnessmap,M1.metalnessmap,M1.fog,M1.lights,{emissive:{value:new I1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:D1.meshphysical_vert,fragmentShader:D1.meshphysical_frag},toon:{uniforms:P2([M1.common,M1.aomap,M1.lightmap,M1.emissivemap,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.gradientmap,M1.fog,M1.lights,{emissive:{value:new I1(0)}}]),vertexShader:D1.meshtoon_vert,fragmentShader:D1.meshtoon_frag},matcap:{uniforms:P2([M1.common,M1.bumpmap,M1.normalmap,M1.displacementmap,M1.fog,{matcap:{value:null}}]),vertexShader:D1.meshmatcap_vert,fragmentShader:D1.meshmatcap_frag},points:{uniforms:P2([M1.points,M1.fog]),vertexShader:D1.points_vert,fragmentShader:D1.points_frag},dashed:{uniforms:P2([M1.common,M1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:D1.linedashed_vert,fragmentShader:D1.linedashed_frag},depth:{uniforms:P2([M1.common,M1.displacementmap]),vertexShader:D1.depth_vert,fragmentShader:D1.depth_frag},normal:{uniforms:P2([M1.common,M1.bumpmap,M1.normalmap,M1.displacementmap,{opacity:{value:1}}]),vertexShader:D1.meshnormal_vert,fragmentShader:D1.meshnormal_frag},sprite:{uniforms:P2([M1.sprite,M1.fog]),vertexShader:D1.sprite_vert,fragmentShader:D1.sprite_frag},background:{uniforms:{uvTransform:{value:new E1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:D1.background_vert,fragmentShader:D1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new E1}},vertexShader:D1.backgroundCube_vert,fragmentShader:D1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:D1.cube_vert,fragmentShader:D1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:D1.equirect_vert,fragmentShader:D1.equirect_frag},distance:{uniforms:P2([M1.common,M1.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:D1.distance_vert,fragmentShader:D1.distance_frag},shadow:{uniforms:P2([M1.lights,M1.fog,{color:{value:new I1(0)},opacity:{value:1}}]),vertexShader:D1.shadow_vert,fragmentShader:D1.shadow_frag}};y5.physical={uniforms:P2([y5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new E1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new E1},clearcoatNormalScale:{value:new m1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new E1},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new E1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new E1},sheen:{value:0},sheenColor:{value:new I1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new E1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new E1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new E1},transmissionSamplerSize:{value:new m1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new E1},attenuationDistance:{value:0},attenuationColor:{value:new I1(0)},specularColor:{value:new I1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new E1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new E1},anisotropyVector:{value:new m1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new E1}}]),vertexShader:D1.meshphysical_vert,fragmentShader:D1.meshphysical_frag};var x9={r:0,b:0,g:0},pn=new t2,zt=new E1;zt.set(-1,0,0,0,1,0,0,0,1);function un(r,e,t,C,i,H){let V=new I1(0),n=i===!0?0:1,a,L,o=null,M=0,s=null;function l(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let h=v.backgroundBlurriness>0;_=e.get(_,h)}return _}function u(v){let _=!1,h=l(v);h===null?c(V,n):h&&h.isColor&&(c(h,1),_=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,H):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,H),(r.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(v,_){let h=l(_);h&&(h.isCubeTexture||h.mapping===r7)?(L===void 0&&(L=new U2(new j5(1,1,1),new Q2({name:"BackgroundCubeMaterial",uniforms:Z0(y5.backgroundCube.uniforms),vertexShader:y5.backgroundCube.vertexShader,fragmentShader:y5.backgroundCube.fragmentShader,side:z2,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),L.geometry.deleteAttribute("normal"),L.geometry.deleteAttribute("uv"),L.onBeforeRender=function(S,g,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(L.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(L)),L.material.uniforms.envMap.value=h,L.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,L.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,L.material.uniforms.backgroundRotation.value.setFromMatrix4(pn.makeRotationFromEuler(_.backgroundRotation)).transpose(),h.isCubeTexture&&h.isRenderTargetTexture===!1&&L.material.uniforms.backgroundRotation.value.premultiply(zt),L.material.toneMapped=W1.getTransfer(h.colorSpace)!==J1,(o!==h||M!==h.version||s!==r.toneMapping)&&(L.material.needsUpdate=!0,o=h,M=h.version,s=r.toneMapping),L.layers.enableAll(),v.unshift(L,L.geometry,L.material,0,0,null)):h&&h.isTexture&&(a===void 0&&(a=new U2(new $3(2,2),new Q2({name:"BackgroundMaterial",uniforms:Z0(y5.background.uniforms),vertexShader:y5.background.vertexShader,fragmentShader:y5.background.fragmentShader,side:r0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(a)),a.material.uniforms.t2D.value=h,a.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,a.material.toneMapped=W1.getTransfer(h.colorSpace)!==J1,h.matrixAutoUpdate===!0&&h.updateMatrix(),a.material.uniforms.uvTransform.value.copy(h.matrix),(o!==h||M!==h.version||s!==r.toneMapping)&&(a.material.needsUpdate=!0,o=h,M=h.version,s=r.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null))}function c(v,_){v.getRGB(x9,t8(r)),t.buffers.color.setClear(x9.r,x9.g,x9.b,_,H)}function d(){L!==void 0&&(L.geometry.dispose(),L.material.dispose(),L=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return V},setClearColor:function(v,_=1){V.set(v),n=_,c(V,n)},getClearAlpha:function(){return n},setClearAlpha:function(v){n=v,c(V,n)},render:u,addToRenderList:f,dispose:d}}function An(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),C={},i=s(null),H=i,V=!1;function n(I,N,G,P,U){let Q=!1,$=M(I,P,G,N);H!==$&&(H=$,L(H.object)),Q=l(I,P,G,U),Q&&u(I,P,G,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(Q||V)&&(V=!1,h(I,N,G,P),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function a(){return r.createVertexArray()}function L(I){return r.bindVertexArray(I)}function o(I){return r.deleteVertexArray(I)}function M(I,N,G,P){let U=P.wireframe===!0,Q=C[N.id];Q===void 0&&(Q={},C[N.id]=Q);let $=I.isInstancedMesh===!0?I.id:0,r1=Q[$];r1===void 0&&(r1={},Q[$]=r1);let X=r1[G.id];X===void 0&&(X={},r1[G.id]=X);let e1=X[U];return e1===void 0&&(e1=s(a()),X[U]=e1),e1}function s(I){let N=[],G=[],P=[];for(let U=0;U<t;U++)N[U]=0,G[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:P,object:I,attributes:{},index:null}}function l(I,N,G,P){let U=H.attributes,Q=N.attributes,$=0,r1=G.getAttributes();for(let X in r1)if(r1[X].location>=0){let C1=U[X],b1=Q[X];if(b1===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(b1=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(b1=I.instanceColor)),C1===void 0||C1.attribute!==b1||b1&&C1.data!==b1.data)return!0;$++}return H.attributesNum!==$||H.index!==P}function u(I,N,G,P){let U={},Q=N.attributes,$=0,r1=G.getAttributes();for(let X in r1)if(r1[X].location>=0){let C1=Q[X];C1===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(C1=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(C1=I.instanceColor));let b1={};b1.attribute=C1,C1&&C1.data&&(b1.data=C1.data),U[X]=b1,$++}H.attributes=U,H.attributesNum=$,H.index=P}function f(){let I=H.newAttributes;for(let N=0,G=I.length;N<G;N++)I[N]=0}function c(I){d(I,0)}function d(I,N){let G=H.newAttributes,P=H.enabledAttributes,U=H.attributeDivisors;G[I]=1,P[I]===0&&(r.enableVertexAttribArray(I),P[I]=1),U[I]!==N&&(r.vertexAttribDivisor(I,N),U[I]=N)}function v(){let I=H.newAttributes,N=H.enabledAttributes;for(let G=0,P=N.length;G<P;G++)N[G]!==I[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function _(I,N,G,P,U,Q,$){$===!0?r.vertexAttribIPointer(I,N,G,U,Q):r.vertexAttribPointer(I,N,G,P,U,Q)}function h(I,N,G,P){f();let U=P.attributes,Q=G.getAttributes(),$=N.defaultAttributeValues;for(let r1 in Q){let X=Q[r1];if(X.location>=0){let e1=U[r1];if(e1===void 0&&(r1==="instanceMatrix"&&I.instanceMatrix&&(e1=I.instanceMatrix),r1==="instanceColor"&&I.instanceColor&&(e1=I.instanceColor)),e1!==void 0){let C1=e1.normalized,b1=e1.itemSize,_1=e.get(e1);if(_1===void 0)continue;let r2=_1.buffer,X1=_1.type,$1=_1.bytesPerElement,q=X1===r.INT||X1===r.UNSIGNED_INT||e1.gpuType===I4;if(e1.isInterleavedBufferAttribute){let j=e1.data,h1=j.stride,R1=e1.offset;if(j.isInstancedInterleavedBuffer){for(let u1=0;u1<X.locationSize;u1++)d(X.location+u1,j.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let u1=0;u1<X.locationSize;u1++)c(X.location+u1);r.bindBuffer(r.ARRAY_BUFFER,r2);for(let u1=0;u1<X.locationSize;u1++)_(X.location+u1,b1/X.locationSize,X1,C1,h1*$1,(R1+b1/X.locationSize*u1)*$1,q)}else{if(e1.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)d(X.location+j,e1.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=e1.meshPerAttribute*e1.count)}else for(let j=0;j<X.locationSize;j++)c(X.location+j);r.bindBuffer(r.ARRAY_BUFFER,r2);for(let j=0;j<X.locationSize;j++)_(X.location+j,b1/X.locationSize,X1,C1,b1*$1,b1/X.locationSize*j*$1,q)}}else if($!==void 0){let C1=$[r1];if(C1!==void 0)switch(C1.length){case 2:r.vertexAttrib2fv(X.location,C1);break;case 3:r.vertexAttrib3fv(X.location,C1);break;case 4:r.vertexAttrib4fv(X.location,C1);break;default:r.vertexAttrib1fv(X.location,C1)}}}}v()}function S(){Z();for(let I in C){let N=C[I];for(let G in N){let P=N[G];for(let U in P){let Q=P[U];for(let $ in Q)o(Q[$].object),delete Q[$];delete P[U]}}delete C[I]}}function g(I){if(C[I.id]===void 0)return;let N=C[I.id];for(let G in N){let P=N[G];for(let U in P){let Q=P[U];for(let $ in Q)o(Q[$].object),delete Q[$];delete P[U]}}delete C[I.id]}function y(I){for(let N in C){let G=C[N];for(let P in G){let U=G[P];if(U[I.id]===void 0)continue;let Q=U[I.id];for(let $ in Q)o(Q[$].object),delete Q[$];delete U[I.id]}}}function m(I){for(let N in C){let G=C[N],P=I.isInstancedMesh===!0?I.id:0,U=G[P];if(U!==void 0){for(let Q in U){let $=U[Q];for(let r1 in $)o($[r1].object),delete $[r1];delete U[Q]}delete G[P],Object.keys(G).length===0&&delete C[N]}}}function Z(){R(),V=!0,H!==i&&(H=i,L(H.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:n,reset:Z,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:g,releaseStatesOfObject:m,releaseStatesOfProgram:y,initAttributes:f,enableAttribute:c,disableUnusedAttributes:v}}function mn(r,e,t){let C;function i(a){C=a}function H(a,L){r.drawArrays(C,a,L),t.update(L,C,1)}function V(a,L,o){o!==0&&(r.drawArraysInstanced(C,a,L,o),t.update(L,C,o))}function n(a,L,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(C,a,0,L,0,o);let s=0;for(let l=0;l<o;l++)s+=L[l];t.update(s,C,1)}this.setMode=i,this.render=H,this.renderInstances=V,this.renderMultiDraw=n}function hn(r,e,t,C){let i;function H(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function V(y){return!(y!==r5&&C.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function n(y){let m=y===A5&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==X2&&y!==u5&&!m&&C.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function a(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let L=t.precision!==void 0?t.precision:"highp",o=a(L);o!==L&&(w1("WebGLRenderer:",L,"not supported, using",o,"instead."),L=o);let M=t.logarithmicDepthBuffer===!0,s=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&s===!1&&w1("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),c=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),h=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),g=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:a,textureFormatReadable:V,textureTypeReadable:n,precision:L,logarithmicDepthBuffer:M,reversedDepthBuffer:s,maxTextures:l,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:c,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:h,maxSamples:S,samples:g}}function fn(r){let e=this,t=null,C=0,i=!1,H=!1,V=new s5,n=new E1,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(M,s){let l=M.length!==0||s||C!==0||i;return i=s,C=M.length,l},this.beginShadows=function(){H=!0,o(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(M,s){t=o(M,s,0)},this.setState=function(M,s,l){let u=M.clippingPlanes,f=M.clipIntersection,c=M.clipShadows,d=r.get(M);if(!i||u===null||u.length===0||H&&!c)H?o(null):L();else{let v=H?0:C,_=v*4,h=d.clippingState||null;a.value=h,h=o(u,s,_,l);for(let S=0;S!==_;++S)h[S]=t[S];d.clippingState=h,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function L(){a.value!==t&&(a.value=t,a.needsUpdate=C>0),e.numPlanes=C,e.numIntersection=0}function o(M,s,l,u){let f=M!==null?M.length:0,c=null;if(f!==0){if(c=a.value,u!==!0||c===null){let d=l+f*4,v=s.matrixWorldInverse;n.getNormalMatrix(v),(c===null||c.length<d)&&(c=new Float32Array(d));for(let _=0,h=l;_!==f;++_,h+=4)V.copy(M[_]).applyMatrix4(v,n),V.normal.toArray(c,h),c[h+3]=V.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,c}}var c3=4,xn=6,vn=20,Sn=256,s7=new L3,ft=new I1,o8=null,s8=0,M8=0,l8=!1,gn=new T,_0=new T,S9=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,C=.1,i=100,H={}){let{size:V=256,position:n=gn}=H;o8=this._renderer.getRenderTarget(),s8=this._renderer.getActiveCubeFace(),M8=this._renderer.getActiveMipmapLevel(),l8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(V);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,C,i,a,n),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=St(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(o8,s8,M8),this._renderer.xr.enabled=l8,e.scissorTest=!1,d3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===i0||e.mapping===S0?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),o8=this._renderer.getRenderTarget(),s8=this._renderer.getActiveCubeFace(),M8=this._renderer.getActiveMipmapLevel(),l8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let C=t||this._allocateTargets();return this._textureToCubeUV(e,C),this._applyPMREM(C),this._cleanup(C),C}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,C={magFilter:y2,minFilter:y2,generateMipmaps:!1,type:A5,format:r5,colorSpace:b3,depthBuffer:!1},i=xt(e,t,C);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xt(e,t,C);let{_lodMax:H}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zn(H)),this._blurMaterial=yn(H,e,t),this._ggxMaterial=_n(H,e,t)}return i}_compileMaterial(e){let t=new U2(new d5,e);this._renderer.compile(t,s7)}_sceneToCubeUV(e,t,C,i,H){let a=new R2(90,1,t,C),L=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],M=this._renderer,s=M.autoClear,l=M.toneMapping;M.getClearColor(ft),M.toneMapping=c5,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(i),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U2(new j5,new I3({name:"PMREM.Background",side:z2,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,c=f.material,d=!1,v=e.background;v?v.isColor&&(c.color.copy(v),e.background=null,d=!0):(c.color.copy(ft),d=!0);for(let _=0;_<6;_++){let h=_%3;h===0?(a.up.set(0,L[_],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x+o[_],H.y,H.z)):h===1?(a.up.set(0,0,L[_]),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y+o[_],H.z)):(a.up.set(0,L[_],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y,H.z+o[_]));let S=this._cubeSize;d3(i,h*S,_>2?S:0,S,S),M.setRenderTarget(i),d&&M.render(f,a),M.render(e,a)}M.toneMapping=l,M.autoClear=s,e.background=v}_textureToCubeUV(e,t){let C=this._renderer,i=e.mapping===i0||e.mapping===S0;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=St()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vt());let H=i?this._cubemapMaterial:this._equirectMaterial,V=this._lodMeshes[0];V.material=H;let n=H.uniforms;n.envMap.value=e;let a=this._cubeSize;d3(t,0,0,3*a,2*a),C.setRenderTarget(t),C.render(V,s7)}_applyPMREM(e){let t=this._renderer,C=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let H=1;H<i;H++)this._applyGGXFilter(e,H-1,H);t.autoClear=C}_applyGGXFilter(e,t,C){let i=this._renderer,H=this._pingPongRenderTarget,V=this._ggxMaterial,n=this._lodMeshes[C];n.material=V;let a=V.uniforms,L=C/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),M=Math.sqrt(L*L-o*o),s=L*1.25,l=M*s,{_lodMax:u}=this,f=this._sizeLods[C],c=3*f*(C>u-c3?C-u+c3:0),d=4*(this._cubeSize-f);a.envMap.value=e.texture,a.roughness.value=l,a.mipInt.value=u-t,d3(H,c,d,3*f,2*f),i.setRenderTarget(H),i.render(n,s7),a.envMap.value=H.texture,a.roughness.value=0,a.mipInt.value=u-C,d3(e,c,d,3*f,2*f),i.setRenderTarget(e),i.render(n,s7)}_blur(e,t,C,i){let H=this._pingPongRenderTarget,V=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,H,t,C,V),this._blurPass(H,e,C,C,V)}_blurPass(e,t,C,i,H){let V=this._renderer,n=this._blurMaterial,a=this._lodMeshes[i];a.material=n;let L=n.uniforms;L.envMap.value=e.texture,L.sigma.value=H,L.mipInt.value=this._lodMax-C;let o=this._sizeLods[i],M=3*o*(i>this._lodMax-c3?i-this._lodMax+c3:0),s=4*(this._cubeSize-o);d3(t,M,s,3*o,2*o),V.setRenderTarget(t),V.render(a,s7)}};function Zn(r){let e=[],t=[],C=r,i=r-c3+1+xn;for(let H=0;H<i;H++){let V=Math.pow(2,C);e.push(V);let n=1/(V-2),a=-n,L=1+n,o=[a,a,L,a,L,L,a,a,L,L,a,L],M=6,s=6,l=3,u=new Float32Array(l*s*M),f=new Float32Array(l*s*M);for(let d=0;d<M;d++){let v=d%3*2/3-1,_=d>2?0:-1,h=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];u.set(h,l*s*d);for(let S=0;S<s;S++){let g=o[S*2]*2-1,y=o[S*2+1]*2-1;d===0?_0.set(1,y,g):d===1?_0.set(-g,1,-y):d===2?_0.set(-g,y,1):d===3?_0.set(-1,y,-g):d===4?_0.set(-g,-1,y):_0.set(g,y,-1),_0.toArray(f,(d*s+S)*l)}}let c=new d5;c.setAttribute("position",new t5(u,l)),c.setAttribute("outputDirection",new t5(f,l)),t.push(new U2(c,null)),C>c3&&C--}return{lodMeshes:t,sizeLods:e}}function xt(r,e,t){let C=new W2(r,e,t);return C.texture.mapping=r7,C.texture.name="PMREM.cubeUv",C.scissorTest=!0,C}function d3(r,e,t,C,i){r.viewport.set(e,t,C,i),r.scissor.set(e,t,C,i)}function _n(r,e,t){return new Q2({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_9(),fragmentShader:`

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
		`,blending:Z5,depthTest:!1,depthWrite:!1})}function yn(r,e,t){return new Q2({name:"SphericalGaussianBlur",defines:{SAMPLES:vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_9(),fragmentShader:`

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
		`,blending:Z5,depthTest:!1,depthWrite:!1})}function vt(){return new Q2({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_9(),fragmentShader:`

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
		`,blending:Z5,depthTest:!1,depthWrite:!1})}function St(){return new Q2({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_9(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Z5,depthTest:!1,depthWrite:!1})}function _9(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var g9=class extends W2{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let C={width:e,height:e,depth:1},i=[C,C,C,C,C,C];this.texture=new F3(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let C={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new j5(5,5,5),H=new Q2({name:"CubemapFromEquirect",uniforms:Z0(C.uniforms),vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,side:z2,blending:Z5});H.uniforms.tEquirect.value=t;let V=new U2(i,H),n=t.minFilter;return t.minFilter===H0&&(t.minFilter=y2),new w4(1,10,this).update(e,V),t.minFilter=n,V.geometry.dispose(),V.material.dispose(),this}clear(e,t=!0,C=!0,i=!0){let H=e.getRenderTarget();for(let V=0;V<6;V++)e.setRenderTarget(this,V),e.clear(t,C,i);e.setRenderTarget(H)}};function bn(r){let e=new WeakMap,t=new WeakMap,C=null;function i(s,l=!1){return s==null?null:l?V(s):H(s)}function H(s){if(s&&s.isTexture){let l=s.mapping;if(l===R4||l===P4)if(e.has(s)){let u=e.get(s).texture;return n(u,s.mapping)}else{let u=s.image;if(u&&u.height>0){let f=new g9(u.height);return f.fromEquirectangularTexture(r,s),e.set(s,f),s.addEventListener("dispose",L),n(f.texture,s.mapping)}else return null}}return s}function V(s){if(s&&s.isTexture){let l=s.mapping,u=l===R4||l===P4,f=l===i0||l===S0;if(u||f){let c=t.get(s),d=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return C===null&&(C=new S9(r)),c=u?C.fromEquirectangular(s,c):C.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),c.texture;if(c!==void 0)return c.texture;{let v=s.image;return u&&v&&v.height>0||f&&v&&a(v)?(C===null&&(C=new S9(r)),c=u?C.fromEquirectangular(s):C.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),s.addEventListener("dispose",o),c.texture):null}}}return s}function n(s,l){return l===R4?s.mapping=i0:l===P4&&(s.mapping=S0),s}function a(s){let l=0,u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function L(s){let l=s.target;l.removeEventListener("dispose",L);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(s){let l=s.target;l.removeEventListener("dispose",o);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function M(){e=new WeakMap,t=new WeakMap,C!==null&&(C.dispose(),C=null)}return{get:i,dispose:M}}function Tn(r){let e={};function t(C){if(e[C]!==void 0)return e[C];let i=r.getExtension(C);return e[C]=i,i}return{has:function(C){return t(C)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(C){let i=t(C);return i===null&&f0("WebGLRenderer: "+C+" extension not supported."),i}}}function wn(r,e,t,C){let i={},H=new WeakMap;function V(M){let s=M.target;s.index!==null&&e.remove(s.index);for(let u in s.attributes)e.remove(s.attributes[u]);s.removeEventListener("dispose",V),delete i[s.id];let l=H.get(s);l&&(e.remove(l),H.delete(s)),C.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,t.memory.geometries--}function n(M,s){return i[s.id]===!0||(s.addEventListener("dispose",V),i[s.id]=!0,t.memory.geometries++),s}function a(M){let s=M.attributes;for(let l in s)e.update(s[l],r.ARRAY_BUFFER)}function L(M){let s=[],l=M.index,u=M.attributes.position,f=0;if(u===void 0)return;if(l!==null){let v=l.array;f=l.version;for(let _=0,h=v.length;_<h;_+=3){let S=v[_+0],g=v[_+1],y=v[_+2];s.push(S,g,g,y,y,S)}}else{let v=u.array;f=u.version;for(let _=0,h=v.length/3-1;_<h;_+=3){let S=_+0,g=_+1,y=_+2;s.push(S,g,g,y,y,S)}}let c=new(u.count>=65535?P3:R3)(s,1);c.version=f;let d=H.get(M);d&&e.remove(d),H.set(M,c)}function o(M){let s=H.get(M);if(s){let l=M.index;l!==null&&s.version<l.version&&L(M)}else L(M);return H.get(M)}return{get:n,update:a,getWireframeAttribute:o}}function On(r,e,t){let C;function i(M){C=M}let H,V;function n(M){H=M.type,V=M.bytesPerElement}function a(M,s){r.drawElements(C,s,H,M*V),t.update(s,C,1)}function L(M,s,l){l!==0&&(r.drawElementsInstanced(C,s,H,M*V,l),t.update(s,C,l))}function o(M,s,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(C,s,0,H,M,0,l);let f=0;for(let c=0;c<l;c++)f+=s[c];t.update(f,C,1)}this.setMode=i,this.setIndex=n,this.render=a,this.renderInstances=L,this.renderMultiDraw=o}function En(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function C(H,V,n){switch(t.calls++,V){case r.TRIANGLES:t.triangles+=n*(H/3);break;case r.LINES:t.lines+=n*(H/2);break;case r.LINE_STRIP:t.lines+=n*(H-1);break;case r.LINE_LOOP:t.lines+=n*H;break;case r.POINTS:t.points+=n*H;break;default:O1("WebGLInfo: Unknown draw mode:",V);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:C}}function Rn(r,e,t){let C=new WeakMap,i=new o2;function H(V,n,a){let L=V.morphTargetInfluences,o=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,M=o!==void 0?o.length:0,s=C.get(n);if(s===void 0||s.count!==M){let Z=function(){y.dispose(),C.delete(n),n.removeEventListener("dispose",Z)};s!==void 0&&s.texture.dispose();let l=n.morphAttributes.position!==void 0,u=n.morphAttributes.normal!==void 0,f=n.morphAttributes.color!==void 0,c=n.morphAttributes.position||[],d=n.morphAttributes.normal||[],v=n.morphAttributes.color||[],_=0;l===!0&&(_=1),u===!0&&(_=2),f===!0&&(_=3);let h=n.attributes.position.count*_,S=1;h>e.maxTextureSize&&(S=Math.ceil(h/e.maxTextureSize),h=e.maxTextureSize);let g=new Float32Array(h*S*4*M),y=new O3(g,h,S,M);y.type=u5,y.needsUpdate=!0;let m=_*4;for(let R=0;R<M;R++){let I=c[R],N=d[R],G=v[R],P=h*S*4*R;for(let U=0;U<I.count;U++){let Q=U*m;l===!0&&(i.fromBufferAttribute(I,U),g[P+Q+0]=i.x,g[P+Q+1]=i.y,g[P+Q+2]=i.z,g[P+Q+3]=0),u===!0&&(i.fromBufferAttribute(N,U),g[P+Q+4]=i.x,g[P+Q+5]=i.y,g[P+Q+6]=i.z,g[P+Q+7]=0),f===!0&&(i.fromBufferAttribute(G,U),g[P+Q+8]=i.x,g[P+Q+9]=i.y,g[P+Q+10]=i.z,g[P+Q+11]=G.itemSize===4?i.w:1)}}s={count:M,texture:y,size:new m1(h,S)},C.set(n,s),n.addEventListener("dispose",Z)}if(V.isInstancedMesh===!0&&V.morphTexture!==null)a.getUniforms().setValue(r,"morphTexture",V.morphTexture,t);else{let l=0;for(let f=0;f<L.length;f++)l+=L[f];let u=n.morphTargetsRelative?1:1-l;a.getUniforms().setValue(r,"morphTargetBaseInfluence",u),a.getUniforms().setValue(r,"morphTargetInfluences",L)}a.getUniforms().setValue(r,"morphTargetsTexture",s.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",s.size)}return{update:H}}function Pn(r,e,t,C,i){let H=new WeakMap;function V(L){let o=i.render.frame,M=L.geometry,s=e.get(L,M);if(H.get(s)!==o&&(e.update(s),H.set(s,o)),L.isInstancedMesh&&(L.hasEventListener("dispose",a)===!1&&L.addEventListener("dispose",a),H.get(L)!==o&&(t.update(L.instanceMatrix,r.ARRAY_BUFFER),L.instanceColor!==null&&t.update(L.instanceColor,r.ARRAY_BUFFER),H.set(L,o))),L.isSkinnedMesh){let l=L.skeleton;H.get(l)!==o&&(l.update(),H.set(l,o))}return s}function n(){H=new WeakMap}function a(L){let o=L.target;o.removeEventListener("dispose",a),C.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:V,dispose:n}}var Bn={[P6]:"LINEAR_TONE_MAPPING",[B6]:"REINHARD_TONE_MAPPING",[I6]:"CINEON_TONE_MAPPING",[F6]:"ACES_FILMIC_TONE_MAPPING",[k6]:"AGX_TONE_MAPPING",[N6]:"NEUTRAL_TONE_MAPPING",[D6]:"CUSTOM_TONE_MAPPING"};function In(r,e,t,C,i,H){let V=new W2(e,t,{type:r,depthBuffer:i,stencilBuffer:H,samples:C?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),n=null,a=null,L=new d5;L.setAttribute("position",new D2([-1,3,0,-1,-1,0,3,-1,0],3)),L.setAttribute("uv",new D2([0,2,0,0,2,0],2));let o=new u4({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),M=new U2(L,o),s=new L3(-1,1,1,-1,0,1),l=null,u=null,f=!1,c,d=null,v=[],_=!1;this.setSize=function(h,S){V.setSize(h,S),n!==null&&n.setSize(h,S),a!==null&&a.setSize(h,S);for(let g=0;g<v.length;g++){let y=v[g];y.setSize&&y.setSize(h,S)}},this.setEffects=function(h){v=h,_=v.length>0&&v[0].isRenderPass===!0;let S=V.width,g=V.height;v.length>0&&n===null&&(n=new W2(S,g,{type:A5,depthBuffer:!1,stencilBuffer:!1}),a=new W2(S,g,{type:A5,depthBuffer:!1,stencilBuffer:!1}));for(let y=0;y<v.length;y++){let m=v[y];m.setSize&&m.setSize(S,g)}},this.begin=function(h,S){if(f||h.toneMapping===c5&&v.length===0)return!1;if(d=S,S!==null){let g=S.width,y=S.height;(V.width!==g||V.height!==y)&&this.setSize(g,y)}return _===!1&&h.setRenderTarget(V),c=h.toneMapping,h.toneMapping=c5,!0},this.hasRenderPass=function(){return _},this.end=function(h,S){h.toneMapping=c,f=!0;let g=V,y=n;for(let m=0;m<v.length;m++){let Z=v[m];Z.enabled!==!1&&(Z.render(h,y,g,S),Z.needsSwap!==!1&&(g=y,y=y===n?a:n))}if(l!==h.outputColorSpace||u!==h.toneMapping){l=h.outputColorSpace,u=h.toneMapping,o.defines={},W1.getTransfer(l)===J1&&(o.defines.SRGB_TRANSFER="");let m=Bn[u];m&&(o.defines[m]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=g.texture,h.setRenderTarget(d),h.render(M,s),d=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){V.dispose(),n!==null&&n.dispose(),a!==null&&a.dispose(),L.dispose(),o.dispose()}}var Gt=new k2,p8=new J5(1,1),Wt=new O3,Xt=new L4,qt=new F3,gt=[],Zt=[],_t=new Float32Array(16),yt=new Float32Array(9),bt=new Float32Array(4);function u3(r,e,t){let C=r[0];if(C<=0||C>0)return r;let i=e*t,H=gt[i];if(H===void 0&&(H=new Float32Array(i),gt[i]=H),e!==0){C.toArray(H,0);for(let V=1,n=0;V!==e;++V)n+=t,r[V].toArray(H,n)}return H}function f2(r,e){if(r.length!==e.length)return!1;for(let t=0,C=r.length;t<C;t++)if(r[t]!==e[t])return!1;return!0}function x2(r,e){for(let t=0,C=e.length;t<C;t++)r[t]=e[t]}function y9(r,e){let t=Zt[e];t===void 0&&(t=new Int32Array(e),Zt[e]=t);for(let C=0;C!==e;++C)t[C]=r.allocateTextureUnit();return t}function Fn(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f2(t,e))return;r.uniform2fv(this.addr,e),x2(t,e)}}function kn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(f2(t,e))return;r.uniform3fv(this.addr,e),x2(t,e)}}function Nn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f2(t,e))return;r.uniform4fv(this.addr,e),x2(t,e)}}function Un(r,e){let t=this.cache,C=e.elements;if(C===void 0){if(f2(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),x2(t,e)}else{if(f2(t,C))return;bt.set(C),r.uniformMatrix2fv(this.addr,!1,bt),x2(t,C)}}function zn(r,e){let t=this.cache,C=e.elements;if(C===void 0){if(f2(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),x2(t,e)}else{if(f2(t,C))return;yt.set(C),r.uniformMatrix3fv(this.addr,!1,yt),x2(t,C)}}function Gn(r,e){let t=this.cache,C=e.elements;if(C===void 0){if(f2(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),x2(t,e)}else{if(f2(t,C))return;_t.set(C),r.uniformMatrix4fv(this.addr,!1,_t),x2(t,C)}}function Wn(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f2(t,e))return;r.uniform2iv(this.addr,e),x2(t,e)}}function qn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(f2(t,e))return;r.uniform3iv(this.addr,e),x2(t,e)}}function Yn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f2(t,e))return;r.uniform4iv(this.addr,e),x2(t,e)}}function $n(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f2(t,e))return;r.uniform2uiv(this.addr,e),x2(t,e)}}function Kn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(f2(t,e))return;r.uniform3uiv(this.addr,e),x2(t,e)}}function Jn(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f2(t,e))return;r.uniform4uiv(this.addr,e),x2(t,e)}}function jn(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i);let H;this.type===r.SAMPLER_2D_SHADOW?(p8.compareFunction=t.isReversedDepthBuffer()?f9:h9,H=p8):H=Gt,t.setTexture2D(e||H,i)}function eL(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i),t.setTexture3D(e||Xt,i)}function tL(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i),t.setTextureCube(e||qt,i)}function CL(r,e,t){let C=this.cache,i=t.allocateTextureUnit();C[0]!==i&&(r.uniform1i(this.addr,i),C[0]=i),t.setTexture2DArray(e||Wt,i)}function rL(r){switch(r){case 5126:return Fn;case 35664:return Dn;case 35665:return kn;case 35666:return Nn;case 35674:return Un;case 35675:return zn;case 35676:return Gn;case 5124:case 35670:return Wn;case 35667:case 35671:return Xn;case 35668:case 35672:return qn;case 35669:case 35673:return Yn;case 5125:return $n;case 36294:return Qn;case 36295:return Kn;case 36296:return Jn;case 35678:case 36198:case 36298:case 36306:case 35682:return jn;case 35679:case 36299:case 36307:return eL;case 35680:case 36300:case 36308:case 36293:return tL;case 36289:case 36303:case 36311:case 36292:return CL}}function iL(r,e){r.uniform1fv(this.addr,e)}function HL(r,e){let t=u3(e,this.size,2);r.uniform2fv(this.addr,t)}function VL(r,e){let t=u3(e,this.size,3);r.uniform3fv(this.addr,t)}function nL(r,e){let t=u3(e,this.size,4);r.uniform4fv(this.addr,t)}function LL(r,e){let t=u3(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function aL(r,e){let t=u3(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oL(r,e){let t=u3(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sL(r,e){r.uniform1iv(this.addr,e)}function ML(r,e){r.uniform2iv(this.addr,e)}function lL(r,e){r.uniform3iv(this.addr,e)}function dL(r,e){r.uniform4iv(this.addr,e)}function cL(r,e){r.uniform1uiv(this.addr,e)}function pL(r,e){r.uniform2uiv(this.addr,e)}function uL(r,e){r.uniform3uiv(this.addr,e)}function AL(r,e){r.uniform4uiv(this.addr,e)}function mL(r,e,t){let C=this.cache,i=e.length,H=y9(t,i);f2(C,H)||(r.uniform1iv(this.addr,H),x2(C,H));let V;this.type===r.SAMPLER_2D_SHADOW?V=p8:V=Gt;for(let n=0;n!==i;++n)t.setTexture2D(e[n]||V,H[n])}function hL(r,e,t){let C=this.cache,i=e.length,H=y9(t,i);f2(C,H)||(r.uniform1iv(this.addr,H),x2(C,H));for(let V=0;V!==i;++V)t.setTexture3D(e[V]||Xt,H[V])}function fL(r,e,t){let C=this.cache,i=e.length,H=y9(t,i);f2(C,H)||(r.uniform1iv(this.addr,H),x2(C,H));for(let V=0;V!==i;++V)t.setTextureCube(e[V]||qt,H[V])}function xL(r,e,t){let C=this.cache,i=e.length,H=y9(t,i);f2(C,H)||(r.uniform1iv(this.addr,H),x2(C,H));for(let V=0;V!==i;++V)t.setTexture2DArray(e[V]||Wt,H[V])}function vL(r){switch(r){case 5126:return iL;case 35664:return HL;case 35665:return VL;case 35666:return nL;case 35674:return LL;case 35675:return aL;case 35676:return oL;case 5124:case 35670:return sL;case 35667:case 35671:return ML;case 35668:case 35672:return lL;case 35669:case 35673:return dL;case 5125:return cL;case 36294:return pL;case 36295:return uL;case 36296:return AL;case 35678:case 36198:case 36298:case 36306:case 35682:return mL;case 35679:case 36299:case 36307:return hL;case 35680:case 36300:case 36308:case 36293:return fL;case 36289:case 36303:case 36311:case 36292:return xL}}var u8=class{constructor(e,t,C){this.id=e,this.addr=C,this.cache=[],this.type=t.type,this.setValue=rL(t.type)}},A8=class{constructor(e,t,C){this.id=e,this.addr=C,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vL(t.type)}},m8=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,C){let i=this.seq;for(let H=0,V=i.length;H!==V;++H){let n=i[H];n.setValue(e,t[n.id],C)}}},d8=/(\w+)(\])?(\[|\.)?/g;function Tt(r,e){r.seq.push(e),r.map[e.id]=e}function SL(r,e,t){let C=r.name,i=C.length;for(d8.lastIndex=0;;){let H=d8.exec(C),V=d8.lastIndex,n=H[1],a=H[2]==="]",L=H[3];if(a&&(n=n|0),L===void 0||L==="["&&V+2===i){Tt(t,L===void 0?new u8(n,r,e):new A8(n,r,e));break}else{let M=t.map[n];M===void 0&&(M=new m8(n),Tt(t,M)),t=M}}}var p3=class{constructor(e,t){this.seq=[],this.map={};let C=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let V=0;V<C;++V){let n=e.getActiveUniform(t,V),a=e.getUniformLocation(t,n.name);SL(n,a,this)}let i=[],H=[];for(let V of this.seq)V.type===e.SAMPLER_2D_SHADOW||V.type===e.SAMPLER_CUBE_SHADOW||V.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(V):H.push(V);i.length>0&&(this.seq=i.concat(H))}setValue(e,t,C,i){let H=this.map[t];H!==void 0&&H.setValue(e,C,i)}setOptional(e,t,C){let i=t[C];i!==void 0&&this.setValue(e,C,i)}static upload(e,t,C,i){for(let H=0,V=t.length;H!==V;++H){let n=t[H],a=C[n.id];a.needsUpdate!==!1&&n.setValue(e,a.value,i)}}static seqWithValue(e,t){let C=[];for(let i=0,H=e.length;i!==H;++i){let V=e[i];V.id in t&&C.push(V)}return C}};function wt(r,e,t){let C=r.createShader(e);return r.shaderSource(C,t),r.compileShader(C),C}var gL=37297,ZL=0;function _L(r,e){let t=r.split(`
`),C=[],i=Math.max(e-6,0),H=Math.min(e+6,t.length);for(let V=i;V<H;V++){let n=V+1;C.push(`${n===e?">":" "} ${n}: ${t[V]}`)}return C.join(`
`)}var Ot=new E1;function yL(r){W1._getMatrix(Ot,W1.workingColorSpace,r);let e=`mat3( ${Ot.elements.map(t=>t.toFixed(4))} )`;switch(W1.getTransfer(r)){case T3:return[e,"LinearTransferOETF"];case J1:return[e,"sRGBTransferOETF"];default:return w1("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Et(r,e,t){let C=r.getShaderParameter(e,r.COMPILE_STATUS),H=(r.getShaderInfoLog(e)||"").trim();if(C&&H==="")return"";let V=/ERROR: 0:(\d+)/.exec(H);if(V){let n=parseInt(V[1]);return t.toUpperCase()+`

`+H+`

`+_L(r.getShaderSource(e),n)}else return H}function bL(r,e){let t=yL(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var TL={[P6]:"Linear",[B6]:"Reinhard",[I6]:"Cineon",[F6]:"ACESFilmic",[k6]:"AgX",[N6]:"Neutral",[D6]:"Custom"};function wL(r,e){let t=TL[e];return t===void 0?(w1("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var v9=new T;function OL(){W1.getLuminanceCoefficients(v9);let r=v9.x.toFixed(4),e=v9.y.toFixed(4),t=v9.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EL(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(l7).join(`
`)}function RL(r){let e=[];for(let t in r){let C=r[t];C!==!1&&e.push("#define "+t+" "+C)}return e.join(`
`)}function PL(r,e){let t={},C=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<C;i++){let H=r.getActiveAttrib(e,i),V=H.name,n=1;H.type===r.FLOAT_MAT2&&(n=2),H.type===r.FLOAT_MAT3&&(n=3),H.type===r.FLOAT_MAT4&&(n=4),t[V]={type:H.type,location:r.getAttribLocation(e,V),locationSize:n}}return t}function l7(r){return r!==""}function Rt(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pt(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var BL=/^[ \t]*#include +<([\w\d./]+)>/gm;function h8(r){return r.replace(BL,FL)}var IL=new Map;function FL(r,e){let t=D1[e];if(t===void 0){let C=IL.get(e);if(C!==void 0)t=D1[C],w1('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,C);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return h8(t)}var DL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bt(r){return r.replace(DL,kL)}function kL(r,e,t,C){let i="";for(let H=parseInt(e);H<parseInt(t);H++)i+=C.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return i}function It(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var NL={[C7]:"SHADOWMAP_TYPE_PCF",[o3]:"SHADOWMAP_TYPE_VSM"};function UL(r){return NL[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zL={[i0]:"ENVMAP_TYPE_CUBE",[S0]:"ENVMAP_TYPE_CUBE",[r7]:"ENVMAP_TYPE_CUBE_UV"};function GL(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zL[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var WL={[S0]:"ENVMAP_MODE_REFRACTION"};function XL(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":WL[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qL={[R6]:"ENVMAP_BLENDING_MULTIPLY",[Qe]:"ENVMAP_BLENDING_MIX",[Ke]:"ENVMAP_BLENDING_ADD"};function YL(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":qL[r.combine]||"ENVMAP_BLENDING_NONE"}function $L(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,C=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:C,maxMip:t}}function QL(r,e,t,C){let i=r.getContext(),H=t.defines,V=t.vertexShader,n=t.fragmentShader,a=UL(t),L=GL(t),o=XL(t),M=YL(t),s=$L(t),l=EL(t),u=RL(H),f=i.createProgram(),c,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(l7).join(`
`),c.length>0&&(c+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(l7).join(`
`),d.length>0&&(d+=`
`)):(c=[It(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(l7).join(`
`),d=[It(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+L:"",t.envMap?"#define "+o:"",t.envMap?"#define "+M:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==c5?"#define TONE_MAPPING":"",t.toneMapping!==c5?D1.tonemapping_pars_fragment:"",t.toneMapping!==c5?wL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",D1.colorspace_pars_fragment,bL("linearToOutputTexel",t.outputColorSpace),OL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(l7).join(`
`)),V=h8(V),V=Rt(V,t),V=Pt(V,t),n=h8(n),n=Rt(n,t),n=Pt(n,t),V=Bt(V),n=Bt(n),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,d=["#define varying in",t.glslVersion===Q6?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Q6?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=v+c+V,h=v+d+n,S=wt(i,i.VERTEX_SHADER,_),g=wt(i,i.FRAGMENT_SHADER,h);i.attachShader(f,S),i.attachShader(f,g),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function y(I){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(f)||"",G=i.getShaderInfoLog(S)||"",P=i.getShaderInfoLog(g)||"",U=N.trim(),Q=G.trim(),$=P.trim(),r1=!0,X=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(r1=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,S,g);else{let e1=Et(i,S,"vertex"),C1=Et(i,g,"fragment");O1("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+e1+`
`+C1)}else U!==""?w1("WebGLProgram: Program Info Log:",U):(Q===""||$==="")&&(X=!1);X&&(I.diagnostics={runnable:r1,programLog:U,vertexShader:{log:Q,prefix:c},fragmentShader:{log:$,prefix:d}})}i.deleteShader(S),i.deleteShader(g),m=new p3(i,f),Z=PL(i,f)}let m;this.getUniforms=function(){return m===void 0&&y(this),m};let Z;this.getAttributes=function(){return Z===void 0&&y(this),Z};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(f,gL)),R},this.destroy=function(){C.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZL++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=g,this}var KL=0,f8=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,C){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(C)===!1&&(i.add(C),C.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let C of t)C.usedTimes--,C.usedTimes===0&&this.shaderCache.delete(C.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,C=t.get(e);return C===void 0&&(C=new Set,t.set(e,C)),C}_getShaderStage(e){let t=this.shaderCache,C=t.get(e);return C===void 0&&(C=new x8(e),t.set(e,C)),C}},x8=class{constructor(e){this.id=KL++,this.code=e,this.usedTimes=0}};function JL(r){return r===n0||r===a7||r===o7}function jL(r,e,t,C,i,H){let V=new e3,n=new f8,a=new Set,L=[],o=new Map,M=C.logarithmicDepthBuffer,s=C.precision,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(m){return a.add(m),m===0?"uv":`uv${m}`}function f(m,Z,R,I,N,G){let P=I.fog,U=N.geometry,Q=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,$=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,r1=e.get(m.envMap||Q,$),X=r1&&r1.mapping===r7?r1.image.height:null,e1=l[m.type];m.precision!==null&&(s=C.getMaxPrecision(m.precision),s!==m.precision&&w1("WebGLProgram.getParameters:",m.precision,"not supported, using",s,"instead."));let C1=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,b1=C1!==void 0?C1.length:0,_1=0;U.morphAttributes.position!==void 0&&(_1=1),U.morphAttributes.normal!==void 0&&(_1=2),U.morphAttributes.color!==void 0&&(_1=3);let r2,X1,$1,q;if(e1){let H2=y5[e1];r2=H2.vertexShader,X1=H2.fragmentShader}else{r2=m.vertexShader,X1=m.fragmentShader;let H2=n.getVertexShaderStage(m),Q1=n.getFragmentShaderStage(m);n.update(m,H2,Q1),$1=H2.id,q=Q1.id}let j=r.getRenderTarget(),h1=r.state.buffers.depth.getReversed(),R1=N.isInstancedMesh===!0,u1=N.isBatchedMesh===!0,k1=!!m.map,h2=!!m.matcap,U1=!!r1,Y1=!!m.aoMap,i2=!!m.lightMap,G1=!!m.bumpMap&&m.wireframe===!1,a2=!!m.normalMap,g2=!!m.displacementMap,G2=!!m.emissiveMap,M2=!!m.metalnessMap,u2=!!m.roughnessMap,E=m.anisotropy>0,b2=m.clearcoat>0,j1=m.dispersion>0,x=m.retroreflectivity>0,p=m.iridescence>0,B=m.sheen>0,k=m.transmission>0,W=E&&!!m.anisotropyMap,i1=b2&&!!m.clearcoatMap,H1=b2&&!!m.clearcoatNormalMap,Y=b2&&!!m.clearcoatRoughnessMap,J=p&&!!m.iridescenceMap,V1=p&&!!m.iridescenceThicknessMap,g1=B&&!!m.sheenColorMap,s1=B&&!!m.sheenRoughnessMap,n1=!!m.specularMap,Z1=!!m.specularColorMap,T1=!!m.specularIntensityMap,B1=k&&!!m.transmissionMap,O=k&&!!m.thicknessMap,L1=!!m.gradientMap,K=!!m.alphaMap,a1=m.alphaTest>0,c1=!!m.alphaHash,t1=!!m.extensions,y1=c5;m.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(y1=r.toneMapping);let v1={shaderID:e1,shaderType:m.type,shaderName:m.name,vertexShader:r2,fragmentShader:X1,defines:m.defines,customVertexShaderID:$1,customFragmentShaderID:q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:s,batching:u1,batchingColor:u1&&N._colorsTexture!==null,instancing:R1,instancingColor:R1&&N.instanceColor!==null,instancingMorph:R1&&N.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:W1.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:k1,matcap:h2,envMap:U1,envMapMode:U1&&r1.mapping,envMapCubeUVHeight:X,aoMap:Y1,lightMap:i2,bumpMap:G1,normalMap:a2,displacementMap:g2,emissiveMap:G2,normalMapObjectSpace:a2&&m.normalMapType===et,normalMapTangentSpace:a2&&m.normalMapType===m9,packedNormalMap:a2&&m.normalMapType===m9&&JL(m.normalMap.format),metalnessMap:M2,roughnessMap:u2,anisotropy:E,anisotropyMap:W,clearcoat:b2,clearcoatMap:i1,clearcoatNormalMap:H1,clearcoatRoughnessMap:Y,dispersion:j1,retroreflection:x,iridescence:p,iridescenceMap:J,iridescenceThicknessMap:V1,sheen:B,sheenColorMap:g1,sheenRoughnessMap:s1,specularMap:n1,specularColorMap:Z1,specularIntensityMap:T1,transmission:k,transmissionMap:B1,thicknessMap:O,gradientMap:L1,opaque:m.transparent===!1&&m.blending===s3&&m.alphaToCoverage===!1,alphaMap:K,alphaTest:a1,alphaHash:c1,combine:m.combine,mapUv:k1&&u(m.map.channel),aoMapUv:Y1&&u(m.aoMap.channel),lightMapUv:i2&&u(m.lightMap.channel),bumpMapUv:G1&&u(m.bumpMap.channel),normalMapUv:a2&&u(m.normalMap.channel),displacementMapUv:g2&&u(m.displacementMap.channel),emissiveMapUv:G2&&u(m.emissiveMap.channel),metalnessMapUv:M2&&u(m.metalnessMap.channel),roughnessMapUv:u2&&u(m.roughnessMap.channel),anisotropyMapUv:W&&u(m.anisotropyMap.channel),clearcoatMapUv:i1&&u(m.clearcoatMap.channel),clearcoatNormalMapUv:H1&&u(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&u(m.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&u(m.iridescenceMap.channel),iridescenceThicknessMapUv:V1&&u(m.iridescenceThicknessMap.channel),sheenColorMapUv:g1&&u(m.sheenColorMap.channel),sheenRoughnessMapUv:s1&&u(m.sheenRoughnessMap.channel),specularMapUv:n1&&u(m.specularMap.channel),specularColorMapUv:Z1&&u(m.specularColorMap.channel),specularIntensityMapUv:T1&&u(m.specularIntensityMap.channel),transmissionMapUv:B1&&u(m.transmissionMap.channel),thicknessMapUv:O&&u(m.thicknessMap.channel),alphaMapUv:K&&u(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(a2||E),vertexNormals:!!U.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(k1||K),fog:!!P,useFog:m.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||U.attributes.normal===void 0&&a2===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:h1,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:b1,morphTextureStride:_1,numSunLights:Z.sun.length,numDirLights:Z.directional.length,numPointLights:Z.point.length,numSpotLights:Z.spot.length,numSpotLightMaps:Z.spotLightMap.length,numRectAreaLights:Z.rectArea.length,numHemiLights:Z.hemi.length,numSunLightShadows:Z.sunShadowMap.length,numDirLightShadows:Z.directionalShadowMap.length,numPointLightShadows:Z.pointShadowMap.length,numSpotLightShadows:Z.spotShadowMap.length,numSpotLightShadowsWithMaps:Z.numSpotLightShadowsWithMaps,numLightProbes:Z.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:y1,decodeVideoTexture:k1&&m.map.isVideoTexture===!0&&W1.getTransfer(m.map.colorSpace)===J1,decodeVideoTextureEmissive:G2&&m.emissiveMap.isVideoTexture===!0&&W1.getTransfer(m.emissiveMap.colorSpace)===J1,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===g5,flipSided:m.side===z2,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:t1&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(t1&&m.extensions.multiDraw===!0||u1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return v1.vertexUv1s=a.has(1),v1.vertexUv2s=a.has(2),v1.vertexUv3s=a.has(3),a.clear(),v1}function c(m){let Z=[];if(m.shaderID?Z.push(m.shaderID):(Z.push(m.customVertexShaderID),Z.push(m.customFragmentShaderID)),m.defines!==void 0)for(let R in m.defines)Z.push(R),Z.push(m.defines[R]);return m.isRawShaderMaterial===!1&&(d(Z,m),v(Z,m),Z.push(r.outputColorSpace)),Z.push(m.customProgramCacheKey),Z.join()}function d(m,Z){m.push(Z.precision),m.push(Z.outputColorSpace),m.push(Z.envMapMode),m.push(Z.envMapCubeUVHeight),m.push(Z.mapUv),m.push(Z.alphaMapUv),m.push(Z.lightMapUv),m.push(Z.aoMapUv),m.push(Z.bumpMapUv),m.push(Z.normalMapUv),m.push(Z.displacementMapUv),m.push(Z.emissiveMapUv),m.push(Z.metalnessMapUv),m.push(Z.roughnessMapUv),m.push(Z.anisotropyMapUv),m.push(Z.clearcoatMapUv),m.push(Z.clearcoatNormalMapUv),m.push(Z.clearcoatRoughnessMapUv),m.push(Z.iridescenceMapUv),m.push(Z.iridescenceThicknessMapUv),m.push(Z.sheenColorMapUv),m.push(Z.sheenRoughnessMapUv),m.push(Z.specularMapUv),m.push(Z.specularColorMapUv),m.push(Z.specularIntensityMapUv),m.push(Z.transmissionMapUv),m.push(Z.thicknessMapUv),m.push(Z.combine),m.push(Z.fogExp2),m.push(Z.sizeAttenuation),m.push(Z.morphTargetsCount),m.push(Z.morphAttributeCount),m.push(Z.numSunLights),m.push(Z.numDirLights),m.push(Z.numPointLights),m.push(Z.numSpotLights),m.push(Z.numSpotLightMaps),m.push(Z.numHemiLights),m.push(Z.numRectAreaLights),m.push(Z.numSunLightShadows),m.push(Z.numDirLightShadows),m.push(Z.numPointLightShadows),m.push(Z.numSpotLightShadows),m.push(Z.numSpotLightShadowsWithMaps),m.push(Z.numLightProbes),m.push(Z.shadowMapType),m.push(Z.toneMapping),m.push(Z.numClippingPlanes),m.push(Z.numClipIntersection),m.push(Z.depthPacking)}function v(m,Z){V.disableAll(),Z.instancing&&V.enable(0),Z.instancingColor&&V.enable(1),Z.instancingMorph&&V.enable(2),Z.matcap&&V.enable(3),Z.envMap&&V.enable(4),Z.normalMapObjectSpace&&V.enable(5),Z.normalMapTangentSpace&&V.enable(6),Z.clearcoat&&V.enable(7),Z.iridescence&&V.enable(8),Z.alphaTest&&V.enable(9),Z.vertexColors&&V.enable(10),Z.vertexAlphas&&V.enable(11),Z.vertexUv1s&&V.enable(12),Z.vertexUv2s&&V.enable(13),Z.vertexUv3s&&V.enable(14),Z.vertexTangents&&V.enable(15),Z.anisotropy&&V.enable(16),Z.alphaHash&&V.enable(17),Z.batching&&V.enable(18),Z.dispersion&&V.enable(19),Z.retroreflection&&V.enable(24),Z.batchingColor&&V.enable(20),Z.gradientMap&&V.enable(21),Z.packedNormalMap&&V.enable(22),Z.vertexNormals&&V.enable(23),m.push(V.mask),V.disableAll(),Z.fog&&V.enable(0),Z.useFog&&V.enable(1),Z.flatShading&&V.enable(2),Z.logarithmicDepthBuffer&&V.enable(3),Z.reversedDepthBuffer&&V.enable(4),Z.skinning&&V.enable(5),Z.morphTargets&&V.enable(6),Z.morphNormals&&V.enable(7),Z.morphColors&&V.enable(8),Z.premultipliedAlpha&&V.enable(9),Z.shadowMapEnabled&&V.enable(10),Z.doubleSided&&V.enable(11),Z.flipSided&&V.enable(12),Z.useDepthPacking&&V.enable(13),Z.dithering&&V.enable(14),Z.transmission&&V.enable(15),Z.sheen&&V.enable(16),Z.opaque&&V.enable(17),Z.pointsUvs&&V.enable(18),Z.decodeVideoTexture&&V.enable(19),Z.decodeVideoTextureEmissive&&V.enable(20),Z.alphaToCoverage&&V.enable(21),Z.numLightProbeGrids>0&&V.enable(22),Z.hasPositionAttribute&&V.enable(23),m.push(V.mask)}function _(m){let Z=l[m.type],R;if(Z){let I=y5[Z];R=At.clone(I.uniforms)}else R=m.uniforms;return R}function h(m,Z){let R=o.get(Z);return R!==void 0?++R.usedTimes:(R=new QL(r,Z,m,i),L.push(R),o.set(Z,R)),R}function S(m){if(--m.usedTimes===0){let Z=L.indexOf(m);L[Z]=L[L.length-1],L.pop(),o.delete(m.cacheKey),m.destroy()}}function g(m){n.remove(m)}function y(){n.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:_,acquireProgram:h,releaseProgram:S,releaseShaderCache:g,programs:L,dispose:y}}function ea(){let r=new WeakMap;function e(V){return r.has(V)}function t(V){let n=r.get(V);return n===void 0&&(n={},r.set(V,n)),n}function C(V){r.delete(V)}function i(V,n,a){r.get(V)[n]=a}function H(){r=new WeakMap}return{has:e,get:t,remove:C,update:i,dispose:H}}function ta(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ft(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dt(){let r=[],e=0,t=[],C=[],i=[];function H(){e=0,t.length=0,C.length=0,i.length=0}function V(s){let l=0;return s.isInstancedMesh&&(l+=2),s.isSkinnedMesh&&(l+=1),l}function n(s,l,u,f,c,d){let v=r[e];return v===void 0?(v={id:s.id,object:s,geometry:l,material:u,materialVariant:V(s),groupOrder:f,renderOrder:s.renderOrder,z:c,group:d},r[e]=v):(v.id=s.id,v.object=s,v.geometry=l,v.material=u,v.materialVariant=V(s),v.groupOrder=f,v.renderOrder=s.renderOrder,v.z=c,v.group=d),e++,v}function a(s,l,u,f,c,d,v){v.reversedDepth===!0&&(c=-c);let _=n(s,l,u,f,c,d);u.transmission>0?C.push(_):u.transparent===!0?i.push(_):t.push(_)}function L(s,l,u,f,c,d){let v=n(s,l,u,f,c,d);u.transmission>0?C.unshift(v):u.transparent===!0?i.unshift(v):t.unshift(v)}function o(s,l){t.length>1&&t.sort(s||ta),C.length>1&&C.sort(l||Ft),i.length>1&&i.sort(l||Ft)}function M(){for(let s=e,l=r.length;s<l;s++){let u=r[s];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:C,transparent:i,init:H,push:a,unshift:L,finish:M,sort:o}}function Ca(){let r=new WeakMap;function e(C,i){let H=r.get(C),V;return H===void 0?(V=new Dt,r.set(C,[V])):i>=H.length?(V=new Dt,H.push(V)):V=H[i],V}function t(){r=new WeakMap}return{get:e,dispose:t}}function ra(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new I1};break;case"SpotLight":t={position:new T,direction:new T,color:new I1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new I1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new I1,groundColor:new I1};break;case"RectAreaLight":t={color:new I1,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function ia(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m1};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m1};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new m1,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Ha=0;function Va(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function na(r){let e=new ra,t=ia(),C={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let L=0;L<9;L++)C.probe.push(new T);let i=new T,H=new t2,V=new t2;function n(L){let o=0,M=0,s=0;for(let N=0;N<9;N++)C.probe[N].set(0,0,0);let l=0,u=0,f=0,c=0,d=0,v=0,_=0,h=0,S=0,g=0,y=0,m=0,Z=0,R=0;L.sort(Va);for(let N=0,G=L.length;N<G;N++){let P=L[N],U=P.color,Q=P.intensity,$=P.distance,r1=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===n0?r1=P.shadow.map.texture:r1=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)o+=U.r*Q,M+=U.g*Q,s+=U.b*Q;else if(P.isLightProbe){for(let X=0;X<9;X++)C.probe[X].addScaledVector(P.sh.coefficients[X],Q);R++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let e1=P.shadow,C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize.copy(e1.mapSize).multiply(e1.getFrameExtents()),C.sunShadow[u]=C1,C.sunShadowMap[u]=r1;let b1=e1.getViewportCount();for(let _1=0;_1<b1;_1++)C.sunShadowMatrix[f+_1]=e1.getMatrix(_1),C.sunShadowCascade[f+_1]=e1._cascadeData[_1];f+=b1,u++}C.sun[l]=X,l++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let e1=P.shadow,C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize=e1.mapSize,C.directionalShadow[c]=C1,C.directionalShadowMap[c]=r1,C.directionalShadowMatrix[c]=P.shadow.matrix,S++}C.directional[c]=X,c++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(Q),X.distance=$,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,C.spot[v]=X;let e1=P.shadow;if(P.map&&(C.spotLightMap[m]=P.map,m++,e1.updateMatrices(P),P.castShadow&&Z++),C.spotLightMatrix[v]=e1.matrix,P.castShadow){let C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize=e1.mapSize,C.spotShadow[v]=C1,C.spotShadowMap[v]=r1,y++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(U).multiplyScalar(Q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),C.rectArea[_]=X,_++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let e1=P.shadow,C1=t.get(P);C1.shadowIntensity=e1.intensity,C1.shadowBias=e1.bias,C1.shadowNormalBias=e1.normalBias,C1.shadowRadius=e1.radius,C1.shadowMapSize=e1.mapSize,C1.shadowCameraNear=e1.camera.near,C1.shadowCameraFar=e1.camera.far,C.pointShadow[d]=C1,C.pointShadowMap[d]=r1,C.pointShadowMatrix[d]=P.shadow.matrix,g++}C.point[d]=X,d++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Q),X.groundColor.copy(P.groundColor).multiplyScalar(Q),C.hemi[h]=X,h++}}_>0&&(r.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=M1.LTC_FLOAT_1,C.rectAreaLTC2=M1.LTC_FLOAT_2):(C.rectAreaLTC1=M1.LTC_HALF_1,C.rectAreaLTC2=M1.LTC_HALF_2)),C.ambient[0]=o,C.ambient[1]=M,C.ambient[2]=s;let I=C.hash;(I.sunLength!==l||I.directionalLength!==c||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==h||I.numSunShadows!==u||I.numDirectionalShadows!==S||I.numPointShadows!==g||I.numSpotShadows!==y||I.numSpotMaps!==m||I.numLightProbes!==R)&&(C.sun.length=l,C.directional.length=c,C.spot.length=v,C.rectArea.length=_,C.point.length=d,C.hemi.length=h,C.sunShadow.length=u,C.sunShadowMap.length=u,C.sunShadowMatrix.length=f,C.sunShadowCascade.length=f,C.directionalShadow.length=S,C.directionalShadowMap.length=S,C.directionalShadowMatrix.length=S,C.pointShadow.length=g,C.pointShadowMap.length=g,C.pointShadowMatrix.length=g,C.spotShadow.length=y,C.spotShadowMap.length=y,C.spotLightMatrix.length=y+m-Z,C.spotLightMap.length=m,C.numSpotLightShadowsWithMaps=Z,C.numLightProbes=R,I.sunLength=l,I.directionalLength=c,I.pointLength=d,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=h,I.numSunShadows=u,I.numDirectionalShadows=S,I.numPointShadows=g,I.numSpotShadows=y,I.numSpotMaps=m,I.numLightProbes=R,C.version=Ha++)}function a(L,o){let M=0,s=0,l=0,u=0,f=0,c=0,d=o.matrixWorldInverse;for(let v=0,_=L.length;v<_;v++){let h=L[v];if(h.isSunLight){let S=C.sun[M];S.direction.setFromMatrixPosition(h.matrixWorld),S.direction.transformDirection(d),M++}else if(h.isDirectionalLight){let S=C.directional[s];S.direction.setFromMatrixPosition(h.matrixWorld),i.setFromMatrixPosition(h.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(d),s++}else if(h.isSpotLight){let S=C.spot[u];S.position.setFromMatrixPosition(h.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(h.matrixWorld),i.setFromMatrixPosition(h.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(d),u++}else if(h.isRectAreaLight){let S=C.rectArea[f];S.position.setFromMatrixPosition(h.matrixWorld),S.position.applyMatrix4(d),V.identity(),H.copy(h.matrixWorld),H.premultiply(d),V.extractRotation(H),S.halfWidth.set(h.width*.5,0,0),S.halfHeight.set(0,h.height*.5,0),S.halfWidth.applyMatrix4(V),S.halfHeight.applyMatrix4(V),f++}else if(h.isPointLight){let S=C.point[l];S.position.setFromMatrixPosition(h.matrixWorld),S.position.applyMatrix4(d),l++}else if(h.isHemisphereLight){let S=C.hemi[c];S.direction.setFromMatrixPosition(h.matrixWorld),S.direction.transformDirection(d),c++}}}return{setup:n,setupView:a,state:C}}function kt(r){let e=new na(r),t=[],C=[],i=[];function H(s){M.camera=s,t.length=0,C.length=0,i.length=0}function V(s){t.push(s)}function n(s){C.push(s)}function a(s){i.push(s)}function L(){e.setup(t)}function o(s){e.setupView(t,s)}let M={lightsArray:t,shadowsArray:C,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:M,setupLights:L,setupLightsView:o,pushLight:V,pushShadow:n,pushLightProbeGrid:a}}function La(r){let e=new WeakMap;function t(i,H=0){let V=e.get(i),n;return V===void 0?(n=new kt(r),e.set(i,[n])):H>=V.length?(n=new kt(r),V.push(n)):n=V[H],n}function C(){e=new WeakMap}return{get:t,dispose:C}}var aa=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oa=`uniform sampler2D shadow_pass;
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
}`,sa=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Ma=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],Nt=new t2,M7=new T,c8=new T;function la(r,e,t){let C=new r3,i=new m1,H=new m1,V=new o2,n=new A4,a=new m4,L={},o=t.maxTextureSize,M={[r0]:z2,[z2]:r0,[g5]:g5},s=new Q2({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new m1},radius:{value:4}},vertexShader:aa,fragmentShader:oa}),l=s.clone();l.defines.HORIZONTAL_PASS=1;let u=new d5;u.setAttribute("position",new t5(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new U2(u,s),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C7;let d=this.type;this.render=function(g,y,m){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||g.length===0)return;this.type===we&&(w1("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=C7);let Z=r.getRenderTarget(),R=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Z5),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==this.type;G&&y.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=g.length;P<U;P++){let Q=g[P],$=Q.shadow;if($===void 0){w1("WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let r1=$.getFrameExtents();i.multiply(r1),H.copy($.mapSize),(i.x>o||i.y>o)&&(i.x>o&&(H.x=Math.floor(o/r1.x),i.x=H.x*r1.x,$.mapSize.x=H.x),i.y>o&&(H.y=Math.floor(o/r1.y),i.y=H.y*r1.y,$.mapSize.y=H.y));let X=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=X,$.map===null||G===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===o3){if(Q.isPointLight){w1("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new W2(i.x,i.y,{format:n0,type:A5,minFilter:y2,magFilter:y2,generateMipmaps:!1}),$.map.texture.name=Q.name+".shadowMap",$.map.depthTexture=new J5(i.x,i.y,u5),$.map.depthTexture.name=Q.name+".shadowMapDepth",$.map.depthTexture.format=v5,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_2,$.map.depthTexture.magFilter=_2}else Q.isPointLight?($.map=new g9(i.x),$.map.depthTexture=new o4(i.x,p5)):($.map=new W2(i.x,i.y),$.map.depthTexture=new J5(i.x,i.y,p5)),$.map.depthTexture.name=Q.name+".shadowMap",$.map.depthTexture.format=v5,this.type===C7?($.map.depthTexture.compareFunction=X?f9:h9,$.map.depthTexture.minFilter=y2,$.map.depthTexture.magFilter=y2):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_2,$.map.depthTexture.magFilter=_2);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);let e1=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Q.isPointLight!==!0&&$.updateMatrices(Q,m);for(let C1=0;C1<e1;C1++){let b1=$.getCamera(C1);if(Q.isPointLight){let _1=$.camera,r2=$.matrix,X1=Q.distance||_1.far;X1!==_1.far&&(_1.far=X1,_1.updateProjectionMatrix()),M7.setFromMatrixPosition(Q.matrixWorld),_1.position.copy(M7),c8.copy(_1.position),c8.add(sa[C1]),_1.up.copy(Ma[C1]),_1.lookAt(c8),_1.updateMatrixWorld(),r2.makeTranslation(-M7.x,-M7.y,-M7.z),Nt.multiplyMatrices(_1.projectionMatrix,_1.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Nt,_1.coordinateSystem,_1.reversedDepth)}if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,C1),r.clear();else{C1===0&&(r.setRenderTarget($.map),r.clear());let _1=$.getViewport(C1);V.set(H.x*_1.x,H.y*_1.y,H.x*_1.z,H.y*_1.w),N.viewport(V)}C=$.getFrustum(C1),h(y,m,b1,Q,this.type)}$.isPointLightShadow!==!0&&this.type===o3&&v($,m),$.needsUpdate=!1}d=this.type,c.needsUpdate=!1,r.setRenderTarget(Z,R,I)};function v(g,y){let m=e.update(f);s.defines.VSM_SAMPLES!==g.blurSamples&&(s.defines.VSM_SAMPLES=g.blurSamples,l.defines.VSM_SAMPLES=g.blurSamples,s.needsUpdate=!0,l.needsUpdate=!0),g.mapPass===null?g.mapPass=new W2(i.x,i.y,{format:n0,type:A5}):(g.mapPass.width!==g.map.width||g.mapPass.height!==g.map.height)&&g.mapPass.setSize(g.map.width,g.map.height),s.uniforms.shadow_pass.value=g.map.depthTexture,s.uniforms.resolution.value.set(g.map.width,g.map.height),s.uniforms.radius.value=g.radius,r.setRenderTarget(g.mapPass),r.clear(),r.renderBufferDirect(y,null,m,s,f,null),l.uniforms.shadow_pass.value=g.mapPass.texture,l.uniforms.resolution.value.set(g.map.width,g.map.height),l.uniforms.radius.value=g.radius,r.setRenderTarget(g.map),r.clear(),r.renderBufferDirect(y,null,m,l,f,null)}function _(g,y,m,Z){let R=null,I=m.isPointLight===!0?g.customDistanceMaterial:g.customDepthMaterial;if(I!==void 0)R=I;else if(R=m.isPointLight===!0?a:n,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let N=R.uuid,G=y.uuid,P=L[N];P===void 0&&(P={},L[N]=P);let U=P[G];U===void 0&&(U=R.clone(),P[G]=U,y.addEventListener("dispose",S)),R=U}if(R.visible=y.visible,R.wireframe=y.wireframe,Z===o3?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:M[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,m.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=r.properties.get(R);N.light=m}return R}function h(g,y,m,Z,R){if(g.visible===!1)return;if(g.layers.test(y.layers)&&(g.isMesh||g.isLine||g.isPoints)&&(g.castShadow||g.receiveShadow&&R===o3)&&(!g.frustumCulled||g.intersectsFrustum(C))){g.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,g.matrixWorld);let G=e.update(g),P=g.material;if(Array.isArray(P)){let U=G.groups;for(let Q=0,$=U.length;Q<$;Q++){let r1=U[Q],X=P[r1.materialIndex];if(X&&X.visible){let e1=_(g,X,Z,R);g.onBeforeShadow(r,g,y,m,G,e1,r1),r.renderBufferDirect(m,null,G,e1,g,r1),g.onAfterShadow(r,g,y,m,G,e1,r1)}}}else if(P.visible){let U=_(g,P,Z,R);g.onBeforeShadow(r,g,y,m,G,U,null),r.renderBufferDirect(m,null,G,U,g,null),g.onAfterShadow(r,g,y,m,G,U,null)}}let N=g.children;for(let G=0,P=N.length;G<P;G++)h(N[G],y,m,Z,R)}function S(g){g.target.removeEventListener("dispose",S);for(let m in L){let Z=L[m],R=g.target.uuid;R in Z&&(Z[R].dispose(),delete Z[R])}}}function da(r,e){function t(){let O=!1,L1=new o2,K=null,a1=new o2(0,0,0,0);return{setMask:function(c1){K!==c1&&!O&&(r.colorMask(c1,c1,c1,c1),K=c1)},setLocked:function(c1){O=c1},setClear:function(c1,t1,y1,v1,H2){H2===!0&&(c1*=v1,t1*=v1,y1*=v1),L1.set(c1,t1,y1,v1),a1.equals(L1)===!1&&(r.clearColor(c1,t1,y1,v1),a1.copy(L1))},reset:function(){O=!1,K=null,a1.set(-1,0,0,0)}}}function C(){let O=!1,L1=!1,K=null,a1=null,c1=null;return{setReversed:function(t1){if(L1!==t1){let y1=e.get("EXT_clip_control");t1?y1.clipControlEXT(y1.LOWER_LEFT_EXT,y1.ZERO_TO_ONE_EXT):y1.clipControlEXT(y1.LOWER_LEFT_EXT,y1.NEGATIVE_ONE_TO_ONE_EXT),L1=t1;let v1=c1;c1=null,this.setClear(v1)}},getReversed:function(){return L1},setTest:function(t1){t1?j(r.DEPTH_TEST):h1(r.DEPTH_TEST)},setMask:function(t1){K!==t1&&!O&&(r.depthMask(t1),K=t1)},setFunc:function(t1){if(L1&&(t1=Mt[t1]),a1!==t1){switch(t1){case Q7:r.depthFunc(r.NEVER);break;case K7:r.depthFunc(r.ALWAYS);break;case J7:r.depthFunc(r.LESS);break;case $0:r.depthFunc(r.LEQUAL);break;case j7:r.depthFunc(r.EQUAL);break;case e4:r.depthFunc(r.GEQUAL);break;case t4:r.depthFunc(r.GREATER);break;case C4:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}a1=t1}},setLocked:function(t1){O=t1},setClear:function(t1){c1!==t1&&(c1=t1,L1&&(t1=1-t1),r.clearDepth(t1))},reset:function(){O=!1,K=null,a1=null,c1=null,L1=!1}}}function i(){let O=!1,L1=null,K=null,a1=null,c1=null,t1=null,y1=null,v1=null,H2=null;return{setTest:function(Q1){O||(Q1?j(r.STENCIL_TEST):h1(r.STENCIL_TEST))},setMask:function(Q1){L1!==Q1&&!O&&(r.stencilMask(Q1),L1=Q1)},setFunc:function(Q1,n5,m5){(K!==Q1||a1!==n5||c1!==m5)&&(r.stencilFunc(Q1,n5,m5),K=Q1,a1=n5,c1=m5)},setOp:function(Q1,n5,m5){(t1!==Q1||y1!==n5||v1!==m5)&&(r.stencilOp(Q1,n5,m5),t1=Q1,y1=n5,v1=m5)},setLocked:function(Q1){O=Q1},setClear:function(Q1){H2!==Q1&&(r.clearStencil(Q1),H2=Q1)},reset:function(){O=!1,L1=null,K=null,a1=null,c1=null,t1=null,y1=null,v1=null,H2=null}}}let H=new t,V=new C,n=new i,a=new WeakMap,L=new WeakMap,o={},M={},s={},l=new WeakMap,u=[],f=null,c=!1,d=null,v=null,_=null,h=null,S=null,g=null,y=null,m=new I1(0,0,0),Z=0,R=!1,I=null,N=null,G=null,P=null,U=null,Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,r1=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(r1=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=r1>=1):X.indexOf("OpenGL ES")!==-1&&(r1=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=r1>=2);let e1=null,C1={},b1=r.getParameter(r.SCISSOR_BOX),_1=r.getParameter(r.VIEWPORT),r2=new o2().fromArray(b1),X1=new o2().fromArray(_1);function $1(O,L1,K,a1){let c1=new Uint8Array(4),t1=r.createTexture();r.bindTexture(O,t1),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let y1=0;y1<K;y1++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(L1,0,r.RGBA,1,1,a1,0,r.RGBA,r.UNSIGNED_BYTE,c1):r.texImage2D(L1+y1,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,c1);return t1}let q={};q[r.TEXTURE_2D]=$1(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=$1(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=$1(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=$1(r.TEXTURE_3D,r.TEXTURE_3D,1,1),H.setClear(0,0,0,1),V.setClear(1),n.setClear(0),j(r.DEPTH_TEST),V.setFunc($0),G1(!1),a2(y6),j(r.CULL_FACE),Y1(Z5);function j(O){o[O]!==!0&&(r.enable(O),o[O]=!0)}function h1(O){o[O]!==!1&&(r.disable(O),o[O]=!1)}function R1(O,L1){return s[O]!==L1?(r.bindFramebuffer(O,L1),s[O]=L1,O===r.DRAW_FRAMEBUFFER&&(s[r.FRAMEBUFFER]=L1),O===r.FRAMEBUFFER&&(s[r.DRAW_FRAMEBUFFER]=L1),!0):!1}function u1(O,L1){let K=u,a1=!1;if(O){K=l.get(L1),K===void 0&&(K=[],l.set(L1,K));let c1=O.textures;if(K.length!==c1.length||K[0]!==r.COLOR_ATTACHMENT0){for(let t1=0,y1=c1.length;t1<y1;t1++)K[t1]=r.COLOR_ATTACHMENT0+t1;K.length=c1.length,a1=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,a1=!0);a1&&r.drawBuffers(K)}function k1(O){return f!==O?(r.useProgram(O),f=O,!0):!1}let h2={[v0]:r.FUNC_ADD,[Ee]:r.FUNC_SUBTRACT,[Re]:r.FUNC_REVERSE_SUBTRACT};h2[Pe]=r.MIN,h2[Be]=r.MAX;let U1={[Ie]:r.ZERO,[Fe]:r.ONE,[De]:r.SRC_COLOR,[O6]:r.SRC_ALPHA,[We]:r.SRC_ALPHA_SATURATE,[ze]:r.DST_COLOR,[Ne]:r.DST_ALPHA,[ke]:r.ONE_MINUS_SRC_COLOR,[E6]:r.ONE_MINUS_SRC_ALPHA,[Ge]:r.ONE_MINUS_DST_COLOR,[Ue]:r.ONE_MINUS_DST_ALPHA,[Xe]:r.CONSTANT_COLOR,[qe]:r.ONE_MINUS_CONSTANT_COLOR,[Ye]:r.CONSTANT_ALPHA,[$e]:r.ONE_MINUS_CONSTANT_ALPHA};function Y1(O,L1,K,a1,c1,t1,y1,v1,H2,Q1){if(O===Z5){c===!0&&(h1(r.BLEND),c=!1);return}if(c===!1&&(j(r.BLEND),c=!0),O!==Oe){if(O!==d||Q1!==R){if((v!==v0||S!==v0)&&(r.blendEquation(r.FUNC_ADD),v=v0,S=v0),Q1)switch(O){case s3:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case b6:r.blendFunc(r.ONE,r.ONE);break;case T6:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w6:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:O1("WebGLState: Invalid blending: ",O);break}else switch(O){case s3:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case b6:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case T6:O1("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w6:O1("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:O1("WebGLState: Invalid blending: ",O);break}_=null,h=null,g=null,y=null,m.set(0,0,0),Z=0,d=O,R=Q1}return}c1=c1||L1,t1=t1||K,y1=y1||a1,(L1!==v||c1!==S)&&(r.blendEquationSeparate(h2[L1],h2[c1]),v=L1,S=c1),(K!==_||a1!==h||t1!==g||y1!==y)&&(r.blendFuncSeparate(U1[K],U1[a1],U1[t1],U1[y1]),_=K,h=a1,g=t1,y=y1),(v1.equals(m)===!1||H2!==Z)&&(r.blendColor(v1.r,v1.g,v1.b,H2),m.copy(v1),Z=H2),d=O,R=!1}function i2(O,L1){O.side===g5?h1(r.CULL_FACE):j(r.CULL_FACE);let K=O.side===z2;L1&&(K=!K),G1(K),O.blending===s3&&O.transparent===!1?Y1(Z5):Y1(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),V.setFunc(O.depthFunc),V.setTest(O.depthTest),V.setMask(O.depthWrite),H.setMask(O.colorWrite);let a1=O.stencilWrite;n.setTest(a1),a1&&(n.setMask(O.stencilWriteMask),n.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),n.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),G2(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):h1(r.SAMPLE_ALPHA_TO_COVERAGE)}function G1(O){I!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),I=O)}function a2(O){O!==be?(j(r.CULL_FACE),O!==N&&(O===y6?r.cullFace(r.BACK):O===Te?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):h1(r.CULL_FACE),N=O}function g2(O){O!==G&&($&&r.lineWidth(O),G=O)}function G2(O,L1,K){O?(j(r.POLYGON_OFFSET_FILL),(P!==L1||U!==K)&&(P=L1,U=K,V.getReversed()&&(L1=-L1),r.polygonOffset(L1,K))):h1(r.POLYGON_OFFSET_FILL)}function M2(O){O?j(r.SCISSOR_TEST):h1(r.SCISSOR_TEST)}function u2(O){O===void 0&&(O=r.TEXTURE0+Q-1),e1!==O&&(r.activeTexture(O),e1=O)}function E(O,L1,K){K===void 0&&(e1===null?K=r.TEXTURE0+Q-1:K=e1);let a1=C1[K];a1===void 0&&(a1={type:void 0,texture:void 0},C1[K]=a1),(a1.type!==O||a1.texture!==L1)&&(e1!==K&&(r.activeTexture(K),e1=K),r.bindTexture(O,L1||q[O]),a1.type=O,a1.texture=L1)}function b2(){let O=C1[e1];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j1(){try{r.compressedTexImage2D(...arguments)}catch(O){O1("WebGLState:",O)}}function x(){try{r.compressedTexImage3D(...arguments)}catch(O){O1("WebGLState:",O)}}function p(){try{r.texSubImage2D(...arguments)}catch(O){O1("WebGLState:",O)}}function B(){try{r.texSubImage3D(...arguments)}catch(O){O1("WebGLState:",O)}}function k(){try{r.compressedTexSubImage2D(...arguments)}catch(O){O1("WebGLState:",O)}}function W(){try{r.compressedTexSubImage3D(...arguments)}catch(O){O1("WebGLState:",O)}}function i1(){try{r.texStorage2D(...arguments)}catch(O){O1("WebGLState:",O)}}function H1(){try{r.texStorage3D(...arguments)}catch(O){O1("WebGLState:",O)}}function Y(){try{r.texImage2D(...arguments)}catch(O){O1("WebGLState:",O)}}function J(){try{r.texImage3D(...arguments)}catch(O){O1("WebGLState:",O)}}function V1(O){return M[O]!==void 0?M[O]:r.getParameter(O)}function g1(O,L1){M[O]!==L1&&(r.pixelStorei(O,L1),M[O]=L1)}function s1(O){r2.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),r2.copy(O))}function n1(O){X1.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),X1.copy(O))}function Z1(O,L1){let K=L.get(L1);K===void 0&&(K=new WeakMap,L.set(L1,K));let a1=K.get(O);a1===void 0&&(a1=r.getUniformBlockIndex(L1,O.name),K.set(O,a1))}function T1(O,L1){let a1=L.get(L1).get(O);a.get(L1)!==a1&&(r.uniformBlockBinding(L1,a1,O.__bindingPointIndex),a.set(L1,a1))}function B1(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),V.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),o={},M={},e1=null,C1={},s={},l=new WeakMap,u=[],f=null,c=!1,d=null,v=null,_=null,h=null,S=null,g=null,y=null,m=new I1(0,0,0),Z=0,R=!1,I=null,N=null,G=null,P=null,U=null,r2.set(0,0,r.canvas.width,r.canvas.height),X1.set(0,0,r.canvas.width,r.canvas.height),H.reset(),V.reset(),n.reset()}return{buffers:{color:H,depth:V,stencil:n},enable:j,disable:h1,bindFramebuffer:R1,drawBuffers:u1,useProgram:k1,setBlending:Y1,setMaterial:i2,setFlipSided:G1,setCullFace:a2,setLineWidth:g2,setPolygonOffset:G2,setScissorTest:M2,activeTexture:u2,bindTexture:E,unbindTexture:b2,compressedTexImage2D:j1,compressedTexImage3D:x,texImage2D:Y,texImage3D:J,pixelStorei:g1,getParameter:V1,updateUBOMapping:Z1,uniformBlockBinding:T1,texStorage2D:i1,texStorage3D:H1,texSubImage2D:p,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:s1,viewport:n1,reset:B1}}function ca(r,e,t,C,i,H,V){let n=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),L=new m1,o=new WeakMap,M=new Set,s,l=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(x,p){return u?new OffscreenCanvas(x,p):w3("canvas")}function c(x,p,B){let k=1,W=j1(x);if((W.width>B||W.height>B)&&(k=B/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let i1=Math.floor(k*W.width),H1=Math.floor(k*W.height);s===void 0&&(s=f(i1,H1));let Y=p?f(i1,H1):s;return Y.width=i1,Y.height=H1,Y.getContext("2d").drawImage(x,0,0,i1,H1),w1("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+i1+"x"+H1+")."),Y}else return"data"in x&&w1("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function d(x){return x.generateMipmaps}function v(x){r.generateMipmap(x)}function _(x){return x.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?r.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function h(x,p,B,k,W,i1=!1){if(x!==null){if(r[x]!==void 0)return r[x];w1("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let H1;k&&(H1=e.get("EXT_texture_norm16"),H1||w1("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=p;if(p===r.RED&&(B===r.FLOAT&&(Y=r.R32F),B===r.HALF_FLOAT&&(Y=r.R16F),B===r.UNSIGNED_BYTE&&(Y=r.R8),B===r.UNSIGNED_SHORT&&H1&&(Y=H1.R16_EXT),B===r.SHORT&&H1&&(Y=H1.R16_SNORM_EXT)),p===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.R8UI),B===r.UNSIGNED_SHORT&&(Y=r.R16UI),B===r.UNSIGNED_INT&&(Y=r.R32UI),B===r.BYTE&&(Y=r.R8I),B===r.SHORT&&(Y=r.R16I),B===r.INT&&(Y=r.R32I)),p===r.RG&&(B===r.FLOAT&&(Y=r.RG32F),B===r.HALF_FLOAT&&(Y=r.RG16F),B===r.UNSIGNED_BYTE&&(Y=r.RG8),B===r.UNSIGNED_SHORT&&H1&&(Y=H1.RG16_EXT),B===r.SHORT&&H1&&(Y=H1.RG16_SNORM_EXT)),p===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RG8UI),B===r.UNSIGNED_SHORT&&(Y=r.RG16UI),B===r.UNSIGNED_INT&&(Y=r.RG32UI),B===r.BYTE&&(Y=r.RG8I),B===r.SHORT&&(Y=r.RG16I),B===r.INT&&(Y=r.RG32I)),p===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),B===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),B===r.UNSIGNED_INT&&(Y=r.RGB32UI),B===r.BYTE&&(Y=r.RGB8I),B===r.SHORT&&(Y=r.RGB16I),B===r.INT&&(Y=r.RGB32I)),p===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),B===r.UNSIGNED_INT&&(Y=r.RGBA32UI),B===r.BYTE&&(Y=r.RGBA8I),B===r.SHORT&&(Y=r.RGBA16I),B===r.INT&&(Y=r.RGBA32I)),p===r.RGB&&(B===r.UNSIGNED_SHORT&&H1&&(Y=H1.RGB16_EXT),B===r.SHORT&&H1&&(Y=H1.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),p===r.RGBA){let J=i1?T3:W1.getTransfer(W);B===r.FLOAT&&(Y=r.RGBA32F),B===r.HALF_FLOAT&&(Y=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Y=J===J1?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&H1&&(Y=H1.RGBA16_EXT),B===r.SHORT&&H1&&(Y=H1.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(x,p){let B;return x?p===null||p===p5||p===l3?B=r.DEPTH24_STENCIL8:p===u5?B=r.DEPTH32F_STENCIL8:p===M3&&(B=r.DEPTH24_STENCIL8,w1("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===p5||p===l3?B=r.DEPTH_COMPONENT24:p===u5?B=r.DEPTH_COMPONENT32F:p===M3&&(B=r.DEPTH_COMPONENT16),B}function g(x,p){return d(x)===!0||x.isFramebufferTexture&&x.minFilter!==_2&&x.minFilter!==y2?Math.log2(Math.max(p.width,p.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?p.mipmaps.length:1}function y(x){let p=x.target;p.removeEventListener("dispose",y),Z(p),p.isVideoTexture&&o.delete(p),p.isHTMLTexture&&M.delete(p)}function m(x){let p=x.target;p.removeEventListener("dispose",m),I(p)}function Z(x){let p=C.get(x);if(p.__webglInit===void 0)return;let B=x.source,k=l.get(B);if(k){let W=k[p.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(x),Object.keys(k).length===0&&l.delete(B)}C.remove(x)}function R(x){let p=C.get(x);r.deleteTexture(p.__webglTexture);let B=x.source,k=l.get(B);delete k[p.__cacheKey],V.memory.textures--}function I(x){let p=C.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),C.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(p.__webglFramebuffer[k]))for(let W=0;W<p.__webglFramebuffer[k].length;W++)r.deleteFramebuffer(p.__webglFramebuffer[k][W]);else r.deleteFramebuffer(p.__webglFramebuffer[k]);p.__webglDepthbuffer&&r.deleteRenderbuffer(p.__webglDepthbuffer[k])}else{if(Array.isArray(p.__webglFramebuffer))for(let k=0;k<p.__webglFramebuffer.length;k++)r.deleteFramebuffer(p.__webglFramebuffer[k]);else r.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&r.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&r.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let k=0;k<p.__webglColorRenderbuffer.length;k++)p.__webglColorRenderbuffer[k]&&r.deleteRenderbuffer(p.__webglColorRenderbuffer[k]);p.__webglDepthRenderbuffer&&r.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let B=x.textures;for(let k=0,W=B.length;k<W;k++){let i1=C.get(B[k]);i1.__webglTexture&&(r.deleteTexture(i1.__webglTexture),V.memory.textures--),C.remove(B[k])}C.remove(x)}let N=0;function G(){N=0}function P(){return N}function U(x){N=x}function Q(){let x=N;return x>=i.maxTextures&&w1("WebGLTextures: Trying to use "+(x+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,x}function $(x){let p=[];return p.push(x.wrapS),p.push(x.wrapT),p.push(x.wrapR||0),p.push(x.magFilter),p.push(x.minFilter),p.push(x.anisotropy),p.push(x.internalFormat),p.push(x.format),p.push(x.type),p.push(x.generateMipmaps),p.push(x.premultiplyAlpha),p.push(x.flipY),p.push(x.unpackAlignment),p.push(x.colorSpace),p.join()}function r1(x,p){let B=C.get(x);if(x.isVideoTexture&&E(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&B.__version!==x.version){let k=x.image;if(k===null)w1("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)w1("WebGLRenderer: Texture marked for update but image is incomplete");else{h1(B,x,p);return}}else x.isExternalTexture&&(B.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+p)}function X(x,p){let B=C.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){h1(B,x,p);return}else x.isExternalTexture&&(B.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+p)}function e1(x,p){let B=C.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){h1(B,x,p);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+p)}function C1(x,p){let B=C.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&B.__version!==x.version){R1(B,x,p);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+p)}let b1={[r4]:r.REPEAT,[x5]:r.CLAMP_TO_EDGE,[i4]:r.MIRRORED_REPEAT},_1={[_2]:r.NEAREST,[Je]:r.NEAREST_MIPMAP_NEAREST,[i7]:r.NEAREST_MIPMAP_LINEAR,[y2]:r.LINEAR,[B4]:r.LINEAR_MIPMAP_NEAREST,[H0]:r.LINEAR_MIPMAP_LINEAR},r2={[Ct]:r.NEVER,[nt]:r.ALWAYS,[rt]:r.LESS,[h9]:r.LEQUAL,[it]:r.EQUAL,[f9]:r.GEQUAL,[Ht]:r.GREATER,[Vt]:r.NOTEQUAL};function X1(x,p){if(p.type===u5&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===y2||p.magFilter===B4||p.magFilter===i7||p.magFilter===H0||p.minFilter===y2||p.minFilter===B4||p.minFilter===i7||p.minFilter===H0)&&w1("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(x,r.TEXTURE_WRAP_S,b1[p.wrapS]),r.texParameteri(x,r.TEXTURE_WRAP_T,b1[p.wrapT]),(x===r.TEXTURE_3D||x===r.TEXTURE_2D_ARRAY)&&r.texParameteri(x,r.TEXTURE_WRAP_R,b1[p.wrapR]),r.texParameteri(x,r.TEXTURE_MAG_FILTER,_1[p.magFilter]),r.texParameteri(x,r.TEXTURE_MIN_FILTER,_1[p.minFilter]),p.compareFunction&&(r.texParameteri(x,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(x,r.TEXTURE_COMPARE_FUNC,r2[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===_2||p.minFilter!==i7&&p.minFilter!==H0||p.type===u5&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||C.get(p).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,i.getMaxAnisotropy())),C.get(p).__currentAnisotropy=p.anisotropy}}}function $1(x,p){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,p.addEventListener("dispose",y));let k=p.source,W=l.get(k);W===void 0&&(W={},l.set(k,W));let i1=$(p);if(i1!==x.__cacheKey){W[i1]===void 0&&(W[i1]={texture:r.createTexture(),usedTimes:0},V.memory.textures++,B=!0),W[i1].usedTimes++;let H1=W[x.__cacheKey];H1!==void 0&&(W[x.__cacheKey].usedTimes--,H1.usedTimes===0&&R(p)),x.__cacheKey=i1,x.__webglTexture=W[i1].texture}return B}function q(x,p,B){return Math.floor(Math.floor(x/B)/p)}function j(x,p,B,k){let i1=x.updateRanges;if(i1.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,p.width,p.height,B,k,p.data);else{i1.sort((g1,s1)=>g1.start-s1.start);let H1=0;for(let g1=1;g1<i1.length;g1++){let s1=i1[H1],n1=i1[g1],Z1=s1.start+s1.count,T1=q(n1.start,p.width,4),B1=q(s1.start,p.width,4);n1.start<=Z1+1&&T1===B1&&q(n1.start+n1.count-1,p.width,4)===T1?s1.count=Math.max(s1.count,n1.start+n1.count-s1.start):(++H1,i1[H1]=n1)}i1.length=H1+1;let Y=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),V1=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,p.width);for(let g1=0,s1=i1.length;g1<s1;g1++){let n1=i1[g1],Z1=Math.floor(n1.start/4),T1=Math.ceil(n1.count/4),B1=Z1%p.width,O=Math.floor(Z1/p.width),L1=T1,K=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,B1),t.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,B1,O,L1,K,B,k,p.data)}x.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Y),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,V1)}}function h1(x,p,B){let k=r.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),p.isData3DTexture&&(k=r.TEXTURE_3D);let W=$1(x,p),i1=p.source;t.bindTexture(k,x.__webglTexture,r.TEXTURE0+B);let H1=C.get(i1);if(i1.version!==H1.__version||W===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let K=W1.getPrimaries(W1.workingColorSpace),a1=p.colorSpace===I5?null:W1.getPrimaries(p.colorSpace),c1=p.colorSpace===I5||K===a1?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,c1)}t.pixelStorei(r.UNPACK_ALIGNMENT,p.unpackAlignment);let J=c(p.image,!1,i.maxTextureSize);J=b2(p,J);let V1=H.convert(p.format,p.colorSpace),g1=H.convert(p.type),s1=h(p.internalFormat,V1,g1,p.normalized,p.colorSpace,p.isVideoTexture);X1(k,p);let n1,Z1=p.mipmaps,T1=p.isVideoTexture!==!0,B1=H1.__version===void 0||W===!0,O=i1.dataReady,L1=g(p,J);if(p.isDepthTexture)s1=S(p.format===V0,p.type),B1&&(T1?t.texStorage2D(r.TEXTURE_2D,1,s1,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,s1,J.width,J.height,0,V1,g1,null));else if(p.isDataTexture)if(Z1.length>0){T1&&B1&&t.texStorage2D(r.TEXTURE_2D,L1,s1,Z1[0].width,Z1[0].height);for(let K=0,a1=Z1.length;K<a1;K++)n1=Z1[K],T1?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,n1.width,n1.height,V1,g1,n1.data):t.texImage2D(r.TEXTURE_2D,K,s1,n1.width,n1.height,0,V1,g1,n1.data);p.generateMipmaps=!1}else T1?(B1&&t.texStorage2D(r.TEXTURE_2D,L1,s1,J.width,J.height),O&&j(p,J,V1,g1)):t.texImage2D(r.TEXTURE_2D,0,s1,J.width,J.height,0,V1,g1,J.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){T1&&B1&&t.texStorage3D(r.TEXTURE_2D_ARRAY,L1,s1,Z1[0].width,Z1[0].height,J.depth);for(let K=0,a1=Z1.length;K<a1;K++)if(n1=Z1[K],p.format!==r5)if(V1!==null)if(T1){if(O)if(p.layerUpdates.size>0){let c1=i8(n1.width,n1.height,p.format,p.type);for(let t1 of p.layerUpdates){let y1=n1.data.subarray(t1*c1/n1.data.BYTES_PER_ELEMENT,(t1+1)*c1/n1.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,t1,n1.width,n1.height,1,V1,y1)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,n1.width,n1.height,J.depth,V1,n1.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,s1,n1.width,n1.height,J.depth,0,n1.data,0,0);else w1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T1?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,n1.width,n1.height,J.depth,V1,g1,n1.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,s1,n1.width,n1.height,J.depth,0,V1,g1,n1.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{T1&&B1&&t.texStorage2D(r.TEXTURE_2D,L1,s1,Z1[0].width,Z1[0].height);for(let K=0,a1=Z1.length;K<a1;K++)n1=Z1[K],p.format!==r5?V1!==null?T1?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,n1.width,n1.height,V1,n1.data):t.compressedTexImage2D(r.TEXTURE_2D,K,s1,n1.width,n1.height,0,n1.data):w1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T1?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,n1.width,n1.height,V1,g1,n1.data):t.texImage2D(r.TEXTURE_2D,K,s1,n1.width,n1.height,0,V1,g1,n1.data)}else if(p.isDataArrayTexture)if(T1){if(B1&&t.texStorage3D(r.TEXTURE_2D_ARRAY,L1,s1,J.width,J.height,J.depth),O)if(p.layerUpdates.size>0){let K=i8(J.width,J.height,p.format,p.type);for(let a1 of p.layerUpdates){let c1=J.data.subarray(a1*K/J.data.BYTES_PER_ELEMENT,(a1+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,a1,J.width,J.height,1,V1,g1,c1)}p.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,V1,g1,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,s1,J.width,J.height,J.depth,0,V1,g1,J.data);else if(p.isData3DTexture)T1?(B1&&t.texStorage3D(r.TEXTURE_3D,L1,s1,J.width,J.height,J.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,V1,g1,J.data)):t.texImage3D(r.TEXTURE_3D,0,s1,J.width,J.height,J.depth,0,V1,g1,J.data);else if(p.isFramebufferTexture){if(B1)if(T1)t.texStorage2D(r.TEXTURE_2D,L1,s1,J.width,J.height);else{let K=J.width,a1=J.height;for(let c1=0;c1<L1;c1++)t.texImage2D(r.TEXTURE_2D,c1,s1,K,a1,0,V1,g1,null),K>>=1,a1>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in r){let K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),M.add(p),K.onpaint=a1=>{let c1=a1.changedElements;for(let t1 of M)c1.includes(t1.image)&&(t1.needsUpdate=!0)},K.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{let c1=r.RGBA,t1=r.RGBA,y1=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,c1,t1,y1,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Z1.length>0){if(T1&&B1){let K=j1(Z1[0]);t.texStorage2D(r.TEXTURE_2D,L1,s1,K.width,K.height)}for(let K=0,a1=Z1.length;K<a1;K++)n1=Z1[K],T1?O&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,V1,g1,n1):t.texImage2D(r.TEXTURE_2D,K,s1,V1,g1,n1);p.generateMipmaps=!1}else if(T1){if(B1){let K=j1(J);t.texStorage2D(r.TEXTURE_2D,L1,s1,K.width,K.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,V1,g1,J)}else t.texImage2D(r.TEXTURE_2D,0,s1,V1,g1,J);d(p)&&v(k),H1.__version=i1.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function R1(x,p,B){if(p.image.length!==6)return;let k=$1(x,p),W=p.source;t.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture,r.TEXTURE0+B);let i1=C.get(W);if(W.version!==i1.__version||k===!0){t.activeTexture(r.TEXTURE0+B);let H1=W1.getPrimaries(W1.workingColorSpace),Y=p.colorSpace===I5?null:W1.getPrimaries(p.colorSpace),J=p.colorSpace===I5||H1===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let V1=p.isCompressedTexture||p.image[0].isCompressedTexture,g1=p.image[0]&&p.image[0].isDataTexture,s1=[];for(let t1=0;t1<6;t1++)!V1&&!g1?s1[t1]=c(p.image[t1],!0,i.maxCubemapSize):s1[t1]=g1?p.image[t1].image:p.image[t1],s1[t1]=b2(p,s1[t1]);let n1=s1[0],Z1=H.convert(p.format,p.colorSpace),T1=H.convert(p.type),B1=h(p.internalFormat,Z1,T1,p.normalized,p.colorSpace),O=p.isVideoTexture!==!0,L1=i1.__version===void 0||k===!0,K=W.dataReady,a1=g(p,n1);X1(r.TEXTURE_CUBE_MAP,p);let c1;if(V1){O&&L1&&t.texStorage2D(r.TEXTURE_CUBE_MAP,a1,B1,n1.width,n1.height);for(let t1=0;t1<6;t1++){c1=s1[t1].mipmaps;for(let y1=0;y1<c1.length;y1++){let v1=c1[y1];p.format!==r5?Z1!==null?O?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,0,0,v1.width,v1.height,Z1,v1.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,B1,v1.width,v1.height,0,v1.data):w1("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,0,0,v1.width,v1.height,Z1,T1,v1.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1,B1,v1.width,v1.height,0,Z1,T1,v1.data)}}}else{if(c1=p.mipmaps,O&&L1){c1.length>0&&a1++;let t1=j1(s1[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,a1,B1,t1.width,t1.height)}for(let t1=0;t1<6;t1++)if(g1){O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,0,0,s1[t1].width,s1[t1].height,Z1,T1,s1[t1].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,B1,s1[t1].width,s1[t1].height,0,Z1,T1,s1[t1].data);for(let y1=0;y1<c1.length;y1++){let H2=c1[y1].image[t1].image;O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,0,0,H2.width,H2.height,Z1,T1,H2.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,B1,H2.width,H2.height,0,Z1,T1,H2.data)}}else{O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,0,0,Z1,T1,s1[t1]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,0,B1,Z1,T1,s1[t1]);for(let y1=0;y1<c1.length;y1++){let v1=c1[y1];O?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,0,0,Z1,T1,v1.image[t1]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+t1,y1+1,B1,Z1,T1,v1.image[t1])}}}d(p)&&v(r.TEXTURE_CUBE_MAP),i1.__version=W.version,p.onUpdate&&p.onUpdate(p)}x.__version=p.version}function u1(x,p,B,k,W,i1){let H1=H.convert(B.format,B.colorSpace),Y=H.convert(B.type),J=h(B.internalFormat,H1,Y,B.normalized,B.colorSpace),V1=C.get(p),g1=C.get(B);if(g1.__renderTarget=p,!V1.__hasExternalTextures){let s1=Math.max(1,p.width>>i1),n1=Math.max(1,p.height>>i1);W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?t.texImage3D(W,i1,J,s1,n1,p.depth,0,H1,Y,null):t.texImage2D(W,i1,J,s1,n1,0,H1,Y,null)}t.bindFramebuffer(r.FRAMEBUFFER,x),u2(p)?n.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,W,g1.__webglTexture,0,M2(p)):(W===r.TEXTURE_2D||W>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,W,g1.__webglTexture,i1),t.bindFramebuffer(r.FRAMEBUFFER,null)}function k1(x,p,B){if(r.bindRenderbuffer(r.RENDERBUFFER,x),p.depthBuffer){let k=p.depthTexture,W=k&&k.isDepthTexture?k.type:null,i1=S(p.stencilBuffer,W),H1=p.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;u2(p)?n.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,M2(p),i1,p.width,p.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,M2(p),i1,p.width,p.height):r.renderbufferStorage(r.RENDERBUFFER,i1,p.width,p.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,H1,r.RENDERBUFFER,x)}else{let k=p.textures;for(let W=0;W<k.length;W++){let i1=k[W],H1=H.convert(i1.format,i1.colorSpace),Y=H.convert(i1.type),J=h(i1.internalFormat,H1,Y,i1.normalized,i1.colorSpace);u2(p)?n.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,M2(p),J,p.width,p.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,M2(p),J,p.width,p.height):r.renderbufferStorage(r.RENDERBUFFER,J,p.width,p.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function h2(x,p,B){let k=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,x),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=C.get(p.depthTexture);if(W.__renderTarget=p,(!W.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,p.depthTexture.addEventListener("dispose",y)),W.__webglTexture===void 0){W.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),X1(r.TEXTURE_CUBE_MAP,p.depthTexture);let V1=H.convert(p.depthTexture.format),g1=H.convert(p.depthTexture.type),s1;p.depthTexture.format===v5?s1=r.DEPTH_COMPONENT24:p.depthTexture.format===V0&&(s1=r.DEPTH24_STENCIL8);for(let n1=0;n1<6;n1++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+n1,0,s1,p.width,p.height,0,V1,g1,null)}}else r1(p.depthTexture,0);let i1=W.__webglTexture,H1=M2(p),Y=k?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,J=p.depthTexture.format===V0?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(p.depthTexture.format===v5)u2(p)?n.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Y,i1,0,H1):r.framebufferTexture2D(r.FRAMEBUFFER,J,Y,i1,0);else if(p.depthTexture.format===V0)u2(p)?n.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Y,i1,0,H1):r.framebufferTexture2D(r.FRAMEBUFFER,J,Y,i1,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U1(x){let p=C.get(x),B=x.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==x.depthTexture){let k=x.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),k){let W=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),p.__depthDisposeCallback=W}p.__boundDepthTexture=k}if(x.depthTexture&&!p.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)h2(p.__webglFramebuffer[k],x,k);else{let k=x.texture.mipmaps;k&&k.length>0?h2(p.__webglFramebuffer[0],x,0):h2(p.__webglFramebuffer,x,0)}else if(B){p.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,p.__webglFramebuffer[k]),p.__webglDepthbuffer[k]===void 0)p.__webglDepthbuffer[k]=r.createRenderbuffer(),k1(p.__webglDepthbuffer[k],x,!1);else{let W=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,i1=p.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,i1),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,i1)}}else{let k=x.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(r.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=r.createRenderbuffer(),k1(p.__webglDepthbuffer,x,!1);else{let W=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,i1=p.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,i1),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,i1)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y1(x,p,B){let k=C.get(x);p!==void 0&&u1(k.__webglFramebuffer,x,x.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&U1(x)}function i2(x){let p=x.texture,B=C.get(x),k=C.get(p);x.addEventListener("dispose",m);let W=x.textures,i1=x.isWebGLCubeRenderTarget===!0,H1=W.length>1;if(H1||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=p.version,V.memory.textures++),i1){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<p.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=r.createFramebuffer()}else B.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<p.mipmaps.length;Y++)B.__webglFramebuffer[Y]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(H1)for(let Y=0,J=W.length;Y<J;Y++){let V1=C.get(W[Y]);V1.__webglTexture===void 0&&(V1.__webglTexture=r.createTexture(),V.memory.textures++)}if(x.samples>0&&u2(x)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let J=W[Y];B.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let V1=H.convert(J.format,J.colorSpace),g1=H.convert(J.type),s1=h(J.internalFormat,V1,g1,J.normalized,J.colorSpace,x.isXRRenderTarget===!0),n1=M2(x);r.renderbufferStorageMultisample(r.RENDERBUFFER,n1,s1,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Y,r.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(r.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),k1(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(i1){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),X1(r.TEXTURE_CUBE_MAP,p);for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0)for(let J=0;J<p.mipmaps.length;J++)u1(B.__webglFramebuffer[Y][J],x,p,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else u1(B.__webglFramebuffer[Y],x,p,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(p)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(H1){for(let Y=0,J=W.length;Y<J;Y++){let V1=W[Y],g1=C.get(V1),s1=r.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(s1=x.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(s1,g1.__webglTexture),X1(s1,V1),u1(B.__webglFramebuffer,x,V1,r.COLOR_ATTACHMENT0+Y,s1,0),d(V1)&&v(s1)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(Y=x.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Y,k.__webglTexture),X1(Y,p),p.mipmaps&&p.mipmaps.length>0)for(let J=0;J<p.mipmaps.length;J++)u1(B.__webglFramebuffer[J],x,p,r.COLOR_ATTACHMENT0,Y,J);else u1(B.__webglFramebuffer,x,p,r.COLOR_ATTACHMENT0,Y,0);d(p)&&v(Y),t.unbindTexture()}x.depthBuffer&&U1(x)}function G1(x){let p=x.textures;for(let B=0,k=p.length;B<k;B++){let W=p[B];if(d(W)){let i1=_(x),H1=C.get(W).__webglTexture;t.bindTexture(i1,H1),v(i1),t.unbindTexture()}}}let a2=[],g2=[];function G2(x){if(x.samples>0){if(u2(x)===!1){let p=x.textures,B=x.width,k=x.height,W=r.COLOR_BUFFER_BIT,i1=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,H1=C.get(x),Y=p.length>1;if(Y)for(let V1=0;V1<p.length;V1++)t.bindFramebuffer(r.FRAMEBUFFER,H1.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V1,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,H1.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V1,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,H1.__webglMultisampledFramebuffer);let J=x.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,H1.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,H1.__webglFramebuffer);for(let V1=0;V1<p.length;V1++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=r.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=r.STENCIL_BUFFER_BIT)),Y){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,H1.__webglColorRenderbuffer[V1]);let g1=C.get(p[V1]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,g1,0)}r.blitFramebuffer(0,0,B,k,0,0,B,k,W,r.NEAREST),a===!0&&(a2.length=0,g2.length=0,a2.push(r.COLOR_ATTACHMENT0+V1),x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&(a2.push(i1),g2.push(i1),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,g2)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,a2))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Y)for(let V1=0;V1<p.length;V1++){t.bindFramebuffer(r.FRAMEBUFFER,H1.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V1,r.RENDERBUFFER,H1.__webglColorRenderbuffer[V1]);let g1=C.get(p[V1]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,H1.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+V1,r.TEXTURE_2D,g1,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,H1.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.storeMultisampledDepthBuffer===!1&&a){let p=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[p])}}}function M2(x){return Math.min(i.maxSamples,x.samples)}function u2(x){let p=C.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function E(x){let p=V.render.frame;o.get(x)!==p&&(o.set(x,p),x.update())}function b2(x,p){let B=x.colorSpace,k=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==b3&&B!==I5&&(W1.getTransfer(B)===J1?(k!==r5||W!==X2)&&w1("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):O1("WebGLTextures: Unsupported texture color space:",B)),p}function j1(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(L.width=x.naturalWidth||x.width,L.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(L.width=x.displayWidth,L.height=x.displayHeight):(L.width=x.width,L.height=x.height),L}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=r1,this.setTexture2DArray=X,this.setTexture3D=e1,this.setTextureCube=C1,this.rebindTextures=Y1,this.setupRenderTarget=i2,this.updateRenderTargetMipmap=G1,this.updateMultisampleRenderTarget=G2,this.setupDepthRenderbuffer=U1,this.setupFrameBufferTexture=u1,this.useMultisampledRTT=u2,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pa(r,e){function t(C,i=I5){let H,V=W1.getTransfer(i);if(C===X2)return r.UNSIGNED_BYTE;if(C===F4)return r.UNSIGNED_SHORT_4_4_4_4;if(C===D4)return r.UNSIGNED_SHORT_5_5_5_1;if(C===W6)return r.UNSIGNED_INT_5_9_9_9_REV;if(C===X6)return r.UNSIGNED_INT_10F_11F_11F_REV;if(C===z6)return r.BYTE;if(C===G6)return r.SHORT;if(C===M3)return r.UNSIGNED_SHORT;if(C===I4)return r.INT;if(C===p5)return r.UNSIGNED_INT;if(C===u5)return r.FLOAT;if(C===A5)return r.HALF_FLOAT;if(C===q6)return r.ALPHA;if(C===Y6)return r.RGB;if(C===r5)return r.RGBA;if(C===v5)return r.DEPTH_COMPONENT;if(C===V0)return r.DEPTH_STENCIL;if(C===$6)return r.RED;if(C===k4)return r.RED_INTEGER;if(C===n0)return r.RG;if(C===N4)return r.RG_INTEGER;if(C===U4)return r.RGBA_INTEGER;if(C===H7||C===V7||C===n7||C===L7)if(V===J1)if(H=e.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(C===H7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(C===V7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(C===n7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(C===L7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=e.get("WEBGL_compressed_texture_s3tc"),H!==null){if(C===H7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(C===V7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(C===n7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(C===L7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(C===z4||C===G4||C===W4||C===X4)if(H=e.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(C===z4)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(C===G4)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(C===W4)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(C===X4)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(C===q4||C===Y4||C===$4||C===Q4||C===K4||C===a7||C===J4)if(H=e.get("WEBGL_compressed_texture_etc"),H!==null){if(C===q4||C===Y4)return V===J1?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(C===$4)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(C===Q4)return H.COMPRESSED_R11_EAC;if(C===K4)return H.COMPRESSED_SIGNED_R11_EAC;if(C===a7)return H.COMPRESSED_RG11_EAC;if(C===J4)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(C===j4||C===e9||C===t9||C===C9||C===r9||C===i9||C===H9||C===V9||C===n9||C===L9||C===a9||C===o9||C===s9||C===M9)if(H=e.get("WEBGL_compressed_texture_astc"),H!==null){if(C===j4)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(C===e9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(C===t9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(C===C9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(C===r9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(C===i9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(C===H9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(C===V9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(C===n9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(C===L9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(C===a9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(C===o9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(C===s9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(C===M9)return V===J1?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(C===l9||C===d9||C===c9)if(H=e.get("EXT_texture_compression_bptc"),H!==null){if(C===l9)return V===J1?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(C===d9)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(C===c9)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(C===p9||C===u9||C===o7||C===A9)if(H=e.get("EXT_texture_compression_rgtc"),H!==null){if(C===p9)return H.COMPRESSED_RED_RGTC1_EXT;if(C===u9)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(C===o7)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(C===A9)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return C===l3?r.UNSIGNED_INT_24_8:r[C]!==void 0?r[C]:null}return{convert:t}}var ua=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Aa=`
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

}`,v8=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let C=new k3(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=C}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,C=new Q2({vertexShader:ua,fragmentShader:Aa,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U2(new $3(20,20),C)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},S8=class extends S5{constructor(e,t){super();let C=this,i=null,H=1,V=null,n="local-floor",a=1,L=null,o=null,M=null,s=null,l=null,u=null,f=typeof XRWebGLBinding<"u",c=new v8,d={},v=t.getContextAttributes(),_=null,h=null,S=[],g=[],y=new m1,m=null,Z=null,R=new R2;R.viewport=new o2;let I=new R2;I.viewport=new o2;let N=[R,I],G=new O4,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=S[q];return j===void 0&&(j=new t3,S[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=S[q];return j===void 0&&(j=new t3,S[q]=j),j.getGripSpace()},this.getHand=function(q){let j=S[q];return j===void 0&&(j=new t3,S[q]=j),j.getHandSpace()};function Q(q){let j=g.indexOf(q.inputSource);if(j===-1)return;let h1=S[j];h1!==void 0&&(h1.update(q.inputSource,q.frame,L||V),h1.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",r1);for(let q=0;q<S.length;q++){let j=g[q];j!==null&&(g[q]=null,S[q].disconnect(j))}P=null,U=null,c.reset();for(let q in d)delete d[q];if(e.setRenderTarget(_),l=null,s=null,M=null,i=null,h=null,$1.stop(),C.isPresenting=!1,e.setPixelRatio(m),e.setSize(y.width,y.height,!1),Z!==null){let q=Z.camera;q.fov=Z.fov,q.zoom=Z.zoom,q.updateProjectionMatrix(),Z=null}C.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){H=q,C.isPresenting===!0&&w1("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){n=q,C.isPresenting===!0&&w1("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return L||V},this.setReferenceSpace=function(q){L=q},this.getBaseLayer=function(){return s!==null?s:l},this.getBinding=function(){return M===null&&f&&(M=new XRWebGLBinding(i,t)),M},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",$),i.addEventListener("inputsourceschange",r1),v.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(y),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let h1=null,R1=null,u1=null;v.depth&&(u1=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,h1=v.stencil?V0:v5,R1=v.stencil?l3:p5);let k1={colorFormat:t.RGBA8,depthFormat:u1,scaleFactor:H};M=this.getBinding(),s=M.createProjectionLayer(k1),i.updateRenderState({layers:[s]}),e.setPixelRatio(1),e.setSize(s.textureWidth,s.textureHeight,!1),h=new W2(s.textureWidth,s.textureHeight,{format:r5,type:X2,depthTexture:new J5(s.textureWidth,s.textureHeight,R1,void 0,void 0,void 0,void 0,void 0,void 0,h1),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1,resolveStencilBuffer:s.ignoreDepthValues===!1,storeMultisampledDepthBuffer:s.ignoreDepthValues===!1,storeMultisampledStencilBuffer:s.ignoreDepthValues===!1})}else{let h1={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:H};l=new XRWebGLLayer(i,t,h1),i.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),h=new W2(l.framebufferWidth,l.framebufferHeight,{format:r5,type:X2,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}h.isXRRenderTarget=!0,this.setFoveation(a),L=null,V=await i.requestReferenceSpace(n),$1.setContext(i),$1.start(),C.isPresenting=!0,C.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function r1(q){for(let j=0;j<q.removed.length;j++){let h1=q.removed[j],R1=g.indexOf(h1);R1>=0&&(g[R1]=null,S[R1].disconnect(h1))}for(let j=0;j<q.added.length;j++){let h1=q.added[j],R1=g.indexOf(h1);if(R1===-1){for(let k1=0;k1<S.length;k1++)if(k1>=g.length){g.push(h1),R1=k1;break}else if(g[k1]===null){g[k1]=h1,R1=k1;break}if(R1===-1)break}let u1=S[R1];u1&&u1.connect(h1)}}let X=new T,e1=new T;function C1(q,j,h1){X.setFromMatrixPosition(j.matrixWorld),e1.setFromMatrixPosition(h1.matrixWorld);let R1=X.distanceTo(e1),u1=j.projectionMatrix.elements,k1=h1.projectionMatrix.elements,h2=u1[14]/(u1[10]-1),U1=u1[14]/(u1[10]+1),Y1=(u1[9]+1)/u1[5],i2=(u1[9]-1)/u1[5],G1=(u1[8]-1)/u1[0],a2=(k1[8]+1)/k1[0],g2=h2*G1,G2=h2*a2,M2=R1/(-G1+a2),u2=M2*-G1;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(u2),q.translateZ(M2),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),u1[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let E=h2+M2,b2=U1+M2,j1=g2-u2,x=G2+(R1-u2),p=Y1*U1/b2*E,B=i2*U1/b2*E;q.projectionMatrix.makePerspective(j1,x,p,B,E,b2),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function b1(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,h1=q.far;c.texture!==null&&(c.depthNear>0&&(j=c.depthNear),c.depthFar>0&&(h1=c.depthFar)),G.near=I.near=R.near=j,G.far=I.far=R.far=h1,(P!==G.near||U!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,U=G.far),G.layers.mask=q.layers.mask|6,R.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let R1=q.parent,u1=G.cameras;b1(G,R1);for(let k1=0;k1<u1.length;k1++)b1(u1[k1],R1);u1.length===2?C1(G,R,I):G.projectionMatrix.copy(R.projectionMatrix),Z===null&&q.isPerspectiveCamera&&(Z={camera:q,fov:q.fov,zoom:q.zoom}),_1(q,G,R1)};function _1(q,j,h1){h1===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(h1.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=J0*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(s===null&&l===null))return a},this.setFoveation=function(q){a=q,s!==null&&(s.fixedFoveation=q),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=q)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(G)},this.getCameraTexture=function(q){return d[q]};let r2=null;function X1(q,j){if(o=j.getViewerPose(L||V),u=j,o!==null){let h1=o.views;l!==null&&(e.setRenderTargetFramebuffer(h,l.framebuffer),e.setRenderTarget(h));let R1=!1;h1.length!==G.cameras.length&&(G.cameras.length=0,R1=!0);for(let U1=0;U1<h1.length;U1++){let Y1=h1[U1],i2=null;if(l!==null)i2=l.getViewport(Y1);else{let a2=M.getViewSubImage(s,Y1);i2=a2.viewport,U1===0&&(e.setRenderTargetTextures(h,a2.colorTexture,a2.depthStencilTexture),e.setRenderTarget(h))}let G1=N[U1];G1===void 0&&(G1=new R2,G1.layers.enable(U1),G1.viewport=new o2,N[U1]=G1),G1.matrix.fromArray(Y1.transform.matrix),G1.matrix.decompose(G1.position,G1.quaternion,G1.scale),G1.projectionMatrix.fromArray(Y1.projectionMatrix),G1.projectionMatrixInverse.copy(G1.projectionMatrix).invert(),G1.viewport.set(i2.x,i2.y,i2.width,i2.height),U1===0&&(G.matrix.copy(G1.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),R1===!0&&G.cameras.push(G1)}let u1=i.enabledFeatures;if(u1&&u1.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){M=C.getBinding();let U1=M.getDepthInformation(h1[0]);U1&&U1.isValid&&U1.texture&&c.init(U1,i.renderState)}if(u1&&u1.includes("camera-access")&&f){e.state.unbindTexture(),M=C.getBinding();for(let U1=0;U1<h1.length;U1++){let Y1=h1[U1].camera;if(Y1){let i2=d[Y1];i2||(i2=new k3,d[Y1]=i2);let G1=M.getCameraImage(Y1);i2.sourceTexture=G1}}}}for(let h1=0;h1<S.length;h1++){let R1=g[h1],u1=S[h1];R1!==null&&u1!==void 0&&u1.update(R1,j,L||V)}r2&&r2(q,j),j.detectedPlanes&&C.dispatchEvent({type:"planesdetected",data:j}),u=null}let $1=new Ut;$1.setAnimationLoop(X1),this.setAnimationLoop=function(q){r2=q},this.dispose=function(){}}},ma=new t2,Yt=new E1;Yt.set(-1,0,0,0,1,0,0,0,1);function ha(r,e){function t(c,d){c.matrixAutoUpdate===!0&&c.updateMatrix(),d.value.copy(c.matrix)}function C(c,d){d.color.getRGB(c.fogColor.value,t8(r)),d.isFog?(c.fogNear.value=d.near,c.fogFar.value=d.far):d.isFogExp2&&(c.fogDensity.value=d.density)}function i(c,d,v,_,h){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?H(c,d):d.isMeshLambertMaterial?(H(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(H(c,d),M(c,d)):d.isMeshPhongMaterial?(H(c,d),o(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(H(c,d),s(c,d),d.isMeshPhysicalMaterial&&l(c,d,h)):d.isMeshMatcapMaterial?(H(c,d),u(c,d)):d.isMeshDepthMaterial?H(c,d):d.isMeshDistanceMaterial?(H(c,d),f(c,d)):d.isMeshNormalMaterial?H(c,d):d.isLineBasicMaterial?(V(c,d),d.isLineDashedMaterial&&n(c,d)):d.isPointsMaterial?a(c,d,v,_):d.isSpriteMaterial?L(c,d):d.isShadowMaterial?(c.color.value.copy(d.color),c.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function H(c,d){c.opacity.value=d.opacity,d.color&&c.diffuse.value.copy(d.color),d.emissive&&c.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.bumpMap&&(c.bumpMap.value=d.bumpMap,t(d.bumpMap,c.bumpMapTransform),c.bumpScale.value=d.bumpScale,d.side===z2&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,t(d.normalMap,c.normalMapTransform),c.normalScale.value.copy(d.normalScale),d.side===z2&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,t(d.displacementMap,c.displacementMapTransform),c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,c.emissiveMapTransform)),d.specularMap&&(c.specularMap.value=d.specularMap,t(d.specularMap,c.specularMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest);let v=e.get(d),_=v.envMap,h=v.envMapRotation;_&&(c.envMap.value=_,c.envMapRotation.value.setFromMatrix4(ma.makeRotationFromEuler(h)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Yt),c.reflectivity.value=d.reflectivity,c.ior.value=d.ior,c.refractionRatio.value=d.refractionRatio),d.lightMap&&(c.lightMap.value=d.lightMap,c.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,c.lightMapTransform)),d.aoMap&&(c.aoMap.value=d.aoMap,c.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,c.aoMapTransform))}function V(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform))}function n(c,d){c.dashSize.value=d.dashSize,c.totalSize.value=d.dashSize+d.gapSize,c.scale.value=d.scale}function a(c,d,v,_){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.size.value=d.size*v,c.scale.value=_*.5,d.map&&(c.map.value=d.map,t(d.map,c.uvTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function L(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.rotation.value=d.rotation,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function o(c,d){c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4)}function M(c,d){d.gradientMap&&(c.gradientMap.value=d.gradientMap)}function s(c,d){c.metalness.value=d.metalness,d.metalnessMap&&(c.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,c.metalnessMapTransform)),c.roughness.value=d.roughness,d.roughnessMap&&(c.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,c.roughnessMapTransform)),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)}function l(c,d,v){c.ior.value=d.ior,d.sheen>0&&(c.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),c.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(c.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,c.sheenColorMapTransform)),d.sheenRoughnessMap&&(c.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,c.sheenRoughnessMapTransform))),d.clearcoat>0&&(c.clearcoat.value=d.clearcoat,c.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(c.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,c.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(c.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===z2&&c.clearcoatNormalScale.value.negate())),d.dispersion>0&&(c.dispersion.value=d.dispersion),d.retroreflectivity>0&&(c.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(c.iridescence.value=d.iridescence,c.iridescenceIOR.value=d.iridescenceIOR,c.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(c.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,c.iridescenceMapTransform)),d.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),d.transmission>0&&(c.transmission.value=d.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(c.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,c.transmissionMapTransform)),c.thickness.value=d.thickness,d.thicknessMap&&(c.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=d.attenuationDistance,c.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(c.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(c.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=d.specularIntensity,c.specularColor.value.copy(d.specularColor),d.specularColorMap&&(c.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,c.specularColorMapTransform)),d.specularIntensityMap&&(c.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,c.specularIntensityMapTransform))}function u(c,d){d.matcap&&(c.matcap.value=d.matcap)}function f(c,d){let v=e.get(d).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:C,refreshMaterialUniforms:i}}function fa(r,e,t,C){let i={},H={},V=[],n=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function a(h,S){let g=S.program;C.uniformBlockBinding(h,g)}function L(h,S){let g=i[h.id];g===void 0&&(c(h),g=o(h),i[h.id]=g,h.addEventListener("dispose",v));let y=S.program;C.updateUBOMapping(h,y);let m=e.render.frame;H[h.id]!==m&&(s(h),H[h.id]=m)}function o(h){let S=M();h.__bindingPointIndex=S;let g=r.createBuffer(),y=h.__size,m=h.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,y,m),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,g),g}function M(){for(let h=0;h<n;h++)if(V.indexOf(h)===-1)return V.push(h),h;return O1("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(h){let S=i[h.id],g=h.uniforms,y=h.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let m=0,Z=g.length;m<Z;m++){let R=g[m];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)l(R[I],m,I,y);else l(R,m,0,y)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function l(h,S,g,y){if(f(h,S,g,y)===!0){let m=h.__offset,Z=h.value;if(Array.isArray(Z)){let R=0;for(let I=0;I<Z.length;I++){let N=Z[I],G=d(N);u(N,h.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else u(Z,h.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,m,h.__data)}}function u(h,S,g){typeof h=="number"||typeof h=="boolean"?S[0]=h:h.isMatrix3?(S[0]=h.elements[0],S[1]=h.elements[1],S[2]=h.elements[2],S[3]=0,S[4]=h.elements[3],S[5]=h.elements[4],S[6]=h.elements[5],S[7]=0,S[8]=h.elements[6],S[9]=h.elements[7],S[10]=h.elements[8],S[11]=0):ArrayBuffer.isView(h)?S.set(new h.constructor(h.buffer,h.byteOffset,S.length)):h.toArray(S,g)}function f(h,S,g,y){let m=h.value,Z=S+"_"+g;if(y[Z]===void 0)return typeof m=="number"||typeof m=="boolean"?y[Z]=m:ArrayBuffer.isView(m)?y[Z]=m.slice():y[Z]=m.clone(),!0;{let R=y[Z];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return y[Z]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function c(h){let S=h.uniforms,g=0,y=16;for(let Z=0,R=S.length;Z<R;Z++){let I=Array.isArray(S[Z])?S[Z]:[S[Z]];for(let N=0,G=I.length;N<G;N++){let P=I[N],U=Array.isArray(P.value)?P.value:[P.value];for(let Q=0,$=U.length;Q<$;Q++){let r1=U[Q],X=d(r1),e1=g%y,C1=e1%X.boundary,b1=e1+C1;g+=C1,b1!==0&&y-b1<X.storage&&(g+=y-b1),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=g,g+=X.storage}}}let m=g%y;return m>0&&(g+=y-m),h.__size=g,h.__cache={},this}function d(h){let S={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(S.boundary=4,S.storage=4):h.isVector2?(S.boundary=8,S.storage=8):h.isVector3||h.isColor?(S.boundary=16,S.storage=12):h.isVector4?(S.boundary=16,S.storage=16):h.isMatrix3?(S.boundary=48,S.storage=48):h.isMatrix4?(S.boundary=64,S.storage=64):h.isTexture?w1("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(h)?(S.boundary=16,S.storage=h.byteLength):w1("WebGLRenderer: Unsupported uniform value type.",h),S}function v(h){let S=h.target;S.removeEventListener("dispose",v);let g=V.indexOf(S.__bindingPointIndex);V.splice(g,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete H[S.id]}function _(){for(let h in i)r.deleteBuffer(i[h]);V=[],i={},H={}}return{bind:a,update:L,dispose:_}}var xa=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_5=null;function va(){return _5===null&&(_5=new a4(xa,16,16,n0,A5),_5.name="DFG_LUT",_5.minFilter=y2,_5.magFilter=y2,_5.wrapS=x5,_5.wrapT=x5,_5.generateMipmaps=!1,_5.needsUpdate=!0),_5}var Z9=class{constructor(e={}){let{canvas:t=at(),context:C=null,depth:i=!0,stencil:H=!1,alpha:V=!1,antialias:n=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:L=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:s=!1,outputBufferType:l=X2}=e;this.isWebGLRenderer=!0;let u;if(C!==null){if(typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=C.getContextAttributes().alpha}else u=V;let f=l,c=new Set([U4,N4,k4]),d=new Set([X2,p5,M3,l3,F4,D4]),v=new Uint32Array(4),_=new Int32Array(4),h=new T,S=null,g=null,y=[],m=[],Z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=c5,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,G=null,P=null,U=null;this._outputColorSpace=E2;let Q=0,$=0,r1=null,X=-1,e1=null,C1=new o2,b1=new o2,_1=null,r2=new I1(0),X1=0,$1=t.width,q=t.height,j=1,h1=null,R1=null,u1=new o2(0,0,$1,q),k1=new o2(0,0,$1,q),h2=!1,U1=new r3,Y1=!1,i2=!1,G1=new t2,a2=new T,g2=new o2,G2={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M2=!1;function u2(){return r1===null?j:1}let E=C;function b2(A,b){return t.getContext(A,b)}let j1,x,p,B,k,W,i1,H1,Y,J,V1,g1,s1,n1,Z1,T1,B1,O,L1,K,a1,c1,t1;try{let A={alpha:!0,depth:i,stencil:H,antialias:n,premultipliedAlpha:a,preserveDrawingBuffer:L,powerPreference:o,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",H2,!1),t.addEventListener("webglcontextrestored",Q1,!1),t.addEventListener("webglcontextcreationerror",n5,!1),E===null){let b="webgl2";if(E=b2(b,A),E===null)throw b2(b)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}y1()}catch(A){throw t.removeEventListener("webglcontextlost",H2,!1),t.removeEventListener("webglcontextrestored",Q1,!1),t.removeEventListener("webglcontextcreationerror",n5,!1),O1("WebGLRenderer: "+A.message),A}function y1(){j1=new Tn(E),j1.init(),a1=new pa(E,j1),x=new hn(E,j1,e,a1),p=new da(E,j1),x.reversedDepthBuffer&&s&&p.buffers.depth.setReversed(!0),G=E.createFramebuffer(),P=E.createFramebuffer(),U=E.createFramebuffer(),B=new En(E),k=new ea,W=new ca(E,j1,p,k,x,a1,B),i1=new bn(R),H1=new Ri(E),c1=new An(E,H1),Y=new wn(E,H1,B,c1),J=new Pn(E,Y,H1,c1,B),O=new Rn(E,x,W),Z1=new fn(k),V1=new jL(R,i1,j1,x,c1,Z1),g1=new ha(R,k),s1=new Ca,n1=new La(j1),B1=new un(R,i1,p,J,u,a),T1=new la(R,J,x),t1=new fa(E,B,x,p),L1=new mn(E,j1,B),K=new On(E,j1,B),B.programs=V1.programs,R.capabilities=x,R.extensions=j1,R.properties=k,R.renderLists=s1,R.shadowMap=T1,R.state=p,R.info=B}f!==X2&&(Z=new In(f,t.width,t.height,n,i,H));let v1=new S8(R,E);this.xr=v1,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let A=j1.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=j1.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize($1,q,!1))},this.getSize=function(A){return A.set($1,q)},this.setSize=function(A,b,z=!0){if(v1.isPresenting){w1("WebGLRenderer: Can't change size while VR device is presenting.");return}$1=A,q=b,t.width=Math.floor(A*j),t.height=Math.floor(b*j),z===!0&&(t.style.width=A+"px",t.style.height=b+"px"),Z!==null&&Z.setSize(t.width,t.height),this.setViewport(0,0,A,b)},this.getDrawingBufferSize=function(A){return A.set($1*j,q*j).floor()},this.setDrawingBufferSize=function(A,b,z){$1=A,q=b,j=z,t.width=Math.floor(A*z),t.height=Math.floor(b*z),this.setViewport(0,0,A,b)},this.setEffects=function(A){if(f===X2){O1("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let b=0;b<A.length;b++)if(A[b].isOutputPass===!0){w1("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(C1)},this.getViewport=function(A){return A.copy(u1)},this.setViewport=function(A,b,z,F){A.isVector4?u1.set(A.x,A.y,A.z,A.w):u1.set(A,b,z,F),p.viewport(C1.copy(u1).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(k1)},this.setScissor=function(A,b,z,F){A.isVector4?k1.set(A.x,A.y,A.z,A.w):k1.set(A,b,z,F),p.scissor(b1.copy(k1).multiplyScalar(j).round())},this.getScissorTest=function(){return h2},this.setScissorTest=function(A){p.setScissorTest(h2=A)},this.setOpaqueSort=function(A){h1=A},this.setTransparentSort=function(A){R1=A},this.getClearColor=function(A){return A.copy(B1.getClearColor())},this.setClearColor=function(){B1.setClearColor(...arguments)},this.getClearAlpha=function(){return B1.getClearAlpha()},this.setClearAlpha=function(){B1.setClearAlpha(...arguments)},this.clear=function(A=!0,b=!0,z=!0){let F=0;if(A){let D=!1;if(r1!==null){let d1=r1.texture.format;D=c.has(d1)}if(D){let d1=r1.texture.type,A1=d.has(d1),l1=B1.getClearColor(),f1=B1.getClearAlpha(),S1=l1.r,F1=l1.g,z1=l1.b;A1?(v[0]=S1,v[1]=F1,v[2]=z1,v[3]=f1,E.clearBufferuiv(E.COLOR,0,v)):(_[0]=S1,_[1]=F1,_[2]=z1,_[3]=f1,E.clearBufferiv(E.COLOR,0,_))}else F|=E.COLOR_BUFFER_BIT}b&&(F|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&E.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",H2,!1),t.removeEventListener("webglcontextrestored",Q1,!1),t.removeEventListener("webglcontextcreationerror",n5,!1),B1.dispose(),s1.dispose(),n1.dispose(),k.dispose(),i1.dispose(),J.dispose(),c1.dispose(),t1.dispose(),V1.dispose(),v1.dispose(),v1.removeEventListener("sessionstart",z8),v1.removeEventListener("sessionend",G8),p0.stop()};function H2(A){A.preventDefault(),K6("WebGLRenderer: Context Lost."),I=!0}function Q1(){K6("WebGLRenderer: Context Restored."),I=!1;let A=B.autoReset,b=T1.enabled,z=T1.autoUpdate,F=T1.needsUpdate,D=T1.type;y1(),B.autoReset=A,T1.enabled=b,T1.autoUpdate=z,T1.needsUpdate=F,T1.type=D}function n5(A){O1("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function m5(A){let b=A.target;b.removeEventListener("dispose",m5),Hr(b)}function Hr(A){Vr(A),k.remove(A)}function Vr(A){let b=k.get(A).programs;b!==void 0&&(b.forEach(function(z){V1.releaseProgram(z)}),A.isShaderMaterial&&V1.releaseShaderCache(A))}this.renderBufferDirect=function(A,b,z,F,D,d1){b===null&&(b=G2);let A1=D.isMesh&&D.matrixWorld.determinantAffine()<0,l1=ar(A,b,z,F,D);p.setMaterial(F,A1);let f1=z.index,S1=1;if(F.wireframe===!0){if(f1=Y.getWireframeAttribute(z),f1===void 0)return;S1=2}let F1=z.drawRange,z1=z.attributes.position,x1=F1.start*S1,K1=(F1.start+F1.count)*S1;d1!==null&&(x1=Math.max(x1,d1.start*S1),K1=Math.min(K1,(d1.start+d1.count)*S1)),f1!==null?(x1=Math.max(x1,0),K1=Math.min(K1,f1.count)):z1!=null&&(x1=Math.max(x1,0),K1=Math.min(K1,z1.count));let A2=K1-x1;if(A2<0||A2===1/0)return;c1.setup(D,F,l1,z,f1);let n2,C2=L1;if(f1!==null&&(n2=H1.get(f1),C2=K,C2.setIndex(n2)),D.isMesh)F.wireframe===!0?(p.setLineWidth(F.wireframeLinewidth*u2()),C2.setMode(E.LINES)):C2.setMode(E.TRIANGLES);else if(D.isLine){let T2=F.linewidth;T2===void 0&&(T2=1),p.setLineWidth(T2*u2()),D.isLineSegments?C2.setMode(E.LINES):D.isLineLoop?C2.setMode(E.LINE_LOOP):C2.setMode(E.LINE_STRIP)}else D.isPoints?C2.setMode(E.POINTS):D.isSprite&&C2.setMode(E.TRIANGLES);if(D.isBatchedMesh)if(j1.get("WEBGL_multi_draw"))C2.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let T2=D._multiDrawStarts,p1=D._multiDrawCounts,I2=D._multiDrawCount,q1=f1?H1.get(f1).bytesPerElement:1,j2=k.get(F).currentProgram.getUniforms();for(let h5=0;h5<I2;h5++)j2.setValue(E,"_gl_DrawID",h5),C2.render(T2[h5]/q1,p1[h5])}else if(D.isInstancedMesh)C2.renderInstances(x1,A2,D.count);else if(z.isInstancedBufferGeometry){let T2=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,p1=Math.min(z.instanceCount,T2);C2.renderInstances(x1,A2,p1)}else C2.render(x1,A2)};function U8(A,b,z,F){N!==null&&A.isNodeMaterial&&N.setObject(F,A),Y1===!0&&Z1.setState(A,z,!1),A.transparent===!0&&A.side===g5&&A.forceSinglePass===!1?(A.side=z2,A.needsUpdate=!0,Z7(A,b,F),A.side=r0,A.needsUpdate=!0,Z7(A,b,F),A.side=g5):Z7(A,b,F)}this.compile=function(A,b,z=null){z===null&&(z=A),N!==null&&N.renderStart(A,b,z),g=n1.get(z),g.init(b),m.push(g),z.traverseVisible(function(D){D.isLight&&D.layers.test(b.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),A!==z&&A.traverseVisible(function(D){D.isLight&&D.layers.test(b.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights(),N!==null&&N.updateLights(g.state.lightsArray),i2=this.localClippingEnabled,Y1=Z1.init(this.clippingPlanes,i2),Y1===!0&&Z1.setGlobalState(this.clippingPlanes,b),N!==null&&T1.render(g.state.shadowsArray,z,b);let F=new Set;return A.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let d1=D.material;if(d1)if(Array.isArray(d1))for(let A1=0;A1<d1.length;A1++){let l1=d1[A1];U8(l1,z,b,D),F.add(l1)}else U8(d1,z,b,D),F.add(d1)}),g=m.pop(),N!==null&&N.renderEnd(),F},this.compileAsync=function(A,b,z=null){let F=this.compile(A,b,z);return new Promise(D=>{function d1(){if(F.forEach(function(A1){let f1=k.get(A1).currentProgram;(f1===void 0||f1.isReady())&&F.delete(A1)}),F.size===0){D(A);return}setTimeout(d1,10)}j1.get("KHR_parallel_shader_compile")!==null?d1():setTimeout(d1,10)})};let W9=null;function nr(A){W9&&W9(A)}function z8(){p0.stop()}function G8(){p0.start()}let p0=new Ut;p0.setAnimationLoop(nr),typeof self<"u"&&p0.setContext(self),this.setAnimationLoop=function(A){W9=A,v1.setAnimationLoop(A),A===null?p0.stop():p0.start()},v1.addEventListener("sessionstart",z8),v1.addEventListener("sessionend",G8),this.render=function(A,b){if(b!==void 0&&b.isCamera!==!0){O1("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,b);let z=v1.enabled===!0&&v1.isPresenting===!0,F=Z!==null&&(r1===null||z)&&Z.begin(R,r1);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),v1.enabled===!0&&v1.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(v1.cameraAutoUpdate===!0&&v1.updateCamera(b),b=v1.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,b,r1),g=n1.get(A,m.length),g.init(b),g.state.textureUnits=W.getTextureUnits(),m.push(g),G1.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),U1.setFromProjectionMatrix(G1,M5,b.reversedDepth),i2=this.localClippingEnabled,Y1=Z1.init(this.clippingPlanes,i2),S=s1.get(A,y.length),S.init(),y.push(S),v1.enabled===!0&&v1.isPresenting===!0){let A1=R.xr.getDepthSensingMesh();A1!==null&&X9(A1,b,-1/0,R.sortObjects)}X9(A,b,0,R.sortObjects),S.finish(),N!==null&&N.updateLights(g.state.lightsArray),R.sortObjects===!0&&S.sort(h1,R1),M2=v1.enabled===!1||v1.isPresenting===!1||v1.hasDepthSensing()===!1,M2&&B1.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Y1===!0&&Z1.beginShadows();let D=g.state.shadowsArray;if(T1.render(D,A,b),Y1===!0&&Z1.endShadows(),(F&&Z.hasRenderPass())===!1){let A1=S.opaque,l1=S.transmissive;if(g.setupLights(),b.isArrayCamera){let f1=b.cameras;if(l1.length>0)for(let S1=0,F1=f1.length;S1<F1;S1++){let z1=f1[S1];X8(A1,l1,A,z1)}M2&&B1.render(A);for(let S1=0,F1=f1.length;S1<F1;S1++){let z1=f1[S1];W8(S,A,z1,z1.viewport)}}else l1.length>0&&X8(A1,l1,A,b),M2&&B1.render(A),W8(S,A,b)}r1!==null&&$===0&&(W.updateMultisampleRenderTarget(r1),W.updateRenderTargetMipmap(r1)),F&&Z.end(R),A.isScene===!0&&A.onAfterRender(R,A,b),c1.resetDefaultState(),X=-1,e1=null,m.pop(),m.length>0?(g=m[m.length-1],W.setTextureUnits(g.state.textureUnits),Y1===!0&&Z1.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,N!==null&&N.renderEnd()};function X9(A,b,z,F){if(A.visible===!1)return;if(A.layers.test(b.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(b);else if(A.isLightProbeGrid)g.pushLightProbeGrid(A);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(U1)){F&&g2.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G1);let A1=J.update(A),l1=A.material;l1.visible&&S.push(A,A1,l1,z,g2.z,null,b)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(U1))){let A1=J.update(A),l1=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),g2.copy(A.boundingSphere.center)):(A1.boundingSphere===null&&A1.computeBoundingSphere(),g2.copy(A1.boundingSphere.center)),g2.applyMatrix4(A.matrixWorld).applyMatrix4(G1)),Array.isArray(l1)){let f1=A1.groups;for(let S1=0,F1=f1.length;S1<F1;S1++){let z1=f1[S1],x1=l1[z1.materialIndex];x1&&x1.visible&&S.push(A,A1,x1,z,g2.z,z1,b)}}else l1.visible&&S.push(A,A1,l1,z,g2.z,null,b)}}let d1=A.children;for(let A1=0,l1=d1.length;A1<l1;A1++)X9(d1[A1],b,z,F)}function W8(A,b,z,F){let{opaque:D,transmissive:d1,transparent:A1}=A;g.setupLightsView(z),Y1===!0&&Z1.setGlobalState(R.clippingPlanes,z),F&&p.viewport(C1.copy(F)),D.length>0&&g7(D,b,z),d1.length>0&&g7(d1,b,z),A1.length>0&&g7(A1,b,z),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function X8(A,b,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(g.state.transmissionRenderTarget[F.id]===void 0){let x1=j1.has("EXT_color_buffer_half_float")||j1.has("EXT_color_buffer_float");g.state.transmissionRenderTarget[F.id]=new W2(1,1,{generateMipmaps:!0,type:x1?A5:X2,minFilter:H0,samples:Math.max(4,x.samples),stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W1.workingColorSpace})}let d1=g.state.transmissionRenderTarget[F.id],A1=F.viewport||C1;d1.setSize(A1.z*R.transmissionResolutionScale,A1.w*R.transmissionResolutionScale);let l1=R.getRenderTarget(),f1=R.getActiveCubeFace(),S1=R.getActiveMipmapLevel();R.setRenderTarget(d1),R.getClearColor(r2),X1=R.getClearAlpha(),X1<1&&R.setClearColor(16777215,.5),R.clear(),M2&&B1.render(z);let F1=R.toneMapping;R.toneMapping=c5;let z1=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),g.setupLightsView(F),Y1===!0&&Z1.setGlobalState(R.clippingPlanes,F),g7(A,z,F),W.updateMultisampleRenderTarget(d1),W.updateRenderTargetMipmap(d1),j1.has("WEBGL_multisampled_render_to_texture")===!1){let x1=!1;for(let K1=0,A2=b.length;K1<A2;K1++){let n2=b[K1],{object:C2,geometry:T2,material:p1,group:I2}=n2;if(p1.side===g5&&C2.layers.test(F.layers)){let q1=p1.side;p1.side=z2,p1.needsUpdate=!0,q8(C2,z,F,T2,p1,I2),p1.side=q1,p1.needsUpdate=!0,x1=!0}}x1===!0&&(W.updateMultisampleRenderTarget(d1),W.updateRenderTargetMipmap(d1))}R.setRenderTarget(l1,f1,S1),R.setClearColor(r2,X1),z1!==void 0&&(F.viewport=z1),R.toneMapping=F1}function g7(A,b,z){let F=b.isScene===!0?b.overrideMaterial:null;for(let D=0,d1=A.length;D<d1;D++){let A1=A[D],{object:l1,geometry:f1,group:S1}=A1,F1=A1.material;F1.allowOverride===!0&&F!==null&&(F1=F),l1.layers.test(z.layers)&&q8(l1,b,z,f1,F1,S1)}}function q8(A,b,z,F,D,d1){N!==null&&D.isNodeMaterial&&N.setObject(A,D),A.onBeforeRender(R,b,z,F,D,d1),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),D.onBeforeRender(R,b,z,F,A,d1),D.transparent===!0&&D.side===g5&&D.forceSinglePass===!1?(D.side=z2,D.needsUpdate=!0,R.renderBufferDirect(z,b,F,D,A,d1),D.side=r0,D.needsUpdate=!0,R.renderBufferDirect(z,b,F,D,A,d1),D.side=g5):R.renderBufferDirect(z,b,F,D,A,d1),A.onAfterRender(R,b,z,F,D,d1)}function Z7(A,b,z){b.isScene!==!0&&(b=G2);let F=k.get(A),D=g.state.lights,d1=g.state.shadowsArray,A1=D.state.version,l1=V1.getParameters(A,D.state,d1,b,z,g.state.lightProbeGridArray),f1=V1.getProgramCacheKey(l1),S1=F.programs;F.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?b.environment:null,F.fog=b.fog;let F1=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;F.envMap=i1.get(A.envMap||F.environment,F1),F.envMapRotation=F.environment!==null&&A.envMap===null?b.environmentRotation:A.envMapRotation,S1===void 0&&(A.addEventListener("dispose",m5),S1=new Map,F.programs=S1);let z1=S1.get(f1);if(z1!==void 0){if(F.currentProgram===z1&&F.lightsStateVersion===A1)return $8(A,l1),z1}else l1.uniforms=V1.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,z,l1),A.onBeforeCompile(l1,R),z1=V1.acquireProgram(l1,f1),S1.set(f1,z1),F.uniforms=l1.uniforms;let x1=F.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(x1.clippingPlanes=Z1.uniform),$8(A,l1),F.needsLights=sr(A),F.lightsStateVersion=A1,F.needsLights&&(x1.ambientLightColor.value=D.state.ambient,x1.lightProbe.value=D.state.probe,x1.sunLights.value=D.state.sun,x1.sunLightShadows.value=D.state.sunShadow,x1.directionalLights.value=D.state.directional,x1.directionalLightShadows.value=D.state.directionalShadow,x1.spotLights.value=D.state.spot,x1.spotLightShadows.value=D.state.spotShadow,x1.rectAreaLights.value=D.state.rectArea,x1.ltc_1.value=D.state.rectAreaLTC1,x1.ltc_2.value=D.state.rectAreaLTC2,x1.pointLights.value=D.state.point,x1.pointLightShadows.value=D.state.pointShadow,x1.hemisphereLights.value=D.state.hemi,x1.sunShadowMatrix.value=D.state.sunShadowMatrix,x1.sunShadowCascade.value=D.state.sunShadowCascade,x1.directionalShadowMatrix.value=D.state.directionalShadowMatrix,x1.spotLightMatrix.value=D.state.spotLightMatrix,x1.spotLightMap.value=D.state.spotLightMap,x1.pointShadowMatrix.value=D.state.pointShadowMatrix),F.lightProbeGrid=g.state.lightProbeGridArray.length>0,F.currentProgram=z1,F.uniformsList=null,z1}function Y8(A){if(A.uniformsList===null){let b=A.currentProgram.getUniforms();A.uniformsList=p3.seqWithValue(b.seq,A.uniforms)}return A.uniformsList}function $8(A,b){let z=k.get(A);z.outputColorSpace=b.outputColorSpace,z.batching=b.batching,z.batchingColor=b.batchingColor,z.instancing=b.instancing,z.instancingColor=b.instancingColor,z.instancingMorph=b.instancingMorph,z.skinning=b.skinning,z.morphTargets=b.morphTargets,z.morphNormals=b.morphNormals,z.morphColors=b.morphColors,z.morphTargetsCount=b.morphTargetsCount,z.numClippingPlanes=b.numClippingPlanes,z.numIntersection=b.numClipIntersection,z.vertexAlphas=b.vertexAlphas,z.vertexTangents=b.vertexTangents,z.toneMapping=b.toneMapping}function Lr(A,b){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;h.setFromMatrixPosition(b.matrixWorld);for(let z=0,F=A.length;z<F;z++){let D=A[z];if(D.texture!==null&&D.boundingBox.containsPoint(h))return D}return null}function ar(A,b,z,F,D){b.isScene!==!0&&(b=G2),W.resetTextureUnits();let d1=b.fog,A1=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?b.environment:null,l1=r1===null?R.outputColorSpace:r1.isXRRenderTarget===!0?r1.texture.colorSpace:W1.workingColorSpace,f1=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,S1=i1.get(F.envMap||A1,f1),F1=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,z1=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),x1=!!z.morphAttributes.position,K1=!!z.morphAttributes.normal,A2=!!z.morphAttributes.color,n2=c5;F.toneMapped&&(r1===null||r1.isXRRenderTarget===!0)&&(n2=R.toneMapping);let C2=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,T2=C2!==void 0?C2.length:0,p1=k.get(F),I2=g.state.lights;if(Y1===!0&&(i2===!0||A!==e1)){let V2=A===e1&&F.id===X;Z1.setState(F,A,V2)}let q1=!1;F.version===p1.__version?(p1.needsLights&&p1.lightsStateVersion!==I2.state.version||p1.outputColorSpace!==l1||D.isBatchedMesh&&p1.batching===!1||!D.isBatchedMesh&&p1.batching===!0||D.isBatchedMesh&&p1.batchingColor===!0&&D._colorsTexture===null||D.isBatchedMesh&&p1.batchingColor===!1&&D._colorsTexture!==null||D.isInstancedMesh&&p1.instancing===!1||!D.isInstancedMesh&&p1.instancing===!0||D.isSkinnedMesh&&p1.skinning===!1||!D.isSkinnedMesh&&p1.skinning===!0||D.isInstancedMesh&&p1.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&p1.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&p1.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&p1.instancingMorph===!1&&D.morphTexture!==null||p1.envMap!==S1||F.fog===!0&&p1.fog!==d1||p1.numClippingPlanes!==void 0&&(p1.numClippingPlanes!==Z1.numPlanes||p1.numIntersection!==Z1.numIntersection)||p1.vertexAlphas!==F1||p1.vertexTangents!==z1||p1.morphTargets!==x1||p1.morphNormals!==K1||p1.morphColors!==A2||p1.toneMapping!==n2||p1.morphTargetsCount!==T2||!!p1.lightProbeGrid!=g.state.lightProbeGridArray.length>0)&&(q1=!0):(q1=!0,p1.__version=F.version);let j2=p1.currentProgram;q1===!0&&(j2=Z7(F,b,D),N&&F.isNodeMaterial&&N.onUpdateProgram(F,j2,p1));let h5=!1,N5=!1,w0=!1,e2=j2.getUniforms(),c2=p1.uniforms;if(p.useProgram(j2.program)&&(h5=!0,N5=!0,w0=!0),F.id!==X&&(X=F.id,N5=!0),p1.needsLights){let V2=Lr(g.state.lightProbeGridArray,D);p1.lightProbeGrid!==V2&&(p1.lightProbeGrid=V2,N5=!0)}if(h5||e1!==A){p.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),e2.setValue(E,"projectionMatrix",A.projectionMatrix),e2.setValue(E,"viewMatrix",A.matrixWorldInverse);let z5=e2.map.cameraPosition;z5!==void 0&&z5.setValue(E,a2.setFromMatrixPosition(A.matrixWorld)),x.logarithmicDepthBuffer&&e2.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&e2.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),e1!==A&&(e1=A,N5=!0,w0=!0)}if(p1.needsLights&&(I2.state.sunShadowMap.length>0&&e2.setValue(E,"sunShadowMap",I2.state.sunShadowMap,W),I2.state.directionalShadowMap.length>0&&e2.setValue(E,"directionalShadowMap",I2.state.directionalShadowMap,W),I2.state.spotShadowMap.length>0&&e2.setValue(E,"spotShadowMap",I2.state.spotShadowMap,W),I2.state.pointShadowMap.length>0&&e2.setValue(E,"pointShadowMap",I2.state.pointShadowMap,W)),D.isSkinnedMesh){e2.setOptional(E,D,"bindMatrix"),e2.setOptional(E,D,"bindMatrixInverse");let V2=D.skeleton;V2&&(V2.boneTexture===null&&V2.computeBoneTexture(),e2.setValue(E,"boneTexture",V2.boneTexture,W))}D.isBatchedMesh&&(e2.setOptional(E,D,"batchingTexture"),e2.setValue(E,"batchingTexture",D._matricesTexture,W),e2.setOptional(E,D,"batchingIdTexture"),e2.setValue(E,"batchingIdTexture",D._indirectTexture,W),e2.setOptional(E,D,"batchingColorTexture"),D._colorsTexture!==null&&e2.setValue(E,"batchingColorTexture",D._colorsTexture,W));let U5=z.morphAttributes;if((U5.position!==void 0||U5.normal!==void 0||U5.color!==void 0)&&O.update(D,z,j2),(N5||p1.receiveShadow!==D.receiveShadow)&&(p1.receiveShadow=D.receiveShadow,e2.setValue(E,"receiveShadow",D.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&b.environment!==null&&(c2.envMapIntensity.value=b.environmentIntensity),c2.dfgLUT!==void 0&&(c2.dfgLUT.value=va()),N5){if(e2.setValue(E,"toneMappingExposure",R.toneMappingExposure),p1.needsLights&&or(c2,w0),d1&&F.fog===!0&&g1.refreshFogUniforms(c2,d1),g1.refreshMaterialUniforms(c2,F,j,q,g.state.transmissionRenderTarget[A.id]),p1.needsLights&&p1.lightProbeGrid){let V2=p1.lightProbeGrid;c2.probesSH.value=V2.texture,c2.probesMin.value.copy(V2.boundingBox.min),c2.probesMax.value.copy(V2.boundingBox.max),c2.probesResolution.value.copy(V2.resolution)}p3.upload(E,Y8(p1),c2,W)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(p3.upload(E,Y8(p1),c2,W),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&e2.setValue(E,"center",D.center),e2.setValue(E,"modelViewMatrix",D.modelViewMatrix),e2.setValue(E,"normalMatrix",D.normalMatrix),e2.setValue(E,"modelMatrix",D.matrixWorld),F.uniformsGroups!==void 0){let V2=F.uniformsGroups;for(let z5=0,O0=V2.length;z5<O0;z5++){let K8=V2[z5];t1.update(K8,j2),t1.bind(K8,j2)}}return j2}function or(A,b){A.ambientLightColor.needsUpdate=b,A.lightProbe.needsUpdate=b,A.sunLights.needsUpdate=b,A.sunLightShadows.needsUpdate=b,A.directionalLights.needsUpdate=b,A.directionalLightShadows.needsUpdate=b,A.pointLights.needsUpdate=b,A.pointLightShadows.needsUpdate=b,A.spotLights.needsUpdate=b,A.spotLightShadows.needsUpdate=b,A.rectAreaLights.needsUpdate=b,A.hemisphereLights.needsUpdate=b}function sr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return r1},this.setRenderTargetTextures=function(A,b,z){let F=k.get(A);F.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=b,k.get(A.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,b){let z=k.get(A);z.__webglFramebuffer=b,z.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(A,b=0,z=0){r1=A,Q=b,$=z;let F=null,D=!1,d1=!1;if(A){let l1=k.get(A);if(l1.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(E.FRAMEBUFFER,l1.__webglFramebuffer),C1.copy(A.viewport),b1.copy(A.scissor),_1=A.scissorTest,p.viewport(C1),p.scissor(b1),p.setScissorTest(_1),X=-1;return}else if(l1.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(l1.__hasExternalTextures)W.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let F1=A.depthTexture;if(l1.__boundDepthTexture!==F1){if(F1!==null&&k.has(F1)&&(A.width!==F1.image.width||A.height!==F1.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}let f1=A.texture;(f1.isData3DTexture||f1.isDataArrayTexture||f1.isCompressedArrayTexture)&&(d1=!0);let S1=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(S1[b])?F=S1[b][z]:F=S1[b],D=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?F=k.get(A).__webglMultisampledFramebuffer:Array.isArray(S1)?F=S1[z]:F=S1,C1.copy(A.viewport),b1.copy(A.scissor),_1=A.scissorTest}else C1.copy(u1).multiplyScalar(j).floor(),b1.copy(k1).multiplyScalar(j).floor(),_1=h2;if(z!==0&&(F=G),p.bindFramebuffer(E.FRAMEBUFFER,F)&&p.drawBuffers(A,F),p.viewport(C1),p.scissor(b1),p.setScissorTest(_1),D){let l1=k.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+b,l1.__webglTexture,z)}else if(d1){let l1=b;for(let f1=0;f1<A.textures.length;f1++){let S1=k.get(A.textures[f1]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+f1,S1.__webglTexture,z,l1)}}else if(A!==null&&z!==0){let l1=k.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,l1.__webglTexture,z)}X=-1};function Q8(A){let b=k.get(A);return(b.__readFormat!==A.format||b.__readType!==A.type)&&(b.__readFormat=A.format,b.__readType=A.type,b.__formatReadable=x.textureFormatReadable(A.format),b.__typeReadable=x.textureTypeReadable(A.type)),b}this.readRenderTargetPixels=function(A,b,z,F,D,d1,A1,l1=0){if(!(A&&A.isWebGLRenderTarget)){O1("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let f1=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&A1!==void 0&&(f1=f1[A1]),f1){p.bindFramebuffer(E.FRAMEBUFFER,f1);try{let S1=A.textures[l1],F1=S1.format,z1=S1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+l1);let x1=Q8(S1);if(x1.__formatReadable===!1){O1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(x1.__typeReadable===!1){O1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=A.width-F&&z>=0&&z<=A.height-D&&E.readPixels(b,z,F,D,a1.convert(F1),a1.convert(z1),d1)}finally{let S1=r1!==null?k.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,S1)}}},this.readRenderTargetPixelsAsync=async function(A,b,z,F,D,d1,A1,l1=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let f1=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&A1!==void 0&&(f1=f1[A1]),f1)if(b>=0&&b<=A.width-F&&z>=0&&z<=A.height-D){p.bindFramebuffer(E.FRAMEBUFFER,f1);let S1=A.textures[l1],F1=S1.format,z1=S1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+l1);let x1=Q8(S1);if(x1.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(x1.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let K1=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,K1),E.bufferData(E.PIXEL_PACK_BUFFER,d1.byteLength,E.STREAM_READ),E.readPixels(b,z,F,D,a1.convert(F1),a1.convert(z1),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let A2=r1!==null?k.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,A2);let n2=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await st(E,n2,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,K1),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,d1),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(K1),E.deleteSync(n2),d1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,b=null,z=0){let F=Math.pow(2,-z),D=Math.floor(A.image.width*F),d1=Math.floor(A.image.height*F),A1=b!==null?b.x:0,l1=b!==null?b.y:0;W.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,A1,l1,D,d1),p.unbindTexture()},this.copyTextureToTexture=function(A,b,z=null,F=null,D=0,d1=0){let A1,l1,f1,S1,F1,z1,x1,K1,A2,n2=A.isCompressedTexture?A.mipmaps[d1]:A.image;if(z!==null)A1=z.max.x-z.min.x,l1=z.max.y-z.min.y,f1=z.isBox3?z.max.z-z.min.z:1,S1=z.min.x,F1=z.min.y,z1=z.isBox3?z.min.z:0;else{let c2=Math.pow(2,-D);A1=Math.floor(n2.width*c2),l1=Math.floor(n2.height*c2),A.isDataArrayTexture?f1=n2.depth:A.isData3DTexture?f1=Math.floor(n2.depth*c2):f1=1,S1=0,F1=0,z1=0}F!==null?(x1=F.x,K1=F.y,A2=F.z):(x1=0,K1=0,A2=0);let C2=a1.convert(b.format),T2=a1.convert(b.type),p1;b.isData3DTexture?(W.setTexture3D(b,0),p1=E.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(W.setTexture2DArray(b,0),p1=E.TEXTURE_2D_ARRAY):(W.setTexture2D(b,0),p1=E.TEXTURE_2D),p.activeTexture(E.TEXTURE0),p.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,b.flipY),p.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),p.pixelStorei(E.UNPACK_ALIGNMENT,b.unpackAlignment);let I2=p.getParameter(E.UNPACK_ROW_LENGTH),q1=p.getParameter(E.UNPACK_IMAGE_HEIGHT),j2=p.getParameter(E.UNPACK_SKIP_PIXELS),h5=p.getParameter(E.UNPACK_SKIP_ROWS),N5=p.getParameter(E.UNPACK_SKIP_IMAGES);p.pixelStorei(E.UNPACK_ROW_LENGTH,n2.width),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,n2.height),p.pixelStorei(E.UNPACK_SKIP_PIXELS,S1),p.pixelStorei(E.UNPACK_SKIP_ROWS,F1),p.pixelStorei(E.UNPACK_SKIP_IMAGES,z1);let w0=A.isDataArrayTexture||A.isData3DTexture,e2=b.isDataArrayTexture||b.isData3DTexture;if(A.isDepthTexture){let c2=k.get(A),U5=k.get(b),V2=k.get(c2.__renderTarget),z5=k.get(U5.__renderTarget);p.bindFramebuffer(E.READ_FRAMEBUFFER,V2.__webglFramebuffer),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,z5.__webglFramebuffer);for(let O0=0;O0<f1;O0++)w0&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(A).__webglTexture,D,z1+O0),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(b).__webglTexture,d1,A2+O0)),E.blitFramebuffer(S1,F1,A1,l1,x1,K1,A1,l1,E.DEPTH_BUFFER_BIT,E.NEAREST);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(D!==0||A.isRenderTargetTexture||k.has(A)){let c2=k.get(A),U5=k.get(b);p.bindFramebuffer(E.READ_FRAMEBUFFER,P),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,U);for(let V2=0;V2<f1;V2++)w0?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,c2.__webglTexture,D,z1+V2):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,c2.__webglTexture,D),e2?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,U5.__webglTexture,d1,A2+V2):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,U5.__webglTexture,d1),D!==0?E.blitFramebuffer(S1,F1,A1,l1,x1,K1,A1,l1,E.COLOR_BUFFER_BIT,E.NEAREST):e2?E.copyTexSubImage3D(p1,d1,x1,K1,A2+V2,S1,F1,A1,l1):E.copyTexSubImage2D(p1,d1,x1,K1,S1,F1,A1,l1);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else e2?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(p1,d1,x1,K1,A2,A1,l1,f1,C2,T2,n2.data):b.isCompressedArrayTexture?E.compressedTexSubImage3D(p1,d1,x1,K1,A2,A1,l1,f1,C2,n2.data):E.texSubImage3D(p1,d1,x1,K1,A2,A1,l1,f1,C2,T2,n2):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,d1,x1,K1,A1,l1,C2,T2,n2.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,d1,x1,K1,n2.width,n2.height,C2,n2.data):E.texSubImage2D(E.TEXTURE_2D,d1,x1,K1,A1,l1,C2,T2,n2);p.pixelStorei(E.UNPACK_ROW_LENGTH,I2),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,q1),p.pixelStorei(E.UNPACK_SKIP_PIXELS,j2),p.pixelStorei(E.UNPACK_SKIP_ROWS,h5),p.pixelStorei(E.UNPACK_SKIP_IMAGES,N5),d1===0&&b.generateMipmaps&&E.generateMipmap(p1),p.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),p.unbindTexture()},this.resetState=function(){Q=0,$=0,r1=null,p.reset(),c1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return M5}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W1._getDrawingBufferColorSpace(e),t.unpackColorSpace=W1._getUnpackColorSpace()}};var d7=new T;function i5(r,e,t,C,i,H){let V=2*Math.PI*i/4,n=Math.max(H-2*i,0),a=Math.PI/4;d7.copy(e),d7[C]=0,d7.normalize();let L=.5*V/(V+n),o=1-d7.angleTo(r)/a;return Math.sign(d7[t])===1?o*L:n/(V+n)+L+L*(1-o)}var b9=class r extends j5{constructor(e=1,t=1,C=1,i=2,H=.1){let V=i*2+1;if(H=Math.min(e/2,t/2,C/2,H),super(1,1,1,V,V,V),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:C,segments:i,radius:H},V===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let a=new T,L=new T,o=new T(e,t,C).divideScalar(2).subScalar(H),M=this.attributes.position.array,s=this.attributes.normal.array,l=this.attributes.uv.array,u=M.length/6,f=new T,c=.5/V;for(let d=0,v=0;d<M.length;d+=3,v+=2)switch(a.fromArray(M,d),L.copy(a),L.x-=Math.sign(L.x)*c,L.y-=Math.sign(L.y)*c,L.z-=Math.sign(L.z)*c,L.normalize(),M[d+0]=o.x*Math.sign(a.x)+L.x*H,M[d+1]=o.y*Math.sign(a.y)+L.y*H,M[d+2]=o.z*Math.sign(a.z)+L.z*H,s[d+0]=L.x,s[d+1]=L.y,s[d+2]=L.z,Math.floor(d/u)){case 0:f.set(1,0,0),l[v+0]=i5(f,L,"z","y",H,C),l[v+1]=1-i5(f,L,"y","z",H,t);break;case 1:f.set(-1,0,0),l[v+0]=1-i5(f,L,"z","y",H,C),l[v+1]=1-i5(f,L,"y","z",H,t);break;case 2:f.set(0,1,0),l[v+0]=1-i5(f,L,"x","z",H,e),l[v+1]=i5(f,L,"z","x",H,C);break;case 3:f.set(0,-1,0),l[v+0]=1-i5(f,L,"x","z",H,e),l[v+1]=1-i5(f,L,"z","x",H,C);break;case 4:f.set(0,0,1),l[v+0]=1-i5(f,L,"x","y",H,e),l[v+1]=1-i5(f,L,"y","x",H,t);break;case 5:f.set(0,0,-1),l[v+0]=i5(f,L,"x","y",H,e),l[v+1]=1-i5(f,L,"y","x",H,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var L0=["U","F","R","B","L","D"],c7={U:"#f2f2ee",D:"#ffd21f",F:"#11a85c",B:"#2563d9",R:"#e0303a",L:"#ff7a1a"},g8={U:[0,1,0],D:[0,-1,0],R:[1,0,0],L:[-1,0,0],F:[0,0,1],B:[0,0,-1]},$t={U:[0,0,-1],D:[0,0,1],F:[0,1,0],B:[0,1,0],R:[0,1,0],L:[0,1,0]},ga=["x","y","z"],F5=Math.PI/2;function Qt(r){let e=[Math.abs(r.x),Math.abs(r.y),Math.abs(r.z)],t=e.indexOf(Math.max(...e)),C=Math.sign([r.x,r.y,r.z][t]);return[["L","R"],["D","U"],["B","F"]][t][C>0?1:0]}function Za(r,e){let t=H=>Math.round(H),C,i;switch(r){case"U":C=t(e.x),i=t(e.z);break;case"D":C=t(e.x),i=-t(e.z);break;case"F":C=t(e.x),i=-t(e.y);break;case"B":C=-t(e.x),i=-t(e.y);break;case"R":C=-t(e.z),i=-t(e.y);break;case"L":C=t(e.z),i=-t(e.y);break}return(i+1)*3+(C+1)}function _a(r,e){let t=r/2,C=e,i=new H3;i.moveTo(-t+C,-t),i.lineTo(t-C,-t),i.quadraticCurveTo(t,-t,t,-t+C),i.lineTo(t,t-C),i.quadraticCurveTo(t,t,t-C,t),i.lineTo(-t+C,t),i.quadraticCurveTo(-t,t,-t,t-C),i.lineTo(-t,-t+C),i.quadraticCurveTo(-t,-t,-t+C,-t);let H=new Q3(i,6),V=H.attributes.position,n=H.attributes.uv;for(let a=0;a<V.count;a++)n.setXY(a,V.getX(a)/r+.5,V.getY(a)/r+.5);return H}function Z8(r,e){let t=document.createElement("canvas");t.width=t.height=r,e(t.getContext("2d"),r);let C=new D3(t);return C.colorSpace=E2,C.anisotropy=4,C}function ya(r){let e=parseInt(r.slice(1),16);return(.299*(e>>16)+.587*(e>>8&255)+.114*(e&255))/255}var T9=class{constructor(e){this.el=e,this.renderer=new Z9({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=E2,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new E3,this.camera=new R2(30,1,.1,100),this.camera.position.set(0,0,15),this.scene.add(new e7(16777215,1.6));let t=new a3(16777215,1.9);t.position.set(4,7,9),this.scene.add(t);let C=new a3(16777215,.5);C.position.set(-6,-3,4),this.scene.add(C),this.root=new l5,this.scene.add(this.root),this.baseView=new p2().setFromEuler(new C5(.5,-.65,0,"XYZ")),this.root.quaternion.copy(this.baseView),this.raycaster=new t7,this.tweens=[],this.queue=[],this.turning=!1,this.dirty=!0,this.autoSpin=!1,this.mode="view",this.allowOrbitInView=!0,this.onTap=null,this.onSwipe=null,this.labelCache=new Map,this.labelFn=null,this._buildTextures(),this._build(),this._bindInput(),this.fill=.78,new ResizeObserver(()=>this.resize()).observe(e),this.resize();let i=H=>{this._frame(H),requestAnimationFrame(i)};requestAnimationFrame(i)}_buildTextures(){this.texQ=Z8(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.fillStyle="#9aa3b5",e.font='700 74px -apple-system, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("?",t/2,t/2+4)}),this.texX=Z8(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.38)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(40,40),e.lineTo(88,88),e.moveTo(88,40),e.lineTo(40,88),e.stroke()})}_build(){let e=new b9(.97,.97,.97,3,.12),t=new n3({color:1316380,roughness:.55,metalness:.1}),C=_a(.84,.13);this.cubies=[],this.stickers=[];for(let i=-1;i<=1;i++)for(let H=-1;H<=1;H++)for(let V=-1;V<=1;V++){if(!i&&!H&&!V)continue;let n=new l5;n.position.set(i,H,V),n.userData.home=new T(i,H,V),n.add(new U2(e,t));for(let a of L0){let L=g8[a];if(!(L[0]&&L[0]===i||L[1]&&L[1]===H||L[2]&&L[2]===V))continue;let o=new n3({color:c7[a],roughness:.38,metalness:0}),M=new U2(C,o),s=new T(...L),l=new T(...$t[a]),u=new T().crossVectors(l,s);M.quaternion.setFromRotationMatrix(new t2().makeBasis(u,l,s)),M.position.copy(s).multiplyScalar(.487),M.userData={color:a,center:Math.abs(i)+Math.abs(H)+Math.abs(V)===1},n.add(M),this.stickers.push(M)}this.root.add(n),this.cubies.push(n)}}resize(){let e=this.el.clientWidth||1,t=this.el.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t;let C=2.62,i=j6.degToRad(this.camera.fov)/2,H=Math.atan(Math.tan(i)*this.camera.aspect),V=Math.min(i,H);this.camera.position.z=C/Math.sin(V*this.fill),this.camera.updateProjectionMatrix(),this.dirty=!0}reset(){this.tweens=[],this.queue=[],this.turning=!1;for(let e of this.cubies)e.parent!==this.root&&this.root.attach(e);for(let e of[...this.root.children])this.cubies.includes(e)||this.root.remove(e);for(let e of this.cubies)e.position.copy(e.userData.home),e.quaternion.identity();for(let e of this.stickers)e.scale.set(1,1,1);this.dirty=!0}info(e){let t=e.getWorldQuaternion(new p2),C=this.root.getWorldQuaternion(new p2).invert(),i=new T(0,0,1).applyQuaternion(t).applyQuaternion(C),H=Qt(i),V=e.parent,n=Za(H,V.position);return{sticker:e,face:H,idx:n,key:H+n,color:e.userData.color,cubie:V}}cells(){return this.stickers.map(e=>this.info(e))}isSolved(){let e={};for(let t of this.stickers){let{face:C,color:i}=this.info(t);if(e[C]&&e[C]!==i)return!1;e[C]=i}return!0}setLook(e,t,C){let i=e.material,H=new I1(c7[e.userData.color]),V=null,n=H;C?(V=C,n=new I1(16777215)):t==="hidden"?(V=this._texQ(this._rotOf(e)),n=new I1("#5d6679")):t==="locked"?(V=null,n=new I1("#2b303b")):t==="wrong"&&(V=this.texX,n=H.clone().multiplyScalar(.55)),i.map!==V&&(i.map=V,i.needsUpdate=!0),i.color.copy(n),C&&t==="locked"&&i.color.setScalar(.45),this.dirty=!0}_rotOf(e){let t=e.getWorldQuaternion(new p2),C=this.root.getWorldQuaternion(new p2).invert(),i=new T(0,1,0).applyQuaternion(t).applyQuaternion(C),H=new T(0,0,1).applyQuaternion(t).applyQuaternion(C),V=Qt(H),n=new T(...$t[V]),a=Math.atan2(new T().crossVectors(n,i).dot(new T(...g8[V])),n.dot(i));return(Math.round(a/F5)%4+4)%4}_texQ(e){if(this.qTexs=this.qTexs||[],!this.qTexs[e]){let t=this.texQ.clone();t.center.set(.5,.5),t.rotation=-e*F5,t.needsUpdate=!0,this.qTexs[e]=t}return this.qTexs[e]}centerLabel(e,t,C,i=0){let H=e+"|"+(t||"")+"|"+(C||"");if(i){let L=H+"|"+i;if(!this.labelCache.has(L)){let o=this.centerLabel(e,t,C,0).clone();o.center.set(.5,.5),o.rotation=-i*F5,o.needsUpdate=!0,this.labelCache.set(L,o)}return this.labelCache.get(L)}if(this.labelCache.has(H))return this.labelCache.get(H);let V=c7[e],n=ya(V)>.6?"#1d2230":"#ffffff",a=Z8(256,(L,o)=>{if(L.fillStyle=V,L.fillRect(0,0,o,o),t){let M=new Path2D(t);L.save(),L.translate(o*.18,o*.18),L.scale(o*.64/24,o*.64/24),L.fillStyle=n,L.fill(M),L.restore()}C&&(L.beginPath(),L.arc(o*.8,o*.2,o*.15,0,Math.PI*2),L.fillStyle=C==="ok"?"#0f8a4a":"#c62a33",L.fill(),L.lineWidth=o*.025,L.strokeStyle="#ffffff",L.stroke(),L.strokeStyle="#ffffff",L.lineWidth=o*.04,L.lineCap="round",L.lineJoin="round",L.beginPath(),C==="ok"?(L.moveTo(o*.73,o*.2),L.lineTo(o*.785,o*.255),L.lineTo(o*.875,o*.15)):(L.moveTo(o*.75,o*.15),L.lineTo(o*.85,o*.25),L.moveTo(o*.85,o*.15),L.lineTo(o*.75,o*.25)),L.stroke())});return this.labelCache.set(H,a),a}pop(e){this.tween(260,t=>{let C=1+Math.sin(t*Math.PI)*.18;e.scale.set(C,C,1)})}turn(e,t=!0,C=190){return new Promise(i=>{this.queue.push({move:e,animate:t,dur:C,resolve:i}),this.turning||this._next()})}get busy(){return this.turning||this.queue.length>0}_next(){let e=this.queue.shift();if(!e){this.turning=!1;return}this.turning=!0;let{ax:t,l:C,d:i}=e.move,H=new l5;this.root.add(H);let V=this.cubies.filter(a=>Math.round(a.position[t])===C);for(let a of V)H.attach(a);let n=()=>{H.rotation[t]=i*F5,H.updateMatrixWorld(!0);for(let a of V){this.root.attach(a),a.position.set(Math.round(a.position.x),Math.round(a.position.y),Math.round(a.position.z));let L=new t2().makeRotationFromQuaternion(a.quaternion),o=L.elements;for(let M=0;M<16;M++)o[M]=Math.round(o[M]);a.quaternion.setFromRotationMatrix(L)}this.root.remove(H),this.dirty=!0,e.resolve(),this._next()};if(!e.animate){n();return}this.tween(e.dur,a=>{H.rotation[t]=i*F5*(1-Math.pow(1-a,3))},n)}viewFor(e){let t=new p2,C=(i,H)=>t.setFromEuler(new C5(i,H,0,"XYZ"));switch(e){case"U":C(F5,0);break;case"D":C(-F5,0);break;case"R":C(0,-F5);break;case"L":C(0,F5);break;case"B":C(0,Math.PI);break;default:t.identity()}return this.baseView.clone().multiply(t)}showFace(e,t=450){this.rotateTo(this.viewFor(e),t)}rotateTo(e,t=450){let C=this.root.quaternion.clone();this.tween(t,i=>{let H=i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;this.root.quaternion.slerpQuaternions(C,e,H)})}spin(e=1300){let t=this.root.quaternion.clone();this.tween(e,C=>{let i=1-Math.pow(1-C,3),H=new p2().setFromAxisAngle(new T(0,1,0),i*Math.PI*2);this.root.quaternion.copy(H.multiply(t))})}tween(e,t,C){this.tweens.push({t0:performance.now(),dur:e,fn:t,done:C}),this.dirty=!0}_frame(e){if(this.tweens.length){let t=this.tweens;this.tweens=[];let C=[];for(let i of t){let H=Math.min(1,(e-i.t0)/i.dur);i.fn(H),H<1?C.push(i):i.done&&i.done()}this.tweens=C.concat(this.tweens),this.dirty=!0}if(this.autoSpin&&!this.drag){let t=new p2().setFromAxisAngle(new T(0,1,0),.004);this.root.quaternion.premultiply(t),this.dirty=!0}this.dirty&&(this.dirty=!1,this.renderer.render(this.scene,this.camera))}_pick(e){let t=this.canvas.getBoundingClientRect(),C=new m1((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);this.raycaster.setFromCamera(C,this.camera);let i=this.raycaster.intersectObjects(this.stickers,!1)[0];return i?i.object:null}_screen(e){let t=this.root.localToWorld(e.clone()).project(this.camera),C=this.canvas.getBoundingClientRect();return new m1((t.x+1)/2*C.width,(1-t.y)/2*C.height)}moveFromSwipe(e,t){let C=this.info(e),i=new T(...g8[C.face]),H=C.cubie.position.clone().add(i.clone().multiplyScalar(.5)),V=this._screen(H),n=null;for(let l=0;l<3;l++){if(Math.abs([i.x,i.y,i.z][l])>.5)continue;let u=new T;u.setComponent(l,1);let f=this._screen(H.clone().add(u.clone().multiplyScalar(.5))).sub(V);if(f.length()<.001)continue;let c=f.normalize().dot(t);(!n||Math.abs(c)>Math.abs(n.dot))&&(n={a:u,dot:c})}if(!n||Math.abs(n.dot)<.35)return null;let a=n.a.clone().multiplyScalar(Math.sign(n.dot)),L=new T().crossVectors(i,a),o=[L.x,L.y,L.z],M=o.findIndex(l=>Math.abs(l)>.5),s=ga[M];return{ax:s,l:Math.round(C.cubie.position[s]),d:Math.sign(o[M])}}_bindInput(){let e=this.canvas;e.addEventListener("pointerdown",C=>{this.drag||(e.setPointerCapture(C.pointerId),this.drag={id:C.pointerId,x:C.clientX,y:C.clientY,lx:C.clientX,ly:C.clientY,s:this._pick(C),mode:null})}),e.addEventListener("pointermove",C=>{let i=this.drag;if(!i||i.id!==C.pointerId)return;let H=C.clientX-i.x,V=C.clientY-i.y;if(!i.mode){if(Math.hypot(H,V)<10)return;if(this.mode==="solve"&&i.s){i.mode="done";let n=this.moveFromSwipe(i.s,new m1(H,V).normalize());n&&this.onSwipe&&this.onSwipe(n);return}i.mode=this.mode==="view"&&!this.allowOrbitInView?"none":"orbit"}if(i.mode==="orbit"){let n=C.clientX-i.lx,a=C.clientY-i.ly,L=.0105,o=new p2().setFromAxisAngle(new T(0,1,0),n*L),M=new p2().setFromAxisAngle(new T(1,0,0),a*L);this.root.quaternion.premultiply(o).premultiply(M),this.dirty=!0}i.lx=C.clientX,i.ly=C.clientY});let t=C=>{let i=this.drag;!i||i.id!==C.pointerId||(this.drag=null,!i.mode&&C.type==="pointerup"&&i.s&&this.mode==="tap"&&this.onTap&&this.onTap(this.info(i.s)))};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}};var _8="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z";var Kt="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z";var Jt="M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z";var jt="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z";var eC="M9,12C9,11.19 9.3,10.5 9.89,9.89C10.5,9.3 11.19,9 12,9C12.81,9 13.5,9.3 14.11,9.89C14.7,10.5 15,11.19 15,12C15,12.81 14.7,13.5 14.11,14.11C13.5,14.7 12.81,15 12,15C11.19,15 10.5,14.7 9.89,14.11C9.3,13.5 9,12.81 9,12M5.53,8.44L7.31,10.22L5.53,12L7.31,13.78L5.53,15.56L2,12L5.53,8.44M8.44,18.47L10.22,16.69L12,18.47L13.78,16.69L15.56,18.47L12,22L8.44,18.47M18.47,15.56L16.69,13.78L18.47,12L16.69,10.22L18.47,8.44L22,12L18.47,15.56M15.56,5.53L13.78,7.31L12,5.53L10.22,7.31L8.44,5.53L12,2L15.56,5.53Z";var tC="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var CC="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";var rC="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var iC="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var HC="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var VC="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z";var nC="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z";var LC="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22";var aC="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var oC="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z";var sC="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z";var MC="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z";var lC="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var dC="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var cC="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z";var pC="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var uC="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z";var AC="M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z";var mC="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z";var hC="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";var fC="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";var xC="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z",vC="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z";var SC="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z";var gC="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z";var ZC="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var _C="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var y8=[{id:"history",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",icon:cC},{id:"geography",name:"\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F",icon:HC},{id:"literature",name:"\u041B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",icon:jt},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430",icon:sC},{id:"science",name:"\u041D\u0430\u0443\u043A\u0430",icon:Jt},{id:"painting",name:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C",icon:lC},{id:"people",name:"\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",icon:Kt},{id:"cinema",name:"\u041A\u0438\u043D\u043E",icon:oC},{id:"journalism",name:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438\u043A\u0430",icon:MC},{id:"logic",name:"\u041B\u043E\u0433\u0438\u043A\u0430 \u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0438",icon:uC},{id:"my",name:"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",icon:_8}],a0=Object.fromEntries(y8.map(r=>[r.id,r])),s2={hint:aC,undo:gC,view:eC,soundOn:ZC,soundOff:_C,star:hC,starOff:fC,help:nC,close:rC,check:tC,turn:AC,home:LC,shuffle:mC,flag:VC,trophy:SC,back:CC,plus:pC,del:iC,save:xC,load:vC,edit:dC,my:_8},d2=(r,e="ic")=>`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${r}"/></svg>`;var D5=null,s0={on:!0};function w9(){if(!D5){let r=window.AudioContext||window.webkitAudioContext;if(!r)return;D5=new r}D5.state==="suspended"&&D5.resume()}function o0(r,e,t,C="sine",i=.18,H){let V=D5.currentTime+e,n=D5.createOscillator(),a=D5.createGain();n.type=C,n.frequency.setValueAtTime(r,V),H&&n.frequency.exponentialRampToValueAtTime(H,V+t),a.gain.setValueAtTime(1e-4,V),a.gain.exponentialRampToValueAtTime(i,V+.012),a.gain.exponentialRampToValueAtTime(1e-4,V+t),n.connect(a).connect(D5.destination),n.start(V),n.stop(V+t+.02)}function H5(r){if(!(!s0.on||!D5))switch(r){case"ok":o0(660,0,.14),o0(990,.1,.22);break;case"bad":o0(220,0,.28,"triangle",.2,150);break;case"turn":o0(340,0,.06,"triangle",.12,260);break;case"tap":o0(520,0,.05,"sine",.08);break;case"deny":o0(180,0,.12,"square",.05);break;case"win":[523,659,784,1047].forEach((e,t)=>o0(e,t*.11,.3,"sine",.16));break;case"stage":[784,1047].forEach((e,t)=>o0(e,t*.09,.18,"sine",.12));break}}var yC="kubik.my.v1",b5={q:300,a:80,e:400};function ba(){try{let r=JSON.parse(localStorage.getItem(yC));if(r&&Array.isArray(r.list))return{list:r.list,next:r.next||r.list.reduce((e,t)=>Math.max(e,t.id),0)+1}}catch{}return{list:[],next:1}}var B2=ba();function T8(){try{return localStorage.setItem(yC,JSON.stringify(B2)),!0}catch{return!1}}var u7=r=>B2.list.filter(e=>!e.lv||e.lv===+r),E9=r=>B2.list.find(e=>e.id===+r),p7=r=>String(r||"").replace(/\s+/g," ").trim(),b8=r=>p7(r).toLowerCase().replace(/ё/g,"\u0435");function w8(r,e){return r.q?r.q.length>b5.q?`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${b5.q} \u0437\u043D\u0430\u043A\u043E\u0432.`:r.a[0]?r.a.slice(1).some(t=>!t)?"\u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430.":r.a.some(t=>t.length>b5.a)?`\u041E\u0442\u0432\u0435\u0442 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${b5.a} \u0437\u043D\u0430\u043A\u043E\u0432.`:new Set(r.a.map(b8)).size!==4?"\u0412\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u043C\u0438.":r.e&&r.e.length>b5.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${b5.e} \u0437\u043D\u0430\u043A\u043E\u0432.`:B2.list.some(t=>t.id!==e&&b8(t.q)===b8(r.q))?"\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C.":"":"\u041D\u0443\u0436\u0435\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.":"\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0430\u043C \u0432\u043E\u043F\u0440\u043E\u0441."}function O9(r){return{q:p7(r.q),a:[0,1,2,3].map(e=>p7(r.a&&r.a[e])),e:p7(r.e),lv:[1,2,3].includes(+r.lv)?+r.lv:0}}function bC(r,e){return e?Object.assign(E9(e),r):B2.list.push({id:B2.next++,...r}),T8()}function TC(r){B2.list=B2.list.filter(e=>e.id!==+r),T8()}var Ta=`# \u041A\u0443\u0431\u0438\u043A: \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.
# \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A, \u0431\u043B\u043E\u043A\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439.
# \u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0431\u043B\u043E\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.
# + \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442
# - \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0438\u0445 \u0442\u0440\u0438)
# = \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C)
# \u0443\u0440\u043E\u0432\u0435\u043D\u044C: 1, 2 \u0438\u043B\u0438 3 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C, \u0442\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F)
# \u0421\u0442\u0440\u043E\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 #, \u0438\u0433\u0440\u0430 \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442.
`;function wC(r=B2.list){let e=r.map(t=>[t.q,"+ "+t.a[0],...t.a.slice(1).map(C=>"- "+C),...t.e?["= "+t.e]:[],...t.lv?["\u0443\u0440\u043E\u0432\u0435\u043D\u044C: "+t.lv]:[]].join(`
`));return"\uFEFF"+Ta+`
`+e.join(`

`)+`
`}function OC(r){r=String(r).replace(/^﻿/,"").replace(/\r\n?/g,`
`);let e=r.trim();if(e.startsWith("[")||e.startsWith("{"))try{let H=JSON.parse(e);return{items:(Array.isArray(H)?H:H.questions||H.list||[]).map(O9),errors:[]}}catch{}let t=[],C=[];return r.split(/\n\s*\n/).map(H=>H.split(`
`).map(V=>V.trim()).filter(V=>V&&!V.startsWith("#"))).filter(H=>H.length).forEach((H,V)=>{let n={q:[],ok:[],bad:[],e:[],lv:0};for(let L of H){let o=L.match(/^уровень\s*[:\-–—]?\s*(\S+)/i);if(o){n.lv=[1,2,3].includes(+o[1])?+o[1]:0;continue}L[0]==="+"?n.ok.push(L.slice(1)):"-\u2013\u2014".includes(L[0])?n.bad.push(L.slice(1)):L[0]==="="?n.e.push(L.slice(1)):!n.ok.length&&!n.bad.length?n.q.push(L):n.e.push(L)}let a=p7(n.q.join(" ")).slice(0,40)||`\u0431\u043B\u043E\u043A ${V+1}`;if(n.ok.length!==1){C.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u0435\u043D \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0441\u0442\u0440\u043E\u043A\u0430 \u0441 +).`);return}if(n.bad.length!==3){C.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u043D\u044B \u0440\u043E\u0432\u043D\u043E \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430 (\u0441\u0442\u0440\u043E\u043A\u0438 \u0441 -), \u0430 \u0438\u0445 ${n.bad.length}.`);return}t.push(O9({q:n.q.join(" "),a:[n.ok[0],...n.bad],e:n.e.join(" "),lv:n.lv}))}),{items:t,errors:C}}function EC({items:r,errors:e}){let t=0,C=0,i=e.slice();for(let H of r){let V=w8(H);if(V==="\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C."){C++;continue}if(V){i.push(`\xAB${H.q.slice(0,40)||"\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430"}\xBB: ${V}`);continue}B2.list.push({id:B2.next++,...H}),t++}return T8(),{added:t,dup:C,errors:i}}async function RC(r){let e=await r.arrayBuffer(),t=new TextDecoder("utf-8").decode(e);if(t.includes("\uFFFD"))try{t=new TextDecoder("windows-1251").decode(e)}catch{}return t}var wa="0.3.0",M0={1:{name:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439",scramble:6,about:"\u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F"},2:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",scramble:10,about:"\u0434\u043B\u044F \u044D\u0440\u0443\u0434\u0438\u0442\u043E\u0432"},3:{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",scramble:14,about:"\u0434\u043B\u044F \u0437\u043D\u0430\u0442\u043E\u043A\u043E\u0432"}},Oa={1:"#11a85c",2:"#ffd21f",3:"#e0303a"},Ea={U:"\u0411\u0435\u043B\u0430\u044F",F:"\u0417\u0435\u043B\u0451\u043D\u0430\u044F",R:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F",B:"\u0421\u0438\u043D\u044F\u044F",L:"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F",D:"\u0416\u0451\u043B\u0442\u0430\u044F"},l0=2,N9=50,O8="kubik.state.v1",IC="kubik.meta.v1",o1=(r,e=document)=>e.querySelector(r),k5=r=>String(r).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),FC=r=>{try{return JSON.parse(localStorage.getItem(r))}catch{return null}},DC=(r,e)=>{try{localStorage.setItem(r,JSON.stringify(e))}catch{}},R9=r=>Math.floor(Math.random()*r),y0=r=>{for(let e=r.length-1;e>0;e--){let t=R9(e+1);[r[e],r[t]]=[r[t],r[e]]}return r},E8=(r,e,t,C)=>{let i=r%10,H=r%100;return i===1&&H!==11?e:i>=2&&i<=4&&(H<12||H>14)?t:C},B9=r=>`${r} ${E8(r,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}`,Ra=r=>r==="U"||r==="D"?"#1d2230":"#fff",I8=(r,e)=>`<span class="sw" style="background:${c7[r]};color:${Ra(r)}">${e?d2(a0[e].icon):""}</span>`,A3={},w=FC(O8),v2=Object.assign({best:0,seen:{},sound:!0,games:0},FC(IC)||{});s0.on=v2.sound;var P1,kC="menu",S2=()=>{w?DC(O8,w):localStorage.removeItem(O8)},U9=()=>DC(IC,v2);function F8(r,e){return r==="my"?u7(e):A3[r]&&A3[r][e]||[]}function D8(r){return y8.filter(e=>F8(e.id,r).length>=9).map(e=>e.id)}function Pa(r,e){if(r==="my")return Ba(e);let t=F8(r,e),C=r+"-"+e,i=new Set(v2.seen[C]||[]),H=y0(t.map((V,n)=>n).filter(V=>!i.has(V)));if(H.length<9){let V=y0(t.map((n,a)=>a).filter(n=>i.has(n)));H=H.concat(V),v2.seen[C]=[]}return H.slice(0,9).map(V=>`${r}-${e}-${V}`)}function Ba(r){let e=u7(r);if(!e.length)return[];let t="my-"+r,C=new Set(v2.seen[t]||[]),i=y0(e.filter(H=>!C.has(H.id)).map(H=>H.id));for(i.length<9&&(i=i.concat(y0(e.filter(H=>C.has(H.id)).map(H=>H.id))),v2.seen[t]=[]);i.length<9;)i=i.concat(y0(e.map(H=>H.id)));return w.myq=w.myq||{},i.slice(0,9).map((H,V)=>{let n=`my-${r}-${H}-${V}`,a=E9(H);return w.myq[n]={q:a.q,a:a.a.slice(),e:a.e},n})}function NC(r){if(r.startsWith("my-"))return w.myq[r];let[e,t,C]=r.split("-");return F8(e,t)[+C]}function Ia(r){let[e,t,C]=r.split("-");if(!A3[e]&&e!=="my")return;let i=e+"-"+t;v2.seen[i]=v2.seen[i]||[],v2.seen[i].includes(+C)||v2.seen[i].push(+C),U9()}function Fa(r){let e=[],t=null;for(;e.length<r;){let C="xyz"[R9(3)];C!==t&&(e.push({ax:C,l:R9(2)?1:-1,d:R9(2)?1:-1}),t=C)}return e}function UC(r){let e=[];for(let t of r){let C=e[e.length-1];if(C&&C.ax===t.ax&&C.l===t.l){let i=((C.d+t.d)%4+4)%4;i===0?e.pop():C.d=i===3?-1:i}else e.push({ax:t.ax,l:t.l,d:t.d})}return e}function zC(){let r=UC([...w.scramble,...w.moves]),e=r[r.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}function Da(r){w={v:1,level:r,phase:"topics",score:0,results:{},topics:x7(r,null)},S2(),d0()}function x7(r,e){let t=D8(r),C={},i=new Set;if(e)for(let V of L0)t.includes(e[V])&&!i.has(e[V])&&(C[V]=e[V],i.add(e[V]));let H=y0(t.filter(V=>V!=="my"&&!i.has(V)));for(let V of L0)C[V]||(C[V]=H.shift());return C}function ka(){let r=D8(w.level);if(!L0.every(e=>r.includes(w.topics[e]))){w.topics=x7(w.level,w.topics),S2(),d0(),T5("\u0414\u043B\u044F \xAB\u041C\u043E\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432\xBB \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u043D\u0443\u0436\u043D\u043E 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u0433\u0440\u0430\u043D\u044C \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430");return}Object.assign(w,{phase:"quiz",scramble:Fa(M0[w.level].scramble),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0}}),S2(),GC()}function v7(r){kC=r,document.body.classList.remove("loading");for(let e of document.querySelectorAll(".scr"))e.classList.toggle("on",e.id==="scr-"+r);requestAnimationFrame(P9)}function P9(){let r=o1("#stage"),e=o1(`#scr-${kC} .cube-slot`);if(!e){r.style.display="none";return}let t=e.getBoundingClientRect();Object.assign(r.style,{display:"block",left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.height+"px"}),P1.resize()}function b0(){ir(),V5(),P1.reset(),P1.mode="view",P1.autoSpin=!0;for(let e of P1.stickers)P1.setLook(e,"color");let r=o1("#m-continue");w&&w.phase!=="final"?(r.hidden=!1,r.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${w.level}`):r.hidden=!0,o1("#m-sound").innerHTML=d2(s0.on?s2.soundOn:s2.soundOff)+(s0.on?"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0451\u043D":"\u0417\u0432\u0443\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),o1("#m-best").textContent=v2.best?`\u0420\u0435\u043A\u043E\u0440\u0434: ${v2.best}`:"",v7("menu")}function R8(){o1("#lv-list").innerHTML=[1,2,3].map(r=>`<button class="lv" data-lv="${r}">
    <span class="num" style="background:${Oa[r]}">${r}</span>
    <span><b>${M0[r].name}</b><span>${M0[r].about}; \u043A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${B9(M0[r].scramble)}</span></span></button>`).join(""),v7("levels")}function d0(){V5(),o1("#tp-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${w.level} \xB7 ${M0[w.level].name}`;let r=D8(w.level),e=u7(w.level).length,t=r.includes("my")?"":`<option disabled>\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u043D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${9-e}</option>`;o1("#tp-list").innerHTML=L0.map(C=>`<label class="trow">${I8(C,w.topics[C])}
    <span class="tcol"><small>${Ea[C]} \u0433\u0440\u0430\u043D\u044C</small>
    <select data-face="${C}">${r.map(i=>`<option value="${i}"${w.topics[C]===i?" selected":""}>${a0[i].name}</option>`).join("")}${t}</select></span>
    <span class="chev">${d2("M7 10l5 5 5-5z")}</span></label>`).join("")+`<button class="link mylink" id="tp-my">${d2(s2.my)}\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: ${e}${e<9?" \u0438\u0437 9 \u043D\u0443\u0436\u043D\u044B\u0445":""}. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>`,o1("#tp-rand").innerHTML=d2(s2.shuffle)+"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",v7("topics")}function GC(){V5(),o1("#g-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${w.level} \xB7 ${M0[w.level].name}`,P1.autoSpin=!1,Na(),P1.rotateTo(P1.baseView,350),v7("game"),w.phase==="quiz"?(P1.mode="tap",k8(),w.pending&&qC()):w.phase==="solve"?(P1.mode="solve",T0()):w.phase==="result"&&(P1.mode="view",T0(),F9()),c0()}function Na(){P1.reset();for(let r of w.scramble)P1.turn(r,!1);if(w.phase!=="quiz")for(let r of w.moves)P1.turn(r,!1);h7()}function m7(r){let e=0;for(let t=0;t<9;t++)w.cells[r+t]&&e++;return e}function I9(){return Object.keys(w.cells).length}function h7(){let r=w&&w.phase==="quiz";for(let e of P1.cells()){let t=e.sticker;if(!w){P1.setLook(t,"color");continue}let C=r?w.cells[e.key]:null,i=r&&w.stage&&e.face!==w.stage;if(t.userData.center){let H=P1.centerLabel(t.userData.color,a0[w.topics[t.userData.color]].icon,C==="c"?"ok":C==="w"?"bad":null,P1._rotOf(t));P1.setLook(t,i?"locked":"color",H)}else r?P1.setLook(t,C==="c"?"color":C==="w"?"wrong":i?"locked":"hidden"):P1.setLook(t,"color")}}function c0(r){if(!w)return;let e=o1("#g-tip");if(e&&w.phase!=="quiz"&&(e.innerHTML=WC()),o1("#st-score").textContent=w.score,o1("#st-turns").textContent=w.free?"\u221E":w.tokens,w.phase==="quiz"?(o1("#st-l3").textContent="\u0412\u043E\u043F\u0440\u043E\u0441\u044B",o1("#st-3").textContent=`${I9()}/54`):(o1("#st-l3").textContent="\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0445\u043E\u0434\u043E\u0432",o1("#st-3").textContent=w.moves.length),r){let t=o1(".pill.turns");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}}function k8(){let r;if(w.stage){let t=m7(w.stage);r=`\u042D\u0442\u0430\u043F ${w.order.length} \u0438\u0437 6 \xB7 <b>${a0[w.topics[w.stage]].name}</b> \xB7 ${t} \u0438\u0437 9.<br>\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0438 \u044D\u0442\u043E\u0439 \u0433\u0440\u0430\u043D\u0438.`}else I9()?r="\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0433\u0440\u0430\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0435\u0451 \u043A\u043B\u0435\u0442\u043A\u0443.":r="\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0430\u043F.<br>\u041A\u0443\u0431\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C.";let e=L0.map(t=>{let C=m7(t);return`<button class="chip ${w.stage===t?"on":C===9?"done":""}" data-face="${t}">${I8(t,w.topics[t])}<span>${C}/9</span></button>`}).join("");o1("#g-foot").innerHTML=`<div class="tip">${r}</div><div class="chips">${e}</div>`}function Ua(){return UC([...w.scramble,...w.moves]).reduce((r,e)=>r+Math.abs(e.d),0)}function WC(){if(w.phase!=="solve")return"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.";if(w.free)return`\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C <b>${N9*w.level}</b> \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.`;if(w.tokens<1)return"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0445\u043E\u0434 \u0438\u043B\u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443 \u0437\u0430 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.";let r=Ua();return`\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043B\u043E\u0439. \u0412\u0440\u0430\u0449\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443.<br>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0441\u043E\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0437\u0430 <b>${r}</b> ${E8(r,"\u0445\u043E\u0434","\u0445\u043E\u0434\u0430","\u0445\u043E\u0434\u043E\u0432")} (${l0*r} ${E8(l0*r,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}).`}function T0(){let r=w.phase==="solve";o1("#g-foot").innerHTML=`<div class="tip" id="g-tip">${WC()}</div>
  <div class="tools">
    <button class="tool" id="t-undo"${r?"":" disabled"}>${d2(s2.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    ${r&&!w.free&&w.tokens<1?`<button class="tool hint" id="t-free">${d2(s2.turn)}\u0421\u0430\u043C<em>+${N9*w.level}</em></button>`:`<button class="tool hint" id="t-hint"${r&&!w.free?"":" disabled"}>${d2(s2.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430<em>\u2212${l0}</em></button>`}
    <button class="tool" id="t-view">${d2(s2.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="t-end"${r?"":" disabled"}>${d2(s2.flag)}\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C</button>
  </div>`}function XC(r){if(!w||w.phase!=="quiz"||w.pending||!o1("#sheet").hidden)return;if(w9(),w.cells[r.key]){T5("\u041D\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0442\u044B \u0443\u0436\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B"),H5("deny");return}if(w.stage&&w.stage!==r.face){T5(`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438 \u044D\u0442\u0430\u043F \xAB${a0[w.topics[w.stage]].name}\xBB`),H5("deny"),P1.showFace(w.stage);return}if(!w.stage){w.stage=r.face,w.order.push(r.face);let t=Pa(w.topics[r.face],w.level);if(t.length<9){w.stage=null,w.order.pop(),T5("\u0421\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u044B. \u0414\u043E\u0431\u0430\u0432\u044C \u0438\u0445 \u0432 \u043C\u0435\u043D\u044E \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB."),H5("deny");return}w.stageQ[r.face]=t,H5("stage"),h7()}let e=w.stageQ[r.face][m7(r.face)];w.pending={key:r.key,face:r.face,qid:e,order:y0([0,1,2,3])},S2(),k8(),qC()}function qC(){let r=w.pending,e=NC(r.qid),t=a0[w.topics[r.face]];o1("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${I8(r.face,w.topics[r.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${w.order.indexOf(r.face)+1} \xB7 \u0432\u043E\u043F\u0440\u043E\u0441 ${m7(r.face)+1} \u0438\u0437 9</span></div>
    <div class="q-text">${k5(e.q)}</div>
    <div class="ans">${r.order.map((C,i)=>`<button data-i="${i}">${k5(e.a[C])}</button>`).join("")}</div>
    <div class="after" hidden></div>`,o1("#sheet").hidden=!1}function YC(r){let e=w.pending;if(!e)return;let t=NC(e.qid),C=e.order[r]===0,i=w.level*10;w.cells[e.key]=C?"c":"w",C?(w.tokens++,w.lv.correct++,w.lv.points+=i,w.score+=i):w.lv.wrong++,Ia(e.qid),w.lastKey=e.key,w.pending=null,S2(),H5(C?"ok":"bad");let H=o1(".ans");H.classList.add("done"),H.querySelectorAll("button").forEach((n,a)=>{n.disabled=!0,e.order[a]===0?n.classList.add("ok"):a===r&&n.classList.add("bad")});let V=o1(".after");V.hidden=!1,V.innerHTML=`<div class="verdict ${C?"ok":"bad"}">${d2(C?s2.check:s2.close)}${C?"\u0412\u0435\u0440\u043D\u043E, +1 \u043F\u043E\u0432\u043E\u0440\u043E\u0442":"\u041D\u0435\u0432\u0435\u0440\u043D\u043E"}</div>
    ${t.e?`<div class="exp">${k5(t.e)}</div>`:""}<button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button>`,V.scrollIntoView({block:"nearest",behavior:"smooth"}),c0(C)}function $C(){ir(),h7();let r=P1.cells().find(t=>t.key===w.lastKey);r&&P1.pop(r.sticker);let e=w.lastKey[0];if(m7(e)===9){let t=[...Array(9).keys()].filter(C=>w.cells[e+C]==="c").length;w.stage=null,S2(),h7(),I9()<54&&T5(`\u042D\u0442\u0430\u043F \xAB${a0[w.topics[e]].name}\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D: ${t} \u0438\u0437 9`)}k8(),c0(),I9()>=54&&setTimeout(QC,500)}function QC(){w.phase="solve",S2(),h7(),T0(),c0(),P1.mode="solve",P1.spin(900);let r=w.lv.correct;if(w.tokens<1){J2(`<div class="m-title">\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0442\u043E\u0436\u0435 \u043D\u0435\u0442.</p>
      <p>${N8()}</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(e=>e==="free"?z9():e==="retry"?Cr():S7(!1));return}J2(`<div class="m-title">\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A</div><div class="m-text">
    <p>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438: \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ${r} \u0438\u0437 54. \u0422\u044B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B ${B9(w.tokens)}.</p>
    <p>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${B9(w.scramble.length)}. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</p>
    <p>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u043D\u043E \u0441\u0442\u043E\u0438\u0442 ${l0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434.</p></div>`,[["ok","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C","primary"]])}async function P8(r,e,t){w.tokens-=e,w.moves.push({...r,c:e}),S2(),c0(),H5("turn"),await P1.turn(r,!0,t?420:190),tr(),w&&w.phase==="solve"&&!w.free&&w.tokens<1&&(T0(),KC())}function N8(){return`\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438 \u0431\u0435\u0437 \u0441\u0447\u0451\u0442\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C ${N9*w.level} \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 ${100*w.level}.`}function KC(){J2(`<div class="m-title">\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D.</p><p>${N8()}</p>
    <p>\u041C\u043E\u0436\u043D\u043E \u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0445\u043E\u0434\u044B: \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u0440\u043D\u0451\u0442 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["back","\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0443\u0431\u0438\u043A\u0443",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(r=>r==="free"?z9():r==="end"?S7(!1):null)}function z9(){w.free=!0,S2(),T0(),c0(!0),T5("\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435.")}function JC(r){if(!(!w||w.phase!=="solve"||P1.queue.length>1)){if(w9(),w.free){P8(r,0);return}if(w.tokens<1){KC(),H5("deny");return}P8(r,1)}}function jC(){if(!w||w.phase!=="solve"||P1.busy)return;let r=w.moves.pop();if(!r){T5("\u041E\u0442\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E");return}w.free||(w.tokens+=1),S2(),T0(),c0(!0),H5("turn"),P1.turn({ax:r.ax,l:r.l,d:-r.d}).then(tr)}function er(){if(!w||w.phase!=="solve"||P1.busy||w.free)return;if(w.tokens<l0){T5(`\u0414\u043B\u044F \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043D\u0443\u0436\u043D\u043E ${l0} \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430`),H5("deny");return}let r=zC();r&&(w.lv.hints++,P8(r,l0,!0))}function tr(){!w||w.phase!=="solve"||P1.busy||P1.isSolved()&&S7(!0)}function za(r){return r.solved?r.correct>=49?3:r.correct>=38?2:1:0}function S7(r){let e=w.level,t={correct:w.lv.correct,points:w.lv.points,solved:r,hints:w.lv.hints,free:!!w.free,bonus:r?w.free?N9*e:100*e:0,left:r&&!w.free?w.tokens:0,leftPts:r&&!w.free?w.tokens*5*e:0};t.total=t.points+t.bonus+t.leftPts,t.stars=za(t),w.score+=t.bonus+t.leftPts,w.results[e]=t,w.phase="result",S2(),c0(),T0(),P1.mode="view",r?(H5("win"),P1.spin(1400),setTimeout(F9,1500)):F9()}function F9(){let r=w.level,e=w.results[r],t=[1,2,3].map(V=>d2(V<=e.stars?s2.star:s2.starOff,"ic"+(V<=e.stars?"":" off"))).join(""),C=[["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${e.correct} \u0438\u0437 54`],["\u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B",e.points],...e.solved&&e.free?[["\u041F\u0440\u0438\u0437\u043E\u0432\u044B\u0435: \u0441\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u043C",e.bonus]]:[],...e.solved&&!e.free?[["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A",e.bonus],[`\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${B9(e.left)}`,e.leftPts]]:[]],i=`<div class="m-title">${e.solved?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${r} \u043F\u0440\u043E\u0439\u0434\u0435\u043D`:"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="stars">${t}</div>
    <div class="rows">${C.map(([V,n])=>`<div><span>${V}</span><b>${n}</b></div>`).join("")}
    <div class="tot"><span>\u0412\u0441\u0435\u0433\u043E \u043E\u0447\u043A\u043E\u0432</span><b>${w.score}</b></div></div>`,H=[];r<3?e.solved?H.push(["next","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]):(H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["next","\u0414\u0430\u043B\u044C\u0448\u0435 \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430",""])):(e.solved||H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["final","\u0418\u0442\u043E\u0433\u0438 \u0438\u0433\u0440\u044B",e.solved?"primary":""])),H.push(["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]),J2(i,H).then(V=>{V==="next"?Ga():V==="retry"?Cr():V==="final"?Wa():b0()})}function Ga(){let r=w.topics;w.level++,w.phase="topics",w.topics=x7(w.level,r),S2(),d0()}function Cr(){w.score-=w.lv.points+(w.results[w.level]&&w.results[w.level].bonus+w.results[w.level].leftPts||0),delete w.results[w.level],w.phase="topics",S2(),d0()}function Wa(){let r=w.score,e=r>v2.best;e&&(v2.best=r),v2.games++,U9();let t=[1,2,3].filter(C=>w.results[C]).map(C=>{let i=w.results[C];return`<div><span>${M0[C].name}${i.solved?"":", \u043A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</span><b>${i.total}</b></div>`}).join("");w=null,S2(),J2(`<div class="m-title">\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430</div><div class="stars">${d2(s2.trophy)}</div>
    <div class="rows">${t}<div class="tot"><span>\u0418\u0442\u043E\u0433\u043E</span><b>${r}</b></div></div>
    <div class="m-text" style="text-align:center">${e?"\u042D\u0442\u043E \u043D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434.":`\u0420\u0435\u043A\u043E\u0440\u0434: ${v2.best}.`}</div>`,[["new","\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(C=>C==="new"?R8():b0())}var rr="menu",Xa={0:"\u043B\u044E\u0431\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",1:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 1",2:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 2",3:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 3"};function f7(r){r&&(rr=r),V5(),G9();let e=[1,2,3].map(t=>u7(t).length);o1("#my-lead").innerHTML=B2.list.length?`\u0413\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C, \u0435\u0441\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445.<br>
      <span class="mycount">${[1,2,3].map((t,C)=>`<b class="${e[C]>=9?"ok":""}">\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${t}: ${e[C]}${e[C]<9?` (\u0435\u0449\u0451 ${9-e[C]})`:""}</b>`).join("")}</span>`:"\u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u0438\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0433\u0440\u0430\u043D\u0435\u0439 \u043A\u0443\u0431\u0438\u043A\u0430. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0435\u0442\u043E\u043A \u043D\u0430 \u0433\u0440\u0430\u043D\u0438.<br><br>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0437\u0434\u0435\u0441\u044C \u0438\u043B\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0432 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u043C \u0444\u0430\u0439\u043B\u0435 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\xBB.",o1("#my-list").innerHTML=B2.list.map((t,C)=>`<button class="myq" data-id="${t.id}">
    <span class="myq-n">${C+1}</span><span class="myq-t"><b>${k5(t.q)}</b><small><span class="okc">${k5(t.a[0])}</span> \xB7 ${Xa[t.lv||0]}</small></span></button>`).join(""),o1("#my-add").innerHTML=d2(s2.plus)+"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",o1("#my-save").innerHTML=d2(s2.save)+"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",o1("#my-load").innerHTML=d2(s2.load)+"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",o1("#my-save").disabled=!B2.list.length,v7("my")}function qa(){rr==="topics"&&w&&w.phase==="topics"?(w.topics=x7(w.level,w.topics),S2(),d0()):b0()}var A7=0,D9=0;function PC(r){let e=r?E9(r):null;A7=e?e.id:0,D9=e&&e.lv||0;let t=(C,i)=>`<input id="e-a${C}" maxlength="${b5.a}" autocomplete="off" placeholder="${i}" value="${e?k5(e.a[C]):""}">`;o1("#ecard").innerHTML=`<div class="m-title">${e?"\u0412\u043E\u043F\u0440\u043E\u0441":"\u041D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"}</div>
    <label class="fl"><span>\u0412\u043E\u043F\u0440\u043E\u0441</span><textarea id="e-q" rows="3" maxlength="${b5.q}">${e?k5(e.q):""}</textarea></label>
    <label class="fl okf"><span>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442</span>${t(0,"")}</label>
    <div class="fl badf"><span>\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B</span>${t(1,"\u043F\u0435\u0440\u0432\u044B\u0439")}${t(2,"\u0432\u0442\u043E\u0440\u043E\u0439")}${t(3,"\u0442\u0440\u0435\u0442\u0438\u0439")}</div>
    <label class="fl"><span>\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C</span><textarea id="e-e" rows="2" maxlength="${b5.e}">${e?k5(e.e||""):""}</textarea></label>
    <div class="fl"><span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C</span><div class="seg">${[0,1,2,3].map(C=>`<button data-elv="${C}" class="${C===D9?"on":""}">${C||"\u041B\u044E\u0431\u043E\u0439"}</button>`).join("")}</div></div>
    <div class="e-err" id="e-err"></div>
    <div class="m-btns"><button class="btn primary" id="e-ok">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
    ${e?`<button class="btn ghost danger" id="e-del">${d2(s2.del)}\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441</button>`:""}
    <button class="btn ghost" id="e-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button></div>`,o1("#edit").hidden=!1,o1("#ecard").scrollTop=0}function G9(){o1("#edit").hidden=!0}function Ya(){let r=O9({q:o1("#e-q").value,a:[0,1,2,3].map(C=>o1("#e-a"+C).value),e:o1("#e-e").value,lv:D9}),e=w8(r,A7);if(e){o1("#e-err").textContent=e,H5("deny");return}if(!bC(r,A7)){o1("#e-err").textContent="\u041F\u0430\u043C\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0430, \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F.";return}let t=!A7;if(G9(),f7(),t){T5(`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D. \u0412\u0441\u0435\u0433\u043E: ${B2.list.length}`);let C=o1("#my-list").lastElementChild;C&&C.scrollIntoView({block:"nearest"})}}function $a(){let r=A7;G9(),J2('<div class="m-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441?</div>',[["yes","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{V5(),e==="yes"&&(TC(r),T5("\u0412\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0430\u043B\u0451\u043D")),f7()})}async function Qa(){let r="\u041A\u0443\u0431\u0438\u043A - \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.txt",e=new File([wC()],r,{type:"text/plain"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(C){if(C&&C.name==="AbortError")return}let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=r,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},2e3)}async function Ka(r){if(!r)return;let e;try{e=EC(OC(await RC(r)))}catch{e={added:0,dup:0,errors:["\u0424\u0430\u0439\u043B \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F."]}}let t=[`<p>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: <b>${e.added}</b>.${e.dup?` \u0423\u0436\u0435 \u0431\u044B\u043B\u0438, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B: ${e.dup}.`:""}</p>`];!e.added&&!e.dup&&!e.errors.length&&t.push("<p>\u0412 \u0444\u0430\u0439\u043B\u0435 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0431\u0440\u0430\u0437\u0435\u0446: \u0432\u043E\u043F\u0440\u043E\u0441, \u0441\u0442\u0440\u043E\u043A\u0430 \xAB+ \u0432\u0435\u0440\u043D\u044B\u0439\xBB, \u0442\u0440\u0438 \u0441\u0442\u0440\u043E\u043A\u0438 \xAB- \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439\xBB.</p>"),e.errors.length&&t.push(`<p>\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:</p><ul class="errs">${e.errors.slice(0,12).map(C=>`<li>${k5(C)}</li>`).join("")}${e.errors.length>12?`<li>\u0438 \u0435\u0449\u0451 ${e.errors.length-12}</li>`:""}</ul>`),f7(),J2(`<div class="m-title">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</div><div class="m-text">${t.join("")}</div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(V5)}var k9=null;function J2(r,e){o1("#mcard").innerHTML=r+`<div class="m-btns">${e.map(([C,i,H])=>`<button class="btn ${H||""}" data-b="${C}">${i}</button>`).join("")}</div>`;let t=o1("#modal");return t.hidden=!1,t.classList.add("center"),o1("#mcard").scrollTop=0,new Promise(C=>{k9=C})}function V5(){o1("#modal").hidden=!0,k9=null}function ir(){o1("#sheet").hidden=!0}var BC;function T5(r){let e=o1("#toast");e.textContent=r,e.classList.add("on"),clearTimeout(BC),BC=setTimeout(()=>e.classList.remove("on"),2400)}function B8(){return`<div class="m-title">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</div><div class="help">
  <p>\u041A\u0443\u0431\u0438\u043A \u2014 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u0430 \u0438\u0437 \u0442\u0440\u0451\u0445 \u0443\u0440\u043E\u0432\u043D\u0435\u0439: \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439, \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u0439. \u041A\u0430\u0436\u0434\u0430\u044F \u0433\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u044D\u0442\u0430\u043F \u0438\u0437 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.</p>
  <h3>\u0412\u043E\u043F\u0440\u043E\u0441\u044B</h3><ul>
  <li>\u041F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0438\u0437 \u0448\u0435\u0441\u0442\u0438 \u0433\u0440\u0430\u043D\u0435\u0439.</li>
  <li>\u041E\u0434\u043D\u0443 \u0433\u0440\u0430\u043D\u044C \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u0434\u0430\u0442\u044C \u0441\u0432\u043E\u0438\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C: \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0432 \u043C\u0435\u043D\u044E. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0443\u0440\u043E\u0432\u043D\u044F.</li>
  <li>\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0438 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u044D\u0442\u0430\u043F. \u041F\u043E\u043A\u0430 \u043E\u043D \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D, \u0434\u0440\u0443\u0433\u0438\u0435 \u0433\u0440\u0430\u043D\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B.</li>
  <li>\u0417\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u2014 \u043E\u0447\u043A\u0438 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041A\u043B\u0435\u0442\u043A\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u0432\u043E\u0439 \u0446\u0432\u0435\u0442.</li></ul>
  <h3>\u0421\u0431\u043E\u0440\u043A\u0430</h3><ul>
  <li>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D. \u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 54 \u0432\u043E\u043F\u0440\u043E\u0441\u0430 \u043F\u043E\u0437\u0430\u0434\u0438, \u0435\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</li>
  <li>\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</li>
  <li>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0437\u0430 ${l0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</li>
  <li>\u041A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u2014 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C\u0438, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0417\u0430 \u0442\u0430\u043A\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.</li>
  <li>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E. \u041A\u043D\u043E\u043F\u043A\u0430 \xAB\u0412\u0438\u0434\xBB \u0441\u0442\u0430\u0432\u0438\u0442 \u0435\u0433\u043E \u0440\u043E\u0432\u043D\u043E.</li></ul>
  <h3>\u041E\u0447\u043A\u0438</h3><ul>
  <li>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: 10, 20 \u0438\u043B\u0438 30 \u043E\u0447\u043A\u043E\u0432 \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044E.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A: 100, 200 \u0438\u043B\u0438 300 \u043E\u0447\u043A\u043E\u0432 \u0438 \u0435\u0449\u0451 \u043F\u043E 5, 10 \u0438\u043B\u0438 15 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C: 50, 100 \u0438\u043B\u0438 150 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.</li>
  <li>\u0417\u0432\u0451\u0437\u0434\u044B: \u043E\u0434\u043D\u0430 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A, \u0434\u0432\u0435, \u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0438 38 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u0442\u0440\u0438 \u2014 \u043F\u0440\u0438 49 \u0432\u0435\u0440\u043D\u044B\u0445.</li></ul>
  <p>\u0418\u0433\u0440\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430, \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F.</p></div>`}function Ja(){document.addEventListener("pointerdown",w9,{capture:!0});for(let e of document.querySelectorAll('[data-go="menu"]'))e.innerHTML=d2(s2.back);o1("#g-home").innerHTML=d2(s2.home),o1("#my-back").innerHTML=d2(s2.back),o1("#m-my").innerHTML=d2(s2.my)+"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",o1("#g-help").innerHTML=d2(s2.help),document.querySelectorAll('[data-go="menu"]').forEach(e=>e.addEventListener("click",b0)),o1("#m-new").addEventListener("click",()=>{w?J2('<div class="m-title">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430?</div><div class="m-text"><p>\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.</p></div>',[["yes","\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{V5(),e==="yes"&&(w=null,S2(),R8())}):R8()}),o1("#m-continue").addEventListener("click",()=>{w&&(w.phase==="topics"?d0():GC())}),o1("#m-help").addEventListener("click",()=>J2(B8(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(V5)),o1("#g-help").addEventListener("click",()=>{let e=w&&w.phase==="result";J2(B8(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(()=>{V5(),e&&F9()})}),o1("#m-sound").addEventListener("click",()=>{s0.on=!s0.on,v2.sound=s0.on,U9(),b0()}),o1("#g-home").addEventListener("click",b0),o1("#lv-list").addEventListener("click",e=>{let t=e.target.closest("[data-lv]");t&&Da(+t.dataset.lv)}),o1("#tp-list").addEventListener("change",e=>{let t=e.target.closest("select");if(!t)return;let C=t.dataset.face,i=t.value,H=w.topics[C],V=L0.find(n=>n!==C&&w.topics[n]===i);V&&(w.topics[V]=H),w.topics[C]=i,S2(),d0()}),o1("#tp-rand").addEventListener("click",()=>{w.topics=x7(w.level,null),S2(),d0()}),o1("#tp-go").addEventListener("click",ka),o1("#m-my").addEventListener("click",()=>f7("menu")),o1("#tp-list").addEventListener("click",e=>{e.target.closest("#tp-my")&&(e.preventDefault(),f7("topics"))}),o1("#my-back").addEventListener("click",qa),o1("#my-add").addEventListener("click",()=>PC(0)),o1("#my-list").addEventListener("click",e=>{let t=e.target.closest("[data-id]");t&&PC(+t.dataset.id)}),o1("#my-save").addEventListener("click",Qa),o1("#my-load").addEventListener("click",()=>{o1("#my-file").value="",o1("#my-file").click()}),o1("#my-file").addEventListener("change",e=>Ka(e.target.files[0])),o1("#ecard").addEventListener("click",e=>{let t=e.target.closest("[data-elv]");if(t){D9=+t.dataset.elv,o1("#ecard").querySelectorAll("[data-elv]").forEach(C=>C.classList.toggle("on",C===t));return}e.target.closest("#e-ok")?Ya():e.target.closest("#e-del")?$a():e.target.closest("#e-cancel")&&G9()}),o1("#g-foot").addEventListener("click",e=>{let t=e.target.closest(".chip");if(t){P1.showFace(t.dataset.face);return}let C=e.target.closest(".tool");!C||C.disabled||(C.id==="t-undo"?jC():C.id==="t-hint"?er():C.id==="t-free"?J2(`<div class="m-title">\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443?</div><div class="m-text"><p>${N8()}</p></div>`,[["yes","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(i=>{V5(),i==="yes"&&z9()}):C.id==="t-view"?P1.rotateTo(P1.baseView):C.id==="t-end"&&J2('<div class="m-title">\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C?</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F. \u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.</p></div>',[["yes","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C","primary"],["no","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435","ghost"]]).then(i=>{V5(),i==="yes"&&S7(!1)}))}),o1("#qcard").addEventListener("click",e=>{let t=e.target.closest(".ans button");if(t&&!t.disabled){YC(+t.dataset.i);return}e.target.closest("#q-next")&&$C()}),o1("#mcard").addEventListener("click",e=>{let t=e.target.closest("[data-b]");if(!t||!k9)return;let C=k9;V5(),C(t.dataset.b)}),window.addEventListener("resize",()=>requestAnimationFrame(P9));let r=new ResizeObserver(()=>requestAnimationFrame(P9));document.querySelectorAll(".cube-slot").forEach(e=>r.observe(e)),window.addEventListener("orientationchange",()=>setTimeout(P9,300))}async function ja(){P1=new T9(o1("#stage")),P1.onTap=XC,P1.onSwipe=JC,Ja();try{A3=await(await fetch("ru.json?v="+wa)).json()}catch{A3={}}w&&(w.v!==1||!M0[w.level])&&(w=null,S2()),b0(),v2.helped||(v2.helped=1,U9(),J2(B8(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]])),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}window.__kubik={get S(){return w},get cube(){return P1},get BANK(){return A3},onTap:XC,answer:YC,afterAnswer:$C,hint:er,undo:jC,hintMove:zC,finishLevel:S7,toSolve:QC,onSwipe:JC,startFree:z9};ja();
