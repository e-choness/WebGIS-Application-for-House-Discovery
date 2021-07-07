// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/handleUtils ../../../core/mathUtils ../../../chunks/vec2f64 ../../../chunks/vec2 ./snappingUtils ./SnappingCandidate ./SnappingConstraint".split(" "),function(h,p,k,q,l,d,m,e,r){e=function(n){function f({coordinateHelper:a,lineStart:b,lineEnd:g,targetPoint:t}){return n.call(this,a,t,new r.LineConstraint(b,g))||this}p._inheritsLoose(f,n);var c=f.prototype;c.visualizeReferenceHints=function(a,b){return k.destroyHandle(m.createLineSegmentHintFromMap(3,
this.lineStart(),this.lineEnd(),this.coordinateHelper,b,a))};c.visualizeTargetHints=function(a,b,g){return k.destroyHandle(m.createLineSegmentHintFromMap(0,this.lineEndClosestToTarget(),g,this.coordinateHelper,b,a))};c.lineEndClosestToTarget=function(){const a=this.lineStart(),b=this.lineEnd();return 0<q.sign(d.dot(d.subtract(u,b,a),d.subtract(v,this.targetPoint,a)))?b:a};c.lineStart=function(){return this.constraint.start};c.lineEnd=function(){return this.constraint.end};return f}(e.SnappingCandidate);
const v=l.create(),u=l.create();h.LineSnappingCandidate=e;Object.defineProperty(h,"__esModule",{value:!0})});