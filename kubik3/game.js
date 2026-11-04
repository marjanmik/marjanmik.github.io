var ur=0,ke=1,Ar=2;var u4=1,mr=2,L7=3,Y0=0,a5=1,Q5=2,K5=0,s7=1,De=2,Ne=3,Ue=4,hr=5;var d3=100,fr=101,vr=102,xr=103,Sr=104,gr=200,Zr=201,yr=202,_r=203,ze=204,Ge=205,br=206,wr=207,Tr=208,Or=209,Er=210,Rr=211,Pr=212,Br=213,Ir=214,y9=0,_9=1,b9=2,Y3=3,w9=4,T9=5,O9=6,E9=7,We=0,Fr=1,kr=2,I5=0,$e=1,qe=2,Xe=3,Ye=4,Qe=5,Ke=6,Je=7;var je=300,Q0=301,c3=302,s6=303,M6=304,A4=306,R9=1e3,q5=1001,P9=1002,U2=1003,Dr=1004;var m4=1005;var W2=1006,l6=1007;var K0=1008;var s5=1009,et=1010,tt=1011,M7=1012,d6=1013,F5=1014,k5=1015,D5=1016,c6=1017,p6=1018,l7=1020,Ct=35902,rt=35899,it=1021,Ht=1022,g5=1023,X5=1026,J0=1027,nt=1028,u6=1029,j0=1030,A6=1031;var m6=1033,h4=33776,f4=33777,v4=33778,x4=33779,h6=35840,f6=35841,v6=35842,x6=35843,S6=36196,g6=37492,Z6=37496,y6=37488,_6=37489,S4=37490,b6=37491,w6=37808,T6=37809,O6=37810,E6=37811,R6=37812,P6=37813,B6=37814,I6=37815,F6=37816,k6=37817,D6=37818,N6=37819,U6=37820,z6=37821,G6=36492,W6=36494,$6=36495,q6=36283,X6=36284,g4=36285,Y6=36286;var z7=2300,B9=2301,g9=2302,_e=2303,be=2400,we=2401,Te=2402;var Nr=3200;var Q6=0,Ur=1,p0="",Q2="srgb",G7="srgb-linear",W7="linear",V2="srgb";var Z9=7680;var zr=519,Gr=512,Wr=513,$r=514,K6=515,qr=516,Xr=517,J6=518,Yr=519,Qr=35044;var Vt="300 es",R5=2e3,Q3=2001;function da(C){for(let e=C.length-1;e>=0;--e)if(C[e]>=65535)return!0;return!1}function ca(C){return ArrayBuffer.isView(C)&&!(C instanceof DataView)}function $7(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function Kr(){let C=$7("canvas");return C.style.display="block",C}var DC={},K3=null;function at(...C){let e="THREE."+C.shift();K3?K3("log",e,...C):console.log(e,...C)}function Jr(C){let e=C[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=C[1];t&&t.isStackTrace?C[0]+=" "+t.getLocation():C[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return C}function I1(...C){C=Jr(C);let e="THREE."+C.shift();if(K3)K3("warn",e,...C);else{let t=C[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...C)}}function k1(...C){C=Jr(C);let e="THREE."+C.shift();if(K3)K3("error",e,...C);else{let t=C[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...C)}}function M3(...C){let e=C.join(" ");e in DC||(DC[e]=!0,I1(...C))}function jr(C,e,t){return new Promise(function(r,i){function H(){switch(C.clientWaitSync(e,C.SYNC_FLUSH_COMMANDS_BIT,0)){case C.WAIT_FAILED:i();break;case C.TIMEOUT_EXPIRED:setTimeout(H,t);break;default:r()}}setTimeout(H,t)})}var ei={[y9]:_9,[b9]:O9,[w9]:E9,[Y3]:T9,[_9]:y9,[O9]:b9,[E9]:w9,[T9]:Y3},Y5=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){let r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){let r=this._listeners;if(r===void 0)return;let i=r[e];if(i!==void 0){let H=i.indexOf(t);H!==-1&&i.splice(H,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let r=t[e.type];if(r!==void 0){e.target=this;let i=r.slice(0);for(let H=0,n=i.length;H<n;H++)i[H].call(this,e);e.target=null}}},X2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],NC=1234567,k7=Math.PI/180,J3=180/Math.PI;function p3(){let C=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(X2[C&255]+X2[C>>8&255]+X2[C>>16&255]+X2[C>>24&255]+"-"+X2[e&255]+X2[e>>8&255]+"-"+X2[e>>16&15|64]+X2[e>>24&255]+"-"+X2[t&63|128]+X2[t>>8&255]+"-"+X2[t>>16&255]+X2[t>>24&255]+X2[r&255]+X2[r>>8&255]+X2[r>>16&255]+X2[r>>24&255]).toLowerCase()}function Y1(C,e,t){return Math.max(e,Math.min(t,C))}function ot(C,e){return(C%e+e)%e}function pa(C,e,t,r,i){return r+(C-e)*(i-r)/(t-e)}function ua(C,e,t){return C!==e?(t-C)/(e-C):0}function D7(C,e,t){return(1-t)*C+t*e}function Aa(C,e,t,r){return D7(C,e,1-Math.exp(-t*r))}function ma(C,e=1){return e-Math.abs(ot(C,e*2)-e)}function ha(C,e,t){return C<=e?0:C>=t?1:(C=(C-e)/(t-e),C*C*(3-2*C))}function fa(C,e,t){return C<=e?0:C>=t?1:(C=(C-e)/(t-e),C*C*C*(C*(C*6-15)+10))}function va(C,e){return C+Math.floor(Math.random()*(e-C+1))}function xa(C,e){return C+Math.random()*(e-C)}function Sa(C){return C*(.5-Math.random())}function ga(C){C!==void 0&&(NC=C);let e=NC+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Za(C){return C*k7}function ya(C){return C*J3}function _a(C){return C>0&&Number.isInteger(C)&&2**Math.round(Math.log2(C))===C}function ba(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function wa(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function Ta(C,e,t,r,i){let H=Math.cos,n=Math.sin,V=H(t/2),a=n(t/2),o=H((e+r)/2),L=n((e+r)/2),M=H((e-r)/2),s=n((e-r)/2),l=H((r-e)/2),p=n((r-e)/2);switch(i){case"XYX":C.set(V*L,a*M,a*s,V*o);break;case"YZY":C.set(a*s,V*L,a*M,V*o);break;case"ZXZ":C.set(a*M,a*s,V*L,V*o);break;case"XZX":C.set(V*L,a*p,a*l,V*o);break;case"YXY":C.set(a*l,V*L,a*p,V*o);break;case"ZYZ":C.set(a*p,a*l,V*L,V*o);break;default:I1("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $3(C,e){switch(e.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:case Uint8ClampedArray:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function r5(C,e){switch(e.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var j6={DEG2RAD:k7,RAD2DEG:J3,generateUUID:p3,clamp:Y1,euclideanModulo:ot,mapLinear:pa,inverseLerp:ua,lerp:D7,damp:Aa,pingpong:ma,smoothstep:ha,smootherstep:fa,randInt:va,randFloat:xa,randFloatSpread:Sa,seededRandom:ga,degToRad:Za,radToDeg:ya,isPowerOfTwo:_a,ceilPowerOfTwo:ba,floorPowerOfTwo:wa,setQuaternionFromProperEuler:Ta,normalize:r5,denormalize:$3},ct=class ct{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Y1(this.x,e.x,t.x),this.y=Y1(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Y1(this.x,e,t),this.y=Y1(this.y,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Y1(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let r=this.dot(e)/t;return Math.acos(Y1(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let r=Math.cos(t),i=Math.sin(t),H=this.x-e.x,n=this.y-e.y;return this.x=H*r-n*i+e.x,this.y=H*i+n*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ct.prototype.isVector2=!0;var g1=ct,b2=class{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,H,n,V){let a=r[i+0],o=r[i+1],L=r[i+2],M=r[i+3],s=H[n+0],l=H[n+1],p=H[n+2],f=H[n+3];if(M!==f||a!==s||o!==l||L!==p){let c=a*s+o*l+L*p+M*f;c<0&&(s=-s,l=-l,p=-p,f=-f,c=-c);let d=1-V;if(c<.9995){let S=Math.acos(c),_=Math.sin(S);d=Math.sin(d*S)/_,V=Math.sin(V*S)/_,a=a*d+s*V,o=o*d+l*V,L=L*d+p*V,M=M*d+f*V}else{a=a*d+s*V,o=o*d+l*V,L=L*d+p*V,M=M*d+f*V;let S=1/Math.sqrt(a*a+o*o+L*L+M*M);a*=S,o*=S,L*=S,M*=S}}e[t]=a,e[t+1]=o,e[t+2]=L,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,i,H,n){let V=r[i],a=r[i+1],o=r[i+2],L=r[i+3],M=H[n],s=H[n+1],l=H[n+2],p=H[n+3];return e[t]=V*p+L*M+a*l-o*s,e[t+1]=a*p+L*s+o*M-V*l,e[t+2]=o*p+L*l+V*s-a*M,e[t+3]=L*p-V*M-a*s-o*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,i=e._y,H=e._z,n=e._order,V=Math.cos,a=Math.sin,o=V(r/2),L=V(i/2),M=V(H/2),s=a(r/2),l=a(i/2),p=a(H/2);switch(n){case"XYZ":this._x=s*L*M+o*l*p,this._y=o*l*M-s*L*p,this._z=o*L*p+s*l*M,this._w=o*L*M-s*l*p;break;case"YXZ":this._x=s*L*M+o*l*p,this._y=o*l*M-s*L*p,this._z=o*L*p-s*l*M,this._w=o*L*M+s*l*p;break;case"ZXY":this._x=s*L*M-o*l*p,this._y=o*l*M+s*L*p,this._z=o*L*p+s*l*M,this._w=o*L*M-s*l*p;break;case"ZYX":this._x=s*L*M-o*l*p,this._y=o*l*M+s*L*p,this._z=o*L*p-s*l*M,this._w=o*L*M+s*l*p;break;case"YZX":this._x=s*L*M+o*l*p,this._y=o*l*M+s*L*p,this._z=o*L*p-s*l*M,this._w=o*L*M-s*l*p;break;case"XZY":this._x=s*L*M-o*l*p,this._y=o*l*M-s*L*p,this._z=o*L*p+s*l*M,this._w=o*L*M+s*l*p;break;default:I1("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],i=t[4],H=t[8],n=t[1],V=t[5],a=t[9],o=t[2],L=t[6],M=t[10],s=r+V+M;if(s>0){let l=.5/Math.sqrt(s+1);this._w=.25/l,this._x=(L-a)*l,this._y=(H-o)*l,this._z=(n-i)*l}else if(r>V&&r>M){let l=2*Math.sqrt(1+r-V-M);this._w=(L-a)/l,this._x=.25*l,this._y=(i+n)/l,this._z=(H+o)/l}else if(V>M){let l=2*Math.sqrt(1+V-r-M);this._w=(H-o)/l,this._x=(i+n)/l,this._y=.25*l,this._z=(a+L)/l}else{let l=2*Math.sqrt(1+M-r-V);this._w=(n-i)/l,this._x=(H+o)/l,this._y=(a+L)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Y1(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,i=e._y,H=e._z,n=e._w,V=t._x,a=t._y,o=t._z,L=t._w;return this._x=r*L+n*V+i*o-H*a,this._y=i*L+n*a+H*V-r*o,this._z=H*L+n*o+r*a-i*V,this._w=n*L-r*V-i*a-H*o,this._onChangeCallback(),this}slerp(e,t){let r=e._x,i=e._y,H=e._z,n=e._w,V=this.dot(e);V<0&&(r=-r,i=-i,H=-H,n=-n,V=-V);let a=1-t;if(V<.9995){let o=Math.acos(V),L=Math.sin(o);a=Math.sin(a*o)/L,t=Math.sin(t*o)/L,this._x=this._x*a+r*t,this._y=this._y*a+i*t,this._z=this._z*a+H*t,this._w=this._w*a+n*t,this._onChangeCallback()}else this._x=this._x*a+r*t,this._y=this._y*a+i*t,this._z=this._z*a+H*t,this._w=this._w*a+n*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),H=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),H*Math.sin(t),H*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pt=class pt{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(UC.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(UC.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,r=this.y,i=this.z,H=e.elements;return this.x=H[0]*t+H[3]*r+H[6]*i,this.y=H[1]*t+H[4]*r+H[7]*i,this.z=H[2]*t+H[5]*r+H[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,r=this.y,i=this.z,H=e.elements,n=1/(H[3]*t+H[7]*r+H[11]*i+H[15]);return this.x=(H[0]*t+H[4]*r+H[8]*i+H[12])*n,this.y=(H[1]*t+H[5]*r+H[9]*i+H[13])*n,this.z=(H[2]*t+H[6]*r+H[10]*i+H[14])*n,this}applyQuaternion(e){let t=this.x,r=this.y,i=this.z,H=e.x,n=e.y,V=e.z,a=e.w,o=2*(n*i-V*r),L=2*(V*t-H*i),M=2*(H*r-n*t);return this.x=t+a*o+n*M-V*L,this.y=r+a*L+V*o-H*M,this.z=i+a*M+H*L-n*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,r=this.y,i=this.z,H=e.elements;return this.x=H[0]*t+H[4]*r+H[8]*i,this.y=H[1]*t+H[5]*r+H[9]*i,this.z=H[2]*t+H[6]*r+H[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Y1(this.x,e.x,t.x),this.y=Y1(this.y,e.y,t.y),this.z=Y1(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Y1(this.x,e,t),this.y=Y1(this.y,e,t),this.z=Y1(this.z,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Y1(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let r=e.x,i=e.y,H=e.z,n=t.x,V=t.y,a=t.z;return this.x=i*a-H*V,this.y=H*n-r*a,this.z=r*V-i*n,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ie.copy(this).projectOnVector(e),this.sub(ie)}reflect(e){return this.sub(ie.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let r=this.dot(e)/t;return Math.acos(Y1(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){let i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pt.prototype.isVector3=!0;var T=pt,ie=new T,UC=new b2,ut=class ut{constructor(e,t,r,i,H,n,V,a,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,H,n,V,a,o)}set(e,t,r,i,H,n,V,a,o){let L=this.elements;return L[0]=e,L[1]=i,L[2]=V,L[3]=t,L[4]=H,L[5]=a,L[6]=r,L[7]=n,L[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let r=e.elements,i=t.elements,H=this.elements,n=r[0],V=r[3],a=r[6],o=r[1],L=r[4],M=r[7],s=r[2],l=r[5],p=r[8],f=i[0],c=i[3],d=i[6],S=i[1],_=i[4],v=i[7],g=i[2],Z=i[5],b=i[8];return H[0]=n*f+V*S+a*g,H[3]=n*c+V*_+a*Z,H[6]=n*d+V*v+a*b,H[1]=o*f+L*S+M*g,H[4]=o*c+L*_+M*Z,H[7]=o*d+L*v+M*b,H[2]=s*f+l*S+p*g,H[5]=s*c+l*_+p*Z,H[8]=s*d+l*v+p*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],r=e[1],i=e[2],H=e[3],n=e[4],V=e[5],a=e[6],o=e[7],L=e[8];return t*n*L-t*V*o-r*H*L+r*V*a+i*H*o-i*n*a}invert(){let e=this.elements,t=e[0],r=e[1],i=e[2],H=e[3],n=e[4],V=e[5],a=e[6],o=e[7],L=e[8],M=L*n-V*o,s=V*a-L*H,l=o*H-n*a,p=t*M+r*s+i*l;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/p;return e[0]=M*f,e[1]=(i*o-L*r)*f,e[2]=(V*r-i*n)*f,e[3]=s*f,e[4]=(L*t-i*a)*f,e[5]=(i*H-V*t)*f,e[6]=l*f,e[7]=(r*a-o*t)*f,e[8]=(n*t-r*H)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,H,n,V){let a=Math.cos(H),o=Math.sin(H);return this.set(r*a,r*o,-r*(a*n+o*V)+n+e,-i*o,i*a,-i*(-o*n+a*V)+V+t,0,0,1),this}scale(e,t){return M3("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(He.makeScale(e,t)),this}rotate(e){return M3("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(He.makeRotation(-e)),this}translate(e,t){return M3("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(He.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){let r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ut.prototype.isMatrix3=!0;var D1=ut,He=new D1,zC=new D1().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),GC=new D1().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oa(){let C={enabled:!0,workingColorSpace:G7,spaces:{},convert:function(i,H,n){return this.enabled===!1||H===n||!H||!n||(this.spaces[H].transfer===V2&&(i.r=c0(i.r),i.g=c0(i.g),i.b=c0(i.b)),this.spaces[H].primaries!==this.spaces[n].primaries&&(i.applyMatrix3(this.spaces[H].toXYZ),i.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===V2&&(i.r=q3(i.r),i.g=q3(i.g),i.b=q3(i.b))),i},workingToColorSpace:function(i,H){return this.convert(i,this.workingColorSpace,H)},colorSpaceToWorking:function(i,H){return this.convert(i,H,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===p0?W7:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,H=this.workingColorSpace){return i.fromArray(this.spaces[H].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,H,n){return i.copy(this.spaces[H].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,H){return M3("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),C.workingToColorSpace(i,H)},toWorkingColorSpace:function(i,H){return M3("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),C.colorSpaceToWorking(i,H)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return C.define({[G7]:{primaries:e,whitePoint:r,transfer:W7,toXYZ:zC,fromXYZ:GC,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Q2},outputColorSpaceConfig:{drawingBufferColorSpace:Q2}},[Q2]:{primaries:e,whitePoint:r,transfer:V2,toXYZ:zC,fromXYZ:GC,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Q2}}}),C}var J1=Oa();function c0(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function q3(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}var E3,I9=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{E3===void 0&&(E3=$7("canvas")),E3.width=e.width,E3.height=e.height;let i=E3.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=E3}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$7("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let i=r.getImageData(0,0,e.width,e.height),H=i.data;for(let n=0;n<H.length;n++)H[n]=c0(H[n]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(c0(t[r]/255)*255):t[r]=c0(t[r]);return{data:t,width:e.width,height:e.height}}else return I1("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ea=0,j3=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ea++}),this.uuid=p3(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let H;if(Array.isArray(i)){H=[];for(let n=0,V=i.length;n<V;n++)i[n].isDataTexture?H.push(ne(i[n].image)):H.push(ne(i[n]))}else H=ne(i);r.url=H}return t||(e.images[this.uuid]=r),r}};function ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?I9.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(I1("Texture: Unable to serialize Texture."),{})}var Ra=0,Ve=new T,H5=class C extends Y5{constructor(e=C.DEFAULT_IMAGE,t=C.DEFAULT_MAPPING,r=q5,i=q5,H=W2,n=K0,V=g5,a=s5,o=C.DEFAULT_ANISOTROPY,L=p0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ra++}),this.uuid=p3(),this.name="",this.source=new j3(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=H,this.minFilter=n,this.anisotropy=o,this.format=V,this.internalFormat=null,this.type=a,this.offset=new g1(0,0),this.repeat=new g1(1,1),this.center=new g1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new D1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=L,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ve).x}get height(){return this.source.getSize(Ve).y}get depth(){return this.source.getSize(Ve).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let r=e[t];if(r===void 0){I1(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){I1(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&r&&i.isVector2&&r.isVector2||i&&r&&i.isVector3&&r.isVector3||i&&r&&i.isMatrix3&&r.isMatrix3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==je)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case R9:e.x=e.x-Math.floor(e.x);break;case q5:e.x=e.x<0?0:1;break;case P9:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case R9:e.y=e.y-Math.floor(e.y);break;case q5:e.y=e.y<0?0:1;break;case P9:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};H5.DEFAULT_IMAGE=null;H5.DEFAULT_MAPPING=je;H5.DEFAULT_ANISOTROPY=1;var At=class At{constructor(e=0,t=0,r=0,i=1){this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,r=this.y,i=this.z,H=this.w,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*i+n[12]*H,this.y=n[1]*t+n[5]*r+n[9]*i+n[13]*H,this.z=n[2]*t+n[6]*r+n[10]*i+n[14]*H,this.w=n[3]*t+n[7]*r+n[11]*i+n[15]*H,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,H,a=e.elements,o=a[0],L=a[4],M=a[8],s=a[1],l=a[5],p=a[9],f=a[2],c=a[6],d=a[10];if(Math.abs(L-s)<.01&&Math.abs(M-f)<.01&&Math.abs(p-c)<.01){if(Math.abs(L+s)<.1&&Math.abs(M+f)<.1&&Math.abs(p+c)<.1&&Math.abs(o+l+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(o+1)/2,v=(l+1)/2,g=(d+1)/2,Z=(L+s)/4,b=(M+f)/4,A=(p+c)/4;return _>v&&_>g?_<.01?(r=0,i=.707106781,H=.707106781):(r=Math.sqrt(_),i=Z/r,H=b/r):v>g?v<.01?(r=.707106781,i=0,H=.707106781):(i=Math.sqrt(v),r=Z/i,H=A/i):g<.01?(r=.707106781,i=.707106781,H=0):(H=Math.sqrt(g),r=b/H,i=A/H),this.set(r,i,H,t),this}let S=Math.sqrt((c-p)*(c-p)+(M-f)*(M-f)+(s-L)*(s-L));return Math.abs(S)<.001&&(S=1),this.x=(c-p)/S,this.y=(M-f)/S,this.z=(s-L)/S,this.w=Math.acos((o+l+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Y1(this.x,e.x,t.x),this.y=Y1(this.y,e.y,t.y),this.z=Y1(this.z,e.z,t.z),this.w=Y1(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Y1(this.x,e,t),this.y=Y1(this.y,e,t),this.z=Y1(this.z,e,t),this.w=Y1(this.w,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Y1(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};At.prototype.isVector4=!0;var S2=At,F9=class extends Y5{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:W2,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new S2(0,0,e,t),this.scissorTest=!1,this.viewport=new S2(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:r.depth},H=new H5(i),n=r.count;for(let V=0;V<n;V++)this.textures[V]=H.clone(),this.textures[V].isRenderTargetTexture=!0,this.textures[V].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:W2,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let i=0,H=this.textures.length;i<H;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=r,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new j3(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},L5=class extends F9{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},q7=class extends H5{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=U2,this.minFilter=U2,this.wrapR=q5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var k9=class extends H5{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=U2,this.minFilter=U2,this.wrapR=q5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var L6=class L6{constructor(e,t,r,i,H,n,V,a,o,L,M,s,l,p,f,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,H,n,V,a,o,L,M,s,l,p,f,c)}set(e,t,r,i,H,n,V,a,o,L,M,s,l,p,f,c){let d=this.elements;return d[0]=e,d[4]=t,d[8]=r,d[12]=i,d[1]=H,d[5]=n,d[9]=V,d[13]=a,d[2]=o,d[6]=L,d[10]=M,d[14]=s,d[3]=l,d[7]=p,d[11]=f,d[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new L6().fromArray(this.elements)}copy(e){let t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){let t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,r=e.elements,i=1/R3.setFromMatrixColumn(e,0).length(),H=1/R3.setFromMatrixColumn(e,1).length(),n=1/R3.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*H,t[5]=r[5]*H,t[6]=r[6]*H,t[7]=0,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,r=e.x,i=e.y,H=e.z,n=Math.cos(r),V=Math.sin(r),a=Math.cos(i),o=Math.sin(i),L=Math.cos(H),M=Math.sin(H);if(e.order==="XYZ"){let s=n*L,l=n*M,p=V*L,f=V*M;t[0]=a*L,t[4]=-a*M,t[8]=o,t[1]=l+p*o,t[5]=s-f*o,t[9]=-V*a,t[2]=f-s*o,t[6]=p+l*o,t[10]=n*a}else if(e.order==="YXZ"){let s=a*L,l=a*M,p=o*L,f=o*M;t[0]=s+f*V,t[4]=p*V-l,t[8]=n*o,t[1]=n*M,t[5]=n*L,t[9]=-V,t[2]=l*V-p,t[6]=f+s*V,t[10]=n*a}else if(e.order==="ZXY"){let s=a*L,l=a*M,p=o*L,f=o*M;t[0]=s-f*V,t[4]=-n*M,t[8]=p+l*V,t[1]=l+p*V,t[5]=n*L,t[9]=f-s*V,t[2]=-n*o,t[6]=V,t[10]=n*a}else if(e.order==="ZYX"){let s=n*L,l=n*M,p=V*L,f=V*M;t[0]=a*L,t[4]=p*o-l,t[8]=s*o+f,t[1]=a*M,t[5]=f*o+s,t[9]=l*o-p,t[2]=-o,t[6]=V*a,t[10]=n*a}else if(e.order==="YZX"){let s=n*a,l=n*o,p=V*a,f=V*o;t[0]=a*L,t[4]=f-s*M,t[8]=p*M+l,t[1]=M,t[5]=n*L,t[9]=-V*L,t[2]=-o*L,t[6]=l*M+p,t[10]=s-f*M}else if(e.order==="XZY"){let s=n*a,l=n*o,p=V*a,f=V*o;t[0]=a*L,t[4]=-M,t[8]=o*L,t[1]=s*M+f,t[5]=n*L,t[9]=l*M-p,t[2]=p*M-l,t[6]=V*L,t[10]=f*M+s}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pa,e,Ba)}lookAt(e,t,r){let i=this.elements;return l5.subVectors(e,t),l5.lengthSq()===0&&(l5.z=1),l5.normalize(),B0.crossVectors(r,l5),B0.lengthSq()===0&&(Math.abs(r.z)===1?l5.x+=1e-4:l5.z+=1e-4,l5.normalize(),B0.crossVectors(r,l5)),B0.normalize(),i9.crossVectors(l5,B0),i[0]=B0.x,i[4]=i9.x,i[8]=l5.x,i[1]=B0.y,i[5]=i9.y,i[9]=l5.y,i[2]=B0.z,i[6]=i9.z,i[10]=l5.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let r=e.elements,i=t.elements,H=this.elements,n=r[0],V=r[4],a=r[8],o=r[12],L=r[1],M=r[5],s=r[9],l=r[13],p=r[2],f=r[6],c=r[10],d=r[14],S=r[3],_=r[7],v=r[11],g=r[15],Z=i[0],b=i[4],A=i[8],x=i[12],w=i[1],P=i[5],F=i[9],U=i[13],E=i[2],k=i[6],X=i[10],G=i[14],r1=i[3],W=i[7],e1=i[11],t1=i[15];return H[0]=n*Z+V*w+a*E+o*r1,H[4]=n*b+V*P+a*k+o*W,H[8]=n*A+V*F+a*X+o*e1,H[12]=n*x+V*U+a*G+o*t1,H[1]=L*Z+M*w+s*E+l*r1,H[5]=L*b+M*P+s*k+l*W,H[9]=L*A+M*F+s*X+l*e1,H[13]=L*x+M*U+s*G+l*t1,H[2]=p*Z+f*w+c*E+d*r1,H[6]=p*b+f*P+c*k+d*W,H[10]=p*A+f*F+c*X+d*e1,H[14]=p*x+f*U+c*G+d*t1,H[3]=S*Z+_*w+v*E+g*r1,H[7]=S*b+_*P+v*k+g*W,H[11]=S*A+_*F+v*X+g*e1,H[15]=S*x+_*U+v*G+g*t1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],r=e[4],i=e[8],H=e[12],n=e[1],V=e[5],a=e[9],o=e[13],L=e[2],M=e[6],s=e[10],l=e[14],p=e[3],f=e[7],c=e[11],d=e[15],S=a*l-o*s,_=V*l-o*M,v=V*s-a*M,g=n*l-o*L,Z=n*s-a*L,b=n*M-V*L;return t*(f*S-c*_+d*v)-r*(p*S-c*g+d*Z)+i*(p*_-f*g+d*b)-H*(p*v-f*Z+c*b)}determinantAffine(){let e=this.elements,t=e[0],r=e[4],i=e[8],H=e[1],n=e[5],V=e[9],a=e[2],o=e[6],L=e[10];return t*(n*L-V*o)-r*(H*L-V*a)+i*(H*o-n*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){let e=this.elements,t=e[0],r=e[1],i=e[2],H=e[3],n=e[4],V=e[5],a=e[6],o=e[7],L=e[8],M=e[9],s=e[10],l=e[11],p=e[12],f=e[13],c=e[14],d=e[15],S=t*V-r*n,_=t*a-i*n,v=t*o-H*n,g=r*a-i*V,Z=r*o-H*V,b=i*o-H*a,A=L*f-M*p,x=L*c-s*p,w=L*d-l*p,P=M*c-s*f,F=M*d-l*f,U=s*d-l*c,E=S*U-_*F+v*P+g*w-Z*x+b*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/E;return e[0]=(V*U-a*F+o*P)*k,e[1]=(i*F-r*U-H*P)*k,e[2]=(f*b-c*Z+d*g)*k,e[3]=(s*Z-M*b-l*g)*k,e[4]=(a*w-n*U-o*x)*k,e[5]=(t*U-i*w+H*x)*k,e[6]=(c*v-p*b-d*_)*k,e[7]=(L*b-s*v+l*_)*k,e[8]=(n*F-V*w+o*A)*k,e[9]=(r*w-t*F-H*A)*k,e[10]=(p*Z-f*v+d*S)*k,e[11]=(M*v-L*Z-l*S)*k,e[12]=(V*x-n*P-a*A)*k,e[13]=(t*P-r*x+i*A)*k,e[14]=(f*_-p*g-c*S)*k,e[15]=(L*g-M*_+s*S)*k,this}scale(e){let t=this.elements,r=e.x,i=e.y,H=e.z;return t[0]*=r,t[4]*=i,t[8]*=H,t[1]*=r,t[5]*=i,t[9]*=H,t[2]*=r,t[6]*=i,t[10]*=H,t[3]*=r,t[7]*=i,t[11]*=H,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let r=Math.cos(t),i=Math.sin(t),H=1-r,n=e.x,V=e.y,a=e.z,o=H*n,L=H*V;return this.set(o*n+r,o*V-i*a,o*a+i*V,0,o*V+i*a,L*V+r,L*a-i*n,0,o*a-i*V,L*a+i*n,H*a*a+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,H,n){return this.set(1,r,H,0,e,1,n,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){let i=this.elements,H=t._x,n=t._y,V=t._z,a=t._w,o=H+H,L=n+n,M=V+V,s=H*o,l=H*L,p=H*M,f=n*L,c=n*M,d=V*M,S=a*o,_=a*L,v=a*M,g=r.x,Z=r.y,b=r.z;return i[0]=(1-(f+d))*g,i[1]=(l+v)*g,i[2]=(p-_)*g,i[3]=0,i[4]=(l-v)*Z,i[5]=(1-(s+d))*Z,i[6]=(c+S)*Z,i[7]=0,i[8]=(p+_)*b,i[9]=(c-S)*b,i[10]=(1-(s+f))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let H=this.determinantAffine();if(H===0)return r.set(1,1,1),t.identity(),this;let n=R3.set(i[0],i[1],i[2]).length(),V=R3.set(i[4],i[5],i[6]).length(),a=R3.set(i[8],i[9],i[10]).length();H<0&&(n=-n),w5.copy(this);let o=1/n,L=1/V,M=1/a;return w5.elements[0]*=o,w5.elements[1]*=o,w5.elements[2]*=o,w5.elements[4]*=L,w5.elements[5]*=L,w5.elements[6]*=L,w5.elements[8]*=M,w5.elements[9]*=M,w5.elements[10]*=M,t.setFromRotationMatrix(w5),r.x=n,r.y=V,r.z=a,this}makePerspective(e,t,r,i,H,n,V=R5,a=!1){let o=this.elements,L=2*H/(t-e),M=2*H/(r-i),s=(t+e)/(t-e),l=(r+i)/(r-i),p,f;if(a)p=H/(n-H),f=n*H/(n-H);else if(V===R5)p=-(n+H)/(n-H),f=-2*n*H/(n-H);else if(V===Q3)p=-n/(n-H),f=-n*H/(n-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+V);return o[0]=L,o[4]=0,o[8]=s,o[12]=0,o[1]=0,o[5]=M,o[9]=l,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,r,i,H,n,V=R5,a=!1){let o=this.elements,L=2/(t-e),M=2/(r-i),s=-(t+e)/(t-e),l=-(r+i)/(r-i),p,f;if(a)p=1/(n-H),f=n/(n-H);else if(V===R5)p=-2/(n-H),f=-(n+H)/(n-H);else if(V===Q3)p=-1/(n-H),f=-H/(n-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+V);return o[0]=L,o[4]=0,o[8]=0,o[12]=s,o[1]=0,o[5]=M,o[9]=0,o[13]=l,o[2]=0,o[6]=0,o[10]=p,o[14]=f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){let r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};L6.prototype.isMatrix4=!0;var s2=L6,R3=new T,w5=new s2,Pa=new T(0,0,0),Ba=new T(1,1,1),B0=new T,i9=new T,l5=new T,WC=new s2,$C=new b2,S5=class C{constructor(e=0,t=0,r=0,i=C.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){let i=e.elements,H=i[0],n=i[4],V=i[8],a=i[1],o=i[5],L=i[9],M=i[2],s=i[6],l=i[10];switch(t){case"XYZ":this._y=Math.asin(Y1(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(-L,l),this._z=Math.atan2(-n,H)):(this._x=Math.atan2(s,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Y1(L,-1,1)),Math.abs(L)<.9999999?(this._y=Math.atan2(V,l),this._z=Math.atan2(a,o)):(this._y=Math.atan2(-M,H),this._z=0);break;case"ZXY":this._x=Math.asin(Y1(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-M,l),this._z=Math.atan2(-n,o)):(this._y=0,this._z=Math.atan2(a,H));break;case"ZYX":this._y=Math.asin(-Y1(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(s,l),this._z=Math.atan2(a,H)):(this._x=0,this._z=Math.atan2(-n,o));break;case"YZX":this._z=Math.asin(Y1(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-L,o),this._y=Math.atan2(-M,H)):(this._x=0,this._y=Math.atan2(V,l));break;case"XZY":this._z=Math.asin(-Y1(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(s,o),this._y=Math.atan2(V,H)):(this._x=Math.atan2(-L,l),this._y=0);break;default:I1("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return WC.makeRotationFromQuaternion(e),this.setFromRotationMatrix(WC,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $C.setFromEuler(this),this.setFromQuaternion($C,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};S5.DEFAULT_ORDER="XYZ";var e7=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ia=0,qC=new T,P3=new b2,L0=new s2,H9=new T,R7=new T,Fa=new T,ka=new b2,XC=new T(1,0,0),YC=new T(0,1,0),QC=new T(0,0,1),KC={type:"added"},Da={type:"removed"},B3={type:"childadded",child:null},ae={type:"childremoved",child:null},n5=class C extends Y5{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ia++}),this.uuid=p3(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=C.DEFAULT_UP.clone();let e=new T,t=new S5,r=new b2,i=new T(1,1,1);function H(){r.setFromEuler(t,!1)}function n(){t.setFromQuaternion(r,void 0,!1)}t._onChange(H),r._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new s2},normalMatrix:{value:new D1}}),this.matrix=new s2,this.matrixWorld=new s2,this.matrixAutoUpdate=C.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=C.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return P3.setFromAxisAngle(e,t),this.quaternion.multiply(P3),this}rotateOnWorldAxis(e,t){return P3.setFromAxisAngle(e,t),this.quaternion.premultiply(P3),this}rotateX(e){return this.rotateOnAxis(XC,e)}rotateY(e){return this.rotateOnAxis(YC,e)}rotateZ(e){return this.rotateOnAxis(QC,e)}translateOnAxis(e,t){return qC.copy(e).applyQuaternion(this.quaternion),this.position.add(qC.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(XC,e)}translateY(e){return this.translateOnAxis(YC,e)}translateZ(e){return this.translateOnAxis(QC,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(L0.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?H9.copy(e):H9.set(e,t,r);let i=this.parent;this.updateWorldMatrix(!0,!1),R7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?L0.lookAt(R7,H9,this.up):L0.lookAt(H9,R7,this.up),this.quaternion.setFromRotationMatrix(L0),i&&(L0.extractRotation(i.matrixWorld),P3.setFromRotationMatrix(L0),this.quaternion.premultiply(P3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(k1("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(KC),B3.child=e,this.dispatchEvent(B3),B3.child=null):k1("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Da),ae.child=e,this.dispatchEvent(ae),ae.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),L0.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),L0.multiply(e.parent.matrixWorld)),e.applyMatrix4(L0),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(KC),B3.child=e,this.dispatchEvent(B3),B3.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){let n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);let i=this.children;for(let H=0,n=i.length;H<n;H++)i[H].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R7,e,Fa),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R7,ka,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,r=e.y,i=e.z,H=this.matrix.elements;H[12]+=t-H[0]*t-H[4]*r-H[8]*i,H[13]+=r-H[1]*t-H[5]*r-H[9]*i,H[14]+=i-H[2]*t-H[6]*r-H[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){let H=this.children;for(let n=0,V=H.length;n<V;n++)H[n].updateWorldMatrix(!1,!0,r)}}toJSON(e){let t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(V=>({...V,boundingBox:V.boundingBox?V.boundingBox.toJSON():void 0,boundingSphere:V.boundingSphere?V.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(V=>({...V})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function H(V,a){return V[a.uuid]===void 0&&(V[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=H(e.geometries,this.geometry);let V=this.geometry.parameters;if(V!==void 0&&V.shapes!==void 0){let a=V.shapes;if(Array.isArray(a))for(let o=0,L=a.length;o<L;o++){let M=a[o];H(e.shapes,M)}else H(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(H(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let V=[];for(let a=0,o=this.material.length;a<o;a++)V.push(H(e.materials,this.material[a]));i.material=V}else i.material=H(e.materials,this.material);if(this.children.length>0){i.children=[];for(let V=0;V<this.children.length;V++)i.children.push(this.children[V].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let V=0;V<this.animations.length;V++){let a=this.animations[V];i.animations.push(H(e.animations,a))}}if(t){let V=n(e.geometries),a=n(e.materials),o=n(e.textures),L=n(e.images),M=n(e.shapes),s=n(e.skeletons),l=n(e.animations),p=n(e.nodes);V.length>0&&(r.geometries=V),a.length>0&&(r.materials=a),o.length>0&&(r.textures=o),L.length>0&&(r.images=L),M.length>0&&(r.shapes=M),s.length>0&&(r.skeletons=s),l.length>0&&(r.animations=l),p.length>0&&(r.nodes=p)}return r.object=i,r;function n(V){let a=[];for(let o in V){let L=V[o];delete L.metadata,a.push(L)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){let i=e.children[r];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};n5.DEFAULT_UP=new T(0,1,0);n5.DEFAULT_MATRIX_AUTO_UPDATE=!0;n5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var P5=class extends n5{constructor(){super(),this.isGroup=!0,this.type="Group"}},Na={type:"move"},t7=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new P5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new P5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new P5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,H=null,n=null,V=this._targetRay,a=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){n=!0;for(let f of e.hand.values()){let c=t.getJointPose(f,r),d=this._getHandJoint(o,f);c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=c.radius),d.visible=c!==null}let L=o.joints["index-finger-tip"],M=o.joints["thumb-tip"],s=L.position.distanceTo(M.position),l=.02,p=.005;o.inputState.pinching&&s>l+p?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&s<=l-p&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(H=t.getPose(e.gripSpace,r),H!==null&&(a.matrix.fromArray(H.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,H.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(H.linearVelocity)):a.hasLinearVelocity=!1,H.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(H.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));V!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&H!==null&&(i=H),i!==null&&(V.matrix.fromArray(i.transform.matrix),V.matrix.decompose(V.position,V.rotation,V.scale),V.matrixWorldNeedsUpdate=!0,i.linearVelocity?(V.hasLinearVelocity=!0,V.linearVelocity.copy(i.linearVelocity)):V.hasLinearVelocity=!1,i.angularVelocity?(V.hasAngularVelocity=!0,V.angularVelocity.copy(i.angularVelocity)):V.hasAngularVelocity=!1,this.dispatchEvent(Na)))}return V!==null&&(V.visible=i!==null),a!==null&&(a.visible=H!==null),o!==null&&(o.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new P5;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},ti={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},I0={h:0,s:0,l:0},n9={h:0,s:0,l:0};function oe(C,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?C+(e-C)*6*t:t<1/2?e:t<2/3?C+(e-C)*6*(2/3-t):C}var U1=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Q2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J1.colorSpaceToWorking(this,t),this}setRGB(e,t,r,i=J1.workingColorSpace){return this.r=e,this.g=t,this.b=r,J1.colorSpaceToWorking(this,i),this}setHSL(e,t,r,i=J1.workingColorSpace){if(e=ot(e,1),t=Y1(t,0,1),r=Y1(r,0,1),t===0)this.r=this.g=this.b=r;else{let H=r<=.5?r*(1+t):r+t-r*t,n=2*r-H;this.r=oe(n,H,e+1/3),this.g=oe(n,H,e),this.b=oe(n,H,e-1/3)}return J1.colorSpaceToWorking(this,i),this}setStyle(e,t=Q2){function r(H){H!==void 0&&parseFloat(H)<1&&I1("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let H,n=i[1],V=i[2];switch(n){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(V))return r(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,t);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(V))return r(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,t);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(V))return r(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,t);break;default:I1("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let H=i[1],n=H.length;if(n===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(H,16),t);I1("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Q2){let r=ti[e.toLowerCase()];return r!==void 0?this.setHex(r,t):I1("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=c0(e.r),this.g=c0(e.g),this.b=c0(e.b),this}copyLinearToSRGB(e){return this.r=q3(e.r),this.g=q3(e.g),this.b=q3(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Q2){return J1.workingToColorSpace(Y2.copy(this),e),Math.round(Y1(Y2.r*255,0,255))*65536+Math.round(Y1(Y2.g*255,0,255))*256+Math.round(Y1(Y2.b*255,0,255))}getHexString(e=Q2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J1.workingColorSpace){J1.workingToColorSpace(Y2.copy(this),t);let r=Y2.r,i=Y2.g,H=Y2.b,n=Math.max(r,i,H),V=Math.min(r,i,H),a,o,L=(V+n)/2;if(V===n)a=0,o=0;else{let M=n-V;switch(o=L<=.5?M/(n+V):M/(2-n-V),n){case r:a=(i-H)/M+(i<H?6:0);break;case i:a=(H-r)/M+2;break;case H:a=(r-i)/M+4;break}a/=6}return e.h=a,e.s=o,e.l=L,e}getRGB(e,t=J1.workingColorSpace){return J1.workingToColorSpace(Y2.copy(this),t),e.r=Y2.r,e.g=Y2.g,e.b=Y2.b,e}getStyle(e=Q2){J1.workingToColorSpace(Y2.copy(this),e);let t=Y2.r,r=Y2.g,i=Y2.b;return e!==Q2?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(I0),this.setHSL(I0.h+e,I0.s+t,I0.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(I0),e.getHSL(n9);let r=D7(I0.h,n9.h,t),i=D7(I0.s,n9.s,t),H=D7(I0.l,n9.l,t);return this.setHSL(r,i,H),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,i=this.b,H=e.elements;return this.r=H[0]*t+H[3]*r+H[6]*i,this.g=H[1]*t+H[4]*r+H[7]*i,this.b=H[2]*t+H[5]*r+H[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Y2=new U1;U1.NAMES=ti;var X7=class extends n5{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new S5,this.environmentIntensity=1,this.environmentRotation=new S5,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},T5=new T,s0=new T,Le=new T,M0=new T,I3=new T,F3=new T,JC=new T,se=new T,Me=new T,le=new T,de=new S2,ce=new S2,pe=new S2,N0=class C{constructor(e=new T,t=new T,r=new T){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),T5.subVectors(e,t),i.cross(T5);let H=i.lengthSq();return H>0?i.multiplyScalar(1/Math.sqrt(H)):i.set(0,0,0)}static getBarycoord(e,t,r,i,H){T5.subVectors(i,t),s0.subVectors(r,t),Le.subVectors(e,t);let n=T5.dot(T5),V=T5.dot(s0),a=T5.dot(Le),o=s0.dot(s0),L=s0.dot(Le),M=n*o-V*V;if(M===0)return H.set(0,0,0),null;let s=1/M,l=(o*a-V*L)*s,p=(n*L-V*a)*s;return H.set(1-l-p,p,l)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,M0)===null?!1:M0.x>=0&&M0.y>=0&&M0.x+M0.y<=1}static getInterpolation(e,t,r,i,H,n,V,a){return this.getBarycoord(e,t,r,i,M0)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(H,M0.x),a.addScaledVector(n,M0.y),a.addScaledVector(V,M0.z),a)}static getInterpolatedAttribute(e,t,r,i,H,n){return de.setScalar(0),ce.setScalar(0),pe.setScalar(0),de.fromBufferAttribute(e,t),ce.fromBufferAttribute(e,r),pe.fromBufferAttribute(e,i),n.setScalar(0),n.addScaledVector(de,H.x),n.addScaledVector(ce,H.y),n.addScaledVector(pe,H.z),n}static isFrontFacing(e,t,r,i){return T5.subVectors(r,t),s0.subVectors(e,t),T5.cross(s0).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return T5.subVectors(this.c,this.b),s0.subVectors(this.a,this.b),T5.cross(s0).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return C.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return C.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,i,H){return C.getInterpolation(e,this.a,this.b,this.c,t,r,i,H)}containsPoint(e){return C.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return C.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let r=this.a,i=this.b,H=this.c,n,V;I3.subVectors(i,r),F3.subVectors(H,r),se.subVectors(e,r);let a=I3.dot(se),o=F3.dot(se);if(a<=0&&o<=0)return t.copy(r);Me.subVectors(e,i);let L=I3.dot(Me),M=F3.dot(Me);if(L>=0&&M<=L)return t.copy(i);let s=a*M-L*o;if(s<=0&&a>=0&&L<=0)return n=a/(a-L),t.copy(r).addScaledVector(I3,n);le.subVectors(e,H);let l=I3.dot(le),p=F3.dot(le);if(p>=0&&l<=p)return t.copy(H);let f=l*o-a*p;if(f<=0&&o>=0&&p<=0)return V=o/(o-p),t.copy(r).addScaledVector(F3,V);let c=L*p-l*M;if(c<=0&&M-L>=0&&l-p>=0)return JC.subVectors(H,i),V=(M-L)/(M-L+(l-p)),t.copy(i).addScaledVector(JC,V);let d=1/(c+f+s);return n=f*d,V=s*d,t.copy(r).addScaledVector(I3,n).addScaledVector(F3,V)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},U0=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(O5.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(O5.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=O5.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let H=r.getAttribute("position");if(t===!0&&H!==void 0&&e.isInstancedMesh!==!0)for(let n=0,V=H.count;n<V;n++)e.isMesh===!0?e.getVertexPosition(n,O5):O5.fromBufferAttribute(H,n),O5.applyMatrix4(e.matrixWorld),this.expandByPoint(O5);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),V9.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),V9.copy(r.boundingBox)),V9.applyMatrix4(e.matrixWorld),this.union(V9)}let i=e.children;for(let H=0,n=i.length;H<n;H++)this.expandByObject(i[H],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,O5),O5.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(P7),a9.subVectors(this.max,P7),k3.subVectors(e.a,P7),D3.subVectors(e.b,P7),N3.subVectors(e.c,P7),F0.subVectors(D3,k3),k0.subVectors(N3,D3),a3.subVectors(k3,N3);let t=[0,-F0.z,F0.y,0,-k0.z,k0.y,0,-a3.z,a3.y,F0.z,0,-F0.x,k0.z,0,-k0.x,a3.z,0,-a3.x,-F0.y,F0.x,0,-k0.y,k0.x,0,-a3.y,a3.x,0];return!ue(t,k3,D3,N3,a9)||(t=[1,0,0,0,1,0,0,0,1],!ue(t,k3,D3,N3,a9))?!1:(o9.crossVectors(F0,k0),t=[o9.x,o9.y,o9.z],ue(t,k3,D3,N3,a9))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,O5).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(O5).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(l0[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),l0[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),l0[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),l0[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),l0[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),l0[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),l0[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),l0[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(l0),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},l0=[new T,new T,new T,new T,new T,new T,new T,new T],O5=new T,V9=new U0,k3=new T,D3=new T,N3=new T,F0=new T,k0=new T,a3=new T,P7=new T,a9=new T,o9=new T,o3=new T;function ue(C,e,t,r,i){for(let H=0,n=C.length-3;H<=n;H+=3){o3.fromArray(C,H);let V=i.x*Math.abs(o3.x)+i.y*Math.abs(o3.y)+i.z*Math.abs(o3.z),a=e.dot(o3),o=t.dot(o3),L=r.dot(o3);if(Math.max(-Math.max(a,o,L),Math.min(a,o,L))>V)return!1}return!0}var E2=new T,L9=new g1,Ua=0,x5=class extends Y5{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ua++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Qr,this.updateRanges=[],this.gpuType=k5,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,H=this.itemSize;i<H;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)L9.fromBufferAttribute(this,t),L9.applyMatrix3(e),this.setXY(t,L9.x,L9.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)E2.fromBufferAttribute(this,t),E2.applyMatrix3(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)E2.fromBufferAttribute(this,t),E2.applyMatrix4(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)E2.fromBufferAttribute(this,t),E2.applyNormalMatrix(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)E2.fromBufferAttribute(this,t),E2.transformDirection(e),this.setXYZ(t,E2.x,E2.y,E2.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$3(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=r5(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$3(t,this.array)),t}setX(e,t){return this.normalized&&(t=r5(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$3(t,this.array)),t}setY(e,t){return this.normalized&&(t=r5(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$3(t,this.array)),t}setZ(e,t){return this.normalized&&(t=r5(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$3(t,this.array)),t}setW(e,t){return this.normalized&&(t=r5(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=r5(t,this.array),r=r5(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=r5(t,this.array),r=r5(r,this.array),i=r5(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,H){return e*=this.itemSize,this.normalized&&(t=r5(t,this.array),r=r5(r,this.array),i=r5(i,this.array),H=r5(H,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=H,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Y7=class extends x5{constructor(e,t,r){super(new Uint16Array(e),t,r)}};var Q7=class extends x5{constructor(e,t,r){super(new Uint32Array(e),t,r)}};var i5=class extends x5{constructor(e,t,r){super(new Float32Array(e),t,r)}},za=new U0,B7=new T,Ae=new T,C7=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):za.setFromPoints(e).getCenter(r);let i=0;for(let H=0,n=e.length;H<n;H++)i=Math.max(i,r.distanceToSquared(e[H]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;B7.subVectors(e,this.center);let t=B7.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(B7,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ae.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(B7.copy(e.center).add(Ae)),this.expandByPoint(B7.copy(e.center).sub(Ae))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ga=0,v5=new s2,me=new n5,U3=new T,d5=new U0,I7=new U0,N2=new T,B5=class C extends Y5{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ga++}),this.uuid=p3(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(da(e)?Q7:Y7)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let H=new D1().getNormalMatrix(e);r.applyNormalMatrix(H),r.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return v5.makeRotationFromQuaternion(e),this.applyMatrix4(v5),this}rotateX(e){return v5.makeRotationX(e),this.applyMatrix4(v5),this}rotateY(e){return v5.makeRotationY(e),this.applyMatrix4(v5),this}rotateZ(e){return v5.makeRotationZ(e),this.applyMatrix4(v5),this}translate(e,t,r){return v5.makeTranslation(e,t,r),this.applyMatrix4(v5),this}scale(e,t,r){return v5.makeScale(e,t,r),this.applyMatrix4(v5),this}lookAt(e){return me.lookAt(e),me.updateMatrix(),this.applyMatrix4(me.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(U3).negate(),this.translate(U3.x,U3.y,U3.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let r=[];for(let i=0,H=e.length;i<H;i++){let n=e[i];r.push(n.x,n.y,n.z||0)}this.setAttribute("position",new i5(r,3))}else{let r=Math.min(e.length,t.count);for(let i=0;i<r;i++){let H=e[i];t.setXYZ(i,H.x,H.y,H.z||0)}e.length>t.count&&I1("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new U0);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){k1("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){let H=t[r];d5.setFromBufferAttribute(H),this.morphTargetsRelative?(N2.addVectors(this.boundingBox.min,d5.min),this.boundingBox.expandByPoint(N2),N2.addVectors(this.boundingBox.max,d5.max),this.boundingBox.expandByPoint(N2)):(this.boundingBox.expandByPoint(d5.min),this.boundingBox.expandByPoint(d5.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&k1('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new C7);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){k1("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let r=this.boundingSphere.center;if(d5.setFromBufferAttribute(e),t)for(let H=0,n=t.length;H<n;H++){let V=t[H];I7.setFromBufferAttribute(V),this.morphTargetsRelative?(N2.addVectors(d5.min,I7.min),d5.expandByPoint(N2),N2.addVectors(d5.max,I7.max),d5.expandByPoint(N2)):(d5.expandByPoint(I7.min),d5.expandByPoint(I7.max))}d5.getCenter(r);let i=0;for(let H=0,n=e.count;H<n;H++)N2.fromBufferAttribute(e,H),i=Math.max(i,r.distanceToSquared(N2));if(t)for(let H=0,n=t.length;H<n;H++){let V=t[H],a=this.morphTargetsRelative;for(let o=0,L=V.count;o<L;o++)N2.fromBufferAttribute(V,o),a&&(U3.fromBufferAttribute(e,o),N2.add(U3)),i=Math.max(i,r.distanceToSquared(N2))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&k1('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){k1("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=t.position,i=t.normal,H=t.uv,n=this.getAttribute("tangent");(n===void 0||n.count!==r.count)&&(n=new x5(new Float32Array(4*r.count),4),this.setAttribute("tangent",n));let V=[],a=[];for(let A=0;A<r.count;A++)V[A]=new T,a[A]=new T;let o=new T,L=new T,M=new T,s=new g1,l=new g1,p=new g1,f=new T,c=new T;function d(A,x,w){o.fromBufferAttribute(r,A),L.fromBufferAttribute(r,x),M.fromBufferAttribute(r,w),s.fromBufferAttribute(H,A),l.fromBufferAttribute(H,x),p.fromBufferAttribute(H,w),L.sub(o),M.sub(o),l.sub(s),p.sub(s);let P=1/(l.x*p.y-p.x*l.y);isFinite(P)&&(f.copy(L).multiplyScalar(p.y).addScaledVector(M,-l.y).multiplyScalar(P),c.copy(M).multiplyScalar(l.x).addScaledVector(L,-p.x).multiplyScalar(P),V[A].add(f),V[x].add(f),V[w].add(f),a[A].add(c),a[x].add(c),a[w].add(c))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,x=S.length;A<x;++A){let w=S[A],P=w.start,F=w.count;for(let U=P,E=P+F;U<E;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let _=new T,v=new T,g=new T,Z=new T;function b(A){g.fromBufferAttribute(i,A),Z.copy(g);let x=V[A];_.copy(x),_.sub(g.multiplyScalar(g.dot(x))).normalize(),v.crossVectors(Z,x);let P=v.dot(a[A])<0?-1:1;n.setXYZW(A,_.x,_.y,_.z,P)}for(let A=0,x=S.length;A<x;++A){let w=S[A],P=w.start,F=w.count;for(let U=P,E=P+F;U<E;U+=3)b(e.getX(U+0)),b(e.getX(U+1)),b(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new x5(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let s=0,l=r.count;s<l;s++)r.setXYZ(s,0,0,0);let i=new T,H=new T,n=new T,V=new T,a=new T,o=new T,L=new T,M=new T;if(e)for(let s=0,l=e.count;s<l;s+=3){let p=e.getX(s+0),f=e.getX(s+1),c=e.getX(s+2);i.fromBufferAttribute(t,p),H.fromBufferAttribute(t,f),n.fromBufferAttribute(t,c),L.subVectors(n,H),M.subVectors(i,H),L.cross(M),V.fromBufferAttribute(r,p),a.fromBufferAttribute(r,f),o.fromBufferAttribute(r,c),V.add(L),a.add(L),o.add(L),r.setXYZ(p,V.x,V.y,V.z),r.setXYZ(f,a.x,a.y,a.z),r.setXYZ(c,o.x,o.y,o.z)}else for(let s=0,l=t.count;s<l;s+=3)i.fromBufferAttribute(t,s+0),H.fromBufferAttribute(t,s+1),n.fromBufferAttribute(t,s+2),L.subVectors(n,H),M.subVectors(i,H),L.cross(M),r.setXYZ(s+0,L.x,L.y,L.z),r.setXYZ(s+1,L.x,L.y,L.z),r.setXYZ(s+2,L.x,L.y,L.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)N2.fromBufferAttribute(e,t),N2.normalize(),e.setXYZ(t,N2.x,N2.y,N2.z)}toNonIndexed(){function e(V,a){let o=V.array,L=V.itemSize,M=V.normalized,s=new o.constructor(a.length*L),l=0,p=0;for(let f=0,c=a.length;f<c;f++){V.isInterleavedBufferAttribute?l=a[f]*V.data.stride+V.offset:l=a[f]*L;for(let d=0;d<L;d++)s[p++]=o[l++]}return new x5(s,L,M)}if(this.index===null)return I1("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new C,r=this.index.array,i=this.attributes;for(let V in i){let a=i[V],o=e(a,r);t.setAttribute(V,o)}let H=this.morphAttributes;for(let V in H){let a=[],o=H[V];for(let L=0,M=o.length;L<M;L++){let s=o[L],l=e(s,r);a.push(l)}t.morphAttributes[V]=a}t.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let V=0,a=n.length;V<a;V++){let o=n[V];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let o in a)a[o]!==void 0&&(e[o]=a[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let r=this.attributes;for(let a in r){let o=r[a];e.data.attributes[a]=o.toJSON(e.data)}let i={},H=!1;for(let a in this.morphAttributes){let o=this.morphAttributes[a],L=[];for(let M=0,s=o.length;M<s;M++){let l=o[M];L.push(l.toJSON(e.data))}L.length>0&&(i[a]=L,H=!0)}H&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));let V=this.boundingSphere;return V!==null&&(e.data.boundingSphere=V.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone());let i=e.attributes;for(let o in i){let L=i[o];this.setAttribute(o,L.clone(t))}let H=e.morphAttributes;for(let o in H){let L=[],M=H[o];for(let s=0,l=M.length;s<l;s++)L.push(M[s].clone(t));this.morphAttributes[o]=L}this.morphTargetsRelative=e.morphTargetsRelative;let n=e.groups;for(let o=0,L=n.length;o<L;o++){let M=n[o];this.addGroup(M.start,M.count,M.materialIndex)}let V=e.boundingBox;V!==null&&(this.boundingBox=V.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var he=new T,Wa=new T,$a=new D1,E5=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let i=he.subVectors(r,t).cross(Wa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){let i=e.delta(he),H=this.normal.dot(i);if(H===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/H;return r===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||$a.getNormalMatrix(e),i=this.coplanarPoint(he).applyMatrix4(e),H=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(H),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qa=0,z0=class extends Y5{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qa++}),this.uuid=p3(),this.name="",this.type="Material",this.blending=s7,this.side=Y0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ze,this.blendDst=Ge,this.blendEquation=d3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U1(0,0,0),this.blendAlpha=0,this.depthFunc=Y3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Z9,this.stencilZFail=Z9,this.stencilZPass=Z9,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){I1(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){I1(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector2&&r&&r.isVector2||i&&i.isEuler&&r&&r.isEuler||i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(H=>H.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(H){let n=[];for(let V in H){let a=H[V];delete a.metadata,n.push(a)}return n}if(t){let H=i(e.textures),n=i(e.images);H.length>0&&(r.textures=H),n.length>0&&(r.images=n)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U1().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new E5().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new g1().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new g1().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let i=t.length;r=new Array(i);for(let H=0;H!==i;++H)r[H]=t[H].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var d0=new T,fe=new T,s9=new T,M9=new T,K7=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,d0)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=d0.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(d0.copy(this.origin).addScaledVector(this.direction,t),d0.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){fe.copy(e).add(t).multiplyScalar(.5),s9.copy(t).sub(e).normalize(),M9.copy(this.origin).sub(fe);let H=e.distanceTo(t)*.5,n=-this.direction.dot(s9),V=M9.dot(this.direction),a=-M9.dot(s9),o=M9.lengthSq(),L=Math.abs(1-n*n),M,s,l,p;if(L>0)if(M=n*a-V,s=n*V-a,p=H*L,M>=0)if(s>=-p)if(s<=p){let f=1/L;M*=f,s*=f,l=M*(M+n*s+2*V)+s*(n*M+s+2*a)+o}else s=H,M=Math.max(0,-(n*s+V)),l=-M*M+s*(s+2*a)+o;else s=-H,M=Math.max(0,-(n*s+V)),l=-M*M+s*(s+2*a)+o;else s<=-p?(M=Math.max(0,-(-n*H+V)),s=M>0?-H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+o):s<=p?(M=0,s=Math.min(Math.max(-H,-a),H),l=s*(s+2*a)+o):(M=Math.max(0,-(n*H+V)),s=M>0?H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+o);else s=n>0?-H:H,M=Math.max(0,-(n*s+V)),l=-M*M+s*(s+2*a)+o;return r&&r.copy(this.origin).addScaledVector(this.direction,M),i&&i.copy(fe).addScaledVector(s9,s),l}intersectSphere(e,t){if(e.radius<0)return null;d0.subVectors(e.center,this.origin);let r=d0.dot(this.direction),i=d0.dot(d0)-r*r,H=e.radius*e.radius;if(i>H)return null;let n=Math.sqrt(H-i),V=r-n,a=r+n;return a<0?null:V<0?this.at(a,t):this.at(V,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,H,n,V,a,o=1/this.direction.x,L=1/this.direction.y,M=1/this.direction.z,s=this.origin;return o>=0?(r=(e.min.x-s.x)*o,i=(e.max.x-s.x)*o):(r=(e.max.x-s.x)*o,i=(e.min.x-s.x)*o),L>=0?(H=(e.min.y-s.y)*L,n=(e.max.y-s.y)*L):(H=(e.max.y-s.y)*L,n=(e.min.y-s.y)*L),r>n||H>i||((H>r||isNaN(r))&&(r=H),(n<i||isNaN(i))&&(i=n),M>=0?(V=(e.min.z-s.z)*M,a=(e.max.z-s.z)*M):(V=(e.max.z-s.z)*M,a=(e.min.z-s.z)*M),r>a||V>i)||((V>r||r!==r)&&(r=V),(a<i||i!==i)&&(i=a),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,d0)!==null}intersectTriangle(e,t,r,i,H){let n=this.origin,V=this.direction,a=V.x,o=V.y,L=V.z,M=e.x-n.x,s=e.y-n.y,l=e.z-n.z,p=t.x-n.x,f=t.y-n.y,c=t.z-n.z,d=r.x-n.x,S=r.y-n.y,_=r.z-n.z,v=Math.abs(a),g=Math.abs(o),Z=Math.abs(L),b,A,x,w,P,F,U,E,k,X,G,r1;if(v>=g&&v>=Z?(x=a,F=M,k=p,r1=d,a>=0?(b=o,A=L,w=s,P=l,U=f,E=c,X=S,G=_):(b=L,A=o,w=l,P=s,U=c,E=f,X=_,G=S)):g>=Z?(x=o,F=s,k=f,r1=S,o>=0?(b=L,A=a,w=l,P=M,U=c,E=p,X=_,G=d):(b=a,A=L,w=M,P=l,U=p,E=c,X=d,G=_)):(x=L,F=l,k=c,r1=_,L>=0?(b=a,A=o,w=M,P=s,U=p,E=f,X=d,G=S):(b=o,A=a,w=s,P=M,U=f,E=p,X=S,G=d)),x===0)return null;let W=b/x,e1=A/x,t1=1/x,Z1=w-W*F,f1=P-e1*F,$1=U-W*k,T1=E-e1*k,z1=X-W*r1,Y=G-e1*r1,j=z1*T1-Y*$1,v1=Z1*Y-f1*z1,F1=$1*f1-T1*Z1;if(i){if(j<0||v1<0||F1<0)return null}else if((j<0||v1<0||F1<0)&&(j>0||v1>0||F1>0))return null;let A1=j+v1+F1;if(A1===0)return null;let N1=t1*(j*F+v1*k+F1*r1);return(A1>0?N1<0:N1>0)?null:this.at(N1/A1,H)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},J7=class extends z0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new U1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S5,this.combine=We,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jC=new s2,L3=new K7,l9=new C7,er=new T,d9=new T,c9=new T,p9=new T,ve=new T,u9=new T,tr=new T,A9=new T,V5=class extends n5{constructor(e=new B5,t=new J7){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){let i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,n=i.length;H<n;H++){let V=i[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[V]=H}}}}getVertexPosition(e,t){let r=this.geometry,i=r.attributes.position,H=r.morphAttributes.position,n=r.morphTargetsRelative;t.fromBufferAttribute(i,e);let V=this.morphTargetInfluences;if(H&&V){u9.set(0,0,0);for(let a=0,o=H.length;a<o;a++){let L=V[a],M=H[a];L!==0&&(ve.fromBufferAttribute(M,e),n?u9.addScaledVector(ve,L):u9.addScaledVector(ve.sub(t),L))}t.add(u9)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let r=this.geometry,i=this.material,H=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),l9.copy(r.boundingSphere),l9.applyMatrix4(H),L3.copy(e.ray).recast(e.near),!(l9.containsPoint(L3.origin)===!1&&(L3.intersectSphere(l9,er)===null||L3.origin.distanceToSquared(er)>(e.far-e.near)**2))&&(jC.copy(H).invert(),L3.copy(e.ray).applyMatrix4(jC),!(r.boundingBox!==null&&L3.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,L3)))}_computeIntersections(e,t,r){let i,H=this.geometry,n=this.material,V=H.index,a=H.attributes.position,o=H.attributes.uv,L=H.attributes.uv1,M=H.attributes.normal,s=H.groups,l=H.drawRange;if(V!==null)if(Array.isArray(n))for(let p=0,f=s.length;p<f;p++){let c=s[p],d=n[c.materialIndex],S=Math.max(c.start,l.start),_=Math.min(V.count,Math.min(c.start+c.count,l.start+l.count));for(let v=S,g=_;v<g;v+=3){let Z=V.getX(v),b=V.getX(v+1),A=V.getX(v+2);i=m9(this,d,e,r,o,L,M,Z,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let p=Math.max(0,l.start),f=Math.min(V.count,l.start+l.count);for(let c=p,d=f;c<d;c+=3){let S=V.getX(c),_=V.getX(c+1),v=V.getX(c+2);i=m9(this,n,e,r,o,L,M,S,_,v),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(n))for(let p=0,f=s.length;p<f;p++){let c=s[p],d=n[c.materialIndex],S=Math.max(c.start,l.start),_=Math.min(a.count,Math.min(c.start+c.count,l.start+l.count));for(let v=S,g=_;v<g;v+=3){let Z=v,b=v+1,A=v+2;i=m9(this,d,e,r,o,L,M,Z,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=c.materialIndex,t.push(i))}}else{let p=Math.max(0,l.start),f=Math.min(a.count,l.start+l.count);for(let c=p,d=f;c<d;c+=3){let S=c,_=c+1,v=c+2;i=m9(this,n,e,r,o,L,M,S,_,v),i&&(i.faceIndex=Math.floor(c/3),t.push(i))}}}};function Xa(C,e,t,r,i,H,n,V){let a;if(e.side===a5?a=r.intersectTriangle(n,H,i,!0,V):a=r.intersectTriangle(i,H,n,e.side===Y0,V),a===null)return null;A9.copy(V),A9.applyMatrix4(C.matrixWorld);let o=t.ray.origin.distanceTo(A9);return o<t.near||o>t.far?null:{distance:o,point:A9.clone(),object:C}}function m9(C,e,t,r,i,H,n,V,a,o){C.getVertexPosition(V,d9),C.getVertexPosition(a,c9),C.getVertexPosition(o,p9);let L=Xa(C,e,t,r,d9,c9,p9,tr);if(L){let M=new T;N0.getBarycoord(tr,d9,c9,p9,M),i&&(L.uv=N0.getInterpolatedAttribute(i,V,a,o,M,new g1)),H&&(L.uv1=N0.getInterpolatedAttribute(H,V,a,o,M,new g1)),n&&(L.normal=N0.getInterpolatedAttribute(n,V,a,o,M,new T),L.normal.dot(r.direction)>0&&L.normal.multiplyScalar(-1));let s={a:V,b:a,c:o,normal:new T,materialIndex:0};N0.getNormal(d9,c9,p9,s.normal),L.face=s,L.barycoord=M}return L}var D9=class extends H5{constructor(e=null,t=1,r=1,i,H,n,V,a,o=U2,L=U2,M,s){super(null,n,V,a,o,L,i,H,M,s),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var s3=new C7,Ya=new g1(.5,.5),h9=new T,r7=class{constructor(e=new E5,t=new E5,r=new E5,i=new E5,H=new E5,n=new E5){this.planes=[e,t,r,i,H,n]}set(e,t,r,i,H,n){let V=this.planes;return V[0].copy(e),V[1].copy(t),V[2].copy(r),V[3].copy(i),V[4].copy(H),V[5].copy(n),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=R5,r=!1){let i=this.planes,H=e.elements,n=H[0],V=H[1],a=H[2],o=H[3],L=H[4],M=H[5],s=H[6],l=H[7],p=H[8],f=H[9],c=H[10],d=H[11],S=H[12],_=H[13],v=H[14],g=H[15];if(i[0].setComponents(o-n,l-L,d-p,g-S).normalize(),i[1].setComponents(o+n,l+L,d+p,g+S).normalize(),i[2].setComponents(o+V,l+M,d+f,g+_).normalize(),i[3].setComponents(o-V,l-M,d-f,g-_).normalize(),r)i[4].setComponents(a,s,c,v).normalize(),i[5].setComponents(o-a,l-s,d-c,g-v).normalize();else if(i[4].setComponents(o-a,l-s,d-c,g-v).normalize(),t===R5)i[5].setComponents(o+a,l+s,d+c,g+v).normalize();else if(t===Q3)i[5].setComponents(a,s,c,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),s3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),s3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(s3)}intersectsSprite(e){s3.center.set(0,0,0);let t=Ya.distanceTo(e.center);return s3.radius=.7071067811865476+t,s3.applyMatrix4(e.matrixWorld),this.intersectsSphere(s3)}intersectsSphere(e){let t=this.planes,r=e.center,i=-e.radius;for(let H=0;H<6;H++)if(t[H].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let i=t[r];if(h9.x=i.normal.x>0?e.max.x:e.min.x,h9.y=i.normal.y>0?e.max.y:e.min.y,h9.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(h9)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var j7=class extends H5{constructor(e=[],t=Q0,r,i,H,n,V,a,o,L){super(e,t,r,i,H,n,V,a,o,L),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},e4=class extends H5{constructor(e,t,r,i,H,n,V,a,o){super(e,t,r,i,H,n,V,a,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var G0=class extends H5{constructor(e,t,r=F5,i,H,n,V=U2,a=U2,o,L=X5,M=1){if(L!==X5&&L!==J0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let s={width:e,height:t,depth:M};super(s,i,H,n,V,a,L,r,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new j3(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},N9=class extends G0{constructor(e,t=F5,r=Q0,i,H,n=U2,V=U2,a,o=X5){let L={width:e,height:e,depth:1},M=[L,L,L,L,L,L];super(e,e,t,r,i,H,n,V,a,o),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},t4=class extends H5{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},W0=class C extends B5{constructor(e=1,t=1,r=1,i=1,H=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:H,depthSegments:n};let V=this;i=Math.floor(i),H=Math.floor(H),n=Math.floor(n);let a=[],o=[],L=[],M=[],s=0,l=0;p("z","y","x",-1,-1,r,t,e,n,H,0),p("z","y","x",1,-1,r,t,-e,n,H,1),p("x","z","y",1,1,e,r,t,i,n,2),p("x","z","y",1,-1,e,r,-t,i,n,3),p("x","y","z",1,-1,e,t,r,i,H,4),p("x","y","z",-1,-1,e,t,-r,i,H,5),this.setIndex(a),this.setAttribute("position",new i5(o,3)),this.setAttribute("normal",new i5(L,3)),this.setAttribute("uv",new i5(M,2));function p(f,c,d,S,_,v,g,Z,b,A,x){let w=v/b,P=g/A,F=v/2,U=g/2,E=Z/2,k=b+1,X=A+1,G=0,r1=0,W=new T;for(let e1=0;e1<X;e1++){let t1=e1*P-U;for(let Z1=0;Z1<k;Z1++){let f1=Z1*w-F;W[f]=f1*S,W[c]=t1*_,W[d]=E,o.push(W.x,W.y,W.z),W[f]=0,W[c]=0,W[d]=Z>0?1:-1,L.push(W.x,W.y,W.z),M.push(Z1/b),M.push(1-e1/A),G+=1}}for(let e1=0;e1<A;e1++)for(let t1=0;t1<b;t1++){let Z1=s+t1+k*e1,f1=s+t1+k*(e1+1),$1=s+(t1+1)+k*(e1+1),T1=s+(t1+1)+k*e1;a.push(Z1,f1,T1),a.push(f1,$1,T1),r1+=6}V.addGroup(l,r1,x),l+=r1,s+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var c5=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){I1("Curve: .getPoint() not implemented.")}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,i=this.getPoint(0),H=0;t.push(0);for(let n=1;n<=e;n++)r=this.getPoint(n/e),H+=r.distanceTo(i),t.push(H),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let r=this.getLengths(),i=0,H=r.length,n;t?n=t:n=e*r[H-1];let V=0,a=H-1,o;for(;V<=a;)if(i=Math.floor(V+(a-V)/2),o=r[i]-n,o<0)V=i+1;else if(o>0)a=i-1;else{a=i;break}if(i=a,r[i]===n)return i/(H-1);let L=r[i],s=r[i+1]-L,l=(n-L)/s;return(i+l)/(H-1)}getTangent(e,t){let i=e-1e-4,H=e+1e-4;i<0&&(i=0),H>1&&(H=1);let n=this.getPoint(i),V=this.getPoint(H),a=t||(n.isVector2?new g1:new T);return a.copy(V).sub(n).normalize(),a}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){let r=new T,i=[],H=[],n=[],V=new T,a=new s2;for(let l=0;l<=e;l++){let p=l/e;i[l]=this.getTangentAt(p,new T)}H[0]=new T,n[0]=new T;let o=Number.MAX_VALUE,L=Math.abs(i[0].x),M=Math.abs(i[0].y),s=Math.abs(i[0].z);L<=o&&(o=L,r.set(1,0,0)),M<=o&&(o=M,r.set(0,1,0)),s<=o&&r.set(0,0,1),V.crossVectors(i[0],r).normalize(),H[0].crossVectors(i[0],V),n[0].crossVectors(i[0],H[0]);for(let l=1;l<=e;l++){if(H[l]=H[l-1].clone(),n[l]=n[l-1].clone(),V.crossVectors(i[l-1],i[l]),V.length()>Number.EPSILON){V.normalize();let p=Math.acos(Y1(i[l-1].dot(i[l]),-1,1));H[l].applyMatrix4(a.makeRotationAxis(V,p))}n[l].crossVectors(i[l],H[l])}if(t===!0){let l=Math.acos(Y1(H[0].dot(H[e]),-1,1));l/=e,i[0].dot(V.crossVectors(H[0],H[e]))>0&&(l=-l);for(let p=1;p<=e;p++)H[p].applyMatrix4(a.makeRotationAxis(i[p],l*p)),n[p].crossVectors(i[p],H[p])}return{tangents:i,normals:H,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},i7=class extends c5{constructor(e=0,t=0,r=1,i=1,H=0,n=Math.PI*2,V=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=H,this.aEndAngle=n,this.aClockwise=V,this.aRotation=a}getPoint(e,t=new g1){let r=t,i=Math.PI*2,H=this.aEndAngle-this.aStartAngle,n=Math.abs(H)<Number.EPSILON;for(;H<0;)H+=i;for(;H>i;)H-=i;H<Number.EPSILON&&(n?H=0:H=i),this.aClockwise===!0&&!n&&(H===i?H=-i:H=H-i);let V=this.aStartAngle+e*H,a=this.aX+this.xRadius*Math.cos(V),o=this.aY+this.yRadius*Math.sin(V);if(this.aRotation!==0){let L=Math.cos(this.aRotation),M=Math.sin(this.aRotation),s=a-this.aX,l=o-this.aY;a=s*L-l*M+this.aX,o=s*M+l*L+this.aY}return r.set(a,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},U9=class extends i7{constructor(e,t,r,i,H,n){super(e,t,r,r,i,H,n),this.isArcCurve=!0,this.type="ArcCurve"}};function Lt(){let C=0,e=0,t=0,r=0;function i(H,n,V,a){C=H,e=V,t=-3*H+3*n-2*V-a,r=2*H-2*n+V+a}return{initCatmullRom:function(H,n,V,a,o){i(n,V,o*(V-H),o*(a-n))},initNonuniformCatmullRom:function(H,n,V,a,o,L,M){let s=(n-H)/o-(V-H)/(o+L)+(V-n)/L,l=(V-n)/L-(a-n)/(L+M)+(a-V)/M;s*=L,l*=L,i(n,V,s,l)},calc:function(H){let n=H*H,V=n*H;return C+e*H+t*n+r*V}}}var Cr=new T,rr=new T,xe=new Lt,Se=new Lt,ge=new Lt,z9=class extends c5{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new T){let r=t,i=this.points,H=i.length,n=(H-(this.closed?0:1))*e,V=Math.floor(n),a=n-V;this.closed?V+=V>0?0:(Math.floor(Math.abs(V)/H)+1)*H:a===0&&V===H-1&&(V=H-2,a=1);let o,L;this.closed||V>0?o=i[(V-1)%H]:(rr.subVectors(i[0],i[1]).add(i[0]),o=rr);let M=i[V%H],s=i[(V+1)%H];if(this.closed||V+2<H?L=i[(V+2)%H]:(Cr.subVectors(i[H-1],i[H-2]).add(i[H-1]),L=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,p=Math.pow(o.distanceToSquared(M),l),f=Math.pow(M.distanceToSquared(s),l),c=Math.pow(s.distanceToSquared(L),l);f<1e-4&&(f=1),p<1e-4&&(p=f),c<1e-4&&(c=f),xe.initNonuniformCatmullRom(o.x,M.x,s.x,L.x,p,f,c),Se.initNonuniformCatmullRom(o.y,M.y,s.y,L.y,p,f,c),ge.initNonuniformCatmullRom(o.z,M.z,s.z,L.z,p,f,c)}else this.curveType==="catmullrom"&&(xe.initCatmullRom(o.x,M.x,s.x,L.x,this.tension),Se.initCatmullRom(o.y,M.y,s.y,L.y,this.tension),ge.initCatmullRom(o.z,M.z,s.z,L.z,this.tension));return r.set(xe.calc(a),Se.calc(a),ge.calc(a)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ir(C,e,t,r,i){let H=(r-e)*.5,n=(i-t)*.5,V=C*C,a=C*V;return(2*t-2*r+H+n)*a+(-3*t+3*r-2*H-n)*V+H*C+t}function Qa(C,e){let t=1-C;return t*t*e}function Ka(C,e){return 2*(1-C)*C*e}function Ja(C,e){return C*C*e}function N7(C,e,t,r){return Qa(C,e)+Ka(C,t)+Ja(C,r)}function ja(C,e){let t=1-C;return t*t*t*e}function eo(C,e){let t=1-C;return 3*t*t*C*e}function to(C,e){return 3*(1-C)*C*C*e}function Co(C,e){return C*C*C*e}function U7(C,e,t,r,i){return ja(C,e)+eo(C,t)+to(C,r)+Co(C,i)}var C4=class extends c5{constructor(e=new g1,t=new g1,r=new g1,i=new g1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new g1){let r=t,i=this.v0,H=this.v1,n=this.v2,V=this.v3;return r.set(U7(e,i.x,H.x,n.x,V.x),U7(e,i.y,H.y,n.y,V.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},G9=class extends c5{constructor(e=new T,t=new T,r=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new T){let r=t,i=this.v0,H=this.v1,n=this.v2,V=this.v3;return r.set(U7(e,i.x,H.x,n.x,V.x),U7(e,i.y,H.y,n.y,V.y),U7(e,i.z,H.z,n.z,V.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},r4=class extends c5{constructor(e=new g1,t=new g1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new g1){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new g1){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},W9=class extends c5{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},i4=class extends c5{constructor(e=new g1,t=new g1,r=new g1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new g1){let r=t,i=this.v0,H=this.v1,n=this.v2;return r.set(N7(e,i.x,H.x,n.x),N7(e,i.y,H.y,n.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$9=class extends c5{constructor(e=new T,t=new T,r=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new T){let r=t,i=this.v0,H=this.v1,n=this.v2;return r.set(N7(e,i.x,H.x,n.x),N7(e,i.y,H.y,n.y),N7(e,i.z,H.z,n.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},H4=class extends c5{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new g1){let r=t,i=this.points,H=(i.length-1)*e,n=Math.floor(H),V=H-n,a=i[n===0?n:n-1],o=i[n],L=i[n>i.length-2?i.length-1:n+1],M=i[n>i.length-3?i.length-1:n+2];return r.set(ir(V,a.x,o.x,L.x,M.x),ir(V,a.y,o.y,L.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let i=e.points[t];this.points.push(new g1().fromArray(i))}return this}},Hr=Object.freeze({__proto__:null,ArcCurve:U9,CatmullRomCurve3:z9,CubicBezierCurve:C4,CubicBezierCurve3:G9,EllipseCurve:i7,LineCurve:r4,LineCurve3:W9,QuadraticBezierCurve:i4,QuadraticBezierCurve3:$9,SplineCurve:H4}),q9=class extends c5{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hr[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),i=this.getCurveLengths(),H=0;for(;H<i.length;){if(i[H]>=r){let n=i[H]-r,V=this.curves[H],a=V.getLength(),o=a===0?0:1-n/a;return V.getPointAt(o,t)}H++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,i=this.curves.length;r<i;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let i=0,H=this.curves;i<H.length;i++){let n=H[i],V=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,a=n.getPoints(V);for(let o=0;o<a.length;o++){let L=a[o];r&&r.equals(L)||(t.push(L),r=L)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let i=e.curves[t];this.curves.push(new Hr[i.type]().fromJSON(i))}return this}},n4=class extends q9{constructor(e){super(),this.type="Path",this.currentPoint=new g1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new r4(this.currentPoint.clone(),new g1(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,i){let H=new i4(this.currentPoint.clone(),new g1(e,t),new g1(r,i));return this.curves.push(H),this.currentPoint.set(r,i),this}bezierCurveTo(e,t,r,i,H,n){let V=new C4(this.currentPoint.clone(),new g1(e,t),new g1(r,i),new g1(H,n));return this.curves.push(V),this.currentPoint.set(H,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new H4(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,i,H,n){let V=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+V,t+a,r,i,H,n),this}absarc(e,t,r,i,H,n){return this.absellipse(e,t,r,r,i,H,n),this}ellipse(e,t,r,i,H,n,V,a){let o=this.currentPoint.x,L=this.currentPoint.y;return this.absellipse(e+o,t+L,r,i,H,n,V,a),this}absellipse(e,t,r,i,H,n,V,a){let o=new i7(e,t,r,i,H,n,V,a);if(this.curves.length>0){let M=o.getPoint(0);M.equals(this.currentPoint)||this.lineTo(M.x,M.y)}this.curves.push(o);let L=o.getPoint(1);return this.currentPoint.copy(L),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},H7=class extends n4{constructor(e){super(e),this.uuid=p3(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,i=this.holes.length;r<i;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let i=e.holes[t];this.holes.push(new n4().fromJSON(i))}return this}};function ro(C,e,t=2){let r=e&&e.length,i=r?e[0]*t:C.length,H=Ci(C,0,i,t,!0),n=[];if(!H||H.next===H.prev)return n;let V,a,o;if(r&&(H=ao(C,e,H,t)),C.length>80*t){V=C[0],a=C[1];let L=V,M=a;for(let s=t;s<i;s+=t){let l=C[s],p=C[s+1];l<V&&(V=l),p<a&&(a=p),l>L&&(L=l),p>M&&(M=p)}o=Math.max(L-V,M-a),o=o!==0?32767/o:0}return V4(H,n,t,V,a,o,0),n}function Ci(C,e,t,r,i){let H;if(i===ho(C,e,t,r)>0)for(let n=e;n<t;n+=r)H=nr(n/r|0,C[n],C[n+1],H);else for(let n=t-r;n>=e;n-=r)H=nr(n/r|0,C[n],C[n+1],H);return H&&n7(H,H.next)&&(o4(H),H=H.next),H}function l3(C,e){if(!C)return C;e||(e=C);let t=C,r;do if(r=!1,!t.steiner&&(n7(t,t.next)||Z2(t.prev,t,t.next)===0)){if(o4(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function V4(C,e,t,r,i,H,n){if(!C)return;!n&&H&&lo(C,r,i,H);let V=C;for(;C.prev!==C.next;){let a=C.prev,o=C.next;if(H?Ho(C,r,i,H):io(C)){e.push(a.i,C.i,o.i),o4(C),C=o.next,V=o.next;continue}if(C=o,C===V){n?n===1?(C=no(l3(C),e),V4(C,e,t,r,i,H,2)):n===2&&Vo(C,e,t,r,i,H):V4(l3(C),e,t,r,i,H,1);break}}}function io(C){let e=C.prev,t=C,r=C.next;if(Z2(e,t,r)>=0)return!1;let i=e.x,H=t.x,n=r.x,V=e.y,a=t.y,o=r.y,L=Math.min(i,H,n),M=Math.min(V,a,o),s=Math.max(i,H,n),l=Math.max(V,a,o),p=r.next;for(;p!==e;){if(p.x>=L&&p.x<=s&&p.y>=M&&p.y<=l&&F7(i,V,H,a,n,o,p.x,p.y)&&Z2(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ho(C,e,t,r){let i=C.prev,H=C,n=C.next;if(Z2(i,H,n)>=0)return!1;let V=i.x,a=H.x,o=n.x,L=i.y,M=H.y,s=n.y,l=Math.min(V,a,o),p=Math.min(L,M,s),f=Math.max(V,a,o),c=Math.max(L,M,s),d=Oe(l,p,e,t,r),S=Oe(f,c,e,t,r),_=C.prevZ,v=C.nextZ;for(;_&&_.z>=d&&v&&v.z<=S;){if(_.x>=l&&_.x<=f&&_.y>=p&&_.y<=c&&_!==i&&_!==n&&F7(V,L,a,M,o,s,_.x,_.y)&&Z2(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=l&&v.x<=f&&v.y>=p&&v.y<=c&&v!==i&&v!==n&&F7(V,L,a,M,o,s,v.x,v.y)&&Z2(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=d;){if(_.x>=l&&_.x<=f&&_.y>=p&&_.y<=c&&_!==i&&_!==n&&F7(V,L,a,M,o,s,_.x,_.y)&&Z2(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=l&&v.x<=f&&v.y>=p&&v.y<=c&&v!==i&&v!==n&&F7(V,L,a,M,o,s,v.x,v.y)&&Z2(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function no(C,e){let t=C;do{let r=t.prev,i=t.next.next;!n7(r,i)&&ii(r,t,t.next,i)&&a4(r,i)&&a4(i,r)&&(e.push(r.i,t.i,i.i),o4(t),o4(t.next),t=C=i),t=t.next}while(t!==C);return l3(t)}function Vo(C,e,t,r,i,H){let n=C;do{let V=n.next.next;for(;V!==n.prev;){if(n.i!==V.i&&uo(n,V)){let a=Hi(n,V);n=l3(n,n.next),a=l3(a,a.next),V4(n,e,t,r,i,H,0),V4(a,e,t,r,i,H,0);return}V=V.next}n=n.next}while(n!==C)}function ao(C,e,t,r){let i=[];for(let H=0,n=e.length;H<n;H++){let V=e[H]*r,a=H<n-1?e[H+1]*r:C.length,o=Ci(C,V,a,r,!1);o===o.next&&(o.steiner=!0),i.push(po(o))}i.sort(oo);for(let H=0;H<i.length;H++)t=Lo(i[H],t);return t}function oo(C,e){let t=C.x-e.x;if(t===0&&(t=C.y-e.y,t===0)){let r=(C.next.y-C.y)/(C.next.x-C.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=r-i}return t}function Lo(C,e){let t=so(C,e);if(!t)return e;let r=Hi(t,C);return l3(r,r.next),l3(t,t.next)}function so(C,e){let t=e,r=C.x,i=C.y,H=-1/0,n;if(n7(C,t))return t;do{if(n7(C,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let M=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(M<=r&&M>H&&(H=M,n=t.x<t.next.x?t:t.next,M===r))return n}t=t.next}while(t!==e);if(!n)return null;let V=n,a=n.x,o=n.y,L=1/0;t=n;do{if(r>=t.x&&t.x>=a&&r!==t.x&&ri(i<o?r:H,i,a,o,i<o?H:r,i,t.x,t.y)){let M=Math.abs(i-t.y)/(r-t.x);a4(t,C)&&(M<L||M===L&&(t.x>n.x||t.x===n.x&&Mo(n,t)))&&(n=t,L=M)}t=t.next}while(t!==V);return n}function Mo(C,e){return Z2(C.prev,C,e.prev)<0&&Z2(e.next,C,C.next)<0}function lo(C,e,t,r){let i=C;do i.z===0&&(i.z=Oe(i.x,i.y,e,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==C);i.prevZ.nextZ=null,i.prevZ=null,co(i)}function co(C){let e,t=1;do{let r=C,i;C=null;let H=null;for(e=0;r;){e++;let n=r,V=0;for(let o=0;o<t&&(V++,n=n.nextZ,!!n);o++);let a=t;for(;V>0||a>0&&n;)V!==0&&(a===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,V--):(i=n,n=n.nextZ,a--),H?H.nextZ=i:C=i,i.prevZ=H,H=i;r=n}H.nextZ=null,t*=2}while(e>1);return C}function Oe(C,e,t,r,i){return C=(C-t)*i|0,e=(e-r)*i|0,C=(C|C<<8)&16711935,C=(C|C<<4)&252645135,C=(C|C<<2)&858993459,C=(C|C<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,C|e<<1}function po(C){let e=C,t=C;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==C);return t}function ri(C,e,t,r,i,H,n,V){return(i-n)*(e-V)>=(C-n)*(H-V)&&(C-n)*(r-V)>=(t-n)*(e-V)&&(t-n)*(H-V)>=(i-n)*(r-V)}function F7(C,e,t,r,i,H,n,V){return!(C===n&&e===V)&&ri(C,e,t,r,i,H,n,V)}function uo(C,e){return C.next.i!==e.i&&C.prev.i!==e.i&&!Ao(C,e)&&(a4(C,e)&&a4(e,C)&&mo(C,e)&&(Z2(C.prev,C,e.prev)||Z2(C,e.prev,e))||n7(C,e)&&Z2(C.prev,C,C.next)>0&&Z2(e.prev,e,e.next)>0)}function Z2(C,e,t){return(e.y-C.y)*(t.x-e.x)-(e.x-C.x)*(t.y-e.y)}function n7(C,e){return C.x===e.x&&C.y===e.y}function ii(C,e,t,r){let i=v9(Z2(C,e,t)),H=v9(Z2(C,e,r)),n=v9(Z2(t,r,C)),V=v9(Z2(t,r,e));return!!(i!==H&&n!==V||i===0&&f9(C,t,e)||H===0&&f9(C,r,e)||n===0&&f9(t,C,r)||V===0&&f9(t,e,r))}function f9(C,e,t){return e.x<=Math.max(C.x,t.x)&&e.x>=Math.min(C.x,t.x)&&e.y<=Math.max(C.y,t.y)&&e.y>=Math.min(C.y,t.y)}function v9(C){return C>0?1:C<0?-1:0}function Ao(C,e){let t=C;do{if(t.i!==C.i&&t.next.i!==C.i&&t.i!==e.i&&t.next.i!==e.i&&ii(t,t.next,C,e))return!0;t=t.next}while(t!==C);return!1}function a4(C,e){return Z2(C.prev,C,C.next)<0?Z2(C,e,C.next)>=0&&Z2(C,C.prev,e)>=0:Z2(C,e,C.prev)<0||Z2(C,C.next,e)<0}function mo(C,e){let t=C,r=!1,i=(C.x+e.x)/2,H=(C.y+e.y)/2;do t.y>H!=t.next.y>H&&t.next.y!==t.y&&i<(t.next.x-t.x)*(H-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==C);return r}function Hi(C,e){let t=Ee(C.i,C.x,C.y),r=Ee(e.i,e.x,e.y),i=C.next,H=e.prev;return C.next=e,e.prev=C,t.next=i,i.prev=t,r.next=t,t.prev=r,H.next=r,r.prev=H,r}function nr(C,e,t,r){let i=Ee(C,e,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function o4(C){C.next.prev=C.prev,C.prev.next=C.next,C.prevZ&&(C.prevZ.nextZ=C.nextZ),C.nextZ&&(C.nextZ.prevZ=C.prevZ)}function Ee(C,e,t){return{i:C,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ho(C,e,t,r){let i=0;for(let H=e,n=t-r;H<t;H+=r)i+=(C[n]-C[H])*(C[H+1]+C[n+1]),n=H;return i}var Re=class{static triangulate(e,t,r=2){return ro(e,t,r)}},X3=class C{static area(e){let t=e.length,r=0;for(let i=t-1,H=0;H<t;i=H++)r+=e[i].x*e[H].y-e[H].x*e[i].y;return r*.5}static isClockWise(e){return C.area(e)<0}static triangulateShape(e,t){let r=[],i=[],H=[];Vr(e),ar(r,e);let n=e.length;t.forEach(Vr);for(let a=0;a<t.length;a++)i.push(n),n+=t[a].length,ar(r,t[a]);let V=Re.triangulate(r,i);for(let a=0;a<V.length;a+=3)H.push(V.slice(a,a+3));return H}};function Vr(C){let e=C.length;e>2&&C[e-1].equals(C[0])&&C.pop()}function ar(C,e){for(let t=0;t<e.length;t++)C.push(e[t].x),C.push(e[t].y)}var L4=class C extends B5{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};let H=e/2,n=t/2,V=Math.floor(r),a=Math.floor(i),o=V+1,L=a+1,M=e/V,s=t/a,l=[],p=[],f=[],c=[];for(let d=0;d<L;d++){let S=d*s-n;for(let _=0;_<o;_++){let v=_*M-H;p.push(v,-S,0),f.push(0,0,1),c.push(_/V),c.push(1-d/a)}}for(let d=0;d<a;d++)for(let S=0;S<V;S++){let _=S+o*d,v=S+o*(d+1),g=S+1+o*(d+1),Z=S+1+o*d;l.push(_,v,Z),l.push(v,g,Z)}this.setIndex(l),this.setAttribute("position",new i5(p,3)),this.setAttribute("normal",new i5(f,3)),this.setAttribute("uv",new i5(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C(e.width,e.height,e.widthSegments,e.heightSegments)}};var s4=class C extends B5{constructor(e=new H7([new g1(0,.5),new g1(-.5,-.5),new g1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let r=[],i=[],H=[],n=[],V=0,a=0;if(Array.isArray(e)===!1)o(e);else for(let L=0;L<e.length;L++)o(e[L]),this.addGroup(V,a,L),V+=a,a=0;this.setIndex(r),this.setAttribute("position",new i5(i,3)),this.setAttribute("normal",new i5(H,3)),this.setAttribute("uv",new i5(n,2));function o(L){let M=i.length/3,s=L.extractPoints(t),l=s.shape,p=s.holes;X3.isClockWise(l)===!1&&(l=l.reverse());for(let c=0,d=p.length;c<d;c++){let S=p[c];X3.isClockWise(S)===!0&&(p[c]=S.reverse())}let f=X3.triangulateShape(l,p);for(let c=0,d=p.length;c<d;c++){let S=p[c];l=l.concat(S)}for(let c=0,d=l.length;c<d;c++){let S=l[c];i.push(S.x,S.y,0),H.push(0,0,1),n.push(S.x,S.y)}for(let c=0,d=f.length;c<d;c++){let S=f[c],_=S[0]+M,v=S[1]+M,g=S[2]+M;r.push(_,v,g),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return fo(t,e)}static fromJSON(e,t){let r=[];for(let i=0,H=e.shapes.length;i<H;i++){let n=t[e.shapes[i]];r.push(n)}return new C(r,e.curveSegments)}};function fo(C,e){if(e.shapes=[],Array.isArray(C))for(let t=0,r=C.length;t<r;t++){let i=C[t];e.shapes.push(i.uuid)}else e.shapes.push(C.uuid);return e}function u3(C){let e={};for(let t in C){e[t]={};for(let r in C[t]){let i=C[t][r];if(or(i))i.isRenderTargetTexture?(I1("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone();else if(Array.isArray(i))if(or(i[0])){let H=[];for(let n=0,V=i.length;n<V;n++)H[n]=i[n].clone();e[t][r]=H}else e[t][r]=i.slice();else e[t][r]=i}}return e}function J2(C){let e={};for(let t=0;t<C.length;t++){let r=u3(C[t]);for(let i in r)e[i]=r[i]}return e}function or(C){return C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)}function vo(C){let e=[];for(let t=0;t<C.length;t++)e.push(C[t].clone());return e}function st(C){let e=C.getRenderTarget();return e===null?C.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:J1.workingColorSpace}var ni={clone:u3,merge:J2},xo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,So=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,p5=class extends z0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xo,this.fragmentShader=So,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=u3(e.uniforms),this.uniformsGroups=vo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let n=this.uniforms[i].value;n&&n.isTexture?t.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[i]={type:"m4",value:n.toArray()}:t.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let r in e.uniforms){let i=e.uniforms[r];switch(this.uniforms[r]={},i.type){case"t":this.uniforms[r].value=t[i.value]||null;break;case"c":this.uniforms[r].value=new U1().setHex(i.value);break;case"v2":this.uniforms[r].value=new g1().fromArray(i.value);break;case"v3":this.uniforms[r].value=new T().fromArray(i.value);break;case"v4":this.uniforms[r].value=new S2().fromArray(i.value);break;case"m3":this.uniforms[r].value=new D1().fromArray(i.value);break;case"m4":this.uniforms[r].value=new s2().fromArray(i.value);break;default:this.uniforms[r].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},X9=class extends p5{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},V7=class extends z0{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new U1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q6,this.normalScale=new g1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S5,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Y9=class extends z0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Q9=class extends z0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function z3(C,e){return!C||C.constructor===e?C:typeof e.BYTES_PER_ELEMENT=="number"?new e(C):Array.prototype.slice.call(C)}function Ze(C){return C!==void 0&&C.inTangents!==void 0&&C.outTangents!==void 0}var $0=class{constructor(e,t,r,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,i=t[r],H=t[r-1];C:{e:{let n;t:{r:if(!(e<i)){for(let V=r+2;;){if(i===void 0){if(e<H)break r;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===V)break;if(H=i,i=t[++r],e<i)break e}n=t.length;break t}if(!(e>=H)){let V=t[1];e<V&&(r=2,H=V);for(let a=r-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===a)break;if(i=H,H=t[--r-1],e>=H)break e}n=r,r=0;break t}break C}for(;r<n;){let V=r+n>>>1;e<t[V]?n=V:r=V+1}if(i=t[r],H=t[r-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,H,i)}return this.interpolate_(r,H,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,H=e*i;for(let n=0;n!==i;++n)t[n]=r[H+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},K9=class extends $0{constructor(e,t,r,i){super(e,t,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:be,endingEnd:be}}intervalChanged_(e,t,r){let i=this.parameterPositions,H=e-2,n=e+1,V=i[H],a=i[n];if(V===void 0)switch(this.getSettings_().endingStart){case we:H=e,V=2*t-r;break;case Te:H=i.length-2,V=t+i[H]-i[H+1];break;default:H=e,V=r}if(a===void 0)switch(this.getSettings_().endingEnd){case we:n=e,a=2*r-t;break;case Te:n=1,a=r+i[1]-i[0];break;default:n=e-1,a=t}let o=(r-t)*.5,L=this.valueSize;this._weightPrev=o/(t-V),this._weightNext=o/(a-r),this._offsetPrev=H*L,this._offsetNext=n*L}interpolate_(e,t,r,i){let H=this.resultBuffer,n=this.sampleValues,V=this.valueSize,a=e*V,o=a-V,L=this._offsetPrev,M=this._offsetNext,s=this._weightPrev,l=this._weightNext,p=(r-t)/(i-t),f=p*p,c=f*p,d=-s*c+2*s*f-s*p,S=(1+s)*c+(-1.5-2*s)*f+(-.5+s)*p+1,_=(-1-l)*c+(1.5+l)*f+.5*p,v=l*c-l*f;for(let g=0;g!==V;++g)H[g]=d*n[L+g]+S*n[o+g]+_*n[a+g]+v*n[M+g];return H}},J9=class extends $0{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let H=this.resultBuffer,n=this.sampleValues,V=this.valueSize,a=e*V,o=a-V,L=(r-t)/(i-t),M=1-L;for(let s=0;s!==V;++s)H[s]=n[o+s]*M+n[a+s]*L;return H}},j9=class extends $0{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e){return this.copySampleValue_(e-1)}},e6=class extends $0{interpolate_(e,t,r,i){let H=this.resultBuffer,n=this.sampleValues,V=this.valueSize,a=e*V,o=a-V,L=this.inTangents,M=this.outTangents;if(!L||!M){let p=(r-t)/(i-t),f=1-p;for(let c=0;c!==V;++c)H[c]=n[o+c]*f+n[a+c]*p;return H}let s=V*2,l=e-1;for(let p=0;p!==V;++p){let f=n[o+p],c=n[a+p],d=l*s+p*2,S=M[d],_=M[d+1],v=e*s+p*2,g=L[v],Z=L[v+1],b=Zo(r,t,S,g,i);H[p]=Vi(b,f,_,Z,c)}return H}};function Vi(C,e,t,r,i){let H=1-C;return H*H*H*e+3*H*H*C*t+3*H*C*C*r+C*C*C*i}function go(C,e,t,r,i){let H=1-C;return 3*H*H*(t-e)+6*H*C*(r-t)+3*C*C*(i-r)}function Zo(C,e,t,r,i){let H=(C-e)/(i-e);for(let n=0;n<8;n++){let V=Vi(H,e,t,r,i)-C;if(Math.abs(V)<1e-10)break;let a=go(H,e,t,r,i);if(Math.abs(a)<1e-10)break;H=Math.max(0,Math.min(1,H-V/a))}return H}var u5=class{constructor(e,t,r,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=z3(t,this.TimeBufferType),this.values=z3(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:z3(e.times,Array),values:z3(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(r.interpolation=i),Ze(e.settings)&&(r.settings={inTangents:z3(e.settings.inTangents,Array),outTangents:z3(e.settings.outTangents,Array)})}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new j9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new J9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new K9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new e6(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case z7:t=this.InterpolantFactoryMethodDiscrete;break;case B9:t=this.InterpolantFactoryMethodLinear;break;case g9:t=this.InterpolantFactoryMethodSmooth;break;case _e:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return I1("KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return z7;case this.InterpolantFactoryMethodLinear:return B9;case this.InterpolantFactoryMethodSmooth:return g9;case this.InterpolantFactoryMethodBezier:return _e}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,i=t.length;r!==i;++r)t[r]*=e;Ze(this.settings)&&(Lr(this.settings.inTangents,e),Lr(this.settings.outTangents,e))}return this}trim(e,t){let r=this.times,i=r.length,H=0,n=i-1;for(;H!==i&&r[H]<e;)++H;for(;n!==-1&&r[n]>t;)--n;if(++n,H!==0||n!==i){H>=n&&(n=Math.max(n,1),H=n-1);let V=this.getValueSize();this.times=r.slice(H,n),this.values=this.values.slice(H*V,n*V)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(k1("KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,i=this.values,H=r.length;H===0&&(k1("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let V=0;V!==H;V++){let a=r[V];if(typeof a=="number"&&isNaN(a)){k1("KeyframeTrack: Time is not a valid number.",this,V,a),e=!1;break}if(n!==null&&n>a){k1("KeyframeTrack: Out of order keys.",this,V,a,n),e=!1;break}n=a}if(i!==void 0&&ca(i))for(let V=0,a=i.length;V!==a;++V){let o=i[V];if(isNaN(o)){k1("KeyframeTrack: Value is not a valid number.",this,V,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===g9,H=e.length-1,n=1;for(let V=1;V<H;++V){let a=!1,o=e[V],L=e[V+1];if(o!==L&&(V!==1||o!==e[0]))if(i)a=!0;else{let M=V*r,s=M-r,l=M+r;for(let p=0;p!==r;++p){let f=t[M+p];if(f!==t[s+p]||f!==t[l+p]){a=!0;break}}}if(a){if(V!==n){e[n]=e[V];let M=V*r,s=n*r;for(let l=0;l!==r;++l)t[s+l]=t[M+l]}++n}}if(H>0){e[n]=e[H];for(let V=H*r,a=n*r,o=0;o!==r;++o)t[a+o]=t[V+o];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,i=new r(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ze(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Lr(C,e){for(let t=0,r=C.length;t!==r;t+=2)C[t]*=e}u5.prototype.ValueTypeName="";u5.prototype.TimeBufferType=Float32Array;u5.prototype.ValueBufferType=Float32Array;u5.prototype.DefaultInterpolation=B9;var q0=class extends u5{constructor(e,t,r){super(e,t,r)}};q0.prototype.ValueTypeName="bool";q0.prototype.ValueBufferType=Array;q0.prototype.DefaultInterpolation=z7;q0.prototype.InterpolantFactoryMethodLinear=void 0;q0.prototype.InterpolantFactoryMethodSmooth=void 0;var t6=class extends u5{constructor(e,t,r,i){super(e,t,r,i)}};t6.prototype.ValueTypeName="color";var C6=class extends u5{constructor(e,t,r,i){super(e,t,r,i)}};C6.prototype.ValueTypeName="number";var r6=class extends $0{constructor(e,t,r,i){super(e,t,r,i)}interpolate_(e,t,r,i){let H=this.resultBuffer,n=this.sampleValues,V=this.valueSize,a=(r-t)/(i-t),o=e*V;for(let L=o+V;o!==L;o+=4)b2.slerpFlat(H,0,n,o-V,n,o,a);return H}},M4=class extends u5{constructor(e,t,r,i){super(e,t,r,i)}InterpolantFactoryMethodLinear(e){return new r6(this.times,this.values,this.getValueSize(),e)}};M4.prototype.ValueTypeName="quaternion";M4.prototype.InterpolantFactoryMethodSmooth=void 0;var X0=class extends u5{constructor(e,t,r){super(e,t,r)}};X0.prototype.ValueTypeName="string";X0.prototype.ValueBufferType=Array;X0.prototype.DefaultInterpolation=z7;X0.prototype.InterpolantFactoryMethodLinear=void 0;X0.prototype.InterpolantFactoryMethodSmooth=void 0;var i6=class extends u5{constructor(e,t,r,i){super(e,t,r,i)}};i6.prototype.ValueTypeName="vector";var H6=class{constructor(e,t,r){let i=this,H=!1,n=0,V=0,a,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(L){V++,H===!1&&i.onStart!==void 0&&i.onStart(L,n,V),H=!0},this.itemEnd=function(L){n++,i.onProgress!==void 0&&i.onProgress(L,n,V),n===V&&(H=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(L){i.onError!==void 0&&i.onError(L)},this.resolveURL=function(L){return L=L.normalize("NFC"),a?a(L):L},this.setURLModifier=function(L){return a=L,this},this.addHandler=function(L,M){return o.push(L,M),this},this.removeHandler=function(L){let M=o.indexOf(L);return M!==-1&&o.splice(M,2),this},this.getHandler=function(L){for(let M=0,s=o.length;M<s;M+=2){let l=o[M],p=o[M+1];if(l.global&&(l.lastIndex=0),l.test(L))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ai=new H6,n6=class{constructor(e){this.manager=e!==void 0?e:ai,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let r=this;return new Promise(function(i,H){r.load(e,i,t,H)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};n6.DEFAULT_MATERIAL_NAME="__DEFAULT";var l4=class extends n5{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new U1(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ye=new s2,sr=new T,Mr=new T,V6=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new g1(512,512),this.mapType=s5,this.map=null,this.mapPass=null,this.matrix=new s2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new r7,this._frameExtents=new g1(1,1),this._viewportCount=1,this._viewports=[new S2(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sr.setFromMatrixPosition(e.matrixWorld),t.position.copy(sr),Mr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mr),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,i){ye.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ye,e.coordinateSystem,e.reversedDepth);let H=this._frameExtents,n=i?i.z/H.x:1,V=i?i.w/H.y:1,a=i?i.x/H.x:0,o=i?i.y/H.y:0;e.coordinateSystem===Q3||e.reversedDepth?t.set(.5*n,0,0,.5*n+a,0,.5*V,0,.5*V+o,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+a,0,.5*V,0,.5*V+o,0,0,.5,.5,0,0,0,1),t.multiply(ye)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},x9=new T,S9=new b2,$5=new T,d4=class extends n5{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new s2,this.projectionMatrix=new s2,this.projectionMatrixInverse=new s2,this.coordinateSystem=R5,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(x9,S9,$5),$5.x===1&&$5.y===1&&$5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(x9,S9,$5.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(x9,S9,$5),$5.x===1&&$5.y===1&&$5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(x9,S9,$5.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},D0=new T,lr=new g1,dr=new g1,K2=class extends d4{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=J3*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(k7*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return J3*2*Math.atan(Math.tan(k7*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){D0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(D0.x,D0.y).multiplyScalar(-e/D0.z),D0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(D0.x,D0.y).multiplyScalar(-e/D0.z)}getViewSize(e,t){return this.getViewBounds(e,lr,dr),t.subVectors(dr,lr)}setViewOffset(e,t,r,i,H,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=H,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(k7*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,H=-.5*i,n=this.view;if(this.view!==null&&this.view.enabled){let a=n.fullWidth,o=n.fullHeight;H+=n.offsetX*i/a,t-=n.offsetY*r/o,i*=n.width/a,r*=n.height/o}let V=this.filmOffset;V!==0&&(H+=e*V/this.getFilmWidth()),this.projectionMatrix.makePerspective(H,H+i,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var a7=class extends d4{constructor(e=-1,t=1,r=1,i=-1,H=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=H,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,H,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=H,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,H=r-e,n=r+e,V=i+t,a=i-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,L=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=o*this.view.offsetX,n=H+o*this.view.width,V-=L*this.view.offsetY,a=V-L*this.view.height}this.projectionMatrix.makeOrthographic(H,n,V,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pe=class extends V6{constructor(){super(new a7(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},o7=class extends l4{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(n5.DEFAULT_UP),this.updateMatrix(),this.target=new n5,this.shadow=new Pe}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},c4=class extends l4{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var G3=-90,W3=1,a6=class extends n5{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new K2(G3,W3,e,t);i.layers=this.layers,this.add(i);let H=new K2(G3,W3,e,t);H.layers=this.layers,this.add(H);let n=new K2(G3,W3,e,t);n.layers=this.layers,this.add(n);let V=new K2(G3,W3,e,t);V.layers=this.layers,this.add(V);let a=new K2(G3,W3,e,t);a.layers=this.layers,this.add(a);let o=new K2(G3,W3,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,i,H,n,V,a]=t;for(let o of t)this.remove(o);if(e===R5)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),V.up.set(0,1,0),V.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===Q3)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),V.up.set(0,-1,0),V.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[H,n,V,a,o,L]=this.children,M=e.getRenderTarget(),s=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let f=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(r,0,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,H),e.setRenderTarget(r,1,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(r,2,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,V),e.setRenderTarget(r,3,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,4,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),r.texture.generateMipmaps=f,e.setRenderTarget(r,5,i),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,L),e.setRenderTarget(M,s,l),e.xr.enabled=p,r.texture.needsPMREMUpdate=!0}},o6=class extends K2{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mt="\\[\\]\\.:\\/",yo=new RegExp("["+Mt+"]","g"),lt="[^"+Mt+"]",_o="[^"+Mt.replace("\\.","")+"]",bo=/((?:WC+[\/:])*)/.source.replace("WC",lt),wo=/(WCOD+)?/.source.replace("WCOD",_o),To=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lt),Oo=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lt),Eo=new RegExp("^"+bo+wo+To+Oo+"$"),Ro=["material","materials","bones","map"],Be=class{constructor(e,t,r){let i=r||h2.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,H=r.length;i!==H;++i)r[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},h2=class C{constructor(e,t,r){this.path=t,this.parsedPath=r||C.parseTrackName(t),this.node=C.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new C.Composite(e,t,r):new C(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yo,"")}static parseTrackName(e){let t=Eo.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=r.nodeName&&r.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let H=r.nodeName.substring(i+1);Ro.indexOf(H)!==-1&&(r.nodeName=r.nodeName.substring(0,i),r.objectName=H)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){let r=function(H){for(let n=0;n<H.length;n++){let V=H[n];if(V.name===t||V.uuid===t)return V;let a=r(V.children);if(a)return a}return null},i=r(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let r=this.resolvedProperty;for(let i=0,H=r.length;i!==H;++i)e[t++]=r[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let r=this.resolvedProperty;for(let i=0,H=r.length;i!==H;++i)r[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let r=this.resolvedProperty;for(let i=0,H=r.length;i!==H;++i)r[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let r=this.resolvedProperty;for(let i=0,H=r.length;i!==H;++i)r[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,r=t.objectName,i=t.propertyName,H=t.propertyIndex;if(e||(e=C.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){I1("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let o=t.objectIndex;switch(r){case"materials":if(!e.material){k1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){k1("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){k1("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let L=0;L<e.length;L++)if(e[L].name===o){o=L;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){k1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){k1("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){k1("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(o!==void 0){if(e[o]===void 0){k1("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let n=e[i];if(n===void 0){let o=t.nodeName;k1("PropertyBinding: Trying to update property for track: "+o+"."+i+" but it wasn't found.",e);return}let V=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?V=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(V=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(H!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){k1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){k1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[H]!==void 0&&(H=e.morphTargetDictionary[H])}a=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=H}else n.fromArray!==void 0&&n.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(a=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][V]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};h2.Composite=Be;h2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};h2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};h2.prototype.GetterByBindingType=[h2.prototype._getValue_direct,h2.prototype._getValue_array,h2.prototype._getValue_arrayElement,h2.prototype._getValue_toArray];h2.prototype.SetterByBindingTypeAndVersioning=[[h2.prototype._setValue_direct,h2.prototype._setValue_direct_setNeedsUpdate,h2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[h2.prototype._setValue_array,h2.prototype._setValue_array_setNeedsUpdate,h2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[h2.prototype._setValue_arrayElement,h2.prototype._setValue_arrayElement_setNeedsUpdate,h2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[h2.prototype._setValue_fromArray,h2.prototype._setValue_fromArray_setNeedsUpdate,h2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cp=new Float32Array(1);var cr=new s2,p4=class{constructor(e,t,r=0,i=1/0){this.ray=new K7(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new e7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):k1("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cr.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cr),this}intersectObject(e,t=!0,r=[]){return Ie(e,this,r,t),r.sort(pr),r}intersectObjects(e,t=!0,r=[]){for(let i=0,H=e.length;i<H;i++)Ie(e[i],this,r,t);return r.sort(pr),r}};function pr(C,e){return C.distance-e.distance}function Ie(C,e,t,r){let i=!0;if(C.layers.test(e.layers)&&C.raycast(e,t)===!1&&(i=!1),i===!0&&r===!0){let H=C.children;for(let n=0,V=H.length;n<V;n++)Ie(H[n],e,t,!0)}}var mt=class mt{constructor(e,t,r,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,i){let H=this.elements;return H[0]=e,H[2]=t,H[1]=r,H[3]=i,this}};mt.prototype.isMatrix2=!0;var Fe=mt;function dt(C,e,t,r){let i=Po(r);switch(t){case it:return C*e;case nt:return C*e/i.components*i.byteLength;case u6:return C*e/i.components*i.byteLength;case j0:return C*e*2/i.components*i.byteLength;case A6:return C*e*2/i.components*i.byteLength;case Ht:return C*e*3/i.components*i.byteLength;case g5:return C*e*4/i.components*i.byteLength;case m6:return C*e*4/i.components*i.byteLength;case h4:case f4:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*8;case v4:case x4:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case f6:case x6:return Math.max(C,16)*Math.max(e,8)/4;case h6:case v6:return Math.max(C,8)*Math.max(e,8)/2;case S6:case g6:case y6:case _6:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*8;case Z6:case S4:case b6:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case w6:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case T6:return Math.floor((C+4)/5)*Math.floor((e+3)/4)*16;case O6:return Math.floor((C+4)/5)*Math.floor((e+4)/5)*16;case E6:return Math.floor((C+5)/6)*Math.floor((e+4)/5)*16;case R6:return Math.floor((C+5)/6)*Math.floor((e+5)/6)*16;case P6:return Math.floor((C+7)/8)*Math.floor((e+4)/5)*16;case B6:return Math.floor((C+7)/8)*Math.floor((e+5)/6)*16;case I6:return Math.floor((C+7)/8)*Math.floor((e+7)/8)*16;case F6:return Math.floor((C+9)/10)*Math.floor((e+4)/5)*16;case k6:return Math.floor((C+9)/10)*Math.floor((e+5)/6)*16;case D6:return Math.floor((C+9)/10)*Math.floor((e+7)/8)*16;case N6:return Math.floor((C+9)/10)*Math.floor((e+9)/10)*16;case U6:return Math.floor((C+11)/12)*Math.floor((e+9)/10)*16;case z6:return Math.floor((C+11)/12)*Math.floor((e+11)/12)*16;case G6:case W6:case $6:return Math.ceil(C/4)*Math.ceil(e/4)*16;case q6:case X6:return Math.ceil(C/4)*Math.ceil(e/4)*8;case g4:case Y6:return Math.ceil(C/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Po(C){switch(C){case s5:case et:return{byteLength:1,components:1};case M7:case tt:case D5:return{byteLength:2,components:1};case c6:case p6:return{byteLength:2,components:4};case F5:case d6:case k5:return{byteLength:4,components:1};case Ct:case rt:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${C}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?I1("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wi(){let C=null,e=!1,t=null,r=null;function i(H,n){r=C.requestAnimationFrame(i),t(H,n)}return{start:function(){e!==!0&&t!==null&&C!==null&&(r=C.requestAnimationFrame(i),e=!0)},stop:function(){C!==null&&C.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(H){t=H},setContext:function(H){C=H}}}function Io(C){let e=new WeakMap;function t(V,a){let o=V.array,L=V.usage,M=o.byteLength,s=C.createBuffer();C.bindBuffer(a,s),C.bufferData(a,o,L),V.onUploadCallback();let l;if(o instanceof Float32Array)l=C.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)l=C.HALF_FLOAT;else if(o instanceof Uint16Array)V.isFloat16BufferAttribute?l=C.HALF_FLOAT:l=C.UNSIGNED_SHORT;else if(o instanceof Int16Array)l=C.SHORT;else if(o instanceof Uint32Array)l=C.UNSIGNED_INT;else if(o instanceof Int32Array)l=C.INT;else if(o instanceof Int8Array)l=C.BYTE;else if(o instanceof Uint8Array)l=C.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)l=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:s,type:l,bytesPerElement:o.BYTES_PER_ELEMENT,version:V.version,size:M}}function r(V,a,o){let L=a.array,M=a.updateRanges;if(C.bindBuffer(o,V),M.length===0)C.bufferSubData(o,0,L);else{M.sort((l,p)=>l.start-p.start);let s=0;for(let l=1;l<M.length;l++){let p=M[s],f=M[l];f.start<=p.start+p.count+1?p.count=Math.max(p.count,f.start+f.count-p.start):(++s,M[s]=f)}M.length=s+1;for(let l=0,p=M.length;l<p;l++){let f=M[l];C.bufferSubData(o,f.start*L.BYTES_PER_ELEMENT,L,f.start,f.count)}a.clearUpdateRanges()}a.onUploadCallback()}function i(V){return V.isInterleavedBufferAttribute&&(V=V.data),e.get(V)}function H(V){V.isInterleavedBufferAttribute&&(V=V.data);let a=e.get(V);a&&(C.deleteBuffer(a.buffer),e.delete(V))}function n(V,a){if(V.isInterleavedBufferAttribute&&(V=V.data),V.isGLBufferAttribute){let L=e.get(V);(!L||L.version<V.version)&&e.set(V,{buffer:V.buffer,type:V.type,bytesPerElement:V.elementSize,version:V.version});return}let o=e.get(V);if(o===void 0)e.set(V,t(V,a));else if(o.version<V.version){if(o.size!==V.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(o.buffer,V,a),o.version=V.version}}return{get:i,remove:H,update:n}}var Fo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ko=`#ifdef USE_ALPHAHASH
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
#endif`,Do=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,No=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Go=`#ifdef USE_AOMAP
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
#endif`,Wo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$o=`#ifdef USE_BATCHING
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
#endif`,qo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ko=`#ifdef USE_IRIDESCENCE
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
#endif`,Jo=`#ifdef USE_BUMPMAP
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
#endif`,jo=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VL=`#define PI 3.141592653589793
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
} // validated`,aL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oL=`vec3 transformedNormal = objectNormal;
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
#endif`,LL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ML=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dL="gl_FragColor = linearToOutputTexel( gl_FragColor );",cL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pL=`#ifdef USE_ENVMAP
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
#endif`,uL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AL=`#ifdef USE_ENVMAP
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
#endif`,mL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hL=`#ifdef USE_ENVMAP
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
#endif`,fL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gL=`#ifdef USE_GRADIENTMAP
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
}`,ZL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_L=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bL=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wL=`#ifdef USE_ENVMAP
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
#endif`,TL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PL=`PhysicalMaterial material;
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
#endif`,BL=`uniform sampler2D dfgLUT;
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
}`,IL=`
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
#endif`,FL=`#if defined( RE_IndirectDiffuse )
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
#endif`,kL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DL=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,NL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$L=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XL=`#if defined( USE_POINTS_UV )
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
#endif`,YL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,es=`#ifdef USE_MORPHTARGETS
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
#endif`,ts=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rs=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,is=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ns=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vs=`#ifdef USE_NORMALMAP
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
#endif`,as=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,os=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ls=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ss=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ms=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ls=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ds=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cs=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ps=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,us=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,As=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ms=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hs=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fs=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vs=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xs=`float getShadowMask() {
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
}`,Ss=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gs=`#ifdef USE_SKINNING
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
#endif`,Zs=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ys=`#ifdef USE_SKINNING
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
#endif`,_s=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bs=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ws=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ts=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Os=`#ifdef USE_TRANSMISSION
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
#endif`,Es=`#ifdef USE_TRANSMISSION
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
#endif`,Rs=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ps=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bs=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Is=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fs=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ks=`uniform sampler2D t2D;
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
}`,Ds=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ns=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Us=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zs=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gs=`#include <common>
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
}`,Ws=`#if DEPTH_PACKING == 3200
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
}`,$s=`#define DISTANCE
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
}`,qs=`#define DISTANCE
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
}`,Xs=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ys=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qs=`uniform float scale;
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
}`,Ks=`uniform vec3 diffuse;
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
}`,Js=`#include <common>
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
}`,js=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define LAMBERT
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
}`,CM=`#define MATCAP
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
}`,rM=`#define MATCAP
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
}`,iM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,nM=`#define PHONG
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
}`,VM=`#define PHONG
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
}`,aM=`#define STANDARD
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
}`,oM=`#define STANDARD
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
}`,LM=`#define TOON
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
}`,sM=`#define TOON
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
}`,MM=`uniform float size;
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
}`,lM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,pM=`uniform float rotation;
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
}`,uM=`uniform vec3 diffuse;
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
}`,X1={alphahash_fragment:Fo,alphahash_pars_fragment:ko,alphamap_fragment:Do,alphamap_pars_fragment:No,alphatest_fragment:Uo,alphatest_pars_fragment:zo,aomap_fragment:Go,aomap_pars_fragment:Wo,batching_pars_vertex:$o,batching_vertex:qo,begin_vertex:Xo,beginnormal_vertex:Yo,bsdfs:Qo,iridescence_fragment:Ko,bumpmap_pars_fragment:Jo,clipping_planes_fragment:jo,clipping_planes_pars_fragment:eL,clipping_planes_pars_vertex:tL,clipping_planes_vertex:CL,color_fragment:rL,color_pars_fragment:iL,color_pars_vertex:HL,color_vertex:nL,common:VL,cube_uv_reflection_fragment:aL,defaultnormal_vertex:oL,displacementmap_pars_vertex:LL,displacementmap_vertex:sL,emissivemap_fragment:ML,emissivemap_pars_fragment:lL,colorspace_fragment:dL,colorspace_pars_fragment:cL,envmap_fragment:pL,envmap_common_pars_fragment:uL,envmap_pars_fragment:AL,envmap_pars_vertex:mL,envmap_physical_pars_fragment:wL,envmap_vertex:hL,fog_vertex:fL,fog_pars_vertex:vL,fog_fragment:xL,fog_pars_fragment:SL,gradientmap_pars_fragment:gL,lightmap_pars_fragment:ZL,lights_lambert_fragment:yL,lights_lambert_pars_fragment:_L,lights_pars_begin:bL,lights_toon_fragment:TL,lights_toon_pars_fragment:OL,lights_phong_fragment:EL,lights_phong_pars_fragment:RL,lights_physical_fragment:PL,lights_physical_pars_fragment:BL,lights_fragment_begin:IL,lights_fragment_maps:FL,lights_fragment_end:kL,lightprobes_pars_fragment:DL,logdepthbuf_fragment:NL,logdepthbuf_pars_fragment:UL,logdepthbuf_pars_vertex:zL,logdepthbuf_vertex:GL,map_fragment:WL,map_pars_fragment:$L,map_particle_fragment:qL,map_particle_pars_fragment:XL,metalnessmap_fragment:YL,metalnessmap_pars_fragment:QL,morphinstance_vertex:KL,morphcolor_vertex:JL,morphnormal_vertex:jL,morphtarget_pars_vertex:es,morphtarget_vertex:ts,normal_fragment_begin:Cs,normal_fragment_maps:rs,normal_pars_fragment:is,normal_pars_vertex:Hs,normal_vertex:ns,normalmap_pars_fragment:Vs,clearcoat_normal_fragment_begin:as,clearcoat_normal_fragment_maps:os,clearcoat_pars_fragment:Ls,iridescence_pars_fragment:ss,opaque_fragment:Ms,packing:ls,premultiplied_alpha_fragment:ds,project_vertex:cs,dithering_fragment:ps,dithering_pars_fragment:us,roughnessmap_fragment:As,roughnessmap_pars_fragment:ms,shadowmap_pars_fragment:hs,shadowmap_pars_vertex:fs,shadowmap_vertex:vs,shadowmask_pars_fragment:xs,skinbase_vertex:Ss,skinning_pars_vertex:gs,skinning_vertex:Zs,skinnormal_vertex:ys,specularmap_fragment:_s,specularmap_pars_fragment:bs,tonemapping_fragment:ws,tonemapping_pars_fragment:Ts,transmission_fragment:Os,transmission_pars_fragment:Es,uv_pars_fragment:Rs,uv_pars_vertex:Ps,uv_vertex:Bs,worldpos_vertex:Is,background_vert:Fs,background_frag:ks,backgroundCube_vert:Ds,backgroundCube_frag:Ns,cube_vert:Us,cube_frag:zs,depth_vert:Gs,depth_frag:Ws,distance_vert:$s,distance_frag:qs,equirect_vert:Xs,equirect_frag:Ys,linedashed_vert:Qs,linedashed_frag:Ks,meshbasic_vert:Js,meshbasic_frag:js,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:CM,meshmatcap_frag:rM,meshnormal_vert:iM,meshnormal_frag:HM,meshphong_vert:nM,meshphong_frag:VM,meshphysical_vert:aM,meshphysical_frag:oM,meshtoon_vert:LM,meshtoon_frag:sM,points_vert:MM,points_frag:lM,shadow_vert:dM,shadow_frag:cM,sprite_vert:pM,sprite_frag:uM},c1={common:{diffuse:{value:new U1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new D1},alphaMap:{value:null},alphaMapTransform:{value:new D1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new D1}},envmap:{envMap:{value:null},envMapRotation:{value:new D1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new D1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new D1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new D1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new D1},normalScale:{value:new g1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new D1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new D1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new D1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new D1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new U1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new D1},alphaTest:{value:0},uvTransform:{value:new D1}},sprite:{diffuse:{value:new U1(16777215)},opacity:{value:1},center:{value:new g1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new D1},alphaMap:{value:null},alphaMapTransform:{value:new D1},alphaTest:{value:0}}},j5={basic:{uniforms:J2([c1.common,c1.specularmap,c1.envmap,c1.aomap,c1.lightmap,c1.fog]),vertexShader:X1.meshbasic_vert,fragmentShader:X1.meshbasic_frag},lambert:{uniforms:J2([c1.common,c1.specularmap,c1.envmap,c1.aomap,c1.lightmap,c1.emissivemap,c1.bumpmap,c1.normalmap,c1.displacementmap,c1.fog,c1.lights,{emissive:{value:new U1(0)},envMapIntensity:{value:1}}]),vertexShader:X1.meshlambert_vert,fragmentShader:X1.meshlambert_frag},phong:{uniforms:J2([c1.common,c1.specularmap,c1.envmap,c1.aomap,c1.lightmap,c1.emissivemap,c1.bumpmap,c1.normalmap,c1.displacementmap,c1.fog,c1.lights,{emissive:{value:new U1(0)},specular:{value:new U1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X1.meshphong_vert,fragmentShader:X1.meshphong_frag},standard:{uniforms:J2([c1.common,c1.envmap,c1.aomap,c1.lightmap,c1.emissivemap,c1.bumpmap,c1.normalmap,c1.displacementmap,c1.roughnessmap,c1.metalnessmap,c1.fog,c1.lights,{emissive:{value:new U1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X1.meshphysical_vert,fragmentShader:X1.meshphysical_frag},toon:{uniforms:J2([c1.common,c1.aomap,c1.lightmap,c1.emissivemap,c1.bumpmap,c1.normalmap,c1.displacementmap,c1.gradientmap,c1.fog,c1.lights,{emissive:{value:new U1(0)}}]),vertexShader:X1.meshtoon_vert,fragmentShader:X1.meshtoon_frag},matcap:{uniforms:J2([c1.common,c1.bumpmap,c1.normalmap,c1.displacementmap,c1.fog,{matcap:{value:null}}]),vertexShader:X1.meshmatcap_vert,fragmentShader:X1.meshmatcap_frag},points:{uniforms:J2([c1.points,c1.fog]),vertexShader:X1.points_vert,fragmentShader:X1.points_frag},dashed:{uniforms:J2([c1.common,c1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X1.linedashed_vert,fragmentShader:X1.linedashed_frag},depth:{uniforms:J2([c1.common,c1.displacementmap]),vertexShader:X1.depth_vert,fragmentShader:X1.depth_frag},normal:{uniforms:J2([c1.common,c1.bumpmap,c1.normalmap,c1.displacementmap,{opacity:{value:1}}]),vertexShader:X1.meshnormal_vert,fragmentShader:X1.meshnormal_frag},sprite:{uniforms:J2([c1.sprite,c1.fog]),vertexShader:X1.sprite_vert,fragmentShader:X1.sprite_frag},background:{uniforms:{uvTransform:{value:new D1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X1.background_vert,fragmentShader:X1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new D1}},vertexShader:X1.backgroundCube_vert,fragmentShader:X1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X1.cube_vert,fragmentShader:X1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X1.equirect_vert,fragmentShader:X1.equirect_frag},distance:{uniforms:J2([c1.common,c1.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X1.distance_vert,fragmentShader:X1.distance_frag},shadow:{uniforms:J2([c1.lights,c1.fog,{color:{value:new U1(0)},opacity:{value:1}}]),vertexShader:X1.shadow_vert,fragmentShader:X1.shadow_frag}};j5.physical={uniforms:J2([j5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new D1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new D1},clearcoatNormalScale:{value:new g1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new D1},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new D1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new D1},sheen:{value:0},sheenColor:{value:new U1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new D1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new D1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new D1},transmissionSamplerSize:{value:new g1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new D1},attenuationDistance:{value:0},attenuationColor:{value:new U1(0)},specularColor:{value:new U1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new D1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new D1},anisotropyVector:{value:new g1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new D1}}]),vertexShader:X1.meshphysical_vert,fragmentShader:X1.meshphysical_frag};var e8={r:0,b:0,g:0},AM=new s2,Ti=new D1;Ti.set(-1,0,0,0,1,0,0,0,1);function mM(C,e,t,r,i,H){let n=new U1(0),V=i===!0?0:1,a,o,L=null,M=0,s=null;function l(S){let _=S.isScene===!0?S.background:null;if(_&&_.isTexture){let v=S.backgroundBlurriness>0;_=e.get(_,v)}return _}function p(S){let _=!1,v=l(S);v===null?c(n,V):v&&v.isColor&&(c(v,1),_=!0);let g=C.xr.getEnvironmentBlendMode();g==="additive"?t.buffers.color.setClear(0,0,0,1,H):g==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,H),(C.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil))}function f(S,_){let v=l(_);v&&(v.isCubeTexture||v.mapping===A4)?(o===void 0&&(o=new V5(new W0(1,1,1),new p5({name:"BackgroundCubeMaterial",uniforms:u3(j5.backgroundCube.uniforms),vertexShader:j5.backgroundCube.vertexShader,fragmentShader:j5.backgroundCube.fragmentShader,side:a5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(g,Z,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(o)),o.material.uniforms.envMap.value=v,o.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Ti),o.material.toneMapped=J1.getTransfer(v.colorSpace)!==V2,(L!==v||M!==v.version||s!==C.toneMapping)&&(o.material.needsUpdate=!0,L=v,M=v.version,s=C.toneMapping),o.layers.enableAll(),S.unshift(o,o.geometry,o.material,0,0,null)):v&&v.isTexture&&(a===void 0&&(a=new V5(new L4(2,2),new p5({name:"BackgroundMaterial",uniforms:u3(j5.background.uniforms),vertexShader:j5.background.vertexShader,fragmentShader:j5.background.fragmentShader,side:Y0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(a)),a.material.uniforms.t2D.value=v,a.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,a.material.toneMapped=J1.getTransfer(v.colorSpace)!==V2,v.matrixAutoUpdate===!0&&v.updateMatrix(),a.material.uniforms.uvTransform.value.copy(v.matrix),(L!==v||M!==v.version||s!==C.toneMapping)&&(a.material.needsUpdate=!0,L=v,M=v.version,s=C.toneMapping),a.layers.enableAll(),S.unshift(a,a.geometry,a.material,0,0,null))}function c(S,_){S.getRGB(e8,st(C)),t.buffers.color.setClear(e8.r,e8.g,e8.b,_,H)}function d(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return n},setClearColor:function(S,_=1){n.set(S),V=_,c(n,V)},getClearAlpha:function(){return V},setClearAlpha:function(S){V=S,c(n,V)},render:p,addToRenderList:f,dispose:d}}function hM(C,e){let t=C.getParameter(C.MAX_VERTEX_ATTRIBS),r={},i=s(null),H=i,n=!1;function V(P,F,U,E,k){let X=!1,G=M(P,E,U,F);H!==G&&(H=G,o(H.object)),X=l(P,E,U,k),X&&p(P,E,U,k),k!==null&&e.update(k,C.ELEMENT_ARRAY_BUFFER),(X||n)&&(n=!1,v(P,F,U,E),k!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function a(){return C.createVertexArray()}function o(P){return C.bindVertexArray(P)}function L(P){return C.deleteVertexArray(P)}function M(P,F,U,E){let k=E.wireframe===!0,X=r[F.id];X===void 0&&(X={},r[F.id]=X);let G=P.isInstancedMesh===!0?P.id:0,r1=X[G];r1===void 0&&(r1={},X[G]=r1);let W=r1[U.id];W===void 0&&(W={},r1[U.id]=W);let e1=W[k];return e1===void 0&&(e1=s(a()),W[k]=e1),e1}function s(P){let F=[],U=[],E=[];for(let k=0;k<t;k++)F[k]=0,U[k]=0,E[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:E,object:P,attributes:{},index:null}}function l(P,F,U,E){let k=H.attributes,X=F.attributes,G=0,r1=U.getAttributes();for(let W in r1)if(r1[W].location>=0){let t1=k[W],Z1=X[W];if(Z1===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(Z1=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(Z1=P.instanceColor)),t1===void 0||t1.attribute!==Z1||Z1&&t1.data!==Z1.data)return!0;G++}return H.attributesNum!==G||H.index!==E}function p(P,F,U,E){let k={},X=F.attributes,G=0,r1=U.getAttributes();for(let W in r1)if(r1[W].location>=0){let t1=X[W];t1===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(t1=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(t1=P.instanceColor));let Z1={};Z1.attribute=t1,t1&&t1.data&&(Z1.data=t1.data),k[W]=Z1,G++}H.attributes=k,H.attributesNum=G,H.index=E}function f(){let P=H.newAttributes;for(let F=0,U=P.length;F<U;F++)P[F]=0}function c(P){d(P,0)}function d(P,F){let U=H.newAttributes,E=H.enabledAttributes,k=H.attributeDivisors;U[P]=1,E[P]===0&&(C.enableVertexAttribArray(P),E[P]=1),k[P]!==F&&(C.vertexAttribDivisor(P,F),k[P]=F)}function S(){let P=H.newAttributes,F=H.enabledAttributes;for(let U=0,E=F.length;U<E;U++)F[U]!==P[U]&&(C.disableVertexAttribArray(U),F[U]=0)}function _(P,F,U,E,k,X,G){G===!0?C.vertexAttribIPointer(P,F,U,k,X):C.vertexAttribPointer(P,F,U,E,k,X)}function v(P,F,U,E){f();let k=E.attributes,X=U.getAttributes(),G=F.defaultAttributeValues;for(let r1 in X){let W=X[r1];if(W.location>=0){let e1=k[r1];if(e1===void 0&&(r1==="instanceMatrix"&&P.instanceMatrix&&(e1=P.instanceMatrix),r1==="instanceColor"&&P.instanceColor&&(e1=P.instanceColor)),e1!==void 0){let t1=e1.normalized,Z1=e1.itemSize,f1=e.get(e1);if(f1===void 0)continue;let $1=f1.buffer,T1=f1.type,z1=f1.bytesPerElement,Y=T1===C.INT||T1===C.UNSIGNED_INT||e1.gpuType===d6;if(e1.isInterleavedBufferAttribute){let j=e1.data,v1=j.stride,F1=e1.offset;if(j.isInstancedInterleavedBuffer){for(let A1=0;A1<W.locationSize;A1++)d(W.location+A1,j.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let A1=0;A1<W.locationSize;A1++)c(W.location+A1);C.bindBuffer(C.ARRAY_BUFFER,$1);for(let A1=0;A1<W.locationSize;A1++)_(W.location+A1,Z1/W.locationSize,T1,t1,v1*z1,(F1+Z1/W.locationSize*A1)*z1,Y)}else{if(e1.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)d(W.location+j,e1.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=e1.meshPerAttribute*e1.count)}else for(let j=0;j<W.locationSize;j++)c(W.location+j);C.bindBuffer(C.ARRAY_BUFFER,$1);for(let j=0;j<W.locationSize;j++)_(W.location+j,Z1/W.locationSize,T1,t1,Z1*z1,Z1/W.locationSize*j*z1,Y)}}else if(G!==void 0){let t1=G[r1];if(t1!==void 0)switch(t1.length){case 2:C.vertexAttrib2fv(W.location,t1);break;case 3:C.vertexAttrib3fv(W.location,t1);break;case 4:C.vertexAttrib4fv(W.location,t1);break;default:C.vertexAttrib1fv(W.location,t1)}}}}S()}function g(){x();for(let P in r){let F=r[P];for(let U in F){let E=F[U];for(let k in E){let X=E[k];for(let G in X)L(X[G].object),delete X[G];delete E[k]}}delete r[P]}}function Z(P){if(r[P.id]===void 0)return;let F=r[P.id];for(let U in F){let E=F[U];for(let k in E){let X=E[k];for(let G in X)L(X[G].object),delete X[G];delete E[k]}}delete r[P.id]}function b(P){for(let F in r){let U=r[F];for(let E in U){let k=U[E];if(k[P.id]===void 0)continue;let X=k[P.id];for(let G in X)L(X[G].object),delete X[G];delete k[P.id]}}}function A(P){for(let F in r){let U=r[F],E=P.isInstancedMesh===!0?P.id:0,k=U[E];if(k!==void 0){for(let X in k){let G=k[X];for(let r1 in G)L(G[r1].object),delete G[r1];delete k[X]}delete U[E],Object.keys(U).length===0&&delete r[F]}}}function x(){w(),n=!0,H!==i&&(H=i,o(H.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:V,reset:x,resetDefaultState:w,dispose:g,releaseStatesOfGeometry:Z,releaseStatesOfObject:A,releaseStatesOfProgram:b,initAttributes:f,enableAttribute:c,disableUnusedAttributes:S}}function fM(C,e,t){let r;function i(a){r=a}function H(a,o){C.drawArrays(r,a,o),t.update(o,r,1)}function n(a,o,L){L!==0&&(C.drawArraysInstanced(r,a,o,L),t.update(o,r,L))}function V(a,o,L){if(L===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,a,0,o,0,L);let s=0;for(let l=0;l<L;l++)s+=o[l];t.update(s,r,1)}this.setMode=i,this.render=H,this.renderInstances=n,this.renderMultiDraw=V}function vM(C,e,t,r){let i;function H(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=C.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(b){return!(b!==g5&&r.convert(b)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT))}function V(b){let A=b===D5&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==s5&&b!==k5&&!A&&r.convert(b)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE))}function a(b){if(b==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",L=a(o);L!==o&&(I1("WebGLRenderer:",o,"not supported, using",L,"instead."),o=L);let M=t.logarithmicDepthBuffer===!0,s=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&s===!1&&I1("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let l=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),p=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=C.getParameter(C.MAX_TEXTURE_SIZE),c=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),d=C.getParameter(C.MAX_VERTEX_ATTRIBS),S=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),_=C.getParameter(C.MAX_VARYING_VECTORS),v=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),g=C.getParameter(C.MAX_SAMPLES),Z=C.getParameter(C.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:a,textureFormatReadable:n,textureTypeReadable:V,precision:o,logarithmicDepthBuffer:M,reversedDepthBuffer:s,maxTextures:l,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:c,maxAttributes:d,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,maxSamples:g,samples:Z}}function xM(C){let e=this,t=null,r=0,i=!1,H=!1,n=new E5,V=new D1,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(M,s){let l=M.length!==0||s||r!==0||i;return i=s,r=M.length,l},this.beginShadows=function(){H=!0,L(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(M,s){t=L(M,s,0)},this.setState=function(M,s,l){let p=M.clippingPlanes,f=M.clipIntersection,c=M.clipShadows,d=C.get(M);if(!i||p===null||p.length===0||H&&!c)H?L(null):o();else{let S=H?0:r,_=S*4,v=d.clippingState||null;a.value=v,v=L(p,s,_,l);for(let g=0;g!==_;++g)v[g]=t[g];d.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=S}};function o(){a.value!==t&&(a.value=t,a.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function L(M,s,l,p){let f=M!==null?M.length:0,c=null;if(f!==0){if(c=a.value,p!==!0||c===null){let d=l+f*4,S=s.matrixWorldInverse;V.getNormalMatrix(S),(c===null||c.length<d)&&(c=new Float32Array(d));for(let _=0,v=l;_!==f;++_,v+=4)n.copy(M[_]).applyMatrix4(S,V),n.normal.toArray(c,v),c[v+3]=n.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,c}}var c7=4,SM=6,gM=20,ZM=256,Z4=new a7,oi=new U1,ht=null,ft=0,vt=0,xt=!1,yM=new T,A3=new T,C8=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,i=100,H={}){let{size:n=256,position:V=yM}=H;ht=this._renderer.getRenderTarget(),ft=this._renderer.getActiveCubeFace(),vt=this._renderer.getActiveMipmapLevel(),xt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a,V),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=si(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ht,ft,vt),this._renderer.xr.enabled=xt,e.scissorTest=!1,d7(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Q0||e.mapping===c3?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ht=this._renderer.getRenderTarget(),ft=this._renderer.getActiveCubeFace(),vt=this._renderer.getActiveMipmapLevel(),xt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:W2,minFilter:W2,generateMipmaps:!1,type:D5,format:g5,colorSpace:G7,depthBuffer:!1},i=Li(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Li(e,t,r);let{_lodMax:H}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_M(H)),this._blurMaterial=wM(H,e,t),this._ggxMaterial=bM(H,e,t)}return i}_compileMaterial(e){let t=new V5(new B5,e);this._renderer.compile(t,Z4)}_sceneToCubeUV(e,t,r,i,H){let a=new K2(90,1,t,r),o=[1,-1,1,1,1,1],L=[1,1,1,-1,-1,-1],M=this._renderer,s=M.autoClear,l=M.toneMapping;M.getClearColor(oi),M.toneMapping=I5,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(i),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V5(new W0,new J7({name:"PMREM.Background",side:a5,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,c=f.material,d=!1,S=e.background;S?S.isColor&&(c.color.copy(S),e.background=null,d=!0):(c.color.copy(oi),d=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(a.up.set(0,o[_],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x+L[_],H.y,H.z)):v===1?(a.up.set(0,0,o[_]),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y+L[_],H.z)):(a.up.set(0,o[_],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y,H.z+L[_]));let g=this._cubeSize;d7(i,v*g,_>2?g:0,g,g),M.setRenderTarget(i),d&&M.render(f,a),M.render(e,a)}M.toneMapping=l,M.autoClear=s,e.background=S}_textureToCubeUV(e,t){let r=this._renderer,i=e.mapping===Q0||e.mapping===c3;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=si());let H=i?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=H;let V=H.uniforms;V.envMap.value=e;let a=this._cubeSize;d7(t,0,0,3*a,2*a),r.setRenderTarget(t),r.render(n,Z4)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let H=1;H<i;H++)this._applyGGXFilter(e,H-1,H);t.autoClear=r}_applyGGXFilter(e,t,r){let i=this._renderer,H=this._pingPongRenderTarget,n=this._ggxMaterial,V=this._lodMeshes[r];V.material=n;let a=n.uniforms,o=r/(this._lodMeshes.length-1),L=t/(this._lodMeshes.length-1),M=Math.sqrt(o*o-L*L),s=o*1.25,l=M*s,{_lodMax:p}=this,f=this._sizeLods[r],c=3*f*(r>p-c7?r-p+c7:0),d=4*(this._cubeSize-f);a.envMap.value=e.texture,a.roughness.value=l,a.mipInt.value=p-t,d7(H,c,d,3*f,2*f),i.setRenderTarget(H),i.render(V,Z4),a.envMap.value=H.texture,a.roughness.value=0,a.mipInt.value=p-r,d7(e,c,d,3*f,2*f),i.setRenderTarget(e),i.render(V,Z4)}_blur(e,t,r,i){let H=this._pingPongRenderTarget,n=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,H,t,r,n),this._blurPass(H,e,r,r,n)}_blurPass(e,t,r,i,H){let n=this._renderer,V=this._blurMaterial,a=this._lodMeshes[i];a.material=V;let o=V.uniforms;o.envMap.value=e.texture,o.sigma.value=H,o.mipInt.value=this._lodMax-r;let L=this._sizeLods[i],M=3*L*(i>this._lodMax-c7?i-this._lodMax+c7:0),s=4*(this._cubeSize-L);d7(t,M,s,3*L,2*L),n.setRenderTarget(t),n.render(a,Z4)}};function _M(C){let e=[],t=[],r=C,i=C-c7+1+SM;for(let H=0;H<i;H++){let n=Math.pow(2,r);e.push(n);let V=1/(n-2),a=-V,o=1+V,L=[a,a,o,a,o,o,a,a,o,o,a,o],M=6,s=6,l=3,p=new Float32Array(l*s*M),f=new Float32Array(l*s*M);for(let d=0;d<M;d++){let S=d%3*2/3-1,_=d>2?0:-1,v=[S,_,0,S+2/3,_,0,S+2/3,_+1,0,S,_,0,S+2/3,_+1,0,S,_+1,0];p.set(v,l*s*d);for(let g=0;g<s;g++){let Z=L[g*2]*2-1,b=L[g*2+1]*2-1;d===0?A3.set(1,b,Z):d===1?A3.set(-Z,1,-b):d===2?A3.set(-Z,b,1):d===3?A3.set(-1,b,-Z):d===4?A3.set(-Z,-1,b):A3.set(Z,b,-1),A3.toArray(f,(d*s+g)*l)}}let c=new B5;c.setAttribute("position",new x5(p,l)),c.setAttribute("outputDirection",new x5(f,l)),t.push(new V5(c,null)),r>c7&&r--}return{lodMeshes:t,sizeLods:e}}function Li(C,e,t){let r=new L5(C,e,t);return r.texture.mapping=A4,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function d7(C,e,t,r,i){C.viewport.set(e,t,r,i),C.scissor.set(e,t,r,i)}function bM(C,e,t){return new p5({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:H8(),fragmentShader:`

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
		`,blending:K5,depthTest:!1,depthWrite:!1})}function wM(C,e,t){return new p5({name:"SphericalGaussianBlur",defines:{SAMPLES:gM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:H8(),fragmentShader:`

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
		`,blending:K5,depthTest:!1,depthWrite:!1})}function si(){return new p5({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:H8(),fragmentShader:`

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
		`,blending:K5,depthTest:!1,depthWrite:!1})}function Mi(){return new p5({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:H8(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:K5,depthTest:!1,depthWrite:!1})}function H8(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var r8=class extends L5{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new j7(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new W0(5,5,5),H=new p5({name:"CubemapFromEquirect",uniforms:u3(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:a5,blending:K5});H.uniforms.tEquirect.value=t;let n=new V5(i,H),V=t.minFilter;return t.minFilter===K0&&(t.minFilter=W2),new a6(1,10,this).update(e,n),t.minFilter=V,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,r=!0,i=!0){let H=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,r,i);e.setRenderTarget(H)}};function TM(C){let e=new WeakMap,t=new WeakMap,r=null;function i(s,l=!1){return s==null?null:l?n(s):H(s)}function H(s){if(s&&s.isTexture){let l=s.mapping;if(l===s6||l===M6)if(e.has(s)){let p=e.get(s).texture;return V(p,s.mapping)}else{let p=s.image;if(p&&p.height>0){let f=new r8(p.height);return f.fromEquirectangularTexture(C,s),e.set(s,f),s.addEventListener("dispose",o),V(f.texture,s.mapping)}else return null}}return s}function n(s){if(s&&s.isTexture){let l=s.mapping,p=l===s6||l===M6,f=l===Q0||l===c3;if(p||f){let c=t.get(s),d=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return r===null&&(r=new C8(C)),c=p?r.fromEquirectangular(s,c):r.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),c.texture;if(c!==void 0)return c.texture;{let S=s.image;return p&&S&&S.height>0||f&&S&&a(S)?(r===null&&(r=new C8(C)),c=p?r.fromEquirectangular(s):r.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),s.addEventListener("dispose",L),c.texture):null}}}return s}function V(s,l){return l===s6?s.mapping=Q0:l===M6&&(s.mapping=c3),s}function a(s){let l=0,p=6;for(let f=0;f<p;f++)s[f]!==void 0&&l++;return l===p}function o(s){let l=s.target;l.removeEventListener("dispose",o);let p=e.get(l);p!==void 0&&(e.delete(l),p.dispose())}function L(s){let l=s.target;l.removeEventListener("dispose",L);let p=t.get(l);p!==void 0&&(t.delete(l),p.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:M}}function OM(C){let e={};function t(r){if(e[r]!==void 0)return e[r];let i=C.getExtension(r);return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){let i=t(r);return i===null&&M3("WebGLRenderer: "+r+" extension not supported."),i}}}function EM(C,e,t,r){let i={},H=new WeakMap;function n(M){let s=M.target;s.index!==null&&e.remove(s.index);for(let p in s.attributes)e.remove(s.attributes[p]);s.removeEventListener("dispose",n),delete i[s.id];let l=H.get(s);l&&(e.remove(l),H.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,t.memory.geometries--}function V(M,s){return i[s.id]===!0||(s.addEventListener("dispose",n),i[s.id]=!0,t.memory.geometries++),s}function a(M){let s=M.attributes;for(let l in s)e.update(s[l],C.ARRAY_BUFFER)}function o(M){let s=[],l=M.index,p=M.attributes.position,f=0;if(p===void 0)return;if(l!==null){let S=l.array;f=l.version;for(let _=0,v=S.length;_<v;_+=3){let g=S[_+0],Z=S[_+1],b=S[_+2];s.push(g,Z,Z,b,b,g)}}else{let S=p.array;f=p.version;for(let _=0,v=S.length/3-1;_<v;_+=3){let g=_+0,Z=_+1,b=_+2;s.push(g,Z,Z,b,b,g)}}let c=new(p.count>=65535?Q7:Y7)(s,1);c.version=f;let d=H.get(M);d&&e.remove(d),H.set(M,c)}function L(M){let s=H.get(M);if(s){let l=M.index;l!==null&&s.version<l.version&&o(M)}else o(M);return H.get(M)}return{get:V,update:a,getWireframeAttribute:L}}function RM(C,e,t){let r;function i(M){r=M}let H,n;function V(M){H=M.type,n=M.bytesPerElement}function a(M,s){C.drawElements(r,s,H,M*n),t.update(s,r,1)}function o(M,s,l){l!==0&&(C.drawElementsInstanced(r,s,H,M*n,l),t.update(s,r,l))}function L(M,s,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,s,0,H,M,0,l);let f=0;for(let c=0;c<l;c++)f+=s[c];t.update(f,r,1)}this.setMode=i,this.setIndex=V,this.render=a,this.renderInstances=o,this.renderMultiDraw=L}function PM(C){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(H,n,V){switch(t.calls++,n){case C.TRIANGLES:t.triangles+=V*(H/3);break;case C.LINES:t.lines+=V*(H/2);break;case C.LINE_STRIP:t.lines+=V*(H-1);break;case C.LINE_LOOP:t.lines+=V*H;break;case C.POINTS:t.points+=V*H;break;default:k1("WebGLInfo: Unknown draw mode:",n);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function BM(C,e,t){let r=new WeakMap,i=new S2;function H(n,V,a){let o=n.morphTargetInfluences,L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,M=L!==void 0?L.length:0,s=r.get(V);if(s===void 0||s.count!==M){let x=function(){b.dispose(),r.delete(V),V.removeEventListener("dispose",x)};s!==void 0&&s.texture.dispose();let l=V.morphAttributes.position!==void 0,p=V.morphAttributes.normal!==void 0,f=V.morphAttributes.color!==void 0,c=V.morphAttributes.position||[],d=V.morphAttributes.normal||[],S=V.morphAttributes.color||[],_=0;l===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let v=V.attributes.position.count*_,g=1;v>e.maxTextureSize&&(g=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let Z=new Float32Array(v*g*4*M),b=new q7(Z,v,g,M);b.type=k5,b.needsUpdate=!0;let A=_*4;for(let w=0;w<M;w++){let P=c[w],F=d[w],U=S[w],E=v*g*4*w;for(let k=0;k<P.count;k++){let X=k*A;l===!0&&(i.fromBufferAttribute(P,k),Z[E+X+0]=i.x,Z[E+X+1]=i.y,Z[E+X+2]=i.z,Z[E+X+3]=0),p===!0&&(i.fromBufferAttribute(F,k),Z[E+X+4]=i.x,Z[E+X+5]=i.y,Z[E+X+6]=i.z,Z[E+X+7]=0),f===!0&&(i.fromBufferAttribute(U,k),Z[E+X+8]=i.x,Z[E+X+9]=i.y,Z[E+X+10]=i.z,Z[E+X+11]=U.itemSize===4?i.w:1)}}s={count:M,texture:b,size:new g1(v,g)},r.set(V,s),V.addEventListener("dispose",x)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)a.getUniforms().setValue(C,"morphTexture",n.morphTexture,t);else{let l=0;for(let f=0;f<o.length;f++)l+=o[f];let p=V.morphTargetsRelative?1:1-l;a.getUniforms().setValue(C,"morphTargetBaseInfluence",p),a.getUniforms().setValue(C,"morphTargetInfluences",o)}a.getUniforms().setValue(C,"morphTargetsTexture",s.texture,t),a.getUniforms().setValue(C,"morphTargetsTextureSize",s.size)}return{update:H}}function IM(C,e,t,r,i){let H=new WeakMap;function n(o){let L=i.render.frame,M=o.geometry,s=e.get(o,M);if(H.get(s)!==L&&(e.update(s),H.set(s,L)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),H.get(o)!==L&&(t.update(o.instanceMatrix,C.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,C.ARRAY_BUFFER),H.set(o,L))),o.isSkinnedMesh){let l=o.skeleton;H.get(l)!==L&&(l.update(),H.set(l,L))}return s}function V(){H=new WeakMap}function a(o){let L=o.target;L.removeEventListener("dispose",a),r.releaseStatesOfObject(L),t.remove(L.instanceMatrix),L.instanceColor!==null&&t.remove(L.instanceColor)}return{update:n,dispose:V}}var FM={[$e]:"LINEAR_TONE_MAPPING",[qe]:"REINHARD_TONE_MAPPING",[Xe]:"CINEON_TONE_MAPPING",[Ye]:"ACES_FILMIC_TONE_MAPPING",[Ke]:"AGX_TONE_MAPPING",[Je]:"NEUTRAL_TONE_MAPPING",[Qe]:"CUSTOM_TONE_MAPPING"};function kM(C,e,t,r,i,H){let n=new L5(e,t,{type:C,depthBuffer:i,stencilBuffer:H,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),V=null,a=null,o=new B5;o.setAttribute("position",new i5([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new i5([0,2,0,0,2,0],2));let L=new X9({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),M=new V5(o,L),s=new a7(-1,1,1,-1,0,1),l=null,p=null,f=!1,c,d=null,S=[],_=!1;this.setSize=function(v,g){n.setSize(v,g),V!==null&&V.setSize(v,g),a!==null&&a.setSize(v,g);for(let Z=0;Z<S.length;Z++){let b=S[Z];b.setSize&&b.setSize(v,g)}},this.setEffects=function(v){S=v,_=S.length>0&&S[0].isRenderPass===!0;let g=n.width,Z=n.height;S.length>0&&V===null&&(V=new L5(g,Z,{type:D5,depthBuffer:!1,stencilBuffer:!1}),a=new L5(g,Z,{type:D5,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<S.length;b++){let A=S[b];A.setSize&&A.setSize(g,Z)}},this.begin=function(v,g){if(f||v.toneMapping===I5&&S.length===0)return!1;if(d=g,g!==null){let Z=g.width,b=g.height;(n.width!==Z||n.height!==b)&&this.setSize(Z,b)}return _===!1&&v.setRenderTarget(n),c=v.toneMapping,v.toneMapping=I5,!0},this.hasRenderPass=function(){return _},this.end=function(v,g){v.toneMapping=c,f=!0;let Z=n,b=V;for(let A=0;A<S.length;A++){let x=S[A];x.enabled!==!1&&(x.render(v,b,Z,g),x.needsSwap!==!1&&(Z=b,b=b===V?a:V))}if(l!==v.outputColorSpace||p!==v.toneMapping){l=v.outputColorSpace,p=v.toneMapping,L.defines={},J1.getTransfer(l)===V2&&(L.defines.SRGB_TRANSFER="");let A=FM[p];A&&(L.defines[A]=""),L.needsUpdate=!0}L.uniforms.tDiffuse.value=Z.texture,v.setRenderTarget(d),v.render(M,s),d=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){n.dispose(),V!==null&&V.dispose(),a!==null&&a.dispose(),o.dispose(),L.dispose()}}var Oi=new H5,Zt=new G0(1,1),Ei=new q7,Ri=new k9,Pi=new j7,li=[],di=[],ci=new Float32Array(16),pi=new Float32Array(9),ui=new Float32Array(4);function u7(C,e,t){let r=C[0];if(r<=0||r>0)return C;let i=e*t,H=li[i];if(H===void 0&&(H=new Float32Array(i),li[i]=H),e!==0){r.toArray(H,0);for(let n=1,V=0;n!==e;++n)V+=t,C[n].toArray(H,V)}return H}function P2(C,e){if(C.length!==e.length)return!1;for(let t=0,r=C.length;t<r;t++)if(C[t]!==e[t])return!1;return!0}function B2(C,e){for(let t=0,r=e.length;t<r;t++)C[t]=e[t]}function n8(C,e){let t=di[e];t===void 0&&(t=new Int32Array(e),di[e]=t);for(let r=0;r!==e;++r)t[r]=C.allocateTextureUnit();return t}function DM(C,e){let t=this.cache;t[0]!==e&&(C.uniform1f(this.addr,e),t[0]=e)}function NM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(P2(t,e))return;C.uniform2fv(this.addr,e),B2(t,e)}}function UM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(C.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(P2(t,e))return;C.uniform3fv(this.addr,e),B2(t,e)}}function zM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(P2(t,e))return;C.uniform4fv(this.addr,e),B2(t,e)}}function GM(C,e){let t=this.cache,r=e.elements;if(r===void 0){if(P2(t,e))return;C.uniformMatrix2fv(this.addr,!1,e),B2(t,e)}else{if(P2(t,r))return;ui.set(r),C.uniformMatrix2fv(this.addr,!1,ui),B2(t,r)}}function WM(C,e){let t=this.cache,r=e.elements;if(r===void 0){if(P2(t,e))return;C.uniformMatrix3fv(this.addr,!1,e),B2(t,e)}else{if(P2(t,r))return;pi.set(r),C.uniformMatrix3fv(this.addr,!1,pi),B2(t,r)}}function $M(C,e){let t=this.cache,r=e.elements;if(r===void 0){if(P2(t,e))return;C.uniformMatrix4fv(this.addr,!1,e),B2(t,e)}else{if(P2(t,r))return;ci.set(r),C.uniformMatrix4fv(this.addr,!1,ci),B2(t,r)}}function qM(C,e){let t=this.cache;t[0]!==e&&(C.uniform1i(this.addr,e),t[0]=e)}function XM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(P2(t,e))return;C.uniform2iv(this.addr,e),B2(t,e)}}function YM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(P2(t,e))return;C.uniform3iv(this.addr,e),B2(t,e)}}function QM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(P2(t,e))return;C.uniform4iv(this.addr,e),B2(t,e)}}function KM(C,e){let t=this.cache;t[0]!==e&&(C.uniform1ui(this.addr,e),t[0]=e)}function JM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(P2(t,e))return;C.uniform2uiv(this.addr,e),B2(t,e)}}function jM(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(P2(t,e))return;C.uniform3uiv(this.addr,e),B2(t,e)}}function el(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(P2(t,e))return;C.uniform4uiv(this.addr,e),B2(t,e)}}function tl(C,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(C.uniform1i(this.addr,i),r[0]=i);let H;this.type===C.SAMPLER_2D_SHADOW?(Zt.compareFunction=t.isReversedDepthBuffer()?J6:K6,H=Zt):H=Oi,t.setTexture2D(e||H,i)}function Cl(C,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(C.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||Ri,i)}function rl(C,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(C.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||Pi,i)}function il(C,e,t){let r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(C.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||Ei,i)}function Hl(C){switch(C){case 5126:return DM;case 35664:return NM;case 35665:return UM;case 35666:return zM;case 35674:return GM;case 35675:return WM;case 35676:return $M;case 5124:case 35670:return qM;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return QM;case 5125:return KM;case 36294:return JM;case 36295:return jM;case 36296:return el;case 35678:case 36198:case 36298:case 36306:case 35682:return tl;case 35679:case 36299:case 36307:return Cl;case 35680:case 36300:case 36308:case 36293:return rl;case 36289:case 36303:case 36311:case 36292:return il}}function nl(C,e){C.uniform1fv(this.addr,e)}function Vl(C,e){let t=u7(e,this.size,2);C.uniform2fv(this.addr,t)}function al(C,e){let t=u7(e,this.size,3);C.uniform3fv(this.addr,t)}function ol(C,e){let t=u7(e,this.size,4);C.uniform4fv(this.addr,t)}function Ll(C,e){let t=u7(e,this.size,4);C.uniformMatrix2fv(this.addr,!1,t)}function sl(C,e){let t=u7(e,this.size,9);C.uniformMatrix3fv(this.addr,!1,t)}function Ml(C,e){let t=u7(e,this.size,16);C.uniformMatrix4fv(this.addr,!1,t)}function ll(C,e){C.uniform1iv(this.addr,e)}function dl(C,e){C.uniform2iv(this.addr,e)}function cl(C,e){C.uniform3iv(this.addr,e)}function pl(C,e){C.uniform4iv(this.addr,e)}function ul(C,e){C.uniform1uiv(this.addr,e)}function Al(C,e){C.uniform2uiv(this.addr,e)}function ml(C,e){C.uniform3uiv(this.addr,e)}function hl(C,e){C.uniform4uiv(this.addr,e)}function fl(C,e,t){let r=this.cache,i=e.length,H=n8(t,i);P2(r,H)||(C.uniform1iv(this.addr,H),B2(r,H));let n;this.type===C.SAMPLER_2D_SHADOW?n=Zt:n=Oi;for(let V=0;V!==i;++V)t.setTexture2D(e[V]||n,H[V])}function vl(C,e,t){let r=this.cache,i=e.length,H=n8(t,i);P2(r,H)||(C.uniform1iv(this.addr,H),B2(r,H));for(let n=0;n!==i;++n)t.setTexture3D(e[n]||Ri,H[n])}function xl(C,e,t){let r=this.cache,i=e.length,H=n8(t,i);P2(r,H)||(C.uniform1iv(this.addr,H),B2(r,H));for(let n=0;n!==i;++n)t.setTextureCube(e[n]||Pi,H[n])}function Sl(C,e,t){let r=this.cache,i=e.length,H=n8(t,i);P2(r,H)||(C.uniform1iv(this.addr,H),B2(r,H));for(let n=0;n!==i;++n)t.setTexture2DArray(e[n]||Ei,H[n])}function gl(C){switch(C){case 5126:return nl;case 35664:return Vl;case 35665:return al;case 35666:return ol;case 35674:return Ll;case 35675:return sl;case 35676:return Ml;case 5124:case 35670:return ll;case 35667:case 35671:return dl;case 35668:case 35672:return cl;case 35669:case 35673:return pl;case 5125:return ul;case 36294:return Al;case 36295:return ml;case 36296:return hl;case 35678:case 36198:case 36298:case 36306:case 35682:return fl;case 35679:case 36299:case 36307:return vl;case 35680:case 36300:case 36308:case 36293:return xl;case 36289:case 36303:case 36311:case 36292:return Sl}}var yt=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Hl(t.type)}},_t=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gl(t.type)}},bt=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let i=this.seq;for(let H=0,n=i.length;H!==n;++H){let V=i[H];V.setValue(e,t[V.id],r)}}},St=/(\w+)(\])?(\[|\.)?/g;function Ai(C,e){C.seq.push(e),C.map[e.id]=e}function Zl(C,e,t){let r=C.name,i=r.length;for(St.lastIndex=0;;){let H=St.exec(r),n=St.lastIndex,V=H[1],a=H[2]==="]",o=H[3];if(a&&(V=V|0),o===void 0||o==="["&&n+2===i){Ai(t,o===void 0?new yt(V,C,e):new _t(V,C,e));break}else{let M=t.map[V];M===void 0&&(M=new bt(V),Ai(t,M)),t=M}}}var p7=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){let V=e.getActiveUniform(t,n),a=e.getUniformLocation(t,V.name);Zl(V,a,this)}let i=[],H=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(n):H.push(n);i.length>0&&(this.seq=i.concat(H))}setValue(e,t,r,i){let H=this.map[t];H!==void 0&&H.setValue(e,r,i)}setOptional(e,t,r){let i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let H=0,n=t.length;H!==n;++H){let V=t[H],a=r[V.id];a.needsUpdate!==!1&&V.setValue(e,a.value,i)}}static seqWithValue(e,t){let r=[];for(let i=0,H=e.length;i!==H;++i){let n=e[i];n.id in t&&r.push(n)}return r}};function mi(C,e,t){let r=C.createShader(e);return C.shaderSource(r,t),C.compileShader(r),r}var yl=37297,_l=0;function bl(C,e){let t=C.split(`
`),r=[],i=Math.max(e-6,0),H=Math.min(e+6,t.length);for(let n=i;n<H;n++){let V=n+1;r.push(`${V===e?">":" "} ${V}: ${t[n]}`)}return r.join(`
`)}var hi=new D1;function wl(C){J1._getMatrix(hi,J1.workingColorSpace,C);let e=`mat3( ${hi.elements.map(t=>t.toFixed(4))} )`;switch(J1.getTransfer(C)){case W7:return[e,"LinearTransferOETF"];case V2:return[e,"sRGBTransferOETF"];default:return I1("WebGLProgram: Unsupported color space: ",C),[e,"LinearTransferOETF"]}}function fi(C,e,t){let r=C.getShaderParameter(e,C.COMPILE_STATUS),H=(C.getShaderInfoLog(e)||"").trim();if(r&&H==="")return"";let n=/ERROR: 0:(\d+)/.exec(H);if(n){let V=parseInt(n[1]);return t.toUpperCase()+`

`+H+`

`+bl(C.getShaderSource(e),V)}else return H}function Tl(C,e){let t=wl(e);return[`vec4 ${C}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ol={[$e]:"Linear",[qe]:"Reinhard",[Xe]:"Cineon",[Ye]:"ACESFilmic",[Ke]:"AgX",[Je]:"Neutral",[Qe]:"Custom"};function El(C,e){let t=Ol[e];return t===void 0?(I1("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+C+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+C+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var t8=new T;function Rl(){J1.getLuminanceCoefficients(t8);let C=t8.x.toFixed(4),e=t8.y.toFixed(4),t=t8.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${C}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pl(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_4).join(`
`)}function Bl(C){let e=[];for(let t in C){let r=C[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Il(C,e){let t={},r=C.getProgramParameter(e,C.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let H=C.getActiveAttrib(e,i),n=H.name,V=1;H.type===C.FLOAT_MAT2&&(V=2),H.type===C.FLOAT_MAT3&&(V=3),H.type===C.FLOAT_MAT4&&(V=4),t[n]={type:H.type,location:C.getAttribLocation(e,n),locationSize:V}}return t}function _4(C){return C!==""}function vi(C,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return C.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xi(C,e){return C.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fl=/^[ \t]*#include +<([\w\d./]+)>/gm;function wt(C){return C.replace(Fl,Dl)}var kl=new Map;function Dl(C,e){let t=X1[e];if(t===void 0){let r=kl.get(e);if(r!==void 0)t=X1[r],I1('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wt(t)}var Nl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Si(C){return C.replace(Nl,Ul)}function Ul(C,e,t,r){let i="";for(let H=parseInt(e);H<parseInt(t);H++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return i}function gi(C){let e=`precision ${C.precision} float;
	precision ${C.precision} int;
	precision ${C.precision} sampler2D;
	precision ${C.precision} samplerCube;
	precision ${C.precision} sampler3D;
	precision ${C.precision} sampler2DArray;
	precision ${C.precision} sampler2DShadow;
	precision ${C.precision} samplerCubeShadow;
	precision ${C.precision} sampler2DArrayShadow;
	precision ${C.precision} isampler2D;
	precision ${C.precision} isampler3D;
	precision ${C.precision} isamplerCube;
	precision ${C.precision} isampler2DArray;
	precision ${C.precision} usampler2D;
	precision ${C.precision} usampler3D;
	precision ${C.precision} usamplerCube;
	precision ${C.precision} usampler2DArray;
	`;return C.precision==="highp"?e+=`
#define HIGH_PRECISION`:C.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var zl={[u4]:"SHADOWMAP_TYPE_PCF",[L7]:"SHADOWMAP_TYPE_VSM"};function Gl(C){return zl[C.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wl={[Q0]:"ENVMAP_TYPE_CUBE",[c3]:"ENVMAP_TYPE_CUBE",[A4]:"ENVMAP_TYPE_CUBE_UV"};function $l(C){return C.envMap===!1?"ENVMAP_TYPE_CUBE":Wl[C.envMapMode]||"ENVMAP_TYPE_CUBE"}var ql={[c3]:"ENVMAP_MODE_REFRACTION"};function Xl(C){return C.envMap===!1?"ENVMAP_MODE_REFLECTION":ql[C.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yl={[We]:"ENVMAP_BLENDING_MULTIPLY",[Fr]:"ENVMAP_BLENDING_MIX",[kr]:"ENVMAP_BLENDING_ADD"};function Ql(C){return C.envMap===!1?"ENVMAP_BLENDING_NONE":Yl[C.combine]||"ENVMAP_BLENDING_NONE"}function Kl(C){let e=C.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Jl(C,e,t,r){let i=C.getContext(),H=t.defines,n=t.vertexShader,V=t.fragmentShader,a=Gl(t),o=$l(t),L=Xl(t),M=Ql(t),s=Kl(t),l=Pl(t),p=Bl(H),f=i.createProgram(),c,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_4).join(`
`),c.length>0&&(c+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_4).join(`
`),d.length>0&&(d+=`
`)):(c=[gi(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+L:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_4).join(`
`),d=[gi(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+L:"",t.envMap?"#define "+M:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==I5?"#define TONE_MAPPING":"",t.toneMapping!==I5?X1.tonemapping_pars_fragment:"",t.toneMapping!==I5?El("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",X1.colorspace_pars_fragment,Tl("linearToOutputTexel",t.outputColorSpace),Rl(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_4).join(`
`)),n=wt(n),n=vi(n,t),n=xi(n,t),V=wt(V),V=vi(V,t),V=xi(V,t),n=Si(n),V=Si(V),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,c=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,d=["#define varying in",t.glslVersion===Vt?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=S+c+n,v=S+d+V,g=mi(i,i.VERTEX_SHADER,_),Z=mi(i,i.FRAGMENT_SHADER,v);i.attachShader(f,g),i.attachShader(f,Z),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function b(P){if(C.debug.checkShaderErrors){let F=i.getProgramInfoLog(f)||"",U=i.getShaderInfoLog(g)||"",E=i.getShaderInfoLog(Z)||"",k=F.trim(),X=U.trim(),G=E.trim(),r1=!0,W=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(r1=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(i,f,g,Z);else{let e1=fi(i,g,"vertex"),t1=fi(i,Z,"fragment");k1("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+e1+`
`+t1)}else k!==""?I1("WebGLProgram: Program Info Log:",k):(X===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:r1,programLog:k,vertexShader:{log:X,prefix:c},fragmentShader:{log:G,prefix:d}})}i.deleteShader(g),i.deleteShader(Z),A=new p7(i,f),x=Il(i,f)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(f,yl)),w},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_l++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=g,this.fragmentShader=Z,this}var jl=0,Tt=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(r)===!1&&(i.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Ot(e),t.set(e,r)),r}},Ot=class{constructor(e){this.id=jl++,this.code=e,this.usedTimes=0}};function ed(C){return C===j0||C===S4||C===g4}function td(C,e,t,r,i,H){let n=new e7,V=new Tt,a=new Set,o=[],L=new Map,M=r.logarithmicDepthBuffer,s=r.precision,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(A){return a.add(A),A===0?"uv":`uv${A}`}function f(A,x,w,P,F,U){let E=P.fog,k=F.geometry,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?P.environment:null,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,r1=e.get(A.envMap||X,G),W=r1&&r1.mapping===A4?r1.image.height:null,e1=l[A.type];A.precision!==null&&(s=r.getMaxPrecision(A.precision),s!==A.precision&&I1("WebGLProgram.getParameters:",A.precision,"not supported, using",s,"instead."));let t1=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Z1=t1!==void 0?t1.length:0,f1=0;k.morphAttributes.position!==void 0&&(f1=1),k.morphAttributes.normal!==void 0&&(f1=2),k.morphAttributes.color!==void 0&&(f1=3);let $1,T1,z1,Y;if(e1){let c2=j5[e1];$1=c2.vertexShader,T1=c2.fragmentShader}else{$1=A.vertexShader,T1=A.fragmentShader;let c2=V.getVertexShaderStage(A),H2=V.getFragmentShaderStage(A);V.update(A,c2,H2),z1=c2.id,Y=H2.id}let j=C.getRenderTarget(),v1=C.state.buffers.depth.getReversed(),F1=F.isInstancedMesh===!0,A1=F.isBatchedMesh===!0,N1=!!A.map,l2=!!A.matcap,W1=!!r1,r2=!!A.aoMap,d2=!!A.lightMap,K1=!!A.bumpMap&&A.wireframe===!1,x2=!!A.normalMap,D2=!!A.displacementMap,o5=!!A.emissiveMap,g2=!!A.metalnessMap,T2=!!A.roughnessMap,B=A.anisotropy>0,$2=A.clearcoat>0,o2=A.dispersion>0,y=A.retroreflectivity>0,u=A.iridescence>0,I=A.sheen>0,z=A.transmission>0,Q=B&&!!A.anisotropyMap,n1=$2&&!!A.clearcoatMap,a1=$2&&!!A.clearcoatNormalMap,K=$2&&!!A.clearcoatRoughnessMap,C1=u&&!!A.iridescenceMap,o1=u&&!!A.iridescenceThicknessMap,O1=I&&!!A.sheenColorMap,d1=I&&!!A.sheenRoughnessMap,L1=!!A.specularMap,E1=!!A.specularColorMap,B1=!!A.specularIntensityMap,G1=z&&!!A.transmissionMap,R=z&&!!A.thicknessMap,s1=!!A.gradientMap,J=!!A.alphaMap,M1=A.alphaTest>0,m1=!!A.alphaHash,i1=!!A.extensions,P1=I5;A.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(P1=C.toneMapping);let b1={shaderID:e1,shaderType:A.type,shaderName:A.name,vertexShader:$1,fragmentShader:T1,defines:A.defines,customVertexShaderID:z1,customFragmentShaderID:Y,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:s,batching:A1,batchingColor:A1&&F._colorsTexture!==null,instancing:F1,instancingColor:F1&&F.instanceColor!==null,instancingMorph:F1&&F.morphTexture!==null,outputColorSpace:j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:J1.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:N1,matcap:l2,envMap:W1,envMapMode:W1&&r1.mapping,envMapCubeUVHeight:W,aoMap:r2,lightMap:d2,bumpMap:K1,normalMap:x2,displacementMap:D2,emissiveMap:o5,normalMapObjectSpace:x2&&A.normalMapType===Ur,normalMapTangentSpace:x2&&A.normalMapType===Q6,packedNormalMap:x2&&A.normalMapType===Q6&&ed(A.normalMap.format),metalnessMap:g2,roughnessMap:T2,anisotropy:B,anisotropyMap:Q,clearcoat:$2,clearcoatMap:n1,clearcoatNormalMap:a1,clearcoatRoughnessMap:K,dispersion:o2,retroreflection:y,iridescence:u,iridescenceMap:C1,iridescenceThicknessMap:o1,sheen:I,sheenColorMap:O1,sheenRoughnessMap:d1,specularMap:L1,specularColorMap:E1,specularIntensityMap:B1,transmission:z,transmissionMap:G1,thicknessMap:R,gradientMap:s1,opaque:A.transparent===!1&&A.blending===s7&&A.alphaToCoverage===!1,alphaMap:J,alphaTest:M1,alphaHash:m1,combine:A.combine,mapUv:N1&&p(A.map.channel),aoMapUv:r2&&p(A.aoMap.channel),lightMapUv:d2&&p(A.lightMap.channel),bumpMapUv:K1&&p(A.bumpMap.channel),normalMapUv:x2&&p(A.normalMap.channel),displacementMapUv:D2&&p(A.displacementMap.channel),emissiveMapUv:o5&&p(A.emissiveMap.channel),metalnessMapUv:g2&&p(A.metalnessMap.channel),roughnessMapUv:T2&&p(A.roughnessMap.channel),anisotropyMapUv:Q&&p(A.anisotropyMap.channel),clearcoatMapUv:n1&&p(A.clearcoatMap.channel),clearcoatNormalMapUv:a1&&p(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(A.clearcoatRoughnessMap.channel),iridescenceMapUv:C1&&p(A.iridescenceMap.channel),iridescenceThicknessMapUv:o1&&p(A.iridescenceThicknessMap.channel),sheenColorMapUv:O1&&p(A.sheenColorMap.channel),sheenRoughnessMapUv:d1&&p(A.sheenRoughnessMap.channel),specularMapUv:L1&&p(A.specularMap.channel),specularColorMapUv:E1&&p(A.specularColorMap.channel),specularIntensityMapUv:B1&&p(A.specularIntensityMap.channel),transmissionMapUv:G1&&p(A.transmissionMap.channel),thicknessMapUv:R&&p(A.thicknessMap.channel),alphaMapUv:J&&p(A.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(x2||B),vertexNormals:!!k.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(N1||J),fog:!!E,useFog:A.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||k.attributes.normal===void 0&&x2===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:v1,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Z1,morphTextureStride:f1,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:A.dithering,shadowMapEnabled:C.shadowMap.enabled&&w.length>0,shadowMapType:C.shadowMap.type,toneMapping:P1,decodeVideoTexture:N1&&A.map.isVideoTexture===!0&&J1.getTransfer(A.map.colorSpace)===V2,decodeVideoTextureEmissive:o5&&A.emissiveMap.isVideoTexture===!0&&J1.getTransfer(A.emissiveMap.colorSpace)===V2,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Q5,flipSided:A.side===a5,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:i1&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(i1&&A.extensions.multiDraw===!0||A1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return b1.vertexUv1s=a.has(1),b1.vertexUv2s=a.has(2),b1.vertexUv3s=a.has(3),a.clear(),b1}function c(A){let x=[];if(A.shaderID?x.push(A.shaderID):(x.push(A.customVertexShaderID),x.push(A.customFragmentShaderID)),A.defines!==void 0)for(let w in A.defines)x.push(w),x.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(d(x,A),S(x,A),x.push(C.outputColorSpace)),x.push(A.customProgramCacheKey),x.join()}function d(A,x){A.push(x.precision),A.push(x.outputColorSpace),A.push(x.envMapMode),A.push(x.envMapCubeUVHeight),A.push(x.mapUv),A.push(x.alphaMapUv),A.push(x.lightMapUv),A.push(x.aoMapUv),A.push(x.bumpMapUv),A.push(x.normalMapUv),A.push(x.displacementMapUv),A.push(x.emissiveMapUv),A.push(x.metalnessMapUv),A.push(x.roughnessMapUv),A.push(x.anisotropyMapUv),A.push(x.clearcoatMapUv),A.push(x.clearcoatNormalMapUv),A.push(x.clearcoatRoughnessMapUv),A.push(x.iridescenceMapUv),A.push(x.iridescenceThicknessMapUv),A.push(x.sheenColorMapUv),A.push(x.sheenRoughnessMapUv),A.push(x.specularMapUv),A.push(x.specularColorMapUv),A.push(x.specularIntensityMapUv),A.push(x.transmissionMapUv),A.push(x.thicknessMapUv),A.push(x.combine),A.push(x.fogExp2),A.push(x.sizeAttenuation),A.push(x.morphTargetsCount),A.push(x.morphAttributeCount),A.push(x.numSunLights),A.push(x.numDirLights),A.push(x.numPointLights),A.push(x.numSpotLights),A.push(x.numSpotLightMaps),A.push(x.numHemiLights),A.push(x.numRectAreaLights),A.push(x.numSunLightShadows),A.push(x.numDirLightShadows),A.push(x.numPointLightShadows),A.push(x.numSpotLightShadows),A.push(x.numSpotLightShadowsWithMaps),A.push(x.numLightProbes),A.push(x.shadowMapType),A.push(x.toneMapping),A.push(x.numClippingPlanes),A.push(x.numClipIntersection),A.push(x.depthPacking)}function S(A,x){n.disableAll(),x.instancing&&n.enable(0),x.instancingColor&&n.enable(1),x.instancingMorph&&n.enable(2),x.matcap&&n.enable(3),x.envMap&&n.enable(4),x.normalMapObjectSpace&&n.enable(5),x.normalMapTangentSpace&&n.enable(6),x.clearcoat&&n.enable(7),x.iridescence&&n.enable(8),x.alphaTest&&n.enable(9),x.vertexColors&&n.enable(10),x.vertexAlphas&&n.enable(11),x.vertexUv1s&&n.enable(12),x.vertexUv2s&&n.enable(13),x.vertexUv3s&&n.enable(14),x.vertexTangents&&n.enable(15),x.anisotropy&&n.enable(16),x.alphaHash&&n.enable(17),x.batching&&n.enable(18),x.dispersion&&n.enable(19),x.retroreflection&&n.enable(24),x.batchingColor&&n.enable(20),x.gradientMap&&n.enable(21),x.packedNormalMap&&n.enable(22),x.vertexNormals&&n.enable(23),A.push(n.mask),n.disableAll(),x.fog&&n.enable(0),x.useFog&&n.enable(1),x.flatShading&&n.enable(2),x.logarithmicDepthBuffer&&n.enable(3),x.reversedDepthBuffer&&n.enable(4),x.skinning&&n.enable(5),x.morphTargets&&n.enable(6),x.morphNormals&&n.enable(7),x.morphColors&&n.enable(8),x.premultipliedAlpha&&n.enable(9),x.shadowMapEnabled&&n.enable(10),x.doubleSided&&n.enable(11),x.flipSided&&n.enable(12),x.useDepthPacking&&n.enable(13),x.dithering&&n.enable(14),x.transmission&&n.enable(15),x.sheen&&n.enable(16),x.opaque&&n.enable(17),x.pointsUvs&&n.enable(18),x.decodeVideoTexture&&n.enable(19),x.decodeVideoTextureEmissive&&n.enable(20),x.alphaToCoverage&&n.enable(21),x.numLightProbeGrids>0&&n.enable(22),x.hasPositionAttribute&&n.enable(23),A.push(n.mask)}function _(A){let x=l[A.type],w;if(x){let P=j5[x];w=ni.clone(P.uniforms)}else w=A.uniforms;return w}function v(A,x){let w=L.get(x);return w!==void 0?++w.usedTimes:(w=new Jl(C,x,A,i),o.push(w),L.set(x,w)),w}function g(A){if(--A.usedTimes===0){let x=o.indexOf(A);o[x]=o[o.length-1],o.pop(),L.delete(A.cacheKey),A.destroy()}}function Z(A){V.remove(A)}function b(){V.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:_,acquireProgram:v,releaseProgram:g,releaseShaderCache:Z,programs:o,dispose:b}}function Cd(){let C=new WeakMap;function e(n){return C.has(n)}function t(n){let V=C.get(n);return V===void 0&&(V={},C.set(n,V)),V}function r(n){C.delete(n)}function i(n,V,a){C.get(n)[V]=a}function H(){C=new WeakMap}return{has:e,get:t,remove:r,update:i,dispose:H}}function rd(C,e){return C.groupOrder!==e.groupOrder?C.groupOrder-e.groupOrder:C.renderOrder!==e.renderOrder?C.renderOrder-e.renderOrder:C.material.id!==e.material.id?C.material.id-e.material.id:C.materialVariant!==e.materialVariant?C.materialVariant-e.materialVariant:C.z!==e.z?C.z-e.z:C.id-e.id}function Zi(C,e){return C.groupOrder!==e.groupOrder?C.groupOrder-e.groupOrder:C.renderOrder!==e.renderOrder?C.renderOrder-e.renderOrder:C.z!==e.z?e.z-C.z:C.id-e.id}function yi(){let C=[],e=0,t=[],r=[],i=[];function H(){e=0,t.length=0,r.length=0,i.length=0}function n(s){let l=0;return s.isInstancedMesh&&(l+=2),s.isSkinnedMesh&&(l+=1),l}function V(s,l,p,f,c,d){let S=C[e];return S===void 0?(S={id:s.id,object:s,geometry:l,material:p,materialVariant:n(s),groupOrder:f,renderOrder:s.renderOrder,z:c,group:d},C[e]=S):(S.id=s.id,S.object=s,S.geometry=l,S.material=p,S.materialVariant=n(s),S.groupOrder=f,S.renderOrder=s.renderOrder,S.z=c,S.group=d),e++,S}function a(s,l,p,f,c,d,S){S.reversedDepth===!0&&(c=-c);let _=V(s,l,p,f,c,d);p.transmission>0?r.push(_):p.transparent===!0?i.push(_):t.push(_)}function o(s,l,p,f,c,d){let S=V(s,l,p,f,c,d);p.transmission>0?r.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function L(s,l){t.length>1&&t.sort(s||rd),r.length>1&&r.sort(l||Zi),i.length>1&&i.sort(l||Zi)}function M(){for(let s=e,l=C.length;s<l;s++){let p=C[s];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:i,init:H,push:a,unshift:o,finish:M,sort:L}}function id(){let C=new WeakMap;function e(r,i){let H=C.get(r),n;return H===void 0?(n=new yi,C.set(r,[n])):i>=H.length?(n=new yi,H.push(n)):n=H[i],n}function t(){C=new WeakMap}return{get:e,dispose:t}}function Hd(){let C={};return{get:function(e){if(C[e.id]!==void 0)return C[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new U1};break;case"SpotLight":t={position:new T,direction:new T,color:new U1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new U1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new U1,groundColor:new U1};break;case"RectAreaLight":t={color:new U1,position:new T,halfWidth:new T,halfHeight:new T};break}return C[e.id]=t,t}}}function nd(){let C={};return{get:function(e){if(C[e.id]!==void 0)return C[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g1};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g1};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g1,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[e.id]=t,t}}}var Vd=0;function ad(C,e){return(e.castShadow?2:0)-(C.castShadow?2:0)+(e.map?1:0)-(C.map?1:0)}function od(C){let e=new Hd,t=nd(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)r.probe.push(new T);let i=new T,H=new s2,n=new s2;function V(o){let L=0,M=0,s=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let l=0,p=0,f=0,c=0,d=0,S=0,_=0,v=0,g=0,Z=0,b=0,A=0,x=0,w=0;o.sort(ad);for(let F=0,U=o.length;F<U;F++){let E=o[F],k=E.color,X=E.intensity,G=E.distance,r1=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===j0?r1=E.shadow.map.texture:r1=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)L+=k.r*X,M+=k.g*X,s+=k.b*X;else if(E.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(E.sh.coefficients[W],X);w++}else if(E.isSunLight){let W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let e1=E.shadow,t1=t.get(E);t1.shadowIntensity=e1.intensity,t1.shadowBias=e1.bias,t1.shadowNormalBias=e1.normalBias,t1.shadowRadius=e1.radius,t1.shadowMapSize.copy(e1.mapSize).multiply(e1.getFrameExtents()),r.sunShadow[p]=t1,r.sunShadowMap[p]=r1;let Z1=e1.getViewportCount();for(let f1=0;f1<Z1;f1++)r.sunShadowMatrix[f+f1]=e1.getMatrix(f1),r.sunShadowCascade[f+f1]=e1._cascadeData[f1];f+=Z1,p++}r.sun[l]=W,l++}else if(E.isDirectionalLight){let W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let e1=E.shadow,t1=t.get(E);t1.shadowIntensity=e1.intensity,t1.shadowBias=e1.bias,t1.shadowNormalBias=e1.normalBias,t1.shadowRadius=e1.radius,t1.shadowMapSize=e1.mapSize,r.directionalShadow[c]=t1,r.directionalShadowMap[c]=r1,r.directionalShadowMatrix[c]=E.shadow.matrix,g++}r.directional[c]=W,c++}else if(E.isSpotLight){let W=e.get(E);W.position.setFromMatrixPosition(E.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(E.angle),W.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),W.decay=E.decay,r.spot[S]=W;let e1=E.shadow;if(E.map&&(r.spotLightMap[A]=E.map,A++,e1.updateMatrices(E),E.castShadow&&x++),r.spotLightMatrix[S]=e1.matrix,E.castShadow){let t1=t.get(E);t1.shadowIntensity=e1.intensity,t1.shadowBias=e1.bias,t1.shadowNormalBias=e1.normalBias,t1.shadowRadius=e1.radius,t1.shadowMapSize=e1.mapSize,r.spotShadow[S]=t1,r.spotShadowMap[S]=r1,b++}S++}else if(E.isRectAreaLight){let W=e.get(E);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(E.width*.5,0,0),W.halfHeight.set(0,E.height*.5,0),r.rectArea[_]=W,_++}else if(E.isPointLight){let W=e.get(E);if(W.color.copy(E.color).multiplyScalar(E.intensity),W.distance=E.distance,W.decay=E.decay,E.castShadow){let e1=E.shadow,t1=t.get(E);t1.shadowIntensity=e1.intensity,t1.shadowBias=e1.bias,t1.shadowNormalBias=e1.normalBias,t1.shadowRadius=e1.radius,t1.shadowMapSize=e1.mapSize,t1.shadowCameraNear=e1.camera.near,t1.shadowCameraFar=e1.camera.far,r.pointShadow[d]=t1,r.pointShadowMap[d]=r1,r.pointShadowMatrix[d]=E.shadow.matrix,Z++}r.point[d]=W,d++}else if(E.isHemisphereLight){let W=e.get(E);W.skyColor.copy(E.color).multiplyScalar(X),W.groundColor.copy(E.groundColor).multiplyScalar(X),r.hemi[v]=W,v++}}_>0&&(C.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=c1.LTC_FLOAT_1,r.rectAreaLTC2=c1.LTC_FLOAT_2):(r.rectAreaLTC1=c1.LTC_HALF_1,r.rectAreaLTC2=c1.LTC_HALF_2)),r.ambient[0]=L,r.ambient[1]=M,r.ambient[2]=s;let P=r.hash;(P.sunLength!==l||P.directionalLength!==c||P.pointLength!==d||P.spotLength!==S||P.rectAreaLength!==_||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==g||P.numPointShadows!==Z||P.numSpotShadows!==b||P.numSpotMaps!==A||P.numLightProbes!==w)&&(r.sun.length=l,r.directional.length=c,r.spot.length=S,r.rectArea.length=_,r.point.length=d,r.hemi.length=v,r.sunShadow.length=p,r.sunShadowMap.length=p,r.sunShadowMatrix.length=f,r.sunShadowCascade.length=f,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=Z,r.pointShadowMap.length=Z,r.pointShadowMatrix.length=Z,r.spotShadow.length=b,r.spotShadowMap.length=b,r.spotLightMatrix.length=b+A-x,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=x,r.numLightProbes=w,P.sunLength=l,P.directionalLength=c,P.pointLength=d,P.spotLength=S,P.rectAreaLength=_,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=g,P.numPointShadows=Z,P.numSpotShadows=b,P.numSpotMaps=A,P.numLightProbes=w,r.version=Vd++)}function a(o,L){let M=0,s=0,l=0,p=0,f=0,c=0,d=L.matrixWorldInverse;for(let S=0,_=o.length;S<_;S++){let v=o[S];if(v.isSunLight){let g=r.sun[M];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(d),M++}else if(v.isDirectionalLight){let g=r.directional[s];g.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(d),s++}else if(v.isSpotLight){let g=r.spot[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(d),g.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(d),p++}else if(v.isRectAreaLight){let g=r.rectArea[f];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(d),n.identity(),H.copy(v.matrixWorld),H.premultiply(d),n.extractRotation(H),g.halfWidth.set(v.width*.5,0,0),g.halfHeight.set(0,v.height*.5,0),g.halfWidth.applyMatrix4(n),g.halfHeight.applyMatrix4(n),f++}else if(v.isPointLight){let g=r.point[l];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(d),l++}else if(v.isHemisphereLight){let g=r.hemi[c];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(d),c++}}}return{setup:V,setupView:a,state:r}}function _i(C){let e=new od(C),t=[],r=[],i=[];function H(s){M.camera=s,t.length=0,r.length=0,i.length=0}function n(s){t.push(s)}function V(s){r.push(s)}function a(s){i.push(s)}function o(){e.setup(t)}function L(s){e.setupView(t,s)}let M={lightsArray:t,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:M,setupLights:o,setupLightsView:L,pushLight:n,pushShadow:V,pushLightProbeGrid:a}}function Ld(C){let e=new WeakMap;function t(i,H=0){let n=e.get(i),V;return n===void 0?(V=new _i(C),e.set(i,[V])):H>=n.length?(V=new _i(C),n.push(V)):V=n[H],V}function r(){e=new WeakMap}return{get:t,dispose:r}}var sd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Md=`uniform sampler2D shadow_pass;
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
}`,ld=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],dd=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],bi=new s2,y4=new T,gt=new T;function cd(C,e,t){let r=new r7,i=new g1,H=new g1,n=new S2,V=new Y9,a=new Q9,o={},L=t.maxTextureSize,M={[Y0]:a5,[a5]:Y0,[Q5]:Q5},s=new p5({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new g1},radius:{value:4}},vertexShader:sd,fragmentShader:Md}),l=s.clone();l.defines.HORIZONTAL_PASS=1;let p=new B5;p.setAttribute("position",new x5(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new V5(p,s),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u4;let d=this.type;this.render=function(Z,b,A){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||Z.length===0)return;this.type===mr&&(I1("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=u4);let x=C.getRenderTarget(),w=C.getActiveCubeFace(),P=C.getActiveMipmapLevel(),F=C.state;F.setBlending(K5),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=d!==this.type;U&&b.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(k=>k.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,k=Z.length;E<k;E++){let X=Z[E],G=X.shadow;if(G===void 0){I1("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let r1=G.getFrameExtents();i.multiply(r1),H.copy(G.mapSize),(i.x>L||i.y>L)&&(i.x>L&&(H.x=Math.floor(L/r1.x),i.x=H.x*r1.x,G.mapSize.x=H.x),i.y>L&&(H.y=Math.floor(L/r1.y),i.y=H.y*r1.y,G.mapSize.y=H.y));let W=C.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||U===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===L7){if(X.isPointLight){I1("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new L5(i.x,i.y,{format:j0,type:D5,minFilter:W2,magFilter:W2,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new G0(i.x,i.y,k5),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=X5,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=U2,G.map.depthTexture.magFilter=U2}else X.isPointLight?(G.map=new r8(i.x),G.map.depthTexture=new N9(i.x,F5)):(G.map=new L5(i.x,i.y),G.map.depthTexture=new G0(i.x,i.y,F5)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=X5,this.type===u4?(G.map.depthTexture.compareFunction=W?J6:K6,G.map.depthTexture.minFilter=W2,G.map.depthTexture.magFilter=W2):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=U2,G.map.depthTexture.magFilter=U2);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let e1=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,A);for(let t1=0;t1<e1;t1++){let Z1=G.getCamera(t1);if(X.isPointLight){let f1=G.camera,$1=G.matrix,T1=X.distance||f1.far;T1!==f1.far&&(f1.far=T1,f1.updateProjectionMatrix()),y4.setFromMatrixPosition(X.matrixWorld),f1.position.copy(y4),gt.copy(f1.position),gt.add(ld[t1]),f1.up.copy(dd[t1]),f1.lookAt(gt),f1.updateMatrixWorld(),$1.makeTranslation(-y4.x,-y4.y,-y4.z),bi.multiplyMatrices(f1.projectionMatrix,f1.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bi,f1.coordinateSystem,f1.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)C.setRenderTarget(G.map,t1),C.clear();else{t1===0&&(C.setRenderTarget(G.map),C.clear());let f1=G.getViewport(t1);n.set(H.x*f1.x,H.y*f1.y,H.x*f1.z,H.y*f1.w),F.viewport(n)}r=G.getFrustum(t1),v(b,A,Z1,X,this.type)}G.isPointLightShadow!==!0&&this.type===L7&&S(G,A),G.needsUpdate=!1}d=this.type,c.needsUpdate=!1,C.setRenderTarget(x,w,P)};function S(Z,b){let A=e.update(f);s.defines.VSM_SAMPLES!==Z.blurSamples&&(s.defines.VSM_SAMPLES=Z.blurSamples,l.defines.VSM_SAMPLES=Z.blurSamples,s.needsUpdate=!0,l.needsUpdate=!0),Z.mapPass===null?Z.mapPass=new L5(i.x,i.y,{format:j0,type:D5}):(Z.mapPass.width!==Z.map.width||Z.mapPass.height!==Z.map.height)&&Z.mapPass.setSize(Z.map.width,Z.map.height),s.uniforms.shadow_pass.value=Z.map.depthTexture,s.uniforms.resolution.value.set(Z.map.width,Z.map.height),s.uniforms.radius.value=Z.radius,C.setRenderTarget(Z.mapPass),C.clear(),C.renderBufferDirect(b,null,A,s,f,null),l.uniforms.shadow_pass.value=Z.mapPass.texture,l.uniforms.resolution.value.set(Z.map.width,Z.map.height),l.uniforms.radius.value=Z.radius,C.setRenderTarget(Z.map),C.clear(),C.renderBufferDirect(b,null,A,l,f,null)}function _(Z,b,A,x){let w=null,P=A.isPointLight===!0?Z.customDistanceMaterial:Z.customDepthMaterial;if(P!==void 0)w=P;else if(w=A.isPointLight===!0?a:V,C.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let F=w.uuid,U=b.uuid,E=o[F];E===void 0&&(E={},o[F]=E);let k=E[U];k===void 0&&(k=w.clone(),E[U]=k,b.addEventListener("dispose",g)),w=k}if(w.visible=b.visible,w.wireframe=b.wireframe,x===L7?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:M[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,A.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=C.properties.get(w);F.light=A}return w}function v(Z,b,A,x,w){if(Z.visible===!1)return;if(Z.layers.test(b.layers)&&(Z.isMesh||Z.isLine||Z.isPoints)&&(Z.castShadow||Z.receiveShadow&&w===L7)&&(!Z.frustumCulled||Z.intersectsFrustum(r))){Z.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,Z.matrixWorld);let U=e.update(Z),E=Z.material;if(Array.isArray(E)){let k=U.groups;for(let X=0,G=k.length;X<G;X++){let r1=k[X],W=E[r1.materialIndex];if(W&&W.visible){let e1=_(Z,W,x,w);Z.onBeforeShadow(C,Z,b,A,U,e1,r1),C.renderBufferDirect(A,null,U,e1,Z,r1),Z.onAfterShadow(C,Z,b,A,U,e1,r1)}}}else if(E.visible){let k=_(Z,E,x,w);Z.onBeforeShadow(C,Z,b,A,U,k,null),C.renderBufferDirect(A,null,U,k,Z,null),Z.onAfterShadow(C,Z,b,A,U,k,null)}}let F=Z.children;for(let U=0,E=F.length;U<E;U++)v(F[U],b,A,x,w)}function g(Z){Z.target.removeEventListener("dispose",g);for(let A in o){let x=o[A],w=Z.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function pd(C,e){function t(){let R=!1,s1=new S2,J=null,M1=new S2(0,0,0,0);return{setMask:function(m1){J!==m1&&!R&&(C.colorMask(m1,m1,m1,m1),J=m1)},setLocked:function(m1){R=m1},setClear:function(m1,i1,P1,b1,c2){c2===!0&&(m1*=b1,i1*=b1,P1*=b1),s1.set(m1,i1,P1,b1),M1.equals(s1)===!1&&(C.clearColor(m1,i1,P1,b1),M1.copy(s1))},reset:function(){R=!1,J=null,M1.set(-1,0,0,0)}}}function r(){let R=!1,s1=!1,J=null,M1=null,m1=null;return{setReversed:function(i1){if(s1!==i1){let P1=e.get("EXT_clip_control");i1?P1.clipControlEXT(P1.LOWER_LEFT_EXT,P1.ZERO_TO_ONE_EXT):P1.clipControlEXT(P1.LOWER_LEFT_EXT,P1.NEGATIVE_ONE_TO_ONE_EXT),s1=i1;let b1=m1;m1=null,this.setClear(b1)}},getReversed:function(){return s1},setTest:function(i1){i1?j(C.DEPTH_TEST):v1(C.DEPTH_TEST)},setMask:function(i1){J!==i1&&!R&&(C.depthMask(i1),J=i1)},setFunc:function(i1){if(s1&&(i1=ei[i1]),M1!==i1){switch(i1){case y9:C.depthFunc(C.NEVER);break;case _9:C.depthFunc(C.ALWAYS);break;case b9:C.depthFunc(C.LESS);break;case Y3:C.depthFunc(C.LEQUAL);break;case w9:C.depthFunc(C.EQUAL);break;case T9:C.depthFunc(C.GEQUAL);break;case O9:C.depthFunc(C.GREATER);break;case E9:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}M1=i1}},setLocked:function(i1){R=i1},setClear:function(i1){m1!==i1&&(m1=i1,s1&&(i1=1-i1),C.clearDepth(i1))},reset:function(){R=!1,J=null,M1=null,m1=null,s1=!1}}}function i(){let R=!1,s1=null,J=null,M1=null,m1=null,i1=null,P1=null,b1=null,c2=null;return{setTest:function(H2){R||(H2?j(C.STENCIL_TEST):v1(C.STENCIL_TEST))},setMask:function(H2){s1!==H2&&!R&&(C.stencilMask(H2),s1=H2)},setFunc:function(H2,b5,G5){(J!==H2||M1!==b5||m1!==G5)&&(C.stencilFunc(H2,b5,G5),J=H2,M1=b5,m1=G5)},setOp:function(H2,b5,G5){(i1!==H2||P1!==b5||b1!==G5)&&(C.stencilOp(H2,b5,G5),i1=H2,P1=b5,b1=G5)},setLocked:function(H2){R=H2},setClear:function(H2){c2!==H2&&(C.clearStencil(H2),c2=H2)},reset:function(){R=!1,s1=null,J=null,M1=null,m1=null,i1=null,P1=null,b1=null,c2=null}}}let H=new t,n=new r,V=new i,a=new WeakMap,o=new WeakMap,L={},M={},s={},l=new WeakMap,p=[],f=null,c=!1,d=null,S=null,_=null,v=null,g=null,Z=null,b=null,A=new U1(0,0,0),x=0,w=!1,P=null,F=null,U=null,E=null,k=null,X=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,r1=0,W=C.getParameter(C.VERSION);W.indexOf("WebGL")!==-1?(r1=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=r1>=1):W.indexOf("OpenGL ES")!==-1&&(r1=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=r1>=2);let e1=null,t1={},Z1=C.getParameter(C.SCISSOR_BOX),f1=C.getParameter(C.VIEWPORT),$1=new S2().fromArray(Z1),T1=new S2().fromArray(f1);function z1(R,s1,J,M1){let m1=new Uint8Array(4),i1=C.createTexture();C.bindTexture(R,i1),C.texParameteri(R,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(R,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let P1=0;P1<J;P1++)R===C.TEXTURE_3D||R===C.TEXTURE_2D_ARRAY?C.texImage3D(s1,0,C.RGBA,1,1,M1,0,C.RGBA,C.UNSIGNED_BYTE,m1):C.texImage2D(s1+P1,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,m1);return i1}let Y={};Y[C.TEXTURE_2D]=z1(C.TEXTURE_2D,C.TEXTURE_2D,1),Y[C.TEXTURE_CUBE_MAP]=z1(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[C.TEXTURE_2D_ARRAY]=z1(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),Y[C.TEXTURE_3D]=z1(C.TEXTURE_3D,C.TEXTURE_3D,1,1),H.setClear(0,0,0,1),n.setClear(1),V.setClear(0),j(C.DEPTH_TEST),n.setFunc(Y3),K1(!1),x2(ke),j(C.CULL_FACE),r2(K5);function j(R){L[R]!==!0&&(C.enable(R),L[R]=!0)}function v1(R){L[R]!==!1&&(C.disable(R),L[R]=!1)}function F1(R,s1){return s[R]!==s1?(C.bindFramebuffer(R,s1),s[R]=s1,R===C.DRAW_FRAMEBUFFER&&(s[C.FRAMEBUFFER]=s1),R===C.FRAMEBUFFER&&(s[C.DRAW_FRAMEBUFFER]=s1),!0):!1}function A1(R,s1){let J=p,M1=!1;if(R){J=l.get(s1),J===void 0&&(J=[],l.set(s1,J));let m1=R.textures;if(J.length!==m1.length||J[0]!==C.COLOR_ATTACHMENT0){for(let i1=0,P1=m1.length;i1<P1;i1++)J[i1]=C.COLOR_ATTACHMENT0+i1;J.length=m1.length,M1=!0}}else J[0]!==C.BACK&&(J[0]=C.BACK,M1=!0);M1&&C.drawBuffers(J)}function N1(R){return f!==R?(C.useProgram(R),f=R,!0):!1}let l2={[d3]:C.FUNC_ADD,[fr]:C.FUNC_SUBTRACT,[vr]:C.FUNC_REVERSE_SUBTRACT};l2[xr]=C.MIN,l2[Sr]=C.MAX;let W1={[gr]:C.ZERO,[Zr]:C.ONE,[yr]:C.SRC_COLOR,[ze]:C.SRC_ALPHA,[Er]:C.SRC_ALPHA_SATURATE,[Tr]:C.DST_COLOR,[br]:C.DST_ALPHA,[_r]:C.ONE_MINUS_SRC_COLOR,[Ge]:C.ONE_MINUS_SRC_ALPHA,[Or]:C.ONE_MINUS_DST_COLOR,[wr]:C.ONE_MINUS_DST_ALPHA,[Rr]:C.CONSTANT_COLOR,[Pr]:C.ONE_MINUS_CONSTANT_COLOR,[Br]:C.CONSTANT_ALPHA,[Ir]:C.ONE_MINUS_CONSTANT_ALPHA};function r2(R,s1,J,M1,m1,i1,P1,b1,c2,H2){if(R===K5){c===!0&&(v1(C.BLEND),c=!1);return}if(c===!1&&(j(C.BLEND),c=!0),R!==hr){if(R!==d||H2!==w){if((S!==d3||g!==d3)&&(C.blendEquation(C.FUNC_ADD),S=d3,g=d3),H2)switch(R){case s7:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case De:C.blendFunc(C.ONE,C.ONE);break;case Ne:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case Ue:C.blendFuncSeparate(C.DST_COLOR,C.ONE_MINUS_SRC_ALPHA,C.ZERO,C.ONE);break;default:k1("WebGLState: Invalid blending: ",R);break}else switch(R){case s7:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case De:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE,C.ONE,C.ONE);break;case Ne:k1("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ue:k1("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:k1("WebGLState: Invalid blending: ",R);break}_=null,v=null,Z=null,b=null,A.set(0,0,0),x=0,d=R,w=H2}return}m1=m1||s1,i1=i1||J,P1=P1||M1,(s1!==S||m1!==g)&&(C.blendEquationSeparate(l2[s1],l2[m1]),S=s1,g=m1),(J!==_||M1!==v||i1!==Z||P1!==b)&&(C.blendFuncSeparate(W1[J],W1[M1],W1[i1],W1[P1]),_=J,v=M1,Z=i1,b=P1),(b1.equals(A)===!1||c2!==x)&&(C.blendColor(b1.r,b1.g,b1.b,c2),A.copy(b1),x=c2),d=R,w=!1}function d2(R,s1){R.side===Q5?v1(C.CULL_FACE):j(C.CULL_FACE);let J=R.side===a5;s1&&(J=!J),K1(J),R.blending===s7&&R.transparent===!1?r2(K5):r2(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),n.setFunc(R.depthFunc),n.setTest(R.depthTest),n.setMask(R.depthWrite),H.setMask(R.colorWrite);let M1=R.stencilWrite;V.setTest(M1),M1&&(V.setMask(R.stencilWriteMask),V.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),V.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),o5(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?j(C.SAMPLE_ALPHA_TO_COVERAGE):v1(C.SAMPLE_ALPHA_TO_COVERAGE)}function K1(R){P!==R&&(R?C.frontFace(C.CW):C.frontFace(C.CCW),P=R)}function x2(R){R!==ur?(j(C.CULL_FACE),R!==F&&(R===ke?C.cullFace(C.BACK):R===Ar?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):v1(C.CULL_FACE),F=R}function D2(R){R!==U&&(G&&C.lineWidth(R),U=R)}function o5(R,s1,J){R?(j(C.POLYGON_OFFSET_FILL),(E!==s1||k!==J)&&(E=s1,k=J,n.getReversed()&&(s1=-s1),C.polygonOffset(s1,J))):v1(C.POLYGON_OFFSET_FILL)}function g2(R){R?j(C.SCISSOR_TEST):v1(C.SCISSOR_TEST)}function T2(R){R===void 0&&(R=C.TEXTURE0+X-1),e1!==R&&(C.activeTexture(R),e1=R)}function B(R,s1,J){J===void 0&&(e1===null?J=C.TEXTURE0+X-1:J=e1);let M1=t1[J];M1===void 0&&(M1={type:void 0,texture:void 0},t1[J]=M1),(M1.type!==R||M1.texture!==s1)&&(e1!==J&&(C.activeTexture(J),e1=J),C.bindTexture(R,s1||Y[R]),M1.type=R,M1.texture=s1)}function $2(){let R=t1[e1];R!==void 0&&R.type!==void 0&&(C.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function o2(){try{C.compressedTexImage2D(...arguments)}catch(R){k1("WebGLState:",R)}}function y(){try{C.compressedTexImage3D(...arguments)}catch(R){k1("WebGLState:",R)}}function u(){try{C.texSubImage2D(...arguments)}catch(R){k1("WebGLState:",R)}}function I(){try{C.texSubImage3D(...arguments)}catch(R){k1("WebGLState:",R)}}function z(){try{C.compressedTexSubImage2D(...arguments)}catch(R){k1("WebGLState:",R)}}function Q(){try{C.compressedTexSubImage3D(...arguments)}catch(R){k1("WebGLState:",R)}}function n1(){try{C.texStorage2D(...arguments)}catch(R){k1("WebGLState:",R)}}function a1(){try{C.texStorage3D(...arguments)}catch(R){k1("WebGLState:",R)}}function K(){try{C.texImage2D(...arguments)}catch(R){k1("WebGLState:",R)}}function C1(){try{C.texImage3D(...arguments)}catch(R){k1("WebGLState:",R)}}function o1(R){return M[R]!==void 0?M[R]:C.getParameter(R)}function O1(R,s1){M[R]!==s1&&(C.pixelStorei(R,s1),M[R]=s1)}function d1(R){$1.equals(R)===!1&&(C.scissor(R.x,R.y,R.z,R.w),$1.copy(R))}function L1(R){T1.equals(R)===!1&&(C.viewport(R.x,R.y,R.z,R.w),T1.copy(R))}function E1(R,s1){let J=o.get(s1);J===void 0&&(J=new WeakMap,o.set(s1,J));let M1=J.get(R);M1===void 0&&(M1=C.getUniformBlockIndex(s1,R.name),J.set(R,M1))}function B1(R,s1){let M1=o.get(s1).get(R);a.get(s1)!==M1&&(C.uniformBlockBinding(s1,M1,R.__bindingPointIndex),a.set(s1,M1))}function G1(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),n.setReversed(!1),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),C.pixelStorei(C.PACK_ALIGNMENT,4),C.pixelStorei(C.UNPACK_ALIGNMENT,4),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,!1),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,C.BROWSER_DEFAULT_WEBGL),C.pixelStorei(C.PACK_ROW_LENGTH,0),C.pixelStorei(C.PACK_SKIP_PIXELS,0),C.pixelStorei(C.PACK_SKIP_ROWS,0),C.pixelStorei(C.UNPACK_ROW_LENGTH,0),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,0),C.pixelStorei(C.UNPACK_SKIP_PIXELS,0),C.pixelStorei(C.UNPACK_SKIP_ROWS,0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,0),L={},M={},e1=null,t1={},s={},l=new WeakMap,p=[],f=null,c=!1,d=null,S=null,_=null,v=null,g=null,Z=null,b=null,A=new U1(0,0,0),x=0,w=!1,P=null,F=null,U=null,E=null,k=null,$1.set(0,0,C.canvas.width,C.canvas.height),T1.set(0,0,C.canvas.width,C.canvas.height),H.reset(),n.reset(),V.reset()}return{buffers:{color:H,depth:n,stencil:V},enable:j,disable:v1,bindFramebuffer:F1,drawBuffers:A1,useProgram:N1,setBlending:r2,setMaterial:d2,setFlipSided:K1,setCullFace:x2,setLineWidth:D2,setPolygonOffset:o5,setScissorTest:g2,activeTexture:T2,bindTexture:B,unbindTexture:$2,compressedTexImage2D:o2,compressedTexImage3D:y,texImage2D:K,texImage3D:C1,pixelStorei:O1,getParameter:o1,updateUBOMapping:E1,uniformBlockBinding:B1,texStorage2D:n1,texStorage3D:a1,texSubImage2D:u,texSubImage3D:I,compressedTexSubImage2D:z,compressedTexSubImage3D:Q,scissor:d1,viewport:L1,reset:G1}}function ud(C,e,t,r,i,H,n){let V=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new g1,L=new WeakMap,M=new Set,s,l=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(y,u){return p?new OffscreenCanvas(y,u):$7("canvas")}function c(y,u,I){let z=1,Q=o2(y);if((Q.width>I||Q.height>I)&&(z=I/Math.max(Q.width,Q.height)),z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let n1=Math.floor(z*Q.width),a1=Math.floor(z*Q.height);s===void 0&&(s=f(n1,a1));let K=u?f(n1,a1):s;return K.width=n1,K.height=a1,K.getContext("2d").drawImage(y,0,0,n1,a1),I1("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+n1+"x"+a1+")."),K}else return"data"in y&&I1("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function d(y){return y.generateMipmaps}function S(y){C.generateMipmap(y)}function _(y){return y.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?C.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?C.TEXTURE_2D_ARRAY:C.TEXTURE_2D}function v(y,u,I,z,Q,n1=!1){if(y!==null){if(C[y]!==void 0)return C[y];I1("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let a1;z&&(a1=e.get("EXT_texture_norm16"),a1||I1("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=u;if(u===C.RED&&(I===C.FLOAT&&(K=C.R32F),I===C.HALF_FLOAT&&(K=C.R16F),I===C.UNSIGNED_BYTE&&(K=C.R8),I===C.UNSIGNED_SHORT&&a1&&(K=a1.R16_EXT),I===C.SHORT&&a1&&(K=a1.R16_SNORM_EXT)),u===C.RED_INTEGER&&(I===C.UNSIGNED_BYTE&&(K=C.R8UI),I===C.UNSIGNED_SHORT&&(K=C.R16UI),I===C.UNSIGNED_INT&&(K=C.R32UI),I===C.BYTE&&(K=C.R8I),I===C.SHORT&&(K=C.R16I),I===C.INT&&(K=C.R32I)),u===C.RG&&(I===C.FLOAT&&(K=C.RG32F),I===C.HALF_FLOAT&&(K=C.RG16F),I===C.UNSIGNED_BYTE&&(K=C.RG8),I===C.UNSIGNED_SHORT&&a1&&(K=a1.RG16_EXT),I===C.SHORT&&a1&&(K=a1.RG16_SNORM_EXT)),u===C.RG_INTEGER&&(I===C.UNSIGNED_BYTE&&(K=C.RG8UI),I===C.UNSIGNED_SHORT&&(K=C.RG16UI),I===C.UNSIGNED_INT&&(K=C.RG32UI),I===C.BYTE&&(K=C.RG8I),I===C.SHORT&&(K=C.RG16I),I===C.INT&&(K=C.RG32I)),u===C.RGB_INTEGER&&(I===C.UNSIGNED_BYTE&&(K=C.RGB8UI),I===C.UNSIGNED_SHORT&&(K=C.RGB16UI),I===C.UNSIGNED_INT&&(K=C.RGB32UI),I===C.BYTE&&(K=C.RGB8I),I===C.SHORT&&(K=C.RGB16I),I===C.INT&&(K=C.RGB32I)),u===C.RGBA_INTEGER&&(I===C.UNSIGNED_BYTE&&(K=C.RGBA8UI),I===C.UNSIGNED_SHORT&&(K=C.RGBA16UI),I===C.UNSIGNED_INT&&(K=C.RGBA32UI),I===C.BYTE&&(K=C.RGBA8I),I===C.SHORT&&(K=C.RGBA16I),I===C.INT&&(K=C.RGBA32I)),u===C.RGB&&(I===C.UNSIGNED_SHORT&&a1&&(K=a1.RGB16_EXT),I===C.SHORT&&a1&&(K=a1.RGB16_SNORM_EXT),I===C.UNSIGNED_INT_5_9_9_9_REV&&(K=C.RGB9_E5),I===C.UNSIGNED_INT_10F_11F_11F_REV&&(K=C.R11F_G11F_B10F)),u===C.RGBA){let C1=n1?W7:J1.getTransfer(Q);I===C.FLOAT&&(K=C.RGBA32F),I===C.HALF_FLOAT&&(K=C.RGBA16F),I===C.UNSIGNED_BYTE&&(K=C1===V2?C.SRGB8_ALPHA8:C.RGBA8),I===C.UNSIGNED_SHORT&&a1&&(K=a1.RGBA16_EXT),I===C.SHORT&&a1&&(K=a1.RGBA16_SNORM_EXT),I===C.UNSIGNED_SHORT_4_4_4_4&&(K=C.RGBA4),I===C.UNSIGNED_SHORT_5_5_5_1&&(K=C.RGB5_A1)}return(K===C.R16F||K===C.R32F||K===C.RG16F||K===C.RG32F||K===C.RGBA16F||K===C.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(y,u){let I;return y?u===null||u===F5||u===l7?I=C.DEPTH24_STENCIL8:u===k5?I=C.DEPTH32F_STENCIL8:u===M7&&(I=C.DEPTH24_STENCIL8,I1("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===F5||u===l7?I=C.DEPTH_COMPONENT24:u===k5?I=C.DEPTH_COMPONENT32F:u===M7&&(I=C.DEPTH_COMPONENT16),I}function Z(y,u){return d(y)===!0||y.isFramebufferTexture&&y.minFilter!==U2&&y.minFilter!==W2?Math.log2(Math.max(u.width,u.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?u.mipmaps.length:1}function b(y){let u=y.target;u.removeEventListener("dispose",b),x(u),u.isVideoTexture&&L.delete(u),u.isHTMLTexture&&M.delete(u)}function A(y){let u=y.target;u.removeEventListener("dispose",A),P(u)}function x(y){let u=r.get(y);if(u.__webglInit===void 0)return;let I=y.source,z=l.get(I);if(z){let Q=z[u.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(y),Object.keys(z).length===0&&l.delete(I)}r.remove(y)}function w(y){let u=r.get(y);C.deleteTexture(u.__webglTexture);let I=y.source,z=l.get(I);delete z[u.__cacheKey],n.memory.textures--}function P(y){let u=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(u.__webglFramebuffer[z]))for(let Q=0;Q<u.__webglFramebuffer[z].length;Q++)C.deleteFramebuffer(u.__webglFramebuffer[z][Q]);else C.deleteFramebuffer(u.__webglFramebuffer[z]);u.__webglDepthbuffer&&C.deleteRenderbuffer(u.__webglDepthbuffer[z])}else{if(Array.isArray(u.__webglFramebuffer))for(let z=0;z<u.__webglFramebuffer.length;z++)C.deleteFramebuffer(u.__webglFramebuffer[z]);else C.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&C.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&C.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let z=0;z<u.__webglColorRenderbuffer.length;z++)u.__webglColorRenderbuffer[z]&&C.deleteRenderbuffer(u.__webglColorRenderbuffer[z]);u.__webglDepthRenderbuffer&&C.deleteRenderbuffer(u.__webglDepthRenderbuffer)}let I=y.textures;for(let z=0,Q=I.length;z<Q;z++){let n1=r.get(I[z]);n1.__webglTexture&&(C.deleteTexture(n1.__webglTexture),n.memory.textures--),r.remove(I[z])}r.remove(y)}let F=0;function U(){F=0}function E(){return F}function k(y){F=y}function X(){let y=F;return y>=i.maxTextures&&I1("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,y}function G(y){let u=[];return u.push(y.wrapS),u.push(y.wrapT),u.push(y.wrapR||0),u.push(y.magFilter),u.push(y.minFilter),u.push(y.anisotropy),u.push(y.internalFormat),u.push(y.format),u.push(y.type),u.push(y.generateMipmaps),u.push(y.premultiplyAlpha),u.push(y.flipY),u.push(y.unpackAlignment),u.push(y.colorSpace),u.join()}function r1(y,u){let I=r.get(y);if(y.isVideoTexture&&B(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&I.__version!==y.version){let z=y.image;if(z===null)I1("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)I1("WebGLRenderer: Texture marked for update but image is incomplete");else{v1(I,y,u);return}}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(C.TEXTURE_2D,I.__webglTexture,C.TEXTURE0+u)}function W(y,u){let I=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){v1(I,y,u);return}else y.isExternalTexture&&(I.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(C.TEXTURE_2D_ARRAY,I.__webglTexture,C.TEXTURE0+u)}function e1(y,u){let I=r.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){v1(I,y,u);return}t.bindTexture(C.TEXTURE_3D,I.__webglTexture,C.TEXTURE0+u)}function t1(y,u){let I=r.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&I.__version!==y.version){F1(I,y,u);return}t.bindTexture(C.TEXTURE_CUBE_MAP,I.__webglTexture,C.TEXTURE0+u)}let Z1={[R9]:C.REPEAT,[q5]:C.CLAMP_TO_EDGE,[P9]:C.MIRRORED_REPEAT},f1={[U2]:C.NEAREST,[Dr]:C.NEAREST_MIPMAP_NEAREST,[m4]:C.NEAREST_MIPMAP_LINEAR,[W2]:C.LINEAR,[l6]:C.LINEAR_MIPMAP_NEAREST,[K0]:C.LINEAR_MIPMAP_LINEAR},$1={[Gr]:C.NEVER,[Yr]:C.ALWAYS,[Wr]:C.LESS,[K6]:C.LEQUAL,[$r]:C.EQUAL,[J6]:C.GEQUAL,[qr]:C.GREATER,[Xr]:C.NOTEQUAL};function T1(y,u){if(u.type===k5&&e.has("OES_texture_float_linear")===!1&&(u.magFilter===W2||u.magFilter===l6||u.magFilter===m4||u.magFilter===K0||u.minFilter===W2||u.minFilter===l6||u.minFilter===m4||u.minFilter===K0)&&I1("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),C.texParameteri(y,C.TEXTURE_WRAP_S,Z1[u.wrapS]),C.texParameteri(y,C.TEXTURE_WRAP_T,Z1[u.wrapT]),(y===C.TEXTURE_3D||y===C.TEXTURE_2D_ARRAY)&&C.texParameteri(y,C.TEXTURE_WRAP_R,Z1[u.wrapR]),C.texParameteri(y,C.TEXTURE_MAG_FILTER,f1[u.magFilter]),C.texParameteri(y,C.TEXTURE_MIN_FILTER,f1[u.minFilter]),u.compareFunction&&(C.texParameteri(y,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(y,C.TEXTURE_COMPARE_FUNC,$1[u.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===U2||u.minFilter!==m4&&u.minFilter!==K0||u.type===k5&&e.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||r.get(u).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");C.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,i.getMaxAnisotropy())),r.get(u).__currentAnisotropy=u.anisotropy}}}function z1(y,u){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,u.addEventListener("dispose",b));let z=u.source,Q=l.get(z);Q===void 0&&(Q={},l.set(z,Q));let n1=G(u);if(n1!==y.__cacheKey){Q[n1]===void 0&&(Q[n1]={texture:C.createTexture(),usedTimes:0},n.memory.textures++,I=!0),Q[n1].usedTimes++;let a1=Q[y.__cacheKey];a1!==void 0&&(Q[y.__cacheKey].usedTimes--,a1.usedTimes===0&&w(u)),y.__cacheKey=n1,y.__webglTexture=Q[n1].texture}return I}function Y(y,u,I){return Math.floor(Math.floor(y/I)/u)}function j(y,u,I,z){let n1=y.updateRanges;if(n1.length===0)t.texSubImage2D(C.TEXTURE_2D,0,0,0,u.width,u.height,I,z,u.data);else{n1.sort((O1,d1)=>O1.start-d1.start);let a1=0;for(let O1=1;O1<n1.length;O1++){let d1=n1[a1],L1=n1[O1],E1=d1.start+d1.count,B1=Y(L1.start,u.width,4),G1=Y(d1.start,u.width,4);L1.start<=E1+1&&B1===G1&&Y(L1.start+L1.count-1,u.width,4)===B1?d1.count=Math.max(d1.count,L1.start+L1.count-d1.start):(++a1,n1[a1]=L1)}n1.length=a1+1;let K=t.getParameter(C.UNPACK_ROW_LENGTH),C1=t.getParameter(C.UNPACK_SKIP_PIXELS),o1=t.getParameter(C.UNPACK_SKIP_ROWS);t.pixelStorei(C.UNPACK_ROW_LENGTH,u.width);for(let O1=0,d1=n1.length;O1<d1;O1++){let L1=n1[O1],E1=Math.floor(L1.start/4),B1=Math.ceil(L1.count/4),G1=E1%u.width,R=Math.floor(E1/u.width),s1=B1,J=1;t.pixelStorei(C.UNPACK_SKIP_PIXELS,G1),t.pixelStorei(C.UNPACK_SKIP_ROWS,R),t.texSubImage2D(C.TEXTURE_2D,0,G1,R,s1,J,I,z,u.data)}y.clearUpdateRanges(),t.pixelStorei(C.UNPACK_ROW_LENGTH,K),t.pixelStorei(C.UNPACK_SKIP_PIXELS,C1),t.pixelStorei(C.UNPACK_SKIP_ROWS,o1)}}function v1(y,u,I){let z=C.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(z=C.TEXTURE_2D_ARRAY),u.isData3DTexture&&(z=C.TEXTURE_3D);let Q=z1(y,u),n1=u.source;t.bindTexture(z,y.__webglTexture,C.TEXTURE0+I);let a1=r.get(n1);if(n1.version!==a1.__version||Q===!0){if(t.activeTexture(C.TEXTURE0+I),(typeof ImageBitmap<"u"&&u.image instanceof ImageBitmap)===!1){let J=J1.getPrimaries(J1.workingColorSpace),M1=u.colorSpace===p0?null:J1.getPrimaries(u.colorSpace),m1=u.colorSpace===p0||J===M1?C.NONE:C.BROWSER_DEFAULT_WEBGL;t.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,m1)}t.pixelStorei(C.UNPACK_ALIGNMENT,u.unpackAlignment);let C1=c(u.image,!1,i.maxTextureSize);C1=$2(u,C1);let o1=H.convert(u.format,u.colorSpace),O1=H.convert(u.type),d1=v(u.internalFormat,o1,O1,u.normalized,u.colorSpace,u.isVideoTexture);T1(z,u);let L1,E1=u.mipmaps,B1=u.isVideoTexture!==!0,G1=a1.__version===void 0||Q===!0,R=n1.dataReady,s1=Z(u,C1);if(u.isDepthTexture)d1=g(u.format===J0,u.type),G1&&(B1?t.texStorage2D(C.TEXTURE_2D,1,d1,C1.width,C1.height):t.texImage2D(C.TEXTURE_2D,0,d1,C1.width,C1.height,0,o1,O1,null));else if(u.isDataTexture)if(E1.length>0){B1&&G1&&t.texStorage2D(C.TEXTURE_2D,s1,d1,E1[0].width,E1[0].height);for(let J=0,M1=E1.length;J<M1;J++)L1=E1[J],B1?R&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,L1.width,L1.height,o1,O1,L1.data):t.texImage2D(C.TEXTURE_2D,J,d1,L1.width,L1.height,0,o1,O1,L1.data);u.generateMipmaps=!1}else B1?(G1&&t.texStorage2D(C.TEXTURE_2D,s1,d1,C1.width,C1.height),R&&j(u,C1,o1,O1)):t.texImage2D(C.TEXTURE_2D,0,d1,C1.width,C1.height,0,o1,O1,C1.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){B1&&G1&&t.texStorage3D(C.TEXTURE_2D_ARRAY,s1,d1,E1[0].width,E1[0].height,C1.depth);for(let J=0,M1=E1.length;J<M1;J++)if(L1=E1[J],u.format!==g5)if(o1!==null)if(B1){if(R)if(u.layerUpdates.size>0){let m1=dt(L1.width,L1.height,u.format,u.type);for(let i1 of u.layerUpdates){let P1=L1.data.subarray(i1*m1/L1.data.BYTES_PER_ELEMENT,(i1+1)*m1/L1.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,i1,L1.width,L1.height,1,o1,P1)}}else t.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,0,L1.width,L1.height,C1.depth,o1,L1.data)}else t.compressedTexImage3D(C.TEXTURE_2D_ARRAY,J,d1,L1.width,L1.height,C1.depth,0,L1.data,0,0);else I1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B1?R&&t.texSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,0,L1.width,L1.height,C1.depth,o1,O1,L1.data):t.texImage3D(C.TEXTURE_2D_ARRAY,J,d1,L1.width,L1.height,C1.depth,0,o1,O1,L1.data);u.layerUpdates.size>0&&u.clearLayerUpdates()}else{B1&&G1&&t.texStorage2D(C.TEXTURE_2D,s1,d1,E1[0].width,E1[0].height);for(let J=0,M1=E1.length;J<M1;J++)L1=E1[J],u.format!==g5?o1!==null?B1?R&&t.compressedTexSubImage2D(C.TEXTURE_2D,J,0,0,L1.width,L1.height,o1,L1.data):t.compressedTexImage2D(C.TEXTURE_2D,J,d1,L1.width,L1.height,0,L1.data):I1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B1?R&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,L1.width,L1.height,o1,O1,L1.data):t.texImage2D(C.TEXTURE_2D,J,d1,L1.width,L1.height,0,o1,O1,L1.data)}else if(u.isDataArrayTexture)if(B1){if(G1&&t.texStorage3D(C.TEXTURE_2D_ARRAY,s1,d1,C1.width,C1.height,C1.depth),R)if(u.layerUpdates.size>0){let J=dt(C1.width,C1.height,u.format,u.type);for(let M1 of u.layerUpdates){let m1=C1.data.subarray(M1*J/C1.data.BYTES_PER_ELEMENT,(M1+1)*J/C1.data.BYTES_PER_ELEMENT);t.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,M1,C1.width,C1.height,1,o1,O1,m1)}u.clearLayerUpdates()}else t.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,C1.width,C1.height,C1.depth,o1,O1,C1.data)}else t.texImage3D(C.TEXTURE_2D_ARRAY,0,d1,C1.width,C1.height,C1.depth,0,o1,O1,C1.data);else if(u.isData3DTexture)B1?(G1&&t.texStorage3D(C.TEXTURE_3D,s1,d1,C1.width,C1.height,C1.depth),R&&t.texSubImage3D(C.TEXTURE_3D,0,0,0,0,C1.width,C1.height,C1.depth,o1,O1,C1.data)):t.texImage3D(C.TEXTURE_3D,0,d1,C1.width,C1.height,C1.depth,0,o1,O1,C1.data);else if(u.isFramebufferTexture){if(G1)if(B1)t.texStorage2D(C.TEXTURE_2D,s1,d1,C1.width,C1.height);else{let J=C1.width,M1=C1.height;for(let m1=0;m1<s1;m1++)t.texImage2D(C.TEXTURE_2D,m1,d1,J,M1,0,o1,O1,null),J>>=1,M1>>=1}}else if(u.isHTMLTexture){if("texElementImage2D"in C){let J=C.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),C1.parentNode!==J){J.appendChild(C1),M.add(u),J.onpaint=M1=>{let m1=M1.changedElements;for(let i1 of M)m1.includes(i1.image)&&(i1.needsUpdate=!0)},J.requestPaint();return}if(C.texElementImage2D.length===3)C.texElementImage2D(C.TEXTURE_2D,C.RGBA8,C1);else{let m1=C.RGBA,i1=C.RGBA,P1=C.UNSIGNED_BYTE;C.texElementImage2D(C.TEXTURE_2D,0,m1,i1,P1,C1)}C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,C.LINEAR),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE)}}else if(E1.length>0){if(B1&&G1){let J=o2(E1[0]);t.texStorage2D(C.TEXTURE_2D,s1,d1,J.width,J.height)}for(let J=0,M1=E1.length;J<M1;J++)L1=E1[J],B1?R&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,o1,O1,L1):t.texImage2D(C.TEXTURE_2D,J,d1,o1,O1,L1);u.generateMipmaps=!1}else if(B1){if(G1){let J=o2(C1);t.texStorage2D(C.TEXTURE_2D,s1,d1,J.width,J.height)}R&&t.texSubImage2D(C.TEXTURE_2D,0,0,0,o1,O1,C1)}else t.texImage2D(C.TEXTURE_2D,0,d1,o1,O1,C1);d(u)&&S(z),a1.__version=n1.version,u.onUpdate&&u.onUpdate(u)}y.__version=u.version}function F1(y,u,I){if(u.image.length!==6)return;let z=z1(y,u),Q=u.source;t.bindTexture(C.TEXTURE_CUBE_MAP,y.__webglTexture,C.TEXTURE0+I);let n1=r.get(Q);if(Q.version!==n1.__version||z===!0){t.activeTexture(C.TEXTURE0+I);let a1=J1.getPrimaries(J1.workingColorSpace),K=u.colorSpace===p0?null:J1.getPrimaries(u.colorSpace),C1=u.colorSpace===p0||a1===K?C.NONE:C.BROWSER_DEFAULT_WEBGL;t.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,u.flipY),t.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),t.pixelStorei(C.UNPACK_ALIGNMENT,u.unpackAlignment),t.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,C1);let o1=u.isCompressedTexture||u.image[0].isCompressedTexture,O1=u.image[0]&&u.image[0].isDataTexture,d1=[];for(let i1=0;i1<6;i1++)!o1&&!O1?d1[i1]=c(u.image[i1],!0,i.maxCubemapSize):d1[i1]=O1?u.image[i1].image:u.image[i1],d1[i1]=$2(u,d1[i1]);let L1=d1[0],E1=H.convert(u.format,u.colorSpace),B1=H.convert(u.type),G1=v(u.internalFormat,E1,B1,u.normalized,u.colorSpace),R=u.isVideoTexture!==!0,s1=n1.__version===void 0||z===!0,J=Q.dataReady,M1=Z(u,L1);T1(C.TEXTURE_CUBE_MAP,u);let m1;if(o1){R&&s1&&t.texStorage2D(C.TEXTURE_CUBE_MAP,M1,G1,L1.width,L1.height);for(let i1=0;i1<6;i1++){m1=d1[i1].mipmaps;for(let P1=0;P1<m1.length;P1++){let b1=m1[P1];u.format!==g5?E1!==null?R?J&&t.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1,0,0,b1.width,b1.height,E1,b1.data):t.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1,G1,b1.width,b1.height,0,b1.data):I1("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1,0,0,b1.width,b1.height,E1,B1,b1.data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1,G1,b1.width,b1.height,0,E1,B1,b1.data)}}}else{if(m1=u.mipmaps,R&&s1){m1.length>0&&M1++;let i1=o2(d1[0]);t.texStorage2D(C.TEXTURE_CUBE_MAP,M1,G1,i1.width,i1.height)}for(let i1=0;i1<6;i1++)if(O1){R?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,0,0,0,d1[i1].width,d1[i1].height,E1,B1,d1[i1].data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,0,G1,d1[i1].width,d1[i1].height,0,E1,B1,d1[i1].data);for(let P1=0;P1<m1.length;P1++){let c2=m1[P1].image[i1].image;R?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1+1,0,0,c2.width,c2.height,E1,B1,c2.data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1+1,G1,c2.width,c2.height,0,E1,B1,c2.data)}}else{R?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,0,0,0,E1,B1,d1[i1]):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,0,G1,E1,B1,d1[i1]);for(let P1=0;P1<m1.length;P1++){let b1=m1[P1];R?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1+1,0,0,E1,B1,b1.image[i1]):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+i1,P1+1,G1,E1,B1,b1.image[i1])}}}d(u)&&S(C.TEXTURE_CUBE_MAP),n1.__version=Q.version,u.onUpdate&&u.onUpdate(u)}y.__version=u.version}function A1(y,u,I,z,Q,n1){let a1=H.convert(I.format,I.colorSpace),K=H.convert(I.type),C1=v(I.internalFormat,a1,K,I.normalized,I.colorSpace),o1=r.get(u),O1=r.get(I);if(O1.__renderTarget=u,!o1.__hasExternalTextures){let d1=Math.max(1,u.width>>n1),L1=Math.max(1,u.height>>n1);Q===C.TEXTURE_3D||Q===C.TEXTURE_2D_ARRAY?t.texImage3D(Q,n1,C1,d1,L1,u.depth,0,a1,K,null):t.texImage2D(Q,n1,C1,d1,L1,0,a1,K,null)}t.bindFramebuffer(C.FRAMEBUFFER,y),T2(u)?V.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,z,Q,O1.__webglTexture,0,g2(u)):(Q===C.TEXTURE_2D||Q>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,z,Q,O1.__webglTexture,n1),t.bindFramebuffer(C.FRAMEBUFFER,null)}function N1(y,u,I){if(C.bindRenderbuffer(C.RENDERBUFFER,y),u.depthBuffer){let z=u.depthTexture,Q=z&&z.isDepthTexture?z.type:null,n1=g(u.stencilBuffer,Q),a1=u.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;T2(u)?V.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,g2(u),n1,u.width,u.height):I?C.renderbufferStorageMultisample(C.RENDERBUFFER,g2(u),n1,u.width,u.height):C.renderbufferStorage(C.RENDERBUFFER,n1,u.width,u.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,a1,C.RENDERBUFFER,y)}else{let z=u.textures;for(let Q=0;Q<z.length;Q++){let n1=z[Q],a1=H.convert(n1.format,n1.colorSpace),K=H.convert(n1.type),C1=v(n1.internalFormat,a1,K,n1.normalized,n1.colorSpace);T2(u)?V.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,g2(u),C1,u.width,u.height):I?C.renderbufferStorageMultisample(C.RENDERBUFFER,g2(u),C1,u.width,u.height):C.renderbufferStorage(C.RENDERBUFFER,C1,u.width,u.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function l2(y,u,I){let z=u.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(C.FRAMEBUFFER,y),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(u.depthTexture);if(Q.__renderTarget=u,(!Q.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,u.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=C.createTexture(),t.bindTexture(C.TEXTURE_CUBE_MAP,Q.__webglTexture),T1(C.TEXTURE_CUBE_MAP,u.depthTexture);let o1=H.convert(u.depthTexture.format),O1=H.convert(u.depthTexture.type),d1;u.depthTexture.format===X5?d1=C.DEPTH_COMPONENT24:u.depthTexture.format===J0&&(d1=C.DEPTH24_STENCIL8);for(let L1=0;L1<6;L1++)C.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+L1,0,d1,u.width,u.height,0,o1,O1,null)}}else r1(u.depthTexture,0);let n1=Q.__webglTexture,a1=g2(u),K=z?C.TEXTURE_CUBE_MAP_POSITIVE_X+I:C.TEXTURE_2D,C1=u.depthTexture.format===J0?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;if(u.depthTexture.format===X5)T2(u)?V.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C1,K,n1,0,a1):C.framebufferTexture2D(C.FRAMEBUFFER,C1,K,n1,0);else if(u.depthTexture.format===J0)T2(u)?V.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,C1,K,n1,0,a1):C.framebufferTexture2D(C.FRAMEBUFFER,C1,K,n1,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W1(y){let u=r.get(y),I=y.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==y.depthTexture){let z=y.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),z){let Q=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,z.removeEventListener("dispose",Q)};z.addEventListener("dispose",Q),u.__depthDisposeCallback=Q}u.__boundDepthTexture=z}if(y.depthTexture&&!u.__autoAllocateDepthBuffer)if(I)for(let z=0;z<6;z++)l2(u.__webglFramebuffer[z],y,z);else{let z=y.texture.mipmaps;z&&z.length>0?l2(u.__webglFramebuffer[0],y,0):l2(u.__webglFramebuffer,y,0)}else if(I){u.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(C.FRAMEBUFFER,u.__webglFramebuffer[z]),u.__webglDepthbuffer[z]===void 0)u.__webglDepthbuffer[z]=C.createRenderbuffer(),N1(u.__webglDepthbuffer[z],y,!1);else{let Q=y.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,n1=u.__webglDepthbuffer[z];C.bindRenderbuffer(C.RENDERBUFFER,n1),C.framebufferRenderbuffer(C.FRAMEBUFFER,Q,C.RENDERBUFFER,n1)}}else{let z=y.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(C.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(C.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=C.createRenderbuffer(),N1(u.__webglDepthbuffer,y,!1);else{let Q=y.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,n1=u.__webglDepthbuffer;C.bindRenderbuffer(C.RENDERBUFFER,n1),C.framebufferRenderbuffer(C.FRAMEBUFFER,Q,C.RENDERBUFFER,n1)}}t.bindFramebuffer(C.FRAMEBUFFER,null)}function r2(y,u,I){let z=r.get(y);u!==void 0&&A1(z.__webglFramebuffer,y,y.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),I!==void 0&&W1(y)}function d2(y){let u=y.texture,I=r.get(y),z=r.get(u);y.addEventListener("dispose",A);let Q=y.textures,n1=y.isWebGLCubeRenderTarget===!0,a1=Q.length>1;if(a1||(z.__webglTexture===void 0&&(z.__webglTexture=C.createTexture()),z.__version=u.version,n.memory.textures++),n1){I.__webglFramebuffer=[];for(let K=0;K<6;K++)if(u.mipmaps&&u.mipmaps.length>0){I.__webglFramebuffer[K]=[];for(let C1=0;C1<u.mipmaps.length;C1++)I.__webglFramebuffer[K][C1]=C.createFramebuffer()}else I.__webglFramebuffer[K]=C.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){I.__webglFramebuffer=[];for(let K=0;K<u.mipmaps.length;K++)I.__webglFramebuffer[K]=C.createFramebuffer()}else I.__webglFramebuffer=C.createFramebuffer();if(a1)for(let K=0,C1=Q.length;K<C1;K++){let o1=r.get(Q[K]);o1.__webglTexture===void 0&&(o1.__webglTexture=C.createTexture(),n.memory.textures++)}if(y.samples>0&&T2(y)===!1){I.__webglMultisampledFramebuffer=C.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(C.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let K=0;K<Q.length;K++){let C1=Q[K];I.__webglColorRenderbuffer[K]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,I.__webglColorRenderbuffer[K]);let o1=H.convert(C1.format,C1.colorSpace),O1=H.convert(C1.type),d1=v(C1.internalFormat,o1,O1,C1.normalized,C1.colorSpace,y.isXRRenderTarget===!0),L1=g2(y);C.renderbufferStorageMultisample(C.RENDERBUFFER,L1,d1,y.width,y.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+K,C.RENDERBUFFER,I.__webglColorRenderbuffer[K])}C.bindRenderbuffer(C.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=C.createRenderbuffer(),N1(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(C.FRAMEBUFFER,null)}}if(n1){t.bindTexture(C.TEXTURE_CUBE_MAP,z.__webglTexture),T1(C.TEXTURE_CUBE_MAP,u);for(let K=0;K<6;K++)if(u.mipmaps&&u.mipmaps.length>0)for(let C1=0;C1<u.mipmaps.length;C1++)A1(I.__webglFramebuffer[K][C1],y,u,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+K,C1);else A1(I.__webglFramebuffer[K],y,u,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(u)&&S(C.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(a1){for(let K=0,C1=Q.length;K<C1;K++){let o1=Q[K],O1=r.get(o1),d1=C.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(d1=y.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),t.bindTexture(d1,O1.__webglTexture),T1(d1,o1),A1(I.__webglFramebuffer,y,o1,C.COLOR_ATTACHMENT0+K,d1,0),d(o1)&&S(d1)}t.unbindTexture()}else{let K=C.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(K=y.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),t.bindTexture(K,z.__webglTexture),T1(K,u),u.mipmaps&&u.mipmaps.length>0)for(let C1=0;C1<u.mipmaps.length;C1++)A1(I.__webglFramebuffer[C1],y,u,C.COLOR_ATTACHMENT0,K,C1);else A1(I.__webglFramebuffer,y,u,C.COLOR_ATTACHMENT0,K,0);d(u)&&S(K),t.unbindTexture()}y.depthBuffer&&W1(y)}function K1(y){let u=y.textures;for(let I=0,z=u.length;I<z;I++){let Q=u[I];if(d(Q)){let n1=_(y),a1=r.get(Q).__webglTexture;t.bindTexture(n1,a1),S(n1),t.unbindTexture()}}}let x2=[],D2=[];function o5(y){if(y.samples>0){if(T2(y)===!1){let u=y.textures,I=y.width,z=y.height,Q=C.COLOR_BUFFER_BIT,n1=y.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,a1=r.get(y),K=u.length>1;if(K)for(let o1=0;o1<u.length;o1++)t.bindFramebuffer(C.FRAMEBUFFER,a1.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+o1,C.RENDERBUFFER,null),t.bindFramebuffer(C.FRAMEBUFFER,a1.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+o1,C.TEXTURE_2D,null,0);t.bindFramebuffer(C.READ_FRAMEBUFFER,a1.__webglMultisampledFramebuffer);let C1=y.texture.mipmaps;C1&&C1.length>0?t.bindFramebuffer(C.DRAW_FRAMEBUFFER,a1.__webglFramebuffer[0]):t.bindFramebuffer(C.DRAW_FRAMEBUFFER,a1.__webglFramebuffer);for(let o1=0;o1<u.length;o1++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=C.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=C.STENCIL_BUFFER_BIT)),K){C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,a1.__webglColorRenderbuffer[o1]);let O1=r.get(u[o1]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,O1,0)}C.blitFramebuffer(0,0,I,z,0,0,I,z,Q,C.NEAREST),a===!0&&(x2.length=0,D2.length=0,x2.push(C.COLOR_ATTACHMENT0+o1),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(x2.push(n1),D2.push(n1),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,D2)),C.invalidateFramebuffer(C.READ_FRAMEBUFFER,x2))}if(t.bindFramebuffer(C.READ_FRAMEBUFFER,null),t.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),K)for(let o1=0;o1<u.length;o1++){t.bindFramebuffer(C.FRAMEBUFFER,a1.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+o1,C.RENDERBUFFER,a1.__webglColorRenderbuffer[o1]);let O1=r.get(u[o1]).__webglTexture;t.bindFramebuffer(C.FRAMEBUFFER,a1.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+o1,C.TEXTURE_2D,O1,0)}t.bindFramebuffer(C.DRAW_FRAMEBUFFER,a1.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&a){let u=y.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[u])}}}function g2(y){return Math.min(i.maxSamples,y.samples)}function T2(y){let u=r.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function B(y){let u=n.render.frame;L.get(y)!==u&&(L.set(y,u),y.update())}function $2(y,u){let I=y.colorSpace,z=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==G7&&I!==p0&&(J1.getTransfer(I)===V2?(z!==g5||Q!==s5)&&I1("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):k1("WebGLTextures: Unsupported texture color space:",I)),u}function o2(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(o.width=y.naturalWidth||y.width,o.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(o.width=y.displayWidth,o.height=y.displayHeight):(o.width=y.width,o.height=y.height),o}this.allocateTextureUnit=X,this.resetTextureUnits=U,this.getTextureUnits=E,this.setTextureUnits=k,this.setTexture2D=r1,this.setTexture2DArray=W,this.setTexture3D=e1,this.setTextureCube=t1,this.rebindTextures=r2,this.setupRenderTarget=d2,this.updateRenderTargetMipmap=K1,this.updateMultisampleRenderTarget=o5,this.setupDepthRenderbuffer=W1,this.setupFrameBufferTexture=A1,this.useMultisampledRTT=T2,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ad(C,e){function t(r,i=p0){let H,n=J1.getTransfer(i);if(r===s5)return C.UNSIGNED_BYTE;if(r===c6)return C.UNSIGNED_SHORT_4_4_4_4;if(r===p6)return C.UNSIGNED_SHORT_5_5_5_1;if(r===Ct)return C.UNSIGNED_INT_5_9_9_9_REV;if(r===rt)return C.UNSIGNED_INT_10F_11F_11F_REV;if(r===et)return C.BYTE;if(r===tt)return C.SHORT;if(r===M7)return C.UNSIGNED_SHORT;if(r===d6)return C.INT;if(r===F5)return C.UNSIGNED_INT;if(r===k5)return C.FLOAT;if(r===D5)return C.HALF_FLOAT;if(r===it)return C.ALPHA;if(r===Ht)return C.RGB;if(r===g5)return C.RGBA;if(r===X5)return C.DEPTH_COMPONENT;if(r===J0)return C.DEPTH_STENCIL;if(r===nt)return C.RED;if(r===u6)return C.RED_INTEGER;if(r===j0)return C.RG;if(r===A6)return C.RG_INTEGER;if(r===m6)return C.RGBA_INTEGER;if(r===h4||r===f4||r===v4||r===x4)if(n===V2)if(H=e.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(r===h4)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===f4)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===v4)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===x4)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=e.get("WEBGL_compressed_texture_s3tc"),H!==null){if(r===h4)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===f4)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===v4)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===x4)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===h6||r===f6||r===v6||r===x6)if(H=e.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(r===h6)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===f6)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===v6)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===x6)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===S6||r===g6||r===Z6||r===y6||r===_6||r===S4||r===b6)if(H=e.get("WEBGL_compressed_texture_etc"),H!==null){if(r===S6||r===g6)return n===V2?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(r===Z6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(r===y6)return H.COMPRESSED_R11_EAC;if(r===_6)return H.COMPRESSED_SIGNED_R11_EAC;if(r===S4)return H.COMPRESSED_RG11_EAC;if(r===b6)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===w6||r===T6||r===O6||r===E6||r===R6||r===P6||r===B6||r===I6||r===F6||r===k6||r===D6||r===N6||r===U6||r===z6)if(H=e.get("WEBGL_compressed_texture_astc"),H!==null){if(r===w6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===T6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===O6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===E6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===R6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===P6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===B6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===I6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===F6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===k6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===D6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===N6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===U6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===z6)return n===V2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===G6||r===W6||r===$6)if(H=e.get("EXT_texture_compression_bptc"),H!==null){if(r===G6)return n===V2?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===W6)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$6)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===q6||r===X6||r===g4||r===Y6)if(H=e.get("EXT_texture_compression_rgtc"),H!==null){if(r===q6)return H.COMPRESSED_RED_RGTC1_EXT;if(r===X6)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===g4)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Y6)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===l7?C.UNSIGNED_INT_24_8:C[r]!==void 0?C[r]:null}return{convert:t}}var md=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hd=`
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

}`,Et=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let r=new t4(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new p5({vertexShader:md,fragmentShader:hd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V5(new L4(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rt=class extends Y5{constructor(e,t){super();let r=this,i=null,H=1,n=null,V="local-floor",a=1,o=null,L=null,M=null,s=null,l=null,p=null,f=typeof XRWebGLBinding<"u",c=new Et,d={},S=t.getContextAttributes(),_=null,v=null,g=[],Z=[],b=new g1,A=null,x=null,w=new K2;w.viewport=new S2;let P=new K2;P.viewport=new S2;let F=[w,P],U=new o6,E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=g[Y];return j===void 0&&(j=new t7,g[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=g[Y];return j===void 0&&(j=new t7,g[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=g[Y];return j===void 0&&(j=new t7,g[Y]=j),j.getHandSpace()};function X(Y){let j=Z.indexOf(Y.inputSource);if(j===-1)return;let v1=g[j];v1!==void 0&&(v1.update(Y.inputSource,Y.frame,o||n),v1.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",r1);for(let Y=0;Y<g.length;Y++){let j=Z[Y];j!==null&&(Z[Y]=null,g[Y].disconnect(j))}E=null,k=null,c.reset();for(let Y in d)delete d[Y];if(e.setRenderTarget(_),l=null,s=null,M=null,i=null,v=null,z1.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),x!==null){let Y=x.camera;Y.fov=x.fov,Y.zoom=x.zoom,Y.updateProjectionMatrix(),x=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){H=Y,r.isPresenting===!0&&I1("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){V=Y,r.isPresenting===!0&&I1("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||n},this.setReferenceSpace=function(Y){o=Y},this.getBaseLayer=function(){return s!==null?s:l},this.getBinding=function(){return M===null&&f&&(M=new XRWebGLBinding(i,t)),M},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",G),i.addEventListener("inputsourceschange",r1),S.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let v1=null,F1=null,A1=null;S.depth&&(A1=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,v1=S.stencil?J0:X5,F1=S.stencil?l7:F5);let N1={colorFormat:t.RGBA8,depthFormat:A1,scaleFactor:H};M=this.getBinding(),s=M.createProjectionLayer(N1),i.updateRenderState({layers:[s]}),e.setPixelRatio(1),e.setSize(s.textureWidth,s.textureHeight,!1),v=new L5(s.textureWidth,s.textureHeight,{format:g5,type:s5,depthTexture:new G0(s.textureWidth,s.textureHeight,F1,void 0,void 0,void 0,void 0,void 0,void 0,v1),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1,resolveStencilBuffer:s.ignoreDepthValues===!1,storeMultisampledDepthBuffer:s.ignoreDepthValues===!1,storeMultisampledStencilBuffer:s.ignoreDepthValues===!1})}else{let v1={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:H};l=new XRWebGLLayer(i,t,v1),i.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),v=new L5(l.framebufferWidth,l.framebufferHeight,{format:g5,type:s5,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),o=null,n=await i.requestReferenceSpace(V),z1.setContext(i),z1.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function r1(Y){for(let j=0;j<Y.removed.length;j++){let v1=Y.removed[j],F1=Z.indexOf(v1);F1>=0&&(Z[F1]=null,g[F1].disconnect(v1))}for(let j=0;j<Y.added.length;j++){let v1=Y.added[j],F1=Z.indexOf(v1);if(F1===-1){for(let N1=0;N1<g.length;N1++)if(N1>=Z.length){Z.push(v1),F1=N1;break}else if(Z[N1]===null){Z[N1]=v1,F1=N1;break}if(F1===-1)break}let A1=g[F1];A1&&A1.connect(v1)}}let W=new T,e1=new T;function t1(Y,j,v1){W.setFromMatrixPosition(j.matrixWorld),e1.setFromMatrixPosition(v1.matrixWorld);let F1=W.distanceTo(e1),A1=j.projectionMatrix.elements,N1=v1.projectionMatrix.elements,l2=A1[14]/(A1[10]-1),W1=A1[14]/(A1[10]+1),r2=(A1[9]+1)/A1[5],d2=(A1[9]-1)/A1[5],K1=(A1[8]-1)/A1[0],x2=(N1[8]+1)/N1[0],D2=l2*K1,o5=l2*x2,g2=F1/(-K1+x2),T2=g2*-K1;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(T2),Y.translateZ(g2),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),A1[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=l2+g2,$2=W1+g2,o2=D2-T2,y=o5+(F1-T2),u=r2*W1/$2*B,I=d2*W1/$2*B;Y.projectionMatrix.makePerspective(o2,y,u,I,B,$2),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z1(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,v1=Y.far;c.texture!==null&&(c.depthNear>0&&(j=c.depthNear),c.depthFar>0&&(v1=c.depthFar)),U.near=P.near=w.near=j,U.far=P.far=w.far=v1,(E!==U.near||k!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),E=U.near,k=U.far),U.layers.mask=Y.layers.mask|6,w.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let F1=Y.parent,A1=U.cameras;Z1(U,F1);for(let N1=0;N1<A1.length;N1++)Z1(A1[N1],F1);A1.length===2?t1(U,w,P):U.projectionMatrix.copy(w.projectionMatrix),x===null&&Y.isPerspectiveCamera&&(x={camera:Y,fov:Y.fov,zoom:Y.zoom}),f1(Y,U,F1)};function f1(Y,j,v1){v1===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(v1.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=J3*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(s===null&&l===null))return a},this.setFoveation=function(Y){a=Y,s!==null&&(s.fixedFoveation=Y),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=Y)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(U)},this.getCameraTexture=function(Y){return d[Y]};let $1=null;function T1(Y,j){if(L=j.getViewerPose(o||n),p=j,L!==null){let v1=L.views;l!==null&&(e.setRenderTargetFramebuffer(v,l.framebuffer),e.setRenderTarget(v));let F1=!1;v1.length!==U.cameras.length&&(U.cameras.length=0,F1=!0);for(let W1=0;W1<v1.length;W1++){let r2=v1[W1],d2=null;if(l!==null)d2=l.getViewport(r2);else{let x2=M.getViewSubImage(s,r2);d2=x2.viewport,W1===0&&(e.setRenderTargetTextures(v,x2.colorTexture,x2.depthStencilTexture),e.setRenderTarget(v))}let K1=F[W1];K1===void 0&&(K1=new K2,K1.layers.enable(W1),K1.viewport=new S2,F[W1]=K1),K1.matrix.fromArray(r2.transform.matrix),K1.matrix.decompose(K1.position,K1.quaternion,K1.scale),K1.projectionMatrix.fromArray(r2.projectionMatrix),K1.projectionMatrixInverse.copy(K1.projectionMatrix).invert(),K1.viewport.set(d2.x,d2.y,d2.width,d2.height),W1===0&&(U.matrix.copy(K1.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),F1===!0&&U.cameras.push(K1)}let A1=i.enabledFeatures;if(A1&&A1.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){M=r.getBinding();let W1=M.getDepthInformation(v1[0]);W1&&W1.isValid&&W1.texture&&c.init(W1,i.renderState)}if(A1&&A1.includes("camera-access")&&f){e.state.unbindTexture(),M=r.getBinding();for(let W1=0;W1<v1.length;W1++){let r2=v1[W1].camera;if(r2){let d2=d[r2];d2||(d2=new t4,d[r2]=d2);let K1=M.getCameraImage(r2);d2.sourceTexture=K1}}}}for(let v1=0;v1<g.length;v1++){let F1=Z[v1],A1=g[v1];F1!==null&&A1!==void 0&&A1.update(F1,j,o||n)}$1&&$1(Y,j),j.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:j}),p=null}let z1=new wi;z1.setAnimationLoop(T1),this.setAnimationLoop=function(Y){$1=Y},this.dispose=function(){}}},fd=new s2,Bi=new D1;Bi.set(-1,0,0,0,1,0,0,0,1);function vd(C,e){function t(c,d){c.matrixAutoUpdate===!0&&c.updateMatrix(),d.value.copy(c.matrix)}function r(c,d){d.color.getRGB(c.fogColor.value,st(C)),d.isFog?(c.fogNear.value=d.near,c.fogFar.value=d.far):d.isFogExp2&&(c.fogDensity.value=d.density)}function i(c,d,S,_,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?H(c,d):d.isMeshLambertMaterial?(H(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(H(c,d),M(c,d)):d.isMeshPhongMaterial?(H(c,d),L(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(H(c,d),s(c,d),d.isMeshPhysicalMaterial&&l(c,d,v)):d.isMeshMatcapMaterial?(H(c,d),p(c,d)):d.isMeshDepthMaterial?H(c,d):d.isMeshDistanceMaterial?(H(c,d),f(c,d)):d.isMeshNormalMaterial?H(c,d):d.isLineBasicMaterial?(n(c,d),d.isLineDashedMaterial&&V(c,d)):d.isPointsMaterial?a(c,d,S,_):d.isSpriteMaterial?o(c,d):d.isShadowMaterial?(c.color.value.copy(d.color),c.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function H(c,d){c.opacity.value=d.opacity,d.color&&c.diffuse.value.copy(d.color),d.emissive&&c.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.bumpMap&&(c.bumpMap.value=d.bumpMap,t(d.bumpMap,c.bumpMapTransform),c.bumpScale.value=d.bumpScale,d.side===a5&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,t(d.normalMap,c.normalMapTransform),c.normalScale.value.copy(d.normalScale),d.side===a5&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,t(d.displacementMap,c.displacementMapTransform),c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,c.emissiveMapTransform)),d.specularMap&&(c.specularMap.value=d.specularMap,t(d.specularMap,c.specularMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest);let S=e.get(d),_=S.envMap,v=S.envMapRotation;_&&(c.envMap.value=_,c.envMapRotation.value.setFromMatrix4(fd.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Bi),c.reflectivity.value=d.reflectivity,c.ior.value=d.ior,c.refractionRatio.value=d.refractionRatio),d.lightMap&&(c.lightMap.value=d.lightMap,c.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,c.lightMapTransform)),d.aoMap&&(c.aoMap.value=d.aoMap,c.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,c.aoMapTransform))}function n(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform))}function V(c,d){c.dashSize.value=d.dashSize,c.totalSize.value=d.dashSize+d.gapSize,c.scale.value=d.scale}function a(c,d,S,_){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.size.value=d.size*S,c.scale.value=_*.5,d.map&&(c.map.value=d.map,t(d.map,c.uvTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function o(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.rotation.value=d.rotation,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function L(c,d){c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4)}function M(c,d){d.gradientMap&&(c.gradientMap.value=d.gradientMap)}function s(c,d){c.metalness.value=d.metalness,d.metalnessMap&&(c.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,c.metalnessMapTransform)),c.roughness.value=d.roughness,d.roughnessMap&&(c.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,c.roughnessMapTransform)),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)}function l(c,d,S){c.ior.value=d.ior,d.sheen>0&&(c.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),c.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(c.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,c.sheenColorMapTransform)),d.sheenRoughnessMap&&(c.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,c.sheenRoughnessMapTransform))),d.clearcoat>0&&(c.clearcoat.value=d.clearcoat,c.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(c.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,c.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(c.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===a5&&c.clearcoatNormalScale.value.negate())),d.dispersion>0&&(c.dispersion.value=d.dispersion),d.retroreflectivity>0&&(c.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(c.iridescence.value=d.iridescence,c.iridescenceIOR.value=d.iridescenceIOR,c.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(c.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,c.iridescenceMapTransform)),d.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),d.transmission>0&&(c.transmission.value=d.transmission,c.transmissionSamplerMap.value=S.texture,c.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(c.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,c.transmissionMapTransform)),c.thickness.value=d.thickness,d.thicknessMap&&(c.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=d.attenuationDistance,c.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(c.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(c.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=d.specularIntensity,c.specularColor.value.copy(d.specularColor),d.specularColorMap&&(c.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,c.specularColorMapTransform)),d.specularIntensityMap&&(c.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,c.specularIntensityMapTransform))}function p(c,d){d.matcap&&(c.matcap.value=d.matcap)}function f(c,d){let S=e.get(d).light;c.referencePosition.value.setFromMatrixPosition(S.matrixWorld),c.nearDistance.value=S.shadow.camera.near,c.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xd(C,e,t,r){let i={},H={},n=[],V=C.getParameter(C.MAX_UNIFORM_BUFFER_BINDINGS);function a(v,g){let Z=g.program;r.uniformBlockBinding(v,Z)}function o(v,g){let Z=i[v.id];Z===void 0&&(c(v),Z=L(v),i[v.id]=Z,v.addEventListener("dispose",S));let b=g.program;r.updateUBOMapping(v,b);let A=e.render.frame;H[v.id]!==A&&(s(v),H[v.id]=A)}function L(v){let g=M();v.__bindingPointIndex=g;let Z=C.createBuffer(),b=v.__size,A=v.usage;return C.bindBuffer(C.UNIFORM_BUFFER,Z),C.bufferData(C.UNIFORM_BUFFER,b,A),C.bindBuffer(C.UNIFORM_BUFFER,null),C.bindBufferBase(C.UNIFORM_BUFFER,g,Z),Z}function M(){for(let v=0;v<V;v++)if(n.indexOf(v)===-1)return n.push(v),v;return k1("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(v){let g=i[v.id],Z=v.uniforms,b=v.__cache;C.bindBuffer(C.UNIFORM_BUFFER,g);for(let A=0,x=Z.length;A<x;A++){let w=Z[A];if(Array.isArray(w))for(let P=0,F=w.length;P<F;P++)l(w[P],A,P,b);else l(w,A,0,b)}C.bindBuffer(C.UNIFORM_BUFFER,null)}function l(v,g,Z,b){if(f(v,g,Z,b)===!0){let A=v.__offset,x=v.value;if(Array.isArray(x)){let w=0;for(let P=0;P<x.length;P++){let F=x[P],U=d(F);p(F,v.__data,w),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(w+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(x,v.__data,0);C.bufferSubData(C.UNIFORM_BUFFER,A,v.__data)}}function p(v,g,Z){typeof v=="number"||typeof v=="boolean"?g[0]=v:v.isMatrix3?(g[0]=v.elements[0],g[1]=v.elements[1],g[2]=v.elements[2],g[3]=0,g[4]=v.elements[3],g[5]=v.elements[4],g[6]=v.elements[5],g[7]=0,g[8]=v.elements[6],g[9]=v.elements[7],g[10]=v.elements[8],g[11]=0):ArrayBuffer.isView(v)?g.set(new v.constructor(v.buffer,v.byteOffset,g.length)):v.toArray(g,Z)}function f(v,g,Z,b){let A=v.value,x=g+"_"+Z;if(b[x]===void 0)return typeof A=="number"||typeof A=="boolean"?b[x]=A:ArrayBuffer.isView(A)?b[x]=A.slice():b[x]=A.clone(),!0;{let w=b[x];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return b[x]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(w.equals(A)===!1)return w.copy(A),!0}}return!1}function c(v){let g=v.uniforms,Z=0,b=16;for(let x=0,w=g.length;x<w;x++){let P=Array.isArray(g[x])?g[x]:[g[x]];for(let F=0,U=P.length;F<U;F++){let E=P[F],k=Array.isArray(E.value)?E.value:[E.value];for(let X=0,G=k.length;X<G;X++){let r1=k[X],W=d(r1),e1=Z%b,t1=e1%W.boundary,Z1=e1+t1;Z+=t1,Z1!==0&&b-Z1<W.storage&&(Z+=b-Z1),E.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=Z,Z+=W.storage}}}let A=Z%b;return A>0&&(Z+=b-A),v.__size=Z,v.__cache={},this}function d(v){let g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?I1("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(g.boundary=16,g.storage=v.byteLength):I1("WebGLRenderer: Unsupported uniform value type.",v),g}function S(v){let g=v.target;g.removeEventListener("dispose",S);let Z=n.indexOf(g.__bindingPointIndex);n.splice(Z,1),C.deleteBuffer(i[g.id]),delete i[g.id],delete H[g.id]}function _(){for(let v in i)C.deleteBuffer(i[v]);n=[],i={},H={}}return{bind:a,update:o,dispose:_}}var Sd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),J5=null;function gd(){return J5===null&&(J5=new D9(Sd,16,16,j0,D5),J5.name="DFG_LUT",J5.minFilter=W2,J5.magFilter=W2,J5.wrapS=q5,J5.wrapT=q5,J5.generateMipmaps=!1,J5.needsUpdate=!0),J5}var i8=class{constructor(e={}){let{canvas:t=Kr(),context:r=null,depth:i=!0,stencil:H=!1,alpha:n=!1,antialias:V=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:o=!1,powerPreference:L="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:s=!1,outputBufferType:l=s5}=e;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=n;let f=l,c=new Set([m6,A6,u6]),d=new Set([s5,F5,M7,l7,c6,p6]),S=new Uint32Array(4),_=new Int32Array(4),v=new T,g=null,Z=null,b=[],A=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=I5,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,P=!1,F=null,U=null,E=null,k=null;this._outputColorSpace=Q2;let X=0,G=0,r1=null,W=-1,e1=null,t1=new S2,Z1=new S2,f1=null,$1=new U1(0),T1=0,z1=t.width,Y=t.height,j=1,v1=null,F1=null,A1=new S2(0,0,z1,Y),N1=new S2(0,0,z1,Y),l2=!1,W1=new r7,r2=!1,d2=!1,K1=new s2,x2=new T,D2=new S2,o5={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},g2=!1;function T2(){return r1===null?j:1}let B=r;function $2(h,O){return t.getContext(h,O)}let o2,y,u,I,z,Q,n1,a1,K,C1,o1,O1,d1,L1,E1,B1,G1,R,s1,J,M1,m1,i1;try{let h={alpha:!0,depth:i,stencil:H,antialias:V,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:L,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",c2,!1),t.addEventListener("webglcontextrestored",H2,!1),t.addEventListener("webglcontextcreationerror",b5,!1),B===null){let O="webgl2";if(B=$2(O,h),B===null)throw $2(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}P1()}catch(h){throw t.removeEventListener("webglcontextlost",c2,!1),t.removeEventListener("webglcontextrestored",H2,!1),t.removeEventListener("webglcontextcreationerror",b5,!1),k1("WebGLRenderer: "+h.message),h}function P1(){o2=new OM(B),o2.init(),M1=new Ad(B,o2),y=new vM(B,o2,e,M1),u=new pd(B,o2),y.reversedDepthBuffer&&s&&u.buffers.depth.setReversed(!0),U=B.createFramebuffer(),E=B.createFramebuffer(),k=B.createFramebuffer(),I=new PM(B),z=new Cd,Q=new ud(B,o2,u,z,y,M1,I),n1=new TM(w),a1=new Io(B),m1=new hM(B,a1),K=new EM(B,a1,I,m1),C1=new IM(B,K,a1,m1,I),R=new BM(B,y,Q),E1=new xM(z),o1=new td(w,n1,o2,y,m1,E1),O1=new vd(w,z),d1=new id,L1=new Ld(o2),G1=new mM(w,n1,u,C1,p,a),B1=new cd(w,C1,y),i1=new xd(B,I,y,u),s1=new fM(B,o2,I),J=new RM(B,o2,I),I.programs=o1.programs,w.capabilities=y,w.extensions=o2,w.properties=z,w.renderLists=d1,w.shadowMap=B1,w.state=u,w.info=I}f!==s5&&(x=new kM(f,t.width,t.height,V,i,H));let b1=new Rt(w,B);this.xr=b1,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let h=o2.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=o2.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(h){h!==void 0&&(j=h,this.setSize(z1,Y,!1))},this.getSize=function(h){return h.set(z1,Y)},this.setSize=function(h,O,q=!0){if(b1.isPresenting){I1("WebGLRenderer: Can't change size while VR device is presenting.");return}z1=h,Y=O,t.width=Math.floor(h*j),t.height=Math.floor(O*j),q===!0&&(t.style.width=h+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,h,O)},this.getDrawingBufferSize=function(h){return h.set(z1*j,Y*j).floor()},this.setDrawingBufferSize=function(h,O,q){z1=h,Y=O,j=q,t.width=Math.floor(h*q),t.height=Math.floor(O*q),this.setViewport(0,0,h,O)},this.setEffects=function(h){if(f===s5){k1("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(h){for(let O=0;O<h.length;O++)if(h[O].isOutputPass===!0){I1("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(h||[])},this.getCurrentViewport=function(h){return h.copy(t1)},this.getViewport=function(h){return h.copy(A1)},this.setViewport=function(h,O,q,D){h.isVector4?A1.set(h.x,h.y,h.z,h.w):A1.set(h,O,q,D),u.viewport(t1.copy(A1).multiplyScalar(j).round())},this.getScissor=function(h){return h.copy(N1)},this.setScissor=function(h,O,q,D){h.isVector4?N1.set(h.x,h.y,h.z,h.w):N1.set(h,O,q,D),u.scissor(Z1.copy(N1).multiplyScalar(j).round())},this.getScissorTest=function(){return l2},this.setScissorTest=function(h){u.setScissorTest(l2=h)},this.setOpaqueSort=function(h){v1=h},this.setTransparentSort=function(h){F1=h},this.getClearColor=function(h){return h.copy(G1.getClearColor())},this.setClearColor=function(){G1.setClearColor(...arguments)},this.getClearAlpha=function(){return G1.getClearAlpha()},this.setClearAlpha=function(){G1.setClearAlpha(...arguments)},this.clear=function(h=!0,O=!0,q=!0){let D=0;if(h){let N=!1;if(r1!==null){let u1=r1.texture.format;N=c.has(u1)}if(N){let u1=r1.texture.type,S1=d.has(u1),p1=G1.getClearColor(),y1=G1.getClearAlpha(),w1=p1.r,q1=p1.g,Q1=p1.b;S1?(S[0]=w1,S[1]=q1,S[2]=Q1,S[3]=y1,B.clearBufferuiv(B.COLOR,0,S)):(_[0]=w1,_[1]=q1,_[2]=Q1,_[3]=y1,B.clearBufferiv(B.COLOR,0,_))}else D|=B.COLOR_BUFFER_BIT}O&&(D|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(D|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&B.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(h){h.setRenderer(this),F=h},this.dispose=function(){t.removeEventListener("webglcontextlost",c2,!1),t.removeEventListener("webglcontextrestored",H2,!1),t.removeEventListener("webglcontextcreationerror",b5,!1),G1.dispose(),d1.dispose(),L1.dispose(),z.dispose(),n1.dispose(),C1.dispose(),m1.dispose(),i1.dispose(),o1.dispose(),b1.dispose(),b1.removeEventListener("sessionstart",TC),b1.removeEventListener("sessionend",OC),V3.stop()};function c2(h){h.preventDefault(),at("WebGLRenderer: Context Lost."),P=!0}function H2(){at("WebGLRenderer: Context Restored."),P=!1;let h=I.autoReset,O=B1.enabled,q=B1.autoUpdate,D=B1.needsUpdate,N=B1.type;P1(),I.autoReset=h,B1.enabled=O,B1.autoUpdate=q,B1.needsUpdate=D,B1.type=N}function b5(h){k1("WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function G5(h){let O=h.target;O.removeEventListener("dispose",G5),Va(O)}function Va(h){aa(h),z.remove(h)}function aa(h){let O=z.get(h).programs;O!==void 0&&(O.forEach(function(q){o1.releaseProgram(q)}),h.isShaderMaterial&&o1.releaseShaderCache(h))}this.renderBufferDirect=function(h,O,q,D,N,u1){O===null&&(O=o5);let S1=N.isMesh&&N.matrixWorld.determinantAffine()<0,p1=sa(h,O,q,D,N);u.setMaterial(D,S1);let y1=q.index,w1=1;if(D.wireframe===!0){if(y1=K.getWireframeAttribute(q),y1===void 0)return;w1=2}let q1=q.drawRange,Q1=q.attributes.position,_1=q1.start*w1,n2=(q1.start+q1.count)*w1;u1!==null&&(_1=Math.max(_1,u1.start*w1),n2=Math.min(n2,(u1.start+u1.count)*w1)),y1!==null?(_1=Math.max(_1,0),n2=Math.min(n2,y1.count)):Q1!=null&&(_1=Math.max(_1,0),n2=Math.min(n2,Q1.count));let O2=n2-_1;if(O2<0||O2===1/0)return;m1.setup(N,D,p1,q,y1);let m2,M2=s1;if(y1!==null&&(m2=a1.get(y1),M2=J,M2.setIndex(m2)),N.isMesh)D.wireframe===!0?(u.setLineWidth(D.wireframeLinewidth*T2()),M2.setMode(B.LINES)):M2.setMode(B.TRIANGLES);else if(N.isLine){let q2=D.linewidth;q2===void 0&&(q2=1),u.setLineWidth(q2*T2()),N.isLineSegments?M2.setMode(B.LINES):N.isLineLoop?M2.setMode(B.LINE_LOOP):M2.setMode(B.LINE_STRIP)}else N.isPoints?M2.setMode(B.POINTS):N.isSprite&&M2.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(o2.get("WEBGL_multi_draw"))M2.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let q2=N._multiDrawStarts,x1=N._multiDrawCounts,C5=N._multiDrawCount,t2=y1?a1.get(y1).bytesPerElement:1,f5=z.get(D).currentProgram.getUniforms();for(let W5=0;W5<C5;W5++)f5.setValue(B,"_gl_DrawID",W5),M2.render(q2[W5]/t2,x1[W5])}else if(N.isInstancedMesh)M2.renderInstances(_1,O2,N.count);else if(q.isInstancedBufferGeometry){let q2=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,x1=Math.min(q.instanceCount,q2);M2.renderInstances(_1,O2,x1)}else M2.render(_1,O2)};function wC(h,O,q,D){F!==null&&h.isNodeMaterial&&F.setObject(D,h),r2===!0&&E1.setState(h,q,!1),h.transparent===!0&&h.side===Q5&&h.forceSinglePass===!1?(h.side=a5,h.needsUpdate=!0,r9(h,O,D),h.side=Y0,h.needsUpdate=!0,r9(h,O,D),h.side=Q5):r9(h,O,D)}this.compile=function(h,O,q=null){q===null&&(q=h),F!==null&&F.renderStart(h,O,q),Z=L1.get(q),Z.init(O),A.push(Z),q.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(Z.pushLight(N),N.castShadow&&Z.pushShadow(N))}),h!==q&&h.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(Z.pushLight(N),N.castShadow&&Z.pushShadow(N))}),Z.setupLights(),F!==null&&F.updateLights(Z.state.lightsArray),d2=this.localClippingEnabled,r2=E1.init(this.clippingPlanes,d2),r2===!0&&E1.setGlobalState(this.clippingPlanes,O),F!==null&&B1.render(Z.state.shadowsArray,q,O);let D=new Set;return h.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let u1=N.material;if(u1)if(Array.isArray(u1))for(let S1=0;S1<u1.length;S1++){let p1=u1[S1];wC(p1,q,O,N),D.add(p1)}else wC(u1,q,O,N),D.add(u1)}),Z=A.pop(),F!==null&&F.renderEnd(),D},this.compileAsync=function(h,O,q=null){let D=this.compile(h,O,q);return new Promise(N=>{function u1(){if(D.forEach(function(S1){let y1=z.get(S1).currentProgram;(y1===void 0||y1.isReady())&&D.delete(S1)}),D.size===0){N(h);return}setTimeout(u1,10)}o2.get("KHR_parallel_shader_compile")!==null?u1():setTimeout(u1,10)})};let Ce=null;function oa(h){Ce&&Ce(h)}function TC(){V3.stop()}function OC(){V3.start()}let V3=new wi;V3.setAnimationLoop(oa),typeof self<"u"&&V3.setContext(self),this.setAnimationLoop=function(h){Ce=h,b1.setAnimationLoop(h),h===null?V3.stop():V3.start()},b1.addEventListener("sessionstart",TC),b1.addEventListener("sessionend",OC),this.render=function(h,O){if(O!==void 0&&O.isCamera!==!0){k1("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(h,O);let q=b1.enabled===!0&&b1.isPresenting===!0,D=x!==null&&(r1===null||q)&&x.begin(w,r1);if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),b1.enabled===!0&&b1.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(b1.cameraAutoUpdate===!0&&b1.updateCamera(O),O=b1.getCamera()),h.isScene===!0&&h.onBeforeRender(w,h,O,r1),Z=L1.get(h,A.length),Z.init(O),Z.state.textureUnits=Q.getTextureUnits(),A.push(Z),K1.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W1.setFromProjectionMatrix(K1,R5,O.reversedDepth),d2=this.localClippingEnabled,r2=E1.init(this.clippingPlanes,d2),g=d1.get(h,b.length),g.init(),b.push(g),b1.enabled===!0&&b1.isPresenting===!0){let S1=w.xr.getDepthSensingMesh();S1!==null&&re(S1,O,-1/0,w.sortObjects)}re(h,O,0,w.sortObjects),g.finish(),F!==null&&F.updateLights(Z.state.lightsArray),w.sortObjects===!0&&g.sort(v1,F1),g2=b1.enabled===!1||b1.isPresenting===!1||b1.hasDepthSensing()===!1,g2&&G1.addToRenderList(g,h),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),r2===!0&&E1.beginShadows();let N=Z.state.shadowsArray;if(B1.render(N,h,O),r2===!0&&E1.endShadows(),(D&&x.hasRenderPass())===!1){let S1=g.opaque,p1=g.transmissive;if(Z.setupLights(),O.isArrayCamera){let y1=O.cameras;if(p1.length>0)for(let w1=0,q1=y1.length;w1<q1;w1++){let Q1=y1[w1];RC(S1,p1,h,Q1)}g2&&G1.render(h);for(let w1=0,q1=y1.length;w1<q1;w1++){let Q1=y1[w1];EC(g,h,Q1,Q1.viewport)}}else p1.length>0&&RC(S1,p1,h,O),g2&&G1.render(h),EC(g,h,O)}r1!==null&&G===0&&(Q.updateMultisampleRenderTarget(r1),Q.updateRenderTargetMipmap(r1)),D&&x.end(w),h.isScene===!0&&h.onAfterRender(w,h,O),m1.resetDefaultState(),W=-1,e1=null,A.pop(),A.length>0?(Z=A[A.length-1],Q.setTextureUnits(Z.state.textureUnits),r2===!0&&E1.setGlobalState(w.clippingPlanes,Z.state.camera)):Z=null,b.pop(),b.length>0?g=b[b.length-1]:g=null,F!==null&&F.renderEnd()};function re(h,O,q,D){if(h.visible===!1)return;if(h.layers.test(O.layers)){if(h.isGroup)q=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(O);else if(h.isLightProbeGrid)Z.pushLightProbeGrid(h);else if(h.isLight)Z.pushLight(h),h.castShadow&&Z.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||h.intersectsFrustum(W1)){D&&D2.setFromMatrixPosition(h.matrixWorld).applyMatrix4(K1);let S1=C1.update(h),p1=h.material;p1.visible&&g.push(h,S1,p1,q,D2.z,null,O)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||h.intersectsFrustum(W1))){let S1=C1.update(h),p1=h.material;if(D&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),D2.copy(h.boundingSphere.center)):(S1.boundingSphere===null&&S1.computeBoundingSphere(),D2.copy(S1.boundingSphere.center)),D2.applyMatrix4(h.matrixWorld).applyMatrix4(K1)),Array.isArray(p1)){let y1=S1.groups;for(let w1=0,q1=y1.length;w1<q1;w1++){let Q1=y1[w1],_1=p1[Q1.materialIndex];_1&&_1.visible&&g.push(h,S1,_1,q,D2.z,Q1,O)}}else p1.visible&&g.push(h,S1,p1,q,D2.z,null,O)}}let u1=h.children;for(let S1=0,p1=u1.length;S1<p1;S1++)re(u1[S1],O,q,D)}function EC(h,O,q,D){let{opaque:N,transmissive:u1,transparent:S1}=h;Z.setupLightsView(q),r2===!0&&E1.setGlobalState(w.clippingPlanes,q),D&&u.viewport(t1.copy(D)),N.length>0&&C9(N,O,q),u1.length>0&&C9(u1,O,q),S1.length>0&&C9(S1,O,q),u.buffers.depth.setTest(!0),u.buffers.depth.setMask(!0),u.buffers.color.setMask(!0),u.setPolygonOffset(!1)}function RC(h,O,q,D){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(Z.state.transmissionRenderTarget[D.id]===void 0){let _1=o2.has("EXT_color_buffer_half_float")||o2.has("EXT_color_buffer_float");Z.state.transmissionRenderTarget[D.id]=new L5(1,1,{generateMipmaps:!0,type:_1?D5:s5,minFilter:K0,samples:Math.max(4,y.samples),stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J1.workingColorSpace})}let u1=Z.state.transmissionRenderTarget[D.id],S1=D.viewport||t1;u1.setSize(S1.z*w.transmissionResolutionScale,S1.w*w.transmissionResolutionScale);let p1=w.getRenderTarget(),y1=w.getActiveCubeFace(),w1=w.getActiveMipmapLevel();w.setRenderTarget(u1),w.getClearColor($1),T1=w.getClearAlpha(),T1<1&&w.setClearColor(16777215,.5),w.clear(),g2&&G1.render(q);let q1=w.toneMapping;w.toneMapping=I5;let Q1=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),Z.setupLightsView(D),r2===!0&&E1.setGlobalState(w.clippingPlanes,D),C9(h,q,D),Q.updateMultisampleRenderTarget(u1),Q.updateRenderTargetMipmap(u1),o2.has("WEBGL_multisampled_render_to_texture")===!1){let _1=!1;for(let n2=0,O2=O.length;n2<O2;n2++){let m2=O[n2],{object:M2,geometry:q2,material:x1,group:C5}=m2;if(x1.side===Q5&&M2.layers.test(D.layers)){let t2=x1.side;x1.side=a5,x1.needsUpdate=!0,PC(M2,q,D,q2,x1,C5),x1.side=t2,x1.needsUpdate=!0,_1=!0}}_1===!0&&(Q.updateMultisampleRenderTarget(u1),Q.updateRenderTargetMipmap(u1))}w.setRenderTarget(p1,y1,w1),w.setClearColor($1,T1),Q1!==void 0&&(D.viewport=Q1),w.toneMapping=q1}function C9(h,O,q){let D=O.isScene===!0?O.overrideMaterial:null;for(let N=0,u1=h.length;N<u1;N++){let S1=h[N],{object:p1,geometry:y1,group:w1}=S1,q1=S1.material;q1.allowOverride===!0&&D!==null&&(q1=D),p1.layers.test(q.layers)&&PC(p1,O,q,y1,q1,w1)}}function PC(h,O,q,D,N,u1){F!==null&&N.isNodeMaterial&&F.setObject(h,N),h.onBeforeRender(w,O,q,D,N,u1),h.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),N.onBeforeRender(w,O,q,D,h,u1),N.transparent===!0&&N.side===Q5&&N.forceSinglePass===!1?(N.side=a5,N.needsUpdate=!0,w.renderBufferDirect(q,O,D,N,h,u1),N.side=Y0,N.needsUpdate=!0,w.renderBufferDirect(q,O,D,N,h,u1),N.side=Q5):w.renderBufferDirect(q,O,D,N,h,u1),h.onAfterRender(w,O,q,D,N,u1)}function r9(h,O,q){O.isScene!==!0&&(O=o5);let D=z.get(h),N=Z.state.lights,u1=Z.state.shadowsArray,S1=N.state.version,p1=o1.getParameters(h,N.state,u1,O,q,Z.state.lightProbeGridArray),y1=o1.getProgramCacheKey(p1),w1=D.programs;D.environment=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?O.environment:null,D.fog=O.fog;let q1=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap;D.envMap=n1.get(h.envMap||D.environment,q1),D.envMapRotation=D.environment!==null&&h.envMap===null?O.environmentRotation:h.envMapRotation,w1===void 0&&(h.addEventListener("dispose",G5),w1=new Map,D.programs=w1);let Q1=w1.get(y1);if(Q1!==void 0){if(D.currentProgram===Q1&&D.lightsStateVersion===S1)return IC(h,p1),Q1}else p1.uniforms=o1.getUniforms(h),F!==null&&h.isNodeMaterial&&F.build(h,q,p1),h.onBeforeCompile(p1,w),Q1=o1.acquireProgram(p1,y1),w1.set(y1,Q1),D.uniforms=p1.uniforms;let _1=D.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(_1.clippingPlanes=E1.uniform),IC(h,p1),D.needsLights=la(h),D.lightsStateVersion=S1,D.needsLights&&(_1.ambientLightColor.value=N.state.ambient,_1.lightProbe.value=N.state.probe,_1.sunLights.value=N.state.sun,_1.sunLightShadows.value=N.state.sunShadow,_1.directionalLights.value=N.state.directional,_1.directionalLightShadows.value=N.state.directionalShadow,_1.spotLights.value=N.state.spot,_1.spotLightShadows.value=N.state.spotShadow,_1.rectAreaLights.value=N.state.rectArea,_1.ltc_1.value=N.state.rectAreaLTC1,_1.ltc_2.value=N.state.rectAreaLTC2,_1.pointLights.value=N.state.point,_1.pointLightShadows.value=N.state.pointShadow,_1.hemisphereLights.value=N.state.hemi,_1.sunShadowMatrix.value=N.state.sunShadowMatrix,_1.sunShadowCascade.value=N.state.sunShadowCascade,_1.directionalShadowMatrix.value=N.state.directionalShadowMatrix,_1.spotLightMatrix.value=N.state.spotLightMatrix,_1.spotLightMap.value=N.state.spotLightMap,_1.pointShadowMatrix.value=N.state.pointShadowMatrix),D.lightProbeGrid=Z.state.lightProbeGridArray.length>0,D.currentProgram=Q1,D.uniformsList=null,Q1}function BC(h){if(h.uniformsList===null){let O=h.currentProgram.getUniforms();h.uniformsList=p7.seqWithValue(O.seq,h.uniforms)}return h.uniformsList}function IC(h,O){let q=z.get(h);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function La(h,O){if(h.length===0)return null;if(h.length===1)return h[0].texture!==null?h[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let q=0,D=h.length;q<D;q++){let N=h[q];if(N.texture!==null&&N.boundingBox.containsPoint(v))return N}return null}function sa(h,O,q,D,N){O.isScene!==!0&&(O=o5),Q.resetTextureUnits();let u1=O.fog,S1=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?O.environment:null,p1=r1===null?w.outputColorSpace:r1.isXRRenderTarget===!0?r1.texture.colorSpace:J1.workingColorSpace,y1=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,w1=n1.get(D.envMap||S1,y1),q1=D.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Q1=!!q.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),_1=!!q.morphAttributes.position,n2=!!q.morphAttributes.normal,O2=!!q.morphAttributes.color,m2=I5;D.toneMapped&&(r1===null||r1.isXRRenderTarget===!0)&&(m2=w.toneMapping);let M2=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,q2=M2!==void 0?M2.length:0,x1=z.get(D),C5=Z.state.lights;if(r2===!0&&(d2===!0||h!==e1)){let p2=h===e1&&D.id===W;E1.setState(D,h,p2)}let t2=!1;D.version===x1.__version?(x1.needsLights&&x1.lightsStateVersion!==C5.state.version||x1.outputColorSpace!==p1||N.isBatchedMesh&&x1.batching===!1||!N.isBatchedMesh&&x1.batching===!0||N.isBatchedMesh&&x1.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&x1.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&x1.instancing===!1||!N.isInstancedMesh&&x1.instancing===!0||N.isSkinnedMesh&&x1.skinning===!1||!N.isSkinnedMesh&&x1.skinning===!0||N.isInstancedMesh&&x1.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&x1.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&x1.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&x1.instancingMorph===!1&&N.morphTexture!==null||x1.envMap!==w1||D.fog===!0&&x1.fog!==u1||x1.numClippingPlanes!==void 0&&(x1.numClippingPlanes!==E1.numPlanes||x1.numIntersection!==E1.numIntersection)||x1.vertexAlphas!==q1||x1.vertexTangents!==Q1||x1.morphTargets!==_1||x1.morphNormals!==n2||x1.morphColors!==O2||x1.toneMapping!==m2||x1.morphTargetsCount!==q2||!!x1.lightProbeGrid!=Z.state.lightProbeGridArray.length>0)&&(t2=!0):(t2=!0,x1.__version=D.version);let f5=x1.currentProgram;t2===!0&&(f5=r9(D,O,N),F&&D.isNodeMaterial&&F.onUpdateProgram(D,f5,x1));let W5=!1,E0=!1,T3=!1,L2=f5.getUniforms(),_2=x1.uniforms;if(u.useProgram(f5.program)&&(W5=!0,E0=!0,T3=!0),D.id!==W&&(W=D.id,E0=!0),x1.needsLights){let p2=La(Z.state.lightProbeGridArray,N);x1.lightProbeGrid!==p2&&(x1.lightProbeGrid=p2,E0=!0)}if(W5||e1!==h){u.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),L2.setValue(B,"projectionMatrix",h.projectionMatrix),L2.setValue(B,"viewMatrix",h.matrixWorldInverse);let P0=L2.map.cameraPosition;P0!==void 0&&P0.setValue(B,x2.setFromMatrixPosition(h.matrixWorld)),y.logarithmicDepthBuffer&&L2.setValue(B,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&L2.setValue(B,"isOrthographic",h.isOrthographicCamera===!0),e1!==h&&(e1=h,E0=!0,T3=!0)}if(x1.needsLights&&(C5.state.sunShadowMap.length>0&&L2.setValue(B,"sunShadowMap",C5.state.sunShadowMap,Q),C5.state.directionalShadowMap.length>0&&L2.setValue(B,"directionalShadowMap",C5.state.directionalShadowMap,Q),C5.state.spotShadowMap.length>0&&L2.setValue(B,"spotShadowMap",C5.state.spotShadowMap,Q),C5.state.pointShadowMap.length>0&&L2.setValue(B,"pointShadowMap",C5.state.pointShadowMap,Q)),N.isSkinnedMesh){L2.setOptional(B,N,"bindMatrix"),L2.setOptional(B,N,"bindMatrixInverse");let p2=N.skeleton;p2&&(p2.boneTexture===null&&p2.computeBoneTexture(),L2.setValue(B,"boneTexture",p2.boneTexture,Q))}N.isBatchedMesh&&(L2.setOptional(B,N,"batchingTexture"),L2.setValue(B,"batchingTexture",N._matricesTexture,Q),L2.setOptional(B,N,"batchingIdTexture"),L2.setValue(B,"batchingIdTexture",N._indirectTexture,Q),L2.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&L2.setValue(B,"batchingColorTexture",N._colorsTexture,Q));let R0=q.morphAttributes;if((R0.position!==void 0||R0.normal!==void 0||R0.color!==void 0)&&R.update(N,q,f5),(E0||x1.receiveShadow!==N.receiveShadow)&&(x1.receiveShadow=N.receiveShadow,L2.setValue(B,"receiveShadow",N.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&O.environment!==null&&(_2.envMapIntensity.value=O.environmentIntensity),_2.dfgLUT!==void 0&&(_2.dfgLUT.value=gd()),E0){if(L2.setValue(B,"toneMappingExposure",w.toneMappingExposure),x1.needsLights&&Ma(_2,T3),u1&&D.fog===!0&&O1.refreshFogUniforms(_2,u1),O1.refreshMaterialUniforms(_2,D,j,Y,Z.state.transmissionRenderTarget[h.id]),x1.needsLights&&x1.lightProbeGrid){let p2=x1.lightProbeGrid;_2.probesSH.value=p2.texture,_2.probesMin.value.copy(p2.boundingBox.min),_2.probesMax.value.copy(p2.boundingBox.max),_2.probesResolution.value.copy(p2.resolution)}p7.upload(B,BC(x1),_2,Q)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(p7.upload(B,BC(x1),_2,Q),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&L2.setValue(B,"center",N.center),L2.setValue(B,"modelViewMatrix",N.modelViewMatrix),L2.setValue(B,"normalMatrix",N.normalMatrix),L2.setValue(B,"modelMatrix",N.matrixWorld),D.uniformsGroups!==void 0){let p2=D.uniformsGroups;for(let P0=0,O3=p2.length;P0<O3;P0++){let kC=p2[P0];i1.update(kC,f5),i1.bind(kC,f5)}}return f5}function Ma(h,O){h.ambientLightColor.needsUpdate=O,h.lightProbe.needsUpdate=O,h.sunLights.needsUpdate=O,h.sunLightShadows.needsUpdate=O,h.directionalLights.needsUpdate=O,h.directionalLightShadows.needsUpdate=O,h.pointLights.needsUpdate=O,h.pointLightShadows.needsUpdate=O,h.spotLights.needsUpdate=O,h.spotLightShadows.needsUpdate=O,h.rectAreaLights.needsUpdate=O,h.hemisphereLights.needsUpdate=O}function la(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return r1},this.setRenderTargetTextures=function(h,O,q){let D=z.get(h);D.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),z.get(h.texture).__webglTexture=O,z.get(h.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:q,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,O){let q=z.get(h);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(h,O=0,q=0){r1=h,X=O,G=q;let D=null,N=!1,u1=!1;if(h){let p1=z.get(h);if(p1.__useDefaultFramebuffer!==void 0){u.bindFramebuffer(B.FRAMEBUFFER,p1.__webglFramebuffer),t1.copy(h.viewport),Z1.copy(h.scissor),f1=h.scissorTest,u.viewport(t1),u.scissor(Z1),u.setScissorTest(f1),W=-1;return}else if(p1.__webglFramebuffer===void 0)Q.setupRenderTarget(h);else if(p1.__hasExternalTextures)Q.rebindTextures(h,z.get(h.texture).__webglTexture,z.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let q1=h.depthTexture;if(p1.__boundDepthTexture!==q1){if(q1!==null&&z.has(q1)&&(h.width!==q1.image.width||h.height!==q1.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(h)}}let y1=h.texture;(y1.isData3DTexture||y1.isDataArrayTexture||y1.isCompressedArrayTexture)&&(u1=!0);let w1=z.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(w1[O])?D=w1[O][q]:D=w1[O],N=!0):h.samples>0&&Q.useMultisampledRTT(h)===!1?D=z.get(h).__webglMultisampledFramebuffer:Array.isArray(w1)?D=w1[q]:D=w1,t1.copy(h.viewport),Z1.copy(h.scissor),f1=h.scissorTest}else t1.copy(A1).multiplyScalar(j).floor(),Z1.copy(N1).multiplyScalar(j).floor(),f1=l2;if(q!==0&&(D=U),u.bindFramebuffer(B.FRAMEBUFFER,D)&&u.drawBuffers(h,D),u.viewport(t1),u.scissor(Z1),u.setScissorTest(f1),N){let p1=z.get(h.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,p1.__webglTexture,q)}else if(u1){let p1=O;for(let y1=0;y1<h.textures.length;y1++){let w1=z.get(h.textures[y1]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+y1,w1.__webglTexture,q,p1)}}else if(h!==null&&q!==0){let p1=z.get(h.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,p1.__webglTexture,q)}W=-1};function FC(h){let O=z.get(h);return(O.__readFormat!==h.format||O.__readType!==h.type)&&(O.__readFormat=h.format,O.__readType=h.type,O.__formatReadable=y.textureFormatReadable(h.format),O.__typeReadable=y.textureTypeReadable(h.type)),O}this.readRenderTargetPixels=function(h,O,q,D,N,u1,S1,p1=0){if(!(h&&h.isWebGLRenderTarget)){k1("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let y1=z.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&S1!==void 0&&(y1=y1[S1]),y1){u.bindFramebuffer(B.FRAMEBUFFER,y1);try{let w1=h.textures[p1],q1=w1.format,Q1=w1.type;h.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+p1);let _1=FC(w1);if(_1.__formatReadable===!1){k1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_1.__typeReadable===!1){k1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=h.width-D&&q>=0&&q<=h.height-N&&B.readPixels(O,q,D,N,M1.convert(q1),M1.convert(Q1),u1)}finally{let w1=r1!==null?z.get(r1).__webglFramebuffer:null;u.bindFramebuffer(B.FRAMEBUFFER,w1)}}},this.readRenderTargetPixelsAsync=async function(h,O,q,D,N,u1,S1,p1=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let y1=z.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&S1!==void 0&&(y1=y1[S1]),y1)if(O>=0&&O<=h.width-D&&q>=0&&q<=h.height-N){u.bindFramebuffer(B.FRAMEBUFFER,y1);let w1=h.textures[p1],q1=w1.format,Q1=w1.type;h.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+p1);let _1=FC(w1);if(_1.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_1.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let n2=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,n2),B.bufferData(B.PIXEL_PACK_BUFFER,u1.byteLength,B.STREAM_READ),B.readPixels(O,q,D,N,M1.convert(q1),M1.convert(Q1),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let O2=r1!==null?z.get(r1).__webglFramebuffer:null;u.bindFramebuffer(B.FRAMEBUFFER,O2);let m2=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jr(B,m2,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,n2),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,u1),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(n2),B.deleteSync(m2),u1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,O=null,q=0){let D=Math.pow(2,-q),N=Math.floor(h.image.width*D),u1=Math.floor(h.image.height*D),S1=O!==null?O.x:0,p1=O!==null?O.y:0;Q.setTexture2D(h,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,S1,p1,N,u1),u.unbindTexture()},this.copyTextureToTexture=function(h,O,q=null,D=null,N=0,u1=0){let S1,p1,y1,w1,q1,Q1,_1,n2,O2,m2=h.isCompressedTexture?h.mipmaps[u1]:h.image;if(q!==null)S1=q.max.x-q.min.x,p1=q.max.y-q.min.y,y1=q.isBox3?q.max.z-q.min.z:1,w1=q.min.x,q1=q.min.y,Q1=q.isBox3?q.min.z:0;else{let _2=Math.pow(2,-N);S1=Math.floor(m2.width*_2),p1=Math.floor(m2.height*_2),h.isDataArrayTexture?y1=m2.depth:h.isData3DTexture?y1=Math.floor(m2.depth*_2):y1=1,w1=0,q1=0,Q1=0}D!==null?(_1=D.x,n2=D.y,O2=D.z):(_1=0,n2=0,O2=0);let M2=M1.convert(O.format),q2=M1.convert(O.type),x1;O.isData3DTexture?(Q.setTexture3D(O,0),x1=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),x1=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),x1=B.TEXTURE_2D),u.activeTexture(B.TEXTURE0),u.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),u.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),u.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let C5=u.getParameter(B.UNPACK_ROW_LENGTH),t2=u.getParameter(B.UNPACK_IMAGE_HEIGHT),f5=u.getParameter(B.UNPACK_SKIP_PIXELS),W5=u.getParameter(B.UNPACK_SKIP_ROWS),E0=u.getParameter(B.UNPACK_SKIP_IMAGES);u.pixelStorei(B.UNPACK_ROW_LENGTH,m2.width),u.pixelStorei(B.UNPACK_IMAGE_HEIGHT,m2.height),u.pixelStorei(B.UNPACK_SKIP_PIXELS,w1),u.pixelStorei(B.UNPACK_SKIP_ROWS,q1),u.pixelStorei(B.UNPACK_SKIP_IMAGES,Q1);let T3=h.isDataArrayTexture||h.isData3DTexture,L2=O.isDataArrayTexture||O.isData3DTexture;if(h.isDepthTexture){let _2=z.get(h),R0=z.get(O),p2=z.get(_2.__renderTarget),P0=z.get(R0.__renderTarget);u.bindFramebuffer(B.READ_FRAMEBUFFER,p2.__webglFramebuffer),u.bindFramebuffer(B.DRAW_FRAMEBUFFER,P0.__webglFramebuffer);for(let O3=0;O3<y1;O3++)T3&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,z.get(h).__webglTexture,N,Q1+O3),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,z.get(O).__webglTexture,u1,O2+O3)),B.blitFramebuffer(w1,q1,S1,p1,_1,n2,S1,p1,B.DEPTH_BUFFER_BIT,B.NEAREST);u.bindFramebuffer(B.READ_FRAMEBUFFER,null),u.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(N!==0||h.isRenderTargetTexture||z.has(h)){let _2=z.get(h),R0=z.get(O);u.bindFramebuffer(B.READ_FRAMEBUFFER,E),u.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let p2=0;p2<y1;p2++)T3?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_2.__webglTexture,N,Q1+p2):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_2.__webglTexture,N),L2?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R0.__webglTexture,u1,O2+p2):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,R0.__webglTexture,u1),N!==0?B.blitFramebuffer(w1,q1,S1,p1,_1,n2,S1,p1,B.COLOR_BUFFER_BIT,B.NEAREST):L2?B.copyTexSubImage3D(x1,u1,_1,n2,O2+p2,w1,q1,S1,p1):B.copyTexSubImage2D(x1,u1,_1,n2,w1,q1,S1,p1);u.bindFramebuffer(B.READ_FRAMEBUFFER,null),u.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else L2?h.isDataTexture||h.isData3DTexture?B.texSubImage3D(x1,u1,_1,n2,O2,S1,p1,y1,M2,q2,m2.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(x1,u1,_1,n2,O2,S1,p1,y1,M2,m2.data):B.texSubImage3D(x1,u1,_1,n2,O2,S1,p1,y1,M2,q2,m2):h.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,u1,_1,n2,S1,p1,M2,q2,m2.data):h.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,u1,_1,n2,m2.width,m2.height,M2,m2.data):B.texSubImage2D(B.TEXTURE_2D,u1,_1,n2,S1,p1,M2,q2,m2);u.pixelStorei(B.UNPACK_ROW_LENGTH,C5),u.pixelStorei(B.UNPACK_IMAGE_HEIGHT,t2),u.pixelStorei(B.UNPACK_SKIP_PIXELS,f5),u.pixelStorei(B.UNPACK_SKIP_ROWS,W5),u.pixelStorei(B.UNPACK_SKIP_IMAGES,E0),u1===0&&O.generateMipmaps&&B.generateMipmap(x1),u.unbindTexture()},this.initRenderTarget=function(h){z.get(h).__webglFramebuffer===void 0&&Q.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Q.setTextureCube(h,0):h.isData3DTexture?Q.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Q.setTexture2DArray(h,0):Q.setTexture2D(h,0),u.unbindTexture()},this.resetState=function(){X=0,G=0,r1=null,u.reset(),m1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return R5}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J1._getDrawingBufferColorSpace(e),t.unpackColorSpace=J1._getUnpackColorSpace()}};var b4=new T;function Z5(C,e,t,r,i,H){let n=2*Math.PI*i/4,V=Math.max(H-2*i,0),a=Math.PI/4;b4.copy(e),b4[r]=0,b4.normalize();let o=.5*n/(n+V),L=1-b4.angleTo(C)/a;return Math.sign(b4[t])===1?L*o:V/(n+V)+o+o*(1-L)}var V8=class C extends W0{constructor(e=1,t=1,r=1,i=2,H=.1){let n=i*2+1;if(H=Math.min(e/2,t/2,r/2,H),super(1,1,1,n,n,n),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:i,radius:H},n===1)return;let V=this.toNonIndexed();this.index=null,this.attributes.position=V.attributes.position,this.attributes.normal=V.attributes.normal,this.attributes.uv=V.attributes.uv;let a=new T,o=new T,L=new T(e,t,r).divideScalar(2).subScalar(H),M=this.attributes.position.array,s=this.attributes.normal.array,l=this.attributes.uv.array,p=M.length/6,f=new T,c=.5/n;for(let d=0,S=0;d<M.length;d+=3,S+=2)switch(a.fromArray(M,d),o.copy(a),o.x-=Math.sign(o.x)*c,o.y-=Math.sign(o.y)*c,o.z-=Math.sign(o.z)*c,o.normalize(),M[d+0]=L.x*Math.sign(a.x)+o.x*H,M[d+1]=L.y*Math.sign(a.y)+o.y*H,M[d+2]=L.z*Math.sign(a.z)+o.z*H,s[d+0]=o.x,s[d+1]=o.y,s[d+2]=o.z,Math.floor(d/p)){case 0:f.set(1,0,0),l[S+0]=Z5(f,o,"z","y",H,r),l[S+1]=1-Z5(f,o,"y","z",H,t);break;case 1:f.set(-1,0,0),l[S+0]=1-Z5(f,o,"z","y",H,r),l[S+1]=1-Z5(f,o,"y","z",H,t);break;case 2:f.set(0,1,0),l[S+0]=1-Z5(f,o,"x","z",H,e),l[S+1]=Z5(f,o,"z","x",H,r);break;case 3:f.set(0,-1,0),l[S+0]=1-Z5(f,o,"x","z",H,e),l[S+1]=1-Z5(f,o,"z","x",H,r);break;case 4:f.set(0,0,1),l[S+0]=1-Z5(f,o,"x","y",H,e),l[S+1]=1-Z5(f,o,"y","x",H,t);break;case 5:f.set(0,0,-1),l[S+0]=Z5(f,o,"x","y",H,e),l[S+1]=1-Z5(f,o,"y","x",H,t);break}}static fromJSON(e){return new C(e.width,e.height,e.depth,e.segments,e.radius)}};var f2=["U","F","R","B","L","D"],h7={U:"#f2f2ee",D:"#ffd21f",F:"#11a85c",B:"#2563d9",R:"#e0303a",L:"#ff7a1a"},a8={U:[0,1,0],D:[0,-1,0],R:[1,0,0],L:[-1,0,0],F:[0,0,1],B:[0,0,-1]},Ii={U:[0,0,-1],D:[0,0,1],F:[0,1,0],B:[0,1,0],R:[0,1,0],L:[0,1,0]},yd=["x","y","z"],e0=Math.PI/2;function Fi(C){let e=[Math.abs(C.x),Math.abs(C.y),Math.abs(C.z)],t=e.indexOf(Math.max(...e)),r=Math.sign([C.x,C.y,C.z][t]);return[["L","R"],["D","U"],["B","F"]][t][r>0?1:0]}var o8=C=>Math.round(C*2)/2;function _d(C,e,t){let r=(t-1)/2,i,H;switch(C){case"U":i=e.x,H=e.z;break;case"D":i=e.x,H=-e.z;break;case"F":i=e.x,H=-e.y;break;case"B":i=-e.x,H=-e.y;break;case"R":i=-e.z,H=-e.y;break;case"L":i=e.z,H=-e.y;break}return Math.round(H+r)*t+Math.round(i+r)}function bd(C,e){let t=C/2,r=e,i=new H7;i.moveTo(-t+r,-t),i.lineTo(t-r,-t),i.quadraticCurveTo(t,-t,t,-t+r),i.lineTo(t,t-r),i.quadraticCurveTo(t,t,t-r,t),i.lineTo(-t+r,t),i.quadraticCurveTo(-t,t,-t,t-r),i.lineTo(-t,-t+r),i.quadraticCurveTo(-t,-t,-t+r,-t);let H=new s4(i,6),n=H.attributes.position,V=H.attributes.uv;for(let a=0;a<n.count;a++)V.setXY(a,n.getX(a)/C+.5,n.getY(a)/C+.5);return H}function A7(C,e){let t=document.createElement("canvas");t.width=t.height=C,e(t.getContext("2d"),C);let r=new e4(t);return r.colorSpace=Q2,r.anisotropy=4,r}function Pt(C){let e=parseInt(C.slice(1),16);return(.299*(e>>16)+.587*(e>>8&255)+.114*(e&255))/255}function L8(C){return()=>{C|=0,C=C+1831565813|0;let e=Math.imul(C^C>>>15,1|C);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function m7(C,e){let t=parseInt(C.slice(1),16);return"#"+[t>>16,t>>8&255,t&255].map(i=>Math.round(e>0?i+(255-i)*e:i*(1+e))).map(i=>i.toString(16).padStart(2,"0")).join("")}function ki(C,e,t,r,i){for(let H=0;H<i;H++){let n=(H+t()*.8)*e/i,V=2+t()*5,a=t()*6.28,o=1+t()*2;C.beginPath();for(let L=0;L<=e;L+=8){let M=n+Math.sin(L/e*6.28*o+a)*V;L?C.lineTo(L,M):C.moveTo(L,M)}C.strokeStyle=r(t()),C.lineWidth=.8+t()*2.4,C.stroke()}}function Di(C,e,t,r,i){for(let H=0;H<i;H++){let n=t()*e,V=t()*e,a=t()*6.28;C.beginPath(),C.moveTo(n,V);for(let o=0;o<40;o++)a+=(t()-.5)*.9,n+=Math.cos(a)*9,V+=Math.sin(a)*9,C.lineTo(n,V);C.strokeStyle=r(t()),C.lineWidth=.6+t()*2.2,C.stroke()}}function Ni(C,e,t,r,i,H){C.beginPath(),C.moveTo(e+H,t),C.arcTo(e+r,t,e+r,t+i,H),C.arcTo(e+r,t+i,e,t+i,H),C.arcTo(e,t+i,e,t,H),C.arcTo(e,t,e+r,t,H),C.closePath()}function wd(C,e,t,r,i){C.lineWidth=i,C.lineCap="round";for(let H=0;H<6;H++){let n=H*Math.PI/3,V=e+Math.cos(n)*r,a=t+Math.sin(n)*r;C.beginPath(),C.moveTo(e,t),C.lineTo(V,a);for(let o of[.5,.75]){let L=e+Math.cos(n)*r*o,M=t+Math.sin(n)*r*o,s=r*.28;C.moveTo(L,M),C.lineTo(L+Math.cos(n+.8)*s,M+Math.sin(n+.8)*s),C.moveTo(L,M),C.lineTo(L+Math.cos(n-.8)*s,M+Math.sin(n-.8)*s)}C.stroke()}}var w4={classic:{body:{color:1316380,rough:.55,metal:.1},st:null,rough:.38,metal:0},wood:{body:{color:16777215,rough:.75,metal:0,tex:(C,e)=>{let t=L8(7);C.fillStyle="#9a6233",C.fillRect(0,0,e,e),ki(C,e,t,r=>`rgba(${70+r*40},${35+r*20},10,${.25+r*.35})`,34)}},st:(C,e,t,r)=>{C.fillStyle=m7(t,-.06),C.fillRect(0,0,e,e),ki(C,e,r,i=>`rgba(60,30,10,${.06+i*.1})`,22)},rough:.7,metal:0},newyear:{body:{color:16777215,rough:.5,metal:.15,tex:(C,e)=>{C.fillStyle="#0d4a2f",C.fillRect(0,0,e,e);let t=L8(3);for(let r=0;r<40;r++)C.fillStyle=`rgba(255,215,90,${.25+t()*.5})`,C.beginPath(),C.arc(t()*e,t()*e,1+t()*2.2,0,6.3),C.fill()}},st:(C,e,t,r)=>{let i=C.createLinearGradient(0,0,e,e);i.addColorStop(0,m7(t,.12)),i.addColorStop(1,m7(t,-.08)),C.fillStyle=i,C.fillRect(0,0,e,e);let H=Pt(t)>.6;C.strokeStyle=H?"rgba(30,60,120,0.32)":"rgba(255,255,255,0.55)",wd(C,e*(.3+r()*.4),e*(.3+r()*.4),e*.24,e*.028),C.fillStyle=H?"rgba(30,60,120,0.25)":"rgba(255,255,255,0.45)";for(let n=0;n<7;n++)C.beginPath(),C.arc(r()*e,r()*e,e*(.008+r()*.014),0,6.3),C.fill()},rough:.32,metal:0},marble:{body:{color:16777215,rough:.25,metal:.05,tex:(C,e)=>{let t=L8(11);C.fillStyle="#17181d",C.fillRect(0,0,e,e),Di(C,e,t,r=>r>.7?`rgba(214,178,90,${.35+r*.3})`:`rgba(235,235,240,${.12+r*.25})`,9)}},st:(C,e,t,r)=>{C.fillStyle=t,C.fillRect(0,0,e,e),Di(C,e,r,i=>Pt(t)>.6?`rgba(90,90,100,${.12+i*.2})`:`rgba(255,255,255,${.12+i*.22})`,4)},rough:.18,metal:0},neon:{body:{color:460812,rough:.3,metal:.4},st:(C,e,t)=>{C.fillStyle=m7(t,-.82),C.fillRect(0,0,e,e);let r=(i,H)=>{C.strokeStyle=t,C.globalAlpha=H,C.lineWidth=i,Ni(C,e*.14,e*.14,e*.72,e*.72,e*.12),C.stroke()};r(e*.2,.18),r(e*.11,.35),r(e*.045,1),C.globalAlpha=1},glow:1.1,rough:.3,metal:0},gold:{body:{color:14263854,rough:.3,metal:.55},st:(C,e,t)=>{let r=C.createLinearGradient(0,0,e*.6,e);r.addColorStop(0,m7(t,.12)),r.addColorStop(.5,t),r.addColorStop(1,m7(t,-.18)),C.fillStyle=r,C.fillRect(0,0,e,e),C.strokeStyle="rgba(255,225,140,0.9)",C.lineWidth=e*.035,Ni(C,e*.05,e*.05,e*.9,e*.9,e*.12),C.stroke()},rough:.42,metal:0}},km=Object.keys(w4),s8=class{constructor(e){this.el=e,this.renderer=new i8({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=Q2,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new X7,this.camera=new K2(30,1,.1,100),this.camera.position.set(0,0,15),this.scene.add(new c4(16777215,1.6));let t=new o7(16777215,1.9);t.position.set(4,7,9),this.scene.add(t);let r=new o7(16777215,.5);r.position.set(-6,-3,4),this.scene.add(r),this.root=new P5,this.scene.add(this.root),this.baseView=new b2().setFromEuler(new S5(.5,-.65,0,"XYZ")),this.root.quaternion.copy(this.baseView),this.raycaster=new p4,this.tweens=[],this.queue=[],this.turning=!1,this.dirty=!0,this.autoSpin=!1,this.mode="view",this.allowOrbitInView=!0,this.onTap=null,this.onSwipe=null,this.labelCache=new Map,this.labelFn=null,this.n=3,this.skinId="classic",this.skinTex=new Map,this._buildTextures(),this._build(),this._bindInput(),this.fill=.78,new ResizeObserver(()=>this.resize()).observe(e),this.resize();let i=H=>{this._frame(H),requestAnimationFrame(i)};requestAnimationFrame(i)}_buildTextures(){this.texQ=A7(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.fillStyle="#9aa3b5",e.font='700 74px -apple-system, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("?",t/2,t/2+4)}),this.texX=A7(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.38)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(40,40),e.lineTo(88,88),e.moveTo(88,40),e.lineTo(40,88),e.stroke()}),this.texSkip=A7(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.42)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(38,64),e.lineTo(90,64),e.stroke()})}setSize(e){if(e=e===2?2:3,e!==this.n){this.tweens=[],this.queue=[],this.turning=!1;for(let t of[...this.root.children])this.root.remove(t);this.n=e,this._build(),this.resize()}}_build(){let e=this.n,t=(e-1)/2,r=[];for(let a=0;a<e;a++)r.push(a-t);let i=new V8(.97,.97,.97,3,.12),H=w4[this.skinId],n=this.bodyMat=new V7;this._bodyLook(H);let V=bd(.84,.13);this.cubies=[],this.stickers=[];for(let a of r)for(let o of r)for(let L of r){if(Math.max(Math.abs(a),Math.abs(o),Math.abs(L))<t)continue;let M=new P5;M.position.set(a,o,L),M.userData.home=new T(a,o,L),M.add(new V5(i,n));for(let s of f2){let l=a8[s];if(!(l[0]&&l[0]*t===a||l[1]&&l[1]*t===o||l[2]&&l[2]*t===L))continue;let p=new V7({color:h7[s],roughness:H.rough,metalness:H.metal}),f=new V5(V,p),c=new T(...l),d=new T(...Ii[s]),S=new T().crossVectors(d,c);f.quaternion.setFromRotationMatrix(new s2().makeBasis(S,d,c)),f.position.copy(c).multiplyScalar(.487),f.userData={color:s,center:e===3&&Math.abs(a)+Math.abs(o)+Math.abs(L)===1},M.add(f),this.stickers.push(f),this.setLook(f,"color")}this.root.add(M),this.cubies.push(M)}}snapshot(e=600){let t=this.root.quaternion.clone(),r=this.el.clientWidth,i=this.el.clientHeight,H=this.renderer.getPixelRatio(),n=document.createElement("canvas");n.width=n.height=e;try{this.renderer.setPixelRatio(1),this.renderer.setSize(e,e,!1),this.camera.aspect=1;let V=2.62*this.n/3,a=j6.degToRad(this.camera.fov)/2;this.camera.position.z=V/Math.sin(a*.92),this.camera.updateProjectionMatrix(),this.root.quaternion.copy(this.baseView),this.renderer.render(this.scene,this.camera),n.getContext("2d").drawImage(this.canvas,0,0,e,e)}catch{}return this.root.quaternion.copy(t),this.renderer.setPixelRatio(H),r&&i?this.resize():this.dirty=!0,n}resize(){let e=this.el.clientWidth||1,t=this.el.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t;let r=2.62*this.n/3,i=j6.degToRad(this.camera.fov)/2,H=Math.atan(Math.tan(i)*this.camera.aspect),n=Math.min(i,H);this.camera.position.z=r/Math.sin(n*this.fill),this.camera.updateProjectionMatrix(),this.dirty=!0}reset(){this.tweens=[],this.queue=[],this.turning=!1;for(let e of this.cubies)e.parent!==this.root&&this.root.attach(e);for(let e of[...this.root.children])this.cubies.includes(e)||this.root.remove(e);for(let e of this.cubies)e.position.copy(e.userData.home),e.quaternion.identity();for(let e of this.stickers)e.scale.set(1,1,1);this.dirty=!0}info(e){let t=e.getWorldQuaternion(new b2),r=this.root.getWorldQuaternion(new b2).invert(),i=new T(0,0,1).applyQuaternion(t).applyQuaternion(r),H=Fi(i),n=e.parent,V=_d(H,n.position,this.n);return{sticker:e,face:H,idx:V,key:H+V,color:e.userData.color,cubie:n}}cells(){return this.stickers.map(e=>this.info(e))}isSolved(){let e={};for(let t of this.stickers){let{face:r,color:i}=this.info(t);if(e[r]&&e[r]!==i)return!1;e[r]=i}return!0}setSkin(e){if(w4[e]||(e="classic"),e===this.skinId)return;this.skinId=e;let t=w4[e];this._bodyLook(t);for(let r of this.stickers)r.material.roughness=t.rough,r.material.metalness=t.metal,this.setLook(r,r.userData.look||"color",r.userData.label);this.dirty=!0}_bodyLook(e){let t=this.bodyMat,r=e.body;t.color.setHex(r.color),t.roughness=r.rough,t.metalness=r.metal;let i=r.tex?this._skinTex("body|"+this.skinId,(H,n)=>r.tex(H,n)):null;t.map!==i&&(t.map=i,t.needsUpdate=!0)}_skinTex(e,t){return this.skinTex.has(e)||this.skinTex.set(e,A7(256,t)),this.skinTex.get(e)}setLook(e,t,r){let i=e.material;e.userData.look=t,e.userData.label=r;let H=new U1(h7[e.userData.color]),n=w4[this.skinId],V=null,a=H,o=!1;if(r)V=r,a=new U1(16777215);else if(t==="color"&&n.st){let M=e.userData.color,s=this.stickers.indexOf(e)%5;V=this._skinTex(`st|${this.skinId}|${M}|${s}`,(l,p)=>n.st(l,p,h7[M],L8(s*31+M.charCodeAt(0)))),a=new U1(16777215),o=!!n.glow}else t==="hidden"?(V=this._texQ(this._rotOf(e)),a=new U1("#5d6679")):t==="locked"?(V=null,a=new U1("#2b303b")):t==="wrong"?(V=this.texX,a=H.clone().multiplyScalar(.55)):t==="skip"&&(V=this.texSkip,a=new U1("#5d6679"));let L=o?V:null;(i.map!==V||i.emissiveMap!==L)&&(i.map=V,i.emissiveMap=L,i.needsUpdate=!0),o?(i.emissive.setRGB(1,1,1),i.emissiveIntensity=n.glow*.55):i.emissive.setRGB(0,0,0),i.color.copy(a),r&&t==="locked"&&i.color.setScalar(.45),this.dirty=!0}_rotOf(e){let t=e.getWorldQuaternion(new b2),r=this.root.getWorldQuaternion(new b2).invert(),i=new T(0,1,0).applyQuaternion(t).applyQuaternion(r),H=new T(0,0,1).applyQuaternion(t).applyQuaternion(r),n=Fi(H),V=new T(...Ii[n]),a=Math.atan2(new T().crossVectors(V,i).dot(new T(...a8[n])),V.dot(i));return(Math.round(a/e0)%4+4)%4}_texQ(e){if(this.qTexs=this.qTexs||[],!this.qTexs[e]){let t=this.texQ.clone();t.center.set(.5,.5),t.rotation=-e*e0,t.needsUpdate=!0,this.qTexs[e]=t}return this.qTexs[e]}hiddenLabel(e,t=0){let r="h|"+e+"|"+t;if(this.labelCache.has(r))return this.labelCache.get(r);let i=A7(256,(H,n)=>{H.fillStyle="#5d6679",H.fillRect(0,0,n,n);let V=new Path2D(e);H.save(),H.translate(n*.22,n*.22),H.scale(n*.56/24,n*.56/24),H.fillStyle="rgba(255,255,255,0.62)",H.fill(V),H.restore()});return t&&(i.center.set(.5,.5),i.rotation=-t*e0,i.needsUpdate=!0),this.labelCache.set(r,i),i}centerLabel(e,t,r,i=0){let H=e+"|"+(t||"")+"|"+(r||"");if(i){let o=H+"|"+i;if(!this.labelCache.has(o)){let L=this.centerLabel(e,t,r,0).clone();L.center.set(.5,.5),L.rotation=-i*e0,L.needsUpdate=!0,this.labelCache.set(o,L)}return this.labelCache.get(o)}if(this.labelCache.has(H))return this.labelCache.get(H);let n=h7[e],V=Pt(n)>.6?"#1d2230":"#ffffff",a=A7(256,(o,L)=>{if(o.fillStyle=n,o.fillRect(0,0,L,L),t){let M=new Path2D(t);o.save(),o.translate(L*.18,L*.18),o.scale(L*.64/24,L*.64/24),o.fillStyle=V,o.fill(M),o.restore()}r&&(o.beginPath(),o.arc(L*.8,L*.2,L*.15,0,Math.PI*2),o.fillStyle=r==="ok"?"#0f8a4a":"#c62a33",o.fill(),o.lineWidth=L*.025,o.strokeStyle="#ffffff",o.stroke(),o.strokeStyle="#ffffff",o.lineWidth=L*.04,o.lineCap="round",o.lineJoin="round",o.beginPath(),r==="ok"?(o.moveTo(L*.73,L*.2),o.lineTo(L*.785,L*.255),o.lineTo(L*.875,L*.15)):(o.moveTo(L*.75,L*.15),o.lineTo(L*.85,L*.25),o.moveTo(L*.85,L*.15),o.lineTo(L*.75,L*.25)),o.stroke())});return this.labelCache.set(H,a),a}pop(e){this.tween(260,t=>{let r=1+Math.sin(t*Math.PI)*.18;e.scale.set(r,r,1)})}turn(e,t=!0,r=190){return new Promise(i=>{this.queue.push({move:e,animate:t,dur:r,resolve:i}),this.turning||this._next()})}get busy(){return this.turning||this.queue.length>0}_next(){let e=this.queue.shift();if(!e){this.turning=!1;return}this.turning=!0;let{ax:t,l:r,d:i}=e.move,H=new P5;this.root.add(H);let n=this.cubies.filter(a=>Math.abs(a.position[t]-r)<.25);for(let a of n)H.attach(a);let V=()=>{H.rotation[t]=i*e0,H.updateMatrixWorld(!0);for(let a of n){this.root.attach(a),a.position.set(o8(a.position.x),o8(a.position.y),o8(a.position.z));let o=new s2().makeRotationFromQuaternion(a.quaternion),L=o.elements;for(let M=0;M<16;M++)L[M]=Math.round(L[M]);a.quaternion.setFromRotationMatrix(o)}this.root.remove(H),this.dirty=!0,e.resolve(),this._next()};if(!e.animate){V();return}this.tween(e.dur,a=>{H.rotation[t]=i*e0*(1-Math.pow(1-a,3))},V)}viewFor(e){let t=new b2,r=(i,H)=>t.setFromEuler(new S5(i,H,0,"XYZ"));switch(e){case"U":r(e0,0);break;case"D":r(-e0,0);break;case"R":r(0,-e0);break;case"L":r(0,e0);break;case"B":r(0,Math.PI);break;default:t.identity()}return this.baseView.clone().multiply(t)}showFace(e,t=450){this.rotateTo(this.viewFor(e),t)}rotateTo(e,t=450){let r=this.root.quaternion.clone();this.tween(t,i=>{let H=i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2;this.root.quaternion.slerpQuaternions(r,e,H)})}spin(e=1300){let t=this.root.quaternion.clone();this.tween(e,r=>{let i=1-Math.pow(1-r,3),H=new b2().setFromAxisAngle(new T(0,1,0),i*Math.PI*2);this.root.quaternion.copy(H.multiply(t))})}tween(e,t,r){this.tweens.push({t0:performance.now(),dur:e,fn:t,done:r}),this.dirty=!0}_frame(e){if(this.tweens.length){let t=this.tweens;this.tweens=[];let r=[];for(let i of t){let H=Math.min(1,(e-i.t0)/i.dur);i.fn(H),H<1?r.push(i):i.done&&i.done()}this.tweens=r.concat(this.tweens),this.dirty=!0}if(this.autoSpin&&!this.drag){let t=new b2().setFromAxisAngle(new T(0,1,0),.004);this.root.quaternion.premultiply(t),this.dirty=!0}this.dirty&&(this.dirty=!1,this.renderer.render(this.scene,this.camera))}_pick(e){let t=this.canvas.getBoundingClientRect(),r=new g1((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);this.raycaster.setFromCamera(r,this.camera);let i=this.raycaster.intersectObjects(this.stickers,!1)[0];return i?i.object:null}_screen(e){let t=this.root.localToWorld(e.clone()).project(this.camera),r=this.canvas.getBoundingClientRect();return new g1((t.x+1)/2*r.width,(1-t.y)/2*r.height)}moveFromSwipe(e,t){let r=this.info(e),i=new T(...a8[r.face]),H=r.cubie.position.clone().add(i.clone().multiplyScalar(.5)),n=this._screen(H),V=null;for(let l=0;l<3;l++){if(Math.abs([i.x,i.y,i.z][l])>.5)continue;let p=new T;p.setComponent(l,1);let f=this._screen(H.clone().add(p.clone().multiplyScalar(.5))).sub(n);if(f.length()<.001)continue;let c=f.normalize().dot(t);(!V||Math.abs(c)>Math.abs(V.dot))&&(V={a:p,dot:c})}if(!V||Math.abs(V.dot)<.35)return null;let a=V.a.clone().multiplyScalar(Math.sign(V.dot)),o=new T().crossVectors(i,a),L=[o.x,o.y,o.z],M=L.findIndex(l=>Math.abs(l)>.5),s=yd[M];return{ax:s,l:o8(r.cubie.position[s]),d:Math.sign(L[M])}}guide(e){if(!e)return null;this.root.updateMatrixWorld(!0);let t=new T;t[e.ax]=1;let r=t.clone().multiplyScalar(e.d),i=this.camera.position,H=null;for(let o of this.stickers){let L=this.info(o),M=L.cubie.position;if(Math.abs(M[e.ax]-e.l)>.25)continue;let s=new T(...a8[L.face]);if(Math.abs(s.dot(t))>.5)continue;let l=M.clone().add(s.clone().multiplyScalar(.5)),p=this.root.localToWorld(l.clone()),c=s.clone().applyQuaternion(this.root.quaternion).dot(i.clone().sub(p).normalize());if(c<.28)continue;let d=new T().crossVectors(r,s),S=this._screen(l),_=this._screen(l.clone().add(d.clone().multiplyScalar(.5))).sub(S),v=_.length();if(v<4)continue;let g=_.clone().normalize(),Z=this.moveFromSwipe(o,g);if(!Z||Z.ax!==e.ax||Math.abs(Z.l-e.l)>.25||Z.d!==e.d)continue;let b=Math.abs(M.dot(d)),A=c*v-b*v*.12;(!H||A>H.score)&&(H={score:A,s0:S,dir:g,cell:v*2,sticker:o})}if(!H)return null;let{s0:n,dir:V,cell:a}=H;return{x0:n.x-V.x*a*.25,y0:n.y-V.y*a*.25,x1:n.x+V.x*a*1.6,y1:n.y+V.y*a*1.6,cell:a,sticker:H.sticker}}_bindInput(){let e=this.canvas;e.addEventListener("pointerdown",r=>{this.drag||(e.setPointerCapture(r.pointerId),this.drag={id:r.pointerId,x:r.clientX,y:r.clientY,lx:r.clientX,ly:r.clientY,s:this._pick(r),mode:null})}),e.addEventListener("pointermove",r=>{let i=this.drag;if(!i||i.id!==r.pointerId)return;let H=r.clientX-i.x,n=r.clientY-i.y;if(!i.mode){if(Math.hypot(H,n)<10)return;if(this.mode==="solve"&&i.s){i.mode="done";let V=this.moveFromSwipe(i.s,new g1(H,n).normalize());V&&this.onSwipe&&this.onSwipe(V);return}i.mode=this.mode==="view"&&!this.allowOrbitInView?"none":"orbit"}if(i.mode==="orbit"){let V=r.clientX-i.lx,a=r.clientY-i.ly,o=.0105,L=new b2().setFromAxisAngle(new T(0,1,0),V*o),M=new b2().setFromAxisAngle(new T(1,0,0),a*o);this.root.quaternion.premultiply(L).premultiply(M),this.dirty=!0}i.lx=r.clientX,i.ly=r.clientY});let t=r=>{let i=this.drag;!i||i.id!==r.pointerId||(this.drag=null,!i.mode&&r.type==="pointerup"&&i.s&&this.mode==="tap"&&this.onTap&&this.onTap(this.info(i.s)))};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}};var Bt="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z";var Ui="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z";var zi="M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z";var M8="M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z";var Gi="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z";var Wi="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z";var $i="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z";var l8="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1M10.88 12H7.27L10.19 14.11L9.08 17.56L12 15.43L14.92 17.56L13.8 14.12L16.72 12H13.12L12 8.56L10.88 12Z";var qi="M9,12C9,11.19 9.3,10.5 9.89,9.89C10.5,9.3 11.19,9 12,9C12.81,9 13.5,9.3 14.11,9.89C14.7,10.5 15,11.19 15,12C15,12.81 14.7,13.5 14.11,14.11C13.5,14.7 12.81,15 12,15C11.19,15 10.5,14.7 9.89,14.11C9.3,13.5 9,12.81 9,12M5.53,8.44L7.31,10.22L5.53,12L7.31,13.78L5.53,15.56L2,12L5.53,8.44M8.44,18.47L10.22,16.69L12,18.47L13.78,16.69L15.56,18.47L12,22L8.44,18.47M18.47,15.56L16.69,13.78L18.47,12L16.69,10.22L18.47,8.44L22,12L18.47,15.56M15.56,5.53L13.78,7.31L12,5.53L10.22,7.31L8.44,5.53L12,2L15.56,5.53Z";var Xi="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z";var Yi="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Qi="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z";var Ki="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z";var Ji="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z";var ji="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";var eH="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z";var tH="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var CH="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.68 7.35 7.38 5.73 9.07 4.1 11 4.1 11.83 4.1 12.41 4.69 13 5.28 13 6.1V12.15L14.6 10.6L16 12L12 16L8 12L9.4 10.6L11 12.15V6.1Q9.1 6.45 8.05 7.94 7 9.43 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 9.8 16.45 8.76 15.9 7.73 15 7V4.68Q16.85 5.55 17.93 7.26 19 9 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M12 11.05Z";var rH="M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z";var iH="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M11 13H7V8.8L8.3 6H10.3L8.9 9H11V13M17 13H13V8.8L14.3 6H16.3L14.9 9H17V13Z";var HH="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z";var nH="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z";var VH="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z";var aH="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z";var oH="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var LH="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";var sH="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var MH="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";var d8="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z";var lH="M14.66 14.18C14.69 14.29 14.7 14.4 14.7 14.5C14.73 15.15 14.44 15.85 13.97 16.28C13.75 16.47 13.39 16.67 13.11 16.75C12.23 17.06 11.35 16.62 10.83 16.11C11.77 15.89 12.32 15.21 12.5 14.5C12.62 13.89 12.37 13.38 12.27 12.78C12.17 12.2 12.19 11.71 12.4 11.18C12.55 11.47 12.71 11.77 12.9 12C13.5 12.78 14.45 13.12 14.66 14.18M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M17.16 12.56L17.06 12.36C16.9 12 16.45 11.38 16.45 11.38C16.27 11.15 16.05 10.94 15.85 10.74C15.32 10.27 14.73 9.94 14.22 9.45C13.05 8.31 12.79 6.44 13.54 5C12.79 5.18 12.14 5.58 11.58 6.03C9.55 7.65 8.75 10.5 9.71 12.95C9.74 13.03 9.77 13.11 9.77 13.21C9.77 13.38 9.65 13.53 9.5 13.6C9.31 13.67 9.13 13.63 9 13.5C8.93 13.46 8.9 13.42 8.87 13.37C8 12.26 7.84 10.66 8.43 9.39C7.12 10.45 6.41 12.24 6.5 13.92C6.56 14.31 6.6 14.7 6.74 15.09C6.85 15.56 7.06 16 7.3 16.44C8.14 17.78 9.61 18.75 11.19 18.94C12.87 19.15 14.67 18.85 15.96 17.7C17.4 16.4 17.9 14.33 17.16 12.56Z";var dH="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z";var cH="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4";var c8="M7,2V13H10V22L17,10H13L17,2H7Z";var pH="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z";var p8="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z";var uH="M13 24C9.74 24 6.81 22 5.6 19L2.57 11.37C2.26 10.58 3 9.79 3.81 10.05L4.6 10.31C5.16 10.5 5.62 10.92 5.84 11.47L7.25 15H8V3.25C8 2.56 8.56 2 9.25 2S10.5 2.56 10.5 3.25V12H11.5V1.25C11.5 .56 12.06 0 12.75 0S14 .56 14 1.25V12H15V2.75C15 2.06 15.56 1.5 16.25 1.5C16.94 1.5 17.5 2.06 17.5 2.75V12H18.5V5.75C18.5 5.06 19.06 4.5 19.75 4.5S21 5.06 21 5.75V16C21 20.42 17.42 24 13 24Z";var AH="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z";var mH="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22";var hH="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z";var fH="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z";var vH="M12,2C9.76,2 7.78,3.05 6.5,4.68L7.93,6.11C8.84,4.84 10.32,4 12,4A5,5 0 0,1 17,9C17,10.68 16.16,12.16 14.89,13.06L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M7.23,10.5L12.73,16H10V13.58C8.68,13 7.66,11.88 7.23,10.5M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z",xH="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var SH="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z";var gH="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z";var ZH="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z";var yH="M11,3H13V10.27L19.29,6.64L20.29,8.37L14,12L20.3,15.64L19.3,17.37L13,13.72V21H11V13.73L4.69,17.36L3.69,15.63L10,12L3.72,8.36L4.72,6.63L11,10.26V3Z";var _H="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z";var bH="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z";var wH="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z";var It="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var TH="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var OH="M19.83 7.5L17.56 5.23C17.63 4.81 17.74 4.42 17.88 4.08C17.96 3.9 18 3.71 18 3.5C18 2.67 17.33 2 16.5 2C14.86 2 13.41 2.79 12.5 4H7.5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10V19H12V21H17.5L19.18 15.41L22 14.47V7.5H19.83M13 9H8V7H13V9M16 11C15.45 11 15 10.55 15 10S15.45 9 16 9C16.55 9 17 9.45 17 10S16.55 11 16 11Z";var EH="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z";var RH="M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z";var PH="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var BH="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z";var IH="M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z";var FH="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z";var kH="M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z";var DH="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";var NH="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z";var UH="M16,18H18V6H16M6,18L14.5,12L6,6V18Z";var zH="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z";var GH="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";var WH="M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var $H="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";var u8="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z";var qH="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12";var XH="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z";var YH="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z";var QH="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z",KH="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z";var JH="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z",jH="M15.2 10.7L16.6 16L12 12.2L7.4 16L8.8 10.8L4.6 7.3L10 7L12 2L14 7L19.4 7.3L15.2 10.7M14 19H13V16L12 15L11 16V19H10C8.9 19 8 19.9 8 21V22H16V21C16 19.9 15.11 19 14 19Z";var en="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z";var tn="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var Cn="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var f7=[{id:"history",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",icon:EH},{id:"geography",name:"\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F",icon:sH},{id:"literature",name:"\u041B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",icon:Gi},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430",icon:_H},{id:"science",name:"\u041D\u0430\u0443\u043A\u0430",icon:zi},{id:"painting",name:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C",icon:It},{id:"people",name:"\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",icon:Ui},{id:"cinema",name:"\u041A\u0438\u043D\u043E",icon:ZH},{id:"journalism",name:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438\u043A\u0430",icon:bH},{id:"logic",name:"\u041B\u043E\u0433\u0438\u043A\u0430 \u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0438",icon:BH},{id:"sport",name:"\u0421\u043F\u043E\u0440\u0442",icon:zH},{id:"cooking",name:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F",icon:Ji},{id:"architecture",name:"\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",icon:wH},{id:"quotes",name:"\u041A\u0438\u043D\u043E\u0446\u0438\u0442\u0430\u0442\u044B \u0438 \u043A\u0430\u0434\u0440\u044B",icon:iH},{id:"cartoons",name:"\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",icon:qH},{id:"games",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",icon:pH},{id:"belarus",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438",icon:Xi},{id:"etymology",name:"\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432",icon:YH},{id:"inventions",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0439",icon:rH},{id:"computers",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B",icon:fH},{id:"my",name:"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",icon:Bt}],rn=kH,v2=Object.fromEntries(f7.map(C=>[C.id,C])),l1={hint:xH,undo:en,view:qi,soundOn:tn,soundOff:Cn,star:GH,starOff:$H,help:AH,close:tH,check:Yi,turn:IH,home:mH,shuffle:NH,flag:dH,trophy:JH,back:ji,plus:PH,del:oH,save:QH,load:KH,edit:TH,my:Bt,timer:XH,update:CH,report:cH,share:DH,half:eH,skip:UH,duel:u8,paste:HH,lock:SH,palette:It,bomb:M8,gift:p8,image:hH,download:LH,flash:c8,fire:d8,x2:yH,calendar:l8},h1=(C,e="ic")=>`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${C}"/></svg>`;var A0=null,e3={on:!0};function T4(){if(!A0){let C=window.AudioContext||window.webkitAudioContext;if(!C)return;A0=new C}A0.state==="suspended"&&A0.resume()}function u0(C,e,t,r="sine",i=.18,H){let n=A0.currentTime+e,V=A0.createOscillator(),a=A0.createGain();V.type=r,V.frequency.setValueAtTime(C,n),H&&V.frequency.exponentialRampToValueAtTime(H,n+t),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(i,n+.012),a.gain.exponentialRampToValueAtTime(1e-4,n+t),V.connect(a).connect(A0.destination),V.start(n),V.stop(n+t+.02)}function Hn(C){if(!(!e3.on||!A0))switch(C){case"ok":u0(660,0,.14),u0(990,.1,.22);break;case"bad":u0(220,0,.28,"triangle",.2,150);break;case"turn":u0(340,0,.06,"triangle",.12,260);break;case"tap":u0(520,0,.05,"sine",.08);break;case"tick":u0(1200,0,.04,"square",.04);break;case"deny":u0(180,0,.12,"square",.05);break;case"win":[523,659,784,1047].forEach((e,t)=>u0(e,t*.11,.3,"sine",.16));break;case"stage":[784,1047].forEach((e,t)=>u0(e,t*.09,.18,"sine",.12));break}}var I2=Uint8Array,A5=Uint16Array,$t=Int32Array,A8=new I2([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),m8=new I2([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Nt=new I2([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ln=function(C,e){for(var t=new A5(31),r=0;r<31;++r)t[r]=e+=1<<C[r-1];for(var i=new $t(t[30]),r=1;r<30;++r)for(var H=t[r];H<t[r+1];++H)i[H]=H-t[r]<<5|r;return{b:t,r:i}},sn=Ln(A8,2),Mn=sn.b,Ut=sn.r;Mn[28]=258,Ut[258]=28;var ln=Ln(m8,0),Td=ln.b,nn=ln.r,zt=new A5(32768);for(i2=0;i2<32768;++i2)m0=(i2&43690)>>1|(i2&21845)<<1,m0=(m0&52428)>>2|(m0&13107)<<2,m0=(m0&61680)>>4|(m0&3855)<<4,zt[i2]=((m0&65280)>>8|(m0&255)<<8)>>1;var m0,i2,C0=(function(C,e,t){for(var r=C.length,i=0,H=new A5(e);i<r;++i)C[i]&&++H[C[i]-1];var n=new A5(e);for(i=1;i<e;++i)n[i]=n[i-1]+H[i-1]<<1;var V;if(t){V=new A5(1<<e);var a=15-e;for(i=0;i<r;++i)if(C[i])for(var o=i<<4|C[i],L=e-C[i],M=n[C[i]-1]++<<L,s=M|(1<<L)-1;M<=s;++M)V[zt[M]>>a]=o}else for(V=new A5(r),i=0;i<r;++i)C[i]&&(V[i]=zt[n[C[i]-1]++]>>15-C[i]);return V}),t3=new I2(288);for(i2=0;i2<144;++i2)t3[i2]=8;var i2;for(i2=144;i2<256;++i2)t3[i2]=9;var i2;for(i2=256;i2<280;++i2)t3[i2]=7;var i2;for(i2=280;i2<288;++i2)t3[i2]=8;var i2,R4=new I2(32);for(i2=0;i2<32;++i2)R4[i2]=5;var i2,Od=C0(t3,9,0),Ed=C0(t3,9,1),Rd=C0(R4,5,0),Pd=C0(R4,5,1),Ft=function(C){for(var e=C[0],t=1;t<C.length;++t)C[t]>e&&(e=C[t]);return e},N5=function(C,e,t){var r=e/8|0;return(C[r]|C[r+1]<<8)>>(e&7)&t},kt=function(C,e){var t=e/8|0;return(C[t]|C[t+1]<<8|C[t+2]<<16)>>(e&7)},qt=function(C){return(C+7)/8|0},h8=function(C,e,t){return(e==null||e<0)&&(e=0),(t==null||t>C.length)&&(t=C.length),new I2(C.subarray(e,t))};var Bd=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],t0=function(C,e,t){var r=new Error(e||Bd[C]);if(r.code=C,Error.captureStackTrace&&Error.captureStackTrace(r,t0),!t)throw r;return r},Id=function(C,e,t,r){var i=C.length,H=r?r.length:0;if(!i||e.f&&!e.l)return t||new I2(0);var n=!t,V=n||e.i!=2,a=e.i;n&&(t=new I2(i*3));var o=function(A1){var N1=t.length;if(A1>N1){var l2=new I2(Math.max(N1*2,A1));l2.set(t),t=l2}},L=e.f||0,M=e.p||0,s=e.b||0,l=e.l,p=e.d,f=e.m,c=e.n,d=i*8;do{if(!l){L=N5(C,M,1);var S=N5(C,M+1,3);if(M+=3,S)if(S==1)l=Ed,p=Pd,f=9,c=5;else if(S==2){var Z=N5(C,M,31)+257,b=N5(C,M+10,15)+4,A=Z+N5(C,M+5,31)+1;M+=14;for(var x=new I2(A),w=new I2(19),P=0;P<b;++P)w[Nt[P]]=N5(C,M+P*3,7);M+=b*3;for(var F=Ft(w),U=(1<<F)-1,E=C0(w,F,1),P=0;P<A;){var k=E[N5(C,M,U)];M+=k&15;var _=k>>4;if(_<16)x[P++]=_;else{var X=0,G=0;for(_==16?(G=3+N5(C,M,3),M+=2,X=x[P-1]):_==17?(G=3+N5(C,M,7),M+=3):_==18&&(G=11+N5(C,M,127),M+=7);G--;)x[P++]=X}}var r1=x.subarray(0,Z),W=x.subarray(Z);f=Ft(r1),c=Ft(W),l=C0(r1,f,1),p=C0(W,c,1)}else t0(1);else{var _=qt(M)+4,v=C[_-4]|C[_-3]<<8,g=_+v;if(g>i){a&&t0(0);break}V&&o(s+v),t.set(C.subarray(_,g),s),e.b=s+=v,e.p=M=g*8,e.f=L;continue}if(M>d){a&&t0(0);break}}V&&o(s+131072);for(var e1=(1<<f)-1,t1=(1<<c)-1,Z1=M;;Z1=M){var X=l[kt(C,M)&e1],f1=X>>4;if(M+=X&15,M>d){a&&t0(0);break}if(X||t0(2),f1<256)t[s++]=f1;else if(f1==256){Z1=M,l=null;break}else{var $1=f1-254;if(f1>264){var P=f1-257,T1=A8[P];$1=N5(C,M,(1<<T1)-1)+Mn[P],M+=T1}var z1=p[kt(C,M)&t1],Y=z1>>4;z1||t0(3),M+=z1&15;var W=Td[Y];if(Y>3){var T1=m8[Y];W+=kt(C,M)&(1<<T1)-1,M+=T1}if(M>d){a&&t0(0);break}V&&o(s+131072);var j=s+$1;if(s<W){var v1=H-W,F1=Math.min(W,j);for(v1+s<0&&t0(3);s<F1;++s)t[s]=r[v1+s]}for(;s<j;++s)t[s]=t[s-W]}}e.l=l,e.p=Z1,e.b=s,e.f=L,l&&(L=1,e.m=f,e.d=p,e.n=c)}while(!L);return s!=t.length&&n?h8(t,0,s):t.subarray(0,s)},h0=function(C,e,t){t<<=e&7;var r=e/8|0;C[r]|=t,C[r+1]|=t>>8},O4=function(C,e,t){t<<=e&7;var r=e/8|0;C[r]|=t,C[r+1]|=t>>8,C[r+2]|=t>>16},Dt=function(C,e){for(var t=[],r=0;r<C.length;++r)C[r]&&t.push({s:r,f:C[r]});var i=t.length,H=t.slice();if(!i)return{t:cn,l:0};if(i==1){var n=new I2(t[0].s+1);return n[t[0].s]=1,{t:n,l:1}}t.sort(function(g,Z){return g.f-Z.f}),t.push({s:-1,f:25001});var V=t[0],a=t[1],o=0,L=1,M=2;for(t[0]={s:-1,f:V.f+a.f,l:V,r:a};L!=i-1;)V=t[t[o].f<t[M].f?o++:M++],a=t[o!=L&&t[o].f<t[M].f?o++:M++],t[L++]={s:-1,f:V.f+a.f,l:V,r:a};for(var s=H[0].s,r=1;r<i;++r)H[r].s>s&&(s=H[r].s);var l=new A5(s+1),p=Gt(t[L-1],l,0);if(p>e){var r=0,f=0,c=p-e,d=1<<c;for(H.sort(function(Z,b){return l[b.s]-l[Z.s]||Z.f-b.f});r<i;++r){var S=H[r].s;if(l[S]>e)f+=d-(1<<p-l[S]),l[S]=e;else break}for(f>>=c;f>0;){var _=H[r].s;l[_]<e?f-=1<<e-l[_]++-1:++r}for(;r>=0&&f;--r){var v=H[r].s;l[v]==e&&(--l[v],++f)}p=e}return{t:new I2(l),l:p}},Gt=function(C,e,t){return C.s==-1?Math.max(Gt(C.l,e,t+1),Gt(C.r,e,t+1)):e[C.s]=t},Vn=function(C){for(var e=C.length;e&&!C[--e];);for(var t=new A5(++e),r=0,i=C[0],H=1,n=function(a){t[r++]=a},V=1;V<=e;++V)if(C[V]==i&&V!=e)++H;else{if(!i&&H>2){for(;H>138;H-=138)n(32754);H>2&&(n(H>10?H-11<<5|28690:H-3<<5|12305),H=0)}else if(H>3){for(n(i),--H;H>6;H-=6)n(8304);H>2&&(n(H-3<<5|8208),H=0)}for(;H--;)n(i);H=1,i=C[V]}return{c:t.subarray(0,r),n:e}},E4=function(C,e){for(var t=0,r=0;r<e.length;++r)t+=C[r]*e[r];return t},dn=function(C,e,t){var r=t.length,i=qt(e+2);C[i]=r&255,C[i+1]=r>>8,C[i+2]=C[i]^255,C[i+3]=C[i+1]^255;for(var H=0;H<r;++H)C[i+H+4]=t[H];return(i+4+r)*8},an=function(C,e,t,r,i,H,n,V,a,o,L){h0(e,L++,t),++i[256];for(var M=Dt(i,15),s=M.t,l=M.l,p=Dt(H,15),f=p.t,c=p.l,d=Vn(s),S=d.c,_=d.n,v=Vn(f),g=v.c,Z=v.n,b=new A5(19),A=0;A<S.length;++A)++b[S[A]&31];for(var A=0;A<g.length;++A)++b[g[A]&31];for(var x=Dt(b,7),w=x.t,P=x.l,F=19;F>4&&!w[Nt[F-1]];--F);var U=o+5<<3,E=E4(i,t3)+E4(H,R4)+n,k=E4(i,s)+E4(H,f)+n+14+3*F+E4(b,w)+2*b[16]+3*b[17]+7*b[18];if(a>=0&&U<=E&&U<=k)return dn(e,L,C.subarray(a,a+o));var X,G,r1,W;if(h0(e,L,1+(k<E)),L+=2,k<E){X=C0(s,l,0),G=s,r1=C0(f,c,0),W=f;var e1=C0(w,P,0);h0(e,L,_-257),h0(e,L+5,Z-1),h0(e,L+10,F-4),L+=14;for(var A=0;A<F;++A)h0(e,L+3*A,w[Nt[A]]);L+=3*F;for(var t1=[S,g],Z1=0;Z1<2;++Z1)for(var f1=t1[Z1],A=0;A<f1.length;++A){var $1=f1[A]&31;h0(e,L,e1[$1]),L+=w[$1],$1>15&&(h0(e,L,f1[A]>>5&127),L+=f1[A]>>12)}}else X=Od,G=t3,r1=Rd,W=R4;for(var A=0;A<V;++A){var T1=r[A];if(T1>255){var $1=T1>>18&31;O4(e,L,X[$1+257]),L+=G[$1+257],$1>7&&(h0(e,L,T1>>23&31),L+=A8[$1]);var z1=T1&31;O4(e,L,r1[z1]),L+=W[z1],z1>3&&(O4(e,L,T1>>5&8191),L+=m8[z1])}else O4(e,L,X[T1]),L+=G[T1]}return O4(e,L,X[256]),L+G[256]},Fd=new $t([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),cn=new I2(0),kd=function(C,e,t,r,i,H){var n=H.z||C.length,V=new I2(r+n+5*(1+Math.ceil(n/7e3))+i),a=V.subarray(r,V.length-i),o=H.l,L=(H.r||0)&7;if(e){L&&(a[0]=H.r>>3);for(var M=Fd[e-1],s=M>>13,l=M&8191,p=(1<<t)-1,f=H.p||new A5(32768),c=H.h||new A5(p+1),d=Math.ceil(t/3),S=2*d,_=function(W1){return(C[W1]^C[W1+1]<<d^C[W1+2]<<S)&p},v=new $t(25e3),g=new A5(288),Z=new A5(32),b=0,A=0,x=H.i||0,w=0,P=H.w||0,F=0;x+2<n;++x){var U=_(x),E=x&32767,k=c[U];if(f[E]=k,c[U]=E,P<=x){var X=n-x;if((b>7e3||w>24576)&&(X>423||!o)){L=an(C,a,0,v,g,Z,A,w,F,x-F,L),w=b=A=0,F=x;for(var G=0;G<286;++G)g[G]=0;for(var G=0;G<30;++G)Z[G]=0}var r1=2,W=0,e1=l,t1=E-k&32767;if(X>2&&U==_(x-t1))for(var Z1=Math.min(s,X)-1,f1=Math.min(32767,x),$1=Math.min(258,X);t1<=f1&&--e1&&E!=k;){if(C[x+r1]==C[x+r1-t1]){for(var T1=0;T1<$1&&C[x+T1]==C[x+T1-t1];++T1);if(T1>r1){if(r1=T1,W=t1,T1>Z1)break;for(var z1=Math.min(t1,T1-2),Y=0,G=0;G<z1;++G){var j=x-t1+G&32767,v1=f[j],F1=j-v1&32767;F1>Y&&(Y=F1,k=j)}}}E=k,k=f[E],t1+=E-k&32767}if(W){v[w++]=268435456|Ut[r1]<<18|nn[W];var A1=Ut[r1]&31,N1=nn[W]&31;A+=A8[A1]+m8[N1],++g[257+A1],++Z[N1],P=x+r1,++b}else v[w++]=C[x],++g[C[x]]}}for(x=Math.max(x,P);x<n;++x)v[w++]=C[x],++g[C[x]];L=an(C,a,o,v,g,Z,A,w,F,x-F,L),o||(H.r=L&7|a[L/8|0]<<3,L-=7,H.h=c,H.p=f,H.i=x,H.w=P)}else{for(var x=H.w||0;x<n+o;x+=65535){var l2=x+65535;l2>=n&&(a[L/8|0]=o,l2=n),L=dn(a,L+1,C.subarray(x,l2))}H.i=n}return h8(V,0,r+qt(L)+i)};var Dd=function(C,e,t,r,i){if(!i&&(i={l:1},e.dictionary)){var H=e.dictionary.subarray(-32768),n=new I2(H.length+C.length);n.set(H),n.set(C,H.length),C=n,i.w=H.length}return kd(C,e.level==null?6:e.level,e.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(C.length)))*1.5):20:12+e.mem,t,r,i)};function pn(C,e){return Dd(C,e||{},0,0)}function un(C,e){return Id(C,{i:2},e&&e.out,e&&e.dictionary)}var on=typeof TextEncoder<"u"&&new TextEncoder,Wt=typeof TextDecoder<"u"&&new TextDecoder,Nd=0;try{Wt.decode(cn,{stream:!0}),Nd=1}catch{}var Ud=function(C){for(var e="",t=0;;){var r=C[t++],i=(r>127)+(r>223)+(r>239);if(t+i>C.length)return{s:e,r:h8(C,t-1)};i?i==3?(r=((r&15)<<18|(C[t++]&63)<<12|(C[t++]&63)<<6|C[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|C[t++]&63):e+=String.fromCharCode((r&15)<<12|(C[t++]&63)<<6|C[t++]&63):e+=String.fromCharCode(r)}};function An(C,e){if(e){for(var t=new I2(C.length),r=0;r<C.length;++r)t[r]=C.charCodeAt(r);return t}if(on)return on.encode(C);for(var i=C.length,H=new I2(C.length+(C.length>>1)),n=0,V=function(L){H[n++]=L},r=0;r<i;++r){if(n+5>H.length){var a=new I2(n+8+(i-r<<1));a.set(H),H=a}var o=C.charCodeAt(r);o<128||e?V(o):o<2048?(V(192|o>>6),V(128|o&63)):o>55295&&o<57344?(o=65536+(o&1047552)|C.charCodeAt(++r)&1023,V(240|o>>18),V(128|o>>12&63),V(128|o>>6&63),V(128|o&63)):(V(224|o>>12),V(128|o>>6&63),V(128|o&63))}return h8(H,0,n)}function mn(C,e){if(e){for(var t="",r=0;r<C.length;r+=16384)t+=String.fromCharCode.apply(null,C.subarray(r,r+16384));return t}else{if(Wt)return Wt.decode(C);var i=Ud(C),H=i.s,t=i.r;return t.length&&t0(8),H}}var j1={on:!1,W:null,link:"",start:""},zd=()=>/tgWebApp/.test(location.hash+location.search)||!!window.TelegramWebviewProxy||window.Telegram&&window.Telegram.WebApp&&window.Telegram.WebApp.initData||/tgWebApp/.test(sessionStorage.getItem("__telegram__initParams")||"");function vn(){return zd()?new Promise(C=>{if(window.Telegram&&window.Telegram.WebApp){C(!0);return}let e=document.createElement("script");e.src="https://telegram.org/js/telegram-web-app.js?59",e.onload=()=>C(!!(window.Telegram&&window.Telegram.WebApp)),e.onerror=()=>C(!1),document.head.appendChild(e),setTimeout(()=>C(!!(window.Telegram&&window.Telegram.WebApp)),5e3)}).then(C=>{if(!C)return!1;let e=window.Telegram.WebApp;if(!e.initData&&e.platform==="unknown")return!1;j1.on=!0,j1.W=e;try{e.ready(),e.expand(),e.isVersionAtLeast("7.7")&&e.disableVerticalSwipes&&e.disableVerticalSwipes(),e.isVersionAtLeast("6.1")&&(e.setHeaderColor("#121726"),e.setBackgroundColor("#0e1322")),e.isVersionAtLeast("7.10")&&e.setBottomBarColor&&e.setBottomBarColor("#0e1322")}catch{}return j1.start=e.initDataUnsafe&&e.initDataUnsafe.start_param||new URLSearchParams(location.search).get("tgWebAppStartParam")||"",document.body.classList.add("tg"),!0}):Promise.resolve(!1)}async function xn(){try{let C=await fetch("tg.txt",{cache:"no-cache"});if(!C.ok)return;j1.link=Gd(await C.text())}catch{}}function Gd(C){let e=String(C||"").trim().match(/^(?:https?:\/\/)?(?:t\.me\/|@)([A-Za-z][A-Za-z0-9_]{3,31}[bB][oO][tT])(?:\/([A-Za-z0-9_]{3,30}))?\/?$/);return e?`https://t.me/${e[1]}${e[2]?"/"+e[2]:""}`:""}var v8=C=>j1.link?j1.link+(C?"?startapp="+C:""):"";function Xt(C,e){let t=e?`https://t.me/share/url?url=${encodeURIComponent(e)}&text=${encodeURIComponent(C)}`:`https://t.me/share/url?url=${encodeURIComponent(C)}`;j1.W.openTelegramLink(t)}var f8=null;function Sn(C){!j1.on||!j1.W.BackButton||!j1.W.isVersionAtLeast("6.1")||(f8||j1.W.BackButton.onClick(()=>f8&&f8()),f8=C,C?j1.W.BackButton.show():j1.W.BackButton.hide())}var Wd={ok:["n","success"],bad:["n","error"],deny:["n","warning"],win:["n","success"],turn:["i","light"],stage:["i","medium"]};function gn(C){let e=Wd[C];if(!(!e||!j1.on||!j1.W.HapticFeedback||!j1.W.isVersionAtLeast("6.1")))try{e[0]==="n"?j1.W.HapticFeedback.notificationOccurred(e[1]):j1.W.HapticFeedback.impactOccurred(e[1])}catch{}}var $d=C=>{let e="";for(let t of C)e+=String.fromCharCode(t);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},qd=C=>Uint8Array.from(atob(C.replace(/-/g,"+").replace(/_/g,"/")),e=>e.charCodeAt(0)),Zn=["n","p","c","o","k","h","x","y","w"],hn=C=>C?Zn.map(e=>C[e]):0,fn=C=>Array.isArray(C)?Object.fromEntries(Zn.map((e,t)=>[e,C[t]])):void 0;function yn(C,e){let t=String(e.q||"").split(","),r=e.s*e.s;if(t.length!==6||t.some(a=>a.length!==r*5||!/^[0-9a-z]+$/.test(a)))return"";let i=An(JSON.stringify([e.v,e.id,e.ap,e.r,e.l,e.s,e.t,e.tm,e.m,hn(e.a),e.sp||"",hn(e.b)])),H=pn(i,{level:9}),n=[];for(let a of t)for(let o=0;o<r;o++){let L=a.slice(o*5,o*5+5),M=parseInt(L.slice(0,2),36),s=parseInt(L.slice(2),36);if(M>2047||s>65535)return"";for(let l=10;l>=0;l--)n.push(M>>l&1);for(let l=15;l>=0;l--)n.push(s>>l&1)}let V=new Uint8Array(2+H.length+Math.ceil(n.length/8));return V[0]=H.length&255,V[1]=H.length>>8,V.set(H,2),n.forEach((a,o)=>{a&&(V[2+H.length+(o>>3)]|=128>>(o&7))}),(C==="re"?"r":"c")+$d(V)}function _n(C){try{let e=C[0]==="r"?"re":C[0]==="c"?"ch":"";if(!e)return null;let t=qd(C.slice(1)),r=t[0]|t[1]<<8,i=JSON.parse(mn(un(t.subarray(2,2+r)))),[H,n,V,a,o,L,M,s,l,p,f,c]=i,d=L*L,S=t.subarray(2+r),_=0,v=b=>{let A=0;for(let x=0;x<b;x++,_++)A=A<<1|S[_>>3]>>7-(_&7)&1;return A},g=[];for(let b=0;b<6;b++){let A="";for(let x=0;x<d;x++)A+=v(11).toString(36).padStart(2,"0")+v(16).toString(36).padStart(3,"0");g.push(A)}let Z={v:H,id:n,ap:V,r:a,l:o,s:L,t:M,tm:s,m:l,q:g.join(","),a:fn(p)};return f&&(Z.sp=f),c&&(Z.b=fn(c)),{kind:e,raw:Z}}catch{return null}}var G2=1080,v7=1350,z2={bg1:"#0e1322",bg2:"#1d2850",text:"#f3f5fa",muted:"#9aa6c0",accent:"#ffd21f",ok:"#19b36b",bad:"#e0404a",empty:"#3b4663",skip:"#1a1d24"},Xd='-apple-system, "SF Pro Display", "Segoe UI", Roboto, Inter, "Helvetica Neue", Arial, sans-serif',S7=(C,e=700)=>`${e} ${C}px ${Xd}`;function Yd(C,e,t,r,i,H){C.beginPath(),C.moveTo(e+H,t),C.arcTo(e+r,t,e+r,t+i,H),C.arcTo(e+r,t+i,e,t+i,H),C.arcTo(e,t+i,e,t,H),C.arcTo(e,t,e+r,t,H),C.closePath()}function bn(C,e,t,r,i,H){C.save(),C.translate(t-i/2,r-i/2),C.scale(i/24,i/24),C.fillStyle=H,C.fill(new Path2D(e)),C.restore()}function x7(C,e,t,r,i,H,n=700,V=G2-120){let a=i;for(C.font=S7(a,n);C.measureText(e).width>V&&a>18;)a-=2,C.font=S7(a,n);C.fillStyle=H,C.fillText(e,t,r)}function Qd(C){let e=document.createElement("canvas");e.width=G2,e.height=v7;let t=e.getContext("2d"),r=t.createLinearGradient(0,0,G2*.4,v7);r.addColorStop(0,z2.bg2),r.addColorStop(1,z2.bg1),t.fillStyle=r,t.fillRect(0,0,G2,v7);let i=t.createRadialGradient(G2/2,560,40,G2/2,560,520);i.addColorStop(0,"rgba(255,210,31,0.16)"),i.addColorStop(1,"rgba(255,210,31,0)"),t.fillStyle=i,t.fillRect(0,0,G2,v7),t.textAlign="center",t.textBaseline="alphabetic",x7(t,"\u041A\u0423\u0411\u0418\u041A",G2/2,118,64,z2.accent,800),x7(t,"\u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0438\u0433\u0440\u0430",G2/2,166,30,z2.muted,500),x7(t,C.title,G2/2,262,60,z2.text,800),C.sub&&x7(t,C.sub,G2/2,318,34,z2.muted,500);let H=350,n=470;if(C.grid){let l=String(C.grid).split(`
`).map(A=>[...A]),p=Math.max(...l.map(A=>A.length)),f=p>4?52:66,c=12,d=p*f+(p-1)*c,S=l.length*f+(l.length-1)*c,_=C.cube?470:0,v=C.cube?40:0,g=(G2-_-v-d)/2;C.cube&&t.drawImage(C.cube,g-20,H+(n*1-_)/2,_+40,_+40);let Z=g+_+v,b=H+(n-S)/2+20;l.forEach((A,x)=>A.forEach((w,P)=>{let F=Z+P*(f+c),U=b+x*(f+c),E=w==="\u{1F7E9}"?z2.ok:w==="\u{1F7E5}"?z2.bad:w==="\u2B1B"?z2.skip:w==="\u{1F381}"?z2.accent:z2.empty;Yd(t,F,U,f,f,12),t.fillStyle=E,t.fill(),w==="\u2B1B"&&(t.lineWidth=3,t.strokeStyle=z2.empty,t.stroke()),w==="\u{1F381}"&&bn(t,l1.gift,F+f/2,U+f/2,f*.62,z2.skip)}))}else C.cube&&t.drawImage(C.cube,(G2-540)/2,H-10,540,540);let V=905;for(let l=0;l<3;l++)bn(t,l<C.stars?l1.star:l1.starOff,G2/2+(l-1)*104,V,96,l<C.stars?z2.accent:"#56607d");t.font=S7(132,800);let a=String(C.points),o=t.measureText(a).width;t.font=S7(44,600);let L=C.pointsWord||"\u043E\u0447\u043A\u043E\u0432",M=t.measureText(L).width,s=G2/2-(o+22+M)/2;return t.textAlign="left",t.font=S7(132,800),t.fillStyle=z2.text,t.fillText(a,s,1080),t.font=S7(44,600),t.fillStyle=z2.muted,t.fillText(L,s+o+22,1080),t.textAlign="center",(C.lines||[]).slice(0,2).forEach((l,p)=>x7(t,l,G2/2,1150+p*52,36,z2.text,500)),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,v7-108,G2,108),x7(t,C.foot||"",G2/2,v7-42,36,z2.accent,700),e}function wn(C){let e=Qd(C);return new Promise(t=>{e.toBlob?e.toBlob(r=>t(r),"image/png"):t(null)})}var P4=[{id:"classic",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430",stars:0,about:"\u0447\u0451\u0440\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0433\u043B\u0430\u0434\u043A\u0438\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",pv:["#14161c","#e0303a"]},{id:"wood",name:"\u0414\u0435\u0440\u0435\u0432\u043E",stars:3,about:"\u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u043A\u0440\u0430\u0448\u0435\u043D\u044B\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",pv:["#9a6233","#11a85c"]},{id:"newyear",name:"\u041D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0438\u0439",stars:6,about:"\u0451\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0438 \u0438 \u0441\u043D\u0435\u0433 \u043D\u0430 \u0444\u043E\u043D\u0435",pv:["#0d4a2f","#e0303a"]},{id:"marble",name:"\u041C\u0440\u0430\u043C\u043E\u0440",stars:12,about:"\u0447\u0451\u0440\u043D\u044B\u0439 \u043C\u0440\u0430\u043C\u043E\u0440 \u0441 \u0437\u043E\u043B\u043E\u0442\u044B\u043C\u0438 \u043F\u0440\u043E\u0436\u0438\u043B\u043A\u0430\u043C\u0438",pv:["#17181d","#2563d9"]},{id:"neon",name:"\u041D\u0435\u043E\u043D",stars:20,about:"\u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0435\u0441\u044F \u043A\u043E\u043D\u0442\u0443\u0440\u044B \u0432 \u0442\u0435\u043C\u043D\u043E\u0442\u0435",pv:["#07080c","#ff7a1a"]},{id:"gold",name:"\u0417\u043E\u043B\u043E\u0442\u043E",stars:30,about:"\u0437\u043E\u043B\u043E\u0442\u043E\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",pv:["#d9a62e","#ffd21f"]}],m3=Object.fromEntries(P4.map(C=>[C.id,C])),f0=C=>C.ach.t,v0=[{id:"first",name:"\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A",icon:aH},{id:"cleanface",name:"\u0427\u0438\u0441\u0442\u0430\u044F \u0433\u0440\u0430\u043D\u044C",about:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0432\u0435\u0440\u043D\u043E \u043D\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0434\u043D\u043E\u0439 \u0433\u0440\u0430\u043D\u0438",icon:Ki},{id:"perfect",name:"\u0411\u0435\u0437 \u0435\u0434\u0438\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438",about:"\u041F\u0440\u043E\u0439\u0442\u0438 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432",icon:Qi},{id:"three",name:"\u0422\u0440\u0438 \u0437\u0432\u0435\u0437\u0434\u044B",about:"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0442\u0440\u0438 \u0437\u0432\u0435\u0437\u0434\u044B \u0437\u0430 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",icon:WH},{id:"expert",name:"\u0417\u043D\u0430\u0442\u043E\u043A",about:"\u0422\u0440\u0438 \u0437\u0432\u0435\u0437\u0434\u044B \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435",icon:FH},{id:"triple",name:"\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u043D\u0430 \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445 \u0443\u0440\u043E\u0432\u043D\u044F\u0445 \u043E\u0434\u043D\u043E\u0439 \u0438\u0433\u0440\u044B",icon:jH},{id:"nohints",name:"\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A, \u043D\u0435 \u0432\u0437\u044F\u0432 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435",icon:vH},{id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u0443\u0431\u0438\u043A\u0430",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A 3\xD73 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A",icon:VH},{id:"self",name:"\u0421\u0432\u043E\u0438\u043C\u0438 \u0440\u0443\u043A\u0430\u043C\u0438",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C",icon:uH},{id:"saver",name:"\u0411\u0435\u0440\u0435\u0436\u043B\u0438\u0432\u044B\u0439",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C 10 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 (\u043D\u0430 2\xD72 \u2014 5)",icon:OH},{id:"streak10",name:"\u0414\u0435\u0441\u044F\u0442\u044C \u043F\u043E\u0434\u0440\u044F\u0434",about:"10 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434",icon:d8,prog:C=>[f0(C).bestRun,10]},{id:"streak25",name:"\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u044F\u0442\u044C \u043F\u043E\u0434\u0440\u044F\u0434",about:"25 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434",icon:lH,prog:C=>[f0(C).bestRun,25]},{id:"blitz",name:"\u0411\u043B\u0438\u0446",about:"\u0412\u0435\u0440\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 10 \u0441\u0435\u043A\u0443\u043D\u0434",icon:c8},{id:"eye",name:"\u0417\u043E\u0440\u043A\u0438\u0439 \u0433\u043B\u0430\u0437",about:"20 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0441 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\u043C\u0438",icon:MH,prog:C=>[f0(C).pics,20]},{id:"wide",name:"\u042D\u0440\u0443\u0434\u0438\u0442",about:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0432\u0435\u0440\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B \u043D\u0430 5 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 10 \u0440\u0430\u0437\u043D\u044B\u0445 \u0442\u0435\u043C\u0430\u0445",icon:Wi,prog:C=>[Kd(C),10]},{id:"ans100",name:"\u0421\u043E\u0442\u043D\u044F",about:"100 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",icon:nH,prog:C=>[f0(C).ok,100]},{id:"ans1000",name:"\u0422\u044B\u0441\u044F\u0447\u0430",about:"1000 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",icon:gH,prog:C=>[f0(C).ok,1e3]},{id:"days7",name:"\u041D\u0435\u0434\u0435\u043B\u044F \u043F\u043E\u0434\u0440\u044F\u0434",about:"\u0418\u0433\u0440\u0430\u0442\u044C 7 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",icon:$i,prog:C=>[f0(C).bestDays,7]},{id:"daily7",name:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C",about:"\u0418\u0433\u0440\u0430\u0442\u044C \xAB\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F\xBB 7 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",icon:l8,prog:C=>[f0(C).dayBest||0,7]},{id:"duel",name:"\u0412\u044B\u0437\u043E\u0432 \u0431\u0440\u043E\u0448\u0435\u043D",about:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443",icon:u8},{id:"sapper",name:"\u0421\u0430\u043F\u0451\u0440",about:"\u0412\u0435\u0440\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 5 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432-\u0431\u043E\u043C\u0431",icon:M8,prog:C=>[f0(C).bombs,5]},{id:"lucky",name:"\u0412\u0435\u0437\u0443\u043D\u0447\u0438\u043A",about:"\u041D\u0430\u0439\u0442\u0438 10 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432",icon:p8,prog:C=>[f0(C).gifts,10]},{id:"newyear",name:"\u041D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",about:"\u0413\u0440\u0430\u043D\u044C \xAB\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434 \u0438 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E\xBB \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A",icon:RH}],x8=Object.fromEntries(v0.map(C=>[C.id,C]));function r0(C){C.ach=C.ach||{};let e=C.ach;return e.got=e.got||{},e.stars=e.stars||0,e.topics=e.topics||{},e.t=Object.assign({n:0,ok:0,run:0,bestRun:0,pics:0,bombs:0,gifts:0,day:"",days:0,bestDays:0,solved:0,levels:0,since:x0()},e.t||{}),e}function x0(C=new Date){return`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}-${String(C.getDate()).padStart(2,"0")}`}var Tn=C=>Math.round(Date.UTC(+C.slice(0,4),+C.slice(5,7)-1,+C.slice(8,10))/864e5),Kd=C=>Object.entries(C.ach.topics).filter(([e,t])=>e!=="my"&&t[1]>=5).length;function M5(C,e,t){C.ach.got[e]||(C.ach.got[e]=x0(),t.push(e))}function Yt(C,e){for(let t of v0)if(t.prog){let[r,i]=t.prog(C);r>=i&&M5(C,t.id,e)}}function On(C,{ok:e,topic:t,pic:r,timer:i,sp:H}){r0(C);let n=C.ach.t,V=[],a=x0();if(n.day!==a&&(n.days=n.day&&Tn(a)-Tn(n.day)===1?n.days+1:1,n.day=a,n.bestDays=Math.max(n.bestDays,n.days)),n.n++,e?(n.ok++,n.run++,n.bestRun=Math.max(n.bestRun,n.run)):n.run=0,t){let o=C.ach.topics[t]=C.ach.topics[t]||[0,0];o[0]++,e&&o[1]++}return e&&r&&n.pics++,e&&H==="bomb"&&n.bombs++,e&&i&&i<=10&&M5(C,"blitz",V),Yt(C,V),V}function En(C,{topic:e,clean:t}){r0(C);let r=[];return t&&(M5(C,"cleanface",r),e==="newyear"&&M5(C,"newyear",r)),r}function Rn(C,{r:e,level:t,size:r,total:i,all3:H}){r0(C);let n=C.ach,V=[],a=n.stars;n.stars+=e.stars||0,n.t.levels++,e.solved&&(n.t.solved++,M5(C,"first",V),e.free?M5(C,"self",V):(e.hints||M5(C,"nohints",V),!e.hints&&t===3&&r===3&&M5(C,"master",V),e.left>=(r===2?5:10)&&M5(C,"saver",V)),e.correct===i&&M5(C,"perfect",V),e.stars===3&&(M5(C,"three",V),t===3&&M5(C,"expert",V)),H&&M5(C,"triple",V));let o=P4.filter(L=>L.stars>a&&L.stars<=n.stars).map(L=>L.id);return{badges:V,skins:o}}function Pn(C){r0(C);let e=[];return C.ach.t.gifts++,Yt(C,e),e}function Bn(C,e){r0(C);let t=[],r=C.ach.t;return r.dayBest=Math.max(r.dayBest||0,e),Yt(C,t),t}function In(C){r0(C);let e=[];return M5(C,"duel",e),e}var S8=(C,e)=>m3[e]?r0(C).stars>=m3[e].stars:!1,Fn=C=>P4.find(e=>e.stars>r0(C).stars)||null;var kn="kubik.my.v1",i0={q:300,a:80,e:400};function Jd(){try{let C=JSON.parse(localStorage.getItem(kn));if(C&&Array.isArray(C.list))return{list:C.list,next:C.next||C.list.reduce((e,t)=>Math.max(e,t.id),0)+1}}catch{}return{list:[],next:1}}var j2=Jd();function Kt(){try{return localStorage.setItem(kn,JSON.stringify(j2)),!0}catch{return!1}}var I4=C=>j2.list.filter(e=>!e.lv||e.lv===+C),Z8=C=>j2.list.find(e=>e.id===+C),B4=C=>String(C||"").replace(/\s+/g," ").trim(),Qt=C=>B4(C).toLowerCase().replace(/ё/g,"\u0435");function Jt(C,e){return C.q?C.q.length>i0.q?`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${i0.q} \u0437\u043D\u0430\u043A\u043E\u0432.`:C.a[0]?C.a.slice(1).some(t=>!t)?"\u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430.":C.a.some(t=>t.length>i0.a)?`\u041E\u0442\u0432\u0435\u0442 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${i0.a} \u0437\u043D\u0430\u043A\u043E\u0432.`:new Set(C.a.map(Qt)).size!==4?"\u0412\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u043C\u0438.":C.e&&C.e.length>i0.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${i0.e} \u0437\u043D\u0430\u043A\u043E\u0432.`:j2.list.some(t=>t.id!==e&&Qt(t.q)===Qt(C.q))?"\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C.":"":"\u041D\u0443\u0436\u0435\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.":"\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0430\u043C \u0432\u043E\u043F\u0440\u043E\u0441."}function g8(C){return{q:B4(C.q),a:[0,1,2,3].map(e=>B4(C.a&&C.a[e])),e:B4(C.e),lv:[1,2,3].includes(+C.lv)?+C.lv:0}}function Dn(C,e){return e?Object.assign(Z8(e),C):j2.list.push({id:j2.next++,...C}),Kt()}function Nn(C){j2.list=j2.list.filter(e=>e.id!==+C),Kt()}var jd=`# \u041A\u0443\u0431\u0438\u043A: \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.
# \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A, \u0431\u043B\u043E\u043A\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439.
# \u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0431\u043B\u043E\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.
# + \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442
# - \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0438\u0445 \u0442\u0440\u0438)
# = \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C)
# \u0443\u0440\u043E\u0432\u0435\u043D\u044C: 1, 2 \u0438\u043B\u0438 3 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C, \u0442\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F)
# \u0421\u0442\u0440\u043E\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 #, \u0438\u0433\u0440\u0430 \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442.
`;function Un(C=j2.list){let e=C.map(t=>[t.q,"+ "+t.a[0],...t.a.slice(1).map(r=>"- "+r),...t.e?["= "+t.e]:[],...t.lv?["\u0443\u0440\u043E\u0432\u0435\u043D\u044C: "+t.lv]:[]].join(`
`));return"\uFEFF"+jd+`
`+e.join(`

`)+`
`}function zn(C){C=String(C).replace(/^﻿/,"").replace(/\r\n?/g,`
`);let e=C.trim();if(e.startsWith("[")||e.startsWith("{"))try{let H=JSON.parse(e);return{items:(Array.isArray(H)?H:H.questions||H.list||[]).map(g8),errors:[]}}catch{}let t=[],r=[];return C.split(/\n\s*\n/).map(H=>H.split(`
`).map(n=>n.trim()).filter(n=>n&&!n.startsWith("#"))).filter(H=>H.length).forEach((H,n)=>{let V={q:[],ok:[],bad:[],e:[],lv:0};for(let o of H){let L=o.match(/^уровень\s*[:\-–—]?\s*(\S+)/i);if(L){V.lv=[1,2,3].includes(+L[1])?+L[1]:0;continue}o[0]==="+"?V.ok.push(o.slice(1)):"-\u2013\u2014".includes(o[0])?V.bad.push(o.slice(1)):o[0]==="="?V.e.push(o.slice(1)):!V.ok.length&&!V.bad.length?V.q.push(o):V.e.push(o)}let a=B4(V.q.join(" ")).slice(0,40)||`\u0431\u043B\u043E\u043A ${n+1}`;if(V.ok.length!==1){r.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u0435\u043D \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0441\u0442\u0440\u043E\u043A\u0430 \u0441 +).`);return}if(V.bad.length!==3){r.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u043D\u044B \u0440\u043E\u0432\u043D\u043E \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430 (\u0441\u0442\u0440\u043E\u043A\u0438 \u0441 -), \u0430 \u0438\u0445 ${V.bad.length}.`);return}t.push(g8({q:V.q.join(" "),a:[V.ok[0],...V.bad],e:V.e.join(" "),lv:V.lv}))}),{items:t,errors:r}}function Gn({items:C,errors:e}){let t=0,r=0,i=e.slice();for(let H of C){let n=Jt(H);if(n==="\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C."){r++;continue}if(n){i.push(`\xAB${H.q.slice(0,40)||"\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430"}\xBB: ${n}`);continue}j2.list.push({id:j2.next++,...H}),t++}return Kt(),{added:t,dup:r,errors:i}}async function Wn(C){let e=await C.arrayBuffer(),t=new TextDecoder("utf-8").decode(e);if(t.includes("\uFFFD"))try{t=new TextDecoder("windows-1251").decode(e)}catch{}return t}var A2=C=>{gn(C),Hn(C)},i3="0.15.0",h5={1:{name:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439",scramble:6,about:"\u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F"},2:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",scramble:10,about:"\u0434\u043B\u044F \u044D\u0440\u0443\u0434\u0438\u0442\u043E\u0432"},3:{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",scramble:14,about:"\u0434\u043B\u044F \u0437\u043D\u0430\u0442\u043E\u043A\u043E\u0432"}},ec={1:"#11a85c",2:"#ffd21f",3:"#e0303a"},tc={U:"\u0411\u0435\u043B\u0430\u044F",F:"\u0417\u0435\u043B\u0451\u043D\u0430\u044F",R:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F",B:"\u0421\u0438\u043D\u044F\u044F",L:"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F",D:"\u0416\u0451\u043B\u0442\u0430\u044F"},_0=2,f3=1,C3=2,U5={3:{name:"3\xD73",scramble:[6,10,14],bonus:100,free:50,about:"\u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430"},2:{name:"2\xD72",scramble:[4,6,9],bonus:50,free:25,about:"\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438\u0433\u0440\u0430"}},k2=()=>m&&m.size===2?2:3,w2=()=>k2()*k2(),w0=()=>6*w2(),nV=()=>U5[k2()].bonus*m.level,$8=()=>U5[k2()].free*m.level,x3=C=>`${C} ${_5(C,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`,tC=[0,10,15,20,30,45,60,90],Cc=C=>C?`${C} \u0441`:"\u043D\u0435\u0442",U4="kubik.state.v1",VV="kubik.meta.v1",P8=10,$n={x2:{name:"x2",icon:"x2",about:"\u041E\u0447\u043A\u0438 \u0437\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F."},blitz:{name:"\u0411\u043B\u0438\u0446",icon:"flash",about:`\u041D\u0430 \u043E\u0442\u0432\u0435\u0442 ${P8} \u0441\u0435\u043A\u0443\u043D\u0434, \u0437\u0430\u0442\u043E \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 2 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.`},gift:{name:"\u041F\u043E\u0434\u0430\u0440\u043E\u043A",icon:"gift",about:"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A, \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430."},bomb:{name:"\u0411\u043E\u043C\u0431\u0430",icon:"bomb",about:"\u041E\u0448\u0438\u0431\u0451\u0448\u044C\u0441\u044F \u0438\u043B\u0438 \u043D\u0435 \u0443\u0441\u043F\u0435\u0435\u0448\u044C \u2014 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0448\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442."}},aV={x2:"x",blitz:"z",gift:"g",bomb:"b"},rc=Object.fromEntries(Object.entries(aV).map(([C,e])=>[e,C])),qn=["x2","x2","x2","blitz","blitz","gift","gift","bomb","bomb"],z4=C=>C>=5?2:C>=3?1.5:1,B8=C=>String(C).replace(".",","),q8=(()=>{try{return!!navigator.webdriver&&!localStorage.getItem("kubik.sp")}catch{return!1}})(),ic=C=>m&&m.sp&&m.sp[C]||null;function oV(C){let e={};if(q8)return e;let t=C*C,r=C===2?1:2;for(let i of"UFRBLD"){let H=V0([...Array(t).keys()]).slice(0,r),n=[];for(let V of H){let a;do a=qn[Z7(qn.length)];while(n.includes(a));n.push(a),e[i+V]=a}}return e}var Hc=C=>Object.entries(C||{}).map(([e,t])=>e+aV[t]).join(",");function nc(C,e){let t={};if(!C)return t;if(!/^[UFRBLD]\d[xzgb](,[UFRBLD]\d[xzgb])*$/.test(C))return null;for(let r of C.split(",")){if(+r[1]>=e*e)return null;t[r.slice(0,2)]=rc[r[2]]}return t}var X8=C=>`${C} ${_5(C,"\u043E\u0447\u043A\u043E","\u043E\u0447\u043A\u0430","\u043E\u0447\u043A\u043E\u0432")}`,$=(C,e=document)=>e.querySelector(C),e2=C=>String(C).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),n0=C=>{try{return JSON.parse(localStorage.getItem(C))}catch{return null}},LV=(C,e)=>{try{localStorage.setItem(C,JSON.stringify(e))}catch{}},y8=Math.random,Z7=C=>Math.floor(y8()*C),V0=C=>{for(let e=C.length-1;e>0;e--){let t=Z7(e+1);[C[e],C[t]]=[C[t],C[e]]}return C},_5=(C,e,t,r)=>{let i=C%10,H=C%100;return i===1&&H!==11?e:i>=2&&i<=4&&(H<12||H>14)?t:r},m5=C=>`${C} ${_5(C,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}`,Vc=C=>C==="U"||C==="D"?"#1d2230":"#fff",S3=(C,e)=>`<span class="sw" style="background:${h7[C]};color:${Vc(C)}">${e?h1(v2[e].icon):""}</span>`,u2={},y7=C=>C&&C.v===1&&h5[C.level]?C:null,m=n0(U4),H1=Object.assign({best:0,seen:{},sound:!0,games:0},n0(VV)||{});e3.on=H1.sound;r0(H1);var V1,t5="menu",C2=()=>{m?LV(m.ch?O7:m.day?K4:U4,m):localStorage.removeItem(U4)},y2=()=>LV(VV,H1);function Y8(C,e){return C==="my"?I4(e):u2[C]&&u2[C][e]||[]}function aC(C){return f7.filter(e=>Y8(e.id,C).length>=w2()).map(e=>e.id)}var Z0=C=>(C.q+"|"+C.a[0]+(C.p?"|"+C.p:"")).trim().toLowerCase();function sV(C,e){if(C==="my")return ac(e);let t=Y8(C,e),r=C+"-"+e,i=new Set(H1.bad||[]),H=L=>!L.img||H0.ok.has(CC(L)),n=t.map((L,M)=>M).filter(L=>!i.has(Z0(t[L]))&&H(t[L])),V=w2();n.length<V&&(n=t.map((L,M)=>M).filter(L=>H(t[L]))),n.length<V&&(n=t.map((L,M)=>M));let a=new Set(H1.seen[r]||[]),o=V0(n.filter(L=>!a.has(L)));if(o.length<V){let L=V0(n.filter(M=>a.has(M)));o=o.concat(L),H1.seen[r]=[]}return o.slice(0,V).map(L=>`${C}-${e}-${L}`)}function ac(C){let e=I4(C);if(!e.length)return[];let t="my-"+C,r=new Set(H1.seen[t]||[]),i=V0(e.filter(n=>!r.has(n.id)).map(n=>n.id)),H=w2();for(i.length<H&&(i=i.concat(V0(e.filter(n=>r.has(n.id)).map(n=>n.id))),H1.seen[t]=[]);i.length<H;)i=i.concat(V0(e.map(n=>n.id)));return m.myq=m.myq||{},i.slice(0,H).map((n,V)=>{let a=`my-${C}-${n}-${V}`,o=Z8(n);return m.myq[a]={q:o.q,a:o.a.slice(),e:o.e},a})}function O0(C){if(C.startsWith("my-"))return m.myq[C];if(m.bq&&m.bq[C])return m.bq[C];let[e,t,r]=C.split("-");return Y8(e,t)[+r]}function oc(C){let[e,t,r]=C.split("-");if(!u2[e]&&e!=="my")return;let i=e+"-"+t;H1.seen[i]=H1.seen[i]||[],H1.seen[i].includes(+r)||H1.seen[i].push(+r),y2()}var H0={packs:new Map,ok:new Set,urls:new Map},CC=C=>String(C.img).split(":")[0];function MV(C){if(!H0.packs.has(C)){let e=fetch(C).then(t=>t.ok?t.arrayBuffer():null).catch(()=>null).then(t=>(t&&t.byteLength?H0.ok.add(C):H0.packs.delete(C),t));H0.packs.set(C,e)}return H0.packs.get(C)}function lV(){if(!m||!m.topics)return;let C=new Set;for(let e of f2)for(let t of Y8(m.topics[e],m.level))t&&t.img&&C.add(CC(t));if(m.stageQ)for(let e of Object.values(m.stageQ))for(let t of e){let r=O0(t);r&&r.img&&C.add(CC(r))}for(let e of C)MV(e)}async function Lc(C){if(H0.urls.has(C.img))return H0.urls.get(C.img);let[e,t,r]=String(C.img).split(":"),i=await MV(e);if(!i||+t+ +r>i.byteLength)return null;let H=URL.createObjectURL(new Blob([new Uint8Array(i,+t,+r)],{type:"image/webp"}));return H0.urls.set(C.img,H),H}function sc(C){let[e,t]=C.wh||[4,3];return`<div class="q-pic loading" style="aspect-ratio:${e}/${t}"><img alt=""><span class="pic-msg">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443\u2026</span></div>`}async function dV(C,e){let t=$(".q-pic");if(!t)return;let r=t.querySelector("img"),i=await Lc(C);if(!(!m||m.pending!==e)){if(!i)return t.classList.remove("loading"),t.classList.add("fail"),t.querySelector(".pic-msg").innerHTML='\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0430\u0441\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442.<button class="link" id="pic-retry">\u0415\u0449\u0451 \u0440\u0430\u0437</button>',await new Promise(H=>{$("#pic-retry").onclick=()=>H()}),!m||m.pending!==e?void 0:(t.classList.remove("fail"),t.classList.add("loading"),t.querySelector(".pic-msg").textContent="\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443\u2026",dV(C,e));await new Promise(H=>{r.onload=H,r.onerror=H,r.src=i}),t.classList.remove("loading"),t.onclick=()=>Mc(i)}}function Mc(C){let e=document.createElement("div");e.className="pic-zoom",e.innerHTML=`<img src="${C}" alt=""><span>\u041D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C</span>`,e.onclick=()=>e.remove(),document.body.appendChild(e)}var cV="kubik-bank",pV="bank.json",rC="kubik.bank.v1",a0=C=>C&&C._meta&&+C._meta.rev||0,Xn=C=>Object.keys(C||{}).filter(e=>e!=="_meta").reduce((e,t)=>e+["1","2","3"].reduce((r,i)=>r+(C[t][i]||[]).length,0),0),H3=C=>String(C||"0").split(".").reduce((e,t)=>e*1e3+(+t||0),0);function I8(C){return!C||typeof C!="object"||!C._meta?!1:Object.keys(C).some(e=>e!=="_meta"&&C[e]&&Array.isArray(C[e][1]))}async function lc(){try{if(window.caches){let C=await(await caches.open(cV)).match(pV);if(C)return await C.json()}}catch{}return n0(rC)}async function uV(C){let e=JSON.stringify(C);try{if(window.caches){await(await caches.open(cV)).put(pV,new Response(e,{headers:{"Content-Type":"application/json"}})),localStorage.removeItem(rC);return}}catch{}try{localStorage.setItem(rC,e)}catch{}}function AV(C){let e=C._meta&&C._meta.topics||{};for(let t of Object.keys(C)){if(t==="_meta"||t==="my")continue;let r=e[t]||{};if(v2[t]){r.name&&(v2[t].name=r.name),r.icon&&(v2[t].icon=r.icon);continue}let i={id:t,name:r.name||t,icon:r.icon||rn};f7.splice(f7.findIndex(H=>H.id==="my"),0,i),v2[t]=i}}function oC(C){if(m&&m.stageQ){m.bq=m.bq||{};for(let e of Object.values(m.stageQ))for(let t of e){if(t.startsWith("my-")||m.bq[t])continue;let r=O0(t);r&&(m.bq[t]={...r,a:r.a.slice()})}C2()}for(let e of Object.keys(H1.seen)){let[t,r]=e.split("-");if(t==="my")continue;let i=u2[t]&&u2[t][r]||[],H=C[t]&&C[t][r]||[],n=a=>a.q+"|"+(a.p||""),V=new Map(H.map((a,o)=>[n(a),o]));H1.seen[e]=H1.seen[e].map(a=>i[a]&&V.get(n(i[a]))).filter(a=>a!==void 0)}if(H1.bad&&H1.bad.length){let e=new Set;for(let t of Object.keys(C))if(t!=="_meta")for(let r of["1","2","3"])for(let i of C[t][r]||[])e.add(Z0(i));H1.bad=H1.bad.filter(t=>e.has(t))}y2(),u2=C,AV(u2)}async function dc(){let C=null;try{C=await(await fetch("ru.json?v="+i3)).json()}catch{}let e=await lc(),t=r=>I8(r)&&H3(r._meta.app)<=H3(i3);u2=t(e)&&(!t(C)||a0(e)>a0(C))?e:C||{},I8(u2)&&AV(u2)}var _8=!1;async function mV(){if(_8)return;_8=!0;let C=$("#m-update");C.classList.add("busy"),C.innerHTML=h1(l1.update)+"\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026";let e=null,t="";try{let V=await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"});if(!V.ok)throw new Error(V.status);e=await V.json(),I8(e)||(t="bad",e=null)}catch{t=t||"net"}_8=!1,C.classList.remove("busy"),e5();let r=Xn(u2),i=V=>(V._meta.date||"").split("-").reverse().join("."),H,n;if(!e)H="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C",n=t==="net"?"\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0430\u0439\u0442\u043E\u043C \u0438\u0433\u0440\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0424\u0430\u0439\u043B \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D. \u0417\u0430\u0433\u0440\u0443\u0437\u0438 ru.json \u0437\u0430\u043D\u043E\u0432\u043E.";else if(H3(e._meta.app)>H3(i3))H="\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B",n="\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0438\u0433\u0440\u044B. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0435\u0449\u0451 \u0440\u0430\u0437.";else if(a0(e)<=a0(u2))H="\u041D\u043E\u0432\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043D\u0435\u0442",n=`\u0423 \u0442\u0435\u0431\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F: ${r} ${_5(r,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}${u2._meta&&u2._meta.date?`, \u043E\u0442 ${i(u2)}`:""}.`;else{let V=new Set(Object.keys(u2).filter(M=>M!=="_meta"));oC(e),await uV(e);let a=Xn(e),o=a-r,L=Object.keys(e).filter(M=>M!=="_meta"&&!V.has(M)).map(M=>`\xAB${v2[M].name}\xBB`);H="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B",n=`\u0422\u0435\u043F\u0435\u0440\u044C ${a} ${_5(a,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`+(o>0?`, \u043D\u0430 ${o} \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E.`:o<0?`, \u0431\u044B\u043B\u043E ${r}.`:", \u0447\u0430\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.")+(L.length?` \u041D\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B: ${L.join(", ")}.`:"")+(m&&m.phase==="quiz"?" \u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u044D\u0442\u0430\u043F \u0434\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438.":"")}A2(e?H==="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B"?"ok":"tap":"deny"),a2(`<div class="m-title">${H}</div><div class="m-text"><p>${n}</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(F2)}function LC(C,e=k2()){let t=[],r=null;for(;t.length<C;){let i="xyz"[Z7(3)];if(i===r)continue;let H=e===2?.5:1;t.push({ax:i,l:Z7(2)?H:-H,d:Z7(2)?1:-1}),r=i}return t}function Q8(C){let e=[];for(let t of C){let r=e[e.length-1];if(r&&r.ax===t.ax&&r.l===t.l){let i=((r.d+t.d)%4+4)%4;i===0?e.pop():r.d=i===3?-1:i}else e.push({ax:t.ax,l:t.l,d:t.d})}return e}function hV(){let C=Q8([...m.scramble,...m.moves]),e=C[C.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}function cc(C){m={v:1,level:C,size:H1.size===2?2:3,phase:"topics",score:0,results:{},topics:Y4(C,null),timers:sC()},C2(),y0()}function sC(){let C={};for(let e of f2)C[e]=H1.timers&&H1.timers[e]||0;return C}function g0(C){return m&&m.timers&&m.timers[C]||0}function Y4(C,e){let t=aC(C),r={},i=new Set;if(e)for(let n of f2)t.includes(e[n])&&!i.has(e[n])&&(r[n]=e[n],i.add(e[n]));let H=V0(t.filter(n=>n!=="my"&&!i.has(n)));for(let n of f2)r[n]||(r[n]=H.shift());return r}function pc(){let C=aC(m.level);if(!f2.every(e=>C.includes(m.topics[e]))){m.topics=Y4(m.level,m.topics),C2(),y0(),R2(`\u0414\u043B\u044F \xAB\u041C\u043E\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432\xBB \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u043D\u0443\u0436\u043D\u043E ${x3(w2())}, \u0433\u0440\u0430\u043D\u044C \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430`);return}Object.assign(m,{bq:{},phase:"quiz",scramble:LC(U5[k2()].scramble[m.level-1]),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0,gifts:0,bombs:0,bestRun:0},ms:0,msOk:1,sp:oV(k2()),run:0}),C2(),lV(),y5()}function n3(C){t5=C,C!=="skins"&&GV(),document.body.classList.remove("loading");for(let e of document.querySelectorAll(".scr"))e.classList.toggle("on",e.id==="scr-"+C);Sn(C==="menu"?null:uc),requestAnimationFrame(b8)}function uc(){if(!$("#modal").hidden||!$("#sheet").hidden||!$("#edit").hidden)return;let C=$(`#scr-${t5} .bar .ibtn`);C&&C.tagName==="BUTTON"?C.click():e5()}function b8(){let C=$("#stage"),e=$(`#scr-${t5} .cube-slot`);if(!e){C.style.display="none";return}let t=e.getBoundingClientRect();Object.assign(C.style,{display:"block",left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.height+"px"}),V1.resize()}function e5(){e9(),F2(),m&&m.ch&&(m.phase==="result"&&localStorage.removeItem(O7),m=y7(n0(U4))),m&&m.day&&(m.phase==="result"&&localStorage.removeItem(K4),m=y7(n0(U4))),V1.setSize(m?k2():H1.size===2?2:3),V1.reset(),V1.mode="view",V1.autoSpin=!0;for(let V of V1.stickers)V1.setLook(V,"color");let C=$("#m-continue");m&&m.phase!=="final"?(C.hidden=!1,C.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${m.level}${k2()===2?" \xB7 2\xD72":""}`):C.hidden=!0;let e=y7(n0(O7)),t=$("#m-chal");t.hidden=!(e&&e.ch&&e.phase!=="result"),t.hidden||(t.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \xB7 ${e.ch.raw.a.n}`,t.className="btn"+(C.hidden?" primary":"")),Kc(C.hidden&&t.hidden),$("#m-sound").innerHTML=h1(e3.on?l1.soundOn:l1.soundOff)+(e3.on?"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0451\u043D":"\u0417\u0432\u0443\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),_8||($("#m-update").innerHTML=h1(l1.update)+"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),$("#m-best").textContent=H1.best&&H1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434: ${H1.best} \xB7 \u043D\u0430 2\xD72: ${H1.best2}`:H1.best?`\u0420\u0435\u043A\u043E\u0440\u0434: ${H1.best}`:H1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 2\xD72: ${H1.best2}`:"";let r=(H1.reports||[]).length,i=$("#m-reports");i.hidden=!r,i.innerHTML=h1(l1.report)+`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${r}`;let H=ee().length,n=$("#m-duels");n.hidden=!H,n.innerHTML=h1(l1.duel)+`\u0412\u044B\u0437\u043E\u0432\u044B: ${H}`,KV(),$("#m-ach").innerHTML=h1(l1.trophy)+`\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F<span class="mstar">${h1(l1.star)}${H1.ach.stars}</span>`,n3("menu")}function w8(){let C=H1.size===2?2:3,e=U5[C];$("#lv-size").innerHTML=[3,2].map(t=>`<button data-size="${t}" class="${t===C?"on":""}"><b>${U5[t].name}</b><small>${U5[t].about}, ${x3(6*t*t)}</small></button>`).join(""),$("#lv-lead").textContent=`\u041A\u0443\u0431\u0438\u043A ${e.name}: \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 6 \u044D\u0442\u0430\u043F\u043E\u0432 \u043F\u043E ${x3(C*C)}, \u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A. \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043D\u0430\u0447\u0430\u0442\u044C?`,$("#lv-list").innerHTML=[1,2,3].map(t=>`<button class="lv" data-lv="${t}">
    <span class="num" style="background:${ec[t]}">${t}</span>
    <span><b>${h5[t].name}</b><span>${h5[t].about}; \u043A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${m5(e.scramble[t-1])}</span></span></button>`).join(""),n3("levels")}function y0(){F2(),$("#tp-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${m.level} \xB7 ${h5[m.level].name}${k2()===2?" \xB7 2\xD72":""}`,$("#tp-lead").textContent=`\u0412\u044B\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438. \u0413\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u044D\u0442\u0430\u043F \u0438\u0437 ${x3(w2())}, \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.`;let C=aC(m.level),e=I4(m.level).length,t=C.includes("my")?"":`<option disabled>\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u043D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${w2()-e}</option>`;m.timers||(m.timers=sC());let r=f2.every(i=>g0(i)===g0("U"));$("#tp-list").innerHTML=`<label class="tall">${h1(l1.timer)}<span>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043E\u0442\u0432\u0435\u0442</span>
    <select id="tp-time"><option value="" disabled${r?"":" selected"}>\u0440\u0430\u0437\u043D\u043E\u0435</option>${tC.map(i=>`<option value="${i}"${r&&g0("U")===i?" selected":""}>${i?`\u0432\u0441\u0435\u043C \u043F\u043E ${i} \u0441`:"\u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select>
    <span class="chev">${h1("M7 10l5 5 5-5z")}</span></label>`+f2.map(i=>`<div class="trow"><label class="tl">${S3(i,m.topics[i])}
    <span class="tcol"><small>${tc[i]} \u0433\u0440\u0430\u043D\u044C</small>
    <select data-face="${i}">${C.map(H=>`<option value="${H}"${m.topics[i]===H?" selected":""}>${v2[H].name}</option>`).join("")}${t}</select></span></label>
    <label class="tm${g0(i)?" on":""}">${h1(l1.timer)}<span>${Cc(g0(i))}</span>
    <select data-tface="${i}" aria-label="\u0422\u0430\u0439\u043C\u0435\u0440">${tC.map(H=>`<option value="${H}"${g0(i)===H?" selected":""}>${H?`${H} \u0441\u0435\u043A\u0443\u043D\u0434`:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select></label></div>`).join("")+`<button class="link mylink" id="tp-my">${h1(l1.my)}\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: ${e}${e<w2()?` \u0438\u0437 ${w2()} \u043D\u0443\u0436\u043D\u044B\u0445`:""}. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>`,$("#tp-rand").innerHTML=h1(l1.shuffle)+"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",n3("topics")}function y5(){if(F2(),$("#g-title").textContent=m.ch?`\u0412\u044B\u0437\u043E\u0432 \xB7 ${m.ch.raw.a.n} \xB7 \u0443\u0440. ${m.level}${k2()===2?" \xB7 2\xD72":""}`:m.day?`\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F \u2116${m.day.no} \xB7 \u0443\u0440. ${m.level}`:`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${m.level} \xB7 ${h5[m.level].name}${k2()===2?" \xB7 2\xD72":""}`,V1.autoSpin=!1,Ac(),V1.rotateTo(V1.baseView,350),n3("game"),m.phase==="quiz"&&lV(),m.phase==="quiz"){if(!m.pending&&m.stage&&g3(m.stage)===w2()&&(m.stage=null,C2(),T7()),!m.pending&&G4()>=w0()){setTimeout(dC,300);return}V1.mode="tap",K8(),m.pending&&xV()}else m.phase==="solve"?(V1.mode="solve",Z3()):m.phase==="result"&&(V1.mode="view",Z3(),r3());z5()}function Ac(){V1.setSize(k2()),V1.reset();for(let C of m.scramble)V1.turn(C,!1);if(m.phase!=="quiz")for(let C of m.moves)V1.turn(C,!1);T7()}function g3(C){let e=0;for(let t=0,r=w2();t<r;t++)m.cells[C+t]&&e++;return e}function G4(){return Object.keys(m.cells).length}function T7(){let C=m&&m.phase==="quiz";for(let e of V1.cells()){let t=e.sticker;if(!m){V1.setLook(t,"color");continue}let r=C?m.cells[e.key]:null,i=C&&m.stage&&e.face!==m.stage;if(k2()===2&&C&&!r&&!i)V1.setLook(t,"hidden",V1.hiddenLabel(v2[m.topics[e.face]].icon,V1._rotOf(t)));else if(t.userData.center){let H=V1.centerLabel(t.userData.color,v2[m.topics[t.userData.color]].icon,r==="c"||r==="g"?"ok":r==="w"?"bad":null,V1._rotOf(t));V1.setLook(t,i?"locked":"color",H)}else C?V1.setLook(t,r==="c"||r==="g"?"color":r==="w"?"wrong":r==="s"?"skip":i?"locked":"hidden"):V1.setLook(t,"color")}}function z5(C){if(!m)return;let e=$("#g-tip");if(e&&m.phase!=="quiz"&&(e.innerHTML=fV()),$("#st-score").textContent=m.score,$("#st-turns").textContent=m.free?"\u221E":m.tokens,m.phase==="quiz"?($("#st-l3").textContent="\u0412\u043E\u043F\u0440\u043E\u0441\u044B",$("#st-3").textContent=`${G4()}/${w0()}`):($("#st-l3").textContent="\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0445\u043E\u0434\u043E\u0432",$("#st-3").textContent=m.moves.length),C){let t=$(".pill.turns");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}}function K8(){let C;if(m.stage){let r=g3(m.stage),i=g0(m.stage);C=`\u042D\u0442\u0430\u043F ${m.order.length} \u0438\u0437 6 \xB7 <b>${v2[m.topics[m.stage]].name}</b> \xB7 ${r} \u0438\u0437 ${w2()}${i?` \xB7 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 ${i} \u0441`:""}.<br>\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0438 \u044D\u0442\u043E\u0439 \u0433\u0440\u0430\u043D\u0438.`}else G4()?C="\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0433\u0440\u0430\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0435\u0451 \u043A\u043B\u0435\u0442\u043A\u0443.":C="\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0430\u043F.<br>\u041A\u0443\u0431\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C.";let e=f2.map(r=>{let i=g3(r);return`<button class="chip ${m.stage===r?"on":i===w2()?"done":""}" data-face="${r}">${S3(r,m.topics[r])}<span>${i}/${w2()}</span></button>`}).join(""),t=m.run||0;t>=2&&!q8&&(C+=`<div class="runline">${h1(l1.fire)}\u0421\u0435\u0440\u0438\u044F: ${t} \u043F\u043E\u0434\u0440\u044F\u0434${z4(t)>1?` \xB7 \u043E\u0447\u043A\u0438 \xD7${B8(z4(t))}`:""}</div>`),$("#g-foot").innerHTML=`<div class="tip">${C}</div><div class="chips">${e}</div>`}function mc(){return Q8([...m.scramble,...m.moves]).reduce((C,e)=>C+Math.abs(e.d),0)}function fV(){if(m.phase!=="solve")return"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.";if(m.free)return`\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C <b>${$8()}</b> \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.`;if(m.tokens<1)return"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0445\u043E\u0434 \u0438\u043B\u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443 \u0437\u0430 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.";let C=mc();return`\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043B\u043E\u0439. \u0412\u0440\u0430\u0449\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443.<br>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0441\u043E\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0437\u0430 <b>${C}</b> ${_5(C,"\u0445\u043E\u0434","\u0445\u043E\u0434\u0430","\u0445\u043E\u0434\u043E\u0432")} (${_0*C} ${_5(_0*C,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}).`}function Z3(){let C=m.phase==="solve";$("#g-foot").innerHTML=`<div class="tip" id="g-tip">${fV()}</div>
  <div class="tools">
    <button class="tool" id="t-undo"${C?"":" disabled"}>${h1(l1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    ${C&&!m.free&&m.tokens<1?`<button class="tool hint" id="t-free">${h1(l1.turn)}\u0421\u0430\u043C<em>+${$8()}</em></button>`:`<button class="tool hint" id="t-hint"${C&&!m.free?"":" disabled"}>${h1(l1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430<em>\u2212${_0}</em></button>`}
    <button class="tool" id="t-view">${h1(l1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="t-end"${C?"":" disabled"}>${h1(l1.flag)}\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C</button>
  </div>`}function vV(C){if(!m||m.phase!=="quiz"||m.pending||!$("#sheet").hidden)return;if(T4(),m.cells[C.key]){R2("\u041D\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0442\u044B \u0443\u0436\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B"),A2("deny");return}if(m.stage&&m.stage!==C.face){R2(`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438 \u044D\u0442\u0430\u043F \xAB${v2[m.topics[m.stage]].name}\xBB`),A2("deny"),V1.showFace(m.stage);return}if(!m.stage){m.stage=C.face,m.order.push(C.face);let i=m.ch?m.ch.qs[C.face]:m.day?m.day.qs[C.face]:sV(m.topics[C.face],m.level);if(i.length<w2()){m.stage=null,m.order.pop(),R2("\u0421\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u044B. \u0414\u043E\u0431\u0430\u0432\u044C \u0438\u0445 \u0432 \u043C\u0435\u043D\u044E \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB."),A2("deny");return}m.stageQ[C.face]=i,A2("stage"),T7()}let e=ic(C.key);if(e==="gift"){hc(C);return}let t=m.stageQ[C.face][g3(C.face)],r=g0(C.face);m.pending={key:C.key,face:C.face,qid:t,order:V0([0,1,2,3]),limit:e==="blitz"?r?Math.min(r,P8):P8:r,sp:e},C2(),K8(),xV()}function hc(C){m.cells[C.key]="g",m.tokens++,m.lv.gifts=(m.lv.gifts||0)+1,m.lastKey=C.key;let e=Pn(H1);y2(),C2(),A2("ok"),z5(!0),K8();let t=v2[m.topics[C.face]];$("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${S3(C.face,m.topics[C.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${m.order.indexOf(C.face)+1} \xB7 \u043A\u043B\u0435\u0442\u043A\u0430 ${g3(C.face)} \u0438\u0437 ${w2()}</span></div>
    <div class="gift-box">${h1(l1.gift,"ic big")}<b>\u041F\u043E\u0434\u0430\u0440\u043E\u043A</b><span>\u042D\u0442\u0430 \u043A\u043B\u0435\u0442\u043A\u0430 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430: \u0434\u0435\u0440\u0436\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E.</span></div>
    <div class="after"><div class="verdict ok">${h1(l1.check)}+1 \u043F\u043E\u0432\u043E\u0440\u043E\u0442</div>
    <p class="exp">\u0421\u0435\u0440\u0438\u044F \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043E\u0442 \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F.</p><button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button></div>`,$("#sheet").hidden=!1,e.length&&(m.lv.nb=(m.lv.nb||[]).concat(e),C2()),t9(e)}function fc(C){if(!C||!$n[C])return"";let e=$n[C];return`<div class="q-sp sp-${C}">${h1(l1[e.icon])}<span><b>${e.name}.</b> ${e.about}</span></div>`}function vc(){if(q8)return"";let C=m.run||0,e=z4(C+1);return C<2?"":`<div class="q-run">${h1(l1.fire)}<span>\u0421\u0435\u0440\u0438\u044F: ${C} \u043F\u043E\u0434\u0440\u044F\u0434. ${e>z4(C)?`\u041E\u0442\u0432\u0435\u0442\u0438\u0448\u044C \u0432\u0435\u0440\u043D\u043E \u2014 \u043E\u0447\u043A\u0438 \xD7${B8(e)}`:`\u041E\u0447\u043A\u0438 \xD7${B8(e)}`}</span></div>`}function xV(){let C=m.pending,e=O0(C.qid),t=v2[m.topics[C.face]];$("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${S3(C.face,m.topics[C.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${m.order.indexOf(C.face)+1} \xB7 \u0432\u043E\u043F\u0440\u043E\u0441 ${g3(C.face)+1} \u0438\u0437 ${w2()}</span></div>
    ${fc(C.sp)}${vc()}
    ${C.limit?'<div class="qtime"><span class="tbar"><i></i></span><b></b></div>':""}
    ${e.img?sc(e):""}<div class="q-text">${e2(e.q)}</div>
    <div class="ans">${C.order.map((r,i)=>`<button data-i="${i}">${e2(e.a[r])}</button>`).join("")}</div>
    <div class="qhelp"><button class="qh" id="q-cut">${h1(l1.half)}<span>50 \u043D\u0430 50</span><small>${m5(f3)}</small></button>
    <button class="qh" id="q-skip">${h1(l1.skip)}<span>\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C</span><small>${m5(C3)}</small></button></div>
    <div class="after" hidden></div>`,gV(),SV(),$("#sheet").hidden=!1,e.img?dV(e,C).then(()=>{m&&m.pending===C&&Yn()}):Yn()}var T8=null,jt=0;function _7(){T8&&(clearInterval(T8),T8=null)}function Yn(){_7();let C=m&&m.pending;if(!C||!C.limit)return;C.deadline||(C.deadline=Date.now()+C.limit*1e3,C2()),jt=0;let e=()=>{if((m&&m.pending)!==C){_7();return}let r=Math.max(0,C.deadline-Date.now()),i=Math.ceil(r/1e3),H=$(".qtime");H&&(H.querySelector("b").textContent=`${i} \u0441`,H.querySelector("i").style.width=(100*r/(C.limit*1e3)).toFixed(1)+"%",H.classList.toggle("low",i<=5)),i<=5&&i>0&&i!==jt&&(jt=i,A2("tick")),r<=0&&(_7(),MC(-1))};e(),T8=setInterval(e,200)}var F4=0;function SV(){let C=m&&m.pending,e=$("#q-cut"),t=$("#q-skip");!e||!t||(e.disabled=!C||!!C.cut||m.tokens<f3,e.classList.toggle("used",!!(C&&C.cut)),t.disabled=!C||m.tokens<C3,t.classList.remove("armed"),F4=0,t.querySelector("span").textContent="\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C")}function gV(){let C=m.pending;!C||!C.cut||$(".ans").querySelectorAll("button").forEach(e=>{C.cut.includes(+e.dataset.i)&&(e.disabled=!0,e.classList.add("cut"))})}function ZV(C){R2(m.tokens?`\u041D\u0443\u0436\u043D\u043E ${m5(C)}, \u0443 \u0442\u0435\u0431\u044F ${m.tokens}`:"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442: \u043E\u043D\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B"),A2("deny")}function xc(){let C=m.pending;if(!(!C||C.cut)){if(m.tokens<f3)return ZV(f3);C.cut=V0([0,1,2,3].filter(e=>C.order[e]!==0)).slice(0,2),m.tokens-=f3,m.lv.cuts=(m.lv.cuts||0)+1,C2(),A2("turn"),gV(),SV(),z5(!0)}}function Sc(){let C=m.pending;if(!C)return;if(m.tokens<C3)return ZV(C3);let e=$("#q-skip");if(!F4||Date.now()-F4>4e3){F4=Date.now(),e.classList.add("armed"),e.querySelector("span").textContent="\u0422\u043E\u0447\u043D\u043E?",A2("tap");return}F4=0,_7(),m.cells[C.key]="s",m.tokens-=C3,m.lv.skips=(m.lv.skips||0)+1,m.lastKey=C.key,m.pending=null,C2(),A2("turn"),z5(!0),lC()}function MC(C){let e=m.pending;if(!e)return;_7();let t=C===-1;t&&(m.lv.late=(m.lv.late||0)+1);let r=O0(e.qid),i=e.order[C]===0,H=m.level*10,n=e.sp||null,V=m.run||0,a=0,o=0,L=0,M=1;m.cells[e.key]=i?"c":"w",i?(q8||(m.run=V+1,M=z4(m.run),m.lv.bestRun=Math.max(m.lv.bestRun||0,m.run)),a=Math.round(H*M*(n==="x2"?2:1)),o=n==="blitz"?2:1,m.tokens+=o,m.lv.correct++,m.lv.points+=a,m.score+=a):(m.lv.wrong++,m.run=0,n==="bomb"&&m.tokens>0&&(m.tokens--,L=1,m.lv.bombs=(m.lv.bombs||0)+1)),oc(e.qid);let s=On(H1,{ok:i,topic:m.topics[e.face],pic:!!(r&&r.img),timer:e.limit||0,sp:n});y2(),m.lastKey=e.key,m.pending=null,C2(),A2(i?"ok":"bad");let l=$(".qhelp");l&&l.remove();let p=$(".ans");p.classList.add("done"),p.querySelectorAll("button").forEach((S,_)=>{S.disabled=!0,S.classList.remove("cut"),e.order[_]===0?S.classList.add("ok"):_===C&&S.classList.add("bad")});let f=$(".after");f.hidden=!1;let c=[];i&&n==="x2"&&c.push("x2"),i&&M>1&&c.push(`\u0441\u0435\u0440\u0438\u044F ${m.run} \u043F\u043E\u0434\u0440\u044F\u0434 \xD7${B8(M)}`);let d="";i&&c.length?d=`\u041E\u0447\u043A\u0438: ${c.join(", ")}.`:!i&&n==="bomb"&&(d=L?"\u0411\u043E\u043C\u0431\u0430: \u043C\u0438\u043D\u0443\u0441 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.":"\u0411\u043E\u043C\u0431\u0430, \u043D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043D\u0435 \u0431\u044B\u043B\u043E: \u0442\u0435\u0440\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E."),!i&&V>=3&&(d+=`${d?" ":""}\u0421\u0435\u0440\u0438\u044F \u0438\u0437 ${V} \u043F\u0440\u0435\u0440\u0432\u0430\u043B\u0430\u0441\u044C.`),f.innerHTML=`<div class="verdict ${i?"ok":"bad"}">${h1(i?l1.check:t?l1.timer:n==="bomb"?l1.bomb:l1.close)}${i?`\u0412\u0435\u0440\u043D\u043E: +${X8(a)}, +${m5(o)}`:t?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E":"\u041D\u0435\u0432\u0435\u0440\u043D\u043E"}</div>
    ${d?`<div class="sp-note${i?"":" bad"}">${d}</div>`:""}
    ${r.e?`<div class="exp">${e2(r.e)}</div>`:""}${r.cr?`<div class="cr">${r.p&&r.p.startsWith("ol")?"":"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435: "}${e2(r.cr)}${r.src?` \xB7 <a href="${e2(r.src)}" target="_blank" rel="noopener">\u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A</a>`:""}</div>`:""}<button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button>
    ${e.qid.startsWith("my-")?"":`<button class="link rep-open" id="q-rep" data-qid="${e2(e.qid)}">${h1(l1.report)}\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?</button>`}`,f.scrollIntoView({block:"nearest",behavior:"smooth"}),z5(i),s.length&&(m.lv.nb=(m.lv.nb||[]).concat(s),C2()),t9(s)}function lC(){e9(),T7();let C=V1.cells().find(t=>t.key===m.lastKey);C&&V1.pop(C.sticker);let e=m.lastKey[0];if(g3(e)===w2()){let t=[...Array(w2()).keys()].filter(i=>m.cells[e+i]==="c").length,r=En(H1,{topic:m.topics[e],clean:t===w2()});r.length&&(y2(),m.lv.nb=(m.lv.nb||[]).concat(r),setTimeout(()=>t9(r),2500)),m.stage=null,C2(),T7(),G4()<w0()&&R2(`\u042D\u0442\u0430\u043F \xAB${v2[m.topics[e]].name}\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D: ${t} \u0438\u0437 ${w2()}`)}K8(),z5(),G4()>=w0()&&setTimeout(dC,500)}var Qn=()=>(m.lv.cuts||0)*f3+(m.lv.skips||0)*C3;function dC(){m.phase="solve",C2(),T7(),Z3(),z5(),V1.mode="solve",V1.spin(900);let C=m.lv.correct;if(m.tokens<1){a2(`<div class="m-title">\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>${C?"\u0412\u0441\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0443\u0448\u043B\u0438 \u043D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0438\u0445 \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C.":"\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0442\u043E\u0436\u0435 \u043D\u0435\u0442."}</p>
      <p>${cC()}</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],...m.ch||m.day?[]:[["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",""]],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(e=>e==="free"?J8():e==="retry"?DV():Q4(!1));return}yV()}function yV(){let C=m.lv.correct,e=!H1.trained&&!H1.trainAsk;e&&(H1.trainAsk=1,y2()),a2(`<div class="m-title">\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A</div><div class="m-text">
    <p>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438: \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ${C} \u0438\u0437 ${w0()-(m.lv.gifts||0)}. ${Qn()?`\u041D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0443\u0448\u043B\u043E ${m5(Qn())}, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${m5(m.tokens)}.`:`\u0422\u044B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B ${m5(m.tokens)}.`}</p>
    <p>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${m5(m.scramble.length)}. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</p>
    <p>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u043D\u043E \u0441\u0442\u043E\u0438\u0442 ${_0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434.</p>
    ${e?'<p class="m-note">\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0432\u043F\u0435\u0440\u0432\u044B\u0435? \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0439\u0434\u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443: \u0442\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439, \u043C\u0438\u043D\u0443\u0442\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043D\u0430 \u043D\u0435\u0451 \u043D\u0435 \u0442\u0440\u0430\u0442\u044F\u0442\u0441\u044F.</p>':""}</div>`,e?[["train","\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438","primary"],["ok","\u0421\u0440\u0430\u0437\u0443 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C",""]]:[["ok","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C","primary"]]).then(t=>{t==="train"&&pC(()=>y5(),!0)})}async function iC(C,e,t){m.tokens-=e,m.moves.push({...C,c:e}),C2(),z5(),A2("turn"),await V1.turn(C,!0,t?420:190),OV(),m&&m.phase==="solve"&&!m.free&&m.tokens<1&&(Z3(),_V())}function cC(){return`\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438 \u0431\u0435\u0437 \u0441\u0447\u0451\u0442\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C ${$8()} \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 ${nV()}.`}function _V(){a2(`<div class="m-title">\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D.</p><p>${cC()}</p>
    <p>\u041C\u043E\u0436\u043D\u043E \u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0445\u043E\u0434\u044B: \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u0440\u043D\u0451\u0442 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["back","\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0443\u0431\u0438\u043A\u0443",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(C=>C==="free"?J8():C==="end"?Q4(!1):null)}function J8(){m.free=!0,C2(),Z3(),z5(!0),R2("\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435.")}function bV(C){if(t5==="train"){RV(C);return}if(!(!m||m.phase!=="solve"||V1.queue.length>1)){if(T4(),m.free){iC(C,0);return}if(m.tokens<1){_V(),A2("deny");return}iC(C,1)}}function wV(){if(!m||m.phase!=="solve"||V1.busy)return;let C=m.moves.pop();if(!C){R2("\u041E\u0442\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E");return}m.free||(m.tokens+=1),C2(),Z3(),z5(!0),A2("turn"),V1.turn({ax:C.ax,l:C.l,d:-C.d}).then(OV)}function TV(){if(!m||m.phase!=="solve"||V1.busy||m.free)return;if(m.tokens<_0){R2(`\u0414\u043B\u044F \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043D\u0443\u0436\u043D\u043E ${_0} \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430`),A2("deny");return}let C=hV();C&&(m.lv.hints++,iC(C,_0,!0))}function OV(){!m||m.phase!=="solve"||V1.busy||V1.isSolved()&&Q4(!0)}var b7=[{n:1,arrow:!0,tip:"\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043E\u0434\u043D\u0438\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u043C. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435 <b>\u0432\u0434\u043E\u043B\u044C \u0441\u0442\u0440\u0435\u043B\u043A\u0438</b>, \u0438 \u0441\u043B\u043E\u0439 \u0432\u0441\u0442\u0430\u043D\u0435\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u043E."},{n:2,arrow:!0,tip:"\u0422\u0435\u043F\u0435\u0440\u044C \u0434\u0432\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430. \u0412\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0435, \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0445\u043E\u0434\u0430 \u043E\u043D\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0439."},{n:2,arrow:!1,tip:"\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u043B\u043A\u0438. \u041D\u0430\u0439\u0434\u0438 \u0441\u043B\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0438 \u0435\u0433\u043E. \u0417\u0430\u0441\u0442\u0440\u044F\u043B \u2014 \xAB\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\xBB \u0441\u0430\u043C\u0430 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u0445\u043E\u0434."}],R1=null;function gc(){return m&&(t5==="game"||t5==="train")?k2():H1.size===2?2:3}function pC(C,e){F2(),e9(),R1={size:gc(),step:0,scramble:[],moves:[],back:C,inGame:!!e,hints:0,wrong:0},n3("train"),V1.autoSpin=!1,V1.setSize(R1.size),V1.mode="solve",F8(0),requestAnimationFrame(kV)}function F8(C){R1.step=C,R1.moves=[],R1.wrong=0,R1.solved=!1;let e=b7[C];V1.reset();for(let t of V1.stickers)V1.setLook(t,"color");V1.rotateTo(V1.baseView,300),R1.scramble=LC(e.n,R1.size),R1.mixing=!0,setTimeout(()=>{R1&&Promise.all(R1.scramble.map(t=>V1.turn(t,!0,520))).then(()=>{R1&&(R1.mixing=!1,k8())})},450),$("#tr-step").textContent=`${C+1} \u0438\u0437 ${b7.length}`,$("#tr-dots").innerHTML=b7.map((t,r)=>`<i class="${r<C?"done":r===C?"on":""}"></i>`).join(""),k8()}function uC(){if(!R1)return null;let C=Q8([...R1.scramble,...R1.moves]),e=C[C.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}var Kn=()=>Q8([...R1.scramble,...R1.moves]).reduce((C,e)=>C+Math.abs(e.d),0);function k8(){if(!R1)return;let C=b7[R1.step],e=C.tip;R1.mixing?e="\u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F.":R1.wrong&&C.arrow&&(e="\u042D\u0442\u043E\u0442 \u0441\u043B\u043E\u0439 \u043B\u0438\u0448\u043D\u0438\u0439, \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E: \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u043A\u0430\u043A \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u0443\u0442\u044C."),$("#tr-foot").innerHTML=`<div class="tip" id="tr-tip">${e}<br><small>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E.</small></div>
  <div class="tools">
    <button class="tool" id="tr-undo"${R1.moves.length&&!R1.mixing?"":" disabled"}>${h1(l1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    <button class="tool hint" id="tr-hint"${R1.mixing?" disabled":""}>${h1(l1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430</button>
    <button class="tool" id="tr-view">${h1(l1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="tr-again"${R1.mixing?" disabled":""}>${h1(l1.shuffle)}\u0417\u0430\u043D\u043E\u0432\u043E</button>
  </div>`}async function EV(C,e){let t=Kn();R1.moves.push({ax:C.ax,l:C.l,d:C.d}),A2("turn"),await V1.turn(C,!0,e?420:190),R1&&(R1.wrong=Kn()>t?1:0,V1.isSolved()?BV():k8())}function RV(C){!R1||R1.mixing||R1.solved||V1.busy||(T4(),EV(C))}function Zc(){if(!R1||R1.mixing||R1.solved||V1.busy)return;let C=R1.moves.pop();C&&(A2("turn"),V1.turn({ax:C.ax,l:C.l,d:-C.d}).then(()=>{R1&&(R1.wrong=0,V1.isSolved()?BV():k8())}))}function PV(){if(!R1||R1.mixing||R1.solved||V1.busy)return;let C=uC();C&&(R1.hints++,EV(C,!0))}function BV(){R1.solved=!0,A2("stage"),V1.spin(1e3);let C=R1.step===b7.length-1;$("#tr-tip").innerHTML=C?"<b>\u0421\u043E\u0431\u0440\u0430\u043D\u043E.</b>":"<b>\u0421\u043E\u0431\u0440\u0430\u043D\u043E.</b> \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435.",setTimeout(()=>{if(!R1)return;if(!C){F8(R1.step+1);return}H1.trained=1,y2();let e=R1.inGame;a2(`<div class="m-title">\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430</div><div class="m-text">
      <p>\u0412 \u0438\u0433\u0440\u0435 \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0442\u0430\u043A \u0436\u0435: \u043F\u0440\u043E\u0432\u0451\u043B \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F.</p>
      <p>\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043E\u0434\u043D\u0430: \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439. \u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0442\u043E\u0438\u0442 ${_0}, \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0445\u043E\u0434 \u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u0441\u043B\u043E\u0439 \u0432\u044B\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u043E\u043C \u043A\u0440\u0443\u0442\u0438.</p></div>`,e?[["go","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A","primary"],["again","\u0415\u0449\u0451 \u0440\u0430\u0437",""]]:[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"],["again","\u0415\u0449\u0451 \u0440\u0430\u0437",""]]).then(t=>{t==="again"?F8(0):AC()})},1100)}function AC(){if(!R1)return;let C=R1.back;R1=null,FV(),F2(),V1.mode="view",C()}var IV=()=>$("#guide");function FV(){let C=IV();C&&(C.style.display="none")}function kV(C){if(!R1||t5!=="train"){FV();return}let e=IV(),i=(b7[R1.step].arrow||R1.showArrow)&&!R1.mixing&&!R1.solved&&!V1.busy&&!V1.tweens.length&&$("#modal").hidden?V1.guide(uC()):null;if(!i)e.style.display="none";else{e.style.display="block";let H=V1.canvas.getBoundingClientRect();e.setAttribute("viewBox",`0 0 ${H.width} ${H.height}`);let n=Math.max(6,i.cell*.17),V=i.x1-i.x0,a=i.y1-i.y0,o=Math.hypot(V,a),L=V/o,M=a/o,s=i.x1-L*n*2.4,l=i.y1-M*n*2.4,p=-M*n*1.9,f=L*n*1.9;for(let v of["#g-line","#g-line2"])$(v,e).setAttribute("d",`M${i.x0},${i.y0} L${s},${l}`);$("#g-line",e).setAttribute("stroke-width",n+5),$("#g-line2",e).setAttribute("stroke-width",n),$("#g-head",e).setAttribute("d",`M${i.x1},${i.y1} L${s+p},${l+f} L${s-p},${l-f} Z`);let c=C%1500/1500,d=Math.min(1,c/.75),S=1-Math.pow(1-d,2),_=$("#g-finger",e);_.setAttribute("cx",i.x0+V*S*.85),_.setAttribute("cy",i.y0+a*S*.85),_.setAttribute("r",i.cell*.2),_.setAttribute("opacity",c<.75?.85:.85*(1-(c-.75)/.25))}requestAnimationFrame(kV)}var w7=C=>w0()-(C&&C.gifts||0),Jn=(C,e=w0())=>Math.ceil(e*(C===3?49:38)/54);function yc(C){let e=w7(C);return C.solved?C.correct>=Jn(3,e)?3:C.correct>=Jn(2,e)?2:1:0}function Q4(C){let e=m.level,t={correct:m.lv.correct,points:m.lv.points,solved:C,hints:m.lv.hints,free:!!m.free,cuts:m.lv.cuts||0,skips:m.lv.skips||0,gifts:m.lv.gifts||0,bombs:m.lv.bombs||0,bestRun:m.lv.bestRun||0,bonus:C?m.free?$8():nV():0,left:C&&!m.free?m.tokens:0,leftPts:C&&!m.free?m.tokens*5*e:0,time:m.msOk?Math.round((m.ms||0)/1e3):-1};t.total=t.points+t.bonus+t.leftPts,t.stars=yc(t);let r=e===3&&[1,2].every(H=>m.results[H]&&m.results[H].solved)&&C,i=Rn(H1,{r:t,level:e,size:k2(),total:w7(t),all3:r});t.nb=(m.lv.nb||[]).concat(i.badges),t.ns=i.skins,y2(),m.ch?setTimeout(()=>t9(i.badges),2e3):X4.length=0,m.score+=t.bonus+t.leftPts,m.results[e]=t,m.phase="result",C2(),z5(),Z3(),V1.mode="view",C?(A2("win"),V1.spin(1400),setTimeout(r3,1500)):r3()}function r3(){if(m.ch){ia();return}if(m.day){Cp();return}let C=m.level,e=m.results[C],t=[1,2,3].map(n=>h1(n<=e.stars?l1.star:l1.starOff,"ic"+(n<=e.stars?"":" off"))).join(""),r=[["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${e.correct} \u0438\u0437 ${w7(e)}`],["\u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B",e.points],...e.bestRun>=3?[["\u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F",`${e.bestRun} \u043F\u043E\u0434\u0440\u044F\u0434`]]:[],...e.gifts?[["\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 (\u043A\u043B\u0435\u0442\u043A\u0438 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430)",e.gifts]]:[],...e.bombs?[["\u0411\u043E\u043C\u0431\u044B: \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432",e.bombs]]:[],...e.cuts?[["\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \xAB50 \u043D\u0430 50\xBB",e.cuts]]:[],...e.skips?[["\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",e.skips]]:[],...e.solved&&e.free?[["\u041F\u0440\u0438\u0437\u043E\u0432\u044B\u0435: \u0441\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u043C",e.bonus]]:[],...e.solved&&!e.free?[["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A",e.bonus],[`\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${m5(e.left)}`,e.leftPts]]:[],...e.time>=0?[["\u0412\u0440\u0435\u043C\u044F \u0443\u0440\u043E\u0432\u043D\u044F",_3(e.time)]]:[]],i=`<div class="m-title">${e.solved?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C} \u043F\u0440\u043E\u0439\u0434\u0435\u043D`:"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="stars">${t}</div>
    <div class="rows">${r.map(([n,V])=>`<div><span>${n}</span><b>${V}</b></div>`).join("")}
    <div class="tot"><span>\u0412\u0441\u0435\u0433\u043E \u043E\u0447\u043A\u043E\u0432</span><b>${m.score}</b></div></div>${NV(e)}`,H=[];C<3?e.solved?H.push(["next","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]):(H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["next","\u0414\u0430\u043B\u044C\u0448\u0435 \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430",""])):(e.solved||H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["final","\u0418\u0442\u043E\u0433\u0438 \u0438\u0433\u0440\u044B",e.solved?"primary":""])),H.push(["duel",h1(l1.duel)+"\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443",""]),H.push(["card",h1(l1.image)+"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u043E\u0439",""]),H.push(["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]),YV({title:e.solved?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C} \u043F\u0440\u043E\u0439\u0434\u0435\u043D`:`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C}`,sub:`${h5[C].name} \u0443\u0440\u043E\u0432\u0435\u043D\u044C \xB7 \u043A\u0443\u0431\u0438\u043A ${U5[k2()].name}`,stars:e.stars,points:e.total,lines:[`\u0412\u0435\u0440\u043D\u044B\u0445 ${e.correct} \u0438\u0437 ${w7(e)}${e.bestRun>=3?` \xB7 \u0441\u0435\u0440\u0438\u044F ${e.bestRun} \u043F\u043E\u0434\u0440\u044F\u0434`:""}`,`\u041A\u0443\u0431\u0438\u043A ${e.solved?e.free?"\u0441\u043E\u0431\u0440\u0430\u043D \u0441\u0430\u043C":"\u0441\u043E\u0431\u0440\u0430\u043D":"\u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}${e.time>=0?` \xB7 ${_3(e.time)}`:""}`],name:`\u041A\u0443\u0431\u0438\u043A \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${C}.png`},`${e.solved?`\u041F\u0440\u043E\u0448\u0451\u043B \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${C}`:`\u0421\u044B\u0433\u0440\u0430\u043B \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${C}`} \u0432 \u0438\u0433\u0440\u0435 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${X8(e.total)}, \u0432\u0435\u0440\u043D\u044B\u0445 ${e.correct} \u0438\u0437 ${w7(e)}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0441\u0430\u043C:`,b3("")),a2(i,H).then(n=>{n==="card"?QV().then(r3):n==="duel"?Ca():n==="next"?_c():n==="retry"?DV():n==="final"?bc():e5()})}function _c(){let C=m.topics;m.level++,m.phase="topics",m.topics=Y4(m.level,C),C2(),y0()}function DV(){m.score-=m.lv.points+(m.results[m.level]&&m.results[m.level].bonus+m.results[m.level].leftPts||0),delete m.results[m.level],m.phase="topics",C2(),y0()}function bc(){let C=m.score,e=k2()===2?"best2":"best",t=C>(H1[e]||0);t&&(H1[e]=C),H1.games++,y2();let r=[1,2,3].filter(i=>m.results[i]).map(i=>{let H=m.results[i];return`<div><span>${h5[i].name}${H.solved?"":", \u043A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</span><b>${H.total}</b></div>`}).join("");m=null,C2(),a2(`<div class="m-title">\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430</div><div class="stars">${h1(l1.trophy)}</div>
    <div class="rows">${r}<div class="tot"><span>\u0418\u0442\u043E\u0433\u043E</span><b>${C}</b></div></div>
    <div class="m-text" style="text-align:center">${t?"\u042D\u0442\u043E \u043D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434.":`\u0420\u0435\u043A\u043E\u0440\u0434${e==="best2"?" \u043D\u0430 2\xD72":""}: ${H1[e]}.`}</div>`,[["new","\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(i=>i==="new"?w8():e5())}var y3=C=>C?C.split("-").reverse().join("."):"";function NV(C){let e=H1.ach,t=Fn(H1),r=[];return r.push(`<div class="ach-st">${h1(l1.star)}<span>\u0417\u0432\u0451\u0437\u0434 \u0432\u0441\u0435\u0433\u043E: <b>${e.stars}</b>${t?`. \u0414\u043E \u0432\u0438\u0434\u0430 \xAB${t.name}\xBB \u0435\u0449\u0451 ${t.stars-e.stars}`:""}</span></div>`),C.ns&&C.ns.length&&r.push(`<div class="ach-new">${h1(l1.palette)}<span>${C.ns.length>1?"\u041E\u0442\u043A\u0440\u044B\u0442\u044B \u043D\u043E\u0432\u044B\u0435 \u0432\u0438\u0434\u044B \u043A\u0443\u0431\u0438\u043A\u0430":"\u041E\u0442\u043A\u0440\u044B\u0442 \u043D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430"}: ${C.ns.map(i=>`\xAB${m3[i].name}\xBB`).join(", ")}. \u0412\u044B\u0431\u0440\u0430\u0442\u044C: \u043C\u0435\u043D\u044E, \xAB\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\xBB, \xAB\u0412\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430\xBB.</span></div>`),C.nb&&C.nb.length&&r.push(`<div class="ach-bl"><small>${C.nb.length>1?"\u041D\u043E\u0432\u044B\u0435 \u0437\u043D\u0430\u0447\u043A\u0438":"\u041D\u043E\u0432\u044B\u0439 \u0437\u043D\u0430\u0447\u043E\u043A"}</small>${C.nb.map(i=>`<span class="bchip">${h1(x8[i].icon)}${x8[i].name}</span>`).join("")}</div>`),`<div class="ach-res">${r.join("")}</div>`}var S0=C=>Math.round(C[1]*100/Math.max(1,C[0]));function wc(){let C=H1.ach,e=C.t,t=v0.filter(a=>C.got[a.id]).length,r=[["\u041E\u0442\u0432\u0435\u0442\u043E\u0432",e.n],["\u0412\u0435\u0440\u043D\u044B\u0445",e.n?S0([e.n,e.ok])+"%":"\u2014"],["\u0417\u0432\u0451\u0437\u0434",C.stars],["\u0421\u043E\u0431\u0440\u0430\u043D\u043E \u043A\u0443\u0431\u0438\u043A\u043E\u0432",e.solved]].map(([a,o])=>`<div class="tile"><b>${o}</b><small>${a}</small></div>`).join("");if(!e.n)return`<div class="tiles">${r}</div><p class="lead">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0421\u044B\u0433\u0440\u0430\u0439 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u044D\u0442\u0430\u043F, \u0438 \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0446\u0438\u0444\u0440\u044B: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u043A\u0430\u043A\u0438\u0435 \u0442\u0435\u043C\u044B \u0443\u0434\u0430\u044E\u0442\u0441\u044F \u043B\u0443\u0447\u0448\u0435, \u0430 \u043A\u0430\u043A\u0438\u0435 \u0445\u0443\u0436\u0435.</p>`;let i=Object.entries(C.topics).filter(([a,o])=>o[0]&&(v2[a]||a==="my")).sort((a,o)=>S0(o[1])-S0(a[1])||o[1][0]-a[1][0]),H=i.filter(([a,o])=>o[0]>=10&&a!=="my"),n=[["\u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F",`${e.bestRun} ${_5(e.bestRun,"\u0432\u0435\u0440\u043D\u044B\u0439","\u0432\u0435\u0440\u043D\u044B\u0445","\u0432\u0435\u0440\u043D\u044B\u0445")} \u043F\u043E\u0434\u0440\u044F\u0434`],["\u0414\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",`${e.days}${e.bestDays>e.days?`, \u0440\u0435\u043A\u043E\u0440\u0434 ${e.bestDays}`:""}`],["\u0423\u0440\u043E\u0432\u043D\u0435\u0439 \u0441\u044B\u0433\u0440\u0430\u043D\u043E",e.levels],...Object.keys(o0()).length?[["\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F",`\u0441\u044B\u0433\u0440\u0430\u043D\u043E ${J4(Object.keys(o0()).length)}, \u0441\u0435\u0440\u0438\u044F ${T0()}${(e.dayBest||0)>T0()?`, \u0440\u0435\u043A\u043E\u0440\u0434 ${e.dayBest}`:""}`]]:[],["\u0417\u043D\u0430\u0447\u043A\u043E\u0432",`${t} \u0438\u0437 ${v0.length}`],...H.length>=2?[["\u041B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E",`${v3(H[0][0])}, ${S0(H[0][1])}%`],["\u0422\u0440\u0443\u0434\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E",`${v3(H[H.length-1][0])}, ${S0(H[H.length-1][1])}%`]]:[]].map(([a,o])=>`<div><span>${a}</span><b>${o}</b></div>`).join(""),V=i.map(([a,o])=>`<div class="tbr"><div class="tbr-h"><span>${h1((v2[a]||v2.my).icon)}${e2(v3(a))}</span><b>${S0(o)}%</b></div>
    <div class="tbr-b"><i style="width:${S0(o)}%;background:${S0(o)>=80?"var(--ok)":S0(o)>=50?"var(--accent)":"var(--bad)"}"></i></div><small>\u0432\u0435\u0440\u043D\u044B\u0445 ${o[1]} \u0438\u0437 ${o[0]}</small></div>`).join("");return`<div class="tiles">${r}</div><div class="rows slines">${n}</div>
    <h3 class="ach-h">\u041F\u043E \u0442\u0435\u043C\u0430\u043C</h3>${H.length<2?'<p class="m-note">\u041B\u0443\u0447\u0448\u0430\u044F \u0438 \u0441\u0430\u043C\u0430\u044F \u0442\u0440\u0443\u0434\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432 \u0434\u0432\u0443\u0445 \u0442\u0435\u043C\u0430\u0445 \u043D\u0430\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0445\u043E\u0442\u044F \u0431\u044B \u043F\u043E 10 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.</p>':""}${V}
    <p class="m-note">\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u0434\u0451\u0442\u0441\u044F \u0441 ${y3(e.since)}.</p>`}function Tc(){let C=H1.ach;return`<p class="lead">\u0417\u043D\u0430\u0447\u043A\u043E\u0432: ${v0.filter(t=>C.got[t.id]).length} \u0438\u0437 ${v0.length}. \u041E\u043D\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E: \u0433\u0440\u0430\u043D\u044C \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A, \u0441\u0431\u043E\u0440\u043A\u0443 \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A, \u0441\u0435\u0440\u0438\u044E \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.</p><div class="bgrid">${v0.map(t=>{let r=C.got[t.id],i=!r&&t.prog?t.prog(H1):null;return`<div class="badge${r?" got":""}"><span class="bic">${h1(t.icon)}</span><b>${t.name}</b><small>${t.about}</small>${r?`<em>\u043F\u043E\u043B\u0443\u0447\u0435\u043D ${y3(r)}</em>`:i?`<span class="bpr"><i style="width:${Math.min(100,Math.round(i[0]*100/i[1]))}%"></i></span><em>${Math.min(i[0],i[1])} \u0438\u0437 ${i[1]}</em>`:""}</div>`}).join("")}</div>`}var Oc=[["stats","\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"],["badges","\u0417\u043D\u0430\u0447\u043A\u0438"],["skins","\u0412\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430"]];function UV(C){return Oc.map(([e,t])=>`<button data-tab="${e}" class="${e===C?"on":""}">${t}</button>`).join("")}function jn(C="stats"){if(F2(),C==="skins"){zV();return}$("#ach-tabs").innerHTML=UV(C),$("#ach-body").innerHTML=C==="badges"?Tc():wc(),$("#ach-body").scrollTop=0,n3("ach")}var k4=null;function zV(){if($("#sk-tabs").innerHTML=UV("skins"),t5!=="skins"){k4=H1.skin||"classic",V1.setSize(H1.size===2?2:3),V1.reset(),V1.mode="view",V1.autoSpin=!0;for(let t of V1.stickers)V1.setLook(t,"color")}let C=H1.ach,e=H1.skin||"classic";$("#sk-lead").textContent=`\u0417\u0432\u0451\u0437\u0434: ${C.stars}. \u041D\u043E\u0432\u044B\u0435 \u0432\u0438\u0434\u044B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u0437\u0432\u0451\u0437\u0434\u044B, \u0438\u0445 \u0434\u0430\u044E\u0442 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0433\u0434\u0435 \u0441\u043E\u0431\u0440\u0430\u043D \u043A\u0443\u0431\u0438\u043A. \u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0438\u0434 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0438\u0442\u044C.`,$("#sk-list").innerHTML=P4.map(t=>{let r=S8(H1,t.id);return`<button class="skin${t.id===e?" on":""}${t.id===k4?" pv":""}${r?"":" lock"}" data-skin="${t.id}">
      <span class="skpv" style="background:linear-gradient(135deg, ${t.pv[0]} 0 48%, ${t.pv[1]} 52%)"></span>
      <span class="sktx"><b>${t.name}</b><small>${t.about}</small></span>
      <em>${t.id===e?h1(l1.check)+"\u0432\u044B\u0431\u0440\u0430\u043D":r?"\u0432\u044B\u0431\u0440\u0430\u0442\u044C":h1(l1.lock)+t.stars}</em></button>`}).join(""),V1.setSkin(k4),WV(k4==="newyear"),n3("skins")}function Ec(C){if(k4=C,S8(H1,C))H1.skin=C,y2();else{let e=m3[C].stars-H1.ach.stars;R2(`\xAB${m3[C].name}\xBB \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0437\u0430 ${m3[C].stars} \u0437\u0432\u0451\u0437\u0434, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e}. \u041F\u043E\u043A\u0430 \u044D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u043A\u0430.`)}A2("tap"),zV()}function GV(){let C=S8(H1,H1.skin)?H1.skin:"classic";V1.setSkin(C),WV(C==="newyear")}var eC=!1;function WV(C){if(C===eC)return;eC=C;let e=$("#snow");if(e&&e.remove(),!C)return;let t=document.createElement("canvas");t.id="snow",document.body.prepend(t);let r=t.getContext("2d"),i=Math.min(2,window.devicePixelRatio||1),H=0,n=0,V=0,a=()=>{H=window.innerWidth,n=window.innerHeight,t.width=H*i,t.height=n*i},o=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),r:.8+Math.random()*2.2,v:.25+Math.random()*.6,w:Math.random()*6.3})),L=M=>{if(!(!eC||!t.isConnected)){if(M-V>33){let s=V?Math.min(100,M-V)/1e3:0;V=M,t.width!==Math.round(window.innerWidth*i)&&a(),r.setTransform(i,0,0,i,0,0),r.clearRect(0,0,H,n),r.fillStyle="rgba(255,255,255,0.75)";for(let l of o)l.y+=l.v*s*60/n*1.2,l.w+=s*.8,l.y>1.02&&(l.y=-.02,l.x=Math.random()),r.globalAlpha=.35+l.r/5,r.beginPath(),r.arc((l.x+Math.sin(l.w)*.015)*H,l.y*n,l.r,0,6.29),r.fill();r.globalAlpha=1}requestAnimationFrame(L)}};a(),requestAnimationFrame(L)}var $V="menu",Rc={0:"\u043B\u044E\u0431\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",1:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 1",2:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 2",3:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 3"};function W4(C){C&&($V=C),F2(),j8();let e=[1,2,3].map(t=>I4(t).length);$("#my-lead").innerHTML=j2.list.length?`\u0413\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C, \u0435\u0441\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 (\u0434\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4). \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445.<br>
      <span class="mycount">${[1,2,3].map((t,r)=>`<b class="${e[r]>=9?"ok":""}">\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${t}: ${e[r]}${e[r]<9?` (\u0435\u0449\u0451 ${9-e[r]})`:""}</b>`).join("")}</span>`:"\u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u0438\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0433\u0440\u0430\u043D\u0435\u0439 \u043A\u0443\u0431\u0438\u043A\u0430. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0435\u0442\u043E\u043A \u043D\u0430 \u0433\u0440\u0430\u043D\u0438. \u0414\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4.<br><br>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0437\u0434\u0435\u0441\u044C \u0438\u043B\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0432 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u043C \u0444\u0430\u0439\u043B\u0435 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\xBB.",$("#my-list").innerHTML=j2.list.map((t,r)=>`<button class="myq" data-id="${t.id}">
    <span class="myq-n">${r+1}</span><span class="myq-t"><b>${e2(t.q)}</b><small><span class="okc">${e2(t.a[0])}</span> \xB7 ${Rc[t.lv||0]}</small></span></button>`).join(""),$("#my-add").innerHTML=h1(l1.plus)+"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",$("#my-save").innerHTML=h1(l1.save)+"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",$("#my-load").innerHTML=h1(l1.load)+"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",$("#my-save").disabled=!j2.list.length,n3("my")}function Pc(){$V==="topics"&&m&&m.phase==="topics"?(m.topics=Y4(m.level,m.topics),C2(),y0()):e5()}var N4=0,D8=0;function eV(C){let e=C?Z8(C):null;N4=e?e.id:0,D8=e&&e.lv||0;let t=(r,i)=>`<input id="e-a${r}" maxlength="${i0.a}" autocomplete="off" placeholder="${i}" value="${e?e2(e.a[r]):""}">`;$("#ecard").innerHTML=`<div class="m-title">${e?"\u0412\u043E\u043F\u0440\u043E\u0441":"\u041D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"}</div>
    <label class="fl"><span>\u0412\u043E\u043F\u0440\u043E\u0441</span><textarea id="e-q" rows="3" maxlength="${i0.q}">${e?e2(e.q):""}</textarea></label>
    <label class="fl okf"><span>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442</span>${t(0,"")}</label>
    <div class="fl badf"><span>\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B</span>${t(1,"\u043F\u0435\u0440\u0432\u044B\u0439")}${t(2,"\u0432\u0442\u043E\u0440\u043E\u0439")}${t(3,"\u0442\u0440\u0435\u0442\u0438\u0439")}</div>
    <label class="fl"><span>\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C</span><textarea id="e-e" rows="2" maxlength="${i0.e}">${e?e2(e.e||""):""}</textarea></label>
    <div class="fl"><span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C</span><div class="seg">${[0,1,2,3].map(r=>`<button data-elv="${r}" class="${r===D8?"on":""}">${r||"\u041B\u044E\u0431\u043E\u0439"}</button>`).join("")}</div></div>
    <div class="e-err" id="e-err"></div>
    <div class="m-btns"><button class="btn primary" id="e-ok">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
    ${e?`<button class="btn ghost danger" id="e-del">${h1(l1.del)}\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441</button>`:""}
    <button class="btn ghost" id="e-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button></div>`,$("#edit").hidden=!1,$("#ecard").scrollTop=0}function j8(){$("#edit").hidden=!0}function Bc(){let C=g8({q:$("#e-q").value,a:[0,1,2,3].map(r=>$("#e-a"+r).value),e:$("#e-e").value,lv:D8}),e=Jt(C,N4);if(e){$("#e-err").textContent=e,A2("deny");return}if(!Dn(C,N4)){$("#e-err").textContent="\u041F\u0430\u043C\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0430, \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F.";return}let t=!N4;if(j8(),W4(),t){R2(`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D. \u0412\u0441\u0435\u0433\u043E: ${j2.list.length}`);let r=$("#my-list").lastElementChild;r&&r.scrollIntoView({block:"nearest"})}}function Ic(){let C=N4;j8(),a2('<div class="m-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441?</div>',[["yes","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{F2(),e==="yes"&&(Nn(C),R2("\u0412\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0430\u043B\u0451\u043D")),W4()})}async function Fc(){let C="\u041A\u0443\u0431\u0438\u043A - \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.txt",e=new File([Un()],C,{type:"text/plain"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(r){if(r&&r.name==="AbortError")return}let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=C,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},2e3)}async function kc(C){if(!C)return;let e;try{e=Gn(zn(await Wn(C)))}catch{e={added:0,dup:0,errors:["\u0424\u0430\u0439\u043B \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F."]}}let t=[`<p>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: <b>${e.added}</b>.${e.dup?` \u0423\u0436\u0435 \u0431\u044B\u043B\u0438, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B: ${e.dup}.`:""}</p>`];!e.added&&!e.dup&&!e.errors.length&&t.push("<p>\u0412 \u0444\u0430\u0439\u043B\u0435 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0431\u0440\u0430\u0437\u0435\u0446: \u0432\u043E\u043F\u0440\u043E\u0441, \u0441\u0442\u0440\u043E\u043A\u0430 \xAB+ \u0432\u0435\u0440\u043D\u044B\u0439\xBB, \u0442\u0440\u0438 \u0441\u0442\u0440\u043E\u043A\u0438 \xAB- \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439\xBB.</p>"),e.errors.length&&t.push(`<p>\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:</p><ul class="errs">${e.errors.slice(0,12).map(r=>`<li>${e2(r)}</li>`).join("")}${e.errors.length>12?`<li>\u0438 \u0435\u0449\u0451 ${e.errors.length-12}</li>`:""}</ul>`),W4(),a2(`<div class="m-title">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</div><div class="m-text">${t.join("")}</div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(F2)}var Dc=["\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442","\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E","\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0438","\u0423\u0441\u0442\u0430\u0440\u0435\u043B\u043E","\u041E\u043F\u0435\u0447\u0430\u0442\u043A\u0430","\u0414\u0440\u0443\u0433\u043E\u0435"],N8="",mC="";function Nc(C){let e=$(".after");mC=e.innerHTML,N8="",e.innerHTML=`<div class="rep" data-qid="${e2(C)}"><div class="rep-t">\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C?</div>
    <div class="rep-r">${Dc.map(t=>`<button data-rr="${e2(t)}">${t}</button>`).join("")}</div>
    <label class="fl"><textarea id="rep-note" rows="2" maxlength="300" placeholder="\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0435\u0448\u044C (\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C)"></textarea></label>
    <div class="e-err" id="rep-err"></div>
    <div class="two-sm"><button class="btn ghost" id="rep-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button><button class="btn primary" id="rep-send">${h1(l1.share)}\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div></div>`,e.scrollIntoView({block:"nearest",behavior:"smooth"})}function hC(C){let e=`\u041A\u0443\u0431\u0438\u043A ${i3}, \u0431\u0430\u0437\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u2116${a0(u2)}`,t=(r,i)=>[C.length>1?`${i+1}.`:"",`\u0422\u0435\u043C\u0430: ${v2[r.t]&&v2[r.t].name||r.t}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${r.l}`,`\u0412\u043E\u043F\u0440\u043E\u0441: ${r.q}`,r.p?`\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430: ${r.p}`:"",`\u0412\u0435\u0440\u043D\u044B\u0439 \u043F\u043E \u0438\u0433\u0440\u0435: ${r.a[0]}`,`\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B: ${r.a.slice(1).join(" / ")}`,r.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435: ${r.e}`:"",`\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A: ${r.r}`,r.n?`\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ${r.n}`:""].filter(Boolean).join(`
`);return`${e}
${C.length>1?`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${C.length}`:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435"}

${C.map(t).join(`

`)}`}function fC(C,e){return j1.on?(Xt(e),Promise.resolve("sent")):navigator.share?navigator.share({title:C,text:e}).then(()=>"sent",t=>t&&t.name==="AbortError"?"cancel":tV(e)):tV(e)}function tV(C){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(C).then(()=>"copied",()=>"kept"):Promise.resolve("kept")}function Uc(){let C=$(".rep");if(!N8){$("#rep-err").textContent="\u0412\u044B\u0431\u0435\u0440\u0438, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A",A2("deny");return}let e=C.dataset.qid,t=O0(e);if(!t)return;let[r,i]=e.split("-"),H={d:new Date().toISOString().slice(0,10),t:r,l:+i,q:t.q,...t.p?{p:t.p}:{},a:t.a.slice(),e:t.e||"",r:N8,n:$("#rep-note").value.trim().slice(0,300),rev:a0(u2)};H1.reports=(H1.reports||[]).filter(a=>Z0(a)!==Z0(H)).concat(H).slice(-200),H1.bad=H1.bad||[],H1.bad.includes(Z0(H))||H1.bad.push(Z0(H)),y2();let n=$(".after");n.innerHTML=mC;let V=$("#q-rep");V&&(V.outerHTML=`<div class="rep-ok">${h1(l1.check)}\u0421\u043F\u0430\u0441\u0438\u0431\u043E. \u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430, \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F.</div>`),A2("tap"),fC("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435",hC([H])).then(a=>{a==="copied"?R2("\u0422\u0435\u043A\u0441\u0442 \u0436\u0430\u043B\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"):a!=="sent"&&R2("\u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430: \u043C\u0435\u043D\u044E \u2192 \xAB\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445\xBB")})}function zc(){$(".after").innerHTML=mC}function Gc(){let C=H1.reports||[];if(!C.length)return;let e=C.slice().reverse().map(t=>`<li><b>${e2(t.q)}</b><small>${e2(v2[t.t]&&v2[t.t].name||t.t)}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.l} \xB7 ${e2(t.r)}${t.n?" \xB7 "+e2(t.n):""}</small></li>`).join("");a2(`<div class="m-title">\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${C.length}</div><div class="m-text">
    <p>\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u0433\u0440\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0434\u0430\u0451\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B, \u043E\u043D \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442 \u0438\u0445 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.</p>
    <ul class="replist">${e}</ul></div>`,[["send",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435","primary"],["clear","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A","ghost danger"],["ok","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(t=>{F2(),t==="send"?fC("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445",hC(C)).then(r=>{r==="copied"&&R2("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")}):t==="clear"&&a2('<div class="m-title">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A?</div><div class="m-text"><p>\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C\u0441\u044F, \u043F\u043E\u043A\u0430 \u0438\u0445 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u044F\u0442.</p></div>',[["yes","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(r=>{F2(),r==="yes"&&(H1.reports=[],y2(),e5())})})}var K4="kubik.day.v1",Wc="2026-11-04",$c=[3,1,1,2,2,2,3],qc=["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],HC=C=>Math.round(Date.UTC(+C.slice(0,4),+C.slice(5,7)-1,+C.slice(8,10))/864e5),qV=C=>HC(C)-HC(Wc)+1,Xc=C=>$c[new Date(Date.UTC(+C.slice(0,4),+C.slice(5,7)-1,+C.slice(8,10))).getUTCDay()],Yc=C=>qc[new Date(Date.UTC(+C.slice(0,4),+C.slice(5,7)-1,+C.slice(8,10))).getUTCDay()],J4=C=>`${C} ${_5(C,"\u0434\u0435\u043D\u044C","\u0434\u043D\u044F","\u0434\u043D\u0435\u0439")}`;function D4(C){let e=2166136261;for(let t=0;t<C.length;t++)e^=C.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Qc(C){let e=D4(C);return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var CV=(C,e)=>(u2[C]&&u2[C][e]||[]).map((t,r)=>[t,r]).filter(([t])=>t&&!t.img);function XV(C){let e=Xc(C),t=4,r=f7.map(L=>L.id).filter(L=>L!=="my"&&CV(L,e).length>=t);if(r.length<6)return null;let i=r.sort((L,M)=>D4(C+"|"+L)-D4(C+"|"+M)).slice(0,6),H={},n={};f2.forEach((L,M)=>{let s=i[M];H[L]=s,n[L]=CV(s,e).sort((l,p)=>D4(C+"|"+Z0(l[0]))-D4(C+"|"+Z0(p[0]))||l[1]-p[1]).slice(0,t).map(([,l])=>`${s}-${e}-${l}`)});let V=y8;y8=Qc("kubik-day|"+C);let a,o;try{a=LC(U5[2].scramble[e-1],2),o=oV(2)}finally{y8=V}return{date:C,no:qV(C),level:e,topics:H,qs:n,scramble:a,sp:o}}var o0=()=>H1.days=H1.days||{};function T0(){let C=o0(),e=HC(x0());C[x0()]||e--;let t=0,r=i=>new Date(i*864e5).toISOString().slice(0,10);for(;C[r(e)];)t++,e--;return t}function Kc(C){let e=$("#m-day"),t=y7(n0(K4)),r=x0(),i=o0()[r],H=T0();e.className="btn day-btn"+(C&&!i?" primary":"");let n=H>1?`<small>\u0441\u0435\u0440\u0438\u044F ${J4(H)}</small>`:"";t&&t.day&&(t.phase!=="result"||!o0()[t.day.date])?e.innerHTML=`${h1(l1.calendar)}<span>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0434\u043D\u044F${t.day.date!==r?` \u0437\u0430 ${y3(t.day.date)}`:""}</span>${n}`:i?e.innerHTML=`${h1(l1.calendar)}<span>\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F: ${X8(i.p)}</span>${n}`:e.innerHTML=`${h1(l1.calendar)}<span>\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F \u2116${qV(r)}</span>${n}`}function Jc(C){return`<div class="dtopics">${f2.map(e=>`<span>${S3(e,C.topics[e])}${e2(v3(C.topics[e]))}</span>`).join("")}</div>`}function vC(){F2(),e9();let C=y7(n0(K4));if(C&&C.day&&(C.phase!=="result"||!o0()[C.day.date])){if(m&&m.day&&m.phase!=="result"&&t5==="game"){y5();return}m=C,y5();return}let e=x0();if(o0()[e]){U8(e);return}let r=XV(e);if(!r){a2('<div class="m-title">\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F</div><div class="m-text"><p>\u0412 \u0431\u0430\u0437\u0435 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041D\u0430\u0436\u043C\u0438 \xAB\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0432 \u043C\u0435\u043D\u044E \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(b0);return}let i=T0();a2(`<div class="m-title">\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F \u2116${r.no}</div><p class="m-sub">${y3(e)}, ${Yc(e)}</p><div class="m-text">
    <p>\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0443 \u0432\u0441\u0435\u0445 \u043E\u0434\u043D\u0430 \u0438 \u0442\u0430 \u0436\u0435 \u043F\u0430\u0440\u0442\u0438\u044F: \u0442\u0435 \u0436\u0435 \u0442\u0435\u043C\u044B, \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A \u0438 \u043E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438 \u043D\u0430 \u0442\u0435\u0445 \u0436\u0435 \u043C\u0435\u0441\u0442\u0430\u0445.</p>
    <p>\u041A\u0443\u0431\u0438\u043A 2\xD72, ${x3(24)}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${r.level} \xB7 ${h5[r.level].name.toLowerCase()}. \u0421\u044B\u0433\u0440\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437, \u043D\u043E\u0432\u044B\u0439 \u043A\u0443\u0431\u0438\u043A \u2014 \u0437\u0430\u0432\u0442\u0440\u0430.</p>
    ${Jc(r)}
    <p class="m-note">${i?`\u0422\u0432\u043E\u044F \u0441\u0435\u0440\u0438\u044F: ${J4(i)} \u043F\u043E\u0434\u0440\u044F\u0434. \u0421\u044B\u0433\u0440\u0430\u0439 \u0441\u0435\u0433\u043E\u0434\u043D\u044F, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u0440\u0435\u0440\u0432\u0430\u0442\u044C \u0435\u0451.`:"\u0418\u0433\u0440\u0430\u0439 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0442\u0438 \u0441\u0435\u0440\u0438\u044F \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434."} \u0412 \u043A\u043E\u043D\u0446\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u0440\u0443\u0437\u044C\u044F\u043C \u0441\u0435\u0442\u043A\u043E\u0439 \u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432.</p></div>`,[["go","\u041D\u0430\u0447\u0430\u0442\u044C","primary"],["no","\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441","ghost"]]).then(H=>{H==="go"?jc(r):b0()})}function jc(C){m={v:1,day:{date:C.date,no:C.no,qs:C.qs},level:C.level,size:2,phase:"quiz",score:0,results:{},topics:C.topics,timers:Object.fromEntries(f2.map(e=>[e,0])),bq:{},scramble:C.scramble,moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0,gifts:0,bombs:0,bestRun:0},ms:0,msOk:1,sp:C.sp,run:0};for(let e of Object.values(C.qs))for(let t of e){let r=O0(t);r&&(m.bq[t]={q:r.q,a:r.a.slice(),e:r.e})}C2(),y5()}var ep={c:"\u{1F7E9}",w:"\u{1F7E5}",s:"\u2B1B",g:"\u{1F381}"};function tp(){return(m.order.length===6?m.order:f2).map(e=>[0,1,2,3].map(t=>ep[m.cells[e+t]]||"\u2B1C").join("")).join(`
`)}function Cp(){let C=m.results[m.level],e=m.day.date,t=o0();if(!t[e]){t[e]={no:m.day.no,l:m.level,p:m.score,c:C.correct,n:w7(C),o:C.solved?C.free?2:1:0,k:C.left||0,w:C.time,st:C.stars,run:C.bestRun||0,g:tp()};let r=Object.keys(t).sort();for(;r.length>120;)delete t[r.shift()];let i=Bn(H1,T0());i.length&&(C.nb=(C.nb||[]).concat(i)),y2(),C2()}U8(e,C)}function rV(C){let e=o0()[C];return`\xAB\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F\xBB \u2116${e.no} \xB7 ${y3(C)} \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${e.l}
${e.g}
${X8(e.p)}, \u0432\u0435\u0440\u043D\u044B\u0445 ${e.c} \u0438\u0437 ${e.n}, \u043A\u0443\u0431\u0438\u043A ${$4(e.o)}${e.w>=0?`, ${_3(e.w)}`:""}${T0()>1?`
\u0421\u0435\u0440\u0438\u044F: ${J4(T0())} \u043F\u043E\u0434\u0440\u044F\u0434`:""}
\u0421\u044B\u0433\u0440\u0430\u0439 \u0442\u043E\u0442 \u0436\u0435 \u043A\u0443\u0431\u0438\u043A:`}var iV={"\u{1F7E9}":"c","\u{1F7E5}":"w","\u2B1B":"s","\u{1F381}":"g","\u2B1C":"e"};function rp(C){return String(C).split(`
`).map(e=>`<div>${[...e].map(t=>iV[t]?`<i class="q-${iV[t]}">${t==="\u{1F381}"?h1(l1.gift):""}</i>`:"").join("")}</div>`).join("")}function U8(C,e){let t=o0()[C],r=[1,2,3].map(a=>h1(a<=t.st?l1.star:l1.starOff,"ic"+(a<=t.st?"":" off"))).join(""),i=T0(),H=H1.ach.t.dayBest||i,n=[["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${t.c} \u0438\u0437 ${t.n}`],["\u041A\u0443\u0431\u0438\u043A",$4(t.o)],...t.o===1?[["\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432",t.k]]:[],...t.run>=3?[["\u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${t.run} \u043F\u043E\u0434\u0440\u044F\u0434`]]:[],...t.w>=0?[["\u0412\u0440\u0435\u043C\u044F",_3(t.w)]]:[],["\u0414\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",`${i}${H>i?`, \u0440\u0435\u043A\u043E\u0440\u0434 ${H}`:""}`]],V=`<div class="m-title">\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F \u2116${t.no}</div><p class="m-sub">${y3(C)} \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.l} \xB7 ${h5[t.l].name.toLowerCase()}</p>
    <div class="stars">${r}</div>
    <div class="dgrid">${rp(t.g)}</div>
    <div class="rows">${n.map(([a,o])=>`<div><span>${a}</span><b>${o}</b></div>`).join("")}
    <div class="tot"><span>\u041E\u0447\u043A\u0438</span><b>${t.p}</b></div></div>${e?NV(e):""}
    <p class="m-note">\u041A\u0430\u0436\u0434\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u2014 \u0433\u0440\u0430\u043D\u044C \u0432 \u0442\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043A\u0430\u043A \u0442\u044B \u0438\u0445 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B: \u0437\u0435\u043B\u0451\u043D\u044B\u0439 \u2014 \u0432\u0435\u0440\u043D\u043E, \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u2014 \u043E\u0448\u0438\u0431\u043A\u0430, \u0447\u0451\u0440\u043D\u044B\u0439 \u2014 \u043F\u0440\u043E\u043F\u0443\u0441\u043A, \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u2014 \u043A\u043B\u0435\u0442\u043A\u0430 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430. ${C===x0()?"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0443\u0431\u0438\u043A \u0434\u043D\u044F \u2014 \u0437\u0430\u0432\u0442\u0440\u0430.":""}</p>`;YV({title:`\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F \u2116${t.no}`,sub:`${y3(C)} \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.l}, ${h5[t.l].name.toLowerCase()}`,stars:t.st,points:t.p,lines:[`\u0412\u0435\u0440\u043D\u044B\u0445 ${t.c} \u0438\u0437 ${t.n} \xB7 \u043A\u0443\u0431\u0438\u043A ${$4(t.o)}${t.w>=0?` \xB7 ${_3(t.w)}`:""}`,i>1?`\u0421\u0435\u0440\u0438\u044F: ${J4(i)} \u043F\u043E\u0434\u0440\u044F\u0434`:""],grid:t.g,name:`\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F ${t.no}.png`},rV(C),b3("day")),a2(V,[["card",h1(l1.image)+"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u043E\u0439","primary"],["share",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u043C",""],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(a=>{a==="card"?QV().then(()=>U8(C,e)):a==="share"?j4("\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F",rV(C),b3("day")).then(()=>U8(C,e)):e5()})}var g7=null;function YV(C,e,t){g7&&g7.url&&URL.revokeObjectURL(g7.url);let r=g7={text:e,link:t,name:C.name||"\u041A\u0443\u0431\u0438\u043A.png",blob:null,url:""},i=null;try{i=V1.snapshot(C.grid?520:600)}catch{}let H=(j1.link||E8().replace(/\?.*$/,"")).replace(/^https?:\/\//,"").replace(/\/$/,"");r.ready=wn({...C,cube:i,pointsWord:_5(C.points,"\u043E\u0447\u043A\u043E","\u043E\u0447\u043A\u0430","\u043E\u0447\u043A\u043E\u0432"),foot:`\u0421\u044B\u0433\u0440\u0430\u0439: ${H}`}).then(n=>(r.blob=n,n&&(r.url=URL.createObjectURL(n)),r)).catch(()=>r)}function QV(){let C=g7;if(!C)return Promise.resolve("none");if(!C.blob)return C.ready.then(()=>C.blob?O8(C):"none");let e=new File([C.blob],C.name,{type:"image/png"});return navigator.canShare&&navigator.canShare({files:[e]})?navigator.share({files:[e],text:`${C.text}
${C.link}`}).then(()=>"sent",t=>t&&t.name==="AbortError"?"cancel":O8(C)):O8(C)}function O8(C){let e=j1.on?[["text",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u0447\u0430\u0442","primary"],["ok","\u0413\u043E\u0442\u043E\u0432\u043E","ghost"]]:[["save",h1(l1.download)+"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443","primary"],["text",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u043C",""],["ok","\u0413\u043E\u0442\u043E\u0432\u043E","ghost"]];return a2(`<div class="m-title">\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C</div><img class="card-img" src="${C.url}" alt="\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442">
    <p class="m-note">${j1.on?"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0438 \u043F\u043E\u0434\u0435\u0440\u0436\u0438 \u043F\u0430\u043B\u0435\u0446: \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C. \u041F\u043E\u0442\u043E\u043C \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u0438 \u0435\u0451 \u043A \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044E.":"\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443 \u0438 \u043F\u043E\u0434\u0435\u0440\u0436\u0438 \u043F\u0430\u043B\u0435\u0446, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0435\u0451 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C."}</p>`,e).then(t=>{if(t==="save"){let r=document.createElement("a");return r.href=C.url,r.download=C.name,document.body.appendChild(r),r.click(),r.remove(),O8(C)}return t==="text"?j4("\u041A\u0443\u0431\u0438\u043A",C.text,C.link):t})}function KV(){let C=$("#m-tg");C&&(C.hidden=j1.on||!j1.link,C.innerHTML=h1(l1.share)+"\u0418\u0433\u0440\u0430\u0442\u044C \u0432 Telegram")}var O7="kubik.chal.v1",xC=C=>{let e=new TextEncoder().encode(C),t="";for(let r of e)t+=String.fromCharCode(r);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},ip=C=>new TextDecoder().decode(Uint8Array.from(atob(C.replace(/-/g,"+").replace(/_/g,"/")),e=>e.charCodeAt(0)));function nC(C){let e=Z0(C),t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t=Math.imul(t,16777619);return((t>>>0)%46656).toString(36).padStart(3,"0")}var _3=C=>{if(!(C>=0))return"\u2014";let e=Math.floor(C/3600),t=Math.floor(C/60)%60,r=C%60;return(e?`${e}:${String(t).padStart(2,"0")}`:`${t}`)+":"+String(r).padStart(2,"0")},ee=()=>H1.duels=H1.duels||[],E8=()=>location.origin+location.pathname.replace(/index\.html$/,"")+"?v="+i3;function b3(C,e){if(j1.link){if(!C)return v8("");if(C==="day")return v8("day");let t=yn(C,e);if(t&&t.length<=512)return v8(t)}return C?C==="day"?`${E8()}#day`:`${E8()}#${C}=${xC(JSON.stringify(e))}`:E8()}function SC(C){if(C==="day")return"#day";let e=_n(C);return e?`#${e.kind}=${xC(JSON.stringify(e.raw))}`:C.length>8?"#ch=broken-link-000000000000":""}var v3=C=>v2[C]?v2[C].name:C,$4=C=>C===1?"\u0441\u043E\u0431\u0440\u0430\u043D":C===2?"\u0441\u043E\u0431\u0440\u0430\u043D \u0441\u0430\u043C":"\u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D",h3=C=>Number.isFinite(+C)?Math.round(+C):0;function JV(C,e){return{n:C,p:e.total,c:e.correct,o:e.solved?e.free?2:1:0,k:e.left||0,h:e.hints||0,x:e.cuts||0,y:e.skips||0,w:e.time>=0?e.time:-1}}function HV(C){return!C||typeof C!="object"?null:{n:String(C.n||"\u0414\u0440\u0443\u0433").slice(0,20),p:h3(C.p),c:h3(C.c),o:[0,1,2].includes(+C.o)?+C.o:0,k:h3(C.k),h:h3(C.h),x:h3(C.x),y:h3(C.y),w:C.w>=0?h3(C.w):-1}}function gC(C){let e;try{e=JSON.parse(ip(C))}catch{return null}if(!e||e.v!==1||typeof e.id!="string"||!/^[a-z0-9]{4,12}$/.test(e.id)||!h5[e.l]||![2,3].includes(e.s))return null;let t=String(e.t||"").split(","),r=String(e.tm||"").split(",").map(V=>tC.includes(+V)?+V:0),i=String(e.q||"").split(",");if(t.length!==6||r.length!==6||i.length!==6||!/^([xyz][+-][+-]){1,30}$/.test(e.m||""))return null;let H=HV(e.a);if(!H)return null;e.a=H,e.b&&(e.b=HV(e.b));let n=nc(e.sp||"",e.s);return n?{raw:e,topics:t,timers:r,faces:i,sp:n}:null}function Hp(C){return C.map(e=>e.ax+(e.l>0?"+":"-")+(e.d>0?"+":"-")).join("")}function np(C,e){let t=e===2?.5:1;return(C.match(/.../g)||[]).map(r=>({ax:r[0],l:r[1]==="+"?t:-t,d:r[2]==="+"?1:-1}))}function VC(C){let e=C.raw.s*C.raw.s,t={},r=0,i=!1;return f2.forEach((H,n)=>{let V=C.topics[n],a=u2[V]&&u2[V][C.raw.l]||[],o=C.faces[n].match(/.{5}/g)||[];if(o.length!==e||V==="my"){i=!0;return}let L=o.map(l=>{let p=parseInt(l.slice(0,2),36),f=l.slice(2);if(a[p]&&nC(a[p])===f)return p;let c=a.findIndex(d=>nC(d)===f);return c<0&&r++,c}),M=new Set(L.filter(l=>l>=0)),s=V0(a.map((l,p)=>p).filter(l=>!M.has(l)));if(L=L.map(l=>l>=0?l:s.shift()),L.some(l=>l===void 0)){i=!0;return}t[H]=L.map(l=>`${V}-${C.raw.l}-${l}`)}),{qs:t,miss:r,broken:i}}async function Vp(){try{let e=await(await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"})).json();if(I8(e)&&H3(e._meta.app)<=H3(i3)&&a0(e)>a0(u2))return oC(e),await uV(e),!0}catch{}return!1}function ZC(C,e){let t=ee(),r=t.find(i=>i.id===C.id);if(!r){let i={...C};delete i.b,r={id:C.id,at:new Date().toISOString().slice(0,10),mine:!!e,raw:i,me:null,others:[]},t.push(r),t.length>30&&t.splice(0,t.length-30)}return r}function jV(C,e){let t=C.others.findIndex(r=>r.n===e.n);t>=0?C.others[t]=e:C.others.push(e)}var yC=C=>[{...C.raw.a,me:C.mine},...C.me&&!C.mine?[{...C.me,me:!0}]:[],...C.others.map(e=>({...e,me:!1}))];function ap(C){let e=t=>t.w>=0?t.w:1e9;return C.slice().sort((t,r)=>r.p-t.p||(r.o?1:0)-(t.o?1:0)||e(t)-e(r))}function ea(C){if(C.length<2)return"\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B \u043D\u0430 \u0432\u044B\u0437\u043E\u0432.";let e=ap(C),[t,r]=e;if(t.p===r.p&&!!t.o==!!r.o&&t.w===r.w)return`\u041D\u0438\u0447\u044C\u044F: \u043F\u043E ${t.p} \u043E\u0447\u043A\u043E\u0432`;let i=t.p!==r.p?`${t.p} \u043E\u0447\u043A\u043E\u0432 \u043F\u0440\u043E\u0442\u0438\u0432 ${r.p}`:!!t.o!=!!r.o?"\u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u0440\u043E\u0432\u043D\u0443, \u043D\u043E \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043D":"\u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u0440\u043E\u0432\u043D\u0443, \u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435";return C.length>2?`\u041F\u0435\u0440\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: ${t.me?"\u0442\u044B":e2(t.n)} (${i.replace(` \u043F\u0440\u043E\u0442\u0438\u0432 ${r.p}`,"")})`:t.me?`\u041F\u043E\u0431\u0435\u0434\u0430 \u0437\u0430 \u0442\u043E\u0431\u043E\u0439: ${i}`:`\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u2014 ${e2(t.n)}: ${i}`}function ta(C){let e=6*C.raw.s*C.raw.s,t=yC(C),r=t.slice(0,4),i=[["\u041E\u0447\u043A\u0438",V=>V.p,V=>V.p,1],["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",V=>`${V.c} \u0438\u0437 ${e}`,V=>V.c,1],["\u041A\u0443\u0431\u0438\u043A",V=>$4(V.o),V=>V.o?1:0,1],["\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432",V=>V.o===1?V.k:"\u2014",V=>V.o===1?V.k:-1,1],["\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435",V=>V.h,V=>V.h,-1],["\xAB50 \u043D\u0430 50\xBB / \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438",V=>`${V.x} / ${V.y}`,null,0],["\u0412\u0440\u0435\u043C\u044F",V=>_3(V.w),V=>V.w>=0?V.w:null,-1]],H=`<tr><th></th>${r.map(V=>`<th class="${V.me?"me":""}">${V.me?"\u0422\u044B":e2(V.n)}</th>`).join("")}</tr>`,n=i.map(([V,a,o,L])=>{let M=null;if(o&&L&&r.length>1){let s=r.map(o).filter(p=>p!==null),l=L>0?Math.max(...s):Math.min(...s);s.length>1&&s.some(p=>p!==l)&&(M=l)}return`<tr><td>${V}</td>${r.map(s=>`<td class="${M!==null&&o(s)===M?"best":""}">${e2(a(s))}</td>`).join("")}</tr>`}).join("");return`<table class="duel">${H}${n}</table>${t.length>4?`<p class="m-note">\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0438\u0433\u0440\u043E\u043A\u0430 \u0438\u0437 ${t.length}.</p>`:""}`}function E7(C){return`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C.l} \xB7 ${h5[C.l].name}, \u043A\u0443\u0431\u0438\u043A ${U5[C.s].name}`}function op(C){return`<div class="dtopics">${f2.map((e,t)=>`<span>${v2[C.topics[t]]?S3(e,C.topics[t]):S3(e)}${e2(v3(C.topics[t]))}${C.timers[t]?` <small>${C.timers[t]} \u0441</small>`:""}</span>`).join("")}</div>`}function q4(C,e){return`${C.p} \u043E\u0447\u043A\u043E\u0432, \u0432\u0435\u0440\u043D\u044B\u0445 ${C.c} \u0438\u0437 ${e}, \u043A\u0443\u0431\u0438\u043A ${$4(C.o)}${C.w>=0?`, \u0432\u0440\u0435\u043C\u044F ${_3(C.w)}`:""}`}function _C(C){return a2(`<div class="m-title">${C}</div><label class="fl"><span>\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C? \u042D\u0442\u043E \u0438\u043C\u044F \u0443\u0432\u0438\u0434\u0438\u0442 \u0434\u0440\u0443\u0433.</span>
    <input id="nm" maxlength="20" autocomplete="off" value="${e2(H1.name||"")}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u041C\u0430\u0440\u044C\u044F\u043D"></label>`,[["ok","\u0413\u043E\u0442\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{if(e!=="ok")return null;let t=$("#nm").value.trim().replace(/\s+/g," ").slice(0,20);return t?(H1.name=t,y2(),t):_C(C)})}function j4(C,e,t){return j1.on?(Xt(e,t),Promise.resolve("sent")):fC(C,`${e}
${t}`).then(r=>r==="copied"?(R2("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0451 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),r):r!=="kept"?r:a2(`<div class="m-title">\u0421\u0441\u044B\u043B\u043A\u0430</div><div class="m-text"><p>\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0435\u0451 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u0432 Telegram \u0438\u043B\u0438 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0438.</p>
      <label class="fl"><textarea id="lnk" rows="5" readonly>${e2(e+`
`+t)}</textarea></label></div>`,[["ok","\u0413\u043E\u0442\u043E\u0432\u043E","primary"]]).then(()=>r))}function Ca(){if(f2.some(e=>m.topics[e]==="my")){a2(`<div class="m-title">\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443</div><div class="m-text"><p>\u041D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u0431\u044B\u043B\u0430 \u0433\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB. \u041E\u043D\u0438 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0442\u0432\u043E\u0451\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0434\u0440\u0443\u0433\u0443 \u0438\u0445 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C.</p>
      <p>\u0421\u044B\u0433\u0440\u0430\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u0441\u0432\u043E\u0435\u0439 \u0433\u0440\u0430\u043D\u0438, \u0438 \u043F\u043E\u0441\u043B\u0435 \u043D\u0435\u0433\u043E \u0432\u044B\u0437\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C.</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(r3);return}let C=e=>{if(!e){r3();return}let t=m.results[m.level],r={v:1,id:t.duel||(Date.now().toString(36).slice(-5)+Z7(1296).toString(36)).padEnd(7,"0"),ap:i3,r:a0(u2),l:m.level,s:k2(),t:f2.map(H=>m.topics[H]).join(","),tm:f2.map(H=>g0(H)).join(","),m:Hp(m.scramble),q:f2.map(H=>m.stageQ[H].map(n=>{let V=O0(n);return(+n.split("-")[2]).toString(36).padStart(2,"0")+(V?nC(V):"000")}).join("")).join(","),a:JV(e,t),...m.sp&&Object.keys(m.sp).length?{sp:Hc(m.sp)}:{}};t.duel=r.id,C2(),t9(In(H1)),ZC(r,!0),y2();let i=`\u0412\u044B\u0437\u043E\u0432 \u0432 \u0438\u0433\u0440\u0443 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${E7(r).toLowerCase()}.
\u0422\u0435\u043C\u044B: ${f2.map(H=>v3(m.topics[H])).join(", ")}.
\u041C\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ${q4(r.a,w0())}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C.`;j4("\u041A\u0443\u0431\u0438\u043A: \u0432\u044B\u0437\u043E\u0432",i,b3("ch",r)).then(r3)};H1.name?C(H1.name):_C("\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443").then(C)}function b0(){F2(),t5==="game"&&m&&m.phase!=="topics"?y5():t5==="menu"&&e5()}async function z8(C){let e=String(C||"").match(/[?&]startapp=([\w-]+)/);if(e&&(C=SC(e[1])),/#day\b/.test(String(C||""))&&!/#(ch|re)=/.test(String(C||"")))return vC(),!0;let t=String(C||"").match(/#(ch|re)=([\w-]{20,6000})/);if(!t)return!1;let r=gC(t[2]);return r?H3(r.raw.ap)>H3(i3)?(a2('<div class="m-title">\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B</div><div class="m-text"><p>\u0412\u044B\u0437\u043E\u0432 \u0441\u0434\u0435\u043B\u0430\u043D \u0432 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \xAB\u041A\u0443\u0431\u0438\u043A\u0430\xBB. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(b0),!0):(t[1]==="re"&&r.raw.b?Lp(r):await bC(r),!0):(a2('<div class="m-title">\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0430</div><div class="m-text"><p>\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0432\u044B\u0437\u043E\u0432. \u041F\u043E\u043F\u0440\u043E\u0441\u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C, \u0447\u0442\u043E \u043E\u043D\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0446\u0435\u043B\u0438\u043A\u043E\u043C.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(b0),!0)}function Lp(C){let e=ZC(C.raw,!!H1.name&&H1.name===C.raw.a.n),t=C.raw.b;e.me&&e.me.n===t.n&&e.me.p===t.p&&e.me.c===t.c||jV(e,t),y2(),A2("stage"),w3(e,e.mine?`\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0442\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432: ${e2(t.n)}`:null)}async function bC(C){let e=ee().find(a=>a.id===C.raw.id);if(e&&e.mine){let a=await a2(`<div class="m-title">\u042D\u0442\u043E \u0442\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432</div><div class="m-text"><p>${E7(C.raw)}. \u0421\u0441\u044B\u043B\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043A\u043E\u043C\u0443-\u043D\u0438\u0431\u0443\u0434\u044C, \u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u0434\u0440\u0443\u0437\u0435\u0439 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u043C\u0435\u043D\u044E \xAB\u0412\u044B\u0437\u043E\u0432\u044B\xBB.</p></div>`,[["view","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B","primary"],["play","\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443",""],["no","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]);a==="view"?w3(e):a==="play"?sp(C):b0();return}if(e&&e.me){w3(e);return}let t=n0(O7);if(t&&t.ch&&t.ch.raw.id===C.raw.id&&t.phase!=="result"){m=t,y5(),R2("\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u043C \u0432\u044B\u0437\u043E\u0432");return}let r=VC(C);if((r.miss||r.broken)&&(+C.raw.r||0)>a0(u2)&&await Vp()&&(r=VC(C)),r.broken){a2('<div class="m-title">\u0412\u044B\u0437\u043E\u0432 \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u043B\u0441\u044F</div><div class="m-text"><p>\u0412 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B \u043D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(b0);return}let i=6*C.raw.s*C.raw.s,H=C.raw.a,n=t&&t.ch&&t.phase!=="result"?`<p class="m-note">\u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 (${e2(t.ch.raw.a.n)}) \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u044D\u0442\u0438\u043C.</p>`:"",V=await a2(`<div class="m-title">${e2(H.n)} \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0435\u0431\u044F</div><div class="m-text">
    <p>${E7(C.raw)}. \u0422\u0435\u0431\u0435 \u0434\u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A.</p>
    ${op(C)}
    <p>\u041D\u0443\u0436\u043D\u043E \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C: <b>${e2(H.n)}</b> \u2014 ${q4(H,i)}.</p>
    ${r.miss?`<p class="m-note">\u0412 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B ${x3(r.miss)} ${_5(r.miss,"\u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F, \u043E\u043D \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u0434\u0440\u0443\u0433\u0438\u043C","\u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438","\u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438")} \u0442\u043E\u0439 \u0436\u0435 \u0442\u0435\u043C\u044B.</p>`:""}
    <p class="m-note">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C: \u043A\u0430\u0436\u0434\u0430\u044F \u0433\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u0442\u0435\u043C\u0430, \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441. \u0417\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0448\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041A\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043A\u043E\u043D\u0447\u0430\u0442\u0441\u044F, \u0441\u043E\u0431\u0435\u0440\u0438 \u044D\u0442\u0438\u043C\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u043C\u0438 \u043A\u0443\u0431\u0438\u043A: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</p>${n}</div>`,[["go","\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0432\u044B\u0437\u043E\u0432","primary"],["help","\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",""],["no","\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441","ghost"]]);if(V==="go")ra(C,r);else if(V==="help"){let a=t5;W8(()=>{t5==="train"&&(a==="game"&&m?y5():e5()),bC(C)})}else b0()}function sp(C){let e=VC(C);if(e.broken){R2("\u0412\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u043D\u0435\u0442 \u0432 \u0431\u0430\u0437\u0435");return}ra(C,e)}function ra(C,e){let t={...C.raw};delete t.b,m={v:1,ch:{raw:t,qs:e.qs,diff:e.miss},level:t.l,size:t.s,phase:"quiz",score:0,results:{},topics:Object.fromEntries(f2.map((r,i)=>[r,C.topics[i]])),timers:Object.fromEntries(f2.map((r,i)=>[r,C.timers[i]])),bq:{},scramble:np(t.m,t.s),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0,gifts:0,bombs:0,bestRun:0},ms:0,msOk:1,sp:C.sp||{},run:0};for(let r of Object.values(e.qs))for(let i of r){let H=O0(i);H&&(m.bq[i]={q:H.q,a:H.a.slice(),e:H.e})}C2(),y5()}function ia(){let C=m.results[m.level],e=m.ch.raw,t=ZC(e,!1),r=JV(H1.name||"",C);t.mine?jV(t,{...r,n:"\u0422\u044B, \u0435\u0449\u0451 \u0440\u0430\u0437"}):t.me=r,y2();let i=w0();a2(`<div class="m-title">${C.solved?"\u041A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043D":"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="verd">${ea(yC(t))}</div>${ta(t)}
    ${m.ch.diff?`<p class="m-note">\u0423 \u0442\u0435\u0431\u044F ${x3(m.ch.diff)} ${_5(m.ch.diff,"\u0431\u044B\u043B \u0434\u0440\u0443\u0433\u0438\u043C","\u0431\u044B\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438","\u0431\u044B\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438")}: \u0432 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B \u0438\u0445 \u043D\u0435\u0442.</p>`:""}
    <div class="m-text"><p>\u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0430\u0432\u0442\u043E\u0440\u0443 \u0432\u044B\u0437\u043E\u0432\u0430: \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0443 \u043D\u0435\u0433\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0442\u0430\u043A\u043E\u0435 \u0436\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435.</p></div>`,[["send",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(H=>{H==="send"&&!t.mine?Ha(t,i).then(()=>m&&m.ch?ia():null):H==="send"?w3(t):e5()})}function Ha(C,e){let t=r=>{if(!r)return null;let i=C.me;i.n=r,y2();let H=C.raw.a,n=`\xAB\u041A\u0443\u0431\u0438\u043A\xBB, \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432: ${E7(C.raw).toLowerCase()}.
${i.n}: ${q4(i,e)}.
${H.n}: ${q4(H,e)}.
\u041E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443, \u0442\u0430\u043C \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435:`;return j4("\u041A\u0443\u0431\u0438\u043A: \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432",n,b3("re",{...C.raw,b:i}))};return H1.name?t(H1.name):_C("\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432").then(t)}function w3(C,e){let t=6*C.raw.s*C.raw.s,r=C.me,i=C.raw.a,H=e||(C.mine?"\u0422\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432":`\u0412\u044B\u0437\u043E\u0432 \xB7 ${e2(i.n)}`),n=[];C.mine?n.push(["resend",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \u0435\u0449\u0451 \u0440\u0430\u0437","primary"]):r?n.push(["send",h1(l1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","primary"]):n.push(["play","\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0432\u044B\u0437\u043E\u0432","primary"]),n.push(["list","\u0412\u0441\u0435 \u0432\u044B\u0437\u043E\u0432\u044B",""],["close","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]),a2(`<div class="m-title">${H}</div><p class="m-sub">${E7(C.raw)} \xB7 ${C.at.split("-").reverse().join(".")}</p>
    <div class="verd">${ea(yC(C))}</div>${ta(C)}
    ${C.mine&&!C.others.length?'<div class="m-text"><p>\u041A\u043E\u0433\u0434\u0430 \u0434\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u0435\u0442, \u043E\u043D \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C. \u041E\u0442\u043A\u0440\u043E\u0439 \u0435\u0451, \u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C.</p></div>':""}`,n).then(V=>{if(V==="resend"){let a=`\u0412\u044B\u0437\u043E\u0432 \u0432 \u0438\u0433\u0440\u0443 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${E7(C.raw).toLowerCase()}.
\u0422\u0435\u043C\u044B: ${String(C.raw.t).split(",").map(v3).join(", ")}.
\u041C\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ${q4(i,t)}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C.`;j4("\u041A\u0443\u0431\u0438\u043A: \u0432\u044B\u0437\u043E\u0432",a,b3("ch",C.raw)).then(()=>w3(C,e))}else if(V==="send")Ha(C,t).then(()=>w3(C,e));else if(V==="play"){let a=gC(xC(JSON.stringify(C.raw)));a&&bC(a)}else V==="list"?te():b0()})}function te(){let C=ee(),e=C.map((t,r)=>{let i=t.raw.a,H=t.me,n=t.others,V=t.mine?`\u0422\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432 \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.raw.l} \xB7 ${U5[t.raw.s].name}`:`\u0412\u044B\u0437\u043E\u0432 \xB7 ${e2(i.n)} \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.raw.l} \xB7 ${U5[t.raw.s].name}`,a=t.mine?n.length?`\u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438: ${n.map(o=>`${e2(o.n)} (${o.p})`).join(", ")}`:"\u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B":H?`\u0442\u044B ${H.p}, ${e2(i.n)} ${i.p}`:"\u0435\u0449\u0451 \u043D\u0435 \u0441\u044B\u0433\u0440\u0430\u043D\u043E";return`<button class="dl" data-b="d${r}"><b>${V}</b><small>${t.at.split("-").reverse().join(".")} \xB7 ${a}</small></button>`}).reverse().join("");a2(`<div class="m-title">\u0412\u044B\u0437\u043E\u0432\u044B</div><div class="m-text">
    ${e||"<p>\u0412\u044B\u0437\u043E\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0421\u044B\u0433\u0440\u0430\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \xAB\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443\xBB \u0432 \u0438\u0442\u043E\u0433\u0430\u0445.</p>"}
    <label class="fl dlink"><span>\u0414\u0440\u0443\u0433 \u043F\u0440\u0438\u0441\u043B\u0430\u043B \u0441\u0441\u044B\u043B\u043A\u0443, \u0430 \u043E\u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u043B\u0430\u0441\u044C \u043D\u0435 \u0432 \u0438\u0433\u0440\u0435? \u0412\u0441\u0442\u0430\u0432\u044C \u0435\u0451 \u0441\u044E\u0434\u0430.</span>
    <textarea id="dl-link" rows="2" placeholder="\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432 \u0438\u043B\u0438 \u043E\u0442\u0432\u0435\u0442"></textarea></label></div>`,[["open",h1(l1.paste)+"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",""],["close","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(async t=>{if(t==="open"){let r=$("#dl-link").value;await z8(r)||(R2("\u0412 \u0442\u0435\u043A\u0441\u0442\u0435 \u043D\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432"),te())}else t&&t[0]==="d"&&C[+t.slice(1)]?w3(C[+t.slice(1)]):b0()})}var G8=null;function a2(C,e){$("#mcard").innerHTML=C+`<div class="m-btns">${e.map(([r,i,H])=>`<button class="btn ${H||""}" data-b="${r}">${i}</button>`).join("")}</div>`;let t=$("#modal");return t.hidden=!1,t.classList.add("center"),$("#mcard").scrollTop=0,new Promise(r=>{G8=r})}function F2(){$("#modal").hidden=!0,G8=null}function e9(){_7(),$("#sheet").hidden=!0}var R8,X4=[];function R2(C){let e=$("#toast");e.textContent=C,e.classList.add("on"),clearTimeout(R8),R8=setTimeout(()=>{e.classList.remove("on"),R8=0,X4.length&&setTimeout(na,400)},2400)}function na(){!R8&&X4.length&&R2(X4.shift())}function t9(C){for(let e of C||[])X4.push(`\u041D\u043E\u0432\u044B\u0439 \u0437\u043D\u0430\u0447\u043E\u043A: \xAB${x8[e].name}\xBB`);na()}function Mp(){return`<div class="m-title">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</div><div class="help">
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
  <li>\u0412 \u0442\u0435\u043C\u0430\u0445 \xAB\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C\xBB, \xAB\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u0438\xBB, \xAB\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430\xBB \u0438 \xAB\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F\xBB \u0447\u0430\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0441 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\u043C\u0438: \u0443\u0433\u0430\u0434\u0430\u0439 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A\u0430, \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043D\u0430 \u043F\u043E\u0440\u0442\u0440\u0435\u0442\u0435, \u0437\u0434\u0430\u043D\u0438\u0435, \u0444\u043B\u0430\u0433 \u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0443 \u043F\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0443. \u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0451 \u043A\u0440\u0443\u043F\u043D\u043E. \u0422\u0430\u0439\u043C\u0435\u0440 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0430\u0441\u044C. \u0410\u0432\u0442\u043E\u0440 \u0441\u043D\u0438\u043C\u043A\u0430 \u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u043E\u043C.</li>
  <li>\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \xAB50 \u043D\u0430 50\xBB \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0432\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u0437\u0430 ${m5(f3)}, \xAB\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C\xBB \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043B\u0435\u0442\u043A\u0443 \u0431\u0435\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 \u0437\u0430 ${m5(C3)}. \u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0434\u0430\u0451\u0442 \u043D\u0438 \u043E\u0447\u043A\u043E\u0432, \u043D\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0438 \u0434\u043B\u044F \u0437\u0432\u0451\u0437\u0434 \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u043D\u044B\u043C. \u041D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043C\u0435\u043D\u044C\u0448\u0435.</li>
  <li>\u041F\u043E\u0441\u043B\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \xAB\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443\xBB. \u0414\u0440\u0443\u0433 \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0438 \u0441\u044B\u0433\u0440\u0430\u0435\u0442 \u0442\u043E\u0442 \u0436\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u0442\u0435 \u0436\u0435 \u0442\u0435\u043C\u044B, \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A. \u0412 \u043A\u043E\u043D\u0446\u0435 \u043E\u0431\u0430 \u0432\u0438\u0434\u044F\u0442 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435: \u043E\u0447\u043A\u0438, \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B, \u0441\u0431\u043E\u0440\u043A\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F. \u0421\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0440\u0443\u0433 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u0441\u0441\u044B\u043B\u043A\u043E\u0439. \u0412\u0441\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u2014 \u0432 \u043C\u0435\u043D\u044E \xAB\u0412\u044B\u0437\u043E\u0432\u044B\xBB.</li>
  <li>\u041D\u0430\u0448\u0451\u043B \u043E\u0448\u0438\u0431\u043A\u0443 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435 \u2014 \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?\xBB \u043F\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u043E\u043C. \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F, \u0430 \u0436\u0430\u043B\u043E\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B.</li>
  <li>\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043C\u043E\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0430\u0439\u043C\u0435\u0440: \u043E\u0442 10 \u0434\u043E 90 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442. \u041D\u0435 \u0443\u0441\u043F\u0435\u043B \u2014 \u043E\u0442\u0432\u0435\u0442 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D \u043A\u0430\u043A \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439. \u0412\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443.</li></ul>
  <h3>\u041E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438 \u0438 \u0441\u0435\u0440\u0438\u0438</h3><ul>
  <li>\u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u043D\u044B \u0434\u0432\u0435 \u043E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438, \u043D\u0430 2\xD72 \u2014 \u043E\u0434\u043D\u0430. \u041A\u0430\u043A\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u043E\u0441\u043E\u0431\u0430\u044F, \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F.</li>
  <li><b>x2</b> \u2014 \u043E\u0447\u043A\u0438 \u0437\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F.</li>
  <li><b>\u0411\u043B\u0438\u0446</b> \u2014 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 ${P8} \u0441\u0435\u043A\u0443\u043D\u0434, \u0437\u0430\u0442\u043E \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 2 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.</li>
  <li><b>\u041F\u043E\u0434\u0430\u0440\u043E\u043A</b> \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430.</li>
  <li><b>\u0411\u043E\u043C\u0431\u0430</b> \u2014 \u043E\u0448\u0438\u0431\u0451\u0448\u044C\u0441\u044F \u0438\u043B\u0438 \u043D\u0435 \u0443\u0441\u043F\u0435\u0435\u0448\u044C, \u0438 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0448\u044C \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u0412\u043E\u043F\u0440\u043E\u0441-\u0431\u043E\u043C\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0437\u0430 ${m5(C3)}.</li>
  <li>\u0421\u0435\u0440\u0438\u044F: \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u0434\u0440\u044F\u0434. \u0421 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043F\u043E\u0434\u0440\u044F\u0434 \u043E\u0447\u043A\u0438 \xD71,5, \u0441 \u043F\u044F\u0442\u043E\u0433\u043E \xD72. \u041E\u0448\u0438\u0431\u0441\u044F \u0438\u043B\u0438 \u043D\u0435 \u0443\u0441\u043F\u0435\u043B \u2014 \u0441\u0435\u0440\u0438\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043D\u043E\u0432\u043E. \u041F\u0440\u043E\u043F\u0443\u0441\u043A \u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0441\u0435\u0440\u0438\u044E \u043D\u0435 \u043F\u0440\u0435\u0440\u044B\u0432\u0430\u044E\u0442.</li>
  <li>\u0412 \u0432\u044B\u0437\u043E\u0432\u0435 \u0443 \u0434\u0440\u0443\u0433\u0430 \u0442\u0435 \u0436\u0435 \u043E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438 \u043D\u0430 \u0442\u0435\u0445 \u0436\u0435 \u043C\u0435\u0441\u0442\u0430\u0445.</li></ul>
  <h3>\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F</h3><ul>
  <li>\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0432 \u043C\u0435\u043D\u044E \u043D\u043E\u0432\u044B\u0439 \xAB\u041A\u0443\u0431\u0438\u043A \u0434\u043D\u044F\xBB: \u043A\u0443\u0431\u0438\u043A 2\xD72, \u043E\u0434\u043D\u0430 \u0438 \u0442\u0430 \u0436\u0435 \u043F\u0430\u0440\u0442\u0438\u044F \u0443 \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u0438\u0433\u0440\u0430\u0435\u0442. \u0422\u0435 \u0436\u0435 \u0442\u0435\u043C\u044B, \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u043E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438.</li>
  <li>\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0434\u043D\u044F \u043D\u0435\u0434\u0435\u043B\u0438: \u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A \u0438 \u0432\u0442\u043E\u0440\u043D\u0438\u043A \u2014 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439, \u0441\u043E \u0441\u0440\u0435\u0434\u044B \u043F\u043E \u043F\u044F\u0442\u043D\u0438\u0446\u0443 \u2014 \u0441\u0440\u0435\u0434\u043D\u0438\u0439, \u0441\u0443\u0431\u0431\u043E\u0442\u0430 \u0438 \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435 \u2014 \u0432\u044B\u0441\u043E\u043A\u0438\u0439.</li>
  <li>\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u043E\u0434\u0438\u043D \u0440\u0430\u0437. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0440\u0443\u0437\u044C\u044F\u043C \u0441\u0435\u0442\u043A\u043E\u0439 \u0446\u0432\u0435\u0442\u043D\u044B\u0445 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043E\u0432, \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0434\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u0435\u0442 \u0442\u043E\u0442 \u0436\u0435 \u043A\u0443\u0431\u0438\u043A.</li>
  <li>\u0418\u0433\u0440\u0430\u0435\u0448\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u2014 \u0440\u0430\u0441\u0442\u0451\u0442 \u0441\u0435\u0440\u0438\u044F \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434. \u0417\u0430 \u043D\u0435\u0434\u0435\u043B\u044E \u043F\u043E\u0434\u0440\u044F\u0434 \u0434\u0430\u0451\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u043E\u043A.</li></ul>
  <h3>\u0421\u0431\u043E\u0440\u043A\u0430</h3><ul>
  <li>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D. \u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438, \u0435\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</li>
  <li>\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</li>
  <li>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0437\u0430 ${_0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</li>
  <li>\u041A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u2014 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C\u0438, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0417\u0430 \u0442\u0430\u043A\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.</li>
  <li>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E. \u041A\u043D\u043E\u043F\u043A\u0430 \xAB\u0412\u0438\u0434\xBB \u0441\u0442\u0430\u0432\u0438\u0442 \u0435\u0433\u043E \u0440\u043E\u0432\u043D\u043E.</li>
  <li>\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u043B \u043A\u0443\u0431\u0438\u043A? \u041D\u0430\u0436\u043C\u0438 \xAB\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438\xBB \u0432\u043D\u0438\u0437\u0443 \u044D\u0442\u043E\u0433\u043E \u043E\u043A\u043D\u0430: \u0442\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439, \u043A\u0443\u0434\u0430 \u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043D\u0430 \u043D\u0438\u0445 \u043D\u0435 \u0442\u0440\u0430\u0442\u044F\u0442\u0441\u044F.</li></ul>
  <h3>\u041E\u0447\u043A\u0438</h3><ul>
  <li>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: 10, 20 \u0438\u043B\u0438 30 \u043E\u0447\u043A\u043E\u0432 \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044E. \u0421\u0435\u0440\u0438\u044F \u0438 \u043A\u043B\u0435\u0442\u043A\u0430 x2 \u0438\u0445 \u0443\u043C\u043D\u043E\u0436\u0430\u044E\u0442: \u0432 \u043B\u0443\u0447\u0448\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \xD74.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A 3\xD73: 100, 200 \u0438\u043B\u0438 300 \u043E\u0447\u043A\u043E\u0432 \u0438 \u0435\u0449\u0451 \u043F\u043E 5, 10 \u0438\u043B\u0438 15 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041D\u0430 2\xD72 \u0431\u043E\u043D\u0443\u0441 50, 100 \u0438\u043B\u0438 150.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C: 50, 100 \u0438\u043B\u0438 150 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432, \u043D\u0430 2\xD72 \u2014 25, 50 \u0438\u043B\u0438 75.</li>
  <li>\u0417\u0432\u0451\u0437\u0434\u044B: \u043E\u0434\u043D\u0430 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A, \u0434\u0432\u0435, \u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0438 70% \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 (38 \u0438\u0437 54 \u0438\u043B\u0438 17 \u0438\u0437 24), \u0442\u0440\u0438 \u2014 \u043F\u0440\u0438 90% (49 \u0438\u0437 54 \u0438\u043B\u0438 22 \u0438\u0437 24). \u041A\u043B\u0435\u0442\u043A\u0438-\u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0432 \u0441\u0447\u0451\u0442 \u043D\u0435 \u0438\u0434\u0443\u0442: \u0437\u0432\u0451\u0437\u0434\u044B \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u0442 \u0447\u0438\u0441\u043B\u0430 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.</li>
  <li>\u0420\u0435\u043A\u043E\u0440\u0434\u044B \u0434\u043B\u044F 3\xD73 \u0438 2\xD72 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.</li></ul>
  <h3>\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F</h3><ul>
  <li>\u0417\u0432\u0451\u0437\u0434\u044B \u0437\u0430 \u0432\u0441\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u043A\u043E\u043F\u044F\u0442\u0441\u044F. \u0417\u0430 3, 6, 12, 20 \u0438 30 \u0437\u0432\u0451\u0437\u0434 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u043E\u0432\u044B\u0435 \u0432\u0438\u0434\u044B \u043A\u0443\u0431\u0438\u043A\u0430: \u0434\u0435\u0440\u0435\u0432\u043E, \u043D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0438\u0439 \u0441\u043E \u0441\u043D\u0435\u0433\u043E\u043C \u043D\u0430 \u0444\u043E\u043D\u0435, \u043C\u0440\u0430\u043C\u043E\u0440, \u043D\u0435\u043E\u043D \u0438 \u0437\u043E\u043B\u043E\u0442\u043E. \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0438\u0434: \u043C\u0435\u043D\u044E, \xAB\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\xBB, \xAB\u0412\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430\xBB. \u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0438\u0434 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0438\u0442\u044C.</li>
  <li>\u0417\u043D\u0430\u0447\u043A\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E: \u0433\u0440\u0430\u043D\u044C \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A, \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u0435\u0434\u0438\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438, \u0441\u0431\u043E\u0440\u043A\u0443 \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A, 10 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434, \u043D\u0435\u0434\u0435\u043B\u044E \u0438\u0433\u0440\u044B \u043F\u043E\u0434\u0440\u044F\u0434 \u0438 \u0434\u0440\u0443\u0433\u043E\u0435. \u0412\u0441\u0435\u0433\u043E \u0438\u0445 ${v0.length}.</li>
  <li>\u0412 \xAB\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0435\xBB \u0432\u0438\u0434\u043D\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u0435, \u043A\u0430\u043A\u0430\u044F \u0442\u0435\u043C\u0430 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0438 \u043A\u0430\u043A\u0430\u044F \u0442\u0440\u0443\u0434\u043D\u0435\u0435.</li></ul>
  <p>\u0418\u0433\u0440\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430, \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F.</p></div>`}function W8(C){a2(Mp(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"],["train","\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438",""]]).then(e=>{F2(),e==="train"?pC(C):C()})}function lp(){$("#m-tg").onclick=()=>{j1.link&&(location.href=j1.link)},document.addEventListener("pointerdown",T4,{capture:!0});for(let e of document.querySelectorAll('[data-go="menu"]'))e.innerHTML=h1(l1.back);$("#g-home").innerHTML=h1(l1.home),$("#my-back").innerHTML=h1(l1.back),$("#m-my").innerHTML=h1(l1.my)+"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",$("#g-help").innerHTML=h1(l1.help),$("#tr-back").innerHTML=h1(l1.back),$("#stage").insertAdjacentHTML("beforeend",'<svg id="guide" aria-hidden="true"><path id="g-line" fill="none" stroke="#1d2230" stroke-linecap="round"/><path id="g-head" fill="#ffd21f" stroke="#1d2230" stroke-width="2.5" stroke-linejoin="round"/><path id="g-line2" fill="none" stroke="#ffd21f" stroke-linecap="round"/><circle id="g-finger" fill="#ffffff" stroke="#1d2230" stroke-width="2"/></svg>'),document.querySelectorAll('[data-go="menu"]').forEach(e=>e.addEventListener("click",e5)),$("#m-new").addEventListener("click",()=>{m?a2('<div class="m-title">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430?</div><div class="m-text"><p>\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.</p></div>',[["yes","\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{F2(),e==="yes"&&(m=null,C2(),w8())}):w8()}),$("#m-continue").addEventListener("click",()=>{m&&(m.phase==="topics"?y0():y5())}),$("#m-help").addEventListener("click",()=>W8(e5)),$("#m-ach").addEventListener("click",()=>jn("stats"));for(let e of["#ach-tabs","#sk-tabs"])$(e).addEventListener("click",t=>{let r=t.target.closest("[data-tab]");r&&jn(r.dataset.tab)});$("#sk-list").addEventListener("click",e=>{let t=e.target.closest("[data-skin]");t&&Ec(t.dataset.skin)}),$("#g-help").addEventListener("click",()=>{let e=m&&m.phase==="result";W8(()=>{t5==="game"?e&&r3():y5()})}),$("#tr-back").addEventListener("click",AC),$("#tr-foot").addEventListener("click",e=>{let t=e.target.closest(".tool");!t||t.disabled||(t.id==="tr-undo"?Zc():t.id==="tr-hint"?PV():t.id==="tr-view"?V1.rotateTo(V1.baseView):t.id==="tr-again"&&F8(R1.step))}),$("#m-sound").addEventListener("click",()=>{e3.on=!e3.on,H1.sound=e3.on,y2(),e5()}),$("#g-home").addEventListener("click",e5),$("#m-update").addEventListener("click",mV),$("#m-reports").addEventListener("click",Gc),$("#m-duels").addEventListener("click",te),$("#m-day").addEventListener("click",vC),$("#m-chal").addEventListener("click",()=>{let e=y7(n0(O7));e&&e.ch&&(m=e,y5())}),$("#lv-size").addEventListener("click",e=>{let t=e.target.closest("[data-size]");if(t){H1.size=+t.dataset.size,y2(),V1.setSize(H1.size),V1.reset();for(let r of V1.stickers)V1.setLook(r,"color");A2("tap"),w8()}}),$("#lv-list").addEventListener("click",e=>{let t=e.target.closest("[data-lv]");t&&cc(+t.dataset.lv)}),$("#tp-list").addEventListener("change",e=>{let t=e.target.closest("select");if(!t)return;if(t.id==="tp-time"||t.dataset.tface){m.timers||(m.timers=sC());let V=+t.value;t.id==="tp-time"?f2.forEach(a=>{m.timers[a]=V}):m.timers[t.dataset.tface]=V,H1.timers={...m.timers},y2(),C2(),y0();return}let r=t.dataset.face,i=t.value,H=m.topics[r],n=f2.find(V=>V!==r&&m.topics[V]===i);n&&(m.topics[n]=H),m.topics[r]=i,C2(),y0()}),$("#tp-rand").addEventListener("click",()=>{m.topics=Y4(m.level,null),C2(),y0()}),$("#tp-go").addEventListener("click",pc),$("#m-my").addEventListener("click",()=>W4("menu")),$("#tp-list").addEventListener("click",e=>{e.target.closest("#tp-my")&&(e.preventDefault(),W4("topics"))}),$("#my-back").addEventListener("click",Pc),$("#my-add").addEventListener("click",()=>eV(0)),$("#my-list").addEventListener("click",e=>{let t=e.target.closest("[data-id]");t&&eV(+t.dataset.id)}),$("#my-save").addEventListener("click",Fc),$("#my-load").addEventListener("click",()=>{$("#my-file").value="",$("#my-file").click()}),$("#my-file").addEventListener("change",e=>kc(e.target.files[0])),$("#ecard").addEventListener("click",e=>{let t=e.target.closest("[data-elv]");if(t){D8=+t.dataset.elv,$("#ecard").querySelectorAll("[data-elv]").forEach(r=>r.classList.toggle("on",r===t));return}e.target.closest("#e-ok")?Bc():e.target.closest("#e-del")?Ic():e.target.closest("#e-cancel")&&j8()}),$("#g-foot").addEventListener("click",e=>{let t=e.target.closest(".chip");if(t){V1.showFace(t.dataset.face);return}let r=e.target.closest(".tool");!r||r.disabled||(r.id==="t-undo"?wV():r.id==="t-hint"?TV():r.id==="t-free"?a2(`<div class="m-title">\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443?</div><div class="m-text"><p>${cC()}</p></div>`,[["yes","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(i=>{F2(),i==="yes"&&J8()}):r.id==="t-view"?V1.rotateTo(V1.baseView):r.id==="t-end"&&a2('<div class="m-title">\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C?</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F. \u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.</p></div>',[["yes","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C","primary"],["no","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435","ghost"]]).then(i=>{F2(),i==="yes"&&Q4(!1)}))}),$("#qcard").addEventListener("click",e=>{let t=e.target.closest(".ans button");if(t&&!t.disabled){MC(+t.dataset.i);return}if(e.target.closest("#q-next")){lC();return}if(e.target.closest("#q-cut")){xc();return}if(e.target.closest("#q-skip")){Sc();return}let r=e.target.closest("#q-rep");if(r){Nc(r.dataset.qid);return}let i=e.target.closest("[data-rr]");if(i){N8=i.dataset.rr,$("#rep-err").textContent="",$(".rep-r").querySelectorAll("button").forEach(H=>H.classList.toggle("on",H===i));return}e.target.closest("#rep-send")?Uc():e.target.closest("#rep-cancel")&&zc()}),$("#mcard").addEventListener("click",e=>{let t=e.target.closest("[data-b]");if(!t||!G8)return;let r=G8;F2(),r(t.dataset.b)}),window.addEventListener("resize",()=>requestAnimationFrame(b8));let C=new ResizeObserver(()=>requestAnimationFrame(b8));document.querySelectorAll(".cube-slot").forEach(e=>C.observe(e)),window.addEventListener("orientationchange",()=>setTimeout(b8,300))}async function dp(){V1=new s8($("#stage")),V1.onTap=vV,V1.onSwipe=bV,GV(),lp(),await Promise.all([dc(),vn()]),xn().then(()=>{t5==="menu"&&$("#modal").hidden&&KV()}),m&&(m.v!==1||!h5[m.level])&&(m=null,C2()),e5();let C=location.hash;/^#((ch|re)=|day\b)/.test(C)&&history.replaceState(null,"",location.pathname+location.search),j1.on&&j1.start&&sessionStorage.getItem("kubik.tgstart")!==j1.start&&(sessionStorage.setItem("kubik.tgstart",j1.start),C=SC(j1.start));let e=await z8(C);H1.helped||(H1.helped=1,y2(),e||W8(e5)),window.addEventListener("hashchange",()=>{let i=location.hash;/^#((ch|re)=|day\b)/.test(i)&&(history.replaceState(null,"",location.pathname+location.search),e9(),z8(i))});let t=Date.now(),r=0;setInterval(()=>{let i=Date.now(),H=Math.min(i-t,1500);t=i,m&&t5==="game"&&document.visibilityState==="visible"&&(m.phase==="quiz"||m.phase==="solve")&&(m.ms=(m.ms||0)+H,++r%10===0&&C2())},1e3),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}window.__kubik={TG:j1,gameLink:b3,startToHash:SC,get CARD(){return g7},PIC:H0,getQ:O0,get T(){return R1},startTrain:pC,trainHint:uC,trainSwipe:RV,trainHintMove:PV,leaveTrain:AC,solveIntro:yV,get S(){return m},get META(){return H1},reportText:hC,pickQuestions:sV,get cube(){return V1},get BANK(){return u2},updateBank:mV,switchBank:oC,onTap:vV,answer:MC,afterAnswer:lC,hint:TV,undo:wV,hintMove:hV,finishLevel:Q4,toSolve:dC,onSwipe:bV,startFree:J8,makeDuel:Ca,openLink:z8,showDuels:te,readDuel:gC,get KEY_CHAL(){return O7},makeDay:XV,openDay:vC,dayStreak:T0,get KEY_DAY(){return K4}};dp();
