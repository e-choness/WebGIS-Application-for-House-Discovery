// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/lang ../core/maybe ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/Error ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/Collection ./ExtrudeSymbol3DLayer ./FillSymbol3DLayer ./IconSymbol3DLayer ./LineSymbol3DLayer ./ObjectSymbol3DLayer ./TextSymbol3DLayer ./WaterSymbol3DLayer ./Symbol3D".split(" "),
function(z,h,p,l,A,H,I,B,C,D,E,F,J,K,L,k,q,m,r,t,u,G,v,d){var e;p=k.ofType({base:null,key:"type",typeMap:{extrude:q,fill:m,icon:r,line:t,object:u,text:G,water:v}});k=k.ofType({base:null,key:"type",typeMap:{extrude:q,fill:m,icon:r,line:t,object:u,water:v}});d=e=function(w){function f(a){a=w.call(this,a)||this;a.type="polygon-3d";return a}z._inheritsLoose(f,w);var x=f.prototype;x.writeSymbolLayers=function(a,b,n,c){const y=a.filter(g=>"text"!==g.type);c&&c.messages&&y.length<a.length&&(a=a.find(g=>
"text"===g.type),c.messages.push(new F("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",{symbolLayer:a})));b[n]=y.map(g=>g.write({},c)).toArray()};x.clone=function(){return new e({styleOrigin:l.clone(this.styleOrigin),symbolLayers:l.clone(this.symbolLayers),thumbnail:l.clone(this.thumbnail)})};f.fromJSON=function(a){const b=new e;b.read(a);if(2===b.symbolLayers.length&&"fill"===b.symbolLayers.getItemAt(0).type&&"line"===b.symbolLayers.getItemAt(1).type){const n=
b.symbolLayers.getItemAt(0),c=b.symbolLayers.getItemAt(1);!c.enabled||a.symbolLayers&&a.symbolLayers[1]&&!1===a.symbolLayers[1].enable||(n.outline={size:c.size,color:A.isSome(c.material)?c.material.color:null});b.symbolLayers.removeAt(1)}return b};f.fromSimpleFillSymbol=function(a){return new e({symbolLayers:[m.fromSimpleFillSymbol(a)]})};return f}(d);h.__decorate([B.property({type:p,json:{type:k}})],d.prototype,"symbolLayers",void 0);h.__decorate([E.writer("web-scene","symbolLayers")],d.prototype,
"writeSymbolLayers",null);h.__decorate([C.enumeration({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],d.prototype,"type",void 0);return d=e=h.__decorate([D.subclass("esri.symbols.PolygonSymbol3D")],d)});