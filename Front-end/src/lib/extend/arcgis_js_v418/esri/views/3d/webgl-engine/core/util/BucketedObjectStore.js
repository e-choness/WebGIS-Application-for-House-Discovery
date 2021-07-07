// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../lib/AutoDisposable"],function(f,e,g){g=function(d){function c(){var a=d.apply(this,arguments)||this;a._bucket=null;a._bucketIndex=0;return a}e._inheritsLoose(c,d);e._createClass(c,[{key:"bucketKey",get:function(){return this._bucket.key}}]);return c}(g.AutoDisposable);let l=function(){function d(){this._buckets=new Map}var c=d.prototype;c.add=function(a,b){a=this._getBucket(a);b._bucket=a;b._bucketIndex=a.count;a.data.push(b);
++a.statistics.added};c.remove=function(a){++a._bucket.statistics.removed;const b=a._bucket.data,h=b[b.length-1];b[a._bucketIndex]=h;h._bucketIndex=a._bucketIndex;b.pop();a._bucket=null;a._bucketIndex=0};c.updateKey=function(a,b){this.remove(a);this.add(b,a)};c.getBucket=function(a){return this._getBucket(a).data};c.getPerformanceInfo=function(a){return this._getBucket(a).statistics};c.forEach=function(a){this._buckets.forEach(b=>a(b.data,b.key))};c._getBucket=function(a){var b=this._buckets.get(a);
if(b)return b;b=new k(a);this._buckets.set(a,b);return b};e._createClass(d,[{key:"count",get:function(){let a=0;this._buckets.forEach(b=>a+=b.count);return a}}]);return d}(),k=function(){function d(c){this.key=c;this.data=[];this.statistics={added:0,removed:0}}e._createClass(d,[{key:"count",get:function(){return this.data.length}}]);return d}();f.BucketStorable=g;f.BucketedObjectStore=l;Object.defineProperty(f,"__esModule",{value:!0})});