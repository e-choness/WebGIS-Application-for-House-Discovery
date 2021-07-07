// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["./Utils"],function(l){function h(c,d,a){if(!c.allDirty)if(null!=c.from&&null!=c.count){const b=Math.min(c.from,d);d=Math.max(c.from+c.count,d+a)-b;c.from=b;c.count=d}else c.from=d,c.count=a}return function(){function c(){this._dirties=l.createGeometryData(()=>({indices:{from:null,count:null,allDirty:!1}}),()=>({vertices:{from:null,count:null,allDirty:!1}}))}var d=c.prototype;d.hasDirty=function(){for(const a of this._dirties)if(null!==a.data.indices.count||a.data.indices.allDirty)return!0;
return!1};d.markAllClean=function(){for(const a of this._dirties){a.data.indices.from=null;a.data.indices.count=null;a.data.indices.allDirty=!1;for(const b in a.buffers)a.buffers[b].data.vertices.from=null,a.buffers[b].data.vertices.count=null,a.buffers[b].data.vertices.allDirty=!1}};d.markAllDirty=function(){for(const a of this._dirties){a.data.indices.allDirty=!0;for(const b in a.buffers)a.buffers[b].data.vertices.allDirty=!0}};d.forEach=function(a){for(let f=0;f<this._dirties.length;++f){var b=
this._dirties[f],e={};for(const k in b.buffers){const g=b.buffers[k].data.vertices;if(g.allDirty||null!=g.from&&null!=g.count&&0<g.count)e[k]=g}b=b.data.indices;e=b.allDirty||null!=b.from&&null!=b.count&&0<b.count?{indices:b,vertices:e}:{indices:null,vertices:e};(e.indices||0<Object.keys(e).length)&&a(e,f)}};d.markDirtyIndices=function(a,b,e){h(this._dirties[a].data.indices,b,e)};d.markDirtyVertices=function(a,b,e,f){h(this._dirties[a].buffers[b].data.vertices,e,f)};return c}()});