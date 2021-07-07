// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/screenUtils","../../support/utils"],function(e,g,p){function k(a,b){return a.r===b.r&&a.g===b.g&&a.b===b.b}function l(a){var b=a.width;const d=a.height;let c=a.pixelSizeAt(a.toMap(g.createScreenPoint(.5*b,.5*d),{exclude:[]}));0>=c&&(c=a.pixelSizeAt(a.toMap(g.createScreenPoint(.5*b,.95*d),{exclude:[]})),0>=c&&(b=a.camera.position.clone(),b.z=0,c=2*a.pixelSizeAt(b)));return c}const m="streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),
n=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],q=[].concat(m).concat(n);e.getBasemapTheme=function(a){a=p.getBasemapId(a,q,!1);if(!a)return null;if(-1<m.indexOf(a))return"light";if(-1<n.indexOf(a))return"dark"};e.getPixelSize=l;e.getStorageType=function(a){return"multipoint"===a?"point":"mesh"===a?"polygon":a};e.getTagsFromSchemes=function(a){if(!a)return[];const b=new Set,d=[a.primaryScheme];a.secondarySchemes&&d.push(...a.secondarySchemes);for(const c of d)c&&"tags"in
c&&c.tags&&c.tags.forEach(f=>b.add(f));return[...b]};e.hasIdenticalColors=function(a,b){let d=0;if(a.length===b.length){let c=a.every((f,h)=>k(f,b[h]));c?d=1:(c=a.slice(0).reverse().every((f,h)=>k(f,b[h])))&&(d=-1)}return d};e.toWorldScale=function(a,b){return Math.ceil(l(b)*g.pt2px(g.toPt(a)))};Object.defineProperty(e,"__esModule",{value:!0})});