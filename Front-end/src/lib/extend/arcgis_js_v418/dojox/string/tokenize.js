//>>built
define(["dojo/_base/lang","dojo/_base/sniff"],function(d,h){d=d.getObject("dojox.string",!0).tokenize;return d=function(e,f,g,k){var c=[],b,a;for(a=0;b=f.exec(e);){a=e.slice(a,f.lastIndex-b[0].length);a.length&&c.push(a);if(g){if(h("opera")){for(a=b.slice(0);a.length<b.length;)a.push(null);b=a}b=g.apply(k,b.slice(1).concat(c.length));"undefined"!=typeof b&&c.push(b)}a=f.lastIndex}a=e.slice(a);a.length&&c.push(a);return c}});