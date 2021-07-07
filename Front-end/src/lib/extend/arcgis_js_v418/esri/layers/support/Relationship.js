// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/urlUtils ../../core/uuid ../../portal/support/resourceExtension ../../core/JSONSupport".split(" "),function(k,c,f,m,n,d,e,l,p,q,r,a){f=new e.JSONMap({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"});
e=new e.JSONMap({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});a=function(g){function h(b){b=g.call(this,b)||this;b.cardinality=null;b.composite=null;b.id=null;b.keyField=null;b.keyFieldInRelationshipTable=null;b.name=null;b.relatedTableId=null;b.relationshipTableId=null;b.role=null;return b}k._inheritsLoose(h,g);return h}(a.JSONSupport);c.__decorate([d.property({json:{read:f.read,write:f.write}})],a.prototype,"cardinality",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],
a.prototype,"composite",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"id",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"keyField",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"keyFieldInRelationshipTable",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"name",void 0);c.__decorate([d.property({json:{read:!0,write:!0}})],a.prototype,"relatedTableId",void 0);c.__decorate([d.property({json:{read:!0,
write:!0}})],a.prototype,"relationshipTableId",void 0);c.__decorate([d.property({json:{read:e.read,write:e.write}})],a.prototype,"role",void 0);return a=c.__decorate([l.subclass("esri.layers.support.Relationship")],a)});