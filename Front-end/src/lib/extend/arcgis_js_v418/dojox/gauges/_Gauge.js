//>>built
define("dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/event dojo/_base/connect dojo/dom-construct dijit/_Widget dojox/gfx ./Range dojo/fx/easing".split(" "),function(r,t,m,e,w,f,h,g,u,n,v){r.deprecated("dojox.gauges","Use the new extensible dojox.dgauges framework instead","2.0");var l=0;return t("dojox.gauges._Gauge",[u],{width:0,height:0,background:null,image:null,useRangeStyles:0,useTooltip:!0,majorTicks:null,minorTicks:null,_defaultIndicator:null,
defaultColors:[[0,84,170,1],[68,119,187,1],[102,153,204,1],[153,187,238,1],[153,204,255,1],[204,238,255,1],[221,238,255,1]],min:null,max:null,surface:null,hideValues:!1,gaugeContent:void 0,_backgroundDefault:{color:"#E0E0E0"},_rangeData:null,_indicatorData:null,_drag:null,_img:null,_overOverlay:!1,_lastHover:"",startup:function(){null===this.image&&(this.image={});this.connect(this.gaugeContent,"onmousedown",this.handleMouseDown);this.connect(this.gaugeContent,"onmousemove",this.handleMouseMove);
this.connect(this.gaugeContent,"onmouseover",this.handleMouseOver);this.connect(this.gaugeContent,"onmouseout",this.handleMouseOut);this.connect(this.gaugeContent,"touchstart",this.handleTouchStart);this.connect(this.gaugeContent,"touchend",this.handleTouchEnd);this.connect(this.gaugeContent,"touchmove",this.handleTouchMove);m.isArray(this.ranges)||(this.ranges=[]);m.isArray(this.indicators)||(this.indicators=[]);var a=[],b=[],c;if(this.hasChildren()){var d=this.getChildren();for(c=0;c<d.length;c++)if(/.*Indicator/.test(d[c].declaredClass))b.push(d[c]);
else switch(d[c].declaredClass){case v.prototype.declaredClass:a.push(d[c])}this.ranges=this.ranges.concat(a);this.indicators=this.indicators.concat(b)}this.background||(this.background=this._backgroundDefault);this.background=this.background.color||this.background;this.surface||this.createSurface();this.addRanges(this.ranges);this.minorTicks&&this.minorTicks.interval&&this.setMinorTicks(this.minorTicks);this.majorTicks&&this.majorTicks.interval&&this.setMajorTicks(this.majorTicks);for(c=0;c<this.indicators.length;c++)this.addIndicator(this.indicators[c]);
this.inherited(arguments)},hasChildren:function(){return 0<this.getChildren().length},buildRendering:function(){var a=this.domNode=this.srcNodeRef?this.srcNodeRef:g.create("div");this.gaugeContent=g.create("div",{className:"dojoxGaugeContent"});this.containerNode=g.create("div");for(this.mouseNode=g.create("div");a.hasChildNodes();)this.containerNode.appendChild(a.firstChild);g.place(this.gaugeContent,a);g.place(this.containerNode,a);g.place(this.mouseNode,a)},_setTicks:function(a,b,c){var d;if(a&&
m.isArray(a._ticks))for(d=0;d<a._ticks.length;d++)this._removeScaleTick(a._ticks[d]);a={length:b.length,offset:b.offset,noChange:!0};b.color&&(a.color=b.color);b.font&&(a.font=b.font);b.labelPlacement&&(a.direction=b.labelPlacement);b._ticks=[];for(d=this.min;d<=this.max;d+=b.interval)if(d!=this.max||!this._isScaleCircular()){a.value=d;if(c){var k=this._getNumberModule();a.label=k?b.fixedPrecision&&b.precision?k.format(d,{places:b.precision}):k.format(d):b.fixedPrecision&&b.precision?d.toFixed(b.precision):
d.toString()}b._ticks.push(this._addScaleTick(a,c))}return b},_isScaleCircular:function(){return!1},setMinorTicks:function(a){this.minorTicks=this._setTicks(this.minorTicks,a,!1)},setMajorTicks:function(a){this.majorTicks=this._setTicks(this.majorTicks,a,!0)},postCreate:function(){this.hideValues&&e.style(this.containerNode,"display","none");e.style(this.mouseNode,"width","0");e.style(this.mouseNode,"height","0");e.style(this.mouseNode,"position","absolute");e.style(this.mouseNode,"z-index","100");
this.useTooltip&&require(["dijit/Tooltip"],dojo.hitch(this,function(a){a.show("test",this.mouseNode,!this.isLeftToRight());a.hide(this.mouseNode)}))},_getNumberModule:function(){if(0==l)try{l=require("dojo/number")}catch(a){l=null}return l},createSurface:function(){this.gaugeContent.style.width=this.width+"px";this.gaugeContent.style.height=this.height+"px";this.surface=n.createSurface(this.gaugeContent,this.width,this.height);this._backgroundGroup=this.surface.createGroup();this._rangeGroup=this.surface.createGroup();
this._minorTicksGroup=this.surface.createGroup();this._majorTicksGroup=this.surface.createGroup();this._overlayGroup=this.surface.createGroup();this._indicatorsGroup=this.surface.createGroup();this._foregroundGroup=this.surface.createGroup();this._background=this._backgroundGroup.createRect({x:0,y:0,width:this.width,height:this.height});this._background.setFill(this.background);if(this.image.url){var a=this._backgroundGroup;this.image.overlay&&(a=this._overlayGroup);this._img=a.createImage({width:this.image.width||
this.width,height:this.image.height||this.height,src:this.image.url});(this.image.x||this.image.y)&&this._img.setTransform({dx:this.image.x||0,dy:this.image.y||0})}},draw:function(){var a;if(this.surface){this.drawBackground(this._backgroundGroup);if(this._rangeData)for(a=0;a<this._rangeData.length;a++)this.drawRange(this._rangeGroup,this._rangeData[a]);if(this._minorTicksData)for(a=0;a<this._minorTicksData.length;a++)this._minorTicksData[a].draw(this._minorTicksGroup);if(this._majorTicksData)for(a=
0;a<this._majorTicksData.length;a++)this._majorTicksData[a].draw(this._majorTicksGroup);if(this._indicatorData)for(a=0;a<this._indicatorData.length;a++)this._indicatorData[a].draw(this._indicatorsGroup);this.drawForeground(this._foregroundGroup)}},drawBackground:function(a){},drawForeground:function(a){},setBackground:function(a){a||(a=this._backgroundDefault);this.background=a.color||a;this._background.setFill(this.background)},addRange:function(a){this.addRanges([a])},addRanges:function(a){this._rangeData||
(this._rangeData=[]);for(var b,c=0;c<a.length;c++){b=a[c];if(null===this.min||b.low<this.min)this.min=b.low;if(null===this.max||b.high>this.max)this.max=b.high;if(!b.color){var d=this._rangeData.length%this.defaultColors.length;n.svg&&0<this.useRangeStyles?(d=this._rangeData.length%this.useRangeStyles+1,b.color={style:"dojoxGaugeRange"+d}):(d=this._rangeData.length%this.defaultColors.length,b.color=this.defaultColors[d])}this._rangeData[this._rangeData.length]=b}this.draw()},_addScaleTick:function(a,
b){a.declaredClass||(a=new this._defaultIndicator(a));a._gauge=this;b?(this._majorTicksData||(this._majorTicksData=[]),this._majorTicksData[this._majorTicksData.length]=a,a.draw(this._majorTicksGroup)):(this._minorTicksData||(this._minorTicksData=[]),this._minorTicksData[this._minorTicksData.length]=a,a.draw(this._minorTicksGroup));return a},_removeScaleTick:function(a){var b;if(this._majorTicksData)for(b=0;b<this._majorTicksData.length;b++)if(this._majorTicksData[b]===a){this._majorTicksData.splice(b,
1);a.remove();return}if(this._minorTicksData)for(b=0;b<this._minorTicksData.length;b++)if(this._minorTicksData[b]===a){this._minorTicksData.splice(b,1);a.remove();break}},addIndicator:function(a){a.declaredClass||(a=new this._defaultIndicator(a));a._gauge=this;a.hideValue||this.containerNode.appendChild(a.domNode);this._indicatorData||(this._indicatorData=[]);this._indicatorData[this._indicatorData.length]=a;a.draw(this._indicatorsGroup);return a},removeIndicator:function(a){for(var b=0;b<this._indicatorData.length;b++)if(this._indicatorData[b]===
a){this._indicatorData.splice(b,1);a.remove();break}},moveIndicatorToFront:function(a){a.shape&&a.shape.moveToFront()},drawText:function(a,b,c,d,k,p,q){a=a.createText({x:c,y:d,text:b,align:k});a.setFill(p?p:"black");q&&a.setFont(q);return a},removeText:function(a){a.parent&&a.parent.remove(a)},updateTooltip:function(a,b){this.useTooltip&&require(["dijit/Tooltip"],dojo.hitch(this,function(c){this._lastHover!=a&&(""!==a?(c.hide(this.mouseNode),c.show(a,this.mouseNode,!this.isLeftToRight())):c.hide(this.mouseNode),
this._lastHover=a)}))},handleMouseOver:function(a){if(this.image&&this.image.overlay&&a.target==this._img.getEventSource()){this._overOverlay=!0;var b=this.getRangeUnderMouse(a);if(b&&b.hover)var c=b.hover;this.useTooltip&&!this._drag&&(c?this.updateTooltip(c,a):this.updateTooltip("",a))}},handleMouseOut:function(a){this._overOverlay=!1;this._hideTooltip()},handleMouseMove:function(a){if(this.useTooltip&&(a&&(e.style(this.mouseNode,"left",a.pageX+1+"px"),e.style(this.mouseNode,"top",a.pageY+1+"px")),
this._overOverlay)){var b=this.getRangeUnderMouse(a);b&&b.hover?this.updateTooltip(b.hover,a):this.updateTooltip("",a)}},handleMouseDown:function(a){var b=this._getInteractiveIndicator();b&&this._handleMouseDownIndicator(b,a)},_handleDragInteractionMouseMove:function(a){this._drag&&(this._dragIndicator(this,a),f.stop(a))},_handleDragInteractionMouseUp:function(a){this._drag=null;for(var b=0;b<this._mouseListeners.length;b++)h.disconnect(this._mouseListeners[b]);this._mouseListeners=[];f.stop(a)},
_handleMouseDownIndicator:function(a,b){a.noChange||(this._mouseListeners||(this._mouseListeners=[]),this._drag=a,this._mouseListeners.push(h.connect(document,"onmouseup",this,this._handleDragInteractionMouseUp)),this._mouseListeners.push(h.connect(document,"onmousemove",this,this._handleDragInteractionMouseMove)),this._mouseListeners.push(h.connect(document,"ondragstart",this,f.stop)),this._mouseListeners.push(h.connect(document,"onselectstart",this,f.stop)),this._dragIndicator(this,b),f.stop(b))},
_handleMouseOverIndicator:function(a,b){this.useTooltip&&!this._drag&&(a.hover?require(["dijit/Tooltip"],dojo.hitch(this,function(c){e.style(this.mouseNode,"left",b.pageX+1+"px");e.style(this.mouseNode,"top",b.pageY+1+"px");c.show(a.hover,this.mouseNode,!this.isLeftToRight())})):this.updateTooltip("",b));a.onDragMove&&!a.noChange&&(this.gaugeContent.style.cursor="pointer")},_handleMouseOutIndicator:function(a,b){this._hideTooltip();this.gaugeContent.style.cursor="pointer"},_hideTooltip:function(){this.useTooltip&&
this.mouseNode&&require(["dijit/Tooltip"],dojo.hitch(this,function(a){a.hide(this.mouseNode)}))},_handleMouseOutRange:function(a,b){this._hideTooltip()},_handleMouseOverRange:function(a,b){this.useTooltip&&!this._drag&&(a.hover?(e.style(this.mouseNode,"left",b.pageX+1+"px"),e.style(this.mouseNode,"top",b.pageY+1+"px"),require(["dijit/Tooltip"],dojo.hitch(this,function(c){c.show(a.hover,this.mouseNode,!this.isLeftToRight())}))):this.updateTooltip("",b))},handleTouchStartIndicator:function(a,b){a.noChange||
(this._drag=a,f.stop(b))},handleTouchStart:function(a){this._drag=this._getInteractiveIndicator();this.handleTouchMove(a)},handleTouchEnd:function(a){this._drag&&(this._drag=null,f.stop(a))},handleTouchMove:function(a){if(this._drag&&!this._drag.noChange){var b=a.touches[0];this._dragIndicatorAt(this,b.pageX,b.pageY);f.stop(a)}},_getInteractiveIndicator:function(){for(var a=0;a<this._indicatorData.length;a++){var b=this._indicatorData[a];if("gauge"==b.interactionMode&&!b.noChange)return b}return null}})});