//>>built
define(["dojo/_base/array","dojo/_base/window","./main"],function(m,n,e){var g={},b={},l={length:0,add:function(a){if(b[a.id])throw Error("Tried to register widget with id\x3d\x3d"+a.id+" but that id is already registered");b[a.id]=a;this.length++},remove:function(a){b[a]&&(delete b[a],this.length--)},byId:function(a){return"string"==typeof a?b[a]:a},byNode:function(a){return b[a.getAttribute("widgetId")]},toArray:function(){var a=[],c;for(c in b)a.push(b[c]);return a},getUniqueId:function(a){do var c=
a+"_"+(a in g?++g[a]:g[a]=0);while(b[c]);return"dijit"==e._scopeName?c:e._scopeName+"_"+c},findWidgets:function(a,c){function h(d){for(d=d.firstChild;d;d=d.nextSibling)if(1==d.nodeType){var f=d.getAttribute("widgetId");f?(f=b[f])&&k.push(f):d!==c&&h(d)}}var k=[];h(a);return k},_destroyAll:function(){e._curFocus=null;e._prevFocus=null;e._activeStack=[];m.forEach(l.findWidgets(n.body()),function(a){a._destroyed||(a.destroyRecursive?a.destroyRecursive():a.destroy&&a.destroy())})},getEnclosingWidget:function(a){for(;a;){var c=
1==a.nodeType&&a.getAttribute("widgetId");if(c)return b[c];a=a.parentNode}return null},_hash:b};return e.registry=l});