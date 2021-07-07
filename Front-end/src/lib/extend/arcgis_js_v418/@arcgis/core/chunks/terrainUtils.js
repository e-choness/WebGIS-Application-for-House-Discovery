/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import{clone as t}from"../core/lang.js";import{i as s,b as r}from"./Logger.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import o from"../core/Accessor.js";import{r as a}from"../core/scheduling.js";import{createResolver as n,onAbort as l,createAbortError as u,throwIfAborted as c,isAbortError as h,createAbortController as m}from"../core/promiseUtils.js";import d from"../core/Error.js";import"./ensureType.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import{b as f,c as g}from"../geometry/SpatialReference.js";import _ from"../request.js";import{c as T}from"./vec3f64.js";import{g as y,c as x,d as b,a as k,s as w}from"./vec3.js";import{b as I,v as L,u as j,c as v}from"./aaBoundingRect.js";import{canProjectToWGS84ComparableLonLat as S}from"../geometry/projection.js";import{T as C}from"./Scheduler.js";import M from"../layers/ElevationLayer.js";import E from"../layers/TileLayer.js";import"../layers/VectorTileLayer.js";import{T as z,c as Q}from"./TerrainConst.js";import{a as G}from"./Util.js";import{a as W}from"./VectorTile.js";import{c as R,b as q,d as U,e as P,f as O,h as F,i as A,j as D}from"./rasterUtils.js";class V{constructor(e){this.typeWorkerQuota=e,this.tasks=new Array,this.numWorkers=0,this.statistics=new H}}class H{constructor(){this.requests=0,this.size=0,this.duration=0,this.speed=0}}class N{constructor(e,t,s,r){this._workerFunc=e,this._callbackFunc=t,this._maxTotalNumWorkers=s,this._totalNumWorkers=0,this._clients=r.map((e=>new V(e)))}hasQuota(e){const t=this._clients[e];return!!t&&t.typeWorkerQuota>t.numWorkers+t.tasks.length}push(e){const t=this._clients[e.client];t&&(this._totalNumWorkers<this._maxTotalNumWorkers?(t.numWorkers++,this._totalNumWorkers++,this._workerFunc(e,((e,t)=>this._taskCallback(e,t)))):t.tasks.push(e))}getStatsForType(e){const t=this._clients[e];return t?{quota:t.typeWorkerQuota,workers:t.numWorkers,queueSize:t.tasks.length,requestStats:t.statistics}:null}cancel(e){this._taskFinished(e),e._cancelled=!0}destroy(){this._clients.length=0}_taskFinished(e){const t=this._clients[e.client];this._totalNumWorkers--,t.numWorkers--,t.statistics.requests++,t.statistics.size+=e.size||0,t.statistics.duration+=e.duration||0,t.statistics.speed=t.statistics.duration>0?t.statistics.size/t.statistics.duration:0,G(t.numWorkers>=0),this._next()}_next(){for(const e of this._clients)if(e&&e.numWorkers<e.typeWorkerQuota&&this._processQueue(e))return;for(const e of this._clients)if(e&&this._processQueue(e))return}_processQueue(e){for(;e.tasks.length>0;)if(this._workerFunc(e.tasks.shift(),((e,t)=>this._taskCallback(e,t))))return e.numWorkers++,this._totalNumWorkers++,!0;return!1}_taskCallback(e,t){e._cancelled||(this._callbackFunc(e,t),this._taskFinished(e))}get test(){const e=this;return{set workerFunc(t){e._workerFunc=t}}}}class B extends class{constructor(e){this.client=e,this._cancelled=!1,this.size=0,this.duration=0}}{constructor(e,t,s,r,i){super(r),this.url=e,this.options=t,this.docType=s,this.key=i,this.result=null,this.status=1,this.request=null,this.abortController=null,this.resolvers=new Array,this.startTime=0}}let $=class extends o{constructor(){super(...arguments),this.tasks=new Map,this.onLoadQueue=new Array,this.doneQueue=new Array,this.updating=!1}setup(e,t,s){this.loadQueue=new N(((e,t)=>this.startLoading(e,t)),((e,t)=>this.doneLoadingCallback(e,t)),e,t),s&&(this.taskHandle=s.registerTask(C.STREAM_DATA_LOADER,(e=>this.update(e)),(()=>this.doneQueue.length>0||this.onLoadQueue.length>0)))}destroy(){this.taskHandle&&(this.taskHandle.remove(),this.taskHandle=null),this.tasks.forEach((e=>{e.abortController&&e.abortController.abort()})),this.loadQueue.destroy(),this.loadQueue=null,this.onLoadQueue=null,this.doneQueue=null,this.tasks=null}hasDownloadSlots(e){return this.loadQueue.hasQuota(e)}request(e,t,r,i={}){const o=n();o.__signal=s(i)?i.signal:null;const a=this.createOrUpdateTask(e,t,r,i,o);return l(i,(()=>this.cancelRequest(a,o))),o.promise}createTask(e,t,s,r,i,o){const a=new B(e,t,s,r,i);return this.updateTask(a,o),this.tasks.set(i,a),1===this.tasks.size&&this._set("updating",!0),this.loadQueue.push(a),a}cancelRequest(e,t){a(e.resolvers,t),t.reject(u()),0===e.resolvers.length&&(2===e.status&&(e.status=4,this.loadQueue.cancel(e),e.abortController.abort(),e.request=null,e.abortController=null),e.status=4,this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1))}taskKey(e,t,s){return`${e}:${t}:${s}`}updateTask(e,t){e.resolvers.push(t)}createOrUpdateTask(e,t,r,i,o){const a=s(i)&&i.uid||e,n=this.taskKey(a,t,r),l=this.tasks.get(n);return l?(this.updateTask(l,o),l):this.createTask(e,i,t,r,n,o)}doneLoadingCallback(e,t){this.loadQueue&&(G(2===e.status),e.status=3,this.taskHandle?this.doneQueue.push({task:e,err:t}):this.doneLoading(e,t))}update(e){for(;!e.done&&this.onLoadQueue.length>0;){const t=this.onLoadQueue.shift();c(t.task.abortController),t.task.abortController=null,t.callback(t.task),e.madeProgress()}for(;!e.done&&this.doneQueue.length>0;){const t=this.doneQueue.shift();3!==t.task.status&&(t.err=t.err||u()),this.doneLoading(t.task,t.err),e.madeProgress()}}doneLoading(e,s){let r=e.result instanceof HTMLImageElement?0:e.resolvers.length;for(const i of e.resolvers)if(s)h(s)?i.reject(s):i.reject(new d("stream-data-loader:request-error",`Failed to request resource at '${e.url}'. ${s}`,{url:e.url,error:s}));else{--r;const s=r<=0?e.result:t(e.result);i.resolve(s)}this.tasks.delete(e.key),0===this.tasks.size&&this._set("updating",!1)}startLoading(e,t){if(4===e.status)return!1;let s,r;switch(e.startTime=performance.now(),e.status=2,e.docType){case"binary":r="array-buffer",s=0;break;case"image":r="image";break;case"image+type":r="array-buffer";break;default:r="json"}e.abortController=m();const i=e.abortController.signal;e.request=_(e.url,{...e.options,responseType:r,timeout:s,signal:i});let o=()=>{};const a=s=>{e.duration=performance.now()-e.startTime,e.size=s instanceof ArrayBuffer?s.byteLength:e.size||0,e.result=s,this.taskHandle?this.onLoadQueue.push({callback:t,task:e}):(e.abortController=null,t(e))},n=s=>{2===e.status&&t(e,s),o()};return"image+type"!==e.docType?(e.request.then((e=>a(e.data)),n),!0):(e.request.then((t=>{const l=t.data,u=function(e){if(e.byteLength<2)return"unknown";const t=new Uint8Array(e,0,e.byteLength);if(137===t[0]&&80===t[1])return"image/png";if(71===t[0]&&73===t[1])return"image/gif";if(66===t[0]&&77===t[1])return"image/bmp";if(255===t[0]&&216===t[1])return"image/jpeg";return"unknown"}(l);if(r="image",e.size=l.byteLength,"unknown"===u)return e.request=_(e.url,{responseType:r,timeout:s,signal:i}),void e.request.then((e=>a(e.data)),n);const c=new Blob([l],{type:u}),h=window.URL.createObjectURL(c);o=()=>window.URL.revokeObjectURL(h),e.request=_(h,{responseType:r,timeout:s,signal:i}),e.request.then((e=>a(new K(e.data,u,o))),n)}),n),!0)}get test(){return{loadQueue:this.loadQueue}}};e([i({readOnly:!0})],$.prototype,"updating",void 0),$=e([p("esri.views.3d.support.StreamDataLoader")],$);class K{constructor(e,t,s){this.image=e,this.type=t,this.release=s}get isOpaque(){return"image/jpeg"===this.type}}var J=$;const X={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class Y{constructor(e,t,s=null,r=null){this._memoryUsed=null,this._source=null,this._symbolizerParameters=null,this._bandIds=null,this._interpolation=null,this._dirty=!1,this._transformGrid=null,this.symbolizerRenderer=null,this.rawPixelData=null,this.lij=null,this.scale=1,this.offset=[0,0],this.opacity=1,this.lij=e,this.source=t,this.width=s||t.width,this.height=r||t.height}get source(){return this._source}set source(e){this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._memoryUsed=null)}get symbolizerParameters(){return this._symbolizerParameters||X}set symbolizerParameters(e){this._symbolizerParameters=e}get bandIds(){return this._bandIds}set bandIds(e){if(s(e)&&e.length>0){this._bandIds&&e.every(((e,t)=>!!this._bandIds[t]&&e===this._bandIds[t]))||(this._bandIds=e,this._dirty=!0)}else this._bandIds=null}get interpolation(){return this._interpolation}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode("bilinear"===e?9729:9728)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null)}bind(e){return!!(this.source&&this.source.pixels&&this.source.pixels.length>0)&&(this._rasterTexture&&!this._dirty||this._updateRasterTexture(e,this.bandIds),this._rasterTexture&&(this._updateColormapTexture(e),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=R(e,this.transformGrid))),!0)}getUniforms(){const e=q(this.scale,this.offset),{symbolizerParameters:t,transformGrid:s,width:r,height:i,opacity:o}=this;return{basic:e,common:U(s,[r,i],[this.source.width,this.source.height],o),colormap:t.colormap?P(t.colormap,t.colormapOffset):null,stretch:"stretch"===this.symbolizerParameters.type?O(this.symbolizerParameters):null,hillshade:"hillshade"===this.symbolizerParameters.type?F(this.symbolizerParameters):null}}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}getMemoryUsage(){if(r(this._memoryUsed)){const e=this.getTextures();if(null==e)return 0;this._memoryUsed=e.textures.map((e=>e.descriptor.width*e.descriptor.height*4)).reduce(((e,t)=>e+t))}return this._memoryUsed}release(){return this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null),this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null),this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this.source=null,this.transformGrid=null,this.rawPixelData=null,!0}_updateRasterTexture(e,t){const i=this.source?this.source.extractBands(t):null;if(!(i&&i.pixels&&i.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null));const o=r(t)&&r(this.bandIds)||s(t)&&s(this.bandIds)&&t.join("")===this.bandIds.join("");if(this._rasterTexture){if(o)return;this._rasterTexture.dispose(),this._rasterTexture=null}this._rasterTexture=A(e,i,this.interpolation||"nearest")}_updateColormapTexture(e){const t=this._colormap,s=this.symbolizerParameters.colormap;return s?t?s.length!==t.length||s.some(((e,s)=>e!==t[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=D(e,s),void(this._colormap=s)):void 0:(this._colormapTexture=D(e,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}const Z=T(),ee=T(),te=T(),se=T();function re(e,t,s,r){y(Z,s),Z[r]=t[r];const i=x(Z,Z,t),o=x(ee,e,t),a=b(o,i),n=b(i,i);let l;l=a<=0?t:n<=a?s:k(Z,t,w(i,i,a/n));const u=x(Z,e,l);return Math.PI/2-Math.atan(u[2]/Math.sqrt(u[0]*u[0]+u[1]*u[1]))}var ie=Object.freeze({__proto__:null,isInsideExtent:function(e,t,s=0){const r=e.extent;if(0===s)return I(r,t);const i=Math.min(r[2]-r[0],r[3]-r[1]);return L(r,t,s*i)},tiltOnEdge:re,tiltToExtentEdge:function(e,t){const s=e.elevationBounds,r=e.extent,i=.5*(s.min+s.max);te[0]=r[0],te[1]=r[1],te[2]=i,se[0]=r[2],se[1]=r[3],se[2]=i;let o=1/0,a=1/0;return t[0]<te[0]?o=re(t,te,se,0):t[0]>se[0]&&(o=re(t,se,te,0)),t[1]<te[1]?a=re(t,te,se,1):t[1]>se[1]&&(a=re(t,se,te,1)),Math.min(o,a)},checkIfTileInfoSupportedForViewSR:function(e,t,s){if(e.spatialReference.isGeographic)return new d("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");const r=z.checkUnsupported(e);if(r)return r;const i=function(e,t){const s=e.lods,r=s[0].resolution*Math.pow(2,s[0].level),i=[r*e.size[0],r*e.size[1]],o=[e.origin.x,e.origin.y],a=j(t),n=v();z.computeRowColExtent(a,i,o,n);const l=(n[2]-n[0])*(n[3]-n[1]);if(l>Q){const t=s[0].scale*Math.pow(2,s[0].level);let i=Math.max((a[3]-a[1])/e.size[1],(a[2]-a[0])/e.size[0])*t/r;const o=Math.floor(Math.log(i)/Math.log(10));return i=Math.ceil(i/Math.pow(10,o))*Math.pow(10,o),new d("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(t).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+i.toLocaleString()+".",{level0Scale:t,suggestedLevel0Scale:i,requiredNumRootTiles:l,allowedNumRootTiles:Q})}return null}(e,s);return i||(t&&!e.spatialReference.equals(t)?new d("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}});var oe=Object.freeze({__proto__:null,isInsideExtent:function(){return!0},tiltToExtentEdge:function(){return 0},checkIfTileInfoSupportedForViewSR:function(e,t){const s=e.lods.length-1,r=e.spatialReference,i=S(r)||f(r)||g(r);if(r.isWebMercator){if(!z.makeWebMercatorAuxiliarySphere(s).compatibleWith(e))return new d("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else{if(!i)return new d("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(!z.makeGCSWithTileSize(e.spatialReference,e.size[0],s).compatibleWith(e))return e.spatialReference.isWGS84?new d("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new d("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}if(t&&!e.spatialReference.equals(t))return new d("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}});class ae{constructor(e){this._texture=e,this._refCount=1}retain(){++this._refCount}release(){--this._refCount,0===this._refCount&&this._texture.dispose()}get texture(){return this._texture}generateMipmap(){this._texture.generateMipmap()}get descriptor(){return this._texture.descriptor}}const ne={planar:ie,spherical:oe};function le(e,t){e||console.warn("Terrain: "+t)}const ue=80/180*Math.PI,ce=110/180*Math.PI;function he(e,t,s){const r=ne[e.manifold];let i;if(r.isInsideExtent(e,t))i=e.getElevation(t[0],t[1],t[1],e.spatialReference);else{if(!r.isInsideExtent(e,t,1.2))return 0;const s=r.tiltToExtentEdge(e,t);if(s>ue&&s<ce)return 0;const o=e.elevationBounds;i=.5*(o.min+o.max)}const o=t[2]-i;return Math.abs(o)<s?0:o<0?-1:1}function me(e){return pe(e)?{fullExtent:e.fullExtent,minScale:e.layer.minScale,maxScale:e.layer.maxScale,tilemapCache:null}:e.layer}function de(e){return"imagery-tile"===e.type||"wcs"===e.type}function pe(e){return e&&"esri.views.3d.layers.ImageryTileLayerView3D"===e.declaredClass}function fe(e){return e&&"esri.views.3d.layers.TileLayerView3D"===e.declaredClass}function ge(e){return e&&"esri.views.3d.layers.VectorTileLayerView3D"===e.declaredClass}function _e(e){return e&&"esri.views.3d.layers.ElevationLayerView3D"===e.declaredClass}function Te(e){return e&&(fe(e)||pe(e)||_e(e)||ge(e)||function(e){return e&&"esri.views.3d.layers.WMTSLayerView3D"===e.declaredClass}(e))}function ye(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof Y}function xe(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof W}function be(e){return e&&e.sourceLayerInfo&&e.sourceLayerInfo.data instanceof ae}function ke(e){const t=e&&e.sourceLayerInfo&&e.sourceLayerInfo.data;return t instanceof HTMLImageElement||t instanceof K||t instanceof HTMLCanvasElement||t instanceof ImageData}function we(e){return s(e)&&!(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData)&&e.release(),null}function Ie(e){return e.fetchTile&&!(e.fetchTile===E.prototype.fetchTile||e.fetchTile===M.prototype.fetchTile)}function Le(e,t,s,r){let i;return i=2===r||"planar"===r?"planar":"spherical",ne[i].checkIfTileInfoSupportedForViewSR(e,s,t)}function je(e,t,s){let r,i;if("wmts"===e.type){const o=e.activeLayer;if(o){const e=o.tileMatrixSet;if(e)r=e.tileInfo,i=e.fullExtent;else{const e=o.tileMatrixSets;if(e){const r=e.find((e=>null==Le(e.tileInfo,e.fullExtent,t,s)));if(r)return{tileInfo:r.tileInfo,fullExtent:r.fullExtent}}}}}else i=de(e)?e.getCompatibleFullExtent(t):e.fullExtent,r="vector-tile"!==e.type||ve.force512VTL?de(e)?e.getCompatibleTileInfo(t,i):e.tileInfo:e.compatibleTileInfo256;return r&&i&&null==Le(r,i,t,s)?{tileInfo:r,fullExtent:i}:{tileInfo:null,fullExtent:null}}const ve={force512VTL:!1};export{K as I,Y as R,J as S,ae as T,je as a,ge as b,Le as c,xe as d,ye as e,ke as f,me as g,be as h,de as i,he as j,Te as k,_e as l,pe as m,fe as n,we as r,Ie as u,le as w};
