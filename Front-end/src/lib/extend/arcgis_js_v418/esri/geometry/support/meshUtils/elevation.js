// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("exports ../../../core/promiseUtils ../../Point ../../../geometry ../../../Ground ../../../core/unitUtils ../../Mesh".split(" "),function(v,z,A,G,B,C,D){async function E(a){if(w(a))return a.load();await a.load();await z.eachAlways(a.layers.map(b=>b.load()));return a}function w(a){return"type"in a&&("elevation"===a.type||"base-elevation"===a.type)}const m=new A;v.create=async function(a,b,n){{a=w(a)||a instanceof B?await (await E(a)).createElevationSampler(b,{demResolution:n&&n.demResolution||
"finest-contiguous"}):a;var d=C.getMetersPerUnitForSR(b.spatialReference),c=a.demResolution.min/d;d=Math.round(b.width/c);c=Math.round(b.height/c);const g=d+1,r=c+1,p=new Float64Array(g*r*3),t=new Float32Array(g*r*2);let u=0,x=0;const e=new Uint32Array(d*c*6);let f=0,h=0;m.spatialReference=b.spatialReference;for(let k=0;k<r;k++){const y=b.ymin+k/c*b.height;for(let l=0;l<g;l++){var q=b.xmin+l/d*b.width;m.x=q;m.y=y;p[u++]=q;p[u++]=y;p[u++]=a.elevationAt(m)||0;q=l/d;const F=k/c;t[x++]=q;t[x++]=F;k!==
c&&l!==d&&(e[h++]=f+1,e[h++]=f+g+1,e[h++]=f+g,e[h++]=f,e[h++]=f+1,e[h++]=f+g);f++}}b=new D({vertexAttributes:{position:p,uv:t},components:[{faces:e,shading:"smooth",material:n&&n.material||null}],spatialReference:b.spatialReference})}return b};Object.defineProperty(v,"__esModule",{value:!0})});