// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/Accessor".split(" "),function(a,f,b,l,m,n,c,p,h,q,r,t,k){a.SnappingOptions=function(g){function d(){var e=g.apply(this,
arguments)||this;e.selfEnabled=!1;e.selfEnabledToggled=!1;return e}f._inheritsLoose(d,g);f._createClass(d,[{key:"effectiveSelfEnabled",get:function(){return this.selfEnabledToggled?!this.selfEnabled:this.selfEnabled}}]);return d}(k);b.__decorate([c.property()],a.SnappingOptions.prototype,"selfEnabled",void 0);b.__decorate([c.property()],a.SnappingOptions.prototype,"selfEnabledToggled",void 0);b.__decorate([c.property({readOnly:!0})],a.SnappingOptions.prototype,"effectiveSelfEnabled",null);a.SnappingOptions=
b.__decorate([h.subclass("esri.views.interactive.snapping.SnappingOptions")],a.SnappingOptions);Object.defineProperty(a,"__esModule",{value:!0})});