//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare ../plot2d/Indicator dojo/has ../plot2d/common ../axis2d/common dojox/gfx".split(" "),function(t,z,q,A,y){var u=function(a,b,e){var c,d=a?{x:b[0],y:e[0][0]}:{x:e[0][0],y:b[0]};1<b.length&&(c=a?{x:b[1],y:e[1][0]}:{x:e[1][0],y:b[1]});return[d,c]};q=q("dojox.charting.action2d._IndicatorElement",A,{constructor:function(a,b){b||(b={});this.inter=b.inter},_updateVisibility:function(a,b,e){var c="x"==e?this._hAxis:this._vAxis,d=c.getWindowScale();
this.chart.setAxisWindow(c.name,d,c.getWindowOffset()+(a[e]-b[e])/d);this._noDirty=!0;this.chart.render();this._noDirty=!1;this._initTrack()},_trackMove:function(){this._updateIndicator(this.pageCoord);this._tracker=setTimeout(t.hitch(this,this._trackMove),100)},_initTrack:function(){this._tracker||(this._tracker=setTimeout(t.hitch(this,this._trackMove),500))},stopTrack:function(){this._tracker&&(clearTimeout(this._tracker),this._tracker=null)},render:function(){if(this.isDirty()){var a=this.inter,
b=a.plot,e=a.opt.vertical;this.opt.offset=a.opt.offset||(e?{x:0,y:5}:{x:5,y:0});a.opt.labelFunc&&(this.opt.labelFunc=function(c,d,g,f,h){c=u(e,d,g);return a.opt.labelFunc(c[0],c[1],f,h)});a.opt.fillFunc&&(this.opt.fillFunc=function(c,d,g){c=u(e,d,g);return a.opt.fillFunc(c[0],c[1])});this.opt=t.delegate(a.opt,this.opt);this.pageCoord?(this.opt.values=[],this.opt.labels=this.secondCoord?"trend":"markers"):(this.opt.values=null,this.inter.onChange({}));this.hAxis=b.hAxis;this.vAxis=b.vAxis;this.inherited(arguments)}},
_updateIndicator:function(){var a=this._updateCoordinates(this.pageCoord,this.secondCoord);if(1<a.length){var b=this.opt.vertical;this._data=[];this.opt.values=[];z.forEach(a,function(e){e&&(this.opt.values.push(b?e.x:e.y),this._data.push([b?e.y:e.x]))},this);this.inherited(arguments)}else this.inter.onChange({})},_renderText:function(a,b,e,c,d,g,f,h){this.inter.opt.labels&&this.inherited(arguments);var k=u(this.opt.vertical,f,h);this.inter.onChange({start:k[0],end:k[1],label:b})},_updateCoordinates:function(a,
b){y("dojo-bidi")&&this._checkXCoords(a,b);var e=this.inter,c=e.plot,d=e.opt.vertical,g=this.chart.getAxis(c.hAxis),f=this.chart.getAxis(c.vAxis),h=g.name,k=f.name,v=g.getScaler().bounds,w=f.getScaler().bounds;f=d?"x":"y";g=d?h:k;var r=d?v:w;if(b)if(d){if(a.x>b.x){var m=b;b=a;a=m}}else a.y>b.y&&(m=b,b=a,a=m);var p=c.toData(a),l;b&&(l=c.toData(b));var n={};n[h]=v.from;n[k]=w.from;m=c.toPage(n);n[h]=v.to;n[k]=w.to;h=c.toPage(n);if(p[g]<r.from){if(l||!e.opt.autoScroll||e.opt.mouseOver){if(e.opt.mouseOver)return[];
a[f]=m[f]}else return this._updateVisibility(a,m,f),[];p=c.toData(a)}else if(p[g]>r.to){if(l||!e.opt.autoScroll||e.opt.mouseOver){if(e.opt.mouseOver)return[];a[f]=h[f]}else return this._updateVisibility(a,h,f),[];p=c.toData(a)}a=this._snapData(p,f,d);if(null==a.y)return[];if(b){l[g]<r.from?(b[f]=m[f],l=c.toData(b)):l[g]>r.to&&(b[f]=h[f],l=c.toData(b));var x=this._snapData(l,f,d);null==x.y&&(x=null)}return[a,x]},_snapData:function(a,b,e){var c=this.chart.getSeries(this.inter.opt.series).data,d,g=c.length;
for(d=0;d<g;++d){var f=c[d];if(null!=f)if("number"==typeof f){if(d+1>a[b])break}else if(f[b]>a[b])break}if("number"==typeof f){if(g=d+1,0<d){var h=d;var k=c[d-1]}}else g=f.x,f=f.y,0<d&&(h=c[d-1].x,k=c[d-1].y);0<d&&a[b]<=(e?(g+h)/2:(f+k)/2)&&(g=h,f=k);return{x:g,y:f}},cleanGroup:function(a){this.inherited(arguments);this.group.moveToFront();return this},isDirty:function(){return!this._noDirty&&(this.dirty||this.inter.plot.isDirty())}});y("dojo-bidi")&&q.extend({_checkXCoords:function(a,b){if(this.chart.isRightToLeft()&&
this.isDirty()){var e=this.chart.node.offsetLeft,c=function(d,g){return d.chart.dim.width+(d.chart.offsets.l-d.chart.offsets.r)-(g.x-e)+e};a&&(a.x=c(this,a));b&&(b.x=c(this,b))}}});return q});