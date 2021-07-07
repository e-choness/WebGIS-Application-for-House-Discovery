//>>built
require({cache:{"url:dojox/widget/Calendar/Calendar.html":'\x3cdiv class\x3d"dojoxCalendar"\x3e\r\n    \x3cdiv tabindex\x3d"0" class\x3d"dojoxCalendarContainer" style\x3d"visibility: visible;" dojoAttachPoint\x3d"container"\x3e\r\n\t\t\x3cdiv style\x3d"display:none"\x3e\r\n\t\t\t\x3cdiv dojoAttachPoint\x3d"previousYearLabelNode"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv dojoAttachPoint\x3d"nextYearLabelNode"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv dojoAttachPoint\x3d"monthLabelSpacer"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n        \x3cdiv class\x3d"dojoxCalendarHeader"\x3e\r\n            \x3cdiv\x3e\r\n                \x3cdiv class\x3d"dojoxCalendarDecrease" dojoAttachPoint\x3d"decrementMonth"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d""\x3e\r\n                \x3cdiv class\x3d"dojoxCalendarIncrease" dojoAttachPoint\x3d"incrementMonth"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"dojoxCalendarTitle" dojoAttachPoint\x3d"header" dojoAttachEvent\x3d"onclick: onHeaderClick"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"dojoxCalendarBody" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d""\x3e\r\n            \x3cdiv class\x3d"dojoxCalendarFooter" dojoAttachPoint\x3d"footer"\x3e                        \r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/_WidgetBase dijit/_TemplatedMixin dijit/_Container dijit/_WidgetsInTemplateMixin dijit/typematic dojo/_base/declare dojo/date dojo/date/stamp dojo/date/locale dojo/dom-style dojo/dom-class dojo/_base/fx dojo/on dojo/_base/array dojo/_base/lang dojo/text!./Calendar/Calendar.html".split(" "),function(n,p,q,r,t,u,m,k,v,e,l,h,w,x,g,y){return u("dojox.widget._CalendarBase",[n,p,q,r],{templateString:y,_views:null,useFx:!0,value:new Date,constraints:null,footerFormat:"medium",constructor:function(){this._views=
[];this.value=new Date},_setConstraintsAttr:function(a){if(a=this.constraints=a)"string"==typeof a.min&&(a.min=k.fromISOString(a.min)),"string"==typeof a.max&&(a.max=k.fromISOString(a.max))},postMixInProperties:function(){this.inherited(arguments);this.value=this.parseInitialValue(this.value)},parseInitialValue:function(a){if(!a||-1===a)return new Date;a.getFullYear||isNaN(a)||("string"==typeof this.value&&(a=parseInt(a)),a=this._makeDate(a));return a},_makeDate:function(a){return a},postCreate:function(){this.displayMonth=
new Date(this.get("value"));this._isInvalidDate(this.displayMonth)&&(this.displayMonth=new Date);var a={parent:this,_getValueAttr:g.hitch(this,function(){return new Date(this._internalValue||this.value)}),_getDisplayMonthAttr:g.hitch(this,function(){return new Date(this.displayMonth)}),_getConstraintsAttr:g.hitch(this,function(){return this.constraints}),getLang:g.hitch(this,function(){return this.lang}),isDisabledDate:g.hitch(this,this.isDisabledDate),getClassForDate:g.hitch(this,this.getClassForDate),
addFx:this.useFx?g.hitch(this,this.addFx):function(){}};x.forEach(this._views,function(d){d=(new d(a)).placeAt(this);var f=d.getHeader();f&&(this.header.appendChild(f),e.set(f,"display","none"));e.set(d.domNode,"visibility","hidden");d.on("valueSelected",g.hitch(this,"_onDateSelected"));d.set("value",this.get("value"))},this);2>this._views.length&&e.set(this.header,"cursor","auto");this.inherited(arguments);this._children=this.getChildren();this._currentChild=0;this.footer.innerHTML="Today: "+v.format(new Date,
{formatLength:this.footerFormat,selector:"date",locale:this.lang});w(this.footer,"click",g.hitch(this,"goToToday"));var b=this._children[0];e.set(b.domNode,"top","0px");e.set(b.domNode,"visibility","visible");b.getHeader()&&e.set(b.getHeader(),"display","");l.toggle(this.container,"no-header",!b.useHeader);b.onDisplay();var c=this;b=function(d,f,z){t.addMouseListener(c[d],c,function(A){0<=A&&c._adjustDisplay(f,z)},.8,500)};b("incrementMonth","month",1);b("decrementMonth","month",-1);this._updateTitleStyle()},
addFx:function(a,b){},_isInvalidDate:function(a){return!a||isNaN(a)||"object"!=typeof a||a.toString()==this._invalidDate},_setValueAttr:function(a){a||(a=new Date);a.getFullYear||(a=k.fromISOString(a+""));if(this._isInvalidDate(a))return!1;if(!this.value||m.compare(a,this.value))return a=new Date(a),this.displayMonth=new Date(a),this._internalValue=a,this.isDisabledDate(a,this.lang)||0!==this._currentChild||(this.value=a,this.onChange(a)),this._children&&0<this._children.length&&this._children[this._currentChild].set("value",
this.value),!0;this.onExecute();return!1},isDisabledDate:function(a,b){b=this.constraints;var c=m.compare;return b&&(b.min&&0<c(b.min,a,"date")||b.max&&0>c(b.max,a,"date"))},onValueSelected:function(a){},_onDateSelected:function(a,b,c){this.displayMonth=a;this.set("value",a);this._transitionVert(-1)||(b||0===b||(b=this.get("value")),this.onValueSelected(b))},onChange:function(a){},onHeaderClick:function(a){this._transitionVert(1)},goToToday:function(){this.set("value",new Date);this.onValueSelected(this.get("value"))},
_transitionVert:function(a){var b=this._children[this._currentChild],c=this._children[this._currentChild+a];if(!c)return!1;e.set(c.domNode,"visibility","visible");var d=e.get(this.containerNode,"height");c.set("value",this.displayMonth);b.header&&e.set(b.header,"display","none");c.header&&e.set(c.header,"display","");e.set(c.domNode,"top",-1*d+"px");e.set(c.domNode,"visibility","visible");this._currentChild+=a;a*=d;e.set(c.domNode,"top",-1*a+"px");a=h.animateProperty({node:b.domNode,properties:{top:a},
onEnd:function(){e.set(b.domNode,"visibility","hidden")}});d=h.animateProperty({node:c.domNode,properties:{top:0},onEnd:function(){c.onDisplay()}});l.toggle(this.container,"no-header",!c.useHeader);a.play();d.play();b.onBeforeUnDisplay();c.onBeforeDisplay();this._updateTitleStyle();return!0},_updateTitleStyle:function(){l.toggle(this.header,"navToPanel",this._currentChild<this._children.length-1)},_slideTable:function(a,b,c){a=a.domNode;var d=a.cloneNode(!0),f=e.get(a,"width");a.parentNode.appendChild(d);
e.set(a,"left",f*b+"px");c();b=h.animateProperty({node:d,properties:{left:f*b*-1},duration:500,onEnd:function(){d.parentNode.removeChild(d)}});c=h.animateProperty({node:a,properties:{left:0},duration:500});b.play();c.play()},_addView:function(a){this._views.push(a)},getClassForDate:function(a,b){},_adjustDisplay:function(a,b,c){var d=this._children[this._currentChild],f=this.displayMonth=d.adjustDate(this.displayMonth,b);this._slideTable(d,b,function(){d.set("value",f)})},onExecute:function(){}})});