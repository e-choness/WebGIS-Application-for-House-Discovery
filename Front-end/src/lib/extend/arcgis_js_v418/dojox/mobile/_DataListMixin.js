//>>built
define("dojo/_base/array dojo/_base/declare dijit/registry ./_DataMixin ./ListItem dojo/has dojo/has!dojo-bidi?dojox/mobile/bidi/_StoreListMixin".split(" "),function(f,k,l,d,m,g,n){d=k(g("dojo-bidi")?"dojox.mobile._NonBidiDataListMixin":"dojox.mobile._DataListMixin",d,{append:!1,itemMap:null,itemRenderer:m,buildRendering:function(){this.inherited(arguments);if(this.store){var a=this.store;this.store=null;this.setStore(a,this.query,this.queryOptions)}},createListItem:function(a){var b={},c=this.store.getLabelAttributes(a),
h=c?c[0]:null;f.forEach(this.store.getAttributes(a),function(e){e===h?b.label=this.store.getLabel(a):b[this.itemMap&&this.itemMap[e]||e]=this.store.getValue(a,e)},this);g("dojo-bidi")&&"undefined"==typeof b.dir&&(b.dir=this.isLeftToRight()?"ltr":"rtl");c=new this.itemRenderer(b);a._widgetId=c.id;return c},generateList:function(a,b){this.append||f.forEach(this.getChildren(),function(c){c.destroyRecursive()});f.forEach(a,function(c,h){this.addChild(this.createListItem(c))},this)},onComplete:function(a,
b){this.generateList(a,b)},onError:function(a,b){},onSet:function(a,b,c,h){},onNew:function(a,b){this.addChild(this.createListItem(a))},onDelete:function(a){l.byId(a._widgetId).destroyRecursive()},onStoreClose:function(a){this.store.clearOnClose&&this.refresh()}});return g("dojo-bidi")?k("dojox.mobile._DataListMixin",[d,n]):d});