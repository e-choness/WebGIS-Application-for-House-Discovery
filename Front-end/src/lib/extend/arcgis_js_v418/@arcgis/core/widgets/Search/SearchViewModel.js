/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../chunks/ArrayPool.js";import{h as t}from"../../chunks/object.js";import"../../chunks/deprecate.js";import"../../core/lang.js";import"../../config.js";import{L as s,i as o,u as r,g as i}from"../../chunks/Logger.js";import"../../chunks/string.js";import"../../chunks/metadata.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import a from"../../core/Accessor.js";import"../../chunks/PropertyOrigin.js";import"../../core/scheduling.js";import{reject as n,resolve as u,eachAlways as p,after as c,createAbortController as h}from"../../core/promiseUtils.js";import"../../chunks/Message.js";import m from"../../core/Error.js";import"../../chunks/ensureType.js";import{subclass as d}from"../../core/accessorSupport/decorators/subclass.js";import{E as g}from"../../chunks/Evented.js";import y from"../../core/Collection.js";import"../../chunks/collectionUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/Promise.js";import"../../chunks/Loadable.js";import"../../chunks/asyncUtils.js";import"../../chunks/loadAll.js";import"../../core/urlUtils.js";import"../../core/accessorSupport/decorators/aliasOf.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/resourceExtension.js";import"../../chunks/persistableUrlUtils.js";import S from"../../geometry/SpatialReference.js";import{o as j}from"../../chunks/locale.js";import"../../chunks/number.js";import{fetchMessageBundle as f}from"../../intl.js";import"../../kernel.js";import"../../request.js";import{g as b}from"../../chunks/assets.js";import"../../geometry/Geometry.js";import v from"../../geometry/Point.js";import"../../chunks/Ellipsoid.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Extent.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../portal/PortalUser.js";import _ from"../../portal/Portal.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../portal/PortalItem.js";import"../../Basemap.js";import"../../chunks/writeUtils.js";import"../../chunks/mathUtils2.js";import"../../chunks/colorUtils.js";import"../../Color.js";import"../../chunks/zmUtils.js";import"../../geometry/Multipoint.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../geometry.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/domains.js";import"../../chunks/arcadeOnDemand.js";import"../../layers/support/fieldUtils.js";import"../../popup/content/Content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/CustomContent.js";import"../../chunks/date.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/FieldInfo.js";import"../../popup/content/FieldsContent.js";import"../../chunks/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/MediaContent.js";import"../../popup/content/TextContent.js";import"../../popup/content.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/RelatedRecordsInfo.js";import"../../chunks/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import k from"../../PopupTemplate.js";import"../../symbols/Symbol.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/screenUtils.js";import"../../chunks/opacityUtils.js";import"../../chunks/materialUtils.js";import"../../symbols/edges/Edges3D.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/utils.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import w from"../../symbols/SimpleLineSymbol.js";import"../../symbols/FillSymbol.js";import"../../symbols/patterns/StylePattern3D.js";import"../../symbols/FillSymbol3DLayer.js";import"../../chunks/colors.js";import"../../chunks/Symbol3DOutline.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/Symbol3D.js";import"../../chunks/Thumbnail.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../chunks/Symbol3DVerticalOffset.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureFillSymbol.js";import I from"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import x from"../../symbols/SimpleFillSymbol.js";import L from"../../symbols/SimpleMarkerSymbol.js";import P from"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/uid.js";import T from"../../Graphic.js";import C from"../../core/Handles.js";import"../../chunks/basemapUtils.js";import"../../chunks/unitUtils.js";import{on as R,init as E,whenFalseOnce as D,whenOnce as O}from"../../core/watchUtils.js";import"../../tasks/support/ProjectParameters.js";import"../../chunks/utils4.js";import"../../tasks/Task.js";import"../../chunks/scaleUtils.js";import{h as F}from"../../chunks/layerViewUtils.js";import{G as M}from"../../chunks/GoTo.js";import"../../chunks/utils5.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils9.js";import{getSchemes as A}from"../../smartMapping/symbology/location.js";import"../../chunks/trimExtend.js";import"../../tasks/support/GeneralizeParameters.js";import"../../tasks/support/LengthsParameters.js";import"../../tasks/support/OffsetParameters.js";import"../../tasks/support/RelationParameters.js";import"../../tasks/support/TrimExtendParameters.js";import"../../tasks/Locator.js";import"../../tasks/support/AddressCandidate.js";import G from"./SearchSource.js";import{g as U,a as N}from"../../chunks/geometryUtils3.js";import V from"./LayerSearchSource.js";import B,{i as J}from"./LocatorSearchSource.js";import{s as z,g as Q,p as H}from"../../chunks/geolocationUtils.js";function q(e,t){return e.hasOwnProperty(t)&&null!=e[t]&&""!==e[t]}const W=s.getLogger("esri.widgets.Search.SearchViewModel"),Z=y.ofType({key:e=>e.layer?"layer":"locator",base:G,typeMap:{layer:V,locator:B}}),X=S.WGS84,K=/<(?:.|\s)*?>/g;let Y=class extends(M(g.EventedMixin(a))){constructor(e){super(e),this._handles=new C,this._gotoController=null,this._searching=null,this.autoNavigate=!0,this.autoSelect=!0,this.defaultPopupTemplate=null,this.defaultSources=new Z,this.defaultSymbol=new I({url:b(t("trident")?"esri/images/search/search-symbol-32.png":"esri/images/search/search-symbol-32.svg"),size:24,width:24,height:24}),this.includeDefaultSources=!0,this.maxInputLength=128,this.maxResults=6,this.maxSuggestions=6,this.messages=null,this.minSuggestCharacters=1,this.popupEnabled=!0,this.popupTemplate=null,this.portal=_.getDefault(),this.resultCount=null,this.resultGraphicEnabled=!0,this.resultGraphic=null,this.results=null,this.selectedSuggestion=null,this.searchAllEnabled=!0,this.selectedResult=null,this.sources=new Z,this.suggestionDelay=150,this.suggestionCount=null,this.suggestions=null,this.suggestionsEnabled=!0,this.view=null}initialize(){const e=async()=>{const e=await f("esri/widgets/Search/t9n/Search");this.messages=e,this.defaultPopupTemplate=new k({title:e.searchResult,content:"{Match_addr}"})};e(),this._handles.add([R(this,["defaultSources","sources"],"change",(()=>this.notifyChange("allSources"))),E(this,["includeDefaultSources","view","portal"],(()=>this._update())),j(e)])}destroy(){this._abortGoTo(),this.clearGraphics(),this._handles.destroy(),this._handles=null}get activeSource(){return this.allSources.getItemAt(this.activeSourceIndex)||null}get activeSourceIndex(){return 1===this.allSources.length||!this.searchAllEnabled?0:-1}set activeSourceIndex(e){void 0!==e?this._override("activeSourceIndex",e):this._clearOverride("activeSourceIndex")}get allPlaceholder(){var e;return null==(e=this.messages)?void 0:e.allPlaceholder}set allPlaceholder(e){e?this._override("allPlaceholder",e):this._clearOverride("allPlaceholder")}get allSources(){const{sources:e,defaultSources:t,includeDefaultSources:s}=this,o="function"==typeof s?s.call(null,{sources:e,defaultSources:t}):s?t.concat(e):e,r=this._get("allSources")||new Z;return r.removeAll(),r.addMany(o.filter(Boolean)),r}get locationEnabled(){return this._get("locationEnabled")||z()}set locationEnabled(e){if(void 0===e)return void this._clearOverride("locationEnabled");const t=z();if(e&&!t){const e=new m("locationEnabled:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});W.error(e)}this._override("locationEnabled",e&&t)}get placeholder(){const{allSources:e,activeSourceIndex:t,allPlaceholder:s}=this;if(-1===t)return s;const o=e.getItemAt(t);return o?o.placeholder:""}set searchTerm(e){this._set("searchTerm",e||""),this.clearGraphics(),this.selectedSuggestion&&this.selectedSuggestion.text!==e&&this._set("selectedSuggestion",null),""===e&&this._clear()}get searchTerm(){return this._get("searchTerm")||""}get state(){return this._searching?"searching":this.updating?"loading":0===this.allSources.length?"disabled":"ready"}get updating(){return null!=this._updatingPromise}clear(){this.searchTerm=""}clearGraphics(){this._removeHighlight(),this._closePopup(),this.view&&this.view.graphics.remove(this.resultGraphic),this._set("resultGraphic",null)}search(e,t){this.emit("search-start"),this.clearGraphics();const s=this._createSuggestionForSearch(e),o=this.when().then((()=>this._getResultsFromSources(s,t).then((e=>{const t={activeSourceIndex:this.activeSourceIndex,searchTerm:s.text,numResults:0,numErrors:0,errors:[],results:[]};this._formatResponse(t,e,s);const o=this._getFirstResult(t.results),r=(s.location&&o?o.name:s.text).replace(K,"");return this._set("searchTerm",r),(s.key&&"number"==typeof s.sourceIndex||s.location)&&this._set("selectedSuggestion",s),this._set("results",t.results),this._set("resultCount",t.results.reduce(((e,t)=>e+t.results.length),0)),this.emit("search-complete",t),this._selectFirstResult(o).then((()=>t))})))).then((e=>(this._clearSearching(),e)),(e=>{throw this._clearSearching(),e}));return this._searching=o,this.notifyChange("state"),o}searchNearby(e){if(!this.locationEnabled){const e=new m("searchNearby:geolocation-unsupported","Geolocation API is unsupported.",{geolocation:navigator.geolocation});return W.error(e),n(e)}const t=Q().then((t=>H({position:t,view:this.view},e))).then((t=>this.search(t,e)));return this._searching=t,this.notifyChange("state"),t.catch((()=>{})).then((()=>this._clearSearching())),t}select(e){if(this.clearGraphics(),!e){const t=new m("select:missing-parameter","Cannot select without a searchResult.",{searchResult:e});return W.error(t),n(t)}const{view:t}=this,s=q(e,"sourceIndex")?e.sourceIndex:this._getSourceIndexOfResult(e),r=this.allSources.getItemAt(s);if(!r){const e=new m("select:missing-source","Cannot select without a source.",{source:r});return W.error(e),n(e)}const i=r instanceof V?this._getLayerSourcePopupTemplate(r):r.popupTemplate,l=r.resultSymbol||this._getDefaultSymbol(e),a=q(r,"resultGraphicEnabled")?r.resultGraphicEnabled:this.resultGraphicEnabled,c=q(r,"autoNavigate")?r.autoNavigate:this.autoNavigate,h=q(r,"popupEnabled")?r.popupEnabled:this.popupEnabled,d=h?i||this.popupTemplate||this.defaultPopupTemplate:null,{feature:g}=e;if(!g){const e=new m("select:missing-feature","Cannot select without a feature.",{feature:g});return W.error(e),n(e)}const{attributes:y,geometry:S,layer:j,sourceLayer:f}=g,b=U(S),v={layerViewQuery:this._getLayerView(g),elevationQuery:t&&o(b)?N(b,t).catch((()=>b)):u(b)};return p(v).then((i=>{const n=i.layerViewQuery.value,p=i.elevationQuery.value;l instanceof P&&(l.text=e.name);const m=t&&c?e.target||e.extent:null;return(o(m)?this._goToSearchResult(m):u()).then((()=>{var o;const i=n?g:new T({geometry:S,symbol:l,attributes:y,layer:j,sourceLayer:f,popupTemplate:d}),u=h&&(null==(o=this.view)?void 0:o.popup),c=u&&i.getEffectivePopupTemplate(u.defaultPopupTemplateEnabled);return c&&(t.popup.open({features:[i],location:p}),t.popup.focus()),n&&F(n)&&!c&&this._highlightFeature({graphic:i,layerView:n}),!n&&a&&t&&t.graphics.push(i),this._set("selectedResult",e),this._set("resultGraphic",i),this.emit("select-result",{result:e,source:r,sourceIndex:s}),e}))}))}suggest(e,t,s){const o=e||this.searchTerm;return this.emit("suggest-start",{searchTerm:o}),this._suggestTimer(t,s).then((()=>this._suggestImmediate(o,s).then((e=>(this._set("suggestions",e.results),this._set("suggestionCount",e.results.reduce(((e,t)=>e+t.results.length),0)),this.emit("suggest-complete",e),e)))))}async when(){await D(this,"updating")}async _update(){const{portal:e,view:t}=this;if(this.includeDefaultSources){const s=this._updatingPromise=p([null==e?void 0:e.load(),null==t?void 0:t.when()]);if(this.destroyed)return;if(this.notifyChange("updating"),await s,s!==this._updatingPromise)return}this._updatingPromise=null,this.notifyChange("updating");const s=O(this,"messages");this.destroyed||(this._handles.add(s),await s,this._updateDefaultSources())}_clearSearching(){this._searching=null,this.notifyChange("state")}_convertHelperServices(){var e,t;const s=null==(e=this.portal)||null==(t=e.helperServices)?void 0:t.geocode;if(!s)return[];return s.map((e=>{if(!1===e.placefinding)return;const t=B.fromJSON(e);if(J(t.get("locator.url"))){const e=t.outFields||["Addr_type","Match_addr","StAddr","City"],s=t.placeholder||this.messages.placeholder,o="number"==typeof t.defaultZoomScale?t.defaultZoomScale:2500;t.set({singleLineFieldName:"SingleLine",outFields:e,placeholder:s,defaultZoomScale:o})}return t.singleLineFieldName?t:void 0})).filter(Boolean)}_getLayerSources(e,t){var s;const o=null==(s=this.view)?void 0:s.map;return e.map((e=>{const s=o.findLayerById(e.id);if(!s)return;const r=this._getLayerJSON(e),i=V.fromJSON(r);return i.placeholder=t,this._getLayer(s,r).then((e=>{i.layer=e})),i})).filter(Boolean).toArray()}_getTableSources(e,t){var s;const o=null==(s=this.view)?void 0:s.map;return e.map((e=>{const s=o.findTableById(e.id);if(!s)return;const r=this._getLayerJSON(e),i=V.fromJSON(r);return i.placeholder=t,this._getLayer(s,r).then((e=>{i.layer=e})),i})).filter(Boolean).toArray()}_convertApplicationProperties(){var e,t,s;const o=null==(e=this.view)?void 0:e.map,r=null==o||null==(t=o.applicationProperties)||null==(s=t.viewing)?void 0:s.search;if(!r)return[];const{enabled:i,hintText:l,layers:a,tables:n}=r;if(!i)return[];return[...this._getLayerSources(a,l),...this._getTableSources(n,l)]}_getSubLayer(e,t){return e.load().then((()=>{if(!e.allSublayers)return n();const s=e.allSublayers.find((e=>e.id===t.subLayer));return s?s.createFeatureLayer():n()}))}async _getBuildingSubLayer(e,t){await e.load();const s=e.allSublayers.find((e=>e.id===t.subLayer));return"building-component"!==(null==s?void 0:s.type)?n():(await s.load(),null==s.associatedLayer?n():(await s.associatedLayer.load(),s))}_getLayer(e,t){return"feature"===e.type||"scene"===e.type||"csv"===e.type||"geojson"===e.type||"ogc-feature"===e.type?u(e):"map-image"===e.type?this._getSubLayer(e,t).catch((()=>{const t=new m("search:create-featurelayer","Could not create a FeatureLayer from the MapImageLayer",{layer:e});return W.error(t),null})):"building-scene"===e.type?this._getBuildingSubLayer(e,t):u(null)}_getLayerJSON(e){return"function"==typeof e.toJSON?e.toJSON():e}_updateDefaultSources(){const{defaultSources:e,includeDefaultSources:t}=this;e.removeAll(),t&&e.addMany([...this._convertApplicationProperties(),...this._convertHelperServices()]),this.notifyChange("allSources")}_abortGoTo(){this._gotoController&&this._gotoController.abort(),this._gotoController=null}_clear(){this._abortGoTo(),this._set("resultCount",null),this._set("results",null),this._set("suggestions",null),this._set("suggestionCount",null),this._set("selectedResult",null),this._set("selectedSuggestion",null),this.emit("search-clear")}_closePopup(){var e;const t=null==(e=this.view)?void 0:e.popup,{resultGraphic:s}=this;if(!t||!s)return;const{selectedFeature:o}=t;o&&o===s&&t.close()}_suggestTimer(e,t){const s=null!=e?e:this.suggestionDelay;return c(s,null,t&&t.signal)}_createLocationForSearch(e){return e instanceof T?U(e.geometry):e instanceof v?e:Array.isArray(e)&&2===e.length?new v({longitude:e[0],latitude:e[1]}):null}_createSuggestionForSearch(e){if(e&&q(e,"key")&&q(e,"text")&&q(e,"sourceIndex"))return e;const t=this._createLocationForSearch(e),s="string"==typeof e?e:this.searchTerm,{selectedSuggestion:o,selectedResult:i}=this,l=!e&&o&&i,a=l&&o.key===i.key&&o.sourceIndex===i.sourceIndex,n=l&&o.location;return a||n?o:{location:r(t),text:t?"":s,sourceIndex:null,key:null}}_getFirstResult(e){let t=null;return e&&e.some((e=>{const{results:s}=e,o=s[0],r=!!o;return r&&(t=o),r})),t}_selectFirstResult(e){return this.autoSelect&&e?this.select(e):u()}_suggestImmediate(e,t){return this.when().then((()=>this._getSuggestionsFromSources(e,t))).then((t=>{const s={activeSourceIndex:this.activeSourceIndex,searchTerm:e,numResults:0,numErrors:0,errors:[],results:[]};return this._formatResponse(s,t),s}))}_formatSourceResponse(e,t,s){const o=t&&t.value||[],r=t&&t.error,i=this.allSources.getItemAt(s);if(r){const t={sourceIndex:s,source:i,error:r};e.errors.push(t),e.numErrors++}else{const t={sourceIndex:s,source:i,results:o};e.results.push(t),e.numResults+=o.length}}_formatResponse(e,t,s){if(t)if(-1===e.activeSourceIndex){const o=s&&q(s,"sourceIndex")&&-1!==s.sourceIndex?s.sourceIndex:void 0;t.forEach(((t,s)=>{const r=void 0!==o?o:s;this._formatSourceResponse(e,t,r)}))}else this._formatSourceResponse(e,t[0],e.activeSourceIndex)}_getResultsFromSources(e,t){const{allSources:s}=this,o=!e.location&&q(e,"sourceIndex")?e.sourceIndex:this.activeSourceIndex,r=[];if(!s.length){const e=new m("search:no-sources-defined","At least one source is required.",{allSources:s});return W.error(e),n(e)}return-1===o?s.forEach(((s,o)=>{r.push(this._getResultsFromSource(e,o,t))})):r.push(this._getResultsFromSource(e,o,t)),p(r)}_getSuggestionsFromSources(e,t){const{allSources:s,activeSourceIndex:o}=this,r=[];if(!s.length){const e=new m("suggest:no-sources-defined","At least one source is required.",{allSources:s});return W.error(e),n(e)}return-1===o?s.forEach(((s,o)=>{r.push(this._getSuggestionsFromSource(e,o,t))})):r.push(this._getSuggestionsFromSource(e,o,t)),p(r)}_getResultsFromSource(e,t,s){var o;const r=this.allSources.getItemAt(t),{location:i=null}=e,l=(null==(o=this.view)?void 0:o.spatialReference)||X,a=q(r,"maxResults")?r.maxResults:this.maxResults,n=!!(r instanceof V&&q(r,"exactMatch"))&&r.exactMatch,{view:u}=this;return r.getResults({view:u,sourceIndex:t,location:i,suggestResult:e,spatialReference:l,exactMatch:n,maxResults:a},s)}_getSuggestionsFromSource(e,t,s){const o=this.allSources.getItemAt(t),r=q(o,"suggestionsEnabled")?o.suggestionsEnabled:this.suggestionsEnabled,i=e.length,l=q(o,"minSuggestCharacters")?o.minSuggestCharacters:this.minSuggestCharacters;if(r&&e.trim()&&i>=l){var a;const r=(null==(a=this.view)?void 0:a.spatialReference)||X,i=q(o,"maxSuggestions")?o.maxSuggestions:this.maxSuggestions,{view:l}=this;return o.getSuggestions({view:l,sourceIndex:t,suggestTerm:e,spatialReference:r,maxSuggestions:i},s)}return u()}createDefaultSymbol(e,t){if("point"===t){const t=e;return new L({color:e.color,size:t.size,outline:{color:t.outline.color,width:t.outline.width}})}if("polyline"===t){const t=e;return new w({color:t.color,width:t.width})}if("polygon"===t){const t=e;return new x({color:t.color,outline:{color:t.outline.color,width:t.outline.width}})}}_getLayerSourcePopupTemplate(e){const{layer:t}=e;if(t)return q(e,"popupTemplate")?e.popupTemplate:t.popupTemplate}_getSourceIndexOfResult(e){const t=this.results;let s=null;return t.some((t=>t.results.some((o=>o===e&&(s=t.sourceIndex,!0))))),s}async _goToSearchResult(e){const t=!!e;this._abortGoTo();const s=h();this._gotoController=s;const o={target:{target:e},options:{animate:t,signal:s.signal}};await this.callGoTo(o),this._gotoController=null}_getDefaultSymbol(e){var t,s,r;const l=null==(t=this.view)||null==(s=t.map)||null==(r=s.basemap)?void 0:r.id,a=i(e,"feature","geometry","type");if(o(a)){const e=A({basemap:l,geometryType:a})||A({basemap:"topo",geometryType:a}),t=e&&e.primaryScheme;if(t)return t.color&&q(t,"opacity")&&(t.color.a=t.opacity),this.createDefaultSymbol(t,a)}return this.defaultSymbol}_removeHighlight(){this._handles.remove("highlight")}async _getLayerView(e){const{view:t}=this;if(!e||!t)return u(null);const{layer:s}=e;return await t.when(),t.whenLayerView(s)}_highlightFeature(e){const{graphic:t,layerView:s}=e,{attributes:o,layer:r}=t,{objectIdField:i}=r,l=o&&o[i],a=s.highlight(l||t);this._handles.add(a,"highlight")}};Y.ALL_INDEX=-1,e([l({readOnly:!0,dependsOn:["activeSourceIndex","allSources.length"],value:null})],Y.prototype,"activeSource",null),e([l({dependsOn:["allSources.length","searchAllEnabled"]})],Y.prototype,"activeSourceIndex",null),e([l({dependsOn:["messages"]})],Y.prototype,"allPlaceholder",null),e([l({readOnly:!0,dependsOn:["defaultSources.length","sources.length","includeDefaultSources"],autoTracked:!1})],Y.prototype,"allSources",null),e([l()],Y.prototype,"autoNavigate",void 0),e([l()],Y.prototype,"autoSelect",void 0),e([l()],Y.prototype,"defaultPopupTemplate",void 0),e([l({readOnly:!0})],Y.prototype,"defaultSources",void 0),e([l()],Y.prototype,"defaultSymbol",void 0),e([l()],Y.prototype,"includeDefaultSources",void 0),e([l()],Y.prototype,"locationEnabled",null),e([l()],Y.prototype,"maxInputLength",void 0),e([l()],Y.prototype,"maxResults",void 0),e([l()],Y.prototype,"maxSuggestions",void 0),e([l()],Y.prototype,"messages",void 0),e([l()],Y.prototype,"minSuggestCharacters",void 0),e([l({readOnly:!0,dependsOn:["activeSourceIndex","activeSource.placeholder","allPlaceholder","allSources"]})],Y.prototype,"placeholder",null),e([l()],Y.prototype,"popupEnabled",void 0),e([l({type:k})],Y.prototype,"popupTemplate",void 0),e([l({type:_})],Y.prototype,"portal",void 0),e([l()],Y.prototype,"resultCount",void 0),e([l()],Y.prototype,"resultGraphicEnabled",void 0),e([l({readOnly:!0})],Y.prototype,"resultGraphic",void 0),e([l({readOnly:!0})],Y.prototype,"results",void 0),e([l({readOnly:!0})],Y.prototype,"selectedSuggestion",void 0),e([l()],Y.prototype,"searchAllEnabled",void 0),e([l({readOnly:!0})],Y.prototype,"selectedResult",void 0),e([l()],Y.prototype,"searchTerm",null),e([l({type:Z})],Y.prototype,"sources",void 0),e([l({readOnly:!0,dependsOn:["allSources.length","updating"],autoTracked:!1})],Y.prototype,"state",null),e([l()],Y.prototype,"suggestionDelay",void 0),e([l()],Y.prototype,"suggestionCount",void 0),e([l({readOnly:!0})],Y.prototype,"suggestions",void 0),e([l()],Y.prototype,"suggestionsEnabled",void 0),e([l({readOnly:!0})],Y.prototype,"updating",null),e([l()],Y.prototype,"view",void 0),e([l()],Y.prototype,"clear",null),Y=e([d("esri.widgets.Search.SearchViewModel")],Y);var $=Y;export default $;