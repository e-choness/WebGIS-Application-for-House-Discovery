// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3f64","../../../../chunks/vec3","./SphericalHarmonics"],function(g,h,c,d,k){const l=c.create();let m=function(){function e(){this._renderLighting={main:{intensity:c.create(),direction:c.fromValues(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}};this._shOrder=2;this._oldSunlight={direction:c.create(),ambient:{color:c.create(),intensity:0},diffuse:{color:c.create(),intensity:0}}}var f=e.prototype;
f.setLightDirectionUniform=function(b){b.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction)};f.setUniforms=function(b,a=!1){a?b.setUniform1f("lightingFixedFactor",(1-this._info.groundLightingFactor)*(1-this._info.globalFactor)):b.setUniform1f("lightingFixedFactor",0);b.setUniform1f("lightingGlobalFactor",this._info.globalFactor);this.setLightDirectionUniform(b);b.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity);b.setUniform1f("ambientBoostFactor",
.4);a=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?b.setUniform3f("lightingAmbientSH0",a.r[0],a.g[0],a.b[0]):1===this._shOrder?(b.setUniform4f("lightingAmbientSH_R",a.r[0],a.r[1],a.r[2],a.r[3]),b.setUniform4f("lightingAmbientSH_G",a.g[0],a.g[1],a.g[2],a.g[3]),b.setUniform4f("lightingAmbientSH_B",a.b[0],a.b[1],a.b[2],a.b[3])):2===this._shOrder&&(b.setUniform3f("lightingAmbientSH0",a.r[0],a.g[0],a.b[0]),b.setUniform4f("lightingAmbientSH_R1",a.r[1],a.r[2],a.r[3],a.r[4]),b.setUniform4f("lightingAmbientSH_G1",
a.g[1],a.g[2],a.g[3],a.g[4]),b.setUniform4f("lightingAmbientSH_B1",a.b[1],a.b[2],a.b[3],a.b[4]),b.setUniform4f("lightingAmbientSH_R2",a.r[5],a.r[6],a.r[7],a.r[8]),b.setUniform4f("lightingAmbientSH_G2",a.g[5],a.g[6],a.g[7],a.g[8]),b.setUniform4f("lightingAmbientSH_B2",a.b[5],a.b[6],a.b[7],a.b[8]))};f.set=function(b){this._info=b;k.combineLights(b.lights,this._shOrder,this._renderLighting);d.negate(this._oldSunlight.direction,this._renderLighting.main.direction);b=1/Math.PI;this._oldSunlight.ambient.color[0]=
.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*b;this._oldSunlight.ambient.color[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*b;this._oldSunlight.ambient.color[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*b;this._oldSunlight.ambient.intensity=1;this._oldSunlight.diffuse.color[0]=this._renderLighting.main.intensity[0]*b;this._oldSunlight.diffuse.color[1]=this._renderLighting.main.intensity[1]*b;this._oldSunlight.diffuse.color[2]=this._renderLighting.main.intensity[2]*
b;this._oldSunlight.diffuse.intensity=1;b=d.copy(l,this._oldSunlight.diffuse.color);d.scale(b,b,.4*this._info.globalFactor);d.add(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,b)};h._createClass(e,[{key:"globalFactor",get:function(){return this._info.globalFactor}},{key:"old",get:function(){return this._oldSunlight}}]);return e}();g.SceneLighting=m;Object.defineProperty(g,"__esModule",{value:!0})});