/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import"../chunks/ArrayPool.js";import{a as t}from"../chunks/object.js";import"../chunks/deprecate.js";import"../core/lang.js";import"../config.js";import{L as e}from"../chunks/Logger.js";import"../chunks/string.js";import"../chunks/metadata.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"../chunks/PropertyOrigin.js";import"../core/scheduling.js";import{e as i}from"../core/promiseUtils.js";import"../chunks/Message.js";import"../core/Error.js";import"../chunks/ensureType.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/Evented.js";import"../core/Collection.js";import"../chunks/collectionUtils.js";import"../chunks/JSONSupport.js";import"../chunks/Promise.js";import"../chunks/Loadable.js";import"../core/urlUtils.js";import{aliasOf as n}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/resourceExtension.js";import"../chunks/persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"../chunks/locale.js";import"../chunks/number.js";import"../intl.js";import"../kernel.js";import"../request.js";import"../chunks/assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../chunks/mathUtils2.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/vec3.js";import"../chunks/colorUtils.js";import"../Color.js";import"../chunks/zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/domains.js";import"../chunks/arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"../chunks/date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"../chunks/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"../chunks/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/utils.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"../chunks/colors.js";import"../chunks/Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"../chunks/Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../chunks/urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"../chunks/uid.js";import"../Graphic.js";import"../core/Handles.js";import"../chunks/unitUtils.js";import"../core/watchUtils.js";import"../tasks/support/ProjectParameters.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/aaBoundingRect.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../geometry/coordinateFormatter.js";import"../chunks/domUtils.js";import{s as a,i as l}from"../chunks/widgetUtils.js";import"../chunks/projector.js";import{a as p}from"../chunks/accessibleHandler.js";import{m as c}from"../chunks/messageBundle.js";import{r as d}from"../chunks/renderable.js";import{j as m}from"../chunks/index.js";import u from"./Widget.js";import"../chunks/GoTo.js";import"../chunks/geometryServiceUtils.js";import h from"./CoordinateConversion/support/Conversion.js";import"./CoordinateConversion/support/Format.js";import"../chunks/number3.js";import _ from"./CoordinateConversion/CoordinateConversionViewModel.js";const v="esri-coordinate-conversion esri-widget",b="esri-coordinate-conversion--capture-mode",g="esri-coordinate-conversion--no-basemap",y="esri-coordinate-conversion__popup",j="esri-coordinate-conversion__conversion-list",C="esri-coordinate-conversion__row",k="esri-coordinate-conversion__display",f="esri-coordinate-conversion__conversions-view--expanded",w="esri-coordinate-conversion__conversions-view--expand-down",S="esri-coordinate-conversion__conversions-view--expand-up",x="esri-coordinate-conversion__conversions-view",I="esri-coordinate-conversion__select-primary",M="esri-coordinate-conversion__select-row",P="esri-coordinate-conversion__tools",D="esri-coordinate-conversion__mode-toggle",T="esri-coordinate-conversion__row-button",F="esri-coordinate-conversion__back-button",V="esri-coordinate-conversion__button",L="esri-coordinate-conversion__input-coordinate",U="esri-coordinate-conversion__input-form",O="esri-coordinate-conversion__input-group",E="esri-coordinate-conversion__input-coordinate--rejected",$="esri-coordinate-conversion__heading",R="esri-coordinate-conversion__pattern-input",A="esri-coordinate__settings",B="esri-coordinate-conversion__settings-group",G="esri-coordinate-conversion__settings-group-horizontal",q="esri-coordinate-conversion__preview-coordinate",W="esri-disabled",z="esri-input",H="esri-button",N="esri-widget__heading",Q="esri-widget--button",J="esri-icon-left-arrow",K="esri-icon-right-arrow",X="esri-icon-map-pin",Y="esri-icon-up",Z="esri-icon-duplicate",oo="esri-icon-edit",to="esri-select",eo="esri-icon-down",so="esri-icon-refresh",io="esri-icon-close",ro="esri-icon-settings2",no=e.getLogger("esri.widgets.CoordinateConversion");let ao=class extends u{constructor(o,t){super(o,t),this._popupMessage=null,this._popupId=null,this._coordinateInput=null,this._badInput=!1,this._goToEnabled=!1,this._conversionFormat=null,this._settingsFormat=null,this._previewConversion=null,this._expanded=!1,this._popupVisible=!1,this._settingsVisible=!1,this._inputVisible=!1,this.conversions=null,this.currentLocation=null,this.formats=null,this.goToOverride=null,this.label=void 0,this.messages=null,this.messagesCommon=null,this.mode=null,this.orientation="auto",this.requestDelay=null,this.view=null,this.viewModel=new _}set multipleConversions(o){!1===o&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1)),this._set("multipleConversions",o)}get multipleConversions(){const o=this._get("multipleConversions");return"boolean"!=typeof o||o}reverseConvert(o,t){return this.viewModel.reverseConvert(o,t)}render(){const o=this.get("viewModel.state"),t="disabled"===o?m("div",{key:"esri-coordinate__no-basemap"},this.messages.noBasemap):null,e=!t&&this._inputVisible?this._renderInputForm():null,s=!t&&this._settingsVisible?this._renderSettings():null,i=t||e||s?null:this._renderConversionsView(),r=this._popupVisible?this._renderPopup():null,n={[b]:"capture"===this.mode,[W]:"loading"===o,[g]:"disabled"===o};return m("div",{class:this.classes(v,n)},r,t,i,s,e)}_addConversion(o){const t=o.target,e=t.options[t.options.selectedIndex]["data-format"],s=t["data-index"],i=new h({format:e});t.options.selectedIndex=0,s>=0&&this.conversions.removeAt(s),this.conversions.add(i,s)}_findSettingsFormat(){return this._settingsFormat||this.conversions.reduceRight(((o,t)=>{const e=t.format;return e.get("hasDisplayProperties")?e:o}),null)||this.formats.find((o=>o.hasDisplayProperties))}_hidePopup(){this._popupId&&(clearTimeout(this._popupId),this._popupId=null),this._popupVisible=!1,this._popupMessage=null,this.scheduleRender()}_onConvertComplete(){this._inputVisible=!1,this._coordinateInput.value=""}_onCopy(o){const e=o.currentTarget["data-conversion"].displayCoordinate;"clipboardData"in t?t.clipboardData.setData("text",e):o.clipboardData.setData("text/plain",e),this._showPopup(this.messages.copySuccessMessage),o.preventDefault()}_processUserInput(o){const t=i(o),e=this.viewModel;if("Enter"!==t&&t)this._badInput&&(this._badInput=!1);else{const o=this._coordinateInput["data-format"],t=this._coordinateInput.value;this._reverseConvert(t,o).then((o=>{"capture"===this.mode?e.resume():this.mode="capture",this.currentLocation=o,e.setLocation(o),this._onConvertComplete()})).catch((o=>{no.error(o),this._showPopup(this.messages.invalidCoordinate),this._badInput=!0}))}}_reverseConvert(o,t){const e=this.viewModel;return t.reverseConvert(o).then((o=>(this._goToEnabled&&e.goToLocation(o).catch((o=>{no.warn(o),this._showPopup(this.messages.locationOffBasemap)})),o)))}_setInputFormat(o){const t=o.target,e=t[t.options.selectedIndex]["data-format"];this._conversionFormat=e}_setPreviewConversion(){const o=this._findSettingsFormat(),t=this.viewModel;if(o){const e=this.conversions.find((t=>t.format===o));this._previewConversion=new h({format:o,position:{location:this.currentLocation,coordinate:e&&e.position.coordinate}}),this._previewConversion.position.coordinate||t.previewConversion(this._previewConversion)}}_setSettingsFormat(o){const t=o.target,e=t[t.options.selectedIndex]["data-format"];this._settingsFormat=e,this._setPreviewConversion()}_showPopup(o,t=2500){this._popupMessage=o,this._popupVisible?clearTimeout(this._popupId):this._popupVisible=!0,this.scheduleRender(),this._popupId=setTimeout((()=>{this._popupId=null,this._hidePopup()}),t)}_toggleGoTo(){this._goToEnabled=!this._goToEnabled}_updateCurrentPattern(o){o.stopPropagation();const t=o.target,e=this._findSettingsFormat();e&&(e.currentPattern=t.value)}_renderConversion(o,t){const{messages:e}=this,s=`${this.id}__list-item-${t}`,i=`${o.format.name} ${e.conversionOutputSuffix}`,r=0===t,n=r||this._expanded,a=r?this._renderFirstConversion(o):this._renderTools(t,o,s),l=r&&!o.displayCoordinate?e.noLocation:o.displayCoordinate,p=m("div",{"aria-label":l,class:k,"data-conversion":o,role:"listitem",tabindex:"0",title:l},l),c=this._renderOptions(this.formats.filter((t=>t!==o.format)));return n?m("li",{"aria-label":i,class:C,id:s,key:o,role:"group",title:i,tabindex:"0"},m("select",{"aria-controls":s,"aria-label":e.selectFormat,class:this.classes(to,M),bind:this,"data-index":t,onchange:this._addConversion,title:e.selectFormat},m("option",{"aria-label":o.format.name,selected:!0,title:o.format.name},o.format.name.toUpperCase()),c),p,a):null}_renderCopyButton(o){return m("li",{"aria-label":this.messagesCommon.copy,bind:this,class:this.classes(Q,T),"data-conversion":o,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:this.messagesCommon.copy},m("span",{"aria-hidden":"true",class:Z}))}_renderFirstConversion(o){const t=this.id,e={[eo]:!this._expanded,[Y]:this._expanded},{messages:s,messagesCommon:i}=this,r="live"===this.mode?s.captureMode:s.liveMode,n=this._expanded?i.collapse:i.expand,a=o.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(o):null,l=this.multipleConversions?m("li",{"aria-controls":`${t}__${j}`,"aria-label":n,bind:this,class:Q,key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:n},m("span",{"aria-hidden":"true",class:this.classes(e)})):m("li",{"aria-label":r,bind:this,class:this.classes(Q,D),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:r},m("span",{"aria-hidden":"true",class:X}));return m("ul",{class:P},a,l)}_renderInputForm(){const o=this._conversionFormat||this.conversions.getItemAt(0).format,t=this.formats.findIndex((t=>t.name===o.name)),e=this.id,s=`${e}__${L}`,i=`${e}__${L}__header`,r=this._renderOptions(this.formats,!0,t),n={[E]:this._badInput},{messages:l,messagesCommon:p}=this;return m("div",{"aria-labelledby":i,class:U,key:"esri-coordinate-conversion__input-form",role:"search"},m("div",{class:$},m("div",{"aria-label":p.back,bind:this,class:this.classes(Q,F),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:p.back},this._renderBackIcon()),m("h4",{class:N,id:i},l.inputCoordTitle)),m("div",{class:O},m("select",{"aria-controls":s,"aria-label":l.selectFormat,bind:this,class:this.classes(to,M),onchange:this._setInputFormat,title:l.selectFormat},r),m("input",{afterCreate:a,"aria-labelledby":i,"aria-required":"true",bind:this,class:this.classes(L,z,n),"data-format":o,"data-node-ref":"_coordinateInput",id:s,onkeydown:this._processUserInput,placeholder:l.inputCoordTitle,role:"textbox",spellcheck:!1,title:l.inputCoordTitle,type:"text"})),m("div",{class:O},m("label",{"aria-label":l.goTo},m("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:l.goTo,type:"checkbox"}),l.goTo),m("button",{"aria-label":l.convert,bind:this,class:this.classes(V,H),onclick:this._processUserInput,title:l.convert,type:"button"},l.convert)))}_renderConversionsView(){const o=`${this.id}__${j}`,t=this._renderPrimaryTools(),e=this._renderOptions(this.formats),s=this.conversions.map(((o,t)=>this._renderConversion(o,t))).toArray(),{messages:i}=this,r=this._expanded?m("div",{class:C},m("select",{"aria-controls":o,"aria-label":i.addConversion,bind:this,class:this.classes(to,I),onchange:this._addConversion,title:i.addConversion},m("option",{disabled:!0,selected:!0,value:""},i.addConversion),e),t):null,n={[f]:this._expanded,[S]:"expand-up"===this.orientation,[w]:"expand-down"===this.orientation};return m("div",{class:this.classes(x,n),key:"esri-coordinate-conversion__main-view"},m("ul",{"aria-expanded":this._expanded?"true":"false",class:j,id:o},s),r)}_renderOptions(o,t,e){const s=this.conversions.getItemAt(0);return o.map(((o,i)=>{const r=!(t||!s)&&(s.format.name===o.name||this.conversions.map((o=>o.format.name)).includes(o.name));return m("option",{"aria-label":o.name,"data-format":o,disabled:r,key:o.name,selected:i===e,value:o.name},o.name.toUpperCase())})).toArray()}_renderPopup(){return m("div",{class:y,role:"alert"},this._popupMessage)}_renderPrimaryTools(){const{messages:o}=this,t="live"===this.mode?o.captureMode:o.liveMode;return m("ul",{class:P},m("li",{bind:this,class:Q,onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:o.inputCoordTitle},m("span",{"aria-hidden":"true",class:oo})),m("li",{bind:this,class:this.classes(Q,D),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:t},m("span",{"aria-hidden":"true",class:X})),m("li",{bind:this,class:Q,onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:o.settingsTitle},m("span",{"aria-hidden":"true",class:ro})))}_renderSettings(){const o=this.id,t=`${o}__${R}`,e=`${o}__${R}__header`,s=`${o}__${q}`,i=this.formats.filter((o=>o.hasDisplayProperties)),r=this._findSettingsFormat(),n=i.indexOf(r),a=this._renderOptions(i,!0,n),l=r.get("currentPattern"),{messages:p,messagesCommon:c}=this;return m("div",{"aria-labelledby":e,class:A,key:"esri-coordinate-conversion__settings"},m("div",{class:$},m("div",{bind:this,class:this.classes(Q,F),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:c.back},this._renderBackIcon()),m("h4",{class:N,id:e},p.settingsTitle)),m("div",{class:B},m("label",{for:t},p.changeCoordinateDisplay),m("select",{"aria-label":p.selectFormat,class:to,bind:this,onchange:this._setSettingsFormat,title:p.selectFormat},a),m("div",{class:G},m("input",{"aria-controls":s,bind:this,class:this.classes(R,z),id:t,oninput:this._updateCurrentPattern,spellcheck:!1,title:p.changeCoordinateDisplay,type:"text",value:l}),m("div",{"aria-controls":t,bind:this,class:Q,onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:p.defaultPattern},m("span",{"aria-hidden":"true",class:so})))),m("div",{class:B},m("label",null,c.preview,m("div",{class:q,id:s,tabindex:"0"},this._previewConversion.displayCoordinate))))}_renderBackIcon(){return m("span",{"aria-hidden":"true",class:l()?K:J})}_renderTools(o,t,e){const s=t.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(t):null,{messages:i}=this;return m("ul",{class:P,role:"listitem"},s,m("li",{"aria-controls":e,"aria-label":i.removeConversion,bind:this,class:this.classes(Q,T),"data-index":o,key:`${e}__${Q}`,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:i.removeConversion},m("span",{"aria-hidden":"true",class:io})))}_copyCoordinateOutput(o){const t=o.target;if(!("createTextRange"in document.body)){const o=window.getSelection(),e=document.createRange();e.selectNodeContents(t),o.removeAllRanges(),o.addRange(e)}document.execCommand("copy")}_removeConversion(o){const t=o.currentTarget["data-index"];this.conversions.removeAt(t)}_setDefaultPattern(o){o.stopPropagation();const t=this._findSettingsFormat();t&&(t.currentPattern=t.get("defaultPattern"))}_toggleExpand(){this._expanded=!this._expanded}_toggleInputVisibility(){this._inputVisible=!this._inputVisible,this._popupVisible&&this._hidePopup(),this._inputVisible?this.viewModel.pause():this.viewModel.resume()}_toggleMode(){this.mode="live"===this.mode?"capture":"live"}_toggleSettingsVisibility(){this._settingsVisible=!this._settingsVisible,this._popupVisible&&this._hidePopup(),this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()}};o([n("viewModel.conversions")],ao.prototype,"conversions",void 0),o([n("viewModel.currentLocation"),d()],ao.prototype,"currentLocation",void 0),o([n("viewModel.formats"),d()],ao.prototype,"formats",void 0),o([n("viewModel.goToOverride")],ao.prototype,"goToOverride",void 0),o([s({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],ao.prototype,"label",void 0),o([s(),d(),c("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")],ao.prototype,"messages",void 0),o([s(),d(),c("esri/t9n/common")],ao.prototype,"messagesCommon",void 0),o([n("viewModel.mode"),d()],ao.prototype,"mode",void 0),o([s(),d()],ao.prototype,"orientation",void 0),o([n("viewModel.requestDelay")],ao.prototype,"requestDelay",void 0),o([s(),d()],ao.prototype,"multipleConversions",null),o([n("viewModel.locationSymbol")],ao.prototype,"locationSymbol",void 0),o([n("viewModel.view"),d()],ao.prototype,"view",void 0),o([s({type:_}),d(["viewModel.state","viewModel.waitingForConversions"])],ao.prototype,"viewModel",void 0),o([p()],ao.prototype,"_copyCoordinateOutput",null),o([p()],ao.prototype,"_removeConversion",null),o([p()],ao.prototype,"_setDefaultPattern",null),o([p()],ao.prototype,"_toggleExpand",null),o([p()],ao.prototype,"_toggleInputVisibility",null),o([p()],ao.prototype,"_toggleMode",null),o([p()],ao.prototype,"_toggleSettingsVisibility",null),ao=o([r("esri.widgets.CoordinateConversion")],ao);var lo=ao;export default lo;