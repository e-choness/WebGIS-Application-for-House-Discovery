// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/handleUtils ../../../../core/mathUtils ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../support/elevationInfoUtils ../visualElements/LaserlineVisualElement ../visualElements/ExtendedLineVisualElement ../Manipulator3D ./settings ../visualElements/OutlineVisualElement ./ManipulatorState ../../layers/graphics/GraphicState".split(" "),function(v,u,l,C,D,w,y,E,F,G,g,H,I,J){function z(a,b){const {view:d,graphic:e}=a,c=new H.OutlineVisualElement({view:d,
geometry:x(e)?e.geometry:null,elevationInfo:y.getGraphicEffectiveElevationInfo(e),attached:!1});g.settings.visualElements.lineGraphics.shadowStyle.apply(c);g.settings.visualElements.lineGraphics.outline.apply(c);const k=[b.watch("displaying",()=>{c.attached=b.displaying}),b.watch("isDraped",h=>c.isDraped=h),b.on("changed",()=>c.geometry=x(e)?e.geometry:null),l.destroyHandle(c)];c.attached=b.displaying;return{visualElement:c,remove:()=>l.handlesGroup(k).remove()}}function K(a,b,d){const {graphic:e,
view:c}=a,k=[];var h=y.getGraphicEffectiveElevationInfo(e);const L="on-the-ground"===h.mode||!h.offset&&"absolute-height"!==h.mode,m=new I.ManipulatorState,n=new F.ExtendedLineVisualElement({view:c,extensionType:g.settings.visualElements.zVerticalLine.extensionType,innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:4});g.settings.visualElements.pointGraphics.shadowStyle.apply(n);h=C.deg2rad(g.settings.visualElements.heightPlaneAngleCutoff);const r=new E.LaserlineVisualElement({view:c,attached:!1,
angleCutoff:h});g.settings.visualElements.heightPlane.apply(r);let A=1,B=1;const q=()=>{m.update(a);if(d.displaying&&(!L||!d.isDraped&&x(e)&&e.geometry.hasZ)){b.laserlineEnabled=!0;var f=m.grabbingState&4?g.settings.visualElements.laserlineAlphaMultiplier:1;f!==A&&(A=f,g.settings.visualElements.lineGraphics.shadowStyle.apply(b,f),g.settings.visualElements.pointGraphics.shadowStyle.apply(n,f));f=m.grabbingState&2?g.settings.visualElements.laserlineAlphaMultiplier:1;f!==B&&(B=f,g.settings.visualElements.heightPlane.apply(r,
f));f=1===m.numSelected?m.firstSelected:1<m.numSelected&&u.isSome(m.firstGrabbedXY)?m.firstGrabbedXY:null;u.isSome(f)?(n.setStartEndFromWorldDownAtLocation(f.renderLocation),n.attached=!0):n.attached=!1;M(a,b,r,m)}else b.laserlineEnabled=!1,n.attached=!1,r.attached=!1};g.settings.visualElements.zVerticalLine.apply(n);k.push(d.on("changed",q),d.watch("displaying",q),b.events.on("attachment-origin-changed",q),l.destroyHandle(n),l.destroyHandle(r));const t=[];h=()=>{l.handlesGroup(t).remove();t.length=
0;a.forEachManipulator(f=>t.push(f.events.on("grab-changed",q)));a.forEachManipulator(f=>t.push(f.events.on("select-changed",q)));q()};h();k.push(a.onManipulatorsChanged(h),l.refHandle(()=>l.handlesGroup(t)));return l.handlesGroup(k)}function M(a,b,d,e){if(0<e.numSelected){w.set(p,0,0,0);let c=0;a.forEachManipulator((k,h)=>{1===h&&k.selected&&k instanceof G.Manipulator3D&&(w.add(p,p,k.renderLocation),c++)});0<c?(d.heightManifoldTarget=w.scale(p,p,1/c),d.attached=!0):d.attached=!1}else b=b.attachmentOrigin,
u.isSome(b)&&a.view.renderCoordsHelper.toRenderCoords(b,p)?(d.heightManifoldTarget=p,d.attached=!0):d.attached=!1}function x(a){return u.isSome(a.geometry)&&("polygon"===a.geometry.type||"polyline"===a.geometry.type)}const p=D.create();v.createGeometryRepresentationVisualElement=z;v.createVisualElements=function(a){const {view:b,graphic:d}=a,e=new J.GraphicState({graphic:d}),c=z(a,e);a=K(a,c.visualElement,e);const k=[c,a,b.maskOccludee(d),b.trackGraphicState(e)];return{visualElement:c.visualElement,
remove:()=>l.handlesGroup(k).remove()}};Object.defineProperty(v,"__esModule",{value:!0})});