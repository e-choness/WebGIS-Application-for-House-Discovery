//>>built
define(["dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(b,c,g,h){function d(a,k){var e=a.next.node;g.set(e,{display:"",opacity:0});a.node=a.current.node;return h[k]([c.fadeOut(a),c.fadeIn(b.mixin(a,{node:e}))])}var f={fade:function(a){return d(a,"chain")},crossFade:function(a){return d(a,"combine")}};b.mixin(b.getObject("dojox.widget.rotator"),f);return f});