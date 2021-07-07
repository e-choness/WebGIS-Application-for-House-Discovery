/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{L as r}from"./Logger.js";import{k as e,b as t,c as o}from"../geometry/SpatialReference.js";import{c as a}from"./vec3f64.js";import{i as f,n,t as s}from"./vec3.js";import{f as i,S as c}from"./unitUtils.js";import{projectBuffer as m,computeLinearTransformation as y,webMercator as p}from"../geometry/projection.js";import{c as u,a as l}from"./quatf64.js";import{f as T,t as g}from"./mat3.js";import{a as A,B as E}from"./BufferView.js";const d=r.getLogger("esri.geometry.support.meshUtils.normalProjection");function S(r,e,t,o,a){return o.isWebMercator||o.isWGS84?(P(0,A.fromTypedArray(r),E.fromTypedArray(e),E.fromTypedArray(t),o,A.fromTypedArray(a)),a):(d.error("Cannot convert PCS spatial reference buffer to ECEF"),a)}function C(r,e,t,o,a){return o.isWebMercator||o.isWGS84?(P(1,A.fromTypedArray(r),E.fromTypedArray(e),E.fromTypedArray(t),o,A.fromTypedArray(a)),a):(d.error("Cannot convert to PCS spatial reference buffer from ECEF"),a)}function j(r,e,t){return m(r,e,0,t,i(e),0,r.length/3),t}function b(r,e,t){return m(r,i(t),0,e,t,0,r.length/3),e}function W(r,e,t=!1){if(r)for(let o=0;o<r.length;o+=3){for(let e=0;e<3;e++)V[e]=r[o+e];f(V,V,e),t&&n(V,V);for(let e=0;e<3;e++)r[o+e]=V[e]}}function h(r,e,t,o,a){if(!o.isWebMercator&&!o.isWGS84)return d.error("Cannot convert PCS spatial reference buffer to ECEF"),a;P(0,A.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),E.fromTypedArray(e),E.fromTypedArray(t),o,A.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT));for(let e=3;e<r.length;e+=4)a[e]=r[e];return a}function M(r,e,t,o,a){if(!o.isWebMercator&&!o.isWGS84)return d.error("Cannot convert to PCS spatial reference buffer from ECEF"),a;P(1,A.fromTypedArray(r,16),E.fromTypedArray(e),E.fromTypedArray(t),o,A.fromTypedArray(a,16));for(let e=3;e<r.length;e+=4)a[e]=r[e];return a}function P(r,a,f,m,u,l){if(!a)return;const A=u.isWGS84||e(u)||t(u)||o(u),E=f.count;if(A)for(let e=0;e<E;e++){m.getVec(e,V),a.getVec(e,v);const t=i(u);y(t,V,F,t),T(G,F),1===r&&g(G,G),s(v,v,G),l.setVec(e,v)}else for(let e=0;e<E;e++){m.getVec(e,V),a.getVec(e,v),y(c,V,F,c),T(G,F);const t=p.y2lat(f.get(e,1));let o=Math.cos(t);0===r&&(o=1/o),G[0]*=o,G[1]*=o,G[2]*=o,G[3]*=o,G[4]*=o,G[5]*=o,1===r&&g(G,G),s(v,v,G),n(v,v),l.setVec(e,v)}return l}const V=a(),v=a(),F=u(),G=l();export{S as a,b,C as c,h as d,M as e,j as p,W as t};