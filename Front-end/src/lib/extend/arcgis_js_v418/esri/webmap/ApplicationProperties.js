// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/JSONSupport ../webdoc/applicationProperties/Viewing".split(" "),function(h,c,a,k,p,q,d,r,l,t,u,v,m,n){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.editing=null;b.offline=
null;b.viewing=null;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e(k.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))};return f}(m.JSONSupport);c.__decorate([d.property({json:{write:!0}})],a.prototype,"editing",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"offline",void 0);c.__decorate([d.property({type:n,json:{write:!0}})],a.prototype,"viewing",void 0);return a=e=c.__decorate([l.subclass("esri.webmap.ApplicationProperties")],a)});