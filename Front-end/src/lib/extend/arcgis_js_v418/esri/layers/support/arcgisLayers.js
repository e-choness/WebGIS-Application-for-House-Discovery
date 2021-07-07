// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("require exports ../../core/maybe ../../core/Error ../../request ./arcgisLayerUrl ./lazyLayerLoader".split(" "),function(t,l,m,u,v,w,x){function n(a,b){return a?a.find(d=>d.id===b):null}function y(a,b,d){function e(c,f){c={...d,layerId:c,sublayerTitleMode:"service-name"};m.isSome(f)&&(c.sourceJSON=f);return new b.Constructor(c)}b.sublayerIds.forEach(c=>{c=e(c,n(b.sublayerInfos,c));a.add(c)});b.tableIds.forEach(c=>{c=e(c,n(b.tableInfos,c));a.tables.add(c)})}async function z(a){var b=w.parse(a);
if(m.isNone(b))throw new u("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const {serverType:d,sublayer:e}=b;var c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(d){case "MapServer":var f=null!=e?"FeatureLayer":A(a).then(g=>g?"TileLayer":"MapImageLayer");break;case "ImageServer":f=h(a).then(g=>{const k=g.tileInfo&&g.tileInfo.format;return g.tileInfo?!k||"LERC"!==k.toUpperCase()||g.cacheType&&"elevation"!==
g.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case "SceneServer":f=h(b.url.path).then(g=>{const k={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return g&&Array.isArray(g.layers)&&0<g.layers.length&&(g=g.layers[0].layerType,null!=k[g])?k[g]:"SceneLayer"});break;default:f=c[d]}c="FeatureServer"===d;b={parsedUrl:b,Constructor:null,layerOrTableId:c?e:null,sublayerIds:null,
tableIds:null};f=await f;if({FeatureLayer:!0,SceneLayer:!0}[f]&&null==e)if(a=await B(a,d),c&&(b.sublayerInfos=a.layerInfos,b.tableInfos=a.tableInfos),1!==a.layerIds.length+a.tableIds.length)b.sublayerIds=a.layerIds,b.tableIds=a.tableIds;else if(c){var p,q;b.layerOrTableId=null!=(p=a.layerIds[0])?p:a.tableIds[0];b.sourceJSON=null!=(q=a.layerInfos[0])?q:a.tableInfos[0]}b.Constructor=await C(f);return b}async function B(a,b){var d,e;let c=!1;"FeatureServer"===b?(a=await D(a),c=!!a.layersJSON,b=a.layersJSON||
a.serviceJSON):b=await h(a);a=null==(d=b)?void 0:d.layers;d=null==(e=b)?void 0:e.tables;return{layerIds:(null==a?void 0:a.map(f=>f.id).reverse())||[],tableIds:(null==d?void 0:d.map(f=>f.id).reverse())||[],layerInfos:c?a:[],tableInfos:c?d:[]}}function r(a){return!a.type||"Feature Layer"===a.type}async function D(a){var b,d;let e=await h(a);e=e||{};e.layers=(null==(b=e.layers)?void 0:b.filter(r))||[];b={serviceJSON:e};if(10.5>e.currentVersion)return b;a=await h(a+"/layers");b.layersJSON={layers:(null==
a?void 0:null==(d=a.layers)?void 0:d.filter(r))||[],tables:(null==a?void 0:a.tables)||[]};return b}async function C(a){return(0,x.layerLookupMap[a])()}async function A(a){return(await h(a)).tileInfo}async function h(a){return(await v(a,{responseType:"json",query:{f:"json"}})).data}l.fromUrl=async function(a){const b=await z(a.url);a={...a.properties,url:a.url};if(!b.sublayerIds)return null!=b.layerOrTableId&&(a.layerId=b.layerOrTableId,a.sourceJSON=b.sourceJSON),new b.Constructor(a);const d=new (await new Promise(function(e,
c){t(["../GroupLayer"],function(f){e(Object.freeze({__proto__:null,"default":f}))},c)})).default({title:b.parsedUrl.title});y(d,b,a);return d};Object.defineProperty(l,"__esModule",{value:!0})});