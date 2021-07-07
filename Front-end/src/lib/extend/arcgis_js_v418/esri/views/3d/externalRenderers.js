// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/projection","../../chunks/mat4f64","./externalRenderers/ExternalRendererStore"],function(c,h,u,v){function l(a,d){m.add(a,d)}function n(a,d){m.remove(a,d)}function p(a){a._stage.renderView.setNeedsRender()}function q(a,d,e,b,g,f,k){b=b||a.spatialReference;return h.projectBuffer(d,b,e,g,a.renderCoordsHelper.spatialReference,f,k)?g:null}function r(a,d,e,b,g,f,k){f=f||a.spatialReference;return h.projectBuffer(d,a.renderCoordsHelper.spatialReference,e,b,f,g,k)?b:null}
function t(a,d,e,b){b||(b=u.create());e=e||a.spatialReference;return h.computeLinearTransformation(e,d,b,a.renderCoordsHelper.spatialReference)?b:null}const m=new v;c.add=l;c.bind=function(a){return{add:l.bind(this,a),remove:n.bind(this,a),requestRender:p.bind(this,a),toRenderCoordinates:q.bind(this,a),fromRenderCoordinates:r.bind(this,a),renderCoordinateTransformAt:t.bind(this,a)}};c.fromRenderCoordinates=r;c.getRenderCamera=function(a){return a.state.camera.clone()};c.remove=n;c.renderCoordinateTransformAt=
t;c.requestRender=p;c.toRenderCoordinates=q;Object.defineProperty(c,"__esModule",{value:!0})});