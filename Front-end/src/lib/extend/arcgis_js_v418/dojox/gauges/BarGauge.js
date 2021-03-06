//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/event dojox/gfx ./_Gauge ./BarLineIndicator dojo/dom-geometry".split(" "),function(h,d,k,q,l,m,n,p,e){return h("dojox.gauges.BarGauge",n,{dataX:5,dataY:5,dataWidth:0,dataHeight:0,_defaultIndicator:p,startup:function(){this.getChildren&&k.forEach(this.getChildren(),function(a){a.startup()});this.dataWidth||(this.dataWidth=this.gaugeWidth-10);this.dataHeight||(this.dataHeight=this.gaugeHeight-10);this.inherited(arguments)},
_getPosition:function(a){return this.dataX+Math.floor((a-this.min)/(this.max-this.min)*this.dataWidth)},_getValueForPosition:function(a){return(a-this.dataX)*(this.max-this.min)/this.dataWidth+this.min},drawRange:function(a,b){b.shape&&(b.shape.parent.remove(b.shape),b.shape=null);var c=this._getPosition(b.low),f=this._getPosition(b.high);a=a.createRect({x:c,y:this.dataY,width:f-c,height:this.dataHeight});if(d.isArray(b.color)||d.isString(b.color))a.setStroke({color:b.color}),a.setFill(b.color);else if(b.color.type){var g=
this.dataY+this.dataHeight/2;b.color.x1=c;b.color.x2=f;b.color.y1=g;b.color.y2=g;a.setFill(b.color);a.setStroke({color:b.color.colors[0].color})}else m.svg&&(a.setStroke({color:"green"}),a.setFill("green"),a.getEventSource().setAttribute("class",b.color.style));a.connect("onmouseover",d.hitch(this,this._handleMouseOverRange,b));a.connect("onmouseout",d.hitch(this,this._handleMouseOutRange,b));b.shape=a},getRangeUnderMouse:function(a){var b=null,c=e.getContentBox(this.gaugeContent);a=this._getValueForPosition(a.clientX-
c.x);if(this._rangeData)for(c=0;c<this._rangeData.length&&!b;c++)Number(this._rangeData[c].low)<=a&&Number(this._rangeData[c].high)>=a&&(b=this._rangeData[c]);return b},_dragIndicator:function(a,b){this._dragIndicatorAt(a,b.pageX,b.pageY);l.stop(b)},_dragIndicatorAt:function(a,b,c){c=e.position(a.gaugeContent,!0);b=a._getValueForPosition(b-c.x);b<a.min&&(b=a.min);b>a.max&&(b=a.max);a._drag.value=b;a._drag.onDragMove(a._drag);a._drag.draw(this._indicatorsGroup,!0);a._drag.valueChanged()}})});