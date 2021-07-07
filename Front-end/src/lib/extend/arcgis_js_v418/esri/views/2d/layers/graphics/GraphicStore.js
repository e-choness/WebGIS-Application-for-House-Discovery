// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../../core/has ../../../../geometry/support/contains ../../../../geometry/support/extentUtils ../../../../geometry/support/jsonUtils ../../../../core/screenUtils ../../../../core/unitUtils ../../../../geometry/support/normalizeUtils ../../../../geometry/support/aaBoundingRect ../../../../chunks/rbush ./graphicsUtils ./GraphicStoreItem".split(" "),function(A,w,B,C,D,E,F,p,G,q,x){function y(v,n,c,b,d){u.minX=n;u.minY=c;u.maxX=b;u.maxY=d;return v.search(u)}const u={minX:0,minY:0,maxX:0,
maxY:0},t=p.create(),z=[];return function(){function v(c,b,d,e,l,k){this._graphics=e;this._onAdd=l;this._onRemove=k;this._index=G.rbush(9,A("csp-restrictions")?a=>({minX:a.bounds[0],minY:a.bounds[1],maxX:a.bounds[2],maxY:a.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]);this._itemByGraphic=new Map;this._currentLevel=-Infinity;this._tileInfoView=c;this._uidFieldName=d;if(b=c.getClosestInfoForScale(b))this._currentLevel=b.level,this._resolution=this._tileInfoView.getTileResolution(b.level);
this._metersPerUnit=E.getMetersPerUnit(c.spatialReference)}var n=v.prototype;n.hitTest=function(c,b,d,e,l){c=F.normalizeMapX(c,this._tileInfoView.spatialReference);var k=.5*e*d;t[0]=c-k;t[1]=b-k;t[2]=c+k;t[3]=b+k;d=.5*e*(d+50);var a=y(this._index,c-d,b-d,c+d,b+d);if(!a||0===a.length)return[];d={x:c,y:b};k=[];for(const f of a)if(f.graphic.visible)switch(C.getJsonType(f.geometry)){case "esriGeometryPoint":{a=f.symbol;if(!a)continue;const {x:g,y:m}=f.geometry;var h=e*this._metersPerUnit;let r;switch(a.type){case "esriTS":r=
q.getTextSymbolBounds(g,m,a,f.size,e,l);break;case "expanded-cim":r=q.getCIMMarkerBounds(g,m,a,e,h,l);break;case "esriSMS":case "esriPMS":r=q.getMarkerSymbolBounds(g,m,a,e,h,l)}w.polygonContainsPoint(r,d)&&k.push(f)}break;case "esriGeometryPolyline":(a=f.symbol)&&a.layers.length&&(a=1.5*e*window.devicePixelRatio*D.pt2px(a.layers[0].width),q.isPointOnPolyline(f.geometry,c,b,a)&&k.push(f));break;case "esriGeometryEnvelope":a=f.geometry;a=p.fromValues(a.xmin,a.ymin,a.xmax,a.ymax);p.intersects(a,t)&&
k.push(f);break;case "esriGeometryPolygon":if(w.polygonContainsPoint(f.geometry,d)){k.push(f);break}a=B.getPolygonExtent(f.geometry);if(Math.abs(a.ymax-a.ymin)<5*e||Math.abs(a.xmax-a.xmin)<5*e)a=p.fromValues(a.xmin,a.ymin,a.xmax,a.ymax),p.intersects(a,t)&&k.push(f);break;case "esriGeometryMultipoint":{a=f.symbol;if(!a)continue;h=f.geometry.points;let g;for(let m=0;m<h.length;m++)if(g="esriTS"===a.type?q.getTextSymbolBounds(h[m][0],h[m][1],a,f.size,e,l):q.getMarkerSymbolBounds(h[m][0],h[m][1],a,e,
e*this._metersPerUnit,l),w.polygonContainsPoint(g,d)){k.push(f);break}}}k.sort((f,g)=>{const m=q.graphicGeometryToNumber(f.graphic),r=q.graphicGeometryToNumber(g.graphic);return m===r?g.zorder-f.zorder:m-r});return k.map(f=>f.graphic)};n.getGraphicsData=function(c,b,d){const e=y(this._index,b.bounds[0],b.bounds[1],b.bounds[2],b.bounds[3]);if(0===e.length||0===d.length)return[];e.sort((f,g)=>f.zorder-g.zorder);e[0].insertAfter=-1;for(var l=1;l<e.length;l++)e[l].insertAfter=e[l-1].graphic.uid;e.sort((f,
g)=>f.graphic.uid-g.graphic.uid);d.sort((f,g)=>f.uid-g.uid);let k=l=0,a;const h=[];b={originPosition:"upperLeft",scale:[b.resolution,b.resolution],translate:[b.bounds[0],b.bounds[3]]};for(const f of d){for(k=-2;l<e.length;)if(a=e[l],l++,f.uid===a.graphic.uid){k=a.insertAfter;break}if(!a.geometry||-2===k)continue;d=a.getGeometryQuantized(b);const g={...a.graphic.attributes};g[this._uidFieldName]=f.uid;null==a.groupId&&(a.groupId=c.createTemplateGroup(a.symbol,null));h.push({centroid:x.getCentroidQuantized(a,
b),geometry:d,attributes:g,symbol:a.symbol,groupId:a.groupId,insertAfter:k,zorder:a.zorder})}h.sort((f,g)=>f.zorder-g.zorder);return h};n.queryTileData=function(c,b){var d=p.pad(b.bounds,50*b.resolution,p.create());d=y(this._index,d[0],d[1],d[2],d[3]);const e=[];this._createTileGraphics(e,c,d,{originPosition:"upperLeft",scale:[b.resolution,b.resolution],translate:[b.bounds[0],b.bounds[3]]});return e};n.has=function(c){return this._itemByGraphic.has(c)};n.getBounds=function(c){return this._itemByGraphic.has(c)?
this._itemByGraphic.get(c).bounds:null};n.addOrModify=function(c,b,d){if(c)return this.has(c)&&this.remove(c),this._onAdd(c),b=x.acquire(c,b,d,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),this._itemByGraphic.set(c,b),d&&this._index.insert(b),b.bounds};n.remove=function(c){if(this._itemByGraphic.has(c)){this._onRemove(c);var b=this._itemByGraphic.get(c);this._index.remove(b);this._itemByGraphic.delete(c)}};n.updateZ=function(){const c=this._graphics.items;
for(let d=0;d<c.length;d++){var b=c[d];if(b=this._itemByGraphic.get(b))b.zorder=d}};n.update=function(c,b,d){const e=this._itemByGraphic.get(c);e.groupId=null;const l=p.clone(e.bounds);e.size[0]=e.size[1]=0;this._index.remove(e);e.set(c,b,d,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);d&&this._index.insert(e);return{oldBounds:l,newBounds:e.bounds}};n.updateLevel=function(c){this._currentLevel!==c&&(this._currentLevel=c,this._resolution=this._tileInfoView.getTileResolution(c),
this._index.clear(),z.length=0,this._itemByGraphic.forEach(b=>{b.updateBounds(this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);b.geometry&&z.push(b)}),this._index.load(z))};n.clear=function(){this._itemByGraphic.clear();this._index.clear()};n._createTileGraphics=function(c,b,d,e){const l=this._uidFieldName;d.sort((g,m)=>g.zorder-m.zorder);let k,a,h,f;for(let g=0;g<d.length;g++){h=d[g];k=h.graphic;a=h.getGeometryQuantized(e);f=0===g?-1:d[g-1].graphic.uid;const m=
{...h.graphic.attributes};m[l]=k.uid;null==h.groupId&&(h.groupId=b.createTemplateGroup(h.symbol,null));c.push({centroid:x.getCentroidQuantized(h,e),geometry:a,attributes:m,symbol:h.symbol,groupId:h.groupId,insertAfter:f,zorder:h.zorder})}};return v}()});