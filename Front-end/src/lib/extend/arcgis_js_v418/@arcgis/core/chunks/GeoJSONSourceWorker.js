/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import"./tslib.es6.js";import"./ArrayPool.js";import"./object.js";import"./deprecate.js";import"../core/lang.js";import"../config.js";import"./Logger.js";import"./string.js";import"./metadata.js";import"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import{all as e}from"../core/promiseUtils.js";import"./Message.js";import t from"../core/Error.js";import"./ensureType.js";import"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"./JSONSupport.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import{W as s,e as i}from"../geometry/SpatialReference.js";import"../kernel.js";import r from"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import{getJsonType as o}from"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import{getFieldDefaultValue as n}from"../layers/support/fieldUtils.js";import"./unitUtils.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./ItemCache.js";import"../core/watchUtils.js";import{k as a}from"./fieldType.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./Scheduler.js";import"./defaultsJSON.js";import p from"../layers/support/FieldsIndex.js";import"./QueryEngineCapabilities.js";import"./OptimizedGeometry.js";import{b as l,c as d,l as m,m as u,n as c}from"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./json.js";import{p as y,c as j}from"./projectionSupport.js";import{v as f,i as g,c as h}from"./geojson.js";import{c as b,a as I,b as F}from"./clientSideDefaults.js";import"./quantizationUtils.js";import"./centroid.js";import"./quickselect.js";import"./rbush.js";import{F as _}from"./FeatureStore.js";import"./optimizedFeatureQueryEngineAdapter.js";import{Q as E}from"./QueryEngine.js";import"./utils11.js";import{l as T,m as q,c as x,a as w,s as D}from"./sourceUtils.js";const R={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};export default class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const o=[];await this._checkProjection(e.spatialReference);let m=null;if(e.url){m=(await r(e.url,{responseType:"json"})).data,await f(m)}const u=g(m,{geometryType:e.geometryType}),c=e.fields||u.fields||[],j=null!=e.hasZ?e.hasZ:u.hasZ,T=u.geometryType,q=e.objectIdField||("number"===u.objectIdFieldType?u.objectIdFieldName:"OBJECTID")||"OBJECTID",x=e.spatialReference||s;let w=e.timeInfo;if(!T)throw new t("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===u.objectIdFieldType&&o.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),c===u.fields&&u.unknownFields.length>0&&o.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}}),q){let e=null;c.some((t=>t.name===q&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):c.unshift({alias:q,name:q,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of c){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new t("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===q&&(e.type="esriFieldTypeOID"),-1===a.jsonValues.indexOf(e.type))throw new t("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const D={};this._requiredFields=[];for(const e of c)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=n(e);e.nullable||void 0!==t?D[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new p(c),w){if(w.startTimeField){const e=this._fieldsIndex.get(w.startTimeField);e?(w.startTimeField=e.name,e.type="esriFieldTypeDate"):w.startTimeField=null}if(w.endTimeField){const e=this._fieldsIndex.get(w.endTimeField);e?(w.endTimeField=e.name,e.type="esriFieldTypeDate"):w.endTimeField=null}if(w.trackIdField){const e=this._fieldsIndex.get(w.trackIdField);e?w.trackIdField=e.name:(w.trackIdField=null,o.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:w}}))}w.startTimeField||w.endTimeField||(o.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:w}}),w=null)}const S={warnings:o,featureErrors:[],layerDefinition:{...R,drawingInfo:b(T),templates:I(D),extent:null,geometryType:T,objectIdField:q,fields:c,hasZ:!!j,timeInfo:w}};this._queryEngine=new E({fields:c,geometryType:T,hasM:!1,hasZ:j,objectIdField:q,spatialReference:x,timeInfo:w,featureStore:new _({geometryType:T,hasM:!1,hasZ:j})}),this._createDefaultAttributes=F(D,q),this._nextObjectId=u.maxObjectId+1;const O=h(m,{geometryType:T,hasZ:j,objectIdFieldName:"number"===u.objectIdFieldType?q:null});if(!i(x,s))for(const e of O)e.geometry&&(e.geometry=l(y(d(e.geometry,T,j,!1),s,x)));return this._loadInitialFeatures(S,O),S}async applyEdits(t){const{spatialReference:s,geometryType:i}=this._queryEngine;return await e([T(s,i),j(t.adds,s),j(t.updates,s)]),this._applyEdits(t)}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:s,objectIdField:i}=this._queryEngine,r=[];for(const s of t){const t=this._createDefaultAttributes(),o=q(this._fieldsIndex,this._requiredFields,t,s.attributes,!0,e.warnings);o?e.featureErrors.push(o):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,s.objectId=t[i],r.push(s))}if(s.addMany(r),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:s}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(x(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:n,objectIdField:a,spatialReference:p,featureStore:l}=this._queryEngine,d=[];for(const r of t){if(r.geometry&&i!==o(r.geometry)){s.push(w("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=q(this._fieldsIndex,this._requiredFields,t,r.attributes);if(n)s.push(n);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[a];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=y(D(r.geometry,p),r.geometry.spatialReference,p)),d.push(r),s.push(x(r.attributes[a]))}}l.addMany(m([],d,i,n,r,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:n,spatialReference:a,featureStore:p}=this._queryEngine;for(const l of t){const{attributes:t,geometry:d}=l,m=t&&t[n];if(null==m){e.push(w(`Identifier field ${n} missing`));continue}if(!p.has(m)){e.push(w(`Feature with object id ${m} missing`));continue}const j=u(p.getFeature(m),s,r,i);if(d){if(s!==o(d)){e.push(w("Incorrect geometry type."));continue}j.geometry=y(D(d,a),d.spatialReference,a)}if(t){const s=q(this._fieldsIndex,this._requiredFields,j.attributes,t);if(s){e.push(s);continue}}p.add(c(j,s,r,i,n)),e.push(x(m))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}async _checkProjection(e){try{await j(s,e)}catch{throw new t("geojson-layer","Projection not supported")}}}