/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./object.js";import{i as r}from"./Logger.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{a as s}from"./JSONSupport.js";import"../core/urlUtils.js";import{s as i,J as n}from"./jsonMap.js";import{r as p}from"./reader.js";import{w as u}from"./writer.js";import"./resourceExtension.js";import{collectArcadeFieldNames as a}from"../layers/support/fieldUtils.js";import{s as f}from"./unitConversionUtils.js";var l;let d=l=class extends s{async collectRequiredFields(e,r){return a(e,r,this.expression)}clone(){return new l({expression:this.expression,title:this.title})}};e([t({type:String,json:{write:!0}})],d.prototype,"expression",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"title",void 0),d=l=e([o("esri.layers.support.FeatureExpressionInfo")],d);var m,x=d;const y=i()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),c=new n({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let h=m=class extends s{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,t,o){r[t]=e.write(null,o),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):r(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};e([t({type:x,json:{write:!0}})],h.prototype,"featureExpressionInfo",void 0),e([p("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],h.prototype,"readFeatureExpressionInfo",null),e([u("featureExpressionInfo",{featureExpressionInfo:{type:x},"featureExpression.value":{type:[0]}})],h.prototype,"writeFeatureExpressionInfo",null),e([t({type:y.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:y.jsonValues,read:y.read,write:{writer:y.write,isRequired:!0}}})],h.prototype,"mode",null),e([t({type:Number,json:{write:!0}})],h.prototype,"offset",void 0),e([t({type:f,json:{type:String,read:c.read,write:c.write}})],h.prototype,"unit",null),h=m=e([o("esri.layers.support.ElevationInfo")],h);var E=h;export{E};