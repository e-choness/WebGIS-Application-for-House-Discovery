// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/Logger","../../../core/promiseUtils","./featureUtils"],function(q,m,r,t,k){function u(b){return`<ul class="esri-widget__list">${b.map(d=>`<li>${"string"===typeof d?k.applyTextFormattingHTML(k.htmlEntities(d)):d}</li>`).join("")}</ul>`}function v(b){return`<table class="esri-widget__table">${b.keys().map(d=>{var a=b.field(d);a="string"===typeof a?k.applyTextFormattingHTML(k.htmlEntities(a)):a;return`<tr><th>${d}</th><td>${a}</td></tr>`}).join("")}</table>`}
function w({arcadeUtils:b,featureSetVars:d,context:a,viewInfo:e,map:c,graphic:g}){d.forEach(f=>{f=f.toLowerCase();const h={map:c,spatialReference:e.sr};"$map"===f&&(a.vars[f]=b.convertMapToFeatureSetCollection(h));"$layer"===f&&(a.vars[f]=b.convertFeatureLayerToFeatureSet(g.sourceLayer,e.sr));"$datastore"===f&&(a.vars[f]=b.convertServiceUrlToWorkspace(g.sourceLayer.url,e.sr))})}function x(){return new Promise(function(b,d){q(["../../../support/arcadeUtils"],b,d)})}async function y({expressionAttributes:b,
info:d,arcadeUtils:a,spatialReference:e,map:c,graphic:g}){const f=`expression/${d.name}`,h=a.createSyntaxTree(d.expression),n=z.filter(l=>a.hasVariable(h,l));await a.loadScriptDependencies(h,!0,n);const p=a.getViewInfo({spatialReference:e});e=a.createExecContext(g,p);e.useAsync=!0;w({arcadeUtils:a,featureSetVars:n,context:e,viewInfo:p,map:c,graphic:g});c=a.createFunction(h,e);c=await a.executeAsyncFunction(c,e).catch(l=>A.error("arcade-execution-error",{error:l,graphic:g,expressionInfo:d}));b[f]=
"string"===typeof c?k.applyTextFormattingHTML(k.htmlEntities(c)):Array.isArray(c)?u(c):c&&"esri.arcade.Dictionary"===c.declaredClass?v(c):c}const z=["$datastore","$map","$layer"],A=r.getLogger("esri.widgets.Feature.support.arcadeFeatureUtils");m.createFormattedExpressions=async function({popupTemplate:b,spatialReference:d,graphic:a,map:e}){b=b.expressionInfos;const c=[],g={};if(!b||!b.length)return g;const f=await x();for(const h of b)c.push(y({expressionAttributes:g,info:h,arcadeUtils:f,spatialReference:d,
map:e,graphic:a}));await t.eachAlways(c);return g};Object.defineProperty(m,"__esModule",{value:!0})});