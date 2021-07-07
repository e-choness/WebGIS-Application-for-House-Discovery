// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/aliasOf ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/Accessor ../../core/Collection ../../core/Identifiable ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionToggle ../../core/watchUtils ../../core/HandleOwner ../../support/actions/ActionSlider".split(" "),
function(h,c,k,z,A,d,q,B,r,C,D,E,b,l,t,u,v,w,m,x,y){var f;k=l.ofType({key:"type",defaultKeyValue:"button",base:u,typeMap:{button:v,toggle:w,slider:y}});const n=l.ofType(k);b=f=function(p){function e(a){a=p.call(this,a)||this;a.actionsSections=new n;a.actionsOpen=!1;a.error=null;a.layer=null;return a}h._inheritsLoose(e,p);var g=e.prototype;g.initialize=function(){this.handles.add([m.init(this,"layer",a=>this._watchLayerProperties(a))])};g.clone=function(){return new f({actionsSections:this.actionsSections.clone(),
actionsOpen:this.actionsOpen,layer:this.layer,title:this.title})};g._watchLayerProperties=function(a){this.handles&&(this.handles.remove("layer"),a&&this.handles.add(m.watch(a,"listMode",()=>this._watchLayerProperties(a)),"layer"))};h._createClass(e,[{key:"title",get:function(){const a=this.get("layer.layer");return(!a||a&&this.get("layer.layer.loaded"))&&this.get("layer.title")||""},set:function(a){void 0===a?this._clearOverride("title"):this._override("title",a)}}]);return e}(t.IdentifiableMixin(x.HandleOwnerMixin(b)));
c.__decorate([d.property({type:n})],b.prototype,"actionsSections",void 0);c.__decorate([d.property()],b.prototype,"actionsOpen",void 0);c.__decorate([q.aliasOf("layer.loadError?")],b.prototype,"error",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property({dependsOn:["layer.layer?.loaded","layer.title"]})],b.prototype,"title",null);return b=f=c.__decorate([r.subclass("esri.widgets.TableList.ListItem")],b)});