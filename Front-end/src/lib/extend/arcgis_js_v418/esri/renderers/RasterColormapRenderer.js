// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/JSONSupport ./support/ColormapInfo ./support/colorRampUtils".split(" "),function(p,g,c,w,x,q,r,t,y,z,A,u,h,v){var d;c=d=function(l){function e(a){a=l.call(this,a)||this;
a.colormapInfos=null;a.type="raster-colormap";return a}p._inheritsLoose(e,l);e.createFromColormap=function(a,f){function m(b){return f?f[b]||"":String(b[0])}if(!a)return null;var k=5===a[0].length;a=a.sort(b=>b[0][0]-b[1][0]);k=k?a.map(b=>h.fromJSON({value:b[0],color:b.slice(1,5),label:m(b[0])})):a.map(b=>h.fromJSON({value:b[0],color:b.slice(1,4).concat([255]),label:m(b[0])}));return new d({colormapInfos:k})};e.createFromColorramp=function(a){a=v.convertColorRampToColormap(a,256);return d.createFromColormap(a)};
var n=e.prototype;n.clone=function(){return new d({colormapInfos:this.colormapInfos.map(a=>a.toJSON())})};n.extractColormap=function(){return this.colormapInfos.map(a=>[a.value,a.color.r,a.color.g,a.color.b,1<a.color.a?a.color.a:255*a.color.a&255]).sort((a,f)=>a[0]-f[0])};return e}(u.JSONSupport);g.__decorate([q.property({type:[h],json:{write:!0}})],c.prototype,"colormapInfos",void 0);g.__decorate([r.enumeration({rasterColormap:"raster-colormap"})],c.prototype,"type",void 0);return c=d=g.__decorate([t.subclass("esri.renderers.RasterColormapRenderer")],
c)});