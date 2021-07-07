/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import{i as t,L as e}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import o from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{isAbortError as i,all as l}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import"../../core/Error.js";import"../../chunks/compilerUtils.js";import"../../chunks/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Evented.js";import n from"../../core/Collection.js";import{r as a}from"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/shared.js";import"../../chunks/writer.js";import"../../chunks/multiOriginJSONSupportUtils.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import"../../geometry/SpatialReference.js";import"../../chunks/locale.js";import"../../chunks/number.js";import"../../intl.js";import"../../kernel.js";import"../../request.js";import"../../chunks/assets.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/uid.js";import"../../Graphic.js";import m from"../../core/Handles.js";import"../../chunks/CollectionFlattener.js";import"../../layers/Layer.js";import"../../chunks/LegendOptions.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../tasks/support/ColorRamp.js";import"../../tasks/support/AlgorithmicColorRamp.js";import"../../tasks/support/MultipartColorRamp.js";import"../../chunks/colorRamps.js";import"../../renderers/Renderer.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/VisualVariablesMixin.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../renderers/ClassBreaksRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/MemCache.js";import"../../chunks/LRUCache.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/timeUtils.js";import"../../TimeExtent.js";import"../../TimeInterval.js";import"../../chunks/ReadOnlyMultiOriginJSONSupport.js";import"../../chunks/MultiOriginJSONSupport.js";import{init as u,whenEqualOnce as h}from"../../core/watchUtils.js";import"../../chunks/originUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/resourceUtils.js";import"../../chunks/saveUtils.js";import"../../chunks/OperationalLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/commonProperties2.js";import"../../core/workers/Connection.js";import"../../chunks/Scheduler.js";import"../../core/workers/workers.js";import"../../form/ExpressionInfo.js";import"../../form/elements/FieldElement.js";import"../../form/support/elements.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/elements/GroupElement.js";import"../../form/FormTemplate.js";import"../../chunks/zscale.js";import"../../chunks/queryZScale.js";import"../../layers/support/Field.js";import"../../tasks/support/FeatureSet.js";import"../../layers/FeatureLayer.js";import"../../chunks/ArcGISService.js";import"../../chunks/BlendLayer.js";import"../../chunks/CustomParametersMixin.js";import"../../chunks/PortalLayer.js";import"../../chunks/RefreshableLayer.js";import"../../chunks/ScaleRangeLayer.js";import"../../layers/support/TimeInfo.js";import"../../chunks/TemporalLayer.js";import"../../layers/support/FeatureReductionSelection.js";import"../../layers/support/FeatureReductionCluster.js";import"../../chunks/labelUtils.js";import"../../layers/support/LabelClass.js";import"../../chunks/defaultsJSON.js";import"../../chunks/defaults.js";import"../../chunks/featureReductionUtils.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/labelingInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/DataLayerSource.js";import"../../chunks/styleUtils2.js";import"../../support/popupUtils.js";import"../../tasks/support/AttachmentQuery.js";import"../../tasks/support/Query.js";import"../../tasks/support/StatisticDefinition.js";import"../../tasks/support/RelationshipQuery.js";import"../../layers/buildingSublayers/BuildingSublayer.js";import"../../chunks/capabilities.js";import"../../chunks/I3SLayerDefinitions.js";import"../../layers/buildingSublayers/BuildingComponentSublayer.js";import"../../layers/buildingSublayers/BuildingGroupSublayer.js";import"../../chunks/SceneService.js";import d from"../../layers/support/BuildingFilter.js";import"../../chunks/BuildingFilterBlock.js";import"../../layers/support/BuildingSummaryStatistics.js";import"../../chunks/FetchAssociatedFeatureLayer.js";import y from"../../layers/BuildingSceneLayer.js";import{c,f as j,s as b,g,a as k,b as f,d as S}from"../../chunks/filterUtils.js";import v from"./BuildingLevel.js";import L from"./BuildingPhase.js";let C=class extends o{constructor(){super(...arguments),this.id="root",this.parent=null,this.children=new n,this.layers=new n,this.level=0,this.collapsed=!0,this._handles=new m,this._childIds=new Set,this._layerUniqueIds=new Set}initialize(){this._handles.add([this.layers.on("before-add",(s=>{this._layerUniqueIds.has(s.item.uid)?s.preventDefault():this._layerUniqueIds.add(s.item.uid)})),this.layers.on("after-add",(({item:s})=>{this._handles.add([u(s,"visible",(()=>this.notifyChange("visible"))),u(s,"title",(()=>this.notifyChange("title")))],s.uid)})),this.layers.on("before-remove",(({item:s})=>{this._handles.remove(s.uid),this.notifyChange("title"),this.notifyChange("visible")})),this.children.on("before-add",(s=>{this._childIds.has(s.item.id)?s.preventDefault():(s.item._set("parent",this),this._childIds.add(s.item.id))}))])}destroy(){this._handles.destroy(),this.children.forEach((s=>s.destroy()))}get hasChildren(){return this.children.length>0}get isRoot(){return 0===this.level}get isLeaf(){return!this.hasChildren}get isDiscipline(){return 1===this.level}get visible(){return _(this.layers,(s=>s.visible))}get title(){return _(this.layers,(s=>s.title))||this.layers.items.map((s=>s.title)).join(", ")||null}toggleVisibility(s){const e=void 0===s?!this.visible:s;this.layers.forEach((s=>{s.visible=e})),e&&t(this.parent)&&this.parent.toggleVisibility(!0)}toggleCollapsed(s){this.collapsed=void 0===s?!this.collapsed:s}expand(){this.collapsed=!1}expandAll(){this.expand(),this.children.forEach((s=>s.expandAll()))}collapse(){this.collapsed=!0}collapseAll(){this.collapse(),this.children.forEach((s=>s.collapseAll()))}toggleAllSiblingsVisibility(s){const e=void 0===s?!this.visible:s;this.toggleVisibility(e),t(this.parent)&&(this.parent.toggleVisibility(e),this.parent.children.forEach((s=>s.toggleVisibility(e))))}};function _(s,e){let r=null;for(const o of s.items){const s=e(o);if(t(r)&&r!==s)return null;r=s}return r}s([r({nonNullable:!0})],C.prototype,"id",void 0),s([r()],C.prototype,"parent",void 0),s([r({nonNullable:!0,readOnly:!0})],C.prototype,"children",void 0),s([r({nonNullable:!0,readOnly:!0})],C.prototype,"layers",void 0),s([r({nonNullable:!0})],C.prototype,"level",void 0),s([r({nonNullable:!0})],C.prototype,"collapsed",void 0),s([r({readOnly:!0,dependsOn:["children.length"]})],C.prototype,"hasChildren",null),s([r({readOnly:!0,dependsOn:["level"]})],C.prototype,"isRoot",null),s([r({readOnly:!0,dependsOn:["hasChildren"]})],C.prototype,"isLeaf",null),s([r({readOnly:!0,dependsOn:["level"]})],C.prototype,"isDiscipline",null),s([r({readOnly:!0})],C.prototype,"visible",null),s([r({readOnly:!0})],C.prototype,"title",null),C=s([p("esri.widgets.BuildingExplorer.support.LayerTreeNode")],C);let U=class extends o{constructor(s){super(s),this.root=new C,this.state="disabled",this._handles=new m,this._loadLayers=c(),this.layers=new n}initialize(){this._handles.add(this.layers.on("change",(()=>this._onLayersChange()))),this._onLayersChange()}destroy(){this._set("state","disabled"),this._handles.destroy(),this.root.destroy()}set layers(s){const t=this._get("layers");this._set("layers",a(s,t))}_updateLayerTree(){this.root.destroy(),this._set("root",new C({collapsed:!1}));const s=new Map,e=this.layers.length>1?"modelName":"id";return this.layers.forEach((r=>{const o=j(r);t(o)&&this._addNodesForSublayers(o,this.root,s,e)})),this}_addNodeForLayer(s,e,r,o){const i=String(s.get(o)).toLowerCase();if(!t(i)||s.isEmpty)return;const l=`${e.id}/${i}`;let p=r.get(l);p||(p=new C({id:i,level:e.level+1}),r.set(l,p)),p.layers.push(s),e.children.push(p),this._addNodesForSublayers(s,p,r,o)}_addNodesForSublayers(s,t,e,r){"building-group"!==s.type||s.isEmpty||s.sublayers.forEach((s=>this._addNodeForLayer(s,t,e,r)))}async _onLayersChange(){if(this._set("state","loading"),0!==this.layers.length)try{await this._loadLayers(this.layers),this._updateLayerTree(),this._set("state","ready")}catch(s){i(s)||this._set("state","failed")}}};s([r({readOnly:!0})],U.prototype,"root",void 0),s([r({type:n,nonNullable:!0})],U.prototype,"layers",null),s([r({readOnly:!0,nonNullable:!0})],U.prototype,"state",void 0),U=s([p("esri.widgets.BuildingExplorer.BuildingDisciplineViewModel")],U);var I=U;const O=e.getLogger("esri.widgets.BuildingExplorer.BuildingExplorerViewModel");let D=class extends o{constructor(s){super(s),this.view=null,this.state="disabled",this.level=new v,this.phase=new L,this.disciplines=new I,this._handles=new m,this._loadLayers=c(),this.layers=new n}initialize(){this._handles.add([this.layers.on("change",(()=>this._onLayersChange())),u(this,"_filter",(()=>b(this.layers,this._filter)))]),this._onLayersChange()}destroy(){this._handles.destroy(),this.level.destroyed||this.level.destroy(),this.phase.destroyed||this.phase.destroy(),this.disciplines.destroyed||this.disciplines.destroy()}get isSupported(){var s;return"3d"===(null==(s=this.view)?void 0:s.type)}set layers(s){const t=s.filter((s=>s instanceof y));t.length!==s.length&&O.error("Some layers are not BuildingSceneLayers but only BuildingSceneLayers can be passed to the widget."),this._set("layers",a(t,this._get("layers")))}get _filter(){const s=this.level.filterExpressions,e=this.phase.filterExpressions,r=[],o=g([s.solid,e.solid]);t(o)&&r.push(o);const i=k([s.xRay,e.xRay]);return t(i)&&r.push(i),0===r.length?null:new d({id:f(),name:"Building Explorer Filter",filterBlocks:r})}async _onLayersChange(){if(this.level.layers=this.layers,this.phase.layers=this.layers,this.disciplines.layers=this.layers,0!==this.layers.length){this._set("state","loading");try{await this._loadLayers(this.layers),await l([h(this.level,"state","ready"),h(this.phase,"state","ready"),h(this.disciplines,"state","ready")]),this.layers.forEach(S),this._set("state","ready")}catch(s){i(s)||this._set("state","failed")}}else this._set("state","disabled")}};s([r({value:null})],D.prototype,"view",void 0),s([r({dependsOn:["view.type"]})],D.prototype,"isSupported",null),s([r({type:n,nonNullable:!0})],D.prototype,"layers",null),s([r({readOnly:!0})],D.prototype,"state",void 0),s([r({readOnly:!0,type:v})],D.prototype,"level",void 0),s([r({readOnly:!0,type:L})],D.prototype,"phase",void 0),s([r({readOnly:!0,type:I})],D.prototype,"disciplines",void 0),s([r({readOnly:!0,dependsOn:["level.filterExpressions","phase.filterExpressions"]})],D.prototype,"_filter",null),D=s([p("esri.widgets.BuildingExplorer.BuildingExplorerViewModel")],D);var w=D;export default w;export{I as B,C as L};
