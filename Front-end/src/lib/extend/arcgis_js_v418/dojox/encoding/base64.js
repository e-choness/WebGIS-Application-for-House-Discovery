//>>built
define(["dojo/_base/lang"],function(g){g=g.getObject("dojox.encoding.base64",!0);g.encode=function(b){var a=[],f=b.length,d=f%3;f-=d;for(var c=0;c<f;){var e=b[c++]<<16|b[c++]<<8|b[c++];a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>18&63));a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>12&63));a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>6&63));a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e&
63))}switch(d){case 2:e=b[c++]<<16|b[c++]<<8;a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>18&63));a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>12&63));a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>6&63));a.push("\x3d");break;case 1:e=b[c++]<<16,a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>18&63)),a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>
12&63)),a.push("\x3d"),a.push("\x3d")}return a.join("")};g.decode=function(b){b=b.split("");for(var a=[],f=b.length;"\x3d"==b[--f];);for(var d=0;d<f;){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b[d++])<<18;d<=f&&(c|="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b[d++])<<12);d<=f&&(c|="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b[d++])<<6);d<=f&&(c|="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(b[d++]));
a.push(c>>>16&255);a.push(c>>>8&255);a.push(c&255)}for(;0==a[a.length-1];)a.pop();return a};return g});