// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/watchUtils ../../support/widgetUtils ../../support/decorators/renderable ../../../chunks/index ../../Widget ../BuildingDisciplinesViewModel ./BuildingDisciplinesNode".split(" "),
function(n,c,b,w,x,e,y,p,z,A,B,k,C,f,q,r,l,t){const u={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"};b=function(m){function h(d){var a=m.call(this,d)||this;a._defaultViewModel=new l;a.viewModel=a._defaultViewModel;a.messages=u;a.toggleSiblingsVisibility=!1;a._childWidgets=[];a._updateChildWidgets=()=>{a._destroyChildWidgets();a.viewModel&&(a._childWidgets=a.viewModel.root.children.toArray().reverse().map(v=>new t({node:v,messages:a.messages,toggleSiblingsVisibility:a.toggleSiblingsVisibility})))};
return a}n._inheritsLoose(h,m);var g=h.prototype;g.initialize=function(){this.own(k.on(this,"viewModel.root.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),k.init(this,["messages","toggleSiblingsVisibility"],this._updateChildWidgets))};g.destroy=function(){this._destroyChildWidgets();this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()};g.render=function(){return q.jsx("div",{role:"tree",class:"esri-building-disciplines-tree"},
this._childWidgets.map(d=>d.render()))};g._destroyChildWidgets=function(){this._childWidgets.forEach(d=>d.destroy());this._childWidgets=[]};return h}(r);c.__decorate([e.property({type:l}),f.renderable()],b.prototype,"viewModel",void 0);c.__decorate([e.property(),f.renderable()],b.prototype,"messages",void 0);c.__decorate([e.property({nonNullable:!0}),f.renderable()],b.prototype,"toggleSiblingsVisibility",void 0);c.__decorate([e.property(),f.renderable()],b.prototype,"_childWidgets",void 0);return b=
c.__decorate([p.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")],b)});