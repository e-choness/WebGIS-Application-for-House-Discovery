//>>built
define(["./_base","dojo/_base/lang","./matrix","dojo/_base/Color"],function(g,l,f,h){function m(a,b){if(0>=a)return b[0].color;var d=b.length;if(1<=a)return b[d-1].color;for(var c=0;c<d;++c){var e=b[c];if(e.offset>=a)return c?(b=b[c-1],h.blendColors(new h(b.color),new h(e.color),(a-b.offset)/(e.offset-b.offset))):e.color}return b[d-1].color}g=g.gradutils={};g.getColor=function(a,b){if(a){switch(a.type){case "linear":var d=f.rotate(-Math.atan2(a.y2-a.y1,a.x2-a.x1));var c=f.project(a.x2-a.x1,a.y2-a.y1);
b=f.multiplyPoint(c,b);var e=f.multiplyPoint(c,a.x1,a.y1);c=f.multiplyPoint(c,a.x2,a.y2);c=f.multiplyPoint(d,c.x-e.x,c.y-e.y).x;d=f.multiplyPoint(d,b.x-e.x,b.y-e.y).x/c;break;case "radial":d=b.x-a.cx,b=b.y-a.cy,d=Math.sqrt(d*d+b*b)/a.r}return m(d,a.colors)}return new h(a||[0,0,0,0])};g.reverse=function(a){if(a)switch(a.type){case "linear":case "radial":if(a=l.delegate(a),a.colors){for(var b=a.colors,d=b.length,c=0,e,k=a.colors=Array(b.length);c<d;++c)e=b[c],k[c]={offset:1-e.offset,color:e.color};
k.sort(function(n,p){return n.offset-p.offset})}}return a};return g});