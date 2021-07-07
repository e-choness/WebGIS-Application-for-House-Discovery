//>>built
define("dojo/_base/kernel dojo/_base/lang ../_Widget ../_Container ./_ContentPaneResizeMixin dojo/string dojo/html dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom dojo/dom-attr dojo/dom-construct dojo/_base/xhr dojo/i18n dojo/when dojo/i18n!../nls/loading".split(" "),function(k,d,q,r,t,m,n,g,u,l,v,A,w,x,y,z){return u("dijit.layout.ContentPane",[q,r,t],{href:"",content:"",extractContent:!1,parseOnLoad:!0,parserScope:k._scopeName,preventCache:!1,preload:!1,refreshOnShow:!1,loadingMessage:"\x3cspan class\x3d'dijitContentPaneLoading'\x3e\x3cspan class\x3d'dijitInline dijitIconLoading'\x3e\x3c/span\x3e${loadingState}\x3c/span\x3e",
errorMessage:"\x3cspan class\x3d'dijitContentPaneError'\x3e\x3cspan class\x3d'dijitInline dijitIconError'\x3e\x3c/span\x3e${errorState}\x3c/span\x3e",isLoaded:!1,baseClass:"dijitContentPane",ioArgs:{},onLoadDeferred:null,_setTitleAttr:null,stopParser:!0,template:!1,markupFactory:function(a,c,b){var e=new b(a,c);return!e.href&&e._contentSetter&&e._contentSetter.parseDeferred&&!e._contentSetter.parseDeferred.isFulfilled()?e._contentSetter.parseDeferred.then(function(){return e}):e},create:function(a,
c){if(!(a&&a.template||!c||"href"in a||"content"in a)){c=v.byId(c);for(var b=c.ownerDocument.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);a=d.delegate(a,{content:b})}this.inherited(arguments,[a,c])},postMixInProperties:function(){this.inherited(arguments);var a=y.getLocalization("dijit","loading",this.lang);this.loadingMessage=m.substitute(this.loadingMessage,a);this.errorMessage=m.substitute(this.errorMessage,a)},buildRendering:function(){this.inherited(arguments);this.containerNode||
(this.containerNode=this.domNode);this.domNode.removeAttribute("title")},startup:function(){this.inherited(arguments);this._contentSetter&&g.forEach(this._contentSetter.parseResults,function(a){a._started||a._destroyed||!d.isFunction(a.startup)||(a.startup(),a._started=!0)},this)},_startChildren:function(){g.forEach(this.getChildren(),function(a){a._started||a._destroyed||!d.isFunction(a.startup)||(a.startup(),a._started=!0)});this._contentSetter&&g.forEach(this._contentSetter.parseResults,function(a){a._started||
a._destroyed||!d.isFunction(a.startup)||(a.startup(),a._started=!0)},this)},setHref:function(a){k.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.","","2.0");return this.set("href",a)},_setHrefAttr:function(a){this.cancel();this.onLoadDeferred=new l(d.hitch(this,"cancel"));this.onLoadDeferred.then(d.hitch(this,"onLoad"));this._set("href",a);this.preload||this._created&&this._isShown()?this._load():this._hrefChanged=!0;return this.onLoadDeferred},setContent:function(a){k.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.",
"","2.0");this.set("content",a)},_setContentAttr:function(a){this._set("href","");this.cancel();this.onLoadDeferred=new l(d.hitch(this,"cancel"));this._created&&this.onLoadDeferred.then(d.hitch(this,"onLoad"));this._setContent(a||"");this._isDownloaded=!1;return this.onLoadDeferred},_getContentAttr:function(){return this.containerNode.innerHTML},cancel:function(){this._xhrDfd&&-1==this._xhrDfd.fired&&this._xhrDfd.cancel();delete this._xhrDfd;this.onLoadDeferred=null},destroy:function(){this.cancel();
this.inherited(arguments)},destroyRecursive:function(a){this._beingDestroyed||this.inherited(arguments)},_onShow:function(){this.inherited(arguments);if(this.href&&!this._xhrDfd&&(!this.isLoaded||this._hrefChanged||this.refreshOnShow))return this.refresh()},refresh:function(){this.cancel();this.onLoadDeferred=new l(d.hitch(this,"cancel"));this.onLoadDeferred.then(d.hitch(this,"onLoad"));this._load();return this.onLoadDeferred},_load:function(){this._setContent(this.onDownloadStart(),!0);var a=this,
c={preventCache:this.preventCache||this.refreshOnShow,url:this.href,handleAs:"text"};d.isObject(this.ioArgs)&&d.mixin(c,this.ioArgs);var b=this._xhrDfd=(this.ioMethod||x.get)(c),e;b.then(function(f){e=f;try{return a._isDownloaded=!0,a._setContent(f,!1)}catch(h){a._onError("Content",h)}},function(f){b.canceled||a._onError("Download",f);delete a._xhrDfd;return f}).then(function(){a.onDownloadEnd();delete a._xhrDfd;return e});delete this._hrefChanged},_onLoadHandler:function(a){this._set("isLoaded",
!0);try{this.onLoadDeferred.resolve(a)}catch(c){console.error("Error "+(this.widgetId||this.id)+" running custom onLoad code: "+c.message)}},_onUnloadHandler:function(){this._set("isLoaded",!1);try{this.onUnload()}catch(a){console.error("Error "+this.widgetId+" running custom onUnload code: "+a.message)}},destroyDescendants:function(a){this.isLoaded&&this._onUnloadHandler();var c=this._contentSetter;g.forEach(this.getChildren(),function(b){b.destroyRecursive?b.destroyRecursive(a):b.destroy&&b.destroy(a);
b._destroyed=!0});c&&(g.forEach(c.parseResults,function(b){b._destroyed||(b.destroyRecursive?b.destroyRecursive(a):b.destroy&&b.destroy(a),b._destroyed=!0)}),delete c.parseResults);a||w.empty(this.containerNode);delete this._singleChild},_setContent:function(a,c){a=this.preprocessContent(a);this.destroyDescendants();var b=this._contentSetter;b&&b instanceof n._ContentSetter||(b=this._contentSetter=new n._ContentSetter({node:this.containerNode,_onError:d.hitch(this,this._onError),onContentError:d.hitch(this,
function(h){h=this.onContentError(h);try{this.containerNode.innerHTML=h}catch(p){console.error("Fatal "+this.id+" could not change content due to "+p.message,p)}})}));var e=d.mixin({cleanContent:this.cleanContent,extractContent:this.extractContent,parseContent:!a.domNode&&this.parseOnLoad,parserScope:this.parserScope,startup:!1,dir:this.dir,lang:this.lang,textDir:this.textDir},this._contentSetterParams||{});e=b.set(d.isObject(a)&&a.domNode?a.domNode:a,e);var f=this;return z(e&&e.then?e:b.parseDeferred,
function(){delete f._contentSetterParams;c||(f._started&&(f._startChildren(),f._scheduleLayout()),f._onLoadHandler(a))})},preprocessContent:function(a){return a},_onError:function(a,c,b){this.onLoadDeferred.reject(c);a=this["on"+a+"Error"].call(this,c);b?console.error(b,c):a&&this._setContent(a,!0)},onLoad:function(){},onUnload:function(){},onDownloadStart:function(){return this.loadingMessage},onContentError:function(){},onDownloadError:function(){return this.errorMessage},onDownloadEnd:function(){}})});