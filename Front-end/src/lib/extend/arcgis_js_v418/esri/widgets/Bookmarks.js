// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/has ../core/Logger ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/aliasOf ../core/accessorSupport/decorators/cast ../core/deprecate ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/urlUtils ../core/uuid ../portal/support/resourceExtension ../core/events ../core/Handles ../core/watchUtils ../webdoc/support/Thumbnail ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/renderable ./support/decorators/vmEvent ../chunks/index ./Widget ../chunks/sortable.esm ./Bookmarks/BookmarksUserState ./Bookmarks/BookmarksViewModel ./FeatureTable/Grid/support/ButtonMenuItem ./FeatureTable/Grid/support/ButtonMenu".split(" "),
function(A,k,h,E,l,p,F,u,O,G,P,Q,R,H,I,q,J,S,v,n,K,e,L,M,w,B,x,N){const C={addBookmark:!0,thumbnail:!0},y=/^https:\/\/.*/i,z=E.getLogger("esri.widgets.Bookmarks");h=function(D){function r(a,b){a=D.call(this,a,b)||this;a._handles=new I;a._addInputNode=null;a._editInputNode=null;a._urlEditInputNode=null;a._addBookmarkButtonNode=null;a._focusAddBookmarkButton=!1;a._focusEditInputBox=!1;a._focusAddInputBox=!1;a._focusUrlEditInputBox=!1;a._sortable=null;a._sortableNode=null;a._focusSortUid=null;a._selectedSortUid=
null;a._sortableSavedItems=null;a._userState=null;a.defaultCreateOptions=null;a.defaultEditOptions=null;a.bookmarks=null;a.disabled=!1;a.editingEnabled=!1;a.goToOverride=null;a.iconClass="esri-icon-bookmark";a.label=void 0;a.messages=null;a.messagesCommon=null;a.messagesUnits=null;a.view=null;a.viewModel=new B;a.visibleElements={...C};return a}A._inheritsLoose(r,D);var d=r.prototype;d.initialize=function(){this.own([q.init(this,"viewModel.bookmarks",()=>this._bookmarksInitialized()),q.init(this,"editingEnabled",
()=>this._toggleSorting())])};d.destroy=function(){this._destroySortable();this._handles.destroy();this._handles=null;this._editMenu.destroy()};d.castVisibleElements=function(a){return{...C,...a}};d.endAddBookmark=function(){this._userState=null};d.goTo=function(a){return this.viewModel.goTo(a)};d.render=function(){var {state:a}=this.viewModel;a="loading"===a?this.renderLoading():this.renderBookmarks();return e.jsx("div",{class:this.classes("esri-bookmarks esri-widget--panel","esri-widget",{["esri-widget--disabled"]:this.disabled})},
a)};d.startAddBookmark=function(){this._userState=new w({state:"add"});this._focusAddInputBox=!0;this.scheduleRender()};d.renderLoading=function(){return e.jsx("div",{class:"esri-bookmarks__loader-container",key:"loader"},e.jsx("div",{class:"esri-bookmarks__loader"}))};d.renderNoBookmarksContainer=function(){const {messages:a}=this;return e.jsx("div",{class:"esri-widget__content--empty",key:"no-bookmarks"},e.jsx("span",{"aria-hidden":"true",class:this.classes("esri-widget__no-bookmark-icon","esri-icon-bookmark")}),
e.jsx("h1",{class:this.classes("esri-widget__heading","esri-bookmarks__no-bookmarks-heading")},null==a?void 0:a.noBookmarksHeading),e.jsx("p",{class:"esri-bookmarks__no-bookmarks-description"},null==a?void 0:a.noBookmarksDescription))};d.renderAddBookmarkLoading=function(){var a;return e.jsx("div",{key:"adding-bookmark",class:"esri-bookmarks__adding-bookmark"},e.jsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-loading-indicator","esri-rotating")}),null==(a=this.messages)?void 0:a.addingBookmark)};
d.renderBookmarkItems=function(a){if(!a)return null;const {_userState:b,editingEnabled:c}=this;return a.map(f=>c&&f&&b&&("edit"===b.state||"edit-thumbnail"===b.state)&&b.bookmark===f?"edit-thumbnail"===b.state?this.renderEditingBookmarkUrl(b.editedBookmark):this.renderEditingBookmark(b.editedBookmark):this.renderBookmark(f)).toArray()};d.renderBookmarksContainer=function(a){var b;const {_userState:c,editingEnabled:f}=this;var g="add"===(null==c?void 0:c.state);const m=f&&!g?this.renderAddBookmarkButton():
null;g=f?g&&c.loading?this.renderAddBookmarkLoading():"add"===(null==c?void 0:c.state)?this.renderAddingBookmark():null:null;return[e.jsx("ul",{key:"bookmark-list","aria-label":null==(b=this.messages)?void 0:b.widgetLabel,class:this.classes("esri-bookmarks__list",{["esri-bookmarks__list--sortable"]:this.editingEnabled}),afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this},this.renderBookmarkItems(a)),m,g]};d.renderAddBookmarkButton=function(){var a;
return this.visibleElements.addBookmark?e.jsx("div",{key:"add-bookmark-item",class:"esri-bookmarks__add-bookmark"},e.jsx("button",{class:this.classes("esri-button","esri-button--tertiary","esri-bookmarks__add-bookmark-button"),onclick:this.startAddBookmark,afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,"data-node-ref":"_addBookmarkButtonNode",bind:this,type:"button"},e.jsx("span",{"aria-hidden":"true",class:this.classes("esri-bookmarks__add-bookmark-icon","esri-icon-plus")}),
null==(a=this.messages)?void 0:a.addBookmark)):null};d.renderBookmarks=function(){var {bookmarks:a}=this.viewModel,b=a&&a.filter(Boolean);b=(a=b&&b.length)||this.editingEnabled?this.renderBookmarksContainer(b):null;return[a?null:this.renderNoBookmarksContainer(),b]};d.renderEditContainer=function(a){const {messagesCommon:b}=this;return e.jsx("div",{key:"edit-container"},e.jsx("button",{title:null==b?void 0:b.edit,"aria-label":null==b?void 0:b.edit,"data-bookmark":a,onclick:this._showEditBookmarkForm,
bind:this,class:"esri-bookmarks__bookmark-edit-button",type:"button"},e.jsx("span",{"aria-hidden":"true",class:"esri-icon-edit"})))};d.renderDragHandle=function(a){const {messagesCommon:b}=this;return e.jsx("div",Object.assign({role:"button",tabIndex:0,key:"drag-handle",bind:this,class:"esri-bookmarks_bookmark-drag-handle",onkeydown:this._dragHandleKeydown,afterCreate:this._focusDragHandle,afterUpdate:this._focusDragHandle,onblur:this._dragHandleBlur,"aria-pressed":this._selectedSortUid===a.uid?"true":
"false","aria-label":null==b?void 0:b.dragHandleLabel,title:null==b?void 0:b.dragHandleTitle},{["data-bookmark-uid"]:a.uid}),e.jsx("span",{"aria-hidden":"true",class:this.classes("esri-bookmarks_bookmark-drag-handle-icon","esri-icon-handle-vertical")}))};d.renderBookmarkImageIcon=function(){return e.jsx("span",{"aria-hidden":"true",class:this.classes("esri-bookmarks__bookmark-icon","esri-icon-bookmark")})};d.renderBookmarkImage=function(a){const {visibleElements:b}=this;({thumbnail:a}=a);a=a&&a.url||
"";return b.thumbnail&&a?e.jsx("img",{src:a,alt:"",class:"esri-bookmarks__image"}):null};d.renderBookmarkButton=function(a){var {messagesCommon:b}=this,{name:c}=a;b=c||(null==b?void 0:b.untitled);c=e.jsx("div",{class:"esri-bookmarks__bookmark-image-container"},this.renderBookmarkImage(a)||this.renderBookmarkImageIcon());return e.jsx("button",{key:"bookmark-button",class:"esri-bookmarks__bookmark-button",bind:this,"data-bookmark":a,onclick:this._goToBookmark,type:"button"},c,e.jsx("span",{class:"esri-bookmarks__bookmark-name"},
b))};d.renderBookmark=function(a){var {activeBookmark:b}=this.viewModel;b={["esri-bookmarks__bookmark--active"]:b===a};const c=this.editingEnabled?this.renderEditContainer(a):null,f={["data-bookmark-uid"]:a.uid},g=this.editingEnabled?this.renderDragHandle(a):null;return e.jsx("li",Object.assign({key:a,class:this.classes("esri-bookmarks__bookmark",b)},f),g,this.renderBookmarkButton(a),c)};d.renderEditingBookmarkName=function(a){const {messages:b,_userState:c}=this,f="name-required"===c.validationState;
return e.jsx("label",{class:"esri-bookmarks__authoring-label"},null==b?void 0:b.title,f?e.jsx("strong",null,null==b?void 0:b.invalidTitle):null,e.jsx("input",{required:!0,bind:this,class:this.classes("esri-input",f?"esri-bookmarks__authoring-input--invalid":null),type:"text",value:a.name,afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,"data-bookmark":a,"data-node-ref":"_editInputNode",placeholder:null==b?void 0:b.titlePlaceholder}))};d.renderEditingBookmarkUrlActions=function(){const {messagesCommon:a}=
this;return e.jsx("div",{class:"esri-bookmarks__authoring-actions"},e.jsx("input",{type:"button",value:null==a?void 0:a.back,class:this.classes("esri-button","esri-button--tertiary"),onclick:this._closeUrlEditBookmarkForm,bind:this}),e.jsx("input",{class:"esri-button",type:"submit",value:null==a?void 0:a.add}))};d.renderEditingBookmarkActions=function(){const {messagesCommon:a}=this,{bookmark:b}=this._userState;return e.jsx("div",{class:"esri-bookmarks__authoring-actions"},e.jsx("input",{type:"button",
value:null==a?void 0:a.delete,class:this.classes("esri-button","esri-button--tertiary","esri-bookmarks__authoring-delete-button"),"data-bookmark":b,onclick:this._deleteBookmark,bind:this}),e.jsx("input",{type:"button",value:null==a?void 0:a.cancel,class:this.classes("esri-button","esri-button--tertiary"),onclick:this._closeEditBookmarkForm,bind:this}),e.jsx("input",{class:"esri-button",type:"submit",value:null==a?void 0:a.save}))};d.renderEditingBookmarkUrlInput=function(a){var b;const {messages:c,
_userState:f}=this;var g=null==(b=a.thumbnail)?void 0:b.url;b=y.test(g)?g:null;g="absolute-url-required"===f.validationState;return e.jsx("label",{class:"esri-bookmarks__authoring-label"},g?e.jsx("strong",null,null==c?void 0:c.invalidImageUrl):null,e.jsx("input",{required:!0,bind:this,class:this.classes("esri-input",g?"esri-bookmarks__authoring-input--invalid":null),type:"text",value:b,afterCreate:this._storeUrlEditInput,afterUpdate:this._focusUrlEditInput,"data-bookmark":a,"data-node-ref":"_urlEditInputNode",
title:null==c?void 0:c.imageUrlTooltip,placeholder:null==c?void 0:c.imageUrlPlaceholder}))};d.renderEditingBookmarkUrl=function(a){return e.jsx("li",Object.assign({key:"edit-bookmark-url-form",class:"esri-bookmarks__authoring-card"},{["data-bookmark-uid"]:a.uid}),e.jsx("form",{class:"esri-bookmarks__authoring-form",onsubmit:this._editBookmarkUrlSubmit,bind:this},this.renderEditingBookmarkUrlInput(a),this.renderEditingBookmarkUrlActions()))};d.renderEditingBookmark=function(a){return e.jsx("li",Object.assign({key:"edit-bookmark-form",
class:"esri-bookmarks__authoring-card"},{["data-bookmark-uid"]:a.uid}),e.jsx("form",{class:"esri-bookmarks__authoring-form",onsubmit:this._editBookmarkSubmit,bind:this},e.jsx("div",{class:"esri-bookmarks__authoring-container"},e.jsx("div",{class:"esri-bookmarks__bookmark-image-container"},this.renderBookmarkImage(a),this._editMenu.render()),this.renderEditingBookmarkName(a)),this.renderEditingBookmarkActions()))};d.renderAddingBookmarkName=function(){const {_userState:a,messages:b}=this,c="name-required"===
a.validationState;return e.jsx("label",{class:"esri-bookmarks__authoring-label"},null==b?void 0:b.title,c?e.jsx("strong",null,null==b?void 0:b.invalidTitle):null,e.jsx("input",{required:!0,bind:this,class:this.classes("esri-input",c?"esri-bookmarks__authoring-input--invalid":null),type:"text",afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,"data-node-ref":"_addInputNode",value:"",placeholder:null==b?void 0:b.titlePlaceholder}))};d.renderAddingBookmarkActions=function(){const {messagesCommon:a}=
this;return e.jsx("div",{class:this.classes("esri-bookmarks__authoring-actions")},e.jsx("input",{type:"button",value:null==a?void 0:a.cancel,class:this.classes("esri-button","esri-button--tertiary","esri-bookmarks__authoring-cancel-button"),onclick:this._endAddBookmark.bind(this),bind:this}),e.jsx("input",{class:"esri-button",type:"submit",value:null==a?void 0:a.add}))};d.renderAddingBookmark=function(){return e.jsx("div",{key:"add-bookmark-form",class:"esri-bookmarks__authoring-card"},e.jsx("form",
{class:"esri-bookmarks__authoring-form",onsubmit:this._addBookmarkSubmit,bind:this},this.renderAddingBookmarkName(),this.renderAddingBookmarkActions()))};d._dragHandleBlur=function(){this._selectedSortUid=null;this.scheduleRender()};d._dragHandleKeydown=function(a){a.stopPropagation();var {_sortableSavedItems:b}=this;const c=H.eventKey(a);if(-1!=="ArrowDown;ArrowUp;Escape;Tab; ;Enter".split(";").indexOf(c)){var {_sortable:f,_selectedSortUid:g}=this,m=f.toArray();a=a.target.getAttribute("data-bookmark-uid");
var t=m.indexOf(a);" "===c||"Enter"===c?(this._selectedSortUid=(m=g&&g===a)?null:a,this._sortableSavedItems=m?null:this._sortable.toArray(),this.scheduleRender()):"Tab"===c?(this._selectedSortUid=null,this.scheduleRender()):"Escape"===c&&b?(this._selectedSortUid=null,this._updateSortItems(b,f,a),this.scheduleRender()):-1!==t&&g&&(b="ArrowUp"===c?t-1:t+1,b>=m.length||-1>=b||(m.splice(b,0,m.splice(t,1)[0]),this._updateSortItems(m,f,a)))}};d._updateSortItems=function(a,b,c){b.sort(a);this._sortBookmarks(b);
this._selectedSortUid=this._focusSortUid=c};d._focusDragHandle=function(a){const {_focusSortUid:b}=this;a&&b&&a.getAttribute("data-bookmark-uid")===b&&(a.focus(),this._focusSortUid=null)};d._toggleSorting=function(){const {_sortable:a,_sortableNode:b,editingEnabled:c}=this;if(b)if(a)a.option("disabled",!c);else{const f=M.Sortable.create(b,{dataIdAttr:"data-bookmark-uid",handle:".esri-bookmarks_bookmark-drag-handle",group:"bookmarks",disabled:!c,onSort:()=>this._sortBookmarks(f)});this._sortable=f}};
d._sortNodeCreated=function(a){this._sortableNode=a;this._toggleSorting()};d._sortBookmarks=function(a){const {bookmarks:b}=this.viewModel;if(b){var c=a.toArray();b.sort((f,g)=>{f=c.indexOf(f.uid);g=c.indexOf(g.uid);return f>g?1:f<g?-1:0})}};d._destroySortable=function(){const {_sortable:a}=this;a&&a.destroy();this._sortable=null};d._endAddBookmark=function(){this._focusAddBookmarkButton=!0;this.endAddBookmark()};d._bookmarksInitialized=function(){const {_handles:a}=this;a.remove("bookmarks-init");
a.add(q.on(this,"viewModel.bookmarks","change",()=>this._bookmarksChanged()),"bookmarks-init")};d._bookmarksChanged=function(){var {bookmarks:a}=this.viewModel;const {_handles:b}=this;b.remove("bookmarks-change");a=a.map(c=>q.watch(c,["active","name","thumbnail.url"],()=>this.scheduleRender()));b.add(a,"bookmarks-change");this.scheduleRender()};d._showEditBookmarkForm=function(a){a=a.currentTarget["data-bookmark"];this._focusEditInputBox=!0;this._userState=new w({bookmark:a,state:"edit"});this.viewModel.goTo(a);
this.scheduleRender()};d._closeUrlEditBookmarkForm=function(){this._focusEditInputBox=!0;this._userState.state="edit"};d._closeEditBookmarkForm=function(){this._userState=null};d._addBookmarkSubmit=function(a){a.preventDefault();const {_addInputNode:b,_userState:c}=this,f=b&&b.value.trim();f?(c.loading=!0,this.viewModel.createBookmark().then(g=>{g.name=f;this.viewModel.bookmarks.add(g);this._endAddBookmark()})):c.validationState="name-required"};d._editBookmarkAndClose=async function(a,b){await this.viewModel.editBookmark(a,
b);this._closeEditBookmarkForm()};d._editBookmarkSubmit=function(a){a.preventDefault();const {_editInputNode:b,_userState:c}=this;(a=b&&b.value.trim())?(c.bookmark.name=a,c.bookmark.thumbnail=c.editedBookmark.thumbnail,this._editBookmarkAndClose(c.bookmark,{takeScreenshot:!1})):c.validationState="name-required"};d._storeAddBookmarkButton=function(a){this._addBookmarkButtonNode=a;this._focusAddBookmark()};d._storeEditInput=function(a){this._editInputNode=a;this._focusEditInput()};d._storeAddInput=
function(a){this._addInputNode=a;this._focusAddInput()};d._storeUrlEditInput=function(a){this._urlEditInputNode=a;this._focusUrlEditInput()};d._focusUrlEditInput=function(){this._urlEditInputNode&&this._focusUrlEditInputBox&&(this._focusUrlEditInputBox=!1,this._urlEditInputNode.focus())};d._focusAddInput=function(){this._addInputNode&&this._focusAddInputBox&&(this._focusAddInputBox=!1,this._addInputNode.focus())};d._focusAddBookmark=function(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&
(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())};d._focusEditInput=function(){this._editInputNode&&this._focusEditInputBox&&(this._focusEditInputBox=!1,this._editInputNode.focus())};d._deleteBookmark=function(a){this.viewModel.bookmarks.remove(a.currentTarget["data-bookmark"])};d._goToBookmark=function(a){a=a.currentTarget["data-bookmark"];this.endAddBookmark();this._closeEditBookmarkForm();this.viewModel.goTo(a)};d._refreshThumbnail=async function(){const {_userState:a,_editMenu:b,
viewModel:c}=this;a.validationState=void 0;await c.editBookmark(this._userState.editedBookmark,{takeScreenshot:!0,captureExtent:!1,captureViewpoint:!1,captureRotation:!1,captureScale:!1});b.open=!1;this._focusEditInputBox=!0;this.scheduleRender()};d._removeThumbnail=function(){const {_userState:a,_editMenu:b}=this;a.editedBookmark.thumbnail=null;a.validationState=void 0;b.open=!1;this._focusEditInputBox=!0;this.scheduleRender()};d._startUseImageUrl=function(){this._userState.state="edit-thumbnail";
this._editMenu.open=!1;this._focusUrlEditInputBox=!0;this.scheduleRender()};d._editBookmarkUrlSubmit=function(a){a.preventDefault();const {_urlEditInputNode:b,_userState:c}=this;a=b.value;y.test(a)?(a&&(c.editedBookmark.thumbnail=new J({url:a})),this._closeUrlEditBookmarkForm()):c.validationState="absolute-url-required"};A._createClass(r,[{key:"_editMenuItems",get:function(){var a,b;const {messages:c,_userState:f}=this;var g=null==f?void 0:null==(a=f.editedBookmark)?void 0:null==(b=a.thumbnail)?void 0:
b.url;a=new x({label:null==c?void 0:c.menu.refreshThumbnail,iconClass:"esri-icon-refresh",clickFunction:()=>this._refreshThumbnail()});b=new x({label:y.test(g)?null==c?void 0:c.menu.editImageUrl:null==c?void 0:c.menu.useImageUrl,iconClass:"esri-icon-link",clickFunction:()=>this._startUseImageUrl()});g=g?new x({label:null==c?void 0:c.menu.removeThumbnail,iconClass:"esri-icon-erase",clickFunction:()=>this._removeThumbnail()}):null;return[a,b,g].filter(Boolean)}},{key:"_editMenu",get:function(){const {_editMenuItems:a,
messages:b}=this;var c=this._get("_editMenu");c&&c.destroy();c=new N({iconClass:"esri-icon-handle-horizontal",label:null==b?void 0:b.menu.label});c.items=a;return c}},{key:"bookmarkCreationOptions",get:function(){u.deprecatedProperty(z,"bookmarkCreationOptions",{replacement:"defaultCreateOptions",version:"4.18"});return this.viewModel.defaultCreateOptions},set:function(a){"undefined"!==typeof a.captureExtent&&u.deprecatedProperty(z,"bookmarkCreationOptions.captureExtent",{replacement:"defaultCreateOptions.captureViewpoint",
version:"4.17"});u.deprecatedProperty(z,"bookmarkCreationOptions",{replacement:"defaultCreateOptions",version:"4.18"});this.viewModel.defaultCreateOptions=a}}]);return r}(L);k.__decorate([l.property({type:w}),n.renderable(["state","editedBookmark","loading","validationState"])],h.prototype,"_userState",void 0);k.__decorate([l.property({readOnly:!0,dependsOn:["messages","_userState.editedBookmark.thumbnail.url"]})],h.prototype,"_editMenuItems",null);k.__decorate([l.property({readOnly:!0,dependsOn:["messages",
"_editMenuItems"]})],h.prototype,"_editMenu",null);k.__decorate([l.property({dependsOn:["viewModel.defaultCreateOptions"]})],h.prototype,"bookmarkCreationOptions",null);k.__decorate([p.aliasOf("viewModel.defaultCreateOptions")],h.prototype,"defaultCreateOptions",void 0);k.__decorate([p.aliasOf("viewModel.defaultEditOptions")],h.prototype,"defaultEditOptions",void 0);k.__decorate([p.aliasOf("viewModel.bookmarks")],h.prototype,"bookmarks",void 0);k.__decorate([n.renderable(),l.property()],h.prototype,
"disabled",void 0);k.__decorate([n.renderable(),l.property()],h.prototype,"editingEnabled",void 0);k.__decorate([p.aliasOf("viewModel.goToOverride")],h.prototype,"goToOverride",void 0);k.__decorate([l.property()],h.prototype,"iconClass",void 0);k.__decorate([l.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],h.prototype,"label",void 0);k.__decorate([l.property(),n.renderable(),v.messageBundle("esri/widgets/Bookmarks/t9n/Bookmarks")],h.prototype,"messages",void 0);k.__decorate([l.property(),
n.renderable(),v.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0);k.__decorate([l.property(),n.renderable(),v.messageBundle("esri/core/t9n/Units")],h.prototype,"messagesUnits",void 0);k.__decorate([p.aliasOf("viewModel.view")],h.prototype,"view",void 0);k.__decorate([l.property({type:B}),n.renderable(["activeBookmark","state","bookmarks"]),K.vmEvent(["select-bookmark","bookmark-edit","bookmark-select"])],h.prototype,"viewModel",void 0);k.__decorate([l.property(),n.renderable()],
h.prototype,"visibleElements",void 0);k.__decorate([F.cast("visibleElements")],h.prototype,"castVisibleElements",null);k.__decorate([l.property()],h.prototype,"endAddBookmark",null);k.__decorate([l.property()],h.prototype,"startAddBookmark",null);return h=k.__decorate([G.subclass("esri.widgets.Bookmarks")],h)});