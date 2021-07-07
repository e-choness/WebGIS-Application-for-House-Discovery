// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/lang ../../../../core/maybe ../../../../core/Logger ../../../../core/Error ../../../../core/screenUtils ../../../../chunks/symbols ../support/clusterUtils ../../engine/webgl/enums ../../engine/webgl/materialKey/MaterialKey ../../engine/webgl/Utils ../../engine/webgl/util/vvFlagUtils ./support/rendererUtils ../support/util".split(" "),function(u,K,L,z,M,v,A,N,O,p,l,P,Q,R,S){function q(a){switch(a.type){case "line-marker":var b;return{type:"line-marker",
color:null==(b=a.color)?void 0:b.toJSON(),placement:a.placement,style:a.style};default:return N.fromJSON(a.toJSON()).toJSON()}}function n(a,b,c){if(!a)return null;let d=0,e=!1;z.isSome(b)&&"visualVariables"in b&&(d=Q.getVVFlags(b.visualVariables||[]),e="dot-density"===b.type);switch(a.type){case "simple-fill":case "picture-fill":return T(a,d,e,c);case "simple-marker":case "picture-marker":return b=l.createMaterialKey(p.WGLGeometryType.MARKER,d,!1,!1),c=c?l.hydrateMaterialKey(b):b,b=q(a),a={materialKey:c,
hash:a.hash(),...b,angle:a.angle};case "simple-line":return U(a,d,c);case "text":return b=l.createMaterialKey(p.WGLGeometryType.TEXT,d,!1,!1),c=c?l.hydrateMaterialKey(b):b,b=q(a),a={materialKey:c,hash:a.hash(),...b,angle:a.angle};case "label":return b=l.createMaterialKey(p.WGLGeometryType.LABEL,d,!1,!1,a.labelPlacement),a={materialKey:c?l.hydrateMaterialKey(b):b,hash:a.hash(),...a.toJSON(),labelPlacement:a.labelPlacement};case "cim":return{type:"cim",rendererKey:d,data:a.data};case "web-style":return{...q(a),
type:"web-style",hash:a.hash(),rendererKey:d};default:throw Error(`symbol not supported ${a.type}`);}}function T(a,b,c,d){c=l.createMaterialKey(p.WGLGeometryType.FILL,b,!1,c);var e=d?l.hydrateMaterialKey(c):c;const f=a.clone();c=f.outline;f.outline=null;a=[];e={materialKey:e,hash:f.hash(),...q(f)};a.push(e);c&&(b=l.createMaterialKey(p.WGLGeometryType.LINE,b,!0,!1),d={materialKey:d?l.hydrateMaterialKey(b):b,hash:c.hash(),...q(c)},a.push(d));return{type:"composite-symbol",layers:a,hash:a.reduce((g,
h)=>h.hash+g,"")}}function U(a,b,c){var d=l.createMaterialKey(p.WGLGeometryType.LINE,b,!1,!1);const e=c?l.hydrateMaterialKey(d):d;a=a.clone();d=a.marker;a.marker=null;const f=[];f.push({materialKey:e,hash:a.hash(),...q(a)});if(d){var g;b=l.createMaterialKey(p.WGLGeometryType.MARKER,b,!1,!1);c=c?l.hydrateMaterialKey(b):b;d.color=null!=(g=d.color)?g:a.color;f.push({materialKey:c,hash:d.hash(),lineWidth:a.width,...q(d)})}return{type:"composite-symbol",layers:f,hash:f.reduce((h,k)=>k.hash+h,"")}}function V(a,
b){const c=a.labelPlacement;var d=W[b];if(!a.symbol)return w.warn("No LabelClass symbol specified."),!0;if(!d)return w.error(new v("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${b} is not supported`)),!0;d.some(e=>e===c)||(d=d[0],c&&w.warn(`Found invalid label placement type ${c} for ${b}. Defaulting to ${d}`),a.labelPlacement=d);return!1}function B(a,b){a=L.clone(a);return a.some(c=>V(c,b))?[]:a}function C(a,b=!1){try{var c,d;const e=X(a,b),f={};e.map(g=>
{a:{switch(g.target){case "feature":D(f,E(a),g);g=void 0;break a;case "aggregate":var h=a.featureReduction;if("selection"===h.type)throw new v("ValidationError","Mapview does not support `selection` reduction type",h);D(f,E(a),g);f.aggregate||(f.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:A.pt2px(h.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(A.pt2px(h.clusterMaxSize)/64),fields:g.aggregateFields}});F(f.aggregate,g.attributes.fields);g=void 0;break a}g=
void 0}return g});return{source:{definitionExpression:a.definitionExpression,fields:a.fields.map(g=>g.toJSON()),gdbVersion:a.gdbVersion,historicMoment:null==(c=a.historicMoment)?void 0:c.getTime(),outFields:a.availableFields,pixelBuffer:a.pixelBuffer,spatialReference:a.spatialReference.toJSON(),timeExtent:null==(d=a.timeExtent)?void 0:d.toJSON()},attributes:{fields:{},indexCount:0},processors:e,targets:f}}catch(e){if("ValidationError"===e.fieldName)return w.error(e),null;throw e;}}function F(a,b){for(const c in b){const d=
b[c];if(d.target!==a.name)continue;const e=a.attributes[c];e?(e.context.mesh=e.context.mesh||d.context.mesh,e.context.storage=e.context.storage||d.context.storage):a.attributes[c]=d}return a}function E(a){var b,c,d,e,f;return[null!=(b=null==(c=a.filter)?void 0:c.toJSON())?b:null,null!=(d=null==(e=a.effect)?void 0:null==(f=e.filter)?void 0:f.toJSON())?d:null]}function D(a,b,c){a.feature||(a.feature={name:"feature",input:"source",filters:b,attributes:{}});F(a.feature,c.attributes.fields);return a}function m(a,
b){return b.field?r(a,{...b,type:"field",field:b.field}):b.valueExpression?r(a,{...b,type:"expression",valueExpression:b.valueExpression}):{field:null,fieldIndex:null}}function r(a,b){switch(b.type){case "expression":var c=b.valueExpression;if(!a.fields[c]){var d=a.indexCount++;a.fields[c]={...b,name:c,fieldIndex:d}}return{fieldIndex:a.fields[c].fieldIndex};case "label-expression":return c=JSON.stringify(b.label),a.fields[c]||(d=a.indexCount++,a.fields[c]={...b,name:c,fieldIndex:d}),{fieldIndex:a.fields[c].fieldIndex};
case "field":c=b.field;if("aggregate"===b.target&&a.fields[c])return{field:c};a.fields[c]={...b,name:c};return{field:c};case "statistic":return a.fields[b.name]={...b},{field:b.name}}}function X(a,b=!1){const c=[];let d=0;c.push(Y(a,d++,b));return c}function G(a,b,c,d,e,f=!1){b=r(b,{type:"label-expression",target:d,context:{mesh:!0},resultType:"string",label:{labelExpression:c.labelExpression,labelExpressionInfo:c.labelExpressionInfo?{expression:c.labelExpressionInfo.expression}:null,symbol:!!c.symbol,
where:c.where}});({fieldIndex:b}=b);return{...n(c,a,f),fieldIndex:b,target:d,index:e}}function Y(a,b,c=!1){const d={indexCount:0,fields:{}};var e="featureReduction"in a&&a.featureReduction;b=e?"aggregate":"feature";switch(a.renderer.type){case "heatmap":{const {blurRadius:f,fieldOffset:g,field:h}=a.renderer;return{type:"heatmap",aggregateFields:[],attributes:d,target:b,storage:null,mesh:{blurRadius:f,fieldOffset:g,field:m(d,{target:b,field:h,resultType:"numeric"}).field}}}default:{const f=[],g="aggregate"===
b?O.createClusterRenderer(f,a.renderer,e,null):a.renderer;H(d,f);const h=I(d,b,g,c),k=Z(d,b,g),t=S.toJSONGeometryType(a.geometryType);a=a.labelsVisible&&a.labelingInfo||[];let x=[];if(e){if("selection"===e.type)throw new v("ValidationError","Mapview does not support `selection` reduction type",e);x=e&&e.labelsVisible&&e.labelingInfo||[]}a=B(a,t);x=B(x,t);let J=0;e=[...a.map(y=>G(g,d,y,"feature",J++,c)),...x.map(y=>G(g,d,y,"aggregate",J++,c))];return{type:"symbol",target:b,attributes:d,aggregateFields:f,
storage:k,mesh:{matcher:h,labels:e}}}}}function H(a,b){const c={mesh:!0,storage:!0};for(const d of b){const {name:e,outStatistic:f}=d,{statisticType:g,onStatisticField:h}=f;let k=b=null,t=null;"onStatisticValueExpression"in f?k=r(a,{type:"expression",target:"feature",valueExpression:f.onStatisticValueExpression,resultType:"numeric"}).fieldIndex:"onStatisticNormalizationField"in f?(b=r(a,{type:"field",target:"feature",field:h,resultType:"numeric"}).field,t=f.onStatisticNormalizationField):b=r(a,{type:"field",
target:"feature",field:h,resultType:"numeric"}).field;r(a,{type:"statistic",target:"aggregate",name:e,context:c,inField:b,inNormalizationField:t,inFieldIndex:k,statisticType:g})}}function Z(a,b,c){switch(c.type){case "dot-density":return aa(a,b,c.attributes);case "simple":case "class-breaks":case "unique-value":return ba(a,b,c.visualVariables);case "heatmap":case "dictionary":return null}}function aa(a,b,c){return c&&c.length?{type:"dot-density",mapping:c.map((d,e)=>{const {field:f,fieldIndex:g}=
m(a,{valueExpression:d.valueExpression,field:d.field,resultType:"numeric",target:b});return{binding:e,field:f,fieldIndex:g}}),target:b}:{type:"dot-density",mapping:[],target:b}}function ba(a,b,c){if(!c||!c.length)return{type:"visual-variable",mapping:[],target:b};const d={storage:!0};return{type:"visual-variable",mapping:R.simplifyVisualVariables(c).map(e=>{var f;const g=P.getVVType(e.type),{field:h,fieldIndex:k}=m(a,{target:b,valueExpression:e.valueExpression,field:e.field,context:d,resultType:"numeric"});
switch(e.type){case "size":return"$view.scale"===e.valueExpression?null:{type:"size",binding:g,field:h,fieldIndex:k,normalizationField:m(a,{target:b,field:e.normalizationField,context:d,resultType:"numeric"}).field,valueRepresentation:null!=(f=e.valueRepresentation)?f:null};case "color":return{type:"color",binding:g,field:h,fieldIndex:k,normalizationField:m(a,{target:b,field:e.normalizationField,context:d,resultType:"numeric"}).field};case "opacity":return{type:"opacity",binding:g,field:h,fieldIndex:k,
normalizationField:m(a,{target:b,field:e.normalizationField,context:d,resultType:"numeric"}).field};case "rotation":return{type:"rotation",binding:g,field:h,fieldIndex:k}}}).filter(e=>e),target:b}}function I(a,b,c,d=!1){a=z.unwrapOr(a,{indexCount:0,fields:{}});switch(c.type){case "simple":case "dot-density":return ca(a,c,"dot-density"===c.type,d);case "class-breaks":return da(a,b,c,d);case "unique-value":return ea(a,b,c,d);case "dictionary":return{type:"dictionary",renderer:c.toJSON()}}}function ca(a,
b,c,d=!1){a=b.getSymbols();return{type:"simple",symbol:n(a.length?a[0]:null,b,d),isDotDensity:c}}function da(a,b,c,d=!1){const e=c.backgroundFillSymbol,{field:f,fieldIndex:g}=m(a,{target:b,field:c.field,valueExpression:c.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}});b=c.normalizationType;b="log"===b?"esriNormalizeByLog":"percent-of-total"===b?"esriNormalizeByPercentOfTotal":"field"===b?"esriNormalizeByField":null;const h=c.classBreakInfos.map(k=>({symbol:n(k.symbol,
c,d),min:k.minValue,max:k.maxValue})).sort((k,t)=>k.min-t.min);return{type:"interval",attributes:a.fields,field:f,fieldIndex:g,backgroundFillSymbol:n(e,c,d),defaultSymbol:n(c.defaultSymbol,c,d),intervals:h,normalizationField:c.normalizationField,normalizationTotal:c.normalizationTotal,normalizationType:b,isMaxInclusive:c.isMaxInclusive}}function ea(a,b,c,d=!1){const e=[],f=c.backgroundFillSymbol;b={target:b,context:{mesh:!0},resultType:"string"};if(c.field&&"string"!==typeof c.field)throw new v("ValidationError",
"Expected renderer.field to be a string",c);const {field:g,fieldIndex:h}=m(a,{...b,field:c.field,valueExpression:c.valueExpression});for(const k of c.uniqueValueInfos)e.push({value:""+k.value,symbol:n(k.symbol,c,d)});return{type:"map",attributes:a.fields,field:g,fieldIndex:h,field2:m(a,{...b,field:c.field2}).field,field3:m(a,{...b,field:c.field3}).field,fieldDelimiter:c.fieldDelimiter,backgroundFillSymbol:n(f,c),defaultSymbol:n(c.defaultSymbol,c),map:e}}const w=M.getLogger("esri.views.2d.layers.features.schemaUtils"),
W={esriGeometryPoint:"above-right above-center above-left center-center center-left center-right below-center below-left below-right".split(" "),esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};u.addAggregateFields=H;u.createMatcherSchema=I;u.createSchema=function(a){K("esri-2d-update-debug")&&console.debug("Created new schema",C(a,!0));return C(a)};u.createSymbolSchema=n;Object.defineProperty(u,"__esModule",{value:!0})});