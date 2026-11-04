var AC=0,Q8=1,mC=2;var $7=1,hC=2,z3=3,T0=0,t5=1,k5=2,D5=0,G3=1,K8=2,J8=3,j8=4,fC=5;var Y0=100,xC=101,vC=102,SC=103,gC=104,ZC=200,yC=201,_C=202,bC=203,ee=204,te=205,TC=206,wC=207,OC=208,EC=209,RC=210,PC=211,BC=212,IC=213,FC=214,q4=0,X4=1,Y4=2,_3=3,Q4=4,K4=5,J4=6,j4=7,Ce=0,kC=1,DC=2,_5=0,ie=1,re=2,He=3,Ve=4,ne=5,Le=6,ae=7;var oe=300,w0=301,Q0=302,w9=303,O9=304,q7=306,e9=1e3,B5=1001,t9=1002,I2=1003,NC=1004;var X7=1005;var D2=1006,E9=1007;var O0=1008;var r5=1009,se=1010,Me=1011,W3=1012,R9=1013,b5=1014,T5=1015,w5=1016,P9=1017,B9=1018,$3=1020,le=35902,de=35899,ce=1021,pe=1022,A5=1023,I5=1026,E0=1027,ue=1028,I9=1029,R0=1030,F9=1031;var k9=1033,Y7=33776,Q7=33777,K7=33778,J7=33779,D9=35840,N9=35841,U9=35842,z9=35843,G9=36196,W9=37492,$9=37496,q9=37488,X9=37489,j7=37490,Y9=37491,Q9=37808,K9=37809,J9=37810,j9=37811,e6=37812,t6=37813,C6=37814,i6=37815,r6=37816,H6=37817,V6=37818,n6=37819,L6=37820,a6=37821,o6=36492,s6=36494,M6=36495,l6=36283,d6=36284,e4=36285,c6=36286;var A7=2300,C9=2301,W4=2302,k8=2303,D8=2400,N8=2401,U8=2402;var UC=3200;var p6=0,zC=1,t0="",W2="srgb",m7="srgb-linear",h7="linear",r2="srgb";var $4=7680;var GC=519,WC=512,$C=513,qC=514,u6=515,XC=516,YC=517,A6=518,QC=519,KC=35044;var Ae="300 es",g5=2e3,b3=2001;function EV(C){for(let e=C.length-1;e>=0;--e)if(C[e]>=65535)return!0;return!1}function RV(C){return ArrayBuffer.isView(C)&&!(C instanceof DataView)}function f7(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function JC(){let C=f7("canvas");return C.style.display="block",C}var Nt={},T3=null;function me(...C){let e="THREE."+C.shift();T3?T3("log",e,...C):console.log(e,...C)}function jC(C){let e=C[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=C[1];t&&t.isStackTrace?C[0]+=" "+t.getLocation():C[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return C}function B1(...C){C=jC(C);let e="THREE."+C.shift();if(T3)T3("warn",e,...C);else{let t=C[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...C)}}function I1(...C){C=jC(C);let e="THREE."+C.shift();if(T3)T3("error",e,...C);else{let t=C[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...C)}}function q0(...C){let e=C.join(" ");e in Nt||(Nt[e]=!0,B1(...C))}function ei(C,e,t){return new Promise(function(i,r){function H(){switch(C.clientWaitSync(e,C.SYNC_FLUSH_COMMANDS_BIT,0)){case C.WAIT_FAILED:r();break;case C.TIMEOUT_EXPIRED:setTimeout(H,t);break;default:i()}}setTimeout(H,t)})}var ti={[q4]:X4,[Y4]:J4,[Q4]:j4,[_3]:K4,[X4]:q4,[J4]:Y4,[j4]:Q4,[K4]:_3},F5=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let H=r.indexOf(t);H!==-1&&r.splice(H,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let H=0,V=r.length;H<V;H++)r[H].call(this,e);e.target=null}}},z2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ut=1234567,d7=Math.PI/180,w3=180/Math.PI;function K0(){let C=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(z2[C&255]+z2[C>>8&255]+z2[C>>16&255]+z2[C>>24&255]+"-"+z2[e&255]+z2[e>>8&255]+"-"+z2[e>>16&15|64]+z2[e>>24&255]+"-"+z2[t&63|128]+z2[t>>8&255]+"-"+z2[t>>16&255]+z2[t>>24&255]+z2[i&255]+z2[i>>8&255]+z2[i>>16&255]+z2[i>>24&255]).toLowerCase()}function W1(C,e,t){return Math.max(e,Math.min(t,C))}function he(C,e){return(C%e+e)%e}function PV(C,e,t,i,r){return i+(C-e)*(r-i)/(t-e)}function BV(C,e,t){return C!==e?(t-C)/(e-C):0}function c7(C,e,t){return(1-t)*C+t*e}function IV(C,e,t,i){return c7(C,e,1-Math.exp(-t*i))}function FV(C,e=1){return e-Math.abs(he(C,e*2)-e)}function kV(C,e,t){return C<=e?0:C>=t?1:(C=(C-e)/(t-e),C*C*(3-2*C))}function DV(C,e,t){return C<=e?0:C>=t?1:(C=(C-e)/(t-e),C*C*C*(C*(C*6-15)+10))}function NV(C,e){return C+Math.floor(Math.random()*(e-C+1))}function UV(C,e){return C+Math.random()*(e-C)}function zV(C){return C*(.5-Math.random())}function GV(C){C!==void 0&&(Ut=C);let e=Ut+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WV(C){return C*d7}function $V(C){return C*w3}function qV(C){return C>0&&Number.isInteger(C)&&2**Math.round(Math.log2(C))===C}function XV(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function YV(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function QV(C,e,t,i,r){let H=Math.cos,V=Math.sin,n=H(t/2),L=V(t/2),a=H((e+i)/2),o=V((e+i)/2),M=H((e-i)/2),s=V((e-i)/2),l=H((i-e)/2),u=V((i-e)/2);switch(r){case"XYX":C.set(n*o,L*M,L*s,n*a);break;case"YZY":C.set(L*s,n*o,L*M,n*a);break;case"ZXZ":C.set(L*M,L*s,n*o,n*a);break;case"XZX":C.set(n*o,L*u,L*l,n*a);break;case"YXY":C.set(L*l,n*o,L*u,n*a);break;case"ZYZ":C.set(L*u,L*l,n*o,n*a);break;default:B1("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function g3(C,e){switch(e.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:case Uint8ClampedArray:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Q2(C,e){switch(e.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fe={DEG2RAD:d7,RAD2DEG:w3,generateUUID:K0,clamp:W1,euclideanModulo:he,mapLinear:PV,inverseLerp:BV,lerp:c7,damp:IV,pingpong:FV,smoothstep:kV,smootherstep:DV,randInt:NV,randFloat:UV,randFloatSpread:zV,seededRandom:GV,degToRad:WV,radToDeg:$V,isPowerOfTwo:qV,ceilPowerOfTwo:XV,floorPowerOfTwo:YV,setQuaternionFromProperEuler:QV,normalize:Q2,denormalize:g3},ye=class ye{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W1(this.x,e.x,t.x),this.y=W1(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W1(this.x,e,t),this.y=W1(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(W1(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(W1(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),H=this.x-e.x,V=this.y-e.y;return this.x=H*i-V*r+e.x,this.y=H*r+V*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ye.prototype.isVector2=!0;var f1=ye,S2=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,H,V,n){let L=i[r+0],a=i[r+1],o=i[r+2],M=i[r+3],s=H[V+0],l=H[V+1],u=H[V+2],x=H[V+3];if(M!==x||L!==s||a!==l||o!==u){let c=L*s+a*l+o*u+M*x;c<0&&(s=-s,l=-l,u=-u,x=-x,c=-c);let d=1-n;if(c<.9995){let v=Math.acos(c),_=Math.sin(v);d=Math.sin(d*v)/_,n=Math.sin(n*v)/_,L=L*d+s*n,a=a*d+l*n,o=o*d+u*n,M=M*d+x*n}else{L=L*d+s*n,a=a*d+l*n,o=o*d+u*n,M=M*d+x*n;let v=1/Math.sqrt(L*L+a*a+o*o+M*M);L*=v,a*=v,o*=v,M*=v}}e[t]=L,e[t+1]=a,e[t+2]=o,e[t+3]=M}static multiplyQuaternionsFlat(e,t,i,r,H,V){let n=i[r],L=i[r+1],a=i[r+2],o=i[r+3],M=H[V],s=H[V+1],l=H[V+2],u=H[V+3];return e[t]=n*u+o*M+L*l-a*s,e[t+1]=L*u+o*s+a*M-n*l,e[t+2]=a*u+o*l+n*s-L*M,e[t+3]=o*u-n*M-L*s-a*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,H=e._z,V=e._order,n=Math.cos,L=Math.sin,a=n(i/2),o=n(r/2),M=n(H/2),s=L(i/2),l=L(r/2),u=L(H/2);switch(V){case"XYZ":this._x=s*o*M+a*l*u,this._y=a*l*M-s*o*u,this._z=a*o*u+s*l*M,this._w=a*o*M-s*l*u;break;case"YXZ":this._x=s*o*M+a*l*u,this._y=a*l*M-s*o*u,this._z=a*o*u-s*l*M,this._w=a*o*M+s*l*u;break;case"ZXY":this._x=s*o*M-a*l*u,this._y=a*l*M+s*o*u,this._z=a*o*u+s*l*M,this._w=a*o*M-s*l*u;break;case"ZYX":this._x=s*o*M-a*l*u,this._y=a*l*M+s*o*u,this._z=a*o*u-s*l*M,this._w=a*o*M+s*l*u;break;case"YZX":this._x=s*o*M+a*l*u,this._y=a*l*M+s*o*u,this._z=a*o*u-s*l*M,this._w=a*o*M-s*l*u;break;case"XZY":this._x=s*o*M-a*l*u,this._y=a*l*M-s*o*u,this._z=a*o*u+s*l*M,this._w=a*o*M+s*l*u;break;default:B1("Quaternion: .setFromEuler() encountered an unknown order: "+V)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],H=t[8],V=t[1],n=t[5],L=t[9],a=t[2],o=t[6],M=t[10],s=i+n+M;if(s>0){let l=.5/Math.sqrt(s+1);this._w=.25/l,this._x=(o-L)*l,this._y=(H-a)*l,this._z=(V-r)*l}else if(i>n&&i>M){let l=2*Math.sqrt(1+i-n-M);this._w=(o-L)/l,this._x=.25*l,this._y=(r+V)/l,this._z=(H+a)/l}else if(n>M){let l=2*Math.sqrt(1+n-i-M);this._w=(H-a)/l,this._x=(r+V)/l,this._y=.25*l,this._z=(L+o)/l}else{let l=2*Math.sqrt(1+M-i-n);this._w=(V-r)/l,this._x=(H+a)/l,this._y=(L+o)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W1(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,H=e._z,V=e._w,n=t._x,L=t._y,a=t._z,o=t._w;return this._x=i*o+V*n+r*a-H*L,this._y=r*o+V*L+H*n-i*a,this._z=H*o+V*a+i*L-r*n,this._w=V*o-i*n-r*L-H*a,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,H=e._z,V=e._w,n=this.dot(e);n<0&&(i=-i,r=-r,H=-H,V=-V,n=-n);let L=1-t;if(n<.9995){let a=Math.acos(n),o=Math.sin(a);L=Math.sin(L*a)/o,t=Math.sin(t*a)/o,this._x=this._x*L+i*t,this._y=this._y*L+r*t,this._z=this._z*L+H*t,this._w=this._w*L+V*t,this._onChangeCallback()}else this._x=this._x*L+i*t,this._y=this._y*L+r*t,this._z=this._z*L+H*t,this._w=this._w*L+V*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),H=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),H*Math.sin(t),H*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_e=class _e{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,H=e.elements;return this.x=H[0]*t+H[3]*i+H[6]*r,this.y=H[1]*t+H[4]*i+H[7]*r,this.z=H[2]*t+H[5]*i+H[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,H=e.elements,V=1/(H[3]*t+H[7]*i+H[11]*r+H[15]);return this.x=(H[0]*t+H[4]*i+H[8]*r+H[12])*V,this.y=(H[1]*t+H[5]*i+H[9]*r+H[13])*V,this.z=(H[2]*t+H[6]*i+H[10]*r+H[14])*V,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,H=e.x,V=e.y,n=e.z,L=e.w,a=2*(V*r-n*i),o=2*(n*t-H*r),M=2*(H*i-V*t);return this.x=t+L*a+V*M-n*o,this.y=i+L*o+n*a-H*M,this.z=r+L*M+H*o-V*a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,H=e.elements;return this.x=H[0]*t+H[4]*i+H[8]*r,this.y=H[1]*t+H[5]*i+H[9]*r,this.z=H[2]*t+H[6]*i+H[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W1(this.x,e.x,t.x),this.y=W1(this.y,e.y,t.y),this.z=W1(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W1(this.x,e,t),this.y=W1(this.y,e,t),this.z=W1(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(W1(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,H=e.z,V=t.x,n=t.y,L=t.z;return this.x=r*L-H*n,this.y=H*V-i*L,this.z=i*n-r*V,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return c8.copy(this).projectOnVector(e),this.sub(c8)}reflect(e){return this.sub(c8.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(W1(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_e.prototype.isVector3=!0;var T=_e,c8=new T,zt=new S2,be=class be{constructor(e,t,i,r,H,V,n,L,a){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,H,V,n,L,a)}set(e,t,i,r,H,V,n,L,a){let o=this.elements;return o[0]=e,o[1]=r,o[2]=n,o[3]=t,o[4]=H,o[5]=L,o[6]=i,o[7]=V,o[8]=a,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,H=this.elements,V=i[0],n=i[3],L=i[6],a=i[1],o=i[4],M=i[7],s=i[2],l=i[5],u=i[8],x=r[0],c=r[3],d=r[6],v=r[1],_=r[4],f=r[7],g=r[2],Z=r[5],b=r[8];return H[0]=V*x+n*v+L*g,H[3]=V*c+n*_+L*Z,H[6]=V*d+n*f+L*b,H[1]=a*x+o*v+M*g,H[4]=a*c+o*_+M*Z,H[7]=a*d+o*f+M*b,H[2]=s*x+l*v+u*g,H[5]=s*c+l*_+u*Z,H[8]=s*d+l*f+u*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],H=e[3],V=e[4],n=e[5],L=e[6],a=e[7],o=e[8];return t*V*o-t*n*a-i*H*o+i*n*L+r*H*a-r*V*L}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],H=e[3],V=e[4],n=e[5],L=e[6],a=e[7],o=e[8],M=o*V-n*a,s=n*L-o*H,l=a*H-V*L,u=t*M+i*s+r*l;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/u;return e[0]=M*x,e[1]=(r*a-o*i)*x,e[2]=(n*i-r*V)*x,e[3]=s*x,e[4]=(o*t-r*L)*x,e[5]=(r*H-n*t)*x,e[6]=l*x,e[7]=(i*L-a*t)*x,e[8]=(V*t-i*H)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,H,V,n){let L=Math.cos(H),a=Math.sin(H);return this.set(i*L,i*a,-i*(L*V+a*n)+V+e,-r*a,r*L,-r*(-a*V+L*n)+n+t,0,0,1),this}scale(e,t){return q0("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(p8.makeScale(e,t)),this}rotate(e){return q0("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(p8.makeRotation(-e)),this}translate(e,t){return q0("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(p8.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};be.prototype.isMatrix3=!0;var F1=be,p8=new F1,Gt=new F1().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wt=new F1().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KV(){let C={enabled:!0,workingColorSpace:m7,spaces:{},convert:function(r,H,V){return this.enabled===!1||H===V||!H||!V||(this.spaces[H].transfer===r2&&(r.r=e0(r.r),r.g=e0(r.g),r.b=e0(r.b)),this.spaces[H].primaries!==this.spaces[V].primaries&&(r.applyMatrix3(this.spaces[H].toXYZ),r.applyMatrix3(this.spaces[V].fromXYZ)),this.spaces[V].transfer===r2&&(r.r=Z3(r.r),r.g=Z3(r.g),r.b=Z3(r.b))),r},workingToColorSpace:function(r,H){return this.convert(r,this.workingColorSpace,H)},colorSpaceToWorking:function(r,H){return this.convert(r,H,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===t0?h7:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,H=this.workingColorSpace){return r.fromArray(this.spaces[H].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,H,V){return r.copy(this.spaces[H].toXYZ).multiply(this.spaces[V].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,H){return q0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),C.workingToColorSpace(r,H)},toWorkingColorSpace:function(r,H){return q0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),C.colorSpaceToWorking(r,H)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return C.define({[m7]:{primaries:e,whitePoint:i,transfer:h7,toXYZ:Gt,fromXYZ:Wt,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:W2},outputColorSpaceConfig:{drawingBufferColorSpace:W2}},[W2]:{primaries:e,whitePoint:i,transfer:r2,toXYZ:Gt,fromXYZ:Wt,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:W2}}}),C}var Y1=KV();function e0(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function Z3(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}var M3,i9=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{M3===void 0&&(M3=f7("canvas")),M3.width=e.width,M3.height=e.height;let r=M3.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=M3}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=f7("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),H=r.data;for(let V=0;V<H.length;V++)H[V]=e0(H[V]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(e0(t[i]/255)*255):t[i]=e0(t[i]);return{data:t,width:e.width,height:e.height}}else return B1("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},JV=0,O3=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:JV++}),this.uuid=K0(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let H;if(Array.isArray(r)){H=[];for(let V=0,n=r.length;V<n;V++)r[V].isDataTexture?H.push(u8(r[V].image)):H.push(u8(r[V]))}else H=u8(r);i.url=H}return t||(e.images[this.uuid]=i),i}};function u8(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?i9.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(B1("Texture: Unable to serialize Texture."),{})}var jV=0,A8=new T,J2=class C extends F5{constructor(e=C.DEFAULT_IMAGE,t=C.DEFAULT_MAPPING,i=B5,r=B5,H=D2,V=O0,n=A5,L=r5,a=C.DEFAULT_ANISOTROPY,o=t0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jV++}),this.uuid=K0(),this.name="",this.source=new O3(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=H,this.minFilter=V,this.anisotropy=a,this.format=n,this.internalFormat=null,this.type=L,this.offset=new f1(0,0),this.repeat=new f1(1,1),this.center=new f1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new F1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(A8).x}get height(){return this.source.getSize(A8).y}get depth(){return this.source.getSize(A8).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){B1(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B1(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oe)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case e9:e.x=e.x-Math.floor(e.x);break;case B5:e.x=e.x<0?0:1;break;case t9:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case e9:e.y=e.y-Math.floor(e.y);break;case B5:e.y=e.y<0?0:1;break;case t9:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};J2.DEFAULT_IMAGE=null;J2.DEFAULT_MAPPING=oe;J2.DEFAULT_ANISOTROPY=1;var Te=class Te{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,H=this.w,V=e.elements;return this.x=V[0]*t+V[4]*i+V[8]*r+V[12]*H,this.y=V[1]*t+V[5]*i+V[9]*r+V[13]*H,this.z=V[2]*t+V[6]*i+V[10]*r+V[14]*H,this.w=V[3]*t+V[7]*i+V[11]*r+V[15]*H,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,H,L=e.elements,a=L[0],o=L[4],M=L[8],s=L[1],l=L[5],u=L[9],x=L[2],c=L[6],d=L[10];if(Math.abs(o-s)<.01&&Math.abs(M-x)<.01&&Math.abs(u-c)<.01){if(Math.abs(o+s)<.1&&Math.abs(M+x)<.1&&Math.abs(u+c)<.1&&Math.abs(a+l+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(a+1)/2,f=(l+1)/2,g=(d+1)/2,Z=(o+s)/4,b=(M+x)/4,m=(u+c)/4;return _>f&&_>g?_<.01?(i=0,r=.707106781,H=.707106781):(i=Math.sqrt(_),r=Z/i,H=b/i):f>g?f<.01?(i=.707106781,r=0,H=.707106781):(r=Math.sqrt(f),i=Z/r,H=m/r):g<.01?(i=.707106781,r=.707106781,H=0):(H=Math.sqrt(g),i=b/H,r=m/H),this.set(i,r,H,t),this}let v=Math.sqrt((c-u)*(c-u)+(M-x)*(M-x)+(s-o)*(s-o));return Math.abs(v)<.001&&(v=1),this.x=(c-u)/v,this.y=(M-x)/v,this.z=(s-o)/v,this.w=Math.acos((a+l+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W1(this.x,e.x,t.x),this.y=W1(this.y,e.y,t.y),this.z=W1(this.z,e.z,t.z),this.w=W1(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W1(this.x,e,t),this.y=W1(this.y,e,t),this.z=W1(this.z,e,t),this.w=W1(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(W1(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Te.prototype.isVector4=!0;var m2=Te,r9=class extends F5{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:D2,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new m2(0,0,e,t),this.scissorTest=!1,this.viewport=new m2(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},H=new J2(r),V=i.count;for(let n=0;n<V;n++)this.textures[n]=H.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:D2,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,H=this.textures.length;r<H;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new O3(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},i5=class extends r9{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},x7=class extends J2{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=I2,this.minFilter=I2,this.wrapR=B5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var H9=class extends J2{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=I2,this.minFilter=I2,this.wrapR=B5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var T9=class T9{constructor(e,t,i,r,H,V,n,L,a,o,M,s,l,u,x,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,H,V,n,L,a,o,M,s,l,u,x,c)}set(e,t,i,r,H,V,n,L,a,o,M,s,l,u,x,c){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=H,d[5]=V,d[9]=n,d[13]=L,d[2]=a,d[6]=o,d[10]=M,d[14]=s,d[3]=l,d[7]=u,d[11]=x,d[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new T9().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/l3.setFromMatrixColumn(e,0).length(),H=1/l3.setFromMatrixColumn(e,1).length(),V=1/l3.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*H,t[5]=i[5]*H,t[6]=i[6]*H,t[7]=0,t[8]=i[8]*V,t[9]=i[9]*V,t[10]=i[10]*V,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,H=e.z,V=Math.cos(i),n=Math.sin(i),L=Math.cos(r),a=Math.sin(r),o=Math.cos(H),M=Math.sin(H);if(e.order==="XYZ"){let s=V*o,l=V*M,u=n*o,x=n*M;t[0]=L*o,t[4]=-L*M,t[8]=a,t[1]=l+u*a,t[5]=s-x*a,t[9]=-n*L,t[2]=x-s*a,t[6]=u+l*a,t[10]=V*L}else if(e.order==="YXZ"){let s=L*o,l=L*M,u=a*o,x=a*M;t[0]=s+x*n,t[4]=u*n-l,t[8]=V*a,t[1]=V*M,t[5]=V*o,t[9]=-n,t[2]=l*n-u,t[6]=x+s*n,t[10]=V*L}else if(e.order==="ZXY"){let s=L*o,l=L*M,u=a*o,x=a*M;t[0]=s-x*n,t[4]=-V*M,t[8]=u+l*n,t[1]=l+u*n,t[5]=V*o,t[9]=x-s*n,t[2]=-V*a,t[6]=n,t[10]=V*L}else if(e.order==="ZYX"){let s=V*o,l=V*M,u=n*o,x=n*M;t[0]=L*o,t[4]=u*a-l,t[8]=s*a+x,t[1]=L*M,t[5]=x*a+s,t[9]=l*a-u,t[2]=-a,t[6]=n*L,t[10]=V*L}else if(e.order==="YZX"){let s=V*L,l=V*a,u=n*L,x=n*a;t[0]=L*o,t[4]=x-s*M,t[8]=u*M+l,t[1]=M,t[5]=V*o,t[9]=-n*o,t[2]=-a*o,t[6]=l*M+u,t[10]=s-x*M}else if(e.order==="XZY"){let s=V*L,l=V*a,u=n*L,x=n*a;t[0]=L*o,t[4]=-M,t[8]=a*o,t[1]=s*M+x,t[5]=V*o,t[9]=l*M-u,t[2]=u*M-l,t[6]=n*o,t[10]=x*M+s}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(en,e,tn)}lookAt(e,t,i){let r=this.elements;return n5.subVectors(e,t),n5.lengthSq()===0&&(n5.z=1),n5.normalize(),u0.crossVectors(i,n5),u0.lengthSq()===0&&(Math.abs(i.z)===1?n5.x+=1e-4:n5.z+=1e-4,n5.normalize(),u0.crossVectors(i,n5)),u0.normalize(),S4.crossVectors(n5,u0),r[0]=u0.x,r[4]=S4.x,r[8]=n5.x,r[1]=u0.y,r[5]=S4.y,r[9]=n5.y,r[2]=u0.z,r[6]=S4.z,r[10]=n5.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,H=this.elements,V=i[0],n=i[4],L=i[8],a=i[12],o=i[1],M=i[5],s=i[9],l=i[13],u=i[2],x=i[6],c=i[10],d=i[14],v=i[3],_=i[7],f=i[11],g=i[15],Z=r[0],b=r[4],m=r[8],y=r[12],R=r[1],I=r[5],N=r[9],G=r[13],P=r[2],U=r[6],K=r[10],Q=r[14],r1=r[3],q=r[7],t1=r[11],i1=r[15];return H[0]=V*Z+n*R+L*P+a*r1,H[4]=V*b+n*I+L*U+a*q,H[8]=V*m+n*N+L*K+a*t1,H[12]=V*y+n*G+L*Q+a*i1,H[1]=o*Z+M*R+s*P+l*r1,H[5]=o*b+M*I+s*U+l*q,H[9]=o*m+M*N+s*K+l*t1,H[13]=o*y+M*G+s*Q+l*i1,H[2]=u*Z+x*R+c*P+d*r1,H[6]=u*b+x*I+c*U+d*q,H[10]=u*m+x*N+c*K+d*t1,H[14]=u*y+x*G+c*Q+d*i1,H[3]=v*Z+_*R+f*P+g*r1,H[7]=v*b+_*I+f*U+g*q,H[11]=v*m+_*N+f*K+g*t1,H[15]=v*y+_*G+f*Q+g*i1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],H=e[12],V=e[1],n=e[5],L=e[9],a=e[13],o=e[2],M=e[6],s=e[10],l=e[14],u=e[3],x=e[7],c=e[11],d=e[15],v=L*l-a*s,_=n*l-a*M,f=n*s-L*M,g=V*l-a*o,Z=V*s-L*o,b=V*M-n*o;return t*(x*v-c*_+d*f)-i*(u*v-c*g+d*Z)+r*(u*_-x*g+d*b)-H*(u*f-x*Z+c*b)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],H=e[1],V=e[5],n=e[9],L=e[2],a=e[6],o=e[10];return t*(V*o-n*a)-i*(H*o-n*L)+r*(H*a-V*L)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],H=e[3],V=e[4],n=e[5],L=e[6],a=e[7],o=e[8],M=e[9],s=e[10],l=e[11],u=e[12],x=e[13],c=e[14],d=e[15],v=t*n-i*V,_=t*L-r*V,f=t*a-H*V,g=i*L-r*n,Z=i*a-H*n,b=r*a-H*L,m=o*x-M*u,y=o*c-s*u,R=o*d-l*u,I=M*c-s*x,N=M*d-l*x,G=s*d-l*c,P=v*G-_*N+f*I+g*R-Z*y+b*m;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(n*G-L*N+a*I)*U,e[1]=(r*N-i*G-H*I)*U,e[2]=(x*b-c*Z+d*g)*U,e[3]=(s*Z-M*b-l*g)*U,e[4]=(L*R-V*G-a*y)*U,e[5]=(t*G-r*R+H*y)*U,e[6]=(c*f-u*b-d*_)*U,e[7]=(o*b-s*f+l*_)*U,e[8]=(V*N-n*R+a*m)*U,e[9]=(i*R-t*N-H*m)*U,e[10]=(u*Z-x*f+d*v)*U,e[11]=(M*f-o*Z-l*v)*U,e[12]=(n*y-V*I-L*m)*U,e[13]=(t*I-i*y+r*m)*U,e[14]=(x*_-u*g-c*v)*U,e[15]=(o*g-M*_+s*v)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,H=e.z;return t[0]*=i,t[4]*=r,t[8]*=H,t[1]*=i,t[5]*=r,t[9]*=H,t[2]*=i,t[6]*=r,t[10]*=H,t[3]*=i,t[7]*=r,t[11]*=H,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),H=1-i,V=e.x,n=e.y,L=e.z,a=H*V,o=H*n;return this.set(a*V+i,a*n-r*L,a*L+r*n,0,a*n+r*L,o*n+i,o*L-r*V,0,a*L-r*n,o*L+r*V,H*L*L+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,H,V){return this.set(1,i,H,0,e,1,V,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,H=t._x,V=t._y,n=t._z,L=t._w,a=H+H,o=V+V,M=n+n,s=H*a,l=H*o,u=H*M,x=V*o,c=V*M,d=n*M,v=L*a,_=L*o,f=L*M,g=i.x,Z=i.y,b=i.z;return r[0]=(1-(x+d))*g,r[1]=(l+f)*g,r[2]=(u-_)*g,r[3]=0,r[4]=(l-f)*Z,r[5]=(1-(s+d))*Z,r[6]=(c+v)*Z,r[7]=0,r[8]=(u+_)*b,r[9]=(c-v)*b,r[10]=(1-(s+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let H=this.determinantAffine();if(H===0)return i.set(1,1,1),t.identity(),this;let V=l3.set(r[0],r[1],r[2]).length(),n=l3.set(r[4],r[5],r[6]).length(),L=l3.set(r[8],r[9],r[10]).length();H<0&&(V=-V),f5.copy(this);let a=1/V,o=1/n,M=1/L;return f5.elements[0]*=a,f5.elements[1]*=a,f5.elements[2]*=a,f5.elements[4]*=o,f5.elements[5]*=o,f5.elements[6]*=o,f5.elements[8]*=M,f5.elements[9]*=M,f5.elements[10]*=M,t.setFromRotationMatrix(f5),i.x=V,i.y=n,i.z=L,this}makePerspective(e,t,i,r,H,V,n=g5,L=!1){let a=this.elements,o=2*H/(t-e),M=2*H/(i-r),s=(t+e)/(t-e),l=(i+r)/(i-r),u,x;if(L)u=H/(V-H),x=V*H/(V-H);else if(n===g5)u=-(V+H)/(V-H),x=-2*V*H/(V-H);else if(n===b3)u=-V/(V-H),x=-V*H/(V-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return a[0]=o,a[4]=0,a[8]=s,a[12]=0,a[1]=0,a[5]=M,a[9]=l,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=x,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,H,V,n=g5,L=!1){let a=this.elements,o=2/(t-e),M=2/(i-r),s=-(t+e)/(t-e),l=-(i+r)/(i-r),u,x;if(L)u=1/(V-H),x=V/(V-H);else if(n===g5)u=-2/(V-H),x=-(V+H)/(V-H);else if(n===b3)u=-1/(V-H),x=-H/(V-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return a[0]=o,a[4]=0,a[8]=0,a[12]=s,a[1]=0,a[5]=M,a[9]=0,a[13]=l,a[2]=0,a[6]=0,a[10]=u,a[14]=x,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};T9.prototype.isMatrix4=!0;var n2=T9,l3=new T,f5=new n2,en=new T(0,0,0),tn=new T(1,1,1),u0=new T,S4=new T,n5=new T,$t=new n2,qt=new S2,u5=class C{constructor(e=0,t=0,i=0,r=C.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,H=r[0],V=r[4],n=r[8],L=r[1],a=r[5],o=r[9],M=r[2],s=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(W1(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-o,l),this._z=Math.atan2(-V,H)):(this._x=Math.atan2(s,a),this._z=0);break;case"YXZ":this._x=Math.asin(-W1(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(n,l),this._z=Math.atan2(L,a)):(this._y=Math.atan2(-M,H),this._z=0);break;case"ZXY":this._x=Math.asin(W1(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-M,l),this._z=Math.atan2(-V,a)):(this._y=0,this._z=Math.atan2(L,H));break;case"ZYX":this._y=Math.asin(-W1(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(s,l),this._z=Math.atan2(L,H)):(this._x=0,this._z=Math.atan2(-V,a));break;case"YZX":this._z=Math.asin(W1(L,-1,1)),Math.abs(L)<.9999999?(this._x=Math.atan2(-o,a),this._y=Math.atan2(-M,H)):(this._x=0,this._y=Math.atan2(n,l));break;case"XZY":this._z=Math.asin(-W1(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(s,a),this._y=Math.atan2(n,H)):(this._x=Math.atan2(-o,l),this._y=0);break;default:B1("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $t.makeRotationFromQuaternion(e),this.setFromRotationMatrix($t,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qt.setFromEuler(this),this.setFromQuaternion(qt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};u5.DEFAULT_ORDER="XYZ";var E3=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cn=0,Xt=new T,d3=new S2,Y5=new n2,g4=new T,a7=new T,rn=new T,Hn=new S2,Yt=new T(1,0,0),Qt=new T(0,1,0),Kt=new T(0,0,1),Jt={type:"added"},Vn={type:"removed"},c3={type:"childadded",child:null},m8={type:"childremoved",child:null},j2=class C extends F5{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=K0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=C.DEFAULT_UP.clone();let e=new T,t=new u5,i=new S2,r=new T(1,1,1);function H(){i.setFromEuler(t,!1)}function V(){t.setFromQuaternion(i,void 0,!1)}t._onChange(H),i._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new n2},normalMatrix:{value:new F1}}),this.matrix=new n2,this.matrixWorld=new n2,this.matrixAutoUpdate=C.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=C.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return d3.setFromAxisAngle(e,t),this.quaternion.multiply(d3),this}rotateOnWorldAxis(e,t){return d3.setFromAxisAngle(e,t),this.quaternion.premultiply(d3),this}rotateX(e){return this.rotateOnAxis(Yt,e)}rotateY(e){return this.rotateOnAxis(Qt,e)}rotateZ(e){return this.rotateOnAxis(Kt,e)}translateOnAxis(e,t){return Xt.copy(e).applyQuaternion(this.quaternion),this.position.add(Xt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yt,e)}translateY(e){return this.translateOnAxis(Qt,e)}translateZ(e){return this.translateOnAxis(Kt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Y5.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?g4.copy(e):g4.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),a7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Y5.lookAt(a7,g4,this.up):Y5.lookAt(g4,a7,this.up),this.quaternion.setFromRotationMatrix(Y5),r&&(Y5.extractRotation(r.matrixWorld),d3.setFromRotationMatrix(Y5),this.quaternion.premultiply(d3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(I1("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jt),c3.child=e,this.dispatchEvent(c3),c3.child=null):I1("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vn),m8.child=e,this.dispatchEvent(m8),m8.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Y5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Y5.multiply(e.parent.matrixWorld)),e.applyMatrix4(Y5),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jt),c3.child=e,this.dispatchEvent(c3),c3.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let V=this.children[i].getObjectByProperty(e,t);if(V!==void 0)return V}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let H=0,V=r.length;H<V;H++)r[H].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(a7,e,rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(a7,Hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,H=this.matrix.elements;H[12]+=t-H[0]*t-H[4]*i-H[8]*r,H[13]+=i-H[1]*t-H[5]*i-H[9]*r,H[14]+=r-H[2]*t-H[6]*i-H[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let H=this.children;for(let V=0,n=H.length;V<n;V++)H[V].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(n=>({...n,boundingBox:n.boundingBox?n.boundingBox.toJSON():void 0,boundingSphere:n.boundingSphere?n.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(n=>({...n})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function H(n,L){return n[L.uuid]===void 0&&(n[L.uuid]=L.toJSON(e)),L.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=H(e.geometries,this.geometry);let n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){let L=n.shapes;if(Array.isArray(L))for(let a=0,o=L.length;a<o;a++){let M=L[a];H(e.shapes,M)}else H(e.shapes,L)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(H(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let n=[];for(let L=0,a=this.material.length;L<a;L++)n.push(H(e.materials,this.material[L]));r.material=n}else r.material=H(e.materials,this.material);if(this.children.length>0){r.children=[];for(let n=0;n<this.children.length;n++)r.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let n=0;n<this.animations.length;n++){let L=this.animations[n];r.animations.push(H(e.animations,L))}}if(t){let n=V(e.geometries),L=V(e.materials),a=V(e.textures),o=V(e.images),M=V(e.shapes),s=V(e.skeletons),l=V(e.animations),u=V(e.nodes);n.length>0&&(i.geometries=n),L.length>0&&(i.materials=L),a.length>0&&(i.textures=a),o.length>0&&(i.images=o),M.length>0&&(i.shapes=M),s.length>0&&(i.skeletons=s),l.length>0&&(i.animations=l),u.length>0&&(i.nodes=u)}return i.object=r,i;function V(n){let L=[];for(let a in n){let o=n[a];delete o.metadata,L.push(o)}return L}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};j2.DEFAULT_UP=new T(0,1,0);j2.DEFAULT_MATRIX_AUTO_UPDATE=!0;j2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Z5=class extends j2{constructor(){super(),this.isGroup=!0,this.type="Group"}},nn={type:"move"},R3=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Z5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Z5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Z5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,H=null,V=null,n=this._targetRay,L=this._grip,a=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(a&&e.hand){V=!0;for(let x of e.hand.values()){let c=t.getJointPose(x,i),d=this._getHandJoint(a,x);c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=c.radius),d.visible=c!==null}let o=a.joints["index-finger-tip"],M=a.joints["thumb-tip"],s=o.position.distanceTo(M.position),l=.02,u=.005;a.inputState.pinching&&s>l+u?(a.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!a.inputState.pinching&&s<=l-u&&(a.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else L!==null&&e.gripSpace&&(H=t.getPose(e.gripSpace,i),H!==null&&(L.matrix.fromArray(H.transform.matrix),L.matrix.decompose(L.position,L.rotation,L.scale),L.matrixWorldNeedsUpdate=!0,H.linearVelocity?(L.hasLinearVelocity=!0,L.linearVelocity.copy(H.linearVelocity)):L.hasLinearVelocity=!1,H.angularVelocity?(L.hasAngularVelocity=!0,L.angularVelocity.copy(H.angularVelocity)):L.hasAngularVelocity=!1,L.eventsEnabled&&L.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&H!==null&&(r=H),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(nn)))}return n!==null&&(n.visible=r!==null),L!==null&&(L.visible=H!==null),a!==null&&(a.visible=V!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Z5;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ci={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},A0={h:0,s:0,l:0},Z4={h:0,s:0,l:0};function h8(C,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?C+(e-C)*6*t:t<1/2?e:t<2/3?C+(e-C)*6*(2/3-t):C}var D1=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=W2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y1.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Y1.workingColorSpace){return this.r=e,this.g=t,this.b=i,Y1.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Y1.workingColorSpace){if(e=he(e,1),t=W1(t,0,1),i=W1(i,0,1),t===0)this.r=this.g=this.b=i;else{let H=i<=.5?i*(1+t):i+t-i*t,V=2*i-H;this.r=h8(V,H,e+1/3),this.g=h8(V,H,e),this.b=h8(V,H,e-1/3)}return Y1.colorSpaceToWorking(this,r),this}setStyle(e,t=W2){function i(H){H!==void 0&&parseFloat(H)<1&&B1("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let H,V=r[1],n=r[2];switch(V){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,t);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,t);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,t);break;default:B1("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let H=r[1],V=H.length;if(V===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,t);if(V===6)return this.setHex(parseInt(H,16),t);B1("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=W2){let i=Ci[e.toLowerCase()];return i!==void 0?this.setHex(i,t):B1("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=e0(e.r),this.g=e0(e.g),this.b=e0(e.b),this}copyLinearToSRGB(e){return this.r=Z3(e.r),this.g=Z3(e.g),this.b=Z3(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=W2){return Y1.workingToColorSpace(G2.copy(this),e),Math.round(W1(G2.r*255,0,255))*65536+Math.round(W1(G2.g*255,0,255))*256+Math.round(W1(G2.b*255,0,255))}getHexString(e=W2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y1.workingColorSpace){Y1.workingToColorSpace(G2.copy(this),t);let i=G2.r,r=G2.g,H=G2.b,V=Math.max(i,r,H),n=Math.min(i,r,H),L,a,o=(n+V)/2;if(n===V)L=0,a=0;else{let M=V-n;switch(a=o<=.5?M/(V+n):M/(2-V-n),V){case i:L=(r-H)/M+(r<H?6:0);break;case r:L=(H-i)/M+2;break;case H:L=(i-r)/M+4;break}L/=6}return e.h=L,e.s=a,e.l=o,e}getRGB(e,t=Y1.workingColorSpace){return Y1.workingToColorSpace(G2.copy(this),t),e.r=G2.r,e.g=G2.g,e.b=G2.b,e}getStyle(e=W2){Y1.workingToColorSpace(G2.copy(this),e);let t=G2.r,i=G2.g,r=G2.b;return e!==W2?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(A0),this.setHSL(A0.h+e,A0.s+t,A0.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(A0),e.getHSL(Z4);let i=c7(A0.h,Z4.h,t),r=c7(A0.s,Z4.s,t),H=c7(A0.l,Z4.l,t);return this.setHSL(i,r,H),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,H=e.elements;return this.r=H[0]*t+H[3]*i+H[6]*r,this.g=H[1]*t+H[4]*i+H[7]*r,this.b=H[2]*t+H[5]*i+H[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},G2=new D1;D1.NAMES=Ci;var v7=class extends j2{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new u5,this.environmentIntensity=1,this.environmentRotation=new u5,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},x5=new T,Q5=new T,f8=new T,K5=new T,p3=new T,u3=new T,jt=new T,x8=new T,v8=new T,S8=new T,g8=new m2,Z8=new m2,y8=new m2,x0=class C{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),x5.subVectors(e,t),r.cross(x5);let H=r.lengthSq();return H>0?r.multiplyScalar(1/Math.sqrt(H)):r.set(0,0,0)}static getBarycoord(e,t,i,r,H){x5.subVectors(r,t),Q5.subVectors(i,t),f8.subVectors(e,t);let V=x5.dot(x5),n=x5.dot(Q5),L=x5.dot(f8),a=Q5.dot(Q5),o=Q5.dot(f8),M=V*a-n*n;if(M===0)return H.set(0,0,0),null;let s=1/M,l=(a*L-n*o)*s,u=(V*o-n*L)*s;return H.set(1-l-u,u,l)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,K5)===null?!1:K5.x>=0&&K5.y>=0&&K5.x+K5.y<=1}static getInterpolation(e,t,i,r,H,V,n,L){return this.getBarycoord(e,t,i,r,K5)===null?(L.x=0,L.y=0,"z"in L&&(L.z=0),"w"in L&&(L.w=0),null):(L.setScalar(0),L.addScaledVector(H,K5.x),L.addScaledVector(V,K5.y),L.addScaledVector(n,K5.z),L)}static getInterpolatedAttribute(e,t,i,r,H,V){return g8.setScalar(0),Z8.setScalar(0),y8.setScalar(0),g8.fromBufferAttribute(e,t),Z8.fromBufferAttribute(e,i),y8.fromBufferAttribute(e,r),V.setScalar(0),V.addScaledVector(g8,H.x),V.addScaledVector(Z8,H.y),V.addScaledVector(y8,H.z),V}static isFrontFacing(e,t,i,r){return x5.subVectors(i,t),Q5.subVectors(e,t),x5.cross(Q5).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return x5.subVectors(this.c,this.b),Q5.subVectors(this.a,this.b),x5.cross(Q5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return C.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return C.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,H){return C.getInterpolation(e,this.a,this.b,this.c,t,i,r,H)}containsPoint(e){return C.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return C.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,H=this.c,V,n;p3.subVectors(r,i),u3.subVectors(H,i),x8.subVectors(e,i);let L=p3.dot(x8),a=u3.dot(x8);if(L<=0&&a<=0)return t.copy(i);v8.subVectors(e,r);let o=p3.dot(v8),M=u3.dot(v8);if(o>=0&&M<=o)return t.copy(r);let s=L*M-o*a;if(s<=0&&L>=0&&o<=0)return V=L/(L-o),t.copy(i).addScaledVector(p3,V);S8.subVectors(e,H);let l=p3.dot(S8),u=u3.dot(S8);if(u>=0&&l<=u)return t.copy(H);let x=l*a-L*u;if(x<=0&&a>=0&&u<=0)return n=a/(a-u),t.copy(i).addScaledVector(u3,n);let c=o*u-l*M;if(c<=0&&M-o>=0&&l-u>=0)return jt.subVectors(H,r),n=(M-o)/(M-o+(l-u)),t.copy(r).addScaledVector(jt,n);let d=1/(c+x+s);return V=x*d,n=s*d,t.copy(i).addScaledVector(p3,V).addScaledVector(u3,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},v0=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(v5.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(v5.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=v5.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let H=i.getAttribute("position");if(t===!0&&H!==void 0&&e.isInstancedMesh!==!0)for(let V=0,n=H.count;V<n;V++)e.isMesh===!0?e.getVertexPosition(V,v5):v5.fromBufferAttribute(H,V),v5.applyMatrix4(e.matrixWorld),this.expandByPoint(v5);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),y4.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),y4.copy(i.boundingBox)),y4.applyMatrix4(e.matrixWorld),this.union(y4)}let r=e.children;for(let H=0,V=r.length;H<V;H++)this.expandByObject(r[H],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,v5),v5.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(o7),_4.subVectors(this.max,o7),A3.subVectors(e.a,o7),m3.subVectors(e.b,o7),h3.subVectors(e.c,o7),m0.subVectors(m3,A3),h0.subVectors(h3,m3),z0.subVectors(A3,h3);let t=[0,-m0.z,m0.y,0,-h0.z,h0.y,0,-z0.z,z0.y,m0.z,0,-m0.x,h0.z,0,-h0.x,z0.z,0,-z0.x,-m0.y,m0.x,0,-h0.y,h0.x,0,-z0.y,z0.x,0];return!_8(t,A3,m3,h3,_4)||(t=[1,0,0,0,1,0,0,0,1],!_8(t,A3,m3,h3,_4))?!1:(b4.crossVectors(m0,h0),t=[b4.x,b4.y,b4.z],_8(t,A3,m3,h3,_4))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,v5).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(v5).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(J5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),J5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),J5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),J5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),J5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),J5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),J5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),J5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(J5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},J5=[new T,new T,new T,new T,new T,new T,new T,new T],v5=new T,y4=new v0,A3=new T,m3=new T,h3=new T,m0=new T,h0=new T,z0=new T,o7=new T,_4=new T,b4=new T,G0=new T;function _8(C,e,t,i,r){for(let H=0,V=C.length-3;H<=V;H+=3){G0.fromArray(C,H);let n=r.x*Math.abs(G0.x)+r.y*Math.abs(G0.y)+r.z*Math.abs(G0.z),L=e.dot(G0),a=t.dot(G0),o=i.dot(G0);if(Math.max(-Math.max(L,a,o),Math.min(L,a,o))>n)return!1}return!0}var T2=new T,T4=new f1,Ln=0,p5=class extends F5{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ln++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=KC,this.updateRanges=[],this.gpuType=T5,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,H=this.itemSize;r<H;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)T4.fromBufferAttribute(this,t),T4.applyMatrix3(e),this.setXY(t,T4.x,T4.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)T2.fromBufferAttribute(this,t),T2.applyMatrix3(e),this.setXYZ(t,T2.x,T2.y,T2.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)T2.fromBufferAttribute(this,t),T2.applyMatrix4(e),this.setXYZ(t,T2.x,T2.y,T2.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)T2.fromBufferAttribute(this,t),T2.applyNormalMatrix(e),this.setXYZ(t,T2.x,T2.y,T2.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)T2.fromBufferAttribute(this,t),T2.transformDirection(e),this.setXYZ(t,T2.x,T2.y,T2.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=g3(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Q2(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=g3(t,this.array)),t}setX(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=g3(t,this.array)),t}setY(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=g3(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=g3(t,this.array)),t}setW(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Q2(t,this.array),i=Q2(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Q2(t,this.array),i=Q2(i,this.array),r=Q2(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,H){return e*=this.itemSize,this.normalized&&(t=Q2(t,this.array),i=Q2(i,this.array),r=Q2(r,this.array),H=Q2(H,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=H,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var S7=class extends p5{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var g7=class extends p5{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var K2=class extends p5{constructor(e,t,i){super(new Float32Array(e),t,i)}},an=new v0,s7=new T,b8=new T,P3=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):an.setFromPoints(e).getCenter(i);let r=0;for(let H=0,V=e.length;H<V;H++)r=Math.max(r,i.distanceToSquared(e[H]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;s7.subVectors(e,this.center);let t=s7.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(s7,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(b8.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(s7.copy(e.center).add(b8)),this.expandByPoint(s7.copy(e.center).sub(b8))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},on=0,c5=new n2,T8=new j2,f3=new T,L5=new v0,M7=new v0,B2=new T,y5=class C extends F5{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=K0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EV(e)?g7:S7)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let H=new F1().getNormalMatrix(e);i.applyNormalMatrix(H),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return c5.makeRotationFromQuaternion(e),this.applyMatrix4(c5),this}rotateX(e){return c5.makeRotationX(e),this.applyMatrix4(c5),this}rotateY(e){return c5.makeRotationY(e),this.applyMatrix4(c5),this}rotateZ(e){return c5.makeRotationZ(e),this.applyMatrix4(c5),this}translate(e,t,i){return c5.makeTranslation(e,t,i),this.applyMatrix4(c5),this}scale(e,t,i){return c5.makeScale(e,t,i),this.applyMatrix4(c5),this}lookAt(e){return T8.lookAt(e),T8.updateMatrix(),this.applyMatrix4(T8.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(f3).negate(),this.translate(f3.x,f3.y,f3.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,H=e.length;r<H;r++){let V=e[r];i.push(V.x,V.y,V.z||0)}this.setAttribute("position",new K2(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let H=e[r];t.setXYZ(r,H.x,H.y,H.z||0)}e.length>t.count&&B1("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new v0);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I1("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let H=t[i];L5.setFromBufferAttribute(H),this.morphTargetsRelative?(B2.addVectors(this.boundingBox.min,L5.min),this.boundingBox.expandByPoint(B2),B2.addVectors(this.boundingBox.max,L5.max),this.boundingBox.expandByPoint(B2)):(this.boundingBox.expandByPoint(L5.min),this.boundingBox.expandByPoint(L5.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I1('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new P3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){I1("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(L5.setFromBufferAttribute(e),t)for(let H=0,V=t.length;H<V;H++){let n=t[H];M7.setFromBufferAttribute(n),this.morphTargetsRelative?(B2.addVectors(L5.min,M7.min),L5.expandByPoint(B2),B2.addVectors(L5.max,M7.max),L5.expandByPoint(B2)):(L5.expandByPoint(M7.min),L5.expandByPoint(M7.max))}L5.getCenter(i);let r=0;for(let H=0,V=e.count;H<V;H++)B2.fromBufferAttribute(e,H),r=Math.max(r,i.distanceToSquared(B2));if(t)for(let H=0,V=t.length;H<V;H++){let n=t[H],L=this.morphTargetsRelative;for(let a=0,o=n.count;a<o;a++)B2.fromBufferAttribute(n,a),L&&(f3.fromBufferAttribute(e,a),B2.add(f3)),r=Math.max(r,i.distanceToSquared(B2))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I1('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I1("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,H=t.uv,V=this.getAttribute("tangent");(V===void 0||V.count!==i.count)&&(V=new p5(new Float32Array(4*i.count),4),this.setAttribute("tangent",V));let n=[],L=[];for(let m=0;m<i.count;m++)n[m]=new T,L[m]=new T;let a=new T,o=new T,M=new T,s=new f1,l=new f1,u=new f1,x=new T,c=new T;function d(m,y,R){a.fromBufferAttribute(i,m),o.fromBufferAttribute(i,y),M.fromBufferAttribute(i,R),s.fromBufferAttribute(H,m),l.fromBufferAttribute(H,y),u.fromBufferAttribute(H,R),o.sub(a),M.sub(a),l.sub(s),u.sub(s);let I=1/(l.x*u.y-u.x*l.y);isFinite(I)&&(x.copy(o).multiplyScalar(u.y).addScaledVector(M,-l.y).multiplyScalar(I),c.copy(M).multiplyScalar(l.x).addScaledVector(o,-u.x).multiplyScalar(I),n[m].add(x),n[y].add(x),n[R].add(x),L[m].add(c),L[y].add(c),L[R].add(c))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let m=0,y=v.length;m<y;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let _=new T,f=new T,g=new T,Z=new T;function b(m){g.fromBufferAttribute(r,m),Z.copy(g);let y=n[m];_.copy(y),_.sub(g.multiplyScalar(g.dot(y))).normalize(),f.crossVectors(Z,y);let I=f.dot(L[m])<0?-1:1;V.setXYZW(m,_.x,_.y,_.z,I)}for(let m=0,y=v.length;m<y;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new p5(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let s=0,l=i.count;s<l;s++)i.setXYZ(s,0,0,0);let r=new T,H=new T,V=new T,n=new T,L=new T,a=new T,o=new T,M=new T;if(e)for(let s=0,l=e.count;s<l;s+=3){let u=e.getX(s+0),x=e.getX(s+1),c=e.getX(s+2);r.fromBufferAttribute(t,u),H.fromBufferAttribute(t,x),V.fromBufferAttribute(t,c),o.subVectors(V,H),M.subVectors(r,H),o.cross(M),n.fromBufferAttribute(i,u),L.fromBufferAttribute(i,x),a.fromBufferAttribute(i,c),n.add(o),L.add(o),a.add(o),i.setXYZ(u,n.x,n.y,n.z),i.setXYZ(x,L.x,L.y,L.z),i.setXYZ(c,a.x,a.y,a.z)}else for(let s=0,l=t.count;s<l;s+=3)r.fromBufferAttribute(t,s+0),H.fromBufferAttribute(t,s+1),V.fromBufferAttribute(t,s+2),o.subVectors(V,H),M.subVectors(r,H),o.cross(M),i.setXYZ(s+0,o.x,o.y,o.z),i.setXYZ(s+1,o.x,o.y,o.z),i.setXYZ(s+2,o.x,o.y,o.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)B2.fromBufferAttribute(e,t),B2.normalize(),e.setXYZ(t,B2.x,B2.y,B2.z)}toNonIndexed(){function e(n,L){let a=n.array,o=n.itemSize,M=n.normalized,s=new a.constructor(L.length*o),l=0,u=0;for(let x=0,c=L.length;x<c;x++){n.isInterleavedBufferAttribute?l=L[x]*n.data.stride+n.offset:l=L[x]*o;for(let d=0;d<o;d++)s[u++]=a[l++]}return new p5(s,o,M)}if(this.index===null)return B1("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new C,i=this.index.array,r=this.attributes;for(let n in r){let L=r[n],a=e(L,i);t.setAttribute(n,a)}let H=this.morphAttributes;for(let n in H){let L=[],a=H[n];for(let o=0,M=a.length;o<M;o++){let s=a[o],l=e(s,i);L.push(l)}t.morphAttributes[n]=L}t.morphTargetsRelative=this.morphTargetsRelative;let V=this.groups;for(let n=0,L=V.length;n<L;n++){let a=V[n];t.addGroup(a.start,a.count,a.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let L=this.parameters;for(let a in L)L[a]!==void 0&&(e[a]=L[a]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let L in i){let a=i[L];e.data.attributes[L]=a.toJSON(e.data)}let r={},H=!1;for(let L in this.morphAttributes){let a=this.morphAttributes[L],o=[];for(let M=0,s=a.length;M<s;M++){let l=a[M];o.push(l.toJSON(e.data))}o.length>0&&(r[L]=o,H=!0)}H&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let V=this.groups;V.length>0&&(e.data.groups=JSON.parse(JSON.stringify(V)));let n=this.boundingSphere;return n!==null&&(e.data.boundingSphere=n.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let a in r){let o=r[a];this.setAttribute(a,o.clone(t))}let H=e.morphAttributes;for(let a in H){let o=[],M=H[a];for(let s=0,l=M.length;s<l;s++)o.push(M[s].clone(t));this.morphAttributes[a]=o}this.morphTargetsRelative=e.morphTargetsRelative;let V=e.groups;for(let a=0,o=V.length;a<o;a++){let M=V[a];this.addGroup(M.start,M.count,M.materialIndex)}let n=e.boundingBox;n!==null&&(this.boundingBox=n.clone());let L=e.boundingSphere;return L!==null&&(this.boundingSphere=L.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var w8=new T,sn=new T,Mn=new F1,S5=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=w8.subVectors(i,t).cross(sn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(w8),H=this.normal.dot(r);if(H===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let V=-(e.start.dot(this.normal)+this.constant)/H;return i===!0&&(V<0||V>1)?null:t.copy(e.start).addScaledVector(r,V)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Mn.getNormalMatrix(e),r=this.coplanarPoint(w8).applyMatrix4(e),H=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(H),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ln=0,S0=class extends F5{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=K0(),this.name="",this.type="Material",this.blending=G3,this.side=T0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ee,this.blendDst=te,this.blendEquation=Y0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new D1(0,0,0),this.blendAlpha=0,this.depthFunc=_3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=GC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$4,this.stencilZFail=$4,this.stencilZPass=$4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){B1(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B1(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(H=>H.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(H){let V=[];for(let n in H){let L=H[n];delete L.metadata,V.push(L)}return V}if(t){let H=r(e.textures),V=r(e.images);H.length>0&&(i.textures=H),V.length>0&&(i.images=V)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new D1().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new S5().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new f1().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new f1().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let H=0;H!==r;++H)i[H]=t[H].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var j5=new T,O8=new T,w4=new T,O4=new T,Z7=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,j5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=j5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(j5.copy(this.origin).addScaledVector(this.direction,t),j5.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){O8.copy(e).add(t).multiplyScalar(.5),w4.copy(t).sub(e).normalize(),O4.copy(this.origin).sub(O8);let H=e.distanceTo(t)*.5,V=-this.direction.dot(w4),n=O4.dot(this.direction),L=-O4.dot(w4),a=O4.lengthSq(),o=Math.abs(1-V*V),M,s,l,u;if(o>0)if(M=V*L-n,s=V*n-L,u=H*o,M>=0)if(s>=-u)if(s<=u){let x=1/o;M*=x,s*=x,l=M*(M+V*s+2*n)+s*(V*M+s+2*L)+a}else s=H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*L)+a;else s=-H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*L)+a;else s<=-u?(M=Math.max(0,-(-V*H+n)),s=M>0?-H:Math.min(Math.max(-H,-L),H),l=-M*M+s*(s+2*L)+a):s<=u?(M=0,s=Math.min(Math.max(-H,-L),H),l=s*(s+2*L)+a):(M=Math.max(0,-(V*H+n)),s=M>0?H:Math.min(Math.max(-H,-L),H),l=-M*M+s*(s+2*L)+a);else s=V>0?-H:H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*L)+a;return i&&i.copy(this.origin).addScaledVector(this.direction,M),r&&r.copy(O8).addScaledVector(w4,s),l}intersectSphere(e,t){if(e.radius<0)return null;j5.subVectors(e.center,this.origin);let i=j5.dot(this.direction),r=j5.dot(j5)-i*i,H=e.radius*e.radius;if(r>H)return null;let V=Math.sqrt(H-r),n=i-V,L=i+V;return L<0?null:n<0?this.at(L,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,H,V,n,L,a=1/this.direction.x,o=1/this.direction.y,M=1/this.direction.z,s=this.origin;return a>=0?(i=(e.min.x-s.x)*a,r=(e.max.x-s.x)*a):(i=(e.max.x-s.x)*a,r=(e.min.x-s.x)*a),o>=0?(H=(e.min.y-s.y)*o,V=(e.max.y-s.y)*o):(H=(e.max.y-s.y)*o,V=(e.min.y-s.y)*o),i>V||H>r||((H>i||isNaN(i))&&(i=H),(V<r||isNaN(r))&&(r=V),M>=0?(n=(e.min.z-s.z)*M,L=(e.max.z-s.z)*M):(n=(e.max.z-s.z)*M,L=(e.min.z-s.z)*M),i>L||n>r)||((n>i||i!==i)&&(i=n),(L<r||r!==r)&&(r=L),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,j5)!==null}intersectTriangle(e,t,i,r,H){let V=this.origin,n=this.direction,L=n.x,a=n.y,o=n.z,M=e.x-V.x,s=e.y-V.y,l=e.z-V.z,u=t.x-V.x,x=t.y-V.y,c=t.z-V.z,d=i.x-V.x,v=i.y-V.y,_=i.z-V.z,f=Math.abs(L),g=Math.abs(a),Z=Math.abs(o),b,m,y,R,I,N,G,P,U,K,Q,r1;if(f>=g&&f>=Z?(y=L,N=M,U=u,r1=d,L>=0?(b=a,m=o,R=s,I=l,G=x,P=c,K=v,Q=_):(b=o,m=a,R=l,I=s,G=c,P=x,K=_,Q=v)):g>=Z?(y=a,N=s,U=x,r1=v,a>=0?(b=o,m=L,R=l,I=M,G=c,P=u,K=_,Q=d):(b=L,m=o,R=M,I=l,G=u,P=c,K=d,Q=_)):(y=o,N=l,U=c,r1=_,o>=0?(b=L,m=a,R=M,I=s,G=u,P=x,K=d,Q=v):(b=a,m=L,R=s,I=M,G=x,P=u,K=v,Q=d)),y===0)return null;let q=b/y,t1=m/y,i1=1/y,R1=R-q*N,O1=I-t1*N,o2=G-q*U,Q1=P-t1*U,e2=K-q*r1,X=Q-t1*r1,e1=e2*Q1-X*o2,x1=R1*X-O1*e2,k1=o2*O1-Q1*R1;if(r){if(e1<0||x1<0||k1<0)return null}else if((e1<0||x1<0||k1<0)&&(e1>0||x1>0||k1>0))return null;let m1=e1+x1+k1;if(m1===0)return null;let G1=i1*(e1*N+x1*U+k1*r1);return(m1>0?G1<0:G1>0)?null:this.at(G1/m1,H)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},y7=class extends S0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new D1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new u5,this.combine=Ce,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eC=new n2,W0=new Z7,E4=new P3,tC=new T,R4=new T,P4=new T,B4=new T,E8=new T,I4=new T,CC=new T,F4=new T,e5=class extends j2{constructor(e=new y5,t=new y7){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,V=r.length;H<V;H++){let n=r[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=H}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,H=i.morphAttributes.position,V=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(H&&n){I4.set(0,0,0);for(let L=0,a=H.length;L<a;L++){let o=n[L],M=H[L];o!==0&&(E8.fromBufferAttribute(M,e),V?I4.addScaledVector(E8,o):I4.addScaledVector(E8.sub(t),o))}t.add(I4)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,H=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),E4.copy(i.boundingSphere),E4.applyMatrix4(H),W0.copy(e.ray).recast(e.near),!(E4.containsPoint(W0.origin)===!1&&(W0.intersectSphere(E4,tC)===null||W0.origin.distanceToSquared(tC)>(e.far-e.near)**2))&&(eC.copy(H).invert(),W0.copy(e.ray).applyMatrix4(eC),!(i.boundingBox!==null&&W0.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,W0)))}_computeIntersections(e,t,i){let r,H=this.geometry,V=this.material,n=H.index,L=H.attributes.position,a=H.attributes.uv,o=H.attributes.uv1,M=H.attributes.normal,s=H.groups,l=H.drawRange;if(n!==null)if(Array.isArray(V))for(let u=0,x=s.length;u<x;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),_=Math.min(n.count,Math.min(c.start+c.count,l.start+l.count));for(let f=v,g=_;f<g;f+=3){let Z=n.getX(f),b=n.getX(f+1),m=n.getX(f+2);r=k4(this,d,e,i,a,o,M,Z,b,m),r&&(r.faceIndex=Math.floor(f/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{let u=Math.max(0,l.start),x=Math.min(n.count,l.start+l.count);for(let c=u,d=x;c<d;c+=3){let v=n.getX(c),_=n.getX(c+1),f=n.getX(c+2);r=k4(this,V,e,i,a,o,M,v,_,f),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}else if(L!==void 0)if(Array.isArray(V))for(let u=0,x=s.length;u<x;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),_=Math.min(L.count,Math.min(c.start+c.count,l.start+l.count));for(let f=v,g=_;f<g;f+=3){let Z=f,b=f+1,m=f+2;r=k4(this,d,e,i,a,o,M,Z,b,m),r&&(r.faceIndex=Math.floor(f/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{let u=Math.max(0,l.start),x=Math.min(L.count,l.start+l.count);for(let c=u,d=x;c<d;c+=3){let v=c,_=c+1,f=c+2;r=k4(this,V,e,i,a,o,M,v,_,f),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}}};function dn(C,e,t,i,r,H,V,n){let L;if(e.side===t5?L=i.intersectTriangle(V,H,r,!0,n):L=i.intersectTriangle(r,H,V,e.side===T0,n),L===null)return null;F4.copy(n),F4.applyMatrix4(C.matrixWorld);let a=t.ray.origin.distanceTo(F4);return a<t.near||a>t.far?null:{distance:a,point:F4.clone(),object:C}}function k4(C,e,t,i,r,H,V,n,L,a){C.getVertexPosition(n,R4),C.getVertexPosition(L,P4),C.getVertexPosition(a,B4);let o=dn(C,e,t,i,R4,P4,B4,CC);if(o){let M=new T;x0.getBarycoord(CC,R4,P4,B4,M),r&&(o.uv=x0.getInterpolatedAttribute(r,n,L,a,M,new f1)),H&&(o.uv1=x0.getInterpolatedAttribute(H,n,L,a,M,new f1)),V&&(o.normal=x0.getInterpolatedAttribute(V,n,L,a,M,new T),o.normal.dot(i.direction)>0&&o.normal.multiplyScalar(-1));let s={a:n,b:L,c:a,normal:new T,materialIndex:0};x0.getNormal(R4,P4,B4,s.normal),o.face=s,o.barycoord=M}return o}var V9=class extends J2{constructor(e=null,t=1,i=1,r,H,V,n,L,a=I2,o=I2,M,s){super(null,V,n,L,a,o,r,H,M,s),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $0=new P3,cn=new f1(.5,.5),D4=new T,B3=class{constructor(e=new S5,t=new S5,i=new S5,r=new S5,H=new S5,V=new S5){this.planes=[e,t,i,r,H,V]}set(e,t,i,r,H,V){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(H),n[5].copy(V),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=g5,i=!1){let r=this.planes,H=e.elements,V=H[0],n=H[1],L=H[2],a=H[3],o=H[4],M=H[5],s=H[6],l=H[7],u=H[8],x=H[9],c=H[10],d=H[11],v=H[12],_=H[13],f=H[14],g=H[15];if(r[0].setComponents(a-V,l-o,d-u,g-v).normalize(),r[1].setComponents(a+V,l+o,d+u,g+v).normalize(),r[2].setComponents(a+n,l+M,d+x,g+_).normalize(),r[3].setComponents(a-n,l-M,d-x,g-_).normalize(),i)r[4].setComponents(L,s,c,f).normalize(),r[5].setComponents(a-L,l-s,d-c,g-f).normalize();else if(r[4].setComponents(a-L,l-s,d-c,g-f).normalize(),t===g5)r[5].setComponents(a+L,l+s,d+c,g+f).normalize();else if(t===b3)r[5].setComponents(L,s,c,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$0.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$0.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($0)}intersectsSprite(e){$0.center.set(0,0,0);let t=cn.distanceTo(e.center);return $0.radius=.7071067811865476+t,$0.applyMatrix4(e.matrixWorld),this.intersectsSphere($0)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let H=0;H<6;H++)if(t[H].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(D4.x=r.normal.x>0?e.max.x:e.min.x,D4.y=r.normal.y>0?e.max.y:e.min.y,D4.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(D4)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _7=class extends J2{constructor(e=[],t=w0,i,r,H,V,n,L,a,o){super(e,t,i,r,H,V,n,L,a,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},b7=class extends J2{constructor(e,t,i,r,H,V,n,L,a){super(e,t,i,r,H,V,n,L,a),this.isCanvasTexture=!0,this.needsUpdate=!0}};var g0=class extends J2{constructor(e,t,i=b5,r,H,V,n=I2,L=I2,a,o=I5,M=1){if(o!==I5&&o!==E0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let s={width:e,height:t,depth:M};super(s,r,H,V,n,L,o,i,a),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new O3(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},n9=class extends g0{constructor(e,t=b5,i=w0,r,H,V=I2,n=I2,L,a=I5){let o={width:e,height:e,depth:1},M=[o,o,o,o,o,o];super(e,e,t,i,r,H,V,n,L,a),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},T7=class extends J2{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Z0=class C extends y5{constructor(e=1,t=1,i=1,r=1,H=1,V=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:H,depthSegments:V};let n=this;r=Math.floor(r),H=Math.floor(H),V=Math.floor(V);let L=[],a=[],o=[],M=[],s=0,l=0;u("z","y","x",-1,-1,i,t,e,V,H,0),u("z","y","x",1,-1,i,t,-e,V,H,1),u("x","z","y",1,1,e,i,t,r,V,2),u("x","z","y",1,-1,e,i,-t,r,V,3),u("x","y","z",1,-1,e,t,i,r,H,4),u("x","y","z",-1,-1,e,t,-i,r,H,5),this.setIndex(L),this.setAttribute("position",new K2(a,3)),this.setAttribute("normal",new K2(o,3)),this.setAttribute("uv",new K2(M,2));function u(x,c,d,v,_,f,g,Z,b,m,y){let R=f/b,I=g/m,N=f/2,G=g/2,P=Z/2,U=b+1,K=m+1,Q=0,r1=0,q=new T;for(let t1=0;t1<K;t1++){let i1=t1*I-G;for(let R1=0;R1<U;R1++){let O1=R1*R-N;q[x]=O1*v,q[c]=i1*_,q[d]=P,a.push(q.x,q.y,q.z),q[x]=0,q[c]=0,q[d]=Z>0?1:-1,o.push(q.x,q.y,q.z),M.push(R1/b),M.push(1-t1/m),Q+=1}}for(let t1=0;t1<m;t1++)for(let i1=0;i1<b;i1++){let R1=s+i1+U*t1,O1=s+i1+U*(t1+1),o2=s+(i1+1)+U*(t1+1),Q1=s+(i1+1)+U*t1;L.push(R1,O1,Q1),L.push(O1,o2,Q1),r1+=6}n.addGroup(l,r1,y),l+=r1,s+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var a5=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B1("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),H=0;t.push(0);for(let V=1;V<=e;V++)i=this.getPoint(V/e),H+=i.distanceTo(r),t.push(H),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,H=i.length,V;t?V=t:V=e*i[H-1];let n=0,L=H-1,a;for(;n<=L;)if(r=Math.floor(n+(L-n)/2),a=i[r]-V,a<0)n=r+1;else if(a>0)L=r-1;else{L=r;break}if(r=L,i[r]===V)return r/(H-1);let o=i[r],s=i[r+1]-o,l=(V-o)/s;return(r+l)/(H-1)}getTangent(e,t){let r=e-1e-4,H=e+1e-4;r<0&&(r=0),H>1&&(H=1);let V=this.getPoint(r),n=this.getPoint(H),L=t||(V.isVector2?new f1:new T);return L.copy(n).sub(V).normalize(),L}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,r=[],H=[],V=[],n=new T,L=new n2;for(let l=0;l<=e;l++){let u=l/e;r[l]=this.getTangentAt(u,new T)}H[0]=new T,V[0]=new T;let a=Number.MAX_VALUE,o=Math.abs(r[0].x),M=Math.abs(r[0].y),s=Math.abs(r[0].z);o<=a&&(a=o,i.set(1,0,0)),M<=a&&(a=M,i.set(0,1,0)),s<=a&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),H[0].crossVectors(r[0],n),V[0].crossVectors(r[0],H[0]);for(let l=1;l<=e;l++){if(H[l]=H[l-1].clone(),V[l]=V[l-1].clone(),n.crossVectors(r[l-1],r[l]),n.length()>Number.EPSILON){n.normalize();let u=Math.acos(W1(r[l-1].dot(r[l]),-1,1));H[l].applyMatrix4(L.makeRotationAxis(n,u))}V[l].crossVectors(r[l],H[l])}if(t===!0){let l=Math.acos(W1(H[0].dot(H[e]),-1,1));l/=e,r[0].dot(n.crossVectors(H[0],H[e]))>0&&(l=-l);for(let u=1;u<=e;u++)H[u].applyMatrix4(L.makeRotationAxis(r[u],l*u)),V[u].crossVectors(r[u],H[u])}return{tangents:r,normals:H,binormals:V}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},I3=class extends a5{constructor(e=0,t=0,i=1,r=1,H=0,V=Math.PI*2,n=!1,L=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=H,this.aEndAngle=V,this.aClockwise=n,this.aRotation=L}getPoint(e,t=new f1){let i=t,r=Math.PI*2,H=this.aEndAngle-this.aStartAngle,V=Math.abs(H)<Number.EPSILON;for(;H<0;)H+=r;for(;H>r;)H-=r;H<Number.EPSILON&&(V?H=0:H=r),this.aClockwise===!0&&!V&&(H===r?H=-r:H=H-r);let n=this.aStartAngle+e*H,L=this.aX+this.xRadius*Math.cos(n),a=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let o=Math.cos(this.aRotation),M=Math.sin(this.aRotation),s=L-this.aX,l=a-this.aY;L=s*o-l*M+this.aX,a=s*M+l*o+this.aY}return i.set(L,a)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},L9=class extends I3{constructor(e,t,i,r,H,V){super(e,t,i,i,r,H,V),this.isArcCurve=!0,this.type="ArcCurve"}};function xe(){let C=0,e=0,t=0,i=0;function r(H,V,n,L){C=H,e=n,t=-3*H+3*V-2*n-L,i=2*H-2*V+n+L}return{initCatmullRom:function(H,V,n,L,a){r(V,n,a*(n-H),a*(L-V))},initNonuniformCatmullRom:function(H,V,n,L,a,o,M){let s=(V-H)/a-(n-H)/(a+o)+(n-V)/o,l=(n-V)/o-(L-V)/(o+M)+(L-n)/M;s*=o,l*=o,r(V,n,s,l)},calc:function(H){let V=H*H,n=V*H;return C+e*H+t*V+i*n}}}var iC=new T,rC=new T,R8=new xe,P8=new xe,B8=new xe,a9=class extends a5{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){let i=t,r=this.points,H=r.length,V=(H-(this.closed?0:1))*e,n=Math.floor(V),L=V-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/H)+1)*H:L===0&&n===H-1&&(n=H-2,L=1);let a,o;this.closed||n>0?a=r[(n-1)%H]:(rC.subVectors(r[0],r[1]).add(r[0]),a=rC);let M=r[n%H],s=r[(n+1)%H];if(this.closed||n+2<H?o=r[(n+2)%H]:(iC.subVectors(r[H-1],r[H-2]).add(r[H-1]),o=iC),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,u=Math.pow(a.distanceToSquared(M),l),x=Math.pow(M.distanceToSquared(s),l),c=Math.pow(s.distanceToSquared(o),l);x<1e-4&&(x=1),u<1e-4&&(u=x),c<1e-4&&(c=x),R8.initNonuniformCatmullRom(a.x,M.x,s.x,o.x,u,x,c),P8.initNonuniformCatmullRom(a.y,M.y,s.y,o.y,u,x,c),B8.initNonuniformCatmullRom(a.z,M.z,s.z,o.z,u,x,c)}else this.curveType==="catmullrom"&&(R8.initCatmullRom(a.x,M.x,s.x,o.x,this.tension),P8.initCatmullRom(a.y,M.y,s.y,o.y,this.tension),B8.initCatmullRom(a.z,M.z,s.z,o.z,this.tension));return i.set(R8.calc(L),P8.calc(L),B8.calc(L)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function HC(C,e,t,i,r){let H=(i-e)*.5,V=(r-t)*.5,n=C*C,L=C*n;return(2*t-2*i+H+V)*L+(-3*t+3*i-2*H-V)*n+H*C+t}function pn(C,e){let t=1-C;return t*t*e}function un(C,e){return 2*(1-C)*C*e}function An(C,e){return C*C*e}function p7(C,e,t,i){return pn(C,e)+un(C,t)+An(C,i)}function mn(C,e){let t=1-C;return t*t*t*e}function hn(C,e){let t=1-C;return 3*t*t*C*e}function fn(C,e){return 3*(1-C)*C*C*e}function xn(C,e){return C*C*C*e}function u7(C,e,t,i,r){return mn(C,e)+hn(C,t)+fn(C,i)+xn(C,r)}var w7=class extends a5{constructor(e=new f1,t=new f1,i=new f1,r=new f1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new f1){let i=t,r=this.v0,H=this.v1,V=this.v2,n=this.v3;return i.set(u7(e,r.x,H.x,V.x,n.x),u7(e,r.y,H.y,V.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},o9=class extends a5{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){let i=t,r=this.v0,H=this.v1,V=this.v2,n=this.v3;return i.set(u7(e,r.x,H.x,V.x,n.x),u7(e,r.y,H.y,V.y,n.y),u7(e,r.z,H.z,V.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},O7=class extends a5{constructor(e=new f1,t=new f1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new f1){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new f1){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},s9=class extends a5{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},E7=class extends a5{constructor(e=new f1,t=new f1,i=new f1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new f1){let i=t,r=this.v0,H=this.v1,V=this.v2;return i.set(p7(e,r.x,H.x,V.x),p7(e,r.y,H.y,V.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},M9=class extends a5{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,r=this.v0,H=this.v1,V=this.v2;return i.set(p7(e,r.x,H.x,V.x),p7(e,r.y,H.y,V.y),p7(e,r.z,H.z,V.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},R7=class extends a5{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new f1){let i=t,r=this.points,H=(r.length-1)*e,V=Math.floor(H),n=H-V,L=r[V===0?V:V-1],a=r[V],o=r[V>r.length-2?r.length-1:V+1],M=r[V>r.length-3?r.length-1:V+2];return i.set(HC(n,L.x,a.x,o.x,M.x),HC(n,L.y,a.y,o.y,M.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new f1().fromArray(r))}return this}},VC=Object.freeze({__proto__:null,ArcCurve:L9,CatmullRomCurve3:a9,CubicBezierCurve:w7,CubicBezierCurve3:o9,EllipseCurve:I3,LineCurve:O7,LineCurve3:s9,QuadraticBezierCurve:E7,QuadraticBezierCurve3:M9,SplineCurve:R7}),l9=class extends a5{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new VC[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),H=0;for(;H<r.length;){if(r[H]>=i){let V=r[H]-i,n=this.curves[H],L=n.getLength(),a=L===0?0:1-V/L;return n.getPointAt(a,t)}H++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,H=this.curves;r<H.length;r++){let V=H[r],n=V.isEllipseCurve?e*2:V.isLineCurve||V.isLineCurve3?1:V.isSplineCurve?e*V.points.length:e,L=V.getPoints(n);for(let a=0;a<L.length;a++){let o=L[a];i&&i.equals(o)||(t.push(o),i=o)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new VC[r.type]().fromJSON(r))}return this}},P7=class extends l9{constructor(e){super(),this.type="Path",this.currentPoint=new f1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new O7(this.currentPoint.clone(),new f1(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let H=new E7(this.currentPoint.clone(),new f1(e,t),new f1(i,r));return this.curves.push(H),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,H,V){let n=new w7(this.currentPoint.clone(),new f1(e,t),new f1(i,r),new f1(H,V));return this.curves.push(n),this.currentPoint.set(H,V),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new R7(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,H,V){let n=this.currentPoint.x,L=this.currentPoint.y;return this.absarc(e+n,t+L,i,r,H,V),this}absarc(e,t,i,r,H,V){return this.absellipse(e,t,i,i,r,H,V),this}ellipse(e,t,i,r,H,V,n,L){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absellipse(e+a,t+o,i,r,H,V,n,L),this}absellipse(e,t,i,r,H,V,n,L){let a=new I3(e,t,i,r,H,V,n,L);if(this.curves.length>0){let M=a.getPoint(0);M.equals(this.currentPoint)||this.lineTo(M.x,M.y)}this.curves.push(a);let o=a.getPoint(1);return this.currentPoint.copy(o),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},F3=class extends P7{constructor(e){super(e),this.uuid=K0(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new P7().fromJSON(r))}return this}};function vn(C,e,t=2){let i=e&&e.length,r=i?e[0]*t:C.length,H=ii(C,0,r,t,!0),V=[];if(!H||H.next===H.prev)return V;let n,L,a;if(i&&(H=_n(C,e,H,t)),C.length>80*t){n=C[0],L=C[1];let o=n,M=L;for(let s=t;s<r;s+=t){let l=C[s],u=C[s+1];l<n&&(n=l),u<L&&(L=u),l>o&&(o=l),u>M&&(M=u)}a=Math.max(o-n,M-L),a=a!==0?32767/a:0}return B7(H,V,t,n,L,a,0),V}function ii(C,e,t,i,r){let H;if(r===kn(C,e,t,i)>0)for(let V=e;V<t;V+=i)H=nC(V/i|0,C[V],C[V+1],H);else for(let V=t-i;V>=e;V-=i)H=nC(V/i|0,C[V],C[V+1],H);return H&&k3(H,H.next)&&(F7(H),H=H.next),H}function X0(C,e){if(!C)return C;e||(e=C);let t=C,i;do if(i=!1,!t.steiner&&(k3(t,t.next)||x2(t.prev,t,t.next)===0)){if(F7(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function B7(C,e,t,i,r,H,V){if(!C)return;!V&&H&&En(C,i,r,H);let n=C;for(;C.prev!==C.next;){let L=C.prev,a=C.next;if(H?gn(C,i,r,H):Sn(C)){e.push(L.i,C.i,a.i),F7(C),C=a.next,n=a.next;continue}if(C=a,C===n){V?V===1?(C=Zn(X0(C),e),B7(C,e,t,i,r,H,2)):V===2&&yn(C,e,t,i,r,H):B7(X0(C),e,t,i,r,H,1);break}}}function Sn(C){let e=C.prev,t=C,i=C.next;if(x2(e,t,i)>=0)return!1;let r=e.x,H=t.x,V=i.x,n=e.y,L=t.y,a=i.y,o=Math.min(r,H,V),M=Math.min(n,L,a),s=Math.max(r,H,V),l=Math.max(n,L,a),u=i.next;for(;u!==e;){if(u.x>=o&&u.x<=s&&u.y>=M&&u.y<=l&&l7(r,n,H,L,V,a,u.x,u.y)&&x2(u.prev,u,u.next)>=0)return!1;u=u.next}return!0}function gn(C,e,t,i){let r=C.prev,H=C,V=C.next;if(x2(r,H,V)>=0)return!1;let n=r.x,L=H.x,a=V.x,o=r.y,M=H.y,s=V.y,l=Math.min(n,L,a),u=Math.min(o,M,s),x=Math.max(n,L,a),c=Math.max(o,M,s),d=z8(l,u,e,t,i),v=z8(x,c,e,t,i),_=C.prevZ,f=C.nextZ;for(;_&&_.z>=d&&f&&f.z<=v;){if(_.x>=l&&_.x<=x&&_.y>=u&&_.y<=c&&_!==r&&_!==V&&l7(n,o,L,M,a,s,_.x,_.y)&&x2(_.prev,_,_.next)>=0||(_=_.prevZ,f.x>=l&&f.x<=x&&f.y>=u&&f.y<=c&&f!==r&&f!==V&&l7(n,o,L,M,a,s,f.x,f.y)&&x2(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;_&&_.z>=d;){if(_.x>=l&&_.x<=x&&_.y>=u&&_.y<=c&&_!==r&&_!==V&&l7(n,o,L,M,a,s,_.x,_.y)&&x2(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;f&&f.z<=v;){if(f.x>=l&&f.x<=x&&f.y>=u&&f.y<=c&&f!==r&&f!==V&&l7(n,o,L,M,a,s,f.x,f.y)&&x2(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function Zn(C,e){let t=C;do{let i=t.prev,r=t.next.next;!k3(i,r)&&Hi(i,t,t.next,r)&&I7(i,r)&&I7(r,i)&&(e.push(i.i,t.i,r.i),F7(t),F7(t.next),t=C=r),t=t.next}while(t!==C);return X0(t)}function yn(C,e,t,i,r,H){let V=C;do{let n=V.next.next;for(;n!==V.prev;){if(V.i!==n.i&&Bn(V,n)){let L=Vi(V,n);V=X0(V,V.next),L=X0(L,L.next),B7(V,e,t,i,r,H,0),B7(L,e,t,i,r,H,0);return}n=n.next}V=V.next}while(V!==C)}function _n(C,e,t,i){let r=[];for(let H=0,V=e.length;H<V;H++){let n=e[H]*i,L=H<V-1?e[H+1]*i:C.length,a=ii(C,n,L,i,!1);a===a.next&&(a.steiner=!0),r.push(Pn(a))}r.sort(bn);for(let H=0;H<r.length;H++)t=Tn(r[H],t);return t}function bn(C,e){let t=C.x-e.x;if(t===0&&(t=C.y-e.y,t===0)){let i=(C.next.y-C.y)/(C.next.x-C.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Tn(C,e){let t=wn(C,e);if(!t)return e;let i=Vi(t,C);return X0(i,i.next),X0(t,t.next)}function wn(C,e){let t=e,i=C.x,r=C.y,H=-1/0,V;if(k3(C,t))return t;do{if(k3(C,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let M=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(M<=i&&M>H&&(H=M,V=t.x<t.next.x?t:t.next,M===i))return V}t=t.next}while(t!==e);if(!V)return null;let n=V,L=V.x,a=V.y,o=1/0;t=V;do{if(i>=t.x&&t.x>=L&&i!==t.x&&ri(r<a?i:H,r,L,a,r<a?H:i,r,t.x,t.y)){let M=Math.abs(r-t.y)/(i-t.x);I7(t,C)&&(M<o||M===o&&(t.x>V.x||t.x===V.x&&On(V,t)))&&(V=t,o=M)}t=t.next}while(t!==n);return V}function On(C,e){return x2(C.prev,C,e.prev)<0&&x2(e.next,C,C.next)<0}function En(C,e,t,i){let r=C;do r.z===0&&(r.z=z8(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==C);r.prevZ.nextZ=null,r.prevZ=null,Rn(r)}function Rn(C){let e,t=1;do{let i=C,r;C=null;let H=null;for(e=0;i;){e++;let V=i,n=0;for(let a=0;a<t&&(n++,V=V.nextZ,!!V);a++);let L=t;for(;n>0||L>0&&V;)n!==0&&(L===0||!V||i.z<=V.z)?(r=i,i=i.nextZ,n--):(r=V,V=V.nextZ,L--),H?H.nextZ=r:C=r,r.prevZ=H,H=r;i=V}H.nextZ=null,t*=2}while(e>1);return C}function z8(C,e,t,i,r){return C=(C-t)*r|0,e=(e-i)*r|0,C=(C|C<<8)&16711935,C=(C|C<<4)&252645135,C=(C|C<<2)&858993459,C=(C|C<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,C|e<<1}function Pn(C){let e=C,t=C;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==C);return t}function ri(C,e,t,i,r,H,V,n){return(r-V)*(e-n)>=(C-V)*(H-n)&&(C-V)*(i-n)>=(t-V)*(e-n)&&(t-V)*(H-n)>=(r-V)*(i-n)}function l7(C,e,t,i,r,H,V,n){return!(C===V&&e===n)&&ri(C,e,t,i,r,H,V,n)}function Bn(C,e){return C.next.i!==e.i&&C.prev.i!==e.i&&!In(C,e)&&(I7(C,e)&&I7(e,C)&&Fn(C,e)&&(x2(C.prev,C,e.prev)||x2(C,e.prev,e))||k3(C,e)&&x2(C.prev,C,C.next)>0&&x2(e.prev,e,e.next)>0)}function x2(C,e,t){return(e.y-C.y)*(t.x-e.x)-(e.x-C.x)*(t.y-e.y)}function k3(C,e){return C.x===e.x&&C.y===e.y}function Hi(C,e,t,i){let r=U4(x2(C,e,t)),H=U4(x2(C,e,i)),V=U4(x2(t,i,C)),n=U4(x2(t,i,e));return!!(r!==H&&V!==n||r===0&&N4(C,t,e)||H===0&&N4(C,i,e)||V===0&&N4(t,C,i)||n===0&&N4(t,e,i))}function N4(C,e,t){return e.x<=Math.max(C.x,t.x)&&e.x>=Math.min(C.x,t.x)&&e.y<=Math.max(C.y,t.y)&&e.y>=Math.min(C.y,t.y)}function U4(C){return C>0?1:C<0?-1:0}function In(C,e){let t=C;do{if(t.i!==C.i&&t.next.i!==C.i&&t.i!==e.i&&t.next.i!==e.i&&Hi(t,t.next,C,e))return!0;t=t.next}while(t!==C);return!1}function I7(C,e){return x2(C.prev,C,C.next)<0?x2(C,e,C.next)>=0&&x2(C,C.prev,e)>=0:x2(C,e,C.prev)<0||x2(C,C.next,e)<0}function Fn(C,e){let t=C,i=!1,r=(C.x+e.x)/2,H=(C.y+e.y)/2;do t.y>H!=t.next.y>H&&t.next.y!==t.y&&r<(t.next.x-t.x)*(H-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==C);return i}function Vi(C,e){let t=G8(C.i,C.x,C.y),i=G8(e.i,e.x,e.y),r=C.next,H=e.prev;return C.next=e,e.prev=C,t.next=r,r.prev=t,i.next=t,t.prev=i,H.next=i,i.prev=H,i}function nC(C,e,t,i){let r=G8(C,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function F7(C){C.next.prev=C.prev,C.prev.next=C.next,C.prevZ&&(C.prevZ.nextZ=C.nextZ),C.nextZ&&(C.nextZ.prevZ=C.prevZ)}function G8(C,e,t){return{i:C,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kn(C,e,t,i){let r=0;for(let H=e,V=t-i;H<t;H+=i)r+=(C[V]-C[H])*(C[H+1]+C[V+1]),V=H;return r}var W8=class{static triangulate(e,t,i=2){return vn(e,t,i)}},y3=class C{static area(e){let t=e.length,i=0;for(let r=t-1,H=0;H<t;r=H++)i+=e[r].x*e[H].y-e[H].x*e[r].y;return i*.5}static isClockWise(e){return C.area(e)<0}static triangulateShape(e,t){let i=[],r=[],H=[];LC(e),aC(i,e);let V=e.length;t.forEach(LC);for(let L=0;L<t.length;L++)r.push(V),V+=t[L].length,aC(i,t[L]);let n=W8.triangulate(i,r);for(let L=0;L<n.length;L+=3)H.push(n.slice(L,L+3));return H}};function LC(C){let e=C.length;e>2&&C[e-1].equals(C[0])&&C.pop()}function aC(C,e){for(let t=0;t<e.length;t++)C.push(e[t].x),C.push(e[t].y)}var k7=class C extends y5{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let H=e/2,V=t/2,n=Math.floor(i),L=Math.floor(r),a=n+1,o=L+1,M=e/n,s=t/L,l=[],u=[],x=[],c=[];for(let d=0;d<o;d++){let v=d*s-V;for(let _=0;_<a;_++){let f=_*M-H;u.push(f,-v,0),x.push(0,0,1),c.push(_/n),c.push(1-d/L)}}for(let d=0;d<L;d++)for(let v=0;v<n;v++){let _=v+a*d,f=v+a*(d+1),g=v+1+a*(d+1),Z=v+1+a*d;l.push(_,f,Z),l.push(f,g,Z)}this.setIndex(l),this.setAttribute("position",new K2(u,3)),this.setAttribute("normal",new K2(x,3)),this.setAttribute("uv",new K2(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C(e.width,e.height,e.widthSegments,e.heightSegments)}};var D7=class C extends y5{constructor(e=new F3([new f1(0,.5),new f1(-.5,-.5),new f1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],H=[],V=[],n=0,L=0;if(Array.isArray(e)===!1)a(e);else for(let o=0;o<e.length;o++)a(e[o]),this.addGroup(n,L,o),n+=L,L=0;this.setIndex(i),this.setAttribute("position",new K2(r,3)),this.setAttribute("normal",new K2(H,3)),this.setAttribute("uv",new K2(V,2));function a(o){let M=r.length/3,s=o.extractPoints(t),l=s.shape,u=s.holes;y3.isClockWise(l)===!1&&(l=l.reverse());for(let c=0,d=u.length;c<d;c++){let v=u[c];y3.isClockWise(v)===!0&&(u[c]=v.reverse())}let x=y3.triangulateShape(l,u);for(let c=0,d=u.length;c<d;c++){let v=u[c];l=l.concat(v)}for(let c=0,d=l.length;c<d;c++){let v=l[c];r.push(v.x,v.y,0),H.push(0,0,1),V.push(v.x,v.y)}for(let c=0,d=x.length;c<d;c++){let v=x[c],_=v[0]+M,f=v[1]+M,g=v[2]+M;i.push(_,f,g),L+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Dn(t,e)}static fromJSON(e,t){let i=[];for(let r=0,H=e.shapes.length;r<H;r++){let V=t[e.shapes[r]];i.push(V)}return new C(i,e.curveSegments)}};function Dn(C,e){if(e.shapes=[],Array.isArray(C))for(let t=0,i=C.length;t<i;t++){let r=C[t];e.shapes.push(r.uuid)}else e.shapes.push(C.uuid);return e}function J0(C){let e={};for(let t in C){e[t]={};for(let i in C[t]){let r=C[t][i];if(oC(r))r.isRenderTargetTexture?(B1("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(oC(r[0])){let H=[];for(let V=0,n=r.length;V<n;V++)H[V]=r[V].clone();e[t][i]=H}else e[t][i]=r.slice();else e[t][i]=r}}return e}function q2(C){let e={};for(let t=0;t<C.length;t++){let i=J0(C[t]);for(let r in i)e[r]=i[r]}return e}function oC(C){return C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)}function Nn(C){let e=[];for(let t=0;t<C.length;t++)e.push(C[t].clone());return e}function ve(C){let e=C.getRenderTarget();return e===null?C.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Y1.workingColorSpace}var ni={clone:J0,merge:q2},Un=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,o5=class extends S0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Un,this.fragmentShader=zn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=J0(e.uniforms),this.uniformsGroups=Nn(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let V=this.uniforms[r].value;V&&V.isTexture?t.uniforms[r]={type:"t",value:V.toJSON(e).uuid}:V&&V.isColor?t.uniforms[r]={type:"c",value:V.getHex()}:V&&V.isVector2?t.uniforms[r]={type:"v2",value:V.toArray()}:V&&V.isVector3?t.uniforms[r]={type:"v3",value:V.toArray()}:V&&V.isVector4?t.uniforms[r]={type:"v4",value:V.toArray()}:V&&V.isMatrix3?t.uniforms[r]={type:"m3",value:V.toArray()}:V&&V.isMatrix4?t.uniforms[r]={type:"m4",value:V.toArray()}:t.uniforms[r]={value:V}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new D1().setHex(r.value);break;case"v2":this.uniforms[i].value=new f1().fromArray(r.value);break;case"v3":this.uniforms[i].value=new T().fromArray(r.value);break;case"v4":this.uniforms[i].value=new m2().fromArray(r.value);break;case"m3":this.uniforms[i].value=new F1().fromArray(r.value);break;case"m4":this.uniforms[i].value=new n2().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},d9=class extends o5{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},D3=class extends S0{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new D1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p6,this.normalScale=new f1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new u5,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var c9=class extends S0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},p9=class extends S0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function x3(C,e){return!C||C.constructor===e?C:typeof e.BYTES_PER_ELEMENT=="number"?new e(C):Array.prototype.slice.call(C)}function I8(C){return C!==void 0&&C.inTangents!==void 0&&C.outTangents!==void 0}var y0=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],H=t[i-1];C:{e:{let V;t:{i:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<H)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(H=r,r=t[++i],e<r)break e}V=t.length;break t}if(!(e>=H)){let n=t[1];e<n&&(i=2,H=n);for(let L=i-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===L)break;if(r=H,H=t[--i-1],e>=H)break e}V=i,i=0;break t}break C}for(;i<V;){let n=i+V>>>1;e<t[n]?V=n:i=n+1}if(r=t[i],H=t[i-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,H,r)}return this.interpolate_(i,H,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,H=e*r;for(let V=0;V!==r;++V)t[V]=i[H+V];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},u9=class extends y0{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:D8,endingEnd:D8}}intervalChanged_(e,t,i){let r=this.parameterPositions,H=e-2,V=e+1,n=r[H],L=r[V];if(n===void 0)switch(this.getSettings_().endingStart){case N8:H=e,n=2*t-i;break;case U8:H=r.length-2,n=t+r[H]-r[H+1];break;default:H=e,n=i}if(L===void 0)switch(this.getSettings_().endingEnd){case N8:V=e,L=2*i-t;break;case U8:V=1,L=i+r[1]-r[0];break;default:V=e-1,L=t}let a=(i-t)*.5,o=this.valueSize;this._weightPrev=a/(t-n),this._weightNext=a/(L-i),this._offsetPrev=H*o,this._offsetNext=V*o}interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,L=e*n,a=L-n,o=this._offsetPrev,M=this._offsetNext,s=this._weightPrev,l=this._weightNext,u=(i-t)/(r-t),x=u*u,c=x*u,d=-s*c+2*s*x-s*u,v=(1+s)*c+(-1.5-2*s)*x+(-.5+s)*u+1,_=(-1-l)*c+(1.5+l)*x+.5*u,f=l*c-l*x;for(let g=0;g!==n;++g)H[g]=d*V[o+g]+v*V[a+g]+_*V[L+g]+f*V[M+g];return H}},A9=class extends y0{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,L=e*n,a=L-n,o=(i-t)/(r-t),M=1-o;for(let s=0;s!==n;++s)H[s]=V[a+s]*M+V[L+s]*o;return H}},m9=class extends y0{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},h9=class extends y0{interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,L=e*n,a=L-n,o=this.inTangents,M=this.outTangents;if(!o||!M){let u=(i-t)/(r-t),x=1-u;for(let c=0;c!==n;++c)H[c]=V[a+c]*x+V[L+c]*u;return H}let s=n*2,l=e-1;for(let u=0;u!==n;++u){let x=V[a+u],c=V[L+u],d=l*s+u*2,v=M[d],_=M[d+1],f=e*s+u*2,g=o[f],Z=o[f+1],b=Wn(i,t,v,g,r);H[u]=Li(b,x,_,Z,c)}return H}};function Li(C,e,t,i,r){let H=1-C;return H*H*H*e+3*H*H*C*t+3*H*C*C*i+C*C*C*r}function Gn(C,e,t,i,r){let H=1-C;return 3*H*H*(t-e)+6*H*C*(i-t)+3*C*C*(r-i)}function Wn(C,e,t,i,r){let H=(C-e)/(r-e);for(let V=0;V<8;V++){let n=Li(H,e,t,i,r)-C;if(Math.abs(n)<1e-10)break;let L=Gn(H,e,t,i,r);if(Math.abs(L)<1e-10)break;H=Math.max(0,Math.min(1,H-n/L))}return H}var s5=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=x3(t,this.TimeBufferType),this.values=x3(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:x3(e.times,Array),values:x3(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),I8(e.settings)&&(i.settings={inTangents:x3(e.settings.inTangents,Array),outTangents:x3(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new m9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new A9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new u9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new h9(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case A7:t=this.InterpolantFactoryMethodDiscrete;break;case C9:t=this.InterpolantFactoryMethodLinear;break;case W4:t=this.InterpolantFactoryMethodSmooth;break;case k8:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return B1("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return A7;case this.InterpolantFactoryMethodLinear:return C9;case this.InterpolantFactoryMethodSmooth:return W4;case this.InterpolantFactoryMethodBezier:return k8}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;I8(this.settings)&&(sC(this.settings.inTangents,e),sC(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,H=0,V=r-1;for(;H!==r&&i[H]<e;)++H;for(;V!==-1&&i[V]>t;)--V;if(++V,H!==0||V!==r){H>=V&&(V=Math.max(V,1),H=V-1);let n=this.getValueSize();this.times=i.slice(H,V),this.values=this.values.slice(H*n,V*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I1("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,H=i.length;H===0&&(I1("KeyframeTrack: Track is empty.",this),e=!1);let V=null;for(let n=0;n!==H;n++){let L=i[n];if(typeof L=="number"&&isNaN(L)){I1("KeyframeTrack: Time is not a valid number.",this,n,L),e=!1;break}if(V!==null&&V>L){I1("KeyframeTrack: Out of order keys.",this,n,L,V),e=!1;break}V=L}if(r!==void 0&&RV(r))for(let n=0,L=r.length;n!==L;++n){let a=r[n];if(isNaN(a)){I1("KeyframeTrack: Value is not a valid number.",this,n,a),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===W4,H=e.length-1,V=1;for(let n=1;n<H;++n){let L=!1,a=e[n],o=e[n+1];if(a!==o&&(n!==1||a!==e[0]))if(r)L=!0;else{let M=n*i,s=M-i,l=M+i;for(let u=0;u!==i;++u){let x=t[M+u];if(x!==t[s+u]||x!==t[l+u]){L=!0;break}}}if(L){if(n!==V){e[V]=e[n];let M=n*i,s=V*i;for(let l=0;l!==i;++l)t[s+l]=t[M+l]}++V}}if(H>0){e[V]=e[H];for(let n=H*i,L=V*i,a=0;a!==i;++a)t[L+a]=t[n+a];++V}return V!==e.length?(this.times=e.slice(0,V),this.values=t.slice(0,V*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,I8(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function sC(C,e){for(let t=0,i=C.length;t!==i;t+=2)C[t]*=e}s5.prototype.ValueTypeName="";s5.prototype.TimeBufferType=Float32Array;s5.prototype.ValueBufferType=Float32Array;s5.prototype.DefaultInterpolation=C9;var _0=class extends s5{constructor(e,t,i){super(e,t,i)}};_0.prototype.ValueTypeName="bool";_0.prototype.ValueBufferType=Array;_0.prototype.DefaultInterpolation=A7;_0.prototype.InterpolantFactoryMethodLinear=void 0;_0.prototype.InterpolantFactoryMethodSmooth=void 0;var f9=class extends s5{constructor(e,t,i,r){super(e,t,i,r)}};f9.prototype.ValueTypeName="color";var x9=class extends s5{constructor(e,t,i,r){super(e,t,i,r)}};x9.prototype.ValueTypeName="number";var v9=class extends y0{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,L=(i-t)/(r-t),a=e*n;for(let o=a+n;a!==o;a+=4)S2.slerpFlat(H,0,V,a-n,V,a,L);return H}},N7=class extends s5{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new v9(this.times,this.values,this.getValueSize(),e)}};N7.prototype.ValueTypeName="quaternion";N7.prototype.InterpolantFactoryMethodSmooth=void 0;var b0=class extends s5{constructor(e,t,i){super(e,t,i)}};b0.prototype.ValueTypeName="string";b0.prototype.ValueBufferType=Array;b0.prototype.DefaultInterpolation=A7;b0.prototype.InterpolantFactoryMethodLinear=void 0;b0.prototype.InterpolantFactoryMethodSmooth=void 0;var S9=class extends s5{constructor(e,t,i,r){super(e,t,i,r)}};S9.prototype.ValueTypeName="vector";var g9=class{constructor(e,t,i){let r=this,H=!1,V=0,n=0,L,a=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(o){n++,H===!1&&r.onStart!==void 0&&r.onStart(o,V,n),H=!0},this.itemEnd=function(o){V++,r.onProgress!==void 0&&r.onProgress(o,V,n),V===n&&(H=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(o){r.onError!==void 0&&r.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),L?L(o):o},this.setURLModifier=function(o){return L=o,this},this.addHandler=function(o,M){return a.push(o,M),this},this.removeHandler=function(o){let M=a.indexOf(o);return M!==-1&&a.splice(M,2),this},this.getHandler=function(o){for(let M=0,s=a.length;M<s;M+=2){let l=a[M],u=a[M+1];if(l.global&&(l.lastIndex=0),l.test(o))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ai=new g9,Z9=class{constructor(e){this.manager=e!==void 0?e:ai,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,H){i.load(e,r,t,H)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Z9.DEFAULT_MATERIAL_NAME="__DEFAULT";var U7=class extends j2{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new D1(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var F8=new n2,MC=new T,lC=new T,y9=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new f1(512,512),this.mapType=r5,this.map=null,this.mapPass=null,this.matrix=new n2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new B3,this._frameExtents=new f1(1,1),this._viewportCount=1,this._viewports=[new m2(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;MC.setFromMatrixPosition(e.matrixWorld),t.position.copy(MC),lC.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lC),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){F8.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(F8,e.coordinateSystem,e.reversedDepth);let H=this._frameExtents,V=r?r.z/H.x:1,n=r?r.w/H.y:1,L=r?r.x/H.x:0,a=r?r.y/H.y:0;e.coordinateSystem===b3||e.reversedDepth?t.set(.5*V,0,0,.5*V+L,0,.5*n,0,.5*n+a,0,0,1,0,0,0,0,1):t.set(.5*V,0,0,.5*V+L,0,.5*n,0,.5*n+a,0,0,.5,.5,0,0,0,1),t.multiply(F8)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},z4=new T,G4=new S2,P5=new T,z7=class extends j2{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new n2,this.projectionMatrix=new n2,this.projectionMatrixInverse=new n2,this.coordinateSystem=g5,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(z4,G4,P5),P5.x===1&&P5.y===1&&P5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(z4,G4,P5.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(z4,G4,P5),P5.x===1&&P5.y===1&&P5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(z4,G4,P5.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},f0=new T,dC=new f1,cC=new f1,$2=class extends z7{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=w3*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(d7*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return w3*2*Math.atan(Math.tan(d7*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){f0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(f0.x,f0.y).multiplyScalar(-e/f0.z),f0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(f0.x,f0.y).multiplyScalar(-e/f0.z)}getViewSize(e,t){return this.getViewBounds(e,dC,cC),t.subVectors(cC,dC)}setViewOffset(e,t,i,r,H,V){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(d7*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,H=-.5*r,V=this.view;if(this.view!==null&&this.view.enabled){let L=V.fullWidth,a=V.fullHeight;H+=V.offsetX*r/L,t-=V.offsetY*i/a,r*=V.width/L,i*=V.height/a}let n=this.filmOffset;n!==0&&(H+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(H,H+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var N3=class extends z7{constructor(e=-1,t=1,i=1,r=-1,H=.1,V=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=H,this.far=V,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,H,V){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,H=i-e,V=i+e,n=r+t,L=r-t;if(this.view!==null&&this.view.enabled){let a=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=a*this.view.offsetX,V=H+a*this.view.width,n-=o*this.view.offsetY,L=n-o*this.view.height}this.projectionMatrix.makeOrthographic(H,V,n,L,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$8=class extends y9{constructor(){super(new N3(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},U3=class extends U7{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(j2.DEFAULT_UP),this.updateMatrix(),this.target=new j2,this.shadow=new $8}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},G7=class extends U7{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var v3=-90,S3=1,_9=class extends j2{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new $2(v3,S3,e,t);r.layers=this.layers,this.add(r);let H=new $2(v3,S3,e,t);H.layers=this.layers,this.add(H);let V=new $2(v3,S3,e,t);V.layers=this.layers,this.add(V);let n=new $2(v3,S3,e,t);n.layers=this.layers,this.add(n);let L=new $2(v3,S3,e,t);L.layers=this.layers,this.add(L);let a=new $2(v3,S3,e,t);a.layers=this.layers,this.add(a)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,H,V,n,L]=t;for(let a of t)this.remove(a);if(e===g5)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),V.up.set(0,0,1),V.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),L.up.set(0,1,0),L.lookAt(0,0,-1);else if(e===b3)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),V.up.set(0,0,-1),V.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),L.up.set(0,-1,0),L.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let a of t)this.add(a),a.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[H,V,n,L,a,o]=this.children,M=e.getRenderTarget(),s=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,H),e.setRenderTarget(i,1,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,V),e.setRenderTarget(i,2,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,L),e.setRenderTarget(i,4,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(M,s,l),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},b9=class extends $2{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Se="\\[\\]\\.:\\/",$n=new RegExp("["+Se+"]","g"),ge="[^"+Se+"]",qn="[^"+Se.replace("\\.","")+"]",Xn=/((?:WC+[\/:])*)/.source.replace("WC",ge),Yn=/(WCOD+)?/.source.replace("WCOD",qn),Qn=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ge),Kn=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ge),Jn=new RegExp("^"+Xn+Yn+Qn+Kn+"$"),jn=["material","materials","bones","map"],q8=class{constructor(e,t,i){let r=i||p2.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,H=i.length;r!==H;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},p2=class C{constructor(e,t,i){this.path=t,this.parsedPath=i||C.parseTrackName(t),this.node=C.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new C.Composite(e,t,i):new C(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($n,"")}static parseTrackName(e){let t=Jn.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let H=i.nodeName.substring(r+1);jn.indexOf(H)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=H)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(H){for(let V=0;V<H.length;V++){let n=H[V];if(n.name===t||n.uuid===t)return n;let L=i(n.children);if(L)return L}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,H=t.propertyIndex;if(e||(e=C.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){B1("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let a=t.objectIndex;switch(i){case"materials":if(!e.material){I1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){I1("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){I1("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===a){a=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){I1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){I1("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){I1("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(a!==void 0){if(e[a]===void 0){I1("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[a]}}let V=e[r];if(V===void 0){let a=t.nodeName;I1("PropertyBinding: Trying to update property for track: "+a+"."+r+" but it wasn't found.",e);return}let n=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?n=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(n=this.Versioning.MatrixWorldNeedsUpdate);let L=this.BindingType.Direct;if(H!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){I1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){I1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[H]!==void 0&&(H=e.morphTargetDictionary[H])}L=this.BindingType.ArrayElement,this.resolvedProperty=V,this.propertyIndex=H}else V.fromArray!==void 0&&V.toArray!==void 0?(L=this.BindingType.HasFromToArray,this.resolvedProperty=V):Array.isArray(V)?(L=this.BindingType.EntireArray,this.resolvedProperty=V):this.propertyName=r;this.getValue=this.GetterByBindingType[L],this.setValue=this.SetterByBindingTypeAndVersioning[L][n]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};p2.Composite=q8;p2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};p2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};p2.prototype.GetterByBindingType=[p2.prototype._getValue_direct,p2.prototype._getValue_array,p2.prototype._getValue_arrayElement,p2.prototype._getValue_toArray];p2.prototype.SetterByBindingTypeAndVersioning=[[p2.prototype._setValue_direct,p2.prototype._setValue_direct_setNeedsUpdate,p2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[p2.prototype._setValue_array,p2.prototype._setValue_array_setNeedsUpdate,p2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[p2.prototype._setValue_arrayElement,p2.prototype._setValue_arrayElement_setNeedsUpdate,p2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[p2.prototype._setValue_fromArray,p2.prototype._setValue_fromArray_setNeedsUpdate,p2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rd=new Float32Array(1);var pC=new n2,W7=class{constructor(e,t,i=0,r=1/0){this.ray=new Z7(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new E3,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):I1("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pC.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pC),this}intersectObject(e,t=!0,i=[]){return X8(e,this,i,t),i.sort(uC),i}intersectObjects(e,t=!0,i=[]){for(let r=0,H=e.length;r<H;r++)X8(e[r],this,i,t);return i.sort(uC),i}};function uC(C,e){return C.distance-e.distance}function X8(C,e,t,i){let r=!0;if(C.layers.test(e.layers)&&C.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let H=C.children;for(let V=0,n=H.length;V<n;V++)X8(H[V],e,t,!0)}}var we=class we{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let H=this.elements;return H[0]=e,H[2]=t,H[1]=i,H[3]=r,this}};we.prototype.isMatrix2=!0;var Y8=we;function Ze(C,e,t,i){let r=eL(i);switch(t){case ce:return C*e;case ue:return C*e/r.components*r.byteLength;case I9:return C*e/r.components*r.byteLength;case R0:return C*e*2/r.components*r.byteLength;case F9:return C*e*2/r.components*r.byteLength;case pe:return C*e*3/r.components*r.byteLength;case A5:return C*e*4/r.components*r.byteLength;case k9:return C*e*4/r.components*r.byteLength;case Y7:case Q7:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*8;case K7:case J7:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case N9:case z9:return Math.max(C,16)*Math.max(e,8)/4;case D9:case U9:return Math.max(C,8)*Math.max(e,8)/2;case G9:case W9:case q9:case X9:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*8;case $9:case j7:case Y9:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case Q9:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case K9:return Math.floor((C+4)/5)*Math.floor((e+3)/4)*16;case J9:return Math.floor((C+4)/5)*Math.floor((e+4)/5)*16;case j9:return Math.floor((C+5)/6)*Math.floor((e+4)/5)*16;case e6:return Math.floor((C+5)/6)*Math.floor((e+5)/6)*16;case t6:return Math.floor((C+7)/8)*Math.floor((e+4)/5)*16;case C6:return Math.floor((C+7)/8)*Math.floor((e+5)/6)*16;case i6:return Math.floor((C+7)/8)*Math.floor((e+7)/8)*16;case r6:return Math.floor((C+9)/10)*Math.floor((e+4)/5)*16;case H6:return Math.floor((C+9)/10)*Math.floor((e+5)/6)*16;case V6:return Math.floor((C+9)/10)*Math.floor((e+7)/8)*16;case n6:return Math.floor((C+9)/10)*Math.floor((e+9)/10)*16;case L6:return Math.floor((C+11)/12)*Math.floor((e+9)/10)*16;case a6:return Math.floor((C+11)/12)*Math.floor((e+11)/12)*16;case o6:case s6:case M6:return Math.ceil(C/4)*Math.ceil(e/4)*16;case l6:case d6:return Math.ceil(C/4)*Math.ceil(e/4)*8;case e4:case c6:return Math.ceil(C/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eL(C){switch(C){case r5:case se:return{byteLength:1,components:1};case W3:case Me:case w5:return{byteLength:2,components:1};case P9:case B9:return{byteLength:2,components:4};case b5:case R9:case T5:return{byteLength:4,components:1};case le:case de:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${C}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?B1("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wi(){let C=null,e=!1,t=null,i=null;function r(H,V){i=C.requestAnimationFrame(r),t(H,V)}return{start:function(){e!==!0&&t!==null&&C!==null&&(i=C.requestAnimationFrame(r),e=!0)},stop:function(){C!==null&&C.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(H){t=H},setContext:function(H){C=H}}}function CL(C){let e=new WeakMap;function t(n,L){let a=n.array,o=n.usage,M=a.byteLength,s=C.createBuffer();C.bindBuffer(L,s),C.bufferData(L,a,o),n.onUploadCallback();let l;if(a instanceof Float32Array)l=C.FLOAT;else if(typeof Float16Array<"u"&&a instanceof Float16Array)l=C.HALF_FLOAT;else if(a instanceof Uint16Array)n.isFloat16BufferAttribute?l=C.HALF_FLOAT:l=C.UNSIGNED_SHORT;else if(a instanceof Int16Array)l=C.SHORT;else if(a instanceof Uint32Array)l=C.UNSIGNED_INT;else if(a instanceof Int32Array)l=C.INT;else if(a instanceof Int8Array)l=C.BYTE;else if(a instanceof Uint8Array)l=C.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)l=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:s,type:l,bytesPerElement:a.BYTES_PER_ELEMENT,version:n.version,size:M}}function i(n,L,a){let o=L.array,M=L.updateRanges;if(C.bindBuffer(a,n),M.length===0)C.bufferSubData(a,0,o);else{M.sort((l,u)=>l.start-u.start);let s=0;for(let l=1;l<M.length;l++){let u=M[s],x=M[l];x.start<=u.start+u.count+1?u.count=Math.max(u.count,x.start+x.count-u.start):(++s,M[s]=x)}M.length=s+1;for(let l=0,u=M.length;l<u;l++){let x=M[l];C.bufferSubData(a,x.start*o.BYTES_PER_ELEMENT,o,x.start,x.count)}L.clearUpdateRanges()}L.onUploadCallback()}function r(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)}function H(n){n.isInterleavedBufferAttribute&&(n=n.data);let L=e.get(n);L&&(C.deleteBuffer(L.buffer),e.delete(n))}function V(n,L){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let o=e.get(n);(!o||o.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let a=e.get(n);if(a===void 0)e.set(n,t(n,L));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(a.buffer,n,L),a.version=n.version}}return{get:r,remove:H,update:V}}var iL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rL=`#ifdef USE_ALPHAHASH
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
#endif`,HL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aL=`#ifdef USE_AOMAP
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
#endif`,oL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sL=`#ifdef USE_BATCHING
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
#endif`,ML=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pL=`#ifdef USE_IRIDESCENCE
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
#endif`,uL=`#ifdef USE_BUMPMAP
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
#endif`,AL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ZL=`#define PI 3.141592653589793
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
} // validated`,yL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_L=`vec3 transformedNormal = objectNormal;
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
#endif`,bL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EL="gl_FragColor = linearToOutputTexel( gl_FragColor );",RL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PL=`#ifdef USE_ENVMAP
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
#endif`,BL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IL=`#ifdef USE_ENVMAP
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
#endif`,FL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kL=`#ifdef USE_ENVMAP
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
#endif`,DL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GL=`#ifdef USE_GRADIENTMAP
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
}`,WL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$L=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XL=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,YL=`#ifdef USE_ENVMAP
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
#endif`,QL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ea=`PhysicalMaterial material;
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
#endif`,ta=`uniform sampler2D dfgLUT;
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
}`,Ca=`
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
#endif`,ia=`#if defined( RE_IndirectDiffuse )
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
#endif`,ra=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ha=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Va=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,na=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,La=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aa=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oa=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sa=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ma=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,la=`#if defined( USE_POINTS_UV )
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
#endif`,da=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ca=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pa=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ua=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Aa=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ma=`#ifdef USE_MORPHTARGETS
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
#endif`,ha=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fa=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xa=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,va=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sa=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ga=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Za=`#ifdef USE_NORMALMAP
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
#endif`,ya=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_a=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ba=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ta=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wa=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oa=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ea=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ra=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pa=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ba=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ia=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fa=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ka=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Da=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Na=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ua=`float getShadowMask() {
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
}`,za=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ga=`#ifdef USE_SKINNING
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
#endif`,Wa=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$a=`#ifdef USE_SKINNING
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
#endif`,qa=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xa=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ya=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qa=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ka=`#ifdef USE_TRANSMISSION
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
#endif`,Ja=`#ifdef USE_TRANSMISSION
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
#endif`,ja=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eo=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,to=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Co=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,io=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ro=`uniform sampler2D t2D;
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
}`,Ho=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vo=`#ifdef ENVMAP_TYPE_CUBE
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
}`,no=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lo=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ao=`#include <common>
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
}`,oo=`#if DEPTH_PACKING == 3200
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
}`,so=`#define DISTANCE
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
}`,Mo=`#define DISTANCE
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
}`,lo=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,co=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,po=`uniform float scale;
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
}`,uo=`uniform vec3 diffuse;
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
}`,Ao=`#include <common>
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
}`,mo=`uniform vec3 diffuse;
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
}`,ho=`#define LAMBERT
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
}`,fo=`#define LAMBERT
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
}`,xo=`#define MATCAP
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
}`,vo=`#define MATCAP
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
}`,So=`#define NORMAL
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
}`,go=`#define NORMAL
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
}`,Zo=`#define PHONG
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
}`,yo=`#define PHONG
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
}`,_o=`#define STANDARD
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
}`,bo=`#define STANDARD
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
}`,To=`#define TOON
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
}`,wo=`#define TOON
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
}`,Oo=`uniform float size;
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
}`,Eo=`uniform vec3 diffuse;
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
}`,Ro=`#include <common>
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
}`,Po=`uniform vec3 color;
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
}`,Bo=`uniform float rotation;
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
}`,Io=`uniform vec3 diffuse;
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
}`,z1={alphahash_fragment:iL,alphahash_pars_fragment:rL,alphamap_fragment:HL,alphamap_pars_fragment:VL,alphatest_fragment:nL,alphatest_pars_fragment:LL,aomap_fragment:aL,aomap_pars_fragment:oL,batching_pars_vertex:sL,batching_vertex:ML,begin_vertex:lL,beginnormal_vertex:dL,bsdfs:cL,iridescence_fragment:pL,bumpmap_pars_fragment:uL,clipping_planes_fragment:AL,clipping_planes_pars_fragment:mL,clipping_planes_pars_vertex:hL,clipping_planes_vertex:fL,color_fragment:xL,color_pars_fragment:vL,color_pars_vertex:SL,color_vertex:gL,common:ZL,cube_uv_reflection_fragment:yL,defaultnormal_vertex:_L,displacementmap_pars_vertex:bL,displacementmap_vertex:TL,emissivemap_fragment:wL,emissivemap_pars_fragment:OL,colorspace_fragment:EL,colorspace_pars_fragment:RL,envmap_fragment:PL,envmap_common_pars_fragment:BL,envmap_pars_fragment:IL,envmap_pars_vertex:FL,envmap_physical_pars_fragment:YL,envmap_vertex:kL,fog_vertex:DL,fog_pars_vertex:NL,fog_fragment:UL,fog_pars_fragment:zL,gradientmap_pars_fragment:GL,lightmap_pars_fragment:WL,lights_lambert_fragment:$L,lights_lambert_pars_fragment:qL,lights_pars_begin:XL,lights_toon_fragment:QL,lights_toon_pars_fragment:KL,lights_phong_fragment:JL,lights_phong_pars_fragment:jL,lights_physical_fragment:ea,lights_physical_pars_fragment:ta,lights_fragment_begin:Ca,lights_fragment_maps:ia,lights_fragment_end:ra,lightprobes_pars_fragment:Ha,logdepthbuf_fragment:Va,logdepthbuf_pars_fragment:na,logdepthbuf_pars_vertex:La,logdepthbuf_vertex:aa,map_fragment:oa,map_pars_fragment:sa,map_particle_fragment:Ma,map_particle_pars_fragment:la,metalnessmap_fragment:da,metalnessmap_pars_fragment:ca,morphinstance_vertex:pa,morphcolor_vertex:ua,morphnormal_vertex:Aa,morphtarget_pars_vertex:ma,morphtarget_vertex:ha,normal_fragment_begin:fa,normal_fragment_maps:xa,normal_pars_fragment:va,normal_pars_vertex:Sa,normal_vertex:ga,normalmap_pars_fragment:Za,clearcoat_normal_fragment_begin:ya,clearcoat_normal_fragment_maps:_a,clearcoat_pars_fragment:ba,iridescence_pars_fragment:Ta,opaque_fragment:wa,packing:Oa,premultiplied_alpha_fragment:Ea,project_vertex:Ra,dithering_fragment:Pa,dithering_pars_fragment:Ba,roughnessmap_fragment:Ia,roughnessmap_pars_fragment:Fa,shadowmap_pars_fragment:ka,shadowmap_pars_vertex:Da,shadowmap_vertex:Na,shadowmask_pars_fragment:Ua,skinbase_vertex:za,skinning_pars_vertex:Ga,skinning_vertex:Wa,skinnormal_vertex:$a,specularmap_fragment:qa,specularmap_pars_fragment:Xa,tonemapping_fragment:Ya,tonemapping_pars_fragment:Qa,transmission_fragment:Ka,transmission_pars_fragment:Ja,uv_pars_fragment:ja,uv_pars_vertex:eo,uv_vertex:to,worldpos_vertex:Co,background_vert:io,background_frag:ro,backgroundCube_vert:Ho,backgroundCube_frag:Vo,cube_vert:no,cube_frag:Lo,depth_vert:ao,depth_frag:oo,distance_vert:so,distance_frag:Mo,equirect_vert:lo,equirect_frag:co,linedashed_vert:po,linedashed_frag:uo,meshbasic_vert:Ao,meshbasic_frag:mo,meshlambert_vert:ho,meshlambert_frag:fo,meshmatcap_vert:xo,meshmatcap_frag:vo,meshnormal_vert:So,meshnormal_frag:go,meshphong_vert:Zo,meshphong_frag:yo,meshphysical_vert:_o,meshphysical_frag:bo,meshtoon_vert:To,meshtoon_frag:wo,points_vert:Oo,points_frag:Eo,shadow_vert:Ro,shadow_frag:Po,sprite_vert:Bo,sprite_frag:Io},d1={common:{diffuse:{value:new D1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new F1},alphaMap:{value:null},alphaMapTransform:{value:new F1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new F1}},envmap:{envMap:{value:null},envMapRotation:{value:new F1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new F1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new F1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new F1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new F1},normalScale:{value:new f1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new F1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new F1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new F1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new F1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new D1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new D1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new F1},alphaTest:{value:0},uvTransform:{value:new F1}},sprite:{diffuse:{value:new D1(16777215)},opacity:{value:1},center:{value:new f1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new F1},alphaMap:{value:null},alphaMapTransform:{value:new F1},alphaTest:{value:0}}},U5={basic:{uniforms:q2([d1.common,d1.specularmap,d1.envmap,d1.aomap,d1.lightmap,d1.fog]),vertexShader:z1.meshbasic_vert,fragmentShader:z1.meshbasic_frag},lambert:{uniforms:q2([d1.common,d1.specularmap,d1.envmap,d1.aomap,d1.lightmap,d1.emissivemap,d1.bumpmap,d1.normalmap,d1.displacementmap,d1.fog,d1.lights,{emissive:{value:new D1(0)},envMapIntensity:{value:1}}]),vertexShader:z1.meshlambert_vert,fragmentShader:z1.meshlambert_frag},phong:{uniforms:q2([d1.common,d1.specularmap,d1.envmap,d1.aomap,d1.lightmap,d1.emissivemap,d1.bumpmap,d1.normalmap,d1.displacementmap,d1.fog,d1.lights,{emissive:{value:new D1(0)},specular:{value:new D1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:z1.meshphong_vert,fragmentShader:z1.meshphong_frag},standard:{uniforms:q2([d1.common,d1.envmap,d1.aomap,d1.lightmap,d1.emissivemap,d1.bumpmap,d1.normalmap,d1.displacementmap,d1.roughnessmap,d1.metalnessmap,d1.fog,d1.lights,{emissive:{value:new D1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z1.meshphysical_vert,fragmentShader:z1.meshphysical_frag},toon:{uniforms:q2([d1.common,d1.aomap,d1.lightmap,d1.emissivemap,d1.bumpmap,d1.normalmap,d1.displacementmap,d1.gradientmap,d1.fog,d1.lights,{emissive:{value:new D1(0)}}]),vertexShader:z1.meshtoon_vert,fragmentShader:z1.meshtoon_frag},matcap:{uniforms:q2([d1.common,d1.bumpmap,d1.normalmap,d1.displacementmap,d1.fog,{matcap:{value:null}}]),vertexShader:z1.meshmatcap_vert,fragmentShader:z1.meshmatcap_frag},points:{uniforms:q2([d1.points,d1.fog]),vertexShader:z1.points_vert,fragmentShader:z1.points_frag},dashed:{uniforms:q2([d1.common,d1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z1.linedashed_vert,fragmentShader:z1.linedashed_frag},depth:{uniforms:q2([d1.common,d1.displacementmap]),vertexShader:z1.depth_vert,fragmentShader:z1.depth_frag},normal:{uniforms:q2([d1.common,d1.bumpmap,d1.normalmap,d1.displacementmap,{opacity:{value:1}}]),vertexShader:z1.meshnormal_vert,fragmentShader:z1.meshnormal_frag},sprite:{uniforms:q2([d1.sprite,d1.fog]),vertexShader:z1.sprite_vert,fragmentShader:z1.sprite_frag},background:{uniforms:{uvTransform:{value:new F1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z1.background_vert,fragmentShader:z1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new F1}},vertexShader:z1.backgroundCube_vert,fragmentShader:z1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z1.cube_vert,fragmentShader:z1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z1.equirect_vert,fragmentShader:z1.equirect_frag},distance:{uniforms:q2([d1.common,d1.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z1.distance_vert,fragmentShader:z1.distance_frag},shadow:{uniforms:q2([d1.lights,d1.fog,{color:{value:new D1(0)},opacity:{value:1}}]),vertexShader:z1.shadow_vert,fragmentShader:z1.shadow_frag}};U5.physical={uniforms:q2([U5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new F1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new F1},clearcoatNormalScale:{value:new f1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new F1},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new F1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new F1},sheen:{value:0},sheenColor:{value:new D1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new F1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new F1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new F1},transmissionSamplerSize:{value:new f1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new F1},attenuationDistance:{value:0},attenuationColor:{value:new D1(0)},specularColor:{value:new D1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new F1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new F1},anisotropyVector:{value:new f1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new F1}}]),vertexShader:z1.meshphysical_vert,fragmentShader:z1.meshphysical_frag};var m6={r:0,b:0,g:0},Fo=new n2,Oi=new F1;Oi.set(-1,0,0,0,1,0,0,0,1);function ko(C,e,t,i,r,H){let V=new D1(0),n=r===!0?0:1,L,a,o=null,M=0,s=null;function l(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let f=v.backgroundBlurriness>0;_=e.get(_,f)}return _}function u(v){let _=!1,f=l(v);f===null?c(V,n):f&&f.isColor&&(c(f,1),_=!0);let g=C.xr.getEnvironmentBlendMode();g==="additive"?t.buffers.color.setClear(0,0,0,1,H):g==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,H),(C.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil))}function x(v,_){let f=l(_);f&&(f.isCubeTexture||f.mapping===q7)?(a===void 0&&(a=new e5(new Z0(1,1,1),new o5({name:"BackgroundCubeMaterial",uniforms:J0(U5.backgroundCube.uniforms),vertexShader:U5.backgroundCube.vertexShader,fragmentShader:U5.backgroundCube.fragmentShader,side:t5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),a.geometry.deleteAttribute("uv"),a.onBeforeRender=function(g,Z,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(a.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(a)),a.material.uniforms.envMap.value=f,a.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,a.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,a.material.uniforms.backgroundRotation.value.setFromMatrix4(Fo.makeRotationFromEuler(_.backgroundRotation)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&a.material.uniforms.backgroundRotation.value.premultiply(Oi),a.material.toneMapped=Y1.getTransfer(f.colorSpace)!==r2,(o!==f||M!==f.version||s!==C.toneMapping)&&(a.material.needsUpdate=!0,o=f,M=f.version,s=C.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null)):f&&f.isTexture&&(L===void 0&&(L=new e5(new k7(2,2),new o5({name:"BackgroundMaterial",uniforms:J0(U5.background.uniforms),vertexShader:U5.background.vertexShader,fragmentShader:U5.background.fragmentShader,side:T0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),L.geometry.deleteAttribute("normal"),Object.defineProperty(L.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(L)),L.material.uniforms.t2D.value=f,L.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,L.material.toneMapped=Y1.getTransfer(f.colorSpace)!==r2,f.matrixAutoUpdate===!0&&f.updateMatrix(),L.material.uniforms.uvTransform.value.copy(f.matrix),(o!==f||M!==f.version||s!==C.toneMapping)&&(L.material.needsUpdate=!0,o=f,M=f.version,s=C.toneMapping),L.layers.enableAll(),v.unshift(L,L.geometry,L.material,0,0,null))}function c(v,_){v.getRGB(m6,ve(C)),t.buffers.color.setClear(m6.r,m6.g,m6.b,_,H)}function d(){a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0),L!==void 0&&(L.geometry.dispose(),L.material.dispose(),L=void 0)}return{getClearColor:function(){return V},setClearColor:function(v,_=1){V.set(v),n=_,c(V,n)},getClearAlpha:function(){return n},setClearAlpha:function(v){n=v,c(V,n)},render:u,addToRenderList:x,dispose:d}}function Do(C,e){let t=C.getParameter(C.MAX_VERTEX_ATTRIBS),i={},r=s(null),H=r,V=!1;function n(I,N,G,P,U){let K=!1,Q=M(I,P,G,N);H!==Q&&(H=Q,a(H.object)),K=l(I,P,G,U),K&&u(I,P,G,U),U!==null&&e.update(U,C.ELEMENT_ARRAY_BUFFER),(K||V)&&(V=!1,f(I,N,G,P),U!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function L(){return C.createVertexArray()}function a(I){return C.bindVertexArray(I)}function o(I){return C.deleteVertexArray(I)}function M(I,N,G,P){let U=P.wireframe===!0,K=i[N.id];K===void 0&&(K={},i[N.id]=K);let Q=I.isInstancedMesh===!0?I.id:0,r1=K[Q];r1===void 0&&(r1={},K[Q]=r1);let q=r1[G.id];q===void 0&&(q={},r1[G.id]=q);let t1=q[U];return t1===void 0&&(t1=s(L()),q[U]=t1),t1}function s(I){let N=[],G=[],P=[];for(let U=0;U<t;U++)N[U]=0,G[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:P,object:I,attributes:{},index:null}}function l(I,N,G,P){let U=H.attributes,K=N.attributes,Q=0,r1=G.getAttributes();for(let q in r1)if(r1[q].location>=0){let i1=U[q],R1=K[q];if(R1===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(R1=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(R1=I.instanceColor)),i1===void 0||i1.attribute!==R1||R1&&i1.data!==R1.data)return!0;Q++}return H.attributesNum!==Q||H.index!==P}function u(I,N,G,P){let U={},K=N.attributes,Q=0,r1=G.getAttributes();for(let q in r1)if(r1[q].location>=0){let i1=K[q];i1===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(i1=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(i1=I.instanceColor));let R1={};R1.attribute=i1,i1&&i1.data&&(R1.data=i1.data),U[q]=R1,Q++}H.attributes=U,H.attributesNum=Q,H.index=P}function x(){let I=H.newAttributes;for(let N=0,G=I.length;N<G;N++)I[N]=0}function c(I){d(I,0)}function d(I,N){let G=H.newAttributes,P=H.enabledAttributes,U=H.attributeDivisors;G[I]=1,P[I]===0&&(C.enableVertexAttribArray(I),P[I]=1),U[I]!==N&&(C.vertexAttribDivisor(I,N),U[I]=N)}function v(){let I=H.newAttributes,N=H.enabledAttributes;for(let G=0,P=N.length;G<P;G++)N[G]!==I[G]&&(C.disableVertexAttribArray(G),N[G]=0)}function _(I,N,G,P,U,K,Q){Q===!0?C.vertexAttribIPointer(I,N,G,U,K):C.vertexAttribPointer(I,N,G,P,U,K)}function f(I,N,G,P){x();let U=P.attributes,K=G.getAttributes(),Q=N.defaultAttributeValues;for(let r1 in K){let q=K[r1];if(q.location>=0){let t1=U[r1];if(t1===void 0&&(r1==="instanceMatrix"&&I.instanceMatrix&&(t1=I.instanceMatrix),r1==="instanceColor"&&I.instanceColor&&(t1=I.instanceColor)),t1!==void 0){let i1=t1.normalized,R1=t1.itemSize,O1=e.get(t1);if(O1===void 0)continue;let o2=O1.buffer,Q1=O1.type,e2=O1.bytesPerElement,X=Q1===C.INT||Q1===C.UNSIGNED_INT||t1.gpuType===R9;if(t1.isInterleavedBufferAttribute){let e1=t1.data,x1=e1.stride,k1=t1.offset;if(e1.isInstancedInterleavedBuffer){for(let m1=0;m1<q.locationSize;m1++)d(q.location+m1,e1.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=e1.meshPerAttribute*e1.count)}else for(let m1=0;m1<q.locationSize;m1++)c(q.location+m1);C.bindBuffer(C.ARRAY_BUFFER,o2);for(let m1=0;m1<q.locationSize;m1++)_(q.location+m1,R1/q.locationSize,Q1,i1,x1*e2,(k1+R1/q.locationSize*m1)*e2,X)}else{if(t1.isInstancedBufferAttribute){for(let e1=0;e1<q.locationSize;e1++)d(q.location+e1,t1.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=t1.meshPerAttribute*t1.count)}else for(let e1=0;e1<q.locationSize;e1++)c(q.location+e1);C.bindBuffer(C.ARRAY_BUFFER,o2);for(let e1=0;e1<q.locationSize;e1++)_(q.location+e1,R1/q.locationSize,Q1,i1,R1*e2,R1/q.locationSize*e1*e2,X)}}else if(Q!==void 0){let i1=Q[r1];if(i1!==void 0)switch(i1.length){case 2:C.vertexAttrib2fv(q.location,i1);break;case 3:C.vertexAttrib3fv(q.location,i1);break;case 4:C.vertexAttrib4fv(q.location,i1);break;default:C.vertexAttrib1fv(q.location,i1)}}}}v()}function g(){y();for(let I in i){let N=i[I];for(let G in N){let P=N[G];for(let U in P){let K=P[U];for(let Q in K)o(K[Q].object),delete K[Q];delete P[U]}}delete i[I]}}function Z(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let G in N){let P=N[G];for(let U in P){let K=P[U];for(let Q in K)o(K[Q].object),delete K[Q];delete P[U]}}delete i[I.id]}function b(I){for(let N in i){let G=i[N];for(let P in G){let U=G[P];if(U[I.id]===void 0)continue;let K=U[I.id];for(let Q in K)o(K[Q].object),delete K[Q];delete U[I.id]}}}function m(I){for(let N in i){let G=i[N],P=I.isInstancedMesh===!0?I.id:0,U=G[P];if(U!==void 0){for(let K in U){let Q=U[K];for(let r1 in Q)o(Q[r1].object),delete Q[r1];delete U[K]}delete G[P],Object.keys(G).length===0&&delete i[N]}}}function y(){R(),V=!0,H!==r&&(H=r,a(H.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:n,reset:y,resetDefaultState:R,dispose:g,releaseStatesOfGeometry:Z,releaseStatesOfObject:m,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:c,disableUnusedAttributes:v}}function No(C,e,t){let i;function r(L){i=L}function H(L,a){C.drawArrays(i,L,a),t.update(a,i,1)}function V(L,a,o){o!==0&&(C.drawArraysInstanced(i,L,a,o),t.update(a,i,o))}function n(L,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,L,0,a,0,o);let s=0;for(let l=0;l<o;l++)s+=a[l];t.update(s,i,1)}this.setMode=r,this.render=H,this.renderInstances=V,this.renderMultiDraw=n}function Uo(C,e,t,i){let r;function H(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");r=C.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function V(b){return!(b!==A5&&i.convert(b)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT))}function n(b){let m=b===w5&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==r5&&b!==T5&&!m&&i.convert(b)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE))}function L(b){if(b==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=L(a);o!==a&&(B1("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let M=t.logarithmicDepthBuffer===!0,s=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&s===!1&&B1("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let l=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),u=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=C.getParameter(C.MAX_TEXTURE_SIZE),c=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),d=C.getParameter(C.MAX_VERTEX_ATTRIBS),v=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),_=C.getParameter(C.MAX_VARYING_VECTORS),f=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),g=C.getParameter(C.MAX_SAMPLES),Z=C.getParameter(C.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:L,textureFormatReadable:V,textureTypeReadable:n,precision:a,logarithmicDepthBuffer:M,reversedDepthBuffer:s,maxTextures:l,maxVertexTextures:u,maxTextureSize:x,maxCubemapSize:c,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:f,maxSamples:g,samples:Z}}function zo(C){let e=this,t=null,i=0,r=!1,H=!1,V=new S5,n=new F1,L={value:null,needsUpdate:!1};this.uniform=L,this.numPlanes=0,this.numIntersection=0,this.init=function(M,s){let l=M.length!==0||s||i!==0||r;return r=s,i=M.length,l},this.beginShadows=function(){H=!0,o(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(M,s){t=o(M,s,0)},this.setState=function(M,s,l){let u=M.clippingPlanes,x=M.clipIntersection,c=M.clipShadows,d=C.get(M);if(!r||u===null||u.length===0||H&&!c)H?o(null):a();else{let v=H?0:i,_=v*4,f=d.clippingState||null;L.value=f,f=o(u,s,_,l);for(let g=0;g!==_;++g)f[g]=t[g];d.clippingState=f,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function a(){L.value!==t&&(L.value=t,L.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function o(M,s,l,u){let x=M!==null?M.length:0,c=null;if(x!==0){if(c=L.value,u!==!0||c===null){let d=l+x*4,v=s.matrixWorldInverse;n.getNormalMatrix(v),(c===null||c.length<d)&&(c=new Float32Array(d));for(let _=0,f=l;_!==x;++_,f+=4)V.copy(M[_]).applyMatrix4(v,n),V.normal.toArray(c,f),c[f+3]=V.constant}L.value=c,L.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,c}}var X3=4,Go=6,Wo=20,$o=256,t4=new N3,oi=new D1,Oe=null,Ee=0,Re=0,Pe=!1,qo=new T,j0=new T,f6=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,H={}){let{size:V=256,position:n=qo}=H;Oe=this._renderer.getRenderTarget(),Ee=this._renderer.getActiveCubeFace(),Re=this._renderer.getActiveMipmapLevel(),Pe=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(V);let L=this._allocateTargets();return L.depthBuffer=!0,this._sceneToCubeUV(e,i,r,L,n),t>0&&this._blur(L,0,0,t),this._applyPMREM(L),this._cleanup(L),L}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=li(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oe,Ee,Re),this._renderer.xr.enabled=Pe,e.scissorTest=!1,q3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===w0||e.mapping===Q0?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oe=this._renderer.getRenderTarget(),Ee=this._renderer.getActiveCubeFace(),Re=this._renderer.getActiveMipmapLevel(),Pe=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:D2,minFilter:D2,generateMipmaps:!1,type:w5,format:A5,colorSpace:m7,depthBuffer:!1},r=si(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=si(e,t,i);let{_lodMax:H}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xo(H)),this._blurMaterial=Qo(H,e,t),this._ggxMaterial=Yo(H,e,t)}return r}_compileMaterial(e){let t=new e5(new y5,e);this._renderer.compile(t,t4)}_sceneToCubeUV(e,t,i,r,H){let L=new $2(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],M=this._renderer,s=M.autoClear,l=M.toneMapping;M.getClearColor(oi),M.toneMapping=_5,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(r),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new e5(new Z0,new y7({name:"PMREM.Background",side:t5,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,c=x.material,d=!1,v=e.background;v?v.isColor&&(c.color.copy(v),e.background=null,d=!0):(c.color.copy(oi),d=!0);for(let _=0;_<6;_++){let f=_%3;f===0?(L.up.set(0,a[_],0),L.position.set(H.x,H.y,H.z),L.lookAt(H.x+o[_],H.y,H.z)):f===1?(L.up.set(0,0,a[_]),L.position.set(H.x,H.y,H.z),L.lookAt(H.x,H.y+o[_],H.z)):(L.up.set(0,a[_],0),L.position.set(H.x,H.y,H.z),L.lookAt(H.x,H.y,H.z+o[_]));let g=this._cubeSize;q3(r,f*g,_>2?g:0,g,g),M.setRenderTarget(r),d&&M.render(x,L),M.render(e,L)}M.toneMapping=l,M.autoClear=s,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===w0||e.mapping===Q0;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=li()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mi());let H=r?this._cubemapMaterial:this._equirectMaterial,V=this._lodMeshes[0];V.material=H;let n=H.uniforms;n.envMap.value=e;let L=this._cubeSize;q3(t,0,0,3*L,2*L),i.setRenderTarget(t),i.render(V,t4)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let H=1;H<r;H++)this._applyGGXFilter(e,H-1,H);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,H=this._pingPongRenderTarget,V=this._ggxMaterial,n=this._lodMeshes[i];n.material=V;let L=V.uniforms,a=i/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),M=Math.sqrt(a*a-o*o),s=a*1.25,l=M*s,{_lodMax:u}=this,x=this._sizeLods[i],c=3*x*(i>u-X3?i-u+X3:0),d=4*(this._cubeSize-x);L.envMap.value=e.texture,L.roughness.value=l,L.mipInt.value=u-t,q3(H,c,d,3*x,2*x),r.setRenderTarget(H),r.render(n,t4),L.envMap.value=H.texture,L.roughness.value=0,L.mipInt.value=u-i,q3(e,c,d,3*x,2*x),r.setRenderTarget(e),r.render(n,t4)}_blur(e,t,i,r){let H=this._pingPongRenderTarget,V=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,H,t,i,V),this._blurPass(H,e,i,i,V)}_blurPass(e,t,i,r,H){let V=this._renderer,n=this._blurMaterial,L=this._lodMeshes[r];L.material=n;let a=n.uniforms;a.envMap.value=e.texture,a.sigma.value=H,a.mipInt.value=this._lodMax-i;let o=this._sizeLods[r],M=3*o*(r>this._lodMax-X3?r-this._lodMax+X3:0),s=4*(this._cubeSize-o);q3(t,M,s,3*o,2*o),V.setRenderTarget(t),V.render(L,t4)}};function Xo(C){let e=[],t=[],i=C,r=C-X3+1+Go;for(let H=0;H<r;H++){let V=Math.pow(2,i);e.push(V);let n=1/(V-2),L=-n,a=1+n,o=[L,L,a,L,a,a,L,L,a,a,L,a],M=6,s=6,l=3,u=new Float32Array(l*s*M),x=new Float32Array(l*s*M);for(let d=0;d<M;d++){let v=d%3*2/3-1,_=d>2?0:-1,f=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];u.set(f,l*s*d);for(let g=0;g<s;g++){let Z=o[g*2]*2-1,b=o[g*2+1]*2-1;d===0?j0.set(1,b,Z):d===1?j0.set(-Z,1,-b):d===2?j0.set(-Z,b,1):d===3?j0.set(-1,b,-Z):d===4?j0.set(-Z,-1,b):j0.set(Z,b,-1),j0.toArray(x,(d*s+g)*l)}}let c=new y5;c.setAttribute("position",new p5(u,l)),c.setAttribute("outputDirection",new p5(x,l)),t.push(new e5(c,null)),i>X3&&i--}return{lodMeshes:t,sizeLods:e}}function si(C,e,t){let i=new i5(C,e,t);return i.texture.mapping=q7,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function q3(C,e,t,i,r){C.viewport.set(e,t,i,r),C.scissor.set(e,t,i,r)}function Yo(C,e,t){return new o5({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$o,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:S6(),fragmentShader:`

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
		`,blending:D5,depthTest:!1,depthWrite:!1})}function Qo(C,e,t){return new o5({name:"SphericalGaussianBlur",defines:{SAMPLES:Wo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:S6(),fragmentShader:`

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
		`,blending:D5,depthTest:!1,depthWrite:!1})}function Mi(){return new o5({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:S6(),fragmentShader:`

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
		`,blending:D5,depthTest:!1,depthWrite:!1})}function li(){return new o5({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:S6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:D5,depthTest:!1,depthWrite:!1})}function S6(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var x6=class extends i5{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _7(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Z0(5,5,5),H=new o5({name:"CubemapFromEquirect",uniforms:J0(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:t5,blending:D5});H.uniforms.tEquirect.value=t;let V=new e5(r,H),n=t.minFilter;return t.minFilter===O0&&(t.minFilter=D2),new _9(1,10,this).update(e,V),t.minFilter=n,V.geometry.dispose(),V.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let H=e.getRenderTarget();for(let V=0;V<6;V++)e.setRenderTarget(this,V),e.clear(t,i,r);e.setRenderTarget(H)}};function Ko(C){let e=new WeakMap,t=new WeakMap,i=null;function r(s,l=!1){return s==null?null:l?V(s):H(s)}function H(s){if(s&&s.isTexture){let l=s.mapping;if(l===w9||l===O9)if(e.has(s)){let u=e.get(s).texture;return n(u,s.mapping)}else{let u=s.image;if(u&&u.height>0){let x=new x6(u.height);return x.fromEquirectangularTexture(C,s),e.set(s,x),s.addEventListener("dispose",a),n(x.texture,s.mapping)}else return null}}return s}function V(s){if(s&&s.isTexture){let l=s.mapping,u=l===w9||l===O9,x=l===w0||l===Q0;if(u||x){let c=t.get(s),d=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return i===null&&(i=new f6(C)),c=u?i.fromEquirectangular(s,c):i.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),c.texture;if(c!==void 0)return c.texture;{let v=s.image;return u&&v&&v.height>0||x&&v&&L(v)?(i===null&&(i=new f6(C)),c=u?i.fromEquirectangular(s):i.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),s.addEventListener("dispose",o),c.texture):null}}}return s}function n(s,l){return l===w9?s.mapping=w0:l===O9&&(s.mapping=Q0),s}function L(s){let l=0,u=6;for(let x=0;x<u;x++)s[x]!==void 0&&l++;return l===u}function a(s){let l=s.target;l.removeEventListener("dispose",a);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(s){let l=s.target;l.removeEventListener("dispose",o);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function M(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:M}}function Jo(C){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=C.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&q0("WebGLRenderer: "+i+" extension not supported."),r}}}function jo(C,e,t,i){let r={},H=new WeakMap;function V(M){let s=M.target;s.index!==null&&e.remove(s.index);for(let u in s.attributes)e.remove(s.attributes[u]);s.removeEventListener("dispose",V),delete r[s.id];let l=H.get(s);l&&(e.remove(l),H.delete(s)),i.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,t.memory.geometries--}function n(M,s){return r[s.id]===!0||(s.addEventListener("dispose",V),r[s.id]=!0,t.memory.geometries++),s}function L(M){let s=M.attributes;for(let l in s)e.update(s[l],C.ARRAY_BUFFER)}function a(M){let s=[],l=M.index,u=M.attributes.position,x=0;if(u===void 0)return;if(l!==null){let v=l.array;x=l.version;for(let _=0,f=v.length;_<f;_+=3){let g=v[_+0],Z=v[_+1],b=v[_+2];s.push(g,Z,Z,b,b,g)}}else{let v=u.array;x=u.version;for(let _=0,f=v.length/3-1;_<f;_+=3){let g=_+0,Z=_+1,b=_+2;s.push(g,Z,Z,b,b,g)}}let c=new(u.count>=65535?g7:S7)(s,1);c.version=x;let d=H.get(M);d&&e.remove(d),H.set(M,c)}function o(M){let s=H.get(M);if(s){let l=M.index;l!==null&&s.version<l.version&&a(M)}else a(M);return H.get(M)}return{get:n,update:L,getWireframeAttribute:o}}function es(C,e,t){let i;function r(M){i=M}let H,V;function n(M){H=M.type,V=M.bytesPerElement}function L(M,s){C.drawElements(i,s,H,M*V),t.update(s,i,1)}function a(M,s,l){l!==0&&(C.drawElementsInstanced(i,s,H,M*V,l),t.update(s,i,l))}function o(M,s,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,s,0,H,M,0,l);let x=0;for(let c=0;c<l;c++)x+=s[c];t.update(x,i,1)}this.setMode=r,this.setIndex=n,this.render=L,this.renderInstances=a,this.renderMultiDraw=o}function ts(C){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(H,V,n){switch(t.calls++,V){case C.TRIANGLES:t.triangles+=n*(H/3);break;case C.LINES:t.lines+=n*(H/2);break;case C.LINE_STRIP:t.lines+=n*(H-1);break;case C.LINE_LOOP:t.lines+=n*H;break;case C.POINTS:t.points+=n*H;break;default:I1("WebGLInfo: Unknown draw mode:",V);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Cs(C,e,t){let i=new WeakMap,r=new m2;function H(V,n,L){let a=V.morphTargetInfluences,o=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,M=o!==void 0?o.length:0,s=i.get(n);if(s===void 0||s.count!==M){let y=function(){b.dispose(),i.delete(n),n.removeEventListener("dispose",y)};s!==void 0&&s.texture.dispose();let l=n.morphAttributes.position!==void 0,u=n.morphAttributes.normal!==void 0,x=n.morphAttributes.color!==void 0,c=n.morphAttributes.position||[],d=n.morphAttributes.normal||[],v=n.morphAttributes.color||[],_=0;l===!0&&(_=1),u===!0&&(_=2),x===!0&&(_=3);let f=n.attributes.position.count*_,g=1;f>e.maxTextureSize&&(g=Math.ceil(f/e.maxTextureSize),f=e.maxTextureSize);let Z=new Float32Array(f*g*4*M),b=new x7(Z,f,g,M);b.type=T5,b.needsUpdate=!0;let m=_*4;for(let R=0;R<M;R++){let I=c[R],N=d[R],G=v[R],P=f*g*4*R;for(let U=0;U<I.count;U++){let K=U*m;l===!0&&(r.fromBufferAttribute(I,U),Z[P+K+0]=r.x,Z[P+K+1]=r.y,Z[P+K+2]=r.z,Z[P+K+3]=0),u===!0&&(r.fromBufferAttribute(N,U),Z[P+K+4]=r.x,Z[P+K+5]=r.y,Z[P+K+6]=r.z,Z[P+K+7]=0),x===!0&&(r.fromBufferAttribute(G,U),Z[P+K+8]=r.x,Z[P+K+9]=r.y,Z[P+K+10]=r.z,Z[P+K+11]=G.itemSize===4?r.w:1)}}s={count:M,texture:b,size:new f1(f,g)},i.set(n,s),n.addEventListener("dispose",y)}if(V.isInstancedMesh===!0&&V.morphTexture!==null)L.getUniforms().setValue(C,"morphTexture",V.morphTexture,t);else{let l=0;for(let x=0;x<a.length;x++)l+=a[x];let u=n.morphTargetsRelative?1:1-l;L.getUniforms().setValue(C,"morphTargetBaseInfluence",u),L.getUniforms().setValue(C,"morphTargetInfluences",a)}L.getUniforms().setValue(C,"morphTargetsTexture",s.texture,t),L.getUniforms().setValue(C,"morphTargetsTextureSize",s.size)}return{update:H}}function is(C,e,t,i,r){let H=new WeakMap;function V(a){let o=r.render.frame,M=a.geometry,s=e.get(a,M);if(H.get(s)!==o&&(e.update(s),H.set(s,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",L)===!1&&a.addEventListener("dispose",L),H.get(a)!==o&&(t.update(a.instanceMatrix,C.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,C.ARRAY_BUFFER),H.set(a,o))),a.isSkinnedMesh){let l=a.skeleton;H.get(l)!==o&&(l.update(),H.set(l,o))}return s}function n(){H=new WeakMap}function L(a){let o=a.target;o.removeEventListener("dispose",L),i.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:V,dispose:n}}var rs={[ie]:"LINEAR_TONE_MAPPING",[re]:"REINHARD_TONE_MAPPING",[He]:"CINEON_TONE_MAPPING",[Ve]:"ACES_FILMIC_TONE_MAPPING",[Le]:"AGX_TONE_MAPPING",[ae]:"NEUTRAL_TONE_MAPPING",[ne]:"CUSTOM_TONE_MAPPING"};function Hs(C,e,t,i,r,H){let V=new i5(e,t,{type:C,depthBuffer:r,stencilBuffer:H,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),n=null,L=null,a=new y5;a.setAttribute("position",new K2([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new K2([0,2,0,0,2,0],2));let o=new d9({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),M=new e5(a,o),s=new N3(-1,1,1,-1,0,1),l=null,u=null,x=!1,c,d=null,v=[],_=!1;this.setSize=function(f,g){V.setSize(f,g),n!==null&&n.setSize(f,g),L!==null&&L.setSize(f,g);for(let Z=0;Z<v.length;Z++){let b=v[Z];b.setSize&&b.setSize(f,g)}},this.setEffects=function(f){v=f,_=v.length>0&&v[0].isRenderPass===!0;let g=V.width,Z=V.height;v.length>0&&n===null&&(n=new i5(g,Z,{type:w5,depthBuffer:!1,stencilBuffer:!1}),L=new i5(g,Z,{type:w5,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<v.length;b++){let m=v[b];m.setSize&&m.setSize(g,Z)}},this.begin=function(f,g){if(x||f.toneMapping===_5&&v.length===0)return!1;if(d=g,g!==null){let Z=g.width,b=g.height;(V.width!==Z||V.height!==b)&&this.setSize(Z,b)}return _===!1&&f.setRenderTarget(V),c=f.toneMapping,f.toneMapping=_5,!0},this.hasRenderPass=function(){return _},this.end=function(f,g){f.toneMapping=c,x=!0;let Z=V,b=n;for(let m=0;m<v.length;m++){let y=v[m];y.enabled!==!1&&(y.render(f,b,Z,g),y.needsSwap!==!1&&(Z=b,b=b===n?L:n))}if(l!==f.outputColorSpace||u!==f.toneMapping){l=f.outputColorSpace,u=f.toneMapping,o.defines={},Y1.getTransfer(l)===r2&&(o.defines.SRGB_TRANSFER="");let m=rs[u];m&&(o.defines[m]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=Z.texture,f.setRenderTarget(d),f.render(M,s),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){V.dispose(),n!==null&&n.dispose(),L!==null&&L.dispose(),a.dispose(),o.dispose()}}var Ei=new J2,Fe=new g0(1,1),Ri=new x7,Pi=new H9,Bi=new _7,di=[],ci=[],pi=new Float32Array(16),ui=new Float32Array(9),Ai=new Float32Array(4);function Q3(C,e,t){let i=C[0];if(i<=0||i>0)return C;let r=e*t,H=di[r];if(H===void 0&&(H=new Float32Array(r),di[r]=H),e!==0){i.toArray(H,0);for(let V=1,n=0;V!==e;++V)n+=t,C[V].toArray(H,n)}return H}function E2(C,e){if(C.length!==e.length)return!1;for(let t=0,i=C.length;t<i;t++)if(C[t]!==e[t])return!1;return!0}function R2(C,e){for(let t=0,i=e.length;t<i;t++)C[t]=e[t]}function g6(C,e){let t=ci[e];t===void 0&&(t=new Int32Array(e),ci[e]=t);for(let i=0;i!==e;++i)t[i]=C.allocateTextureUnit();return t}function Vs(C,e){let t=this.cache;t[0]!==e&&(C.uniform1f(this.addr,e),t[0]=e)}function ns(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(E2(t,e))return;C.uniform2fv(this.addr,e),R2(t,e)}}function Ls(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(C.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(E2(t,e))return;C.uniform3fv(this.addr,e),R2(t,e)}}function as(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(E2(t,e))return;C.uniform4fv(this.addr,e),R2(t,e)}}function os(C,e){let t=this.cache,i=e.elements;if(i===void 0){if(E2(t,e))return;C.uniformMatrix2fv(this.addr,!1,e),R2(t,e)}else{if(E2(t,i))return;Ai.set(i),C.uniformMatrix2fv(this.addr,!1,Ai),R2(t,i)}}function ss(C,e){let t=this.cache,i=e.elements;if(i===void 0){if(E2(t,e))return;C.uniformMatrix3fv(this.addr,!1,e),R2(t,e)}else{if(E2(t,i))return;ui.set(i),C.uniformMatrix3fv(this.addr,!1,ui),R2(t,i)}}function Ms(C,e){let t=this.cache,i=e.elements;if(i===void 0){if(E2(t,e))return;C.uniformMatrix4fv(this.addr,!1,e),R2(t,e)}else{if(E2(t,i))return;pi.set(i),C.uniformMatrix4fv(this.addr,!1,pi),R2(t,i)}}function ls(C,e){let t=this.cache;t[0]!==e&&(C.uniform1i(this.addr,e),t[0]=e)}function ds(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(E2(t,e))return;C.uniform2iv(this.addr,e),R2(t,e)}}function cs(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(E2(t,e))return;C.uniform3iv(this.addr,e),R2(t,e)}}function ps(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(E2(t,e))return;C.uniform4iv(this.addr,e),R2(t,e)}}function us(C,e){let t=this.cache;t[0]!==e&&(C.uniform1ui(this.addr,e),t[0]=e)}function As(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(E2(t,e))return;C.uniform2uiv(this.addr,e),R2(t,e)}}function ms(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(E2(t,e))return;C.uniform3uiv(this.addr,e),R2(t,e)}}function hs(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(E2(t,e))return;C.uniform4uiv(this.addr,e),R2(t,e)}}function fs(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r);let H;this.type===C.SAMPLER_2D_SHADOW?(Fe.compareFunction=t.isReversedDepthBuffer()?A6:u6,H=Fe):H=Ei,t.setTexture2D(e||H,r)}function xs(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pi,r)}function vs(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Bi,r)}function Ss(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ri,r)}function gs(C){switch(C){case 5126:return Vs;case 35664:return ns;case 35665:return Ls;case 35666:return as;case 35674:return os;case 35675:return ss;case 35676:return Ms;case 5124:case 35670:return ls;case 35667:case 35671:return ds;case 35668:case 35672:return cs;case 35669:case 35673:return ps;case 5125:return us;case 36294:return As;case 36295:return ms;case 36296:return hs;case 35678:case 36198:case 36298:case 36306:case 35682:return fs;case 35679:case 36299:case 36307:return xs;case 35680:case 36300:case 36308:case 36293:return vs;case 36289:case 36303:case 36311:case 36292:return Ss}}function Zs(C,e){C.uniform1fv(this.addr,e)}function ys(C,e){let t=Q3(e,this.size,2);C.uniform2fv(this.addr,t)}function _s(C,e){let t=Q3(e,this.size,3);C.uniform3fv(this.addr,t)}function bs(C,e){let t=Q3(e,this.size,4);C.uniform4fv(this.addr,t)}function Ts(C,e){let t=Q3(e,this.size,4);C.uniformMatrix2fv(this.addr,!1,t)}function ws(C,e){let t=Q3(e,this.size,9);C.uniformMatrix3fv(this.addr,!1,t)}function Os(C,e){let t=Q3(e,this.size,16);C.uniformMatrix4fv(this.addr,!1,t)}function Es(C,e){C.uniform1iv(this.addr,e)}function Rs(C,e){C.uniform2iv(this.addr,e)}function Ps(C,e){C.uniform3iv(this.addr,e)}function Bs(C,e){C.uniform4iv(this.addr,e)}function Is(C,e){C.uniform1uiv(this.addr,e)}function Fs(C,e){C.uniform2uiv(this.addr,e)}function ks(C,e){C.uniform3uiv(this.addr,e)}function Ds(C,e){C.uniform4uiv(this.addr,e)}function Ns(C,e,t){let i=this.cache,r=e.length,H=g6(t,r);E2(i,H)||(C.uniform1iv(this.addr,H),R2(i,H));let V;this.type===C.SAMPLER_2D_SHADOW?V=Fe:V=Ei;for(let n=0;n!==r;++n)t.setTexture2D(e[n]||V,H[n])}function Us(C,e,t){let i=this.cache,r=e.length,H=g6(t,r);E2(i,H)||(C.uniform1iv(this.addr,H),R2(i,H));for(let V=0;V!==r;++V)t.setTexture3D(e[V]||Pi,H[V])}function zs(C,e,t){let i=this.cache,r=e.length,H=g6(t,r);E2(i,H)||(C.uniform1iv(this.addr,H),R2(i,H));for(let V=0;V!==r;++V)t.setTextureCube(e[V]||Bi,H[V])}function Gs(C,e,t){let i=this.cache,r=e.length,H=g6(t,r);E2(i,H)||(C.uniform1iv(this.addr,H),R2(i,H));for(let V=0;V!==r;++V)t.setTexture2DArray(e[V]||Ri,H[V])}function Ws(C){switch(C){case 5126:return Zs;case 35664:return ys;case 35665:return _s;case 35666:return bs;case 35674:return Ts;case 35675:return ws;case 35676:return Os;case 5124:case 35670:return Es;case 35667:case 35671:return Rs;case 35668:case 35672:return Ps;case 35669:case 35673:return Bs;case 5125:return Is;case 36294:return Fs;case 36295:return ks;case 36296:return Ds;case 35678:case 36198:case 36298:case 36306:case 35682:return Ns;case 35679:case 36299:case 36307:return Us;case 35680:case 36300:case 36308:case 36293:return zs;case 36289:case 36303:case 36311:case 36292:return Gs}}var ke=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gs(t.type)}},De=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ws(t.type)}},Ne=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let H=0,V=r.length;H!==V;++H){let n=r[H];n.setValue(e,t[n.id],i)}}},Be=/(\w+)(\])?(\[|\.)?/g;function mi(C,e){C.seq.push(e),C.map[e.id]=e}function $s(C,e,t){let i=C.name,r=i.length;for(Be.lastIndex=0;;){let H=Be.exec(i),V=Be.lastIndex,n=H[1],L=H[2]==="]",a=H[3];if(L&&(n=n|0),a===void 0||a==="["&&V+2===r){mi(t,a===void 0?new ke(n,C,e):new De(n,C,e));break}else{let M=t.map[n];M===void 0&&(M=new Ne(n),mi(t,M)),t=M}}}var Y3=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let V=0;V<i;++V){let n=e.getActiveUniform(t,V),L=e.getUniformLocation(t,n.name);$s(n,L,this)}let r=[],H=[];for(let V of this.seq)V.type===e.SAMPLER_2D_SHADOW||V.type===e.SAMPLER_CUBE_SHADOW||V.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(V):H.push(V);r.length>0&&(this.seq=r.concat(H))}setValue(e,t,i,r){let H=this.map[t];H!==void 0&&H.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let H=0,V=t.length;H!==V;++H){let n=t[H],L=i[n.id];L.needsUpdate!==!1&&n.setValue(e,L.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,H=e.length;r!==H;++r){let V=e[r];V.id in t&&i.push(V)}return i}};function hi(C,e,t){let i=C.createShader(e);return C.shaderSource(i,t),C.compileShader(i),i}var qs=37297,Xs=0;function Ys(C,e){let t=C.split(`
`),i=[],r=Math.max(e-6,0),H=Math.min(e+6,t.length);for(let V=r;V<H;V++){let n=V+1;i.push(`${n===e?">":" "} ${n}: ${t[V]}`)}return i.join(`
`)}var fi=new F1;function Qs(C){Y1._getMatrix(fi,Y1.workingColorSpace,C);let e=`mat3( ${fi.elements.map(t=>t.toFixed(4))} )`;switch(Y1.getTransfer(C)){case h7:return[e,"LinearTransferOETF"];case r2:return[e,"sRGBTransferOETF"];default:return B1("WebGLProgram: Unsupported color space: ",C),[e,"LinearTransferOETF"]}}function xi(C,e,t){let i=C.getShaderParameter(e,C.COMPILE_STATUS),H=(C.getShaderInfoLog(e)||"").trim();if(i&&H==="")return"";let V=/ERROR: 0:(\d+)/.exec(H);if(V){let n=parseInt(V[1]);return t.toUpperCase()+`

`+H+`

`+Ys(C.getShaderSource(e),n)}else return H}function Ks(C,e){let t=Qs(e);return[`vec4 ${C}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Js={[ie]:"Linear",[re]:"Reinhard",[He]:"Cineon",[Ve]:"ACESFilmic",[Le]:"AgX",[ae]:"Neutral",[ne]:"Custom"};function js(C,e){let t=Js[e];return t===void 0?(B1("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+C+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+C+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var h6=new T;function eM(){Y1.getLuminanceCoefficients(h6);let C=h6.x.toFixed(4),e=h6.y.toFixed(4),t=h6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${C}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(i4).join(`
`)}function CM(C){let e=[];for(let t in C){let i=C[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iM(C,e){let t={},i=C.getProgramParameter(e,C.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let H=C.getActiveAttrib(e,r),V=H.name,n=1;H.type===C.FLOAT_MAT2&&(n=2),H.type===C.FLOAT_MAT3&&(n=3),H.type===C.FLOAT_MAT4&&(n=4),t[V]={type:H.type,location:C.getAttribLocation(e,V),locationSize:n}}return t}function i4(C){return C!==""}function vi(C,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return C.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Si(C,e){return C.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ue(C){return C.replace(rM,VM)}var HM=new Map;function VM(C,e){let t=z1[e];if(t===void 0){let i=HM.get(e);if(i!==void 0)t=z1[i],B1('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ue(t)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gi(C){return C.replace(nM,LM)}function LM(C,e,t,i){let r="";for(let H=parseInt(e);H<parseInt(t);H++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return r}function Zi(C){let e=`precision ${C.precision} float;
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
#define LOW_PRECISION`),e}var aM={[$7]:"SHADOWMAP_TYPE_PCF",[z3]:"SHADOWMAP_TYPE_VSM"};function oM(C){return aM[C.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sM={[w0]:"ENVMAP_TYPE_CUBE",[Q0]:"ENVMAP_TYPE_CUBE",[q7]:"ENVMAP_TYPE_CUBE_UV"};function MM(C){return C.envMap===!1?"ENVMAP_TYPE_CUBE":sM[C.envMapMode]||"ENVMAP_TYPE_CUBE"}var lM={[Q0]:"ENVMAP_MODE_REFRACTION"};function dM(C){return C.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[C.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cM={[Ce]:"ENVMAP_BLENDING_MULTIPLY",[kC]:"ENVMAP_BLENDING_MIX",[DC]:"ENVMAP_BLENDING_ADD"};function pM(C){return C.envMap===!1?"ENVMAP_BLENDING_NONE":cM[C.combine]||"ENVMAP_BLENDING_NONE"}function uM(C){let e=C.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AM(C,e,t,i){let r=C.getContext(),H=t.defines,V=t.vertexShader,n=t.fragmentShader,L=oM(t),a=MM(t),o=dM(t),M=pM(t),s=uM(t),l=tM(t),u=CM(H),x=r.createProgram(),c,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(i4).join(`
`),c.length>0&&(c+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(i4).join(`
`),d.length>0&&(d+=`
`)):(c=[Zi(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+L:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(i4).join(`
`),d=[Zi(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+a:"",t.envMap?"#define "+o:"",t.envMap?"#define "+M:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+L:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_5?"#define TONE_MAPPING":"",t.toneMapping!==_5?z1.tonemapping_pars_fragment:"",t.toneMapping!==_5?js("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",z1.colorspace_pars_fragment,Ks("linearToOutputTexel",t.outputColorSpace),eM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(i4).join(`
`)),V=Ue(V),V=vi(V,t),V=Si(V,t),n=Ue(n),n=vi(n,t),n=Si(n,t),V=gi(V),n=gi(n),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,d=["#define varying in",t.glslVersion===Ae?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ae?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=v+c+V,f=v+d+n,g=hi(r,r.VERTEX_SHADER,_),Z=hi(r,r.FRAGMENT_SHADER,f);r.attachShader(x,g),r.attachShader(x,Z),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(I){if(C.debug.checkShaderErrors){let N=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(g)||"",P=r.getShaderInfoLog(Z)||"",U=N.trim(),K=G.trim(),Q=P.trim(),r1=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(r1=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(r,x,g,Z);else{let t1=xi(r,g,"vertex"),i1=xi(r,Z,"fragment");I1("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+t1+`
`+i1)}else U!==""?B1("WebGLProgram: Program Info Log:",U):(K===""||Q==="")&&(q=!1);q&&(I.diagnostics={runnable:r1,programLog:U,vertexShader:{log:K,prefix:c},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(g),r.deleteShader(Z),m=new Y3(r,x),y=iM(r,x)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(x,qs)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xs++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=g,this.fragmentShader=Z,this}var mM=0,ze=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ge(e),t.set(e,i)),i}},Ge=class{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}};function hM(C){return C===R0||C===j7||C===e4}function fM(C,e,t,i,r,H){let V=new E3,n=new ze,L=new Set,a=[],o=new Map,M=i.logarithmicDepthBuffer,s=i.precision,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(m){return L.add(m),m===0?"uv":`uv${m}`}function x(m,y,R,I,N,G){let P=I.fog,U=N.geometry,K=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,Q=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,r1=e.get(m.envMap||K,Q),q=r1&&r1.mapping===q7?r1.image.height:null,t1=l[m.type];m.precision!==null&&(s=i.getMaxPrecision(m.precision),s!==m.precision&&B1("WebGLProgram.getParameters:",m.precision,"not supported, using",s,"instead."));let i1=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,R1=i1!==void 0?i1.length:0,O1=0;U.morphAttributes.position!==void 0&&(O1=1),U.morphAttributes.normal!==void 0&&(O1=2),U.morphAttributes.color!==void 0&&(O1=3);let o2,Q1,e2,X;if(t1){let M2=U5[t1];o2=M2.vertexShader,Q1=M2.fragmentShader}else{o2=m.vertexShader,Q1=m.fragmentShader;let M2=n.getVertexShaderStage(m),C2=n.getFragmentShaderStage(m);n.update(m,M2,C2),e2=M2.id,X=C2.id}let e1=C.getRenderTarget(),x1=C.state.buffers.depth.getReversed(),k1=N.isInstancedMesh===!0,m1=N.isBatchedMesh===!0,G1=!!m.map,O2=!!m.matcap,$1=!!r1,j1=!!m.aoMap,s2=!!m.lightMap,X1=!!m.bumpMap&&m.wireframe===!1,A2=!!m.normalMap,P2=!!m.displacementMap,C5=!!m.emissiveMap,f2=!!m.metalnessMap,_2=!!m.roughnessMap,E=m.anisotropy>0,N2=m.clearcoat>0,H2=m.dispersion>0,S=m.retroreflectivity>0,p=m.iridescence>0,B=m.sheen>0,D=m.transmission>0,$=E&&!!m.anisotropyMap,V1=N2&&!!m.clearcoatMap,L1=N2&&!!m.clearcoatNormalMap,Y=N2&&!!m.clearcoatRoughnessMap,j=p&&!!m.iridescenceMap,a1=p&&!!m.iridescenceThicknessMap,b1=B&&!!m.sheenColorMap,l1=B&&!!m.sheenRoughnessMap,o1=!!m.specularMap,T1=!!m.specularColorMap,P1=!!m.specularIntensityMap,N1=D&&!!m.transmissionMap,O=D&&!!m.thicknessMap,s1=!!m.gradientMap,J=!!m.alphaMap,M1=m.alphaTest>0,u1=!!m.alphaHash,C1=!!m.extensions,E1=_5;m.toneMapped&&(e1===null||e1.isXRRenderTarget===!0)&&(E1=C.toneMapping);let g1={shaderID:t1,shaderType:m.type,shaderName:m.name,vertexShader:o2,fragmentShader:Q1,defines:m.defines,customVertexShaderID:e2,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:s,batching:m1,batchingColor:m1&&N._colorsTexture!==null,instancing:k1,instancingColor:k1&&N.instanceColor!==null,instancingMorph:k1&&N.morphTexture!==null,outputColorSpace:e1===null?C.outputColorSpace:e1.isXRRenderTarget===!0?e1.texture.colorSpace:Y1.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:G1,matcap:O2,envMap:$1,envMapMode:$1&&r1.mapping,envMapCubeUVHeight:q,aoMap:j1,lightMap:s2,bumpMap:X1,normalMap:A2,displacementMap:P2,emissiveMap:C5,normalMapObjectSpace:A2&&m.normalMapType===zC,normalMapTangentSpace:A2&&m.normalMapType===p6,packedNormalMap:A2&&m.normalMapType===p6&&hM(m.normalMap.format),metalnessMap:f2,roughnessMap:_2,anisotropy:E,anisotropyMap:$,clearcoat:N2,clearcoatMap:V1,clearcoatNormalMap:L1,clearcoatRoughnessMap:Y,dispersion:H2,retroreflection:S,iridescence:p,iridescenceMap:j,iridescenceThicknessMap:a1,sheen:B,sheenColorMap:b1,sheenRoughnessMap:l1,specularMap:o1,specularColorMap:T1,specularIntensityMap:P1,transmission:D,transmissionMap:N1,thicknessMap:O,gradientMap:s1,opaque:m.transparent===!1&&m.blending===G3&&m.alphaToCoverage===!1,alphaMap:J,alphaTest:M1,alphaHash:u1,combine:m.combine,mapUv:G1&&u(m.map.channel),aoMapUv:j1&&u(m.aoMap.channel),lightMapUv:s2&&u(m.lightMap.channel),bumpMapUv:X1&&u(m.bumpMap.channel),normalMapUv:A2&&u(m.normalMap.channel),displacementMapUv:P2&&u(m.displacementMap.channel),emissiveMapUv:C5&&u(m.emissiveMap.channel),metalnessMapUv:f2&&u(m.metalnessMap.channel),roughnessMapUv:_2&&u(m.roughnessMap.channel),anisotropyMapUv:$&&u(m.anisotropyMap.channel),clearcoatMapUv:V1&&u(m.clearcoatMap.channel),clearcoatNormalMapUv:L1&&u(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&u(m.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&u(m.iridescenceMap.channel),iridescenceThicknessMapUv:a1&&u(m.iridescenceThicknessMap.channel),sheenColorMapUv:b1&&u(m.sheenColorMap.channel),sheenRoughnessMapUv:l1&&u(m.sheenRoughnessMap.channel),specularMapUv:o1&&u(m.specularMap.channel),specularColorMapUv:T1&&u(m.specularColorMap.channel),specularIntensityMapUv:P1&&u(m.specularIntensityMap.channel),transmissionMapUv:N1&&u(m.transmissionMap.channel),thicknessMapUv:O&&u(m.thicknessMap.channel),alphaMapUv:J&&u(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(A2||E),vertexNormals:!!U.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(G1||J),fog:!!P,useFog:m.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||U.attributes.normal===void 0&&A2===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:x1,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:R1,morphTextureStride:O1,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:m.dithering,shadowMapEnabled:C.shadowMap.enabled&&R.length>0,shadowMapType:C.shadowMap.type,toneMapping:E1,decodeVideoTexture:G1&&m.map.isVideoTexture===!0&&Y1.getTransfer(m.map.colorSpace)===r2,decodeVideoTextureEmissive:C5&&m.emissiveMap.isVideoTexture===!0&&Y1.getTransfer(m.emissiveMap.colorSpace)===r2,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===k5,flipSided:m.side===t5,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:C1&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(C1&&m.extensions.multiDraw===!0||m1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return g1.vertexUv1s=L.has(1),g1.vertexUv2s=L.has(2),g1.vertexUv3s=L.has(3),L.clear(),g1}function c(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let R in m.defines)y.push(R),y.push(m.defines[R]);return m.isRawShaderMaterial===!1&&(d(y,m),v(y,m),y.push(C.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()}function d(m,y){m.push(y.precision),m.push(y.outputColorSpace),m.push(y.envMapMode),m.push(y.envMapCubeUVHeight),m.push(y.mapUv),m.push(y.alphaMapUv),m.push(y.lightMapUv),m.push(y.aoMapUv),m.push(y.bumpMapUv),m.push(y.normalMapUv),m.push(y.displacementMapUv),m.push(y.emissiveMapUv),m.push(y.metalnessMapUv),m.push(y.roughnessMapUv),m.push(y.anisotropyMapUv),m.push(y.clearcoatMapUv),m.push(y.clearcoatNormalMapUv),m.push(y.clearcoatRoughnessMapUv),m.push(y.iridescenceMapUv),m.push(y.iridescenceThicknessMapUv),m.push(y.sheenColorMapUv),m.push(y.sheenRoughnessMapUv),m.push(y.specularMapUv),m.push(y.specularColorMapUv),m.push(y.specularIntensityMapUv),m.push(y.transmissionMapUv),m.push(y.thicknessMapUv),m.push(y.combine),m.push(y.fogExp2),m.push(y.sizeAttenuation),m.push(y.morphTargetsCount),m.push(y.morphAttributeCount),m.push(y.numSunLights),m.push(y.numDirLights),m.push(y.numPointLights),m.push(y.numSpotLights),m.push(y.numSpotLightMaps),m.push(y.numHemiLights),m.push(y.numRectAreaLights),m.push(y.numSunLightShadows),m.push(y.numDirLightShadows),m.push(y.numPointLightShadows),m.push(y.numSpotLightShadows),m.push(y.numSpotLightShadowsWithMaps),m.push(y.numLightProbes),m.push(y.shadowMapType),m.push(y.toneMapping),m.push(y.numClippingPlanes),m.push(y.numClipIntersection),m.push(y.depthPacking)}function v(m,y){V.disableAll(),y.instancing&&V.enable(0),y.instancingColor&&V.enable(1),y.instancingMorph&&V.enable(2),y.matcap&&V.enable(3),y.envMap&&V.enable(4),y.normalMapObjectSpace&&V.enable(5),y.normalMapTangentSpace&&V.enable(6),y.clearcoat&&V.enable(7),y.iridescence&&V.enable(8),y.alphaTest&&V.enable(9),y.vertexColors&&V.enable(10),y.vertexAlphas&&V.enable(11),y.vertexUv1s&&V.enable(12),y.vertexUv2s&&V.enable(13),y.vertexUv3s&&V.enable(14),y.vertexTangents&&V.enable(15),y.anisotropy&&V.enable(16),y.alphaHash&&V.enable(17),y.batching&&V.enable(18),y.dispersion&&V.enable(19),y.retroreflection&&V.enable(24),y.batchingColor&&V.enable(20),y.gradientMap&&V.enable(21),y.packedNormalMap&&V.enable(22),y.vertexNormals&&V.enable(23),m.push(V.mask),V.disableAll(),y.fog&&V.enable(0),y.useFog&&V.enable(1),y.flatShading&&V.enable(2),y.logarithmicDepthBuffer&&V.enable(3),y.reversedDepthBuffer&&V.enable(4),y.skinning&&V.enable(5),y.morphTargets&&V.enable(6),y.morphNormals&&V.enable(7),y.morphColors&&V.enable(8),y.premultipliedAlpha&&V.enable(9),y.shadowMapEnabled&&V.enable(10),y.doubleSided&&V.enable(11),y.flipSided&&V.enable(12),y.useDepthPacking&&V.enable(13),y.dithering&&V.enable(14),y.transmission&&V.enable(15),y.sheen&&V.enable(16),y.opaque&&V.enable(17),y.pointsUvs&&V.enable(18),y.decodeVideoTexture&&V.enable(19),y.decodeVideoTextureEmissive&&V.enable(20),y.alphaToCoverage&&V.enable(21),y.numLightProbeGrids>0&&V.enable(22),y.hasPositionAttribute&&V.enable(23),m.push(V.mask)}function _(m){let y=l[m.type],R;if(y){let I=U5[y];R=ni.clone(I.uniforms)}else R=m.uniforms;return R}function f(m,y){let R=o.get(y);return R!==void 0?++R.usedTimes:(R=new AM(C,y,m,r),a.push(R),o.set(y,R)),R}function g(m){if(--m.usedTimes===0){let y=a.indexOf(m);a[y]=a[a.length-1],a.pop(),o.delete(m.cacheKey),m.destroy()}}function Z(m){n.remove(m)}function b(){n.dispose()}return{getParameters:x,getProgramCacheKey:c,getUniforms:_,acquireProgram:f,releaseProgram:g,releaseShaderCache:Z,programs:a,dispose:b}}function xM(){let C=new WeakMap;function e(V){return C.has(V)}function t(V){let n=C.get(V);return n===void 0&&(n={},C.set(V,n)),n}function i(V){C.delete(V)}function r(V,n,L){C.get(V)[n]=L}function H(){C=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:H}}function vM(C,e){return C.groupOrder!==e.groupOrder?C.groupOrder-e.groupOrder:C.renderOrder!==e.renderOrder?C.renderOrder-e.renderOrder:C.material.id!==e.material.id?C.material.id-e.material.id:C.materialVariant!==e.materialVariant?C.materialVariant-e.materialVariant:C.z!==e.z?C.z-e.z:C.id-e.id}function yi(C,e){return C.groupOrder!==e.groupOrder?C.groupOrder-e.groupOrder:C.renderOrder!==e.renderOrder?C.renderOrder-e.renderOrder:C.z!==e.z?e.z-C.z:C.id-e.id}function _i(){let C=[],e=0,t=[],i=[],r=[];function H(){e=0,t.length=0,i.length=0,r.length=0}function V(s){let l=0;return s.isInstancedMesh&&(l+=2),s.isSkinnedMesh&&(l+=1),l}function n(s,l,u,x,c,d){let v=C[e];return v===void 0?(v={id:s.id,object:s,geometry:l,material:u,materialVariant:V(s),groupOrder:x,renderOrder:s.renderOrder,z:c,group:d},C[e]=v):(v.id=s.id,v.object=s,v.geometry=l,v.material=u,v.materialVariant=V(s),v.groupOrder=x,v.renderOrder=s.renderOrder,v.z=c,v.group=d),e++,v}function L(s,l,u,x,c,d,v){v.reversedDepth===!0&&(c=-c);let _=n(s,l,u,x,c,d);u.transmission>0?i.push(_):u.transparent===!0?r.push(_):t.push(_)}function a(s,l,u,x,c,d){let v=n(s,l,u,x,c,d);u.transmission>0?i.unshift(v):u.transparent===!0?r.unshift(v):t.unshift(v)}function o(s,l){t.length>1&&t.sort(s||vM),i.length>1&&i.sort(l||yi),r.length>1&&r.sort(l||yi)}function M(){for(let s=e,l=C.length;s<l;s++){let u=C[s];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:r,init:H,push:L,unshift:a,finish:M,sort:o}}function SM(){let C=new WeakMap;function e(i,r){let H=C.get(i),V;return H===void 0?(V=new _i,C.set(i,[V])):r>=H.length?(V=new _i,H.push(V)):V=H[r],V}function t(){C=new WeakMap}return{get:e,dispose:t}}function gM(){let C={};return{get:function(e){if(C[e.id]!==void 0)return C[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new D1};break;case"SpotLight":t={position:new T,direction:new T,color:new D1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new D1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new D1,groundColor:new D1};break;case"RectAreaLight":t={color:new D1,position:new T,halfWidth:new T,halfHeight:new T};break}return C[e.id]=t,t}}}function ZM(){let C={};return{get:function(e){if(C[e.id]!==void 0)return C[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f1};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f1};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f1,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[e.id]=t,t}}}var yM=0;function _M(C,e){return(e.castShadow?2:0)-(C.castShadow?2:0)+(e.map?1:0)-(C.map?1:0)}function bM(C){let e=new gM,t=ZM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let a=0;a<9;a++)i.probe.push(new T);let r=new T,H=new n2,V=new n2;function n(a){let o=0,M=0,s=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let l=0,u=0,x=0,c=0,d=0,v=0,_=0,f=0,g=0,Z=0,b=0,m=0,y=0,R=0;a.sort(_M);for(let N=0,G=a.length;N<G;N++){let P=a[N],U=P.color,K=P.intensity,Q=P.distance,r1=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===R0?r1=P.shadow.map.texture:r1=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)o+=U.r*K,M+=U.g*K,s+=U.b*K;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],K);R++}else if(P.isSunLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let t1=P.shadow,i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize.copy(t1.mapSize).multiply(t1.getFrameExtents()),i.sunShadow[u]=i1,i.sunShadowMap[u]=r1;let R1=t1.getViewportCount();for(let O1=0;O1<R1;O1++)i.sunShadowMatrix[x+O1]=t1.getMatrix(O1),i.sunShadowCascade[x+O1]=t1._cascadeData[O1];x+=R1,u++}i.sun[l]=q,l++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let t1=P.shadow,i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize=t1.mapSize,i.directionalShadow[c]=i1,i.directionalShadowMap[c]=r1,i.directionalShadowMatrix[c]=P.shadow.matrix,g++}i.directional[c]=q,c++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(U).multiplyScalar(K),q.distance=Q,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[v]=q;let t1=P.shadow;if(P.map&&(i.spotLightMap[m]=P.map,m++,t1.updateMatrices(P),P.castShadow&&y++),i.spotLightMatrix[v]=t1.matrix,P.castShadow){let i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize=t1.mapSize,i.spotShadow[v]=i1,i.spotShadowMap[v]=r1,b++}v++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(U).multiplyScalar(K),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=q,_++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let t1=P.shadow,i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize=t1.mapSize,i1.shadowCameraNear=t1.camera.near,i1.shadowCameraFar=t1.camera.far,i.pointShadow[d]=i1,i.pointShadowMap[d]=r1,i.pointShadowMatrix[d]=P.shadow.matrix,Z++}i.point[d]=q,d++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(K),q.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[f]=q,f++}}_>0&&(C.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=d1.LTC_FLOAT_1,i.rectAreaLTC2=d1.LTC_FLOAT_2):(i.rectAreaLTC1=d1.LTC_HALF_1,i.rectAreaLTC2=d1.LTC_HALF_2)),i.ambient[0]=o,i.ambient[1]=M,i.ambient[2]=s;let I=i.hash;(I.sunLength!==l||I.directionalLength!==c||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==f||I.numSunShadows!==u||I.numDirectionalShadows!==g||I.numPointShadows!==Z||I.numSpotShadows!==b||I.numSpotMaps!==m||I.numLightProbes!==R)&&(i.sun.length=l,i.directional.length=c,i.spot.length=v,i.rectArea.length=_,i.point.length=d,i.hemi.length=f,i.sunShadow.length=u,i.sunShadowMap.length=u,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.directionalShadowMatrix.length=g,i.pointShadow.length=Z,i.pointShadowMap.length=Z,i.pointShadowMatrix.length=Z,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+m-y,i.spotLightMap.length=m,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,I.sunLength=l,I.directionalLength=c,I.pointLength=d,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=f,I.numSunShadows=u,I.numDirectionalShadows=g,I.numPointShadows=Z,I.numSpotShadows=b,I.numSpotMaps=m,I.numLightProbes=R,i.version=yM++)}function L(a,o){let M=0,s=0,l=0,u=0,x=0,c=0,d=o.matrixWorldInverse;for(let v=0,_=a.length;v<_;v++){let f=a[v];if(f.isSunLight){let g=i.sun[M];g.direction.setFromMatrixPosition(f.matrixWorld),g.direction.transformDirection(d),M++}else if(f.isDirectionalLight){let g=i.directional[s];g.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(d),s++}else if(f.isSpotLight){let g=i.spot[u];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(d),g.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(d),u++}else if(f.isRectAreaLight){let g=i.rectArea[x];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(d),V.identity(),H.copy(f.matrixWorld),H.premultiply(d),V.extractRotation(H),g.halfWidth.set(f.width*.5,0,0),g.halfHeight.set(0,f.height*.5,0),g.halfWidth.applyMatrix4(V),g.halfHeight.applyMatrix4(V),x++}else if(f.isPointLight){let g=i.point[l];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(d),l++}else if(f.isHemisphereLight){let g=i.hemi[c];g.direction.setFromMatrixPosition(f.matrixWorld),g.direction.transformDirection(d),c++}}}return{setup:n,setupView:L,state:i}}function bi(C){let e=new bM(C),t=[],i=[],r=[];function H(s){M.camera=s,t.length=0,i.length=0,r.length=0}function V(s){t.push(s)}function n(s){i.push(s)}function L(s){r.push(s)}function a(){e.setup(t)}function o(s){e.setupView(t,s)}let M={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:M,setupLights:a,setupLightsView:o,pushLight:V,pushShadow:n,pushLightProbeGrid:L}}function TM(C){let e=new WeakMap;function t(r,H=0){let V=e.get(r),n;return V===void 0?(n=new bi(C),e.set(r,[n])):H>=V.length?(n=new bi(C),V.push(n)):n=V[H],n}function i(){e=new WeakMap}return{get:t,dispose:i}}var wM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
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
}`,EM=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],RM=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],Ti=new n2,C4=new T,Ie=new T;function PM(C,e,t){let i=new B3,r=new f1,H=new f1,V=new m2,n=new c9,L=new p9,a={},o=t.maxTextureSize,M={[T0]:t5,[t5]:T0,[k5]:k5},s=new o5({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new f1},radius:{value:4}},vertexShader:wM,fragmentShader:OM}),l=s.clone();l.defines.HORIZONTAL_PASS=1;let u=new y5;u.setAttribute("position",new p5(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new e5(u,s),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$7;let d=this.type;this.render=function(Z,b,m){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||Z.length===0)return;this.type===hC&&(B1("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$7);let y=C.getRenderTarget(),R=C.getActiveCubeFace(),I=C.getActiveMipmapLevel(),N=C.state;N.setBlending(D5),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==this.type;G&&b.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=Z.length;P<U;P++){let K=Z[P],Q=K.shadow;if(Q===void 0){B1("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);let r1=Q.getFrameExtents();r.multiply(r1),H.copy(Q.mapSize),(r.x>o||r.y>o)&&(r.x>o&&(H.x=Math.floor(o/r1.x),r.x=H.x*r1.x,Q.mapSize.x=H.x),r.y>o&&(H.y=Math.floor(o/r1.y),r.y=H.y*r1.y,Q.mapSize.y=H.y));let q=C.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=q,Q.map===null||G===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===z3){if(K.isPointLight){B1("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new i5(r.x,r.y,{format:R0,type:w5,minFilter:D2,magFilter:D2,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new g0(r.x,r.y,T5),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=I5,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=I2,Q.map.depthTexture.magFilter=I2}else K.isPointLight?(Q.map=new x6(r.x),Q.map.depthTexture=new n9(r.x,b5)):(Q.map=new i5(r.x,r.y),Q.map.depthTexture=new g0(r.x,r.y,b5)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=I5,this.type===$7?(Q.map.depthTexture.compareFunction=q?A6:u6,Q.map.depthTexture.minFilter=D2,Q.map.depthTexture.magFilter=D2):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=I2,Q.map.depthTexture.magFilter=I2);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);let t1=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,m);for(let i1=0;i1<t1;i1++){let R1=Q.getCamera(i1);if(K.isPointLight){let O1=Q.camera,o2=Q.matrix,Q1=K.distance||O1.far;Q1!==O1.far&&(O1.far=Q1,O1.updateProjectionMatrix()),C4.setFromMatrixPosition(K.matrixWorld),O1.position.copy(C4),Ie.copy(O1.position),Ie.add(EM[i1]),O1.up.copy(RM[i1]),O1.lookAt(Ie),O1.updateMatrixWorld(),o2.makeTranslation(-C4.x,-C4.y,-C4.z),Ti.multiplyMatrices(O1.projectionMatrix,O1.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Ti,O1.coordinateSystem,O1.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)C.setRenderTarget(Q.map,i1),C.clear();else{i1===0&&(C.setRenderTarget(Q.map),C.clear());let O1=Q.getViewport(i1);V.set(H.x*O1.x,H.y*O1.y,H.x*O1.z,H.y*O1.w),N.viewport(V)}i=Q.getFrustum(i1),f(b,m,R1,K,this.type)}Q.isPointLightShadow!==!0&&this.type===z3&&v(Q,m),Q.needsUpdate=!1}d=this.type,c.needsUpdate=!1,C.setRenderTarget(y,R,I)};function v(Z,b){let m=e.update(x);s.defines.VSM_SAMPLES!==Z.blurSamples&&(s.defines.VSM_SAMPLES=Z.blurSamples,l.defines.VSM_SAMPLES=Z.blurSamples,s.needsUpdate=!0,l.needsUpdate=!0),Z.mapPass===null?Z.mapPass=new i5(r.x,r.y,{format:R0,type:w5}):(Z.mapPass.width!==Z.map.width||Z.mapPass.height!==Z.map.height)&&Z.mapPass.setSize(Z.map.width,Z.map.height),s.uniforms.shadow_pass.value=Z.map.depthTexture,s.uniforms.resolution.value.set(Z.map.width,Z.map.height),s.uniforms.radius.value=Z.radius,C.setRenderTarget(Z.mapPass),C.clear(),C.renderBufferDirect(b,null,m,s,x,null),l.uniforms.shadow_pass.value=Z.mapPass.texture,l.uniforms.resolution.value.set(Z.map.width,Z.map.height),l.uniforms.radius.value=Z.radius,C.setRenderTarget(Z.map),C.clear(),C.renderBufferDirect(b,null,m,l,x,null)}function _(Z,b,m,y){let R=null,I=m.isPointLight===!0?Z.customDistanceMaterial:Z.customDepthMaterial;if(I!==void 0)R=I;else if(R=m.isPointLight===!0?L:n,C.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let N=R.uuid,G=b.uuid,P=a[N];P===void 0&&(P={},a[N]=P);let U=P[G];U===void 0&&(U=R.clone(),P[G]=U,b.addEventListener("dispose",g)),R=U}if(R.visible=b.visible,R.wireframe=b.wireframe,y===z3?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:M[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,m.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=C.properties.get(R);N.light=m}return R}function f(Z,b,m,y,R){if(Z.visible===!1)return;if(Z.layers.test(b.layers)&&(Z.isMesh||Z.isLine||Z.isPoints)&&(Z.castShadow||Z.receiveShadow&&R===z3)&&(!Z.frustumCulled||Z.intersectsFrustum(i))){Z.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,Z.matrixWorld);let G=e.update(Z),P=Z.material;if(Array.isArray(P)){let U=G.groups;for(let K=0,Q=U.length;K<Q;K++){let r1=U[K],q=P[r1.materialIndex];if(q&&q.visible){let t1=_(Z,q,y,R);Z.onBeforeShadow(C,Z,b,m,G,t1,r1),C.renderBufferDirect(m,null,G,t1,Z,r1),Z.onAfterShadow(C,Z,b,m,G,t1,r1)}}}else if(P.visible){let U=_(Z,P,y,R);Z.onBeforeShadow(C,Z,b,m,G,U,null),C.renderBufferDirect(m,null,G,U,Z,null),Z.onAfterShadow(C,Z,b,m,G,U,null)}}let N=Z.children;for(let G=0,P=N.length;G<P;G++)f(N[G],b,m,y,R)}function g(Z){Z.target.removeEventListener("dispose",g);for(let m in a){let y=a[m],R=Z.target.uuid;R in y&&(y[R].dispose(),delete y[R])}}}function BM(C,e){function t(){let O=!1,s1=new m2,J=null,M1=new m2(0,0,0,0);return{setMask:function(u1){J!==u1&&!O&&(C.colorMask(u1,u1,u1,u1),J=u1)},setLocked:function(u1){O=u1},setClear:function(u1,C1,E1,g1,M2){M2===!0&&(u1*=g1,C1*=g1,E1*=g1),s1.set(u1,C1,E1,g1),M1.equals(s1)===!1&&(C.clearColor(u1,C1,E1,g1),M1.copy(s1))},reset:function(){O=!1,J=null,M1.set(-1,0,0,0)}}}function i(){let O=!1,s1=!1,J=null,M1=null,u1=null;return{setReversed:function(C1){if(s1!==C1){let E1=e.get("EXT_clip_control");C1?E1.clipControlEXT(E1.LOWER_LEFT_EXT,E1.ZERO_TO_ONE_EXT):E1.clipControlEXT(E1.LOWER_LEFT_EXT,E1.NEGATIVE_ONE_TO_ONE_EXT),s1=C1;let g1=u1;u1=null,this.setClear(g1)}},getReversed:function(){return s1},setTest:function(C1){C1?e1(C.DEPTH_TEST):x1(C.DEPTH_TEST)},setMask:function(C1){J!==C1&&!O&&(C.depthMask(C1),J=C1)},setFunc:function(C1){if(s1&&(C1=ti[C1]),M1!==C1){switch(C1){case q4:C.depthFunc(C.NEVER);break;case X4:C.depthFunc(C.ALWAYS);break;case Y4:C.depthFunc(C.LESS);break;case _3:C.depthFunc(C.LEQUAL);break;case Q4:C.depthFunc(C.EQUAL);break;case K4:C.depthFunc(C.GEQUAL);break;case J4:C.depthFunc(C.GREATER);break;case j4:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}M1=C1}},setLocked:function(C1){O=C1},setClear:function(C1){u1!==C1&&(u1=C1,s1&&(C1=1-C1),C.clearDepth(C1))},reset:function(){O=!1,J=null,M1=null,u1=null,s1=!1}}}function r(){let O=!1,s1=null,J=null,M1=null,u1=null,C1=null,E1=null,g1=null,M2=null;return{setTest:function(C2){O||(C2?e1(C.STENCIL_TEST):x1(C.STENCIL_TEST))},setMask:function(C2){s1!==C2&&!O&&(C.stencilMask(C2),s1=C2)},setFunc:function(C2,h5,E5){(J!==C2||M1!==h5||u1!==E5)&&(C.stencilFunc(C2,h5,E5),J=C2,M1=h5,u1=E5)},setOp:function(C2,h5,E5){(C1!==C2||E1!==h5||g1!==E5)&&(C.stencilOp(C2,h5,E5),C1=C2,E1=h5,g1=E5)},setLocked:function(C2){O=C2},setClear:function(C2){M2!==C2&&(C.clearStencil(C2),M2=C2)},reset:function(){O=!1,s1=null,J=null,M1=null,u1=null,C1=null,E1=null,g1=null,M2=null}}}let H=new t,V=new i,n=new r,L=new WeakMap,a=new WeakMap,o={},M={},s={},l=new WeakMap,u=[],x=null,c=!1,d=null,v=null,_=null,f=null,g=null,Z=null,b=null,m=new D1(0,0,0),y=0,R=!1,I=null,N=null,G=null,P=null,U=null,K=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,r1=0,q=C.getParameter(C.VERSION);q.indexOf("WebGL")!==-1?(r1=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=r1>=1):q.indexOf("OpenGL ES")!==-1&&(r1=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=r1>=2);let t1=null,i1={},R1=C.getParameter(C.SCISSOR_BOX),O1=C.getParameter(C.VIEWPORT),o2=new m2().fromArray(R1),Q1=new m2().fromArray(O1);function e2(O,s1,J,M1){let u1=new Uint8Array(4),C1=C.createTexture();C.bindTexture(O,C1),C.texParameteri(O,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(O,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let E1=0;E1<J;E1++)O===C.TEXTURE_3D||O===C.TEXTURE_2D_ARRAY?C.texImage3D(s1,0,C.RGBA,1,1,M1,0,C.RGBA,C.UNSIGNED_BYTE,u1):C.texImage2D(s1+E1,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,u1);return C1}let X={};X[C.TEXTURE_2D]=e2(C.TEXTURE_2D,C.TEXTURE_2D,1),X[C.TEXTURE_CUBE_MAP]=e2(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[C.TEXTURE_2D_ARRAY]=e2(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),X[C.TEXTURE_3D]=e2(C.TEXTURE_3D,C.TEXTURE_3D,1,1),H.setClear(0,0,0,1),V.setClear(1),n.setClear(0),e1(C.DEPTH_TEST),V.setFunc(_3),X1(!1),A2(Q8),e1(C.CULL_FACE),j1(D5);function e1(O){o[O]!==!0&&(C.enable(O),o[O]=!0)}function x1(O){o[O]!==!1&&(C.disable(O),o[O]=!1)}function k1(O,s1){return s[O]!==s1?(C.bindFramebuffer(O,s1),s[O]=s1,O===C.DRAW_FRAMEBUFFER&&(s[C.FRAMEBUFFER]=s1),O===C.FRAMEBUFFER&&(s[C.DRAW_FRAMEBUFFER]=s1),!0):!1}function m1(O,s1){let J=u,M1=!1;if(O){J=l.get(s1),J===void 0&&(J=[],l.set(s1,J));let u1=O.textures;if(J.length!==u1.length||J[0]!==C.COLOR_ATTACHMENT0){for(let C1=0,E1=u1.length;C1<E1;C1++)J[C1]=C.COLOR_ATTACHMENT0+C1;J.length=u1.length,M1=!0}}else J[0]!==C.BACK&&(J[0]=C.BACK,M1=!0);M1&&C.drawBuffers(J)}function G1(O){return x!==O?(C.useProgram(O),x=O,!0):!1}let O2={[Y0]:C.FUNC_ADD,[xC]:C.FUNC_SUBTRACT,[vC]:C.FUNC_REVERSE_SUBTRACT};O2[SC]=C.MIN,O2[gC]=C.MAX;let $1={[ZC]:C.ZERO,[yC]:C.ONE,[_C]:C.SRC_COLOR,[ee]:C.SRC_ALPHA,[RC]:C.SRC_ALPHA_SATURATE,[OC]:C.DST_COLOR,[TC]:C.DST_ALPHA,[bC]:C.ONE_MINUS_SRC_COLOR,[te]:C.ONE_MINUS_SRC_ALPHA,[EC]:C.ONE_MINUS_DST_COLOR,[wC]:C.ONE_MINUS_DST_ALPHA,[PC]:C.CONSTANT_COLOR,[BC]:C.ONE_MINUS_CONSTANT_COLOR,[IC]:C.CONSTANT_ALPHA,[FC]:C.ONE_MINUS_CONSTANT_ALPHA};function j1(O,s1,J,M1,u1,C1,E1,g1,M2,C2){if(O===D5){c===!0&&(x1(C.BLEND),c=!1);return}if(c===!1&&(e1(C.BLEND),c=!0),O!==fC){if(O!==d||C2!==R){if((v!==Y0||g!==Y0)&&(C.blendEquation(C.FUNC_ADD),v=Y0,g=Y0),C2)switch(O){case G3:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case K8:C.blendFunc(C.ONE,C.ONE);break;case J8:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case j8:C.blendFuncSeparate(C.DST_COLOR,C.ONE_MINUS_SRC_ALPHA,C.ZERO,C.ONE);break;default:I1("WebGLState: Invalid blending: ",O);break}else switch(O){case G3:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case K8:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE,C.ONE,C.ONE);break;case J8:I1("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j8:I1("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:I1("WebGLState: Invalid blending: ",O);break}_=null,f=null,Z=null,b=null,m.set(0,0,0),y=0,d=O,R=C2}return}u1=u1||s1,C1=C1||J,E1=E1||M1,(s1!==v||u1!==g)&&(C.blendEquationSeparate(O2[s1],O2[u1]),v=s1,g=u1),(J!==_||M1!==f||C1!==Z||E1!==b)&&(C.blendFuncSeparate($1[J],$1[M1],$1[C1],$1[E1]),_=J,f=M1,Z=C1,b=E1),(g1.equals(m)===!1||M2!==y)&&(C.blendColor(g1.r,g1.g,g1.b,M2),m.copy(g1),y=M2),d=O,R=!1}function s2(O,s1){O.side===k5?x1(C.CULL_FACE):e1(C.CULL_FACE);let J=O.side===t5;s1&&(J=!J),X1(J),O.blending===G3&&O.transparent===!1?j1(D5):j1(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),V.setFunc(O.depthFunc),V.setTest(O.depthTest),V.setMask(O.depthWrite),H.setMask(O.colorWrite);let M1=O.stencilWrite;n.setTest(M1),M1&&(n.setMask(O.stencilWriteMask),n.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),n.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C5(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?e1(C.SAMPLE_ALPHA_TO_COVERAGE):x1(C.SAMPLE_ALPHA_TO_COVERAGE)}function X1(O){I!==O&&(O?C.frontFace(C.CW):C.frontFace(C.CCW),I=O)}function A2(O){O!==AC?(e1(C.CULL_FACE),O!==N&&(O===Q8?C.cullFace(C.BACK):O===mC?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):x1(C.CULL_FACE),N=O}function P2(O){O!==G&&(Q&&C.lineWidth(O),G=O)}function C5(O,s1,J){O?(e1(C.POLYGON_OFFSET_FILL),(P!==s1||U!==J)&&(P=s1,U=J,V.getReversed()&&(s1=-s1),C.polygonOffset(s1,J))):x1(C.POLYGON_OFFSET_FILL)}function f2(O){O?e1(C.SCISSOR_TEST):x1(C.SCISSOR_TEST)}function _2(O){O===void 0&&(O=C.TEXTURE0+K-1),t1!==O&&(C.activeTexture(O),t1=O)}function E(O,s1,J){J===void 0&&(t1===null?J=C.TEXTURE0+K-1:J=t1);let M1=i1[J];M1===void 0&&(M1={type:void 0,texture:void 0},i1[J]=M1),(M1.type!==O||M1.texture!==s1)&&(t1!==J&&(C.activeTexture(J),t1=J),C.bindTexture(O,s1||X[O]),M1.type=O,M1.texture=s1)}function N2(){let O=i1[t1];O!==void 0&&O.type!==void 0&&(C.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H2(){try{C.compressedTexImage2D(...arguments)}catch(O){I1("WebGLState:",O)}}function S(){try{C.compressedTexImage3D(...arguments)}catch(O){I1("WebGLState:",O)}}function p(){try{C.texSubImage2D(...arguments)}catch(O){I1("WebGLState:",O)}}function B(){try{C.texSubImage3D(...arguments)}catch(O){I1("WebGLState:",O)}}function D(){try{C.compressedTexSubImage2D(...arguments)}catch(O){I1("WebGLState:",O)}}function $(){try{C.compressedTexSubImage3D(...arguments)}catch(O){I1("WebGLState:",O)}}function V1(){try{C.texStorage2D(...arguments)}catch(O){I1("WebGLState:",O)}}function L1(){try{C.texStorage3D(...arguments)}catch(O){I1("WebGLState:",O)}}function Y(){try{C.texImage2D(...arguments)}catch(O){I1("WebGLState:",O)}}function j(){try{C.texImage3D(...arguments)}catch(O){I1("WebGLState:",O)}}function a1(O){return M[O]!==void 0?M[O]:C.getParameter(O)}function b1(O,s1){M[O]!==s1&&(C.pixelStorei(O,s1),M[O]=s1)}function l1(O){o2.equals(O)===!1&&(C.scissor(O.x,O.y,O.z,O.w),o2.copy(O))}function o1(O){Q1.equals(O)===!1&&(C.viewport(O.x,O.y,O.z,O.w),Q1.copy(O))}function T1(O,s1){let J=a.get(s1);J===void 0&&(J=new WeakMap,a.set(s1,J));let M1=J.get(O);M1===void 0&&(M1=C.getUniformBlockIndex(s1,O.name),J.set(O,M1))}function P1(O,s1){let M1=a.get(s1).get(O);L.get(s1)!==M1&&(C.uniformBlockBinding(s1,M1,O.__bindingPointIndex),L.set(s1,M1))}function N1(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),V.setReversed(!1),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),C.pixelStorei(C.PACK_ALIGNMENT,4),C.pixelStorei(C.UNPACK_ALIGNMENT,4),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,!1),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,C.BROWSER_DEFAULT_WEBGL),C.pixelStorei(C.PACK_ROW_LENGTH,0),C.pixelStorei(C.PACK_SKIP_PIXELS,0),C.pixelStorei(C.PACK_SKIP_ROWS,0),C.pixelStorei(C.UNPACK_ROW_LENGTH,0),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,0),C.pixelStorei(C.UNPACK_SKIP_PIXELS,0),C.pixelStorei(C.UNPACK_SKIP_ROWS,0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,0),o={},M={},t1=null,i1={},s={},l=new WeakMap,u=[],x=null,c=!1,d=null,v=null,_=null,f=null,g=null,Z=null,b=null,m=new D1(0,0,0),y=0,R=!1,I=null,N=null,G=null,P=null,U=null,o2.set(0,0,C.canvas.width,C.canvas.height),Q1.set(0,0,C.canvas.width,C.canvas.height),H.reset(),V.reset(),n.reset()}return{buffers:{color:H,depth:V,stencil:n},enable:e1,disable:x1,bindFramebuffer:k1,drawBuffers:m1,useProgram:G1,setBlending:j1,setMaterial:s2,setFlipSided:X1,setCullFace:A2,setLineWidth:P2,setPolygonOffset:C5,setScissorTest:f2,activeTexture:_2,bindTexture:E,unbindTexture:N2,compressedTexImage2D:H2,compressedTexImage3D:S,texImage2D:Y,texImage3D:j,pixelStorei:b1,getParameter:a1,updateUBOMapping:T1,uniformBlockBinding:P1,texStorage2D:V1,texStorage3D:L1,texSubImage2D:p,texSubImage3D:B,compressedTexSubImage2D:D,compressedTexSubImage3D:$,scissor:l1,viewport:o1,reset:N1}}function IM(C,e,t,i,r,H,V){let n=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,L=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),a=new f1,o=new WeakMap,M=new Set,s,l=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,p){return u?new OffscreenCanvas(S,p):f7("canvas")}function c(S,p,B){let D=1,$=H2(S);if(($.width>B||$.height>B)&&(D=B/Math.max($.width,$.height)),D<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let V1=Math.floor(D*$.width),L1=Math.floor(D*$.height);s===void 0&&(s=x(V1,L1));let Y=p?x(V1,L1):s;return Y.width=V1,Y.height=L1,Y.getContext("2d").drawImage(S,0,0,V1,L1),B1("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V1+"x"+L1+")."),Y}else return"data"in S&&B1("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),S;return S}function d(S){return S.generateMipmaps}function v(S){C.generateMipmap(S)}function _(S){return S.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?C.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?C.TEXTURE_2D_ARRAY:C.TEXTURE_2D}function f(S,p,B,D,$,V1=!1){if(S!==null){if(C[S]!==void 0)return C[S];B1("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let L1;D&&(L1=e.get("EXT_texture_norm16"),L1||B1("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=p;if(p===C.RED&&(B===C.FLOAT&&(Y=C.R32F),B===C.HALF_FLOAT&&(Y=C.R16F),B===C.UNSIGNED_BYTE&&(Y=C.R8),B===C.UNSIGNED_SHORT&&L1&&(Y=L1.R16_EXT),B===C.SHORT&&L1&&(Y=L1.R16_SNORM_EXT)),p===C.RED_INTEGER&&(B===C.UNSIGNED_BYTE&&(Y=C.R8UI),B===C.UNSIGNED_SHORT&&(Y=C.R16UI),B===C.UNSIGNED_INT&&(Y=C.R32UI),B===C.BYTE&&(Y=C.R8I),B===C.SHORT&&(Y=C.R16I),B===C.INT&&(Y=C.R32I)),p===C.RG&&(B===C.FLOAT&&(Y=C.RG32F),B===C.HALF_FLOAT&&(Y=C.RG16F),B===C.UNSIGNED_BYTE&&(Y=C.RG8),B===C.UNSIGNED_SHORT&&L1&&(Y=L1.RG16_EXT),B===C.SHORT&&L1&&(Y=L1.RG16_SNORM_EXT)),p===C.RG_INTEGER&&(B===C.UNSIGNED_BYTE&&(Y=C.RG8UI),B===C.UNSIGNED_SHORT&&(Y=C.RG16UI),B===C.UNSIGNED_INT&&(Y=C.RG32UI),B===C.BYTE&&(Y=C.RG8I),B===C.SHORT&&(Y=C.RG16I),B===C.INT&&(Y=C.RG32I)),p===C.RGB_INTEGER&&(B===C.UNSIGNED_BYTE&&(Y=C.RGB8UI),B===C.UNSIGNED_SHORT&&(Y=C.RGB16UI),B===C.UNSIGNED_INT&&(Y=C.RGB32UI),B===C.BYTE&&(Y=C.RGB8I),B===C.SHORT&&(Y=C.RGB16I),B===C.INT&&(Y=C.RGB32I)),p===C.RGBA_INTEGER&&(B===C.UNSIGNED_BYTE&&(Y=C.RGBA8UI),B===C.UNSIGNED_SHORT&&(Y=C.RGBA16UI),B===C.UNSIGNED_INT&&(Y=C.RGBA32UI),B===C.BYTE&&(Y=C.RGBA8I),B===C.SHORT&&(Y=C.RGBA16I),B===C.INT&&(Y=C.RGBA32I)),p===C.RGB&&(B===C.UNSIGNED_SHORT&&L1&&(Y=L1.RGB16_EXT),B===C.SHORT&&L1&&(Y=L1.RGB16_SNORM_EXT),B===C.UNSIGNED_INT_5_9_9_9_REV&&(Y=C.RGB9_E5),B===C.UNSIGNED_INT_10F_11F_11F_REV&&(Y=C.R11F_G11F_B10F)),p===C.RGBA){let j=V1?h7:Y1.getTransfer($);B===C.FLOAT&&(Y=C.RGBA32F),B===C.HALF_FLOAT&&(Y=C.RGBA16F),B===C.UNSIGNED_BYTE&&(Y=j===r2?C.SRGB8_ALPHA8:C.RGBA8),B===C.UNSIGNED_SHORT&&L1&&(Y=L1.RGBA16_EXT),B===C.SHORT&&L1&&(Y=L1.RGBA16_SNORM_EXT),B===C.UNSIGNED_SHORT_4_4_4_4&&(Y=C.RGBA4),B===C.UNSIGNED_SHORT_5_5_5_1&&(Y=C.RGB5_A1)}return(Y===C.R16F||Y===C.R32F||Y===C.RG16F||Y===C.RG32F||Y===C.RGBA16F||Y===C.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(S,p){let B;return S?p===null||p===b5||p===$3?B=C.DEPTH24_STENCIL8:p===T5?B=C.DEPTH32F_STENCIL8:p===W3&&(B=C.DEPTH24_STENCIL8,B1("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===b5||p===$3?B=C.DEPTH_COMPONENT24:p===T5?B=C.DEPTH_COMPONENT32F:p===W3&&(B=C.DEPTH_COMPONENT16),B}function Z(S,p){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==I2&&S.minFilter!==D2?Math.log2(Math.max(p.width,p.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?p.mipmaps.length:1}function b(S){let p=S.target;p.removeEventListener("dispose",b),y(p),p.isVideoTexture&&o.delete(p),p.isHTMLTexture&&M.delete(p)}function m(S){let p=S.target;p.removeEventListener("dispose",m),I(p)}function y(S){let p=i.get(S);if(p.__webglInit===void 0)return;let B=S.source,D=l.get(B);if(D){let $=D[p.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(S),Object.keys(D).length===0&&l.delete(B)}i.remove(S)}function R(S){let p=i.get(S);C.deleteTexture(p.__webglTexture);let B=S.source,D=l.get(B);delete D[p.__cacheKey],V.memory.textures--}function I(S){let p=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(p.__webglFramebuffer[D]))for(let $=0;$<p.__webglFramebuffer[D].length;$++)C.deleteFramebuffer(p.__webglFramebuffer[D][$]);else C.deleteFramebuffer(p.__webglFramebuffer[D]);p.__webglDepthbuffer&&C.deleteRenderbuffer(p.__webglDepthbuffer[D])}else{if(Array.isArray(p.__webglFramebuffer))for(let D=0;D<p.__webglFramebuffer.length;D++)C.deleteFramebuffer(p.__webglFramebuffer[D]);else C.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&C.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&C.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let D=0;D<p.__webglColorRenderbuffer.length;D++)p.__webglColorRenderbuffer[D]&&C.deleteRenderbuffer(p.__webglColorRenderbuffer[D]);p.__webglDepthRenderbuffer&&C.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let B=S.textures;for(let D=0,$=B.length;D<$;D++){let V1=i.get(B[D]);V1.__webglTexture&&(C.deleteTexture(V1.__webglTexture),V.memory.textures--),i.remove(B[D])}i.remove(S)}let N=0;function G(){N=0}function P(){return N}function U(S){N=S}function K(){let S=N;return S>=r.maxTextures&&B1("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,S}function Q(S){let p=[];return p.push(S.wrapS),p.push(S.wrapT),p.push(S.wrapR||0),p.push(S.magFilter),p.push(S.minFilter),p.push(S.anisotropy),p.push(S.internalFormat),p.push(S.format),p.push(S.type),p.push(S.generateMipmaps),p.push(S.premultiplyAlpha),p.push(S.flipY),p.push(S.unpackAlignment),p.push(S.colorSpace),p.join()}function r1(S,p){let B=i.get(S);if(S.isVideoTexture&&E(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let D=S.image;if(D===null)B1("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)B1("WebGLRenderer: Texture marked for update but image is incomplete");else{x1(B,S,p);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(C.TEXTURE_2D,B.__webglTexture,C.TEXTURE0+p)}function q(S,p){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){x1(B,S,p);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(C.TEXTURE_2D_ARRAY,B.__webglTexture,C.TEXTURE0+p)}function t1(S,p){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){x1(B,S,p);return}t.bindTexture(C.TEXTURE_3D,B.__webglTexture,C.TEXTURE0+p)}function i1(S,p){let B=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){k1(B,S,p);return}t.bindTexture(C.TEXTURE_CUBE_MAP,B.__webglTexture,C.TEXTURE0+p)}let R1={[e9]:C.REPEAT,[B5]:C.CLAMP_TO_EDGE,[t9]:C.MIRRORED_REPEAT},O1={[I2]:C.NEAREST,[NC]:C.NEAREST_MIPMAP_NEAREST,[X7]:C.NEAREST_MIPMAP_LINEAR,[D2]:C.LINEAR,[E9]:C.LINEAR_MIPMAP_NEAREST,[O0]:C.LINEAR_MIPMAP_LINEAR},o2={[WC]:C.NEVER,[QC]:C.ALWAYS,[$C]:C.LESS,[u6]:C.LEQUAL,[qC]:C.EQUAL,[A6]:C.GEQUAL,[XC]:C.GREATER,[YC]:C.NOTEQUAL};function Q1(S,p){if(p.type===T5&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===D2||p.magFilter===E9||p.magFilter===X7||p.magFilter===O0||p.minFilter===D2||p.minFilter===E9||p.minFilter===X7||p.minFilter===O0)&&B1("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),C.texParameteri(S,C.TEXTURE_WRAP_S,R1[p.wrapS]),C.texParameteri(S,C.TEXTURE_WRAP_T,R1[p.wrapT]),(S===C.TEXTURE_3D||S===C.TEXTURE_2D_ARRAY)&&C.texParameteri(S,C.TEXTURE_WRAP_R,R1[p.wrapR]),C.texParameteri(S,C.TEXTURE_MAG_FILTER,O1[p.magFilter]),C.texParameteri(S,C.TEXTURE_MIN_FILTER,O1[p.minFilter]),p.compareFunction&&(C.texParameteri(S,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(S,C.TEXTURE_COMPARE_FUNC,o2[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===I2||p.minFilter!==X7&&p.minFilter!==O0||p.type===T5&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");C.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function e2(S,p){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,p.addEventListener("dispose",b));let D=p.source,$=l.get(D);$===void 0&&($={},l.set(D,$));let V1=Q(p);if(V1!==S.__cacheKey){$[V1]===void 0&&($[V1]={texture:C.createTexture(),usedTimes:0},V.memory.textures++,B=!0),$[V1].usedTimes++;let L1=$[S.__cacheKey];L1!==void 0&&($[S.__cacheKey].usedTimes--,L1.usedTimes===0&&R(p)),S.__cacheKey=V1,S.__webglTexture=$[V1].texture}return B}function X(S,p,B){return Math.floor(Math.floor(S/B)/p)}function e1(S,p,B,D){let V1=S.updateRanges;if(V1.length===0)t.texSubImage2D(C.TEXTURE_2D,0,0,0,p.width,p.height,B,D,p.data);else{V1.sort((b1,l1)=>b1.start-l1.start);let L1=0;for(let b1=1;b1<V1.length;b1++){let l1=V1[L1],o1=V1[b1],T1=l1.start+l1.count,P1=X(o1.start,p.width,4),N1=X(l1.start,p.width,4);o1.start<=T1+1&&P1===N1&&X(o1.start+o1.count-1,p.width,4)===P1?l1.count=Math.max(l1.count,o1.start+o1.count-l1.start):(++L1,V1[L1]=o1)}V1.length=L1+1;let Y=t.getParameter(C.UNPACK_ROW_LENGTH),j=t.getParameter(C.UNPACK_SKIP_PIXELS),a1=t.getParameter(C.UNPACK_SKIP_ROWS);t.pixelStorei(C.UNPACK_ROW_LENGTH,p.width);for(let b1=0,l1=V1.length;b1<l1;b1++){let o1=V1[b1],T1=Math.floor(o1.start/4),P1=Math.ceil(o1.count/4),N1=T1%p.width,O=Math.floor(T1/p.width),s1=P1,J=1;t.pixelStorei(C.UNPACK_SKIP_PIXELS,N1),t.pixelStorei(C.UNPACK_SKIP_ROWS,O),t.texSubImage2D(C.TEXTURE_2D,0,N1,O,s1,J,B,D,p.data)}S.clearUpdateRanges(),t.pixelStorei(C.UNPACK_ROW_LENGTH,Y),t.pixelStorei(C.UNPACK_SKIP_PIXELS,j),t.pixelStorei(C.UNPACK_SKIP_ROWS,a1)}}function x1(S,p,B){let D=C.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(D=C.TEXTURE_2D_ARRAY),p.isData3DTexture&&(D=C.TEXTURE_3D);let $=e2(S,p),V1=p.source;t.bindTexture(D,S.__webglTexture,C.TEXTURE0+B);let L1=i.get(V1);if(V1.version!==L1.__version||$===!0){if(t.activeTexture(C.TEXTURE0+B),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let J=Y1.getPrimaries(Y1.workingColorSpace),M1=p.colorSpace===t0?null:Y1.getPrimaries(p.colorSpace),u1=p.colorSpace===t0||J===M1?C.NONE:C.BROWSER_DEFAULT_WEBGL;t.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,u1)}t.pixelStorei(C.UNPACK_ALIGNMENT,p.unpackAlignment);let j=c(p.image,!1,r.maxTextureSize);j=N2(p,j);let a1=H.convert(p.format,p.colorSpace),b1=H.convert(p.type),l1=f(p.internalFormat,a1,b1,p.normalized,p.colorSpace,p.isVideoTexture);Q1(D,p);let o1,T1=p.mipmaps,P1=p.isVideoTexture!==!0,N1=L1.__version===void 0||$===!0,O=V1.dataReady,s1=Z(p,j);if(p.isDepthTexture)l1=g(p.format===E0,p.type),N1&&(P1?t.texStorage2D(C.TEXTURE_2D,1,l1,j.width,j.height):t.texImage2D(C.TEXTURE_2D,0,l1,j.width,j.height,0,a1,b1,null));else if(p.isDataTexture)if(T1.length>0){P1&&N1&&t.texStorage2D(C.TEXTURE_2D,s1,l1,T1[0].width,T1[0].height);for(let J=0,M1=T1.length;J<M1;J++)o1=T1[J],P1?O&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,o1.width,o1.height,a1,b1,o1.data):t.texImage2D(C.TEXTURE_2D,J,l1,o1.width,o1.height,0,a1,b1,o1.data);p.generateMipmaps=!1}else P1?(N1&&t.texStorage2D(C.TEXTURE_2D,s1,l1,j.width,j.height),O&&e1(p,j,a1,b1)):t.texImage2D(C.TEXTURE_2D,0,l1,j.width,j.height,0,a1,b1,j.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){P1&&N1&&t.texStorage3D(C.TEXTURE_2D_ARRAY,s1,l1,T1[0].width,T1[0].height,j.depth);for(let J=0,M1=T1.length;J<M1;J++)if(o1=T1[J],p.format!==A5)if(a1!==null)if(P1){if(O)if(p.layerUpdates.size>0){let u1=Ze(o1.width,o1.height,p.format,p.type);for(let C1 of p.layerUpdates){let E1=o1.data.subarray(C1*u1/o1.data.BYTES_PER_ELEMENT,(C1+1)*u1/o1.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,C1,o1.width,o1.height,1,a1,E1)}}else t.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,0,o1.width,o1.height,j.depth,a1,o1.data)}else t.compressedTexImage3D(C.TEXTURE_2D_ARRAY,J,l1,o1.width,o1.height,j.depth,0,o1.data,0,0);else B1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P1?O&&t.texSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,0,o1.width,o1.height,j.depth,a1,b1,o1.data):t.texImage3D(C.TEXTURE_2D_ARRAY,J,l1,o1.width,o1.height,j.depth,0,a1,b1,o1.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{P1&&N1&&t.texStorage2D(C.TEXTURE_2D,s1,l1,T1[0].width,T1[0].height);for(let J=0,M1=T1.length;J<M1;J++)o1=T1[J],p.format!==A5?a1!==null?P1?O&&t.compressedTexSubImage2D(C.TEXTURE_2D,J,0,0,o1.width,o1.height,a1,o1.data):t.compressedTexImage2D(C.TEXTURE_2D,J,l1,o1.width,o1.height,0,o1.data):B1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P1?O&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,o1.width,o1.height,a1,b1,o1.data):t.texImage2D(C.TEXTURE_2D,J,l1,o1.width,o1.height,0,a1,b1,o1.data)}else if(p.isDataArrayTexture)if(P1){if(N1&&t.texStorage3D(C.TEXTURE_2D_ARRAY,s1,l1,j.width,j.height,j.depth),O)if(p.layerUpdates.size>0){let J=Ze(j.width,j.height,p.format,p.type);for(let M1 of p.layerUpdates){let u1=j.data.subarray(M1*J/j.data.BYTES_PER_ELEMENT,(M1+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,M1,j.width,j.height,1,a1,b1,u1)}p.clearLayerUpdates()}else t.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,a1,b1,j.data)}else t.texImage3D(C.TEXTURE_2D_ARRAY,0,l1,j.width,j.height,j.depth,0,a1,b1,j.data);else if(p.isData3DTexture)P1?(N1&&t.texStorage3D(C.TEXTURE_3D,s1,l1,j.width,j.height,j.depth),O&&t.texSubImage3D(C.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,a1,b1,j.data)):t.texImage3D(C.TEXTURE_3D,0,l1,j.width,j.height,j.depth,0,a1,b1,j.data);else if(p.isFramebufferTexture){if(N1)if(P1)t.texStorage2D(C.TEXTURE_2D,s1,l1,j.width,j.height);else{let J=j.width,M1=j.height;for(let u1=0;u1<s1;u1++)t.texImage2D(C.TEXTURE_2D,u1,l1,J,M1,0,a1,b1,null),J>>=1,M1>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in C){let J=C.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),M.add(p),J.onpaint=M1=>{let u1=M1.changedElements;for(let C1 of M)u1.includes(C1.image)&&(C1.needsUpdate=!0)},J.requestPaint();return}if(C.texElementImage2D.length===3)C.texElementImage2D(C.TEXTURE_2D,C.RGBA8,j);else{let u1=C.RGBA,C1=C.RGBA,E1=C.UNSIGNED_BYTE;C.texElementImage2D(C.TEXTURE_2D,0,u1,C1,E1,j)}C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,C.LINEAR),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE)}}else if(T1.length>0){if(P1&&N1){let J=H2(T1[0]);t.texStorage2D(C.TEXTURE_2D,s1,l1,J.width,J.height)}for(let J=0,M1=T1.length;J<M1;J++)o1=T1[J],P1?O&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,a1,b1,o1):t.texImage2D(C.TEXTURE_2D,J,l1,a1,b1,o1);p.generateMipmaps=!1}else if(P1){if(N1){let J=H2(j);t.texStorage2D(C.TEXTURE_2D,s1,l1,J.width,J.height)}O&&t.texSubImage2D(C.TEXTURE_2D,0,0,0,a1,b1,j)}else t.texImage2D(C.TEXTURE_2D,0,l1,a1,b1,j);d(p)&&v(D),L1.__version=V1.version,p.onUpdate&&p.onUpdate(p)}S.__version=p.version}function k1(S,p,B){if(p.image.length!==6)return;let D=e2(S,p),$=p.source;t.bindTexture(C.TEXTURE_CUBE_MAP,S.__webglTexture,C.TEXTURE0+B);let V1=i.get($);if($.version!==V1.__version||D===!0){t.activeTexture(C.TEXTURE0+B);let L1=Y1.getPrimaries(Y1.workingColorSpace),Y=p.colorSpace===t0?null:Y1.getPrimaries(p.colorSpace),j=p.colorSpace===t0||L1===Y?C.NONE:C.BROWSER_DEFAULT_WEBGL;t.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(C.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let a1=p.isCompressedTexture||p.image[0].isCompressedTexture,b1=p.image[0]&&p.image[0].isDataTexture,l1=[];for(let C1=0;C1<6;C1++)!a1&&!b1?l1[C1]=c(p.image[C1],!0,r.maxCubemapSize):l1[C1]=b1?p.image[C1].image:p.image[C1],l1[C1]=N2(p,l1[C1]);let o1=l1[0],T1=H.convert(p.format,p.colorSpace),P1=H.convert(p.type),N1=f(p.internalFormat,T1,P1,p.normalized,p.colorSpace),O=p.isVideoTexture!==!0,s1=V1.__version===void 0||D===!0,J=$.dataReady,M1=Z(p,o1);Q1(C.TEXTURE_CUBE_MAP,p);let u1;if(a1){O&&s1&&t.texStorage2D(C.TEXTURE_CUBE_MAP,M1,N1,o1.width,o1.height);for(let C1=0;C1<6;C1++){u1=l1[C1].mipmaps;for(let E1=0;E1<u1.length;E1++){let g1=u1[E1];p.format!==A5?T1!==null?O?J&&t.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1,0,0,g1.width,g1.height,T1,g1.data):t.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1,N1,g1.width,g1.height,0,g1.data):B1("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1,0,0,g1.width,g1.height,T1,P1,g1.data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1,N1,g1.width,g1.height,0,T1,P1,g1.data)}}}else{if(u1=p.mipmaps,O&&s1){u1.length>0&&M1++;let C1=H2(l1[0]);t.texStorage2D(C.TEXTURE_CUBE_MAP,M1,N1,C1.width,C1.height)}for(let C1=0;C1<6;C1++)if(b1){O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,0,0,l1[C1].width,l1[C1].height,T1,P1,l1[C1].data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,N1,l1[C1].width,l1[C1].height,0,T1,P1,l1[C1].data);for(let E1=0;E1<u1.length;E1++){let M2=u1[E1].image[C1].image;O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1+1,0,0,M2.width,M2.height,T1,P1,M2.data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1+1,N1,M2.width,M2.height,0,T1,P1,M2.data)}}else{O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,0,0,T1,P1,l1[C1]):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,N1,T1,P1,l1[C1]);for(let E1=0;E1<u1.length;E1++){let g1=u1[E1];O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1+1,0,0,T1,P1,g1.image[C1]):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,E1+1,N1,T1,P1,g1.image[C1])}}}d(p)&&v(C.TEXTURE_CUBE_MAP),V1.__version=$.version,p.onUpdate&&p.onUpdate(p)}S.__version=p.version}function m1(S,p,B,D,$,V1){let L1=H.convert(B.format,B.colorSpace),Y=H.convert(B.type),j=f(B.internalFormat,L1,Y,B.normalized,B.colorSpace),a1=i.get(p),b1=i.get(B);if(b1.__renderTarget=p,!a1.__hasExternalTextures){let l1=Math.max(1,p.width>>V1),o1=Math.max(1,p.height>>V1);$===C.TEXTURE_3D||$===C.TEXTURE_2D_ARRAY?t.texImage3D($,V1,j,l1,o1,p.depth,0,L1,Y,null):t.texImage2D($,V1,j,l1,o1,0,L1,Y,null)}t.bindFramebuffer(C.FRAMEBUFFER,S),_2(p)?n.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,D,$,b1.__webglTexture,0,f2(p)):($===C.TEXTURE_2D||$>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,D,$,b1.__webglTexture,V1),t.bindFramebuffer(C.FRAMEBUFFER,null)}function G1(S,p,B){if(C.bindRenderbuffer(C.RENDERBUFFER,S),p.depthBuffer){let D=p.depthTexture,$=D&&D.isDepthTexture?D.type:null,V1=g(p.stencilBuffer,$),L1=p.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;_2(p)?n.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,f2(p),V1,p.width,p.height):B?C.renderbufferStorageMultisample(C.RENDERBUFFER,f2(p),V1,p.width,p.height):C.renderbufferStorage(C.RENDERBUFFER,V1,p.width,p.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,L1,C.RENDERBUFFER,S)}else{let D=p.textures;for(let $=0;$<D.length;$++){let V1=D[$],L1=H.convert(V1.format,V1.colorSpace),Y=H.convert(V1.type),j=f(V1.internalFormat,L1,Y,V1.normalized,V1.colorSpace);_2(p)?n.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,f2(p),j,p.width,p.height):B?C.renderbufferStorageMultisample(C.RENDERBUFFER,f2(p),j,p.width,p.height):C.renderbufferStorage(C.RENDERBUFFER,j,p.width,p.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function O2(S,p,B){let D=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(C.FRAMEBUFFER,S),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(p.depthTexture);if($.__renderTarget=p,(!$.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),D){if($.__webglInit===void 0&&($.__webglInit=!0,p.depthTexture.addEventListener("dispose",b)),$.__webglTexture===void 0){$.__webglTexture=C.createTexture(),t.bindTexture(C.TEXTURE_CUBE_MAP,$.__webglTexture),Q1(C.TEXTURE_CUBE_MAP,p.depthTexture);let a1=H.convert(p.depthTexture.format),b1=H.convert(p.depthTexture.type),l1;p.depthTexture.format===I5?l1=C.DEPTH_COMPONENT24:p.depthTexture.format===E0&&(l1=C.DEPTH24_STENCIL8);for(let o1=0;o1<6;o1++)C.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+o1,0,l1,p.width,p.height,0,a1,b1,null)}}else r1(p.depthTexture,0);let V1=$.__webglTexture,L1=f2(p),Y=D?C.TEXTURE_CUBE_MAP_POSITIVE_X+B:C.TEXTURE_2D,j=p.depthTexture.format===E0?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;if(p.depthTexture.format===I5)_2(p)?n.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,j,Y,V1,0,L1):C.framebufferTexture2D(C.FRAMEBUFFER,j,Y,V1,0);else if(p.depthTexture.format===E0)_2(p)?n.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,j,Y,V1,0,L1):C.framebufferTexture2D(C.FRAMEBUFFER,j,Y,V1,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $1(S){let p=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==S.depthTexture){let D=S.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),D){let $=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,D.removeEventListener("dispose",$)};D.addEventListener("dispose",$),p.__depthDisposeCallback=$}p.__boundDepthTexture=D}if(S.depthTexture&&!p.__autoAllocateDepthBuffer)if(B)for(let D=0;D<6;D++)O2(p.__webglFramebuffer[D],S,D);else{let D=S.texture.mipmaps;D&&D.length>0?O2(p.__webglFramebuffer[0],S,0):O2(p.__webglFramebuffer,S,0)}else if(B){p.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(C.FRAMEBUFFER,p.__webglFramebuffer[D]),p.__webglDepthbuffer[D]===void 0)p.__webglDepthbuffer[D]=C.createRenderbuffer(),G1(p.__webglDepthbuffer[D],S,!1);else{let $=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,V1=p.__webglDepthbuffer[D];C.bindRenderbuffer(C.RENDERBUFFER,V1),C.framebufferRenderbuffer(C.FRAMEBUFFER,$,C.RENDERBUFFER,V1)}}else{let D=S.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(C.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(C.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=C.createRenderbuffer(),G1(p.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,V1=p.__webglDepthbuffer;C.bindRenderbuffer(C.RENDERBUFFER,V1),C.framebufferRenderbuffer(C.FRAMEBUFFER,$,C.RENDERBUFFER,V1)}}t.bindFramebuffer(C.FRAMEBUFFER,null)}function j1(S,p,B){let D=i.get(S);p!==void 0&&m1(D.__webglFramebuffer,S,S.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),B!==void 0&&$1(S)}function s2(S){let p=S.texture,B=i.get(S),D=i.get(p);S.addEventListener("dispose",m);let $=S.textures,V1=S.isWebGLCubeRenderTarget===!0,L1=$.length>1;if(L1||(D.__webglTexture===void 0&&(D.__webglTexture=C.createTexture()),D.__version=p.version,V.memory.textures++),V1){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let j=0;j<p.mipmaps.length;j++)B.__webglFramebuffer[Y][j]=C.createFramebuffer()}else B.__webglFramebuffer[Y]=C.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<p.mipmaps.length;Y++)B.__webglFramebuffer[Y]=C.createFramebuffer()}else B.__webglFramebuffer=C.createFramebuffer();if(L1)for(let Y=0,j=$.length;Y<j;Y++){let a1=i.get($[Y]);a1.__webglTexture===void 0&&(a1.__webglTexture=C.createTexture(),V.memory.textures++)}if(S.samples>0&&_2(S)===!1){B.__webglMultisampledFramebuffer=C.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(C.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let j=$[Y];B.__webglColorRenderbuffer[Y]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let a1=H.convert(j.format,j.colorSpace),b1=H.convert(j.type),l1=f(j.internalFormat,a1,b1,j.normalized,j.colorSpace,S.isXRRenderTarget===!0),o1=f2(S);C.renderbufferStorageMultisample(C.RENDERBUFFER,o1,l1,S.width,S.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Y,C.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}C.bindRenderbuffer(C.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=C.createRenderbuffer(),G1(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(C.FRAMEBUFFER,null)}}if(V1){t.bindTexture(C.TEXTURE_CUBE_MAP,D.__webglTexture),Q1(C.TEXTURE_CUBE_MAP,p);for(let Y=0;Y<6;Y++)if(p.mipmaps&&p.mipmaps.length>0)for(let j=0;j<p.mipmaps.length;j++)m1(B.__webglFramebuffer[Y][j],S,p,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else m1(B.__webglFramebuffer[Y],S,p,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(p)&&v(C.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(L1){for(let Y=0,j=$.length;Y<j;Y++){let a1=$[Y],b1=i.get(a1),l1=C.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(l1=S.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),t.bindTexture(l1,b1.__webglTexture),Q1(l1,a1),m1(B.__webglFramebuffer,S,a1,C.COLOR_ATTACHMENT0+Y,l1,0),d(a1)&&v(l1)}t.unbindTexture()}else{let Y=C.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Y=S.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),t.bindTexture(Y,D.__webglTexture),Q1(Y,p),p.mipmaps&&p.mipmaps.length>0)for(let j=0;j<p.mipmaps.length;j++)m1(B.__webglFramebuffer[j],S,p,C.COLOR_ATTACHMENT0,Y,j);else m1(B.__webglFramebuffer,S,p,C.COLOR_ATTACHMENT0,Y,0);d(p)&&v(Y),t.unbindTexture()}S.depthBuffer&&$1(S)}function X1(S){let p=S.textures;for(let B=0,D=p.length;B<D;B++){let $=p[B];if(d($)){let V1=_(S),L1=i.get($).__webglTexture;t.bindTexture(V1,L1),v(V1),t.unbindTexture()}}}let A2=[],P2=[];function C5(S){if(S.samples>0){if(_2(S)===!1){let p=S.textures,B=S.width,D=S.height,$=C.COLOR_BUFFER_BIT,V1=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,L1=i.get(S),Y=p.length>1;if(Y)for(let a1=0;a1<p.length;a1++)t.bindFramebuffer(C.FRAMEBUFFER,L1.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+a1,C.RENDERBUFFER,null),t.bindFramebuffer(C.FRAMEBUFFER,L1.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+a1,C.TEXTURE_2D,null,0);t.bindFramebuffer(C.READ_FRAMEBUFFER,L1.__webglMultisampledFramebuffer);let j=S.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(C.DRAW_FRAMEBUFFER,L1.__webglFramebuffer[0]):t.bindFramebuffer(C.DRAW_FRAMEBUFFER,L1.__webglFramebuffer);for(let a1=0;a1<p.length;a1++){if(S.resolveDepthBuffer&&(S.depthBuffer&&($|=C.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&($|=C.STENCIL_BUFFER_BIT)),Y){C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,L1.__webglColorRenderbuffer[a1]);let b1=i.get(p[a1]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,b1,0)}C.blitFramebuffer(0,0,B,D,0,0,B,D,$,C.NEAREST),L===!0&&(A2.length=0,P2.length=0,A2.push(C.COLOR_ATTACHMENT0+a1),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(A2.push(V1),P2.push(V1),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,P2)),C.invalidateFramebuffer(C.READ_FRAMEBUFFER,A2))}if(t.bindFramebuffer(C.READ_FRAMEBUFFER,null),t.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),Y)for(let a1=0;a1<p.length;a1++){t.bindFramebuffer(C.FRAMEBUFFER,L1.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+a1,C.RENDERBUFFER,L1.__webglColorRenderbuffer[a1]);let b1=i.get(p[a1]).__webglTexture;t.bindFramebuffer(C.FRAMEBUFFER,L1.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+a1,C.TEXTURE_2D,b1,0)}t.bindFramebuffer(C.DRAW_FRAMEBUFFER,L1.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&L){let p=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[p])}}}function f2(S){return Math.min(r.maxSamples,S.samples)}function _2(S){let p=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function E(S){let p=V.render.frame;o.get(S)!==p&&(o.set(S,p),S.update())}function N2(S,p){let B=S.colorSpace,D=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==m7&&B!==t0&&(Y1.getTransfer(B)===r2?(D!==A5||$!==r5)&&B1("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):I1("WebGLTextures: Unsupported texture color space:",B)),p}function H2(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(a.width=S.naturalWidth||S.width,a.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(a.width=S.displayWidth,a.height=S.displayHeight):(a.width=S.width,a.height=S.height),a}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=r1,this.setTexture2DArray=q,this.setTexture3D=t1,this.setTextureCube=i1,this.rebindTextures=j1,this.setupRenderTarget=s2,this.updateRenderTargetMipmap=X1,this.updateMultisampleRenderTarget=C5,this.setupDepthRenderbuffer=$1,this.setupFrameBufferTexture=m1,this.useMultisampledRTT=_2,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FM(C,e){function t(i,r=t0){let H,V=Y1.getTransfer(r);if(i===r5)return C.UNSIGNED_BYTE;if(i===P9)return C.UNSIGNED_SHORT_4_4_4_4;if(i===B9)return C.UNSIGNED_SHORT_5_5_5_1;if(i===le)return C.UNSIGNED_INT_5_9_9_9_REV;if(i===de)return C.UNSIGNED_INT_10F_11F_11F_REV;if(i===se)return C.BYTE;if(i===Me)return C.SHORT;if(i===W3)return C.UNSIGNED_SHORT;if(i===R9)return C.INT;if(i===b5)return C.UNSIGNED_INT;if(i===T5)return C.FLOAT;if(i===w5)return C.HALF_FLOAT;if(i===ce)return C.ALPHA;if(i===pe)return C.RGB;if(i===A5)return C.RGBA;if(i===I5)return C.DEPTH_COMPONENT;if(i===E0)return C.DEPTH_STENCIL;if(i===ue)return C.RED;if(i===I9)return C.RED_INTEGER;if(i===R0)return C.RG;if(i===F9)return C.RG_INTEGER;if(i===k9)return C.RGBA_INTEGER;if(i===Y7||i===Q7||i===K7||i===J7)if(V===r2)if(H=e.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(i===Y7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Q7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===K7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===J7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=e.get("WEBGL_compressed_texture_s3tc"),H!==null){if(i===Y7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Q7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===K7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===J7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===D9||i===N9||i===U9||i===z9)if(H=e.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(i===D9)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===N9)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===U9)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===z9)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===G9||i===W9||i===$9||i===q9||i===X9||i===j7||i===Y9)if(H=e.get("WEBGL_compressed_texture_etc"),H!==null){if(i===G9||i===W9)return V===r2?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(i===$9)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(i===q9)return H.COMPRESSED_R11_EAC;if(i===X9)return H.COMPRESSED_SIGNED_R11_EAC;if(i===j7)return H.COMPRESSED_RG11_EAC;if(i===Y9)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Q9||i===K9||i===J9||i===j9||i===e6||i===t6||i===C6||i===i6||i===r6||i===H6||i===V6||i===n6||i===L6||i===a6)if(H=e.get("WEBGL_compressed_texture_astc"),H!==null){if(i===Q9)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===K9)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===J9)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===j9)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===e6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===t6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===C6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===i6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===r6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===H6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===V6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===n6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===L6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===a6)return V===r2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===o6||i===s6||i===M6)if(H=e.get("EXT_texture_compression_bptc"),H!==null){if(i===o6)return V===r2?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===s6)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===M6)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l6||i===d6||i===e4||i===c6)if(H=e.get("EXT_texture_compression_rgtc"),H!==null){if(i===l6)return H.COMPRESSED_RED_RGTC1_EXT;if(i===d6)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===e4)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===c6)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$3?C.UNSIGNED_INT_24_8:C[i]!==void 0?C[i]:null}return{convert:t}}var kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DM=`
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

}`,We=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new T7(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new o5({vertexShader:kM,fragmentShader:DM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new e5(new k7(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$e=class extends F5{constructor(e,t){super();let i=this,r=null,H=1,V=null,n="local-floor",L=1,a=null,o=null,M=null,s=null,l=null,u=null,x=typeof XRWebGLBinding<"u",c=new We,d={},v=t.getContextAttributes(),_=null,f=null,g=[],Z=[],b=new f1,m=null,y=null,R=new $2;R.viewport=new m2;let I=new $2;I.viewport=new m2;let N=[R,I],G=new b9,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let e1=g[X];return e1===void 0&&(e1=new R3,g[X]=e1),e1.getTargetRaySpace()},this.getControllerGrip=function(X){let e1=g[X];return e1===void 0&&(e1=new R3,g[X]=e1),e1.getGripSpace()},this.getHand=function(X){let e1=g[X];return e1===void 0&&(e1=new R3,g[X]=e1),e1.getHandSpace()};function K(X){let e1=Z.indexOf(X.inputSource);if(e1===-1)return;let x1=g[e1];x1!==void 0&&(x1.update(X.inputSource,X.frame,a||V),x1.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",r1);for(let X=0;X<g.length;X++){let e1=Z[X];e1!==null&&(Z[X]=null,g[X].disconnect(e1))}P=null,U=null,c.reset();for(let X in d)delete d[X];if(e.setRenderTarget(_),l=null,s=null,M=null,r=null,f=null,e2.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(b.width,b.height,!1),y!==null){let X=y.camera;X.fov=y.fov,X.zoom=y.zoom,X.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){H=X,i.isPresenting===!0&&B1("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){n=X,i.isPresenting===!0&&B1("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||V},this.setReferenceSpace=function(X){a=X},this.getBaseLayer=function(){return s!==null?s:l},this.getBinding=function(){return M===null&&x&&(M=new XRWebGLBinding(r,t)),M},this.getFrame=function(){return u},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",r1),v.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let x1=null,k1=null,m1=null;v.depth&&(m1=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,x1=v.stencil?E0:I5,k1=v.stencil?$3:b5);let G1={colorFormat:t.RGBA8,depthFormat:m1,scaleFactor:H};M=this.getBinding(),s=M.createProjectionLayer(G1),r.updateRenderState({layers:[s]}),e.setPixelRatio(1),e.setSize(s.textureWidth,s.textureHeight,!1),f=new i5(s.textureWidth,s.textureHeight,{format:A5,type:r5,depthTexture:new g0(s.textureWidth,s.textureHeight,k1,void 0,void 0,void 0,void 0,void 0,void 0,x1),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1,resolveStencilBuffer:s.ignoreDepthValues===!1,storeMultisampledDepthBuffer:s.ignoreDepthValues===!1,storeMultisampledStencilBuffer:s.ignoreDepthValues===!1})}else{let x1={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:H};l=new XRWebGLLayer(r,t,x1),r.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),f=new i5(l.framebufferWidth,l.framebufferHeight,{format:A5,type:r5,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(L),a=null,V=await r.requestReferenceSpace(n),e2.setContext(r),e2.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function r1(X){for(let e1=0;e1<X.removed.length;e1++){let x1=X.removed[e1],k1=Z.indexOf(x1);k1>=0&&(Z[k1]=null,g[k1].disconnect(x1))}for(let e1=0;e1<X.added.length;e1++){let x1=X.added[e1],k1=Z.indexOf(x1);if(k1===-1){for(let G1=0;G1<g.length;G1++)if(G1>=Z.length){Z.push(x1),k1=G1;break}else if(Z[G1]===null){Z[G1]=x1,k1=G1;break}if(k1===-1)break}let m1=g[k1];m1&&m1.connect(x1)}}let q=new T,t1=new T;function i1(X,e1,x1){q.setFromMatrixPosition(e1.matrixWorld),t1.setFromMatrixPosition(x1.matrixWorld);let k1=q.distanceTo(t1),m1=e1.projectionMatrix.elements,G1=x1.projectionMatrix.elements,O2=m1[14]/(m1[10]-1),$1=m1[14]/(m1[10]+1),j1=(m1[9]+1)/m1[5],s2=(m1[9]-1)/m1[5],X1=(m1[8]-1)/m1[0],A2=(G1[8]+1)/G1[0],P2=O2*X1,C5=O2*A2,f2=k1/(-X1+A2),_2=f2*-X1;if(e1.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_2),X.translateZ(f2),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),m1[10]===-1)X.projectionMatrix.copy(e1.projectionMatrix),X.projectionMatrixInverse.copy(e1.projectionMatrixInverse);else{let E=O2+f2,N2=$1+f2,H2=P2-_2,S=C5+(k1-_2),p=j1*$1/N2*E,B=s2*$1/N2*E;X.projectionMatrix.makePerspective(H2,S,p,B,E,N2),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function R1(X,e1){e1===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(e1.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let e1=X.near,x1=X.far;c.texture!==null&&(c.depthNear>0&&(e1=c.depthNear),c.depthFar>0&&(x1=c.depthFar)),G.near=I.near=R.near=e1,G.far=I.far=R.far=x1,(P!==G.near||U!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,U=G.far),G.layers.mask=X.layers.mask|6,R.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let k1=X.parent,m1=G.cameras;R1(G,k1);for(let G1=0;G1<m1.length;G1++)R1(m1[G1],k1);m1.length===2?i1(G,R,I):G.projectionMatrix.copy(R.projectionMatrix),y===null&&X.isPerspectiveCamera&&(y={camera:X,fov:X.fov,zoom:X.zoom}),O1(X,G,k1)};function O1(X,e1,x1){x1===null?X.matrix.copy(e1.matrixWorld):(X.matrix.copy(x1.matrixWorld),X.matrix.invert(),X.matrix.multiply(e1.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(e1.projectionMatrix),X.projectionMatrixInverse.copy(e1.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=w3*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(s===null&&l===null))return L},this.setFoveation=function(X){L=X,s!==null&&(s.fixedFoveation=X),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=X)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(G)},this.getCameraTexture=function(X){return d[X]};let o2=null;function Q1(X,e1){if(o=e1.getViewerPose(a||V),u=e1,o!==null){let x1=o.views;l!==null&&(e.setRenderTargetFramebuffer(f,l.framebuffer),e.setRenderTarget(f));let k1=!1;x1.length!==G.cameras.length&&(G.cameras.length=0,k1=!0);for(let $1=0;$1<x1.length;$1++){let j1=x1[$1],s2=null;if(l!==null)s2=l.getViewport(j1);else{let A2=M.getViewSubImage(s,j1);s2=A2.viewport,$1===0&&(e.setRenderTargetTextures(f,A2.colorTexture,A2.depthStencilTexture),e.setRenderTarget(f))}let X1=N[$1];X1===void 0&&(X1=new $2,X1.layers.enable($1),X1.viewport=new m2,N[$1]=X1),X1.matrix.fromArray(j1.transform.matrix),X1.matrix.decompose(X1.position,X1.quaternion,X1.scale),X1.projectionMatrix.fromArray(j1.projectionMatrix),X1.projectionMatrixInverse.copy(X1.projectionMatrix).invert(),X1.viewport.set(s2.x,s2.y,s2.width,s2.height),$1===0&&(G.matrix.copy(X1.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),k1===!0&&G.cameras.push(X1)}let m1=r.enabledFeatures;if(m1&&m1.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){M=i.getBinding();let $1=M.getDepthInformation(x1[0]);$1&&$1.isValid&&$1.texture&&c.init($1,r.renderState)}if(m1&&m1.includes("camera-access")&&x){e.state.unbindTexture(),M=i.getBinding();for(let $1=0;$1<x1.length;$1++){let j1=x1[$1].camera;if(j1){let s2=d[j1];s2||(s2=new T7,d[j1]=s2);let X1=M.getCameraImage(j1);s2.sourceTexture=X1}}}}for(let x1=0;x1<g.length;x1++){let k1=Z[x1],m1=g[x1];k1!==null&&m1!==void 0&&m1.update(k1,e1,a||V)}o2&&o2(X,e1),e1.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:e1}),u=null}let e2=new wi;e2.setAnimationLoop(Q1),this.setAnimationLoop=function(X){o2=X},this.dispose=function(){}}},NM=new n2,Ii=new F1;Ii.set(-1,0,0,0,1,0,0,0,1);function UM(C,e){function t(c,d){c.matrixAutoUpdate===!0&&c.updateMatrix(),d.value.copy(c.matrix)}function i(c,d){d.color.getRGB(c.fogColor.value,ve(C)),d.isFog?(c.fogNear.value=d.near,c.fogFar.value=d.far):d.isFogExp2&&(c.fogDensity.value=d.density)}function r(c,d,v,_,f){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?H(c,d):d.isMeshLambertMaterial?(H(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(H(c,d),M(c,d)):d.isMeshPhongMaterial?(H(c,d),o(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(H(c,d),s(c,d),d.isMeshPhysicalMaterial&&l(c,d,f)):d.isMeshMatcapMaterial?(H(c,d),u(c,d)):d.isMeshDepthMaterial?H(c,d):d.isMeshDistanceMaterial?(H(c,d),x(c,d)):d.isMeshNormalMaterial?H(c,d):d.isLineBasicMaterial?(V(c,d),d.isLineDashedMaterial&&n(c,d)):d.isPointsMaterial?L(c,d,v,_):d.isSpriteMaterial?a(c,d):d.isShadowMaterial?(c.color.value.copy(d.color),c.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function H(c,d){c.opacity.value=d.opacity,d.color&&c.diffuse.value.copy(d.color),d.emissive&&c.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.bumpMap&&(c.bumpMap.value=d.bumpMap,t(d.bumpMap,c.bumpMapTransform),c.bumpScale.value=d.bumpScale,d.side===t5&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,t(d.normalMap,c.normalMapTransform),c.normalScale.value.copy(d.normalScale),d.side===t5&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,t(d.displacementMap,c.displacementMapTransform),c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,c.emissiveMapTransform)),d.specularMap&&(c.specularMap.value=d.specularMap,t(d.specularMap,c.specularMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest);let v=e.get(d),_=v.envMap,f=v.envMapRotation;_&&(c.envMap.value=_,c.envMapRotation.value.setFromMatrix4(NM.makeRotationFromEuler(f)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Ii),c.reflectivity.value=d.reflectivity,c.ior.value=d.ior,c.refractionRatio.value=d.refractionRatio),d.lightMap&&(c.lightMap.value=d.lightMap,c.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,c.lightMapTransform)),d.aoMap&&(c.aoMap.value=d.aoMap,c.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,c.aoMapTransform))}function V(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform))}function n(c,d){c.dashSize.value=d.dashSize,c.totalSize.value=d.dashSize+d.gapSize,c.scale.value=d.scale}function L(c,d,v,_){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.size.value=d.size*v,c.scale.value=_*.5,d.map&&(c.map.value=d.map,t(d.map,c.uvTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function a(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.rotation.value=d.rotation,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function o(c,d){c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4)}function M(c,d){d.gradientMap&&(c.gradientMap.value=d.gradientMap)}function s(c,d){c.metalness.value=d.metalness,d.metalnessMap&&(c.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,c.metalnessMapTransform)),c.roughness.value=d.roughness,d.roughnessMap&&(c.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,c.roughnessMapTransform)),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)}function l(c,d,v){c.ior.value=d.ior,d.sheen>0&&(c.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),c.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(c.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,c.sheenColorMapTransform)),d.sheenRoughnessMap&&(c.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,c.sheenRoughnessMapTransform))),d.clearcoat>0&&(c.clearcoat.value=d.clearcoat,c.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(c.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,c.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(c.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===t5&&c.clearcoatNormalScale.value.negate())),d.dispersion>0&&(c.dispersion.value=d.dispersion),d.retroreflectivity>0&&(c.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(c.iridescence.value=d.iridescence,c.iridescenceIOR.value=d.iridescenceIOR,c.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(c.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,c.iridescenceMapTransform)),d.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),d.transmission>0&&(c.transmission.value=d.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(c.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,c.transmissionMapTransform)),c.thickness.value=d.thickness,d.thicknessMap&&(c.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=d.attenuationDistance,c.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(c.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(c.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=d.specularIntensity,c.specularColor.value.copy(d.specularColor),d.specularColorMap&&(c.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,c.specularColorMapTransform)),d.specularIntensityMap&&(c.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,c.specularIntensityMapTransform))}function u(c,d){d.matcap&&(c.matcap.value=d.matcap)}function x(c,d){let v=e.get(d).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zM(C,e,t,i){let r={},H={},V=[],n=C.getParameter(C.MAX_UNIFORM_BUFFER_BINDINGS);function L(f,g){let Z=g.program;i.uniformBlockBinding(f,Z)}function a(f,g){let Z=r[f.id];Z===void 0&&(c(f),Z=o(f),r[f.id]=Z,f.addEventListener("dispose",v));let b=g.program;i.updateUBOMapping(f,b);let m=e.render.frame;H[f.id]!==m&&(s(f),H[f.id]=m)}function o(f){let g=M();f.__bindingPointIndex=g;let Z=C.createBuffer(),b=f.__size,m=f.usage;return C.bindBuffer(C.UNIFORM_BUFFER,Z),C.bufferData(C.UNIFORM_BUFFER,b,m),C.bindBuffer(C.UNIFORM_BUFFER,null),C.bindBufferBase(C.UNIFORM_BUFFER,g,Z),Z}function M(){for(let f=0;f<n;f++)if(V.indexOf(f)===-1)return V.push(f),f;return I1("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(f){let g=r[f.id],Z=f.uniforms,b=f.__cache;C.bindBuffer(C.UNIFORM_BUFFER,g);for(let m=0,y=Z.length;m<y;m++){let R=Z[m];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)l(R[I],m,I,b);else l(R,m,0,b)}C.bindBuffer(C.UNIFORM_BUFFER,null)}function l(f,g,Z,b){if(x(f,g,Z,b)===!0){let m=f.__offset,y=f.value;if(Array.isArray(y)){let R=0;for(let I=0;I<y.length;I++){let N=y[I],G=d(N);u(N,f.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else u(y,f.__data,0);C.bufferSubData(C.UNIFORM_BUFFER,m,f.__data)}}function u(f,g,Z){typeof f=="number"||typeof f=="boolean"?g[0]=f:f.isMatrix3?(g[0]=f.elements[0],g[1]=f.elements[1],g[2]=f.elements[2],g[3]=0,g[4]=f.elements[3],g[5]=f.elements[4],g[6]=f.elements[5],g[7]=0,g[8]=f.elements[6],g[9]=f.elements[7],g[10]=f.elements[8],g[11]=0):ArrayBuffer.isView(f)?g.set(new f.constructor(f.buffer,f.byteOffset,g.length)):f.toArray(g,Z)}function x(f,g,Z,b){let m=f.value,y=g+"_"+Z;if(b[y]===void 0)return typeof m=="number"||typeof m=="boolean"?b[y]=m:ArrayBuffer.isView(m)?b[y]=m.slice():b[y]=m.clone(),!0;{let R=b[y];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return b[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function c(f){let g=f.uniforms,Z=0,b=16;for(let y=0,R=g.length;y<R;y++){let I=Array.isArray(g[y])?g[y]:[g[y]];for(let N=0,G=I.length;N<G;N++){let P=I[N],U=Array.isArray(P.value)?P.value:[P.value];for(let K=0,Q=U.length;K<Q;K++){let r1=U[K],q=d(r1),t1=Z%b,i1=t1%q.boundary,R1=t1+i1;Z+=i1,R1!==0&&b-R1<q.storage&&(Z+=b-R1),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=Z,Z+=q.storage}}}let m=Z%b;return m>0&&(Z+=b-m),f.__size=Z,f.__cache={},this}function d(f){let g={boundary:0,storage:0};return typeof f=="number"||typeof f=="boolean"?(g.boundary=4,g.storage=4):f.isVector2?(g.boundary=8,g.storage=8):f.isVector3||f.isColor?(g.boundary=16,g.storage=12):f.isVector4?(g.boundary=16,g.storage=16):f.isMatrix3?(g.boundary=48,g.storage=48):f.isMatrix4?(g.boundary=64,g.storage=64):f.isTexture?B1("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(f)?(g.boundary=16,g.storage=f.byteLength):B1("WebGLRenderer: Unsupported uniform value type.",f),g}function v(f){let g=f.target;g.removeEventListener("dispose",v);let Z=V.indexOf(g.__bindingPointIndex);V.splice(Z,1),C.deleteBuffer(r[g.id]),delete r[g.id],delete H[g.id]}function _(){for(let f in r)C.deleteBuffer(r[f]);V=[],r={},H={}}return{bind:L,update:a,dispose:_}}var GM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),N5=null;function WM(){return N5===null&&(N5=new V9(GM,16,16,R0,w5),N5.name="DFG_LUT",N5.minFilter=D2,N5.magFilter=D2,N5.wrapS=B5,N5.wrapT=B5,N5.generateMipmaps=!1,N5.needsUpdate=!0),N5}var v6=class{constructor(e={}){let{canvas:t=JC(),context:i=null,depth:r=!0,stencil:H=!1,alpha:V=!1,antialias:n=!1,premultipliedAlpha:L=!0,preserveDrawingBuffer:a=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:s=!1,outputBufferType:l=r5}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=V;let x=l,c=new Set([k9,F9,I9]),d=new Set([r5,b5,W3,$3,P9,B9]),v=new Uint32Array(4),_=new Int32Array(4),f=new T,g=null,Z=null,b=[],m=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_5,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,G=null,P=null,U=null;this._outputColorSpace=W2;let K=0,Q=0,r1=null,q=-1,t1=null,i1=new m2,R1=new m2,O1=null,o2=new D1(0),Q1=0,e2=t.width,X=t.height,e1=1,x1=null,k1=null,m1=new m2(0,0,e2,X),G1=new m2(0,0,e2,X),O2=!1,$1=new B3,j1=!1,s2=!1,X1=new n2,A2=new T,P2=new m2,C5={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},f2=!1;function _2(){return r1===null?e1:1}let E=i;function N2(A,w){return t.getContext(A,w)}let H2,S,p,B,D,$,V1,L1,Y,j,a1,b1,l1,o1,T1,P1,N1,O,s1,J,M1,u1,C1;try{let A={alpha:!0,depth:r,stencil:H,antialias:n,premultipliedAlpha:L,preserveDrawingBuffer:a,powerPreference:o,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",M2,!1),t.addEventListener("webglcontextrestored",C2,!1),t.addEventListener("webglcontextcreationerror",h5,!1),E===null){let w="webgl2";if(E=N2(w,A),E===null)throw N2(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}E1()}catch(A){throw t.removeEventListener("webglcontextlost",M2,!1),t.removeEventListener("webglcontextrestored",C2,!1),t.removeEventListener("webglcontextcreationerror",h5,!1),I1("WebGLRenderer: "+A.message),A}function E1(){H2=new Jo(E),H2.init(),M1=new FM(E,H2),S=new Uo(E,H2,e,M1),p=new BM(E,H2),S.reversedDepthBuffer&&s&&p.buffers.depth.setReversed(!0),G=E.createFramebuffer(),P=E.createFramebuffer(),U=E.createFramebuffer(),B=new ts(E),D=new xM,$=new IM(E,H2,p,D,S,M1,B),V1=new Ko(R),L1=new CL(E),u1=new Do(E,L1),Y=new jo(E,L1,B,u1),j=new is(E,Y,L1,u1,B),O=new Cs(E,S,$),T1=new zo(D),a1=new fM(R,V1,H2,S,u1,T1),b1=new UM(R,D),l1=new SM,o1=new TM(H2),N1=new ko(R,V1,p,j,u,L),P1=new PM(R,j,S),C1=new zM(E,B,S,p),s1=new No(E,H2,B),J=new es(E,H2,B),B.programs=a1.programs,R.capabilities=S,R.extensions=H2,R.properties=D,R.renderLists=l1,R.shadowMap=P1,R.state=p,R.info=B}x!==r5&&(y=new Hs(x,t.width,t.height,n,r,H));let g1=new $e(R,E);this.xr=g1,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let A=H2.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=H2.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return e1},this.setPixelRatio=function(A){A!==void 0&&(e1=A,this.setSize(e2,X,!1))},this.getSize=function(A){return A.set(e2,X)},this.setSize=function(A,w,z=!0){if(g1.isPresenting){B1("WebGLRenderer: Can't change size while VR device is presenting.");return}e2=A,X=w,t.width=Math.floor(A*e1),t.height=Math.floor(w*e1),z===!0&&(t.style.width=A+"px",t.style.height=w+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,A,w)},this.getDrawingBufferSize=function(A){return A.set(e2*e1,X*e1).floor()},this.setDrawingBufferSize=function(A,w,z){e2=A,X=w,e1=z,t.width=Math.floor(A*z),t.height=Math.floor(w*z),this.setViewport(0,0,A,w)},this.setEffects=function(A){if(x===r5){I1("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let w=0;w<A.length;w++)if(A[w].isOutputPass===!0){B1("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(i1)},this.getViewport=function(A){return A.copy(m1)},this.setViewport=function(A,w,z,F){A.isVector4?m1.set(A.x,A.y,A.z,A.w):m1.set(A,w,z,F),p.viewport(i1.copy(m1).multiplyScalar(e1).round())},this.getScissor=function(A){return A.copy(G1)},this.setScissor=function(A,w,z,F){A.isVector4?G1.set(A.x,A.y,A.z,A.w):G1.set(A,w,z,F),p.scissor(R1.copy(G1).multiplyScalar(e1).round())},this.getScissorTest=function(){return O2},this.setScissorTest=function(A){p.setScissorTest(O2=A)},this.setOpaqueSort=function(A){x1=A},this.setTransparentSort=function(A){k1=A},this.getClearColor=function(A){return A.copy(N1.getClearColor())},this.setClearColor=function(){N1.setClearColor(...arguments)},this.getClearAlpha=function(){return N1.getClearAlpha()},this.setClearAlpha=function(){N1.setClearAlpha(...arguments)},this.clear=function(A=!0,w=!0,z=!0){let F=0;if(A){let k=!1;if(r1!==null){let p1=r1.texture.format;k=c.has(p1)}if(k){let p1=r1.texture.type,h1=d.has(p1),c1=N1.getClearColor(),v1=N1.getClearAlpha(),Z1=c1.r,U1=c1.g,q1=c1.b;h1?(v[0]=Z1,v[1]=U1,v[2]=q1,v[3]=v1,E.clearBufferuiv(E.COLOR,0,v)):(_[0]=Z1,_[1]=U1,_[2]=q1,_[3]=v1,E.clearBufferiv(E.COLOR,0,_))}else F|=E.COLOR_BUFFER_BIT}w&&(F|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&E.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",M2,!1),t.removeEventListener("webglcontextrestored",C2,!1),t.removeEventListener("webglcontextcreationerror",h5,!1),N1.dispose(),l1.dispose(),o1.dispose(),D.dispose(),V1.dispose(),j.dispose(),u1.dispose(),C1.dispose(),a1.dispose(),g1.dispose(),g1.removeEventListener("sessionstart",Ot),g1.removeEventListener("sessionend",Et),U0.stop()};function M2(A){A.preventDefault(),me("WebGLRenderer: Context Lost."),I=!0}function C2(){me("WebGLRenderer: Context Restored."),I=!1;let A=B.autoReset,w=P1.enabled,z=P1.autoUpdate,F=P1.needsUpdate,k=P1.type;E1(),B.autoReset=A,P1.enabled=w,P1.autoUpdate=z,P1.needsUpdate=F,P1.type=k}function h5(A){I1("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function E5(A){let w=A.target;w.removeEventListener("dispose",E5),ZV(w)}function ZV(A){yV(A),D.remove(A)}function yV(A){let w=D.get(A).programs;w!==void 0&&(w.forEach(function(z){a1.releaseProgram(z)}),A.isShaderMaterial&&a1.releaseShaderCache(A))}this.renderBufferDirect=function(A,w,z,F,k,p1){w===null&&(w=C5);let h1=k.isMesh&&k.matrixWorld.determinantAffine()<0,c1=TV(A,w,z,F,k);p.setMaterial(F,h1);let v1=z.index,Z1=1;if(F.wireframe===!0){if(v1=Y.getWireframeAttribute(z),v1===void 0)return;Z1=2}let U1=z.drawRange,q1=z.attributes.position,S1=U1.start*Z1,i2=(U1.start+U1.count)*Z1;p1!==null&&(S1=Math.max(S1,p1.start*Z1),i2=Math.min(i2,(p1.start+p1.count)*Z1)),v1!==null?(S1=Math.max(S1,0),i2=Math.min(i2,v1.count)):q1!=null&&(S1=Math.max(S1,0),i2=Math.min(i2,q1.count));let b2=i2-S1;if(b2<0||b2===1/0)return;u1.setup(k,F,c1,z,v1);let c2,L2=s1;if(v1!==null&&(c2=L1.get(v1),L2=J,L2.setIndex(c2)),k.isMesh)F.wireframe===!0?(p.setLineWidth(F.wireframeLinewidth*_2()),L2.setMode(E.LINES)):L2.setMode(E.TRIANGLES);else if(k.isLine){let U2=F.linewidth;U2===void 0&&(U2=1),p.setLineWidth(U2*_2()),k.isLineSegments?L2.setMode(E.LINES):k.isLineLoop?L2.setMode(E.LINE_LOOP):L2.setMode(E.LINE_STRIP)}else k.isPoints?L2.setMode(E.POINTS):k.isSprite&&L2.setMode(E.TRIANGLES);if(k.isBatchedMesh)if(H2.get("WEBGL_multi_draw"))L2.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let U2=k._multiDrawStarts,A1=k._multiDrawCounts,Y2=k._multiDrawCount,J1=v1?L1.get(v1).bytesPerElement:1,d5=D.get(F).currentProgram.getUniforms();for(let R5=0;R5<Y2;R5++)d5.setValue(E,"_gl_DrawID",R5),L2.render(U2[R5]/J1,A1[R5])}else if(k.isInstancedMesh)L2.renderInstances(S1,b2,k.count);else if(z.isInstancedBufferGeometry){let U2=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,A1=Math.min(z.instanceCount,U2);L2.renderInstances(S1,b2,A1)}else L2.render(S1,b2)};function wt(A,w,z,F){N!==null&&A.isNodeMaterial&&N.setObject(F,A),j1===!0&&T1.setState(A,z,!1),A.transparent===!0&&A.side===k5&&A.forceSinglePass===!1?(A.side=t5,A.needsUpdate=!0,v4(A,w,F),A.side=T0,A.needsUpdate=!0,v4(A,w,F),A.side=k5):v4(A,w,F)}this.compile=function(A,w,z=null){z===null&&(z=A),N!==null&&N.renderStart(A,w,z),Z=o1.get(z),Z.init(w),m.push(Z),z.traverseVisible(function(k){k.isLight&&k.layers.test(w.layers)&&(Z.pushLight(k),k.castShadow&&Z.pushShadow(k))}),A!==z&&A.traverseVisible(function(k){k.isLight&&k.layers.test(w.layers)&&(Z.pushLight(k),k.castShadow&&Z.pushShadow(k))}),Z.setupLights(),N!==null&&N.updateLights(Z.state.lightsArray),s2=this.localClippingEnabled,j1=T1.init(this.clippingPlanes,s2),j1===!0&&T1.setGlobalState(this.clippingPlanes,w),N!==null&&P1.render(Z.state.shadowsArray,z,w);let F=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let p1=k.material;if(p1)if(Array.isArray(p1))for(let h1=0;h1<p1.length;h1++){let c1=p1[h1];wt(c1,z,w,k),F.add(c1)}else wt(p1,z,w,k),F.add(p1)}),Z=m.pop(),N!==null&&N.renderEnd(),F},this.compileAsync=function(A,w,z=null){let F=this.compile(A,w,z);return new Promise(k=>{function p1(){if(F.forEach(function(h1){let v1=D.get(h1).currentProgram;(v1===void 0||v1.isReady())&&F.delete(h1)}),F.size===0){k(A);return}setTimeout(p1,10)}H2.get("KHR_parallel_shader_compile")!==null?p1():setTimeout(p1,10)})};let l8=null;function _V(A){l8&&l8(A)}function Ot(){U0.stop()}function Et(){U0.start()}let U0=new wi;U0.setAnimationLoop(_V),typeof self<"u"&&U0.setContext(self),this.setAnimationLoop=function(A){l8=A,g1.setAnimationLoop(A),A===null?U0.stop():U0.start()},g1.addEventListener("sessionstart",Ot),g1.addEventListener("sessionend",Et),this.render=function(A,w){if(w!==void 0&&w.isCamera!==!0){I1("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,w);let z=g1.enabled===!0&&g1.isPresenting===!0,F=y!==null&&(r1===null||z)&&y.begin(R,r1);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),g1.enabled===!0&&g1.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(g1.cameraAutoUpdate===!0&&g1.updateCamera(w),w=g1.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,w,r1),Z=o1.get(A,m.length),Z.init(w),Z.state.textureUnits=$.getTextureUnits(),m.push(Z),X1.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),$1.setFromProjectionMatrix(X1,g5,w.reversedDepth),s2=this.localClippingEnabled,j1=T1.init(this.clippingPlanes,s2),g=l1.get(A,b.length),g.init(),b.push(g),g1.enabled===!0&&g1.isPresenting===!0){let h1=R.xr.getDepthSensingMesh();h1!==null&&d8(h1,w,-1/0,R.sortObjects)}d8(A,w,0,R.sortObjects),g.finish(),N!==null&&N.updateLights(Z.state.lightsArray),R.sortObjects===!0&&g.sort(x1,k1),f2=g1.enabled===!1||g1.isPresenting===!1||g1.hasDepthSensing()===!1,f2&&N1.addToRenderList(g,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j1===!0&&T1.beginShadows();let k=Z.state.shadowsArray;if(P1.render(k,A,w),j1===!0&&T1.endShadows(),(F&&y.hasRenderPass())===!1){let h1=g.opaque,c1=g.transmissive;if(Z.setupLights(),w.isArrayCamera){let v1=w.cameras;if(c1.length>0)for(let Z1=0,U1=v1.length;Z1<U1;Z1++){let q1=v1[Z1];Pt(h1,c1,A,q1)}f2&&N1.render(A);for(let Z1=0,U1=v1.length;Z1<U1;Z1++){let q1=v1[Z1];Rt(g,A,q1,q1.viewport)}}else c1.length>0&&Pt(h1,c1,A,w),f2&&N1.render(A),Rt(g,A,w)}r1!==null&&Q===0&&($.updateMultisampleRenderTarget(r1),$.updateRenderTargetMipmap(r1)),F&&y.end(R),A.isScene===!0&&A.onAfterRender(R,A,w),u1.resetDefaultState(),q=-1,t1=null,m.pop(),m.length>0?(Z=m[m.length-1],$.setTextureUnits(Z.state.textureUnits),j1===!0&&T1.setGlobalState(R.clippingPlanes,Z.state.camera)):Z=null,b.pop(),b.length>0?g=b[b.length-1]:g=null,N!==null&&N.renderEnd()};function d8(A,w,z,F){if(A.visible===!1)return;if(A.layers.test(w.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(w);else if(A.isLightProbeGrid)Z.pushLightProbeGrid(A);else if(A.isLight)Z.pushLight(A),A.castShadow&&Z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum($1)){F&&P2.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X1);let h1=j.update(A),c1=A.material;c1.visible&&g.push(A,h1,c1,z,P2.z,null,w)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum($1))){let h1=j.update(A),c1=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),P2.copy(A.boundingSphere.center)):(h1.boundingSphere===null&&h1.computeBoundingSphere(),P2.copy(h1.boundingSphere.center)),P2.applyMatrix4(A.matrixWorld).applyMatrix4(X1)),Array.isArray(c1)){let v1=h1.groups;for(let Z1=0,U1=v1.length;Z1<U1;Z1++){let q1=v1[Z1],S1=c1[q1.materialIndex];S1&&S1.visible&&g.push(A,h1,S1,z,P2.z,q1,w)}}else c1.visible&&g.push(A,h1,c1,z,P2.z,null,w)}}let p1=A.children;for(let h1=0,c1=p1.length;h1<c1;h1++)d8(p1[h1],w,z,F)}function Rt(A,w,z,F){let{opaque:k,transmissive:p1,transparent:h1}=A;Z.setupLightsView(z),j1===!0&&T1.setGlobalState(R.clippingPlanes,z),F&&p.viewport(i1.copy(F)),k.length>0&&x4(k,w,z),p1.length>0&&x4(p1,w,z),h1.length>0&&x4(h1,w,z),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Pt(A,w,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(Z.state.transmissionRenderTarget[F.id]===void 0){let S1=H2.has("EXT_color_buffer_half_float")||H2.has("EXT_color_buffer_float");Z.state.transmissionRenderTarget[F.id]=new i5(1,1,{generateMipmaps:!0,type:S1?w5:r5,minFilter:O0,samples:Math.max(4,S.samples),stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y1.workingColorSpace})}let p1=Z.state.transmissionRenderTarget[F.id],h1=F.viewport||i1;p1.setSize(h1.z*R.transmissionResolutionScale,h1.w*R.transmissionResolutionScale);let c1=R.getRenderTarget(),v1=R.getActiveCubeFace(),Z1=R.getActiveMipmapLevel();R.setRenderTarget(p1),R.getClearColor(o2),Q1=R.getClearAlpha(),Q1<1&&R.setClearColor(16777215,.5),R.clear(),f2&&N1.render(z);let U1=R.toneMapping;R.toneMapping=_5;let q1=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),Z.setupLightsView(F),j1===!0&&T1.setGlobalState(R.clippingPlanes,F),x4(A,z,F),$.updateMultisampleRenderTarget(p1),$.updateRenderTargetMipmap(p1),H2.has("WEBGL_multisampled_render_to_texture")===!1){let S1=!1;for(let i2=0,b2=w.length;i2<b2;i2++){let c2=w[i2],{object:L2,geometry:U2,material:A1,group:Y2}=c2;if(A1.side===k5&&L2.layers.test(F.layers)){let J1=A1.side;A1.side=t5,A1.needsUpdate=!0,Bt(L2,z,F,U2,A1,Y2),A1.side=J1,A1.needsUpdate=!0,S1=!0}}S1===!0&&($.updateMultisampleRenderTarget(p1),$.updateRenderTargetMipmap(p1))}R.setRenderTarget(c1,v1,Z1),R.setClearColor(o2,Q1),q1!==void 0&&(F.viewport=q1),R.toneMapping=U1}function x4(A,w,z){let F=w.isScene===!0?w.overrideMaterial:null;for(let k=0,p1=A.length;k<p1;k++){let h1=A[k],{object:c1,geometry:v1,group:Z1}=h1,U1=h1.material;U1.allowOverride===!0&&F!==null&&(U1=F),c1.layers.test(z.layers)&&Bt(c1,w,z,v1,U1,Z1)}}function Bt(A,w,z,F,k,p1){N!==null&&k.isNodeMaterial&&N.setObject(A,k),A.onBeforeRender(R,w,z,F,k,p1),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(R,w,z,F,A,p1),k.transparent===!0&&k.side===k5&&k.forceSinglePass===!1?(k.side=t5,k.needsUpdate=!0,R.renderBufferDirect(z,w,F,k,A,p1),k.side=T0,k.needsUpdate=!0,R.renderBufferDirect(z,w,F,k,A,p1),k.side=k5):R.renderBufferDirect(z,w,F,k,A,p1),A.onAfterRender(R,w,z,F,k,p1)}function v4(A,w,z){w.isScene!==!0&&(w=C5);let F=D.get(A),k=Z.state.lights,p1=Z.state.shadowsArray,h1=k.state.version,c1=a1.getParameters(A,k.state,p1,w,z,Z.state.lightProbeGridArray),v1=a1.getProgramCacheKey(c1),Z1=F.programs;F.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?w.environment:null,F.fog=w.fog;let U1=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;F.envMap=V1.get(A.envMap||F.environment,U1),F.envMapRotation=F.environment!==null&&A.envMap===null?w.environmentRotation:A.envMapRotation,Z1===void 0&&(A.addEventListener("dispose",E5),Z1=new Map,F.programs=Z1);let q1=Z1.get(v1);if(q1!==void 0){if(F.currentProgram===q1&&F.lightsStateVersion===h1)return Ft(A,c1),q1}else c1.uniforms=a1.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,z,c1),A.onBeforeCompile(c1,R),q1=a1.acquireProgram(c1,v1),Z1.set(v1,q1),F.uniforms=c1.uniforms;let S1=F.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(S1.clippingPlanes=T1.uniform),Ft(A,c1),F.needsLights=OV(A),F.lightsStateVersion=h1,F.needsLights&&(S1.ambientLightColor.value=k.state.ambient,S1.lightProbe.value=k.state.probe,S1.sunLights.value=k.state.sun,S1.sunLightShadows.value=k.state.sunShadow,S1.directionalLights.value=k.state.directional,S1.directionalLightShadows.value=k.state.directionalShadow,S1.spotLights.value=k.state.spot,S1.spotLightShadows.value=k.state.spotShadow,S1.rectAreaLights.value=k.state.rectArea,S1.ltc_1.value=k.state.rectAreaLTC1,S1.ltc_2.value=k.state.rectAreaLTC2,S1.pointLights.value=k.state.point,S1.pointLightShadows.value=k.state.pointShadow,S1.hemisphereLights.value=k.state.hemi,S1.sunShadowMatrix.value=k.state.sunShadowMatrix,S1.sunShadowCascade.value=k.state.sunShadowCascade,S1.directionalShadowMatrix.value=k.state.directionalShadowMatrix,S1.spotLightMatrix.value=k.state.spotLightMatrix,S1.spotLightMap.value=k.state.spotLightMap,S1.pointShadowMatrix.value=k.state.pointShadowMatrix),F.lightProbeGrid=Z.state.lightProbeGridArray.length>0,F.currentProgram=q1,F.uniformsList=null,q1}function It(A){if(A.uniformsList===null){let w=A.currentProgram.getUniforms();A.uniformsList=Y3.seqWithValue(w.seq,A.uniforms)}return A.uniformsList}function Ft(A,w){let z=D.get(A);z.outputColorSpace=w.outputColorSpace,z.batching=w.batching,z.batchingColor=w.batchingColor,z.instancing=w.instancing,z.instancingColor=w.instancingColor,z.instancingMorph=w.instancingMorph,z.skinning=w.skinning,z.morphTargets=w.morphTargets,z.morphNormals=w.morphNormals,z.morphColors=w.morphColors,z.morphTargetsCount=w.morphTargetsCount,z.numClippingPlanes=w.numClippingPlanes,z.numIntersection=w.numClipIntersection,z.vertexAlphas=w.vertexAlphas,z.vertexTangents=w.vertexTangents,z.toneMapping=w.toneMapping}function bV(A,w){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;f.setFromMatrixPosition(w.matrixWorld);for(let z=0,F=A.length;z<F;z++){let k=A[z];if(k.texture!==null&&k.boundingBox.containsPoint(f))return k}return null}function TV(A,w,z,F,k){w.isScene!==!0&&(w=C5),$.resetTextureUnits();let p1=w.fog,h1=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?w.environment:null,c1=r1===null?R.outputColorSpace:r1.isXRRenderTarget===!0?r1.texture.colorSpace:Y1.workingColorSpace,v1=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Z1=V1.get(F.envMap||h1,v1),U1=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,q1=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),S1=!!z.morphAttributes.position,i2=!!z.morphAttributes.normal,b2=!!z.morphAttributes.color,c2=_5;F.toneMapped&&(r1===null||r1.isXRRenderTarget===!0)&&(c2=R.toneMapping);let L2=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,U2=L2!==void 0?L2.length:0,A1=D.get(F),Y2=Z.state.lights;if(j1===!0&&(s2===!0||A!==t1)){let l2=A===t1&&F.id===q;T1.setState(F,A,l2)}let J1=!1;F.version===A1.__version?(A1.needsLights&&A1.lightsStateVersion!==Y2.state.version||A1.outputColorSpace!==c1||k.isBatchedMesh&&A1.batching===!1||!k.isBatchedMesh&&A1.batching===!0||k.isBatchedMesh&&A1.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&A1.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&A1.instancing===!1||!k.isInstancedMesh&&A1.instancing===!0||k.isSkinnedMesh&&A1.skinning===!1||!k.isSkinnedMesh&&A1.skinning===!0||k.isInstancedMesh&&A1.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&A1.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&A1.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&A1.instancingMorph===!1&&k.morphTexture!==null||A1.envMap!==Z1||F.fog===!0&&A1.fog!==p1||A1.numClippingPlanes!==void 0&&(A1.numClippingPlanes!==T1.numPlanes||A1.numIntersection!==T1.numIntersection)||A1.vertexAlphas!==U1||A1.vertexTangents!==q1||A1.morphTargets!==S1||A1.morphNormals!==i2||A1.morphColors!==b2||A1.toneMapping!==c2||A1.morphTargetsCount!==U2||!!A1.lightProbeGrid!=Z.state.lightProbeGridArray.length>0)&&(J1=!0):(J1=!0,A1.__version=F.version);let d5=A1.currentProgram;J1===!0&&(d5=v4(F,w,k),N&&F.isNodeMaterial&&N.onUpdateProgram(F,d5,A1));let R5=!1,d0=!1,o3=!1,V2=d5.getUniforms(),v2=A1.uniforms;if(p.useProgram(d5.program)&&(R5=!0,d0=!0,o3=!0),F.id!==q&&(q=F.id,d0=!0),A1.needsLights){let l2=bV(Z.state.lightProbeGridArray,k);A1.lightProbeGrid!==l2&&(A1.lightProbeGrid=l2,d0=!0)}if(R5||t1!==A){p.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),V2.setValue(E,"projectionMatrix",A.projectionMatrix),V2.setValue(E,"viewMatrix",A.matrixWorldInverse);let p0=V2.map.cameraPosition;p0!==void 0&&p0.setValue(E,A2.setFromMatrixPosition(A.matrixWorld)),S.logarithmicDepthBuffer&&V2.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&V2.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),t1!==A&&(t1=A,d0=!0,o3=!0)}if(A1.needsLights&&(Y2.state.sunShadowMap.length>0&&V2.setValue(E,"sunShadowMap",Y2.state.sunShadowMap,$),Y2.state.directionalShadowMap.length>0&&V2.setValue(E,"directionalShadowMap",Y2.state.directionalShadowMap,$),Y2.state.spotShadowMap.length>0&&V2.setValue(E,"spotShadowMap",Y2.state.spotShadowMap,$),Y2.state.pointShadowMap.length>0&&V2.setValue(E,"pointShadowMap",Y2.state.pointShadowMap,$)),k.isSkinnedMesh){V2.setOptional(E,k,"bindMatrix"),V2.setOptional(E,k,"bindMatrixInverse");let l2=k.skeleton;l2&&(l2.boneTexture===null&&l2.computeBoneTexture(),V2.setValue(E,"boneTexture",l2.boneTexture,$))}k.isBatchedMesh&&(V2.setOptional(E,k,"batchingTexture"),V2.setValue(E,"batchingTexture",k._matricesTexture,$),V2.setOptional(E,k,"batchingIdTexture"),V2.setValue(E,"batchingIdTexture",k._indirectTexture,$),V2.setOptional(E,k,"batchingColorTexture"),k._colorsTexture!==null&&V2.setValue(E,"batchingColorTexture",k._colorsTexture,$));let c0=z.morphAttributes;if((c0.position!==void 0||c0.normal!==void 0||c0.color!==void 0)&&O.update(k,z,d5),(d0||A1.receiveShadow!==k.receiveShadow)&&(A1.receiveShadow=k.receiveShadow,V2.setValue(E,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&w.environment!==null&&(v2.envMapIntensity.value=w.environmentIntensity),v2.dfgLUT!==void 0&&(v2.dfgLUT.value=WM()),d0){if(V2.setValue(E,"toneMappingExposure",R.toneMappingExposure),A1.needsLights&&wV(v2,o3),p1&&F.fog===!0&&b1.refreshFogUniforms(v2,p1),b1.refreshMaterialUniforms(v2,F,e1,X,Z.state.transmissionRenderTarget[A.id]),A1.needsLights&&A1.lightProbeGrid){let l2=A1.lightProbeGrid;v2.probesSH.value=l2.texture,v2.probesMin.value.copy(l2.boundingBox.min),v2.probesMax.value.copy(l2.boundingBox.max),v2.probesResolution.value.copy(l2.resolution)}Y3.upload(E,It(A1),v2,$)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Y3.upload(E,It(A1),v2,$),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&V2.setValue(E,"center",k.center),V2.setValue(E,"modelViewMatrix",k.modelViewMatrix),V2.setValue(E,"normalMatrix",k.normalMatrix),V2.setValue(E,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let l2=F.uniformsGroups;for(let p0=0,s3=l2.length;p0<s3;p0++){let Dt=l2[p0];C1.update(Dt,d5),C1.bind(Dt,d5)}}return d5}function wV(A,w){A.ambientLightColor.needsUpdate=w,A.lightProbe.needsUpdate=w,A.sunLights.needsUpdate=w,A.sunLightShadows.needsUpdate=w,A.directionalLights.needsUpdate=w,A.directionalLightShadows.needsUpdate=w,A.pointLights.needsUpdate=w,A.pointLightShadows.needsUpdate=w,A.spotLights.needsUpdate=w,A.spotLightShadows.needsUpdate=w,A.rectAreaLights.needsUpdate=w,A.hemisphereLights.needsUpdate=w}function OV(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return r1},this.setRenderTargetTextures=function(A,w,z){let F=D.get(A);F.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=w,D.get(A.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,w){let z=D.get(A);z.__webglFramebuffer=w,z.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(A,w=0,z=0){r1=A,K=w,Q=z;let F=null,k=!1,p1=!1;if(A){let c1=D.get(A);if(c1.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(E.FRAMEBUFFER,c1.__webglFramebuffer),i1.copy(A.viewport),R1.copy(A.scissor),O1=A.scissorTest,p.viewport(i1),p.scissor(R1),p.setScissorTest(O1),q=-1;return}else if(c1.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(c1.__hasExternalTextures)$.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let U1=A.depthTexture;if(c1.__boundDepthTexture!==U1){if(U1!==null&&D.has(U1)&&(A.width!==U1.image.width||A.height!==U1.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}let v1=A.texture;(v1.isData3DTexture||v1.isDataArrayTexture||v1.isCompressedArrayTexture)&&(p1=!0);let Z1=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Z1[w])?F=Z1[w][z]:F=Z1[w],k=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?F=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Z1)?F=Z1[z]:F=Z1,i1.copy(A.viewport),R1.copy(A.scissor),O1=A.scissorTest}else i1.copy(m1).multiplyScalar(e1).floor(),R1.copy(G1).multiplyScalar(e1).floor(),O1=O2;if(z!==0&&(F=G),p.bindFramebuffer(E.FRAMEBUFFER,F)&&p.drawBuffers(A,F),p.viewport(i1),p.scissor(R1),p.setScissorTest(O1),k){let c1=D.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+w,c1.__webglTexture,z)}else if(p1){let c1=w;for(let v1=0;v1<A.textures.length;v1++){let Z1=D.get(A.textures[v1]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+v1,Z1.__webglTexture,z,c1)}}else if(A!==null&&z!==0){let c1=D.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,c1.__webglTexture,z)}q=-1};function kt(A){let w=D.get(A);return(w.__readFormat!==A.format||w.__readType!==A.type)&&(w.__readFormat=A.format,w.__readType=A.type,w.__formatReadable=S.textureFormatReadable(A.format),w.__typeReadable=S.textureTypeReadable(A.type)),w}this.readRenderTargetPixels=function(A,w,z,F,k,p1,h1,c1=0){if(!(A&&A.isWebGLRenderTarget)){I1("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let v1=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&h1!==void 0&&(v1=v1[h1]),v1){p.bindFramebuffer(E.FRAMEBUFFER,v1);try{let Z1=A.textures[c1],U1=Z1.format,q1=Z1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+c1);let S1=kt(Z1);if(S1.__formatReadable===!1){I1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(S1.__typeReadable===!1){I1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=A.width-F&&z>=0&&z<=A.height-k&&E.readPixels(w,z,F,k,M1.convert(U1),M1.convert(q1),p1)}finally{let Z1=r1!==null?D.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,Z1)}}},this.readRenderTargetPixelsAsync=async function(A,w,z,F,k,p1,h1,c1=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let v1=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&h1!==void 0&&(v1=v1[h1]),v1)if(w>=0&&w<=A.width-F&&z>=0&&z<=A.height-k){p.bindFramebuffer(E.FRAMEBUFFER,v1);let Z1=A.textures[c1],U1=Z1.format,q1=Z1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+c1);let S1=kt(Z1);if(S1.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(S1.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let i2=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,i2),E.bufferData(E.PIXEL_PACK_BUFFER,p1.byteLength,E.STREAM_READ),E.readPixels(w,z,F,k,M1.convert(U1),M1.convert(q1),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let b2=r1!==null?D.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,b2);let c2=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await ei(E,c2,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,i2),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,p1),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(i2),E.deleteSync(c2),p1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,w=null,z=0){let F=Math.pow(2,-z),k=Math.floor(A.image.width*F),p1=Math.floor(A.image.height*F),h1=w!==null?w.x:0,c1=w!==null?w.y:0;$.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,h1,c1,k,p1),p.unbindTexture()},this.copyTextureToTexture=function(A,w,z=null,F=null,k=0,p1=0){let h1,c1,v1,Z1,U1,q1,S1,i2,b2,c2=A.isCompressedTexture?A.mipmaps[p1]:A.image;if(z!==null)h1=z.max.x-z.min.x,c1=z.max.y-z.min.y,v1=z.isBox3?z.max.z-z.min.z:1,Z1=z.min.x,U1=z.min.y,q1=z.isBox3?z.min.z:0;else{let v2=Math.pow(2,-k);h1=Math.floor(c2.width*v2),c1=Math.floor(c2.height*v2),A.isDataArrayTexture?v1=c2.depth:A.isData3DTexture?v1=Math.floor(c2.depth*v2):v1=1,Z1=0,U1=0,q1=0}F!==null?(S1=F.x,i2=F.y,b2=F.z):(S1=0,i2=0,b2=0);let L2=M1.convert(w.format),U2=M1.convert(w.type),A1;w.isData3DTexture?($.setTexture3D(w,0),A1=E.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?($.setTexture2DArray(w,0),A1=E.TEXTURE_2D_ARRAY):($.setTexture2D(w,0),A1=E.TEXTURE_2D),p.activeTexture(E.TEXTURE0),p.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,w.flipY),p.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),p.pixelStorei(E.UNPACK_ALIGNMENT,w.unpackAlignment);let Y2=p.getParameter(E.UNPACK_ROW_LENGTH),J1=p.getParameter(E.UNPACK_IMAGE_HEIGHT),d5=p.getParameter(E.UNPACK_SKIP_PIXELS),R5=p.getParameter(E.UNPACK_SKIP_ROWS),d0=p.getParameter(E.UNPACK_SKIP_IMAGES);p.pixelStorei(E.UNPACK_ROW_LENGTH,c2.width),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,c2.height),p.pixelStorei(E.UNPACK_SKIP_PIXELS,Z1),p.pixelStorei(E.UNPACK_SKIP_ROWS,U1),p.pixelStorei(E.UNPACK_SKIP_IMAGES,q1);let o3=A.isDataArrayTexture||A.isData3DTexture,V2=w.isDataArrayTexture||w.isData3DTexture;if(A.isDepthTexture){let v2=D.get(A),c0=D.get(w),l2=D.get(v2.__renderTarget),p0=D.get(c0.__renderTarget);p.bindFramebuffer(E.READ_FRAMEBUFFER,l2.__webglFramebuffer),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,p0.__webglFramebuffer);for(let s3=0;s3<v1;s3++)o3&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,D.get(A).__webglTexture,k,q1+s3),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,D.get(w).__webglTexture,p1,b2+s3)),E.blitFramebuffer(Z1,U1,h1,c1,S1,i2,h1,c1,E.DEPTH_BUFFER_BIT,E.NEAREST);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||D.has(A)){let v2=D.get(A),c0=D.get(w);p.bindFramebuffer(E.READ_FRAMEBUFFER,P),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,U);for(let l2=0;l2<v1;l2++)o3?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v2.__webglTexture,k,q1+l2):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,v2.__webglTexture,k),V2?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,c0.__webglTexture,p1,b2+l2):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,c0.__webglTexture,p1),k!==0?E.blitFramebuffer(Z1,U1,h1,c1,S1,i2,h1,c1,E.COLOR_BUFFER_BIT,E.NEAREST):V2?E.copyTexSubImage3D(A1,p1,S1,i2,b2+l2,Z1,U1,h1,c1):E.copyTexSubImage2D(A1,p1,S1,i2,Z1,U1,h1,c1);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else V2?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(A1,p1,S1,i2,b2,h1,c1,v1,L2,U2,c2.data):w.isCompressedArrayTexture?E.compressedTexSubImage3D(A1,p1,S1,i2,b2,h1,c1,v1,L2,c2.data):E.texSubImage3D(A1,p1,S1,i2,b2,h1,c1,v1,L2,U2,c2):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,p1,S1,i2,h1,c1,L2,U2,c2.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,p1,S1,i2,c2.width,c2.height,L2,c2.data):E.texSubImage2D(E.TEXTURE_2D,p1,S1,i2,h1,c1,L2,U2,c2);p.pixelStorei(E.UNPACK_ROW_LENGTH,Y2),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,J1),p.pixelStorei(E.UNPACK_SKIP_PIXELS,d5),p.pixelStorei(E.UNPACK_SKIP_ROWS,R5),p.pixelStorei(E.UNPACK_SKIP_IMAGES,d0),p1===0&&w.generateMipmaps&&E.generateMipmap(A1),p.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),p.unbindTexture()},this.resetState=function(){K=0,Q=0,r1=null,p.reset(),u1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return g5}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y1._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y1._getUnpackColorSpace()}};var r4=new T;function m5(C,e,t,i,r,H){let V=2*Math.PI*r/4,n=Math.max(H-2*r,0),L=Math.PI/4;r4.copy(e),r4[i]=0,r4.normalize();let a=.5*V/(V+n),o=1-r4.angleTo(C)/L;return Math.sign(r4[t])===1?o*a:n/(V+n)+a+a*(1-o)}var Z6=class C extends Z0{constructor(e=1,t=1,i=1,r=2,H=.1){let V=r*2+1;if(H=Math.min(e/2,t/2,i/2,H),super(1,1,1,V,V,V),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:H},V===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let L=new T,a=new T,o=new T(e,t,i).divideScalar(2).subScalar(H),M=this.attributes.position.array,s=this.attributes.normal.array,l=this.attributes.uv.array,u=M.length/6,x=new T,c=.5/V;for(let d=0,v=0;d<M.length;d+=3,v+=2)switch(L.fromArray(M,d),a.copy(L),a.x-=Math.sign(a.x)*c,a.y-=Math.sign(a.y)*c,a.z-=Math.sign(a.z)*c,a.normalize(),M[d+0]=o.x*Math.sign(L.x)+a.x*H,M[d+1]=o.y*Math.sign(L.y)+a.y*H,M[d+2]=o.z*Math.sign(L.z)+a.z*H,s[d+0]=a.x,s[d+1]=a.y,s[d+2]=a.z,Math.floor(d/u)){case 0:x.set(1,0,0),l[v+0]=m5(x,a,"z","y",H,i),l[v+1]=1-m5(x,a,"y","z",H,t);break;case 1:x.set(-1,0,0),l[v+0]=1-m5(x,a,"z","y",H,i),l[v+1]=1-m5(x,a,"y","z",H,t);break;case 2:x.set(0,1,0),l[v+0]=1-m5(x,a,"x","z",H,e),l[v+1]=m5(x,a,"z","x",H,i);break;case 3:x.set(0,-1,0),l[v+0]=1-m5(x,a,"x","z",H,e),l[v+1]=1-m5(x,a,"z","x",H,i);break;case 4:x.set(0,0,1),l[v+0]=1-m5(x,a,"x","y",H,e),l[v+1]=1-m5(x,a,"y","x",H,t);break;case 5:x.set(0,0,-1),l[v+0]=m5(x,a,"x","y",H,e),l[v+1]=1-m5(x,a,"y","x",H,t);break}}static fromJSON(e){return new C(e.width,e.height,e.depth,e.segments,e.radius)}};var g2=["U","F","R","B","L","D"],j3={U:"#f2f2ee",D:"#ffd21f",F:"#11a85c",B:"#2563d9",R:"#e0303a",L:"#ff7a1a"},y6={U:[0,1,0],D:[0,-1,0],R:[1,0,0],L:[-1,0,0],F:[0,0,1],B:[0,0,-1]},Fi={U:[0,0,-1],D:[0,0,1],F:[0,1,0],B:[0,1,0],R:[0,1,0],L:[0,1,0]},qM=["x","y","z"],z5=Math.PI/2;function ki(C){let e=[Math.abs(C.x),Math.abs(C.y),Math.abs(C.z)],t=e.indexOf(Math.max(...e)),i=Math.sign([C.x,C.y,C.z][t]);return[["L","R"],["D","U"],["B","F"]][t][i>0?1:0]}var _6=C=>Math.round(C*2)/2;function XM(C,e,t){let i=(t-1)/2,r,H;switch(C){case"U":r=e.x,H=e.z;break;case"D":r=e.x,H=-e.z;break;case"F":r=e.x,H=-e.y;break;case"B":r=-e.x,H=-e.y;break;case"R":r=-e.z,H=-e.y;break;case"L":r=e.z,H=-e.y;break}return Math.round(H+i)*t+Math.round(r+i)}function YM(C,e){let t=C/2,i=e,r=new F3;r.moveTo(-t+i,-t),r.lineTo(t-i,-t),r.quadraticCurveTo(t,-t,t,-t+i),r.lineTo(t,t-i),r.quadraticCurveTo(t,t,t-i,t),r.lineTo(-t+i,t),r.quadraticCurveTo(-t,t,-t,t-i),r.lineTo(-t,-t+i),r.quadraticCurveTo(-t,-t,-t+i,-t);let H=new D7(r,6),V=H.attributes.position,n=H.attributes.uv;for(let L=0;L<V.count;L++)n.setXY(L,V.getX(L)/C+.5,V.getY(L)/C+.5);return H}function K3(C,e){let t=document.createElement("canvas");t.width=t.height=C,e(t.getContext("2d"),C);let i=new b7(t);return i.colorSpace=W2,i.anisotropy=4,i}function qe(C){let e=parseInt(C.slice(1),16);return(.299*(e>>16)+.587*(e>>8&255)+.114*(e&255))/255}function b6(C){return()=>{C|=0,C=C+1831565813|0;let e=Math.imul(C^C>>>15,1|C);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function J3(C,e){let t=parseInt(C.slice(1),16);return"#"+[t>>16,t>>8&255,t&255].map(r=>Math.round(e>0?r+(255-r)*e:r*(1+e))).map(r=>r.toString(16).padStart(2,"0")).join("")}function Di(C,e,t,i,r){for(let H=0;H<r;H++){let V=(H+t()*.8)*e/r,n=2+t()*5,L=t()*6.28,a=1+t()*2;C.beginPath();for(let o=0;o<=e;o+=8){let M=V+Math.sin(o/e*6.28*a+L)*n;o?C.lineTo(o,M):C.moveTo(o,M)}C.strokeStyle=i(t()),C.lineWidth=.8+t()*2.4,C.stroke()}}function Ni(C,e,t,i,r){for(let H=0;H<r;H++){let V=t()*e,n=t()*e,L=t()*6.28;C.beginPath(),C.moveTo(V,n);for(let a=0;a<40;a++)L+=(t()-.5)*.9,V+=Math.cos(L)*9,n+=Math.sin(L)*9,C.lineTo(V,n);C.strokeStyle=i(t()),C.lineWidth=.6+t()*2.2,C.stroke()}}function Ui(C,e,t,i,r,H){C.beginPath(),C.moveTo(e+H,t),C.arcTo(e+i,t,e+i,t+r,H),C.arcTo(e+i,t+r,e,t+r,H),C.arcTo(e,t+r,e,t,H),C.arcTo(e,t,e+i,t,H),C.closePath()}function QM(C,e,t,i,r){C.lineWidth=r,C.lineCap="round";for(let H=0;H<6;H++){let V=H*Math.PI/3,n=e+Math.cos(V)*i,L=t+Math.sin(V)*i;C.beginPath(),C.moveTo(e,t),C.lineTo(n,L);for(let a of[.5,.75]){let o=e+Math.cos(V)*i*a,M=t+Math.sin(V)*i*a,s=i*.28;C.moveTo(o,M),C.lineTo(o+Math.cos(V+.8)*s,M+Math.sin(V+.8)*s),C.moveTo(o,M),C.lineTo(o+Math.cos(V-.8)*s,M+Math.sin(V-.8)*s)}C.stroke()}}var H4={classic:{body:{color:1316380,rough:.55,metal:.1},st:null,rough:.38,metal:0},wood:{body:{color:16777215,rough:.75,metal:0,tex:(C,e)=>{let t=b6(7);C.fillStyle="#9a6233",C.fillRect(0,0,e,e),Di(C,e,t,i=>`rgba(${70+i*40},${35+i*20},10,${.25+i*.35})`,34)}},st:(C,e,t,i)=>{C.fillStyle=J3(t,-.06),C.fillRect(0,0,e,e),Di(C,e,i,r=>`rgba(60,30,10,${.06+r*.1})`,22)},rough:.7,metal:0},newyear:{body:{color:16777215,rough:.5,metal:.15,tex:(C,e)=>{C.fillStyle="#0d4a2f",C.fillRect(0,0,e,e);let t=b6(3);for(let i=0;i<40;i++)C.fillStyle=`rgba(255,215,90,${.25+t()*.5})`,C.beginPath(),C.arc(t()*e,t()*e,1+t()*2.2,0,6.3),C.fill()}},st:(C,e,t,i)=>{let r=C.createLinearGradient(0,0,e,e);r.addColorStop(0,J3(t,.12)),r.addColorStop(1,J3(t,-.08)),C.fillStyle=r,C.fillRect(0,0,e,e);let H=qe(t)>.6;C.strokeStyle=H?"rgba(30,60,120,0.32)":"rgba(255,255,255,0.55)",QM(C,e*(.3+i()*.4),e*(.3+i()*.4),e*.24,e*.028),C.fillStyle=H?"rgba(30,60,120,0.25)":"rgba(255,255,255,0.45)";for(let V=0;V<7;V++)C.beginPath(),C.arc(i()*e,i()*e,e*(.008+i()*.014),0,6.3),C.fill()},rough:.32,metal:0},marble:{body:{color:16777215,rough:.25,metal:.05,tex:(C,e)=>{let t=b6(11);C.fillStyle="#17181d",C.fillRect(0,0,e,e),Ni(C,e,t,i=>i>.7?`rgba(214,178,90,${.35+i*.3})`:`rgba(235,235,240,${.12+i*.25})`,9)}},st:(C,e,t,i)=>{C.fillStyle=t,C.fillRect(0,0,e,e),Ni(C,e,i,r=>qe(t)>.6?`rgba(90,90,100,${.12+r*.2})`:`rgba(255,255,255,${.12+r*.22})`,4)},rough:.18,metal:0},neon:{body:{color:460812,rough:.3,metal:.4},st:(C,e,t)=>{C.fillStyle=J3(t,-.82),C.fillRect(0,0,e,e);let i=(r,H)=>{C.strokeStyle=t,C.globalAlpha=H,C.lineWidth=r,Ui(C,e*.14,e*.14,e*.72,e*.72,e*.12),C.stroke()};i(e*.2,.18),i(e*.11,.35),i(e*.045,1),C.globalAlpha=1},glow:1.1,rough:.3,metal:0},gold:{body:{color:14263854,rough:.3,metal:.55},st:(C,e,t)=>{let i=C.createLinearGradient(0,0,e*.6,e);i.addColorStop(0,J3(t,.12)),i.addColorStop(.5,t),i.addColorStop(1,J3(t,-.18)),C.fillStyle=i,C.fillRect(0,0,e,e),C.strokeStyle="rgba(255,225,140,0.9)",C.lineWidth=e*.035,Ui(C,e*.05,e*.05,e*.9,e*.9,e*.12),C.stroke()},rough:.42,metal:0}},_u=Object.keys(H4),T6=class{constructor(e){this.el=e,this.renderer=new v6({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=W2,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new v7,this.camera=new $2(30,1,.1,100),this.camera.position.set(0,0,15),this.scene.add(new G7(16777215,1.6));let t=new U3(16777215,1.9);t.position.set(4,7,9),this.scene.add(t);let i=new U3(16777215,.5);i.position.set(-6,-3,4),this.scene.add(i),this.root=new Z5,this.scene.add(this.root),this.baseView=new S2().setFromEuler(new u5(.5,-.65,0,"XYZ")),this.root.quaternion.copy(this.baseView),this.raycaster=new W7,this.tweens=[],this.queue=[],this.turning=!1,this.dirty=!0,this.autoSpin=!1,this.mode="view",this.allowOrbitInView=!0,this.onTap=null,this.onSwipe=null,this.labelCache=new Map,this.labelFn=null,this.n=3,this.skinId="classic",this.skinTex=new Map,this._buildTextures(),this._build(),this._bindInput(),this.fill=.78,new ResizeObserver(()=>this.resize()).observe(e),this.resize();let r=H=>{this._frame(H),requestAnimationFrame(r)};requestAnimationFrame(r)}_buildTextures(){this.texQ=K3(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.fillStyle="#9aa3b5",e.font='700 74px -apple-system, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("?",t/2,t/2+4)}),this.texX=K3(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.38)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(40,40),e.lineTo(88,88),e.moveTo(88,40),e.lineTo(40,88),e.stroke()}),this.texSkip=K3(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.42)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(38,64),e.lineTo(90,64),e.stroke()})}setSize(e){if(e=e===2?2:3,e!==this.n){this.tweens=[],this.queue=[],this.turning=!1;for(let t of[...this.root.children])this.root.remove(t);this.n=e,this._build(),this.resize()}}_build(){let e=this.n,t=(e-1)/2,i=[];for(let L=0;L<e;L++)i.push(L-t);let r=new Z6(.97,.97,.97,3,.12),H=H4[this.skinId],V=this.bodyMat=new D3;this._bodyLook(H);let n=YM(.84,.13);this.cubies=[],this.stickers=[];for(let L of i)for(let a of i)for(let o of i){if(Math.max(Math.abs(L),Math.abs(a),Math.abs(o))<t)continue;let M=new Z5;M.position.set(L,a,o),M.userData.home=new T(L,a,o),M.add(new e5(r,V));for(let s of g2){let l=y6[s];if(!(l[0]&&l[0]*t===L||l[1]&&l[1]*t===a||l[2]&&l[2]*t===o))continue;let u=new D3({color:j3[s],roughness:H.rough,metalness:H.metal}),x=new e5(n,u),c=new T(...l),d=new T(...Fi[s]),v=new T().crossVectors(d,c);x.quaternion.setFromRotationMatrix(new n2().makeBasis(v,d,c)),x.position.copy(c).multiplyScalar(.487),x.userData={color:s,center:e===3&&Math.abs(L)+Math.abs(a)+Math.abs(o)===1},M.add(x),this.stickers.push(x),this.setLook(x,"color")}this.root.add(M),this.cubies.push(M)}}resize(){let e=this.el.clientWidth||1,t=this.el.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t;let i=2.62*this.n/3,r=fe.degToRad(this.camera.fov)/2,H=Math.atan(Math.tan(r)*this.camera.aspect),V=Math.min(r,H);this.camera.position.z=i/Math.sin(V*this.fill),this.camera.updateProjectionMatrix(),this.dirty=!0}reset(){this.tweens=[],this.queue=[],this.turning=!1;for(let e of this.cubies)e.parent!==this.root&&this.root.attach(e);for(let e of[...this.root.children])this.cubies.includes(e)||this.root.remove(e);for(let e of this.cubies)e.position.copy(e.userData.home),e.quaternion.identity();for(let e of this.stickers)e.scale.set(1,1,1);this.dirty=!0}info(e){let t=e.getWorldQuaternion(new S2),i=this.root.getWorldQuaternion(new S2).invert(),r=new T(0,0,1).applyQuaternion(t).applyQuaternion(i),H=ki(r),V=e.parent,n=XM(H,V.position,this.n);return{sticker:e,face:H,idx:n,key:H+n,color:e.userData.color,cubie:V}}cells(){return this.stickers.map(e=>this.info(e))}isSolved(){let e={};for(let t of this.stickers){let{face:i,color:r}=this.info(t);if(e[i]&&e[i]!==r)return!1;e[i]=r}return!0}setSkin(e){if(H4[e]||(e="classic"),e===this.skinId)return;this.skinId=e;let t=H4[e];this._bodyLook(t);for(let i of this.stickers)i.material.roughness=t.rough,i.material.metalness=t.metal,this.setLook(i,i.userData.look||"color",i.userData.label);this.dirty=!0}_bodyLook(e){let t=this.bodyMat,i=e.body;t.color.setHex(i.color),t.roughness=i.rough,t.metalness=i.metal;let r=i.tex?this._skinTex("body|"+this.skinId,(H,V)=>i.tex(H,V)):null;t.map!==r&&(t.map=r,t.needsUpdate=!0)}_skinTex(e,t){return this.skinTex.has(e)||this.skinTex.set(e,K3(256,t)),this.skinTex.get(e)}setLook(e,t,i){let r=e.material;e.userData.look=t,e.userData.label=i;let H=new D1(j3[e.userData.color]),V=H4[this.skinId],n=null,L=H,a=!1;if(i)n=i,L=new D1(16777215);else if(t==="color"&&V.st){let M=e.userData.color,s=this.stickers.indexOf(e)%5;n=this._skinTex(`st|${this.skinId}|${M}|${s}`,(l,u)=>V.st(l,u,j3[M],b6(s*31+M.charCodeAt(0)))),L=new D1(16777215),a=!!V.glow}else t==="hidden"?(n=this._texQ(this._rotOf(e)),L=new D1("#5d6679")):t==="locked"?(n=null,L=new D1("#2b303b")):t==="wrong"?(n=this.texX,L=H.clone().multiplyScalar(.55)):t==="skip"&&(n=this.texSkip,L=new D1("#5d6679"));let o=a?n:null;(r.map!==n||r.emissiveMap!==o)&&(r.map=n,r.emissiveMap=o,r.needsUpdate=!0),a?(r.emissive.setRGB(1,1,1),r.emissiveIntensity=V.glow*.55):r.emissive.setRGB(0,0,0),r.color.copy(L),i&&t==="locked"&&r.color.setScalar(.45),this.dirty=!0}_rotOf(e){let t=e.getWorldQuaternion(new S2),i=this.root.getWorldQuaternion(new S2).invert(),r=new T(0,1,0).applyQuaternion(t).applyQuaternion(i),H=new T(0,0,1).applyQuaternion(t).applyQuaternion(i),V=ki(H),n=new T(...Fi[V]),L=Math.atan2(new T().crossVectors(n,r).dot(new T(...y6[V])),n.dot(r));return(Math.round(L/z5)%4+4)%4}_texQ(e){if(this.qTexs=this.qTexs||[],!this.qTexs[e]){let t=this.texQ.clone();t.center.set(.5,.5),t.rotation=-e*z5,t.needsUpdate=!0,this.qTexs[e]=t}return this.qTexs[e]}hiddenLabel(e,t=0){let i="h|"+e+"|"+t;if(this.labelCache.has(i))return this.labelCache.get(i);let r=K3(256,(H,V)=>{H.fillStyle="#5d6679",H.fillRect(0,0,V,V);let n=new Path2D(e);H.save(),H.translate(V*.22,V*.22),H.scale(V*.56/24,V*.56/24),H.fillStyle="rgba(255,255,255,0.62)",H.fill(n),H.restore()});return t&&(r.center.set(.5,.5),r.rotation=-t*z5,r.needsUpdate=!0),this.labelCache.set(i,r),r}centerLabel(e,t,i,r=0){let H=e+"|"+(t||"")+"|"+(i||"");if(r){let a=H+"|"+r;if(!this.labelCache.has(a)){let o=this.centerLabel(e,t,i,0).clone();o.center.set(.5,.5),o.rotation=-r*z5,o.needsUpdate=!0,this.labelCache.set(a,o)}return this.labelCache.get(a)}if(this.labelCache.has(H))return this.labelCache.get(H);let V=j3[e],n=qe(V)>.6?"#1d2230":"#ffffff",L=K3(256,(a,o)=>{if(a.fillStyle=V,a.fillRect(0,0,o,o),t){let M=new Path2D(t);a.save(),a.translate(o*.18,o*.18),a.scale(o*.64/24,o*.64/24),a.fillStyle=n,a.fill(M),a.restore()}i&&(a.beginPath(),a.arc(o*.8,o*.2,o*.15,0,Math.PI*2),a.fillStyle=i==="ok"?"#0f8a4a":"#c62a33",a.fill(),a.lineWidth=o*.025,a.strokeStyle="#ffffff",a.stroke(),a.strokeStyle="#ffffff",a.lineWidth=o*.04,a.lineCap="round",a.lineJoin="round",a.beginPath(),i==="ok"?(a.moveTo(o*.73,o*.2),a.lineTo(o*.785,o*.255),a.lineTo(o*.875,o*.15)):(a.moveTo(o*.75,o*.15),a.lineTo(o*.85,o*.25),a.moveTo(o*.85,o*.15),a.lineTo(o*.75,o*.25)),a.stroke())});return this.labelCache.set(H,L),L}pop(e){this.tween(260,t=>{let i=1+Math.sin(t*Math.PI)*.18;e.scale.set(i,i,1)})}turn(e,t=!0,i=190){return new Promise(r=>{this.queue.push({move:e,animate:t,dur:i,resolve:r}),this.turning||this._next()})}get busy(){return this.turning||this.queue.length>0}_next(){let e=this.queue.shift();if(!e){this.turning=!1;return}this.turning=!0;let{ax:t,l:i,d:r}=e.move,H=new Z5;this.root.add(H);let V=this.cubies.filter(L=>Math.abs(L.position[t]-i)<.25);for(let L of V)H.attach(L);let n=()=>{H.rotation[t]=r*z5,H.updateMatrixWorld(!0);for(let L of V){this.root.attach(L),L.position.set(_6(L.position.x),_6(L.position.y),_6(L.position.z));let a=new n2().makeRotationFromQuaternion(L.quaternion),o=a.elements;for(let M=0;M<16;M++)o[M]=Math.round(o[M]);L.quaternion.setFromRotationMatrix(a)}this.root.remove(H),this.dirty=!0,e.resolve(),this._next()};if(!e.animate){n();return}this.tween(e.dur,L=>{H.rotation[t]=r*z5*(1-Math.pow(1-L,3))},n)}viewFor(e){let t=new S2,i=(r,H)=>t.setFromEuler(new u5(r,H,0,"XYZ"));switch(e){case"U":i(z5,0);break;case"D":i(-z5,0);break;case"R":i(0,-z5);break;case"L":i(0,z5);break;case"B":i(0,Math.PI);break;default:t.identity()}return this.baseView.clone().multiply(t)}showFace(e,t=450){this.rotateTo(this.viewFor(e),t)}rotateTo(e,t=450){let i=this.root.quaternion.clone();this.tween(t,r=>{let H=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;this.root.quaternion.slerpQuaternions(i,e,H)})}spin(e=1300){let t=this.root.quaternion.clone();this.tween(e,i=>{let r=1-Math.pow(1-i,3),H=new S2().setFromAxisAngle(new T(0,1,0),r*Math.PI*2);this.root.quaternion.copy(H.multiply(t))})}tween(e,t,i){this.tweens.push({t0:performance.now(),dur:e,fn:t,done:i}),this.dirty=!0}_frame(e){if(this.tweens.length){let t=this.tweens;this.tweens=[];let i=[];for(let r of t){let H=Math.min(1,(e-r.t0)/r.dur);r.fn(H),H<1?i.push(r):r.done&&r.done()}this.tweens=i.concat(this.tweens),this.dirty=!0}if(this.autoSpin&&!this.drag){let t=new S2().setFromAxisAngle(new T(0,1,0),.004);this.root.quaternion.premultiply(t),this.dirty=!0}this.dirty&&(this.dirty=!1,this.renderer.render(this.scene,this.camera))}_pick(e){let t=this.canvas.getBoundingClientRect(),i=new f1((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);this.raycaster.setFromCamera(i,this.camera);let r=this.raycaster.intersectObjects(this.stickers,!1)[0];return r?r.object:null}_screen(e){let t=this.root.localToWorld(e.clone()).project(this.camera),i=this.canvas.getBoundingClientRect();return new f1((t.x+1)/2*i.width,(1-t.y)/2*i.height)}moveFromSwipe(e,t){let i=this.info(e),r=new T(...y6[i.face]),H=i.cubie.position.clone().add(r.clone().multiplyScalar(.5)),V=this._screen(H),n=null;for(let l=0;l<3;l++){if(Math.abs([r.x,r.y,r.z][l])>.5)continue;let u=new T;u.setComponent(l,1);let x=this._screen(H.clone().add(u.clone().multiplyScalar(.5))).sub(V);if(x.length()<.001)continue;let c=x.normalize().dot(t);(!n||Math.abs(c)>Math.abs(n.dot))&&(n={a:u,dot:c})}if(!n||Math.abs(n.dot)<.35)return null;let L=n.a.clone().multiplyScalar(Math.sign(n.dot)),a=new T().crossVectors(r,L),o=[a.x,a.y,a.z],M=o.findIndex(l=>Math.abs(l)>.5),s=qM[M];return{ax:s,l:_6(i.cubie.position[s]),d:Math.sign(o[M])}}guide(e){if(!e)return null;this.root.updateMatrixWorld(!0);let t=new T;t[e.ax]=1;let i=t.clone().multiplyScalar(e.d),r=this.camera.position,H=null;for(let a of this.stickers){let o=this.info(a),M=o.cubie.position;if(Math.abs(M[e.ax]-e.l)>.25)continue;let s=new T(...y6[o.face]);if(Math.abs(s.dot(t))>.5)continue;let l=M.clone().add(s.clone().multiplyScalar(.5)),u=this.root.localToWorld(l.clone()),c=s.clone().applyQuaternion(this.root.quaternion).dot(r.clone().sub(u).normalize());if(c<.28)continue;let d=new T().crossVectors(i,s),v=this._screen(l),_=this._screen(l.clone().add(d.clone().multiplyScalar(.5))).sub(v),f=_.length();if(f<4)continue;let g=_.clone().normalize(),Z=this.moveFromSwipe(a,g);if(!Z||Z.ax!==e.ax||Math.abs(Z.l-e.l)>.25||Z.d!==e.d)continue;let b=Math.abs(M.dot(d)),m=c*f-b*f*.12;(!H||m>H.score)&&(H={score:m,s0:v,dir:g,cell:f*2,sticker:a})}if(!H)return null;let{s0:V,dir:n,cell:L}=H;return{x0:V.x-n.x*L*.25,y0:V.y-n.y*L*.25,x1:V.x+n.x*L*1.6,y1:V.y+n.y*L*1.6,cell:L,sticker:H.sticker}}_bindInput(){let e=this.canvas;e.addEventListener("pointerdown",i=>{this.drag||(e.setPointerCapture(i.pointerId),this.drag={id:i.pointerId,x:i.clientX,y:i.clientY,lx:i.clientX,ly:i.clientY,s:this._pick(i),mode:null})}),e.addEventListener("pointermove",i=>{let r=this.drag;if(!r||r.id!==i.pointerId)return;let H=i.clientX-r.x,V=i.clientY-r.y;if(!r.mode){if(Math.hypot(H,V)<10)return;if(this.mode==="solve"&&r.s){r.mode="done";let n=this.moveFromSwipe(r.s,new f1(H,V).normalize());n&&this.onSwipe&&this.onSwipe(n);return}r.mode=this.mode==="view"&&!this.allowOrbitInView?"none":"orbit"}if(r.mode==="orbit"){let n=i.clientX-r.lx,L=i.clientY-r.ly,a=.0105,o=new S2().setFromAxisAngle(new T(0,1,0),n*a),M=new S2().setFromAxisAngle(new T(1,0,0),L*a);this.root.quaternion.premultiply(o).premultiply(M),this.dirty=!0}r.lx=i.clientX,r.ly=i.clientY});let t=i=>{let r=this.drag;!r||r.id!==i.pointerId||(this.drag=null,!r.mode&&i.type==="pointerup"&&r.s&&this.mode==="tap"&&this.onTap&&this.onTap(this.info(r.s)))};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}};var Xe="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z";var zi="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z";var Gi="M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z";var w6="M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z";var Wi="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z";var $i="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z";var qi="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z";var Xi="M9,12C9,11.19 9.3,10.5 9.89,9.89C10.5,9.3 11.19,9 12,9C12.81,9 13.5,9.3 14.11,9.89C14.7,10.5 15,11.19 15,12C15,12.81 14.7,13.5 14.11,14.11C13.5,14.7 12.81,15 12,15C11.19,15 10.5,14.7 9.89,14.11C9.3,13.5 9,12.81 9,12M5.53,8.44L7.31,10.22L5.53,12L7.31,13.78L5.53,15.56L2,12L5.53,8.44M8.44,18.47L10.22,16.69L12,18.47L13.78,16.69L15.56,18.47L12,22L8.44,18.47M18.47,15.56L16.69,13.78L18.47,12L16.69,10.22L18.47,8.44L22,12L18.47,15.56M15.56,5.53L13.78,7.31L12,5.53L10.22,7.31L8.44,5.53L12,2L15.56,5.53Z";var Yi="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z";var Qi="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",Ki="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z";var Ji="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z";var ji="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z";var er="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";var tr="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z";var Cr="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var ir="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.68 7.35 7.38 5.73 9.07 4.1 11 4.1 11.83 4.1 12.41 4.69 13 5.28 13 6.1V12.15L14.6 10.6L16 12L12 16L8 12L9.4 10.6L11 12.15V6.1Q9.1 6.45 8.05 7.94 7 9.43 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 9.8 16.45 8.76 15.9 7.73 15 7V4.68Q16.85 5.55 17.93 7.26 19 9 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M12 11.05Z";var rr="M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z";var Hr="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M11 13H7V8.8L8.3 6H10.3L8.9 9H11V13M17 13H13V8.8L14.3 6H16.3L14.9 9H17V13Z";var Vr="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z";var nr="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z";var Lr="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z";var ar="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z";var or="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var sr="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var Mr="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";var O6="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z";var lr="M14.66 14.18C14.69 14.29 14.7 14.4 14.7 14.5C14.73 15.15 14.44 15.85 13.97 16.28C13.75 16.47 13.39 16.67 13.11 16.75C12.23 17.06 11.35 16.62 10.83 16.11C11.77 15.89 12.32 15.21 12.5 14.5C12.62 13.89 12.37 13.38 12.27 12.78C12.17 12.2 12.19 11.71 12.4 11.18C12.55 11.47 12.71 11.77 12.9 12C13.5 12.78 14.45 13.12 14.66 14.18M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12 6.5 2 12 2 22 6.5 22 12M17.16 12.56L17.06 12.36C16.9 12 16.45 11.38 16.45 11.38C16.27 11.15 16.05 10.94 15.85 10.74C15.32 10.27 14.73 9.94 14.22 9.45C13.05 8.31 12.79 6.44 13.54 5C12.79 5.18 12.14 5.58 11.58 6.03C9.55 7.65 8.75 10.5 9.71 12.95C9.74 13.03 9.77 13.11 9.77 13.21C9.77 13.38 9.65 13.53 9.5 13.6C9.31 13.67 9.13 13.63 9 13.5C8.93 13.46 8.9 13.42 8.87 13.37C8 12.26 7.84 10.66 8.43 9.39C7.12 10.45 6.41 12.24 6.5 13.92C6.56 14.31 6.6 14.7 6.74 15.09C6.85 15.56 7.06 16 7.3 16.44C8.14 17.78 9.61 18.75 11.19 18.94C12.87 19.15 14.67 18.85 15.96 17.7C17.4 16.4 17.9 14.33 17.16 12.56Z";var dr="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z";var cr="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4";var E6="M7,2V13H10V22L17,10H13L17,2H7Z";var pr="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z";var R6="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z";var ur="M13 24C9.74 24 6.81 22 5.6 19L2.57 11.37C2.26 10.58 3 9.79 3.81 10.05L4.6 10.31C5.16 10.5 5.62 10.92 5.84 11.47L7.25 15H8V3.25C8 2.56 8.56 2 9.25 2S10.5 2.56 10.5 3.25V12H11.5V1.25C11.5 .56 12.06 0 12.75 0S14 .56 14 1.25V12H15V2.75C15 2.06 15.56 1.5 16.25 1.5C16.94 1.5 17.5 2.06 17.5 2.75V12H18.5V5.75C18.5 5.06 19.06 4.5 19.75 4.5S21 5.06 21 5.75V16C21 20.42 17.42 24 13 24Z";var Ar="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z";var mr="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22";var hr="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z";var fr="M12,2C9.76,2 7.78,3.05 6.5,4.68L7.93,6.11C8.84,4.84 10.32,4 12,4A5,5 0 0,1 17,9C17,10.68 16.16,12.16 14.89,13.06L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M7.23,10.5L12.73,16H10V13.58C8.68,13 7.66,11.88 7.23,10.5M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z",xr="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var vr="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z";var Sr="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z";var gr="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z";var Zr="M11,3H13V10.27L19.29,6.64L20.29,8.37L14,12L20.3,15.64L19.3,17.37L13,13.72V21H11V13.73L4.69,17.36L3.69,15.63L10,12L3.72,8.36L4.72,6.63L11,10.26V3Z";var yr="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z";var _r="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z";var br="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z";var Ye="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var Tr="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var wr="M19.83 7.5L17.56 5.23C17.63 4.81 17.74 4.42 17.88 4.08C17.96 3.9 18 3.71 18 3.5C18 2.67 17.33 2 16.5 2C14.86 2 13.41 2.79 12.5 4H7.5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10V19H12V21H17.5L19.18 15.41L22 14.47V7.5H19.83M13 9H8V7H13V9M16 11C15.45 11 15 10.55 15 10S15.45 9 16 9C16.55 9 17 9.45 17 10S16.55 11 16 11Z";var Or="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z";var Er="M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z";var Rr="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var Pr="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z";var Br="M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z";var Ir="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z";var Fr="M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z";var kr="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";var Dr="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z";var Nr="M16,18H18V6H16M6,18L14.5,12L6,6V18Z";var Ur="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z";var zr="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";var Gr="M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var Wr="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";var P6="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z";var $r="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12";var qr="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z";var Xr="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z";var Yr="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z",Qr="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z";var Kr="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z",Jr="M15.2 10.7L16.6 16L12 12.2L7.4 16L8.8 10.8L4.6 7.3L10 7L12 2L14 7L19.4 7.3L15.2 10.7M14 19H13V16L12 15L11 16V19H10C8.9 19 8 19.9 8 21V22H16V21C16 19.9 15.11 19 14 19Z";var jr="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z";var eH="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var tH="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var V4=[{id:"history",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",icon:Or},{id:"geography",name:"\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F",icon:sr},{id:"literature",name:"\u041B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",icon:Wi},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430",icon:yr},{id:"science",name:"\u041D\u0430\u0443\u043A\u0430",icon:Gi},{id:"painting",name:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C",icon:Ye},{id:"people",name:"\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",icon:zi},{id:"cinema",name:"\u041A\u0438\u043D\u043E",icon:gr},{id:"journalism",name:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438\u043A\u0430",icon:_r},{id:"logic",name:"\u041B\u043E\u0433\u0438\u043A\u0430 \u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0438",icon:Pr},{id:"sport",name:"\u0421\u043F\u043E\u0440\u0442",icon:Ur},{id:"cooking",name:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F",icon:ji},{id:"architecture",name:"\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",icon:br},{id:"quotes",name:"\u041A\u0438\u043D\u043E\u0446\u0438\u0442\u0430\u0442\u044B \u0438 \u043A\u0430\u0434\u0440\u044B",icon:Hr},{id:"cartoons",name:"\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",icon:$r},{id:"games",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",icon:pr},{id:"belarus",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438",icon:Yi},{id:"etymology",name:"\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432",icon:Xr},{id:"inventions",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0439",icon:rr},{id:"computers",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B",icon:hr},{id:"my",name:"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",icon:Xe}],CH=Fr,u2=Object.fromEntries(V4.map(C=>[C.id,C])),y1={hint:xr,undo:jr,view:Xi,soundOn:eH,soundOff:tH,star:zr,starOff:Wr,help:Ar,close:Cr,check:Qi,turn:Br,home:mr,shuffle:Dr,flag:dr,trophy:Kr,back:er,plus:Rr,del:or,save:Yr,load:Qr,edit:Tr,my:Xe,timer:qr,update:ir,report:cr,share:kr,half:tr,skip:Nr,duel:P6,paste:Vr,lock:vr,palette:Ye,bomb:w6,gift:R6,flash:E6,fire:O6,x2:Zr},_1=(C,e="ic")=>`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${C}"/></svg>`;var i0=null,P0={on:!0};function n4(){if(!i0){let C=window.AudioContext||window.webkitAudioContext;if(!C)return;i0=new C}i0.state==="suspended"&&i0.resume()}function C0(C,e,t,i="sine",r=.18,H){let V=i0.currentTime+e,n=i0.createOscillator(),L=i0.createGain();n.type=i,n.frequency.setValueAtTime(C,V),H&&n.frequency.exponentialRampToValueAtTime(H,V+t),L.gain.setValueAtTime(1e-4,V),L.gain.exponentialRampToValueAtTime(r,V+.012),L.gain.exponentialRampToValueAtTime(1e-4,V+t),n.connect(L).connect(i0.destination),n.start(V),n.stop(V+t+.02)}function a2(C){if(!(!P0.on||!i0))switch(C){case"ok":C0(660,0,.14),C0(990,.1,.22);break;case"bad":C0(220,0,.28,"triangle",.2,150);break;case"turn":C0(340,0,.06,"triangle",.12,260);break;case"tap":C0(520,0,.05,"sine",.08);break;case"tick":C0(1200,0,.04,"square",.04);break;case"deny":C0(180,0,.12,"square",.05);break;case"win":[523,659,784,1047].forEach((e,t)=>C0(e,t*.11,.3,"sine",.16));break;case"stage":[784,1047].forEach((e,t)=>C0(e,t*.09,.18,"sine",.12));break}}var L4=[{id:"classic",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430",stars:0,about:"\u0447\u0451\u0440\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0433\u043B\u0430\u0434\u043A\u0438\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",pv:["#14161c","#e0303a"]},{id:"wood",name:"\u0414\u0435\u0440\u0435\u0432\u043E",stars:3,about:"\u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u043A\u0440\u0430\u0448\u0435\u043D\u044B\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",pv:["#9a6233","#11a85c"]},{id:"newyear",name:"\u041D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0438\u0439",stars:6,about:"\u0451\u043B\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0438 \u0438 \u0441\u043D\u0435\u0433 \u043D\u0430 \u0444\u043E\u043D\u0435",pv:["#0d4a2f","#e0303a"]},{id:"marble",name:"\u041C\u0440\u0430\u043C\u043E\u0440",stars:12,about:"\u0447\u0451\u0440\u043D\u044B\u0439 \u043C\u0440\u0430\u043C\u043E\u0440 \u0441 \u0437\u043E\u043B\u043E\u0442\u044B\u043C\u0438 \u043F\u0440\u043E\u0436\u0438\u043B\u043A\u0430\u043C\u0438",pv:["#17181d","#2563d9"]},{id:"neon",name:"\u041D\u0435\u043E\u043D",stars:20,about:"\u0441\u0432\u0435\u0442\u044F\u0449\u0438\u0435\u0441\u044F \u043A\u043E\u043D\u0442\u0443\u0440\u044B \u0432 \u0442\u0435\u043C\u043D\u043E\u0442\u0435",pv:["#07080c","#ff7a1a"]},{id:"gold",name:"\u0417\u043E\u043B\u043E\u0442\u043E",stars:30,about:"\u0437\u043E\u043B\u043E\u0442\u043E\u0439 \u043A\u043E\u0440\u043F\u0443\u0441, \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u0435 \u043D\u0430\u043A\u043B\u0435\u0439\u043A\u0438",pv:["#d9a62e","#ffd21f"]}],e3=Object.fromEntries(L4.map(C=>[C.id,C])),B0=C=>C.ach.t,r0=[{id:"first",name:"\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A",icon:ar},{id:"cleanface",name:"\u0427\u0438\u0441\u0442\u0430\u044F \u0433\u0440\u0430\u043D\u044C",about:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0432\u0435\u0440\u043D\u043E \u043D\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0434\u043D\u043E\u0439 \u0433\u0440\u0430\u043D\u0438",icon:Ji},{id:"perfect",name:"\u0411\u0435\u0437 \u0435\u0434\u0438\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438",about:"\u041F\u0440\u043E\u0439\u0442\u0438 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u043E\u0432",icon:Ki},{id:"three",name:"\u0422\u0440\u0438 \u0437\u0432\u0435\u0437\u0434\u044B",about:"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0442\u0440\u0438 \u0437\u0432\u0435\u0437\u0434\u044B \u0437\u0430 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",icon:Gr},{id:"expert",name:"\u0417\u043D\u0430\u0442\u043E\u043A",about:"\u0422\u0440\u0438 \u0437\u0432\u0435\u0437\u0434\u044B \u043D\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435",icon:Ir},{id:"triple",name:"\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u0430\u0440\u0442\u0438\u044F",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u043D\u0430 \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445 \u0443\u0440\u043E\u0432\u043D\u044F\u0445 \u043E\u0434\u043D\u043E\u0439 \u0438\u0433\u0440\u044B",icon:Jr},{id:"nohints",name:"\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A, \u043D\u0435 \u0432\u0437\u044F\u0432 \u043D\u0438 \u043E\u0434\u043D\u043E\u0439 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435",icon:fr},{id:"master",name:"\u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u0443\u0431\u0438\u043A\u0430",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A 3\xD73 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A",icon:Lr},{id:"self",name:"\u0421\u0432\u043E\u0438\u043C\u0438 \u0440\u0443\u043A\u0430\u043C\u0438",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C",icon:ur},{id:"saver",name:"\u0411\u0435\u0440\u0435\u0436\u043B\u0438\u0432\u044B\u0439",about:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C 10 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 (\u043D\u0430 2\xD72 \u2014 5)",icon:wr},{id:"streak10",name:"\u0414\u0435\u0441\u044F\u0442\u044C \u043F\u043E\u0434\u0440\u044F\u0434",about:"10 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434",icon:O6,prog:C=>[B0(C).bestRun,10]},{id:"streak25",name:"\u0414\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u044F\u0442\u044C \u043F\u043E\u0434\u0440\u044F\u0434",about:"25 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434",icon:lr,prog:C=>[B0(C).bestRun,25]},{id:"blitz",name:"\u0411\u043B\u0438\u0446",about:"\u0412\u0435\u0440\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 10 \u0441\u0435\u043A\u0443\u043D\u0434",icon:E6},{id:"eye",name:"\u0417\u043E\u0440\u043A\u0438\u0439 \u0433\u043B\u0430\u0437",about:"20 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0441 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\u043C\u0438",icon:Mr,prog:C=>[B0(C).pics,20]},{id:"wide",name:"\u042D\u0440\u0443\u0434\u0438\u0442",about:"\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0432\u0435\u0440\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B \u043D\u0430 5 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 10 \u0440\u0430\u0437\u043D\u044B\u0445 \u0442\u0435\u043C\u0430\u0445",icon:$i,prog:C=>[KM(C),10]},{id:"ans100",name:"\u0421\u043E\u0442\u043D\u044F",about:"100 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",icon:nr,prog:C=>[B0(C).ok,100]},{id:"ans1000",name:"\u0422\u044B\u0441\u044F\u0447\u0430",about:"1000 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",icon:Sr,prog:C=>[B0(C).ok,1e3]},{id:"days7",name:"\u041D\u0435\u0434\u0435\u043B\u044F \u043F\u043E\u0434\u0440\u044F\u0434",about:"\u0418\u0433\u0440\u0430\u0442\u044C 7 \u0434\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",icon:qi,prog:C=>[B0(C).bestDays,7]},{id:"duel",name:"\u0412\u044B\u0437\u043E\u0432 \u0431\u0440\u043E\u0448\u0435\u043D",about:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443",icon:P6},{id:"sapper",name:"\u0421\u0430\u043F\u0451\u0440",about:"\u0412\u0435\u0440\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 5 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432-\u0431\u043E\u043C\u0431",icon:w6,prog:C=>[B0(C).bombs,5]},{id:"lucky",name:"\u0412\u0435\u0437\u0443\u043D\u0447\u0438\u043A",about:"\u041D\u0430\u0439\u0442\u0438 10 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432",icon:R6,prog:C=>[B0(C).gifts,10]},{id:"newyear",name:"\u041D\u043E\u0432\u043E\u0433\u043E\u0434\u043D\u0435\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435",about:"\u0413\u0440\u0430\u043D\u044C \xAB\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0434 \u0438 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E\xBB \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A",icon:Er}],B6=Object.fromEntries(r0.map(C=>[C.id,C]));function H0(C){C.ach=C.ach||{};let e=C.ach;return e.got=e.got||{},e.stars=e.stars||0,e.topics=e.topics||{},e.t=Object.assign({n:0,ok:0,run:0,bestRun:0,pics:0,bombs:0,gifts:0,day:"",days:0,bestDays:0,solved:0,levels:0,since:Qe()},e.t||{}),e}function Qe(C=new Date){return`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}-${String(C.getDate()).padStart(2,"0")}`}var iH=C=>Math.round(Date.UTC(+C.slice(0,4),+C.slice(5,7)-1,+C.slice(8,10))/864e5),KM=C=>Object.entries(C.ach.topics).filter(([e,t])=>e!=="my"&&t[1]>=5).length;function H5(C,e,t){C.ach.got[e]||(C.ach.got[e]=Qe(),t.push(e))}function rH(C,e){for(let t of r0)if(t.prog){let[i,r]=t.prog(C);i>=r&&H5(C,t.id,e)}}function HH(C,{ok:e,topic:t,pic:i,timer:r,sp:H}){H0(C);let V=C.ach.t,n=[],L=Qe();if(V.day!==L&&(V.days=V.day&&iH(L)-iH(V.day)===1?V.days+1:1,V.day=L,V.bestDays=Math.max(V.bestDays,V.days)),V.n++,e?(V.ok++,V.run++,V.bestRun=Math.max(V.bestRun,V.run)):V.run=0,t){let a=C.ach.topics[t]=C.ach.topics[t]||[0,0];a[0]++,e&&a[1]++}return e&&i&&V.pics++,e&&H==="bomb"&&V.bombs++,e&&r&&r<=10&&H5(C,"blitz",n),rH(C,n),n}function VH(C,{topic:e,clean:t}){H0(C);let i=[];return t&&(H5(C,"cleanface",i),e==="newyear"&&H5(C,"newyear",i)),i}function nH(C,{r:e,level:t,size:i,total:r,all3:H}){H0(C);let V=C.ach,n=[],L=V.stars;V.stars+=e.stars||0,V.t.levels++,e.solved&&(V.t.solved++,H5(C,"first",n),e.free?H5(C,"self",n):(e.hints||H5(C,"nohints",n),!e.hints&&t===3&&i===3&&H5(C,"master",n),e.left>=(i===2?5:10)&&H5(C,"saver",n)),e.correct===r&&H5(C,"perfect",n),e.stars===3&&(H5(C,"three",n),t===3&&H5(C,"expert",n)),H&&H5(C,"triple",n));let a=L4.filter(o=>o.stars>L&&o.stars<=V.stars).map(o=>o.id);return{badges:n,skins:a}}function LH(C){H0(C);let e=[];return C.ach.t.gifts++,rH(C,e),e}function aH(C){H0(C);let e=[];return H5(C,"duel",e),e}var I6=(C,e)=>e3[e]?H0(C).stars>=e3[e].stars:!1,oH=C=>L4.find(e=>e.stars>H0(C).stars)||null;var sH="kubik.my.v1",G5={q:300,a:80,e:400};function JM(){try{let C=JSON.parse(localStorage.getItem(sH));if(C&&Array.isArray(C.list))return{list:C.list,next:C.next||C.list.reduce((e,t)=>Math.max(e,t.id),0)+1}}catch{}return{list:[],next:1}}var X2=JM();function Je(){try{return localStorage.setItem(sH,JSON.stringify(X2)),!0}catch{return!1}}var o4=C=>X2.list.filter(e=>!e.lv||e.lv===+C),k6=C=>X2.list.find(e=>e.id===+C),a4=C=>String(C||"").replace(/\s+/g," ").trim(),Ke=C=>a4(C).toLowerCase().replace(/ё/g,"\u0435");function je(C,e){return C.q?C.q.length>G5.q?`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${G5.q} \u0437\u043D\u0430\u043A\u043E\u0432.`:C.a[0]?C.a.slice(1).some(t=>!t)?"\u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430.":C.a.some(t=>t.length>G5.a)?`\u041E\u0442\u0432\u0435\u0442 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${G5.a} \u0437\u043D\u0430\u043A\u043E\u0432.`:new Set(C.a.map(Ke)).size!==4?"\u0412\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u043C\u0438.":C.e&&C.e.length>G5.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${G5.e} \u0437\u043D\u0430\u043A\u043E\u0432.`:X2.list.some(t=>t.id!==e&&Ke(t.q)===Ke(C.q))?"\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C.":"":"\u041D\u0443\u0436\u0435\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.":"\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0430\u043C \u0432\u043E\u043F\u0440\u043E\u0441."}function F6(C){return{q:a4(C.q),a:[0,1,2,3].map(e=>a4(C.a&&C.a[e])),e:a4(C.e),lv:[1,2,3].includes(+C.lv)?+C.lv:0}}function MH(C,e){return e?Object.assign(k6(e),C):X2.list.push({id:X2.next++,...C}),Je()}function lH(C){X2.list=X2.list.filter(e=>e.id!==+C),Je()}var jM=`# \u041A\u0443\u0431\u0438\u043A: \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.
# \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A, \u0431\u043B\u043E\u043A\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439.
# \u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0431\u043B\u043E\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.
# + \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442
# - \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0438\u0445 \u0442\u0440\u0438)
# = \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C)
# \u0443\u0440\u043E\u0432\u0435\u043D\u044C: 1, 2 \u0438\u043B\u0438 3 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C, \u0442\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F)
# \u0421\u0442\u0440\u043E\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 #, \u0438\u0433\u0440\u0430 \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442.
`;function dH(C=X2.list){let e=C.map(t=>[t.q,"+ "+t.a[0],...t.a.slice(1).map(i=>"- "+i),...t.e?["= "+t.e]:[],...t.lv?["\u0443\u0440\u043E\u0432\u0435\u043D\u044C: "+t.lv]:[]].join(`
`));return"\uFEFF"+jM+`
`+e.join(`

`)+`
`}function cH(C){C=String(C).replace(/^﻿/,"").replace(/\r\n?/g,`
`);let e=C.trim();if(e.startsWith("[")||e.startsWith("{"))try{let H=JSON.parse(e);return{items:(Array.isArray(H)?H:H.questions||H.list||[]).map(F6),errors:[]}}catch{}let t=[],i=[];return C.split(/\n\s*\n/).map(H=>H.split(`
`).map(V=>V.trim()).filter(V=>V&&!V.startsWith("#"))).filter(H=>H.length).forEach((H,V)=>{let n={q:[],ok:[],bad:[],e:[],lv:0};for(let a of H){let o=a.match(/^уровень\s*[:\-–—]?\s*(\S+)/i);if(o){n.lv=[1,2,3].includes(+o[1])?+o[1]:0;continue}a[0]==="+"?n.ok.push(a.slice(1)):"-\u2013\u2014".includes(a[0])?n.bad.push(a.slice(1)):a[0]==="="?n.e.push(a.slice(1)):!n.ok.length&&!n.bad.length?n.q.push(a):n.e.push(a)}let L=a4(n.q.join(" ")).slice(0,40)||`\u0431\u043B\u043E\u043A ${V+1}`;if(n.ok.length!==1){i.push(`\xAB${L}\xBB: \u043D\u0443\u0436\u0435\u043D \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0441\u0442\u0440\u043E\u043A\u0430 \u0441 +).`);return}if(n.bad.length!==3){i.push(`\xAB${L}\xBB: \u043D\u0443\u0436\u043D\u044B \u0440\u043E\u0432\u043D\u043E \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430 (\u0441\u0442\u0440\u043E\u043A\u0438 \u0441 -), \u0430 \u0438\u0445 ${n.bad.length}.`);return}t.push(F6({q:n.q.join(" "),a:[n.ok[0],...n.bad],e:n.e.join(" "),lv:n.lv}))}),{items:t,errors:i}}function pH({items:C,errors:e}){let t=0,i=0,r=e.slice();for(let H of C){let V=je(H);if(V==="\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C."){i++;continue}if(V){r.push(`\xAB${H.q.slice(0,40)||"\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430"}\xBB: ${V}`);continue}X2.list.push({id:X2.next++,...H}),t++}return Je(),{added:t,dup:i,errors:r}}async function uH(C){let e=await C.arrayBuffer(),t=new TextDecoder("utf-8").decode(e);if(t.includes("\uFFFD"))try{t=new TextDecoder("windows-1251").decode(e)}catch{}return t}var F0="0.13.0",M0={1:{name:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439",scramble:6,about:"\u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F"},2:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",scramble:10,about:"\u0434\u043B\u044F \u044D\u0440\u0443\u0434\u0438\u0442\u043E\u0432"},3:{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",scramble:14,about:"\u0434\u043B\u044F \u0437\u043D\u0430\u0442\u043E\u043A\u043E\u0432"}},el={1:"#11a85c",2:"#ffd21f",3:"#e0303a"},tl={U:"\u0411\u0435\u043B\u0430\u044F",F:"\u0417\u0435\u043B\u0451\u043D\u0430\u044F",R:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F",B:"\u0421\u0438\u043D\u044F\u044F",L:"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F",D:"\u0416\u0451\u043B\u0442\u0430\u044F"},a0=2,i3=1,I0=2,o0={3:{name:"3\xD73",scramble:[6,10,14],bonus:100,free:50,about:"\u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430"},2:{name:"2\xD72",scramble:[4,6,9],bonus:50,free:25,about:"\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438\u0433\u0440\u0430"}},k2=()=>h&&h.size===2?2:3,Z2=()=>k2()*k2(),l0=()=>6*Z2(),bH=()=>o0[k2()].bonus*h.level,i8=()=>o0[k2()].free*h.level,r7=C=>`${C} ${q5(C,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`,Ct=[0,10,15,20,30,45,60,90],Cl=C=>C?`${C} \u0441`:"\u043D\u0435\u0442",W6="kubik.state.v1",TH="kubik.meta.v1",$6=10,AH={x2:{name:"x2",icon:"x2",about:"\u041E\u0447\u043A\u0438 \u0437\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F."},blitz:{name:"\u0411\u043B\u0438\u0446",icon:"flash",about:`\u041D\u0430 \u043E\u0442\u0432\u0435\u0442 ${$6} \u0441\u0435\u043A\u0443\u043D\u0434, \u0437\u0430\u0442\u043E \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 2 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.`},gift:{name:"\u041F\u043E\u0434\u0430\u0440\u043E\u043A",icon:"gift",about:"\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A, \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430."},bomb:{name:"\u0411\u043E\u043C\u0431\u0430",icon:"bomb",about:"\u041E\u0448\u0438\u0431\u0451\u0448\u044C\u0441\u044F \u0438\u043B\u0438 \u043D\u0435 \u0443\u0441\u043F\u0435\u0435\u0448\u044C \u2014 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0448\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442."}},wH={x2:"x",blitz:"z",gift:"g",bomb:"b"},il=Object.fromEntries(Object.entries(wH).map(([C,e])=>[e,C])),mH=["x2","x2","x2","blitz","blitz","gift","gift","bomb","bomb"],d4=C=>C>=5?2:C>=3?1.5:1,q6=C=>String(C).replace(".",","),r8=(()=>{try{return!!navigator.webdriver&&!localStorage.getItem("kubik.sp")}catch{return!1}})(),rl=C=>h&&h.sp&&h.sp[C]||null;function Hl(C){let e={};if(r8)return e;let t=C*C,i=C===2?1:2;for(let r of"UFRBLD"){let H=$5([...Array(t).keys()]).slice(0,i),V=[];for(let n of H){let L;do L=mH[e7(mH.length)];while(V.includes(L));V.push(L),e[r+n]=L}}return e}var Vl=C=>Object.entries(C||{}).map(([e,t])=>e+wH[t]).join(",");function nl(C,e){let t={};if(!C)return t;if(!/^[UFRBLD]\d[xzgb](,[UFRBLD]\d[xzgb])*$/.test(C))return null;for(let i of C.split(",")){if(+i[1]>=e*e)return null;t[i.slice(0,2)]=il[i[2]]}return t}var Ll=C=>`${C} ${q5(C,"\u043E\u0447\u043A\u043E","\u043E\u0447\u043A\u0430","\u043E\u0447\u043A\u043E\u0432")}`,W=(C,e=document)=>e.querySelector(C),K1=C=>String(C).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),V3=C=>{try{return JSON.parse(localStorage.getItem(C))}catch{return null}},OH=(C,e)=>{try{localStorage.setItem(C,JSON.stringify(e))}catch{}},e7=C=>Math.floor(Math.random()*C),$5=C=>{for(let e=C.length-1;e>0;e--){let t=e7(e+1);[C[e],C[t]]=[C[t],C[e]]}return C},q5=(C,e,t,i)=>{let r=C%10,H=C%100;return r===1&&H!==11?e:r>=2&&r<=4&&(H<12||H>14)?t:i},M5=C=>`${C} ${q5(C,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}`,al=C=>C==="U"||C==="D"?"#1d2230":"#fff",H7=(C,e)=>`<span class="sw" style="background:${j3[C]};color:${al(C)}">${e?_1(u2[e].icon):""}</span>`,h2={},it=C=>C&&C.v===1&&M0[C.level]?C:null,h=V3(W6),H1=Object.assign({best:0,seen:{},sound:!0,games:0},V3(TH)||{});P0.on=H1.sound;H0(H1);var n1,l5="menu",t2=()=>{h?OH(h.ch?n7:W6,h):localStorage.removeItem(W6)},y2=()=>OH(TH,H1);function H8(C,e){return C==="my"?o4(e):h2[C]&&h2[C][e]||[]}function at(C){return V4.filter(e=>H8(e.id,C).length>=Z2()).map(e=>e.id)}var C3=C=>(C.q+"|"+C.a[0]+(C.p?"|"+C.p:"")).trim().toLowerCase();function EH(C,e){if(C==="my")return ol(e);let t=H8(C,e),i=C+"-"+e,r=new Set(H1.bad||[]),H=o=>!o.img||W5.ok.has(rt(o)),V=t.map((o,M)=>M).filter(o=>!r.has(C3(t[o]))&&H(t[o])),n=Z2();V.length<n&&(V=t.map((o,M)=>M).filter(o=>H(t[o]))),V.length<n&&(V=t.map((o,M)=>M));let L=new Set(H1.seen[i]||[]),a=$5(V.filter(o=>!L.has(o)));if(a.length<n){let o=$5(V.filter(M=>L.has(M)));a=a.concat(o),H1.seen[i]=[]}return a.slice(0,n).map(o=>`${C}-${e}-${o}`)}function ol(C){let e=o4(C);if(!e.length)return[];let t="my-"+C,i=new Set(H1.seen[t]||[]),r=$5(e.filter(V=>!i.has(V.id)).map(V=>V.id)),H=Z2();for(r.length<H&&(r=r.concat($5(e.filter(V=>i.has(V.id)).map(V=>V.id))),H1.seen[t]=[]);r.length<H;)r=r.concat($5(e.map(V=>V.id)));return h.myq=h.myq||{},r.slice(0,H).map((V,n)=>{let L=`my-${C}-${V}-${n}`,a=k6(V);return h.myq[L]={q:a.q,a:a.a.slice(),e:a.e},L})}function D0(C){if(C.startsWith("my-"))return h.myq[C];if(h.bq&&h.bq[C])return h.bq[C];let[e,t,i]=C.split("-");return H8(e,t)[+i]}function sl(C){let[e,t,i]=C.split("-");if(!h2[e]&&e!=="my")return;let r=e+"-"+t;H1.seen[r]=H1.seen[r]||[],H1.seen[r].includes(+i)||H1.seen[r].push(+i),y2()}var W5={packs:new Map,ok:new Set,urls:new Map},rt=C=>String(C.img).split(":")[0];function RH(C){if(!W5.packs.has(C)){let e=fetch(C).then(t=>t.ok?t.arrayBuffer():null).catch(()=>null).then(t=>(t&&t.byteLength?W5.ok.add(C):W5.packs.delete(C),t));W5.packs.set(C,e)}return W5.packs.get(C)}function PH(){if(!h||!h.topics)return;let C=new Set;for(let e of g2)for(let t of H8(h.topics[e],h.level))t&&t.img&&C.add(rt(t));if(h.stageQ)for(let e of Object.values(h.stageQ))for(let t of e){let i=D0(t);i&&i.img&&C.add(rt(i))}for(let e of C)RH(e)}async function Ml(C){if(W5.urls.has(C.img))return W5.urls.get(C.img);let[e,t,i]=String(C.img).split(":"),r=await RH(e);if(!r||+t+ +i>r.byteLength)return null;let H=URL.createObjectURL(new Blob([new Uint8Array(r,+t,+i)],{type:"image/webp"}));return W5.urls.set(C.img,H),H}function ll(C){let[e,t]=C.wh||[4,3];return`<div class="q-pic loading" style="aspect-ratio:${e}/${t}"><img alt=""><span class="pic-msg">\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443\u2026</span></div>`}async function BH(C,e){let t=W(".q-pic");if(!t)return;let i=t.querySelector("img"),r=await Ml(C);if(!(!h||h.pending!==e)){if(!r)return t.classList.remove("loading"),t.classList.add("fail"),t.querySelector(".pic-msg").innerHTML='\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0430\u0441\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442.<button class="link" id="pic-retry">\u0415\u0449\u0451 \u0440\u0430\u0437</button>',await new Promise(H=>{W("#pic-retry").onclick=()=>H()}),!h||h.pending!==e?void 0:(t.classList.remove("fail"),t.classList.add("loading"),t.querySelector(".pic-msg").textContent="\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443\u2026",BH(C,e));await new Promise(H=>{i.onload=H,i.onerror=H,i.src=r}),t.classList.remove("loading"),t.onclick=()=>dl(r)}}function dl(C){let e=document.createElement("div");e.className="pic-zoom",e.innerHTML=`<img src="${C}" alt=""><span>\u041D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C</span>`,e.onclick=()=>e.remove(),document.body.appendChild(e)}var IH="kubik-bank",FH="bank.json",Ht="kubik.bank.v1",X5=C=>C&&C._meta&&+C._meta.rev||0,hH=C=>Object.keys(C||{}).filter(e=>e!=="_meta").reduce((e,t)=>e+["1","2","3"].reduce((i,r)=>i+(C[t][r]||[]).length,0),0),k0=C=>String(C||"0").split(".").reduce((e,t)=>e*1e3+(+t||0),0);function X6(C){return!C||typeof C!="object"||!C._meta?!1:Object.keys(C).some(e=>e!=="_meta"&&C[e]&&Array.isArray(C[e][1]))}async function cl(){try{if(window.caches){let C=await(await caches.open(IH)).match(FH);if(C)return await C.json()}}catch{}return V3(Ht)}async function kH(C){let e=JSON.stringify(C);try{if(window.caches){await(await caches.open(IH)).put(FH,new Response(e,{headers:{"Content-Type":"application/json"}})),localStorage.removeItem(Ht);return}}catch{}try{localStorage.setItem(Ht,e)}catch{}}function DH(C){let e=C._meta&&C._meta.topics||{};for(let t of Object.keys(C)){if(t==="_meta"||t==="my")continue;let i=e[t]||{};if(u2[t]){i.name&&(u2[t].name=i.name),i.icon&&(u2[t].icon=i.icon);continue}let r={id:t,name:i.name||t,icon:i.icon||CH};V4.splice(V4.findIndex(H=>H.id==="my"),0,r),u2[t]=r}}function ot(C){if(h&&h.stageQ){h.bq=h.bq||{};for(let e of Object.values(h.stageQ))for(let t of e){if(t.startsWith("my-")||h.bq[t])continue;let i=D0(t);i&&(h.bq[t]={...i,a:i.a.slice()})}t2()}for(let e of Object.keys(H1.seen)){let[t,i]=e.split("-");if(t==="my")continue;let r=h2[t]&&h2[t][i]||[],H=C[t]&&C[t][i]||[],V=L=>L.q+"|"+(L.p||""),n=new Map(H.map((L,a)=>[V(L),a]));H1.seen[e]=H1.seen[e].map(L=>r[L]&&n.get(V(r[L]))).filter(L=>L!==void 0)}if(H1.bad&&H1.bad.length){let e=new Set;for(let t of Object.keys(C))if(t!=="_meta")for(let i of["1","2","3"])for(let r of C[t][i]||[])e.add(C3(r));H1.bad=H1.bad.filter(t=>e.has(t))}y2(),h2=C,DH(h2)}async function pl(){let C=null;try{C=await(await fetch("ru.json?v="+F0)).json()}catch{}let e=await cl(),t=i=>X6(i)&&k0(i._meta.app)<=k0(F0);h2=t(e)&&(!t(C)||X5(e)>X5(C))?e:C||{},X6(h2)&&DH(h2)}var D6=!1;async function NH(){if(D6)return;D6=!0;let C=W("#m-update");C.classList.add("busy"),C.innerHTML=_1(y1.update)+"\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026";let e=null,t="";try{let n=await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"});if(!n.ok)throw new Error(n.status);e=await n.json(),X6(e)||(t="bad",e=null)}catch{t=t||"net"}D6=!1,C.classList.remove("busy"),V5();let i=hH(h2),r=n=>(n._meta.date||"").split("-").reverse().join("."),H,V;if(!e)H="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C",V=t==="net"?"\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0430\u0439\u0442\u043E\u043C \u0438\u0433\u0440\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0424\u0430\u0439\u043B \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D. \u0417\u0430\u0433\u0440\u0443\u0437\u0438 ru.json \u0437\u0430\u043D\u043E\u0432\u043E.";else if(k0(e._meta.app)>k0(F0))H="\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B",V="\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0438\u0433\u0440\u044B. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0435\u0449\u0451 \u0440\u0430\u0437.";else if(X5(e)<=X5(h2))H="\u041D\u043E\u0432\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043D\u0435\u0442",V=`\u0423 \u0442\u0435\u0431\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F: ${i} ${q5(i,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}${h2._meta&&h2._meta.date?`, \u043E\u0442 ${r(h2)}`:""}.`;else{let n=new Set(Object.keys(h2).filter(M=>M!=="_meta"));ot(e),await kH(e);let L=hH(e),a=L-i,o=Object.keys(e).filter(M=>M!=="_meta"&&!n.has(M)).map(M=>`\xAB${u2[M].name}\xBB`);H="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B",V=`\u0422\u0435\u043F\u0435\u0440\u044C ${L} ${q5(L,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`+(a>0?`, \u043D\u0430 ${a} \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E.`:a<0?`, \u0431\u044B\u043B\u043E ${i}.`:", \u0447\u0430\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.")+(o.length?` \u041D\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B: ${o.join(", ")}.`:"")+(h&&h.phase==="quiz"?" \u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u044D\u0442\u0430\u043F \u0434\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438.":"")}a2(e?H==="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B"?"ok":"tap":"deny"),d2(`<div class="m-title">${H}</div><div class="m-text"><p>${V}</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(F2)}function UH(C,e=k2()){let t=[],i=null;for(;t.length<C;){let r="xyz"[e7(3)];if(r===i)continue;let H=e===2?.5:1;t.push({ax:r,l:e7(2)?H:-H,d:e7(2)?1:-1}),i=r}return t}function V8(C){let e=[];for(let t of C){let i=e[e.length-1];if(i&&i.ax===t.ax&&i.l===t.l){let r=((i.d+t.d)%4+4)%4;r===0?e.pop():i.d=r===3?-1:r}else e.push({ax:t.ax,l:t.l,d:t.d})}return e}function zH(){let C=V8([...h.scramble,...h.moves]),e=C[C.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}function ul(C){h={v:1,level:C,size:H1.size===2?2:3,phase:"topics",score:0,results:{},topics:m4(C,null),timers:st()},t2(),L0()}function st(){let C={};for(let e of g2)C[e]=H1.timers&&H1.timers[e]||0;return C}function n0(C){return h&&h.timers&&h.timers[C]||0}function m4(C,e){let t=at(C),i={},r=new Set;if(e)for(let V of g2)t.includes(e[V])&&!r.has(e[V])&&(i[V]=e[V],r.add(e[V]));let H=$5(t.filter(V=>V!=="my"&&!r.has(V)));for(let V of g2)i[V]||(i[V]=H.shift());return i}function Al(){let C=at(h.level);if(!g2.every(e=>C.includes(h.topics[e]))){h.topics=m4(h.level,h.topics),t2(),L0(),w2(`\u0414\u043B\u044F \xAB\u041C\u043E\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432\xBB \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u043D\u0443\u0436\u043D\u043E ${r7(Z2())}, \u0433\u0440\u0430\u043D\u044C \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430`);return}Object.assign(h,{bq:{},phase:"quiz",scramble:UH(o0[k2()].scramble[h.level-1]),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0,gifts:0,bombs:0,bestRun:0},ms:0,msOk:1,sp:Hl(k2()),run:0}),t2(),PH(),s0()}function N0(C){l5=C,C!=="skins"&&lV(),document.body.classList.remove("loading");for(let e of document.querySelectorAll(".scr"))e.classList.toggle("on",e.id==="scr-"+C);requestAnimationFrame(N6)}function N6(){let C=W("#stage"),e=W(`#scr-${l5} .cube-slot`);if(!e){C.style.display="none";return}let t=e.getBoundingClientRect();Object.assign(C.style,{display:"block",left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.height+"px"}),n1.resize()}function V5(){M8(),F2(),h&&h.ch&&(h.phase==="result"&&localStorage.removeItem(n7),h=it(V3(W6))),n1.setSize(h?k2():H1.size===2?2:3),n1.reset(),n1.mode="view",n1.autoSpin=!0;for(let n of n1.stickers)n1.setLook(n,"color");let C=W("#m-continue");h&&h.phase!=="final"?(C.hidden=!1,C.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${h.level}${k2()===2?" \xB7 2\xD72":""}`):C.hidden=!0;let e=it(V3(n7)),t=W("#m-chal");t.hidden=!(e&&e.ch&&e.phase!=="result"),t.hidden||(t.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \xB7 ${e.ch.raw.a.n}`,t.className="btn"+(C.hidden?" primary":"")),W("#m-sound").innerHTML=_1(P0.on?y1.soundOn:y1.soundOff)+(P0.on?"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0451\u043D":"\u0417\u0432\u0443\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),D6||(W("#m-update").innerHTML=_1(y1.update)+"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),W("#m-best").textContent=H1.best&&H1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434: ${H1.best} \xB7 \u043D\u0430 2\xD72: ${H1.best2}`:H1.best?`\u0420\u0435\u043A\u043E\u0440\u0434: ${H1.best}`:H1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 2\xD72: ${H1.best2}`:"";let i=(H1.reports||[]).length,r=W("#m-reports");r.hidden=!i,r.innerHTML=_1(y1.report)+`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${i}`;let H=o8().length,V=W("#m-duels");V.hidden=!H,V.innerHTML=_1(y1.duel)+`\u0412\u044B\u0437\u043E\u0432\u044B: ${H}`,W("#m-ach").innerHTML=_1(y1.trophy)+`\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F<span class="mstar">${_1(y1.star)}${H1.ach.stars}</span>`,N0("menu")}function U6(){let C=H1.size===2?2:3,e=o0[C];W("#lv-size").innerHTML=[3,2].map(t=>`<button data-size="${t}" class="${t===C?"on":""}"><b>${o0[t].name}</b><small>${o0[t].about}, ${r7(6*t*t)}</small></button>`).join(""),W("#lv-lead").textContent=`\u041A\u0443\u0431\u0438\u043A ${e.name}: \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 6 \u044D\u0442\u0430\u043F\u043E\u0432 \u043F\u043E ${r7(C*C)}, \u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A. \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043D\u0430\u0447\u0430\u0442\u044C?`,W("#lv-list").innerHTML=[1,2,3].map(t=>`<button class="lv" data-lv="${t}">
    <span class="num" style="background:${el[t]}">${t}</span>
    <span><b>${M0[t].name}</b><span>${M0[t].about}; \u043A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${M5(e.scramble[t-1])}</span></span></button>`).join(""),N0("levels")}function L0(){F2(),W("#tp-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${h.level} \xB7 ${M0[h.level].name}${k2()===2?" \xB7 2\xD72":""}`,W("#tp-lead").textContent=`\u0412\u044B\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438. \u0413\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u044D\u0442\u0430\u043F \u0438\u0437 ${r7(Z2())}, \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.`;let C=at(h.level),e=o4(h.level).length,t=C.includes("my")?"":`<option disabled>\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u043D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${Z2()-e}</option>`;h.timers||(h.timers=st());let i=g2.every(r=>n0(r)===n0("U"));W("#tp-list").innerHTML=`<label class="tall">${_1(y1.timer)}<span>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043E\u0442\u0432\u0435\u0442</span>
    <select id="tp-time"><option value="" disabled${i?"":" selected"}>\u0440\u0430\u0437\u043D\u043E\u0435</option>${Ct.map(r=>`<option value="${r}"${i&&n0("U")===r?" selected":""}>${r?`\u0432\u0441\u0435\u043C \u043F\u043E ${r} \u0441`:"\u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select>
    <span class="chev">${_1("M7 10l5 5 5-5z")}</span></label>`+g2.map(r=>`<div class="trow"><label class="tl">${H7(r,h.topics[r])}
    <span class="tcol"><small>${tl[r]} \u0433\u0440\u0430\u043D\u044C</small>
    <select data-face="${r}">${C.map(H=>`<option value="${H}"${h.topics[r]===H?" selected":""}>${u2[H].name}</option>`).join("")}${t}</select></span></label>
    <label class="tm${n0(r)?" on":""}">${_1(y1.timer)}<span>${Cl(n0(r))}</span>
    <select data-tface="${r}" aria-label="\u0422\u0430\u0439\u043C\u0435\u0440">${Ct.map(H=>`<option value="${H}"${n0(r)===H?" selected":""}>${H?`${H} \u0441\u0435\u043A\u0443\u043D\u0434`:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select></label></div>`).join("")+`<button class="link mylink" id="tp-my">${_1(y1.my)}\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: ${e}${e<Z2()?` \u0438\u0437 ${Z2()} \u043D\u0443\u0436\u043D\u044B\u0445`:""}. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>`,W("#tp-rand").innerHTML=_1(y1.shuffle)+"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",N0("topics")}function s0(){if(F2(),W("#g-title").textContent=h.ch?`\u0412\u044B\u0437\u043E\u0432 \xB7 ${h.ch.raw.a.n} \xB7 \u0443\u0440. ${h.level}${k2()===2?" \xB7 2\xD72":""}`:`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${h.level} \xB7 ${M0[h.level].name}${k2()===2?" \xB7 2\xD72":""}`,n1.autoSpin=!1,ml(),n1.rotateTo(n1.baseView,350),N0("game"),h.phase==="quiz"&&PH(),h.phase==="quiz"){if(!h.pending&&h.stage&&n3(h.stage)===Z2()&&(h.stage=null,t2(),V7()),!h.pending&&c4()>=l0()){setTimeout(dt,300);return}n1.mode="tap",n8(),h.pending&&$H()}else h.phase==="solve"?(n1.mode="solve",L3()):h.phase==="result"&&(n1.mode="view",L3(),r3());O5()}function ml(){n1.setSize(k2()),n1.reset();for(let C of h.scramble)n1.turn(C,!1);if(h.phase!=="quiz")for(let C of h.moves)n1.turn(C,!1);V7()}function n3(C){let e=0;for(let t=0,i=Z2();t<i;t++)h.cells[C+t]&&e++;return e}function c4(){return Object.keys(h.cells).length}function V7(){let C=h&&h.phase==="quiz";for(let e of n1.cells()){let t=e.sticker;if(!h){n1.setLook(t,"color");continue}let i=C?h.cells[e.key]:null,r=C&&h.stage&&e.face!==h.stage;if(k2()===2&&C&&!i&&!r)n1.setLook(t,"hidden",n1.hiddenLabel(u2[h.topics[e.face]].icon,n1._rotOf(t)));else if(t.userData.center){let H=n1.centerLabel(t.userData.color,u2[h.topics[t.userData.color]].icon,i==="c"||i==="g"?"ok":i==="w"?"bad":null,n1._rotOf(t));n1.setLook(t,r?"locked":"color",H)}else C?n1.setLook(t,i==="c"||i==="g"?"color":i==="w"?"wrong":i==="s"?"skip":r?"locked":"hidden"):n1.setLook(t,"color")}}function O5(C){if(!h)return;let e=W("#g-tip");if(e&&h.phase!=="quiz"&&(e.innerHTML=GH()),W("#st-score").textContent=h.score,W("#st-turns").textContent=h.free?"\u221E":h.tokens,h.phase==="quiz"?(W("#st-l3").textContent="\u0412\u043E\u043F\u0440\u043E\u0441\u044B",W("#st-3").textContent=`${c4()}/${l0()}`):(W("#st-l3").textContent="\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0445\u043E\u0434\u043E\u0432",W("#st-3").textContent=h.moves.length),C){let t=W(".pill.turns");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}}function n8(){let C;if(h.stage){let i=n3(h.stage),r=n0(h.stage);C=`\u042D\u0442\u0430\u043F ${h.order.length} \u0438\u0437 6 \xB7 <b>${u2[h.topics[h.stage]].name}</b> \xB7 ${i} \u0438\u0437 ${Z2()}${r?` \xB7 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 ${r} \u0441`:""}.<br>\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0438 \u044D\u0442\u043E\u0439 \u0433\u0440\u0430\u043D\u0438.`}else c4()?C="\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0433\u0440\u0430\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0435\u0451 \u043A\u043B\u0435\u0442\u043A\u0443.":C="\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0430\u043F.<br>\u041A\u0443\u0431\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C.";let e=g2.map(i=>{let r=n3(i);return`<button class="chip ${h.stage===i?"on":r===Z2()?"done":""}" data-face="${i}">${H7(i,h.topics[i])}<span>${r}/${Z2()}</span></button>`}).join(""),t=h.run||0;t>=2&&!r8&&(C+=`<div class="runline">${_1(y1.fire)}\u0421\u0435\u0440\u0438\u044F: ${t} \u043F\u043E\u0434\u0440\u044F\u0434${d4(t)>1?` \xB7 \u043E\u0447\u043A\u0438 \xD7${q6(d4(t))}`:""}</div>`),W("#g-foot").innerHTML=`<div class="tip">${C}</div><div class="chips">${e}</div>`}function hl(){return V8([...h.scramble,...h.moves]).reduce((C,e)=>C+Math.abs(e.d),0)}function GH(){if(h.phase!=="solve")return"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.";if(h.free)return`\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C <b>${i8()}</b> \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.`;if(h.tokens<1)return"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0445\u043E\u0434 \u0438\u043B\u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443 \u0437\u0430 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.";let C=hl();return`\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043B\u043E\u0439. \u0412\u0440\u0430\u0449\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443.<br>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0441\u043E\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0437\u0430 <b>${C}</b> ${q5(C,"\u0445\u043E\u0434","\u0445\u043E\u0434\u0430","\u0445\u043E\u0434\u043E\u0432")} (${a0*C} ${q5(a0*C,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}).`}function L3(){let C=h.phase==="solve";W("#g-foot").innerHTML=`<div class="tip" id="g-tip">${GH()}</div>
  <div class="tools">
    <button class="tool" id="t-undo"${C?"":" disabled"}>${_1(y1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    ${C&&!h.free&&h.tokens<1?`<button class="tool hint" id="t-free">${_1(y1.turn)}\u0421\u0430\u043C<em>+${i8()}</em></button>`:`<button class="tool hint" id="t-hint"${C&&!h.free?"":" disabled"}>${_1(y1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430<em>\u2212${a0}</em></button>`}
    <button class="tool" id="t-view">${_1(y1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="t-end"${C?"":" disabled"}>${_1(y1.flag)}\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C</button>
  </div>`}function WH(C){if(!h||h.phase!=="quiz"||h.pending||!W("#sheet").hidden)return;if(n4(),h.cells[C.key]){w2("\u041D\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0442\u044B \u0443\u0436\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B"),a2("deny");return}if(h.stage&&h.stage!==C.face){w2(`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438 \u044D\u0442\u0430\u043F \xAB${u2[h.topics[h.stage]].name}\xBB`),a2("deny"),n1.showFace(h.stage);return}if(!h.stage){h.stage=C.face,h.order.push(C.face);let r=h.ch?h.ch.qs[C.face]:EH(h.topics[C.face],h.level);if(r.length<Z2()){h.stage=null,h.order.pop(),w2("\u0421\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u044B. \u0414\u043E\u0431\u0430\u0432\u044C \u0438\u0445 \u0432 \u043C\u0435\u043D\u044E \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB."),a2("deny");return}h.stageQ[C.face]=r,a2("stage"),V7()}let e=rl(C.key);if(e==="gift"){fl(C);return}let t=h.stageQ[C.face][n3(C.face)],i=n0(C.face);h.pending={key:C.key,face:C.face,qid:t,order:$5([0,1,2,3]),limit:e==="blitz"?i?Math.min(i,$6):$6:i,sp:e},t2(),n8(),$H()}function fl(C){h.cells[C.key]="g",h.tokens++,h.lv.gifts=(h.lv.gifts||0)+1,h.lastKey=C.key;let e=LH(H1);y2(),t2(),a2("ok"),O5(!0),n8();let t=u2[h.topics[C.face]];W("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${H7(C.face,h.topics[C.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${h.order.indexOf(C.face)+1} \xB7 \u043A\u043B\u0435\u0442\u043A\u0430 ${n3(C.face)} \u0438\u0437 ${Z2()}</span></div>
    <div class="gift-box">${_1(y1.gift,"ic big")}<b>\u041F\u043E\u0434\u0430\u0440\u043E\u043A</b><span>\u042D\u0442\u0430 \u043A\u043B\u0435\u0442\u043A\u0430 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430: \u0434\u0435\u0440\u0436\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E.</span></div>
    <div class="after"><div class="verdict ok">${_1(y1.check)}+1 \u043F\u043E\u0432\u043E\u0440\u043E\u0442</div>
    <p class="exp">\u0421\u0435\u0440\u0438\u044F \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043E\u0442 \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F.</p><button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button></div>`,W("#sheet").hidden=!1,e.length&&(h.lv.nb=(h.lv.nb||[]).concat(e),t2()),f4(e)}function xl(C){if(!C||!AH[C])return"";let e=AH[C];return`<div class="q-sp sp-${C}">${_1(y1[e.icon])}<span><b>${e.name}.</b> ${e.about}</span></div>`}function vl(){if(r8)return"";let C=h.run||0,e=d4(C+1);return C<2?"":`<div class="q-run">${_1(y1.fire)}<span>\u0421\u0435\u0440\u0438\u044F: ${C} \u043F\u043E\u0434\u0440\u044F\u0434. ${e>d4(C)?`\u041E\u0442\u0432\u0435\u0442\u0438\u0448\u044C \u0432\u0435\u0440\u043D\u043E \u2014 \u043E\u0447\u043A\u0438 \xD7${q6(e)}`:`\u041E\u0447\u043A\u0438 \xD7${q6(e)}`}</span></div>`}function $H(){let C=h.pending,e=D0(C.qid),t=u2[h.topics[C.face]];W("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${H7(C.face,h.topics[C.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${h.order.indexOf(C.face)+1} \xB7 \u0432\u043E\u043F\u0440\u043E\u0441 ${n3(C.face)+1} \u0438\u0437 ${Z2()}</span></div>
    ${xl(C.sp)}${vl()}
    ${C.limit?'<div class="qtime"><span class="tbar"><i></i></span><b></b></div>':""}
    ${e.img?ll(e):""}<div class="q-text">${K1(e.q)}</div>
    <div class="ans">${C.order.map((i,r)=>`<button data-i="${r}">${K1(e.a[i])}</button>`).join("")}</div>
    <div class="qhelp"><button class="qh" id="q-cut">${_1(y1.half)}<span>50 \u043D\u0430 50</span><small>${M5(i3)}</small></button>
    <button class="qh" id="q-skip">${_1(y1.skip)}<span>\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C</span><small>${M5(I0)}</small></button></div>
    <div class="after" hidden></div>`,XH(),qH(),W("#sheet").hidden=!1,e.img?BH(e,C).then(()=>{h&&h.pending===C&&fH()}):fH()}var z6=null,et=0;function t7(){z6&&(clearInterval(z6),z6=null)}function fH(){t7();let C=h&&h.pending;if(!C||!C.limit)return;C.deadline||(C.deadline=Date.now()+C.limit*1e3,t2()),et=0;let e=()=>{if((h&&h.pending)!==C){t7();return}let i=Math.max(0,C.deadline-Date.now()),r=Math.ceil(i/1e3),H=W(".qtime");H&&(H.querySelector("b").textContent=`${r} \u0441`,H.querySelector("i").style.width=(100*i/(C.limit*1e3)).toFixed(1)+"%",H.classList.toggle("low",r<=5)),r<=5&&r>0&&r!==et&&(et=r,a2("tick")),i<=0&&(t7(),Mt(-1))};e(),z6=setInterval(e,200)}var s4=0;function qH(){let C=h&&h.pending,e=W("#q-cut"),t=W("#q-skip");!e||!t||(e.disabled=!C||!!C.cut||h.tokens<i3,e.classList.toggle("used",!!(C&&C.cut)),t.disabled=!C||h.tokens<I0,t.classList.remove("armed"),s4=0,t.querySelector("span").textContent="\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C")}function XH(){let C=h.pending;!C||!C.cut||W(".ans").querySelectorAll("button").forEach(e=>{C.cut.includes(+e.dataset.i)&&(e.disabled=!0,e.classList.add("cut"))})}function YH(C){w2(h.tokens?`\u041D\u0443\u0436\u043D\u043E ${M5(C)}, \u0443 \u0442\u0435\u0431\u044F ${h.tokens}`:"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442: \u043E\u043D\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B"),a2("deny")}function Sl(){let C=h.pending;if(!(!C||C.cut)){if(h.tokens<i3)return YH(i3);C.cut=$5([0,1,2,3].filter(e=>C.order[e]!==0)).slice(0,2),h.tokens-=i3,h.lv.cuts=(h.lv.cuts||0)+1,t2(),a2("turn"),XH(),qH(),O5(!0)}}function gl(){let C=h.pending;if(!C)return;if(h.tokens<I0)return YH(I0);let e=W("#q-skip");if(!s4||Date.now()-s4>4e3){s4=Date.now(),e.classList.add("armed"),e.querySelector("span").textContent="\u0422\u043E\u0447\u043D\u043E?",a2("tap");return}s4=0,t7(),h.cells[C.key]="s",h.tokens-=I0,h.lv.skips=(h.lv.skips||0)+1,h.lastKey=C.key,h.pending=null,t2(),a2("turn"),O5(!0),lt()}function Mt(C){let e=h.pending;if(!e)return;t7();let t=C===-1;t&&(h.lv.late=(h.lv.late||0)+1);let i=D0(e.qid),r=e.order[C]===0,H=h.level*10,V=e.sp||null,n=h.run||0,L=0,a=0,o=0,M=1;h.cells[e.key]=r?"c":"w",r?(r8||(h.run=n+1,M=d4(h.run),h.lv.bestRun=Math.max(h.lv.bestRun||0,h.run)),L=Math.round(H*M*(V==="x2"?2:1)),a=V==="blitz"?2:1,h.tokens+=a,h.lv.correct++,h.lv.points+=L,h.score+=L):(h.lv.wrong++,h.run=0,V==="bomb"&&h.tokens>0&&(h.tokens--,o=1,h.lv.bombs=(h.lv.bombs||0)+1)),sl(e.qid);let s=HH(H1,{ok:r,topic:h.topics[e.face],pic:!!(i&&i.img),timer:e.limit||0,sp:V});y2(),h.lastKey=e.key,h.pending=null,t2(),a2(r?"ok":"bad");let l=W(".qhelp");l&&l.remove();let u=W(".ans");u.classList.add("done"),u.querySelectorAll("button").forEach((v,_)=>{v.disabled=!0,v.classList.remove("cut"),e.order[_]===0?v.classList.add("ok"):_===C&&v.classList.add("bad")});let x=W(".after");x.hidden=!1;let c=[];r&&V==="x2"&&c.push("x2"),r&&M>1&&c.push(`\u0441\u0435\u0440\u0438\u044F ${h.run} \u043F\u043E\u0434\u0440\u044F\u0434 \xD7${q6(M)}`);let d="";r&&c.length?d=`\u041E\u0447\u043A\u0438: ${c.join(", ")}.`:!r&&V==="bomb"&&(d=o?"\u0411\u043E\u043C\u0431\u0430: \u043C\u0438\u043D\u0443\u0441 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.":"\u0411\u043E\u043C\u0431\u0430, \u043D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043D\u0435 \u0431\u044B\u043B\u043E: \u0442\u0435\u0440\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E."),!r&&n>=3&&(d+=`${d?" ":""}\u0421\u0435\u0440\u0438\u044F \u0438\u0437 ${n} \u043F\u0440\u0435\u0440\u0432\u0430\u043B\u0430\u0441\u044C.`),x.innerHTML=`<div class="verdict ${r?"ok":"bad"}">${_1(r?y1.check:t?y1.timer:V==="bomb"?y1.bomb:y1.close)}${r?`\u0412\u0435\u0440\u043D\u043E: +${Ll(L)}, +${M5(a)}`:t?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E":"\u041D\u0435\u0432\u0435\u0440\u043D\u043E"}</div>
    ${d?`<div class="sp-note${r?"":" bad"}">${d}</div>`:""}
    ${i.e?`<div class="exp">${K1(i.e)}</div>`:""}${i.cr?`<div class="cr">${i.p&&i.p.startsWith("ol")?"":"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435: "}${K1(i.cr)}${i.src?` \xB7 <a href="${K1(i.src)}" target="_blank" rel="noopener">\u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A</a>`:""}</div>`:""}<button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button>
    ${e.qid.startsWith("my-")?"":`<button class="link rep-open" id="q-rep" data-qid="${K1(e.qid)}">${_1(y1.report)}\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?</button>`}`,x.scrollIntoView({block:"nearest",behavior:"smooth"}),O5(r),s.length&&(h.lv.nb=(h.lv.nb||[]).concat(s),t2()),f4(s)}function lt(){M8(),V7();let C=n1.cells().find(t=>t.key===h.lastKey);C&&n1.pop(C.sticker);let e=h.lastKey[0];if(n3(e)===Z2()){let t=[...Array(Z2()).keys()].filter(r=>h.cells[e+r]==="c").length,i=VH(H1,{topic:h.topics[e],clean:t===Z2()});i.length&&(y2(),h.lv.nb=(h.lv.nb||[]).concat(i),setTimeout(()=>f4(i),2500)),h.stage=null,t2(),V7(),c4()<l0()&&w2(`\u042D\u0442\u0430\u043F \xAB${u2[h.topics[e]].name}\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D: ${t} \u0438\u0437 ${Z2()}`)}n8(),O5(),c4()>=l0()&&setTimeout(dt,500)}var xH=()=>(h.lv.cuts||0)*i3+(h.lv.skips||0)*I0;function dt(){h.phase="solve",t2(),V7(),L3(),O5(),n1.mode="solve",n1.spin(900);let C=h.lv.correct;if(h.tokens<1){d2(`<div class="m-title">\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>${C?"\u0412\u0441\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0443\u0448\u043B\u0438 \u043D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0438\u0445 \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C.":"\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0442\u043E\u0436\u0435 \u043D\u0435\u0442."}</p>
      <p>${ct()}</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],...h.ch?[]:[["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",""]],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(e=>e==="free"?L8():e==="retry"?aV():h4(!1));return}QH()}function QH(){let C=h.lv.correct,e=!H1.trained&&!H1.trainAsk;e&&(H1.trainAsk=1,y2()),d2(`<div class="m-title">\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A</div><div class="m-text">
    <p>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438: \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ${C} \u0438\u0437 ${l0()-(h.lv.gifts||0)}. ${xH()?`\u041D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0443\u0448\u043B\u043E ${M5(xH())}, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${M5(h.tokens)}.`:`\u0422\u044B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B ${M5(h.tokens)}.`}</p>
    <p>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${M5(h.scramble.length)}. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</p>
    <p>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u043D\u043E \u0441\u0442\u043E\u0438\u0442 ${a0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434.</p>
    ${e?'<p class="m-note">\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0432\u043F\u0435\u0440\u0432\u044B\u0435? \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0439\u0434\u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443: \u0442\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439, \u043C\u0438\u043D\u0443\u0442\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043D\u0430 \u043D\u0435\u0451 \u043D\u0435 \u0442\u0440\u0430\u0442\u044F\u0442\u0441\u044F.</p>':""}</div>`,e?[["train","\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438","primary"],["ok","\u0421\u0440\u0430\u0437\u0443 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C",""]]:[["ok","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C","primary"]]).then(t=>{t==="train"&&pt(()=>s0(),!0)})}async function Vt(C,e,t){h.tokens-=e,h.moves.push({...C,c:e}),t2(),O5(),a2("turn"),await n1.turn(C,!0,t?420:190),tV(),h&&h.phase==="solve"&&!h.free&&h.tokens<1&&(L3(),KH())}function ct(){return`\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438 \u0431\u0435\u0437 \u0441\u0447\u0451\u0442\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C ${i8()} \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 ${bH()}.`}function KH(){d2(`<div class="m-title">\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D.</p><p>${ct()}</p>
    <p>\u041C\u043E\u0436\u043D\u043E \u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0445\u043E\u0434\u044B: \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u0440\u043D\u0451\u0442 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["back","\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0443\u0431\u0438\u043A\u0443",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(C=>C==="free"?L8():C==="end"?h4(!1):null)}function L8(){h.free=!0,t2(),L3(),O5(!0),w2("\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435.")}function JH(C){if(l5==="train"){iV(C);return}if(!(!h||h.phase!=="solve"||n1.queue.length>1)){if(n4(),h.free){Vt(C,0);return}if(h.tokens<1){KH(),a2("deny");return}Vt(C,1)}}function jH(){if(!h||h.phase!=="solve"||n1.busy)return;let C=h.moves.pop();if(!C){w2("\u041E\u0442\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E");return}h.free||(h.tokens+=1),t2(),L3(),O5(!0),a2("turn"),n1.turn({ax:C.ax,l:C.l,d:-C.d}).then(tV)}function eV(){if(!h||h.phase!=="solve"||n1.busy||h.free)return;if(h.tokens<a0){w2(`\u0414\u043B\u044F \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043D\u0443\u0436\u043D\u043E ${a0} \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430`),a2("deny");return}let C=zH();C&&(h.lv.hints++,Vt(C,a0,!0))}function tV(){!h||h.phase!=="solve"||n1.busy||n1.isSolved()&&h4(!0)}var C7=[{n:1,arrow:!0,tip:"\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043E\u0434\u043D\u0438\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u043C. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435 <b>\u0432\u0434\u043E\u043B\u044C \u0441\u0442\u0440\u0435\u043B\u043A\u0438</b>, \u0438 \u0441\u043B\u043E\u0439 \u0432\u0441\u0442\u0430\u043D\u0435\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u043E."},{n:2,arrow:!0,tip:"\u0422\u0435\u043F\u0435\u0440\u044C \u0434\u0432\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430. \u0412\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0435, \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0445\u043E\u0434\u0430 \u043E\u043D\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0439."},{n:2,arrow:!1,tip:"\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u043B\u043A\u0438. \u041D\u0430\u0439\u0434\u0438 \u0441\u043B\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0438 \u0435\u0433\u043E. \u0417\u0430\u0441\u0442\u0440\u044F\u043B \u2014 \xAB\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\xBB \u0441\u0430\u043C\u0430 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u0445\u043E\u0434."}],w1=null;function Zl(){return h&&(l5==="game"||l5==="train")?k2():H1.size===2?2:3}function pt(C,e){F2(),M8(),w1={size:Zl(),step:0,scramble:[],moves:[],back:C,inGame:!!e,hints:0,wrong:0},N0("train"),n1.autoSpin=!1,n1.setSize(w1.size),n1.mode="solve",Y6(0),requestAnimationFrame(LV)}function Y6(C){w1.step=C,w1.moves=[],w1.wrong=0,w1.solved=!1;let e=C7[C];n1.reset();for(let t of n1.stickers)n1.setLook(t,"color");n1.rotateTo(n1.baseView,300),w1.scramble=UH(e.n,w1.size),w1.mixing=!0,setTimeout(()=>{w1&&Promise.all(w1.scramble.map(t=>n1.turn(t,!0,520))).then(()=>{w1&&(w1.mixing=!1,Q6())})},450),W("#tr-step").textContent=`${C+1} \u0438\u0437 ${C7.length}`,W("#tr-dots").innerHTML=C7.map((t,i)=>`<i class="${i<C?"done":i===C?"on":""}"></i>`).join(""),Q6()}function ut(){if(!w1)return null;let C=V8([...w1.scramble,...w1.moves]),e=C[C.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}var vH=()=>V8([...w1.scramble,...w1.moves]).reduce((C,e)=>C+Math.abs(e.d),0);function Q6(){if(!w1)return;let C=C7[w1.step],e=C.tip;w1.mixing?e="\u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F.":w1.wrong&&C.arrow&&(e="\u042D\u0442\u043E\u0442 \u0441\u043B\u043E\u0439 \u043B\u0438\u0448\u043D\u0438\u0439, \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E: \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u043A\u0430\u043A \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u0443\u0442\u044C."),W("#tr-foot").innerHTML=`<div class="tip" id="tr-tip">${e}<br><small>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E.</small></div>
  <div class="tools">
    <button class="tool" id="tr-undo"${w1.moves.length&&!w1.mixing?"":" disabled"}>${_1(y1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    <button class="tool hint" id="tr-hint"${w1.mixing?" disabled":""}>${_1(y1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430</button>
    <button class="tool" id="tr-view">${_1(y1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="tr-again"${w1.mixing?" disabled":""}>${_1(y1.shuffle)}\u0417\u0430\u043D\u043E\u0432\u043E</button>
  </div>`}async function CV(C,e){let t=vH();w1.moves.push({ax:C.ax,l:C.l,d:C.d}),a2("turn"),await n1.turn(C,!0,e?420:190),w1&&(w1.wrong=vH()>t?1:0,n1.isSolved()?HV():Q6())}function iV(C){!w1||w1.mixing||w1.solved||n1.busy||(n4(),CV(C))}function yl(){if(!w1||w1.mixing||w1.solved||n1.busy)return;let C=w1.moves.pop();C&&(a2("turn"),n1.turn({ax:C.ax,l:C.l,d:-C.d}).then(()=>{w1&&(w1.wrong=0,n1.isSolved()?HV():Q6())}))}function rV(){if(!w1||w1.mixing||w1.solved||n1.busy)return;let C=ut();C&&(w1.hints++,CV(C,!0))}function HV(){w1.solved=!0,a2("stage"),n1.spin(1e3);let C=w1.step===C7.length-1;W("#tr-tip").innerHTML=C?"<b>\u0421\u043E\u0431\u0440\u0430\u043D\u043E.</b>":"<b>\u0421\u043E\u0431\u0440\u0430\u043D\u043E.</b> \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435.",setTimeout(()=>{if(!w1)return;if(!C){Y6(w1.step+1);return}H1.trained=1,y2();let e=w1.inGame;d2(`<div class="m-title">\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430</div><div class="m-text">
      <p>\u0412 \u0438\u0433\u0440\u0435 \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0442\u0430\u043A \u0436\u0435: \u043F\u0440\u043E\u0432\u0451\u043B \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F.</p>
      <p>\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043E\u0434\u043D\u0430: \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439. \u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0442\u043E\u0438\u0442 ${a0}, \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0445\u043E\u0434 \u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u0441\u043B\u043E\u0439 \u0432\u044B\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u043E\u043C \u043A\u0440\u0443\u0442\u0438.</p></div>`,e?[["go","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A","primary"],["again","\u0415\u0449\u0451 \u0440\u0430\u0437",""]]:[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"],["again","\u0415\u0449\u0451 \u0440\u0430\u0437",""]]).then(t=>{t==="again"?Y6(0):At()})},1100)}function At(){if(!w1)return;let C=w1.back;w1=null,nV(),F2(),n1.mode="view",C()}var VV=()=>W("#guide");function nV(){let C=VV();C&&(C.style.display="none")}function LV(C){if(!w1||l5!=="train"){nV();return}let e=VV(),r=(C7[w1.step].arrow||w1.showArrow)&&!w1.mixing&&!w1.solved&&!n1.busy&&!n1.tweens.length&&W("#modal").hidden?n1.guide(ut()):null;if(!r)e.style.display="none";else{e.style.display="block";let H=n1.canvas.getBoundingClientRect();e.setAttribute("viewBox",`0 0 ${H.width} ${H.height}`);let V=Math.max(6,r.cell*.17),n=r.x1-r.x0,L=r.y1-r.y0,a=Math.hypot(n,L),o=n/a,M=L/a,s=r.x1-o*V*2.4,l=r.y1-M*V*2.4,u=-M*V*1.9,x=o*V*1.9;for(let f of["#g-line","#g-line2"])W(f,e).setAttribute("d",`M${r.x0},${r.y0} L${s},${l}`);W("#g-line",e).setAttribute("stroke-width",V+5),W("#g-line2",e).setAttribute("stroke-width",V),W("#g-head",e).setAttribute("d",`M${r.x1},${r.y1} L${s+u},${l+x} L${s-u},${l-x} Z`);let c=C%1500/1500,d=Math.min(1,c/.75),v=1-Math.pow(1-d,2),_=W("#g-finger",e);_.setAttribute("cx",r.x0+n*v*.85),_.setAttribute("cy",r.y0+L*v*.85),_.setAttribute("r",r.cell*.2),_.setAttribute("opacity",c<.75?.85:.85*(1-(c-.75)/.25))}requestAnimationFrame(LV)}var mt=C=>l0()-(C&&C.gifts||0),SH=(C,e=l0())=>Math.ceil(e*(C===3?49:38)/54);function _l(C){let e=mt(C);return C.solved?C.correct>=SH(3,e)?3:C.correct>=SH(2,e)?2:1:0}function h4(C){let e=h.level,t={correct:h.lv.correct,points:h.lv.points,solved:C,hints:h.lv.hints,free:!!h.free,cuts:h.lv.cuts||0,skips:h.lv.skips||0,gifts:h.lv.gifts||0,bombs:h.lv.bombs||0,bestRun:h.lv.bestRun||0,bonus:C?h.free?i8():bH():0,left:C&&!h.free?h.tokens:0,leftPts:C&&!h.free?h.tokens*5*e:0,time:h.msOk?Math.round((h.ms||0)/1e3):-1};t.total=t.points+t.bonus+t.leftPts,t.stars=_l(t);let i=e===3&&[1,2].every(H=>h.results[H]&&h.results[H].solved)&&C,r=nH(H1,{r:t,level:e,size:k2(),total:mt(t),all3:i});t.nb=(h.lv.nb||[]).concat(r.badges),t.ns=r.skins,y2(),h.ch?setTimeout(()=>f4(r.badges),2e3):A4.length=0,h.score+=t.bonus+t.leftPts,h.results[e]=t,h.phase="result",t2(),O5(),L3(),n1.mode="view",C?(a2("win"),n1.spin(1400),setTimeout(r3,1500)):r3()}function r3(){if(h.ch){vV();return}let C=h.level,e=h.results[C],t=[1,2,3].map(V=>_1(V<=e.stars?y1.star:y1.starOff,"ic"+(V<=e.stars?"":" off"))).join(""),i=[["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${e.correct} \u0438\u0437 ${mt(e)}`],["\u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B",e.points],...e.bestRun>=3?[["\u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F",`${e.bestRun} \u043F\u043E\u0434\u0440\u044F\u0434`]]:[],...e.gifts?[["\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 (\u043A\u043B\u0435\u0442\u043A\u0438 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430)",e.gifts]]:[],...e.bombs?[["\u0411\u043E\u043C\u0431\u044B: \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432",e.bombs]]:[],...e.cuts?[["\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \xAB50 \u043D\u0430 50\xBB",e.cuts]]:[],...e.skips?[["\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",e.skips]]:[],...e.solved&&e.free?[["\u041F\u0440\u0438\u0437\u043E\u0432\u044B\u0435: \u0441\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u043C",e.bonus]]:[],...e.solved&&!e.free?[["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A",e.bonus],[`\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${M5(e.left)}`,e.leftPts]]:[],...e.time>=0?[["\u0412\u0440\u0435\u043C\u044F \u0443\u0440\u043E\u0432\u043D\u044F",vt(e.time)]]:[]],r=`<div class="m-title">${e.solved?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C} \u043F\u0440\u043E\u0439\u0434\u0435\u043D`:"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="stars">${t}</div>
    <div class="rows">${i.map(([V,n])=>`<div><span>${V}</span><b>${n}</b></div>`).join("")}
    <div class="tot"><span>\u0412\u0441\u0435\u0433\u043E \u043E\u0447\u043A\u043E\u0432</span><b>${h.score}</b></div></div>${wl(e)}`,H=[];C<3?e.solved?H.push(["next","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]):(H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["next","\u0414\u0430\u043B\u044C\u0448\u0435 \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430",""])):(e.solved||H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["final","\u0418\u0442\u043E\u0433\u0438 \u0438\u0433\u0440\u044B",e.solved?"primary":""])),H.push(["duel",_1(y1.duel)+"\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443",""]),H.push(["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]),d2(r,H).then(V=>{V==="duel"?fV():V==="next"?bl():V==="retry"?aV():V==="final"?Tl():V5()})}function bl(){let C=h.topics;h.level++,h.phase="topics",h.topics=m4(h.level,C),t2(),L0()}function aV(){h.score-=h.lv.points+(h.results[h.level]&&h.results[h.level].bonus+h.results[h.level].leftPts||0),delete h.results[h.level],h.phase="topics",t2(),L0()}function Tl(){let C=h.score,e=k2()===2?"best2":"best",t=C>(H1[e]||0);t&&(H1[e]=C),H1.games++,y2();let i=[1,2,3].filter(r=>h.results[r]).map(r=>{let H=h.results[r];return`<div><span>${M0[r].name}${H.solved?"":", \u043A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</span><b>${H.total}</b></div>`}).join("");h=null,t2(),d2(`<div class="m-title">\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430</div><div class="stars">${_1(y1.trophy)}</div>
    <div class="rows">${i}<div class="tot"><span>\u0418\u0442\u043E\u0433\u043E</span><b>${C}</b></div></div>
    <div class="m-text" style="text-align:center">${t?"\u042D\u0442\u043E \u043D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434.":`\u0420\u0435\u043A\u043E\u0440\u0434${e==="best2"?" \u043D\u0430 2\xD72":""}: ${H1[e]}.`}</div>`,[["new","\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(r=>r==="new"?U6():V5())}var oV=C=>C?C.split("-").reverse().join("."):"";function wl(C){let e=H1.ach,t=oH(H1),i=[];return i.push(`<div class="ach-st">${_1(y1.star)}<span>\u0417\u0432\u0451\u0437\u0434 \u0432\u0441\u0435\u0433\u043E: <b>${e.stars}</b>${t?`. \u0414\u043E \u0432\u0438\u0434\u0430 \xAB${t.name}\xBB \u0435\u0449\u0451 ${t.stars-e.stars}`:""}</span></div>`),C.ns&&C.ns.length&&i.push(`<div class="ach-new">${_1(y1.palette)}<span>${C.ns.length>1?"\u041E\u0442\u043A\u0440\u044B\u0442\u044B \u043D\u043E\u0432\u044B\u0435 \u0432\u0438\u0434\u044B \u043A\u0443\u0431\u0438\u043A\u0430":"\u041E\u0442\u043A\u0440\u044B\u0442 \u043D\u043E\u0432\u044B\u0439 \u0432\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430"}: ${C.ns.map(r=>`\xAB${e3[r].name}\xBB`).join(", ")}. \u0412\u044B\u0431\u0440\u0430\u0442\u044C: \u043C\u0435\u043D\u044E, \xAB\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\xBB, \xAB\u0412\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430\xBB.</span></div>`),C.nb&&C.nb.length&&i.push(`<div class="ach-bl"><small>${C.nb.length>1?"\u041D\u043E\u0432\u044B\u0435 \u0437\u043D\u0430\u0447\u043A\u0438":"\u041D\u043E\u0432\u044B\u0439 \u0437\u043D\u0430\u0447\u043E\u043A"}</small>${C.nb.map(r=>`<span class="bchip">${_1(B6[r].icon)}${B6[r].name}</span>`).join("")}</div>`),`<div class="ach-res">${i.join("")}</div>`}var V0=C=>Math.round(C[1]*100/Math.max(1,C[0]));function Ol(){let C=H1.ach,e=C.t,t=r0.filter(L=>C.got[L.id]).length,i=[["\u041E\u0442\u0432\u0435\u0442\u043E\u0432",e.n],["\u0412\u0435\u0440\u043D\u044B\u0445",e.n?V0([e.n,e.ok])+"%":"\u2014"],["\u0417\u0432\u0451\u0437\u0434",C.stars],["\u0421\u043E\u0431\u0440\u0430\u043D\u043E \u043A\u0443\u0431\u0438\u043A\u043E\u0432",e.solved]].map(([L,a])=>`<div class="tile"><b>${a}</b><small>${L}</small></div>`).join("");if(!e.n)return`<div class="tiles">${i}</div><p class="lead">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E. \u0421\u044B\u0433\u0440\u0430\u0439 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u044D\u0442\u0430\u043F, \u0438 \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0446\u0438\u0444\u0440\u044B: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432, \u043A\u0430\u043A\u0438\u0435 \u0442\u0435\u043C\u044B \u0443\u0434\u0430\u044E\u0442\u0441\u044F \u043B\u0443\u0447\u0448\u0435, \u0430 \u043A\u0430\u043A\u0438\u0435 \u0445\u0443\u0436\u0435.</p>`;let r=Object.entries(C.topics).filter(([L,a])=>a[0]&&(u2[L]||L==="my")).sort((L,a)=>V0(a[1])-V0(L[1])||a[1][0]-L[1][0]),H=r.filter(([L,a])=>a[0]>=10&&L!=="my"),V=[["\u041B\u0443\u0447\u0448\u0430\u044F \u0441\u0435\u0440\u0438\u044F",`${e.bestRun} ${q5(e.bestRun,"\u0432\u0435\u0440\u043D\u044B\u0439","\u0432\u0435\u0440\u043D\u044B\u0445","\u0432\u0435\u0440\u043D\u044B\u0445")} \u043F\u043E\u0434\u0440\u044F\u0434`],["\u0414\u043D\u0435\u0439 \u043F\u043E\u0434\u0440\u044F\u0434",`${e.days}${e.bestDays>e.days?`, \u0440\u0435\u043A\u043E\u0440\u0434 ${e.bestDays}`:""}`],["\u0423\u0440\u043E\u0432\u043D\u0435\u0439 \u0441\u044B\u0433\u0440\u0430\u043D\u043E",e.levels],["\u0417\u043D\u0430\u0447\u043A\u043E\u0432",`${t} \u0438\u0437 ${r0.length}`],...H.length>=2?[["\u041B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E",`${i7(H[0][0])}, ${V0(H[0][1])}%`],["\u0422\u0440\u0443\u0434\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E",`${i7(H[H.length-1][0])}, ${V0(H[H.length-1][1])}%`]]:[]].map(([L,a])=>`<div><span>${L}</span><b>${a}</b></div>`).join(""),n=r.map(([L,a])=>`<div class="tbr"><div class="tbr-h"><span>${_1((u2[L]||u2.my).icon)}${K1(i7(L))}</span><b>${V0(a)}%</b></div>
    <div class="tbr-b"><i style="width:${V0(a)}%;background:${V0(a)>=80?"var(--ok)":V0(a)>=50?"var(--accent)":"var(--bad)"}"></i></div><small>\u0432\u0435\u0440\u043D\u044B\u0445 ${a[1]} \u0438\u0437 ${a[0]}</small></div>`).join("");return`<div class="tiles">${i}</div><div class="rows slines">${V}</div>
    <h3 class="ach-h">\u041F\u043E \u0442\u0435\u043C\u0430\u043C</h3>${H.length<2?'<p class="m-note">\u041B\u0443\u0447\u0448\u0430\u044F \u0438 \u0441\u0430\u043C\u0430\u044F \u0442\u0440\u0443\u0434\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0432 \u0434\u0432\u0443\u0445 \u0442\u0435\u043C\u0430\u0445 \u043D\u0430\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0445\u043E\u0442\u044F \u0431\u044B \u043F\u043E 10 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.</p>':""}${n}
    <p class="m-note">\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0432\u0435\u0434\u0451\u0442\u0441\u044F \u0441 ${oV(e.since)}.</p>`}function El(){let C=H1.ach;return`<p class="lead">\u0417\u043D\u0430\u0447\u043A\u043E\u0432: ${r0.filter(t=>C.got[t.id]).length} \u0438\u0437 ${r0.length}. \u041E\u043D\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E: \u0433\u0440\u0430\u043D\u044C \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A, \u0441\u0431\u043E\u0440\u043A\u0443 \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A, \u0441\u0435\u0440\u0438\u044E \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.</p><div class="bgrid">${r0.map(t=>{let i=C.got[t.id],r=!i&&t.prog?t.prog(H1):null;return`<div class="badge${i?" got":""}"><span class="bic">${_1(t.icon)}</span><b>${t.name}</b><small>${t.about}</small>${i?`<em>\u043F\u043E\u043B\u0443\u0447\u0435\u043D ${oV(i)}</em>`:r?`<span class="bpr"><i style="width:${Math.min(100,Math.round(r[0]*100/r[1]))}%"></i></span><em>${Math.min(r[0],r[1])} \u0438\u0437 ${r[1]}</em>`:""}</div>`}).join("")}</div>`}var Rl=[["stats","\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"],["badges","\u0417\u043D\u0430\u0447\u043A\u0438"],["skins","\u0412\u0438\u0434 \u043A\u0443\u0431\u0438\u043A\u0430"]];function sV(C){return Rl.map(([e,t])=>`<button data-tab="${e}" class="${e===C?"on":""}">${t}</button>`).join("")}function gH(C="stats"){if(F2(),C==="skins"){MV();return}W("#ach-tabs").innerHTML=sV(C),W("#ach-body").innerHTML=C==="badges"?El():Ol(),W("#ach-body").scrollTop=0,N0("ach")}var M4=null;function MV(){if(W("#sk-tabs").innerHTML=sV("skins"),l5!=="skins"){M4=H1.skin||"classic",n1.setSize(H1.size===2?2:3),n1.reset(),n1.mode="view",n1.autoSpin=!0;for(let t of n1.stickers)n1.setLook(t,"color")}let C=H1.ach,e=H1.skin||"classic";W("#sk-lead").textContent=`\u0417\u0432\u0451\u0437\u0434: ${C.stars}. \u041D\u043E\u0432\u044B\u0435 \u0432\u0438\u0434\u044B \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u0437\u0432\u0451\u0437\u0434\u044B, \u0438\u0445 \u0434\u0430\u044E\u0442 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0433\u0434\u0435 \u0441\u043E\u0431\u0440\u0430\u043D \u043A\u0443\u0431\u0438\u043A. \u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0438\u0434 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u0438\u0442\u044C.`,W("#sk-list").innerHTML=L4.map(t=>{let i=I6(H1,t.id);return`<button class="skin${t.id===e?" on":""}${t.id===M4?" pv":""}${i?"":" lock"}" data-skin="${t.id}">
      <span class="skpv" style="background:linear-gradient(135deg, ${t.pv[0]} 0 48%, ${t.pv[1]} 52%)"></span>
      <span class="sktx"><b>${t.name}</b><small>${t.about}</small></span>
      <em>${t.id===e?_1(y1.check)+"\u0432\u044B\u0431\u0440\u0430\u043D":i?"\u0432\u044B\u0431\u0440\u0430\u0442\u044C":_1(y1.lock)+t.stars}</em></button>`}).join(""),n1.setSkin(M4),dV(M4==="newyear"),N0("skins")}function Pl(C){if(M4=C,I6(H1,C))H1.skin=C,y2();else{let e=e3[C].stars-H1.ach.stars;w2(`\xAB${e3[C].name}\xBB \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0437\u0430 ${e3[C].stars} \u0437\u0432\u0451\u0437\u0434, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${e}. \u041F\u043E\u043A\u0430 \u044D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440\u043A\u0430.`)}a2("tap"),MV()}function lV(){let C=I6(H1,H1.skin)?H1.skin:"classic";n1.setSkin(C),dV(C==="newyear")}var tt=!1;function dV(C){if(C===tt)return;tt=C;let e=W("#snow");if(e&&e.remove(),!C)return;let t=document.createElement("canvas");t.id="snow",document.body.prepend(t);let i=t.getContext("2d"),r=Math.min(2,window.devicePixelRatio||1),H=0,V=0,n=0,L=()=>{H=window.innerWidth,V=window.innerHeight,t.width=H*r,t.height=V*r},a=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),r:.8+Math.random()*2.2,v:.25+Math.random()*.6,w:Math.random()*6.3})),o=M=>{if(!(!tt||!t.isConnected)){if(M-n>33){let s=n?Math.min(100,M-n)/1e3:0;n=M,t.width!==Math.round(window.innerWidth*r)&&L(),i.setTransform(r,0,0,r,0,0),i.clearRect(0,0,H,V),i.fillStyle="rgba(255,255,255,0.75)";for(let l of a)l.y+=l.v*s*60/V*1.2,l.w+=s*.8,l.y>1.02&&(l.y=-.02,l.x=Math.random()),i.globalAlpha=.35+l.r/5,i.beginPath(),i.arc((l.x+Math.sin(l.w)*.015)*H,l.y*V,l.r,0,6.29),i.fill();i.globalAlpha=1}requestAnimationFrame(o)}};L(),requestAnimationFrame(o)}var cV="menu",Bl={0:"\u043B\u044E\u0431\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",1:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 1",2:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 2",3:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 3"};function p4(C){C&&(cV=C),F2(),a8();let e=[1,2,3].map(t=>o4(t).length);W("#my-lead").innerHTML=X2.list.length?`\u0413\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C, \u0435\u0441\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 (\u0434\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4). \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445.<br>
      <span class="mycount">${[1,2,3].map((t,i)=>`<b class="${e[i]>=9?"ok":""}">\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${t}: ${e[i]}${e[i]<9?` (\u0435\u0449\u0451 ${9-e[i]})`:""}</b>`).join("")}</span>`:"\u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u0438\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0433\u0440\u0430\u043D\u0435\u0439 \u043A\u0443\u0431\u0438\u043A\u0430. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0435\u0442\u043E\u043A \u043D\u0430 \u0433\u0440\u0430\u043D\u0438. \u0414\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4.<br><br>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0437\u0434\u0435\u0441\u044C \u0438\u043B\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0432 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u043C \u0444\u0430\u0439\u043B\u0435 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\xBB.",W("#my-list").innerHTML=X2.list.map((t,i)=>`<button class="myq" data-id="${t.id}">
    <span class="myq-n">${i+1}</span><span class="myq-t"><b>${K1(t.q)}</b><small><span class="okc">${K1(t.a[0])}</span> \xB7 ${Bl[t.lv||0]}</small></span></button>`).join(""),W("#my-add").innerHTML=_1(y1.plus)+"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",W("#my-save").innerHTML=_1(y1.save)+"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",W("#my-load").innerHTML=_1(y1.load)+"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",W("#my-save").disabled=!X2.list.length,N0("my")}function Il(){cV==="topics"&&h&&h.phase==="topics"?(h.topics=m4(h.level,h.topics),t2(),L0()):V5()}var l4=0,K6=0;function ZH(C){let e=C?k6(C):null;l4=e?e.id:0,K6=e&&e.lv||0;let t=(i,r)=>`<input id="e-a${i}" maxlength="${G5.a}" autocomplete="off" placeholder="${r}" value="${e?K1(e.a[i]):""}">`;W("#ecard").innerHTML=`<div class="m-title">${e?"\u0412\u043E\u043F\u0440\u043E\u0441":"\u041D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"}</div>
    <label class="fl"><span>\u0412\u043E\u043F\u0440\u043E\u0441</span><textarea id="e-q" rows="3" maxlength="${G5.q}">${e?K1(e.q):""}</textarea></label>
    <label class="fl okf"><span>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442</span>${t(0,"")}</label>
    <div class="fl badf"><span>\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B</span>${t(1,"\u043F\u0435\u0440\u0432\u044B\u0439")}${t(2,"\u0432\u0442\u043E\u0440\u043E\u0439")}${t(3,"\u0442\u0440\u0435\u0442\u0438\u0439")}</div>
    <label class="fl"><span>\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C</span><textarea id="e-e" rows="2" maxlength="${G5.e}">${e?K1(e.e||""):""}</textarea></label>
    <div class="fl"><span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C</span><div class="seg">${[0,1,2,3].map(i=>`<button data-elv="${i}" class="${i===K6?"on":""}">${i||"\u041B\u044E\u0431\u043E\u0439"}</button>`).join("")}</div></div>
    <div class="e-err" id="e-err"></div>
    <div class="m-btns"><button class="btn primary" id="e-ok">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
    ${e?`<button class="btn ghost danger" id="e-del">${_1(y1.del)}\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441</button>`:""}
    <button class="btn ghost" id="e-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button></div>`,W("#edit").hidden=!1,W("#ecard").scrollTop=0}function a8(){W("#edit").hidden=!0}function Fl(){let C=F6({q:W("#e-q").value,a:[0,1,2,3].map(i=>W("#e-a"+i).value),e:W("#e-e").value,lv:K6}),e=je(C,l4);if(e){W("#e-err").textContent=e,a2("deny");return}if(!MH(C,l4)){W("#e-err").textContent="\u041F\u0430\u043C\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0430, \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F.";return}let t=!l4;if(a8(),p4(),t){w2(`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D. \u0412\u0441\u0435\u0433\u043E: ${X2.list.length}`);let i=W("#my-list").lastElementChild;i&&i.scrollIntoView({block:"nearest"})}}function kl(){let C=l4;a8(),d2('<div class="m-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441?</div>',[["yes","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{F2(),e==="yes"&&(lH(C),w2("\u0412\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0430\u043B\u0451\u043D")),p4()})}async function Dl(){let C="\u041A\u0443\u0431\u0438\u043A - \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.txt",e=new File([dH()],C,{type:"text/plain"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i&&i.name==="AbortError")return}let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=C,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},2e3)}async function Nl(C){if(!C)return;let e;try{e=pH(cH(await uH(C)))}catch{e={added:0,dup:0,errors:["\u0424\u0430\u0439\u043B \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F."]}}let t=[`<p>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: <b>${e.added}</b>.${e.dup?` \u0423\u0436\u0435 \u0431\u044B\u043B\u0438, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B: ${e.dup}.`:""}</p>`];!e.added&&!e.dup&&!e.errors.length&&t.push("<p>\u0412 \u0444\u0430\u0439\u043B\u0435 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0431\u0440\u0430\u0437\u0435\u0446: \u0432\u043E\u043F\u0440\u043E\u0441, \u0441\u0442\u0440\u043E\u043A\u0430 \xAB+ \u0432\u0435\u0440\u043D\u044B\u0439\xBB, \u0442\u0440\u0438 \u0441\u0442\u0440\u043E\u043A\u0438 \xAB- \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439\xBB.</p>"),e.errors.length&&t.push(`<p>\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:</p><ul class="errs">${e.errors.slice(0,12).map(i=>`<li>${K1(i)}</li>`).join("")}${e.errors.length>12?`<li>\u0438 \u0435\u0449\u0451 ${e.errors.length-12}</li>`:""}</ul>`),p4(),d2(`<div class="m-title">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</div><div class="m-text">${t.join("")}</div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(F2)}var Ul=["\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442","\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E","\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0438","\u0423\u0441\u0442\u0430\u0440\u0435\u043B\u043E","\u041E\u043F\u0435\u0447\u0430\u0442\u043A\u0430","\u0414\u0440\u0443\u0433\u043E\u0435"],J6="",ht="";function zl(C){let e=W(".after");ht=e.innerHTML,J6="",e.innerHTML=`<div class="rep" data-qid="${K1(C)}"><div class="rep-t">\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C?</div>
    <div class="rep-r">${Ul.map(t=>`<button data-rr="${K1(t)}">${t}</button>`).join("")}</div>
    <label class="fl"><textarea id="rep-note" rows="2" maxlength="300" placeholder="\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0435\u0448\u044C (\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C)"></textarea></label>
    <div class="e-err" id="rep-err"></div>
    <div class="two-sm"><button class="btn ghost" id="rep-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button><button class="btn primary" id="rep-send">${_1(y1.share)}\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div></div>`,e.scrollIntoView({block:"nearest",behavior:"smooth"})}function ft(C){let e=`\u041A\u0443\u0431\u0438\u043A ${F0}, \u0431\u0430\u0437\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u2116${X5(h2)}`,t=(i,r)=>[C.length>1?`${r+1}.`:"",`\u0422\u0435\u043C\u0430: ${u2[i.t]&&u2[i.t].name||i.t}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${i.l}`,`\u0412\u043E\u043F\u0440\u043E\u0441: ${i.q}`,i.p?`\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430: ${i.p}`:"",`\u0412\u0435\u0440\u043D\u044B\u0439 \u043F\u043E \u0438\u0433\u0440\u0435: ${i.a[0]}`,`\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B: ${i.a.slice(1).join(" / ")}`,i.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435: ${i.e}`:"",`\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A: ${i.r}`,i.n?`\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ${i.n}`:""].filter(Boolean).join(`
`);return`${e}
${C.length>1?`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${C.length}`:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435"}

${C.map(t).join(`

`)}`}function xt(C,e){return navigator.share?navigator.share({title:C,text:e}).then(()=>"sent",t=>t&&t.name==="AbortError"?"cancel":yH(e)):yH(e)}function yH(C){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(C).then(()=>"copied",()=>"kept"):Promise.resolve("kept")}function Gl(){let C=W(".rep");if(!J6){W("#rep-err").textContent="\u0412\u044B\u0431\u0435\u0440\u0438, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A",a2("deny");return}let e=C.dataset.qid,t=D0(e);if(!t)return;let[i,r]=e.split("-"),H={d:new Date().toISOString().slice(0,10),t:i,l:+r,q:t.q,...t.p?{p:t.p}:{},a:t.a.slice(),e:t.e||"",r:J6,n:W("#rep-note").value.trim().slice(0,300),rev:X5(h2)};H1.reports=(H1.reports||[]).filter(L=>C3(L)!==C3(H)).concat(H).slice(-200),H1.bad=H1.bad||[],H1.bad.includes(C3(H))||H1.bad.push(C3(H)),y2();let V=W(".after");V.innerHTML=ht;let n=W("#q-rep");n&&(n.outerHTML=`<div class="rep-ok">${_1(y1.check)}\u0421\u043F\u0430\u0441\u0438\u0431\u043E. \u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430, \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F.</div>`),a2("tap"),xt("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435",ft([H])).then(L=>{L==="copied"?w2("\u0422\u0435\u043A\u0441\u0442 \u0436\u0430\u043B\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"):L!=="sent"&&w2("\u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430: \u043C\u0435\u043D\u044E \u2192 \xAB\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445\xBB")})}function Wl(){W(".after").innerHTML=ht}function $l(){let C=H1.reports||[];if(!C.length)return;let e=C.slice().reverse().map(t=>`<li><b>${K1(t.q)}</b><small>${K1(u2[t.t]&&u2[t.t].name||t.t)}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.l} \xB7 ${K1(t.r)}${t.n?" \xB7 "+K1(t.n):""}</small></li>`).join("");d2(`<div class="m-title">\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${C.length}</div><div class="m-text">
    <p>\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u0433\u0440\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0434\u0430\u0451\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B, \u043E\u043D \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442 \u0438\u0445 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.</p>
    <ul class="replist">${e}</ul></div>`,[["send",_1(y1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435","primary"],["clear","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A","ghost danger"],["ok","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(t=>{F2(),t==="send"?xt("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445",ft(C)).then(i=>{i==="copied"&&w2("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")}):t==="clear"&&d2('<div class="m-title">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A?</div><div class="m-text"><p>\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C\u0441\u044F, \u043F\u043E\u043A\u0430 \u0438\u0445 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u044F\u0442.</p></div>',[["yes","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(i=>{F2(),i==="yes"&&(H1.reports=[],y2(),V5())})})}var n7="kubik.chal.v1",j6=C=>{let e=new TextEncoder().encode(C),t="";for(let i of e)t+=String.fromCharCode(i);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},ql=C=>new TextDecoder().decode(Uint8Array.from(atob(C.replace(/-/g,"+").replace(/_/g,"/")),e=>e.charCodeAt(0)));function nt(C){let e=C3(C),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return((t>>>0)%46656).toString(36).padStart(3,"0")}var vt=C=>{if(!(C>=0))return"\u2014";let e=Math.floor(C/3600),t=Math.floor(C/60)%60,i=C%60;return(e?`${e}:${String(t).padStart(2,"0")}`:`${t}`)+":"+String(i).padStart(2,"0")},o8=()=>H1.duels=H1.duels||[],St=()=>location.origin+location.pathname.replace(/index\.html$/,"")+"?v="+F0,i7=C=>u2[C]?u2[C].name:C,pV=C=>C===1?"\u0441\u043E\u0431\u0440\u0430\u043D":C===2?"\u0441\u043E\u0431\u0440\u0430\u043D \u0441\u0430\u043C":"\u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D",t3=C=>Number.isFinite(+C)?Math.round(+C):0;function uV(C,e){return{n:C,p:e.total,c:e.correct,o:e.solved?e.free?2:1:0,k:e.left||0,h:e.hints||0,x:e.cuts||0,y:e.skips||0,w:e.time>=0?e.time:-1}}function _H(C){return!C||typeof C!="object"?null:{n:String(C.n||"\u0414\u0440\u0443\u0433").slice(0,20),p:t3(C.p),c:t3(C.c),o:[0,1,2].includes(+C.o)?+C.o:0,k:t3(C.k),h:t3(C.h),x:t3(C.x),y:t3(C.y),w:C.w>=0?t3(C.w):-1}}function gt(C){let e;try{e=JSON.parse(ql(C))}catch{return null}if(!e||e.v!==1||typeof e.id!="string"||!/^[a-z0-9]{4,12}$/.test(e.id)||!M0[e.l]||![2,3].includes(e.s))return null;let t=String(e.t||"").split(","),i=String(e.tm||"").split(",").map(n=>Ct.includes(+n)?+n:0),r=String(e.q||"").split(",");if(t.length!==6||i.length!==6||r.length!==6||!/^([xyz][+-][+-]){1,30}$/.test(e.m||""))return null;let H=_H(e.a);if(!H)return null;e.a=H,e.b&&(e.b=_H(e.b));let V=nl(e.sp||"",e.s);return V?{raw:e,topics:t,timers:i,faces:r,sp:V}:null}function Xl(C){return C.map(e=>e.ax+(e.l>0?"+":"-")+(e.d>0?"+":"-")).join("")}function Yl(C,e){let t=e===2?.5:1;return(C.match(/.../g)||[]).map(i=>({ax:i[0],l:i[1]==="+"?t:-t,d:i[2]==="+"?1:-1}))}function Lt(C){let e=C.raw.s*C.raw.s,t={},i=0,r=!1;return g2.forEach((H,V)=>{let n=C.topics[V],L=h2[n]&&h2[n][C.raw.l]||[],a=C.faces[V].match(/.{5}/g)||[];if(a.length!==e||n==="my"){r=!0;return}let o=a.map(l=>{let u=parseInt(l.slice(0,2),36),x=l.slice(2);if(L[u]&&nt(L[u])===x)return u;let c=L.findIndex(d=>nt(d)===x);return c<0&&i++,c}),M=new Set(o.filter(l=>l>=0)),s=$5(L.map((l,u)=>u).filter(l=>!M.has(l)));if(o=o.map(l=>l>=0?l:s.shift()),o.some(l=>l===void 0)){r=!0;return}t[H]=o.map(l=>`${n}-${C.raw.l}-${l}`)}),{qs:t,miss:i,broken:r}}async function Ql(){try{let e=await(await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"})).json();if(X6(e)&&k0(e._meta.app)<=k0(F0)&&X5(e)>X5(h2))return ot(e),await kH(e),!0}catch{}return!1}function Zt(C,e){let t=o8(),i=t.find(r=>r.id===C.id);if(!i){let r={...C};delete r.b,i={id:C.id,at:new Date().toISOString().slice(0,10),mine:!!e,raw:r,me:null,others:[]},t.push(i),t.length>30&&t.splice(0,t.length-30)}return i}function AV(C,e){let t=C.others.findIndex(i=>i.n===e.n);t>=0?C.others[t]=e:C.others.push(e)}var yt=C=>[{...C.raw.a,me:C.mine},...C.me&&!C.mine?[{...C.me,me:!0}]:[],...C.others.map(e=>({...e,me:!1}))];function Kl(C){let e=t=>t.w>=0?t.w:1e9;return C.slice().sort((t,i)=>i.p-t.p||(i.o?1:0)-(t.o?1:0)||e(t)-e(i))}function mV(C){if(C.length<2)return"\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B \u043D\u0430 \u0432\u044B\u0437\u043E\u0432.";let e=Kl(C),[t,i]=e;if(t.p===i.p&&!!t.o==!!i.o&&t.w===i.w)return`\u041D\u0438\u0447\u044C\u044F: \u043F\u043E ${t.p} \u043E\u0447\u043A\u043E\u0432`;let r=t.p!==i.p?`${t.p} \u043E\u0447\u043A\u043E\u0432 \u043F\u0440\u043E\u0442\u0438\u0432 ${i.p}`:!!t.o!=!!i.o?"\u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u0440\u043E\u0432\u043D\u0443, \u043D\u043E \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043D":"\u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u0440\u043E\u0432\u043D\u0443, \u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435";return C.length>2?`\u041F\u0435\u0440\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: ${t.me?"\u0442\u044B":K1(t.n)} (${r.replace(` \u043F\u0440\u043E\u0442\u0438\u0432 ${i.p}`,"")})`:t.me?`\u041F\u043E\u0431\u0435\u0434\u0430 \u0437\u0430 \u0442\u043E\u0431\u043E\u0439: ${r}`:`\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u2014 ${K1(t.n)}: ${r}`}function hV(C){let e=6*C.raw.s*C.raw.s,t=yt(C),i=t.slice(0,4),r=[["\u041E\u0447\u043A\u0438",n=>n.p,n=>n.p,1],["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",n=>`${n.c} \u0438\u0437 ${e}`,n=>n.c,1],["\u041A\u0443\u0431\u0438\u043A",n=>pV(n.o),n=>n.o?1:0,1],["\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432",n=>n.o===1?n.k:"\u2014",n=>n.o===1?n.k:-1,1],["\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435",n=>n.h,n=>n.h,-1],["\xAB50 \u043D\u0430 50\xBB / \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438",n=>`${n.x} / ${n.y}`,null,0],["\u0412\u0440\u0435\u043C\u044F",n=>vt(n.w),n=>n.w>=0?n.w:null,-1]],H=`<tr><th></th>${i.map(n=>`<th class="${n.me?"me":""}">${n.me?"\u0422\u044B":K1(n.n)}</th>`).join("")}</tr>`,V=r.map(([n,L,a,o])=>{let M=null;if(a&&o&&i.length>1){let s=i.map(a).filter(u=>u!==null),l=o>0?Math.max(...s):Math.min(...s);s.length>1&&s.some(u=>u!==l)&&(M=l)}return`<tr><td>${n}</td>${i.map(s=>`<td class="${M!==null&&a(s)===M?"best":""}">${K1(L(s))}</td>`).join("")}</tr>`}).join("");return`<table class="duel">${H}${V}</table>${t.length>4?`<p class="m-note">\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0438\u0433\u0440\u043E\u043A\u0430 \u0438\u0437 ${t.length}.</p>`:""}`}function L7(C){return`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C.l} \xB7 ${M0[C.l].name}, \u043A\u0443\u0431\u0438\u043A ${o0[C.s].name}`}function Jl(C){return`<div class="dtopics">${g2.map((e,t)=>`<span>${u2[C.topics[t]]?H7(e,C.topics[t]):H7(e)}${K1(i7(C.topics[t]))}${C.timers[t]?` <small>${C.timers[t]} \u0441</small>`:""}</span>`).join("")}</div>`}function u4(C,e){return`${C.p} \u043E\u0447\u043A\u043E\u0432, \u0432\u0435\u0440\u043D\u044B\u0445 ${C.c} \u0438\u0437 ${e}, \u043A\u0443\u0431\u0438\u043A ${pV(C.o)}${C.w>=0?`, \u0432\u0440\u0435\u043C\u044F ${vt(C.w)}`:""}`}function _t(C){return d2(`<div class="m-title">${C}</div><label class="fl"><span>\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C? \u042D\u0442\u043E \u0438\u043C\u044F \u0443\u0432\u0438\u0434\u0438\u0442 \u0434\u0440\u0443\u0433.</span>
    <input id="nm" maxlength="20" autocomplete="off" value="${K1(H1.name||"")}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u041C\u0430\u0440\u044C\u044F\u043D"></label>`,[["ok","\u0413\u043E\u0442\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{if(e!=="ok")return null;let t=W("#nm").value.trim().replace(/\s+/g," ").slice(0,20);return t?(H1.name=t,y2(),t):_t(C)})}function bt(C,e,t){return xt(C,`${e}
${t}`).then(i=>i==="copied"?(w2("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0451 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),i):i!=="kept"?i:d2(`<div class="m-title">\u0421\u0441\u044B\u043B\u043A\u0430</div><div class="m-text"><p>\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0435\u0451 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u0432 Telegram \u0438\u043B\u0438 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0438.</p>
      <label class="fl"><textarea id="lnk" rows="5" readonly>${K1(e+`
`+t)}</textarea></label></div>`,[["ok","\u0413\u043E\u0442\u043E\u0432\u043E","primary"]]).then(()=>i))}function fV(){if(g2.some(e=>h.topics[e]==="my")){d2(`<div class="m-title">\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443</div><div class="m-text"><p>\u041D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u0431\u044B\u043B\u0430 \u0433\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB. \u041E\u043D\u0438 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0442\u0432\u043E\u0451\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0434\u0440\u0443\u0433\u0443 \u0438\u0445 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C.</p>
      <p>\u0421\u044B\u0433\u0440\u0430\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u0441\u0432\u043E\u0435\u0439 \u0433\u0440\u0430\u043D\u0438, \u0438 \u043F\u043E\u0441\u043B\u0435 \u043D\u0435\u0433\u043E \u0432\u044B\u0437\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C.</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(r3);return}let C=e=>{if(!e){r3();return}let t=h.results[h.level],i={v:1,id:t.duel||(Date.now().toString(36).slice(-5)+e7(1296).toString(36)).padEnd(7,"0"),ap:F0,r:X5(h2),l:h.level,s:k2(),t:g2.map(H=>h.topics[H]).join(","),tm:g2.map(H=>n0(H)).join(","),m:Xl(h.scramble),q:g2.map(H=>h.stageQ[H].map(V=>{let n=D0(V);return(+V.split("-")[2]).toString(36).padStart(2,"0")+(n?nt(n):"000")}).join("")).join(","),a:uV(e,t),...h.sp&&Object.keys(h.sp).length?{sp:Vl(h.sp)}:{}};t.duel=i.id,t2(),f4(aH(H1)),Zt(i,!0),y2();let r=`\u0412\u044B\u0437\u043E\u0432 \u0432 \u0438\u0433\u0440\u0443 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${L7(i).toLowerCase()}.
\u0422\u0435\u043C\u044B: ${g2.map(H=>i7(h.topics[H])).join(", ")}.
\u041C\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ${u4(i.a,l0())}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C.`;bt("\u041A\u0443\u0431\u0438\u043A: \u0432\u044B\u0437\u043E\u0432",r,`${St()}#ch=${j6(JSON.stringify(i))}`).then(r3)};H1.name?C(H1.name):_t("\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443").then(C)}function H3(){F2(),l5==="game"&&h&&h.phase!=="topics"?s0():l5==="menu"&&V5()}async function e8(C){let e=String(C||"").match(/#(ch|re)=([\w-]{20,6000})/);if(!e)return!1;let t=gt(e[2]);return t?k0(t.raw.ap)>k0(F0)?(d2('<div class="m-title">\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B</div><div class="m-text"><p>\u0412\u044B\u0437\u043E\u0432 \u0441\u0434\u0435\u043B\u0430\u043D \u0432 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \xAB\u041A\u0443\u0431\u0438\u043A\u0430\xBB. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(H3),!0):(e[1]==="re"&&t.raw.b?jl(t):await Tt(t),!0):(d2('<div class="m-title">\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0430</div><div class="m-text"><p>\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0432\u044B\u0437\u043E\u0432. \u041F\u043E\u043F\u0440\u043E\u0441\u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C, \u0447\u0442\u043E \u043E\u043D\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0446\u0435\u043B\u0438\u043A\u043E\u043C.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(H3),!0)}function jl(C){let e=Zt(C.raw,!!H1.name&&H1.name===C.raw.a.n),t=C.raw.b;e.me&&e.me.n===t.n&&e.me.p===t.p&&e.me.c===t.c||AV(e,t),y2(),a2("stage"),a3(e,e.mine?`\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0442\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432: ${K1(t.n)}`:null)}async function Tt(C){let e=o8().find(L=>L.id===C.raw.id);if(e&&e.mine){let L=await d2(`<div class="m-title">\u042D\u0442\u043E \u0442\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432</div><div class="m-text"><p>${L7(C.raw)}. \u0421\u0441\u044B\u043B\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043A\u043E\u043C\u0443-\u043D\u0438\u0431\u0443\u0434\u044C, \u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u0434\u0440\u0443\u0437\u0435\u0439 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u043C\u0435\u043D\u044E \xAB\u0412\u044B\u0437\u043E\u0432\u044B\xBB.</p></div>`,[["view","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B","primary"],["play","\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443",""],["no","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]);L==="view"?a3(e):L==="play"?ed(C):H3();return}if(e&&e.me){a3(e);return}let t=V3(n7);if(t&&t.ch&&t.ch.raw.id===C.raw.id&&t.phase!=="result"){h=t,s0(),w2("\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u043C \u0432\u044B\u0437\u043E\u0432");return}let i=Lt(C);if((i.miss||i.broken)&&(+C.raw.r||0)>X5(h2)&&await Ql()&&(i=Lt(C)),i.broken){d2('<div class="m-title">\u0412\u044B\u0437\u043E\u0432 \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u043B\u0441\u044F</div><div class="m-text"><p>\u0412 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B \u043D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(H3);return}let r=6*C.raw.s*C.raw.s,H=C.raw.a,V=t&&t.ch&&t.phase!=="result"?`<p class="m-note">\u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 (${K1(t.ch.raw.a.n)}) \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u044D\u0442\u0438\u043C.</p>`:"",n=await d2(`<div class="m-title">${K1(H.n)} \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0435\u0431\u044F</div><div class="m-text">
    <p>${L7(C.raw)}. \u0422\u0435\u0431\u0435 \u0434\u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A.</p>
    ${Jl(C)}
    <p>\u041D\u0443\u0436\u043D\u043E \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C: <b>${K1(H.n)}</b> \u2014 ${u4(H,r)}.</p>
    ${i.miss?`<p class="m-note">\u0412 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B ${r7(i.miss)} ${q5(i.miss,"\u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F, \u043E\u043D \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u0434\u0440\u0443\u0433\u0438\u043C","\u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438","\u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438")} \u0442\u043E\u0439 \u0436\u0435 \u0442\u0435\u043C\u044B.</p>`:""}
    <p class="m-note">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C: \u043A\u0430\u0436\u0434\u0430\u044F \u0433\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u0442\u0435\u043C\u0430, \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441. \u0417\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0448\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041A\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043A\u043E\u043D\u0447\u0430\u0442\u0441\u044F, \u0441\u043E\u0431\u0435\u0440\u0438 \u044D\u0442\u0438\u043C\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u043C\u0438 \u043A\u0443\u0431\u0438\u043A: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</p>${V}</div>`,[["go","\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0432\u044B\u0437\u043E\u0432","primary"],["help","\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",""],["no","\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441","ghost"]]);if(n==="go")xV(C,i);else if(n==="help"){let L=l5;C8(()=>{l5==="train"&&(L==="game"&&h?s0():V5()),Tt(C)})}else H3()}function ed(C){let e=Lt(C);if(e.broken){w2("\u0412\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u043D\u0435\u0442 \u0432 \u0431\u0430\u0437\u0435");return}xV(C,e)}function xV(C,e){let t={...C.raw};delete t.b,h={v:1,ch:{raw:t,qs:e.qs,diff:e.miss},level:t.l,size:t.s,phase:"quiz",score:0,results:{},topics:Object.fromEntries(g2.map((i,r)=>[i,C.topics[r]])),timers:Object.fromEntries(g2.map((i,r)=>[i,C.timers[r]])),bq:{},scramble:Yl(t.m,t.s),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0,gifts:0,bombs:0,bestRun:0},ms:0,msOk:1,sp:C.sp||{},run:0};for(let i of Object.values(e.qs))for(let r of i){let H=D0(r);H&&(h.bq[r]={q:H.q,a:H.a.slice(),e:H.e})}t2(),s0()}function vV(){let C=h.results[h.level],e=h.ch.raw,t=Zt(e,!1),i=uV(H1.name||"",C);t.mine?AV(t,{...i,n:"\u0422\u044B, \u0435\u0449\u0451 \u0440\u0430\u0437"}):t.me=i,y2();let r=l0();d2(`<div class="m-title">${C.solved?"\u041A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043D":"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="verd">${mV(yt(t))}</div>${hV(t)}
    ${h.ch.diff?`<p class="m-note">\u0423 \u0442\u0435\u0431\u044F ${r7(h.ch.diff)} ${q5(h.ch.diff,"\u0431\u044B\u043B \u0434\u0440\u0443\u0433\u0438\u043C","\u0431\u044B\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438","\u0431\u044B\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438")}: \u0432 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B \u0438\u0445 \u043D\u0435\u0442.</p>`:""}
    <div class="m-text"><p>\u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0430\u0432\u0442\u043E\u0440\u0443 \u0432\u044B\u0437\u043E\u0432\u0430: \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0443 \u043D\u0435\u0433\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0442\u0430\u043A\u043E\u0435 \u0436\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435.</p></div>`,[["send",_1(y1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(H=>{H==="send"&&!t.mine?SV(t,r).then(()=>h&&h.ch?vV():null):H==="send"?a3(t):V5()})}function SV(C,e){let t=i=>{if(!i)return null;let r=C.me;r.n=i,y2();let H=C.raw.a,V=`\xAB\u041A\u0443\u0431\u0438\u043A\xBB, \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432: ${L7(C.raw).toLowerCase()}.
${r.n}: ${u4(r,e)}.
${H.n}: ${u4(H,e)}.
\u041E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443, \u0442\u0430\u043C \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435:`;return bt("\u041A\u0443\u0431\u0438\u043A: \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432",V,`${St()}#re=${j6(JSON.stringify({...C.raw,b:r}))}`)};return H1.name?t(H1.name):_t("\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432").then(t)}function a3(C,e){let t=6*C.raw.s*C.raw.s,i=C.me,r=C.raw.a,H=e||(C.mine?"\u0422\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432":`\u0412\u044B\u0437\u043E\u0432 \xB7 ${K1(r.n)}`),V=[];C.mine?V.push(["resend",_1(y1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \u0435\u0449\u0451 \u0440\u0430\u0437","primary"]):i?V.push(["send",_1(y1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","primary"]):V.push(["play","\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0432\u044B\u0437\u043E\u0432","primary"]),V.push(["list","\u0412\u0441\u0435 \u0432\u044B\u0437\u043E\u0432\u044B",""],["close","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]),d2(`<div class="m-title">${H}</div><p class="m-sub">${L7(C.raw)} \xB7 ${C.at.split("-").reverse().join(".")}</p>
    <div class="verd">${mV(yt(C))}</div>${hV(C)}
    ${C.mine&&!C.others.length?'<div class="m-text"><p>\u041A\u043E\u0433\u0434\u0430 \u0434\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u0435\u0442, \u043E\u043D \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C. \u041E\u0442\u043A\u0440\u043E\u0439 \u0435\u0451, \u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C.</p></div>':""}`,V).then(n=>{if(n==="resend"){let L=`\u0412\u044B\u0437\u043E\u0432 \u0432 \u0438\u0433\u0440\u0443 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${L7(C.raw).toLowerCase()}.
\u0422\u0435\u043C\u044B: ${String(C.raw.t).split(",").map(i7).join(", ")}.
\u041C\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ${u4(r,t)}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C.`;bt("\u041A\u0443\u0431\u0438\u043A: \u0432\u044B\u0437\u043E\u0432",L,`${St()}#ch=${j6(JSON.stringify(C.raw))}`).then(()=>a3(C,e))}else if(n==="send")SV(C,t).then(()=>a3(C,e));else if(n==="play"){let L=gt(j6(JSON.stringify(C.raw)));L&&Tt(L)}else n==="list"?s8():H3()})}function s8(){let C=o8(),e=C.map((t,i)=>{let r=t.raw.a,H=t.me,V=t.others,n=t.mine?`\u0422\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432 \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.raw.l} \xB7 ${o0[t.raw.s].name}`:`\u0412\u044B\u0437\u043E\u0432 \xB7 ${K1(r.n)} \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.raw.l} \xB7 ${o0[t.raw.s].name}`,L=t.mine?V.length?`\u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438: ${V.map(a=>`${K1(a.n)} (${a.p})`).join(", ")}`:"\u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B":H?`\u0442\u044B ${H.p}, ${K1(r.n)} ${r.p}`:"\u0435\u0449\u0451 \u043D\u0435 \u0441\u044B\u0433\u0440\u0430\u043D\u043E";return`<button class="dl" data-b="d${i}"><b>${n}</b><small>${t.at.split("-").reverse().join(".")} \xB7 ${L}</small></button>`}).reverse().join("");d2(`<div class="m-title">\u0412\u044B\u0437\u043E\u0432\u044B</div><div class="m-text">
    ${e||"<p>\u0412\u044B\u0437\u043E\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0421\u044B\u0433\u0440\u0430\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \xAB\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443\xBB \u0432 \u0438\u0442\u043E\u0433\u0430\u0445.</p>"}
    <label class="fl dlink"><span>\u0414\u0440\u0443\u0433 \u043F\u0440\u0438\u0441\u043B\u0430\u043B \u0441\u0441\u044B\u043B\u043A\u0443, \u0430 \u043E\u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u043B\u0430\u0441\u044C \u043D\u0435 \u0432 \u0438\u0433\u0440\u0435? \u0412\u0441\u0442\u0430\u0432\u044C \u0435\u0451 \u0441\u044E\u0434\u0430.</span>
    <textarea id="dl-link" rows="2" placeholder="\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432 \u0438\u043B\u0438 \u043E\u0442\u0432\u0435\u0442"></textarea></label></div>`,[["open",_1(y1.paste)+"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",""],["close","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(async t=>{if(t==="open"){let i=W("#dl-link").value;await e8(i)||(w2("\u0412 \u0442\u0435\u043A\u0441\u0442\u0435 \u043D\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432"),s8())}else t&&t[0]==="d"&&C[+t.slice(1)]?a3(C[+t.slice(1)]):H3()})}var t8=null;function d2(C,e){W("#mcard").innerHTML=C+`<div class="m-btns">${e.map(([i,r,H])=>`<button class="btn ${H||""}" data-b="${i}">${r}</button>`).join("")}</div>`;let t=W("#modal");return t.hidden=!1,t.classList.add("center"),W("#mcard").scrollTop=0,new Promise(i=>{t8=i})}function F2(){W("#modal").hidden=!0,t8=null}function M8(){t7(),W("#sheet").hidden=!0}var G6,A4=[];function w2(C){let e=W("#toast");e.textContent=C,e.classList.add("on"),clearTimeout(G6),G6=setTimeout(()=>{e.classList.remove("on"),G6=0,A4.length&&setTimeout(gV,400)},2400)}function gV(){!G6&&A4.length&&w2(A4.shift())}function f4(C){for(let e of C||[])A4.push(`\u041D\u043E\u0432\u044B\u0439 \u0437\u043D\u0430\u0447\u043E\u043A: \xAB${B6[e].name}\xBB`);gV()}function td(){return`<div class="m-title">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</div><div class="help">
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
  <li>\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \xAB50 \u043D\u0430 50\xBB \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0432\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u0437\u0430 ${M5(i3)}, \xAB\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C\xBB \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043B\u0435\u0442\u043A\u0443 \u0431\u0435\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 \u0437\u0430 ${M5(I0)}. \u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0434\u0430\u0451\u0442 \u043D\u0438 \u043E\u0447\u043A\u043E\u0432, \u043D\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0438 \u0434\u043B\u044F \u0437\u0432\u0451\u0437\u0434 \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u043D\u044B\u043C. \u041D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043C\u0435\u043D\u044C\u0448\u0435.</li>
  <li>\u041F\u043E\u0441\u043B\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \xAB\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443\xBB. \u0414\u0440\u0443\u0433 \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0438 \u0441\u044B\u0433\u0440\u0430\u0435\u0442 \u0442\u043E\u0442 \u0436\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u0442\u0435 \u0436\u0435 \u0442\u0435\u043C\u044B, \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A. \u0412 \u043A\u043E\u043D\u0446\u0435 \u043E\u0431\u0430 \u0432\u0438\u0434\u044F\u0442 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435: \u043E\u0447\u043A\u0438, \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B, \u0441\u0431\u043E\u0440\u043A\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F. \u0421\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0440\u0443\u0433 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u0441\u0441\u044B\u043B\u043A\u043E\u0439. \u0412\u0441\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u2014 \u0432 \u043C\u0435\u043D\u044E \xAB\u0412\u044B\u0437\u043E\u0432\u044B\xBB.</li>
  <li>\u041D\u0430\u0448\u0451\u043B \u043E\u0448\u0438\u0431\u043A\u0443 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435 \u2014 \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?\xBB \u043F\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u043E\u043C. \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F, \u0430 \u0436\u0430\u043B\u043E\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B.</li>
  <li>\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043C\u043E\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0430\u0439\u043C\u0435\u0440: \u043E\u0442 10 \u0434\u043E 90 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442. \u041D\u0435 \u0443\u0441\u043F\u0435\u043B \u2014 \u043E\u0442\u0432\u0435\u0442 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D \u043A\u0430\u043A \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439. \u0412\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443.</li></ul>
  <h3>\u041E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438 \u0438 \u0441\u0435\u0440\u0438\u0438</h3><ul>
  <li>\u041D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u043D\u044B \u0434\u0432\u0435 \u043E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438, \u043D\u0430 2\xD72 \u2014 \u043E\u0434\u043D\u0430. \u041A\u0430\u043A\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u043E\u0441\u043E\u0431\u0430\u044F, \u0432\u0438\u0434\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F.</li>
  <li><b>x2</b> \u2014 \u043E\u0447\u043A\u0438 \u0437\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0432\u0430\u0438\u0432\u0430\u044E\u0442\u0441\u044F.</li>
  <li><b>\u0411\u043B\u0438\u0446</b> \u2014 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 ${$6} \u0441\u0435\u043A\u0443\u043D\u0434, \u0437\u0430\u0442\u043E \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 2 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430.</li>
  <li><b>\u041F\u043E\u0434\u0430\u0440\u043E\u043A</b> \u2014 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0431\u0435\u0437 \u0432\u043E\u043F\u0440\u043E\u0441\u0430.</li>
  <li><b>\u0411\u043E\u043C\u0431\u0430</b> \u2014 \u043E\u0448\u0438\u0431\u0451\u0448\u044C\u0441\u044F \u0438\u043B\u0438 \u043D\u0435 \u0443\u0441\u043F\u0435\u0435\u0448\u044C, \u0438 \u043F\u043E\u0442\u0435\u0440\u044F\u0435\u0448\u044C \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u0412\u043E\u043F\u0440\u043E\u0441-\u0431\u043E\u043C\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0437\u0430 ${M5(I0)}.</li>
  <li>\u0421\u0435\u0440\u0438\u044F: \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u0434\u0440\u044F\u0434. \u0421 \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E \u043F\u043E\u0434\u0440\u044F\u0434 \u043E\u0447\u043A\u0438 \xD71,5, \u0441 \u043F\u044F\u0442\u043E\u0433\u043E \xD72. \u041E\u0448\u0438\u0431\u0441\u044F \u0438\u043B\u0438 \u043D\u0435 \u0443\u0441\u043F\u0435\u043B \u2014 \u0441\u0435\u0440\u0438\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043D\u043E\u0432\u043E. \u041F\u0440\u043E\u043F\u0443\u0441\u043A \u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0441\u0435\u0440\u0438\u044E \u043D\u0435 \u043F\u0440\u0435\u0440\u044B\u0432\u0430\u044E\u0442.</li>
  <li>\u0412 \u0432\u044B\u0437\u043E\u0432\u0435 \u0443 \u0434\u0440\u0443\u0433\u0430 \u0442\u0435 \u0436\u0435 \u043E\u0441\u043E\u0431\u044B\u0435 \u043A\u043B\u0435\u0442\u043A\u0438 \u043D\u0430 \u0442\u0435\u0445 \u0436\u0435 \u043C\u0435\u0441\u0442\u0430\u0445.</li></ul>
  <h3>\u0421\u0431\u043E\u0440\u043A\u0430</h3><ul>
  <li>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D. \u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438, \u0435\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</li>
  <li>\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</li>
  <li>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0437\u0430 ${a0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</li>
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
  <li>\u0417\u043D\u0430\u0447\u043A\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E: \u0433\u0440\u0430\u043D\u044C \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A, \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u0435\u0434\u0438\u043D\u043E\u0439 \u043E\u0448\u0438\u0431\u043A\u0438, \u0441\u0431\u043E\u0440\u043A\u0443 \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A, 10 \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043F\u043E\u0434\u0440\u044F\u0434, \u043D\u0435\u0434\u0435\u043B\u044E \u0438\u0433\u0440\u044B \u043F\u043E\u0434\u0440\u044F\u0434 \u0438 \u0434\u0440\u0443\u0433\u043E\u0435. \u0412\u0441\u0435\u0433\u043E \u0438\u0445 ${r0.length}.</li>
  <li>\u0412 \xAB\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0435\xBB \u0432\u0438\u0434\u043D\u043E, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u0435, \u043A\u0430\u043A\u0430\u044F \u0442\u0435\u043C\u0430 \u0443\u0434\u0430\u0451\u0442\u0441\u044F \u043B\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u0438 \u043A\u0430\u043A\u0430\u044F \u0442\u0440\u0443\u0434\u043D\u0435\u0435.</li></ul>
  <p>\u0418\u0433\u0440\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430, \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F.</p></div>`}function C8(C){d2(td(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"],["train","\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438",""]]).then(e=>{F2(),e==="train"?pt(C):C()})}function Cd(){document.addEventListener("pointerdown",n4,{capture:!0});for(let e of document.querySelectorAll('[data-go="menu"]'))e.innerHTML=_1(y1.back);W("#g-home").innerHTML=_1(y1.home),W("#my-back").innerHTML=_1(y1.back),W("#m-my").innerHTML=_1(y1.my)+"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",W("#g-help").innerHTML=_1(y1.help),W("#tr-back").innerHTML=_1(y1.back),W("#stage").insertAdjacentHTML("beforeend",'<svg id="guide" aria-hidden="true"><path id="g-line" fill="none" stroke="#1d2230" stroke-linecap="round"/><path id="g-head" fill="#ffd21f" stroke="#1d2230" stroke-width="2.5" stroke-linejoin="round"/><path id="g-line2" fill="none" stroke="#ffd21f" stroke-linecap="round"/><circle id="g-finger" fill="#ffffff" stroke="#1d2230" stroke-width="2"/></svg>'),document.querySelectorAll('[data-go="menu"]').forEach(e=>e.addEventListener("click",V5)),W("#m-new").addEventListener("click",()=>{h?d2('<div class="m-title">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430?</div><div class="m-text"><p>\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.</p></div>',[["yes","\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{F2(),e==="yes"&&(h=null,t2(),U6())}):U6()}),W("#m-continue").addEventListener("click",()=>{h&&(h.phase==="topics"?L0():s0())}),W("#m-help").addEventListener("click",()=>C8(V5)),W("#m-ach").addEventListener("click",()=>gH("stats"));for(let e of["#ach-tabs","#sk-tabs"])W(e).addEventListener("click",t=>{let i=t.target.closest("[data-tab]");i&&gH(i.dataset.tab)});W("#sk-list").addEventListener("click",e=>{let t=e.target.closest("[data-skin]");t&&Pl(t.dataset.skin)}),W("#g-help").addEventListener("click",()=>{let e=h&&h.phase==="result";C8(()=>{l5==="game"?e&&r3():s0()})}),W("#tr-back").addEventListener("click",At),W("#tr-foot").addEventListener("click",e=>{let t=e.target.closest(".tool");!t||t.disabled||(t.id==="tr-undo"?yl():t.id==="tr-hint"?rV():t.id==="tr-view"?n1.rotateTo(n1.baseView):t.id==="tr-again"&&Y6(w1.step))}),W("#m-sound").addEventListener("click",()=>{P0.on=!P0.on,H1.sound=P0.on,y2(),V5()}),W("#g-home").addEventListener("click",V5),W("#m-update").addEventListener("click",NH),W("#m-reports").addEventListener("click",$l),W("#m-duels").addEventListener("click",s8),W("#m-chal").addEventListener("click",()=>{let e=it(V3(n7));e&&e.ch&&(h=e,s0())}),W("#lv-size").addEventListener("click",e=>{let t=e.target.closest("[data-size]");if(t){H1.size=+t.dataset.size,y2(),n1.setSize(H1.size),n1.reset();for(let i of n1.stickers)n1.setLook(i,"color");a2("tap"),U6()}}),W("#lv-list").addEventListener("click",e=>{let t=e.target.closest("[data-lv]");t&&ul(+t.dataset.lv)}),W("#tp-list").addEventListener("change",e=>{let t=e.target.closest("select");if(!t)return;if(t.id==="tp-time"||t.dataset.tface){h.timers||(h.timers=st());let n=+t.value;t.id==="tp-time"?g2.forEach(L=>{h.timers[L]=n}):h.timers[t.dataset.tface]=n,H1.timers={...h.timers},y2(),t2(),L0();return}let i=t.dataset.face,r=t.value,H=h.topics[i],V=g2.find(n=>n!==i&&h.topics[n]===r);V&&(h.topics[V]=H),h.topics[i]=r,t2(),L0()}),W("#tp-rand").addEventListener("click",()=>{h.topics=m4(h.level,null),t2(),L0()}),W("#tp-go").addEventListener("click",Al),W("#m-my").addEventListener("click",()=>p4("menu")),W("#tp-list").addEventListener("click",e=>{e.target.closest("#tp-my")&&(e.preventDefault(),p4("topics"))}),W("#my-back").addEventListener("click",Il),W("#my-add").addEventListener("click",()=>ZH(0)),W("#my-list").addEventListener("click",e=>{let t=e.target.closest("[data-id]");t&&ZH(+t.dataset.id)}),W("#my-save").addEventListener("click",Dl),W("#my-load").addEventListener("click",()=>{W("#my-file").value="",W("#my-file").click()}),W("#my-file").addEventListener("change",e=>Nl(e.target.files[0])),W("#ecard").addEventListener("click",e=>{let t=e.target.closest("[data-elv]");if(t){K6=+t.dataset.elv,W("#ecard").querySelectorAll("[data-elv]").forEach(i=>i.classList.toggle("on",i===t));return}e.target.closest("#e-ok")?Fl():e.target.closest("#e-del")?kl():e.target.closest("#e-cancel")&&a8()}),W("#g-foot").addEventListener("click",e=>{let t=e.target.closest(".chip");if(t){n1.showFace(t.dataset.face);return}let i=e.target.closest(".tool");!i||i.disabled||(i.id==="t-undo"?jH():i.id==="t-hint"?eV():i.id==="t-free"?d2(`<div class="m-title">\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443?</div><div class="m-text"><p>${ct()}</p></div>`,[["yes","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(r=>{F2(),r==="yes"&&L8()}):i.id==="t-view"?n1.rotateTo(n1.baseView):i.id==="t-end"&&d2('<div class="m-title">\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C?</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F. \u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.</p></div>',[["yes","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C","primary"],["no","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435","ghost"]]).then(r=>{F2(),r==="yes"&&h4(!1)}))}),W("#qcard").addEventListener("click",e=>{let t=e.target.closest(".ans button");if(t&&!t.disabled){Mt(+t.dataset.i);return}if(e.target.closest("#q-next")){lt();return}if(e.target.closest("#q-cut")){Sl();return}if(e.target.closest("#q-skip")){gl();return}let i=e.target.closest("#q-rep");if(i){zl(i.dataset.qid);return}let r=e.target.closest("[data-rr]");if(r){J6=r.dataset.rr,W("#rep-err").textContent="",W(".rep-r").querySelectorAll("button").forEach(H=>H.classList.toggle("on",H===r));return}e.target.closest("#rep-send")?Gl():e.target.closest("#rep-cancel")&&Wl()}),W("#mcard").addEventListener("click",e=>{let t=e.target.closest("[data-b]");if(!t||!t8)return;let i=t8;F2(),i(t.dataset.b)}),window.addEventListener("resize",()=>requestAnimationFrame(N6));let C=new ResizeObserver(()=>requestAnimationFrame(N6));document.querySelectorAll(".cube-slot").forEach(e=>C.observe(e)),window.addEventListener("orientationchange",()=>setTimeout(N6,300))}async function id(){n1=new T6(W("#stage")),n1.onTap=WH,n1.onSwipe=JH,lV(),Cd(),await pl(),h&&(h.v!==1||!M0[h.level])&&(h=null,t2()),V5();let C=location.hash;/^#(ch|re)=/.test(C)&&history.replaceState(null,"",location.pathname+location.search);let e=await e8(C);H1.helped||(H1.helped=1,y2(),e||C8(V5)),window.addEventListener("hashchange",()=>{let r=location.hash;/^#(ch|re)=/.test(r)&&(history.replaceState(null,"",location.pathname+location.search),M8(),e8(r))});let t=Date.now(),i=0;setInterval(()=>{let r=Date.now(),H=Math.min(r-t,1500);t=r,h&&l5==="game"&&document.visibilityState==="visible"&&(h.phase==="quiz"||h.phase==="solve")&&(h.ms=(h.ms||0)+H,++i%10===0&&t2())},1e3),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}window.__kubik={PIC:W5,getQ:D0,get T(){return w1},startTrain:pt,trainHint:ut,trainSwipe:iV,trainHintMove:rV,leaveTrain:At,solveIntro:QH,get S(){return h},get META(){return H1},reportText:ft,pickQuestions:EH,get cube(){return n1},get BANK(){return h2},updateBank:NH,switchBank:ot,onTap:WH,answer:Mt,afterAnswer:lt,hint:eV,undo:jH,hintMove:zH,finishLevel:h4,toSolve:dt,onSwipe:JH,startFree:L8,makeDuel:fV,openLink:e8,showDuels:s8,readDuel:gt,get KEY_CHAL(){return n7}};id();
