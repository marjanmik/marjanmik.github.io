var kt=0,f8=1,Nt=2;var E7=1,Ut=2,E3=3,S0=0,t5=1,I5=2,F5=0,R3=1,x8=2,v8=3,S8=4,zt=5;var k0=100,Gt=101,Wt=102,Xt=103,qt=104,$t=200,Yt=201,Qt=202,Kt=203,g8=204,Z8=205,Jt=206,jt=207,eC=208,tC=209,CC=210,iC=211,rC=212,HC=213,VC=214,O4=0,E4=1,R4=2,A3=3,P4=4,B4=5,I4=6,F4=7,_8=0,nC=1,LC=2,Z5=0,y8=1,b8=2,T8=3,w8=4,O8=5,E8=6,R8=7;var P8=300,g0=301,N0=302,p9=303,u9=304,R7=306,D4=1e3,R5=1001,k4=1002,P2=1003,aC=1004;var P7=1005;var I2=1006,A9=1007;var Z0=1008;var r5=1009,B8=1010,I8=1011,P3=1012,m9=1013,_5=1014,y5=1015,b5=1016,h9=1017,f9=1018,B3=1020,F8=35902,D8=35899,k8=1021,N8=1022,c5=1023,P5=1026,_0=1027,U8=1028,x9=1029,y0=1030,v9=1031;var S9=1033,B7=33776,I7=33777,F7=33778,D7=33779,g9=35840,Z9=35841,_9=35842,y9=35843,b9=36196,T9=37492,w9=37496,O9=37488,E9=37489,k7=37490,R9=37491,P9=37808,B9=37809,I9=37810,F9=37811,D9=37812,k9=37813,N9=37814,U9=37815,z9=37816,G9=37817,W9=37818,X9=37819,q9=37820,$9=37821,Y9=36492,Q9=36494,K9=36495,J9=36283,j9=36284,N7=36285,e6=36286;var H7=2300,N4=2301,T4=2302,o8=2303,s8=2400,M8=2401,l8=2402;var oC=3200;var t6=0,sC=1,K5="",z2="srgb",V7="srgb-linear",n7="linear",i2="srgb";var w4=7680;var MC=519,lC=512,dC=513,cC=514,C6=515,pC=516,uC=517,i6=518,AC=519,mC=35044;var z8="300 es",v5=2e3,m3=2001;function dH(C){for(let e=C.length-1;e>=0;--e)if(C[e]>=65535)return!0;return!1}function cH(C){return ArrayBuffer.isView(C)&&!(C instanceof DataView)}function L7(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}function hC(){let C=L7("canvas");return C.style.display="block",C}var at={},h3=null;function G8(...C){let e="THREE."+C.shift();h3?h3("log",e,...C):console.log(e,...C)}function fC(C){let e=C[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=C[1];t&&t.isStackTrace?C[0]+=" "+t.getLocation():C[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return C}function R1(...C){C=fC(C);let e="THREE."+C.shift();if(h3)h3("warn",e,...C);else{let t=C[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...C)}}function P1(...C){C=fC(C);let e="THREE."+C.shift();if(h3)h3("error",e,...C);else{let t=C[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...C)}}function F0(...C){let e=C.join(" ");e in at||(at[e]=!0,R1(...C))}function xC(C,e,t){return new Promise(function(i,r){function H(){switch(C.clientWaitSync(e,C.SYNC_FLUSH_COMMANDS_BIT,0)){case C.WAIT_FAILED:r();break;case C.TIMEOUT_EXPIRED:setTimeout(H,t);break;default:i()}}setTimeout(H,t)})}var vC={[O4]:E4,[R4]:I4,[P4]:F4,[A3]:B4,[E4]:O4,[I4]:R4,[F4]:P4,[B4]:A3},B5=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let H=r.indexOf(t);H!==-1&&r.splice(H,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let H=0,V=r.length;H<V;H++)r[H].call(this,e);e.target=null}}},N2=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ot=1234567,t7=Math.PI/180,f3=180/Math.PI;function U0(){let C=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(N2[C&255]+N2[C>>8&255]+N2[C>>16&255]+N2[C>>24&255]+"-"+N2[e&255]+N2[e>>8&255]+"-"+N2[e>>16&15|64]+N2[e>>24&255]+"-"+N2[t&63|128]+N2[t>>8&255]+"-"+N2[t>>16&255]+N2[t>>24&255]+N2[i&255]+N2[i>>8&255]+N2[i>>16&255]+N2[i>>24&255]).toLowerCase()}function W1(C,e,t){return Math.max(e,Math.min(t,C))}function W8(C,e){return(C%e+e)%e}function pH(C,e,t,i,r){return i+(C-e)*(r-i)/(t-e)}function uH(C,e,t){return C!==e?(t-C)/(e-C):0}function C7(C,e,t){return(1-t)*C+t*e}function AH(C,e,t,i){return C7(C,e,1-Math.exp(-t*i))}function mH(C,e=1){return e-Math.abs(W8(C,e*2)-e)}function hH(C,e,t){return C<=e?0:C>=t?1:(C=(C-e)/(t-e),C*C*(3-2*C))}function fH(C,e,t){return C<=e?0:C>=t?1:(C=(C-e)/(t-e),C*C*C*(C*(C*6-15)+10))}function xH(C,e){return C+Math.floor(Math.random()*(e-C+1))}function vH(C,e){return C+Math.random()*(e-C)}function SH(C){return C*(.5-Math.random())}function gH(C){C!==void 0&&(ot=C);let e=ot+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZH(C){return C*t7}function _H(C){return C*f3}function yH(C){return C>0&&Number.isInteger(C)&&2**Math.round(Math.log2(C))===C}function bH(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function TH(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function wH(C,e,t,i,r){let H=Math.cos,V=Math.sin,n=H(t/2),a=V(t/2),L=H((e+i)/2),o=V((e+i)/2),M=H((e-i)/2),s=V((e-i)/2),l=H((i-e)/2),u=V((i-e)/2);switch(r){case"XYX":C.set(n*o,a*M,a*s,n*L);break;case"YZY":C.set(a*s,n*o,a*M,n*L);break;case"ZXZ":C.set(a*M,a*s,n*o,n*L);break;case"XZX":C.set(n*o,a*u,a*l,n*L);break;case"YXY":C.set(a*l,n*o,a*u,n*L);break;case"ZYZ":C.set(a*u,a*l,n*o,n*L);break;default:R1("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function c3(C,e){switch(e.constructor){case Float32Array:return C;case Uint32Array:return C/4294967295;case Uint16Array:return C/65535;case Uint8Array:case Uint8ClampedArray:return C/255;case Int32Array:return Math.max(C/2147483647,-1);case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Q2(C,e){switch(e.constructor){case Float32Array:return C;case Uint32Array:return Math.round(C*4294967295);case Uint16Array:return Math.round(C*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(C*255);case Int32Array:return Math.round(C*2147483647);case Int16Array:return Math.round(C*32767);case Int8Array:return Math.round(C*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var X8={DEG2RAD:t7,RAD2DEG:f3,generateUUID:U0,clamp:W1,euclideanModulo:W8,mapLinear:pH,inverseLerp:uH,lerp:C7,damp:AH,pingpong:mH,smoothstep:hH,smootherstep:fH,randInt:xH,randFloat:vH,randFloatSpread:SH,seededRandom:gH,degToRad:ZH,radToDeg:_H,isPowerOfTwo:yH,ceilPowerOfTwo:bH,floorPowerOfTwo:TH,setQuaternionFromProperEuler:wH,normalize:Q2,denormalize:c3},J8=class J8{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W1(this.x,e.x,t.x),this.y=W1(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W1(this.x,e,t),this.y=W1(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(W1(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(W1(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),H=this.x-e.x,V=this.y-e.y;return this.x=H*i-V*r+e.x,this.y=H*r+V*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};J8.prototype.isVector2=!0;var f1=J8,v2=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,H,V,n){let a=i[r+0],L=i[r+1],o=i[r+2],M=i[r+3],s=H[V+0],l=H[V+1],u=H[V+2],f=H[V+3];if(M!==f||a!==s||L!==l||o!==u){let c=a*s+L*l+o*u+M*f;c<0&&(s=-s,l=-l,u=-u,f=-f,c=-c);let d=1-n;if(c<.9995){let v=Math.acos(c),y=Math.sin(v);d=Math.sin(d*v)/y,n=Math.sin(n*v)/y,a=a*d+s*n,L=L*d+l*n,o=o*d+u*n,M=M*d+f*n}else{a=a*d+s*n,L=L*d+l*n,o=o*d+u*n,M=M*d+f*n;let v=1/Math.sqrt(a*a+L*L+o*o+M*M);a*=v,L*=v,o*=v,M*=v}}e[t]=a,e[t+1]=L,e[t+2]=o,e[t+3]=M}static multiplyQuaternionsFlat(e,t,i,r,H,V){let n=i[r],a=i[r+1],L=i[r+2],o=i[r+3],M=H[V],s=H[V+1],l=H[V+2],u=H[V+3];return e[t]=n*u+o*M+a*l-L*s,e[t+1]=a*u+o*s+L*M-n*l,e[t+2]=L*u+o*l+n*s-a*M,e[t+3]=o*u-n*M-a*s-L*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,H=e._z,V=e._order,n=Math.cos,a=Math.sin,L=n(i/2),o=n(r/2),M=n(H/2),s=a(i/2),l=a(r/2),u=a(H/2);switch(V){case"XYZ":this._x=s*o*M+L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M-s*l*u;break;case"YXZ":this._x=s*o*M+L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M+s*l*u;break;case"ZXY":this._x=s*o*M-L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M-s*l*u;break;case"ZYX":this._x=s*o*M-L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M+s*l*u;break;case"YZX":this._x=s*o*M+L*l*u,this._y=L*l*M+s*o*u,this._z=L*o*u-s*l*M,this._w=L*o*M-s*l*u;break;case"XZY":this._x=s*o*M-L*l*u,this._y=L*l*M-s*o*u,this._z=L*o*u+s*l*M,this._w=L*o*M+s*l*u;break;default:R1("Quaternion: .setFromEuler() encountered an unknown order: "+V)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],H=t[8],V=t[1],n=t[5],a=t[9],L=t[2],o=t[6],M=t[10],s=i+n+M;if(s>0){let l=.5/Math.sqrt(s+1);this._w=.25/l,this._x=(o-a)*l,this._y=(H-L)*l,this._z=(V-r)*l}else if(i>n&&i>M){let l=2*Math.sqrt(1+i-n-M);this._w=(o-a)/l,this._x=.25*l,this._y=(r+V)/l,this._z=(H+L)/l}else if(n>M){let l=2*Math.sqrt(1+n-i-M);this._w=(H-L)/l,this._x=(r+V)/l,this._y=.25*l,this._z=(a+o)/l}else{let l=2*Math.sqrt(1+M-i-n);this._w=(V-r)/l,this._x=(H+L)/l,this._y=(a+o)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W1(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,H=e._z,V=e._w,n=t._x,a=t._y,L=t._z,o=t._w;return this._x=i*o+V*n+r*L-H*a,this._y=r*o+V*a+H*n-i*L,this._z=H*o+V*L+i*a-r*n,this._w=V*o-i*n-r*a-H*L,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,H=e._z,V=e._w,n=this.dot(e);n<0&&(i=-i,r=-r,H=-H,V=-V,n=-n);let a=1-t;if(n<.9995){let L=Math.acos(n),o=Math.sin(L);a=Math.sin(a*L)/o,t=Math.sin(t*L)/o,this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+H*t,this._w=this._w*a+V*t,this._onChangeCallback()}else this._x=this._x*a+i*t,this._y=this._y*a+r*t,this._z=this._z*a+H*t,this._w=this._w*a+V*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),H=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),H*Math.sin(t),H*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j8=class j8{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(st.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(st.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,H=e.elements;return this.x=H[0]*t+H[3]*i+H[6]*r,this.y=H[1]*t+H[4]*i+H[7]*r,this.z=H[2]*t+H[5]*i+H[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,H=e.elements,V=1/(H[3]*t+H[7]*i+H[11]*r+H[15]);return this.x=(H[0]*t+H[4]*i+H[8]*r+H[12])*V,this.y=(H[1]*t+H[5]*i+H[9]*r+H[13])*V,this.z=(H[2]*t+H[6]*i+H[10]*r+H[14])*V,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,H=e.x,V=e.y,n=e.z,a=e.w,L=2*(V*r-n*i),o=2*(n*t-H*r),M=2*(H*i-V*t);return this.x=t+a*L+V*M-n*o,this.y=i+a*o+n*L-H*M,this.z=r+a*M+H*o-V*L,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,H=e.elements;return this.x=H[0]*t+H[4]*i+H[8]*r,this.y=H[1]*t+H[5]*i+H[9]*r,this.z=H[2]*t+H[6]*i+H[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W1(this.x,e.x,t.x),this.y=W1(this.y,e.y,t.y),this.z=W1(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W1(this.x,e,t),this.y=W1(this.y,e,t),this.z=W1(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(W1(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,H=e.z,V=t.x,n=t.y,a=t.z;return this.x=r*a-H*n,this.y=H*V-i*a,this.z=i*n-r*V,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return k6.copy(this).projectOnVector(e),this.sub(k6)}reflect(e){return this.sub(k6.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(W1(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};j8.prototype.isVector3=!0;var T=j8,k6=new T,st=new v2,ee=class ee{constructor(e,t,i,r,H,V,n,a,L){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,H,V,n,a,L)}set(e,t,i,r,H,V,n,a,L){let o=this.elements;return o[0]=e,o[1]=r,o[2]=n,o[3]=t,o[4]=H,o[5]=a,o[6]=i,o[7]=V,o[8]=L,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,H=this.elements,V=i[0],n=i[3],a=i[6],L=i[1],o=i[4],M=i[7],s=i[2],l=i[5],u=i[8],f=r[0],c=r[3],d=r[6],v=r[1],y=r[4],h=r[7],g=r[2],Z=r[5],b=r[8];return H[0]=V*f+n*v+a*g,H[3]=V*c+n*y+a*Z,H[6]=V*d+n*h+a*b,H[1]=L*f+o*v+M*g,H[4]=L*c+o*y+M*Z,H[7]=L*d+o*h+M*b,H[2]=s*f+l*v+u*g,H[5]=s*c+l*y+u*Z,H[8]=s*d+l*h+u*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8];return t*V*o-t*n*L-i*H*o+i*n*a+r*H*L-r*V*a}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8],M=o*V-n*L,s=n*a-o*H,l=L*H-V*a,u=t*M+i*s+r*l;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/u;return e[0]=M*f,e[1]=(r*L-o*i)*f,e[2]=(n*i-r*V)*f,e[3]=s*f,e[4]=(o*t-r*a)*f,e[5]=(r*H-n*t)*f,e[6]=l*f,e[7]=(i*a-L*t)*f,e[8]=(V*t-i*H)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,H,V,n){let a=Math.cos(H),L=Math.sin(H);return this.set(i*a,i*L,-i*(a*V+L*n)+V+e,-r*L,r*a,-r*(-L*V+a*n)+n+t,0,0,1),this}scale(e,t){return F0("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(N6.makeScale(e,t)),this}rotate(e){return F0("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(N6.makeRotation(-e)),this}translate(e,t){return F0("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(N6.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ee.prototype.isMatrix3=!0;var I1=ee,N6=new I1,Mt=new I1().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lt=new I1().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OH(){let C={enabled:!0,workingColorSpace:V7,spaces:{},convert:function(r,H,V){return this.enabled===!1||H===V||!H||!V||(this.spaces[H].transfer===i2&&(r.r=Q5(r.r),r.g=Q5(r.g),r.b=Q5(r.b)),this.spaces[H].primaries!==this.spaces[V].primaries&&(r.applyMatrix3(this.spaces[H].toXYZ),r.applyMatrix3(this.spaces[V].fromXYZ)),this.spaces[V].transfer===i2&&(r.r=p3(r.r),r.g=p3(r.g),r.b=p3(r.b))),r},workingToColorSpace:function(r,H){return this.convert(r,this.workingColorSpace,H)},colorSpaceToWorking:function(r,H){return this.convert(r,H,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===K5?n7:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,H=this.workingColorSpace){return r.fromArray(this.spaces[H].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,H,V){return r.copy(this.spaces[H].toXYZ).multiply(this.spaces[V].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,H){return F0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),C.workingToColorSpace(r,H)},toWorkingColorSpace:function(r,H){return F0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),C.colorSpaceToWorking(r,H)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return C.define({[V7]:{primaries:e,whitePoint:i,transfer:n7,toXYZ:Mt,fromXYZ:lt,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:z2},outputColorSpaceConfig:{drawingBufferColorSpace:z2}},[z2]:{primaries:e,whitePoint:i,transfer:i2,toXYZ:Mt,fromXYZ:lt,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:z2}}}),C}var Y1=OH();function Q5(C){return C<.04045?C*.0773993808:Math.pow(C*.9478672986+.0521327014,2.4)}function p3(C){return C<.0031308?C*12.92:1.055*Math.pow(C,.41666)-.055}var C3,U4=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{C3===void 0&&(C3=L7("canvas")),C3.width=e.width,C3.height=e.height;let r=C3.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=C3}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=L7("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),H=r.data;for(let V=0;V<H.length;V++)H[V]=Q5(H[V]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Q5(t[i]/255)*255):t[i]=Q5(t[i]);return{data:t,width:e.width,height:e.height}}else return R1("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},EH=0,x3=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:EH++}),this.uuid=U0(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let H;if(Array.isArray(r)){H=[];for(let V=0,n=r.length;V<n;V++)r[V].isDataTexture?H.push(U6(r[V].image)):H.push(U6(r[V]))}else H=U6(r);i.url=H}return t||(e.images[this.uuid]=i),i}};function U6(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?U4.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(R1("Texture: Unable to serialize Texture."),{})}var RH=0,z6=new T,J2=class C extends B5{constructor(e=C.DEFAULT_IMAGE,t=C.DEFAULT_MAPPING,i=R5,r=R5,H=I2,V=Z0,n=c5,a=r5,L=C.DEFAULT_ANISOTROPY,o=K5){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RH++}),this.uuid=U0(),this.name="",this.source=new x3(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=H,this.minFilter=V,this.anisotropy=L,this.format=n,this.internalFormat=null,this.type=a,this.offset=new f1(0,0),this.repeat=new f1(1,1),this.center=new f1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new I1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(z6).x}get height(){return this.source.getSize(z6).y}get depth(){return this.source.getSize(z6).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){R1(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R1(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P8)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case D4:e.x=e.x-Math.floor(e.x);break;case R5:e.x=e.x<0?0:1;break;case k4:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case D4:e.y=e.y-Math.floor(e.y);break;case R5:e.y=e.y<0?0:1;break;case k4:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};J2.DEFAULT_IMAGE=null;J2.DEFAULT_MAPPING=P8;J2.DEFAULT_ANISOTROPY=1;var te=class te{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,H=this.w,V=e.elements;return this.x=V[0]*t+V[4]*i+V[8]*r+V[12]*H,this.y=V[1]*t+V[5]*i+V[9]*r+V[13]*H,this.z=V[2]*t+V[6]*i+V[10]*r+V[14]*H,this.w=V[3]*t+V[7]*i+V[11]*r+V[15]*H,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,H,a=e.elements,L=a[0],o=a[4],M=a[8],s=a[1],l=a[5],u=a[9],f=a[2],c=a[6],d=a[10];if(Math.abs(o-s)<.01&&Math.abs(M-f)<.01&&Math.abs(u-c)<.01){if(Math.abs(o+s)<.1&&Math.abs(M+f)<.1&&Math.abs(u+c)<.1&&Math.abs(L+l+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(L+1)/2,h=(l+1)/2,g=(d+1)/2,Z=(o+s)/4,b=(M+f)/4,m=(u+c)/4;return y>h&&y>g?y<.01?(i=0,r=.707106781,H=.707106781):(i=Math.sqrt(y),r=Z/i,H=b/i):h>g?h<.01?(i=.707106781,r=0,H=.707106781):(r=Math.sqrt(h),i=Z/r,H=m/r):g<.01?(i=.707106781,r=.707106781,H=0):(H=Math.sqrt(g),i=b/H,r=m/H),this.set(i,r,H,t),this}let v=Math.sqrt((c-u)*(c-u)+(M-f)*(M-f)+(s-o)*(s-o));return Math.abs(v)<.001&&(v=1),this.x=(c-u)/v,this.y=(M-f)/v,this.z=(s-o)/v,this.w=Math.acos((L+l+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W1(this.x,e.x,t.x),this.y=W1(this.y,e.y,t.y),this.z=W1(this.z,e.z,t.z),this.w=W1(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W1(this.x,e,t),this.y=W1(this.y,e,t),this.z=W1(this.z,e,t),this.w=W1(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(W1(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};te.prototype.isVector4=!0;var A2=te,z4=class extends B5{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:I2,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new A2(0,0,e,t),this.scissorTest=!1,this.viewport=new A2(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},H=new J2(r),V=i.count;for(let n=0;n<V;n++)this.textures[n]=H.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:I2,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,H=this.textures.length;r<H;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new x3(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},i5=class extends z4{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},a7=class extends J2{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=P2,this.minFilter=P2,this.wrapR=R5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var G4=class extends J2{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=P2,this.minFilter=P2,this.wrapR=R5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var c9=class c9{constructor(e,t,i,r,H,V,n,a,L,o,M,s,l,u,f,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,H,V,n,a,L,o,M,s,l,u,f,c)}set(e,t,i,r,H,V,n,a,L,o,M,s,l,u,f,c){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=H,d[5]=V,d[9]=n,d[13]=a,d[2]=L,d[6]=o,d[10]=M,d[14]=s,d[3]=l,d[7]=u,d[11]=f,d[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new c9().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/i3.setFromMatrixColumn(e,0).length(),H=1/i3.setFromMatrixColumn(e,1).length(),V=1/i3.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*H,t[5]=i[5]*H,t[6]=i[6]*H,t[7]=0,t[8]=i[8]*V,t[9]=i[9]*V,t[10]=i[10]*V,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,H=e.z,V=Math.cos(i),n=Math.sin(i),a=Math.cos(r),L=Math.sin(r),o=Math.cos(H),M=Math.sin(H);if(e.order==="XYZ"){let s=V*o,l=V*M,u=n*o,f=n*M;t[0]=a*o,t[4]=-a*M,t[8]=L,t[1]=l+u*L,t[5]=s-f*L,t[9]=-n*a,t[2]=f-s*L,t[6]=u+l*L,t[10]=V*a}else if(e.order==="YXZ"){let s=a*o,l=a*M,u=L*o,f=L*M;t[0]=s+f*n,t[4]=u*n-l,t[8]=V*L,t[1]=V*M,t[5]=V*o,t[9]=-n,t[2]=l*n-u,t[6]=f+s*n,t[10]=V*a}else if(e.order==="ZXY"){let s=a*o,l=a*M,u=L*o,f=L*M;t[0]=s-f*n,t[4]=-V*M,t[8]=u+l*n,t[1]=l+u*n,t[5]=V*o,t[9]=f-s*n,t[2]=-V*L,t[6]=n,t[10]=V*a}else if(e.order==="ZYX"){let s=V*o,l=V*M,u=n*o,f=n*M;t[0]=a*o,t[4]=u*L-l,t[8]=s*L+f,t[1]=a*M,t[5]=f*L+s,t[9]=l*L-u,t[2]=-L,t[6]=n*a,t[10]=V*a}else if(e.order==="YZX"){let s=V*a,l=V*L,u=n*a,f=n*L;t[0]=a*o,t[4]=f-s*M,t[8]=u*M+l,t[1]=M,t[5]=V*o,t[9]=-n*o,t[2]=-L*o,t[6]=l*M+u,t[10]=s-f*M}else if(e.order==="XZY"){let s=V*a,l=V*L,u=n*a,f=n*L;t[0]=a*o,t[4]=-M,t[8]=L*o,t[1]=s*M+f,t[5]=V*o,t[9]=l*M-u,t[2]=u*M-l,t[6]=n*o,t[10]=f*M+s}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PH,e,BH)}lookAt(e,t,i){let r=this.elements;return V5.subVectors(e,t),V5.lengthSq()===0&&(V5.z=1),V5.normalize(),s0.crossVectors(i,V5),s0.lengthSq()===0&&(Math.abs(i.z)===1?V5.x+=1e-4:V5.z+=1e-4,V5.normalize(),s0.crossVectors(i,V5)),s0.normalize(),a4.crossVectors(V5,s0),r[0]=s0.x,r[4]=a4.x,r[8]=V5.x,r[1]=s0.y,r[5]=a4.y,r[9]=V5.y,r[2]=s0.z,r[6]=a4.z,r[10]=V5.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,H=this.elements,V=i[0],n=i[4],a=i[8],L=i[12],o=i[1],M=i[5],s=i[9],l=i[13],u=i[2],f=i[6],c=i[10],d=i[14],v=i[3],y=i[7],h=i[11],g=i[15],Z=r[0],b=r[4],m=r[8],_=r[12],R=r[1],I=r[5],N=r[9],G=r[13],P=r[2],U=r[6],K=r[10],Y=r[14],r1=r[3],X=r[7],t1=r[11],i1=r[15];return H[0]=V*Z+n*R+a*P+L*r1,H[4]=V*b+n*I+a*U+L*X,H[8]=V*m+n*N+a*K+L*t1,H[12]=V*_+n*G+a*Y+L*i1,H[1]=o*Z+M*R+s*P+l*r1,H[5]=o*b+M*I+s*U+l*X,H[9]=o*m+M*N+s*K+l*t1,H[13]=o*_+M*G+s*Y+l*i1,H[2]=u*Z+f*R+c*P+d*r1,H[6]=u*b+f*I+c*U+d*X,H[10]=u*m+f*N+c*K+d*t1,H[14]=u*_+f*G+c*Y+d*i1,H[3]=v*Z+y*R+h*P+g*r1,H[7]=v*b+y*I+h*U+g*X,H[11]=v*m+y*N+h*K+g*t1,H[15]=v*_+y*G+h*Y+g*i1,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],H=e[12],V=e[1],n=e[5],a=e[9],L=e[13],o=e[2],M=e[6],s=e[10],l=e[14],u=e[3],f=e[7],c=e[11],d=e[15],v=a*l-L*s,y=n*l-L*M,h=n*s-a*M,g=V*l-L*o,Z=V*s-a*o,b=V*M-n*o;return t*(f*v-c*y+d*h)-i*(u*v-c*g+d*Z)+r*(u*y-f*g+d*b)-H*(u*h-f*Z+c*b)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],H=e[1],V=e[5],n=e[9],a=e[2],L=e[6],o=e[10];return t*(V*o-n*L)-i*(H*o-n*a)+r*(H*L-V*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],H=e[3],V=e[4],n=e[5],a=e[6],L=e[7],o=e[8],M=e[9],s=e[10],l=e[11],u=e[12],f=e[13],c=e[14],d=e[15],v=t*n-i*V,y=t*a-r*V,h=t*L-H*V,g=i*a-r*n,Z=i*L-H*n,b=r*L-H*a,m=o*f-M*u,_=o*c-s*u,R=o*d-l*u,I=M*c-s*f,N=M*d-l*f,G=s*d-l*c,P=v*G-y*N+h*I+g*R-Z*_+b*m;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return e[0]=(n*G-a*N+L*I)*U,e[1]=(r*N-i*G-H*I)*U,e[2]=(f*b-c*Z+d*g)*U,e[3]=(s*Z-M*b-l*g)*U,e[4]=(a*R-V*G-L*_)*U,e[5]=(t*G-r*R+H*_)*U,e[6]=(c*h-u*b-d*y)*U,e[7]=(o*b-s*h+l*y)*U,e[8]=(V*N-n*R+L*m)*U,e[9]=(i*R-t*N-H*m)*U,e[10]=(u*Z-f*h+d*v)*U,e[11]=(M*h-o*Z-l*v)*U,e[12]=(n*_-V*I-a*m)*U,e[13]=(t*I-i*_+r*m)*U,e[14]=(f*y-u*g-c*v)*U,e[15]=(o*g-M*y+s*v)*U,this}scale(e){let t=this.elements,i=e.x,r=e.y,H=e.z;return t[0]*=i,t[4]*=r,t[8]*=H,t[1]*=i,t[5]*=r,t[9]*=H,t[2]*=i,t[6]*=r,t[10]*=H,t[3]*=i,t[7]*=r,t[11]*=H,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),H=1-i,V=e.x,n=e.y,a=e.z,L=H*V,o=H*n;return this.set(L*V+i,L*n-r*a,L*a+r*n,0,L*n+r*a,o*n+i,o*a-r*V,0,L*a-r*n,o*a+r*V,H*a*a+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,H,V){return this.set(1,i,H,0,e,1,V,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,H=t._x,V=t._y,n=t._z,a=t._w,L=H+H,o=V+V,M=n+n,s=H*L,l=H*o,u=H*M,f=V*o,c=V*M,d=n*M,v=a*L,y=a*o,h=a*M,g=i.x,Z=i.y,b=i.z;return r[0]=(1-(f+d))*g,r[1]=(l+h)*g,r[2]=(u-y)*g,r[3]=0,r[4]=(l-h)*Z,r[5]=(1-(s+d))*Z,r[6]=(c+v)*Z,r[7]=0,r[8]=(u+y)*b,r[9]=(c-v)*b,r[10]=(1-(s+f))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let H=this.determinantAffine();if(H===0)return i.set(1,1,1),t.identity(),this;let V=i3.set(r[0],r[1],r[2]).length(),n=i3.set(r[4],r[5],r[6]).length(),a=i3.set(r[8],r[9],r[10]).length();H<0&&(V=-V),m5.copy(this);let L=1/V,o=1/n,M=1/a;return m5.elements[0]*=L,m5.elements[1]*=L,m5.elements[2]*=L,m5.elements[4]*=o,m5.elements[5]*=o,m5.elements[6]*=o,m5.elements[8]*=M,m5.elements[9]*=M,m5.elements[10]*=M,t.setFromRotationMatrix(m5),i.x=V,i.y=n,i.z=a,this}makePerspective(e,t,i,r,H,V,n=v5,a=!1){let L=this.elements,o=2*H/(t-e),M=2*H/(i-r),s=(t+e)/(t-e),l=(i+r)/(i-r),u,f;if(a)u=H/(V-H),f=V*H/(V-H);else if(n===v5)u=-(V+H)/(V-H),f=-2*V*H/(V-H);else if(n===m3)u=-V/(V-H),f=-V*H/(V-H);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return L[0]=o,L[4]=0,L[8]=s,L[12]=0,L[1]=0,L[5]=M,L[9]=l,L[13]=0,L[2]=0,L[6]=0,L[10]=u,L[14]=f,L[3]=0,L[7]=0,L[11]=-1,L[15]=0,this}makeOrthographic(e,t,i,r,H,V,n=v5,a=!1){let L=this.elements,o=2/(t-e),M=2/(i-r),s=-(t+e)/(t-e),l=-(i+r)/(i-r),u,f;if(a)u=1/(V-H),f=V/(V-H);else if(n===v5)u=-2/(V-H),f=-(V+H)/(V-H);else if(n===m3)u=-1/(V-H),f=-H/(V-H);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return L[0]=o,L[4]=0,L[8]=0,L[12]=s,L[1]=0,L[5]=M,L[9]=0,L[13]=l,L[2]=0,L[6]=0,L[10]=u,L[14]=f,L[3]=0,L[7]=0,L[11]=0,L[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};c9.prototype.isMatrix4=!0;var V2=c9,i3=new T,m5=new V2,PH=new T(0,0,0),BH=new T(1,1,1),s0=new T,a4=new T,V5=new T,dt=new V2,ct=new v2,d5=class C{constructor(e=0,t=0,i=0,r=C.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,H=r[0],V=r[4],n=r[8],a=r[1],L=r[5],o=r[9],M=r[2],s=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(W1(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-o,l),this._z=Math.atan2(-V,H)):(this._x=Math.atan2(s,L),this._z=0);break;case"YXZ":this._x=Math.asin(-W1(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(n,l),this._z=Math.atan2(a,L)):(this._y=Math.atan2(-M,H),this._z=0);break;case"ZXY":this._x=Math.asin(W1(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-M,l),this._z=Math.atan2(-V,L)):(this._y=0,this._z=Math.atan2(a,H));break;case"ZYX":this._y=Math.asin(-W1(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(s,l),this._z=Math.atan2(a,H)):(this._x=0,this._z=Math.atan2(-V,L));break;case"YZX":this._z=Math.asin(W1(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-o,L),this._y=Math.atan2(-M,H)):(this._x=0,this._y=Math.atan2(n,l));break;case"XZY":this._z=Math.asin(-W1(V,-1,1)),Math.abs(V)<.9999999?(this._x=Math.atan2(s,L),this._y=Math.atan2(n,H)):(this._x=Math.atan2(-o,l),this._y=0);break;default:R1("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return dt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dt,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ct.setFromEuler(this),this.setFromQuaternion(ct,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};d5.DEFAULT_ORDER="XYZ";var v3=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},IH=0,pt=new T,r3=new v2,W5=new V2,o4=new T,Q3=new T,FH=new T,DH=new v2,ut=new T(1,0,0),At=new T(0,1,0),mt=new T(0,0,1),ht={type:"added"},kH={type:"removed"},H3={type:"childadded",child:null},G6={type:"childremoved",child:null},j2=class C extends B5{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IH++}),this.uuid=U0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=C.DEFAULT_UP.clone();let e=new T,t=new d5,i=new v2,r=new T(1,1,1);function H(){i.setFromEuler(t,!1)}function V(){t.setFromQuaternion(i,void 0,!1)}t._onChange(H),i._onChange(V),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new V2},normalMatrix:{value:new I1}}),this.matrix=new V2,this.matrixWorld=new V2,this.matrixAutoUpdate=C.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=C.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return r3.setFromAxisAngle(e,t),this.quaternion.multiply(r3),this}rotateOnWorldAxis(e,t){return r3.setFromAxisAngle(e,t),this.quaternion.premultiply(r3),this}rotateX(e){return this.rotateOnAxis(ut,e)}rotateY(e){return this.rotateOnAxis(At,e)}rotateZ(e){return this.rotateOnAxis(mt,e)}translateOnAxis(e,t){return pt.copy(e).applyQuaternion(this.quaternion),this.position.add(pt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ut,e)}translateY(e){return this.translateOnAxis(At,e)}translateZ(e){return this.translateOnAxis(mt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(W5.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?o4.copy(e):o4.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Q3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?W5.lookAt(Q3,o4,this.up):W5.lookAt(o4,Q3,this.up),this.quaternion.setFromRotationMatrix(W5),r&&(W5.extractRotation(r.matrixWorld),r3.setFromRotationMatrix(W5),this.quaternion.premultiply(r3.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(P1("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ht),H3.child=e,this.dispatchEvent(H3),H3.child=null):P1("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kH),G6.child=e,this.dispatchEvent(G6),G6.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),W5.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),W5.multiply(e.parent.matrixWorld)),e.applyMatrix4(W5),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ht),H3.child=e,this.dispatchEvent(H3),H3.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let V=this.children[i].getObjectByProperty(e,t);if(V!==void 0)return V}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let H=0,V=r.length;H<V;H++)r[H].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Q3,e,FH),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Q3,DH,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,H=this.matrix.elements;H[12]+=t-H[0]*t-H[4]*i-H[8]*r,H[13]+=i-H[1]*t-H[5]*i-H[9]*r,H[14]+=r-H[2]*t-H[6]*i-H[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let H=this.children;for(let V=0,n=H.length;V<n;V++)H[V].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(n=>({...n,boundingBox:n.boundingBox?n.boundingBox.toJSON():void 0,boundingSphere:n.boundingSphere?n.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(n=>({...n})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function H(n,a){return n[a.uuid]===void 0&&(n[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=H(e.geometries,this.geometry);let n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){let a=n.shapes;if(Array.isArray(a))for(let L=0,o=a.length;L<o;L++){let M=a[L];H(e.shapes,M)}else H(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(H(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let n=[];for(let a=0,L=this.material.length;a<L;a++)n.push(H(e.materials,this.material[a]));r.material=n}else r.material=H(e.materials,this.material);if(this.children.length>0){r.children=[];for(let n=0;n<this.children.length;n++)r.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let n=0;n<this.animations.length;n++){let a=this.animations[n];r.animations.push(H(e.animations,a))}}if(t){let n=V(e.geometries),a=V(e.materials),L=V(e.textures),o=V(e.images),M=V(e.shapes),s=V(e.skeletons),l=V(e.animations),u=V(e.nodes);n.length>0&&(i.geometries=n),a.length>0&&(i.materials=a),L.length>0&&(i.textures=L),o.length>0&&(i.images=o),M.length>0&&(i.shapes=M),s.length>0&&(i.skeletons=s),l.length>0&&(i.animations=l),u.length>0&&(i.nodes=u)}return i.object=r,i;function V(n){let a=[];for(let L in n){let o=n[L];delete o.metadata,a.push(o)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};j2.DEFAULT_UP=new T(0,1,0);j2.DEFAULT_MATRIX_AUTO_UPDATE=!0;j2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var S5=class extends j2{constructor(){super(),this.isGroup=!0,this.type="Group"}},NH={type:"move"},S3=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new S5,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new S5,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new S5,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,H=null,V=null,n=this._targetRay,a=this._grip,L=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(L&&e.hand){V=!0;for(let f of e.hand.values()){let c=t.getJointPose(f,i),d=this._getHandJoint(L,f);c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=c.radius),d.visible=c!==null}let o=L.joints["index-finger-tip"],M=L.joints["thumb-tip"],s=o.position.distanceTo(M.position),l=.02,u=.005;L.inputState.pinching&&s>l+u?(L.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!L.inputState.pinching&&s<=l-u&&(L.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(H=t.getPose(e.gripSpace,i),H!==null&&(a.matrix.fromArray(H.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,H.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(H.linearVelocity)):a.hasLinearVelocity=!1,H.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(H.angularVelocity)):a.hasAngularVelocity=!1,a.eventsEnabled&&a.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&H!==null&&(r=H),r!==null&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(NH)))}return n!==null&&(n.visible=r!==null),a!==null&&(a.visible=H!==null),L!==null&&(L.visible=V!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new S5;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},SC={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},M0={h:0,s:0,l:0},s4={h:0,s:0,l:0};function W6(C,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?C+(e-C)*6*t:t<1/2?e:t<2/3?C+(e-C)*6*(2/3-t):C}var N1=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=z2){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y1.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Y1.workingColorSpace){return this.r=e,this.g=t,this.b=i,Y1.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Y1.workingColorSpace){if(e=W8(e,1),t=W1(t,0,1),i=W1(i,0,1),t===0)this.r=this.g=this.b=i;else{let H=i<=.5?i*(1+t):i+t-i*t,V=2*i-H;this.r=W6(V,H,e+1/3),this.g=W6(V,H,e),this.b=W6(V,H,e-1/3)}return Y1.colorSpaceToWorking(this,r),this}setStyle(e,t=z2){function i(H){H!==void 0&&parseFloat(H)<1&&R1("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let H,V=r[1],n=r[2];switch(V){case"rgb":case"rgba":if(H=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(H[4]),this.setRGB(Math.min(255,parseInt(H[1],10))/255,Math.min(255,parseInt(H[2],10))/255,Math.min(255,parseInt(H[3],10))/255,t);if(H=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(H[4]),this.setRGB(Math.min(100,parseInt(H[1],10))/100,Math.min(100,parseInt(H[2],10))/100,Math.min(100,parseInt(H[3],10))/100,t);break;case"hsl":case"hsla":if(H=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(H[4]),this.setHSL(parseFloat(H[1])/360,parseFloat(H[2])/100,parseFloat(H[3])/100,t);break;default:R1("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let H=r[1],V=H.length;if(V===3)return this.setRGB(parseInt(H.charAt(0),16)/15,parseInt(H.charAt(1),16)/15,parseInt(H.charAt(2),16)/15,t);if(V===6)return this.setHex(parseInt(H,16),t);R1("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=z2){let i=SC[e.toLowerCase()];return i!==void 0?this.setHex(i,t):R1("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Q5(e.r),this.g=Q5(e.g),this.b=Q5(e.b),this}copyLinearToSRGB(e){return this.r=p3(e.r),this.g=p3(e.g),this.b=p3(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=z2){return Y1.workingToColorSpace(U2.copy(this),e),Math.round(W1(U2.r*255,0,255))*65536+Math.round(W1(U2.g*255,0,255))*256+Math.round(W1(U2.b*255,0,255))}getHexString(e=z2){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y1.workingColorSpace){Y1.workingToColorSpace(U2.copy(this),t);let i=U2.r,r=U2.g,H=U2.b,V=Math.max(i,r,H),n=Math.min(i,r,H),a,L,o=(n+V)/2;if(n===V)a=0,L=0;else{let M=V-n;switch(L=o<=.5?M/(V+n):M/(2-V-n),V){case i:a=(r-H)/M+(r<H?6:0);break;case r:a=(H-i)/M+2;break;case H:a=(i-r)/M+4;break}a/=6}return e.h=a,e.s=L,e.l=o,e}getRGB(e,t=Y1.workingColorSpace){return Y1.workingToColorSpace(U2.copy(this),t),e.r=U2.r,e.g=U2.g,e.b=U2.b,e}getStyle(e=z2){Y1.workingToColorSpace(U2.copy(this),e);let t=U2.r,i=U2.g,r=U2.b;return e!==z2?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(M0),this.setHSL(M0.h+e,M0.s+t,M0.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(M0),e.getHSL(s4);let i=C7(M0.h,s4.h,t),r=C7(M0.s,s4.s,t),H=C7(M0.l,s4.l,t);return this.setHSL(i,r,H),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,H=e.elements;return this.r=H[0]*t+H[3]*i+H[6]*r,this.g=H[1]*t+H[4]*i+H[7]*r,this.b=H[2]*t+H[5]*i+H[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},U2=new N1;N1.NAMES=SC;var o7=class extends j2{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new d5,this.environmentIntensity=1,this.environmentRotation=new d5,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},h5=new T,X5=new T,X6=new T,q5=new T,V3=new T,n3=new T,ft=new T,q6=new T,$6=new T,Y6=new T,Q6=new A2,K6=new A2,J6=new A2,p0=class C{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),h5.subVectors(e,t),r.cross(h5);let H=r.lengthSq();return H>0?r.multiplyScalar(1/Math.sqrt(H)):r.set(0,0,0)}static getBarycoord(e,t,i,r,H){h5.subVectors(r,t),X5.subVectors(i,t),X6.subVectors(e,t);let V=h5.dot(h5),n=h5.dot(X5),a=h5.dot(X6),L=X5.dot(X5),o=X5.dot(X6),M=V*L-n*n;if(M===0)return H.set(0,0,0),null;let s=1/M,l=(L*a-n*o)*s,u=(V*o-n*a)*s;return H.set(1-l-u,u,l)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,q5)===null?!1:q5.x>=0&&q5.y>=0&&q5.x+q5.y<=1}static getInterpolation(e,t,i,r,H,V,n,a){return this.getBarycoord(e,t,i,r,q5)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(H,q5.x),a.addScaledVector(V,q5.y),a.addScaledVector(n,q5.z),a)}static getInterpolatedAttribute(e,t,i,r,H,V){return Q6.setScalar(0),K6.setScalar(0),J6.setScalar(0),Q6.fromBufferAttribute(e,t),K6.fromBufferAttribute(e,i),J6.fromBufferAttribute(e,r),V.setScalar(0),V.addScaledVector(Q6,H.x),V.addScaledVector(K6,H.y),V.addScaledVector(J6,H.z),V}static isFrontFacing(e,t,i,r){return h5.subVectors(i,t),X5.subVectors(e,t),h5.cross(X5).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return h5.subVectors(this.c,this.b),X5.subVectors(this.a,this.b),h5.cross(X5).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return C.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return C.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,H){return C.getInterpolation(e,this.a,this.b,this.c,t,i,r,H)}containsPoint(e){return C.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return C.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,H=this.c,V,n;V3.subVectors(r,i),n3.subVectors(H,i),q6.subVectors(e,i);let a=V3.dot(q6),L=n3.dot(q6);if(a<=0&&L<=0)return t.copy(i);$6.subVectors(e,r);let o=V3.dot($6),M=n3.dot($6);if(o>=0&&M<=o)return t.copy(r);let s=a*M-o*L;if(s<=0&&a>=0&&o<=0)return V=a/(a-o),t.copy(i).addScaledVector(V3,V);Y6.subVectors(e,H);let l=V3.dot(Y6),u=n3.dot(Y6);if(u>=0&&l<=u)return t.copy(H);let f=l*L-a*u;if(f<=0&&L>=0&&u<=0)return n=L/(L-u),t.copy(i).addScaledVector(n3,n);let c=o*u-l*M;if(c<=0&&M-o>=0&&l-u>=0)return ft.subVectors(H,r),n=(M-o)/(M-o+(l-u)),t.copy(r).addScaledVector(ft,n);let d=1/(c+f+s);return V=f*d,n=s*d,t.copy(i).addScaledVector(V3,V).addScaledVector(n3,n)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},u0=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(f5.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(f5.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=f5.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let H=i.getAttribute("position");if(t===!0&&H!==void 0&&e.isInstancedMesh!==!0)for(let V=0,n=H.count;V<n;V++)e.isMesh===!0?e.getVertexPosition(V,f5):f5.fromBufferAttribute(H,V),f5.applyMatrix4(e.matrixWorld),this.expandByPoint(f5);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),M4.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),M4.copy(i.boundingBox)),M4.applyMatrix4(e.matrixWorld),this.union(M4)}let r=e.children;for(let H=0,V=r.length;H<V;H++)this.expandByObject(r[H],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,f5),f5.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(K3),l4.subVectors(this.max,K3),L3.subVectors(e.a,K3),a3.subVectors(e.b,K3),o3.subVectors(e.c,K3),l0.subVectors(a3,L3),d0.subVectors(o3,a3),R0.subVectors(L3,o3);let t=[0,-l0.z,l0.y,0,-d0.z,d0.y,0,-R0.z,R0.y,l0.z,0,-l0.x,d0.z,0,-d0.x,R0.z,0,-R0.x,-l0.y,l0.x,0,-d0.y,d0.x,0,-R0.y,R0.x,0];return!j6(t,L3,a3,o3,l4)||(t=[1,0,0,0,1,0,0,0,1],!j6(t,L3,a3,o3,l4))?!1:(d4.crossVectors(l0,d0),t=[d4.x,d4.y,d4.z],j6(t,L3,a3,o3,l4))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,f5).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(f5).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($5[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$5[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$5[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$5[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$5[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$5[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$5[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$5[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($5),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$5=[new T,new T,new T,new T,new T,new T,new T,new T],f5=new T,M4=new u0,L3=new T,a3=new T,o3=new T,l0=new T,d0=new T,R0=new T,K3=new T,l4=new T,d4=new T,P0=new T;function j6(C,e,t,i,r){for(let H=0,V=C.length-3;H<=V;H+=3){P0.fromArray(C,H);let n=r.x*Math.abs(P0.x)+r.y*Math.abs(P0.y)+r.z*Math.abs(P0.z),a=e.dot(P0),L=t.dot(P0),o=i.dot(P0);if(Math.max(-Math.max(a,L,o),Math.min(a,L,o))>n)return!1}return!0}var _2=new T,c4=new f1,UH=0,l5=class extends B5{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UH++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mC,this.updateRanges=[],this.gpuType=y5,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,H=this.itemSize;r<H;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)c4.fromBufferAttribute(this,t),c4.applyMatrix3(e),this.setXY(t,c4.x,c4.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_2.fromBufferAttribute(this,t),_2.applyMatrix3(e),this.setXYZ(t,_2.x,_2.y,_2.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_2.fromBufferAttribute(this,t),_2.applyMatrix4(e),this.setXYZ(t,_2.x,_2.y,_2.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_2.fromBufferAttribute(this,t),_2.applyNormalMatrix(e),this.setXYZ(t,_2.x,_2.y,_2.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_2.fromBufferAttribute(this,t),_2.transformDirection(e),this.setXYZ(t,_2.x,_2.y,_2.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=c3(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Q2(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=c3(t,this.array)),t}setX(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=c3(t,this.array)),t}setY(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=c3(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=c3(t,this.array)),t}setW(e,t){return this.normalized&&(t=Q2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Q2(t,this.array),i=Q2(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Q2(t,this.array),i=Q2(i,this.array),r=Q2(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,H){return e*=this.itemSize,this.normalized&&(t=Q2(t,this.array),i=Q2(i,this.array),r=Q2(r,this.array),H=Q2(H,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=H,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var s7=class extends l5{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var M7=class extends l5{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var K2=class extends l5{constructor(e,t,i){super(new Float32Array(e),t,i)}},zH=new u0,J3=new T,e8=new T,g3=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zH.setFromPoints(e).getCenter(i);let r=0;for(let H=0,V=e.length;H<V;H++)r=Math.max(r,i.distanceToSquared(e[H]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;J3.subVectors(e,this.center);let t=J3.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(J3,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(e8.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(J3.copy(e.center).add(e8)),this.expandByPoint(J3.copy(e.center).sub(e8))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},GH=0,M5=new V2,t8=new j2,s3=new T,n5=new u0,j3=new u0,R2=new T,g5=class C extends B5{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GH++}),this.uuid=U0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dH(e)?M7:s7)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let H=new I1().getNormalMatrix(e);i.applyNormalMatrix(H),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return M5.makeRotationFromQuaternion(e),this.applyMatrix4(M5),this}rotateX(e){return M5.makeRotationX(e),this.applyMatrix4(M5),this}rotateY(e){return M5.makeRotationY(e),this.applyMatrix4(M5),this}rotateZ(e){return M5.makeRotationZ(e),this.applyMatrix4(M5),this}translate(e,t,i){return M5.makeTranslation(e,t,i),this.applyMatrix4(M5),this}scale(e,t,i){return M5.makeScale(e,t,i),this.applyMatrix4(M5),this}lookAt(e){return t8.lookAt(e),t8.updateMatrix(),this.applyMatrix4(t8.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(s3).negate(),this.translate(s3.x,s3.y,s3.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,H=e.length;r<H;r++){let V=e[r];i.push(V.x,V.y,V.z||0)}this.setAttribute("position",new K2(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let H=e[r];t.setXYZ(r,H.x,H.y,H.z||0)}e.length>t.count&&R1("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new u0);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){P1("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let H=t[i];n5.setFromBufferAttribute(H),this.morphTargetsRelative?(R2.addVectors(this.boundingBox.min,n5.min),this.boundingBox.expandByPoint(R2),R2.addVectors(this.boundingBox.max,n5.max),this.boundingBox.expandByPoint(R2)):(this.boundingBox.expandByPoint(n5.min),this.boundingBox.expandByPoint(n5.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&P1('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new g3);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){P1("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(n5.setFromBufferAttribute(e),t)for(let H=0,V=t.length;H<V;H++){let n=t[H];j3.setFromBufferAttribute(n),this.morphTargetsRelative?(R2.addVectors(n5.min,j3.min),n5.expandByPoint(R2),R2.addVectors(n5.max,j3.max),n5.expandByPoint(R2)):(n5.expandByPoint(j3.min),n5.expandByPoint(j3.max))}n5.getCenter(i);let r=0;for(let H=0,V=e.count;H<V;H++)R2.fromBufferAttribute(e,H),r=Math.max(r,i.distanceToSquared(R2));if(t)for(let H=0,V=t.length;H<V;H++){let n=t[H],a=this.morphTargetsRelative;for(let L=0,o=n.count;L<o;L++)R2.fromBufferAttribute(n,L),a&&(s3.fromBufferAttribute(e,L),R2.add(s3)),r=Math.max(r,i.distanceToSquared(R2))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&P1('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){P1("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,H=t.uv,V=this.getAttribute("tangent");(V===void 0||V.count!==i.count)&&(V=new l5(new Float32Array(4*i.count),4),this.setAttribute("tangent",V));let n=[],a=[];for(let m=0;m<i.count;m++)n[m]=new T,a[m]=new T;let L=new T,o=new T,M=new T,s=new f1,l=new f1,u=new f1,f=new T,c=new T;function d(m,_,R){L.fromBufferAttribute(i,m),o.fromBufferAttribute(i,_),M.fromBufferAttribute(i,R),s.fromBufferAttribute(H,m),l.fromBufferAttribute(H,_),u.fromBufferAttribute(H,R),o.sub(L),M.sub(L),l.sub(s),u.sub(s);let I=1/(l.x*u.y-u.x*l.y);isFinite(I)&&(f.copy(o).multiplyScalar(u.y).addScaledVector(M,-l.y).multiplyScalar(I),c.copy(M).multiplyScalar(l.x).addScaledVector(o,-u.x).multiplyScalar(I),n[m].add(f),n[_].add(f),n[R].add(f),a[m].add(c),a[_].add(c),a[R].add(c))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let m=0,_=v.length;m<_;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new T,h=new T,g=new T,Z=new T;function b(m){g.fromBufferAttribute(r,m),Z.copy(g);let _=n[m];y.copy(_),y.sub(g.multiplyScalar(g.dot(_))).normalize(),h.crossVectors(Z,_);let I=h.dot(a[m])<0?-1:1;V.setXYZW(m,y.x,y.y,y.z,I)}for(let m=0,_=v.length;m<_;++m){let R=v[m],I=R.start,N=R.count;for(let G=I,P=I+N;G<P;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new l5(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let s=0,l=i.count;s<l;s++)i.setXYZ(s,0,0,0);let r=new T,H=new T,V=new T,n=new T,a=new T,L=new T,o=new T,M=new T;if(e)for(let s=0,l=e.count;s<l;s+=3){let u=e.getX(s+0),f=e.getX(s+1),c=e.getX(s+2);r.fromBufferAttribute(t,u),H.fromBufferAttribute(t,f),V.fromBufferAttribute(t,c),o.subVectors(V,H),M.subVectors(r,H),o.cross(M),n.fromBufferAttribute(i,u),a.fromBufferAttribute(i,f),L.fromBufferAttribute(i,c),n.add(o),a.add(o),L.add(o),i.setXYZ(u,n.x,n.y,n.z),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(c,L.x,L.y,L.z)}else for(let s=0,l=t.count;s<l;s+=3)r.fromBufferAttribute(t,s+0),H.fromBufferAttribute(t,s+1),V.fromBufferAttribute(t,s+2),o.subVectors(V,H),M.subVectors(r,H),o.cross(M),i.setXYZ(s+0,o.x,o.y,o.z),i.setXYZ(s+1,o.x,o.y,o.z),i.setXYZ(s+2,o.x,o.y,o.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)R2.fromBufferAttribute(e,t),R2.normalize(),e.setXYZ(t,R2.x,R2.y,R2.z)}toNonIndexed(){function e(n,a){let L=n.array,o=n.itemSize,M=n.normalized,s=new L.constructor(a.length*o),l=0,u=0;for(let f=0,c=a.length;f<c;f++){n.isInterleavedBufferAttribute?l=a[f]*n.data.stride+n.offset:l=a[f]*o;for(let d=0;d<o;d++)s[u++]=L[l++]}return new l5(s,o,M)}if(this.index===null)return R1("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new C,i=this.index.array,r=this.attributes;for(let n in r){let a=r[n],L=e(a,i);t.setAttribute(n,L)}let H=this.morphAttributes;for(let n in H){let a=[],L=H[n];for(let o=0,M=L.length;o<M;o++){let s=L[o],l=e(s,i);a.push(l)}t.morphAttributes[n]=a}t.morphTargetsRelative=this.morphTargetsRelative;let V=this.groups;for(let n=0,a=V.length;n<a;n++){let L=V[n];t.addGroup(L.start,L.count,L.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let L in a)a[L]!==void 0&&(e[L]=a[L]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let a in i){let L=i[a];e.data.attributes[a]=L.toJSON(e.data)}let r={},H=!1;for(let a in this.morphAttributes){let L=this.morphAttributes[a],o=[];for(let M=0,s=L.length;M<s;M++){let l=L[M];o.push(l.toJSON(e.data))}o.length>0&&(r[a]=o,H=!0)}H&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let V=this.groups;V.length>0&&(e.data.groups=JSON.parse(JSON.stringify(V)));let n=this.boundingSphere;return n!==null&&(e.data.boundingSphere=n.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let L in r){let o=r[L];this.setAttribute(L,o.clone(t))}let H=e.morphAttributes;for(let L in H){let o=[],M=H[L];for(let s=0,l=M.length;s<l;s++)o.push(M[s].clone(t));this.morphAttributes[L]=o}this.morphTargetsRelative=e.morphTargetsRelative;let V=e.groups;for(let L=0,o=V.length;L<o;L++){let M=V[L];this.addGroup(M.start,M.count,M.materialIndex)}let n=e.boundingBox;n!==null&&(this.boundingBox=n.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var C8=new T,WH=new T,XH=new I1,x5=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=C8.subVectors(i,t).cross(WH.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(C8),H=this.normal.dot(r);if(H===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let V=-(e.start.dot(this.normal)+this.constant)/H;return i===!0&&(V<0||V>1)?null:t.copy(e.start).addScaledVector(r,V)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||XH.getNormalMatrix(e),r=this.coplanarPoint(C8).applyMatrix4(e),H=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(H),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qH=0,A0=class extends B5{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qH++}),this.uuid=U0(),this.name="",this.type="Material",this.blending=R3,this.side=S0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=g8,this.blendDst=Z8,this.blendEquation=k0,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new N1(0,0,0),this.blendAlpha=0,this.depthFunc=A3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=MC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=w4,this.stencilZFail=w4,this.stencilZPass=w4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){R1(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){R1(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(H=>H.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(H){let V=[];for(let n in H){let a=H[n];delete a.metadata,V.push(a)}return V}if(t){let H=r(e.textures),V=r(e.images);H.length>0&&(i.textures=H),V.length>0&&(i.images=V)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new N1().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new x5().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new f1().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new f1().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let H=0;H!==r;++H)i[H]=t[H].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Y5=new T,i8=new T,p4=new T,u4=new T,l7=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Y5)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Y5.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Y5.copy(this.origin).addScaledVector(this.direction,t),Y5.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){i8.copy(e).add(t).multiplyScalar(.5),p4.copy(t).sub(e).normalize(),u4.copy(this.origin).sub(i8);let H=e.distanceTo(t)*.5,V=-this.direction.dot(p4),n=u4.dot(this.direction),a=-u4.dot(p4),L=u4.lengthSq(),o=Math.abs(1-V*V),M,s,l,u;if(o>0)if(M=V*a-n,s=V*n-a,u=H*o,M>=0)if(s>=-u)if(s<=u){let f=1/o;M*=f,s*=f,l=M*(M+V*s+2*n)+s*(V*M+s+2*a)+L}else s=H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;else s=-H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;else s<=-u?(M=Math.max(0,-(-V*H+n)),s=M>0?-H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+L):s<=u?(M=0,s=Math.min(Math.max(-H,-a),H),l=s*(s+2*a)+L):(M=Math.max(0,-(V*H+n)),s=M>0?H:Math.min(Math.max(-H,-a),H),l=-M*M+s*(s+2*a)+L);else s=V>0?-H:H,M=Math.max(0,-(V*s+n)),l=-M*M+s*(s+2*a)+L;return i&&i.copy(this.origin).addScaledVector(this.direction,M),r&&r.copy(i8).addScaledVector(p4,s),l}intersectSphere(e,t){if(e.radius<0)return null;Y5.subVectors(e.center,this.origin);let i=Y5.dot(this.direction),r=Y5.dot(Y5)-i*i,H=e.radius*e.radius;if(r>H)return null;let V=Math.sqrt(H-r),n=i-V,a=i+V;return a<0?null:n<0?this.at(a,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,H,V,n,a,L=1/this.direction.x,o=1/this.direction.y,M=1/this.direction.z,s=this.origin;return L>=0?(i=(e.min.x-s.x)*L,r=(e.max.x-s.x)*L):(i=(e.max.x-s.x)*L,r=(e.min.x-s.x)*L),o>=0?(H=(e.min.y-s.y)*o,V=(e.max.y-s.y)*o):(H=(e.max.y-s.y)*o,V=(e.min.y-s.y)*o),i>V||H>r||((H>i||isNaN(i))&&(i=H),(V<r||isNaN(r))&&(r=V),M>=0?(n=(e.min.z-s.z)*M,a=(e.max.z-s.z)*M):(n=(e.max.z-s.z)*M,a=(e.min.z-s.z)*M),i>a||n>r)||((n>i||i!==i)&&(i=n),(a<r||r!==r)&&(r=a),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Y5)!==null}intersectTriangle(e,t,i,r,H){let V=this.origin,n=this.direction,a=n.x,L=n.y,o=n.z,M=e.x-V.x,s=e.y-V.y,l=e.z-V.z,u=t.x-V.x,f=t.y-V.y,c=t.z-V.z,d=i.x-V.x,v=i.y-V.y,y=i.z-V.z,h=Math.abs(a),g=Math.abs(L),Z=Math.abs(o),b,m,_,R,I,N,G,P,U,K,Y,r1;if(h>=g&&h>=Z?(_=a,N=M,U=u,r1=d,a>=0?(b=L,m=o,R=s,I=l,G=f,P=c,K=v,Y=y):(b=o,m=L,R=l,I=s,G=c,P=f,K=y,Y=v)):g>=Z?(_=L,N=s,U=f,r1=v,L>=0?(b=o,m=a,R=l,I=M,G=c,P=u,K=y,Y=d):(b=a,m=o,R=M,I=l,G=u,P=c,K=d,Y=y)):(_=o,N=l,U=c,r1=y,o>=0?(b=a,m=L,R=M,I=s,G=u,P=f,K=d,Y=v):(b=L,m=a,R=s,I=M,G=f,P=u,K=v,Y=d)),_===0)return null;let X=b/_,t1=m/_,i1=1/_,O1=R-X*N,T1=I-t1*N,a2=G-X*U,Q1=P-t1*U,j1=K-X*r1,q=Y-t1*r1,e1=j1*Q1-q*a2,x1=O1*q-T1*j1,D1=a2*T1-Q1*O1;if(r){if(e1<0||x1<0||D1<0)return null}else if((e1<0||x1<0||D1<0)&&(e1>0||x1>0||D1>0))return null;let m1=e1+x1+D1;if(m1===0)return null;let G1=i1*(e1*N+x1*U+D1*r1);return(m1>0?G1<0:G1>0)?null:this.at(G1/m1,H)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},d7=class extends A0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new N1(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new d5,this.combine=_8,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xt=new V2,B0=new l7,A4=new g3,vt=new T,m4=new T,h4=new T,f4=new T,r8=new T,x4=new T,St=new T,v4=new T,e5=class extends j2{constructor(e=new g5,t=new d7){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let H=0,V=r.length;H<V;H++){let n=r[H].name||String(H);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=H}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,H=i.morphAttributes.position,V=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(H&&n){x4.set(0,0,0);for(let a=0,L=H.length;a<L;a++){let o=n[a],M=H[a];o!==0&&(r8.fromBufferAttribute(M,e),V?x4.addScaledVector(r8,o):x4.addScaledVector(r8.sub(t),o))}t.add(x4)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,H=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),A4.copy(i.boundingSphere),A4.applyMatrix4(H),B0.copy(e.ray).recast(e.near),!(A4.containsPoint(B0.origin)===!1&&(B0.intersectSphere(A4,vt)===null||B0.origin.distanceToSquared(vt)>(e.far-e.near)**2))&&(xt.copy(H).invert(),B0.copy(e.ray).applyMatrix4(xt),!(i.boundingBox!==null&&B0.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,B0)))}_computeIntersections(e,t,i){let r,H=this.geometry,V=this.material,n=H.index,a=H.attributes.position,L=H.attributes.uv,o=H.attributes.uv1,M=H.attributes.normal,s=H.groups,l=H.drawRange;if(n!==null)if(Array.isArray(V))for(let u=0,f=s.length;u<f;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),y=Math.min(n.count,Math.min(c.start+c.count,l.start+l.count));for(let h=v,g=y;h<g;h+=3){let Z=n.getX(h),b=n.getX(h+1),m=n.getX(h+2);r=S4(this,d,e,i,L,o,M,Z,b,m),r&&(r.faceIndex=Math.floor(h/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{let u=Math.max(0,l.start),f=Math.min(n.count,l.start+l.count);for(let c=u,d=f;c<d;c+=3){let v=n.getX(c),y=n.getX(c+1),h=n.getX(c+2);r=S4(this,V,e,i,L,o,M,v,y,h),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(V))for(let u=0,f=s.length;u<f;u++){let c=s[u],d=V[c.materialIndex],v=Math.max(c.start,l.start),y=Math.min(a.count,Math.min(c.start+c.count,l.start+l.count));for(let h=v,g=y;h<g;h+=3){let Z=h,b=h+1,m=h+2;r=S4(this,d,e,i,L,o,M,Z,b,m),r&&(r.faceIndex=Math.floor(h/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{let u=Math.max(0,l.start),f=Math.min(a.count,l.start+l.count);for(let c=u,d=f;c<d;c+=3){let v=c,y=c+1,h=c+2;r=S4(this,V,e,i,L,o,M,v,y,h),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}}};function $H(C,e,t,i,r,H,V,n){let a;if(e.side===t5?a=i.intersectTriangle(V,H,r,!0,n):a=i.intersectTriangle(r,H,V,e.side===S0,n),a===null)return null;v4.copy(n),v4.applyMatrix4(C.matrixWorld);let L=t.ray.origin.distanceTo(v4);return L<t.near||L>t.far?null:{distance:L,point:v4.clone(),object:C}}function S4(C,e,t,i,r,H,V,n,a,L){C.getVertexPosition(n,m4),C.getVertexPosition(a,h4),C.getVertexPosition(L,f4);let o=$H(C,e,t,i,m4,h4,f4,St);if(o){let M=new T;p0.getBarycoord(St,m4,h4,f4,M),r&&(o.uv=p0.getInterpolatedAttribute(r,n,a,L,M,new f1)),H&&(o.uv1=p0.getInterpolatedAttribute(H,n,a,L,M,new f1)),V&&(o.normal=p0.getInterpolatedAttribute(V,n,a,L,M,new T),o.normal.dot(i.direction)>0&&o.normal.multiplyScalar(-1));let s={a:n,b:a,c:L,normal:new T,materialIndex:0};p0.getNormal(m4,h4,f4,s.normal),o.face=s,o.barycoord=M}return o}var W4=class extends J2{constructor(e=null,t=1,i=1,r,H,V,n,a,L=P2,o=P2,M,s){super(null,V,n,a,L,o,r,H,M,s),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var I0=new g3,YH=new f1(.5,.5),g4=new T,Z3=class{constructor(e=new x5,t=new x5,i=new x5,r=new x5,H=new x5,V=new x5){this.planes=[e,t,i,r,H,V]}set(e,t,i,r,H,V){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(H),n[5].copy(V),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=v5,i=!1){let r=this.planes,H=e.elements,V=H[0],n=H[1],a=H[2],L=H[3],o=H[4],M=H[5],s=H[6],l=H[7],u=H[8],f=H[9],c=H[10],d=H[11],v=H[12],y=H[13],h=H[14],g=H[15];if(r[0].setComponents(L-V,l-o,d-u,g-v).normalize(),r[1].setComponents(L+V,l+o,d+u,g+v).normalize(),r[2].setComponents(L+n,l+M,d+f,g+y).normalize(),r[3].setComponents(L-n,l-M,d-f,g-y).normalize(),i)r[4].setComponents(a,s,c,h).normalize(),r[5].setComponents(L-a,l-s,d-c,g-h).normalize();else if(r[4].setComponents(L-a,l-s,d-c,g-h).normalize(),t===v5)r[5].setComponents(L+a,l+s,d+c,g+h).normalize();else if(t===m3)r[5].setComponents(a,s,c,h).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),I0.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),I0.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(I0)}intersectsSprite(e){I0.center.set(0,0,0);let t=YH.distanceTo(e.center);return I0.radius=.7071067811865476+t,I0.applyMatrix4(e.matrixWorld),this.intersectsSphere(I0)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let H=0;H<6;H++)if(t[H].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(g4.x=r.normal.x>0?e.max.x:e.min.x,g4.y=r.normal.y>0?e.max.y:e.min.y,g4.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(g4)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var c7=class extends J2{constructor(e=[],t=g0,i,r,H,V,n,a,L,o){super(e,t,i,r,H,V,n,a,L,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},p7=class extends J2{constructor(e,t,i,r,H,V,n,a,L){super(e,t,i,r,H,V,n,a,L),this.isCanvasTexture=!0,this.needsUpdate=!0}};var m0=class extends J2{constructor(e,t,i=_5,r,H,V,n=P2,a=P2,L,o=P5,M=1){if(o!==P5&&o!==_0)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let s={width:e,height:t,depth:M};super(s,r,H,V,n,a,o,i,L),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new x3(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},X4=class extends m0{constructor(e,t=_5,i=g0,r,H,V=P2,n=P2,a,L=P5){let o={width:e,height:e,depth:1},M=[o,o,o,o,o,o];super(e,e,t,i,r,H,V,n,a,L),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},u7=class extends J2{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},h0=class C extends g5{constructor(e=1,t=1,i=1,r=1,H=1,V=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:H,depthSegments:V};let n=this;r=Math.floor(r),H=Math.floor(H),V=Math.floor(V);let a=[],L=[],o=[],M=[],s=0,l=0;u("z","y","x",-1,-1,i,t,e,V,H,0),u("z","y","x",1,-1,i,t,-e,V,H,1),u("x","z","y",1,1,e,i,t,r,V,2),u("x","z","y",1,-1,e,i,-t,r,V,3),u("x","y","z",1,-1,e,t,i,r,H,4),u("x","y","z",-1,-1,e,t,-i,r,H,5),this.setIndex(a),this.setAttribute("position",new K2(L,3)),this.setAttribute("normal",new K2(o,3)),this.setAttribute("uv",new K2(M,2));function u(f,c,d,v,y,h,g,Z,b,m,_){let R=h/b,I=g/m,N=h/2,G=g/2,P=Z/2,U=b+1,K=m+1,Y=0,r1=0,X=new T;for(let t1=0;t1<K;t1++){let i1=t1*I-G;for(let O1=0;O1<U;O1++){let T1=O1*R-N;X[f]=T1*v,X[c]=i1*y,X[d]=P,L.push(X.x,X.y,X.z),X[f]=0,X[c]=0,X[d]=Z>0?1:-1,o.push(X.x,X.y,X.z),M.push(O1/b),M.push(1-t1/m),Y+=1}}for(let t1=0;t1<m;t1++)for(let i1=0;i1<b;i1++){let O1=s+i1+U*t1,T1=s+i1+U*(t1+1),a2=s+(i1+1)+U*(t1+1),Q1=s+(i1+1)+U*t1;a.push(O1,T1,Q1),a.push(T1,a2,Q1),r1+=6}n.addGroup(l,r1,_),l+=r1,s+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var L5=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R1("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),H=0;t.push(0);for(let V=1;V<=e;V++)i=this.getPoint(V/e),H+=i.distanceTo(r),t.push(H),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,H=i.length,V;t?V=t:V=e*i[H-1];let n=0,a=H-1,L;for(;n<=a;)if(r=Math.floor(n+(a-n)/2),L=i[r]-V,L<0)n=r+1;else if(L>0)a=r-1;else{a=r;break}if(r=a,i[r]===V)return r/(H-1);let o=i[r],s=i[r+1]-o,l=(V-o)/s;return(r+l)/(H-1)}getTangent(e,t){let r=e-1e-4,H=e+1e-4;r<0&&(r=0),H>1&&(H=1);let V=this.getPoint(r),n=this.getPoint(H),a=t||(V.isVector2?new f1:new T);return a.copy(n).sub(V).normalize(),a}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,r=[],H=[],V=[],n=new T,a=new V2;for(let l=0;l<=e;l++){let u=l/e;r[l]=this.getTangentAt(u,new T)}H[0]=new T,V[0]=new T;let L=Number.MAX_VALUE,o=Math.abs(r[0].x),M=Math.abs(r[0].y),s=Math.abs(r[0].z);o<=L&&(L=o,i.set(1,0,0)),M<=L&&(L=M,i.set(0,1,0)),s<=L&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),H[0].crossVectors(r[0],n),V[0].crossVectors(r[0],H[0]);for(let l=1;l<=e;l++){if(H[l]=H[l-1].clone(),V[l]=V[l-1].clone(),n.crossVectors(r[l-1],r[l]),n.length()>Number.EPSILON){n.normalize();let u=Math.acos(W1(r[l-1].dot(r[l]),-1,1));H[l].applyMatrix4(a.makeRotationAxis(n,u))}V[l].crossVectors(r[l],H[l])}if(t===!0){let l=Math.acos(W1(H[0].dot(H[e]),-1,1));l/=e,r[0].dot(n.crossVectors(H[0],H[e]))>0&&(l=-l);for(let u=1;u<=e;u++)H[u].applyMatrix4(a.makeRotationAxis(r[u],l*u)),V[u].crossVectors(r[u],H[u])}return{tangents:r,normals:H,binormals:V}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_3=class extends L5{constructor(e=0,t=0,i=1,r=1,H=0,V=Math.PI*2,n=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=H,this.aEndAngle=V,this.aClockwise=n,this.aRotation=a}getPoint(e,t=new f1){let i=t,r=Math.PI*2,H=this.aEndAngle-this.aStartAngle,V=Math.abs(H)<Number.EPSILON;for(;H<0;)H+=r;for(;H>r;)H-=r;H<Number.EPSILON&&(V?H=0:H=r),this.aClockwise===!0&&!V&&(H===r?H=-r:H=H-r);let n=this.aStartAngle+e*H,a=this.aX+this.xRadius*Math.cos(n),L=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let o=Math.cos(this.aRotation),M=Math.sin(this.aRotation),s=a-this.aX,l=L-this.aY;a=s*o-l*M+this.aX,L=s*M+l*o+this.aY}return i.set(a,L)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},q4=class extends _3{constructor(e,t,i,r,H,V){super(e,t,i,i,r,H,V),this.isArcCurve=!0,this.type="ArcCurve"}};function q8(){let C=0,e=0,t=0,i=0;function r(H,V,n,a){C=H,e=n,t=-3*H+3*V-2*n-a,i=2*H-2*V+n+a}return{initCatmullRom:function(H,V,n,a,L){r(V,n,L*(n-H),L*(a-V))},initNonuniformCatmullRom:function(H,V,n,a,L,o,M){let s=(V-H)/L-(n-H)/(L+o)+(n-V)/o,l=(n-V)/o-(a-V)/(o+M)+(a-n)/M;s*=o,l*=o,r(V,n,s,l)},calc:function(H){let V=H*H,n=V*H;return C+e*H+t*V+i*n}}}var gt=new T,Zt=new T,H8=new q8,V8=new q8,n8=new q8,$4=class extends L5{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){let i=t,r=this.points,H=r.length,V=(H-(this.closed?0:1))*e,n=Math.floor(V),a=V-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/H)+1)*H:a===0&&n===H-1&&(n=H-2,a=1);let L,o;this.closed||n>0?L=r[(n-1)%H]:(Zt.subVectors(r[0],r[1]).add(r[0]),L=Zt);let M=r[n%H],s=r[(n+1)%H];if(this.closed||n+2<H?o=r[(n+2)%H]:(gt.subVectors(r[H-1],r[H-2]).add(r[H-1]),o=gt),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,u=Math.pow(L.distanceToSquared(M),l),f=Math.pow(M.distanceToSquared(s),l),c=Math.pow(s.distanceToSquared(o),l);f<1e-4&&(f=1),u<1e-4&&(u=f),c<1e-4&&(c=f),H8.initNonuniformCatmullRom(L.x,M.x,s.x,o.x,u,f,c),V8.initNonuniformCatmullRom(L.y,M.y,s.y,o.y,u,f,c),n8.initNonuniformCatmullRom(L.z,M.z,s.z,o.z,u,f,c)}else this.curveType==="catmullrom"&&(H8.initCatmullRom(L.x,M.x,s.x,o.x,this.tension),V8.initCatmullRom(L.y,M.y,s.y,o.y,this.tension),n8.initCatmullRom(L.z,M.z,s.z,o.z,this.tension));return i.set(H8.calc(a),V8.calc(a),n8.calc(a)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _t(C,e,t,i,r){let H=(i-e)*.5,V=(r-t)*.5,n=C*C,a=C*n;return(2*t-2*i+H+V)*a+(-3*t+3*i-2*H-V)*n+H*C+t}function QH(C,e){let t=1-C;return t*t*e}function KH(C,e){return 2*(1-C)*C*e}function JH(C,e){return C*C*e}function i7(C,e,t,i){return QH(C,e)+KH(C,t)+JH(C,i)}function jH(C,e){let t=1-C;return t*t*t*e}function eV(C,e){let t=1-C;return 3*t*t*C*e}function tV(C,e){return 3*(1-C)*C*C*e}function CV(C,e){return C*C*C*e}function r7(C,e,t,i,r){return jH(C,e)+eV(C,t)+tV(C,i)+CV(C,r)}var A7=class extends L5{constructor(e=new f1,t=new f1,i=new f1,r=new f1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new f1){let i=t,r=this.v0,H=this.v1,V=this.v2,n=this.v3;return i.set(r7(e,r.x,H.x,V.x,n.x),r7(e,r.y,H.y,V.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Y4=class extends L5{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){let i=t,r=this.v0,H=this.v1,V=this.v2,n=this.v3;return i.set(r7(e,r.x,H.x,V.x,n.x),r7(e,r.y,H.y,V.y,n.y),r7(e,r.z,H.z,V.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},m7=class extends L5{constructor(e=new f1,t=new f1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new f1){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new f1){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Q4=class extends L5{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},h7=class extends L5{constructor(e=new f1,t=new f1,i=new f1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new f1){let i=t,r=this.v0,H=this.v1,V=this.v2;return i.set(i7(e,r.x,H.x,V.x),i7(e,r.y,H.y,V.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},K4=class extends L5{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,r=this.v0,H=this.v1,V=this.v2;return i.set(i7(e,r.x,H.x,V.x),i7(e,r.y,H.y,V.y),i7(e,r.z,H.z,V.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},f7=class extends L5{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new f1){let i=t,r=this.points,H=(r.length-1)*e,V=Math.floor(H),n=H-V,a=r[V===0?V:V-1],L=r[V],o=r[V>r.length-2?r.length-1:V+1],M=r[V>r.length-3?r.length-1:V+2];return i.set(_t(n,a.x,L.x,o.x,M.x),_t(n,a.y,L.y,o.y,M.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new f1().fromArray(r))}return this}},yt=Object.freeze({__proto__:null,ArcCurve:q4,CatmullRomCurve3:$4,CubicBezierCurve:A7,CubicBezierCurve3:Y4,EllipseCurve:_3,LineCurve:m7,LineCurve3:Q4,QuadraticBezierCurve:h7,QuadraticBezierCurve3:K4,SplineCurve:f7}),J4=class extends L5{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yt[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),H=0;for(;H<r.length;){if(r[H]>=i){let V=r[H]-i,n=this.curves[H],a=n.getLength(),L=a===0?0:1-V/a;return n.getPointAt(L,t)}H++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,H=this.curves;r<H.length;r++){let V=H[r],n=V.isEllipseCurve?e*2:V.isLineCurve||V.isLineCurve3?1:V.isSplineCurve?e*V.points.length:e,a=V.getPoints(n);for(let L=0;L<a.length;L++){let o=a[L];i&&i.equals(o)||(t.push(o),i=o)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new yt[r.type]().fromJSON(r))}return this}},x7=class extends J4{constructor(e){super(),this.type="Path",this.currentPoint=new f1,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new m7(this.currentPoint.clone(),new f1(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let H=new h7(this.currentPoint.clone(),new f1(e,t),new f1(i,r));return this.curves.push(H),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,H,V){let n=new A7(this.currentPoint.clone(),new f1(e,t),new f1(i,r),new f1(H,V));return this.curves.push(n),this.currentPoint.set(H,V),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new f7(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,H,V){let n=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+n,t+a,i,r,H,V),this}absarc(e,t,i,r,H,V){return this.absellipse(e,t,i,i,r,H,V),this}ellipse(e,t,i,r,H,V,n,a){let L=this.currentPoint.x,o=this.currentPoint.y;return this.absellipse(e+L,t+o,i,r,H,V,n,a),this}absellipse(e,t,i,r,H,V,n,a){let L=new _3(e,t,i,r,H,V,n,a);if(this.curves.length>0){let M=L.getPoint(0);M.equals(this.currentPoint)||this.lineTo(M.x,M.y)}this.curves.push(L);let o=L.getPoint(1);return this.currentPoint.copy(o),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},y3=class extends x7{constructor(e){super(e),this.uuid=U0(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new x7().fromJSON(r))}return this}};function iV(C,e,t=2){let i=e&&e.length,r=i?e[0]*t:C.length,H=gC(C,0,r,t,!0),V=[];if(!H||H.next===H.prev)return V;let n,a,L;if(i&&(H=LV(C,e,H,t)),C.length>80*t){n=C[0],a=C[1];let o=n,M=a;for(let s=t;s<r;s+=t){let l=C[s],u=C[s+1];l<n&&(n=l),u<a&&(a=u),l>o&&(o=l),u>M&&(M=u)}L=Math.max(o-n,M-a),L=L!==0?32767/L:0}return v7(H,V,t,n,a,L,0),V}function gC(C,e,t,i,r){let H;if(r===mV(C,e,t,i)>0)for(let V=e;V<t;V+=i)H=bt(V/i|0,C[V],C[V+1],H);else for(let V=t-i;V>=e;V-=i)H=bt(V/i|0,C[V],C[V+1],H);return H&&b3(H,H.next)&&(g7(H),H=H.next),H}function D0(C,e){if(!C)return C;e||(e=C);let t=C,i;do if(i=!1,!t.steiner&&(b3(t,t.next)||f2(t.prev,t,t.next)===0)){if(g7(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function v7(C,e,t,i,r,H,V){if(!C)return;!V&&H&&lV(C,i,r,H);let n=C;for(;C.prev!==C.next;){let a=C.prev,L=C.next;if(H?HV(C,i,r,H):rV(C)){e.push(a.i,C.i,L.i),g7(C),C=L.next,n=L.next;continue}if(C=L,C===n){V?V===1?(C=VV(D0(C),e),v7(C,e,t,i,r,H,2)):V===2&&nV(C,e,t,i,r,H):v7(D0(C),e,t,i,r,H,1);break}}}function rV(C){let e=C.prev,t=C,i=C.next;if(f2(e,t,i)>=0)return!1;let r=e.x,H=t.x,V=i.x,n=e.y,a=t.y,L=i.y,o=Math.min(r,H,V),M=Math.min(n,a,L),s=Math.max(r,H,V),l=Math.max(n,a,L),u=i.next;for(;u!==e;){if(u.x>=o&&u.x<=s&&u.y>=M&&u.y<=l&&e7(r,n,H,a,V,L,u.x,u.y)&&f2(u.prev,u,u.next)>=0)return!1;u=u.next}return!0}function HV(C,e,t,i){let r=C.prev,H=C,V=C.next;if(f2(r,H,V)>=0)return!1;let n=r.x,a=H.x,L=V.x,o=r.y,M=H.y,s=V.y,l=Math.min(n,a,L),u=Math.min(o,M,s),f=Math.max(n,a,L),c=Math.max(o,M,s),d=d8(l,u,e,t,i),v=d8(f,c,e,t,i),y=C.prevZ,h=C.nextZ;for(;y&&y.z>=d&&h&&h.z<=v;){if(y.x>=l&&y.x<=f&&y.y>=u&&y.y<=c&&y!==r&&y!==V&&e7(n,o,a,M,L,s,y.x,y.y)&&f2(y.prev,y,y.next)>=0||(y=y.prevZ,h.x>=l&&h.x<=f&&h.y>=u&&h.y<=c&&h!==r&&h!==V&&e7(n,o,a,M,L,s,h.x,h.y)&&f2(h.prev,h,h.next)>=0))return!1;h=h.nextZ}for(;y&&y.z>=d;){if(y.x>=l&&y.x<=f&&y.y>=u&&y.y<=c&&y!==r&&y!==V&&e7(n,o,a,M,L,s,y.x,y.y)&&f2(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;h&&h.z<=v;){if(h.x>=l&&h.x<=f&&h.y>=u&&h.y<=c&&h!==r&&h!==V&&e7(n,o,a,M,L,s,h.x,h.y)&&f2(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function VV(C,e){let t=C;do{let i=t.prev,r=t.next.next;!b3(i,r)&&_C(i,t,t.next,r)&&S7(i,r)&&S7(r,i)&&(e.push(i.i,t.i,r.i),g7(t),g7(t.next),t=C=r),t=t.next}while(t!==C);return D0(t)}function nV(C,e,t,i,r,H){let V=C;do{let n=V.next.next;for(;n!==V.prev;){if(V.i!==n.i&&pV(V,n)){let a=yC(V,n);V=D0(V,V.next),a=D0(a,a.next),v7(V,e,t,i,r,H,0),v7(a,e,t,i,r,H,0);return}n=n.next}V=V.next}while(V!==C)}function LV(C,e,t,i){let r=[];for(let H=0,V=e.length;H<V;H++){let n=e[H]*i,a=H<V-1?e[H+1]*i:C.length,L=gC(C,n,a,i,!1);L===L.next&&(L.steiner=!0),r.push(cV(L))}r.sort(aV);for(let H=0;H<r.length;H++)t=oV(r[H],t);return t}function aV(C,e){let t=C.x-e.x;if(t===0&&(t=C.y-e.y,t===0)){let i=(C.next.y-C.y)/(C.next.x-C.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function oV(C,e){let t=sV(C,e);if(!t)return e;let i=yC(t,C);return D0(i,i.next),D0(t,t.next)}function sV(C,e){let t=e,i=C.x,r=C.y,H=-1/0,V;if(b3(C,t))return t;do{if(b3(C,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let M=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(M<=i&&M>H&&(H=M,V=t.x<t.next.x?t:t.next,M===i))return V}t=t.next}while(t!==e);if(!V)return null;let n=V,a=V.x,L=V.y,o=1/0;t=V;do{if(i>=t.x&&t.x>=a&&i!==t.x&&ZC(r<L?i:H,r,a,L,r<L?H:i,r,t.x,t.y)){let M=Math.abs(r-t.y)/(i-t.x);S7(t,C)&&(M<o||M===o&&(t.x>V.x||t.x===V.x&&MV(V,t)))&&(V=t,o=M)}t=t.next}while(t!==n);return V}function MV(C,e){return f2(C.prev,C,e.prev)<0&&f2(e.next,C,C.next)<0}function lV(C,e,t,i){let r=C;do r.z===0&&(r.z=d8(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==C);r.prevZ.nextZ=null,r.prevZ=null,dV(r)}function dV(C){let e,t=1;do{let i=C,r;C=null;let H=null;for(e=0;i;){e++;let V=i,n=0;for(let L=0;L<t&&(n++,V=V.nextZ,!!V);L++);let a=t;for(;n>0||a>0&&V;)n!==0&&(a===0||!V||i.z<=V.z)?(r=i,i=i.nextZ,n--):(r=V,V=V.nextZ,a--),H?H.nextZ=r:C=r,r.prevZ=H,H=r;i=V}H.nextZ=null,t*=2}while(e>1);return C}function d8(C,e,t,i,r){return C=(C-t)*r|0,e=(e-i)*r|0,C=(C|C<<8)&16711935,C=(C|C<<4)&252645135,C=(C|C<<2)&858993459,C=(C|C<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,C|e<<1}function cV(C){let e=C,t=C;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==C);return t}function ZC(C,e,t,i,r,H,V,n){return(r-V)*(e-n)>=(C-V)*(H-n)&&(C-V)*(i-n)>=(t-V)*(e-n)&&(t-V)*(H-n)>=(r-V)*(i-n)}function e7(C,e,t,i,r,H,V,n){return!(C===V&&e===n)&&ZC(C,e,t,i,r,H,V,n)}function pV(C,e){return C.next.i!==e.i&&C.prev.i!==e.i&&!uV(C,e)&&(S7(C,e)&&S7(e,C)&&AV(C,e)&&(f2(C.prev,C,e.prev)||f2(C,e.prev,e))||b3(C,e)&&f2(C.prev,C,C.next)>0&&f2(e.prev,e,e.next)>0)}function f2(C,e,t){return(e.y-C.y)*(t.x-e.x)-(e.x-C.x)*(t.y-e.y)}function b3(C,e){return C.x===e.x&&C.y===e.y}function _C(C,e,t,i){let r=_4(f2(C,e,t)),H=_4(f2(C,e,i)),V=_4(f2(t,i,C)),n=_4(f2(t,i,e));return!!(r!==H&&V!==n||r===0&&Z4(C,t,e)||H===0&&Z4(C,i,e)||V===0&&Z4(t,C,i)||n===0&&Z4(t,e,i))}function Z4(C,e,t){return e.x<=Math.max(C.x,t.x)&&e.x>=Math.min(C.x,t.x)&&e.y<=Math.max(C.y,t.y)&&e.y>=Math.min(C.y,t.y)}function _4(C){return C>0?1:C<0?-1:0}function uV(C,e){let t=C;do{if(t.i!==C.i&&t.next.i!==C.i&&t.i!==e.i&&t.next.i!==e.i&&_C(t,t.next,C,e))return!0;t=t.next}while(t!==C);return!1}function S7(C,e){return f2(C.prev,C,C.next)<0?f2(C,e,C.next)>=0&&f2(C,C.prev,e)>=0:f2(C,e,C.prev)<0||f2(C,C.next,e)<0}function AV(C,e){let t=C,i=!1,r=(C.x+e.x)/2,H=(C.y+e.y)/2;do t.y>H!=t.next.y>H&&t.next.y!==t.y&&r<(t.next.x-t.x)*(H-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==C);return i}function yC(C,e){let t=c8(C.i,C.x,C.y),i=c8(e.i,e.x,e.y),r=C.next,H=e.prev;return C.next=e,e.prev=C,t.next=r,r.prev=t,i.next=t,t.prev=i,H.next=i,i.prev=H,i}function bt(C,e,t,i){let r=c8(C,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function g7(C){C.next.prev=C.prev,C.prev.next=C.next,C.prevZ&&(C.prevZ.nextZ=C.nextZ),C.nextZ&&(C.nextZ.prevZ=C.prevZ)}function c8(C,e,t){return{i:C,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mV(C,e,t,i){let r=0;for(let H=e,V=t-i;H<t;H+=i)r+=(C[V]-C[H])*(C[H+1]+C[V+1]),V=H;return r}var p8=class{static triangulate(e,t,i=2){return iV(e,t,i)}},u3=class C{static area(e){let t=e.length,i=0;for(let r=t-1,H=0;H<t;r=H++)i+=e[r].x*e[H].y-e[H].x*e[r].y;return i*.5}static isClockWise(e){return C.area(e)<0}static triangulateShape(e,t){let i=[],r=[],H=[];Tt(e),wt(i,e);let V=e.length;t.forEach(Tt);for(let a=0;a<t.length;a++)r.push(V),V+=t[a].length,wt(i,t[a]);let n=p8.triangulate(i,r);for(let a=0;a<n.length;a+=3)H.push(n.slice(a,a+3));return H}};function Tt(C){let e=C.length;e>2&&C[e-1].equals(C[0])&&C.pop()}function wt(C,e){for(let t=0;t<e.length;t++)C.push(e[t].x),C.push(e[t].y)}var Z7=class C extends g5{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let H=e/2,V=t/2,n=Math.floor(i),a=Math.floor(r),L=n+1,o=a+1,M=e/n,s=t/a,l=[],u=[],f=[],c=[];for(let d=0;d<o;d++){let v=d*s-V;for(let y=0;y<L;y++){let h=y*M-H;u.push(h,-v,0),f.push(0,0,1),c.push(y/n),c.push(1-d/a)}}for(let d=0;d<a;d++)for(let v=0;v<n;v++){let y=v+L*d,h=v+L*(d+1),g=v+1+L*(d+1),Z=v+1+L*d;l.push(y,h,Z),l.push(h,g,Z)}this.setIndex(l),this.setAttribute("position",new K2(u,3)),this.setAttribute("normal",new K2(f,3)),this.setAttribute("uv",new K2(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new C(e.width,e.height,e.widthSegments,e.heightSegments)}};var _7=class C extends g5{constructor(e=new y3([new f1(0,.5),new f1(-.5,-.5),new f1(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],H=[],V=[],n=0,a=0;if(Array.isArray(e)===!1)L(e);else for(let o=0;o<e.length;o++)L(e[o]),this.addGroup(n,a,o),n+=a,a=0;this.setIndex(i),this.setAttribute("position",new K2(r,3)),this.setAttribute("normal",new K2(H,3)),this.setAttribute("uv",new K2(V,2));function L(o){let M=r.length/3,s=o.extractPoints(t),l=s.shape,u=s.holes;u3.isClockWise(l)===!1&&(l=l.reverse());for(let c=0,d=u.length;c<d;c++){let v=u[c];u3.isClockWise(v)===!0&&(u[c]=v.reverse())}let f=u3.triangulateShape(l,u);for(let c=0,d=u.length;c<d;c++){let v=u[c];l=l.concat(v)}for(let c=0,d=l.length;c<d;c++){let v=l[c];r.push(v.x,v.y,0),H.push(0,0,1),V.push(v.x,v.y)}for(let c=0,d=f.length;c<d;c++){let v=f[c],y=v[0]+M,h=v[1]+M,g=v[2]+M;i.push(y,h,g),a+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hV(t,e)}static fromJSON(e,t){let i=[];for(let r=0,H=e.shapes.length;r<H;r++){let V=t[e.shapes[r]];i.push(V)}return new C(i,e.curveSegments)}};function hV(C,e){if(e.shapes=[],Array.isArray(C))for(let t=0,i=C.length;t<i;t++){let r=C[t];e.shapes.push(r.uuid)}else e.shapes.push(C.uuid);return e}function z0(C){let e={};for(let t in C){e[t]={};for(let i in C[t]){let r=C[t][i];if(Ot(r))r.isRenderTargetTexture?(R1("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Ot(r[0])){let H=[];for(let V=0,n=r.length;V<n;V++)H[V]=r[V].clone();e[t][i]=H}else e[t][i]=r.slice();else e[t][i]=r}}return e}function W2(C){let e={};for(let t=0;t<C.length;t++){let i=z0(C[t]);for(let r in i)e[r]=i[r]}return e}function Ot(C){return C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)}function fV(C){let e=[];for(let t=0;t<C.length;t++)e.push(C[t].clone());return e}function $8(C){let e=C.getRenderTarget();return e===null?C.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Y1.workingColorSpace}var bC={clone:z0,merge:W2},xV=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vV=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,a5=class extends A0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xV,this.fragmentShader=vV,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=z0(e.uniforms),this.uniformsGroups=fV(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let V=this.uniforms[r].value;V&&V.isTexture?t.uniforms[r]={type:"t",value:V.toJSON(e).uuid}:V&&V.isColor?t.uniforms[r]={type:"c",value:V.getHex()}:V&&V.isVector2?t.uniforms[r]={type:"v2",value:V.toArray()}:V&&V.isVector3?t.uniforms[r]={type:"v3",value:V.toArray()}:V&&V.isVector4?t.uniforms[r]={type:"v4",value:V.toArray()}:V&&V.isMatrix3?t.uniforms[r]={type:"m3",value:V.toArray()}:V&&V.isMatrix4?t.uniforms[r]={type:"m4",value:V.toArray()}:t.uniforms[r]={value:V}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new N1().setHex(r.value);break;case"v2":this.uniforms[i].value=new f1().fromArray(r.value);break;case"v3":this.uniforms[i].value=new T().fromArray(r.value);break;case"v4":this.uniforms[i].value=new A2().fromArray(r.value);break;case"m3":this.uniforms[i].value=new I1().fromArray(r.value);break;case"m4":this.uniforms[i].value=new V2().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},j4=class extends a5{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},T3=class extends A0{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new N1(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new N1(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t6,this.normalScale=new f1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new d5,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var e9=class extends A0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},t9=class extends A0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function M3(C,e){return!C||C.constructor===e?C:typeof e.BYTES_PER_ELEMENT=="number"?new e(C):Array.prototype.slice.call(C)}function L8(C){return C!==void 0&&C.inTangents!==void 0&&C.outTangents!==void 0}var f0=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],H=t[i-1];C:{e:{let V;t:{i:if(!(e<r)){for(let n=i+2;;){if(r===void 0){if(e<H)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(H=r,r=t[++i],e<r)break e}V=t.length;break t}if(!(e>=H)){let n=t[1];e<n&&(i=2,H=n);for(let a=i-2;;){if(H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===a)break;if(r=H,H=t[--i-1],e>=H)break e}V=i,i=0;break t}break C}for(;i<V;){let n=i+V>>>1;e<t[n]?V=n:i=n+1}if(r=t[i],H=t[i-1],H===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,H,r)}return this.interpolate_(i,H,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,H=e*r;for(let V=0;V!==r;++V)t[V]=i[H+V];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},C9=class extends f0{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:s8,endingEnd:s8}}intervalChanged_(e,t,i){let r=this.parameterPositions,H=e-2,V=e+1,n=r[H],a=r[V];if(n===void 0)switch(this.getSettings_().endingStart){case M8:H=e,n=2*t-i;break;case l8:H=r.length-2,n=t+r[H]-r[H+1];break;default:H=e,n=i}if(a===void 0)switch(this.getSettings_().endingEnd){case M8:V=e,a=2*i-t;break;case l8:V=1,a=i+r[1]-r[0];break;default:V=e-1,a=t}let L=(i-t)*.5,o=this.valueSize;this._weightPrev=L/(t-n),this._weightNext=L/(a-i),this._offsetPrev=H*o,this._offsetNext=V*o}interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=this._offsetPrev,M=this._offsetNext,s=this._weightPrev,l=this._weightNext,u=(i-t)/(r-t),f=u*u,c=f*u,d=-s*c+2*s*f-s*u,v=(1+s)*c+(-1.5-2*s)*f+(-.5+s)*u+1,y=(-1-l)*c+(1.5+l)*f+.5*u,h=l*c-l*f;for(let g=0;g!==n;++g)H[g]=d*V[o+g]+v*V[L+g]+y*V[a+g]+h*V[M+g];return H}},i9=class extends f0{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=(i-t)/(r-t),M=1-o;for(let s=0;s!==n;++s)H[s]=V[L+s]*M+V[a+s]*o;return H}},r9=class extends f0{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},H9=class extends f0{interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=e*n,L=a-n,o=this.inTangents,M=this.outTangents;if(!o||!M){let u=(i-t)/(r-t),f=1-u;for(let c=0;c!==n;++c)H[c]=V[L+c]*f+V[a+c]*u;return H}let s=n*2,l=e-1;for(let u=0;u!==n;++u){let f=V[L+u],c=V[a+u],d=l*s+u*2,v=M[d],y=M[d+1],h=e*s+u*2,g=o[h],Z=o[h+1],b=gV(i,t,v,g,r);H[u]=TC(b,f,y,Z,c)}return H}};function TC(C,e,t,i,r){let H=1-C;return H*H*H*e+3*H*H*C*t+3*H*C*C*i+C*C*C*r}function SV(C,e,t,i,r){let H=1-C;return 3*H*H*(t-e)+6*H*C*(i-t)+3*C*C*(r-i)}function gV(C,e,t,i,r){let H=(C-e)/(r-e);for(let V=0;V<8;V++){let n=TC(H,e,t,i,r)-C;if(Math.abs(n)<1e-10)break;let a=SV(H,e,t,i,r);if(Math.abs(a)<1e-10)break;H=Math.max(0,Math.min(1,H-n/a))}return H}var o5=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=M3(t,this.TimeBufferType),this.values=M3(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:M3(e.times,Array),values:M3(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),L8(e.settings)&&(i.settings={inTangents:M3(e.settings.inTangents,Array),outTangents:M3(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new r9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new i9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new C9(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new H9(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case H7:t=this.InterpolantFactoryMethodDiscrete;break;case N4:t=this.InterpolantFactoryMethodLinear;break;case T4:t=this.InterpolantFactoryMethodSmooth;break;case o8:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return R1("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return H7;case this.InterpolantFactoryMethodLinear:return N4;case this.InterpolantFactoryMethodSmooth:return T4;case this.InterpolantFactoryMethodBezier:return o8}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;L8(this.settings)&&(Et(this.settings.inTangents,e),Et(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,H=0,V=r-1;for(;H!==r&&i[H]<e;)++H;for(;V!==-1&&i[V]>t;)--V;if(++V,H!==0||V!==r){H>=V&&(V=Math.max(V,1),H=V-1);let n=this.getValueSize();this.times=i.slice(H,V),this.values=this.values.slice(H*n,V*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(P1("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,H=i.length;H===0&&(P1("KeyframeTrack: Track is empty.",this),e=!1);let V=null;for(let n=0;n!==H;n++){let a=i[n];if(typeof a=="number"&&isNaN(a)){P1("KeyframeTrack: Time is not a valid number.",this,n,a),e=!1;break}if(V!==null&&V>a){P1("KeyframeTrack: Out of order keys.",this,n,a,V),e=!1;break}V=a}if(r!==void 0&&cH(r))for(let n=0,a=r.length;n!==a;++n){let L=r[n];if(isNaN(L)){P1("KeyframeTrack: Value is not a valid number.",this,n,L),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===T4,H=e.length-1,V=1;for(let n=1;n<H;++n){let a=!1,L=e[n],o=e[n+1];if(L!==o&&(n!==1||L!==e[0]))if(r)a=!0;else{let M=n*i,s=M-i,l=M+i;for(let u=0;u!==i;++u){let f=t[M+u];if(f!==t[s+u]||f!==t[l+u]){a=!0;break}}}if(a){if(n!==V){e[V]=e[n];let M=n*i,s=V*i;for(let l=0;l!==i;++l)t[s+l]=t[M+l]}++V}}if(H>0){e[V]=e[H];for(let n=H*i,a=V*i,L=0;L!==i;++L)t[a+L]=t[n+L];++V}return V!==e.length?(this.times=e.slice(0,V),this.values=t.slice(0,V*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,L8(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Et(C,e){for(let t=0,i=C.length;t!==i;t+=2)C[t]*=e}o5.prototype.ValueTypeName="";o5.prototype.TimeBufferType=Float32Array;o5.prototype.ValueBufferType=Float32Array;o5.prototype.DefaultInterpolation=N4;var x0=class extends o5{constructor(e,t,i){super(e,t,i)}};x0.prototype.ValueTypeName="bool";x0.prototype.ValueBufferType=Array;x0.prototype.DefaultInterpolation=H7;x0.prototype.InterpolantFactoryMethodLinear=void 0;x0.prototype.InterpolantFactoryMethodSmooth=void 0;var V9=class extends o5{constructor(e,t,i,r){super(e,t,i,r)}};V9.prototype.ValueTypeName="color";var n9=class extends o5{constructor(e,t,i,r){super(e,t,i,r)}};n9.prototype.ValueTypeName="number";var L9=class extends f0{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let H=this.resultBuffer,V=this.sampleValues,n=this.valueSize,a=(i-t)/(r-t),L=e*n;for(let o=L+n;L!==o;L+=4)v2.slerpFlat(H,0,V,L-n,V,L,a);return H}},y7=class extends o5{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new L9(this.times,this.values,this.getValueSize(),e)}};y7.prototype.ValueTypeName="quaternion";y7.prototype.InterpolantFactoryMethodSmooth=void 0;var v0=class extends o5{constructor(e,t,i){super(e,t,i)}};v0.prototype.ValueTypeName="string";v0.prototype.ValueBufferType=Array;v0.prototype.DefaultInterpolation=H7;v0.prototype.InterpolantFactoryMethodLinear=void 0;v0.prototype.InterpolantFactoryMethodSmooth=void 0;var a9=class extends o5{constructor(e,t,i,r){super(e,t,i,r)}};a9.prototype.ValueTypeName="vector";var o9=class{constructor(e,t,i){let r=this,H=!1,V=0,n=0,a,L=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(o){n++,H===!1&&r.onStart!==void 0&&r.onStart(o,V,n),H=!0},this.itemEnd=function(o){V++,r.onProgress!==void 0&&r.onProgress(o,V,n),V===n&&(H=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(o){r.onError!==void 0&&r.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),a?a(o):o},this.setURLModifier=function(o){return a=o,this},this.addHandler=function(o,M){return L.push(o,M),this},this.removeHandler=function(o){let M=L.indexOf(o);return M!==-1&&L.splice(M,2),this},this.getHandler=function(o){for(let M=0,s=L.length;M<s;M+=2){let l=L[M],u=L[M+1];if(l.global&&(l.lastIndex=0),l.test(o))return u}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wC=new o9,s9=class{constructor(e){this.manager=e!==void 0?e:wC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,H){i.load(e,r,t,H)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};s9.DEFAULT_MATERIAL_NAME="__DEFAULT";var b7=class extends j2{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new N1(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var a8=new V2,Rt=new T,Pt=new T,M9=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new f1(512,512),this.mapType=r5,this.map=null,this.mapPass=null,this.matrix=new V2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Z3,this._frameExtents=new f1(1,1),this._viewportCount=1,this._viewports=[new A2(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rt.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rt),Pt.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pt),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){a8.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(a8,e.coordinateSystem,e.reversedDepth);let H=this._frameExtents,V=r?r.z/H.x:1,n=r?r.w/H.y:1,a=r?r.x/H.x:0,L=r?r.y/H.y:0;e.coordinateSystem===m3||e.reversedDepth?t.set(.5*V,0,0,.5*V+a,0,.5*n,0,.5*n+L,0,0,1,0,0,0,0,1):t.set(.5*V,0,0,.5*V+a,0,.5*n,0,.5*n+L,0,0,.5,.5,0,0,0,1),t.multiply(a8)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},y4=new T,b4=new v2,E5=new T,T7=class extends j2{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new V2,this.projectionMatrix=new V2,this.projectionMatrixInverse=new V2,this.coordinateSystem=v5,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(y4,b4,E5),E5.x===1&&E5.y===1&&E5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(y4,b4,E5.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(y4,b4,E5),E5.x===1&&E5.y===1&&E5.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(y4,b4,E5.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},c0=new T,Bt=new f1,It=new f1,G2=class extends T7{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=f3*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(t7*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return f3*2*Math.atan(Math.tan(t7*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){c0.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(c0.x,c0.y).multiplyScalar(-e/c0.z),c0.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(c0.x,c0.y).multiplyScalar(-e/c0.z)}getViewSize(e,t){return this.getViewBounds(e,Bt,It),t.subVectors(It,Bt)}setViewOffset(e,t,i,r,H,V){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(t7*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,H=-.5*r,V=this.view;if(this.view!==null&&this.view.enabled){let a=V.fullWidth,L=V.fullHeight;H+=V.offsetX*r/a,t-=V.offsetY*i/L,r*=V.width/a,i*=V.height/L}let n=this.filmOffset;n!==0&&(H+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(H,H+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var w3=class extends T7{constructor(e=-1,t=1,i=1,r=-1,H=.1,V=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=H,this.far=V,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,H,V){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=H,this.view.height=V,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,H=i-e,V=i+e,n=r+t,a=r-t;if(this.view!==null&&this.view.enabled){let L=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;H+=L*this.view.offsetX,V=H+L*this.view.width,n-=o*this.view.offsetY,a=n-o*this.view.height}this.projectionMatrix.makeOrthographic(H,V,n,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},u8=class extends M9{constructor(){super(new w3(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},O3=class extends b7{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(j2.DEFAULT_UP),this.updateMatrix(),this.target=new j2,this.shadow=new u8}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},w7=class extends b7{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var l3=-90,d3=1,l9=class extends j2{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new G2(l3,d3,e,t);r.layers=this.layers,this.add(r);let H=new G2(l3,d3,e,t);H.layers=this.layers,this.add(H);let V=new G2(l3,d3,e,t);V.layers=this.layers,this.add(V);let n=new G2(l3,d3,e,t);n.layers=this.layers,this.add(n);let a=new G2(l3,d3,e,t);a.layers=this.layers,this.add(a);let L=new G2(l3,d3,e,t);L.layers=this.layers,this.add(L)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,H,V,n,a]=t;for(let L of t)this.remove(L);if(e===v5)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),H.up.set(0,0,-1),H.lookAt(0,1,0),V.up.set(0,0,1),V.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===m3)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),H.up.set(0,0,1),H.lookAt(0,1,0),V.up.set(0,0,-1),V.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let L of t)this.add(L),L.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[H,V,n,a,L,o]=this.children,M=e.getRenderTarget(),s=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),u=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,H),e.setRenderTarget(i,1,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,V),e.setRenderTarget(i,2,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,4,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,L),i.texture.generateMipmaps=f,e.setRenderTarget(i,5,r),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(M,s,l),e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},d9=class extends G2{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Y8="\\[\\]\\.:\\/",ZV=new RegExp("["+Y8+"]","g"),Q8="[^"+Y8+"]",_V="[^"+Y8.replace("\\.","")+"]",yV=/((?:WC+[\/:])*)/.source.replace("WC",Q8),bV=/(WCOD+)?/.source.replace("WCOD",_V),TV=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Q8),wV=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Q8),OV=new RegExp("^"+yV+bV+TV+wV+"$"),EV=["material","materials","bones","map"],A8=class{constructor(e,t,i){let r=i||c2.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,H=i.length;r!==H;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},c2=class C{constructor(e,t,i){this.path=t,this.parsedPath=i||C.parseTrackName(t),this.node=C.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new C.Composite(e,t,i):new C(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZV,"")}static parseTrackName(e){let t=OV.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let H=i.nodeName.substring(r+1);EV.indexOf(H)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=H)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(H){for(let V=0;V<H.length;V++){let n=H[V];if(n.name===t||n.uuid===t)return n;let a=i(n.children);if(a)return a}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,H=i.length;r!==H;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,H=t.propertyIndex;if(e||(e=C.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){R1("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let L=t.objectIndex;switch(i){case"materials":if(!e.material){P1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){P1("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){P1("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let o=0;o<e.length;o++)if(e[o].name===L){L=o;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){P1("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){P1("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){P1("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(L!==void 0){if(e[L]===void 0){P1("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[L]}}let V=e[r];if(V===void 0){let L=t.nodeName;P1("PropertyBinding: Trying to update property for track: "+L+"."+r+" but it wasn't found.",e);return}let n=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?n=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(n=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(H!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){P1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){P1("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[H]!==void 0&&(H=e.morphTargetDictionary[H])}a=this.BindingType.ArrayElement,this.resolvedProperty=V,this.propertyIndex=H}else V.fromArray!==void 0&&V.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=V):Array.isArray(V)?(a=this.BindingType.EntireArray,this.resolvedProperty=V):this.propertyName=r;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][n]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};c2.Composite=A8;c2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};c2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};c2.prototype.GetterByBindingType=[c2.prototype._getValue_direct,c2.prototype._getValue_array,c2.prototype._getValue_arrayElement,c2.prototype._getValue_toArray];c2.prototype.SetterByBindingTypeAndVersioning=[[c2.prototype._setValue_direct,c2.prototype._setValue_direct_setNeedsUpdate,c2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[c2.prototype._setValue_array,c2.prototype._setValue_array_setNeedsUpdate,c2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[c2.prototype._setValue_arrayElement,c2.prototype._setValue_arrayElement_setNeedsUpdate,c2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[c2.prototype._setValue_fromArray,c2.prototype._setValue_fromArray_setNeedsUpdate,c2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xM=new Float32Array(1);var Ft=new V2,O7=class{constructor(e,t,i=0,r=1/0){this.ray=new l7(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new v3,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):P1("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ft.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ft),this}intersectObject(e,t=!0,i=[]){return m8(e,this,i,t),i.sort(Dt),i}intersectObjects(e,t=!0,i=[]){for(let r=0,H=e.length;r<H;r++)m8(e[r],this,i,t);return i.sort(Dt),i}};function Dt(C,e){return C.distance-e.distance}function m8(C,e,t,i){let r=!0;if(C.layers.test(e.layers)&&C.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let H=C.children;for(let V=0,n=H.length;V<n;V++)m8(H[V],e,t,!0)}}var Ce=class Ce{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let H=this.elements;return H[0]=e,H[2]=t,H[1]=i,H[3]=r,this}};Ce.prototype.isMatrix2=!0;var h8=Ce;function K8(C,e,t,i){let r=RV(i);switch(t){case k8:return C*e;case U8:return C*e/r.components*r.byteLength;case x9:return C*e/r.components*r.byteLength;case y0:return C*e*2/r.components*r.byteLength;case v9:return C*e*2/r.components*r.byteLength;case N8:return C*e*3/r.components*r.byteLength;case c5:return C*e*4/r.components*r.byteLength;case S9:return C*e*4/r.components*r.byteLength;case B7:case I7:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*8;case F7:case D7:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case Z9:case y9:return Math.max(C,16)*Math.max(e,8)/4;case g9:case _9:return Math.max(C,8)*Math.max(e,8)/2;case b9:case T9:case O9:case E9:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*8;case w9:case k7:case R9:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case P9:return Math.floor((C+3)/4)*Math.floor((e+3)/4)*16;case B9:return Math.floor((C+4)/5)*Math.floor((e+3)/4)*16;case I9:return Math.floor((C+4)/5)*Math.floor((e+4)/5)*16;case F9:return Math.floor((C+5)/6)*Math.floor((e+4)/5)*16;case D9:return Math.floor((C+5)/6)*Math.floor((e+5)/6)*16;case k9:return Math.floor((C+7)/8)*Math.floor((e+4)/5)*16;case N9:return Math.floor((C+7)/8)*Math.floor((e+5)/6)*16;case U9:return Math.floor((C+7)/8)*Math.floor((e+7)/8)*16;case z9:return Math.floor((C+9)/10)*Math.floor((e+4)/5)*16;case G9:return Math.floor((C+9)/10)*Math.floor((e+5)/6)*16;case W9:return Math.floor((C+9)/10)*Math.floor((e+7)/8)*16;case X9:return Math.floor((C+9)/10)*Math.floor((e+9)/10)*16;case q9:return Math.floor((C+11)/12)*Math.floor((e+9)/10)*16;case $9:return Math.floor((C+11)/12)*Math.floor((e+11)/12)*16;case Y9:case Q9:case K9:return Math.ceil(C/4)*Math.ceil(e/4)*16;case J9:case j9:return Math.ceil(C/4)*Math.ceil(e/4)*8;case N7:case e6:return Math.ceil(C/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RV(C){switch(C){case r5:case B8:return{byteLength:1,components:1};case P3:case I8:case b5:return{byteLength:2,components:1};case h9:case f9:return{byteLength:2,components:4};case _5:case m9:case y5:return{byteLength:4,components:1};case F8:case D8:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${C}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?R1("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jC(){let C=null,e=!1,t=null,i=null;function r(H,V){i=C.requestAnimationFrame(r),t(H,V)}return{start:function(){e!==!0&&t!==null&&C!==null&&(i=C.requestAnimationFrame(r),e=!0)},stop:function(){C!==null&&C.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(H){t=H},setContext:function(H){C=H}}}function BV(C){let e=new WeakMap;function t(n,a){let L=n.array,o=n.usage,M=L.byteLength,s=C.createBuffer();C.bindBuffer(a,s),C.bufferData(a,L,o),n.onUploadCallback();let l;if(L instanceof Float32Array)l=C.FLOAT;else if(typeof Float16Array<"u"&&L instanceof Float16Array)l=C.HALF_FLOAT;else if(L instanceof Uint16Array)n.isFloat16BufferAttribute?l=C.HALF_FLOAT:l=C.UNSIGNED_SHORT;else if(L instanceof Int16Array)l=C.SHORT;else if(L instanceof Uint32Array)l=C.UNSIGNED_INT;else if(L instanceof Int32Array)l=C.INT;else if(L instanceof Int8Array)l=C.BYTE;else if(L instanceof Uint8Array)l=C.UNSIGNED_BYTE;else if(L instanceof Uint8ClampedArray)l=C.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+L);return{buffer:s,type:l,bytesPerElement:L.BYTES_PER_ELEMENT,version:n.version,size:M}}function i(n,a,L){let o=a.array,M=a.updateRanges;if(C.bindBuffer(L,n),M.length===0)C.bufferSubData(L,0,o);else{M.sort((l,u)=>l.start-u.start);let s=0;for(let l=1;l<M.length;l++){let u=M[s],f=M[l];f.start<=u.start+u.count+1?u.count=Math.max(u.count,f.start+f.count-u.start):(++s,M[s]=f)}M.length=s+1;for(let l=0,u=M.length;l<u;l++){let f=M[l];C.bufferSubData(L,f.start*o.BYTES_PER_ELEMENT,o,f.start,f.count)}a.clearUpdateRanges()}a.onUploadCallback()}function r(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)}function H(n){n.isInterleavedBufferAttribute&&(n=n.data);let a=e.get(n);a&&(C.deleteBuffer(a.buffer),e.delete(n))}function V(n,a){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let o=e.get(n);(!o||o.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let L=e.get(n);if(L===void 0)e.set(n,t(n,a));else if(L.version<n.version){if(L.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(L.buffer,n,a),L.version=n.version}}return{get:r,remove:H,update:V}}var IV=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FV=`#ifdef USE_ALPHAHASH
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
#endif`,DV=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kV=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NV=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UV=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zV=`#ifdef USE_AOMAP
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
#endif`,GV=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WV=`#ifdef USE_BATCHING
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
#endif`,XV=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qV=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$V=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YV=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QV=`#ifdef USE_IRIDESCENCE
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
#endif`,KV=`#ifdef USE_BUMPMAP
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
#endif`,JV=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jV=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,en=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cn=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rn=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hn=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vn=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nn=`#define PI 3.141592653589793
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
} // validated`,Ln=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,an=`vec3 transformedNormal = objectNormal;
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
#endif`,on=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mn=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ln=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dn="gl_FragColor = linearToOutputTexel( gl_FragColor );",cn=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pn=`#ifdef USE_ENVMAP
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
#endif`,un=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,An=`#ifdef USE_ENVMAP
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
#endif`,mn=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hn=`#ifdef USE_ENVMAP
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
#endif`,fn=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vn=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sn=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gn=`#ifdef USE_GRADIENTMAP
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
}`,Zn=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_n=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yn=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bn=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tn=`#ifdef USE_ENVMAP
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
#endif`,wn=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,On=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,En=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rn=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pn=`PhysicalMaterial material;
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
#endif`,Bn=`uniform sampler2D dfgLUT;
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
}`,In=`
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
#endif`,Fn=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dn=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kn=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nn=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Un=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zn=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gn=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wn=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xn=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qn=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$n=`#if defined( USE_POINTS_UV )
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
#endif`,Yn=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qn=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kn=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jn=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jn=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eL=`#ifdef USE_MORPHTARGETS
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
#endif`,tL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nL=`#ifdef USE_NORMALMAP
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
#endif`,LL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ML=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vL=`float getShadowMask() {
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
}`,SL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gL=`#ifdef USE_SKINNING
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
#endif`,ZL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_L=`#ifdef USE_SKINNING
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
#endif`,yL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OL=`#ifdef USE_TRANSMISSION
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
#endif`,EL=`#ifdef USE_TRANSMISSION
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
#endif`,RL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,FL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DL=`uniform sampler2D t2D;
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
}`,kL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GL=`#include <common>
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
}`,WL=`#if DEPTH_PACKING == 3200
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
}`,XL=`#define DISTANCE
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
}`,qL=`#define DISTANCE
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
}`,$L=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QL=`uniform float scale;
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
}`,KL=`uniform vec3 diffuse;
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
}`,JL=`#include <common>
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
}`,jL=`uniform vec3 diffuse;
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
}`,ea=`#define LAMBERT
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
}`,ta=`#define LAMBERT
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
}`,Ca=`#define MATCAP
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
}`,ia=`#define MATCAP
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
}`,ra=`#define NORMAL
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
}`,Ha=`#define NORMAL
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
}`,Va=`#define PHONG
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
}`,na=`#define PHONG
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
}`,La=`#define STANDARD
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
}`,aa=`#define STANDARD
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
}`,oa=`#define TOON
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
}`,sa=`#define TOON
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
}`,Ma=`uniform float size;
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
}`,la=`uniform vec3 diffuse;
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
}`,da=`#include <common>
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
}`,ca=`uniform vec3 color;
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
}`,pa=`uniform float rotation;
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
}`,ua=`uniform vec3 diffuse;
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
}`,z1={alphahash_fragment:IV,alphahash_pars_fragment:FV,alphamap_fragment:DV,alphamap_pars_fragment:kV,alphatest_fragment:NV,alphatest_pars_fragment:UV,aomap_fragment:zV,aomap_pars_fragment:GV,batching_pars_vertex:WV,batching_vertex:XV,begin_vertex:qV,beginnormal_vertex:$V,bsdfs:YV,iridescence_fragment:QV,bumpmap_pars_fragment:KV,clipping_planes_fragment:JV,clipping_planes_pars_fragment:jV,clipping_planes_pars_vertex:en,clipping_planes_vertex:tn,color_fragment:Cn,color_pars_fragment:rn,color_pars_vertex:Hn,color_vertex:Vn,common:nn,cube_uv_reflection_fragment:Ln,defaultnormal_vertex:an,displacementmap_pars_vertex:on,displacementmap_vertex:sn,emissivemap_fragment:Mn,emissivemap_pars_fragment:ln,colorspace_fragment:dn,colorspace_pars_fragment:cn,envmap_fragment:pn,envmap_common_pars_fragment:un,envmap_pars_fragment:An,envmap_pars_vertex:mn,envmap_physical_pars_fragment:Tn,envmap_vertex:hn,fog_vertex:fn,fog_pars_vertex:xn,fog_fragment:vn,fog_pars_fragment:Sn,gradientmap_pars_fragment:gn,lightmap_pars_fragment:Zn,lights_lambert_fragment:_n,lights_lambert_pars_fragment:yn,lights_pars_begin:bn,lights_toon_fragment:wn,lights_toon_pars_fragment:On,lights_phong_fragment:En,lights_phong_pars_fragment:Rn,lights_physical_fragment:Pn,lights_physical_pars_fragment:Bn,lights_fragment_begin:In,lights_fragment_maps:Fn,lights_fragment_end:Dn,lightprobes_pars_fragment:kn,logdepthbuf_fragment:Nn,logdepthbuf_pars_fragment:Un,logdepthbuf_pars_vertex:zn,logdepthbuf_vertex:Gn,map_fragment:Wn,map_pars_fragment:Xn,map_particle_fragment:qn,map_particle_pars_fragment:$n,metalnessmap_fragment:Yn,metalnessmap_pars_fragment:Qn,morphinstance_vertex:Kn,morphcolor_vertex:Jn,morphnormal_vertex:jn,morphtarget_pars_vertex:eL,morphtarget_vertex:tL,normal_fragment_begin:CL,normal_fragment_maps:iL,normal_pars_fragment:rL,normal_pars_vertex:HL,normal_vertex:VL,normalmap_pars_fragment:nL,clearcoat_normal_fragment_begin:LL,clearcoat_normal_fragment_maps:aL,clearcoat_pars_fragment:oL,iridescence_pars_fragment:sL,opaque_fragment:ML,packing:lL,premultiplied_alpha_fragment:dL,project_vertex:cL,dithering_fragment:pL,dithering_pars_fragment:uL,roughnessmap_fragment:AL,roughnessmap_pars_fragment:mL,shadowmap_pars_fragment:hL,shadowmap_pars_vertex:fL,shadowmap_vertex:xL,shadowmask_pars_fragment:vL,skinbase_vertex:SL,skinning_pars_vertex:gL,skinning_vertex:ZL,skinnormal_vertex:_L,specularmap_fragment:yL,specularmap_pars_fragment:bL,tonemapping_fragment:TL,tonemapping_pars_fragment:wL,transmission_fragment:OL,transmission_pars_fragment:EL,uv_pars_fragment:RL,uv_pars_vertex:PL,uv_vertex:BL,worldpos_vertex:IL,background_vert:FL,background_frag:DL,backgroundCube_vert:kL,backgroundCube_frag:NL,cube_vert:UL,cube_frag:zL,depth_vert:GL,depth_frag:WL,distance_vert:XL,distance_frag:qL,equirect_vert:$L,equirect_frag:YL,linedashed_vert:QL,linedashed_frag:KL,meshbasic_vert:JL,meshbasic_frag:jL,meshlambert_vert:ea,meshlambert_frag:ta,meshmatcap_vert:Ca,meshmatcap_frag:ia,meshnormal_vert:ra,meshnormal_frag:Ha,meshphong_vert:Va,meshphong_frag:na,meshphysical_vert:La,meshphysical_frag:aa,meshtoon_vert:oa,meshtoon_frag:sa,points_vert:Ma,points_frag:la,shadow_vert:da,shadow_frag:ca,sprite_vert:pa,sprite_frag:ua},l1={common:{diffuse:{value:new N1(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new I1},alphaMap:{value:null},alphaMapTransform:{value:new I1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new I1}},envmap:{envMap:{value:null},envMapRotation:{value:new I1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new I1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new I1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new I1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new I1},normalScale:{value:new f1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new I1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new I1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new I1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new I1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new N1(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new N1(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new I1},alphaTest:{value:0},uvTransform:{value:new I1}},sprite:{diffuse:{value:new N1(16777215)},opacity:{value:1},center:{value:new f1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new I1},alphaMap:{value:null},alphaMapTransform:{value:new I1},alphaTest:{value:0}}},k5={basic:{uniforms:W2([l1.common,l1.specularmap,l1.envmap,l1.aomap,l1.lightmap,l1.fog]),vertexShader:z1.meshbasic_vert,fragmentShader:z1.meshbasic_frag},lambert:{uniforms:W2([l1.common,l1.specularmap,l1.envmap,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.fog,l1.lights,{emissive:{value:new N1(0)},envMapIntensity:{value:1}}]),vertexShader:z1.meshlambert_vert,fragmentShader:z1.meshlambert_frag},phong:{uniforms:W2([l1.common,l1.specularmap,l1.envmap,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.fog,l1.lights,{emissive:{value:new N1(0)},specular:{value:new N1(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:z1.meshphong_vert,fragmentShader:z1.meshphong_frag},standard:{uniforms:W2([l1.common,l1.envmap,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.roughnessmap,l1.metalnessmap,l1.fog,l1.lights,{emissive:{value:new N1(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z1.meshphysical_vert,fragmentShader:z1.meshphysical_frag},toon:{uniforms:W2([l1.common,l1.aomap,l1.lightmap,l1.emissivemap,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.gradientmap,l1.fog,l1.lights,{emissive:{value:new N1(0)}}]),vertexShader:z1.meshtoon_vert,fragmentShader:z1.meshtoon_frag},matcap:{uniforms:W2([l1.common,l1.bumpmap,l1.normalmap,l1.displacementmap,l1.fog,{matcap:{value:null}}]),vertexShader:z1.meshmatcap_vert,fragmentShader:z1.meshmatcap_frag},points:{uniforms:W2([l1.points,l1.fog]),vertexShader:z1.points_vert,fragmentShader:z1.points_frag},dashed:{uniforms:W2([l1.common,l1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z1.linedashed_vert,fragmentShader:z1.linedashed_frag},depth:{uniforms:W2([l1.common,l1.displacementmap]),vertexShader:z1.depth_vert,fragmentShader:z1.depth_frag},normal:{uniforms:W2([l1.common,l1.bumpmap,l1.normalmap,l1.displacementmap,{opacity:{value:1}}]),vertexShader:z1.meshnormal_vert,fragmentShader:z1.meshnormal_frag},sprite:{uniforms:W2([l1.sprite,l1.fog]),vertexShader:z1.sprite_vert,fragmentShader:z1.sprite_frag},background:{uniforms:{uvTransform:{value:new I1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z1.background_vert,fragmentShader:z1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new I1}},vertexShader:z1.backgroundCube_vert,fragmentShader:z1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z1.cube_vert,fragmentShader:z1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z1.equirect_vert,fragmentShader:z1.equirect_frag},distance:{uniforms:W2([l1.common,l1.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z1.distance_vert,fragmentShader:z1.distance_frag},shadow:{uniforms:W2([l1.lights,l1.fog,{color:{value:new N1(0)},opacity:{value:1}}]),vertexShader:z1.shadow_vert,fragmentShader:z1.shadow_frag}};k5.physical={uniforms:W2([k5.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new I1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new I1},clearcoatNormalScale:{value:new f1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new I1},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new I1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new I1},sheen:{value:0},sheenColor:{value:new N1(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new I1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new I1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new I1},transmissionSamplerSize:{value:new f1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new I1},attenuationDistance:{value:0},attenuationColor:{value:new N1(0)},specularColor:{value:new N1(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new I1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new I1},anisotropyVector:{value:new f1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new I1}}]),vertexShader:z1.meshphysical_vert,fragmentShader:z1.meshphysical_frag};var r6={r:0,b:0,g:0},Aa=new V2,ei=new I1;ei.set(-1,0,0,0,1,0,0,0,1);function ma(C,e,t,i,r,H){let V=new N1(0),n=r===!0?0:1,a,L,o=null,M=0,s=null;function l(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let h=v.backgroundBlurriness>0;y=e.get(y,h)}return y}function u(v){let y=!1,h=l(v);h===null?c(V,n):h&&h.isColor&&(c(h,1),y=!0);let g=C.xr.getEnvironmentBlendMode();g==="additive"?t.buffers.color.setClear(0,0,0,1,H):g==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,H),(C.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil))}function f(v,y){let h=l(y);h&&(h.isCubeTexture||h.mapping===R7)?(L===void 0&&(L=new e5(new h0(1,1,1),new a5({name:"BackgroundCubeMaterial",uniforms:z0(k5.backgroundCube.uniforms),vertexShader:k5.backgroundCube.vertexShader,fragmentShader:k5.backgroundCube.fragmentShader,side:t5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),L.geometry.deleteAttribute("normal"),L.geometry.deleteAttribute("uv"),L.onBeforeRender=function(g,Z,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(L.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(L)),L.material.uniforms.envMap.value=h,L.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,L.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,L.material.uniforms.backgroundRotation.value.setFromMatrix4(Aa.makeRotationFromEuler(y.backgroundRotation)).transpose(),h.isCubeTexture&&h.isRenderTargetTexture===!1&&L.material.uniforms.backgroundRotation.value.premultiply(ei),L.material.toneMapped=Y1.getTransfer(h.colorSpace)!==i2,(o!==h||M!==h.version||s!==C.toneMapping)&&(L.material.needsUpdate=!0,o=h,M=h.version,s=C.toneMapping),L.layers.enableAll(),v.unshift(L,L.geometry,L.material,0,0,null)):h&&h.isTexture&&(a===void 0&&(a=new e5(new Z7(2,2),new a5({name:"BackgroundMaterial",uniforms:z0(k5.background.uniforms),vertexShader:k5.background.vertexShader,fragmentShader:k5.background.fragmentShader,side:S0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=h,a.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,a.material.toneMapped=Y1.getTransfer(h.colorSpace)!==i2,h.matrixAutoUpdate===!0&&h.updateMatrix(),a.material.uniforms.uvTransform.value.copy(h.matrix),(o!==h||M!==h.version||s!==C.toneMapping)&&(a.material.needsUpdate=!0,o=h,M=h.version,s=C.toneMapping),a.layers.enableAll(),v.unshift(a,a.geometry,a.material,0,0,null))}function c(v,y){v.getRGB(r6,$8(C)),t.buffers.color.setClear(r6.r,r6.g,r6.b,y,H)}function d(){L!==void 0&&(L.geometry.dispose(),L.material.dispose(),L=void 0),a!==void 0&&(a.geometry.dispose(),a.material.dispose(),a=void 0)}return{getClearColor:function(){return V},setClearColor:function(v,y=1){V.set(v),n=y,c(V,n)},getClearAlpha:function(){return n},setClearAlpha:function(v){n=v,c(V,n)},render:u,addToRenderList:f,dispose:d}}function ha(C,e){let t=C.getParameter(C.MAX_VERTEX_ATTRIBS),i={},r=s(null),H=r,V=!1;function n(I,N,G,P,U){let K=!1,Y=M(I,P,G,N);H!==Y&&(H=Y,L(H.object)),K=l(I,P,G,U),K&&u(I,P,G,U),U!==null&&e.update(U,C.ELEMENT_ARRAY_BUFFER),(K||V)&&(V=!1,h(I,N,G,P),U!==null&&C.bindBuffer(C.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function a(){return C.createVertexArray()}function L(I){return C.bindVertexArray(I)}function o(I){return C.deleteVertexArray(I)}function M(I,N,G,P){let U=P.wireframe===!0,K=i[N.id];K===void 0&&(K={},i[N.id]=K);let Y=I.isInstancedMesh===!0?I.id:0,r1=K[Y];r1===void 0&&(r1={},K[Y]=r1);let X=r1[G.id];X===void 0&&(X={},r1[G.id]=X);let t1=X[U];return t1===void 0&&(t1=s(a()),X[U]=t1),t1}function s(I){let N=[],G=[],P=[];for(let U=0;U<t;U++)N[U]=0,G[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:P,object:I,attributes:{},index:null}}function l(I,N,G,P){let U=H.attributes,K=N.attributes,Y=0,r1=G.getAttributes();for(let X in r1)if(r1[X].location>=0){let i1=U[X],O1=K[X];if(O1===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(O1=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(O1=I.instanceColor)),i1===void 0||i1.attribute!==O1||O1&&i1.data!==O1.data)return!0;Y++}return H.attributesNum!==Y||H.index!==P}function u(I,N,G,P){let U={},K=N.attributes,Y=0,r1=G.getAttributes();for(let X in r1)if(r1[X].location>=0){let i1=K[X];i1===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(i1=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(i1=I.instanceColor));let O1={};O1.attribute=i1,i1&&i1.data&&(O1.data=i1.data),U[X]=O1,Y++}H.attributes=U,H.attributesNum=Y,H.index=P}function f(){let I=H.newAttributes;for(let N=0,G=I.length;N<G;N++)I[N]=0}function c(I){d(I,0)}function d(I,N){let G=H.newAttributes,P=H.enabledAttributes,U=H.attributeDivisors;G[I]=1,P[I]===0&&(C.enableVertexAttribArray(I),P[I]=1),U[I]!==N&&(C.vertexAttribDivisor(I,N),U[I]=N)}function v(){let I=H.newAttributes,N=H.enabledAttributes;for(let G=0,P=N.length;G<P;G++)N[G]!==I[G]&&(C.disableVertexAttribArray(G),N[G]=0)}function y(I,N,G,P,U,K,Y){Y===!0?C.vertexAttribIPointer(I,N,G,U,K):C.vertexAttribPointer(I,N,G,P,U,K)}function h(I,N,G,P){f();let U=P.attributes,K=G.getAttributes(),Y=N.defaultAttributeValues;for(let r1 in K){let X=K[r1];if(X.location>=0){let t1=U[r1];if(t1===void 0&&(r1==="instanceMatrix"&&I.instanceMatrix&&(t1=I.instanceMatrix),r1==="instanceColor"&&I.instanceColor&&(t1=I.instanceColor)),t1!==void 0){let i1=t1.normalized,O1=t1.itemSize,T1=e.get(t1);if(T1===void 0)continue;let a2=T1.buffer,Q1=T1.type,j1=T1.bytesPerElement,q=Q1===C.INT||Q1===C.UNSIGNED_INT||t1.gpuType===m9;if(t1.isInterleavedBufferAttribute){let e1=t1.data,x1=e1.stride,D1=t1.offset;if(e1.isInstancedInterleavedBuffer){for(let m1=0;m1<X.locationSize;m1++)d(X.location+m1,e1.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=e1.meshPerAttribute*e1.count)}else for(let m1=0;m1<X.locationSize;m1++)c(X.location+m1);C.bindBuffer(C.ARRAY_BUFFER,a2);for(let m1=0;m1<X.locationSize;m1++)y(X.location+m1,O1/X.locationSize,Q1,i1,x1*j1,(D1+O1/X.locationSize*m1)*j1,q)}else{if(t1.isInstancedBufferAttribute){for(let e1=0;e1<X.locationSize;e1++)d(X.location+e1,t1.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=t1.meshPerAttribute*t1.count)}else for(let e1=0;e1<X.locationSize;e1++)c(X.location+e1);C.bindBuffer(C.ARRAY_BUFFER,a2);for(let e1=0;e1<X.locationSize;e1++)y(X.location+e1,O1/X.locationSize,Q1,i1,O1*j1,O1/X.locationSize*e1*j1,q)}}else if(Y!==void 0){let i1=Y[r1];if(i1!==void 0)switch(i1.length){case 2:C.vertexAttrib2fv(X.location,i1);break;case 3:C.vertexAttrib3fv(X.location,i1);break;case 4:C.vertexAttrib4fv(X.location,i1);break;default:C.vertexAttrib1fv(X.location,i1)}}}}v()}function g(){_();for(let I in i){let N=i[I];for(let G in N){let P=N[G];for(let U in P){let K=P[U];for(let Y in K)o(K[Y].object),delete K[Y];delete P[U]}}delete i[I]}}function Z(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let G in N){let P=N[G];for(let U in P){let K=P[U];for(let Y in K)o(K[Y].object),delete K[Y];delete P[U]}}delete i[I.id]}function b(I){for(let N in i){let G=i[N];for(let P in G){let U=G[P];if(U[I.id]===void 0)continue;let K=U[I.id];for(let Y in K)o(K[Y].object),delete K[Y];delete U[I.id]}}}function m(I){for(let N in i){let G=i[N],P=I.isInstancedMesh===!0?I.id:0,U=G[P];if(U!==void 0){for(let K in U){let Y=U[K];for(let r1 in Y)o(Y[r1].object),delete Y[r1];delete U[K]}delete G[P],Object.keys(G).length===0&&delete i[N]}}}function _(){R(),V=!0,H!==r&&(H=r,L(H.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:n,reset:_,resetDefaultState:R,dispose:g,releaseStatesOfGeometry:Z,releaseStatesOfObject:m,releaseStatesOfProgram:b,initAttributes:f,enableAttribute:c,disableUnusedAttributes:v}}function fa(C,e,t){let i;function r(a){i=a}function H(a,L){C.drawArrays(i,a,L),t.update(L,i,1)}function V(a,L,o){o!==0&&(C.drawArraysInstanced(i,a,L,o),t.update(L,i,o))}function n(a,L,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,a,0,L,0,o);let s=0;for(let l=0;l<o;l++)s+=L[l];t.update(s,i,1)}this.setMode=r,this.render=H,this.renderInstances=V,this.renderMultiDraw=n}function xa(C,e,t,i){let r;function H(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");r=C.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function V(b){return!(b!==c5&&i.convert(b)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT))}function n(b){let m=b===b5&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==r5&&b!==y5&&!m&&i.convert(b)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE))}function a(b){if(b==="highp"){if(C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.HIGH_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&C.getShaderPrecisionFormat(C.VERTEX_SHADER,C.MEDIUM_FLOAT).precision>0&&C.getShaderPrecisionFormat(C.FRAGMENT_SHADER,C.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let L=t.precision!==void 0?t.precision:"highp",o=a(L);o!==L&&(R1("WebGLRenderer:",L,"not supported, using",o,"instead."),L=o);let M=t.logarithmicDepthBuffer===!0,s=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&s===!1&&R1("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let l=C.getParameter(C.MAX_TEXTURE_IMAGE_UNITS),u=C.getParameter(C.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=C.getParameter(C.MAX_TEXTURE_SIZE),c=C.getParameter(C.MAX_CUBE_MAP_TEXTURE_SIZE),d=C.getParameter(C.MAX_VERTEX_ATTRIBS),v=C.getParameter(C.MAX_VERTEX_UNIFORM_VECTORS),y=C.getParameter(C.MAX_VARYING_VECTORS),h=C.getParameter(C.MAX_FRAGMENT_UNIFORM_VECTORS),g=C.getParameter(C.MAX_SAMPLES),Z=C.getParameter(C.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:a,textureFormatReadable:V,textureTypeReadable:n,precision:L,logarithmicDepthBuffer:M,reversedDepthBuffer:s,maxTextures:l,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:c,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:h,maxSamples:g,samples:Z}}function va(C){let e=this,t=null,i=0,r=!1,H=!1,V=new x5,n=new I1,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(M,s){let l=M.length!==0||s||i!==0||r;return r=s,i=M.length,l},this.beginShadows=function(){H=!0,o(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(M,s){t=o(M,s,0)},this.setState=function(M,s,l){let u=M.clippingPlanes,f=M.clipIntersection,c=M.clipShadows,d=C.get(M);if(!r||u===null||u.length===0||H&&!c)H?o(null):L();else{let v=H?0:i,y=v*4,h=d.clippingState||null;a.value=h,h=o(u,s,y,l);for(let g=0;g!==y;++g)h[g]=t[g];d.clippingState=h,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function L(){a.value!==t&&(a.value=t,a.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function o(M,s,l,u){let f=M!==null?M.length:0,c=null;if(f!==0){if(c=a.value,u!==!0||c===null){let d=l+f*4,v=s.matrixWorldInverse;n.getNormalMatrix(v),(c===null||c.length<d)&&(c=new Float32Array(d));for(let y=0,h=l;y!==f;++y,h+=4)V.copy(M[y]).applyMatrix4(v,n),V.normal.toArray(c,h),c[h+3]=V.constant}a.value=c,a.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,c}}var F3=4,Sa=6,ga=20,Za=256,U7=new w3,OC=new N1,ie=null,re=0,He=0,Ve=!1,_a=new T,G0=new T,V6=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,H={}){let{size:V=256,position:n=_a}=H;ie=this._renderer.getRenderTarget(),re=this._renderer.getActiveCubeFace(),He=this._renderer.getActiveMipmapLevel(),Ve=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(V);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a,n),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=PC(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=RC(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ie,re,He),this._renderer.xr.enabled=Ve,e.scissorTest=!1,I3(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===g0||e.mapping===N0?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ie=this._renderer.getRenderTarget(),re=this._renderer.getActiveCubeFace(),He=this._renderer.getActiveMipmapLevel(),Ve=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:I2,minFilter:I2,generateMipmaps:!1,type:b5,format:c5,colorSpace:V7,depthBuffer:!1},r=EC(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=EC(e,t,i);let{_lodMax:H}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ya(H)),this._blurMaterial=Ta(H,e,t),this._ggxMaterial=ba(H,e,t)}return r}_compileMaterial(e){let t=new e5(new g5,e);this._renderer.compile(t,U7)}_sceneToCubeUV(e,t,i,r,H){let a=new G2(90,1,t,i),L=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],M=this._renderer,s=M.autoClear,l=M.toneMapping;M.getClearColor(OC),M.toneMapping=Z5,M.autoClear=!1,M.state.buffers.depth.getReversed()&&(M.setRenderTarget(r),M.clearDepth(),M.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new e5(new h0,new d7({name:"PMREM.Background",side:t5,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,c=f.material,d=!1,v=e.background;v?v.isColor&&(c.color.copy(v),e.background=null,d=!0):(c.color.copy(OC),d=!0);for(let y=0;y<6;y++){let h=y%3;h===0?(a.up.set(0,L[y],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x+o[y],H.y,H.z)):h===1?(a.up.set(0,0,L[y]),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y+o[y],H.z)):(a.up.set(0,L[y],0),a.position.set(H.x,H.y,H.z),a.lookAt(H.x,H.y,H.z+o[y]));let g=this._cubeSize;I3(r,h*g,y>2?g:0,g,g),M.setRenderTarget(r),d&&M.render(f,a),M.render(e,a)}M.toneMapping=l,M.autoClear=s,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===g0||e.mapping===N0;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=PC()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=RC());let H=r?this._cubemapMaterial:this._equirectMaterial,V=this._lodMeshes[0];V.material=H;let n=H.uniforms;n.envMap.value=e;let a=this._cubeSize;I3(t,0,0,3*a,2*a),i.setRenderTarget(t),i.render(V,U7)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let H=1;H<r;H++)this._applyGGXFilter(e,H-1,H);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,H=this._pingPongRenderTarget,V=this._ggxMaterial,n=this._lodMeshes[i];n.material=V;let a=V.uniforms,L=i/(this._lodMeshes.length-1),o=t/(this._lodMeshes.length-1),M=Math.sqrt(L*L-o*o),s=L*1.25,l=M*s,{_lodMax:u}=this,f=this._sizeLods[i],c=3*f*(i>u-F3?i-u+F3:0),d=4*(this._cubeSize-f);a.envMap.value=e.texture,a.roughness.value=l,a.mipInt.value=u-t,I3(H,c,d,3*f,2*f),r.setRenderTarget(H),r.render(n,U7),a.envMap.value=H.texture,a.roughness.value=0,a.mipInt.value=u-i,I3(e,c,d,3*f,2*f),r.setRenderTarget(e),r.render(n,U7)}_blur(e,t,i,r){let H=this._pingPongRenderTarget,V=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,H,t,i,V),this._blurPass(H,e,i,i,V)}_blurPass(e,t,i,r,H){let V=this._renderer,n=this._blurMaterial,a=this._lodMeshes[r];a.material=n;let L=n.uniforms;L.envMap.value=e.texture,L.sigma.value=H,L.mipInt.value=this._lodMax-i;let o=this._sizeLods[r],M=3*o*(r>this._lodMax-F3?r-this._lodMax+F3:0),s=4*(this._cubeSize-o);I3(t,M,s,3*o,2*o),V.setRenderTarget(t),V.render(a,U7)}};function ya(C){let e=[],t=[],i=C,r=C-F3+1+Sa;for(let H=0;H<r;H++){let V=Math.pow(2,i);e.push(V);let n=1/(V-2),a=-n,L=1+n,o=[a,a,L,a,L,L,a,a,L,L,a,L],M=6,s=6,l=3,u=new Float32Array(l*s*M),f=new Float32Array(l*s*M);for(let d=0;d<M;d++){let v=d%3*2/3-1,y=d>2?0:-1,h=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];u.set(h,l*s*d);for(let g=0;g<s;g++){let Z=o[g*2]*2-1,b=o[g*2+1]*2-1;d===0?G0.set(1,b,Z):d===1?G0.set(-Z,1,-b):d===2?G0.set(-Z,b,1):d===3?G0.set(-1,b,-Z):d===4?G0.set(-Z,-1,b):G0.set(Z,b,-1),G0.toArray(f,(d*s+g)*l)}}let c=new g5;c.setAttribute("position",new l5(u,l)),c.setAttribute("outputDirection",new l5(f,l)),t.push(new e5(c,null)),i>F3&&i--}return{lodMeshes:t,sizeLods:e}}function EC(C,e,t){let i=new i5(C,e,t);return i.texture.mapping=R7,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function I3(C,e,t,i,r){C.viewport.set(e,t,i,r),C.scissor.set(e,t,i,r)}function ba(C,e,t){return new a5({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Za,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:a6(),fragmentShader:`

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
		`,blending:F5,depthTest:!1,depthWrite:!1})}function Ta(C,e,t){return new a5({name:"SphericalGaussianBlur",defines:{SAMPLES:ga,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${C}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:a6(),fragmentShader:`

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
		`,blending:F5,depthTest:!1,depthWrite:!1})}function RC(){return new a5({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:a6(),fragmentShader:`

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
		`,blending:F5,depthTest:!1,depthWrite:!1})}function PC(){return new a5({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:a6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:F5,depthTest:!1,depthWrite:!1})}function a6(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var n6=class extends i5{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new c7(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new h0(5,5,5),H=new a5({name:"CubemapFromEquirect",uniforms:z0(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:t5,blending:F5});H.uniforms.tEquirect.value=t;let V=new e5(r,H),n=t.minFilter;return t.minFilter===Z0&&(t.minFilter=I2),new l9(1,10,this).update(e,V),t.minFilter=n,V.geometry.dispose(),V.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let H=e.getRenderTarget();for(let V=0;V<6;V++)e.setRenderTarget(this,V),e.clear(t,i,r);e.setRenderTarget(H)}};function wa(C){let e=new WeakMap,t=new WeakMap,i=null;function r(s,l=!1){return s==null?null:l?V(s):H(s)}function H(s){if(s&&s.isTexture){let l=s.mapping;if(l===p9||l===u9)if(e.has(s)){let u=e.get(s).texture;return n(u,s.mapping)}else{let u=s.image;if(u&&u.height>0){let f=new n6(u.height);return f.fromEquirectangularTexture(C,s),e.set(s,f),s.addEventListener("dispose",L),n(f.texture,s.mapping)}else return null}}return s}function V(s){if(s&&s.isTexture){let l=s.mapping,u=l===p9||l===u9,f=l===g0||l===N0;if(u||f){let c=t.get(s),d=c!==void 0?c.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return i===null&&(i=new V6(C)),c=u?i.fromEquirectangular(s,c):i.fromCubemap(s,c),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),c.texture;if(c!==void 0)return c.texture;{let v=s.image;return u&&v&&v.height>0||f&&v&&a(v)?(i===null&&(i=new V6(C)),c=u?i.fromEquirectangular(s):i.fromCubemap(s),c.texture.pmremVersion=s.pmremVersion,t.set(s,c),s.addEventListener("dispose",o),c.texture):null}}}return s}function n(s,l){return l===p9?s.mapping=g0:l===u9&&(s.mapping=N0),s}function a(s){let l=0,u=6;for(let f=0;f<u;f++)s[f]!==void 0&&l++;return l===u}function L(s){let l=s.target;l.removeEventListener("dispose",L);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(s){let l=s.target;l.removeEventListener("dispose",o);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function M(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:M}}function Oa(C){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=C.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&F0("WebGLRenderer: "+i+" extension not supported."),r}}}function Ea(C,e,t,i){let r={},H=new WeakMap;function V(M){let s=M.target;s.index!==null&&e.remove(s.index);for(let u in s.attributes)e.remove(s.attributes[u]);s.removeEventListener("dispose",V),delete r[s.id];let l=H.get(s);l&&(e.remove(l),H.delete(s)),i.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,t.memory.geometries--}function n(M,s){return r[s.id]===!0||(s.addEventListener("dispose",V),r[s.id]=!0,t.memory.geometries++),s}function a(M){let s=M.attributes;for(let l in s)e.update(s[l],C.ARRAY_BUFFER)}function L(M){let s=[],l=M.index,u=M.attributes.position,f=0;if(u===void 0)return;if(l!==null){let v=l.array;f=l.version;for(let y=0,h=v.length;y<h;y+=3){let g=v[y+0],Z=v[y+1],b=v[y+2];s.push(g,Z,Z,b,b,g)}}else{let v=u.array;f=u.version;for(let y=0,h=v.length/3-1;y<h;y+=3){let g=y+0,Z=y+1,b=y+2;s.push(g,Z,Z,b,b,g)}}let c=new(u.count>=65535?M7:s7)(s,1);c.version=f;let d=H.get(M);d&&e.remove(d),H.set(M,c)}function o(M){let s=H.get(M);if(s){let l=M.index;l!==null&&s.version<l.version&&L(M)}else L(M);return H.get(M)}return{get:n,update:a,getWireframeAttribute:o}}function Ra(C,e,t){let i;function r(M){i=M}let H,V;function n(M){H=M.type,V=M.bytesPerElement}function a(M,s){C.drawElements(i,s,H,M*V),t.update(s,i,1)}function L(M,s,l){l!==0&&(C.drawElementsInstanced(i,s,H,M*V,l),t.update(s,i,l))}function o(M,s,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,s,0,H,M,0,l);let f=0;for(let c=0;c<l;c++)f+=s[c];t.update(f,i,1)}this.setMode=r,this.setIndex=n,this.render=a,this.renderInstances=L,this.renderMultiDraw=o}function Pa(C){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(H,V,n){switch(t.calls++,V){case C.TRIANGLES:t.triangles+=n*(H/3);break;case C.LINES:t.lines+=n*(H/2);break;case C.LINE_STRIP:t.lines+=n*(H-1);break;case C.LINE_LOOP:t.lines+=n*H;break;case C.POINTS:t.points+=n*H;break;default:P1("WebGLInfo: Unknown draw mode:",V);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ba(C,e,t){let i=new WeakMap,r=new A2;function H(V,n,a){let L=V.morphTargetInfluences,o=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,M=o!==void 0?o.length:0,s=i.get(n);if(s===void 0||s.count!==M){let _=function(){b.dispose(),i.delete(n),n.removeEventListener("dispose",_)};s!==void 0&&s.texture.dispose();let l=n.morphAttributes.position!==void 0,u=n.morphAttributes.normal!==void 0,f=n.morphAttributes.color!==void 0,c=n.morphAttributes.position||[],d=n.morphAttributes.normal||[],v=n.morphAttributes.color||[],y=0;l===!0&&(y=1),u===!0&&(y=2),f===!0&&(y=3);let h=n.attributes.position.count*y,g=1;h>e.maxTextureSize&&(g=Math.ceil(h/e.maxTextureSize),h=e.maxTextureSize);let Z=new Float32Array(h*g*4*M),b=new a7(Z,h,g,M);b.type=y5,b.needsUpdate=!0;let m=y*4;for(let R=0;R<M;R++){let I=c[R],N=d[R],G=v[R],P=h*g*4*R;for(let U=0;U<I.count;U++){let K=U*m;l===!0&&(r.fromBufferAttribute(I,U),Z[P+K+0]=r.x,Z[P+K+1]=r.y,Z[P+K+2]=r.z,Z[P+K+3]=0),u===!0&&(r.fromBufferAttribute(N,U),Z[P+K+4]=r.x,Z[P+K+5]=r.y,Z[P+K+6]=r.z,Z[P+K+7]=0),f===!0&&(r.fromBufferAttribute(G,U),Z[P+K+8]=r.x,Z[P+K+9]=r.y,Z[P+K+10]=r.z,Z[P+K+11]=G.itemSize===4?r.w:1)}}s={count:M,texture:b,size:new f1(h,g)},i.set(n,s),n.addEventListener("dispose",_)}if(V.isInstancedMesh===!0&&V.morphTexture!==null)a.getUniforms().setValue(C,"morphTexture",V.morphTexture,t);else{let l=0;for(let f=0;f<L.length;f++)l+=L[f];let u=n.morphTargetsRelative?1:1-l;a.getUniforms().setValue(C,"morphTargetBaseInfluence",u),a.getUniforms().setValue(C,"morphTargetInfluences",L)}a.getUniforms().setValue(C,"morphTargetsTexture",s.texture,t),a.getUniforms().setValue(C,"morphTargetsTextureSize",s.size)}return{update:H}}function Ia(C,e,t,i,r){let H=new WeakMap;function V(L){let o=r.render.frame,M=L.geometry,s=e.get(L,M);if(H.get(s)!==o&&(e.update(s),H.set(s,o)),L.isInstancedMesh&&(L.hasEventListener("dispose",a)===!1&&L.addEventListener("dispose",a),H.get(L)!==o&&(t.update(L.instanceMatrix,C.ARRAY_BUFFER),L.instanceColor!==null&&t.update(L.instanceColor,C.ARRAY_BUFFER),H.set(L,o))),L.isSkinnedMesh){let l=L.skeleton;H.get(l)!==o&&(l.update(),H.set(l,o))}return s}function n(){H=new WeakMap}function a(L){let o=L.target;o.removeEventListener("dispose",a),i.releaseStatesOfObject(o),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:V,dispose:n}}var Fa={[y8]:"LINEAR_TONE_MAPPING",[b8]:"REINHARD_TONE_MAPPING",[T8]:"CINEON_TONE_MAPPING",[w8]:"ACES_FILMIC_TONE_MAPPING",[E8]:"AGX_TONE_MAPPING",[R8]:"NEUTRAL_TONE_MAPPING",[O8]:"CUSTOM_TONE_MAPPING"};function Da(C,e,t,i,r,H){let V=new i5(e,t,{type:C,depthBuffer:r,stencilBuffer:H,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),n=null,a=null,L=new g5;L.setAttribute("position",new K2([-1,3,0,-1,-1,0,3,-1,0],3)),L.setAttribute("uv",new K2([0,2,0,0,2,0],2));let o=new j4({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),M=new e5(L,o),s=new w3(-1,1,1,-1,0,1),l=null,u=null,f=!1,c,d=null,v=[],y=!1;this.setSize=function(h,g){V.setSize(h,g),n!==null&&n.setSize(h,g),a!==null&&a.setSize(h,g);for(let Z=0;Z<v.length;Z++){let b=v[Z];b.setSize&&b.setSize(h,g)}},this.setEffects=function(h){v=h,y=v.length>0&&v[0].isRenderPass===!0;let g=V.width,Z=V.height;v.length>0&&n===null&&(n=new i5(g,Z,{type:b5,depthBuffer:!1,stencilBuffer:!1}),a=new i5(g,Z,{type:b5,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<v.length;b++){let m=v[b];m.setSize&&m.setSize(g,Z)}},this.begin=function(h,g){if(f||h.toneMapping===Z5&&v.length===0)return!1;if(d=g,g!==null){let Z=g.width,b=g.height;(V.width!==Z||V.height!==b)&&this.setSize(Z,b)}return y===!1&&h.setRenderTarget(V),c=h.toneMapping,h.toneMapping=Z5,!0},this.hasRenderPass=function(){return y},this.end=function(h,g){h.toneMapping=c,f=!0;let Z=V,b=n;for(let m=0;m<v.length;m++){let _=v[m];_.enabled!==!1&&(_.render(h,b,Z,g),_.needsSwap!==!1&&(Z=b,b=b===n?a:n))}if(l!==h.outputColorSpace||u!==h.toneMapping){l=h.outputColorSpace,u=h.toneMapping,o.defines={},Y1.getTransfer(l)===i2&&(o.defines.SRGB_TRANSFER="");let m=Fa[u];m&&(o.defines[m]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=Z.texture,h.setRenderTarget(d),h.render(M,s),d=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){V.dispose(),n!==null&&n.dispose(),a!==null&&a.dispose(),L.dispose(),o.dispose()}}var ti=new J2,ae=new m0(1,1),Ci=new a7,ii=new G4,ri=new c7,BC=[],IC=[],FC=new Float32Array(16),DC=new Float32Array(9),kC=new Float32Array(4);function k3(C,e,t){let i=C[0];if(i<=0||i>0)return C;let r=e*t,H=BC[r];if(H===void 0&&(H=new Float32Array(r),BC[r]=H),e!==0){i.toArray(H,0);for(let V=1,n=0;V!==e;++V)n+=t,C[V].toArray(H,n)}return H}function T2(C,e){if(C.length!==e.length)return!1;for(let t=0,i=C.length;t<i;t++)if(C[t]!==e[t])return!1;return!0}function w2(C,e){for(let t=0,i=e.length;t<i;t++)C[t]=e[t]}function o6(C,e){let t=IC[e];t===void 0&&(t=new Int32Array(e),IC[e]=t);for(let i=0;i!==e;++i)t[i]=C.allocateTextureUnit();return t}function ka(C,e){let t=this.cache;t[0]!==e&&(C.uniform1f(this.addr,e),t[0]=e)}function Na(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(T2(t,e))return;C.uniform2fv(this.addr,e),w2(t,e)}}function Ua(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(C.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(T2(t,e))return;C.uniform3fv(this.addr,e),w2(t,e)}}function za(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(T2(t,e))return;C.uniform4fv(this.addr,e),w2(t,e)}}function Ga(C,e){let t=this.cache,i=e.elements;if(i===void 0){if(T2(t,e))return;C.uniformMatrix2fv(this.addr,!1,e),w2(t,e)}else{if(T2(t,i))return;kC.set(i),C.uniformMatrix2fv(this.addr,!1,kC),w2(t,i)}}function Wa(C,e){let t=this.cache,i=e.elements;if(i===void 0){if(T2(t,e))return;C.uniformMatrix3fv(this.addr,!1,e),w2(t,e)}else{if(T2(t,i))return;DC.set(i),C.uniformMatrix3fv(this.addr,!1,DC),w2(t,i)}}function Xa(C,e){let t=this.cache,i=e.elements;if(i===void 0){if(T2(t,e))return;C.uniformMatrix4fv(this.addr,!1,e),w2(t,e)}else{if(T2(t,i))return;FC.set(i),C.uniformMatrix4fv(this.addr,!1,FC),w2(t,i)}}function qa(C,e){let t=this.cache;t[0]!==e&&(C.uniform1i(this.addr,e),t[0]=e)}function $a(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(T2(t,e))return;C.uniform2iv(this.addr,e),w2(t,e)}}function Ya(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(T2(t,e))return;C.uniform3iv(this.addr,e),w2(t,e)}}function Qa(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(T2(t,e))return;C.uniform4iv(this.addr,e),w2(t,e)}}function Ka(C,e){let t=this.cache;t[0]!==e&&(C.uniform1ui(this.addr,e),t[0]=e)}function Ja(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(C.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(T2(t,e))return;C.uniform2uiv(this.addr,e),w2(t,e)}}function ja(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(C.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(T2(t,e))return;C.uniform3uiv(this.addr,e),w2(t,e)}}function eo(C,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(C.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(T2(t,e))return;C.uniform4uiv(this.addr,e),w2(t,e)}}function to(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r);let H;this.type===C.SAMPLER_2D_SHADOW?(ae.compareFunction=t.isReversedDepthBuffer()?i6:C6,H=ae):H=ti,t.setTexture2D(e||H,r)}function Co(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ii,r)}function io(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ri,r)}function ro(C,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(C.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ci,r)}function Ho(C){switch(C){case 5126:return ka;case 35664:return Na;case 35665:return Ua;case 35666:return za;case 35674:return Ga;case 35675:return Wa;case 35676:return Xa;case 5124:case 35670:return qa;case 35667:case 35671:return $a;case 35668:case 35672:return Ya;case 35669:case 35673:return Qa;case 5125:return Ka;case 36294:return Ja;case 36295:return ja;case 36296:return eo;case 35678:case 36198:case 36298:case 36306:case 35682:return to;case 35679:case 36299:case 36307:return Co;case 35680:case 36300:case 36308:case 36293:return io;case 36289:case 36303:case 36311:case 36292:return ro}}function Vo(C,e){C.uniform1fv(this.addr,e)}function no(C,e){let t=k3(e,this.size,2);C.uniform2fv(this.addr,t)}function Lo(C,e){let t=k3(e,this.size,3);C.uniform3fv(this.addr,t)}function ao(C,e){let t=k3(e,this.size,4);C.uniform4fv(this.addr,t)}function oo(C,e){let t=k3(e,this.size,4);C.uniformMatrix2fv(this.addr,!1,t)}function so(C,e){let t=k3(e,this.size,9);C.uniformMatrix3fv(this.addr,!1,t)}function Mo(C,e){let t=k3(e,this.size,16);C.uniformMatrix4fv(this.addr,!1,t)}function lo(C,e){C.uniform1iv(this.addr,e)}function co(C,e){C.uniform2iv(this.addr,e)}function po(C,e){C.uniform3iv(this.addr,e)}function uo(C,e){C.uniform4iv(this.addr,e)}function Ao(C,e){C.uniform1uiv(this.addr,e)}function mo(C,e){C.uniform2uiv(this.addr,e)}function ho(C,e){C.uniform3uiv(this.addr,e)}function fo(C,e){C.uniform4uiv(this.addr,e)}function xo(C,e,t){let i=this.cache,r=e.length,H=o6(t,r);T2(i,H)||(C.uniform1iv(this.addr,H),w2(i,H));let V;this.type===C.SAMPLER_2D_SHADOW?V=ae:V=ti;for(let n=0;n!==r;++n)t.setTexture2D(e[n]||V,H[n])}function vo(C,e,t){let i=this.cache,r=e.length,H=o6(t,r);T2(i,H)||(C.uniform1iv(this.addr,H),w2(i,H));for(let V=0;V!==r;++V)t.setTexture3D(e[V]||ii,H[V])}function So(C,e,t){let i=this.cache,r=e.length,H=o6(t,r);T2(i,H)||(C.uniform1iv(this.addr,H),w2(i,H));for(let V=0;V!==r;++V)t.setTextureCube(e[V]||ri,H[V])}function go(C,e,t){let i=this.cache,r=e.length,H=o6(t,r);T2(i,H)||(C.uniform1iv(this.addr,H),w2(i,H));for(let V=0;V!==r;++V)t.setTexture2DArray(e[V]||Ci,H[V])}function Zo(C){switch(C){case 5126:return Vo;case 35664:return no;case 35665:return Lo;case 35666:return ao;case 35674:return oo;case 35675:return so;case 35676:return Mo;case 5124:case 35670:return lo;case 35667:case 35671:return co;case 35668:case 35672:return po;case 35669:case 35673:return uo;case 5125:return Ao;case 36294:return mo;case 36295:return ho;case 36296:return fo;case 35678:case 36198:case 36298:case 36306:case 35682:return xo;case 35679:case 36299:case 36307:return vo;case 35680:case 36300:case 36308:case 36293:return So;case 36289:case 36303:case 36311:case 36292:return go}}var oe=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ho(t.type)}},se=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zo(t.type)}},Me=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let H=0,V=r.length;H!==V;++H){let n=r[H];n.setValue(e,t[n.id],i)}}},ne=/(\w+)(\])?(\[|\.)?/g;function NC(C,e){C.seq.push(e),C.map[e.id]=e}function _o(C,e,t){let i=C.name,r=i.length;for(ne.lastIndex=0;;){let H=ne.exec(i),V=ne.lastIndex,n=H[1],a=H[2]==="]",L=H[3];if(a&&(n=n|0),L===void 0||L==="["&&V+2===r){NC(t,L===void 0?new oe(n,C,e):new se(n,C,e));break}else{let M=t.map[n];M===void 0&&(M=new Me(n),NC(t,M)),t=M}}}var D3=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let V=0;V<i;++V){let n=e.getActiveUniform(t,V),a=e.getUniformLocation(t,n.name);_o(n,a,this)}let r=[],H=[];for(let V of this.seq)V.type===e.SAMPLER_2D_SHADOW||V.type===e.SAMPLER_CUBE_SHADOW||V.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(V):H.push(V);r.length>0&&(this.seq=r.concat(H))}setValue(e,t,i,r){let H=this.map[t];H!==void 0&&H.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let H=0,V=t.length;H!==V;++H){let n=t[H],a=i[n.id];a.needsUpdate!==!1&&n.setValue(e,a.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,H=e.length;r!==H;++r){let V=e[r];V.id in t&&i.push(V)}return i}};function UC(C,e,t){let i=C.createShader(e);return C.shaderSource(i,t),C.compileShader(i),i}var yo=37297,bo=0;function To(C,e){let t=C.split(`
`),i=[],r=Math.max(e-6,0),H=Math.min(e+6,t.length);for(let V=r;V<H;V++){let n=V+1;i.push(`${n===e?">":" "} ${n}: ${t[V]}`)}return i.join(`
`)}var zC=new I1;function wo(C){Y1._getMatrix(zC,Y1.workingColorSpace,C);let e=`mat3( ${zC.elements.map(t=>t.toFixed(4))} )`;switch(Y1.getTransfer(C)){case n7:return[e,"LinearTransferOETF"];case i2:return[e,"sRGBTransferOETF"];default:return R1("WebGLProgram: Unsupported color space: ",C),[e,"LinearTransferOETF"]}}function GC(C,e,t){let i=C.getShaderParameter(e,C.COMPILE_STATUS),H=(C.getShaderInfoLog(e)||"").trim();if(i&&H==="")return"";let V=/ERROR: 0:(\d+)/.exec(H);if(V){let n=parseInt(V[1]);return t.toUpperCase()+`

`+H+`

`+To(C.getShaderSource(e),n)}else return H}function Oo(C,e){let t=wo(e);return[`vec4 ${C}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Eo={[y8]:"Linear",[b8]:"Reinhard",[T8]:"Cineon",[w8]:"ACESFilmic",[E8]:"AgX",[R8]:"Neutral",[O8]:"Custom"};function Ro(C,e){let t=Eo[e];return t===void 0?(R1("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+C+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+C+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var H6=new T;function Po(){Y1.getLuminanceCoefficients(H6);let C=H6.x.toFixed(4),e=H6.y.toFixed(4),t=H6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${C}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bo(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",C.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(G7).join(`
`)}function Io(C){let e=[];for(let t in C){let i=C[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fo(C,e){let t={},i=C.getProgramParameter(e,C.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let H=C.getActiveAttrib(e,r),V=H.name,n=1;H.type===C.FLOAT_MAT2&&(n=2),H.type===C.FLOAT_MAT3&&(n=3),H.type===C.FLOAT_MAT4&&(n=4),t[V]={type:H.type,location:C.getAttribLocation(e,V),locationSize:n}}return t}function G7(C){return C!==""}function WC(C,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return C.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function XC(C,e){return C.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Do=/^[ \t]*#include +<([\w\d./]+)>/gm;function le(C){return C.replace(Do,No)}var ko=new Map;function No(C,e){let t=z1[e];if(t===void 0){let i=ko.get(e);if(i!==void 0)t=z1[i],R1('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return le(t)}var Uo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qC(C){return C.replace(Uo,zo)}function zo(C,e,t,i){let r="";for(let H=parseInt(e);H<parseInt(t);H++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return r}function $C(C){let e=`precision ${C.precision} float;
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
#define LOW_PRECISION`),e}var Go={[E7]:"SHADOWMAP_TYPE_PCF",[E3]:"SHADOWMAP_TYPE_VSM"};function Wo(C){return Go[C.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xo={[g0]:"ENVMAP_TYPE_CUBE",[N0]:"ENVMAP_TYPE_CUBE",[R7]:"ENVMAP_TYPE_CUBE_UV"};function qo(C){return C.envMap===!1?"ENVMAP_TYPE_CUBE":Xo[C.envMapMode]||"ENVMAP_TYPE_CUBE"}var $o={[N0]:"ENVMAP_MODE_REFRACTION"};function Yo(C){return C.envMap===!1?"ENVMAP_MODE_REFLECTION":$o[C.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qo={[_8]:"ENVMAP_BLENDING_MULTIPLY",[nC]:"ENVMAP_BLENDING_MIX",[LC]:"ENVMAP_BLENDING_ADD"};function Ko(C){return C.envMap===!1?"ENVMAP_BLENDING_NONE":Qo[C.combine]||"ENVMAP_BLENDING_NONE"}function Jo(C){let e=C.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jo(C,e,t,i){let r=C.getContext(),H=t.defines,V=t.vertexShader,n=t.fragmentShader,a=Wo(t),L=qo(t),o=Yo(t),M=Ko(t),s=Jo(t),l=Bo(t),u=Io(H),f=r.createProgram(),c,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(G7).join(`
`),c.length>0&&(c+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(G7).join(`
`),d.length>0&&(d+=`
`)):(c=[$C(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(G7).join(`
`),d=[$C(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+L:"",t.envMap?"#define "+o:"",t.envMap?"#define "+M:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Z5?"#define TONE_MAPPING":"",t.toneMapping!==Z5?z1.tonemapping_pars_fragment:"",t.toneMapping!==Z5?Ro("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",z1.colorspace_pars_fragment,Oo("linearToOutputTexel",t.outputColorSpace),Po(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(G7).join(`
`)),V=le(V),V=WC(V,t),V=XC(V,t),n=le(n),n=WC(n,t),n=XC(n,t),V=qC(V),n=qC(n),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,c=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,d=["#define varying in",t.glslVersion===z8?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===z8?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=v+c+V,h=v+d+n,g=UC(r,r.VERTEX_SHADER,y),Z=UC(r,r.FRAGMENT_SHADER,h);r.attachShader(f,g),r.attachShader(f,Z),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function b(I){if(C.debug.checkShaderErrors){let N=r.getProgramInfoLog(f)||"",G=r.getShaderInfoLog(g)||"",P=r.getShaderInfoLog(Z)||"",U=N.trim(),K=G.trim(),Y=P.trim(),r1=!0,X=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(r1=!1,typeof C.debug.onShaderError=="function")C.debug.onShaderError(r,f,g,Z);else{let t1=GC(r,g,"vertex"),i1=GC(r,Z,"fragment");P1("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+t1+`
`+i1)}else U!==""?R1("WebGLProgram: Program Info Log:",U):(K===""||Y==="")&&(X=!1);X&&(I.diagnostics={runnable:r1,programLog:U,vertexShader:{log:K,prefix:c},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(g),r.deleteShader(Z),m=new D3(r,f),_=Fo(r,f)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(f,yo)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bo++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=g,this.fragmentShader=Z,this}var es=0,de=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ce(e),t.set(e,i)),i}},ce=class{constructor(e){this.id=es++,this.code=e,this.usedTimes=0}};function ts(C){return C===y0||C===k7||C===N7}function Cs(C,e,t,i,r,H){let V=new v3,n=new de,a=new Set,L=[],o=new Map,M=i.logarithmicDepthBuffer,s=i.precision,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(m){return a.add(m),m===0?"uv":`uv${m}`}function f(m,_,R,I,N,G){let P=I.fog,U=N.geometry,K=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?I.environment:null,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,r1=e.get(m.envMap||K,Y),X=r1&&r1.mapping===R7?r1.image.height:null,t1=l[m.type];m.precision!==null&&(s=i.getMaxPrecision(m.precision),s!==m.precision&&R1("WebGLProgram.getParameters:",m.precision,"not supported, using",s,"instead."));let i1=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,O1=i1!==void 0?i1.length:0,T1=0;U.morphAttributes.position!==void 0&&(T1=1),U.morphAttributes.normal!==void 0&&(T1=2),U.morphAttributes.color!==void 0&&(T1=3);let a2,Q1,j1,q;if(t1){let s2=k5[t1];a2=s2.vertexShader,Q1=s2.fragmentShader}else{a2=m.vertexShader,Q1=m.fragmentShader;let s2=n.getVertexShaderStage(m),t2=n.getFragmentShaderStage(m);n.update(m,s2,t2),j1=s2.id,q=t2.id}let e1=C.getRenderTarget(),x1=C.state.buffers.depth.getReversed(),D1=N.isInstancedMesh===!0,m1=N.isBatchedMesh===!0,G1=!!m.map,b2=!!m.matcap,X1=!!r1,J1=!!m.aoMap,o2=!!m.lightMap,$1=!!m.bumpMap&&m.wireframe===!1,u2=!!m.normalMap,E2=!!m.displacementMap,C5=!!m.emissiveMap,h2=!!m.metalnessMap,g2=!!m.roughnessMap,E=m.anisotropy>0,D2=m.clearcoat>0,r2=m.dispersion>0,S=m.retroreflectivity>0,p=m.iridescence>0,B=m.sheen>0,k=m.transmission>0,W=E&&!!m.anisotropyMap,H1=D2&&!!m.clearcoatMap,V1=D2&&!!m.clearcoatNormalMap,$=D2&&!!m.clearcoatRoughnessMap,j=p&&!!m.iridescenceMap,n1=p&&!!m.iridescenceThicknessMap,_1=B&&!!m.sheenColorMap,M1=B&&!!m.sheenRoughnessMap,L1=!!m.specularMap,y1=!!m.specularColorMap,E1=!!m.specularIntensityMap,k1=k&&!!m.transmissionMap,O=k&&!!m.thicknessMap,a1=!!m.gradientMap,J=!!m.alphaMap,o1=m.alphaTest>0,p1=!!m.alphaHash,C1=!!m.extensions,w1=Z5;m.toneMapped&&(e1===null||e1.isXRRenderTarget===!0)&&(w1=C.toneMapping);let g1={shaderID:t1,shaderType:m.type,shaderName:m.name,vertexShader:a2,fragmentShader:Q1,defines:m.defines,customVertexShaderID:j1,customFragmentShaderID:q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:s,batching:m1,batchingColor:m1&&N._colorsTexture!==null,instancing:D1,instancingColor:D1&&N.instanceColor!==null,instancingMorph:D1&&N.morphTexture!==null,outputColorSpace:e1===null?C.outputColorSpace:e1.isXRRenderTarget===!0?e1.texture.colorSpace:Y1.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:G1,matcap:b2,envMap:X1,envMapMode:X1&&r1.mapping,envMapCubeUVHeight:X,aoMap:J1,lightMap:o2,bumpMap:$1,normalMap:u2,displacementMap:E2,emissiveMap:C5,normalMapObjectSpace:u2&&m.normalMapType===sC,normalMapTangentSpace:u2&&m.normalMapType===t6,packedNormalMap:u2&&m.normalMapType===t6&&ts(m.normalMap.format),metalnessMap:h2,roughnessMap:g2,anisotropy:E,anisotropyMap:W,clearcoat:D2,clearcoatMap:H1,clearcoatNormalMap:V1,clearcoatRoughnessMap:$,dispersion:r2,retroreflection:S,iridescence:p,iridescenceMap:j,iridescenceThicknessMap:n1,sheen:B,sheenColorMap:_1,sheenRoughnessMap:M1,specularMap:L1,specularColorMap:y1,specularIntensityMap:E1,transmission:k,transmissionMap:k1,thicknessMap:O,gradientMap:a1,opaque:m.transparent===!1&&m.blending===R3&&m.alphaToCoverage===!1,alphaMap:J,alphaTest:o1,alphaHash:p1,combine:m.combine,mapUv:G1&&u(m.map.channel),aoMapUv:J1&&u(m.aoMap.channel),lightMapUv:o2&&u(m.lightMap.channel),bumpMapUv:$1&&u(m.bumpMap.channel),normalMapUv:u2&&u(m.normalMap.channel),displacementMapUv:E2&&u(m.displacementMap.channel),emissiveMapUv:C5&&u(m.emissiveMap.channel),metalnessMapUv:h2&&u(m.metalnessMap.channel),roughnessMapUv:g2&&u(m.roughnessMap.channel),anisotropyMapUv:W&&u(m.anisotropyMap.channel),clearcoatMapUv:H1&&u(m.clearcoatMap.channel),clearcoatNormalMapUv:V1&&u(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(m.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&u(m.iridescenceMap.channel),iridescenceThicknessMapUv:n1&&u(m.iridescenceThicknessMap.channel),sheenColorMapUv:_1&&u(m.sheenColorMap.channel),sheenRoughnessMapUv:M1&&u(m.sheenRoughnessMap.channel),specularMapUv:L1&&u(m.specularMap.channel),specularColorMapUv:y1&&u(m.specularColorMap.channel),specularIntensityMapUv:E1&&u(m.specularIntensityMap.channel),transmissionMapUv:k1&&u(m.transmissionMap.channel),thicknessMapUv:O&&u(m.thicknessMap.channel),alphaMapUv:J&&u(m.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(u2||E),vertexNormals:!!U.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(G1||J),fog:!!P,useFog:m.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||U.attributes.normal===void 0&&u2===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:x1,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:O1,morphTextureStride:T1,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:m.dithering,shadowMapEnabled:C.shadowMap.enabled&&R.length>0,shadowMapType:C.shadowMap.type,toneMapping:w1,decodeVideoTexture:G1&&m.map.isVideoTexture===!0&&Y1.getTransfer(m.map.colorSpace)===i2,decodeVideoTextureEmissive:C5&&m.emissiveMap.isVideoTexture===!0&&Y1.getTransfer(m.emissiveMap.colorSpace)===i2,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===I5,flipSided:m.side===t5,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:C1&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(C1&&m.extensions.multiDraw===!0||m1)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return g1.vertexUv1s=a.has(1),g1.vertexUv2s=a.has(2),g1.vertexUv3s=a.has(3),a.clear(),g1}function c(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let R in m.defines)_.push(R),_.push(m.defines[R]);return m.isRawShaderMaterial===!1&&(d(_,m),v(_,m),_.push(C.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()}function d(m,_){m.push(_.precision),m.push(_.outputColorSpace),m.push(_.envMapMode),m.push(_.envMapCubeUVHeight),m.push(_.mapUv),m.push(_.alphaMapUv),m.push(_.lightMapUv),m.push(_.aoMapUv),m.push(_.bumpMapUv),m.push(_.normalMapUv),m.push(_.displacementMapUv),m.push(_.emissiveMapUv),m.push(_.metalnessMapUv),m.push(_.roughnessMapUv),m.push(_.anisotropyMapUv),m.push(_.clearcoatMapUv),m.push(_.clearcoatNormalMapUv),m.push(_.clearcoatRoughnessMapUv),m.push(_.iridescenceMapUv),m.push(_.iridescenceThicknessMapUv),m.push(_.sheenColorMapUv),m.push(_.sheenRoughnessMapUv),m.push(_.specularMapUv),m.push(_.specularColorMapUv),m.push(_.specularIntensityMapUv),m.push(_.transmissionMapUv),m.push(_.thicknessMapUv),m.push(_.combine),m.push(_.fogExp2),m.push(_.sizeAttenuation),m.push(_.morphTargetsCount),m.push(_.morphAttributeCount),m.push(_.numSunLights),m.push(_.numDirLights),m.push(_.numPointLights),m.push(_.numSpotLights),m.push(_.numSpotLightMaps),m.push(_.numHemiLights),m.push(_.numRectAreaLights),m.push(_.numSunLightShadows),m.push(_.numDirLightShadows),m.push(_.numPointLightShadows),m.push(_.numSpotLightShadows),m.push(_.numSpotLightShadowsWithMaps),m.push(_.numLightProbes),m.push(_.shadowMapType),m.push(_.toneMapping),m.push(_.numClippingPlanes),m.push(_.numClipIntersection),m.push(_.depthPacking)}function v(m,_){V.disableAll(),_.instancing&&V.enable(0),_.instancingColor&&V.enable(1),_.instancingMorph&&V.enable(2),_.matcap&&V.enable(3),_.envMap&&V.enable(4),_.normalMapObjectSpace&&V.enable(5),_.normalMapTangentSpace&&V.enable(6),_.clearcoat&&V.enable(7),_.iridescence&&V.enable(8),_.alphaTest&&V.enable(9),_.vertexColors&&V.enable(10),_.vertexAlphas&&V.enable(11),_.vertexUv1s&&V.enable(12),_.vertexUv2s&&V.enable(13),_.vertexUv3s&&V.enable(14),_.vertexTangents&&V.enable(15),_.anisotropy&&V.enable(16),_.alphaHash&&V.enable(17),_.batching&&V.enable(18),_.dispersion&&V.enable(19),_.retroreflection&&V.enable(24),_.batchingColor&&V.enable(20),_.gradientMap&&V.enable(21),_.packedNormalMap&&V.enable(22),_.vertexNormals&&V.enable(23),m.push(V.mask),V.disableAll(),_.fog&&V.enable(0),_.useFog&&V.enable(1),_.flatShading&&V.enable(2),_.logarithmicDepthBuffer&&V.enable(3),_.reversedDepthBuffer&&V.enable(4),_.skinning&&V.enable(5),_.morphTargets&&V.enable(6),_.morphNormals&&V.enable(7),_.morphColors&&V.enable(8),_.premultipliedAlpha&&V.enable(9),_.shadowMapEnabled&&V.enable(10),_.doubleSided&&V.enable(11),_.flipSided&&V.enable(12),_.useDepthPacking&&V.enable(13),_.dithering&&V.enable(14),_.transmission&&V.enable(15),_.sheen&&V.enable(16),_.opaque&&V.enable(17),_.pointsUvs&&V.enable(18),_.decodeVideoTexture&&V.enable(19),_.decodeVideoTextureEmissive&&V.enable(20),_.alphaToCoverage&&V.enable(21),_.numLightProbeGrids>0&&V.enable(22),_.hasPositionAttribute&&V.enable(23),m.push(V.mask)}function y(m){let _=l[m.type],R;if(_){let I=k5[_];R=bC.clone(I.uniforms)}else R=m.uniforms;return R}function h(m,_){let R=o.get(_);return R!==void 0?++R.usedTimes:(R=new jo(C,_,m,r),L.push(R),o.set(_,R)),R}function g(m){if(--m.usedTimes===0){let _=L.indexOf(m);L[_]=L[L.length-1],L.pop(),o.delete(m.cacheKey),m.destroy()}}function Z(m){n.remove(m)}function b(){n.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:y,acquireProgram:h,releaseProgram:g,releaseShaderCache:Z,programs:L,dispose:b}}function is(){let C=new WeakMap;function e(V){return C.has(V)}function t(V){let n=C.get(V);return n===void 0&&(n={},C.set(V,n)),n}function i(V){C.delete(V)}function r(V,n,a){C.get(V)[n]=a}function H(){C=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:H}}function rs(C,e){return C.groupOrder!==e.groupOrder?C.groupOrder-e.groupOrder:C.renderOrder!==e.renderOrder?C.renderOrder-e.renderOrder:C.material.id!==e.material.id?C.material.id-e.material.id:C.materialVariant!==e.materialVariant?C.materialVariant-e.materialVariant:C.z!==e.z?C.z-e.z:C.id-e.id}function YC(C,e){return C.groupOrder!==e.groupOrder?C.groupOrder-e.groupOrder:C.renderOrder!==e.renderOrder?C.renderOrder-e.renderOrder:C.z!==e.z?e.z-C.z:C.id-e.id}function QC(){let C=[],e=0,t=[],i=[],r=[];function H(){e=0,t.length=0,i.length=0,r.length=0}function V(s){let l=0;return s.isInstancedMesh&&(l+=2),s.isSkinnedMesh&&(l+=1),l}function n(s,l,u,f,c,d){let v=C[e];return v===void 0?(v={id:s.id,object:s,geometry:l,material:u,materialVariant:V(s),groupOrder:f,renderOrder:s.renderOrder,z:c,group:d},C[e]=v):(v.id=s.id,v.object=s,v.geometry=l,v.material=u,v.materialVariant=V(s),v.groupOrder=f,v.renderOrder=s.renderOrder,v.z=c,v.group=d),e++,v}function a(s,l,u,f,c,d,v){v.reversedDepth===!0&&(c=-c);let y=n(s,l,u,f,c,d);u.transmission>0?i.push(y):u.transparent===!0?r.push(y):t.push(y)}function L(s,l,u,f,c,d){let v=n(s,l,u,f,c,d);u.transmission>0?i.unshift(v):u.transparent===!0?r.unshift(v):t.unshift(v)}function o(s,l){t.length>1&&t.sort(s||rs),i.length>1&&i.sort(l||YC),r.length>1&&r.sort(l||YC)}function M(){for(let s=e,l=C.length;s<l;s++){let u=C[s];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:r,init:H,push:a,unshift:L,finish:M,sort:o}}function Hs(){let C=new WeakMap;function e(i,r){let H=C.get(i),V;return H===void 0?(V=new QC,C.set(i,[V])):r>=H.length?(V=new QC,H.push(V)):V=H[r],V}function t(){C=new WeakMap}return{get:e,dispose:t}}function Vs(){let C={};return{get:function(e){if(C[e.id]!==void 0)return C[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new N1};break;case"SpotLight":t={position:new T,direction:new T,color:new N1,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new N1,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new N1,groundColor:new N1};break;case"RectAreaLight":t={color:new N1,position:new T,halfWidth:new T,halfHeight:new T};break}return C[e.id]=t,t}}}function ns(){let C={};return{get:function(e){if(C[e.id]!==void 0)return C[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f1};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f1};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f1,shadowCameraNear:1,shadowCameraFar:1e3};break}return C[e.id]=t,t}}}var Ls=0;function as(C,e){return(e.castShadow?2:0)-(C.castShadow?2:0)+(e.map?1:0)-(C.map?1:0)}function os(C){let e=new Vs,t=ns(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let L=0;L<9;L++)i.probe.push(new T);let r=new T,H=new V2,V=new V2;function n(L){let o=0,M=0,s=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let l=0,u=0,f=0,c=0,d=0,v=0,y=0,h=0,g=0,Z=0,b=0,m=0,_=0,R=0;L.sort(as);for(let N=0,G=L.length;N<G;N++){let P=L[N],U=P.color,K=P.intensity,Y=P.distance,r1=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===y0?r1=P.shadow.map.texture:r1=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)o+=U.r*K,M+=U.g*K,s+=U.b*K;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],K);R++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let t1=P.shadow,i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize.copy(t1.mapSize).multiply(t1.getFrameExtents()),i.sunShadow[u]=i1,i.sunShadowMap[u]=r1;let O1=t1.getViewportCount();for(let T1=0;T1<O1;T1++)i.sunShadowMatrix[f+T1]=t1.getMatrix(T1),i.sunShadowCascade[f+T1]=t1._cascadeData[T1];f+=O1,u++}i.sun[l]=X,l++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let t1=P.shadow,i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize=t1.mapSize,i.directionalShadow[c]=i1,i.directionalShadowMap[c]=r1,i.directionalShadowMatrix[c]=P.shadow.matrix,g++}i.directional[c]=X,c++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(K),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;let t1=P.shadow;if(P.map&&(i.spotLightMap[m]=P.map,m++,t1.updateMatrices(P),P.castShadow&&_++),i.spotLightMatrix[v]=t1.matrix,P.castShadow){let i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize=t1.mapSize,i.spotShadow[v]=i1,i.spotShadowMap[v]=r1,b++}v++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(U).multiplyScalar(K),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=X,y++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let t1=P.shadow,i1=t.get(P);i1.shadowIntensity=t1.intensity,i1.shadowBias=t1.bias,i1.shadowNormalBias=t1.normalBias,i1.shadowRadius=t1.radius,i1.shadowMapSize=t1.mapSize,i1.shadowCameraNear=t1.camera.near,i1.shadowCameraFar=t1.camera.far,i.pointShadow[d]=i1,i.pointShadowMap[d]=r1,i.pointShadowMatrix[d]=P.shadow.matrix,Z++}i.point[d]=X,d++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(K),X.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[h]=X,h++}}y>0&&(C.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=l1.LTC_FLOAT_1,i.rectAreaLTC2=l1.LTC_FLOAT_2):(i.rectAreaLTC1=l1.LTC_HALF_1,i.rectAreaLTC2=l1.LTC_HALF_2)),i.ambient[0]=o,i.ambient[1]=M,i.ambient[2]=s;let I=i.hash;(I.sunLength!==l||I.directionalLength!==c||I.pointLength!==d||I.spotLength!==v||I.rectAreaLength!==y||I.hemiLength!==h||I.numSunShadows!==u||I.numDirectionalShadows!==g||I.numPointShadows!==Z||I.numSpotShadows!==b||I.numSpotMaps!==m||I.numLightProbes!==R)&&(i.sun.length=l,i.directional.length=c,i.spot.length=v,i.rectArea.length=y,i.point.length=d,i.hemi.length=h,i.sunShadow.length=u,i.sunShadowMap.length=u,i.sunShadowMatrix.length=f,i.sunShadowCascade.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.directionalShadowMatrix.length=g,i.pointShadow.length=Z,i.pointShadowMap.length=Z,i.pointShadowMatrix.length=Z,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+m-_,i.spotLightMap.length=m,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=R,I.sunLength=l,I.directionalLength=c,I.pointLength=d,I.spotLength=v,I.rectAreaLength=y,I.hemiLength=h,I.numSunShadows=u,I.numDirectionalShadows=g,I.numPointShadows=Z,I.numSpotShadows=b,I.numSpotMaps=m,I.numLightProbes=R,i.version=Ls++)}function a(L,o){let M=0,s=0,l=0,u=0,f=0,c=0,d=o.matrixWorldInverse;for(let v=0,y=L.length;v<y;v++){let h=L[v];if(h.isSunLight){let g=i.sun[M];g.direction.setFromMatrixPosition(h.matrixWorld),g.direction.transformDirection(d),M++}else if(h.isDirectionalLight){let g=i.directional[s];g.direction.setFromMatrixPosition(h.matrixWorld),r.setFromMatrixPosition(h.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(d),s++}else if(h.isSpotLight){let g=i.spot[u];g.position.setFromMatrixPosition(h.matrixWorld),g.position.applyMatrix4(d),g.direction.setFromMatrixPosition(h.matrixWorld),r.setFromMatrixPosition(h.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(d),u++}else if(h.isRectAreaLight){let g=i.rectArea[f];g.position.setFromMatrixPosition(h.matrixWorld),g.position.applyMatrix4(d),V.identity(),H.copy(h.matrixWorld),H.premultiply(d),V.extractRotation(H),g.halfWidth.set(h.width*.5,0,0),g.halfHeight.set(0,h.height*.5,0),g.halfWidth.applyMatrix4(V),g.halfHeight.applyMatrix4(V),f++}else if(h.isPointLight){let g=i.point[l];g.position.setFromMatrixPosition(h.matrixWorld),g.position.applyMatrix4(d),l++}else if(h.isHemisphereLight){let g=i.hemi[c];g.direction.setFromMatrixPosition(h.matrixWorld),g.direction.transformDirection(d),c++}}}return{setup:n,setupView:a,state:i}}function KC(C){let e=new os(C),t=[],i=[],r=[];function H(s){M.camera=s,t.length=0,i.length=0,r.length=0}function V(s){t.push(s)}function n(s){i.push(s)}function a(s){r.push(s)}function L(){e.setup(t)}function o(s){e.setupView(t,s)}let M={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:M,setupLights:L,setupLightsView:o,pushLight:V,pushShadow:n,pushLightProbeGrid:a}}function ss(C){let e=new WeakMap;function t(r,H=0){let V=e.get(r),n;return V===void 0?(n=new KC(C),e.set(r,[n])):H>=V.length?(n=new KC(C),V.push(n)):n=V[H],n}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ms=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ls=`uniform sampler2D shadow_pass;
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
}`,ds=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],cs=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],JC=new V2,z7=new T,Le=new T;function ps(C,e,t){let i=new Z3,r=new f1,H=new f1,V=new A2,n=new e9,a=new t9,L={},o=t.maxTextureSize,M={[S0]:t5,[t5]:S0,[I5]:I5},s=new a5({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new f1},radius:{value:4}},vertexShader:Ms,fragmentShader:ls}),l=s.clone();l.defines.HORIZONTAL_PASS=1;let u=new g5;u.setAttribute("position",new l5(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new e5(u,s),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E7;let d=this.type;this.render=function(Z,b,m){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||Z.length===0)return;this.type===Ut&&(R1("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=E7);let _=C.getRenderTarget(),R=C.getActiveCubeFace(),I=C.getActiveMipmapLevel(),N=C.state;N.setBlending(F5),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=d!==this.type;G&&b.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,U=Z.length;P<U;P++){let K=Z[P],Y=K.shadow;if(Y===void 0){R1("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);let r1=Y.getFrameExtents();r.multiply(r1),H.copy(Y.mapSize),(r.x>o||r.y>o)&&(r.x>o&&(H.x=Math.floor(o/r1.x),r.x=H.x*r1.x,Y.mapSize.x=H.x),r.y>o&&(H.y=Math.floor(o/r1.y),r.y=H.y*r1.y,Y.mapSize.y=H.y));let X=C.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=X,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===E3){if(K.isPointLight){R1("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new i5(r.x,r.y,{format:y0,type:b5,minFilter:I2,magFilter:I2,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new m0(r.x,r.y,y5),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=P5,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=P2,Y.map.depthTexture.magFilter=P2}else K.isPointLight?(Y.map=new n6(r.x),Y.map.depthTexture=new X4(r.x,_5)):(Y.map=new i5(r.x,r.y),Y.map.depthTexture=new m0(r.x,r.y,_5)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=P5,this.type===E7?(Y.map.depthTexture.compareFunction=X?i6:C6,Y.map.depthTexture.minFilter=I2,Y.map.depthTexture.magFilter=I2):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=P2,Y.map.depthTexture.magFilter=P2);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==r.x||Y.map.height!==r.y)&&Y.map.setSize(r.x,r.y);let t1=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();K.isPointLight!==!0&&Y.updateMatrices(K,m);for(let i1=0;i1<t1;i1++){let O1=Y.getCamera(i1);if(K.isPointLight){let T1=Y.camera,a2=Y.matrix,Q1=K.distance||T1.far;Q1!==T1.far&&(T1.far=Q1,T1.updateProjectionMatrix()),z7.setFromMatrixPosition(K.matrixWorld),T1.position.copy(z7),Le.copy(T1.position),Le.add(ds[i1]),T1.up.copy(cs[i1]),T1.lookAt(Le),T1.updateMatrixWorld(),a2.makeTranslation(-z7.x,-z7.y,-z7.z),JC.multiplyMatrices(T1.projectionMatrix,T1.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(JC,T1.coordinateSystem,T1.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)C.setRenderTarget(Y.map,i1),C.clear();else{i1===0&&(C.setRenderTarget(Y.map),C.clear());let T1=Y.getViewport(i1);V.set(H.x*T1.x,H.y*T1.y,H.x*T1.z,H.y*T1.w),N.viewport(V)}i=Y.getFrustum(i1),h(b,m,O1,K,this.type)}Y.isPointLightShadow!==!0&&this.type===E3&&v(Y,m),Y.needsUpdate=!1}d=this.type,c.needsUpdate=!1,C.setRenderTarget(_,R,I)};function v(Z,b){let m=e.update(f);s.defines.VSM_SAMPLES!==Z.blurSamples&&(s.defines.VSM_SAMPLES=Z.blurSamples,l.defines.VSM_SAMPLES=Z.blurSamples,s.needsUpdate=!0,l.needsUpdate=!0),Z.mapPass===null?Z.mapPass=new i5(r.x,r.y,{format:y0,type:b5}):(Z.mapPass.width!==Z.map.width||Z.mapPass.height!==Z.map.height)&&Z.mapPass.setSize(Z.map.width,Z.map.height),s.uniforms.shadow_pass.value=Z.map.depthTexture,s.uniforms.resolution.value.set(Z.map.width,Z.map.height),s.uniforms.radius.value=Z.radius,C.setRenderTarget(Z.mapPass),C.clear(),C.renderBufferDirect(b,null,m,s,f,null),l.uniforms.shadow_pass.value=Z.mapPass.texture,l.uniforms.resolution.value.set(Z.map.width,Z.map.height),l.uniforms.radius.value=Z.radius,C.setRenderTarget(Z.map),C.clear(),C.renderBufferDirect(b,null,m,l,f,null)}function y(Z,b,m,_){let R=null,I=m.isPointLight===!0?Z.customDistanceMaterial:Z.customDepthMaterial;if(I!==void 0)R=I;else if(R=m.isPointLight===!0?a:n,C.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let N=R.uuid,G=b.uuid,P=L[N];P===void 0&&(P={},L[N]=P);let U=P[G];U===void 0&&(U=R.clone(),P[G]=U,b.addEventListener("dispose",g)),R=U}if(R.visible=b.visible,R.wireframe=b.wireframe,_===E3?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:M[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,m.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=C.properties.get(R);N.light=m}return R}function h(Z,b,m,_,R){if(Z.visible===!1)return;if(Z.layers.test(b.layers)&&(Z.isMesh||Z.isLine||Z.isPoints)&&(Z.castShadow||Z.receiveShadow&&R===E3)&&(!Z.frustumCulled||Z.intersectsFrustum(i))){Z.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,Z.matrixWorld);let G=e.update(Z),P=Z.material;if(Array.isArray(P)){let U=G.groups;for(let K=0,Y=U.length;K<Y;K++){let r1=U[K],X=P[r1.materialIndex];if(X&&X.visible){let t1=y(Z,X,_,R);Z.onBeforeShadow(C,Z,b,m,G,t1,r1),C.renderBufferDirect(m,null,G,t1,Z,r1),Z.onAfterShadow(C,Z,b,m,G,t1,r1)}}}else if(P.visible){let U=y(Z,P,_,R);Z.onBeforeShadow(C,Z,b,m,G,U,null),C.renderBufferDirect(m,null,G,U,Z,null),Z.onAfterShadow(C,Z,b,m,G,U,null)}}let N=Z.children;for(let G=0,P=N.length;G<P;G++)h(N[G],b,m,_,R)}function g(Z){Z.target.removeEventListener("dispose",g);for(let m in L){let _=L[m],R=Z.target.uuid;R in _&&(_[R].dispose(),delete _[R])}}}function us(C,e){function t(){let O=!1,a1=new A2,J=null,o1=new A2(0,0,0,0);return{setMask:function(p1){J!==p1&&!O&&(C.colorMask(p1,p1,p1,p1),J=p1)},setLocked:function(p1){O=p1},setClear:function(p1,C1,w1,g1,s2){s2===!0&&(p1*=g1,C1*=g1,w1*=g1),a1.set(p1,C1,w1,g1),o1.equals(a1)===!1&&(C.clearColor(p1,C1,w1,g1),o1.copy(a1))},reset:function(){O=!1,J=null,o1.set(-1,0,0,0)}}}function i(){let O=!1,a1=!1,J=null,o1=null,p1=null;return{setReversed:function(C1){if(a1!==C1){let w1=e.get("EXT_clip_control");C1?w1.clipControlEXT(w1.LOWER_LEFT_EXT,w1.ZERO_TO_ONE_EXT):w1.clipControlEXT(w1.LOWER_LEFT_EXT,w1.NEGATIVE_ONE_TO_ONE_EXT),a1=C1;let g1=p1;p1=null,this.setClear(g1)}},getReversed:function(){return a1},setTest:function(C1){C1?e1(C.DEPTH_TEST):x1(C.DEPTH_TEST)},setMask:function(C1){J!==C1&&!O&&(C.depthMask(C1),J=C1)},setFunc:function(C1){if(a1&&(C1=vC[C1]),o1!==C1){switch(C1){case O4:C.depthFunc(C.NEVER);break;case E4:C.depthFunc(C.ALWAYS);break;case R4:C.depthFunc(C.LESS);break;case A3:C.depthFunc(C.LEQUAL);break;case P4:C.depthFunc(C.EQUAL);break;case B4:C.depthFunc(C.GEQUAL);break;case I4:C.depthFunc(C.GREATER);break;case F4:C.depthFunc(C.NOTEQUAL);break;default:C.depthFunc(C.LEQUAL)}o1=C1}},setLocked:function(C1){O=C1},setClear:function(C1){p1!==C1&&(p1=C1,a1&&(C1=1-C1),C.clearDepth(C1))},reset:function(){O=!1,J=null,o1=null,p1=null,a1=!1}}}function r(){let O=!1,a1=null,J=null,o1=null,p1=null,C1=null,w1=null,g1=null,s2=null;return{setTest:function(t2){O||(t2?e1(C.STENCIL_TEST):x1(C.STENCIL_TEST))},setMask:function(t2){a1!==t2&&!O&&(C.stencilMask(t2),a1=t2)},setFunc:function(t2,A5,w5){(J!==t2||o1!==A5||p1!==w5)&&(C.stencilFunc(t2,A5,w5),J=t2,o1=A5,p1=w5)},setOp:function(t2,A5,w5){(C1!==t2||w1!==A5||g1!==w5)&&(C.stencilOp(t2,A5,w5),C1=t2,w1=A5,g1=w5)},setLocked:function(t2){O=t2},setClear:function(t2){s2!==t2&&(C.clearStencil(t2),s2=t2)},reset:function(){O=!1,a1=null,J=null,o1=null,p1=null,C1=null,w1=null,g1=null,s2=null}}}let H=new t,V=new i,n=new r,a=new WeakMap,L=new WeakMap,o={},M={},s={},l=new WeakMap,u=[],f=null,c=!1,d=null,v=null,y=null,h=null,g=null,Z=null,b=null,m=new N1(0,0,0),_=0,R=!1,I=null,N=null,G=null,P=null,U=null,K=C.getParameter(C.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,r1=0,X=C.getParameter(C.VERSION);X.indexOf("WebGL")!==-1?(r1=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=r1>=1):X.indexOf("OpenGL ES")!==-1&&(r1=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=r1>=2);let t1=null,i1={},O1=C.getParameter(C.SCISSOR_BOX),T1=C.getParameter(C.VIEWPORT),a2=new A2().fromArray(O1),Q1=new A2().fromArray(T1);function j1(O,a1,J,o1){let p1=new Uint8Array(4),C1=C.createTexture();C.bindTexture(O,C1),C.texParameteri(O,C.TEXTURE_MIN_FILTER,C.NEAREST),C.texParameteri(O,C.TEXTURE_MAG_FILTER,C.NEAREST);for(let w1=0;w1<J;w1++)O===C.TEXTURE_3D||O===C.TEXTURE_2D_ARRAY?C.texImage3D(a1,0,C.RGBA,1,1,o1,0,C.RGBA,C.UNSIGNED_BYTE,p1):C.texImage2D(a1+w1,0,C.RGBA,1,1,0,C.RGBA,C.UNSIGNED_BYTE,p1);return C1}let q={};q[C.TEXTURE_2D]=j1(C.TEXTURE_2D,C.TEXTURE_2D,1),q[C.TEXTURE_CUBE_MAP]=j1(C.TEXTURE_CUBE_MAP,C.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[C.TEXTURE_2D_ARRAY]=j1(C.TEXTURE_2D_ARRAY,C.TEXTURE_2D_ARRAY,1,1),q[C.TEXTURE_3D]=j1(C.TEXTURE_3D,C.TEXTURE_3D,1,1),H.setClear(0,0,0,1),V.setClear(1),n.setClear(0),e1(C.DEPTH_TEST),V.setFunc(A3),$1(!1),u2(f8),e1(C.CULL_FACE),J1(F5);function e1(O){o[O]!==!0&&(C.enable(O),o[O]=!0)}function x1(O){o[O]!==!1&&(C.disable(O),o[O]=!1)}function D1(O,a1){return s[O]!==a1?(C.bindFramebuffer(O,a1),s[O]=a1,O===C.DRAW_FRAMEBUFFER&&(s[C.FRAMEBUFFER]=a1),O===C.FRAMEBUFFER&&(s[C.DRAW_FRAMEBUFFER]=a1),!0):!1}function m1(O,a1){let J=u,o1=!1;if(O){J=l.get(a1),J===void 0&&(J=[],l.set(a1,J));let p1=O.textures;if(J.length!==p1.length||J[0]!==C.COLOR_ATTACHMENT0){for(let C1=0,w1=p1.length;C1<w1;C1++)J[C1]=C.COLOR_ATTACHMENT0+C1;J.length=p1.length,o1=!0}}else J[0]!==C.BACK&&(J[0]=C.BACK,o1=!0);o1&&C.drawBuffers(J)}function G1(O){return f!==O?(C.useProgram(O),f=O,!0):!1}let b2={[k0]:C.FUNC_ADD,[Gt]:C.FUNC_SUBTRACT,[Wt]:C.FUNC_REVERSE_SUBTRACT};b2[Xt]=C.MIN,b2[qt]=C.MAX;let X1={[$t]:C.ZERO,[Yt]:C.ONE,[Qt]:C.SRC_COLOR,[g8]:C.SRC_ALPHA,[CC]:C.SRC_ALPHA_SATURATE,[eC]:C.DST_COLOR,[Jt]:C.DST_ALPHA,[Kt]:C.ONE_MINUS_SRC_COLOR,[Z8]:C.ONE_MINUS_SRC_ALPHA,[tC]:C.ONE_MINUS_DST_COLOR,[jt]:C.ONE_MINUS_DST_ALPHA,[iC]:C.CONSTANT_COLOR,[rC]:C.ONE_MINUS_CONSTANT_COLOR,[HC]:C.CONSTANT_ALPHA,[VC]:C.ONE_MINUS_CONSTANT_ALPHA};function J1(O,a1,J,o1,p1,C1,w1,g1,s2,t2){if(O===F5){c===!0&&(x1(C.BLEND),c=!1);return}if(c===!1&&(e1(C.BLEND),c=!0),O!==zt){if(O!==d||t2!==R){if((v!==k0||g!==k0)&&(C.blendEquation(C.FUNC_ADD),v=k0,g=k0),t2)switch(O){case R3:C.blendFuncSeparate(C.ONE,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case x8:C.blendFunc(C.ONE,C.ONE);break;case v8:C.blendFuncSeparate(C.ZERO,C.ONE_MINUS_SRC_COLOR,C.ZERO,C.ONE);break;case S8:C.blendFuncSeparate(C.DST_COLOR,C.ONE_MINUS_SRC_ALPHA,C.ZERO,C.ONE);break;default:P1("WebGLState: Invalid blending: ",O);break}else switch(O){case R3:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE_MINUS_SRC_ALPHA,C.ONE,C.ONE_MINUS_SRC_ALPHA);break;case x8:C.blendFuncSeparate(C.SRC_ALPHA,C.ONE,C.ONE,C.ONE);break;case v8:P1("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S8:P1("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:P1("WebGLState: Invalid blending: ",O);break}y=null,h=null,Z=null,b=null,m.set(0,0,0),_=0,d=O,R=t2}return}p1=p1||a1,C1=C1||J,w1=w1||o1,(a1!==v||p1!==g)&&(C.blendEquationSeparate(b2[a1],b2[p1]),v=a1,g=p1),(J!==y||o1!==h||C1!==Z||w1!==b)&&(C.blendFuncSeparate(X1[J],X1[o1],X1[C1],X1[w1]),y=J,h=o1,Z=C1,b=w1),(g1.equals(m)===!1||s2!==_)&&(C.blendColor(g1.r,g1.g,g1.b,s2),m.copy(g1),_=s2),d=O,R=!1}function o2(O,a1){O.side===I5?x1(C.CULL_FACE):e1(C.CULL_FACE);let J=O.side===t5;a1&&(J=!J),$1(J),O.blending===R3&&O.transparent===!1?J1(F5):J1(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),V.setFunc(O.depthFunc),V.setTest(O.depthTest),V.setMask(O.depthWrite),H.setMask(O.colorWrite);let o1=O.stencilWrite;n.setTest(o1),o1&&(n.setMask(O.stencilWriteMask),n.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),n.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),C5(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?e1(C.SAMPLE_ALPHA_TO_COVERAGE):x1(C.SAMPLE_ALPHA_TO_COVERAGE)}function $1(O){I!==O&&(O?C.frontFace(C.CW):C.frontFace(C.CCW),I=O)}function u2(O){O!==kt?(e1(C.CULL_FACE),O!==N&&(O===f8?C.cullFace(C.BACK):O===Nt?C.cullFace(C.FRONT):C.cullFace(C.FRONT_AND_BACK))):x1(C.CULL_FACE),N=O}function E2(O){O!==G&&(Y&&C.lineWidth(O),G=O)}function C5(O,a1,J){O?(e1(C.POLYGON_OFFSET_FILL),(P!==a1||U!==J)&&(P=a1,U=J,V.getReversed()&&(a1=-a1),C.polygonOffset(a1,J))):x1(C.POLYGON_OFFSET_FILL)}function h2(O){O?e1(C.SCISSOR_TEST):x1(C.SCISSOR_TEST)}function g2(O){O===void 0&&(O=C.TEXTURE0+K-1),t1!==O&&(C.activeTexture(O),t1=O)}function E(O,a1,J){J===void 0&&(t1===null?J=C.TEXTURE0+K-1:J=t1);let o1=i1[J];o1===void 0&&(o1={type:void 0,texture:void 0},i1[J]=o1),(o1.type!==O||o1.texture!==a1)&&(t1!==J&&(C.activeTexture(J),t1=J),C.bindTexture(O,a1||q[O]),o1.type=O,o1.texture=a1)}function D2(){let O=i1[t1];O!==void 0&&O.type!==void 0&&(C.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function r2(){try{C.compressedTexImage2D(...arguments)}catch(O){P1("WebGLState:",O)}}function S(){try{C.compressedTexImage3D(...arguments)}catch(O){P1("WebGLState:",O)}}function p(){try{C.texSubImage2D(...arguments)}catch(O){P1("WebGLState:",O)}}function B(){try{C.texSubImage3D(...arguments)}catch(O){P1("WebGLState:",O)}}function k(){try{C.compressedTexSubImage2D(...arguments)}catch(O){P1("WebGLState:",O)}}function W(){try{C.compressedTexSubImage3D(...arguments)}catch(O){P1("WebGLState:",O)}}function H1(){try{C.texStorage2D(...arguments)}catch(O){P1("WebGLState:",O)}}function V1(){try{C.texStorage3D(...arguments)}catch(O){P1("WebGLState:",O)}}function $(){try{C.texImage2D(...arguments)}catch(O){P1("WebGLState:",O)}}function j(){try{C.texImage3D(...arguments)}catch(O){P1("WebGLState:",O)}}function n1(O){return M[O]!==void 0?M[O]:C.getParameter(O)}function _1(O,a1){M[O]!==a1&&(C.pixelStorei(O,a1),M[O]=a1)}function M1(O){a2.equals(O)===!1&&(C.scissor(O.x,O.y,O.z,O.w),a2.copy(O))}function L1(O){Q1.equals(O)===!1&&(C.viewport(O.x,O.y,O.z,O.w),Q1.copy(O))}function y1(O,a1){let J=L.get(a1);J===void 0&&(J=new WeakMap,L.set(a1,J));let o1=J.get(O);o1===void 0&&(o1=C.getUniformBlockIndex(a1,O.name),J.set(O,o1))}function E1(O,a1){let o1=L.get(a1).get(O);a.get(a1)!==o1&&(C.uniformBlockBinding(a1,o1,O.__bindingPointIndex),a.set(a1,o1))}function k1(){C.disable(C.BLEND),C.disable(C.CULL_FACE),C.disable(C.DEPTH_TEST),C.disable(C.POLYGON_OFFSET_FILL),C.disable(C.SCISSOR_TEST),C.disable(C.STENCIL_TEST),C.disable(C.SAMPLE_ALPHA_TO_COVERAGE),C.blendEquation(C.FUNC_ADD),C.blendFunc(C.ONE,C.ZERO),C.blendFuncSeparate(C.ONE,C.ZERO,C.ONE,C.ZERO),C.blendColor(0,0,0,0),C.colorMask(!0,!0,!0,!0),C.clearColor(0,0,0,0),C.depthMask(!0),C.depthFunc(C.LESS),V.setReversed(!1),C.clearDepth(1),C.stencilMask(4294967295),C.stencilFunc(C.ALWAYS,0,4294967295),C.stencilOp(C.KEEP,C.KEEP,C.KEEP),C.clearStencil(0),C.cullFace(C.BACK),C.frontFace(C.CCW),C.polygonOffset(0,0),C.activeTexture(C.TEXTURE0),C.bindFramebuffer(C.FRAMEBUFFER,null),C.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),C.bindFramebuffer(C.READ_FRAMEBUFFER,null),C.useProgram(null),C.lineWidth(1),C.scissor(0,0,C.canvas.width,C.canvas.height),C.viewport(0,0,C.canvas.width,C.canvas.height),C.pixelStorei(C.PACK_ALIGNMENT,4),C.pixelStorei(C.UNPACK_ALIGNMENT,4),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,!1),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),C.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,C.BROWSER_DEFAULT_WEBGL),C.pixelStorei(C.PACK_ROW_LENGTH,0),C.pixelStorei(C.PACK_SKIP_PIXELS,0),C.pixelStorei(C.PACK_SKIP_ROWS,0),C.pixelStorei(C.UNPACK_ROW_LENGTH,0),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,0),C.pixelStorei(C.UNPACK_SKIP_PIXELS,0),C.pixelStorei(C.UNPACK_SKIP_ROWS,0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,0),o={},M={},t1=null,i1={},s={},l=new WeakMap,u=[],f=null,c=!1,d=null,v=null,y=null,h=null,g=null,Z=null,b=null,m=new N1(0,0,0),_=0,R=!1,I=null,N=null,G=null,P=null,U=null,a2.set(0,0,C.canvas.width,C.canvas.height),Q1.set(0,0,C.canvas.width,C.canvas.height),H.reset(),V.reset(),n.reset()}return{buffers:{color:H,depth:V,stencil:n},enable:e1,disable:x1,bindFramebuffer:D1,drawBuffers:m1,useProgram:G1,setBlending:J1,setMaterial:o2,setFlipSided:$1,setCullFace:u2,setLineWidth:E2,setPolygonOffset:C5,setScissorTest:h2,activeTexture:g2,bindTexture:E,unbindTexture:D2,compressedTexImage2D:r2,compressedTexImage3D:S,texImage2D:$,texImage3D:j,pixelStorei:_1,getParameter:n1,updateUBOMapping:y1,uniformBlockBinding:E1,texStorage2D:H1,texStorage3D:V1,texSubImage2D:p,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:W,scissor:M1,viewport:L1,reset:k1}}function As(C,e,t,i,r,H,V){let n=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),L=new f1,o=new WeakMap,M=new Set,s,l=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(S,p){return u?new OffscreenCanvas(S,p):L7("canvas")}function c(S,p,B){let k=1,W=r2(S);if((W.width>B||W.height>B)&&(k=B/Math.max(W.width,W.height)),k<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let H1=Math.floor(k*W.width),V1=Math.floor(k*W.height);s===void 0&&(s=f(H1,V1));let $=p?f(H1,V1):s;return $.width=H1,$.height=V1,$.getContext("2d").drawImage(S,0,0,H1,V1),R1("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+H1+"x"+V1+")."),$}else return"data"in S&&R1("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),S;return S}function d(S){return S.generateMipmaps}function v(S){C.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?C.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?C.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?C.TEXTURE_2D_ARRAY:C.TEXTURE_2D}function h(S,p,B,k,W,H1=!1){if(S!==null){if(C[S]!==void 0)return C[S];R1("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V1;k&&(V1=e.get("EXT_texture_norm16"),V1||R1("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=p;if(p===C.RED&&(B===C.FLOAT&&($=C.R32F),B===C.HALF_FLOAT&&($=C.R16F),B===C.UNSIGNED_BYTE&&($=C.R8),B===C.UNSIGNED_SHORT&&V1&&($=V1.R16_EXT),B===C.SHORT&&V1&&($=V1.R16_SNORM_EXT)),p===C.RED_INTEGER&&(B===C.UNSIGNED_BYTE&&($=C.R8UI),B===C.UNSIGNED_SHORT&&($=C.R16UI),B===C.UNSIGNED_INT&&($=C.R32UI),B===C.BYTE&&($=C.R8I),B===C.SHORT&&($=C.R16I),B===C.INT&&($=C.R32I)),p===C.RG&&(B===C.FLOAT&&($=C.RG32F),B===C.HALF_FLOAT&&($=C.RG16F),B===C.UNSIGNED_BYTE&&($=C.RG8),B===C.UNSIGNED_SHORT&&V1&&($=V1.RG16_EXT),B===C.SHORT&&V1&&($=V1.RG16_SNORM_EXT)),p===C.RG_INTEGER&&(B===C.UNSIGNED_BYTE&&($=C.RG8UI),B===C.UNSIGNED_SHORT&&($=C.RG16UI),B===C.UNSIGNED_INT&&($=C.RG32UI),B===C.BYTE&&($=C.RG8I),B===C.SHORT&&($=C.RG16I),B===C.INT&&($=C.RG32I)),p===C.RGB_INTEGER&&(B===C.UNSIGNED_BYTE&&($=C.RGB8UI),B===C.UNSIGNED_SHORT&&($=C.RGB16UI),B===C.UNSIGNED_INT&&($=C.RGB32UI),B===C.BYTE&&($=C.RGB8I),B===C.SHORT&&($=C.RGB16I),B===C.INT&&($=C.RGB32I)),p===C.RGBA_INTEGER&&(B===C.UNSIGNED_BYTE&&($=C.RGBA8UI),B===C.UNSIGNED_SHORT&&($=C.RGBA16UI),B===C.UNSIGNED_INT&&($=C.RGBA32UI),B===C.BYTE&&($=C.RGBA8I),B===C.SHORT&&($=C.RGBA16I),B===C.INT&&($=C.RGBA32I)),p===C.RGB&&(B===C.UNSIGNED_SHORT&&V1&&($=V1.RGB16_EXT),B===C.SHORT&&V1&&($=V1.RGB16_SNORM_EXT),B===C.UNSIGNED_INT_5_9_9_9_REV&&($=C.RGB9_E5),B===C.UNSIGNED_INT_10F_11F_11F_REV&&($=C.R11F_G11F_B10F)),p===C.RGBA){let j=H1?n7:Y1.getTransfer(W);B===C.FLOAT&&($=C.RGBA32F),B===C.HALF_FLOAT&&($=C.RGBA16F),B===C.UNSIGNED_BYTE&&($=j===i2?C.SRGB8_ALPHA8:C.RGBA8),B===C.UNSIGNED_SHORT&&V1&&($=V1.RGBA16_EXT),B===C.SHORT&&V1&&($=V1.RGBA16_SNORM_EXT),B===C.UNSIGNED_SHORT_4_4_4_4&&($=C.RGBA4),B===C.UNSIGNED_SHORT_5_5_5_1&&($=C.RGB5_A1)}return($===C.R16F||$===C.R32F||$===C.RG16F||$===C.RG32F||$===C.RGBA16F||$===C.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(S,p){let B;return S?p===null||p===_5||p===B3?B=C.DEPTH24_STENCIL8:p===y5?B=C.DEPTH32F_STENCIL8:p===P3&&(B=C.DEPTH24_STENCIL8,R1("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===_5||p===B3?B=C.DEPTH_COMPONENT24:p===y5?B=C.DEPTH_COMPONENT32F:p===P3&&(B=C.DEPTH_COMPONENT16),B}function Z(S,p){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==P2&&S.minFilter!==I2?Math.log2(Math.max(p.width,p.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?p.mipmaps.length:1}function b(S){let p=S.target;p.removeEventListener("dispose",b),_(p),p.isVideoTexture&&o.delete(p),p.isHTMLTexture&&M.delete(p)}function m(S){let p=S.target;p.removeEventListener("dispose",m),I(p)}function _(S){let p=i.get(S);if(p.__webglInit===void 0)return;let B=S.source,k=l.get(B);if(k){let W=k[p.__cacheKey];W.usedTimes--,W.usedTimes===0&&R(S),Object.keys(k).length===0&&l.delete(B)}i.remove(S)}function R(S){let p=i.get(S);C.deleteTexture(p.__webglTexture);let B=S.source,k=l.get(B);delete k[p.__cacheKey],V.memory.textures--}function I(S){let p=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(p.__webglFramebuffer[k]))for(let W=0;W<p.__webglFramebuffer[k].length;W++)C.deleteFramebuffer(p.__webglFramebuffer[k][W]);else C.deleteFramebuffer(p.__webglFramebuffer[k]);p.__webglDepthbuffer&&C.deleteRenderbuffer(p.__webglDepthbuffer[k])}else{if(Array.isArray(p.__webglFramebuffer))for(let k=0;k<p.__webglFramebuffer.length;k++)C.deleteFramebuffer(p.__webglFramebuffer[k]);else C.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&C.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&C.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let k=0;k<p.__webglColorRenderbuffer.length;k++)p.__webglColorRenderbuffer[k]&&C.deleteRenderbuffer(p.__webglColorRenderbuffer[k]);p.__webglDepthRenderbuffer&&C.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let B=S.textures;for(let k=0,W=B.length;k<W;k++){let H1=i.get(B[k]);H1.__webglTexture&&(C.deleteTexture(H1.__webglTexture),V.memory.textures--),i.remove(B[k])}i.remove(S)}let N=0;function G(){N=0}function P(){return N}function U(S){N=S}function K(){let S=N;return S>=r.maxTextures&&R1("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,S}function Y(S){let p=[];return p.push(S.wrapS),p.push(S.wrapT),p.push(S.wrapR||0),p.push(S.magFilter),p.push(S.minFilter),p.push(S.anisotropy),p.push(S.internalFormat),p.push(S.format),p.push(S.type),p.push(S.generateMipmaps),p.push(S.premultiplyAlpha),p.push(S.flipY),p.push(S.unpackAlignment),p.push(S.colorSpace),p.join()}function r1(S,p){let B=i.get(S);if(S.isVideoTexture&&E(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&B.__version!==S.version){let k=S.image;if(k===null)R1("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)R1("WebGLRenderer: Texture marked for update but image is incomplete");else{x1(B,S,p);return}}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(C.TEXTURE_2D,B.__webglTexture,C.TEXTURE0+p)}function X(S,p){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){x1(B,S,p);return}else S.isExternalTexture&&(B.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(C.TEXTURE_2D_ARRAY,B.__webglTexture,C.TEXTURE0+p)}function t1(S,p){let B=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){x1(B,S,p);return}t.bindTexture(C.TEXTURE_3D,B.__webglTexture,C.TEXTURE0+p)}function i1(S,p){let B=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&B.__version!==S.version){D1(B,S,p);return}t.bindTexture(C.TEXTURE_CUBE_MAP,B.__webglTexture,C.TEXTURE0+p)}let O1={[D4]:C.REPEAT,[R5]:C.CLAMP_TO_EDGE,[k4]:C.MIRRORED_REPEAT},T1={[P2]:C.NEAREST,[aC]:C.NEAREST_MIPMAP_NEAREST,[P7]:C.NEAREST_MIPMAP_LINEAR,[I2]:C.LINEAR,[A9]:C.LINEAR_MIPMAP_NEAREST,[Z0]:C.LINEAR_MIPMAP_LINEAR},a2={[lC]:C.NEVER,[AC]:C.ALWAYS,[dC]:C.LESS,[C6]:C.LEQUAL,[cC]:C.EQUAL,[i6]:C.GEQUAL,[pC]:C.GREATER,[uC]:C.NOTEQUAL};function Q1(S,p){if(p.type===y5&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===I2||p.magFilter===A9||p.magFilter===P7||p.magFilter===Z0||p.minFilter===I2||p.minFilter===A9||p.minFilter===P7||p.minFilter===Z0)&&R1("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),C.texParameteri(S,C.TEXTURE_WRAP_S,O1[p.wrapS]),C.texParameteri(S,C.TEXTURE_WRAP_T,O1[p.wrapT]),(S===C.TEXTURE_3D||S===C.TEXTURE_2D_ARRAY)&&C.texParameteri(S,C.TEXTURE_WRAP_R,O1[p.wrapR]),C.texParameteri(S,C.TEXTURE_MAG_FILTER,T1[p.magFilter]),C.texParameteri(S,C.TEXTURE_MIN_FILTER,T1[p.minFilter]),p.compareFunction&&(C.texParameteri(S,C.TEXTURE_COMPARE_MODE,C.COMPARE_REF_TO_TEXTURE),C.texParameteri(S,C.TEXTURE_COMPARE_FUNC,a2[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===P2||p.minFilter!==P7&&p.minFilter!==Z0||p.type===y5&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");C.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function j1(S,p){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,p.addEventListener("dispose",b));let k=p.source,W=l.get(k);W===void 0&&(W={},l.set(k,W));let H1=Y(p);if(H1!==S.__cacheKey){W[H1]===void 0&&(W[H1]={texture:C.createTexture(),usedTimes:0},V.memory.textures++,B=!0),W[H1].usedTimes++;let V1=W[S.__cacheKey];V1!==void 0&&(W[S.__cacheKey].usedTimes--,V1.usedTimes===0&&R(p)),S.__cacheKey=H1,S.__webglTexture=W[H1].texture}return B}function q(S,p,B){return Math.floor(Math.floor(S/B)/p)}function e1(S,p,B,k){let H1=S.updateRanges;if(H1.length===0)t.texSubImage2D(C.TEXTURE_2D,0,0,0,p.width,p.height,B,k,p.data);else{H1.sort((_1,M1)=>_1.start-M1.start);let V1=0;for(let _1=1;_1<H1.length;_1++){let M1=H1[V1],L1=H1[_1],y1=M1.start+M1.count,E1=q(L1.start,p.width,4),k1=q(M1.start,p.width,4);L1.start<=y1+1&&E1===k1&&q(L1.start+L1.count-1,p.width,4)===E1?M1.count=Math.max(M1.count,L1.start+L1.count-M1.start):(++V1,H1[V1]=L1)}H1.length=V1+1;let $=t.getParameter(C.UNPACK_ROW_LENGTH),j=t.getParameter(C.UNPACK_SKIP_PIXELS),n1=t.getParameter(C.UNPACK_SKIP_ROWS);t.pixelStorei(C.UNPACK_ROW_LENGTH,p.width);for(let _1=0,M1=H1.length;_1<M1;_1++){let L1=H1[_1],y1=Math.floor(L1.start/4),E1=Math.ceil(L1.count/4),k1=y1%p.width,O=Math.floor(y1/p.width),a1=E1,J=1;t.pixelStorei(C.UNPACK_SKIP_PIXELS,k1),t.pixelStorei(C.UNPACK_SKIP_ROWS,O),t.texSubImage2D(C.TEXTURE_2D,0,k1,O,a1,J,B,k,p.data)}S.clearUpdateRanges(),t.pixelStorei(C.UNPACK_ROW_LENGTH,$),t.pixelStorei(C.UNPACK_SKIP_PIXELS,j),t.pixelStorei(C.UNPACK_SKIP_ROWS,n1)}}function x1(S,p,B){let k=C.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(k=C.TEXTURE_2D_ARRAY),p.isData3DTexture&&(k=C.TEXTURE_3D);let W=j1(S,p),H1=p.source;t.bindTexture(k,S.__webglTexture,C.TEXTURE0+B);let V1=i.get(H1);if(H1.version!==V1.__version||W===!0){if(t.activeTexture(C.TEXTURE0+B),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){let J=Y1.getPrimaries(Y1.workingColorSpace),o1=p.colorSpace===K5?null:Y1.getPrimaries(p.colorSpace),p1=p.colorSpace===K5||J===o1?C.NONE:C.BROWSER_DEFAULT_WEBGL;t.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,p1)}t.pixelStorei(C.UNPACK_ALIGNMENT,p.unpackAlignment);let j=c(p.image,!1,r.maxTextureSize);j=D2(p,j);let n1=H.convert(p.format,p.colorSpace),_1=H.convert(p.type),M1=h(p.internalFormat,n1,_1,p.normalized,p.colorSpace,p.isVideoTexture);Q1(k,p);let L1,y1=p.mipmaps,E1=p.isVideoTexture!==!0,k1=V1.__version===void 0||W===!0,O=H1.dataReady,a1=Z(p,j);if(p.isDepthTexture)M1=g(p.format===_0,p.type),k1&&(E1?t.texStorage2D(C.TEXTURE_2D,1,M1,j.width,j.height):t.texImage2D(C.TEXTURE_2D,0,M1,j.width,j.height,0,n1,_1,null));else if(p.isDataTexture)if(y1.length>0){E1&&k1&&t.texStorage2D(C.TEXTURE_2D,a1,M1,y1[0].width,y1[0].height);for(let J=0,o1=y1.length;J<o1;J++)L1=y1[J],E1?O&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,L1.width,L1.height,n1,_1,L1.data):t.texImage2D(C.TEXTURE_2D,J,M1,L1.width,L1.height,0,n1,_1,L1.data);p.generateMipmaps=!1}else E1?(k1&&t.texStorage2D(C.TEXTURE_2D,a1,M1,j.width,j.height),O&&e1(p,j,n1,_1)):t.texImage2D(C.TEXTURE_2D,0,M1,j.width,j.height,0,n1,_1,j.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){E1&&k1&&t.texStorage3D(C.TEXTURE_2D_ARRAY,a1,M1,y1[0].width,y1[0].height,j.depth);for(let J=0,o1=y1.length;J<o1;J++)if(L1=y1[J],p.format!==c5)if(n1!==null)if(E1){if(O)if(p.layerUpdates.size>0){let p1=K8(L1.width,L1.height,p.format,p.type);for(let C1 of p.layerUpdates){let w1=L1.data.subarray(C1*p1/L1.data.BYTES_PER_ELEMENT,(C1+1)*p1/L1.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,C1,L1.width,L1.height,1,n1,w1)}}else t.compressedTexSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,0,L1.width,L1.height,j.depth,n1,L1.data)}else t.compressedTexImage3D(C.TEXTURE_2D_ARRAY,J,M1,L1.width,L1.height,j.depth,0,L1.data,0,0);else R1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else E1?O&&t.texSubImage3D(C.TEXTURE_2D_ARRAY,J,0,0,0,L1.width,L1.height,j.depth,n1,_1,L1.data):t.texImage3D(C.TEXTURE_2D_ARRAY,J,M1,L1.width,L1.height,j.depth,0,n1,_1,L1.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{E1&&k1&&t.texStorage2D(C.TEXTURE_2D,a1,M1,y1[0].width,y1[0].height);for(let J=0,o1=y1.length;J<o1;J++)L1=y1[J],p.format!==c5?n1!==null?E1?O&&t.compressedTexSubImage2D(C.TEXTURE_2D,J,0,0,L1.width,L1.height,n1,L1.data):t.compressedTexImage2D(C.TEXTURE_2D,J,M1,L1.width,L1.height,0,L1.data):R1("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):E1?O&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,L1.width,L1.height,n1,_1,L1.data):t.texImage2D(C.TEXTURE_2D,J,M1,L1.width,L1.height,0,n1,_1,L1.data)}else if(p.isDataArrayTexture)if(E1){if(k1&&t.texStorage3D(C.TEXTURE_2D_ARRAY,a1,M1,j.width,j.height,j.depth),O)if(p.layerUpdates.size>0){let J=K8(j.width,j.height,p.format,p.type);for(let o1 of p.layerUpdates){let p1=j.data.subarray(o1*J/j.data.BYTES_PER_ELEMENT,(o1+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,o1,j.width,j.height,1,n1,_1,p1)}p.clearLayerUpdates()}else t.texSubImage3D(C.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,n1,_1,j.data)}else t.texImage3D(C.TEXTURE_2D_ARRAY,0,M1,j.width,j.height,j.depth,0,n1,_1,j.data);else if(p.isData3DTexture)E1?(k1&&t.texStorage3D(C.TEXTURE_3D,a1,M1,j.width,j.height,j.depth),O&&t.texSubImage3D(C.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,n1,_1,j.data)):t.texImage3D(C.TEXTURE_3D,0,M1,j.width,j.height,j.depth,0,n1,_1,j.data);else if(p.isFramebufferTexture){if(k1)if(E1)t.texStorage2D(C.TEXTURE_2D,a1,M1,j.width,j.height);else{let J=j.width,o1=j.height;for(let p1=0;p1<a1;p1++)t.texImage2D(C.TEXTURE_2D,p1,M1,J,o1,0,n1,_1,null),J>>=1,o1>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in C){let J=C.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),M.add(p),J.onpaint=o1=>{let p1=o1.changedElements;for(let C1 of M)p1.includes(C1.image)&&(C1.needsUpdate=!0)},J.requestPaint();return}if(C.texElementImage2D.length===3)C.texElementImage2D(C.TEXTURE_2D,C.RGBA8,j);else{let p1=C.RGBA,C1=C.RGBA,w1=C.UNSIGNED_BYTE;C.texElementImage2D(C.TEXTURE_2D,0,p1,C1,w1,j)}C.texParameteri(C.TEXTURE_2D,C.TEXTURE_MIN_FILTER,C.LINEAR),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_S,C.CLAMP_TO_EDGE),C.texParameteri(C.TEXTURE_2D,C.TEXTURE_WRAP_T,C.CLAMP_TO_EDGE)}}else if(y1.length>0){if(E1&&k1){let J=r2(y1[0]);t.texStorage2D(C.TEXTURE_2D,a1,M1,J.width,J.height)}for(let J=0,o1=y1.length;J<o1;J++)L1=y1[J],E1?O&&t.texSubImage2D(C.TEXTURE_2D,J,0,0,n1,_1,L1):t.texImage2D(C.TEXTURE_2D,J,M1,n1,_1,L1);p.generateMipmaps=!1}else if(E1){if(k1){let J=r2(j);t.texStorage2D(C.TEXTURE_2D,a1,M1,J.width,J.height)}O&&t.texSubImage2D(C.TEXTURE_2D,0,0,0,n1,_1,j)}else t.texImage2D(C.TEXTURE_2D,0,M1,n1,_1,j);d(p)&&v(k),V1.__version=H1.version,p.onUpdate&&p.onUpdate(p)}S.__version=p.version}function D1(S,p,B){if(p.image.length!==6)return;let k=j1(S,p),W=p.source;t.bindTexture(C.TEXTURE_CUBE_MAP,S.__webglTexture,C.TEXTURE0+B);let H1=i.get(W);if(W.version!==H1.__version||k===!0){t.activeTexture(C.TEXTURE0+B);let V1=Y1.getPrimaries(Y1.workingColorSpace),$=p.colorSpace===K5?null:Y1.getPrimaries(p.colorSpace),j=p.colorSpace===K5||V1===$?C.NONE:C.BROWSER_DEFAULT_WEBGL;t.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(C.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(C.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let n1=p.isCompressedTexture||p.image[0].isCompressedTexture,_1=p.image[0]&&p.image[0].isDataTexture,M1=[];for(let C1=0;C1<6;C1++)!n1&&!_1?M1[C1]=c(p.image[C1],!0,r.maxCubemapSize):M1[C1]=_1?p.image[C1].image:p.image[C1],M1[C1]=D2(p,M1[C1]);let L1=M1[0],y1=H.convert(p.format,p.colorSpace),E1=H.convert(p.type),k1=h(p.internalFormat,y1,E1,p.normalized,p.colorSpace),O=p.isVideoTexture!==!0,a1=H1.__version===void 0||k===!0,J=W.dataReady,o1=Z(p,L1);Q1(C.TEXTURE_CUBE_MAP,p);let p1;if(n1){O&&a1&&t.texStorage2D(C.TEXTURE_CUBE_MAP,o1,k1,L1.width,L1.height);for(let C1=0;C1<6;C1++){p1=M1[C1].mipmaps;for(let w1=0;w1<p1.length;w1++){let g1=p1[w1];p.format!==c5?y1!==null?O?J&&t.compressedTexSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1,0,0,g1.width,g1.height,y1,g1.data):t.compressedTexImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1,k1,g1.width,g1.height,0,g1.data):R1("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1,0,0,g1.width,g1.height,y1,E1,g1.data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1,k1,g1.width,g1.height,0,y1,E1,g1.data)}}}else{if(p1=p.mipmaps,O&&a1){p1.length>0&&o1++;let C1=r2(M1[0]);t.texStorage2D(C.TEXTURE_CUBE_MAP,o1,k1,C1.width,C1.height)}for(let C1=0;C1<6;C1++)if(_1){O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,0,0,M1[C1].width,M1[C1].height,y1,E1,M1[C1].data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,k1,M1[C1].width,M1[C1].height,0,y1,E1,M1[C1].data);for(let w1=0;w1<p1.length;w1++){let s2=p1[w1].image[C1].image;O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1+1,0,0,s2.width,s2.height,y1,E1,s2.data):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1+1,k1,s2.width,s2.height,0,y1,E1,s2.data)}}else{O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,0,0,y1,E1,M1[C1]):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,0,k1,y1,E1,M1[C1]);for(let w1=0;w1<p1.length;w1++){let g1=p1[w1];O?J&&t.texSubImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1+1,0,0,y1,E1,g1.image[C1]):t.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+C1,w1+1,k1,y1,E1,g1.image[C1])}}}d(p)&&v(C.TEXTURE_CUBE_MAP),H1.__version=W.version,p.onUpdate&&p.onUpdate(p)}S.__version=p.version}function m1(S,p,B,k,W,H1){let V1=H.convert(B.format,B.colorSpace),$=H.convert(B.type),j=h(B.internalFormat,V1,$,B.normalized,B.colorSpace),n1=i.get(p),_1=i.get(B);if(_1.__renderTarget=p,!n1.__hasExternalTextures){let M1=Math.max(1,p.width>>H1),L1=Math.max(1,p.height>>H1);W===C.TEXTURE_3D||W===C.TEXTURE_2D_ARRAY?t.texImage3D(W,H1,j,M1,L1,p.depth,0,V1,$,null):t.texImage2D(W,H1,j,M1,L1,0,V1,$,null)}t.bindFramebuffer(C.FRAMEBUFFER,S),g2(p)?n.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,k,W,_1.__webglTexture,0,h2(p)):(W===C.TEXTURE_2D||W>=C.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=C.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&C.framebufferTexture2D(C.FRAMEBUFFER,k,W,_1.__webglTexture,H1),t.bindFramebuffer(C.FRAMEBUFFER,null)}function G1(S,p,B){if(C.bindRenderbuffer(C.RENDERBUFFER,S),p.depthBuffer){let k=p.depthTexture,W=k&&k.isDepthTexture?k.type:null,H1=g(p.stencilBuffer,W),V1=p.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;g2(p)?n.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,h2(p),H1,p.width,p.height):B?C.renderbufferStorageMultisample(C.RENDERBUFFER,h2(p),H1,p.width,p.height):C.renderbufferStorage(C.RENDERBUFFER,H1,p.width,p.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,V1,C.RENDERBUFFER,S)}else{let k=p.textures;for(let W=0;W<k.length;W++){let H1=k[W],V1=H.convert(H1.format,H1.colorSpace),$=H.convert(H1.type),j=h(H1.internalFormat,V1,$,H1.normalized,H1.colorSpace);g2(p)?n.renderbufferStorageMultisampleEXT(C.RENDERBUFFER,h2(p),j,p.width,p.height):B?C.renderbufferStorageMultisample(C.RENDERBUFFER,h2(p),j,p.width,p.height):C.renderbufferStorage(C.RENDERBUFFER,j,p.width,p.height)}}C.bindRenderbuffer(C.RENDERBUFFER,null)}function b2(S,p,B){let k=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(C.FRAMEBUFFER,S),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(p.depthTexture);if(W.__renderTarget=p,(!W.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),k){if(W.__webglInit===void 0&&(W.__webglInit=!0,p.depthTexture.addEventListener("dispose",b)),W.__webglTexture===void 0){W.__webglTexture=C.createTexture(),t.bindTexture(C.TEXTURE_CUBE_MAP,W.__webglTexture),Q1(C.TEXTURE_CUBE_MAP,p.depthTexture);let n1=H.convert(p.depthTexture.format),_1=H.convert(p.depthTexture.type),M1;p.depthTexture.format===P5?M1=C.DEPTH_COMPONENT24:p.depthTexture.format===_0&&(M1=C.DEPTH24_STENCIL8);for(let L1=0;L1<6;L1++)C.texImage2D(C.TEXTURE_CUBE_MAP_POSITIVE_X+L1,0,M1,p.width,p.height,0,n1,_1,null)}}else r1(p.depthTexture,0);let H1=W.__webglTexture,V1=h2(p),$=k?C.TEXTURE_CUBE_MAP_POSITIVE_X+B:C.TEXTURE_2D,j=p.depthTexture.format===_0?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;if(p.depthTexture.format===P5)g2(p)?n.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,j,$,H1,0,V1):C.framebufferTexture2D(C.FRAMEBUFFER,j,$,H1,0);else if(p.depthTexture.format===_0)g2(p)?n.framebufferTexture2DMultisampleEXT(C.FRAMEBUFFER,j,$,H1,0,V1):C.framebufferTexture2D(C.FRAMEBUFFER,j,$,H1,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X1(S){let p=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==S.depthTexture){let k=S.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),k){let W=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,k.removeEventListener("dispose",W)};k.addEventListener("dispose",W),p.__depthDisposeCallback=W}p.__boundDepthTexture=k}if(S.depthTexture&&!p.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)b2(p.__webglFramebuffer[k],S,k);else{let k=S.texture.mipmaps;k&&k.length>0?b2(p.__webglFramebuffer[0],S,0):b2(p.__webglFramebuffer,S,0)}else if(B){p.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(C.FRAMEBUFFER,p.__webglFramebuffer[k]),p.__webglDepthbuffer[k]===void 0)p.__webglDepthbuffer[k]=C.createRenderbuffer(),G1(p.__webglDepthbuffer[k],S,!1);else{let W=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,H1=p.__webglDepthbuffer[k];C.bindRenderbuffer(C.RENDERBUFFER,H1),C.framebufferRenderbuffer(C.FRAMEBUFFER,W,C.RENDERBUFFER,H1)}}else{let k=S.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(C.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(C.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=C.createRenderbuffer(),G1(p.__webglDepthbuffer,S,!1);else{let W=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,H1=p.__webglDepthbuffer;C.bindRenderbuffer(C.RENDERBUFFER,H1),C.framebufferRenderbuffer(C.FRAMEBUFFER,W,C.RENDERBUFFER,H1)}}t.bindFramebuffer(C.FRAMEBUFFER,null)}function J1(S,p,B){let k=i.get(S);p!==void 0&&m1(k.__webglFramebuffer,S,S.texture,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,0),B!==void 0&&X1(S)}function o2(S){let p=S.texture,B=i.get(S),k=i.get(p);S.addEventListener("dispose",m);let W=S.textures,H1=S.isWebGLCubeRenderTarget===!0,V1=W.length>1;if(V1||(k.__webglTexture===void 0&&(k.__webglTexture=C.createTexture()),k.__version=p.version,V.memory.textures++),H1){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let j=0;j<p.mipmaps.length;j++)B.__webglFramebuffer[$][j]=C.createFramebuffer()}else B.__webglFramebuffer[$]=C.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<p.mipmaps.length;$++)B.__webglFramebuffer[$]=C.createFramebuffer()}else B.__webglFramebuffer=C.createFramebuffer();if(V1)for(let $=0,j=W.length;$<j;$++){let n1=i.get(W[$]);n1.__webglTexture===void 0&&(n1.__webglTexture=C.createTexture(),V.memory.textures++)}if(S.samples>0&&g2(S)===!1){B.__webglMultisampledFramebuffer=C.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(C.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){let j=W[$];B.__webglColorRenderbuffer[$]=C.createRenderbuffer(),C.bindRenderbuffer(C.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let n1=H.convert(j.format,j.colorSpace),_1=H.convert(j.type),M1=h(j.internalFormat,n1,_1,j.normalized,j.colorSpace,S.isXRRenderTarget===!0),L1=h2(S);C.renderbufferStorageMultisample(C.RENDERBUFFER,L1,M1,S.width,S.height),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+$,C.RENDERBUFFER,B.__webglColorRenderbuffer[$])}C.bindRenderbuffer(C.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=C.createRenderbuffer(),G1(B.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(C.FRAMEBUFFER,null)}}if(H1){t.bindTexture(C.TEXTURE_CUBE_MAP,k.__webglTexture),Q1(C.TEXTURE_CUBE_MAP,p);for(let $=0;$<6;$++)if(p.mipmaps&&p.mipmaps.length>0)for(let j=0;j<p.mipmaps.length;j++)m1(B.__webglFramebuffer[$][j],S,p,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else m1(B.__webglFramebuffer[$],S,p,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(p)&&v(C.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V1){for(let $=0,j=W.length;$<j;$++){let n1=W[$],_1=i.get(n1),M1=C.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(M1=S.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),t.bindTexture(M1,_1.__webglTexture),Q1(M1,n1),m1(B.__webglFramebuffer,S,n1,C.COLOR_ATTACHMENT0+$,M1,0),d(n1)&&v(M1)}t.unbindTexture()}else{let $=C.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&($=S.isWebGL3DRenderTarget?C.TEXTURE_3D:C.TEXTURE_2D_ARRAY),t.bindTexture($,k.__webglTexture),Q1($,p),p.mipmaps&&p.mipmaps.length>0)for(let j=0;j<p.mipmaps.length;j++)m1(B.__webglFramebuffer[j],S,p,C.COLOR_ATTACHMENT0,$,j);else m1(B.__webglFramebuffer,S,p,C.COLOR_ATTACHMENT0,$,0);d(p)&&v($),t.unbindTexture()}S.depthBuffer&&X1(S)}function $1(S){let p=S.textures;for(let B=0,k=p.length;B<k;B++){let W=p[B];if(d(W)){let H1=y(S),V1=i.get(W).__webglTexture;t.bindTexture(H1,V1),v(H1),t.unbindTexture()}}}let u2=[],E2=[];function C5(S){if(S.samples>0){if(g2(S)===!1){let p=S.textures,B=S.width,k=S.height,W=C.COLOR_BUFFER_BIT,H1=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT,V1=i.get(S),$=p.length>1;if($)for(let n1=0;n1<p.length;n1++)t.bindFramebuffer(C.FRAMEBUFFER,V1.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+n1,C.RENDERBUFFER,null),t.bindFramebuffer(C.FRAMEBUFFER,V1.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+n1,C.TEXTURE_2D,null,0);t.bindFramebuffer(C.READ_FRAMEBUFFER,V1.__webglMultisampledFramebuffer);let j=S.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(C.DRAW_FRAMEBUFFER,V1.__webglFramebuffer[0]):t.bindFramebuffer(C.DRAW_FRAMEBUFFER,V1.__webglFramebuffer);for(let n1=0;n1<p.length;n1++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(W|=C.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(W|=C.STENCIL_BUFFER_BIT)),$){C.framebufferRenderbuffer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.RENDERBUFFER,V1.__webglColorRenderbuffer[n1]);let _1=i.get(p[n1]).__webglTexture;C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_1,0)}C.blitFramebuffer(0,0,B,k,0,0,B,k,W,C.NEAREST),a===!0&&(u2.length=0,E2.length=0,u2.push(C.COLOR_ATTACHMENT0+n1),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(u2.push(H1),E2.push(H1),C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,E2)),C.invalidateFramebuffer(C.READ_FRAMEBUFFER,u2))}if(t.bindFramebuffer(C.READ_FRAMEBUFFER,null),t.bindFramebuffer(C.DRAW_FRAMEBUFFER,null),$)for(let n1=0;n1<p.length;n1++){t.bindFramebuffer(C.FRAMEBUFFER,V1.__webglMultisampledFramebuffer),C.framebufferRenderbuffer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+n1,C.RENDERBUFFER,V1.__webglColorRenderbuffer[n1]);let _1=i.get(p[n1]).__webglTexture;t.bindFramebuffer(C.FRAMEBUFFER,V1.__webglFramebuffer),C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0+n1,C.TEXTURE_2D,_1,0)}t.bindFramebuffer(C.DRAW_FRAMEBUFFER,V1.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&a){let p=S.stencilBuffer?C.DEPTH_STENCIL_ATTACHMENT:C.DEPTH_ATTACHMENT;C.invalidateFramebuffer(C.DRAW_FRAMEBUFFER,[p])}}}function h2(S){return Math.min(r.maxSamples,S.samples)}function g2(S){let p=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function E(S){let p=V.render.frame;o.get(S)!==p&&(o.set(S,p),S.update())}function D2(S,p){let B=S.colorSpace,k=S.format,W=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==V7&&B!==K5&&(Y1.getTransfer(B)===i2?(k!==c5||W!==r5)&&R1("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):P1("WebGLTextures: Unsupported texture color space:",B)),p}function r2(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(L.width=S.naturalWidth||S.width,L.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(L.width=S.displayWidth,L.height=S.displayHeight):(L.width=S.width,L.height=S.height),L}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=U,this.setTexture2D=r1,this.setTexture2DArray=X,this.setTexture3D=t1,this.setTextureCube=i1,this.rebindTextures=J1,this.setupRenderTarget=o2,this.updateRenderTargetMipmap=$1,this.updateMultisampleRenderTarget=C5,this.setupDepthRenderbuffer=X1,this.setupFrameBufferTexture=m1,this.useMultisampledRTT=g2,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ms(C,e){function t(i,r=K5){let H,V=Y1.getTransfer(r);if(i===r5)return C.UNSIGNED_BYTE;if(i===h9)return C.UNSIGNED_SHORT_4_4_4_4;if(i===f9)return C.UNSIGNED_SHORT_5_5_5_1;if(i===F8)return C.UNSIGNED_INT_5_9_9_9_REV;if(i===D8)return C.UNSIGNED_INT_10F_11F_11F_REV;if(i===B8)return C.BYTE;if(i===I8)return C.SHORT;if(i===P3)return C.UNSIGNED_SHORT;if(i===m9)return C.INT;if(i===_5)return C.UNSIGNED_INT;if(i===y5)return C.FLOAT;if(i===b5)return C.HALF_FLOAT;if(i===k8)return C.ALPHA;if(i===N8)return C.RGB;if(i===c5)return C.RGBA;if(i===P5)return C.DEPTH_COMPONENT;if(i===_0)return C.DEPTH_STENCIL;if(i===U8)return C.RED;if(i===x9)return C.RED_INTEGER;if(i===y0)return C.RG;if(i===v9)return C.RG_INTEGER;if(i===S9)return C.RGBA_INTEGER;if(i===B7||i===I7||i===F7||i===D7)if(V===i2)if(H=e.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(i===B7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===I7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===F7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===D7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=e.get("WEBGL_compressed_texture_s3tc"),H!==null){if(i===B7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===I7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===F7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===D7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===g9||i===Z9||i===_9||i===y9)if(H=e.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(i===g9)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Z9)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_9)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===y9)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===b9||i===T9||i===w9||i===O9||i===E9||i===k7||i===R9)if(H=e.get("WEBGL_compressed_texture_etc"),H!==null){if(i===b9||i===T9)return V===i2?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(i===w9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(i===O9)return H.COMPRESSED_R11_EAC;if(i===E9)return H.COMPRESSED_SIGNED_R11_EAC;if(i===k7)return H.COMPRESSED_RG11_EAC;if(i===R9)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===P9||i===B9||i===I9||i===F9||i===D9||i===k9||i===N9||i===U9||i===z9||i===G9||i===W9||i===X9||i===q9||i===$9)if(H=e.get("WEBGL_compressed_texture_astc"),H!==null){if(i===P9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===B9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===I9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===F9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===D9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===k9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===N9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===U9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===z9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===G9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===W9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===X9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===q9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$9)return V===i2?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Y9||i===Q9||i===K9)if(H=e.get("EXT_texture_compression_bptc"),H!==null){if(i===Y9)return V===i2?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Q9)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===K9)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===J9||i===j9||i===N7||i===e6)if(H=e.get("EXT_texture_compression_rgtc"),H!==null){if(i===J9)return H.COMPRESSED_RED_RGTC1_EXT;if(i===j9)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===N7)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===e6)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===B3?C.UNSIGNED_INT_24_8:C[i]!==void 0?C[i]:null}return{convert:t}}var hs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fs=`
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

}`,pe=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new u7(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new a5({vertexShader:hs,fragmentShader:fs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new e5(new Z7(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ue=class extends B5{constructor(e,t){super();let i=this,r=null,H=1,V=null,n="local-floor",a=1,L=null,o=null,M=null,s=null,l=null,u=null,f=typeof XRWebGLBinding<"u",c=new pe,d={},v=t.getContextAttributes(),y=null,h=null,g=[],Z=[],b=new f1,m=null,_=null,R=new G2;R.viewport=new A2;let I=new G2;I.viewport=new A2;let N=[R,I],G=new d9,P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let e1=g[q];return e1===void 0&&(e1=new S3,g[q]=e1),e1.getTargetRaySpace()},this.getControllerGrip=function(q){let e1=g[q];return e1===void 0&&(e1=new S3,g[q]=e1),e1.getGripSpace()},this.getHand=function(q){let e1=g[q];return e1===void 0&&(e1=new S3,g[q]=e1),e1.getHandSpace()};function K(q){let e1=Z.indexOf(q.inputSource);if(e1===-1)return;let x1=g[e1];x1!==void 0&&(x1.update(q.inputSource,q.frame,L||V),x1.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",r1);for(let q=0;q<g.length;q++){let e1=Z[q];e1!==null&&(Z[q]=null,g[q].disconnect(e1))}P=null,U=null,c.reset();for(let q in d)delete d[q];if(e.setRenderTarget(y),l=null,s=null,M=null,r=null,h=null,j1.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(b.width,b.height,!1),_!==null){let q=_.camera;q.fov=_.fov,q.zoom=_.zoom,q.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){H=q,i.isPresenting===!0&&R1("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){n=q,i.isPresenting===!0&&R1("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return L||V},this.setReferenceSpace=function(q){L=q},this.getBaseLayer=function(){return s!==null?s:l},this.getBinding=function(){return M===null&&f&&(M=new XRWebGLBinding(r,t)),M},this.getFrame=function(){return u},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",r1),v.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(b),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let x1=null,D1=null,m1=null;v.depth&&(m1=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,x1=v.stencil?_0:P5,D1=v.stencil?B3:_5);let G1={colorFormat:t.RGBA8,depthFormat:m1,scaleFactor:H};M=this.getBinding(),s=M.createProjectionLayer(G1),r.updateRenderState({layers:[s]}),e.setPixelRatio(1),e.setSize(s.textureWidth,s.textureHeight,!1),h=new i5(s.textureWidth,s.textureHeight,{format:c5,type:r5,depthTexture:new m0(s.textureWidth,s.textureHeight,D1,void 0,void 0,void 0,void 0,void 0,void 0,x1),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:s.ignoreDepthValues===!1,resolveStencilBuffer:s.ignoreDepthValues===!1,storeMultisampledDepthBuffer:s.ignoreDepthValues===!1,storeMultisampledStencilBuffer:s.ignoreDepthValues===!1})}else{let x1={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:H};l=new XRWebGLLayer(r,t,x1),r.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),h=new i5(l.framebufferWidth,l.framebufferHeight,{format:c5,type:r5,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}h.isXRRenderTarget=!0,this.setFoveation(a),L=null,V=await r.requestReferenceSpace(n),j1.setContext(r),j1.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function r1(q){for(let e1=0;e1<q.removed.length;e1++){let x1=q.removed[e1],D1=Z.indexOf(x1);D1>=0&&(Z[D1]=null,g[D1].disconnect(x1))}for(let e1=0;e1<q.added.length;e1++){let x1=q.added[e1],D1=Z.indexOf(x1);if(D1===-1){for(let G1=0;G1<g.length;G1++)if(G1>=Z.length){Z.push(x1),D1=G1;break}else if(Z[G1]===null){Z[G1]=x1,D1=G1;break}if(D1===-1)break}let m1=g[D1];m1&&m1.connect(x1)}}let X=new T,t1=new T;function i1(q,e1,x1){X.setFromMatrixPosition(e1.matrixWorld),t1.setFromMatrixPosition(x1.matrixWorld);let D1=X.distanceTo(t1),m1=e1.projectionMatrix.elements,G1=x1.projectionMatrix.elements,b2=m1[14]/(m1[10]-1),X1=m1[14]/(m1[10]+1),J1=(m1[9]+1)/m1[5],o2=(m1[9]-1)/m1[5],$1=(m1[8]-1)/m1[0],u2=(G1[8]+1)/G1[0],E2=b2*$1,C5=b2*u2,h2=D1/(-$1+u2),g2=h2*-$1;if(e1.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(g2),q.translateZ(h2),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),m1[10]===-1)q.projectionMatrix.copy(e1.projectionMatrix),q.projectionMatrixInverse.copy(e1.projectionMatrixInverse);else{let E=b2+h2,D2=X1+h2,r2=E2-g2,S=C5+(D1-g2),p=J1*X1/D2*E,B=o2*X1/D2*E;q.projectionMatrix.makePerspective(r2,S,p,B,E,D2),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O1(q,e1){e1===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(e1.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let e1=q.near,x1=q.far;c.texture!==null&&(c.depthNear>0&&(e1=c.depthNear),c.depthFar>0&&(x1=c.depthFar)),G.near=I.near=R.near=e1,G.far=I.far=R.far=x1,(P!==G.near||U!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,U=G.far),G.layers.mask=q.layers.mask|6,R.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let D1=q.parent,m1=G.cameras;O1(G,D1);for(let G1=0;G1<m1.length;G1++)O1(m1[G1],D1);m1.length===2?i1(G,R,I):G.projectionMatrix.copy(R.projectionMatrix),_===null&&q.isPerspectiveCamera&&(_={camera:q,fov:q.fov,zoom:q.zoom}),T1(q,G,D1)};function T1(q,e1,x1){x1===null?q.matrix.copy(e1.matrixWorld):(q.matrix.copy(x1.matrixWorld),q.matrix.invert(),q.matrix.multiply(e1.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(e1.projectionMatrix),q.projectionMatrixInverse.copy(e1.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=f3*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(s===null&&l===null))return a},this.setFoveation=function(q){a=q,s!==null&&(s.fixedFoveation=q),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=q)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(G)},this.getCameraTexture=function(q){return d[q]};let a2=null;function Q1(q,e1){if(o=e1.getViewerPose(L||V),u=e1,o!==null){let x1=o.views;l!==null&&(e.setRenderTargetFramebuffer(h,l.framebuffer),e.setRenderTarget(h));let D1=!1;x1.length!==G.cameras.length&&(G.cameras.length=0,D1=!0);for(let X1=0;X1<x1.length;X1++){let J1=x1[X1],o2=null;if(l!==null)o2=l.getViewport(J1);else{let u2=M.getViewSubImage(s,J1);o2=u2.viewport,X1===0&&(e.setRenderTargetTextures(h,u2.colorTexture,u2.depthStencilTexture),e.setRenderTarget(h))}let $1=N[X1];$1===void 0&&($1=new G2,$1.layers.enable(X1),$1.viewport=new A2,N[X1]=$1),$1.matrix.fromArray(J1.transform.matrix),$1.matrix.decompose($1.position,$1.quaternion,$1.scale),$1.projectionMatrix.fromArray(J1.projectionMatrix),$1.projectionMatrixInverse.copy($1.projectionMatrix).invert(),$1.viewport.set(o2.x,o2.y,o2.width,o2.height),X1===0&&(G.matrix.copy($1.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),D1===!0&&G.cameras.push($1)}let m1=r.enabledFeatures;if(m1&&m1.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){M=i.getBinding();let X1=M.getDepthInformation(x1[0]);X1&&X1.isValid&&X1.texture&&c.init(X1,r.renderState)}if(m1&&m1.includes("camera-access")&&f){e.state.unbindTexture(),M=i.getBinding();for(let X1=0;X1<x1.length;X1++){let J1=x1[X1].camera;if(J1){let o2=d[J1];o2||(o2=new u7,d[J1]=o2);let $1=M.getCameraImage(J1);o2.sourceTexture=$1}}}}for(let x1=0;x1<g.length;x1++){let D1=Z[x1],m1=g[x1];D1!==null&&m1!==void 0&&m1.update(D1,e1,L||V)}a2&&a2(q,e1),e1.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:e1}),u=null}let j1=new jC;j1.setAnimationLoop(Q1),this.setAnimationLoop=function(q){a2=q},this.dispose=function(){}}},xs=new V2,Hi=new I1;Hi.set(-1,0,0,0,1,0,0,0,1);function vs(C,e){function t(c,d){c.matrixAutoUpdate===!0&&c.updateMatrix(),d.value.copy(c.matrix)}function i(c,d){d.color.getRGB(c.fogColor.value,$8(C)),d.isFog?(c.fogNear.value=d.near,c.fogFar.value=d.far):d.isFogExp2&&(c.fogDensity.value=d.density)}function r(c,d,v,y,h){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?H(c,d):d.isMeshLambertMaterial?(H(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(H(c,d),M(c,d)):d.isMeshPhongMaterial?(H(c,d),o(c,d),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(H(c,d),s(c,d),d.isMeshPhysicalMaterial&&l(c,d,h)):d.isMeshMatcapMaterial?(H(c,d),u(c,d)):d.isMeshDepthMaterial?H(c,d):d.isMeshDistanceMaterial?(H(c,d),f(c,d)):d.isMeshNormalMaterial?H(c,d):d.isLineBasicMaterial?(V(c,d),d.isLineDashedMaterial&&n(c,d)):d.isPointsMaterial?a(c,d,v,y):d.isSpriteMaterial?L(c,d):d.isShadowMaterial?(c.color.value.copy(d.color),c.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function H(c,d){c.opacity.value=d.opacity,d.color&&c.diffuse.value.copy(d.color),d.emissive&&c.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.bumpMap&&(c.bumpMap.value=d.bumpMap,t(d.bumpMap,c.bumpMapTransform),c.bumpScale.value=d.bumpScale,d.side===t5&&(c.bumpScale.value*=-1)),d.normalMap&&(c.normalMap.value=d.normalMap,t(d.normalMap,c.normalMapTransform),c.normalScale.value.copy(d.normalScale),d.side===t5&&c.normalScale.value.negate()),d.displacementMap&&(c.displacementMap.value=d.displacementMap,t(d.displacementMap,c.displacementMapTransform),c.displacementScale.value=d.displacementScale,c.displacementBias.value=d.displacementBias),d.emissiveMap&&(c.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,c.emissiveMapTransform)),d.specularMap&&(c.specularMap.value=d.specularMap,t(d.specularMap,c.specularMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest);let v=e.get(d),y=v.envMap,h=v.envMapRotation;y&&(c.envMap.value=y,c.envMapRotation.value.setFromMatrix4(xs.makeRotationFromEuler(h)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(Hi),c.reflectivity.value=d.reflectivity,c.ior.value=d.ior,c.refractionRatio.value=d.refractionRatio),d.lightMap&&(c.lightMap.value=d.lightMap,c.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,c.lightMapTransform)),d.aoMap&&(c.aoMap.value=d.aoMap,c.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,c.aoMapTransform))}function V(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform))}function n(c,d){c.dashSize.value=d.dashSize,c.totalSize.value=d.dashSize+d.gapSize,c.scale.value=d.scale}function a(c,d,v,y){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.size.value=d.size*v,c.scale.value=y*.5,d.map&&(c.map.value=d.map,t(d.map,c.uvTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function L(c,d){c.diffuse.value.copy(d.color),c.opacity.value=d.opacity,c.rotation.value=d.rotation,d.map&&(c.map.value=d.map,t(d.map,c.mapTransform)),d.alphaMap&&(c.alphaMap.value=d.alphaMap,t(d.alphaMap,c.alphaMapTransform)),d.alphaTest>0&&(c.alphaTest.value=d.alphaTest)}function o(c,d){c.specular.value.copy(d.specular),c.shininess.value=Math.max(d.shininess,1e-4)}function M(c,d){d.gradientMap&&(c.gradientMap.value=d.gradientMap)}function s(c,d){c.metalness.value=d.metalness,d.metalnessMap&&(c.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,c.metalnessMapTransform)),c.roughness.value=d.roughness,d.roughnessMap&&(c.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,c.roughnessMapTransform)),d.envMap&&(c.envMapIntensity.value=d.envMapIntensity)}function l(c,d,v){c.ior.value=d.ior,d.sheen>0&&(c.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),c.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(c.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,c.sheenColorMapTransform)),d.sheenRoughnessMap&&(c.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,c.sheenRoughnessMapTransform))),d.clearcoat>0&&(c.clearcoat.value=d.clearcoat,c.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(c.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,c.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(c.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===t5&&c.clearcoatNormalScale.value.negate())),d.dispersion>0&&(c.dispersion.value=d.dispersion),d.retroreflectivity>0&&(c.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(c.iridescence.value=d.iridescence,c.iridescenceIOR.value=d.iridescenceIOR,c.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(c.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,c.iridescenceMapTransform)),d.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),d.transmission>0&&(c.transmission.value=d.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(c.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,c.transmissionMapTransform)),c.thickness.value=d.thickness,d.thicknessMap&&(c.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=d.attenuationDistance,c.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(c.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(c.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=d.specularIntensity,c.specularColor.value.copy(d.specularColor),d.specularColorMap&&(c.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,c.specularColorMapTransform)),d.specularIntensityMap&&(c.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,c.specularIntensityMapTransform))}function u(c,d){d.matcap&&(c.matcap.value=d.matcap)}function f(c,d){let v=e.get(d).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ss(C,e,t,i){let r={},H={},V=[],n=C.getParameter(C.MAX_UNIFORM_BUFFER_BINDINGS);function a(h,g){let Z=g.program;i.uniformBlockBinding(h,Z)}function L(h,g){let Z=r[h.id];Z===void 0&&(c(h),Z=o(h),r[h.id]=Z,h.addEventListener("dispose",v));let b=g.program;i.updateUBOMapping(h,b);let m=e.render.frame;H[h.id]!==m&&(s(h),H[h.id]=m)}function o(h){let g=M();h.__bindingPointIndex=g;let Z=C.createBuffer(),b=h.__size,m=h.usage;return C.bindBuffer(C.UNIFORM_BUFFER,Z),C.bufferData(C.UNIFORM_BUFFER,b,m),C.bindBuffer(C.UNIFORM_BUFFER,null),C.bindBufferBase(C.UNIFORM_BUFFER,g,Z),Z}function M(){for(let h=0;h<n;h++)if(V.indexOf(h)===-1)return V.push(h),h;return P1("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(h){let g=r[h.id],Z=h.uniforms,b=h.__cache;C.bindBuffer(C.UNIFORM_BUFFER,g);for(let m=0,_=Z.length;m<_;m++){let R=Z[m];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)l(R[I],m,I,b);else l(R,m,0,b)}C.bindBuffer(C.UNIFORM_BUFFER,null)}function l(h,g,Z,b){if(f(h,g,Z,b)===!0){let m=h.__offset,_=h.value;if(Array.isArray(_)){let R=0;for(let I=0;I<_.length;I++){let N=_[I],G=d(N);u(N,h.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else u(_,h.__data,0);C.bufferSubData(C.UNIFORM_BUFFER,m,h.__data)}}function u(h,g,Z){typeof h=="number"||typeof h=="boolean"?g[0]=h:h.isMatrix3?(g[0]=h.elements[0],g[1]=h.elements[1],g[2]=h.elements[2],g[3]=0,g[4]=h.elements[3],g[5]=h.elements[4],g[6]=h.elements[5],g[7]=0,g[8]=h.elements[6],g[9]=h.elements[7],g[10]=h.elements[8],g[11]=0):ArrayBuffer.isView(h)?g.set(new h.constructor(h.buffer,h.byteOffset,g.length)):h.toArray(g,Z)}function f(h,g,Z,b){let m=h.value,_=g+"_"+Z;if(b[_]===void 0)return typeof m=="number"||typeof m=="boolean"?b[_]=m:ArrayBuffer.isView(m)?b[_]=m.slice():b[_]=m.clone(),!0;{let R=b[_];if(typeof m=="number"||typeof m=="boolean"){if(R!==m)return b[_]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(R.equals(m)===!1)return R.copy(m),!0}}return!1}function c(h){let g=h.uniforms,Z=0,b=16;for(let _=0,R=g.length;_<R;_++){let I=Array.isArray(g[_])?g[_]:[g[_]];for(let N=0,G=I.length;N<G;N++){let P=I[N],U=Array.isArray(P.value)?P.value:[P.value];for(let K=0,Y=U.length;K<Y;K++){let r1=U[K],X=d(r1),t1=Z%b,i1=t1%X.boundary,O1=t1+i1;Z+=i1,O1!==0&&b-O1<X.storage&&(Z+=b-O1),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=Z,Z+=X.storage}}}let m=Z%b;return m>0&&(Z+=b-m),h.__size=Z,h.__cache={},this}function d(h){let g={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(g.boundary=4,g.storage=4):h.isVector2?(g.boundary=8,g.storage=8):h.isVector3||h.isColor?(g.boundary=16,g.storage=12):h.isVector4?(g.boundary=16,g.storage=16):h.isMatrix3?(g.boundary=48,g.storage=48):h.isMatrix4?(g.boundary=64,g.storage=64):h.isTexture?R1("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(h)?(g.boundary=16,g.storage=h.byteLength):R1("WebGLRenderer: Unsupported uniform value type.",h),g}function v(h){let g=h.target;g.removeEventListener("dispose",v);let Z=V.indexOf(g.__bindingPointIndex);V.splice(Z,1),C.deleteBuffer(r[g.id]),delete r[g.id],delete H[g.id]}function y(){for(let h in r)C.deleteBuffer(r[h]);V=[],r={},H={}}return{bind:a,update:L,dispose:y}}var gs=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),D5=null;function Zs(){return D5===null&&(D5=new W4(gs,16,16,y0,b5),D5.name="DFG_LUT",D5.minFilter=I2,D5.magFilter=I2,D5.wrapS=R5,D5.wrapT=R5,D5.generateMipmaps=!1,D5.needsUpdate=!0),D5}var L6=class{constructor(e={}){let{canvas:t=hC(),context:i=null,depth:r=!0,stencil:H=!1,alpha:V=!1,antialias:n=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:L=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:s=!1,outputBufferType:l=r5}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=V;let f=l,c=new Set([S9,v9,x9]),d=new Set([r5,_5,P3,B3,h9,f9]),v=new Uint32Array(4),y=new Int32Array(4),h=new T,g=null,Z=null,b=[],m=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Z5,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,G=null,P=null,U=null;this._outputColorSpace=z2;let K=0,Y=0,r1=null,X=-1,t1=null,i1=new A2,O1=new A2,T1=null,a2=new N1(0),Q1=0,j1=t.width,q=t.height,e1=1,x1=null,D1=null,m1=new A2(0,0,j1,q),G1=new A2(0,0,j1,q),b2=!1,X1=new Z3,J1=!1,o2=!1,$1=new V2,u2=new T,E2=new A2,C5={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},h2=!1;function g2(){return r1===null?e1:1}let E=i;function D2(A,w){return t.getContext(A,w)}let r2,S,p,B,k,W,H1,V1,$,j,n1,_1,M1,L1,y1,E1,k1,O,a1,J,o1,p1,C1;try{let A={alpha:!0,depth:r,stencil:H,antialias:n,premultipliedAlpha:a,preserveDrawingBuffer:L,powerPreference:o,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",s2,!1),t.addEventListener("webglcontextrestored",t2,!1),t.addEventListener("webglcontextcreationerror",A5,!1),E===null){let w="webgl2";if(E=D2(w,A),E===null)throw D2(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}w1()}catch(A){throw t.removeEventListener("webglcontextlost",s2,!1),t.removeEventListener("webglcontextrestored",t2,!1),t.removeEventListener("webglcontextcreationerror",A5,!1),P1("WebGLRenderer: "+A.message),A}function w1(){r2=new Oa(E),r2.init(),o1=new ms(E,r2),S=new xa(E,r2,e,o1),p=new us(E,r2),S.reversedDepthBuffer&&s&&p.buffers.depth.setReversed(!0),G=E.createFramebuffer(),P=E.createFramebuffer(),U=E.createFramebuffer(),B=new Pa(E),k=new is,W=new As(E,r2,p,k,S,o1,B),H1=new wa(R),V1=new BV(E),p1=new ha(E,V1),$=new Ea(E,V1,B,p1),j=new Ia(E,$,V1,p1,B),O=new Ba(E,S,W),y1=new va(k),n1=new Cs(R,H1,r2,S,p1,y1),_1=new vs(R,k),M1=new Hs,L1=new ss(r2),k1=new ma(R,H1,p,j,u,a),E1=new ps(R,j,S),C1=new Ss(E,B,S,p),a1=new fa(E,r2,B),J=new Ra(E,r2,B),B.programs=n1.programs,R.capabilities=S,R.extensions=r2,R.properties=k,R.renderLists=M1,R.shadowMap=E1,R.state=p,R.info=B}f!==r5&&(_=new Da(f,t.width,t.height,n,r,H));let g1=new ue(R,E);this.xr=g1,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let A=r2.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=r2.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return e1},this.setPixelRatio=function(A){A!==void 0&&(e1=A,this.setSize(j1,q,!1))},this.getSize=function(A){return A.set(j1,q)},this.setSize=function(A,w,z=!0){if(g1.isPresenting){R1("WebGLRenderer: Can't change size while VR device is presenting.");return}j1=A,q=w,t.width=Math.floor(A*e1),t.height=Math.floor(w*e1),z===!0&&(t.style.width=A+"px",t.style.height=w+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,A,w)},this.getDrawingBufferSize=function(A){return A.set(j1*e1,q*e1).floor()},this.setDrawingBufferSize=function(A,w,z){j1=A,q=w,e1=z,t.width=Math.floor(A*z),t.height=Math.floor(w*z),this.setViewport(0,0,A,w)},this.setEffects=function(A){if(f===r5){P1("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let w=0;w<A.length;w++)if(A[w].isOutputPass===!0){R1("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(i1)},this.getViewport=function(A){return A.copy(m1)},this.setViewport=function(A,w,z,F){A.isVector4?m1.set(A.x,A.y,A.z,A.w):m1.set(A,w,z,F),p.viewport(i1.copy(m1).multiplyScalar(e1).round())},this.getScissor=function(A){return A.copy(G1)},this.setScissor=function(A,w,z,F){A.isVector4?G1.set(A.x,A.y,A.z,A.w):G1.set(A,w,z,F),p.scissor(O1.copy(G1).multiplyScalar(e1).round())},this.getScissorTest=function(){return b2},this.setScissorTest=function(A){p.setScissorTest(b2=A)},this.setOpaqueSort=function(A){x1=A},this.setTransparentSort=function(A){D1=A},this.getClearColor=function(A){return A.copy(k1.getClearColor())},this.setClearColor=function(){k1.setClearColor(...arguments)},this.getClearAlpha=function(){return k1.getClearAlpha()},this.setClearAlpha=function(){k1.setClearAlpha(...arguments)},this.clear=function(A=!0,w=!0,z=!0){let F=0;if(A){let D=!1;if(r1!==null){let c1=r1.texture.format;D=c.has(c1)}if(D){let c1=r1.texture.type,h1=d.has(c1),d1=k1.getClearColor(),v1=k1.getClearAlpha(),Z1=d1.r,U1=d1.g,q1=d1.b;h1?(v[0]=Z1,v[1]=U1,v[2]=q1,v[3]=v1,E.clearBufferuiv(E.COLOR,0,v)):(y[0]=Z1,y[1]=U1,y[2]=q1,y[3]=v1,E.clearBufferiv(E.COLOR,0,y))}else F|=E.COLOR_BUFFER_BIT}w&&(F|=E.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&E.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",s2,!1),t.removeEventListener("webglcontextrestored",t2,!1),t.removeEventListener("webglcontextcreationerror",A5,!1),k1.dispose(),M1.dispose(),L1.dispose(),k.dispose(),H1.dispose(),j.dispose(),p1.dispose(),C1.dispose(),n1.dispose(),g1.dispose(),g1.removeEventListener("sessionstart",et),g1.removeEventListener("sessionend",tt),E0.stop()};function s2(A){A.preventDefault(),G8("WebGLRenderer: Context Lost."),I=!0}function t2(){G8("WebGLRenderer: Context Restored."),I=!1;let A=B.autoReset,w=E1.enabled,z=E1.autoUpdate,F=E1.needsUpdate,D=E1.type;w1(),B.autoReset=A,E1.enabled=w,E1.autoUpdate=z,E1.needsUpdate=F,E1.type=D}function A5(A){P1("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function w5(A){let w=A.target;w.removeEventListener("dispose",w5),nH(w)}function nH(A){LH(A),k.remove(A)}function LH(A){let w=k.get(A).programs;w!==void 0&&(w.forEach(function(z){n1.releaseProgram(z)}),A.isShaderMaterial&&n1.releaseShaderCache(A))}this.renderBufferDirect=function(A,w,z,F,D,c1){w===null&&(w=C5);let h1=D.isMesh&&D.matrixWorld.determinantAffine()<0,d1=sH(A,w,z,F,D);p.setMaterial(F,h1);let v1=z.index,Z1=1;if(F.wireframe===!0){if(v1=$.getWireframeAttribute(z),v1===void 0)return;Z1=2}let U1=z.drawRange,q1=z.attributes.position,S1=U1.start*Z1,C2=(U1.start+U1.count)*Z1;c1!==null&&(S1=Math.max(S1,c1.start*Z1),C2=Math.min(C2,(c1.start+c1.count)*Z1)),v1!==null?(S1=Math.max(S1,0),C2=Math.min(C2,v1.count)):q1!=null&&(S1=Math.max(S1,0),C2=Math.min(C2,q1.count));let Z2=C2-S1;if(Z2<0||Z2===1/0)return;p1.setup(D,F,d1,z,v1);let d2,L2=a1;if(v1!==null&&(d2=V1.get(v1),L2=J,L2.setIndex(d2)),D.isMesh)F.wireframe===!0?(p.setLineWidth(F.wireframeLinewidth*g2()),L2.setMode(E.LINES)):L2.setMode(E.TRIANGLES);else if(D.isLine){let k2=F.linewidth;k2===void 0&&(k2=1),p.setLineWidth(k2*g2()),D.isLineSegments?L2.setMode(E.LINES):D.isLineLoop?L2.setMode(E.LINE_LOOP):L2.setMode(E.LINE_STRIP)}else D.isPoints?L2.setMode(E.POINTS):D.isSprite&&L2.setMode(E.TRIANGLES);if(D.isBatchedMesh)if(r2.get("WEBGL_multi_draw"))L2.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let k2=D._multiDrawStarts,u1=D._multiDrawCounts,Y2=D._multiDrawCount,K1=v1?V1.get(v1).bytesPerElement:1,s5=k.get(F).currentProgram.getUniforms();for(let O5=0;O5<Y2;O5++)s5.setValue(E,"_gl_DrawID",O5),L2.render(k2[O5]/K1,u1[O5])}else if(D.isInstancedMesh)L2.renderInstances(S1,Z2,D.count);else if(z.isInstancedBufferGeometry){let k2=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,u1=Math.min(z.instanceCount,k2);L2.renderInstances(S1,Z2,u1)}else L2.render(S1,Z2)};function je(A,w,z,F){N!==null&&A.isNodeMaterial&&N.setObject(F,A),J1===!0&&y1.setState(A,z,!1),A.transparent===!0&&A.side===I5&&A.forceSinglePass===!1?(A.side=t5,A.needsUpdate=!0,L4(A,w,F),A.side=S0,A.needsUpdate=!0,L4(A,w,F),A.side=I5):L4(A,w,F)}this.compile=function(A,w,z=null){z===null&&(z=A),N!==null&&N.renderStart(A,w,z),Z=L1.get(z),Z.init(w),m.push(Z),z.traverseVisible(function(D){D.isLight&&D.layers.test(w.layers)&&(Z.pushLight(D),D.castShadow&&Z.pushShadow(D))}),A!==z&&A.traverseVisible(function(D){D.isLight&&D.layers.test(w.layers)&&(Z.pushLight(D),D.castShadow&&Z.pushShadow(D))}),Z.setupLights(),N!==null&&N.updateLights(Z.state.lightsArray),o2=this.localClippingEnabled,J1=y1.init(this.clippingPlanes,o2),J1===!0&&y1.setGlobalState(this.clippingPlanes,w),N!==null&&E1.render(Z.state.shadowsArray,z,w);let F=new Set;return A.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let c1=D.material;if(c1)if(Array.isArray(c1))for(let h1=0;h1<c1.length;h1++){let d1=c1[h1];je(d1,z,w,D),F.add(d1)}else je(c1,z,w,D),F.add(c1)}),Z=m.pop(),N!==null&&N.renderEnd(),F},this.compileAsync=function(A,w,z=null){let F=this.compile(A,w,z);return new Promise(D=>{function c1(){if(F.forEach(function(h1){let v1=k.get(h1).currentProgram;(v1===void 0||v1.isReady())&&F.delete(h1)}),F.size===0){D(A);return}setTimeout(c1,10)}r2.get("KHR_parallel_shader_compile")!==null?c1():setTimeout(c1,10)})};let F6=null;function aH(A){F6&&F6(A)}function et(){E0.stop()}function tt(){E0.start()}let E0=new jC;E0.setAnimationLoop(aH),typeof self<"u"&&E0.setContext(self),this.setAnimationLoop=function(A){F6=A,g1.setAnimationLoop(A),A===null?E0.stop():E0.start()},g1.addEventListener("sessionstart",et),g1.addEventListener("sessionend",tt),this.render=function(A,w){if(w!==void 0&&w.isCamera!==!0){P1("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(A,w);let z=g1.enabled===!0&&g1.isPresenting===!0,F=_!==null&&(r1===null||z)&&_.begin(R,r1);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),g1.enabled===!0&&g1.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(g1.cameraAutoUpdate===!0&&g1.updateCamera(w),w=g1.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,w,r1),Z=L1.get(A,m.length),Z.init(w),Z.state.textureUnits=W.getTextureUnits(),m.push(Z),$1.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),X1.setFromProjectionMatrix($1,v5,w.reversedDepth),o2=this.localClippingEnabled,J1=y1.init(this.clippingPlanes,o2),g=M1.get(A,b.length),g.init(),b.push(g),g1.enabled===!0&&g1.isPresenting===!0){let h1=R.xr.getDepthSensingMesh();h1!==null&&D6(h1,w,-1/0,R.sortObjects)}D6(A,w,0,R.sortObjects),g.finish(),N!==null&&N.updateLights(Z.state.lightsArray),R.sortObjects===!0&&g.sort(x1,D1),h2=g1.enabled===!1||g1.isPresenting===!1||g1.hasDepthSensing()===!1,h2&&k1.addToRenderList(g,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J1===!0&&y1.beginShadows();let D=Z.state.shadowsArray;if(E1.render(D,A,w),J1===!0&&y1.endShadows(),(F&&_.hasRenderPass())===!1){let h1=g.opaque,d1=g.transmissive;if(Z.setupLights(),w.isArrayCamera){let v1=w.cameras;if(d1.length>0)for(let Z1=0,U1=v1.length;Z1<U1;Z1++){let q1=v1[Z1];it(h1,d1,A,q1)}h2&&k1.render(A);for(let Z1=0,U1=v1.length;Z1<U1;Z1++){let q1=v1[Z1];Ct(g,A,q1,q1.viewport)}}else d1.length>0&&it(h1,d1,A,w),h2&&k1.render(A),Ct(g,A,w)}r1!==null&&Y===0&&(W.updateMultisampleRenderTarget(r1),W.updateRenderTargetMipmap(r1)),F&&_.end(R),A.isScene===!0&&A.onAfterRender(R,A,w),p1.resetDefaultState(),X=-1,t1=null,m.pop(),m.length>0?(Z=m[m.length-1],W.setTextureUnits(Z.state.textureUnits),J1===!0&&y1.setGlobalState(R.clippingPlanes,Z.state.camera)):Z=null,b.pop(),b.length>0?g=b[b.length-1]:g=null,N!==null&&N.renderEnd()};function D6(A,w,z,F){if(A.visible===!1)return;if(A.layers.test(w.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(w);else if(A.isLightProbeGrid)Z.pushLightProbeGrid(A);else if(A.isLight)Z.pushLight(A),A.castShadow&&Z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(X1)){F&&E2.setFromMatrixPosition(A.matrixWorld).applyMatrix4($1);let h1=j.update(A),d1=A.material;d1.visible&&g.push(A,h1,d1,z,E2.z,null,w)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(X1))){let h1=j.update(A),d1=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),E2.copy(A.boundingSphere.center)):(h1.boundingSphere===null&&h1.computeBoundingSphere(),E2.copy(h1.boundingSphere.center)),E2.applyMatrix4(A.matrixWorld).applyMatrix4($1)),Array.isArray(d1)){let v1=h1.groups;for(let Z1=0,U1=v1.length;Z1<U1;Z1++){let q1=v1[Z1],S1=d1[q1.materialIndex];S1&&S1.visible&&g.push(A,h1,S1,z,E2.z,q1,w)}}else d1.visible&&g.push(A,h1,d1,z,E2.z,null,w)}}let c1=A.children;for(let h1=0,d1=c1.length;h1<d1;h1++)D6(c1[h1],w,z,F)}function Ct(A,w,z,F){let{opaque:D,transmissive:c1,transparent:h1}=A;Z.setupLightsView(z),J1===!0&&y1.setGlobalState(R.clippingPlanes,z),F&&p.viewport(i1.copy(F)),D.length>0&&n4(D,w,z),c1.length>0&&n4(c1,w,z),h1.length>0&&n4(h1,w,z),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function it(A,w,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(Z.state.transmissionRenderTarget[F.id]===void 0){let S1=r2.has("EXT_color_buffer_half_float")||r2.has("EXT_color_buffer_float");Z.state.transmissionRenderTarget[F.id]=new i5(1,1,{generateMipmaps:!0,type:S1?b5:r5,minFilter:Z0,samples:Math.max(4,S.samples),stencilBuffer:H,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Y1.workingColorSpace})}let c1=Z.state.transmissionRenderTarget[F.id],h1=F.viewport||i1;c1.setSize(h1.z*R.transmissionResolutionScale,h1.w*R.transmissionResolutionScale);let d1=R.getRenderTarget(),v1=R.getActiveCubeFace(),Z1=R.getActiveMipmapLevel();R.setRenderTarget(c1),R.getClearColor(a2),Q1=R.getClearAlpha(),Q1<1&&R.setClearColor(16777215,.5),R.clear(),h2&&k1.render(z);let U1=R.toneMapping;R.toneMapping=Z5;let q1=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),Z.setupLightsView(F),J1===!0&&y1.setGlobalState(R.clippingPlanes,F),n4(A,z,F),W.updateMultisampleRenderTarget(c1),W.updateRenderTargetMipmap(c1),r2.has("WEBGL_multisampled_render_to_texture")===!1){let S1=!1;for(let C2=0,Z2=w.length;C2<Z2;C2++){let d2=w[C2],{object:L2,geometry:k2,material:u1,group:Y2}=d2;if(u1.side===I5&&L2.layers.test(F.layers)){let K1=u1.side;u1.side=t5,u1.needsUpdate=!0,rt(L2,z,F,k2,u1,Y2),u1.side=K1,u1.needsUpdate=!0,S1=!0}}S1===!0&&(W.updateMultisampleRenderTarget(c1),W.updateRenderTargetMipmap(c1))}R.setRenderTarget(d1,v1,Z1),R.setClearColor(a2,Q1),q1!==void 0&&(F.viewport=q1),R.toneMapping=U1}function n4(A,w,z){let F=w.isScene===!0?w.overrideMaterial:null;for(let D=0,c1=A.length;D<c1;D++){let h1=A[D],{object:d1,geometry:v1,group:Z1}=h1,U1=h1.material;U1.allowOverride===!0&&F!==null&&(U1=F),d1.layers.test(z.layers)&&rt(d1,w,z,v1,U1,Z1)}}function rt(A,w,z,F,D,c1){N!==null&&D.isNodeMaterial&&N.setObject(A,D),A.onBeforeRender(R,w,z,F,D,c1),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),D.onBeforeRender(R,w,z,F,A,c1),D.transparent===!0&&D.side===I5&&D.forceSinglePass===!1?(D.side=t5,D.needsUpdate=!0,R.renderBufferDirect(z,w,F,D,A,c1),D.side=S0,D.needsUpdate=!0,R.renderBufferDirect(z,w,F,D,A,c1),D.side=I5):R.renderBufferDirect(z,w,F,D,A,c1),A.onAfterRender(R,w,z,F,D,c1)}function L4(A,w,z){w.isScene!==!0&&(w=C5);let F=k.get(A),D=Z.state.lights,c1=Z.state.shadowsArray,h1=D.state.version,d1=n1.getParameters(A,D.state,c1,w,z,Z.state.lightProbeGridArray),v1=n1.getProgramCacheKey(d1),Z1=F.programs;F.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?w.environment:null,F.fog=w.fog;let U1=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;F.envMap=H1.get(A.envMap||F.environment,U1),F.envMapRotation=F.environment!==null&&A.envMap===null?w.environmentRotation:A.envMapRotation,Z1===void 0&&(A.addEventListener("dispose",w5),Z1=new Map,F.programs=Z1);let q1=Z1.get(v1);if(q1!==void 0){if(F.currentProgram===q1&&F.lightsStateVersion===h1)return Vt(A,d1),q1}else d1.uniforms=n1.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,z,d1),A.onBeforeCompile(d1,R),q1=n1.acquireProgram(d1,v1),Z1.set(v1,q1),F.uniforms=d1.uniforms;let S1=F.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(S1.clippingPlanes=y1.uniform),Vt(A,d1),F.needsLights=lH(A),F.lightsStateVersion=h1,F.needsLights&&(S1.ambientLightColor.value=D.state.ambient,S1.lightProbe.value=D.state.probe,S1.sunLights.value=D.state.sun,S1.sunLightShadows.value=D.state.sunShadow,S1.directionalLights.value=D.state.directional,S1.directionalLightShadows.value=D.state.directionalShadow,S1.spotLights.value=D.state.spot,S1.spotLightShadows.value=D.state.spotShadow,S1.rectAreaLights.value=D.state.rectArea,S1.ltc_1.value=D.state.rectAreaLTC1,S1.ltc_2.value=D.state.rectAreaLTC2,S1.pointLights.value=D.state.point,S1.pointLightShadows.value=D.state.pointShadow,S1.hemisphereLights.value=D.state.hemi,S1.sunShadowMatrix.value=D.state.sunShadowMatrix,S1.sunShadowCascade.value=D.state.sunShadowCascade,S1.directionalShadowMatrix.value=D.state.directionalShadowMatrix,S1.spotLightMatrix.value=D.state.spotLightMatrix,S1.spotLightMap.value=D.state.spotLightMap,S1.pointShadowMatrix.value=D.state.pointShadowMatrix),F.lightProbeGrid=Z.state.lightProbeGridArray.length>0,F.currentProgram=q1,F.uniformsList=null,q1}function Ht(A){if(A.uniformsList===null){let w=A.currentProgram.getUniforms();A.uniformsList=D3.seqWithValue(w.seq,A.uniforms)}return A.uniformsList}function Vt(A,w){let z=k.get(A);z.outputColorSpace=w.outputColorSpace,z.batching=w.batching,z.batchingColor=w.batchingColor,z.instancing=w.instancing,z.instancingColor=w.instancingColor,z.instancingMorph=w.instancingMorph,z.skinning=w.skinning,z.morphTargets=w.morphTargets,z.morphNormals=w.morphNormals,z.morphColors=w.morphColors,z.morphTargetsCount=w.morphTargetsCount,z.numClippingPlanes=w.numClippingPlanes,z.numIntersection=w.numClipIntersection,z.vertexAlphas=w.vertexAlphas,z.vertexTangents=w.vertexTangents,z.toneMapping=w.toneMapping}function oH(A,w){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;h.setFromMatrixPosition(w.matrixWorld);for(let z=0,F=A.length;z<F;z++){let D=A[z];if(D.texture!==null&&D.boundingBox.containsPoint(h))return D}return null}function sH(A,w,z,F,D){w.isScene!==!0&&(w=C5),W.resetTextureUnits();let c1=w.fog,h1=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?w.environment:null,d1=r1===null?R.outputColorSpace:r1.isXRRenderTarget===!0?r1.texture.colorSpace:Y1.workingColorSpace,v1=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Z1=H1.get(F.envMap||h1,v1),U1=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,q1=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),S1=!!z.morphAttributes.position,C2=!!z.morphAttributes.normal,Z2=!!z.morphAttributes.color,d2=Z5;F.toneMapped&&(r1===null||r1.isXRRenderTarget===!0)&&(d2=R.toneMapping);let L2=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,k2=L2!==void 0?L2.length:0,u1=k.get(F),Y2=Z.state.lights;if(J1===!0&&(o2===!0||A!==t1)){let M2=A===t1&&F.id===X;y1.setState(F,A,M2)}let K1=!1;F.version===u1.__version?(u1.needsLights&&u1.lightsStateVersion!==Y2.state.version||u1.outputColorSpace!==d1||D.isBatchedMesh&&u1.batching===!1||!D.isBatchedMesh&&u1.batching===!0||D.isBatchedMesh&&u1.batchingColor===!0&&D._colorsTexture===null||D.isBatchedMesh&&u1.batchingColor===!1&&D._colorsTexture!==null||D.isInstancedMesh&&u1.instancing===!1||!D.isInstancedMesh&&u1.instancing===!0||D.isSkinnedMesh&&u1.skinning===!1||!D.isSkinnedMesh&&u1.skinning===!0||D.isInstancedMesh&&u1.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&u1.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&u1.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&u1.instancingMorph===!1&&D.morphTexture!==null||u1.envMap!==Z1||F.fog===!0&&u1.fog!==c1||u1.numClippingPlanes!==void 0&&(u1.numClippingPlanes!==y1.numPlanes||u1.numIntersection!==y1.numIntersection)||u1.vertexAlphas!==U1||u1.vertexTangents!==q1||u1.morphTargets!==S1||u1.morphNormals!==C2||u1.morphColors!==Z2||u1.toneMapping!==d2||u1.morphTargetsCount!==k2||!!u1.lightProbeGrid!=Z.state.lightProbeGridArray.length>0)&&(K1=!0):(K1=!0,u1.__version=F.version);let s5=u1.currentProgram;K1===!0&&(s5=L4(F,w,D),N&&F.isNodeMaterial&&N.onUpdateProgram(F,s5,u1));let O5=!1,L0=!1,e3=!1,H2=s5.getUniforms(),x2=u1.uniforms;if(p.useProgram(s5.program)&&(O5=!0,L0=!0,e3=!0),F.id!==X&&(X=F.id,L0=!0),u1.needsLights){let M2=oH(Z.state.lightProbeGridArray,D);u1.lightProbeGrid!==M2&&(u1.lightProbeGrid=M2,L0=!0)}if(O5||t1!==A){p.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),H2.setValue(E,"projectionMatrix",A.projectionMatrix),H2.setValue(E,"viewMatrix",A.matrixWorldInverse);let o0=H2.map.cameraPosition;o0!==void 0&&o0.setValue(E,u2.setFromMatrixPosition(A.matrixWorld)),S.logarithmicDepthBuffer&&H2.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&H2.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),t1!==A&&(t1=A,L0=!0,e3=!0)}if(u1.needsLights&&(Y2.state.sunShadowMap.length>0&&H2.setValue(E,"sunShadowMap",Y2.state.sunShadowMap,W),Y2.state.directionalShadowMap.length>0&&H2.setValue(E,"directionalShadowMap",Y2.state.directionalShadowMap,W),Y2.state.spotShadowMap.length>0&&H2.setValue(E,"spotShadowMap",Y2.state.spotShadowMap,W),Y2.state.pointShadowMap.length>0&&H2.setValue(E,"pointShadowMap",Y2.state.pointShadowMap,W)),D.isSkinnedMesh){H2.setOptional(E,D,"bindMatrix"),H2.setOptional(E,D,"bindMatrixInverse");let M2=D.skeleton;M2&&(M2.boneTexture===null&&M2.computeBoneTexture(),H2.setValue(E,"boneTexture",M2.boneTexture,W))}D.isBatchedMesh&&(H2.setOptional(E,D,"batchingTexture"),H2.setValue(E,"batchingTexture",D._matricesTexture,W),H2.setOptional(E,D,"batchingIdTexture"),H2.setValue(E,"batchingIdTexture",D._indirectTexture,W),H2.setOptional(E,D,"batchingColorTexture"),D._colorsTexture!==null&&H2.setValue(E,"batchingColorTexture",D._colorsTexture,W));let a0=z.morphAttributes;if((a0.position!==void 0||a0.normal!==void 0||a0.color!==void 0)&&O.update(D,z,s5),(L0||u1.receiveShadow!==D.receiveShadow)&&(u1.receiveShadow=D.receiveShadow,H2.setValue(E,"receiveShadow",D.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&w.environment!==null&&(x2.envMapIntensity.value=w.environmentIntensity),x2.dfgLUT!==void 0&&(x2.dfgLUT.value=Zs()),L0){if(H2.setValue(E,"toneMappingExposure",R.toneMappingExposure),u1.needsLights&&MH(x2,e3),c1&&F.fog===!0&&_1.refreshFogUniforms(x2,c1),_1.refreshMaterialUniforms(x2,F,e1,q,Z.state.transmissionRenderTarget[A.id]),u1.needsLights&&u1.lightProbeGrid){let M2=u1.lightProbeGrid;x2.probesSH.value=M2.texture,x2.probesMin.value.copy(M2.boundingBox.min),x2.probesMax.value.copy(M2.boundingBox.max),x2.probesResolution.value.copy(M2.resolution)}D3.upload(E,Ht(u1),x2,W)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(D3.upload(E,Ht(u1),x2,W),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&H2.setValue(E,"center",D.center),H2.setValue(E,"modelViewMatrix",D.modelViewMatrix),H2.setValue(E,"normalMatrix",D.normalMatrix),H2.setValue(E,"modelMatrix",D.matrixWorld),F.uniformsGroups!==void 0){let M2=F.uniformsGroups;for(let o0=0,t3=M2.length;o0<t3;o0++){let Lt=M2[o0];C1.update(Lt,s5),C1.bind(Lt,s5)}}return s5}function MH(A,w){A.ambientLightColor.needsUpdate=w,A.lightProbe.needsUpdate=w,A.sunLights.needsUpdate=w,A.sunLightShadows.needsUpdate=w,A.directionalLights.needsUpdate=w,A.directionalLightShadows.needsUpdate=w,A.pointLights.needsUpdate=w,A.pointLightShadows.needsUpdate=w,A.spotLights.needsUpdate=w,A.spotLightShadows.needsUpdate=w,A.rectAreaLights.needsUpdate=w,A.hemisphereLights.needsUpdate=w}function lH(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return r1},this.setRenderTargetTextures=function(A,w,z){let F=k.get(A);F.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=w,k.get(A.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,w){let z=k.get(A);z.__webglFramebuffer=w,z.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(A,w=0,z=0){r1=A,K=w,Y=z;let F=null,D=!1,c1=!1;if(A){let d1=k.get(A);if(d1.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(E.FRAMEBUFFER,d1.__webglFramebuffer),i1.copy(A.viewport),O1.copy(A.scissor),T1=A.scissorTest,p.viewport(i1),p.scissor(O1),p.setScissorTest(T1),X=-1;return}else if(d1.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(d1.__hasExternalTextures)W.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let U1=A.depthTexture;if(d1.__boundDepthTexture!==U1){if(U1!==null&&k.has(U1)&&(A.width!==U1.image.width||A.height!==U1.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}let v1=A.texture;(v1.isData3DTexture||v1.isDataArrayTexture||v1.isCompressedArrayTexture)&&(c1=!0);let Z1=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Z1[w])?F=Z1[w][z]:F=Z1[w],D=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?F=k.get(A).__webglMultisampledFramebuffer:Array.isArray(Z1)?F=Z1[z]:F=Z1,i1.copy(A.viewport),O1.copy(A.scissor),T1=A.scissorTest}else i1.copy(m1).multiplyScalar(e1).floor(),O1.copy(G1).multiplyScalar(e1).floor(),T1=b2;if(z!==0&&(F=G),p.bindFramebuffer(E.FRAMEBUFFER,F)&&p.drawBuffers(A,F),p.viewport(i1),p.scissor(O1),p.setScissorTest(T1),D){let d1=k.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+w,d1.__webglTexture,z)}else if(c1){let d1=w;for(let v1=0;v1<A.textures.length;v1++){let Z1=k.get(A.textures[v1]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+v1,Z1.__webglTexture,z,d1)}}else if(A!==null&&z!==0){let d1=k.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,d1.__webglTexture,z)}X=-1};function nt(A){let w=k.get(A);return(w.__readFormat!==A.format||w.__readType!==A.type)&&(w.__readFormat=A.format,w.__readType=A.type,w.__formatReadable=S.textureFormatReadable(A.format),w.__typeReadable=S.textureTypeReadable(A.type)),w}this.readRenderTargetPixels=function(A,w,z,F,D,c1,h1,d1=0){if(!(A&&A.isWebGLRenderTarget)){P1("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let v1=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&h1!==void 0&&(v1=v1[h1]),v1){p.bindFramebuffer(E.FRAMEBUFFER,v1);try{let Z1=A.textures[d1],U1=Z1.format,q1=Z1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+d1);let S1=nt(Z1);if(S1.__formatReadable===!1){P1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(S1.__typeReadable===!1){P1("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=A.width-F&&z>=0&&z<=A.height-D&&E.readPixels(w,z,F,D,o1.convert(U1),o1.convert(q1),c1)}finally{let Z1=r1!==null?k.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,Z1)}}},this.readRenderTargetPixelsAsync=async function(A,w,z,F,D,c1,h1,d1=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let v1=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&h1!==void 0&&(v1=v1[h1]),v1)if(w>=0&&w<=A.width-F&&z>=0&&z<=A.height-D){p.bindFramebuffer(E.FRAMEBUFFER,v1);let Z1=A.textures[d1],U1=Z1.format,q1=Z1.type;A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+d1);let S1=nt(Z1);if(S1.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(S1.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let C2=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,C2),E.bufferData(E.PIXEL_PACK_BUFFER,c1.byteLength,E.STREAM_READ),E.readPixels(w,z,F,D,o1.convert(U1),o1.convert(q1),0),E.bindBuffer(E.PIXEL_PACK_BUFFER,null);let Z2=r1!==null?k.get(r1).__webglFramebuffer:null;p.bindFramebuffer(E.FRAMEBUFFER,Z2);let d2=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await xC(E,d2,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,C2),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,c1),E.bindBuffer(E.PIXEL_PACK_BUFFER,null),E.deleteBuffer(C2),E.deleteSync(d2),c1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,w=null,z=0){let F=Math.pow(2,-z),D=Math.floor(A.image.width*F),c1=Math.floor(A.image.height*F),h1=w!==null?w.x:0,d1=w!==null?w.y:0;W.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,z,0,0,h1,d1,D,c1),p.unbindTexture()},this.copyTextureToTexture=function(A,w,z=null,F=null,D=0,c1=0){let h1,d1,v1,Z1,U1,q1,S1,C2,Z2,d2=A.isCompressedTexture?A.mipmaps[c1]:A.image;if(z!==null)h1=z.max.x-z.min.x,d1=z.max.y-z.min.y,v1=z.isBox3?z.max.z-z.min.z:1,Z1=z.min.x,U1=z.min.y,q1=z.isBox3?z.min.z:0;else{let x2=Math.pow(2,-D);h1=Math.floor(d2.width*x2),d1=Math.floor(d2.height*x2),A.isDataArrayTexture?v1=d2.depth:A.isData3DTexture?v1=Math.floor(d2.depth*x2):v1=1,Z1=0,U1=0,q1=0}F!==null?(S1=F.x,C2=F.y,Z2=F.z):(S1=0,C2=0,Z2=0);let L2=o1.convert(w.format),k2=o1.convert(w.type),u1;w.isData3DTexture?(W.setTexture3D(w,0),u1=E.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(W.setTexture2DArray(w,0),u1=E.TEXTURE_2D_ARRAY):(W.setTexture2D(w,0),u1=E.TEXTURE_2D),p.activeTexture(E.TEXTURE0),p.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,w.flipY),p.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),p.pixelStorei(E.UNPACK_ALIGNMENT,w.unpackAlignment);let Y2=p.getParameter(E.UNPACK_ROW_LENGTH),K1=p.getParameter(E.UNPACK_IMAGE_HEIGHT),s5=p.getParameter(E.UNPACK_SKIP_PIXELS),O5=p.getParameter(E.UNPACK_SKIP_ROWS),L0=p.getParameter(E.UNPACK_SKIP_IMAGES);p.pixelStorei(E.UNPACK_ROW_LENGTH,d2.width),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,d2.height),p.pixelStorei(E.UNPACK_SKIP_PIXELS,Z1),p.pixelStorei(E.UNPACK_SKIP_ROWS,U1),p.pixelStorei(E.UNPACK_SKIP_IMAGES,q1);let e3=A.isDataArrayTexture||A.isData3DTexture,H2=w.isDataArrayTexture||w.isData3DTexture;if(A.isDepthTexture){let x2=k.get(A),a0=k.get(w),M2=k.get(x2.__renderTarget),o0=k.get(a0.__renderTarget);p.bindFramebuffer(E.READ_FRAMEBUFFER,M2.__webglFramebuffer),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,o0.__webglFramebuffer);for(let t3=0;t3<v1;t3++)e3&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(A).__webglTexture,D,q1+t3),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(w).__webglTexture,c1,Z2+t3)),E.blitFramebuffer(Z1,U1,h1,d1,S1,C2,h1,d1,E.DEPTH_BUFFER_BIT,E.NEAREST);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(D!==0||A.isRenderTargetTexture||k.has(A)){let x2=k.get(A),a0=k.get(w);p.bindFramebuffer(E.READ_FRAMEBUFFER,P),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,U);for(let M2=0;M2<v1;M2++)e3?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,x2.__webglTexture,D,q1+M2):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,x2.__webglTexture,D),H2?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,a0.__webglTexture,c1,Z2+M2):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,a0.__webglTexture,c1),D!==0?E.blitFramebuffer(Z1,U1,h1,d1,S1,C2,h1,d1,E.COLOR_BUFFER_BIT,E.NEAREST):H2?E.copyTexSubImage3D(u1,c1,S1,C2,Z2+M2,Z1,U1,h1,d1):E.copyTexSubImage2D(u1,c1,S1,C2,Z1,U1,h1,d1);p.bindFramebuffer(E.READ_FRAMEBUFFER,null),p.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else H2?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(u1,c1,S1,C2,Z2,h1,d1,v1,L2,k2,d2.data):w.isCompressedArrayTexture?E.compressedTexSubImage3D(u1,c1,S1,C2,Z2,h1,d1,v1,L2,d2.data):E.texSubImage3D(u1,c1,S1,C2,Z2,h1,d1,v1,L2,k2,d2):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,c1,S1,C2,h1,d1,L2,k2,d2.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,c1,S1,C2,d2.width,d2.height,L2,d2.data):E.texSubImage2D(E.TEXTURE_2D,c1,S1,C2,h1,d1,L2,k2,d2);p.pixelStorei(E.UNPACK_ROW_LENGTH,Y2),p.pixelStorei(E.UNPACK_IMAGE_HEIGHT,K1),p.pixelStorei(E.UNPACK_SKIP_PIXELS,s5),p.pixelStorei(E.UNPACK_SKIP_ROWS,O5),p.pixelStorei(E.UNPACK_SKIP_IMAGES,L0),c1===0&&w.generateMipmaps&&E.generateMipmap(u1),p.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),p.unbindTexture()},this.resetState=function(){K=0,Y=0,r1=null,p.reset(),p1.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return v5}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Y1._getDrawingBufferColorSpace(e),t.unpackColorSpace=Y1._getUnpackColorSpace()}};var W7=new T;function p5(C,e,t,i,r,H){let V=2*Math.PI*r/4,n=Math.max(H-2*r,0),a=Math.PI/4;W7.copy(e),W7[i]=0,W7.normalize();let L=.5*V/(V+n),o=1-W7.angleTo(C)/a;return Math.sign(W7[t])===1?o*L:n/(V+n)+L+L*(1-o)}var s6=class C extends h0{constructor(e=1,t=1,i=1,r=2,H=.1){let V=r*2+1;if(H=Math.min(e/2,t/2,i/2,H),super(1,1,1,V,V,V),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:H},V===1)return;let n=this.toNonIndexed();this.index=null,this.attributes.position=n.attributes.position,this.attributes.normal=n.attributes.normal,this.attributes.uv=n.attributes.uv;let a=new T,L=new T,o=new T(e,t,i).divideScalar(2).subScalar(H),M=this.attributes.position.array,s=this.attributes.normal.array,l=this.attributes.uv.array,u=M.length/6,f=new T,c=.5/V;for(let d=0,v=0;d<M.length;d+=3,v+=2)switch(a.fromArray(M,d),L.copy(a),L.x-=Math.sign(L.x)*c,L.y-=Math.sign(L.y)*c,L.z-=Math.sign(L.z)*c,L.normalize(),M[d+0]=o.x*Math.sign(a.x)+L.x*H,M[d+1]=o.y*Math.sign(a.y)+L.y*H,M[d+2]=o.z*Math.sign(a.z)+L.z*H,s[d+0]=L.x,s[d+1]=L.y,s[d+2]=L.z,Math.floor(d/u)){case 0:f.set(1,0,0),l[v+0]=p5(f,L,"z","y",H,i),l[v+1]=1-p5(f,L,"y","z",H,t);break;case 1:f.set(-1,0,0),l[v+0]=1-p5(f,L,"z","y",H,i),l[v+1]=1-p5(f,L,"y","z",H,t);break;case 2:f.set(0,1,0),l[v+0]=1-p5(f,L,"x","z",H,e),l[v+1]=p5(f,L,"z","x",H,i);break;case 3:f.set(0,-1,0),l[v+0]=1-p5(f,L,"x","z",H,e),l[v+1]=1-p5(f,L,"z","x",H,i);break;case 4:f.set(0,0,1),l[v+0]=1-p5(f,L,"x","y",H,e),l[v+1]=1-p5(f,L,"y","x",H,t);break;case 5:f.set(0,0,-1),l[v+0]=p5(f,L,"x","y",H,e),l[v+1]=1-p5(f,L,"y","x",H,t);break}}static fromJSON(e){return new C(e.width,e.height,e.depth,e.segments,e.radius)}};var y2=["U","F","R","B","L","D"],q7={U:"#f2f2ee",D:"#ffd21f",F:"#11a85c",B:"#2563d9",R:"#e0303a",L:"#ff7a1a"},M6={U:[0,1,0],D:[0,-1,0],R:[1,0,0],L:[-1,0,0],F:[0,0,1],B:[0,0,-1]},Vi={U:[0,0,-1],D:[0,0,1],F:[0,1,0],B:[0,1,0],R:[0,1,0],L:[0,1,0]},ys=["x","y","z"],N5=Math.PI/2;function ni(C){let e=[Math.abs(C.x),Math.abs(C.y),Math.abs(C.z)],t=e.indexOf(Math.max(...e)),i=Math.sign([C.x,C.y,C.z][t]);return[["L","R"],["D","U"],["B","F"]][t][i>0?1:0]}var l6=C=>Math.round(C*2)/2;function bs(C,e,t){let i=(t-1)/2,r,H;switch(C){case"U":r=e.x,H=e.z;break;case"D":r=e.x,H=-e.z;break;case"F":r=e.x,H=-e.y;break;case"B":r=-e.x,H=-e.y;break;case"R":r=-e.z,H=-e.y;break;case"L":r=e.z,H=-e.y;break}return Math.round(H+i)*t+Math.round(r+i)}function Ts(C,e){let t=C/2,i=e,r=new y3;r.moveTo(-t+i,-t),r.lineTo(t-i,-t),r.quadraticCurveTo(t,-t,t,-t+i),r.lineTo(t,t-i),r.quadraticCurveTo(t,t,t-i,t),r.lineTo(-t+i,t),r.quadraticCurveTo(-t,t,-t,t-i),r.lineTo(-t,-t+i),r.quadraticCurveTo(-t,-t,-t+i,-t);let H=new _7(r,6),V=H.attributes.position,n=H.attributes.uv;for(let a=0;a<V.count;a++)n.setXY(a,V.getX(a)/C+.5,V.getY(a)/C+.5);return H}function X7(C,e){let t=document.createElement("canvas");t.width=t.height=C,e(t.getContext("2d"),C);let i=new p7(t);return i.colorSpace=z2,i.anisotropy=4,i}function ws(C){let e=parseInt(C.slice(1),16);return(.299*(e>>16)+.587*(e>>8&255)+.114*(e&255))/255}var d6=class{constructor(e){this.el=e,this.renderer=new L6({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=z2,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.style.touchAction="none",this.scene=new o7,this.camera=new G2(30,1,.1,100),this.camera.position.set(0,0,15),this.scene.add(new w7(16777215,1.6));let t=new O3(16777215,1.9);t.position.set(4,7,9),this.scene.add(t);let i=new O3(16777215,.5);i.position.set(-6,-3,4),this.scene.add(i),this.root=new S5,this.scene.add(this.root),this.baseView=new v2().setFromEuler(new d5(.5,-.65,0,"XYZ")),this.root.quaternion.copy(this.baseView),this.raycaster=new O7,this.tweens=[],this.queue=[],this.turning=!1,this.dirty=!0,this.autoSpin=!1,this.mode="view",this.allowOrbitInView=!0,this.onTap=null,this.onSwipe=null,this.labelCache=new Map,this.labelFn=null,this.n=3,this._buildTextures(),this._build(),this._bindInput(),this.fill=.78,new ResizeObserver(()=>this.resize()).observe(e),this.resize();let r=H=>{this._frame(H),requestAnimationFrame(r)};requestAnimationFrame(r)}_buildTextures(){this.texQ=X7(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.fillStyle="#9aa3b5",e.font='700 74px -apple-system, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("?",t/2,t/2+4)}),this.texX=X7(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.38)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(40,40),e.lineTo(88,88),e.moveTo(88,40),e.lineTo(40,88),e.stroke()}),this.texSkip=X7(128,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.strokeStyle="rgba(0,0,0,0.42)",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(38,64),e.lineTo(90,64),e.stroke()})}setSize(e){if(e=e===2?2:3,e!==this.n){this.tweens=[],this.queue=[],this.turning=!1;for(let t of[...this.root.children])this.root.remove(t);this.n=e,this._build(),this.resize()}}_build(){let e=this.n,t=(e-1)/2,i=[];for(let n=0;n<e;n++)i.push(n-t);let r=new s6(.97,.97,.97,3,.12),H=new T3({color:1316380,roughness:.55,metalness:.1}),V=Ts(.84,.13);this.cubies=[],this.stickers=[];for(let n of i)for(let a of i)for(let L of i){if(Math.max(Math.abs(n),Math.abs(a),Math.abs(L))<t)continue;let o=new S5;o.position.set(n,a,L),o.userData.home=new T(n,a,L),o.add(new e5(r,H));for(let M of y2){let s=M6[M];if(!(s[0]&&s[0]*t===n||s[1]&&s[1]*t===a||s[2]&&s[2]*t===L))continue;let l=new T3({color:q7[M],roughness:.38,metalness:0}),u=new e5(V,l),f=new T(...s),c=new T(...Vi[M]),d=new T().crossVectors(c,f);u.quaternion.setFromRotationMatrix(new V2().makeBasis(d,c,f)),u.position.copy(f).multiplyScalar(.487),u.userData={color:M,center:e===3&&Math.abs(n)+Math.abs(a)+Math.abs(L)===1},o.add(u),this.stickers.push(u)}this.root.add(o),this.cubies.push(o)}}resize(){let e=this.el.clientWidth||1,t=this.el.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t;let i=2.62*this.n/3,r=X8.degToRad(this.camera.fov)/2,H=Math.atan(Math.tan(r)*this.camera.aspect),V=Math.min(r,H);this.camera.position.z=i/Math.sin(V*this.fill),this.camera.updateProjectionMatrix(),this.dirty=!0}reset(){this.tweens=[],this.queue=[],this.turning=!1;for(let e of this.cubies)e.parent!==this.root&&this.root.attach(e);for(let e of[...this.root.children])this.cubies.includes(e)||this.root.remove(e);for(let e of this.cubies)e.position.copy(e.userData.home),e.quaternion.identity();for(let e of this.stickers)e.scale.set(1,1,1);this.dirty=!0}info(e){let t=e.getWorldQuaternion(new v2),i=this.root.getWorldQuaternion(new v2).invert(),r=new T(0,0,1).applyQuaternion(t).applyQuaternion(i),H=ni(r),V=e.parent,n=bs(H,V.position,this.n);return{sticker:e,face:H,idx:n,key:H+n,color:e.userData.color,cubie:V}}cells(){return this.stickers.map(e=>this.info(e))}isSolved(){let e={};for(let t of this.stickers){let{face:i,color:r}=this.info(t);if(e[i]&&e[i]!==r)return!1;e[i]=r}return!0}setLook(e,t,i){let r=e.material,H=new N1(q7[e.userData.color]),V=null,n=H;i?(V=i,n=new N1(16777215)):t==="hidden"?(V=this._texQ(this._rotOf(e)),n=new N1("#5d6679")):t==="locked"?(V=null,n=new N1("#2b303b")):t==="wrong"?(V=this.texX,n=H.clone().multiplyScalar(.55)):t==="skip"&&(V=this.texSkip,n=new N1("#5d6679")),r.map!==V&&(r.map=V,r.needsUpdate=!0),r.color.copy(n),i&&t==="locked"&&r.color.setScalar(.45),this.dirty=!0}_rotOf(e){let t=e.getWorldQuaternion(new v2),i=this.root.getWorldQuaternion(new v2).invert(),r=new T(0,1,0).applyQuaternion(t).applyQuaternion(i),H=new T(0,0,1).applyQuaternion(t).applyQuaternion(i),V=ni(H),n=new T(...Vi[V]),a=Math.atan2(new T().crossVectors(n,r).dot(new T(...M6[V])),n.dot(r));return(Math.round(a/N5)%4+4)%4}_texQ(e){if(this.qTexs=this.qTexs||[],!this.qTexs[e]){let t=this.texQ.clone();t.center.set(.5,.5),t.rotation=-e*N5,t.needsUpdate=!0,this.qTexs[e]=t}return this.qTexs[e]}hiddenLabel(e,t=0){let i="h|"+e+"|"+t;if(this.labelCache.has(i))return this.labelCache.get(i);let r=X7(256,(H,V)=>{H.fillStyle="#5d6679",H.fillRect(0,0,V,V);let n=new Path2D(e);H.save(),H.translate(V*.22,V*.22),H.scale(V*.56/24,V*.56/24),H.fillStyle="rgba(255,255,255,0.62)",H.fill(n),H.restore()});return t&&(r.center.set(.5,.5),r.rotation=-t*N5,r.needsUpdate=!0),this.labelCache.set(i,r),r}centerLabel(e,t,i,r=0){let H=e+"|"+(t||"")+"|"+(i||"");if(r){let L=H+"|"+r;if(!this.labelCache.has(L)){let o=this.centerLabel(e,t,i,0).clone();o.center.set(.5,.5),o.rotation=-r*N5,o.needsUpdate=!0,this.labelCache.set(L,o)}return this.labelCache.get(L)}if(this.labelCache.has(H))return this.labelCache.get(H);let V=q7[e],n=ws(V)>.6?"#1d2230":"#ffffff",a=X7(256,(L,o)=>{if(L.fillStyle=V,L.fillRect(0,0,o,o),t){let M=new Path2D(t);L.save(),L.translate(o*.18,o*.18),L.scale(o*.64/24,o*.64/24),L.fillStyle=n,L.fill(M),L.restore()}i&&(L.beginPath(),L.arc(o*.8,o*.2,o*.15,0,Math.PI*2),L.fillStyle=i==="ok"?"#0f8a4a":"#c62a33",L.fill(),L.lineWidth=o*.025,L.strokeStyle="#ffffff",L.stroke(),L.strokeStyle="#ffffff",L.lineWidth=o*.04,L.lineCap="round",L.lineJoin="round",L.beginPath(),i==="ok"?(L.moveTo(o*.73,o*.2),L.lineTo(o*.785,o*.255),L.lineTo(o*.875,o*.15)):(L.moveTo(o*.75,o*.15),L.lineTo(o*.85,o*.25),L.moveTo(o*.85,o*.15),L.lineTo(o*.75,o*.25)),L.stroke())});return this.labelCache.set(H,a),a}pop(e){this.tween(260,t=>{let i=1+Math.sin(t*Math.PI)*.18;e.scale.set(i,i,1)})}turn(e,t=!0,i=190){return new Promise(r=>{this.queue.push({move:e,animate:t,dur:i,resolve:r}),this.turning||this._next()})}get busy(){return this.turning||this.queue.length>0}_next(){let e=this.queue.shift();if(!e){this.turning=!1;return}this.turning=!0;let{ax:t,l:i,d:r}=e.move,H=new S5;this.root.add(H);let V=this.cubies.filter(a=>Math.abs(a.position[t]-i)<.25);for(let a of V)H.attach(a);let n=()=>{H.rotation[t]=r*N5,H.updateMatrixWorld(!0);for(let a of V){this.root.attach(a),a.position.set(l6(a.position.x),l6(a.position.y),l6(a.position.z));let L=new V2().makeRotationFromQuaternion(a.quaternion),o=L.elements;for(let M=0;M<16;M++)o[M]=Math.round(o[M]);a.quaternion.setFromRotationMatrix(L)}this.root.remove(H),this.dirty=!0,e.resolve(),this._next()};if(!e.animate){n();return}this.tween(e.dur,a=>{H.rotation[t]=r*N5*(1-Math.pow(1-a,3))},n)}viewFor(e){let t=new v2,i=(r,H)=>t.setFromEuler(new d5(r,H,0,"XYZ"));switch(e){case"U":i(N5,0);break;case"D":i(-N5,0);break;case"R":i(0,-N5);break;case"L":i(0,N5);break;case"B":i(0,Math.PI);break;default:t.identity()}return this.baseView.clone().multiply(t)}showFace(e,t=450){this.rotateTo(this.viewFor(e),t)}rotateTo(e,t=450){let i=this.root.quaternion.clone();this.tween(t,r=>{let H=r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2;this.root.quaternion.slerpQuaternions(i,e,H)})}spin(e=1300){let t=this.root.quaternion.clone();this.tween(e,i=>{let r=1-Math.pow(1-i,3),H=new v2().setFromAxisAngle(new T(0,1,0),r*Math.PI*2);this.root.quaternion.copy(H.multiply(t))})}tween(e,t,i){this.tweens.push({t0:performance.now(),dur:e,fn:t,done:i}),this.dirty=!0}_frame(e){if(this.tweens.length){let t=this.tweens;this.tweens=[];let i=[];for(let r of t){let H=Math.min(1,(e-r.t0)/r.dur);r.fn(H),H<1?i.push(r):r.done&&r.done()}this.tweens=i.concat(this.tweens),this.dirty=!0}if(this.autoSpin&&!this.drag){let t=new v2().setFromAxisAngle(new T(0,1,0),.004);this.root.quaternion.premultiply(t),this.dirty=!0}this.dirty&&(this.dirty=!1,this.renderer.render(this.scene,this.camera))}_pick(e){let t=this.canvas.getBoundingClientRect(),i=new f1((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1);this.raycaster.setFromCamera(i,this.camera);let r=this.raycaster.intersectObjects(this.stickers,!1)[0];return r?r.object:null}_screen(e){let t=this.root.localToWorld(e.clone()).project(this.camera),i=this.canvas.getBoundingClientRect();return new f1((t.x+1)/2*i.width,(1-t.y)/2*i.height)}moveFromSwipe(e,t){let i=this.info(e),r=new T(...M6[i.face]),H=i.cubie.position.clone().add(r.clone().multiplyScalar(.5)),V=this._screen(H),n=null;for(let l=0;l<3;l++){if(Math.abs([r.x,r.y,r.z][l])>.5)continue;let u=new T;u.setComponent(l,1);let f=this._screen(H.clone().add(u.clone().multiplyScalar(.5))).sub(V);if(f.length()<.001)continue;let c=f.normalize().dot(t);(!n||Math.abs(c)>Math.abs(n.dot))&&(n={a:u,dot:c})}if(!n||Math.abs(n.dot)<.35)return null;let a=n.a.clone().multiplyScalar(Math.sign(n.dot)),L=new T().crossVectors(r,a),o=[L.x,L.y,L.z],M=o.findIndex(l=>Math.abs(l)>.5),s=ys[M];return{ax:s,l:l6(i.cubie.position[s]),d:Math.sign(o[M])}}guide(e){if(!e)return null;this.root.updateMatrixWorld(!0);let t=new T;t[e.ax]=1;let i=t.clone().multiplyScalar(e.d),r=this.camera.position,H=null;for(let L of this.stickers){let o=this.info(L),M=o.cubie.position;if(Math.abs(M[e.ax]-e.l)>.25)continue;let s=new T(...M6[o.face]);if(Math.abs(s.dot(t))>.5)continue;let l=M.clone().add(s.clone().multiplyScalar(.5)),u=this.root.localToWorld(l.clone()),c=s.clone().applyQuaternion(this.root.quaternion).dot(r.clone().sub(u).normalize());if(c<.28)continue;let d=new T().crossVectors(i,s),v=this._screen(l),y=this._screen(l.clone().add(d.clone().multiplyScalar(.5))).sub(v),h=y.length();if(h<4)continue;let g=y.clone().normalize(),Z=this.moveFromSwipe(L,g);if(!Z||Z.ax!==e.ax||Math.abs(Z.l-e.l)>.25||Z.d!==e.d)continue;let b=Math.abs(M.dot(d)),m=c*h-b*h*.12;(!H||m>H.score)&&(H={score:m,s0:v,dir:g,cell:h*2,sticker:L})}if(!H)return null;let{s0:V,dir:n,cell:a}=H;return{x0:V.x-n.x*a*.25,y0:V.y-n.y*a*.25,x1:V.x+n.x*a*1.6,y1:V.y+n.y*a*1.6,cell:a,sticker:H.sticker}}_bindInput(){let e=this.canvas;e.addEventListener("pointerdown",i=>{this.drag||(e.setPointerCapture(i.pointerId),this.drag={id:i.pointerId,x:i.clientX,y:i.clientY,lx:i.clientX,ly:i.clientY,s:this._pick(i),mode:null})}),e.addEventListener("pointermove",i=>{let r=this.drag;if(!r||r.id!==i.pointerId)return;let H=i.clientX-r.x,V=i.clientY-r.y;if(!r.mode){if(Math.hypot(H,V)<10)return;if(this.mode==="solve"&&r.s){r.mode="done";let n=this.moveFromSwipe(r.s,new f1(H,V).normalize());n&&this.onSwipe&&this.onSwipe(n);return}r.mode=this.mode==="view"&&!this.allowOrbitInView?"none":"orbit"}if(r.mode==="orbit"){let n=i.clientX-r.lx,a=i.clientY-r.ly,L=.0105,o=new v2().setFromAxisAngle(new T(0,1,0),n*L),M=new v2().setFromAxisAngle(new T(1,0,0),a*L);this.root.quaternion.premultiply(o).premultiply(M),this.dirty=!0}r.lx=i.clientX,r.ly=i.clientY});let t=i=>{let r=this.drag;!r||r.id!==i.pointerId||(this.drag=null,!r.mode&&i.type==="pointerup"&&r.s&&this.mode==="tap"&&this.onTap&&this.onTap(this.info(r.s)))};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}};var Ae="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z";var Li="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z";var ai="M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z";var oi="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z";var si="M9,12C9,11.19 9.3,10.5 9.89,9.89C10.5,9.3 11.19,9 12,9C12.81,9 13.5,9.3 14.11,9.89C14.7,10.5 15,11.19 15,12C15,12.81 14.7,13.5 14.11,14.11C13.5,14.7 12.81,15 12,15C11.19,15 10.5,14.7 9.89,14.11C9.3,13.5 9,12.81 9,12M5.53,8.44L7.31,10.22L5.53,12L7.31,13.78L5.53,15.56L2,12L5.53,8.44M8.44,18.47L10.22,16.69L12,18.47L13.78,16.69L15.56,18.47L12,22L8.44,18.47M18.47,15.56L16.69,13.78L18.47,12L16.69,10.22L18.47,8.44L22,12L18.47,15.56M15.56,5.53L13.78,7.31L12,5.53L10.22,7.31L8.44,5.53L12,2L15.56,5.53Z";var Mi="M2,13H4V15H6V13H8V15H10V13H12V15H14V10L17,7V1H19L23,3L19,5V7L22,10V22H11V19A2,2 0 0,0 9,17A2,2 0 0,0 7,19V22H2V13M18,10C17.45,10 17,10.54 17,11.2V13H19V11.2C19,10.54 18.55,10 18,10Z";var li="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";var di="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z";var ci="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";var pi="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z";var ui="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";var Ai="M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.68 7.35 7.38 5.73 9.07 4.1 11 4.1 11.83 4.1 12.41 4.69 13 5.28 13 6.1V12.15L14.6 10.6L16 12L12 16L8 12L9.4 10.6L11 12.15V6.1Q9.1 6.45 8.05 7.94 7 9.43 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18H18.5Q19.55 18 20.27 17.27 21 16.55 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 9.8 16.45 8.76 15.9 7.73 15 7V4.68Q16.85 5.55 17.93 7.26 19 9 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20M12 11.05Z";var mi="M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z";var hi="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V21C8 21.6 8.4 22 9 22H9.5C9.7 22 10 21.9 10.2 21.7L13.9 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M11 13H7V8.8L8.3 6H10.3L8.9 9H11V13M17 13H13V8.8L14.3 6H16.3L14.9 9H17V13Z";var fi="M19,20H5V4H7V7H17V4H19M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5A2,2 0 0,0 3,4V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V4A2,2 0 0,0 19,2Z";var xi="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var vi="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";var Si="M14.4,6H20V16H13L12.6,14H7V21H5V4H14L14.4,6M14,14H16V12H18V10H16V8H14V10L13,8V6H11V8H9V6H7V8H9V10H7V12H9V10H11V12H13V10L14,12V14M11,10V8H13V10H11M14,10H16V12H14V10Z";var gi="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4";var Zi="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z";var _i="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z";var yi="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22";var bi="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z";var Ti="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z";var wi="M20.84 2.18L16.91 2.96L19.65 6.5L21.62 6.1L20.84 2.18M13.97 3.54L12 3.93L14.75 7.46L16.71 7.07L13.97 3.54M9.07 4.5L7.1 4.91L9.85 8.44L11.81 8.05L9.07 4.5M4.16 5.5L3.18 5.69A2 2 0 0 0 1.61 8.04L2 10L6.9 9.03L4.16 5.5M2 10V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V10H2Z";var Oi="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z";var Ei="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z";var Ri="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z";var Pi="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";var Bi="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";var Ii="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z";var Fi="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";var Di="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z";var ki="M12,5C16.97,5 21,7.69 21,11C21,12.68 19.96,14.2 18.29,15.29C19.36,14.42 20,13.32 20,12.13C20,9.29 16.42,7 12,7V10L8,6L12,2V5M12,19C7.03,19 3,16.31 3,13C3,11.32 4.04,9.8 5.71,8.71C4.64,9.58 4,10.68 4,11.88C4,14.71 7.58,17 12,17V14L16,18L12,22V19Z";var Ni="M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z";var Ui="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";var zi="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z";var Gi="M16,18H18V6H16M6,18L14.5,12L6,6V18Z";var Wi="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z";var Xi="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";var qi="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z";var $i="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z";var Yi="M15.75 19.13C14.92 19.13 14.25 18.29 14.25 17.25C14.25 16.22 14.92 15.38 15.75 15.38C16.58 15.38 17.25 16.22 17.25 17.25C17.25 18.29 16.58 19.13 15.75 19.13M12 11.25C10.76 11.25 9.75 10.41 9.75 9.38C9.75 8.34 10.76 7.5 12 7.5C13.24 7.5 14.25 8.34 14.25 9.38C14.25 10.41 13.24 11.25 12 11.25M8.25 19.13C7.42 19.13 6.75 18.29 6.75 17.25C6.75 16.22 7.42 15.38 8.25 15.38C9.08 15.38 9.75 16.22 9.75 17.25C9.75 18.29 9.08 19.13 8.25 19.13M12 8.25C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75C11.59 9.75 11.25 9.41 11.25 9C11.25 8.59 11.59 8.25 12 8.25M18.75 12C18.43 12 18.12 12.07 17.84 12.2C17.36 11.59 16.71 11.07 15.93 10.67C16.5 9.87 16.84 8.9 16.84 7.85C16.84 7.83 16.84 7.81 16.84 7.79C17.93 7.56 18.75 6.59 18.75 5.42C18.75 4.09 17.66 3 16.33 3C15.64 3 15 3.29 14.58 3.75C13.83 3.28 12.95 3 12 3C11.05 3 10.16 3.28 9.42 3.75C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42C5.25 6.58 6.07 7.55 7.15 7.79C7.15 7.81 7.15 7.83 7.15 7.85C7.15 8.9 7.5 9.88 8.06 10.67C7.29 11.07 6.64 11.59 6.16 12.2C5.88 12.07 5.57 12 5.25 12C4 12 3 13 3 14.25C3 15.5 4 16.5 5.25 16.5C5.27 16.5 5.29 16.5 5.31 16.5C5.27 16.74 5.25 17 5.25 17.25C5.25 19.32 6.59 21 8.25 21C9.26 21 10.15 20.37 10.7 19.41C11.12 19.47 11.55 19.5 12 19.5C12.45 19.5 12.88 19.47 13.3 19.41C13.85 20.37 14.74 21 15.75 21C17.41 21 18.75 19.32 18.75 17.25C18.75 17 18.73 16.74 18.69 16.5C18.71 16.5 18.73 16.5 18.75 16.5C20 16.5 21 15.5 21 14.25C21 13 20 12 18.75 12";var Qi="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z";var Ki="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z";var Ji="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z",ji="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 2L6.46 7.46L7.88 8.88L11 5.75V15H13V5.75L16.13 8.88L17.55 7.45L12 2Z";var er="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z";var tr="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z";var Cr="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";var ir="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";var $7=[{id:"history",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F",icon:Ii},{id:"geography",name:"\u0413\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u044F",icon:vi},{id:"literature",name:"\u041B\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",icon:oi},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430",icon:Oi},{id:"science",name:"\u041D\u0430\u0443\u043A\u0430",icon:ai},{id:"painting",name:"\u0416\u0438\u0432\u043E\u043F\u0438\u0441\u044C",icon:Pi},{id:"people",name:"\u041B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",icon:Li},{id:"cinema",name:"\u041A\u0438\u043D\u043E",icon:wi},{id:"journalism",name:"\u0416\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0438\u043A\u0430",icon:Ei},{id:"logic",name:"\u041B\u043E\u0433\u0438\u043A\u0430 \u0438 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0438",icon:Di},{id:"sport",name:"\u0421\u043F\u043E\u0440\u0442",icon:Wi},{id:"cooking",name:"\u041A\u0443\u043B\u0438\u043D\u0430\u0440\u0438\u044F",icon:di},{id:"architecture",name:"\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",icon:Ri},{id:"quotes",name:"\u041A\u0438\u043D\u043E\u0446\u0438\u0442\u0430\u0442\u044B \u0438 \u043A\u0430\u0434\u0440\u044B",icon:hi},{id:"cartoons",name:"\u041C\u0443\u043B\u044C\u0442\u0444\u0438\u043B\u044C\u043C\u044B",icon:Yi},{id:"games",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0435 \u0438\u0433\u0440\u044B",icon:Zi},{id:"belarus",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438",icon:Mi},{id:"etymology",name:"\u041F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u043B\u043E\u0432",icon:Ki},{id:"inventions",name:"\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u0439",icon:mi},{id:"computers",name:"\u041A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u044B",icon:bi},{id:"my",name:"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",icon:Ae}],rr=Ni,S2=Object.fromEntries($7.map(C=>[C.id,C])),B1={hint:Ti,undo:tr,view:si,soundOn:Cr,soundOff:ir,star:Xi,starOff:qi,help:_i,close:ui,check:li,turn:ki,home:yi,shuffle:zi,flag:Si,trophy:er,back:ci,plus:Fi,del:xi,save:Ji,load:ji,edit:Bi,my:Ae,timer:Qi,update:Ai,report:gi,share:Ui,half:pi,skip:Gi,duel:$i,paste:fi},F1=(C,e="ic")=>`<svg class="${e}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${C}"/></svg>`;var j5=null,b0={on:!0};function Y7(){if(!j5){let C=window.AudioContext||window.webkitAudioContext;if(!C)return;j5=new C}j5.state==="suspended"&&j5.resume()}function J5(C,e,t,i="sine",r=.18,H){let V=j5.currentTime+e,n=j5.createOscillator(),a=j5.createGain();n.type=i,n.frequency.setValueAtTime(C,V),H&&n.frequency.exponentialRampToValueAtTime(H,V+t),a.gain.setValueAtTime(1e-4,V),a.gain.exponentialRampToValueAtTime(r,V+.012),a.gain.exponentialRampToValueAtTime(1e-4,V+t),n.connect(a).connect(j5.destination),n.start(V),n.stop(V+t+.02)}function p2(C){if(!(!b0.on||!j5))switch(C){case"ok":J5(660,0,.14),J5(990,.1,.22);break;case"bad":J5(220,0,.28,"triangle",.2,150);break;case"turn":J5(340,0,.06,"triangle",.12,260);break;case"tap":J5(520,0,.05,"sine",.08);break;case"tick":J5(1200,0,.04,"square",.04);break;case"deny":J5(180,0,.12,"square",.05);break;case"win":[523,659,784,1047].forEach((e,t)=>J5(e,t*.11,.3,"sine",.16));break;case"stage":[784,1047].forEach((e,t)=>J5(e,t*.09,.18,"sine",.12));break}}var Hr="kubik.my.v1",U5={q:300,a:80,e:400};function Os(){try{let C=JSON.parse(localStorage.getItem(Hr));if(C&&Array.isArray(C.list))return{list:C.list,next:C.next||C.list.reduce((e,t)=>Math.max(e,t.id),0)+1}}catch{}return{list:[],next:1}}var X2=Os();function he(){try{return localStorage.setItem(Hr,JSON.stringify(X2)),!0}catch{return!1}}var K7=C=>X2.list.filter(e=>!e.lv||e.lv===+C),p6=C=>X2.list.find(e=>e.id===+C),Q7=C=>String(C||"").replace(/\s+/g," ").trim(),me=C=>Q7(C).toLowerCase().replace(/ё/g,"\u0435");function fe(C,e){return C.q?C.q.length>U5.q?`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${U5.q} \u0437\u043D\u0430\u043A\u043E\u0432.`:C.a[0]?C.a.slice(1).some(t=>!t)?"\u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430.":C.a.some(t=>t.length>U5.a)?`\u041E\u0442\u0432\u0435\u0442 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${U5.a} \u0437\u043D\u0430\u043A\u043E\u0432.`:new Set(C.a.map(me)).size!==4?"\u0412\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0440\u0430\u0437\u043D\u044B\u043C\u0438.":C.e&&C.e.length>U5.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 ${U5.e} \u0437\u043D\u0430\u043A\u043E\u0432.`:X2.list.some(t=>t.id!==e&&me(t.q)===me(C.q))?"\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C.":"":"\u041D\u0443\u0436\u0435\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.":"\u041D\u0430\u043F\u0438\u0448\u0438 \u0441\u0430\u043C \u0432\u043E\u043F\u0440\u043E\u0441."}function c6(C){return{q:Q7(C.q),a:[0,1,2,3].map(e=>Q7(C.a&&C.a[e])),e:Q7(C.e),lv:[1,2,3].includes(+C.lv)?+C.lv:0}}function Vr(C,e){return e?Object.assign(p6(e),C):X2.list.push({id:X2.next++,...C}),he()}function nr(C){X2.list=X2.list.filter(e=>e.id!==+C),he()}var Es=`# \u041A\u0443\u0431\u0438\u043A: \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.
# \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u043E\u043A, \u0431\u043B\u043E\u043A\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439.
# \u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0431\u043B\u043E\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.
# + \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442
# - \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0438\u0445 \u0442\u0440\u0438)
# = \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C)
# \u0443\u0440\u043E\u0432\u0435\u043D\u044C: 1, 2 \u0438\u043B\u0438 3 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C, \u0442\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F)
# \u0421\u0442\u0440\u043E\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u0441 #, \u0438\u0433\u0440\u0430 \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442.
`;function Lr(C=X2.list){let e=C.map(t=>[t.q,"+ "+t.a[0],...t.a.slice(1).map(i=>"- "+i),...t.e?["= "+t.e]:[],...t.lv?["\u0443\u0440\u043E\u0432\u0435\u043D\u044C: "+t.lv]:[]].join(`
`));return"\uFEFF"+Es+`
`+e.join(`

`)+`
`}function ar(C){C=String(C).replace(/^﻿/,"").replace(/\r\n?/g,`
`);let e=C.trim();if(e.startsWith("[")||e.startsWith("{"))try{let H=JSON.parse(e);return{items:(Array.isArray(H)?H:H.questions||H.list||[]).map(c6),errors:[]}}catch{}let t=[],i=[];return C.split(/\n\s*\n/).map(H=>H.split(`
`).map(V=>V.trim()).filter(V=>V&&!V.startsWith("#"))).filter(H=>H.length).forEach((H,V)=>{let n={q:[],ok:[],bad:[],e:[],lv:0};for(let L of H){let o=L.match(/^уровень\s*[:\-–—]?\s*(\S+)/i);if(o){n.lv=[1,2,3].includes(+o[1])?+o[1]:0;continue}L[0]==="+"?n.ok.push(L.slice(1)):"-\u2013\u2014".includes(L[0])?n.bad.push(L.slice(1)):L[0]==="="?n.e.push(L.slice(1)):!n.ok.length&&!n.bad.length?n.q.push(L):n.e.push(L)}let a=Q7(n.q.join(" ")).slice(0,40)||`\u0431\u043B\u043E\u043A ${V+1}`;if(n.ok.length!==1){i.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u0435\u043D \u0440\u043E\u0432\u043D\u043E \u043E\u0434\u0438\u043D \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 (\u0441\u0442\u0440\u043E\u043A\u0430 \u0441 +).`);return}if(n.bad.length!==3){i.push(`\xAB${a}\xBB: \u043D\u0443\u0436\u043D\u044B \u0440\u043E\u0432\u043D\u043E \u0442\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u0430 (\u0441\u0442\u0440\u043E\u043A\u0438 \u0441 -), \u0430 \u0438\u0445 ${n.bad.length}.`);return}t.push(c6({q:n.q.join(" "),a:[n.ok[0],...n.bad],e:n.e.join(" "),lv:n.lv}))}),{items:t,errors:i}}function or({items:C,errors:e}){let t=0,i=0,r=e.slice();for(let H of C){let V=fe(H);if(V==="\u0422\u0430\u043A\u043E\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C."){i++;continue}if(V){r.push(`\xAB${H.q.slice(0,40)||"\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430"}\xBB: ${V}`);continue}X2.list.push({id:X2.next++,...H}),t++}return he(),{added:t,dup:i,errors:r}}async function sr(C){let e=await C.arrayBuffer(),t=new TextDecoder("utf-8").decode(e);if(t.includes("\uFFFD"))try{t=new TextDecoder("windows-1251").decode(e)}catch{}return t}var T0="0.10.0",V0={1:{name:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439",scramble:6,about:"\u0448\u043A\u043E\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F"},2:{name:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",scramble:10,about:"\u0434\u043B\u044F \u044D\u0440\u0443\u0434\u0438\u0442\u043E\u0432"},3:{name:"\u0412\u044B\u0441\u043E\u043A\u0438\u0439",scramble:14,about:"\u0434\u043B\u044F \u0437\u043D\u0430\u0442\u043E\u043A\u043E\u0432"}},Rs={1:"#11a85c",2:"#ffd21f",3:"#e0303a"},Ps={U:"\u0411\u0435\u043B\u0430\u044F",F:"\u0417\u0435\u043B\u0451\u043D\u0430\u044F",R:"\u041A\u0440\u0430\u0441\u043D\u0430\u044F",B:"\u0421\u0438\u043D\u044F\u044F",L:"\u041E\u0440\u0430\u043D\u0436\u0435\u0432\u0430\u044F",D:"\u0416\u0451\u043B\u0442\u0430\u044F"},C0=2,q0=1,$0=2,i0={3:{name:"3\xD73",scramble:[6,10,14],bonus:100,free:50,about:"\u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430"},2:{name:"2\xD72",scramble:[4,6,9],bonus:50,free:25,about:"\u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0438\u0433\u0440\u0430"}},$2=()=>x&&x.size===2?2:3,O2=()=>$2()*$2(),n0=()=>6*O2(),hr=()=>i0[$2()].bonus*x.level,w6=()=>i0[$2()].free*x.level,z3=C=>`${C} ${w0(C,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`,ve=[0,10,15,20,30,45,60,90],Bs=C=>C?`${C} \u0441`:"\u043D\u0435\u0442",f6="kubik.state.v1",fr="kubik.meta.v1",Q=(C,e=document)=>e.querySelector(C),e2=C=>String(C).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),K0=C=>{try{return JSON.parse(localStorage.getItem(C))}catch{return null}},xr=(C,e)=>{try{localStorage.setItem(C,JSON.stringify(e))}catch{}},j7=C=>Math.floor(Math.random()*C),r0=C=>{for(let e=C.length-1;e>0;e--){let t=j7(e+1);[C[e],C[t]]=[C[t],C[e]]}return C},w0=(C,e,t,i)=>{let r=C%10,H=C%100;return r===1&&H!==11?e:r>=2&&r<=4&&(H<12||H>14)?t:i},T5=C=>`${C} ${w0(C,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}`,Is=C=>C==="U"||C==="D"?"#1d2230":"#fff",t4=(C,e)=>`<span class="sw" style="background:${q7[C]};color:${Is(C)}">${e?F1(S2[e].icon):""}</span>`,m2={},Se=C=>C&&C.v===1&&V0[C.level]?C:null,x=K0(f6),A1=Object.assign({best:0,seen:{},sound:!0,games:0},K0(fr)||{});b0.on=A1.sound;var s1,u5="menu",n2=()=>{x?xr(x.ch?X3:f6,x):localStorage.removeItem(f6)},q2=()=>xr(fr,A1);function be(C,e){return C==="my"?K7(e):m2[C]&&m2[C][e]||[]}function Te(C){return $7.filter(e=>be(e.id,C).length>=O2()).map(e=>e.id)}var X0=C=>(C.q+"|"+C.a[0]).trim().toLowerCase();function vr(C,e){if(C==="my")return Fs(e);let t=be(C,e),i=C+"-"+e,r=new Set(A1.bad||[]),H=t.map((L,o)=>o).filter(L=>!r.has(X0(t[L]))),V=O2();H.length<V&&(H=t.map((L,o)=>o));let n=new Set(A1.seen[i]||[]),a=r0(H.filter(L=>!n.has(L)));if(a.length<V){let L=r0(H.filter(o=>n.has(o)));a=a.concat(L),A1.seen[i]=[]}return a.slice(0,V).map(L=>`${C}-${e}-${L}`)}function Fs(C){let e=K7(C);if(!e.length)return[];let t="my-"+C,i=new Set(A1.seen[t]||[]),r=r0(e.filter(V=>!i.has(V.id)).map(V=>V.id)),H=O2();for(r.length<H&&(r=r.concat(r0(e.filter(V=>i.has(V.id)).map(V=>V.id))),A1.seen[t]=[]);r.length<H;)r=r.concat(r0(e.map(V=>V.id)));return x.myq=x.myq||{},r.slice(0,H).map((V,n)=>{let a=`my-${C}-${V}-${n}`,L=p6(V);return x.myq[a]={q:L.q,a:L.a.slice(),e:L.e},a})}function $3(C){if(C.startsWith("my-"))return x.myq[C];if(x.bq&&x.bq[C])return x.bq[C];let[e,t,i]=C.split("-");return be(e,t)[+i]}function Ds(C){let[e,t,i]=C.split("-");if(!m2[e]&&e!=="my")return;let r=e+"-"+t;A1.seen[r]=A1.seen[r]||[],A1.seen[r].includes(+i)||A1.seen[r].push(+i),q2()}var Sr="kubik-bank",gr="bank.json",ge="kubik.bank.v1",z5=C=>C&&C._meta&&+C._meta.rev||0,Mr=C=>Object.keys(C||{}).filter(e=>e!=="_meta").reduce((e,t)=>e+["1","2","3"].reduce((i,r)=>i+(C[t][r]||[]).length,0),0),O0=C=>String(C||"0").split(".").reduce((e,t)=>e*1e3+(+t||0),0);function x6(C){return!C||typeof C!="object"||!C._meta?!1:Object.keys(C).some(e=>e!=="_meta"&&C[e]&&Array.isArray(C[e][1]))}async function ks(){try{if(window.caches){let C=await(await caches.open(Sr)).match(gr);if(C)return await C.json()}}catch{}return K0(ge)}async function Zr(C){let e=JSON.stringify(C);try{if(window.caches){await(await caches.open(Sr)).put(gr,new Response(e,{headers:{"Content-Type":"application/json"}})),localStorage.removeItem(ge);return}}catch{}try{localStorage.setItem(ge,e)}catch{}}function _r(C){let e=C._meta&&C._meta.topics||{};for(let t of Object.keys(C)){if(t==="_meta"||t==="my")continue;let i=e[t]||{};if(S2[t]){i.name&&(S2[t].name=i.name),i.icon&&(S2[t].icon=i.icon);continue}let r={id:t,name:i.name||t,icon:i.icon||rr};$7.splice($7.findIndex(H=>H.id==="my"),0,r),S2[t]=r}}function we(C){if(x&&x.stageQ){x.bq=x.bq||{};for(let e of Object.values(x.stageQ))for(let t of e){if(t.startsWith("my-")||x.bq[t])continue;let i=$3(t);i&&(x.bq[t]={q:i.q,a:i.a.slice(),e:i.e})}n2()}for(let e of Object.keys(A1.seen)){let[t,i]=e.split("-");if(t==="my")continue;let r=m2[t]&&m2[t][i]||[],H=C[t]&&C[t][i]||[],V=new Map(H.map((n,a)=>[n.q,a]));A1.seen[e]=A1.seen[e].map(n=>r[n]&&V.get(r[n].q)).filter(n=>n!==void 0)}if(A1.bad&&A1.bad.length){let e=new Set;for(let t of Object.keys(C))if(t!=="_meta")for(let i of["1","2","3"])for(let r of C[t][i]||[])e.add(X0(r));A1.bad=A1.bad.filter(t=>e.has(t))}q2(),m2=C,_r(m2)}async function Ns(){let C=null;try{C=await(await fetch("ru.json?v="+T0)).json()}catch{}let e=await ks(),t=i=>x6(i)&&O0(i._meta.app)<=O0(T0);m2=t(e)&&(!t(C)||z5(e)>z5(C))?e:C||{},x6(m2)&&_r(m2)}var u6=!1;async function yr(){if(u6)return;u6=!0;let C=Q("#m-update");C.classList.add("busy"),C.innerHTML=F1(B1.update)+"\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026";let e=null,t="";try{let n=await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"});if(!n.ok)throw new Error(n.status);e=await n.json(),x6(e)||(t="bad",e=null)}catch{t=t||"net"}u6=!1,C.classList.remove("busy"),H5();let i=Mr(m2),r=n=>(n._meta.date||"").split("-").reverse().join("."),H,V;if(!e)H="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C",V=t==="net"?"\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0430\u0439\u0442\u043E\u043C \u0438\u0433\u0440\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0424\u0430\u0439\u043B \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D. \u0417\u0430\u0433\u0440\u0443\u0437\u0438 ru.json \u0437\u0430\u043D\u043E\u0432\u043E.";else if(O0(e._meta.app)>O0(T0))H="\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B",V="\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043D\u044B \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0438\u0433\u0440\u044B. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u0435\u0449\u0451 \u0440\u0430\u0437.";else if(z5(e)<=z5(m2))H="\u041D\u043E\u0432\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u043D\u0435\u0442",V=`\u0423 \u0442\u0435\u0431\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0432\u0435\u0440\u0441\u0438\u044F: ${i} ${w0(i,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}${m2._meta&&m2._meta.date?`, \u043E\u0442 ${r(m2)}`:""}.`;else{let n=new Set(Object.keys(m2).filter(M=>M!=="_meta"));we(e),await Zr(e);let a=Mr(e),L=a-i,o=Object.keys(e).filter(M=>M!=="_meta"&&!n.has(M)).map(M=>`\xAB${S2[M].name}\xBB`);H="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B",V=`\u0422\u0435\u043F\u0435\u0440\u044C ${a} ${w0(a,"\u0432\u043E\u043F\u0440\u043E\u0441","\u0432\u043E\u043F\u0440\u043E\u0441\u0430","\u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432")}`+(L>0?`, \u043D\u0430 ${L} \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E.`:L<0?`, \u0431\u044B\u043B\u043E ${i}.`:", \u0447\u0430\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.")+(o.length?` \u041D\u043E\u0432\u044B\u0435 \u0442\u0435\u043C\u044B: ${o.join(", ")}.`:"")+(x&&x.phase==="quiz"?" \u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u044D\u0442\u0430\u043F \u0434\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u0430\u0440\u044B\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438.":"")}p2(e?H==="\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B"?"ok":"tap":"deny"),l2(`<div class="m-title">${H}</div><div class="m-text"><p>${V}</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(F2)}function br(C,e=$2()){let t=[],i=null;for(;t.length<C;){let r="xyz"[j7(3)];if(r===i)continue;let H=e===2?.5:1;t.push({ax:r,l:j7(2)?H:-H,d:j7(2)?1:-1}),i=r}return t}function O6(C){let e=[];for(let t of C){let i=e[e.length-1];if(i&&i.ax===t.ax&&i.l===t.l){let r=((i.d+t.d)%4+4)%4;r===0?e.pop():i.d=r===3?-1:r}else e.push({ax:t.ax,l:t.l,d:t.d})}return e}function Tr(){let C=O6([...x.scramble,...x.moves]),e=C[C.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}function Us(C){x={v:1,level:C,size:A1.size===2?2:3,phase:"topics",score:0,results:{},topics:H4(C,null),timers:Oe()},n2(),t0()}function Oe(){let C={};for(let e of y2)C[e]=A1.timers&&A1.timers[e]||0;return C}function e0(C){return x&&x.timers&&x.timers[C]||0}function H4(C,e){let t=Te(C),i={},r=new Set;if(e)for(let V of y2)t.includes(e[V])&&!r.has(e[V])&&(i[V]=e[V],r.add(e[V]));let H=r0(t.filter(V=>V!=="my"&&!r.has(V)));for(let V of y2)i[V]||(i[V]=H.shift());return i}function zs(){let C=Te(x.level);if(!y2.every(e=>C.includes(x.topics[e]))){x.topics=H4(x.level,x.topics),n2(),t0(),B2(`\u0414\u043B\u044F \xAB\u041C\u043E\u0438\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432\xBB \u043D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u043D\u0443\u0436\u043D\u043E ${z3(O2())}, \u0433\u0440\u0430\u043D\u044C \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u0430`);return}Object.assign(x,{bq:{},phase:"quiz",scramble:br(i0[$2()].scramble[x.level-1]),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0},ms:0,msOk:1}),n2(),H0()}function Y3(C){u5=C,document.body.classList.remove("loading");for(let e of document.querySelectorAll(".scr"))e.classList.toggle("on",e.id==="scr-"+C);requestAnimationFrame(A6)}function A6(){let C=Q("#stage"),e=Q(`#scr-${u5} .cube-slot`);if(!e){C.style.display="none";return}let t=e.getBoundingClientRect();Object.assign(C.style,{display:"block",left:t.left+"px",top:t.top+"px",width:t.width+"px",height:t.height+"px"}),s1.resize()}function H5(){I6(),F2(),x&&x.ch&&(x.phase==="result"&&localStorage.removeItem(X3),x=Se(K0(f6))),s1.setSize(x?$2():A1.size===2?2:3),s1.reset(),s1.mode="view",s1.autoSpin=!0;for(let n of s1.stickers)s1.setLook(n,"color");let C=Q("#m-continue");x&&x.phase!=="final"?(C.hidden=!1,C.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${x.level}${$2()===2?" \xB7 2\xD72":""}`):C.hidden=!0;let e=Se(K0(X3)),t=Q("#m-chal");t.hidden=!(e&&e.ch&&e.phase!=="result"),t.hidden||(t.textContent=`\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \xB7 ${e.ch.raw.a.n}`,t.className="btn"+(C.hidden?" primary":"")),Q("#m-sound").innerHTML=F1(b0.on?B1.soundOn:B1.soundOff)+(b0.on?"\u0417\u0432\u0443\u043A \u0432\u043A\u043B\u044E\u0447\u0451\u043D":"\u0417\u0432\u0443\u043A \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),u6||(Q("#m-update").innerHTML=F1(B1.update)+"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),Q("#m-best").textContent=A1.best&&A1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434: ${A1.best} \xB7 \u043D\u0430 2\xD72: ${A1.best2}`:A1.best?`\u0420\u0435\u043A\u043E\u0440\u0434: ${A1.best}`:A1.best2?`\u0420\u0435\u043A\u043E\u0440\u0434 \u043D\u0430 2\xD72: ${A1.best2}`:"";let i=(A1.reports||[]).length,r=Q("#m-reports");r.hidden=!i,r.innerHTML=F1(B1.report)+`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${i}`;let H=P6().length,V=Q("#m-duels");V.hidden=!H,V.innerHTML=F1(B1.duel)+`\u0412\u044B\u0437\u043E\u0432\u044B: ${H}`,Y3("menu")}function m6(){let C=A1.size===2?2:3,e=i0[C];Q("#lv-size").innerHTML=[3,2].map(t=>`<button data-size="${t}" class="${t===C?"on":""}"><b>${i0[t].name}</b><small>${i0[t].about}, ${z3(6*t*t)}</small></button>`).join(""),Q("#lv-lead").textContent=`\u041A\u0443\u0431\u0438\u043A ${e.name}: \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 6 \u044D\u0442\u0430\u043F\u043E\u0432 \u043F\u043E ${z3(C*C)}, \u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u043D\u0430\u0434\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A. \u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043D\u0430\u0447\u0430\u0442\u044C?`,Q("#lv-list").innerHTML=[1,2,3].map(t=>`<button class="lv" data-lv="${t}">
    <span class="num" style="background:${Rs[t]}">${t}</span>
    <span><b>${V0[t].name}</b><span>${V0[t].about}; \u043A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${T5(e.scramble[t-1])}</span></span></button>`).join(""),Y3("levels")}function t0(){F2(),Q("#tp-title").textContent=`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${x.level} \xB7 ${V0[x.level].name}${$2()===2?" \xB7 2\xD72":""}`,Q("#tp-lead").textContent=`\u0412\u044B\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0443 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438. \u0413\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u044D\u0442\u043E \u044D\u0442\u0430\u043F \u0438\u0437 ${z3(O2())}, \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441.`;let C=Te(x.level),e=K7(x.level).length,t=C.includes("my")?"":`<option disabled>\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \u043D\u0443\u0436\u043D\u043E \u0435\u0449\u0451 ${O2()-e}</option>`;x.timers||(x.timers=Oe());let i=y2.every(r=>e0(r)===e0("U"));Q("#tp-list").innerHTML=`<label class="tall">${F1(B1.timer)}<span>\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043E\u0442\u0432\u0435\u0442</span>
    <select id="tp-time"><option value="" disabled${i?"":" selected"}>\u0440\u0430\u0437\u043D\u043E\u0435</option>${ve.map(r=>`<option value="${r}"${i&&e0("U")===r?" selected":""}>${r?`\u0432\u0441\u0435\u043C \u043F\u043E ${r} \u0441`:"\u0431\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select>
    <span class="chev">${F1("M7 10l5 5 5-5z")}</span></label>`+y2.map(r=>`<div class="trow"><label class="tl">${t4(r,x.topics[r])}
    <span class="tcol"><small>${Ps[r]} \u0433\u0440\u0430\u043D\u044C</small>
    <select data-face="${r}">${C.map(H=>`<option value="${H}"${x.topics[r]===H?" selected":""}>${S2[H].name}</option>`).join("")}${t}</select></span></label>
    <label class="tm${e0(r)?" on":""}">${F1(B1.timer)}<span>${Bs(e0(r))}</span>
    <select data-tface="${r}" aria-label="\u0422\u0430\u0439\u043C\u0435\u0440">${ve.map(H=>`<option value="${H}"${e0(r)===H?" selected":""}>${H?`${H} \u0441\u0435\u043A\u0443\u043D\u0434`:"\u0411\u0435\u0437 \u0442\u0430\u0439\u043C\u0435\u0440\u0430"}</option>`).join("")}</select></label></div>`).join("")+`<button class="link mylink" id="tp-my">${F1(B1.my)}\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F: ${e}${e<O2()?` \u0438\u0437 ${O2()} \u043D\u0443\u0436\u043D\u044B\u0445`:""}. \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</button>`,Q("#tp-rand").innerHTML=F1(B1.shuffle)+"\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u043E",Y3("topics")}function H0(){if(F2(),Q("#g-title").textContent=x.ch?`\u0412\u044B\u0437\u043E\u0432 \xB7 ${x.ch.raw.a.n} \xB7 \u0443\u0440. ${x.level}${$2()===2?" \xB7 2\xD72":""}`:`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${x.level} \xB7 ${V0[x.level].name}${$2()===2?" \xB7 2\xD72":""}`,s1.autoSpin=!1,Gs(),s1.rotateTo(s1.baseView,350),Y3("game"),x.phase==="quiz"){if(!x.pending&&x.stage&&G3(x.stage)===O2()&&(x.stage=null,n2(),W3()),!x.pending&&C4()>=n0()){setTimeout(Be,300);return}s1.mode="tap",Ee(),x.pending&&Er()}else x.phase==="solve"?(s1.mode="solve",J0()):x.phase==="result"&&(s1.mode="view",J0(),Y0());G5()}function Gs(){s1.setSize($2()),s1.reset();for(let C of x.scramble)s1.turn(C,!1);if(x.phase!=="quiz")for(let C of x.moves)s1.turn(C,!1);W3()}function G3(C){let e=0;for(let t=0,i=O2();t<i;t++)x.cells[C+t]&&e++;return e}function C4(){return Object.keys(x.cells).length}function W3(){let C=x&&x.phase==="quiz";for(let e of s1.cells()){let t=e.sticker;if(!x){s1.setLook(t,"color");continue}let i=C?x.cells[e.key]:null,r=C&&x.stage&&e.face!==x.stage;if($2()===2&&C&&!i&&!r)s1.setLook(t,"hidden",s1.hiddenLabel(S2[x.topics[e.face]].icon,s1._rotOf(t)));else if(t.userData.center){let H=s1.centerLabel(t.userData.color,S2[x.topics[t.userData.color]].icon,i==="c"?"ok":i==="w"?"bad":null,s1._rotOf(t));s1.setLook(t,r?"locked":"color",H)}else C?s1.setLook(t,i==="c"?"color":i==="w"?"wrong":i==="s"?"skip":r?"locked":"hidden"):s1.setLook(t,"color")}}function G5(C){if(!x)return;let e=Q("#g-tip");if(e&&x.phase!=="quiz"&&(e.innerHTML=wr()),Q("#st-score").textContent=x.score,Q("#st-turns").textContent=x.free?"\u221E":x.tokens,x.phase==="quiz"?(Q("#st-l3").textContent="\u0412\u043E\u043F\u0440\u043E\u0441\u044B",Q("#st-3").textContent=`${C4()}/${n0()}`):(Q("#st-l3").textContent="\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0445\u043E\u0434\u043E\u0432",Q("#st-3").textContent=x.moves.length),C){let t=Q(".pill.turns");t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")}}function Ee(){let C;if(x.stage){let t=G3(x.stage),i=e0(x.stage);C=`\u042D\u0442\u0430\u043F ${x.order.length} \u0438\u0437 6 \xB7 <b>${S2[x.topics[x.stage]].name}</b> \xB7 ${t} \u0438\u0437 ${O2()}${i?` \xB7 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 ${i} \u0441`:""}.<br>\u041D\u0430\u0436\u0438\u043C\u0430\u0439 \u043D\u0430 \u043A\u043B\u0435\u0442\u043A\u0438 \u044D\u0442\u043E\u0439 \u0433\u0440\u0430\u043D\u0438.`}else C4()?C="\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0433\u0440\u0430\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \u043D\u0430 \u0435\u0451 \u043A\u043B\u0435\u0442\u043A\u0443.":C="\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u043A\u043B\u0435\u0442\u043A\u0443 \u0433\u0440\u0430\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u0430\u043F.<br>\u041A\u0443\u0431\u0438\u043A \u043C\u043E\u0436\u043D\u043E \u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0435\u043C.";let e=y2.map(t=>{let i=G3(t);return`<button class="chip ${x.stage===t?"on":i===O2()?"done":""}" data-face="${t}">${t4(t,x.topics[t])}<span>${i}/${O2()}</span></button>`}).join("");Q("#g-foot").innerHTML=`<div class="tip">${C}</div><div class="chips">${e}</div>`}function Ws(){return O6([...x.scramble,...x.moves]).reduce((C,e)=>C+Math.abs(e.d),0)}function wr(){if(x.phase!=="solve")return"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.";if(x.free)return`\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C <b>${w6()}</b> \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432.`;if(x.tokens<1)return"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0445\u043E\u0434 \u0438\u043B\u0438 \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443 \u0437\u0430 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.";let C=Ws();return`\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0441\u043B\u043E\u0439. \u0412\u0440\u0430\u0449\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443.<br>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\u043C\u0438 \u0441\u043E\u0431\u0435\u0440\u0451\u0442\u0441\u044F \u0437\u0430 <b>${C}</b> ${w0(C,"\u0445\u043E\u0434","\u0445\u043E\u0434\u0430","\u0445\u043E\u0434\u043E\u0432")} (${C0*C} ${w0(C0*C,"\u043F\u043E\u0432\u043E\u0440\u043E\u0442","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430","\u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432")}).`}function J0(){let C=x.phase==="solve";Q("#g-foot").innerHTML=`<div class="tip" id="g-tip">${wr()}</div>
  <div class="tools">
    <button class="tool" id="t-undo"${C?"":" disabled"}>${F1(B1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    ${C&&!x.free&&x.tokens<1?`<button class="tool hint" id="t-free">${F1(B1.turn)}\u0421\u0430\u043C<em>+${w6()}</em></button>`:`<button class="tool hint" id="t-hint"${C&&!x.free?"":" disabled"}>${F1(B1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430<em>\u2212${C0}</em></button>`}
    <button class="tool" id="t-view">${F1(B1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="t-end"${C?"":" disabled"}>${F1(B1.flag)}\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C</button>
  </div>`}function Or(C){if(!x||x.phase!=="quiz"||x.pending||!Q("#sheet").hidden)return;if(Y7(),x.cells[C.key]){B2("\u041D\u0430 \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0442\u044B \u0443\u0436\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B"),p2("deny");return}if(x.stage&&x.stage!==C.face){B2(`\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043A\u043E\u043D\u0447\u0438 \u044D\u0442\u0430\u043F \xAB${S2[x.topics[x.stage]].name}\xBB`),p2("deny"),s1.showFace(x.stage);return}if(!x.stage){x.stage=C.face,x.order.push(C.face);let t=x.ch?x.ch.qs[C.face]:vr(x.topics[C.face],x.level);if(t.length<O2()){x.stage=null,x.order.pop(),B2("\u0421\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u044B. \u0414\u043E\u0431\u0430\u0432\u044C \u0438\u0445 \u0432 \u043C\u0435\u043D\u044E \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB."),p2("deny");return}x.stageQ[C.face]=t,p2("stage"),W3()}let e=x.stageQ[C.face][G3(C.face)];x.pending={key:C.key,face:C.face,qid:e,order:r0([0,1,2,3]),limit:e0(C.face)},n2(),Ee(),Er()}function Er(){let C=x.pending,e=$3(C.qid),t=S2[x.topics[C.face]];Q("#qcard").innerHTML=`<div class="q-head"><span class="q-topic">${t4(C.face,x.topics[C.face])}${t.name}</span>
    <span>\u042D\u0442\u0430\u043F ${x.order.indexOf(C.face)+1} \xB7 \u0432\u043E\u043F\u0440\u043E\u0441 ${G3(C.face)+1} \u0438\u0437 ${O2()}</span></div>
    ${C.limit?'<div class="qtime"><span class="tbar"><i></i></span><b></b></div>':""}
    <div class="q-text">${e2(e.q)}</div>
    <div class="ans">${C.order.map((i,r)=>`<button data-i="${r}">${e2(e.a[i])}</button>`).join("")}</div>
    <div class="qhelp"><button class="qh" id="q-cut">${F1(B1.half)}<span>50 \u043D\u0430 50</span><small>${T5(q0)}</small></button>
    <button class="qh" id="q-skip">${F1(B1.skip)}<span>\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C</span><small>${T5($0)}</small></button></div>
    <div class="after" hidden></div>`,Pr(),Rr(),Q("#sheet").hidden=!1,Xs()}var h6=null,xe=0;function N3(){h6&&(clearInterval(h6),h6=null)}function Xs(){N3();let C=x&&x.pending;if(!C||!C.limit)return;C.deadline||(C.deadline=Date.now()+C.limit*1e3,n2()),xe=0;let e=()=>{if((x&&x.pending)!==C){N3();return}let i=Math.max(0,C.deadline-Date.now()),r=Math.ceil(i/1e3),H=Q(".qtime");H&&(H.querySelector("b").textContent=`${r} \u0441`,H.querySelector("i").style.width=(100*i/(C.limit*1e3)).toFixed(1)+"%",H.classList.toggle("low",r<=5)),r<=5&&r>0&&r!==xe&&(xe=r,p2("tick")),i<=0&&(N3(),Re(-1))};e(),h6=setInterval(e,200)}var J7=0;function Rr(){let C=x&&x.pending,e=Q("#q-cut"),t=Q("#q-skip");!e||!t||(e.disabled=!C||!!C.cut||x.tokens<q0,e.classList.toggle("used",!!(C&&C.cut)),t.disabled=!C||x.tokens<$0,t.classList.remove("armed"),J7=0,t.querySelector("span").textContent="\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C")}function Pr(){let C=x.pending;!C||!C.cut||Q(".ans").querySelectorAll("button").forEach(e=>{C.cut.includes(+e.dataset.i)&&(e.disabled=!0,e.classList.add("cut"))})}function Br(C){B2(x.tokens?`\u041D\u0443\u0436\u043D\u043E ${T5(C)}, \u0443 \u0442\u0435\u0431\u044F ${x.tokens}`:"\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442: \u043E\u043D\u0438 \u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0430 \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B"),p2("deny")}function qs(){let C=x.pending;if(!(!C||C.cut)){if(x.tokens<q0)return Br(q0);C.cut=r0([0,1,2,3].filter(e=>C.order[e]!==0)).slice(0,2),x.tokens-=q0,x.lv.cuts=(x.lv.cuts||0)+1,n2(),p2("turn"),Pr(),Rr(),G5(!0)}}function $s(){let C=x.pending;if(!C)return;if(x.tokens<$0)return Br($0);let e=Q("#q-skip");if(!J7||Date.now()-J7>4e3){J7=Date.now(),e.classList.add("armed"),e.querySelector("span").textContent="\u0422\u043E\u0447\u043D\u043E?",p2("tap");return}J7=0,N3(),x.cells[C.key]="s",x.tokens-=$0,x.lv.skips=(x.lv.skips||0)+1,x.lastKey=C.key,x.pending=null,n2(),p2("turn"),G5(!0),Pe()}function Re(C){let e=x.pending;if(!e)return;N3();let t=C===-1;t&&(x.lv.late=(x.lv.late||0)+1);let i=$3(e.qid),r=e.order[C]===0,H=x.level*10;x.cells[e.key]=r?"c":"w",r?(x.tokens++,x.lv.correct++,x.lv.points+=H,x.score+=H):x.lv.wrong++,Ds(e.qid),x.lastKey=e.key,x.pending=null,n2(),p2(r?"ok":"bad");let V=Q(".qhelp");V&&V.remove();let n=Q(".ans");n.classList.add("done"),n.querySelectorAll("button").forEach((L,o)=>{L.disabled=!0,L.classList.remove("cut"),e.order[o]===0?L.classList.add("ok"):o===C&&L.classList.add("bad")});let a=Q(".after");a.hidden=!1,a.innerHTML=`<div class="verdict ${r?"ok":"bad"}">${F1(r?B1.check:t?B1.timer:B1.close)}${r?"\u0412\u0435\u0440\u043D\u043E, +1 \u043F\u043E\u0432\u043E\u0440\u043E\u0442":t?"\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0448\u043B\u043E":"\u041D\u0435\u0432\u0435\u0440\u043D\u043E"}</div>
    ${i.e?`<div class="exp">${e2(i.e)}</div>`:""}<button class="btn primary" id="q-next">\u0414\u0430\u043B\u044C\u0448\u0435</button>
    ${e.qid.startsWith("my-")?"":`<button class="link rep-open" id="q-rep" data-qid="${e2(e.qid)}">${F1(B1.report)}\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?</button>`}`,a.scrollIntoView({block:"nearest",behavior:"smooth"}),G5(r)}function Pe(){I6(),W3();let C=s1.cells().find(t=>t.key===x.lastKey);C&&s1.pop(C.sticker);let e=x.lastKey[0];if(G3(e)===O2()){let t=[...Array(O2()).keys()].filter(i=>x.cells[e+i]==="c").length;x.stage=null,n2(),W3(),C4()<n0()&&B2(`\u042D\u0442\u0430\u043F \xAB${S2[x.topics[e]].name}\xBB \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D: ${t} \u0438\u0437 ${O2()}`)}Ee(),G5(),C4()>=n0()&&setTimeout(Be,500)}var lr=()=>(x.lv.cuts||0)*q0+(x.lv.skips||0)*$0;function Be(){x.phase="solve",n2(),W3(),J0(),G5(),s1.mode="solve",s1.spin(900);let C=x.lv.correct;if(x.tokens<1){l2(`<div class="m-title">\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>${C?"\u0412\u0441\u0435 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0443\u0448\u043B\u0438 \u043D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0438\u0445 \u043D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C.":"\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u043A\u0438 \u0442\u043E\u0436\u0435 \u043D\u0435\u0442."}</p>
      <p>${Ie()}</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],...x.ch?[]:[["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C",""]],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(e=>e==="free"?E6():e==="retry"?Qr():V4(!1));return}Ir()}function Ir(){let C=x.lv.correct,e=!A1.trained&&!A1.trainAsk;e&&(A1.trainAsk=1,q2()),l2(`<div class="m-title">\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A</div><div class="m-text">
    <p>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438: \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ${C} \u0438\u0437 ${n0()}. ${lr()?`\u041D\u0430 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043A \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0443\u0448\u043B\u043E ${T5(lr())}, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${T5(x.tokens)}.`:`\u0422\u044B \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B ${T5(x.tokens)}.`}</p>
    <p>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043D\u0430 ${T5(x.scramble.length)}. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</p>
    <p>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442, \u043D\u043E \u0441\u0442\u043E\u0438\u0442 ${C0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434.</p>
    ${e?'<p class="m-note">\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0432\u043F\u0435\u0440\u0432\u044B\u0435? \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0439\u0434\u0438 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443: \u0442\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439, \u043C\u0438\u043D\u0443\u0442\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043D\u0430 \u043D\u0435\u0451 \u043D\u0435 \u0442\u0440\u0430\u0442\u044F\u0442\u0441\u044F.</p>':""}</div>`,e?[["train","\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438","primary"],["ok","\u0421\u0440\u0430\u0437\u0443 \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C",""]]:[["ok","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C","primary"]]).then(t=>{t==="train"&&Fe(()=>H0(),!0)})}async function Ze(C,e,t){x.tokens-=e,x.moves.push({...C,c:e}),n2(),G5(),p2("turn"),await s1.turn(C,!0,t?420:190),Ur(),x&&x.phase==="solve"&&!x.free&&x.tokens<1&&(J0(),Fr())}function Ie(){return`\u0421\u043E\u0431\u0435\u0440\u0438 \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0438 \u0431\u0435\u0437 \u0441\u0447\u0451\u0442\u0430, \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0435\u0437 \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A. \u0421\u043E\u0431\u0435\u0440\u0451\u0448\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C ${w6()} \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u0431\u043E\u043D\u0443\u0441\u0430 ${hr()}.`}function Fr(){l2(`<div class="m-title">\u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D.</p><p>${Ie()}</p>
    <p>\u041C\u043E\u0436\u043D\u043E \u0438 \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0445\u043E\u0434\u044B: \u043A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u0440\u043D\u0451\u0442 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</p></div>`,[["free","\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["back","\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0443\u0431\u0438\u043A\u0443",""],["end","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","ghost"]]).then(C=>C==="free"?E6():C==="end"?V4(!1):null)}function E6(){x.free=!0,n2(),J0(),G5(!0),B2("\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0448\u044C \u0441\u0430\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435.")}function Dr(C){if(u5==="train"){Gr(C);return}if(!(!x||x.phase!=="solve"||s1.queue.length>1)){if(Y7(),x.free){Ze(C,0);return}if(x.tokens<1){Fr(),p2("deny");return}Ze(C,1)}}function kr(){if(!x||x.phase!=="solve"||s1.busy)return;let C=x.moves.pop();if(!C){B2("\u041E\u0442\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E");return}x.free||(x.tokens+=1),n2(),J0(),G5(!0),p2("turn"),s1.turn({ax:C.ax,l:C.l,d:-C.d}).then(Ur)}function Nr(){if(!x||x.phase!=="solve"||s1.busy||x.free)return;if(x.tokens<C0){B2(`\u0414\u043B\u044F \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043D\u0443\u0436\u043D\u043E ${C0} \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430`),p2("deny");return}let C=Tr();C&&(x.lv.hints++,Ze(C,C0,!0))}function Ur(){!x||x.phase!=="solve"||s1.busy||s1.isSolved()&&V4(!0)}var U3=[{n:1,arrow:!0,tip:"\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D \u043E\u0434\u043D\u0438\u043C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u043C. \u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435 <b>\u0432\u0434\u043E\u043B\u044C \u0441\u0442\u0440\u0435\u043B\u043A\u0438</b>, \u0438 \u0441\u043B\u043E\u0439 \u0432\u0441\u0442\u0430\u043D\u0435\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u043E."},{n:2,arrow:!0,tip:"\u0422\u0435\u043F\u0435\u0440\u044C \u0434\u0432\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430. \u0412\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0435, \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0445\u043E\u0434\u0430 \u043E\u043D\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u0432\u0442\u043E\u0440\u043E\u0439."},{n:2,arrow:!1,tip:"\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u043B\u043A\u0438. \u041D\u0430\u0439\u0434\u0438 \u0441\u043B\u043E\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0438 \u0435\u0433\u043E. \u0417\u0430\u0441\u0442\u0440\u044F\u043B \u2014 \xAB\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430\xBB \u0441\u0430\u043C\u0430 \u0441\u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u0445\u043E\u0434."}],b1=null;function Ys(){return x&&(u5==="game"||u5==="train")?$2():A1.size===2?2:3}function Fe(C,e){F2(),I6(),b1={size:Ys(),step:0,scramble:[],moves:[],back:C,inGame:!!e,hints:0,wrong:0},Y3("train"),s1.autoSpin=!1,s1.setSize(b1.size),s1.mode="solve",v6(0),requestAnimationFrame(Yr)}function v6(C){b1.step=C,b1.moves=[],b1.wrong=0,b1.solved=!1;let e=U3[C];s1.reset();for(let t of s1.stickers)s1.setLook(t,"color");s1.rotateTo(s1.baseView,300),b1.scramble=br(e.n,b1.size),b1.mixing=!0,setTimeout(()=>{b1&&Promise.all(b1.scramble.map(t=>s1.turn(t,!0,520))).then(()=>{b1&&(b1.mixing=!1,S6())})},450),Q("#tr-step").textContent=`${C+1} \u0438\u0437 ${U3.length}`,Q("#tr-dots").innerHTML=U3.map((t,i)=>`<i class="${i<C?"done":i===C?"on":""}"></i>`).join(""),S6()}function De(){if(!b1)return null;let C=O6([...b1.scramble,...b1.moves]),e=C[C.length-1];return e?{ax:e.ax,l:e.l,d:e.d===2?1:-e.d}:null}var dr=()=>O6([...b1.scramble,...b1.moves]).reduce((C,e)=>C+Math.abs(e.d),0);function S6(){if(!b1)return;let C=U3[b1.step],e=C.tip;b1.mixing?e="\u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F.":b1.wrong&&C.arrow&&(e="\u042D\u0442\u043E\u0442 \u0441\u043B\u043E\u0439 \u043B\u0438\u0448\u043D\u0438\u0439, \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0442\u0440\u0430\u0448\u043D\u043E\u0433\u043E: \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043F\u043E\u043A\u0430\u0436\u0435\u0442, \u043A\u0430\u043A \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u0443\u0442\u044C."),Q("#tr-foot").innerHTML=`<div class="tip" id="tr-tip">${e}<br><small>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E.</small></div>
  <div class="tools">
    <button class="tool" id="tr-undo"${b1.moves.length&&!b1.mixing?"":" disabled"}>${F1(B1.undo)}\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C</button>
    <button class="tool hint" id="tr-hint"${b1.mixing?" disabled":""}>${F1(B1.hint)}\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430</button>
    <button class="tool" id="tr-view">${F1(B1.view)}\u0412\u0438\u0434</button>
    <button class="tool" id="tr-again"${b1.mixing?" disabled":""}>${F1(B1.shuffle)}\u0417\u0430\u043D\u043E\u0432\u043E</button>
  </div>`}async function zr(C,e){let t=dr();b1.moves.push({ax:C.ax,l:C.l,d:C.d}),p2("turn"),await s1.turn(C,!0,e?420:190),b1&&(b1.wrong=dr()>t?1:0,s1.isSolved()?Xr():S6())}function Gr(C){!b1||b1.mixing||b1.solved||s1.busy||(Y7(),zr(C))}function Qs(){if(!b1||b1.mixing||b1.solved||s1.busy)return;let C=b1.moves.pop();C&&(p2("turn"),s1.turn({ax:C.ax,l:C.l,d:-C.d}).then(()=>{b1&&(b1.wrong=0,s1.isSolved()?Xr():S6())}))}function Wr(){if(!b1||b1.mixing||b1.solved||s1.busy)return;let C=De();C&&(b1.hints++,zr(C,!0))}function Xr(){b1.solved=!0,p2("stage"),s1.spin(1e3);let C=b1.step===U3.length-1;Q("#tr-tip").innerHTML=C?"<b>\u0421\u043E\u0431\u0440\u0430\u043D\u043E.</b>":"<b>\u0421\u043E\u0431\u0440\u0430\u043D\u043E.</b> \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435.",setTimeout(()=>{if(!b1)return;if(!C){v6(b1.step+1);return}A1.trained=1,q2();let e=b1.inGame;l2(`<div class="m-title">\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430</div><div class="m-text">
      <p>\u0412 \u0438\u0433\u0440\u0435 \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0442\u0430\u043A \u0436\u0435: \u043F\u0440\u043E\u0432\u0451\u043B \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F.</p>
      <p>\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043E\u0434\u043D\u0430: \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439. \u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0442\u043E\u0438\u0442 ${C0}, \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0445\u043E\u0434 \u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A\u043E\u0439 \u0441\u043B\u043E\u0439 \u0432\u044B\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u043E\u043C \u043A\u0440\u0443\u0442\u0438.</p></div>`,e?[["go","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A","primary"],["again","\u0415\u0449\u0451 \u0440\u0430\u0437",""]]:[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"],["again","\u0415\u0449\u0451 \u0440\u0430\u0437",""]]).then(t=>{t==="again"?v6(0):ke()})},1100)}function ke(){if(!b1)return;let C=b1.back;b1=null,$r(),F2(),s1.mode="view",C()}var qr=()=>Q("#guide");function $r(){let C=qr();C&&(C.style.display="none")}function Yr(C){if(!b1||u5!=="train"){$r();return}let e=qr(),r=(U3[b1.step].arrow||b1.showArrow)&&!b1.mixing&&!b1.solved&&!s1.busy&&!s1.tweens.length&&Q("#modal").hidden?s1.guide(De()):null;if(!r)e.style.display="none";else{e.style.display="block";let H=s1.canvas.getBoundingClientRect();e.setAttribute("viewBox",`0 0 ${H.width} ${H.height}`);let V=Math.max(6,r.cell*.17),n=r.x1-r.x0,a=r.y1-r.y0,L=Math.hypot(n,a),o=n/L,M=a/L,s=r.x1-o*V*2.4,l=r.y1-M*V*2.4,u=-M*V*1.9,f=o*V*1.9;for(let h of["#g-line","#g-line2"])Q(h,e).setAttribute("d",`M${r.x0},${r.y0} L${s},${l}`);Q("#g-line",e).setAttribute("stroke-width",V+5),Q("#g-line2",e).setAttribute("stroke-width",V),Q("#g-head",e).setAttribute("d",`M${r.x1},${r.y1} L${s+u},${l+f} L${s-u},${l-f} Z`);let c=C%1500/1500,d=Math.min(1,c/.75),v=1-Math.pow(1-d,2),y=Q("#g-finger",e);y.setAttribute("cx",r.x0+n*v*.85),y.setAttribute("cy",r.y0+a*v*.85),y.setAttribute("r",r.cell*.2),y.setAttribute("opacity",c<.75?.85:.85*(1-(c-.75)/.25))}requestAnimationFrame(Yr)}var cr=C=>Math.ceil(n0()*(C===3?49:38)/54);function Ks(C){return C.solved?C.correct>=cr(3)?3:C.correct>=cr(2)?2:1:0}function V4(C){let e=x.level,t={correct:x.lv.correct,points:x.lv.points,solved:C,hints:x.lv.hints,free:!!x.free,cuts:x.lv.cuts||0,skips:x.lv.skips||0,bonus:C?x.free?w6():hr():0,left:C&&!x.free?x.tokens:0,leftPts:C&&!x.free?x.tokens*5*e:0,time:x.msOk?Math.round((x.ms||0)/1e3):-1};t.total=t.points+t.bonus+t.leftPts,t.stars=Ks(t),x.score+=t.bonus+t.leftPts,x.results[e]=t,x.phase="result",n2(),G5(),J0(),s1.mode="view",C?(p2("win"),s1.spin(1400),setTimeout(Y0,1500)):Y0()}function Y0(){if(x.ch){HH();return}let C=x.level,e=x.results[C],t=[1,2,3].map(V=>F1(V<=e.stars?B1.star:B1.starOff,"ic"+(V<=e.stars?"":" off"))).join(""),i=[["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",`${e.correct} \u0438\u0437 ${n0()}`],["\u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B",e.points],...e.cuts?[["\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \xAB50 \u043D\u0430 50\xBB",e.cuts]]:[],...e.skips?[["\u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432",e.skips]]:[],...e.solved&&e.free?[["\u041F\u0440\u0438\u0437\u043E\u0432\u044B\u0435: \u0441\u043E\u0431\u0440\u0430\u043B \u0441\u0430\u043C",e.bonus]]:[],...e.solved&&!e.free?[["\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A",e.bonus],[`\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ${T5(e.left)}`,e.leftPts]]:[],...e.time>=0?[["\u0412\u0440\u0435\u043C\u044F \u0443\u0440\u043E\u0432\u043D\u044F",Ge(e.time)]]:[]],r=`<div class="m-title">${e.solved?`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C} \u043F\u0440\u043E\u0439\u0434\u0435\u043D`:"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="stars">${t}</div>
    <div class="rows">${i.map(([V,n])=>`<div><span>${V}</span><b>${n}</b></div>`).join("")}
    <div class="tot"><span>\u0412\u0441\u0435\u0433\u043E \u043E\u0447\u043A\u043E\u0432</span><b>${x.score}</b></div></div>`,H=[];C<3?e.solved?H.push(["next","\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]):(H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["next","\u0414\u0430\u043B\u044C\u0448\u0435 \u0431\u0435\u0437 \u0431\u043E\u043D\u0443\u0441\u0430",""])):(e.solved||H.push(["retry","\u041F\u0435\u0440\u0435\u0438\u0433\u0440\u0430\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C","primary"]),H.push(["final","\u0418\u0442\u043E\u0433\u0438 \u0438\u0433\u0440\u044B",e.solved?"primary":""])),H.push(["duel",F1(B1.duel)+"\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443",""]),H.push(["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]),l2(r,H).then(V=>{V==="duel"?iH():V==="next"?Js():V==="retry"?Qr():V==="final"?js():H5()})}function Js(){let C=x.topics;x.level++,x.phase="topics",x.topics=H4(x.level,C),n2(),t0()}function Qr(){x.score-=x.lv.points+(x.results[x.level]&&x.results[x.level].bonus+x.results[x.level].leftPts||0),delete x.results[x.level],x.phase="topics",n2(),t0()}function js(){let C=x.score,e=$2()===2?"best2":"best",t=C>(A1[e]||0);t&&(A1[e]=C),A1.games++,q2();let i=[1,2,3].filter(r=>x.results[r]).map(r=>{let H=x.results[r];return`<div><span>${V0[r].name}${H.solved?"":", \u043A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</span><b>${H.total}</b></div>`}).join("");x=null,n2(),l2(`<div class="m-title">\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430</div><div class="stars">${F1(B1.trophy)}</div>
    <div class="rows">${i}<div class="tot"><span>\u0418\u0442\u043E\u0433\u043E</span><b>${C}</b></div></div>
    <div class="m-text" style="text-align:center">${t?"\u042D\u0442\u043E \u043D\u043E\u0432\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434.":`\u0420\u0435\u043A\u043E\u0440\u0434${e==="best2"?" \u043D\u0430 2\xD72":""}: ${A1[e]}.`}</div>`,[["new","\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(r=>r==="new"?m6():H5())}var Kr="menu",eM={0:"\u043B\u044E\u0431\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",1:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 1",2:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 2",3:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C 3"};function i4(C){C&&(Kr=C),F2(),R6();let e=[1,2,3].map(t=>K7(t).length);Q("#my-lead").innerHTML=X2.list.length?`\u0413\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u0432\u043D\u0435\u043C, \u0435\u0441\u043B\u0438 \u0434\u043B\u044F \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 (\u0434\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4). \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u0435\u0437 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0442\u0440\u0451\u0445.<br>
      <span class="mycount">${[1,2,3].map((t,i)=>`<b class="${e[i]>=9?"ok":""}">\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${t}: ${e[i]}${e[i]<9?` (\u0435\u0449\u0451 ${9-e[i]})`:""}</b>`).join("")}</span>`:"\u0417\u0434\u0435\u0441\u044C \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0438\u0433\u0440\u0430\u0442\u044C \u0438\u043C\u0438 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0433\u0440\u0430\u043D\u0435\u0439 \u043A\u0443\u0431\u0438\u043A\u0430. \u041D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B 9 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: \u0441\u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0435\u0442\u043E\u043A \u043D\u0430 \u0433\u0440\u0430\u043D\u0438. \u0414\u043B\u044F \u043A\u0443\u0431\u0438\u043A\u0430 2\xD72 \u0445\u0432\u0430\u0442\u0438\u0442 4.<br><br>\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0437\u0434\u0435\u0441\u044C \u0438\u043B\u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0432 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u043C \u0444\u0430\u0439\u043B\u0435 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\xBB.",Q("#my-list").innerHTML=X2.list.map((t,i)=>`<button class="myq" data-id="${t.id}">
    <span class="myq-n">${i+1}</span><span class="myq-t"><b>${e2(t.q)}</b><small><span class="okc">${e2(t.a[0])}</span> \xB7 ${eM[t.lv||0]}</small></span></button>`).join(""),Q("#my-add").innerHTML=F1(B1.plus)+"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",Q("#my-save").innerHTML=F1(B1.save)+"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",Q("#my-load").innerHTML=F1(B1.load)+"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C",Q("#my-save").disabled=!X2.list.length,Y3("my")}function tM(){Kr==="topics"&&x&&x.phase==="topics"?(x.topics=H4(x.level,x.topics),n2(),t0()):H5()}var e4=0,g6=0;function pr(C){let e=C?p6(C):null;e4=e?e.id:0,g6=e&&e.lv||0;let t=(i,r)=>`<input id="e-a${i}" maxlength="${U5.a}" autocomplete="off" placeholder="${r}" value="${e?e2(e.a[i]):""}">`;Q("#ecard").innerHTML=`<div class="m-title">${e?"\u0412\u043E\u043F\u0440\u043E\u0441":"\u041D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"}</div>
    <label class="fl"><span>\u0412\u043E\u043F\u0440\u043E\u0441</span><textarea id="e-q" rows="3" maxlength="${U5.q}">${e?e2(e.q):""}</textarea></label>
    <label class="fl okf"><span>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442</span>${t(0,"")}</label>
    <div class="fl badf"><span>\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B</span>${t(1,"\u043F\u0435\u0440\u0432\u044B\u0439")}${t(2,"\u0432\u0442\u043E\u0440\u043E\u0439")}${t(3,"\u0442\u0440\u0435\u0442\u0438\u0439")}</div>
    <label class="fl"><span>\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u0432\u0435\u0442\u0430, \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C</span><textarea id="e-e" rows="2" maxlength="${U5.e}">${e?e2(e.e||""):""}</textarea></label>
    <div class="fl"><span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C</span><div class="seg">${[0,1,2,3].map(i=>`<button data-elv="${i}" class="${i===g6?"on":""}">${i||"\u041B\u044E\u0431\u043E\u0439"}</button>`).join("")}</div></div>
    <div class="e-err" id="e-err"></div>
    <div class="m-btns"><button class="btn primary" id="e-ok">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
    ${e?`<button class="btn ghost danger" id="e-del">${F1(B1.del)}\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441</button>`:""}
    <button class="btn ghost" id="e-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button></div>`,Q("#edit").hidden=!1,Q("#ecard").scrollTop=0}function R6(){Q("#edit").hidden=!0}function CM(){let C=c6({q:Q("#e-q").value,a:[0,1,2,3].map(i=>Q("#e-a"+i).value),e:Q("#e-e").value,lv:g6}),e=fe(C,e4);if(e){Q("#e-err").textContent=e,p2("deny");return}if(!Vr(C,e4)){Q("#e-err").textContent="\u041F\u0430\u043C\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0430, \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0441\u044F.";return}let t=!e4;if(R6(),i4(),t){B2(`\u0412\u043E\u043F\u0440\u043E\u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D. \u0412\u0441\u0435\u0433\u043E: ${X2.list.length}`);let i=Q("#my-list").lastElementChild;i&&i.scrollIntoView({block:"nearest"})}}function iM(){let C=e4;R6(),l2('<div class="m-title">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441?</div>',[["yes","\u0423\u0434\u0430\u043B\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{F2(),e==="yes"&&(nr(C),B2("\u0412\u043E\u043F\u0440\u043E\u0441 \u0443\u0434\u0430\u043B\u0451\u043D")),i4()})}async function rM(){let C="\u041A\u0443\u0431\u0438\u043A - \u043C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.txt",e=new File([Lr()],C,{type:"text/plain"});try{if(navigator.canShare&&navigator.canShare({files:[e]})){await navigator.share({files:[e]});return}}catch(i){if(i&&i.name==="AbortError")return}let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=C,document.body.appendChild(t),t.click(),setTimeout(()=>{URL.revokeObjectURL(t.href),t.remove()},2e3)}async function HM(C){if(!C)return;let e;try{e=or(ar(await sr(C)))}catch{e={added:0,dup:0,errors:["\u0424\u0430\u0439\u043B \u043D\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F."]}}let t=[`<p>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432: <b>${e.added}</b>.${e.dup?` \u0423\u0436\u0435 \u0431\u044B\u043B\u0438, \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u044B: ${e.dup}.`:""}</p>`];!e.added&&!e.dup&&!e.errors.length&&t.push("<p>\u0412 \u0444\u0430\u0439\u043B\u0435 \u043D\u0435 \u043D\u0430\u0448\u043B\u043E\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432. \u041E\u0431\u0440\u0430\u0437\u0435\u0446: \u0432\u043E\u043F\u0440\u043E\u0441, \u0441\u0442\u0440\u043E\u043A\u0430 \xAB+ \u0432\u0435\u0440\u043D\u044B\u0439\xBB, \u0442\u0440\u0438 \u0441\u0442\u0440\u043E\u043A\u0438 \xAB- \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439\xBB.</p>"),e.errors.length&&t.push(`<p>\u041D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:</p><ul class="errs">${e.errors.slice(0,12).map(i=>`<li>${e2(i)}</li>`).join("")}${e.errors.length>12?`<li>\u0438 \u0435\u0449\u0451 ${e.errors.length-12}</li>`:""}</ul>`),i4(),l2(`<div class="m-title">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432</div><div class="m-text">${t.join("")}</div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(F2)}var VM=["\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442","\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E","\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0438","\u0423\u0441\u0442\u0430\u0440\u0435\u043B\u043E","\u041E\u043F\u0435\u0447\u0430\u0442\u043A\u0430","\u0414\u0440\u0443\u0433\u043E\u0435"],Z6="",Ne="";function nM(C){let e=Q(".after");Ne=e.innerHTML,Z6="",e.innerHTML=`<div class="rep" data-qid="${e2(C)}"><div class="rep-t">\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u043C?</div>
    <div class="rep-r">${VM.map(t=>`<button data-rr="${e2(t)}">${t}</button>`).join("")}</div>
    <label class="fl"><textarea id="rep-note" rows="2" maxlength="300" placeholder="\u041A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0435\u0448\u044C (\u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C)"></textarea></label>
    <div class="e-err" id="rep-err"></div>
    <div class="two-sm"><button class="btn ghost" id="rep-cancel">\u041E\u0442\u043C\u0435\u043D\u0430</button><button class="btn primary" id="rep-send">${F1(B1.share)}\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button></div></div>`,e.scrollIntoView({block:"nearest",behavior:"smooth"})}function Ue(C){let e=`\u041A\u0443\u0431\u0438\u043A ${T0}, \u0431\u0430\u0437\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u2116${z5(m2)}`,t=(i,r)=>[C.length>1?`${r+1}.`:"",`\u0422\u0435\u043C\u0430: ${S2[i.t]&&S2[i.t].name||i.t}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${i.l}`,`\u0412\u043E\u043F\u0440\u043E\u0441: ${i.q}`,`\u0412\u0435\u0440\u043D\u044B\u0439 \u043F\u043E \u0438\u0433\u0440\u0435: ${i.a[0]}`,`\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B: ${i.a.slice(1).join(" / ")}`,i.e?`\u041F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435: ${i.e}`:"",`\u0427\u0442\u043E \u043D\u0435 \u0442\u0430\u043A: ${i.r}`,i.n?`\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439: ${i.n}`:""].filter(Boolean).join(`
`);return`${e}
${C.length>1?`\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${C.length}`:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435"}

${C.map(t).join(`

`)}`}function ze(C,e){return navigator.share?navigator.share({title:C,text:e}).then(()=>"sent",t=>t&&t.name==="AbortError"?"cancel":ur(e)):ur(e)}function ur(C){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(C).then(()=>"copied",()=>"kept"):Promise.resolve("kept")}function LM(){let C=Q(".rep");if(!Z6){Q("#rep-err").textContent="\u0412\u044B\u0431\u0435\u0440\u0438, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A",p2("deny");return}let e=C.dataset.qid,t=$3(e);if(!t)return;let[i,r]=e.split("-"),H={d:new Date().toISOString().slice(0,10),t:i,l:+r,q:t.q,a:t.a.slice(),e:t.e||"",r:Z6,n:Q("#rep-note").value.trim().slice(0,300),rev:z5(m2)};A1.reports=(A1.reports||[]).filter(a=>X0(a)!==X0(H)).concat(H).slice(-200),A1.bad=A1.bad||[],A1.bad.includes(X0(H))||A1.bad.push(X0(H)),q2();let V=Q(".after");V.innerHTML=Ne;let n=Q("#q-rep");n&&(n.outerHTML=`<div class="rep-ok">${F1(B1.check)}\u0421\u043F\u0430\u0441\u0438\u0431\u043E. \u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430, \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F.</div>`),p2("tap"),ze("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435",Ue([H])).then(a=>{a==="copied"?B2("\u0422\u0435\u043A\u0441\u0442 \u0436\u0430\u043B\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"):a!=="sent"&&B2("\u0416\u0430\u043B\u043E\u0431\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430: \u043C\u0435\u043D\u044E \u2192 \xAB\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445\xBB")})}function aM(){Q(".after").innerHTML=Ne}function oM(){let C=A1.reports||[];if(!C.length)return;let e=C.slice().reverse().map(t=>`<li><b>${e2(t.q)}</b><small>${e2(S2[t.t]&&S2[t.t].name||t.t)}, \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.l} \xB7 ${e2(t.r)}${t.n?" \xB7 "+e2(t.n):""}</small></li>`).join("");l2(`<div class="m-title">\u041E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445: ${C.length}</div><div class="m-text">
    <p>\u042D\u0442\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u0433\u0440\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0437\u0430\u0434\u0430\u0451\u0442. \u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B, \u043E\u043D \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442 \u0438\u0445 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.</p>
    <ul class="replist">${e}</ul></div>`,[["send",F1(B1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435","primary"],["clear","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A","ghost danger"],["ok","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(t=>{F2(),t==="send"?ze("\u041A\u0443\u0431\u0438\u043A: \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u0445",Ue(C)).then(i=>{i==="copied"&&B2("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0433\u043E \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")}):t==="clear"&&l2('<div class="m-title">\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A?</div><div class="m-text"><p>\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C\u0441\u044F, \u043F\u043E\u043A\u0430 \u0438\u0445 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u044F\u0442.</p></div>',[["yes","\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(i=>{F2(),i==="yes"&&(A1.reports=[],q2(),H5())})})}var X3="kubik.chal.v1",_6=C=>{let e=new TextEncoder().encode(C),t="";for(let i of e)t+=String.fromCharCode(i);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},sM=C=>new TextDecoder().decode(Uint8Array.from(atob(C.replace(/-/g,"+").replace(/_/g,"/")),e=>e.charCodeAt(0)));function _e(C){let e=X0(C),t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return((t>>>0)%46656).toString(36).padStart(3,"0")}var Ge=C=>{if(!(C>=0))return"\u2014";let e=Math.floor(C/3600),t=Math.floor(C/60)%60,i=C%60;return(e?`${e}:${String(t).padStart(2,"0")}`:`${t}`)+":"+String(i).padStart(2,"0")},P6=()=>A1.duels=A1.duels||[],We=()=>location.origin+location.pathname.replace(/index\.html$/,"")+"?v="+T0,Xe=C=>S2[C]?S2[C].name:C,Jr=C=>C===1?"\u0441\u043E\u0431\u0440\u0430\u043D":C===2?"\u0441\u043E\u0431\u0440\u0430\u043D \u0441\u0430\u043C":"\u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D",W0=C=>Number.isFinite(+C)?Math.round(+C):0;function jr(C,e){return{n:C,p:e.total,c:e.correct,o:e.solved?e.free?2:1:0,k:e.left||0,h:e.hints||0,x:e.cuts||0,y:e.skips||0,w:e.time>=0?e.time:-1}}function Ar(C){return!C||typeof C!="object"?null:{n:String(C.n||"\u0414\u0440\u0443\u0433").slice(0,20),p:W0(C.p),c:W0(C.c),o:[0,1,2].includes(+C.o)?+C.o:0,k:W0(C.k),h:W0(C.h),x:W0(C.x),y:W0(C.y),w:C.w>=0?W0(C.w):-1}}function qe(C){let e;try{e=JSON.parse(sM(C))}catch{return null}if(!e||e.v!==1||typeof e.id!="string"||!/^[a-z0-9]{4,12}$/.test(e.id)||!V0[e.l]||![2,3].includes(e.s))return null;let t=String(e.t||"").split(","),i=String(e.tm||"").split(",").map(V=>ve.includes(+V)?+V:0),r=String(e.q||"").split(",");if(t.length!==6||i.length!==6||r.length!==6||!/^([xyz][+-][+-]){1,30}$/.test(e.m||""))return null;let H=Ar(e.a);return H?(e.a=H,e.b&&(e.b=Ar(e.b)),{raw:e,topics:t,timers:i,faces:r}):null}function MM(C){return C.map(e=>e.ax+(e.l>0?"+":"-")+(e.d>0?"+":"-")).join("")}function lM(C,e){let t=e===2?.5:1;return(C.match(/.../g)||[]).map(i=>({ax:i[0],l:i[1]==="+"?t:-t,d:i[2]==="+"?1:-1}))}function ye(C){let e=C.raw.s*C.raw.s,t={},i=0,r=!1;return y2.forEach((H,V)=>{let n=C.topics[V],a=m2[n]&&m2[n][C.raw.l]||[],L=C.faces[V].match(/.{5}/g)||[];if(L.length!==e||n==="my"){r=!0;return}let o=L.map(l=>{let u=parseInt(l.slice(0,2),36),f=l.slice(2);if(a[u]&&_e(a[u])===f)return u;let c=a.findIndex(d=>_e(d)===f);return c<0&&i++,c}),M=new Set(o.filter(l=>l>=0)),s=r0(a.map((l,u)=>u).filter(l=>!M.has(l)));if(o=o.map(l=>l>=0?l:s.shift()),o.some(l=>l===void 0)){r=!0;return}t[H]=o.map(l=>`${n}-${C.raw.l}-${l}`)}),{qs:t,miss:i,broken:r}}async function dM(){try{let e=await(await fetch("ru.json?fresh="+Date.now(),{cache:"no-store"})).json();if(x6(e)&&O0(e._meta.app)<=O0(T0)&&z5(e)>z5(m2))return we(e),await Zr(e),!0}catch{}return!1}function $e(C,e){let t=P6(),i=t.find(r=>r.id===C.id);if(!i){let r={...C};delete r.b,i={id:C.id,at:new Date().toISOString().slice(0,10),mine:!!e,raw:r,me:null,others:[]},t.push(i),t.length>30&&t.splice(0,t.length-30)}return i}function eH(C,e){let t=C.others.findIndex(i=>i.n===e.n);t>=0?C.others[t]=e:C.others.push(e)}var Ye=C=>[{...C.raw.a,me:C.mine},...C.me&&!C.mine?[{...C.me,me:!0}]:[],...C.others.map(e=>({...e,me:!1}))];function cM(C){let e=t=>t.w>=0?t.w:1e9;return C.slice().sort((t,i)=>i.p-t.p||(i.o?1:0)-(t.o?1:0)||e(t)-e(i))}function tH(C){if(C.length<2)return"\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B \u043D\u0430 \u0432\u044B\u0437\u043E\u0432.";let e=cM(C),[t,i]=e;if(t.p===i.p&&!!t.o==!!i.o&&t.w===i.w)return`\u041D\u0438\u0447\u044C\u044F: \u043F\u043E ${t.p} \u043E\u0447\u043A\u043E\u0432`;let r=t.p!==i.p?`${t.p} \u043E\u0447\u043A\u043E\u0432 \u043F\u0440\u043E\u0442\u0438\u0432 ${i.p}`:!!t.o!=!!i.o?"\u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u0440\u043E\u0432\u043D\u0443, \u043D\u043E \u043A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043D":"\u043E\u0447\u043A\u043E\u0432 \u043F\u043E\u0440\u043E\u0432\u043D\u0443, \u043D\u043E \u0431\u044B\u0441\u0442\u0440\u0435\u0435";return C.length>2?`\u041F\u0435\u0440\u0432\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: ${t.me?"\u0442\u044B":e2(t.n)} (${r.replace(` \u043F\u0440\u043E\u0442\u0438\u0432 ${i.p}`,"")})`:t.me?`\u041F\u043E\u0431\u0435\u0434\u0430 \u0437\u0430 \u0442\u043E\u0431\u043E\u0439: ${r}`:`\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u2014 ${e2(t.n)}: ${r}`}function CH(C){let e=6*C.raw.s*C.raw.s,t=Ye(C),i=t.slice(0,4),r=[["\u041E\u0447\u043A\u0438",n=>n.p,n=>n.p,1],["\u0412\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432",n=>`${n.c} \u0438\u0437 ${e}`,n=>n.c,1],["\u041A\u0443\u0431\u0438\u043A",n=>Jr(n.o),n=>n.o?1:0,1],["\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432",n=>n.o===1?n.k:"\u2014",n=>n.o===1?n.k:-1,1],["\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0438 \u043F\u0440\u0438 \u0441\u0431\u043E\u0440\u043A\u0435",n=>n.h,n=>n.h,-1],["\xAB50 \u043D\u0430 50\xBB / \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438",n=>`${n.x} / ${n.y}`,null,0],["\u0412\u0440\u0435\u043C\u044F",n=>Ge(n.w),n=>n.w>=0?n.w:null,-1]],H=`<tr><th></th>${i.map(n=>`<th class="${n.me?"me":""}">${n.me?"\u0422\u044B":e2(n.n)}</th>`).join("")}</tr>`,V=r.map(([n,a,L,o])=>{let M=null;if(L&&o&&i.length>1){let s=i.map(L).filter(u=>u!==null),l=o>0?Math.max(...s):Math.min(...s);s.length>1&&s.some(u=>u!==l)&&(M=l)}return`<tr><td>${n}</td>${i.map(s=>`<td class="${M!==null&&L(s)===M?"best":""}">${e2(a(s))}</td>`).join("")}</tr>`}).join("");return`<table class="duel">${H}${V}</table>${t.length>4?`<p class="m-note">\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0438\u0433\u0440\u043E\u043A\u0430 \u0438\u0437 ${t.length}.</p>`:""}`}function q3(C){return`\u0423\u0440\u043E\u0432\u0435\u043D\u044C ${C.l} \xB7 ${V0[C.l].name}, \u043A\u0443\u0431\u0438\u043A ${i0[C.s].name}`}function pM(C){return`<div class="dtopics">${y2.map((e,t)=>`<span>${S2[C.topics[t]]?t4(e,C.topics[t]):t4(e)}${e2(Xe(C.topics[t]))}${C.timers[t]?` <small>${C.timers[t]} \u0441</small>`:""}</span>`).join("")}</div>`}function r4(C,e){return`${C.p} \u043E\u0447\u043A\u043E\u0432, \u0432\u0435\u0440\u043D\u044B\u0445 ${C.c} \u0438\u0437 ${e}, \u043A\u0443\u0431\u0438\u043A ${Jr(C.o)}${C.w>=0?`, \u0432\u0440\u0435\u043C\u044F ${Ge(C.w)}`:""}`}function Qe(C){return l2(`<div class="m-title">${C}</div><label class="fl"><span>\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C? \u042D\u0442\u043E \u0438\u043C\u044F \u0443\u0432\u0438\u0434\u0438\u0442 \u0434\u0440\u0443\u0433.</span>
    <input id="nm" maxlength="20" autocomplete="off" value="${e2(A1.name||"")}" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u041C\u0430\u0440\u044C\u044F\u043D"></label>`,[["ok","\u0413\u043E\u0442\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{if(e!=="ok")return null;let t=Q("#nm").value.trim().replace(/\s+/g," ").slice(0,20);return t?(A1.name=t,q2(),t):Qe(C)})}function Ke(C,e,t){return ze(C,`${e}
${t}`).then(i=>i==="copied"?(B2("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430, \u0432\u0441\u0442\u0430\u0432\u044C \u0435\u0451 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),i):i!=="kept"?i:l2(`<div class="m-title">\u0421\u0441\u044B\u043B\u043A\u0430</div><div class="m-text"><p>\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439 \u0435\u0451 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u0432 Telegram \u0438\u043B\u0438 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0438.</p>
      <label class="fl"><textarea id="lnk" rows="5" readonly>${e2(e+`
`+t)}</textarea></label></div>`,[["ok","\u0413\u043E\u0442\u043E\u0432\u043E","primary"]]).then(()=>i))}function iH(){if(y2.some(e=>x.topics[e]==="my")){l2(`<div class="m-title">\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443</div><div class="m-text"><p>\u041D\u0430 \u044D\u0442\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u0431\u044B\u043B\u0430 \u0433\u0440\u0430\u043D\u044C \xAB\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B\xBB. \u041E\u043D\u0438 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0442\u0432\u043E\u0451\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0434\u0440\u0443\u0433\u0443 \u0438\u0445 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C.</p>
      <p>\u0421\u044B\u0433\u0440\u0430\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0431\u0435\u0437 \u0441\u0432\u043E\u0435\u0439 \u0433\u0440\u0430\u043D\u0438, \u0438 \u043F\u043E\u0441\u043B\u0435 \u043D\u0435\u0433\u043E \u0432\u044B\u0437\u043E\u0432 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C.</p></div>`,[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Y0);return}let C=e=>{if(!e){Y0();return}let t=x.results[x.level],i={v:1,id:t.duel||(Date.now().toString(36).slice(-5)+j7(1296).toString(36)).padEnd(7,"0"),ap:T0,r:z5(m2),l:x.level,s:$2(),t:y2.map(H=>x.topics[H]).join(","),tm:y2.map(H=>e0(H)).join(","),m:MM(x.scramble),q:y2.map(H=>x.stageQ[H].map(V=>{let n=$3(V);return(+V.split("-")[2]).toString(36).padStart(2,"0")+(n?_e(n):"000")}).join("")).join(","),a:jr(e,t)};t.duel=i.id,n2(),$e(i,!0),q2();let r=`\u0412\u044B\u0437\u043E\u0432 \u0432 \u0438\u0433\u0440\u0443 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${q3(i).toLowerCase()}.
\u0422\u0435\u043C\u044B: ${y2.map(H=>Xe(x.topics[H])).join(", ")}.
\u041C\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ${r4(i.a,n0())}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C.`;Ke("\u041A\u0443\u0431\u0438\u043A: \u0432\u044B\u0437\u043E\u0432",r,`${We()}#ch=${_6(JSON.stringify(i))}`).then(Y0)};A1.name?C(A1.name):Qe("\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443").then(C)}function Q0(){F2(),u5==="game"&&x&&x.phase!=="topics"?H0():u5==="menu"&&H5()}async function y6(C){let e=String(C||"").match(/#(ch|re)=([\w-]{20,6000})/);if(!e)return!1;let t=qe(e[2]);return t?O0(t.raw.ap)>O0(T0)?(l2('<div class="m-title">\u041D\u0443\u0436\u043D\u0430 \u043D\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B</div><div class="m-text"><p>\u0412\u044B\u0437\u043E\u0432 \u0441\u0434\u0435\u043B\u0430\u043D \u0432 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \xAB\u041A\u0443\u0431\u0438\u043A\u0430\xBB. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Q0),!0):(e[1]==="re"&&t.raw.b?uM(t):await Je(t),!0):(l2('<div class="m-title">\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0430</div><div class="m-text"><p>\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0432\u044B\u0437\u043E\u0432. \u041F\u043E\u043F\u0440\u043E\u0441\u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044C, \u0447\u0442\u043E \u043E\u043D\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0446\u0435\u043B\u0438\u043A\u043E\u043C.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Q0),!0)}function uM(C){let e=$e(C.raw,!!A1.name&&A1.name===C.raw.a.n),t=C.raw.b;e.me&&e.me.n===t.n&&e.me.p===t.p&&e.me.c===t.c||eH(e,t),q2(),p2("stage"),j0(e,e.mine?`\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0442\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432: ${e2(t.n)}`:null)}async function Je(C){let e=P6().find(a=>a.id===C.raw.id);if(e&&e.mine){let a=await l2(`<div class="m-title">\u042D\u0442\u043E \u0442\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432</div><div class="m-text"><p>${q3(C.raw)}. \u0421\u0441\u044B\u043B\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043A\u043E\u043C\u0443-\u043D\u0438\u0431\u0443\u0434\u044C, \u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u0434\u0440\u0443\u0437\u0435\u0439 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u043C\u0435\u043D\u044E \xAB\u0412\u044B\u0437\u043E\u0432\u044B\xBB.</p></div>`,[["view","\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B","primary"],["play","\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443",""],["no","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]);a==="view"?j0(e):a==="play"?AM(C):Q0();return}if(e&&e.me){j0(e);return}let t=K0(X3);if(t&&t.ch&&t.ch.raw.id===C.raw.id&&t.phase!=="result"){x=t,H0(),B2("\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u043C \u0432\u044B\u0437\u043E\u0432");return}let i=ye(C);if((i.miss||i.broken)&&(+C.raw.r||0)>z5(m2)&&await dM()&&(i=ye(C)),i.broken){l2('<div class="m-title">\u0412\u044B\u0437\u043E\u0432 \u043D\u0435 \u043E\u0442\u043A\u0440\u044B\u043B\u0441\u044F</div><div class="m-text"><p>\u0412 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B \u043D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430. \u0417\u0430\u043A\u0440\u043E\u0439 \u0438\u0433\u0440\u0443 \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u043D\u043E\u0432\u0430, \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430\u0436\u0434\u044B. \u041F\u043E\u0442\u043E\u043C \u043E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443 \u0435\u0449\u0451 \u0440\u0430\u0437.</p></div>',[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"]]).then(Q0);return}let r=6*C.raw.s*C.raw.s,H=C.raw.a,V=t&&t.ch&&t.phase!=="result"?`<p class="m-note">\u041D\u0430\u0447\u0430\u0442\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 (${e2(t.ch.raw.a.n)}) \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u044D\u0442\u0438\u043C.</p>`:"",n=await l2(`<div class="m-title">${e2(H.n)} \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0442\u0435\u0431\u044F</div><div class="m-text">
    <p>${q3(C.raw)}. \u0422\u0435\u0431\u0435 \u0434\u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A.</p>
    ${pM(C)}
    <p>\u041D\u0443\u0436\u043D\u043E \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C: <b>${e2(H.n)}</b> \u2014 ${r4(H,r)}.</p>
    ${i.miss?`<p class="m-note">\u0412 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B ${z3(i.miss)} ${w0(i.miss,"\u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F, \u043E\u043D \u0437\u0430\u043C\u0435\u043D\u0451\u043D \u0434\u0440\u0443\u0433\u0438\u043C","\u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438","\u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F, \u043E\u043D\u0438 \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u0434\u0440\u0443\u0433\u0438\u043C\u0438")} \u0442\u043E\u0439 \u0436\u0435 \u0442\u0435\u043C\u044B.</p>`:""}
    <p class="m-note">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C: \u043A\u0430\u0436\u0434\u0430\u044F \u0433\u0440\u0430\u043D\u044C \u043A\u0443\u0431\u0438\u043A\u0430 \u2014 \u0442\u0435\u043C\u0430, \u043A\u0430\u0436\u0434\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u2014 \u0432\u043E\u043F\u0440\u043E\u0441. \u0417\u0430 \u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0448\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041A\u043E\u0433\u0434\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043A\u043E\u043D\u0447\u0430\u0442\u0441\u044F, \u0441\u043E\u0431\u0435\u0440\u0438 \u044D\u0442\u0438\u043C\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u043C\u0438 \u043A\u0443\u0431\u0438\u043A: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</p>${V}</div>`,[["go","\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0432\u044B\u0437\u043E\u0432","primary"],["help","\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",""],["no","\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441","ghost"]]);if(n==="go")rH(C,i);else if(n==="help"){let a=u5;T6(()=>{u5==="train"&&(a==="game"&&x?H0():H5()),Je(C)})}else Q0()}function AM(C){let e=ye(C);if(e.broken){B2("\u0412\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 \u043D\u0435\u0442 \u0432 \u0431\u0430\u0437\u0435");return}rH(C,e)}function rH(C,e){let t={...C.raw};delete t.b,x={v:1,ch:{raw:t,qs:e.qs,diff:e.miss},level:t.l,size:t.s,phase:"quiz",score:0,results:{},topics:Object.fromEntries(y2.map((i,r)=>[i,C.topics[r]])),timers:Object.fromEntries(y2.map((i,r)=>[i,C.timers[r]])),bq:{},scramble:lM(t.m,t.s),moves:[],cells:{},stage:null,order:[],myq:{},stageQ:{},pending:null,tokens:0,free:!1,lv:{correct:0,wrong:0,points:0,hints:0,cuts:0,skips:0},ms:0,msOk:1};for(let i of Object.values(e.qs))for(let r of i){let H=$3(r);H&&(x.bq[r]={q:H.q,a:H.a.slice(),e:H.e})}n2(),H0()}function HH(){let C=x.results[x.level],e=x.ch.raw,t=$e(e,!1),i=jr(A1.name||"",C);t.mine?eH(t,{...i,n:"\u0422\u044B, \u0435\u0449\u0451 \u0440\u0430\u0437"}):t.me=i,q2();let r=n0();l2(`<div class="m-title">${C.solved?"\u041A\u0443\u0431\u0438\u043A \u0441\u043E\u0431\u0440\u0430\u043D":"\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D"}</div>
    <div class="verd">${tH(Ye(t))}</div>${CH(t)}
    ${x.ch.diff?`<p class="m-note">\u0423 \u0442\u0435\u0431\u044F ${z3(x.ch.diff)} ${w0(x.ch.diff,"\u0431\u044B\u043B \u0434\u0440\u0443\u0433\u0438\u043C","\u0431\u044B\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438","\u0431\u044B\u043B\u0438 \u0434\u0440\u0443\u0433\u0438\u043C\u0438")}: \u0432 \u0442\u0432\u043E\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0438\u0433\u0440\u044B \u0438\u0445 \u043D\u0435\u0442.</p>`:""}
    <div class="m-text"><p>\u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0430\u0432\u0442\u043E\u0440\u0443 \u0432\u044B\u0437\u043E\u0432\u0430: \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0443 \u043D\u0435\u0433\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0442\u0430\u043A\u043E\u0435 \u0436\u0435 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435.</p></div>`,[["send",F1(B1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","primary"],["menu","\u0412 \u043C\u0435\u043D\u044E","ghost"]]).then(H=>{H==="send"&&!t.mine?VH(t,r).then(()=>x&&x.ch?HH():null):H==="send"?j0(t):H5()})}function VH(C,e){let t=i=>{if(!i)return null;let r=C.me;r.n=i,q2();let H=C.raw.a,V=`\xAB\u041A\u0443\u0431\u0438\u043A\xBB, \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432: ${q3(C.raw).toLowerCase()}.
${r.n}: ${r4(r,e)}.
${H.n}: ${r4(H,e)}.
\u041E\u0442\u043A\u0440\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0443, \u0442\u0430\u043C \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435:`;return Ke("\u041A\u0443\u0431\u0438\u043A: \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432",V,`${We()}#re=${_6(JSON.stringify({...C.raw,b:r}))}`)};return A1.name?t(A1.name):Qe("\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432").then(t)}function j0(C,e){let t=6*C.raw.s*C.raw.s,i=C.me,r=C.raw.a,H=e||(C.mine?"\u0422\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432":`\u0412\u044B\u0437\u043E\u0432 \xB7 ${e2(r.n)}`),V=[];C.mine?V.push(["resend",F1(B1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u044B\u0437\u043E\u0432 \u0435\u0449\u0451 \u0440\u0430\u0437","primary"]):i?V.push(["send",F1(B1.share)+"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442","primary"]):V.push(["play","\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0432\u044B\u0437\u043E\u0432","primary"]),V.push(["list","\u0412\u0441\u0435 \u0432\u044B\u0437\u043E\u0432\u044B",""],["close","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]),l2(`<div class="m-title">${H}</div><p class="m-sub">${q3(C.raw)} \xB7 ${C.at.split("-").reverse().join(".")}</p>
    <div class="verd">${tH(Ye(C))}</div>${CH(C)}
    ${C.mine&&!C.others.length?'<div class="m-text"><p>\u041A\u043E\u0433\u0434\u0430 \u0434\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u0435\u0442, \u043E\u043D \u043F\u0440\u0438\u0448\u043B\u0451\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C. \u041E\u0442\u043A\u0440\u043E\u0439 \u0435\u0451, \u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C.</p></div>':""}`,V).then(n=>{if(n==="resend"){let a=`\u0412\u044B\u0437\u043E\u0432 \u0432 \u0438\u0433\u0440\u0443 \xAB\u041A\u0443\u0431\u0438\u043A\xBB: ${q3(C.raw).toLowerCase()}.
\u0422\u0435\u043C\u044B: ${String(C.raw.t).split(",").map(Xe).join(", ")}.
\u041C\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ${r4(r,t)}. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0431\u044B\u0433\u0440\u0430\u0442\u044C.`;Ke("\u041A\u0443\u0431\u0438\u043A: \u0432\u044B\u0437\u043E\u0432",a,`${We()}#ch=${_6(JSON.stringify(C.raw))}`).then(()=>j0(C,e))}else if(n==="send")VH(C,t).then(()=>j0(C,e));else if(n==="play"){let a=qe(_6(JSON.stringify(C.raw)));a&&Je(a)}else n==="list"?B6():Q0()})}function B6(){let C=P6(),e=C.map((t,i)=>{let r=t.raw.a,H=t.me,V=t.others,n=t.mine?`\u0422\u0432\u043E\u0439 \u0432\u044B\u0437\u043E\u0432 \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.raw.l} \xB7 ${i0[t.raw.s].name}`:`\u0412\u044B\u0437\u043E\u0432 \xB7 ${e2(r.n)} \xB7 \u0443\u0440\u043E\u0432\u0435\u043D\u044C ${t.raw.l} \xB7 ${i0[t.raw.s].name}`,a=t.mine?V.length?`\u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438: ${V.map(L=>`${e2(L.n)} (${L.p})`).join(", ")}`:"\u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B":H?`\u0442\u044B ${H.p}, ${e2(r.n)} ${r.p}`:"\u0435\u0449\u0451 \u043D\u0435 \u0441\u044B\u0433\u0440\u0430\u043D\u043E";return`<button class="dl" data-b="d${i}"><b>${n}</b><small>${t.at.split("-").reverse().join(".")} \xB7 ${a}</small></button>`}).reverse().join("");l2(`<div class="m-title">\u0412\u044B\u0437\u043E\u0432\u044B</div><div class="m-text">
    ${e||"<p>\u0412\u044B\u0437\u043E\u0432\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0421\u044B\u0433\u0440\u0430\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0438 \u043D\u0430\u0436\u043C\u0438 \xAB\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443\xBB \u0432 \u0438\u0442\u043E\u0433\u0430\u0445.</p>"}
    <label class="fl dlink"><span>\u0414\u0440\u0443\u0433 \u043F\u0440\u0438\u0441\u043B\u0430\u043B \u0441\u0441\u044B\u043B\u043A\u0443, \u0430 \u043E\u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u043B\u0430\u0441\u044C \u043D\u0435 \u0432 \u0438\u0433\u0440\u0435? \u0412\u0441\u0442\u0430\u0432\u044C \u0435\u0451 \u0441\u044E\u0434\u0430.</span>
    <textarea id="dl-link" rows="2" placeholder="\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432 \u0438\u043B\u0438 \u043E\u0442\u0432\u0435\u0442"></textarea></label></div>`,[["open",F1(B1.paste)+"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",""],["close","\u0417\u0430\u043A\u0440\u044B\u0442\u044C","ghost"]]).then(async t=>{if(t==="open"){let i=Q("#dl-link").value;await y6(i)||(B2("\u0412 \u0442\u0435\u043A\u0441\u0442\u0435 \u043D\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043D\u0430 \u0432\u044B\u0437\u043E\u0432"),B6())}else t&&t[0]==="d"&&C[+t.slice(1)]?j0(C[+t.slice(1)]):Q0()})}var b6=null;function l2(C,e){Q("#mcard").innerHTML=C+`<div class="m-btns">${e.map(([i,r,H])=>`<button class="btn ${H||""}" data-b="${i}">${r}</button>`).join("")}</div>`;let t=Q("#modal");return t.hidden=!1,t.classList.add("center"),Q("#mcard").scrollTop=0,new Promise(i=>{b6=i})}function F2(){Q("#modal").hidden=!0,b6=null}function I6(){N3(),Q("#sheet").hidden=!0}var mr;function B2(C){let e=Q("#toast");e.textContent=C,e.classList.add("on"),clearTimeout(mr),mr=setTimeout(()=>e.classList.remove("on"),2400)}function mM(){return`<div class="m-title">\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C</div><div class="help">
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
  <li>\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B: \xAB50 \u043D\u0430 50\xBB \u0443\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0432\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u0437\u0430 ${T5(q0)}, \xAB\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C\xBB \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043A\u043B\u0435\u0442\u043A\u0443 \u0431\u0435\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 \u0437\u0430 ${T5($0)}. \u041F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043D\u0435 \u0434\u0430\u0451\u0442 \u043D\u0438 \u043E\u0447\u043A\u043E\u0432, \u043D\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0438 \u0434\u043B\u044F \u0437\u0432\u0451\u0437\u0434 \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u043D\u044B\u043C. \u041D\u043E \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u043E\u0432 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043C\u0435\u043D\u044C\u0448\u0435.</li>
  <li>\u041F\u043E\u0441\u043B\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \xAB\u0412\u044B\u0437\u043E\u0432 \u0434\u0440\u0443\u0433\u0443\xBB. \u0414\u0440\u0443\u0433 \u043E\u0442\u043A\u0440\u043E\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0443 \u0438 \u0441\u044B\u0433\u0440\u0430\u0435\u0442 \u0442\u043E\u0442 \u0436\u0435 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: \u0442\u0435 \u0436\u0435 \u0442\u0435\u043C\u044B, \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0442\u0430\u043A \u0436\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A. \u0412 \u043A\u043E\u043D\u0446\u0435 \u043E\u0431\u0430 \u0432\u0438\u0434\u044F\u0442 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435: \u043E\u0447\u043A\u0438, \u0432\u0435\u0440\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B, \u0441\u0431\u043E\u0440\u043A\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F. \u0421\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0440\u0443\u0433 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u0441\u0441\u044B\u043B\u043A\u043E\u0439. \u0412\u0441\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u2014 \u0432 \u043C\u0435\u043D\u044E \xAB\u0412\u044B\u0437\u043E\u0432\u044B\xBB.</li>
  <li>\u041D\u0430\u0448\u0451\u043B \u043E\u0448\u0438\u0431\u043A\u0443 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435 \u2014 \u043D\u0430\u0436\u043C\u0438 \xAB\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u043E\u043F\u0440\u043E\u0441\u0435?\xBB \u043F\u043E\u0434 \u043E\u0442\u0432\u0435\u0442\u043E\u043C. \u0412\u043E\u043F\u0440\u043E\u0441 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0451\u0442\u0441\u044F, \u0430 \u0436\u0430\u043B\u043E\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0443 \u0438\u0433\u0440\u044B.</li>
  <li>\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043C\u043E\u0436\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0430\u0439\u043C\u0435\u0440: \u043E\u0442 10 \u0434\u043E 90 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430 \u043E\u0442\u0432\u0435\u0442. \u041D\u0435 \u0443\u0441\u043F\u0435\u043B \u2014 \u043E\u0442\u0432\u0435\u0442 \u0437\u0430\u0441\u0447\u0438\u0442\u0430\u043D \u043A\u0430\u043A \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439. \u0412\u0440\u0435\u043C\u044F \u0438\u0434\u0451\u0442, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0433\u0440\u0443.</li></ul>
  <h3>\u0421\u0431\u043E\u0440\u043A\u0430</h3><ul>
  <li>\u041A\u0443\u0431\u0438\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u043D. \u041A\u043E\u0433\u0434\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u043E\u0437\u0430\u0434\u0438, \u0435\u0433\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C: \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0439 \u0433\u0440\u0430\u043D\u0438 \u043E\u0434\u0438\u043D \u0446\u0432\u0435\u0442.</li>
  <li>\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u043A\u043B\u0435\u0442\u043A\u0435, \u0438 \u0441\u043B\u043E\u0439 \u043F\u043E\u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F. \u041A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0440\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439.</li>
  <li>\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0441\u0430\u043C\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u0437\u0430 ${C0}. \xAB\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C\xBB \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0445\u043E\u0434 \u0438 \u043E\u0434\u0438\u043D \u043F\u043E\u0432\u043E\u0440\u043E\u0442.</li>
  <li>\u041A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u2014 \u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043A\u0443\u0431\u0438\u043A \u0441\u0430\u043C\u043E\u043C\u0443: \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C\u0438, \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043E\u043A \u043D\u0435\u0442. \u0417\u0430 \u0442\u0430\u043A\u0443\u044E \u0441\u0431\u043E\u0440\u043A\u0443 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0435 \u043E\u0447\u043A\u0438.</li>
  <li>\u0412\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u043A\u0443\u0431\u0438\u043A \u2014 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u043F\u043E \u0444\u043E\u043D\u0443 \u0432\u043E\u043A\u0440\u0443\u0433 \u043D\u0435\u0433\u043E. \u041A\u043D\u043E\u043F\u043A\u0430 \xAB\u0412\u0438\u0434\xBB \u0441\u0442\u0430\u0432\u0438\u0442 \u0435\u0433\u043E \u0440\u043E\u0432\u043D\u043E.</li>
  <li>\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u043B \u043A\u0443\u0431\u0438\u043A? \u041D\u0430\u0436\u043C\u0438 \xAB\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438\xBB \u0432\u043D\u0438\u0437\u0443 \u044D\u0442\u043E\u0433\u043E \u043E\u043A\u043D\u0430: \u0442\u0440\u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439, \u043A\u0443\u0434\u0430 \u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C. \u041F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043D\u0430 \u043D\u0438\u0445 \u043D\u0435 \u0442\u0440\u0430\u0442\u044F\u0442\u0441\u044F.</li></ul>
  <h3>\u041E\u0447\u043A\u0438</h3><ul>
  <li>\u0412\u0435\u0440\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: 10, 20 \u0438\u043B\u0438 30 \u043E\u0447\u043A\u043E\u0432 \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044E.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A 3\xD73: 100, 200 \u0438\u043B\u0438 300 \u043E\u0447\u043A\u043E\u0432 \u0438 \u0435\u0449\u0451 \u043F\u043E 5, 10 \u0438\u043B\u0438 15 \u0437\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u043E\u0440\u043E\u0442. \u041D\u0430 2\xD72 \u0431\u043E\u043D\u0443\u0441 50, 100 \u0438\u043B\u0438 150.</li>
  <li>\u0421\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043C\u0443, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u044B \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C: 50, 100 \u0438\u043B\u0438 150 \u043F\u0440\u0438\u0437\u043E\u0432\u044B\u0445 \u043E\u0447\u043A\u043E\u0432, \u043D\u0430 2\xD72 \u2014 25, 50 \u0438\u043B\u0438 75.</li>
  <li>\u0417\u0432\u0451\u0437\u0434\u044B: \u043E\u0434\u043D\u0430 \u0437\u0430 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043A\u0443\u0431\u0438\u043A, \u0434\u0432\u0435, \u0435\u0441\u043B\u0438 \u0435\u0449\u0451 \u0438 70% \u0432\u0435\u0440\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 (38 \u0438\u0437 54 \u0438\u043B\u0438 17 \u0438\u0437 24), \u0442\u0440\u0438 \u2014 \u043F\u0440\u0438 90% (49 \u0438\u0437 54 \u0438\u043B\u0438 22 \u0438\u0437 24).</li>
  <li>\u0420\u0435\u043A\u043E\u0440\u0434\u044B \u0434\u043B\u044F 3\xD73 \u0438 2\xD72 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.</li></ul>
  <p>\u0418\u0433\u0440\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430, \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F.</p></div>`}function T6(C){l2(mM(),[["ok","\u041F\u043E\u043D\u044F\u0442\u043D\u043E","primary"],["train","\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0431\u043E\u0440\u043A\u0438",""]]).then(e=>{F2(),e==="train"?Fe(C):C()})}function hM(){document.addEventListener("pointerdown",Y7,{capture:!0});for(let e of document.querySelectorAll('[data-go="menu"]'))e.innerHTML=F1(B1.back);Q("#g-home").innerHTML=F1(B1.home),Q("#my-back").innerHTML=F1(B1.back),Q("#m-my").innerHTML=F1(B1.my)+"\u041C\u043E\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",Q("#g-help").innerHTML=F1(B1.help),Q("#tr-back").innerHTML=F1(B1.back),Q("#stage").insertAdjacentHTML("beforeend",'<svg id="guide" aria-hidden="true"><path id="g-line" fill="none" stroke="#1d2230" stroke-linecap="round"/><path id="g-head" fill="#ffd21f" stroke="#1d2230" stroke-width="2.5" stroke-linejoin="round"/><path id="g-line2" fill="none" stroke="#ffd21f" stroke-linecap="round"/><circle id="g-finger" fill="#ffffff" stroke="#1d2230" stroke-width="2"/></svg>'),document.querySelectorAll('[data-go="menu"]').forEach(e=>e.addEventListener("click",H5)),Q("#m-new").addEventListener("click",()=>{x?l2('<div class="m-title">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430?</div><div class="m-text"><p>\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u0430.</p></div>',[["yes","\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(e=>{F2(),e==="yes"&&(x=null,n2(),m6())}):m6()}),Q("#m-continue").addEventListener("click",()=>{x&&(x.phase==="topics"?t0():H0())}),Q("#m-help").addEventListener("click",()=>T6(H5)),Q("#g-help").addEventListener("click",()=>{let e=x&&x.phase==="result";T6(()=>{u5==="game"?e&&Y0():H0()})}),Q("#tr-back").addEventListener("click",ke),Q("#tr-foot").addEventListener("click",e=>{let t=e.target.closest(".tool");!t||t.disabled||(t.id==="tr-undo"?Qs():t.id==="tr-hint"?Wr():t.id==="tr-view"?s1.rotateTo(s1.baseView):t.id==="tr-again"&&v6(b1.step))}),Q("#m-sound").addEventListener("click",()=>{b0.on=!b0.on,A1.sound=b0.on,q2(),H5()}),Q("#g-home").addEventListener("click",H5),Q("#m-update").addEventListener("click",yr),Q("#m-reports").addEventListener("click",oM),Q("#m-duels").addEventListener("click",B6),Q("#m-chal").addEventListener("click",()=>{let e=Se(K0(X3));e&&e.ch&&(x=e,H0())}),Q("#lv-size").addEventListener("click",e=>{let t=e.target.closest("[data-size]");if(t){A1.size=+t.dataset.size,q2(),s1.setSize(A1.size),s1.reset();for(let i of s1.stickers)s1.setLook(i,"color");p2("tap"),m6()}}),Q("#lv-list").addEventListener("click",e=>{let t=e.target.closest("[data-lv]");t&&Us(+t.dataset.lv)}),Q("#tp-list").addEventListener("change",e=>{let t=e.target.closest("select");if(!t)return;if(t.id==="tp-time"||t.dataset.tface){x.timers||(x.timers=Oe());let n=+t.value;t.id==="tp-time"?y2.forEach(a=>{x.timers[a]=n}):x.timers[t.dataset.tface]=n,A1.timers={...x.timers},q2(),n2(),t0();return}let i=t.dataset.face,r=t.value,H=x.topics[i],V=y2.find(n=>n!==i&&x.topics[n]===r);V&&(x.topics[V]=H),x.topics[i]=r,n2(),t0()}),Q("#tp-rand").addEventListener("click",()=>{x.topics=H4(x.level,null),n2(),t0()}),Q("#tp-go").addEventListener("click",zs),Q("#m-my").addEventListener("click",()=>i4("menu")),Q("#tp-list").addEventListener("click",e=>{e.target.closest("#tp-my")&&(e.preventDefault(),i4("topics"))}),Q("#my-back").addEventListener("click",tM),Q("#my-add").addEventListener("click",()=>pr(0)),Q("#my-list").addEventListener("click",e=>{let t=e.target.closest("[data-id]");t&&pr(+t.dataset.id)}),Q("#my-save").addEventListener("click",rM),Q("#my-load").addEventListener("click",()=>{Q("#my-file").value="",Q("#my-file").click()}),Q("#my-file").addEventListener("change",e=>HM(e.target.files[0])),Q("#ecard").addEventListener("click",e=>{let t=e.target.closest("[data-elv]");if(t){g6=+t.dataset.elv,Q("#ecard").querySelectorAll("[data-elv]").forEach(i=>i.classList.toggle("on",i===t));return}e.target.closest("#e-ok")?CM():e.target.closest("#e-del")?iM():e.target.closest("#e-cancel")&&R6()}),Q("#g-foot").addEventListener("click",e=>{let t=e.target.closest(".chip");if(t){s1.showFace(t.dataset.face);return}let i=e.target.closest(".tool");!i||i.disabled||(i.id==="t-undo"?kr():i.id==="t-hint"?Nr():i.id==="t-free"?l2(`<div class="m-title">\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443?</div><div class="m-text"><p>${Ie()}</p></div>`,[["yes","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u043C\u0443","primary"],["no","\u041E\u0442\u043C\u0435\u043D\u0430","ghost"]]).then(r=>{F2(),r==="yes"&&E6()}):i.id==="t-view"?s1.rotateTo(s1.baseView):i.id==="t-end"&&l2('<div class="m-title">\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0443\u0440\u043E\u0432\u0435\u043D\u044C?</div><div class="m-text"><p>\u041A\u0443\u0431\u0438\u043A \u043D\u0435 \u0441\u043E\u0431\u0440\u0430\u043D, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 \u043D\u0435 \u043D\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F. \u041E\u0447\u043A\u0438 \u0437\u0430 \u043E\u0442\u0432\u0435\u0442\u044B \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.</p></div>',[["yes","\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C","primary"],["no","\u0421\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435","ghost"]]).then(r=>{F2(),r==="yes"&&V4(!1)}))}),Q("#qcard").addEventListener("click",e=>{let t=e.target.closest(".ans button");if(t&&!t.disabled){Re(+t.dataset.i);return}if(e.target.closest("#q-next")){Pe();return}if(e.target.closest("#q-cut")){qs();return}if(e.target.closest("#q-skip")){$s();return}let i=e.target.closest("#q-rep");if(i){nM(i.dataset.qid);return}let r=e.target.closest("[data-rr]");if(r){Z6=r.dataset.rr,Q("#rep-err").textContent="",Q(".rep-r").querySelectorAll("button").forEach(H=>H.classList.toggle("on",H===r));return}e.target.closest("#rep-send")?LM():e.target.closest("#rep-cancel")&&aM()}),Q("#mcard").addEventListener("click",e=>{let t=e.target.closest("[data-b]");if(!t||!b6)return;let i=b6;F2(),i(t.dataset.b)}),window.addEventListener("resize",()=>requestAnimationFrame(A6));let C=new ResizeObserver(()=>requestAnimationFrame(A6));document.querySelectorAll(".cube-slot").forEach(e=>C.observe(e)),window.addEventListener("orientationchange",()=>setTimeout(A6,300))}async function fM(){s1=new d6(Q("#stage")),s1.onTap=Or,s1.onSwipe=Dr,hM(),await Ns(),x&&(x.v!==1||!V0[x.level])&&(x=null,n2()),H5();let C=location.hash;/^#(ch|re)=/.test(C)&&history.replaceState(null,"",location.pathname+location.search);let e=await y6(C);A1.helped||(A1.helped=1,q2(),e||T6(H5)),window.addEventListener("hashchange",()=>{let r=location.hash;/^#(ch|re)=/.test(r)&&(history.replaceState(null,"",location.pathname+location.search),I6(),y6(r))});let t=Date.now(),i=0;setInterval(()=>{let r=Date.now(),H=Math.min(r-t,1500);t=r,x&&u5==="game"&&document.visibilityState==="visible"&&(x.phase==="quiz"||x.phase==="solve")&&(x.ms=(x.ms||0)+H,++i%10===0&&n2())},1e3),"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}window.__kubik={get T(){return b1},startTrain:Fe,trainHint:De,trainSwipe:Gr,trainHintMove:Wr,leaveTrain:ke,solveIntro:Ir,get S(){return x},get META(){return A1},reportText:Ue,pickQuestions:vr,get cube(){return s1},get BANK(){return m2},updateBank:yr,switchBank:we,onTap:Or,answer:Re,afterAnswer:Pe,hint:Nr,undo:kr,hintMove:Tr,finishLevel:V4,toSolve:Be,onSwipe:Dr,startFree:E6,makeDuel:iH,openLink:y6,showDuels:B6,readDuel:qe,get KEY_CHAL(){return X3}};fM();
