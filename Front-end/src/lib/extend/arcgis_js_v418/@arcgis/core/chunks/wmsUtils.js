/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{urlToObject as t}from"../core/urlUtils.js";import n from"../geometry/SpatialReference.js";import r from"../geometry/Extent.js";const i=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],a={84:4326,83:4269,27:4267};function s(t){if(!t)return null;const n={idCounter:-1};if("string"==typeof t){t=(new DOMParser).parseFromString(t,"text/xml")}const i=t.documentElement;if("ServiceExceptionReport"===i.nodeName){const t=Array.prototype.slice.call(i.childNodes).map((e=>e.textContent)).join("\r\n");throw new e("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",t)}const a=m("Capability",i),s=m("Service",i),o=m("Request",a);if(!a||!s||!o)return null;const l=m("Layer",a);if(!l)return null;const c="WMS_Capabilities"===i.nodeName||"WMT_MS_Capabilities"===i.nodeName?i.getAttribute("version"):"1.3.0",f=d("Title",s,"")||d("Name",s,""),p=d("AccessConstraints",s,""),N=d("Abstract",s,""),b=parseInt(d("MaxWidth",s,"5000"),10),A=parseInt(d("MaxHeight",s,"5000"),10),E=x(o,"GetMap"),S=h(o,"GetMap"),I=g(l,c,n);let L,F=0;if(Array.prototype.slice.call(a.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===F?L=e:1===F?(I.name&&(I.name="",I.sublayers.push(g(L,c,n))),I.sublayers.push(g(e,c,n))):I.sublayers.push(g(e,c,n)),F++)})),!I)return null;let M,O,w;const C=I.fullExtents;if(M=I.sublayers,M||(M=[]),0===M.length&&M.push(I),O=I.extent,!O){const e=new r(M[0].extent);I.extent=e.toJSON(),O=I.extent}if(w=I.spatialReferences,!w.length&&M.length>0){const e=t=>{let n=[];return t.sublayers.forEach((t=>{!n.length&&t.spatialReferences.length&&(n=t.spatialReferences||e(t))})),n};M.forEach((t=>{w.length||(w=t.spatialReferences||e(t))}))}const T=h(o,"GetFeatureInfo");let R;if(T){const e=x(o,"GetFeatureInfo");e.indexOf("text/html")>-1?R="text/html":e.indexOf("text/plain")>-1&&(R="text/plain")}if(!R){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(I)}const V=u(M),v=I.minScale||0,_=I.maxScale||0,U=I.dimensions,q=V.reduce(((e,t)=>e.concat(t.dimensions)),[]),B=U.concat(q).filter(y);let D=null;if(B.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;B.forEach((n=>{const{extent:r}=n;var i;i=r,Array.isArray(i)&&i.length>0&&i[0]instanceof Date?r.forEach((n=>{e=Math.min(e,n.getTime()),t=Math.max(t,n.getTime())})):r.forEach((n=>{e=Math.min(e,n.min.getTime()),t=Math.max(t,n.max.getTime())}))})),D={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:p,description:N,dimensions:U,extent:O,fullExtents:C,featureInfoFormat:R,featureInfoUrl:T,mapUrl:S,maxWidth:b,maxHeight:A,maxScale:_,minScale:v,layers:V,spatialReferences:w,supportedImageFormatTypes:E,timeInfo:D,title:f,version:c}}function o(e){return i.some((t=>{const n=t[0],r=t[1];return e>=n&&e<=r}))}function l(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function u(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(u(e.sublayers)),delete e.sublayers)})),t}function c(e,t,n){var r;return null!=(r=t.getAttribute(e))?r:n}function m(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(b(r)&&r.nodeName===e)return r}return null}function f(e,t){const n=[];for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];b(i)&&i.nodeName===e&&n.push(i)}return n}function d(e,t,n){const r=m(e,t);return r?r.textContent:n}function p(e,t,i){if(!e)return null;const a=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),o=parseFloat(e.getAttribute("maxx")),l=parseFloat(e.getAttribute("maxy"));let u,c,m,f;i?(u=isNaN(s)?-Number.MAX_VALUE:s,c=isNaN(a)?-Number.MAX_VALUE:a,m=isNaN(l)?Number.MAX_VALUE:l,f=isNaN(o)?Number.MAX_VALUE:o):(u=isNaN(a)?-Number.MAX_VALUE:a,c=isNaN(s)?-Number.MAX_VALUE:s,m=isNaN(o)?Number.MAX_VALUE:o,f=isNaN(l)?Number.MAX_VALUE:l);const d=new n({wkid:t});return new r({xmin:u,ymin:c,xmax:m,ymax:f,spatialReference:d})}function h(e,n){const r=m(n,e);if(r){const e=m("DCPType",r);if(e){const n=m("HTTP",e);if(n){const e=m("Get",n);if(e){let n=function(e,t,n,r){const i=m(e,n);return i?c(t,i,r):r}("OnlineResource","xlink:href",e,null);if(n)return n.indexOf("&")===n.length-1&&(n=n.substring(0,n.length-1)),function(e,n){const r=[],i=t(e);for(const e in i.query)i.query.hasOwnProperty(e)&&-1===n.indexOf(e.toLowerCase())&&r.push(e+"="+i.query[e]);return i.path+(r.length?"?"+r.join("&"):"")}(n,["service","request"])}}}}return null}function x(e,t){const n=f("Operation",e);if(0===n.length){return f("Format",m(t,e)).map((e=>e.textContent))}const r=[];return n.forEach((e=>{if(e.getAttribute("name")===t){f("Format",e).forEach((e=>{r.push(e.textContent)}))}})),r}function N(e,t,n){const r=m(t,e);if(!r)return n;const{textContent:i}=r;if(null==i||""===i)return n;const a=Number(i);return isNaN(a)?n:a}function g(e,t,i){var s;if(!e)return null;const l={id:i.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},u=m("LatLonBoundingBox",e),h=m("EX_GeographicBoundingBox",e);let x=null;u&&(x=p(u,4326)),h&&(x=new r(0,0,0,0,new n({wkid:4326})),x.xmin=parseFloat(d("westBoundLongitude",h,"0")),x.ymin=parseFloat(d("southBoundLatitude",h,"0")),x.xmax=parseFloat(d("eastBoundLongitude",h,"0")),x.ymax=parseFloat(d("northBoundLatitude",h,"0"))),u||h||(x=new r(-180,-90,180,90,new n({wkid:4326}))),l.minScale=N(e,"MaxScaleDenominator",0),l.maxScale=N(e,"MinScaleDenominator",0);const b=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)l.name=e.textContent||"";else if("Title"===e.nodeName)l.title=e.textContent||"";else if("Abstract"===e.nodeName)l.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const n=e.getAttribute(b);if(n&&0===n.indexOf("EPSG:")){const r=parseInt(n.substring(5),10);0===r||isNaN(r)||x||(x="1.3.0"===t?p(e,r,o(r)):p(e,r))}const r=n&&n.indexOf(":");if(r&&r>-1){let i=parseInt(n.substring(r+1,n.length),10);0===i||isNaN(i)||(i=a[i]?a[i]:i);const s="1.3.0"===t?p(e,i,o(i)):p(e,i);l.fullExtents.push(s)}}else if(e.nodeName===b){e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(a[e]&&(e=a[e]),-1===l.spatialReferences.indexOf(e)&&l.spatialReferences.push(e))}))}else if("Style"!==e.nodeName||l.legendURL){if("Layer"===e.nodeName){const n=g(e,t,i);n&&(n.parentLayerId=l.id,l.sublayers||(l.sublayers=[]),l.sublayers.push(n))}}else{const t=m("LegendURL",e);if(t){const e=m("OnlineResource",t);e&&(l.legendURL=e.getAttribute("xlink:href"))}}})),l.extent=null==(s=x)?void 0:s.toJSON(),l.dimensions=f("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),r=e.textContent,i=e.getAttribute("unitSymbol"),a=e.getAttribute("default"),s="0"!==c("default",e,"0"),o="0"!==c("nearestValue",e,"0"),l="0"!==c("current",e,"0");if(/^time$/i.test(t)&&/^ISO8601$/i.test(n)){return{name:"time",units:"ISO8601",extent:S(r),default:S(a),multipleValues:s,nearestValue:o,current:l}}if(/^elevation$/i.test(t)){return{name:"elevation",units:n,extent:A(r),unitSymbol:i,default:A(a),multipleValues:s,nearestValue:o}}return{name:t,units:n,extent:E(r),unitSymbol:i,default:E(a),multipleValues:s,nearestValue:o}})),l}function b(e){return e.nodeType===Node.ELEMENT_NODE}function y(e){return"time"===e.name}function A(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):n.map((e=>parseFloat(e)))}function E(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):n}function S(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?function(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(t);if(!n)return null;const r=I(n[1]),i=I(n[2]),a=I(n[3]),s=I(n[4]),o=I(n[5]),l=I(n[6]);return{years:r,months:i,days:a,hours:s,minutes:o,seconds:l}}(t[2]):void 0}})).filter((e=>e)):n.map((e=>new Date(e)))}function I(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const n=t[0].replace(",",".");return Number(n)}function L(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}export{o as c,l as g,s as p,L as t};