// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","./global"],function(d,e){const f=/^devext.arcgis.com$/,g=/^qaext.arcgis.com$/,h=/^[\w-]*\.mapsdevext.arcgis.com$/,k=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,f,g,/^jsapps.esri.com$/,h,k];d.adjustStaticAGOUrl=function(a,b){return a?(b=b||e.location.hostname)?null!=b.match(f)||null!=b.match(h)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=b.match(g)||null!=b.match(k)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a:a};d.isDevEnvironment=
function(a){a=a||e.location.hostname;return l.some(b=>{var c;return null!=(null==(c=a)?void 0:c.match(b))})};d.isTelemetryDevEnvironment=function(a){a=a||e.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(l).some(b=>{var c;return null!=(null==(c=a)?void 0:c.match(b))})};Object.defineProperty(d,"__esModule",{value:!0})});