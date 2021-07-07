/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./object.js";import"./Logger.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import e from"../core/Accessor.js";import{reject as r}from"../core/promiseUtils.js";import s from"../core/Error.js";import"./ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import"../core/urlUtils.js";import"./resourceExtension.js";import l from"../core/Handles.js";import{init as n}from"../core/watchUtils.js";import{e as p}from"./interactiveToolUtils.js";let a=class extends e{constructor(t){super(t),this.tool=null,this._baseHandles=new l,this._loggedUnsupportedErrorOnce=!1,this._creationAbortController=null,t&&null!=t.visible&&(this.visible=t.visible)}initialize(){this._baseHandles.add(n(this,["view.ready","isSupported"],(()=>{this.view&&this.view.ready&&!this.isSupported?this._loggedUnsupportedErrorOnce||(this.logUnsupportedError(),this._loggedUnsupportedErrorOnce=!0):this._loggedUnsupportedErrorOnce=!1})))}destroy(){this.removeTool(),this.view=null,this._baseHandles.destroy(),this._baseHandles=null}get isSupported(){return!this.view||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(t){if(t===this.view)return;this.removeTool(),this._set("view",t);const o="tools";this._baseHandles.remove(o),t&&this._baseHandles.add(t.tools.on("change",(t=>{if(this.tool)for(const o of t.removed)if(this.tool===o){o.destroyed||o.destroy(),this._set("tool",null);break}})),o)}set visible(t){this._set("visible",t),this.tool&&(this.tool.visible=t),!t&&this._creationAbortController&&(this._creationAbortController.abort(),this._creationAbortController=null)}get active(){return null!=this._creationAbortController||null!=this.tool&&this.tool.active}get isDisabled(){return!this.view||!this.view.ready||!this.isSupported}get creatingTool(){return!!this._creationAbortController}async createTool(){if(this.removeTool(),!this.isSupported)return r(new s("tool:create","The view does not support the tool"));const t=this.createToolParams(),o=()=>{const o=p(t.constructorArguments);return{visible:this.visible,...o}},e=new AbortController,i=e.signal;this._creationAbortController=e;const l=()=>{e===this._creationAbortController&&(this._creationAbortController=null)};try{const e=await this.view.createTool(t.toolConstructor,o,{signal:i});this._set("tool",e),l()}catch(t){throw l(),t}}removeTool(){this._creationAbortController&&this._creationAbortController.abort(),this._creationAbortController=null;const t=this.tool;t&&(this.view&&this.view.tools&&this.view.tools.remove(t),t.destroyed||t.destroy(),this._set("tool",null))}};t([o({constructOnly:!0})],a.prototype,"tool",void 0),t([o({dependsOn:["view.type"]})],a.prototype,"isSupported",null),t([o({value:null})],a.prototype,"view",null),t([o({type:Boolean,value:!0})],a.prototype,"visible",null),t([o({dependsOn:["_creationAbortController","tool.active"]})],a.prototype,"active",null),t([o({dependsOn:["view","view.ready","isSupported"]})],a.prototype,"isDisabled",null),t([o()],a.prototype,"_creationAbortController",void 0),t([o({readOnly:!0,dependsOn:["_creationAbortController"]})],a.prototype,"creatingTool",null),a=t([i("esri.widgets.support.InteractiveToolViewModel")],a);export{a as I};