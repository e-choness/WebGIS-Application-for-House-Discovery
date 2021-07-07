// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../Color ../../../../core/screenUtils ../../../../chunks/mat4f64 ../../../../core/libs/earcut/earcut ../../support/buffer/BufferView ../../../../geometry/support/aaBoundingBox ../../webgl-engine/lib/Util ../../webgl-engine/lib/Object3D ./graphicUtils ./elevationAlignmentUtils ../../webgl-engine/materials/PatternMaterial ../support/uvUtils ./ElevationAligners ./ElevationContext ./Graphics3DObject3DGraphicLayer ../../webgl-engine/lib/Geometry ./Graphics3DSymbolLayer ../../webgl-engine/materials/RibbonLineMaterial ../../webgl-engine/materials/lineStippleUtils ./polygonUtils ./Graphics3DDrapedGraphicLayer ../../webgl-engine/lib/RenderGeometry ./lineUtils ../../webgl-engine/materials/NativeLineMaterial ../support/patternUtils".split(" "),
function(w,z,f,A,B,C,D,q,m,J,K,L,r,M,E,N,O,P,F,t,Q,R,u,S,G,H,x,T){t=function(y){function v(a,b,c,d){a=y.call(this,a,b,c,d)||this;a._needsUV=!1;a._hasOutline=!1;return a}z._inheritsLoose(v,y);var k=v.prototype;k.doLoad=async function(){};k.ensureMaterials=function(){this.ensureFillMaterial();this.ensureOutlineMaterial()};k.ensureFillMaterial=function(){if(!f.isSome(this._material)){var a=f.get(this.symbolLayer,"material","color");a=this._getCombinedOpacityAndColor(a);this._material=T.createMaterial(this.symbolLayer,
{color:a,transparent:1>a[3]||this.needsDrivenTransparentPass,polygonOffset:!1,vertexColors:!0,writeLinearDepth:!0,slicePlaneEnabled:this._context.slicePlaneEnabled},{isDraped:this.draped,idHint:this._getIdHint()});this._needsUV=this._material instanceof M.PatternMaterial;this._context.stage.add(3,this._material)}};k.ensureOutlineMaterial=function(){const a=this.symbolLayer.outline;!f.isSome(this._outlineMaterial)&&this._isValidOutline(a)&&(this._hasOutline=!0,this._outlineMaterial=(b=>{const c=a.stipplePattern?
R.createStipplePattern(a.stipplePattern.map(B.pt2px)):null,d=a.stippleOffColor?A.toUnitRGBA(a.stippleOffColor):null;return 1.5<b?new Q.RibbonLineMaterial({width:b,color:this._getOutlineColor(),polygonOffset:!0,slicePlaneEnabled:this._context.slicePlaneEnabled,isClosed:!0,stipplePattern:c,stippleIntegerRepeats:!0,stippleOffColor:d},this._getIdHint("_outline_ribbonlinemat")):new x.NativeLineMaterial({color:this._getOutlineColor(),slicePlaneEnabled:this._context.slicePlaneEnabled,width:b,stipplePattern:c,
stippleIntegerRepeats:!0,stippleOffColor:d},this._getIdHint("_outline_nativelinemat"))})(B.pt2px(a.size)),this._context.stage.add(3,this._outlineMaterial))};k._isValidOutline=function(a){return f.isSome(a)&&a.size&&0<a.size&&f.isSome(a.color)};k.destroy=function(){y.prototype.destroy.call(this);f.isSome(this._material)&&(this._context.stage.remove(3,this._material.id),this._material=null);f.isSome(this._outlineMaterial)&&(this._context.stage.remove(3,this._outlineMaterial.id),this._outlineMaterial=
null)};k.createGraphics3DGraphic=function(a){const b=a.graphic;if(!this._validateGeometryType(b.geometry,v.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(b.geometry))return null;const c="graphic"+b.uid;a=this._getVertexOpacityAndColor(a.renderingInfo,Uint8Array,255);const d=this.setGraphicElevationContext(b,new O.ElevationContext);this.ensureDrapedStatus("on-the-ground"===d.mode);this.ensureMaterials();return this.draped?this._createAsOverlay(b,a,c):this._createAs3DShape(b,a,d,
c)};k.layerOpacityChanged=function(){if(f.isSome(this._material)){var a=this._material.params.color,b=f.get(this.symbolLayer,"material","color");b=this._getCombinedOpacity(b);this._material.setParameterValues({color:[a[0],a[1],a[2],b],transparent:1>b||this.needsDrivenTransparentPass})}f.isSome(this._outlineMaterial)&&(a=this._outlineMaterial.params.color,this._outlineMaterial.setParameterValues({color:[a[0],a[1],a[2],this._getOutlineOpacity()]}));return!0};k.layerElevationInfoChanged=function(a,b,
c){const d=this._elevationContext.mode;c=r.elevationModeChangeUpdateType(v.elevationModeChangeTypes,c,d);if(c!==r.SymbolUpdateType.UPDATE)return c;const e=r.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,b,()=>e)};k.slicePlaneEnabledChanged=function(){f.isSome(this._material)&&this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});f.isSome(this._outlineMaterial)&&this._outlineMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});
return!0};k.physicalBasedRenderingChanged=function(){return!0};k.pixelRatioChanged=function(){return!0};k._createAs3DShape=function(a,b,c,d){const e=u.geometryAsPolygon(a.geometry);if(f.isNone(e))return null;g.renderData=u.geometryToRenderInfo(e,this._context.elevationProvider,this._context.renderCoordsHelper,c);g.idHint=d;g.color=b;b=g.renderData.position.length/3;this._needsUV&&(g.uvMapSpace=new Float32Array(4*b),g.bound1=new Float64Array(3*b),g.bound2=new Float64Array(3*b),g.bound3=new Float64Array(3*
b));g.outNum=0;g.outGeometries=[];g.outTransforms=[];g.outMaterials=[];this._createAs3DShapeFill(g);this._hasOutline&&this._createAs3DShapeOutline(g);this._logGeometryCreationWarnings(g.renderData,e.rings,"rings","FillSymbol3DLayer");if(0===g.outNum)return null;this._needsUV&&E.createMapSpaceUVCoords(q.BufferViewVec4f.fromTypedArray(g.uvMapSpace),q.BufferViewVec3f64.fromTypedArray(g.renderData.position),this._context.layerView.view.renderCoordsHelper,q.BufferViewVec3f64.fromTypedArray(g.bound1),q.BufferViewVec3f64.fromTypedArray(g.bound2),
q.BufferViewVec3f64.fromTypedArray(g.bound3));a=new K({geometries:g.outGeometries,materials:g.outMaterials,transformations:g.outTransforms,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:a.uid},idHint:d});a=new P(this,a,g.outGeometries,null,null,N.uvElevationAligner,c);a.alignedSampledElevation=g.renderData.sampledElevation;a.needsElevationUpdates=r.needsElevationUpdates2D(c.mode);return a};k._createAs3DShapeFill=function(a){var b=a.renderData.polygons;for(const {position:c,mapPosition:d,
holeIndices:e,index:p,count:h}of b){if(f.isSome(this._context.clippingExtent)&&(m.empty(n),m.expandWithBuffer(n,d),!m.intersectsClippingArea(n,this._context.clippingExtent)))continue;b=D.earcut(d,e,3);0!==b.length&&(b=new Uint32Array(b),b=u.createColorGeometryData({indices:b,attributeData:{position:c,color:a.color,mapPosition:d,uvMapSpace:this._needsUV?new Float32Array(a.uvMapSpace.buffer,4*p*a.uvMapSpace.BYTES_PER_ELEMENT,4*h):null,bound1:this._needsUV?new Float64Array(a.bound1.buffer,3*p*a.bound1.BYTES_PER_ELEMENT,
3*h):null,bound2:this._needsUV?new Float64Array(a.bound2.buffer,3*p*a.bound2.BYTES_PER_ELEMENT,3*h):null,bound3:this._needsUV?new Float64Array(a.bound3.buffer,3*p*a.bound3.BYTES_PER_ELEMENT,3*h):null}}),b=new F(b,a.idHint),a.outGeometries.push(b),a.outMaterials.push(f.unwrap(this._material)),a.outTransforms.push(C.IDENTITY),a.outNum++)}};k._createAs3DShapeOutline=function(a){if(this._hasOutline){var b=a.renderData.outlines,c=this._outlineMaterial instanceof x.NativeLineMaterial;for(let e=0;e<b.length;++e){const {mapPosition:p,
position:h}=b[e];if(f.isSome(this._context.clippingExtent)&&(m.empty(n),m.expandWithBuffer(n,p),!m.intersectsClippingArea(n,this._context.clippingExtent)))continue;var d=H.createGeometryData({removeDuplicateStartEnd:c?0:1,attributeData:{position:h,mapPosition:p}});const I=d.vertexAttributes[J.VertexAttrConstants.POSITION];I.data===h&&(I.data=new Float64Array(h));d=new F(d,a.idHint+"outline"+e);a.outGeometries.push(d);a.outMaterials.push(f.unwrap(this._outlineMaterial));a.outTransforms.push(C.IDENTITY);
a.outNum++}}};k._createAsOverlay=function(a,b,c){const d=u.geometryAsPolygon(a.geometry);if(f.isNone(d))return null;f.unwrap(this._material).renderPriority=this._renderPriority+this._renderPriorityStep/2;f.isSome(this._outlineMaterial)&&(this._outlineMaterial.renderPriority=this._renderPriority);l.renderData=u.geometryToRenderInfoDraped(d,this._context.overlaySR);l.idHint=c;l.color=b;b=l.renderData.position.length/3;this._needsUV&&(l.uvMapSpace=new Float32Array(4*b));l.outNum=0;l.outGeometries=[];
l.outBoundingBox=m.empty();l.layerUid=this._context.layer.uid;l.graphicsUid=a.uid;this._createAsOverlayFill(l);this._hasOutline&&this._createAsOverlayOutline(l);this._logGeometryCreationWarnings(l.renderData,d.rings,"rings","FillSymbol3DLayer");if(0===l.outNum)return null;this._needsUV&&E.createMapSpaceUVCoordsDraped(q.BufferViewVec4f.fromTypedArray(l.uvMapSpace),q.BufferViewVec3f64.fromTypedArray(l.renderData.position),this._context.overlaySR);return 0<l.outNum?new S(this,l.outGeometries,l.outBoundingBox):
null};k._createAsOverlayFill=function(a){var b=a.renderData.polygons;for(const {position:c,holeIndices:d,index:e,count:p}of b){m.empty(n);m.expandWithBuffer(n,c);if(!m.intersectsClippingArea(n,this._context.clippingExtent))continue;b=D.earcut(c,d,3);if(0===b.length)continue;m.expandWithAABB(a.outBoundingBox,n);b=new Uint32Array(b);b=u.createColorGeometryData({indices:b,attributeData:{position:c,color:a.color,uvMapSpace:this._needsUV?new Float32Array(a.uvMapSpace.buffer,4*e*a.uvMapSpace.BYTES_PER_ELEMENT,
4*p):null}});b=new G(b);b.data.layerUid=a.layerUid;b.data.graphicUid=a.graphicsUid;b.material=f.unwrap(this._material);const h=n;b.center=[.5*(h[0]+h[3]),.5*(h[1]+h[4]),0];b.bsRadius=.5*Math.sqrt((h[3]-h[0])*(h[3]-h[0])+(h[4]-h[1])*(h[4]-h[1]));a.outGeometries.push(b);a.outNum++}};k._createAsOverlayOutline=function(a){if(this._hasOutline){var b=a.renderData.outlines;for(let d=0;d<b.length;++d){var {position:c}=b[d];m.empty(n);m.expandWithBuffer(n,c);if(!m.intersectsClippingArea(n,this._context.clippingExtent))continue;
m.expandWithAABB(a.outBoundingBox,n);c=H.createGeometryData({removeDuplicateStartEnd:this._outlineMaterial instanceof x.NativeLineMaterial?0:1,attributeData:{position:c}});c=new G(c);c.data.layerUid=a.layerUid;c.data.graphicUid=a.graphicsUid;c.material=f.unwrap(this._outlineMaterial);const e=n;c.center=[.5*(e[0]+e[3]),.5*(e[1]+e[4]),0];c.bsRadius=.5*Math.sqrt((e[3]-e[0])*(e[3]-e[0])+(e[4]-e[1])*(e[4]-e[1]));a.outGeometries.push(c);a.outNum++}}};k._getOutlineOpacity=function(){const a=f.get(this.symbolLayer,
"outline","color");return(this.draped?1:this._getLayerOpacity())*(f.isSome(a)?a.a:0)};k._getOutlineColor=function(){const a=f.get(this.symbolLayer,"outline","color"),b=this._getOutlineOpacity();return L.mixinColorAndOpacity(f.isSome(a)?A.toUnitRGB(a):null,b)};z._createClass(v,[{key:"test",get:function(){return{createAsOverlay:(a,b,c)=>this._createAsOverlay(a,b,c),createAs3DShape:(a,b,c,d)=>this._createAs3DShape(a,b,c,d)}}}]);return v}(t.Graphics3DSymbolLayer);t.validGeometryTypes=["polyline","polygon",
"extent"];t.elevationModeChangeTypes={definedChanged:r.SymbolUpdateType.RECREATE,staysOnTheGround:r.SymbolUpdateType.NONE,onTheGroundChanged:r.SymbolUpdateType.RECREATE};const n=m.create(),g={idHint:null,renderData:null,color:null,uvMapSpace:null,bound1:null,bound2:null,bound3:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null},l={idHint:null,renderData:null,color:null,uvMapSpace:null,outNum:0,outBoundingBox:null,outGeometries:null,outMaterials:null,outTransforms:null};
w.Graphics3DPolygonFillSymbolLayer=t;w.default=t;Object.defineProperty(w,"__esModule",{value:!0})});