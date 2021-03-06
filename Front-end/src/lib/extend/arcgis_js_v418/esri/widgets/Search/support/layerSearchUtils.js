// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../core/lang ../../../core/maybe ../../../core/Logger ../../../core/Error ../../../core/promiseUtils ../../../geometry/Polygon ../../../intl/date ../../../intl/substitute ../../../intl ../../../core/unitUtils ./geometryUtils".split(" "),function(G,Q,R,S,w,H,T,U,V,ia,W,J){function K(a,c){const {filter:b,withinViewEnabled:g}=a;a=c&&c.extent;return b&&b.geometry||(g&&a?a:void 0)}function L(a){return a?a.load().then(H.resolve).catch(H.reject):H.resolve()}function M(a){var c,b,g;
return null!=(c=null==a?void 0:null==(b=a.capabilities)?void 0:null==(g=b.query)?void 0:g.supportsPagination)?c:!1}function N(a){let c="";a&&({fields:a}=a,a&&a.some(b=>"string"===b.type?(c=b.name,!0):!1));return c}function D(a,c){return a&&c?c.every(b=>!!a.getField(b)):!1}function X(a){for(let c=0;c<a.length;c++)if(255<a.charCodeAt(c))return!0;return!1}function Y(a,c,b){let g=null;({codedValues:a}=a);a&&a.some(l=>{var m=l.name;m=b?m:m.toLowerCase();return(b?c:c.toLowerCase())===m?(g=l.code.toString(),
!0):!1});return g}function E(a,c){return(c=c&&c.where)?`(${a}) AND (${c})`:a}function O(a,c,b,g,l){const {definitionExpression:m}=c;let k="";if(a){const n=Z.test(c.url)&&X(a)?"N":"";b&&b.forEach(d=>{var h=c.getField(d);d=((d="function"===typeof c.getFieldDomain&&c.getFieldDomain(d))&&"coded-value"===d.type?Y(d,a,l):null)||a||null;if(null!==d){{const f=h.type;h=h.name;"string"===f||"date"===f||"global-id"===f?l?h=E(`${h} = ${n}'${d}'`,g):(d=d.toUpperCase(),h=E(`UPPER(${h}) LIKE ${n}'%${d}%'`,g)):"oid"===
f||"small-integer"===f||"integer"===f||"single"===f||"double"===f?(d=Number(d),h=isNaN(d)?null:E(`${h} = ${d}`,g)):h=E(`${h} = ${d}`,g)}h&&(k+=k?` OR (${h})`:`(${h})`)}})}return m?`(${m}) AND (${k})`:k}function aa(a,c){let b=null;({codedValues:a}=a);a&&a.length&&a.some(g=>g.code===c?(b=g.name,!0):!1);return b}function ba(a,c){return a[Object.keys(a).find(b=>b.toLowerCase()===c.toLowerCase())]}function P(a,c,b){const g=a.sourceLayer,{attributes:l}=a;a="function"===typeof g.getFieldDomain&&g.getFieldDomain(b);
return c?V.substitute(c,l):b&&l?(c=g.getField(b),b=ba(l,b),null==b?"":a&&"coded-value"===a.type?aa(a,b):"date"===(null==c?void 0:c.type)?U.formatDate(new Date(b)):"number"===typeof b?b.toString():"string"!==typeof b?"":b.trim()):""}function ca(a,c,b,g){return a.features.map(l=>{var m=l.sourceLayer,{attributes:k}=l;({objectIdField:m}=m);k=k[m];return l={text:P(l,c.suggestionTemplate,g),key:k,sourceIndex:b}})}function da(a,c,b,g,l,m,k){return a.features.map(n=>{{var d=n.clone();var h=n.sourceLayer;
h=(h=h&&h.objectIdField)&&n.attributes[h];const x=P(n,b.searchTemplate,l);var f=J.createExtentFromGeometry(d.geometry,c,m);f="number"===typeof k?J.scaleExtent(Q.clone(f),c,k):f;n=n.clone();R.isSome(f)&&(n.geometry=T.fromExtent(f));d={extent:f,target:n,feature:d,key:h,name:x,sourceIndex:g}}return d})}const Z=/https?:\/\/services.*\.arcgis\.com/i,ea=/(?:\{([^}]+)\})/g,y=S.getLogger("esri.widgets.Search.support.layerSearchUtils");G.getResults=function(a,c){const {exactMatch:b=!1,location:g,maxResults:l,
spatialReference:m,source:k,sourceIndex:n,suggestResult:d,view:h}=a,{layer:f,filter:x,zoomScale:z}=k,t=h&&h.scale,p=K(k,h),q=c&&c.signal;return L(f).then(()=>{const e=f.popupTemplate;return e?e.getRequiredFields(f.fields):null}).then(e=>{var r,A;const {objectIdField:F,returnZ:C}=f,B=k.displayField||k.layer.displayField||N(k.layer);if(!f.getField(B))throw y.error("invalid-field: displayField is invalid."),new w("getResults():invalid-field","displayField is invalid.");e=e&&e.length?e:[B];const u=k.outFields||
e;e=u&&-1!==u.indexOf("*");-1!==u.indexOf(F)||e||u.push(F);if(!e&&!D(f,u))throw y.error("invalid-field: outField is invalid."),new w("getResults():invalid-field","outField is invalid.");e=f.createQuery();var {orderByFields:v}=k;v&&(e.orderByFields=v);m&&(e.outSpatialReference=m,v=1/W.getMetersPerUnitForSR(m))&&(e.maxAllowableOffset=v);v="mesh"===f.geometryType||"multipatch"===f.geometryType;const fa=(null==(r=f.capabilities)?void 0:null==(A=r.data)?void 0:A.supportsZ)&&!v;e.returnZ=fa&&!1!==C;e.returnGeometry=
!0;e.multipatchOption=v?"xyFootprint":null;u&&(e.outFields=u);if(g)e.geometry=g;else if(d.key)e.objectIds=[parseInt(d.key,10)];else{r=k.searchFields||[B];if(!D(f,r))throw y.error("invalid-field: search field is invalid."),new w("getResults():invalid-field","search field is invalid.");M(f)&&(e.num=l);p&&(e.geometry=p);if(!d.text.trim())return[];const {prefix:I="",suffix:ha=""}=k;A=`${I}${d.text}${ha}`.replace(/'/g,"''");r=O(A,f,r,x,b);if(!r)return[];e.where=r}return f.queryFeatures(e,{signal:q}).then(I=>
da(I,h,k,n,B,t,z))})};G.getSuggestions=function(a,c){const {source:b,spatialReference:g,view:l,suggestTerm:m,maxSuggestions:k,sourceIndex:n}=a,{layer:d,filter:h}=b,f=c&&c.signal,x=K(b,l);return L(d).then(()=>{if(!M(d))return[];const z=b.displayField||b.layer.displayField||N(b.layer);var t=b.searchFields||[z];const p=[];b.suggestionTemplate?b.suggestionTemplate.replace(ea,(C,B)=>{p.push(B);return C}):p.push(z);var q=p&&-1!==p.indexOf("*");-1!==p.indexOf(d.objectIdField)||q||p.push(d.objectIdField);
var e=!!d.getField(z);q=q||D(d,p);const r=D(d,t);if(!e)throw y.error("invalid-field: displayField is invalid."),new w("getSuggestions():invalid-field","displayField is invalid.");if(!q)throw y.error("invalid-field: outField is invalid."),new w("getSuggestions():invalid-field","outField is invalid.");if(!r)throw y.error("invalid-field: search field is invalid."),new w("getSuggestions():invalid-field","search field is invalid.");e=d.createQuery();({orderByFields:q}=b);q&&(e.orderByFields=q);e.outSpatialReference=
g;e.returnGeometry=!1;e.num=k;e.outFields=p;x&&(e.geometry=x);if(!m.trim())return[];const {prefix:A="",suffix:F=""}=b;q=`${A}${m}${F}`.replace(/'/g,"''");t=O(q,d,t,h,!1);if(!t)return[];e.where=t;return d.queryFeatures(e,{signal:f}).then(C=>ca(C,b,n,z))})};Object.defineProperty(G,"__esModule",{value:!0})});