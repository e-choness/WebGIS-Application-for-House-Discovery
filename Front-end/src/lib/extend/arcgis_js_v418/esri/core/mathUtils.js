// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function h(a,b,d){return a<b?b:a>d?d:a}function l(a,b,d){return a+(b-a)*d}function m(a){n[0]=a;return n[0]}const n=new Float32Array(1),q=Number.isFinite||function(a){return"number"===typeof a&&window.isFinite(a)},e=Number.isNaN||function(a){return a!==a},r=Math.sign||function(a){return+(0<a)-+(0>a)||+a},t=Math.log2||function(a){return Math.log(a)/Math.LN2},k=m(3.4028234663852886E38);c.NUMBER_MAX_FLOAT32=k;c.acosClamped=function(a){return Math.acos(h(a,-1,1))};c.asinClamped=
function(a){return Math.asin(h(a,-1,1))};c.clamp=h;c.clampFloat32=function(a){return m(Math.max(-k,Math.min(a,k)))};c.deg2rad=function(a){return a*Math.PI/180};c.floatEqualAbsolute=function(a,b,d=1E-6){return e(a)||e(b)?!1:(a>b?a-b:b-a)<=d};c.floatEqualRelative=function(a,b,d=1E-6){if(e(a)||e(b))return!1;if(a===b)return!0;const f=Math.abs(a-b),g=Math.abs(a),p=Math.abs(b);if(0===a||0===b||1E-12>g&&1E-12>p){if(f>.01*d)return!1}else if(f/(g+p)>d)return!1;return!0};c.glClamp=function(a,b,d){return Math.min(Math.max(a,
b),d)};c.isFinite=q;c.isNaN=e;c.isPowerOfTwo=function(a){return 0===(a&a-1)};c.lerp=l;c.log2=t;c.nextHighestPowerOfTen=function(a){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(a)))};c.nextHighestPowerOfTwo=function(a){--a;for(let b=1;32>b;b<<=1)a|=a>>b;return a+1};c.nextPowerOfTwo=function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a};c.rad2deg=function(a){return 180*a/Math.PI};c.reciprocalClamped=function(a,b=1E-6){return(0>a?-1:1)/Math.max(Math.abs(a),b)};c.scale=function(a,
b,d,f,g){return l(f,g,(a-b)/(d-b))};c.sign=r;Object.defineProperty(c,"__esModule",{value:!0})});