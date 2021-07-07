//>>built
require({cache:{"url:dojox/calendar/templates/MatrixView.html":'\x3cdiv data-dojo-attach-events\x3d"keydown:_onKeyDown"\x3e\r\n\t\x3cdiv  class\x3d"dojoxCalendarYearColumnHeader" data-dojo-attach-point\x3d"yearColumnHeader"\x3e\r\n\t\t\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3cspan data-dojo-attach-point\x3d"yearColumnHeaderContent"\x3e\x3c/span\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\t\t\r\n\t\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"columnHeader" class\x3d"dojoxCalendarColumnHeader"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"columnHeaderTable" class\x3d"dojoxCalendarColumnHeaderTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\r\n\t\x3c/div\x3e\t\t\r\n\t\x3cdiv dojoAttachPoint\x3d"rowHeader" class\x3d"dojoxCalendarRowHeader"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"rowHeaderTable" class\x3d"dojoxCalendarRowHeaderTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\r\n\t\x3c/div\x3e\t\r\n\t\x3cdiv dojoAttachPoint\x3d"grid" class\x3d"dojoxCalendarGrid"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"gridTable" class\x3d"dojoxCalendarGridTable" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3c/table\x3e\r\n\t\x3c/div\x3e\t\r\n\t\x3cdiv data-dojo-attach-point\x3d"itemContainer" class\x3d"dojoxCalendarContainer" data-dojo-attach-event\x3d"mousedown:_onGridMouseDown,mouseup:_onGridMouseUp,ondblclick:_onGridDoubleClick,touchstart:_onGridTouchStart,touchmove:_onGridTouchMove,touchend:_onGridTouchEnd"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"itemContainerTable" class\x3d"dojoxCalendarContainerTable" cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%"\x3e\x3c/table\x3e\r\n\t\x3c/div\x3e\t\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/event dojo/_base/lang dojo/_base/sniff dojo/_base/fx dojo/_base/html dojo/on dojo/dom dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom-construct dojo/query dojo/i18n ./ViewBase dojo/text!./templates/MatrixView.html dijit/_TemplatedMixin".split(" "),function(K,R,L,r,C,E,F,D,S,t,u,y,w,x,G,M,N,O){return K("dojox.calendar.MatrixView",[M,O],{templateString:N,baseClass:"dojoxCalendarMatrixView",_setTabIndexAttr:"domNode",viewKind:"matrix",renderData:null,
startDate:null,refStartTime:null,refEndTime:null,columnCount:7,rowCount:5,horizontalRenderer:null,labelRenderer:null,expandRenderer:null,horizontalDecorationRenderer:null,percentOverlap:0,verticalGap:2,horizontalRendererHeight:17,labelRendererHeight:14,expandRendererHeight:15,cellPaddingTop:16,expandDuration:300,expandEasing:null,layoutDuringResize:!1,roundToDay:!0,showCellLabel:!0,scrollable:!1,resizeCursor:"e-resize",constructor:function(){this.invalidatingProperties="columnCount rowCount startDate horizontalRenderer horizontalDecaorationRenderer labelRenderer expandRenderer rowHeaderDatePattern columnHeaderLabelLength cellHeaderShortPattern cellHeaderLongPattern percentOverlap verticalGap horizontalRendererHeight labelRendererHeight expandRendererHeight cellPaddingTop roundToDay itemToRendererKindFunc layoutPriorityFunction formatItemTimeFunc textDir items".split(" ");
this._ddRendererList=[];this._ddRendererPool=[];this._rowHeaderHandles=[]},destroy:function(a){this._cleanupRowHeader();this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._initialized=!0;this.invalidRendering||this.refreshRendering()},_createRenderData:function(){var a={};a.dateLocaleModule=this.dateLocaleModule;a.dateClassObj=this.dateClassObj;a.dateModule=this.dateModule;a.dates=[];a.columnCount=this.get("columnCount");a.rowCount=this.get("rowCount");a.sheetHeight=this.itemContainer.offsetHeight;
this._computeRowsHeight(a);var b=this.get("startDate");null==b&&(b=new a.dateClassObj);this.startDate=b=this.floorToDay(b,!1,a);for(var c=0;c<a.rowCount;c++){a.dates.push([]);for(var d=0;d<a.columnCount;d++)a.dates[c].push(b),b=this.addAndFloor(b,"day",1)}a.startTime=this.newDate(a.dates[0][0],a);a.endTime=this.newDate(a.dates[a.rowCount-1][a.columnCount-1],a);a.endTime=a.dateModule.add(a.endTime,"day",1);a.endTime=this.floorToDay(a.endTime,!0);this.displayedItemsInvalidated&&!this._isEditing?(this.displayedItemsInvalidated=
!1,this._computeVisibleItems(a)):this.renderData&&(a.items=this.renderData.items);this.displayedDecorationItemsInvalidated?a.decorationItems=this.decorationStoreManager._computeVisibleItems(a):this.renderData&&(a.decorationItems=this.renderData.decorationItems);a.rtl=!this.isLeftToRight();return a},_validateProperties:function(){this.inherited(arguments);if(1>this.columnCount||isNaN(this.columnCount))this.columnCount=1;if(1>this.rowCount||isNaN(this.rowCount))this.rowCount=1;if(isNaN(this.percentOverlap)||
0>this.percentOverlap||100<this.percentOverlap)this.percentOverlap=0;if(isNaN(this.verticalGap)||0>this.verticalGap)this.verticalGap=2;if(isNaN(this.horizontalRendererHeight)||1>this.horizontalRendererHeight)this.horizontalRendererHeight=17;if(isNaN(this.labelRendererHeight)||1>this.labelRendererHeight)this.labelRendererHeight=14;if(isNaN(this.expandRendererHeight)||1>this.expandRendererHeight)this.expandRendererHeight=15},_setStartDateAttr:function(a){this.displayedItemsInvalidated=!0;this._set("startDate",
a)},_setColumnCountAttr:function(a){this.displayedItemsInvalidated=!0;this._set("columnCount",a)},_setRowCountAttr:function(a){this.displayedItemsInvalidated=!0;this._set("rowCount",a)},__fixEvt:function(a){a.sheet="primary";a.source=this;return a},_formatRowHeaderLabel:function(a){return this.rowHeaderDatePattern?this.renderData.dateLocaleModule.format(a,{selector:"date",datePattern:this.rowHeaderDatePattern}):this.getWeekNumberLabel(a)},_formatColumnHeaderLabel:function(a){return this.renderData.dateLocaleModule.getNames("days",
this.columnHeaderLabelLength?this.columnHeaderLabelLength:"wide","standAlone")[a.getDay()]},cellHeaderShortPattern:null,cellHeaderLongPattern:null,_formatGridCellLabel:function(a,b,c){0==b&&0==c||1==a.getDate()?this.cellHeaderLongPattern?b=this.cellHeaderLongPattern:(b=G.getLocalization("dojo.cldr",this._calendar),b=b["dateFormatItem-MMMd"]):this.cellHeaderShortPattern?b=this.cellHeaderShortPattern:(b=G.getLocalization("dojo.cldr",this._calendar),b=b["dateFormatItem-d"]);return this.renderData.dateLocaleModule.format(a,
{selector:"date",datePattern:b})},refreshRendering:function(){this.inherited(arguments);if(this.domNode){this._validateProperties();var a=this.renderData,b=this.renderData=this._createRenderData();this._createRendering(b,a);this._layoutDecorationRenderers(b);this._layoutRenderers(b)}},_createRendering:function(a,b){if(0>=a.rowHeight)a.columnCount=1,a.rowCount=1,a.invalidRowHeight=!0;else{if(b&&this.itemContainerTable){var c=x(".dojoxCalendarItemContainerRow",this.itemContainerTable);b.rowCount=c.length}this._buildColumnHeader(a,
b);this._buildRowHeader(a,b);this._buildGrid(a,b);this._buildItemContainer(a,b);this.buttonContainer&&null!=this.owner&&this.owner.currentView==this&&u.set(this.buttonContainer,{right:0,left:0})}},_buildColumnHeader:function(a,b){var c=this.columnHeaderTable;if(c){b=a.columnCount-(b?b.columnCount:0);8==C("ie")&&(null==this._colTableSave?this._colTableSave=r.clone(c):0>b&&(this.columnHeader.removeChild(c),w.destroy(c),this.columnHeaderTable=c=r.clone(this._colTableSave),this.columnHeader.appendChild(c),
b=a.columnCount));var d=x("tbody",c),f=x("tr",c);d=1==d.length?d[0]:F.create("tbody",null,c);f=1==f.length?f[0]:w.create("tr",null,d);if(0<b)for(d=0;d<b;d++)w.create("td",null,f);else for(b=-b,d=0;d<b;d++)f.removeChild(f.lastChild);x("td",c).forEach(function(e,h){e.className="";var g=a.dates[0][h];this._setText(e,this._formatColumnHeaderLabel(g));0==h?t.add(e,"first-child"):h==this.renderData.columnCount-1&&t.add(e,"last-child");this.styleColumnHeaderCell(e,g,a)},this);this.yearColumnHeaderContent&&
this._setText(this.yearColumnHeaderContent,a.dateLocaleModule.format(a.dates[0][0],{selector:"date",datePattern:"yyyy"}))}},styleColumnHeaderCell:function(a,b,c){t.add(a,this._cssDays[b.getDay()]);this.isWeekEnd(b)&&t.add(a,"dojoxCalendarWeekend")},_rowHeaderHandles:null,_cleanupRowHeader:function(){for(;0<this._rowHeaderHandles.length;)for(var a=this._rowHeaderHandles.pop();0<a.length;)a.pop().remove()},_rowHeaderClick:function(a){var b=x("td",this.rowHeaderTable).indexOf(a.currentTarget);this._onRowHeaderClick({index:b,
date:this.renderData.dates[b][0],triggerEvent:a})},_buildRowHeader:function(a,b){var c=this.rowHeaderTable;if(c){var d=x("tbody",c);d=1==d.length?d[0]:w.create("tbody",null,c);b=a.rowCount-(b?b.rowCount:0);if(0<b)for(var f=0;f<b;f++){var e=w.create("tr",null,d);e=w.create("td",null,e);var h=[];h.push(D(e,"click",r.hitch(this,this._rowHeaderClick)));C("touch")||(h.push(D(e,"mousedown",function(g){t.add(g.currentTarget,"Active")})),h.push(D(e,"mouseup",function(g){t.remove(g.currentTarget,"Active")})),
h.push(D(e,"mouseover",function(g){t.add(g.currentTarget,"Hover")})),h.push(D(e,"mouseout",function(g){t.remove(g.currentTarget,"Hover")})));this._rowHeaderHandles.push(h)}else for(b=-b,f=0;f<b;f++)for(d.removeChild(d.lastChild),e=this._rowHeaderHandles.pop();0<e.length;)e.pop().remove();x("tr",c).forEach(function(g,m){u.set(g,"height",this._getRowHeight(m)+"px");var l=a.dates[m][0];g=x("td",g)[0];g.className="";0==m&&t.add(g,"first-child");m==this.renderData.rowCount-1&&t.add(g,"last-child");this.styleRowHeaderCell(g,
l,a);this._setText(g,this._formatRowHeaderLabel(l))},this)}},styleRowHeaderCell:function(a,b,c){},_buildGrid:function(a,b){if(b=this.gridTable){var c=x("tr",b),d=a.rowCount-c.length,f=0<d,e=a.columnCount-(c?x("td",c[0]).length:0);8==C("ie")&&(null==this._gridTableSave?this._gridTableSave=r.clone(b):0>e&&(this.grid.removeChild(b),w.destroy(b),this.gridTable=b=r.clone(this._gridTableSave),this.grid.appendChild(b),e=a.columnCount,d=a.rowCount,f=!0));c=x("tbody",b);c=1==c.length?c[0]:w.create("tbody",
null,b);if(f)for(var h=0;h<d;h++)w.create("tr",null,c);else for(d=-d,h=0;h<d;h++)c.removeChild(c.lastChild);var g=a.rowCount-d,m=f||0<e;e=m?e:-e;x("tr",b).forEach(function(l,k){if(m){var n=k>=g?a.columnCount:e;for(k=0;k<n;k++){var p=w.create("td",null,l);w.create("span",null,p)}}else for(k=0;k<e;k++)l.removeChild(l.lastChild)});x("tr",b).forEach(function(l,k){u.set(l,"height",this._getRowHeight(k)+"px");l.className="";0==k&&t.add(l,"first-child");k==a.rowCount-1&&t.add(l,"last-child");x("td",l).forEach(function(n,
p){n.className="";0==p&&t.add(n,"first-child");p==a.columnCount-1&&t.add(n,"last-child");var z=a.dates[k][p],q=x("span",n)[0];this._setText(q,this.showCellLabel?this._formatGridCellLabel(z,k,p):null);this.styleGridCell(n,z,a)},this)},this)}},styleGridCellFunc:null,defaultStyleGridCell:function(a,b,c){t.add(a,this._cssDays[b.getDay()]);c=this.dateModule;this.isToday(b)?t.add(a,"dojoxCalendarToday"):null!=this.refStartTime&&null!=this.refEndTime&&(0<=c.compare(b,this.refEndTime)||0>=c.compare(c.add(b,
"day",1),this.refStartTime))?t.add(a,"dojoxCalendarDayDisabled"):this.isWeekEnd(b)&&t.add(a,"dojoxCalendarWeekend")},styleGridCell:function(a,b,c){this.styleGridCellFunc?this.styleGridCellFunc(a,b,c):this.defaultStyleGridCell(a,b,c)},_buildItemContainer:function(a,b){var c=this.itemContainerTable;if(c){var d=[];b=a.rowCount-(b?b.rowCount:0);8==C("ie")&&(null==this._itemTableSave?this._itemTableSave=r.clone(c):0>b&&(this.itemContainer.removeChild(c),this._recycleItemRenderers(!0),this._recycleExpandRenderers(!0),
w.destroy(c),this.itemContainerTable=c=r.clone(this._itemTableSave),this.itemContainer.appendChild(c),b=a.columnCount));var f=x("tbody",c);f=1==f.length?f[0]:w.create("tbody",null,c);if(0<b)for(var e=0;e<b;e++){var h=w.create("tr",null,f);t.add(h,"dojoxCalendarItemContainerRow");h=w.create("td",null,h);h=w.create("div",null,h);t.add(h,"dojoxCalendarContainerRow")}else for(b=-b,e=0;e<b;e++)f.removeChild(f.lastChild);x(".dojoxCalendarItemContainerRow",c).forEach(function(g,m){u.set(g,"height",this._getRowHeight(m)+
"px");d.push(g.childNodes[0].childNodes[0])},this);a.cells=d}},resize:function(a){this.inherited(arguments);this._resizeHandler(null,!1)},_resizeHandler:function(a,b){a=this.renderData;if(null==a)this.refreshRendering();else{if(a.sheetHeight!=this.itemContainer.offsetHeight&&(a.sheetHeight=this.itemContainer.offsetHeight,-1==this.getExpandedRowIndex()?(this._computeRowsHeight(),this._resizeRows()):this.expandRow(a.expandedRow,a.expandedRowCol,0,null,!0),a.invalidRowHeight)){delete a.invalidRowHeight;
this.renderData=null;this.displayedItemsInvalidated=!0;this.refreshRendering();return}this.layoutDuringResize||b?setTimeout(r.hitch(this,function(){this._layoutRenderers(this.renderData);this._layoutDecorationRenderers(this.renderData)}),20):(u.set(this.itemContainer,"opacity",0),this._recycleItemRenderers(),this._recycleExpandRenderers(),void 0!=this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(r.hitch(this,function(){delete this._resizeTimer;this._resizeRowsImpl(this.itemContainer,
"tr");this._layoutRenderers(this.renderData);this._layoutDecorationRenderers(this.renderData);0==this.resizeAnimationDuration?u.set(this.itemContainer,"opacity",1):E.fadeIn({node:this.itemContainer,curve:[0,1]}).play(this.resizeAnimationDuration)}),200))}},resizeAnimationDuration:0,getExpandedRowIndex:function(){return null==this.renderData.expandedRow?-1:this.renderData.expandedRow},collapseRow:function(a,b,c){var d=this.renderData;void 0==c&&(c=!0);void 0==a&&(a=this.expandDuration);if(d&&null!=
d.expandedRow&&-1!=d.expandedRow)if(c&&a){c=d.expandedRow;var f=d.expandedRowHeight;delete d.expandedRow;this._computeRowsHeight(d);var e=this._getRowHeight(c);d.expandedRow=c;this._recycleExpandRenderers();this._recycleItemRenderers();u.set(this.itemContainer,"display","none");this._expandAnimation=new E.Animation({curve:[f,e],duration:a,easing:b,onAnimate:r.hitch(this,function(h){this._expandRowImpl(Math.floor(h))}),onEnd:r.hitch(this,function(h){this._expandAnimation=null;this._collapseRowImpl(!1);
this._resizeRows();u.set(this.itemContainer,"display","block");setTimeout(r.hitch(this,function(){this._layoutRenderers(d)}),100);this.onExpandAnimationEnd(!1)})});this._expandAnimation.play()}else this._collapseRowImpl(c)},_collapseRowImpl:function(a){var b=this.renderData;delete b.expandedRow;delete b.expandedRowHeight;this._computeRowsHeight(b);if(void 0==a||a)this._resizeRows(),this._layoutRenderers(b)},expandRow:function(a,b,c,d,f){var e=this.renderData;if(!e||0>a||a>=e.rowCount)return-1;if(void 0==
b||0>b||b>=e.columnCount)b=-1;void 0==f&&(f=!0);void 0==c&&(c=this.expandDuration);void 0==d&&(d=this.expandEasing);var h=this._getRowHeight(a),g=e.sheetHeight-Math.ceil(this.cellPaddingTop*(e.rowCount-1));e.expandedRow=a;e.expandedRowCol=b;e.expandedRowHeight=g;f&&(c?(this._recycleExpandRenderers(),this._recycleItemRenderers(),u.set(this.itemContainer,"display","none"),this._expandAnimation=new E.Animation({curve:[h,g],duration:c,delay:50,easing:d,onAnimate:r.hitch(this,function(m){this._expandRowImpl(Math.floor(m))}),
onEnd:r.hitch(this,function(){this._expandAnimation=null;u.set(this.itemContainer,"display","block");setTimeout(r.hitch(this,function(){this._expandRowImpl(g,!0)}),100);this.onExpandAnimationEnd(!0)})}),this._expandAnimation.play()):this._expandRowImpl(g,!0))},_expandRowImpl:function(a,b){var c=this.renderData;c.expandedRowHeight=a;this._computeRowsHeight(c,c.sheetHeight-a);this._resizeRows();b&&this._layoutRenderers(c)},onExpandAnimationEnd:function(a){},_resizeRows:function(){0>=this._getRowHeight(0)||
(this.rowHeaderTable&&this._resizeRowsImpl(this.rowHeaderTable,"tr"),this.gridTable&&this._resizeRowsImpl(this.gridTable,"tr"),this.itemContainerTable&&this._resizeRowsImpl(this.itemContainerTable,"tr"))},_computeRowsHeight:function(a,b){a=null==a?this.renderData:a;b=b||a.sheetHeight;b--;7==C("ie")&&(b-=a.rowCount);if(1==a.rowCount)a.rowHeight=b,a.rowHeightFirst=b,a.rowHeightLast=b;else{var c=null==a.expandedRow?a.rowCount:a.rowCount-1,d=b/c;var f=b-Math.floor(d)*c;c=Math.abs(b-Math.ceil(d)*c);b=
1;f<c?(d=Math.floor(d),c=f):(b=-1,d=Math.ceil(d));f=d+b*Math.floor(c/2);a.rowHeight=d;a.rowHeightFirst=f;a.rowHeightLast=f+c%2*b}},_getRowHeight:function(a){var b=this.renderData;return a==b.expandedRow?b.expandedRowHeight:0==b.expandedRow&&1==a||0==a?b.rowHeightFirst:b.expandedRow==this.renderData.rowCount-1&&a==this.renderData.rowCount-2||a==this.renderData.rowCount-1?b.rowHeightLast:b.rowHeight},_resizeRowsImpl:function(a,b){dojo.query(b,a).forEach(function(c,d){u.set(c,"height",this._getRowHeight(d)+
"px")},this)},_setHorizontalRendererAttr:function(a){this._destroyRenderersByKind("horizontal");this._set("horizontalRenderer",a)},_setLabelRendererAttr:function(a){this._destroyRenderersByKind("label");this._set("labelRenderer",a)},_destroyExpandRenderer:function(a){a.destroyRecursive&&a.destroyRecursive();F.destroy(a.domNode)},_setExpandRendererAttr:function(a){for(;0<this._ddRendererList.length;)this._destroyExpandRenderer(this._ddRendererList.pop());var b=this._ddRendererPool;if(b)for(;0<b.length;)this._destroyExpandRenderer(b.pop());
this._set("expandRenderer",a)},_ddRendererList:null,_ddRendererPool:null,_getExpandRenderer:function(a,b,c,d,f){if(null==this.expandRenderer)return null;var e=this._ddRendererPool.pop();null==e&&(e=new this.expandRenderer);this._ddRendererList.push(e);e.set("owner",this);e.set("date",a);e.set("items",b);e.set("rowIndex",c);e.set("columnIndex",d);e.set("expanded",f);return e},_recycleExpandRenderers:function(a){for(var b=0;b<this._ddRendererList.length;b++){var c=this._ddRendererList[b];c.set("Up",
!1);c.set("Down",!1);a&&c.domNode.parentNode.removeChild(c.domNode);u.set(c.domNode,"display","none")}this._ddRendererPool=this._ddRendererPool.concat(this._ddRendererList);this._ddRendererList=[]},_defaultItemToRendererKindFunc:function(a){return 1440<=Math.abs(this.renderData.dateModule.difference(a.startTime,a.endTime,"minute"))?"horizontal":"label"},naturalRowsHeight:null,_roundItemToDay:function(a){var b=a.startTime;a=a.endTime;this.isStartOfDay(b)||(b=this.floorToDay(b,!1,this.renderData));
this.isStartOfDay(a)||(a=this.renderData.dateModule.add(a,"day",1),a=this.floorToDay(a,!0));return{startTime:b,endTime:a}},_sortItemsFunction:function(a,b){this.roundToDay&&(a=this._roundItemToDay(a),b=this._roundItemToDay(b));var c=this.dateModule.compare(a.startTime,b.startTime);0==c&&(c=-1*this.dateModule.compare(a.endTime,b.endTime));return c},_overlapLayoutPass3:function(a){for(var b=0,c=0,d=[],f=y.position(this.gridTable).x,e=0;e<this.renderData.columnCount;e++){var h=!1;c=y.position(this._getCellAt(0,
e));b=c.x-f;c=b+c.w;for(var g=a.length-1;0<=g&&!h;g--)for(var m=0;m<a[g].length;m++)if(h=a[g][m],h=h.start<c&&b<h.end){d[e]=g+1;break}h||(d[e]=0)}return d},applyRendererZIndex:function(a,b,c,d,f,e){u.set(b.container,{zIndex:f||d?b.renderer.mobile?100:0:void 0==a.lane?1:a.lane+1})},_layoutDecorationRenderers:function(a){null==a||null==a.decorationItems||0>=a.rowHeight||(this.gridTable&&null==this._expandAnimation&&null!=this.horizontalDecorationRenderer?(this._layoutStep=a.columnCount,this.renderData.gridTablePosX=
y.position(this.gridTable).x,this.inherited(arguments)):this.decorationRendererManager.recycleItemRenderers())},_layoutRenderers:function(a){null==a||null==a.items||0>=a.rowHeight||(!this.gridTable||null!=this._expandAnimation||null==this.horizontalRenderer&&null==this.labelRenderer?this._recycleItemRenderers():(this.renderData.gridTablePosX=y.position(this.gridTable).x,this._layoutStep=a.columnCount,this._recycleExpandRenderers(),this._hiddenItems=[],this._offsets=[],this.naturalRowsHeight=[],this.inherited(arguments)))},
_offsets:null,_layoutInterval:function(a,b,c,d,f,e){if(null!=this.renderData.cells)if("dataItems"===e){var h=[];a=[];for(var g=0;g<f.length;g++){var m=f[g],l=this._itemToRendererKind(m);"horizontal"==l?h.push(m):"label"==l&&a.push(m)}f=this.getExpandedRowIndex();if(-1==f||f==b){f=[];g=null;m=[];if(0<h.length&&this.horizontalRenderer){g=this._createHorizontalLayoutItems(b,c,d,h,e);var k=this._computeHorizontalOverlapLayout(g,m)}h=[];if(0<a.length&&this.labelRenderer){var n=this._createLabelLayoutItems(b,
c,d,a);this._computeLabelOffsets(n,h)}c=this._computeColHasHiddenItems(b,m,h);null!=g&&this._layoutHorizontalItemsImpl(b,g,k,c,f,e);null!=n&&this._layoutLabelItemsImpl(b,n,c,f,m,e);this._layoutExpandRenderers(b,c,f);this._hiddenItems[b]=f}}else this.horizontalDecorationRenderer&&(g=this._createHorizontalLayoutItems(b,c,d,f,e),null!=g&&this._layoutHorizontalItemsImpl(b,g,null,!1,null,e))},_createHorizontalLayoutItems:function(a,b,c,d,f){var e=this.renderData,h=e.dateModule,g=e.rtl?-1:1,m=[];f="decorationItems"===
f;for(var l=0;l<d.length;l++){var k=d[l],n=this.computeRangeOverlap(e,k.startTime,k.endTime,b,c),p=h.difference(b,this.floorToDay(n[0],!1,e),"day"),z=e.dates[a][p],q=y.position(this._getCellAt(a,p,!1)),B=q.x-e.gridTablePosX;e.rtl&&(B+=q.w);if(f&&!k.isAllDay||!f&&!this.roundToDay&&!k.allDay)B+=g*this.computeProjectionOnDate(e,z,n[0],q.w);B=Math.ceil(B);var A=h.difference(b,this.floorToDay(n[1],!1,e),"day");if(A>e.columnCount-1){q=y.position(this._getCellAt(a,e.columnCount-1,!1));var v=e.rtl?q.x-e.gridTablePosX:
q.x-e.gridTablePosX+q.w}else z=e.dates[a][A],q=y.position(this._getCellAt(a,A,!1)),v=q.x-e.gridTablePosX,e.rtl&&(v+=q.w),!f&&this.roundToDay?this.isStartOfDay(n[1])||(v+=g*q.w):v+=g*this.computeProjectionOnDate(e,z,n[1],q.w);v=Math.floor(v);e.rtl&&(z=v,v=B,B=z);v>B&&(k=r.mixin({start:B,end:v,range:n,item:k,startOffset:p,endOffset:A},k),m.push(k))}return m},_computeHorizontalOverlapLayout:function(a,b){var c=this.renderData,d=this.horizontalRendererHeight;a=this.computeOverlapping(a,this._overlapLayoutPass3);
for(var f=this.percentOverlap/100,e=0;e<c.columnCount;e++){var h=a.addedPassRes[e],g=c.rtl?c.columnCount-e-1:e;b[g]=0==f?0==h?0:1==h?d:d+(h-1)*(d+this.verticalGap):0==h?0:h*d-(h-1)*f*d+this.verticalGap;b[g]+=this.cellPaddingTop}return a},_createLabelLayoutItems:function(a,b,c,d){if(null!=this.labelRenderer){for(var f=this.renderData,e=f.dateModule,h=[],g=0;g<d.length;g++){var m=d[g];a=this.floorToDay(m.startTime,!1,f);for(var l=this.dateModule.compare;-1==l(a,m.endTime)&&-1==l(a,c);){var k=e.add(a,
"day",1);k=this.floorToDay(k,!0);k=this.computeRangeOverlap(f,m.startTime,m.endTime,a,k);var n=e.difference(b,this.floorToDay(k[0],!1,f),"day");if(n>=this.columnCount)break;if(0<=n){var p=h[n];null==p&&(p=[],h[n]=p);p.push(r.mixin({startOffset:n,range:k,item:m},m))}a=e.add(a,"day",1);this.floorToDay(a,!0)}}return h}},_computeLabelOffsets:function(a,b){for(var c=0;c<this.renderData.columnCount;c++)b[c]=null==a[c]?0:a[c].length*(this.labelRendererHeight+this.verticalGap)},_computeColHasHiddenItems:function(a,
b,c){for(var d=[],f=this._getRowHeight(a),e,h=0,g=0;g<this.renderData.columnCount;g++)e=null==b||null==b[g]?this.cellPaddingTop:b[g],e+=null==c||null==c[g]?0:c[g],e>h&&(h=e),d[g]=e>f;this.naturalRowsHeight[a]=h;return d},_layoutHorizontalItemsImpl:function(a,b,c,d,f,e){c=this.renderData.cells[a];a=this._getRowHeight(a);for(var h=this.horizontalRendererHeight,g=this.percentOverlap/100,m=0;m<b.length;m++){var l=b[m],k=l.lane;if("dataItems"===e){var n=this.cellPaddingTop;n=0==g?n+k*(h+this.verticalGap):
n+k*(h-g*h);k=!1;var p=a;if(this.expandRenderer){for(p=l.startOffset;p<=l.endOffset;p++)if(d[p]){k=!0;break}p=k?a-this.expandRendererHeight:a}if(n+h<=p){k=this._createRenderer(l,"horizontal",this.horizontalRenderer,"dojoxCalendarHorizontal");var z=(p=this.isItemBeingEdited(l)&&!this.liveLayout&&this._isEditing)?a-this.cellPaddingTop:h,q=l.end-l.start;9<=C("ie")&&l.start+q<this.itemContainer.offsetWidth&&q++;u.set(k.container,{top:(p?this.cellPaddingTop:n)+"px",left:l.start+"px",width:q+"px",height:z+
"px"});this._applyRendererLayout(l,k,c,q,z,"horizontal")}else for(n=l.startOffset;n<l.endOffset;n++)null==f[n]?f[n]=[l.item]:f[n].push(l.item)}else k=this.decorationRendererManager.createRenderer(l,"horizontal",this.horizontalDecorationRenderer,"dojoxCalendarDecoration"),z=a,q=l.end-l.start,9<=C("ie")&&l.start+q<this.itemContainer.offsetWidth&&q++,u.set(k.container,{top:"0",left:l.start+"px",width:q+"px",height:z+"px"}),w.place(k.container,c),u.set(k.container,"display","block")}},_layoutLabelItemsImpl:function(a,
b,c,d,f){for(var e,h,g=this.renderData,m=g.cells[a],l=this._getRowHeight(a),k=this.labelRendererHeight,n=y.getMarginBox(this.itemContainer).w,p=0;p<b.length;p++)if(e=b[p],null!=e){e.sort(r.hitch(this,function(P,Q){return this.dateModule.compare(P.range[0],Q.range[0])}));var z=this.expandRenderer?c[p]?l-this.expandRendererHeight:l:l;h=null==f||null==f[p]?this.cellPaddingTop:f[p]+this.verticalGap;for(var q=y.position(this._getCellAt(a,p)),B=q.x-g.gridTablePosX,A=0;A<e.length;A++){if(h+k+this.verticalGap<=
z){var v=e[A];r.mixin(v,{start:B,end:B+q.w});var H=this._createRenderer(v,"label",this.labelRenderer,"dojoxCalendarLabel"),I=this.isItemBeingEdited(v)&&!this.liveLayout&&this._isEditing,J=I?this._getRowHeight(a)-this.cellPaddingTop:k;g.rtl&&(v.start=n-v.end,v.end=v.start+q.w);u.set(H.container,{top:(I?this.cellPaddingTop:h)+"px",left:v.start+"px",width:q.w+"px",height:J+"px"});this._applyRendererLayout(v,H,m,q.w,J,"label")}else break;h+=k+this.verticalGap}for(;A<e.length;A++)null==d[p]?d[p]=[e[A]]:
d[p].push(e[A])}},_applyRendererLayout:function(a,b,c,d,f,e){var h=this.isItemBeingEdited(a),g=this.isItemSelected(a),m=this.isItemHovered(a),l=this.isItemFocused(a),k=b.renderer;k.set("hovered",m);k.set("selected",g);k.set("edited",h);k.set("focused",this.showFocus?l:!1);k.set("moveEnabled",this.isItemMoveEnabled(a._item,e));k.set("storeState",this.getItemStoreState(a));"label"!=e&&k.set("resizeEnabled",this.isItemResizeEnabled(a,e));this.applyRendererZIndex(a,b,m,g,h,l);k.updateRendering&&k.updateRendering(d,
f);w.place(b.container,c);u.set(b.container,"display","block")},_getCellAt:function(a,b,c){void 0!=c&&1!=c||this.isLeftToRight()||(b=this.renderData.columnCount-1-b);return this.gridTable.childNodes[0].childNodes[a].childNodes[b]},_layoutExpandRenderers:function(a,b,c){if(this.expandRenderer){var d=this.renderData;if(d.expandedRow==a)null!=d.expandedRowCol&&-1!=d.expandedRowCol&&this._layoutExpandRendererImpl(d.expandedRow,d.expandedRowCol,null,!0);else if(null==d.expandedRow)for(var f=0;f<d.columnCount;f++)b[f]&&
this._layoutExpandRendererImpl(a,d.rtl?d.columnCount-1-f:f,c[f],!1)}},_layoutExpandRendererImpl:function(a,b,c,d){var f=this.renderData,e=r.clone(f.dates[a][b]),h=null,g=f.cells[a];h=this._getExpandRenderer(e,c,a,b,d);a=y.position(this._getCellAt(a,b));a.x-=f.gridTablePosX;this.layoutExpandRenderer(h,e,c,a,this.expandRendererHeight);w.place(h.domNode,g);u.set(h.domNode,"display","block")},layoutExpandRenderer:function(a,b,c,d,f){u.set(a.domNode,{left:d.x+"px",width:d.w+"px",height:f+"px",top:d.h-
f-1+"px"})},_onItemEditBeginGesture:function(a){var b=this._edProps,c=b.editedItem,d=a.dates,f=this.newDate("resizeEnd"==b.editKind?c.endTime:c.startTime);"label"!=b.rendererKind&&"move"==a.editKind&&(c.allDay||this.roundToDay)&&(b.dayOffset=this.renderData.dateModule.difference(this.floorToDay(d[0],!1,this.renderData),f,"day"));this.inherited(arguments)},_computeItemEditingTimes:function(a,b,c,d,f){var e=this.renderData.dateModule,h=this._edProps;if("label"!=c)if(a.allDay||this.roundToDay){var g=
this.isStartOfDay(d[0]);switch(b){case "resizeEnd":!g&&a.allDay&&(d[0]=e.add(d[0],"day",1));case "resizeStart":g||(d[0]=this.floorToDay(d[0],!0));break;case "move":d[0]=e.add(d[0],"day",h.dayOffset);break;case "resizeBoth":g||(d[0]=this.floorToDay(d[0],!0)),this.isStartOfDay(d[1])||(d[1]=this.floorToDay(e.add(d[1],"day",1),!0))}}else d=this.inherited(arguments);return d},getTime:function(a,b,c,d){var f=this.renderData;null!=a&&(c=y.position(this.itemContainer,!0),a.touches?(d=void 0==d?0:d,b=a.touches[d].pageX-
c.x,c=a.touches[d].pageY-c.y):(b=a.pageX-c.x,c=a.pageY-c.y));d=y.getContentBox(this.itemContainer);0>b?b=0:b>d.w&&(b=d.w-1);0>c?c=0:c>d.h&&(c=d.h-1);a=y.getMarginBox(this.itemContainer).w/f.columnCount;c=null==f.expandedRow?Math.floor(c/(y.getMarginBox(this.itemContainer).h/f.rowCount)):f.expandedRow;d=y.getContentBox(this.itemContainer);f.rtl&&(b=d.w-b);d=Math.floor(b/a);b=Math.floor(1440*(b-d*a)/a);a=null;c<f.dates.length&&d<this.renderData.dates[c].length&&(a=this.newDate(this.renderData.dates[c][d]),
a=this.renderData.dateModule.add(a,"minute",b));return a},_onGridMouseUp:function(a){this.inherited(arguments);this._gridMouseDown&&(this._gridMouseDown=!1,this._onGridClick({date:this.getTime(a),triggerEvent:a}))},_onGridTouchEnd:function(a){this.inherited(arguments);var b=this._gridProps;b&&(this._isEditing||(b.fromItem||b.editingOnStart||this.selectFromEvent(a,null,null,!0),b.fromItem||(this._pendingDoubleTap&&this._pendingDoubleTap.grid?(this._onGridDoubleClick({date:this.getTime(this._gridProps.event),
triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(r.hitch(this,function(){delete this._pendingDoubleTap}),this.doubleTapDelay)}))),this._gridProps=null)},_onRowHeaderClick:function(a){this._dispatchCalendarEvt(a,"onRowHeaderClick")},onRowHeaderClick:function(a){},expandRendererClickHandler:function(a,
b){L.stop(a);var c=b.get("rowIndex"),d=b.get("columnIndex");this._onExpandRendererClick(r.mixin(this._createItemEditEvent(),{rowIndex:c,columnIndex:d,renderer:b,triggerEvent:a,date:this.renderData.dates[c][d]}))},onExpandRendererClick:function(a){},_onExpandRendererClick:function(a){this._dispatchCalendarEvt(a,"onExpandRendererClick");a.isDefaultPrevented()||(-1!=this.getExpandedRowIndex()?this.collapseRow():this.expandRow(a.rowIndex,a.columnIndex))},snapUnit:"minute",snapSteps:15,minDurationUnit:"minute",
minDurationSteps:15,triggerExtent:3,liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!1})});