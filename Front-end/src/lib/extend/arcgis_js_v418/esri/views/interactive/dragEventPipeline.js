// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../core/lang ../../core/maybe ../../core/handleUtils ../../geometry/support/webMercatorUtils ../../core/mathUtils ../../core/screenUtils ../draw/support/drawUtils".split(" "),function(k,y,h,z,m,q,A,B){function r(c,d){let a=null,b=null;return f=>{if("cancel"===f.action)h.isSome(b)&&(b.execute({action:"cancel"}),b=a=null);else{var e={action:f.action,screenStart:f.start,screenEnd:f.screenPoint};"start"===f.action&&h.isNone(a)&&(a=new n,b=new n,d(c,a,b,f.pointerType,e));h.isSome(a)&&
a.execute(e);"end"===f.action&&h.isSome(a)&&(b=a=null)}}}function t(c,d){return c.events.on("drag",r(c,d))}function u(c,d){let a=null;const b=h.isSome(c[d])?c[d].spatialReference:null;return f=>{if("start"===f.action&&h.isSome(c[d])){var e=c[d],g=f.mapStart.spatialReference;a=h.isNone(e)||"mesh"===e.type?null:e.spatialReference.equals(g)?e.clone():m.canProject(e,g)?m.project(e,g):null}if(h.isNone(a))return null;e=f.mapEnd.x-f.mapStart.x;g=f.mapEnd.y-f.mapStart.y;const l=f.mapEnd.z-f.mapStart.z,p=
B.move(a.clone(),e,g,l);p.spatialReference.equals(b)?c[d]=p:c[d]=m.project(p,b);return{...f,translationX:e,translationY:g,translationZ:l}}}function v(c){return u(c,"geometry")}function w(c,d){const a=new Map;for(const b of d)a.set(b,y.clone(c[b]));return b=>{a.forEach((f,e)=>{c[e]=f});return b}}function x(c){return w(c,["geometry"])}let n=function(){function c(){this.execute=()=>{}}c.prototype.next=function(d,a=new c){h.isSome(d)&&(this.execute=b=>{b=d(b);h.isSome(b)&&a.execute(b)});return a};return c}();
k.EventPipeline=n;k.addMapDelta=function(){let c=0,d=0,a=0;return b=>{"start"===b.action&&(c=b.mapStart.x,d=b.mapStart.y,a=b.mapStart.z);const f=b.mapEnd.x-c,e=b.mapEnd.y-d,g=b.mapEnd.z-a;c=b.mapEnd.x;d=b.mapEnd.y;a=b.mapEnd.z;return{...b,mapDeltaX:f,mapDeltaY:e,mapDeltaZ:g,mapDeltaSpatialReference:b.mapStart.spatialReference}}};k.addScreenDelta=function(){let c=0,d=0;return a=>{"start"===a.action&&(c=a.screenStart.x,d=a.screenStart.y);const b=a.screenEnd.x-c,f=a.screenEnd.y-d;c=a.screenEnd.x;d=a.screenEnd.y;
return{...a,screenDeltaX:b,screenDeltaY:f}}};k.constrainToMapAxis=function(c,d){const a=[c.x,c.y,c.z],b=[Math.cos(d),Math.sin(d)];c=Math.sqrt(b[0]*b[0]+b[1]*b[1]);if(0===c)return null;b[0]/=c;b[1]/=c;const f=e=>{const g=(e.x-a[0])*b[0]+(e.y-a[1])*b[1];e.x=a[0]+g*b[0];e.y=a[1]+g*b[1]};return e=>{f(e.mapStart);f(e.mapEnd);return e}};k.createDragEventPipelineCallback=r;k.createManipulatorDragEventPipeline=t;k.createManipulatorDragEventPipelineMany=function(c,d){const a=[];for(const b of c)a.push(t(b,
d));return z.handlesGroup(a)};k.dragAtLocation=function(c,d){let a=null,b=0,f=0;return e=>{"start"===e.action&&(a=c.toScreen(d),0>a.x||a.x>c.width||0>a.y||a.y>c.height?a=null:(b=e.screenStart.x-a.x,f=e.screenStart.y-a.y));if(null==a)return null;var g=q.clamp(e.screenEnd.x-b,0,c.width);const l=q.clamp(e.screenEnd.y-f,0,c.height);g=A.createScreenPoint(g,l);e.screenStart=a;e.screenEnd=g;return e}};k.dragGeometry=u;k.dragGraphic=v;k.dragGraphicMany=function(c){const d=c.map(a=>h.unwrap(v(a))).filter(a=>
h.isSome(a));return a=>{const b=a.mapEnd.x-a.mapStart.x,f=a.mapEnd.y-a.mapStart.y,e=a.mapEnd.z-a.mapStart.z;d.forEach(g=>g(a));return{...a,translationX:b,translationY:f,translationZ:e}}};k.resetGraphic=x;k.resetGraphicMany=function(c){const d=c.map(a=>h.unwrap(x(a))).filter(a=>h.isSome(a));return a=>{d.forEach(b=>b(a));return a}};k.resetProperties=w;k.resetSymbol=function(c){const d=h.isSome(c.symbol)?c.symbol.clone():null;return a=>{c.symbol=d;return a}};k.screenToMap=function(c,d=null,a){let b=
null;const f=h.isSome(d)&&!c.spatialReference.equals(d)?g=>h.isSome(g)?m.project(g,d):g:g=>g,e={exclude:[],...a};return g=>{"start"===g.action&&(b=f(c.toMap(g.screenStart,e)));if(h.isNone(b))return null;const l=f(c.toMap(g.screenEnd,e));return h.isSome(l)?{...g,mapStart:b,mapEnd:l}:null}};Object.defineProperty(k,"__esModule",{value:!0})});