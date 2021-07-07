// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/promiseUtils ../core/Promise".split(" "),function(h,d,b,q,r,g,t,m,n,u,v,w,k,p){b=function(l){function e(a){a=l.call(this,a)||this;a.state="running";a.target=null;return a}h._inheritsLoose(e,
l);var f=e.prototype;f.initialize=function(){this.addResolvingPromise(k.create((a,c)=>this._dfd={resolve:a,reject:c}))};f.stop=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","stopped"),this._dfd.reject(new n("ViewAnimation stopped")))};f.finish=function(){"stopped"!==this.state&&"finished"!==this.state&&(this._set("state","finished"),this._dfd.resolve())};f.update=function(a,c){c||(c=k.isPromiseLike(a)?"waiting-for-target":"running");this._set("target",a);this._set("state",
c)};h._createClass(e,[{key:"done",get:function(){return"finished"===this.state||"stopped"===this.state}}]);return e}(p.EsriPromise);d.__decorate([g.property({readOnly:!0,dependsOn:["state"]})],b.prototype,"done",null);d.__decorate([g.property({readOnly:!0,type:String})],b.prototype,"state",void 0);d.__decorate([g.property()],b.prototype,"target",void 0);b=d.__decorate([m.subclass("esri.views.ViewAnimation")],b);(b||(b={})).State={RUNNING:"running",STOPPED:"stopped",FINISHED:"finished",WAITING_FOR_TARGET:"waiting-for-target"};
return b});