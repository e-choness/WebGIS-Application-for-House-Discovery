// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../tiling/TileKey ../../../tiling/PagedTileQueue ../../../tiling/TileInfoView ../../../tiling/TileQueue ../../../tiling/TileStrategy ./CollisionBucketEntry".split(" "),function(h,k,l,m,n,p,f){return function(){function g(a,c){this.neighbors=Array(9);this._tiles=Array(c);for(let b=0;b<c;b++)this._tiles[b]=new f;this.key=a}var d=g.prototype;d.getTile=function(a){return this._tiles[a]};d.getReference=function(a){return(a=this._tiles[a])&&
a.reference};d.onRegisterLayer=function(a){this.invalidateRange(a);this._add(a)};d.onUnregisterLayer=function(a){this.invalidateRange(a);this._remove(a)};d.onLabelsRendered=function(){};d.invalidateRange=function(a){for(;a<this._tiles.length;a++)this._tiles[a].dirty=!0};d.add=function(a){this._add(a)};d.remove=function(a){this._remove(a)};d.canDelete=function(){return 0===this._tiles.length};d.ready=function(){for(const a of this._tiles)a.dirty=!1};d.computeNeighbors=function(a){this.neighbors[0]=
this._getNeighbor(a,-1,-1);this.neighbors[1]=this._getNeighbor(a,0,-1);this.neighbors[2]=this._getNeighbor(a,1,-1);this.neighbors[3]=this._getNeighbor(a,-1,0);this.neighbors[4]=this;this.neighbors[5]=this._getNeighbor(a,1,0);this.neighbors[6]=this._getNeighbor(a,-1,1);this.neighbors[7]=this._getNeighbor(a,0,1);this.neighbors[8]=this._getNeighbor(a,1,1)};d.reset=function(a,c,b){const e=this._tiles[b.index];e&&e.reset(a,c,b)};d._add=function(a){const c=[];if(a>=this._tiles.length)this._tiles.push(new f);
else{for(let b=0;b<this._tiles.length;b++)b===a&&c.push(new f),c.push(this._tiles[b]);this._tiles=c}};d._remove=function(a){const c=[];for(let b=0;b<this._tiles.length;b++)b!==a&&c.push(this._tiles[b]);this._tiles=c};d._getNeighbor=function(a,c,b){const e=this.key;c=k.getId(e.level,e.row+b,e.col+c,e.world);return a.has(c)?a.get(c):null};h._createClass(g,[{key:"isDirty",get:function(){for(const a of this._tiles)if(a.dirty)return!0;return!1}},{key:"size",get:function(){return this._tiles.length}}]);
return g}()});