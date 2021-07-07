/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import"../chunks/object.js";import"../chunks/deprecate.js";import"../core/lang.js";import"../config.js";import{i as s}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{resolve as t,create as o,reject as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import p from"../core/Error.js";import"../chunks/compilerUtils.js";import"../chunks/ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import{urlToObject as n,objectToQuery as l,makeAbsolute as m}from"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import{cast as u}from"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import{r as c}from"../chunks/reader.js";import{w as j}from"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import h from"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../kernel.js";import y from"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../chunks/mathUtils2.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"./support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"../chunks/uid.js";import"../Graphic.js";import"../core/Handles.js";import"../chunks/CollectionFlattener.js";import d from"./Layer.js";import"../chunks/LegendOptions.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"../chunks/colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"../chunks/sizeVariableUtils.js";import"../chunks/unitUtils.js";import"../chunks/lengthUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/VisualVariablesMixin.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/devEnvironmentUtils.js";import"../chunks/styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/MemCache.js";import"../chunks/LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"../chunks/timeUtils.js";import"../TimeExtent.js";import"../chunks/ReadOnlyMultiOriginJSONSupport.js";import{M as b}from"../chunks/MultiOriginJSONSupport.js";import"../core/watchUtils.js";import{p as f,d as k,a as S}from"../chunks/arcgisLayerUrl.js";import"../chunks/fieldType.js";import"../chunks/aaBoundingRect.js";import{O as g}from"../chunks/OperationalLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import{u as v}from"../chunks/commonProperties2.js";import{HandleOwnerMixin as U}from"../core/HandleOwner.js";import"./support/LOD.js";import"./support/TileInfo.js";import"./support/Field.js";import{A as C}from"../chunks/ArcGISService.js";import{B as _}from"../chunks/BlendLayer.js";import{C as D}from"../chunks/CustomParametersMixin.js";import{P as L}from"../chunks/PortalLayer.js";import{R as O}from"../chunks/RefreshableLayer.js";import{S as I}from"../chunks/ScaleRangeLayer.js";import"../chunks/labelUtils.js";import"./support/LabelClass.js";import"../chunks/defaultsJSON.js";import"../chunks/defaults.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"./support/FieldsIndex.js";import"../chunks/DataLayerSource.js";import"../support/popupUtils.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../chunks/serviceTileInfoProperty.js";import"../chunks/TilemapCache.js";import{A as R}from"../chunks/ArcGISCachedService.js";import{S as M,A as P}from"../chunks/SublayersOwner.js";import T from"./support/Sublayer.js";import"../chunks/sublayerUtils.js";const V=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let w=class extends(_(M(I(O(g(L(R(P(C(b(U(D(d))))))))))))){constructor(...r){super(...r),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(r,s){return"string"==typeof r?{url:r,...s}:r}load(r){const e=s(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},r).then((()=>this._fetchService(e)),(()=>this._fetchService(e)))),t(this)}get attributionDataUrl(){var r;const s=null==(r=this.parsedUrl)?void 0:r.path.toLowerCase();return s&&this._getDefaultAttribution(this._getMapName(s))}readSpatialReference(r,s){return(r=r||s.tileInfo&&s.tileInfo.spatialReference)&&h.fromJSON(r)}writeSublayers(r,s,e,t){if(!this.loaded||!r)return;const o=r.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).toArray(),i=[],p={writeSublayerStructure:!1,...t};o.forEach((r=>{const s=r.write({},p);i.push(s)}));i.some((r=>Object.keys(r).length>1))&&(s.layers=i)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(r){return Array.isArray(r)?r.map((r=>n(r).path)):null}fetchTile(r,s,e,t={}){const{signal:o,timestamp:i}=t,p=this.getTileUrl(r,s,e),a={responseType:"image",signal:o};return null!=i&&(a.query={_ts:t.timestamp}),y(p,a).then((r=>r.data))}getTileUrl(r,s,e){const t=!this.tilemapCache&&this.supportsBlankTile,o=l({...this.parsedUrl.query,blankTile:!t&&null,...this.customParameters}),i=this.tileServers;return`${i&&i.length?i[s%i.length]:this.parsedUrl.path}/tile/${r}/${s}/${e}${o?"?"+o:""}`}_fetchService(r){return o(((e,t)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new p("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void e({data:this.sourceJSON})}if(!this.parsedUrl)throw new p("tile-layer:undefined-url","layer's url is not defined");const o=f(this.parsedUrl.path);if(s(o)&&"ImageServer"===o.serverType)throw new p("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");y(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:r}).then(e,t)})).then((s=>{if(s.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=s.data,this.read(s.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!k(this.url))return this._fetchServerVersion(this.url,r).then((r=>{this.read({currentVersion:r})})).catch((()=>{}))}))}_fetchServerVersion(r,s){if(!S(r))return i();const e=r.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return y(e,{query:{f:"json",...this.customParameters},responseType:"json",signal:s}).then((r=>{if(r.data&&r.data.currentVersion)return r.data.currentVersion;throw new p("tile-layer:version-not-available")}))}_getMapName(r){const s=r.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return s&&s[2]}_getDefaultAttribution(r){if(!r)return;let s;r=r.toLowerCase();for(let e=0,t=V.length;e<t;e++)if(s=V[e],s.toLowerCase().indexOf(r)>-1)return m("//static.arcgis.com/attribution/"+s)}_getDefaultTileServers(r){const s=-1!==r.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),e=-1!==r.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return s||e?[r,r.replace(s?/server\.arcgisonline/i:/services\.arcgisonline/i,s?"services.arcgisonline":"server.arcgisonline")]:[]}};r([e({readOnly:!0,dependsOn:["parsedUrl"]})],w.prototype,"attributionDataUrl",null),r([e({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),r([e({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],w.prototype,"isReference",void 0),r([e({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],w.prototype,"operationalLayerType",void 0),r([e({type:Boolean})],w.prototype,"resampling",void 0),r([e()],w.prototype,"sourceJSON",void 0),r([e({type:h})],w.prototype,"spatialReference",void 0),r([c("spatialReference",["spatialReference","tileInfo"])],w.prototype,"readSpatialReference",null),r([e({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],w.prototype,"path",void 0),r([e({readOnly:!0})],w.prototype,"sublayers",void 0),r([j("sublayers",{layers:{type:[T]}})],w.prototype,"writeSublayers",null),r([e({json:{read:!1,write:!1}})],w.prototype,"popupEnabled",void 0),r([e({dependsOn:["parsedUrl"]})],w.prototype,"tileServers",null),r([u("tileServers")],w.prototype,"castTileServers",null),r([e({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),r([e(v)],w.prototype,"url",void 0),w=r([a("esri.layers.TileLayer")],w);var A=w;export default A;
