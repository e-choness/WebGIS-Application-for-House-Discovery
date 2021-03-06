// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/has ../../core/Logger ../../core/accessorSupport/ensureType ../../core/accessorSupport/utils ../../core/accessorSupport/decorators/property ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/Error ../../core/urlUtils ../../core/uuid ../../core/accessorSupport/PropertyOrigin ../../portal/support/resourceExtension ../../core/Collection ../../core/CollectionFlattener ../support/Sublayer ../support/sublayerUtils".split(" "),
function(v,z,n,N,F,O,G,q,P,H,I,Q,R,r,S,A,J,w,K){function L(e,l){const f=[],k={};if(!e)return f;e.forEach(a=>{const b=new w;b.read(a,l);k[b.id]=b;null!=a.parentLayerId&&-1!==a.parentLayerId?(a=k[a.parentLayerId],a.sublayers||(a.sublayers=[]),a.sublayers.unshift(b)):f.unshift(b)});return f}function x(e,l){e&&e.forEach(f=>{l(f);f.sublayers&&f.sublayers.length&&x(f.sublayers,l)})}const M=F.getLogger("esri.layers.TileLayer"),y=A.ofType(w);v.SublayersOwner=e=>{e=function(l){function f(...a){var b=l.call(this,
...a)||this;b.allSublayers=new J({root:z._assertThisInitialized(b),rootCollectionNames:["sublayers"],getChildrenFunction(c){return c.sublayers}});b.sublayersSourceJSON={[2]:{},[3]:{},[4]:{},[5]:{}};b.watch("sublayers",(c,g)=>b._handleSublayersChange(c,g),!0);return b}z._inheritsLoose(f,l);var k=f.prototype;k.readSublayers=function(a,b){if(b&&a){var {sublayersSourceJSON:c}=this,g=r.nameToId(b.origin);if(!(2>g||(c[g]={context:b,visibleLayers:a.visibleLayers||c[g].visibleLayers,layers:a.layers||c[g].layers},
2<g))){this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);var {sublayers:m,origin:h}=this.createSublayersForOrigin("web-document");a=G.getProperties(this);a.setDefaultOrigin(h);this._set("sublayers",new y(m));a.setDefaultOrigin("user")}}};k.findSublayerById=function(a){return this.allSublayers.find(b=>b.id===a)};k.createServiceSublayers=function(){return this.createSublayersForOrigin("service").sublayers};k.createSublayersForOrigin=function(a){const b="web-document"===
a?r.nameToId("web-map"):r.nameToId(a);let c=2;a=this.sublayersSourceJSON[2].layers;let g=this.sublayersSourceJSON[2].context,m=null;var h=[3,4,5].filter(d=>d<=b);for(var t of h)h=this.sublayersSourceJSON[t],K.isSublayerOverhaul(h.layers)&&(c=t,a=h.layers,g=h.context,h.visibleLayers&&(m={visibleLayers:h.visibleLayers,context:h.context}));t=[3,4,5].filter(d=>d>c&&d<=b);let p=null;for(var u of t){const {layers:d,visibleLayers:B,context:C}=this.sublayersSourceJSON[u];d&&(p={layers:d,context:C});B&&(m=
{visibleLayers:B,context:C})}u=L(a,g);const D=new Map,E=new Set;if(p)for(const d of p.layers)D.set(d.id,d);if(m)for(const d of m.visibleLayers)E.add(d);x(u,d=>{p&&d.read(D.get(d.id),p.context);m&&d.read({defaultVisibility:E.has(d.id)},m.context)});return{origin:r.idToName(c),sublayers:new y({items:u})}};k.read=function(a,b){l.prototype.read.call(this,a,b);this.readSublayers(a,b)};k._handleSublayersChange=function(a,b){b&&(b.forEach(c=>{c.parent=null;c.layer=null}),this.handles.remove("sublayers-owner"));
a&&(a.forEach(c=>{c.parent=this;c.layer=this}),this.handles.add([a.on("after-add",({item:c})=>{c.parent=this;c.layer=this}),a.on("after-remove",({item:c})=>{c.parent=null;c.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(a.on("before-changes",c=>{M.error(new I("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:this}));c.preventDefault()}),"sublayers-owner"))};return f}(e);n.__decorate([q.property({readOnly:!0})],
e.prototype,"allSublayers",void 0);n.__decorate([q.property({readOnly:!0,type:A.ofType(w)})],e.prototype,"serviceSublayers",void 0);n.__decorate([q.property({value:null,type:y,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0);n.__decorate([q.property({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0);return e=n.__decorate([H.subclass("esri.layers.mixins.SublayersOwner")],e)};v.forEachSublayer=x;Object.defineProperty(v,"__esModule",{value:!0})});