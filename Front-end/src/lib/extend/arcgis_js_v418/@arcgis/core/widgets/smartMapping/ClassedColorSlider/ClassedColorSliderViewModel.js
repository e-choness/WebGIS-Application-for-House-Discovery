/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/object.js";import"../../../chunks/deprecate.js";import"../../../core/lang.js";import"../../../config.js";import{i as o}from"../../../chunks/Logger.js";import"../../../chunks/string.js";import"../../../chunks/metadata.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/Accessor.js";import"../../../chunks/PropertyOrigin.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../chunks/Message.js";import"../../../core/Error.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/Evented.js";import"../../../core/Collection.js";import"../../../chunks/collectionUtils.js";import"../../../chunks/JSONSupport.js";import"../../../chunks/Promise.js";import"../../../chunks/Loadable.js";import"../../../core/urlUtils.js";import"../../../core/accessorSupport/decorators/aliasOf.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../chunks/jsonMap.js";import"../../../chunks/enumeration.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../chunks/resourceExtension.js";import"../../../chunks/persistableUrlUtils.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/locale.js";import"../../../chunks/number.js";import"../../../intl.js";import"../../../kernel.js";import"../../../request.js";import"../../../chunks/assets.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../chunks/Ellipsoid.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Extent.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalUser.js";import"../../../portal/Portal.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/colorUtils.js";import"../../../Color.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Multipoint.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../geometry.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/domains.js";import"../../../chunks/arcadeOnDemand.js";import"../../../layers/support/fieldUtils.js";import"../../../popup/content/Content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/CustomContent.js";import"../../../chunks/date.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/FieldInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../chunks/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/TextContent.js";import"../../../popup/content.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../chunks/Identifiable.js";import"../../../support/actions/ActionBase.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../PopupTemplate.js";import"../../../symbols/Symbol.js";import"../../../symbols/CIMSymbol.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/screenUtils.js";import"../../../chunks/opacityUtils.js";import"../../../chunks/materialUtils.js";import"../../../symbols/edges/Edges3D.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/utils.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../chunks/colors.js";import"../../../chunks/Symbol3DOutline.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/Thumbnail.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../chunks/Symbol3DVerticalOffset.js";import"../../../symbols/LabelSymbol3D.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureFillSymbol.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../symbols/support/jsonUtils.js";import"../../../chunks/uid.js";import"../../../Graphic.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/unitUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../chunks/numberUtils.js";import"../../../chunks/utils7.js";import"../../Slider/SliderViewModel.js";import"../support/utils.js";import e from"../SmartMappingSliderViewModel.js";let i=class extends e{constructor(s){super(s),this.zoomingEnabled=!1}set breaks(s){this._set("breaks",s),this.notifyChange("max"),this.notifyChange("min")}set max(s){this._updateBreakMax(s),this.setMax(s)}get max(){const{breaks:s}=this;return s&&s.length?s[s.length-1].max:null}set min(s){this._updateBreakMin(s),this.setMin(s)}get min(){const{breaks:s}=this;return s&&s.length?s[0].min:null}get values(){const{breaks:s}=this;if(!s||!s.length)return[];const o=s.map((s=>s.max));return o.pop(),o}setValue(s,o){const{max:t,min:r}=this;o>t||o<r||(this._updateBreakInfos(o,s),this.notifyChange("values"),this.notifyChange("labels"))}getStopInfo(){const{breaks:s,max:o,min:t}=this,r=o-t;if(!s||!s.length||!r)return[];const e=[];return s.forEach((s=>{const{color:i,max:p,min:m}=s;let n,l;o===t?n=l=0:(n=(o-m)/r,l=(o-p)/r),e.push({offset:n,color:i},{offset:l,color:i})})),e}_updateBreakMax(s){const{breaks:t,max:r,min:e}=this;!isNaN(s)&&r!==s&&o(e)&&s>e&&t&&t.length&&(t[t.length-1].max=s)}_updateBreakMin(s){const{breaks:t,max:r,min:e}=this;!isNaN(s)&&e!==s&&o(r)&&s<r&&t&&t.length&&(t[0].min=s)}_updateBreakInfos(s,t){const{breaks:r}=this;r[t].max=s,r[t].min>r[t].max&&(r[t].min=s),o(r[t+1])&&(r[t+1].min=s)}};s([t()],i.prototype,"breaks",null),s([t({dependsOn:["breaks"]})],i.prototype,"max",null),s([t({dependsOn:["breaks"]})],i.prototype,"min",null),s([t({dependsOn:["breaks"],readOnly:!0})],i.prototype,"values",null),s([t({readOnly:!0})],i.prototype,"zoomingEnabled",void 0),i=s([r("esri.widgets.smartMapping.ClassedColorSlider.ClassedColorSliderViewModel")],i);var p=i;export default p;
