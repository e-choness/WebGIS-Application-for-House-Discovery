// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe","../../core/Collection"],function(h,l,k,m){let q=function(){function g(){this._isToolEditable=!0;this._manipulators=new m;this._nextManipulatorId=0;this._resourceContexts={manipulator3D:{}};this._attached=!1}var c=g.prototype;c.add=function(a,b=0){return this.addMany([a],b)[0]};c.addMany=function(a,b=0){return a.map(d=>{const f=this._nextManipulatorId++;d={id:f,manipulator:d,visibilityPredicate:b,attached:!1};this._manipulators.add(d);
this._attached&&this._updateManipulatorAttachment(d);return f})};c.remove=function(a){if("number"===typeof a){for(var b=0;b<this._manipulators.length;b++)if(this._manipulators.getItemAt(b).id===a)return a=this._manipulators.splice(b,1)[0],this._detachManipulator(a),a.id;return null}for(b=0;b<this._manipulators.length;b++)if(this._manipulators.getItemAt(b).manipulator===a)return a=this._manipulators.splice(b,1)[0],this._detachManipulator(a),a.id;return null};c.removeAll=function(){this._manipulators.forEach(a=>
{this._detachManipulator(a)});this._manipulators.removeAll()};c.attach=function(){this._manipulators.forEach(a=>{this._updateManipulatorAttachment(a)});this._attached=!0};c.detach=function(){this._manipulators.forEach(a=>{this._detachManipulator(a)});this._attached=!1};c.destroy=function(){this._manipulators.forEach(({manipulator:a})=>{a.destroy&&a.destroy()});this._manipulators.destroy();this._resourceContexts=null};c.on=function(a,b){return this._manipulators.on(a,d=>{b(d)})};c.forEach=function(a){for(const b of this._manipulators.items)a(b)};
c.some=function(a){return this._manipulators.items.some(a)};c.toArray=function(){const a=[];this.forEach(b=>a.push(b.manipulator));return a};c.intersect=function(a,b){let d=null,f=Number.MAX_VALUE;this._manipulators.forEach(({id:n,manipulator:e,attached:p})=>{p&&e.interactive&&(e=e.intersectionDistance(a,b),k.isSome(e)&&e<f&&(f=e,d=n))});return d};c.findById=function(a){if(k.isNone(a))return null;for(const b of this._manipulators.items)if(a===b.id)return b.manipulator;return null};c._updateManipulatorAttachment=
function(a){this._isManipulatorItemVisible(a)?this._attachManipulator(a):this._detachManipulator(a)};c._attachManipulator=function(a){a.attached||(a.manipulator.attach&&a.manipulator.attach(this._resourceContexts),a.attached=!0)};c._detachManipulator=function(a){if(a.attached){var b=a.manipulator;b.grabbing=!1;b.dragging=!1;b.hovering=!1;b.selected=!1;b.detach&&b.detach(this._resourceContexts);a.attached=!1}};c._isManipulatorItemVisible=function(a){return 2===a.visibilityPredicate?!0:this._isToolEditable?
0===a.visibilityPredicate:1===a.visibilityPredicate};l._createClass(g,[{key:"isToolEditable",set:function(a){this._isToolEditable=a}},{key:"length",get:function(){return this._manipulators.length}}]);return g}();h.ManipulatorCollection=q;Object.defineProperty(h,"__esModule",{value:!0})});