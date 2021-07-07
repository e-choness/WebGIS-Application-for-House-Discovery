// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec3f64 ../../../../chunks/vec3 ../../../../chunks/mat4f64 ../../../../geometry/support/aaBoundingBox ../../webgl-engine/lib/Object3DStateSet ./graphicUtils ./featureExpressionInfoUtils".split(" "),function(w,q,p,x,m,y,z,A){let C=function(){function r(a,b,c,t){this.graphics3DSymbolLayer=a;this.instanceIndex=b;this.elevationAligner=c;this.elevationContext=t;this.type="lod-instance";this.alignedSampledElevation=0;this.needsElevationUpdates=
this.isElevationSource=!1}var f=r.prototype;f.initialize=function(){};f.setVisibility=function(a){const b=this.lodRenderer.instanceData;a!==b.getVisible(this.instanceIndex)&&b.setVisible(this.instanceIndex,a)};f.destroy=function(){null!=this.instanceIndex&&(this.lodRenderer.instanceData.removeInstance(this.instanceIndex),this.graphics3DSymbolLayer.notifyDestroyGraphicLayer(this))};f.alignWithElevation=function(a,b,c){this.elevationAligner&&(A.setContextFeature(this.elevationContext.featureExpressionInfoContext,
c),a=this.elevationAligner(this,this.elevationContext,a,b),null!=a&&(this.alignedSampledElevation=a))};f.getBSRadius=function(){const a=this.lodRenderer;return a.baseBoundingSphere.radius*a.instanceData.getCombinedMaxScaleFactor(this.instanceIndex)};f.getCenterObjectSpace=function(a=q.create()){this.lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,h);return p.transformMat4(a,this.lodRenderer.baseBoundingSphere.center,h)};f.getBoundingBoxObjectSpace=function(a=m.create()){this.lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,
h);const b=this.lodRenderer.baseBoundingBox;m.empty(a);for(let c=0;8>c;++c)p.set(g,0===(c&1)?b[0]:b[3],0===(c&2)?b[1]:b[4],0===(c&4)?b[2]:b[5]),p.transformMat4(g,g,h),m.expandWithVec3(a,g);return a};f.computeAttachmentOrigin=function(a){this.lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,h);a.render.origin[0]+=h[12];a.render.origin[1]+=h[13];a.render.origin[2]+=h[14];a.render.num++};f.getProjectedBoundingBox=async function(a,b,c,t,d){d=this.getBoundingBoxObjectSpace(d);var k=B;const u=
m.isPoint(d)?1:k.length;this.lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,h);for(var e=0;e<u;e++){const l=k[e];g[0]=d[l[0]];g[1]=d[l[1]];g[2]=d[l[2]];p.transformMat4(g,g,h);n[3*e]=g[0];n[3*e+1]=g[1];n[3*e+2]=g[2]}if(!a(n,0,u))return null;m.empty(d);a=null;this.calculateRelativeScreenBounds&&(a=this.calculateRelativeScreenBounds());for(k=0;k<3*u;k+=3){for(e=0;3>e;e++)d[e]=Math.min(d[e],n[k+e]),d[e+3]=Math.max(d[e+3],n[k+e]);a&&c.push({location:n.slice(k,k+3),screenSpaceBoundingRect:a})}if(b&&
(m.center(d,v),"absolute-height"!==this.elevationContext.mode)){let l;c=z.demResolutionForBoundingBox(d,b);try{l=await b.service.queryElevation(v[0],v[1],t,c,"ground")}catch(D){l=null}null!=l&&m.offset(d,0,0,-this.alignedSampledElevation+l)}return d};f.addObjectState=function(a,b){0===a&&(a=y.generateObject3DStateId(a),this.addHighlightId(a),b.addExternal(c=>{this.removeHighlightId(c)},a))};f.removeObjectState=function(a){this.highlights&&this.highlights.forEach(b=>a.remove(b))};f.addHighlightId=
function(a){this.highlights=this.highlights||new Set;this.highlights.add(a);this.lodRenderer.instanceData.setHighlight(this.instanceIndex,!0)};f.removeHighlightId=function(a){this.highlights&&(this.highlights.delete(a),this.lodRenderer.instanceData.setHighlight(this.instanceIndex,0<this.highlights.size),0===this.highlights.size&&(this.highlights=null))};w._createClass(r,[{key:"lodRenderer",get:function(){return this.graphics3DSymbolLayer.lodRenderer}}]);return r}();const n=[0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0],g=q.create(),v=q.create(),B=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],h=x.create();return C});