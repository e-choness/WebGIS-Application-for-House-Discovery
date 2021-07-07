/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import"./object.js";import{b as t}from"./Logger.js";import{o as e,l as i,e as r}from"./isWebGL2Context.js";var n=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],o=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function a(){var t,n,a,s=0,f=0,c=999,h=[],m=[],d=1,l=0,u=0,p=!1,_=!1,g="";return function(e){return m=[],null!==e?function(e){var i;s=0,a=(g+=e).length;for(;t=g[s],s<a;){switch(i=s,c){case 0:s=T();break;case 1:s=b();break;case 2:s=U();break;case 3:s=w();break;case 4:s=A();break;case 11:s=D();break;case 5:s=L();break;case 9999:s=k();break;case 9:s=v();break;case 999:s=x()}if(i!==s)switch(g[i]){case"\n":l=0,++d;break;default:++l}}return f+=s,g=g.slice(s),m}(e.replace?e.replace(/\r\n/g,"\n"):e):function(t){h.length&&y(h.join(""));return c=10,y("(eof)"),m}()};function y(t){t.length&&m.push({type:o[c],data:t,position:u,line:d,column:l})}function x(){return h=h.length?[]:h,"/"===n&&"*"===t?(u=f+s-1,c=0,n=t,s+1):"/"===n&&"/"===t?(u=f+s-1,c=1,n=t,s+1):"#"===t?(c=2,u=f+s,s):/\s/.test(t)?(c=9,u=f+s,s):(p=/\d/.test(t),_=/[^\w_]/.test(t),u=f+s,c=p?4:_?3:9999,s)}function v(){return/[^\s]/g.test(t)?(y(h.join("")),c=999,s):(h.push(t),n=t,s+1)}function U(){return"\r"!==t&&"\n"!==t||"\\"===n?(h.push(t),n=t,s+1):(y(h.join("")),c=999,s)}function b(){return U()}function T(){return"/"===t&&"*"===n?(h.push(t),y(h.join("")),c=999,s+1):(h.push(t),n=t,s+1)}function w(){if("."===n&&/\d/.test(t))return c=5,s;if("/"===n&&"*"===t)return c=0,s;if("/"===n&&"/"===t)return c=1,s;if("."===t&&h.length){for(;S(h););return c=5,s}if(";"===t||")"===t||"("===t){if(h.length)for(;S(h););return y(t),c=999,s+1}var e=2===h.length&&"="!==t;if(/[\w_\d\s]/.test(t)||e){for(;S(h););return c=999,s}return h.push(t),n=t,s+1}function S(t){for(var i,r,n=0;;){if(i=e.indexOf(t.slice(0,t.length+n).join("")),r=e[i],-1===i){if(n--+t.length>0)continue;r=t.slice(0,1).join("")}return y(r),u+=r.length,(h=h.slice(r.length)).length}}function D(){return/[^a-fA-F0-9]/.test(t)?(y(h.join("")),c=999,s):(h.push(t),n=t,s+1)}function A(){return"."===t||/[eE]/.test(t)?(h.push(t),c=5,n=t,s+1):"x"===t&&1===h.length&&"0"===h[0]?(c=11,h.push(t),n=t,s+1):/[^\d]/.test(t)?(y(h.join("")),c=999,s):(h.push(t),n=t,s+1)}function L(){return"f"===t&&(h.push(t),n=t,s+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(n)?(h.push(t),n=t,s+1):/[^\d]/.test(t)?(y(h.join("")),c=999,s):(h.push(t),n=t,s+1)}function k(){if(/[^\d\w_]/.test(t)){var e=h.join("");return c=i.indexOf(e)>-1?8:r.indexOf(e)>-1?7:6,y(h.join("")),c=999,s}return h.push(t),n=t,s+1}}function s(t){return e=t,i=a(),[].concat(i(e)).concat(i(null));var e,i}const f=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function c(t,e){for(let i=e-1;i>=0;i--){const e=t[i];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function h(t,e,i,r){r=r||i;for(const n of t)if("ident"===n.type&&n.data===i){r in e?e[r]++:e[r]=0;return h(t,e,r+"_"+e[r],r)}return i}function m(t,e,i="afterVersion"){function r(t,e){for(let i=e;i<t.length;i++){const e=t[i];if("operator"===e.type&&";"===e.data)return i}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let a=function(t){let e=-1,n=0,o=-1;for(let a=0;a<t.length;a++){const s=t[a];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:s.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===s.type&&/^#version/.test(s.data)&&(o=Math.max(o,a)),"afterPrecision"===i&&"keyword"===s.type&&"precision"===s.data){const e=r(t,a);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=a)}return e+1}(t);o(a-1)&&t.splice(a++,0,n);for(const i of e)t.splice(a++,0,i);o(a-1)&&o(a)&&t.splice(a,0,n)}function d(t,e,i,r="lowp"){m(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function l(t,e,i,r,n="lowp"){m(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function u(t,e){let i,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(i=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return i&&r&&t.splice(i,r-i+1),n}function p(t,e){const i=s(t);if("300 es"===function(t,e="100",i="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replace(/\s\s+/g," ");if(r===i)return r;if(r===e)return n.data="#version "+i,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(i,"100","300 es"))throw new Error("shader is already glsl 300 es");let r=null,o=null;const a={},m={};for(let t=0;t<i.length;++t){const s=i[t];switch(s.type){case"keyword":"vertex"===e&&"attribute"===s.data?s.data="in":"varying"===s.data&&(s.data="vertex"===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===e&&"gl_FragColor"===s.data&&(r||(r=h(i,a,"fragColor"),d(i,r,"vec4")),s.data=r),"fragment"===e&&"gl_FragData"===s.data){const e=u(i,t+1),r=h(i,a,"fragData");l(i,r,"vec4",e,"mediump"),s.data=r}else"fragment"===e&&"gl_FragDepthEXT"===s.data&&(o||(o=h(i,a,"gl_FragDepth")),s.data=o);break;case"ident":if(n.indexOf(s.data)>=0){if("vertex"===e&&c(i,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in m||(m[s.data]=h(i,a,s.data)),s.data=m[s.data]}}}for(let t=i.length-1;t>=0;--t){const e=i[t];if("preprocessor"===e.type){const r=e.data.match(/\#extension\s+(.*)\:/);if(r&&r[1]&&f.indexOf(r[1].trim())>=0){const e=i[t+1];i.splice(t,e&&"whitespace"===e.type?2:1)}const n=e.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&f.indexOf(n[1].trim())>=0&&(e.data="#if 1");const o=e.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&f.indexOf(o[1].trim())>=0&&(e.data="#if 0")}}return function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(i)}class _{constructor(t,e,i,r,n={}){if(this._context=null,this._glName=null,this._locations={},this.id=y++,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(3,this),this._context=t,this._vertexShaderSource=e,this._fragmentShaderSource=i,Array.isArray(n))for(const t of n)this._defines[t]="1";else this._defines=n;this._locations=r}get glName(){return this._glName}get locations(){return this._locations}getDefine(t){return this._defines[t]}dispose(){if(!this._context)return;const t=this._context.gl;if(this._vShader){const e=this._vShader;t.deleteShader(e),this._vShader=null}if(this._fShader){const e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,e=t.createProgram();t.attachShader(e,this._vShader),t.attachShader(e,this._fShader);for(const i in this._locations){const r=this._locations[i];t.bindAttribLocation(e,r,i)}t.linkProgram(e),this._glName=e,this._initialized=!0}getUniformLocation(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this.getUniformLocation(t)}getAttribLocation(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]}setUniform1i(t,e){const i=this._nameToUniform1[t];if(void 0===i||e!==i){this._context.bindProgram(this);this._context.gl.uniform1i(this.getUniformLocation(t),e),this._nameToUniform1[t]=e}}setUniform1iv(t,e){const i=this._nameToUniform1v[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform1iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform2iv(t,e){const i=this._nameToUniform2[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform2iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform3iv(t,e){const i=this._nameToUniform3[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform3iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform4iv(t,e){const i=this._nameToUniform4[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform4iv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform1f(t,e){const i=this._nameToUniform1[t];if(void 0===i||e!==i){this._context.bindProgram(this);this._context.gl.uniform1f(this.getUniformLocation(t),e),this._nameToUniform1[t]=e}}setUniform1fv(t,e){const i=this._nameToUniform1v[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform1fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform1v[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform2f(t,e,i){const r=this._nameToUniform2[t];if(void 0===r||e!==r[0]||i!==r[1]){this._context.bindProgram(this);this._context.gl.uniform2f(this.getUniformLocation(t),e,i),void 0===r?this._nameToUniform2[t]=[e,i]:(r[0]=e,r[1]=i)}}setUniform2fv(t,e){const i=this._nameToUniform2[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform2fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform2[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform3f(t,e,i,r){const n=this._nameToUniform3[t];if(void 0===n||e!==n[0]||i!==n[1]||r!==n[2]){this._context.bindProgram(this);this._context.gl.uniform3f(this.getUniformLocation(t),e,i,r),void 0===n?this._nameToUniform3[t]=[e,i,r]:(n[0]=e,n[1]=i,n[2]=r)}}setUniform3fv(t,e){const i=this._nameToUniform3[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform3fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform3[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniform4f(t,e,i,r,n){const o=this._nameToUniform4[t];if(void 0===o||e!==o[0]||i!==o[1]||r!==o[2]||n!==o[3]){this._context.bindProgram(this);this._context.gl.uniform4f(this.getUniformLocation(t),e,i,r,n),void 0===o?this._nameToUniform4[t]=[e,i,r,n]:(o[0]=e,o[1]=i,o[2]=r,o[3]=n)}}setUniform4fv(t,e){const i=this._nameToUniform4[t];if(g(i,e)){this._context.bindProgram(this);this._context.gl.uniform4fv(this.getUniformLocation(t),e),void 0===i?this._nameToUniform4[t]=_._arrayCopy(e):_._arrayAssign(e,i)}}setUniformMatrix3fv(e,i,r=!1){const n=this._nameToUniformMatrix3[e];if(function(e,i){if(t(e))return!0;if(9!==e.length)return g(e,i);return 9!==e.length||e[0]!==i[0]||e[1]!==i[1]||e[2]!==i[2]||e[3]!==i[3]||e[4]!==i[4]||e[5]!==i[5]||e[6]!==i[6]||e[7]!==i[7]||e[8]!==i[8]}(n,i)){this._context.bindProgram(this);this._context.gl.uniformMatrix3fv(this.getUniformLocation(e),r,i),void 0===n?this._nameToUniformMatrix3[e]=_._arrayCopy(i):_._arrayAssign(i,n)}}setUniformMatrix4fv(e,i,r=!1){const n=this._nameToUniformMatrix4[e];if(function(e,i){if(t(e))return!0;if(16!==e.length)return g(e,i);return 16!==e.length||e[0]!==i[0]||e[1]!==i[1]||e[2]!==i[2]||e[3]!==i[3]||e[4]!==i[4]||e[5]!==i[5]||e[6]!==i[6]||e[7]!==i[7]||e[8]!==i[8]||e[9]!==i[9]||e[10]!==i[10]||e[11]!==i[11]||e[12]!==i[12]||e[13]!==i[13]||e[14]!==i[14]||e[15]!==i[15]}(n,i)){this._context.bindProgram(this);this._context.gl.uniformMatrix4fv(this.getUniformLocation(e),r,i),void 0===n?this._nameToUniformMatrix4[e]=_._arrayCopy(i):_._arrayAssign(i,n)}}assertCompatibleVertexAttributeLocations(t){const e=t.locations===this.locations;return e||console.error("VertexAttributeLocations are incompatible"),e}static _padToThree(t){let e=t.toString();return t<1e3&&(e=("  "+t).slice(-3)),e}_addLineNumbers(t){let e=2;return t.replace(/\n/g,(()=>"\n"+_._padToThree(e++)+":"))}_loadShader(t){const e=35633===t;let i=e?this._vertexShaderSource:this._fragmentShaderSource,r="";for(const t in this._defines)r+=`#define ${t} ${this._defines[t]}\n`;i=r+i,"webgl2"===this._context.contextVersion&&(i=p(i,e?"vertex":"fragment"));const n=this._context.gl,o=n.createShader(t);return n.shaderSource(o,i),n.compileShader(o),o}static _arrayCopy(t){const e=[];for(let i=0;i<t.length;++i)e.push(t[i]);return e}static _arrayAssign(t,e){for(let i=0;i<t.length;++i)e[i]=t[i]}}function g(e,i){if(t(e)||e.length!==i.length)return!0;for(let t=0;t<e.length;++t)if(e[t]!==i[t])return!0;return!1}let y=0;export{_ as P};