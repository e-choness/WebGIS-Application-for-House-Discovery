// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.18/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/has ../../../core/typedArrayUtil ../../../core/maybe ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/property ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ../../../core/urlUtils ../../../core/uuid ../../../portal/support/resourceExtension ../../../core/promiseUtils ../../../core/Collection ../../../layers/support/CodedValue ../../../layers/support/CodedValueDomain ../../../layers/support/domains ../../../layers/support/fieldUtils ../../../core/screenUtils ../../../core/asyncUtils ../../../chunks/vec3 ../../../core/unitUtils ../../../geometry/support/aaBoundingRect ../../../geometry/projection ../../../symbols/support/unitConversionUtils ../../../layers/support/PromiseQueue ../../support/Scheduler ../../../geometry/support/aaBoundingBox ../../support/layerViewUtils ../../../layers/graphics/dehydratedFeatures ../../../chunks/vec3f32 ../support/geometryUtils ../support/extentUtils ./LayerView3D ./support/layerViewUpdatingProperties ../../layers/LayerView ../support/orientedBoundingBox ./i3s/I3SUtil ./PointCloudWorkerHandle ./i3s/LoDUtil ./i3s/PagedNodeIndex ./i3s/PointCloudRendererUtil ./i3s/PointCloudWorkerUtil ./i3s/PointGraphic ./i3s/PointRenderer ./support/PopupSceneLayerView".split(" "),
function(I,m,k,C,u,T,ua,n,va,U,wa,xa,ya,p,V,W,X,za,J,Y,K,Z,aa,L,ba,ca,da,ea,fa,M,ha,N,O,ia,ja,ka,la,ma,P,na,D,oa,v,E,Q,R,pa){const F=T.getLogger("esri.views.3d.layers.PointCloudLayerView3D"),qa=O.plane.create();k=function(G){function B(){var a=G.apply(this,arguments)||this;a.maximumPointCount=4E6;a.slicePlaneEnabled=!1;a._renderer=null;a._rendererAdded=!1;a._renderedNodes=new Set;a._nodeScales=new Map;a._updateViewNeeded=!0;a._lodFactor=1;a._maxLoggedBoxWarnings=5;a._pageMultiplier=1;a._nodeLoadEpoch=
0;a._indexQueue=[];a._workQueue=[];a._idleQueue=new da;a._indexPagesLoading=new Map;a._loadingNodes=new Map;a._recalcWork=!0;a._layerIsVisible=!1;a._codedDomainPopulationPromise=null;a._codedDomainPopulationAbortController=null;a._totalWork=0;a._index=null;a._loadingInitNodePage=!1;a._nodeIdArray=[];return a}I._inheritsLoose(B,G);var e=B.prototype;e.initialize=function(){var a=this.view.resourceController;const b=a.scheduler;this._worker=new na.PointCloudWorkerHandle(b);this.addResolvingPromise(this._worker.promise);
this._tmpPoint=ha.makeDehydratedPoint(0,0,0,this.layer.spatialReference);P.checkPointCloudLayerValid(this.layer);P.checkPointCloudLayerCompatibleWithView(this.layer,this.view);this._indexRequester=a.createStreamDataRequester(2);this._dataRequester=a.createStreamDataRequester(3);this._initRenderer();a=this._initNodePages();const c=this.view.resourceController.memoryController;this._memCache=c.getMemCache(this.layer.uid);this.updatingHandles.add(this,"_clippingBox",()=>this._setUpdateViewNeeded(),2);
this.updatingHandles.add(this,"_elevationOffset",()=>this._elevationOffsetChanged(),2);this.updatingHandles.add(this.layer,"renderer",()=>this._rendererChanged(),2);this.updatingHandles.add(this.layer,"filters",()=>this._reload(),2);this.updatingHandles.add(this.layer,"outFields",()=>this._reload(),2);this.updatingHandles.add(this.layer,"scaleRangeId",()=>this._setUpdateViewNeeded());this.updatingHandles.add(this,"clippingArea",()=>this._setUpdateViewNeeded(),2);this.updatingHandles.add(this.view.state,
"camera",()=>this._setUpdateViewNeeded());this.handles.add([this.view.basemapTerrain.on("scale-change",d=>this._scaleUpdateHandler(d)),c.events.on("quality-changed",()=>this._setUpdateViewNeeded())]);this.addResolvingPromise(a);this.when(()=>{this.handles.add([b.registerTask(ea.Task.POINT_CLOUD_LAYER,d=>this._process(d),()=>this._needsUpdate()),b.registerIdleStateCallbacks(()=>this._idleBegin(),()=>this._idleEnd()),this.updatingHandles.add(this,"suspended",d=>{d?this._clearNodeState():this._setUpdateViewNeeded()},
2)])},()=>{this.updatingHandles.removeAll();this.handles.removeAll()})};e._setUpdateViewNeeded=function(){this._updateViewNeeded=!0;this._updateLoading()};e.destroy=function(){this.cancelLoading();this._worker&&(this._worker.destroy(),this._worker=null);this._destroyRenderer();this._memCache.destroy();this._memCache=null;this._codedDomainPopulationAbortController&&(this._codedDomainPopulationAbortController.abort(),this._codedDomainPopulationAbortController=null);this._codedDomainPopulationPromise=
null};e._initRenderer=function(){this._renderer=new R.PointRenderer({createGraphic:(a,b,c)=>this._createGraphic(a,b,c)});this._renderer.layerUid=this.layer.uid;this.updatingHandles.add(this,"_clippingBox",a=>this._renderer.clippingBox=a,2);this.updatingHandles.add(this,"suspended",a=>this._setPointsVisible(!a),2);this.updatingHandles.add(this,"pointScale",a=>this._renderer.scaleFactor=a,2);this._renderer.minSizePx=Math.sqrt(2);this.updatingHandles.add(this,"useRealWorldSymbolSizes",a=>this._renderer.useRealWorldSymbolSizes=
a,2);this.updatingHandles.add(this,"pointSize",a=>{const b=Y.pt2px(a);this._renderer.size=a;this._renderer.sizePx=b},2);this.updatingHandles.add(this,"slicePlaneEnabled",a=>this._renderer.slicePlane=a,2);this.updatingHandles.add(this,"inverseDensity",()=>this._setUpdateViewNeeded(),2);this.updatingHandles.add(this,"maximumPointCount",()=>this._setUpdateViewNeeded(),2);this.updatingHandles.add(this.view,"qualitySettings.sceneService.pointCloud.lodFactor",a=>{this._lodFactor=a;this._setUpdateViewNeeded()},
2)};e._destroyRenderer=function(){this._renderer.removeAll();this._setPointsVisible(!1)};e._createGraphic=function(a,b,c){const d=u.isSome(a.pointIdFilterMap)?a.pointIdFilterMap[b]:b;c=this.view.computeMapPointFromVec3d(c);const f=this._createGraphicAttributes(a,d);return new Q.PointGraphic({pointCloudMetadata:{nodeId:a.id,pointIndexInNode:b,attributePointIndexInNode:d,epoch:this._nodeLoadEpoch},geometry:c,attributes:f,layer:this.layer,sourceLayer:this.layer})};e._createGraphicAttributes=function(a,
b){const c={};for(const d of a.attributes)this._encodeGraphicAttribute(d.attributeInfo,d.values,b,c);return c};e._encodeGraphicAttribute=function(a,b,c,d){var f=a.storageInfo&&a.storageInfo.attributeValues;const h=f?f.valuesPerElement:1;if(1===h)d[a.name]=b[c];else if("UInt8"===f.valueType&&4>=h){f=0;c*=h;for(let g=c;g<c+h;g++)f=(f<<8)+b[g];d[a.name]=f}else d[a.name]=void 0};e._setPointsVisible=function(a){a&&!this._rendererAdded?(this.view._stage.addRenderPlugin([4],this._renderer),this._rendererAdded=
!0):!a&&this._rendererAdded&&(this.view._stage.removeRenderPlugin(this._renderer),this._rendererAdded=!1)};e._rendererChanged=function(){this._renderer.useFixedSizes=v.rendererUsesFixedSizes(this.layer.renderer);this._reload()};e._reload=function(){this._clearNodeState();this._memCache.clear();this._setUpdateViewNeeded()};e._elevationOffsetChanged=function(){this._clearNodeState();this._memCache.clear();this._initNodePages()};e._scaleUpdateHandler=function(a){this.layer.minScale||this.layer.maxScale?
ba.projectBoundingRect(a.extent,a.spatialReference,S,this.layer.spatialReference)&&(this._nodeScales.forEach((b,c)=>{this._renderedNodes.has(c)?(b=this._index.getNode(c),L.containsPoint(S,b.obb.center)&&this._nodeScales.set(c,a.scale)):this._nodeScales.delete(c)}),this._setUpdateViewNeeded()):this._nodeScales.clear()};e.displayNodes=function(a){this._workQueue=D.nodeDiff([...this._renderedNodes],a,this._index);D.sortFrontToBack(this._workQueue,this.view.state.camera.viewForward,this._index);D.splitWorkEntries(this._workQueue,
8,this._index);this._updateQueues();this._totalWork=this._computeWork();this._updateLoading();this._layerIsVisible=0<a.length||this._loadingInitNodePage;this.notifyChange("suspended")};e.cancelLoading=function(){this._cancelNodeLoading();this._cancelIndexLoading()};e._cancelNodeLoading=function(){const a=[];this._loadingNodes.forEach(({abortController:b})=>a.push(b));this._loadingNodes.clear();for(const b of a)b.abort();this._workQueue=[];this._idleQueue.cancelAll();this._totalWork=this._computeWork();
this._updateLoading()};e._updateQueues=function(){const a=new Set;this._workQueue.forEach(d=>d.load.forEach(f=>a.add(f)));const b=[],c=new Map;this._loadingNodes.forEach((d,f)=>{a.has(f)?c.set(f,d):b.push(d)});this._loadingNodes=c;for(const {abortController:d}of b)d.abort();this._workQueue=this._workQueue.filter(d=>{for(const f of d.load)if(this._loadingNodes.has(f))return this._recalcWork=!0,!1;return!0});this._totalWork=this._computeWork();this._updateLoading()};e._cancelIndexLoading=function(){this._indexQueue=
[];this._indexPagesLoading.forEach(({abortController:a})=>a.abort());this._indexPagesLoading.clear();this._totalWork=this._computeWork();this._updateLoading()};e._clearNodeState=function(){this._nodeLoadEpoch++;this._renderedNodes.forEach(a=>this._removeFromRenderer(a));this._cancelNodeLoading()};e._idleBegin=function(){this._setUpdateViewNeeded()};e._idleEnd=function(){this._setUpdateViewNeeded()};e._needsUpdate=function(){return this.suspended?this._updateViewNeeded:this._updateViewNeeded||0<this._indexQueue.length||
0<this._workQueue.length||0<this._idleQueue.length};e._process=function(a){if(this.suspended)this._updateViewNeeded&&(this._updateViewNeeded=!1,a=this._isRootNodeVisible(),a!==this._layerIsVisible&&(this._layerIsVisible=a,this.notifyChange("suspended")),this._updateLoading());else{for(a.run(()=>this._updateWorkQueues());0<this._indexQueue.length&&a.run(()=>this._processIndexQueue()););for(this._processWorkQueue(a);0<this._idleQueue.length&&a.run(()=>this._idleQueue.process()););}};e._processIndexQueue=
function(){const a=this._indexQueue.shift(),b=this._loadNodePage(a);this._indexPagesLoading.set(a,b);b.promise.then(c=>{this._index.addPage(a,c,this._elevationOffset);this._setUpdateViewNeeded()}).then(()=>{this._indexPagesLoading.delete(a)},()=>{this._indexPagesLoading.delete(a)});return!0};e._processWorkQueue=function(a){for(;!a.done;){const b=this._scheduleWorkEntry();if(u.isNone(b))break;this._processWorkEntry(b);a.madeProgress()}};e._scheduleWorkEntry=function(){let a=this._workQueue.length;
for(;a--;){const b=this._workQueue.shift();if(b.remove.find(c=>!this._renderedNodes.has(c)))this._workQueue.push(b);else return b}return null};e._processWorkEntry=function(a){if(0===a.load.length)for(const b of a.remove)this._removeFromRenderer(b);else p.all(a.load.map(b=>{const c=p.createAbortController(),d=this._memCache.pop(b.toString());u.isSome(d)?this._loadingNodes.set(b,{abortController:c,promise:p.resolve(d)}):this._loadingNodes.has(b)||this._loadingNodes.set(b,{abortController:c,promise:this.loadNode(b,
c.signal)});return this._loadingNodes.get(b).promise})).then(b=>{for(let c=0;c<a.load.length;c++)if(b[c]){const d=this._setupRendererData(a.load[c],b[c]);this._addToRenderer(d)}for(const c of a.remove)this._removeFromRenderer(c)}).catch(()=>{}).then(()=>{for(const b of a.load)this._loadingNodes.delete(b);this._updateLoading();this._recalcWork&&0===this._idleQueue.length&&0===this._indexQueue.length&&0===this._loadingNodes.size&&(this._recalcWork=!1,this._setUpdateViewNeeded())}),this._updateLoading()};
e.populateClassCodeCodedDomain=async function(a,b){const c=this.layer.fieldsIndex.get("CLASS_CODE");c&&!c.domain&&-1!==a.indexOf(c.name)&&(a=await K.result(this.layer.queryCachedStatistics("CLASS_CODE",{signal:b})),!1!==a.ok&&(a=(a=a.value)&&a.labels&&a.labels.labels)&&Array.isArray(a)&&(c.domain=new X({name:"CLASS_CODE",codedValues:a.map(d=>new W["default"]({code:d.value,name:d.label}))})))};e.prepareFetchPopupFeatures=async function(a){this._codedDomainPopulationPromise||(this._codedDomainPopulationAbortController=
p.createAbortController(),this._codedDomainPopulationPromise=this.populateClassCodeCodedDomain(a,this._codedDomainPopulationAbortController.signal).then(()=>{this._codedDomainPopulationAbortController=null}));return this._codedDomainPopulationPromise};e.whenGraphicAttributes=async function(a,b){const c=this._splitGraphicsPerNode(a),d=this.layer.attributeStorageInfo,f=b.map(l=>v.getAttributeInfo(d,l)),h=async(l,t)=>{const w=this._index.getNode(t);await K.forEach(f,async y=>{const z=y.useElevation?
await this._loadElevationAttributeFromGeometry(w.resourceId):await this._loadAndParseAttribute(w,y);if(z)for(const q of l)this._isValidPointGraphic(q)&&this._encodeGraphicAttribute(y,z,q.pointCloudMetadata.attributePointIndexInNode,q.attributes)})},g=[];c.forEach((l,t)=>{g.push(h(l,t))});await p.eachAlways(g);return a};e._isValidPointGraphic=function(a){return a instanceof Q.PointGraphic&&a.pointCloudMetadata&&a.pointCloudMetadata.epoch===this._nodeLoadEpoch};e._splitGraphicsPerNode=function(a){const b=
new Map;for(const c of a){if(!this._isValidPointGraphic(c))continue;a=c.pointCloudMetadata;const d=b.get(a.nodeId);d?d.push(c):b.set(a.nodeId,[c])}return b};e._loadAndParseAttribute=async function(a,b){const c=await this._loadAttribute(a.resourceId,b,null);return u.isSome(c)?E.getAttributeValues({attributeInfo:b,buffer:c},null,a.vertexCount):null};e._loadElevationAttributeFromGeometry=async function(a){a=E.readGeometry(this.layer.store.defaultGeometrySchema,await this._loadGeometry(a,null));return E.elevationFromPositions(a,
a.length/3)};e.highlight=function(a){if(!a)return{remove(){}};a=V.isCollection(a)?a.toArray():Array.isArray(a)?a:[a];return this._renderer.highlight(a.map(b=>this._graphicToPointDefinition(b)))};e._graphicToPointDefinition=function(a){if(!this._isValidPointGraphic(a))return null;const {nodeId:b,pointIndexInNode:c}=a.pointCloudMetadata;return null!=b&&null!=c?{nodeId:b,pointId:c}:null};e._computeWork=function(){let a=0;for(const b of this._workQueue)a+=b.load.length+b.remove.length;a+=this._loadingNodes.size;
a+=(this._indexQueue.length+this._indexPagesLoading.size)*this._index.pageSize;a+=this._loadingInitNodePage?100:0;return a+=this._updateViewNeeded?100:0};e._updateLoading=function(){this.notifyChange("updating");this.notifyChange("updatingProgressValue")};e.canResume=function(){return G.prototype.canResume.call(this)&&this._layerIsVisible};e.isUpdating=function(){return this.suspended?this._updateViewNeeded:0<this._computeWork()};e._initNodePages=function(){const a=this.layer.store.index;this._index=
new oa(this.layer.spatialReference,this.view.renderCoordsHelper.spatialReference,a.nodesPerPage||a.nodePerIndexBlock);this._cancelIndexLoading();this._traverseVisible=this._index.createVisibilityTraverse();this._layerIsVisible=this._loadingInitNodePage=!0;this.notifyChange("suspended");this._updateLoading();this._pageMultiplier=null!=a.nodesPerPage?1:a.nodePerIndexBlock;return this._loadNodePage(0).promise.then(b=>{this._index.addPage(0,b,this._elevationOffset);this._loadingInitNodePage=!1;this._setUpdateViewNeeded()})};
e._loadNodePage=function(a){const b=p.createAbortController();return{promise:this._requestNodePage(`${this.baseUrl}/nodepages/${a*this._pageMultiplier}`,b.signal).then(c=>c.nodes.map((d,f)=>({resourceId:null!=d.resourceId?d.resourceId:a*this._index.pageSize+f,obb:d.obb,firstChild:d.firstChild,childCount:d.childCount,vertexCount:null!=d.vertexCount?d.vertexCount:d.pointCount,lodThreshold:null!=d.lodThreshold?d.lodThreshold:d.effectiveArea}))),abortController:b}};e._updateWorkQueues=function(){if(!this._updateViewNeeded)return!1;
let a=this.inverseDensity/this._lodFactor*this._getLodMemoryFactor();const b=this.maximumPointCount*this._lodFactor*this._getLodMemoryFactor();let c=this._computeNodesForMinimumDensity(a),d=this._computePointCount(c),f=Math.sqrt(d/(.75*b));for(;d>b;)a*=f,c=this._computeNodesForMinimumDensity(a),d=this._computePointCount(c),f=Math.sqrt(2);this.displayNodes(c);this._updateViewNeeded=!1;this._updateLoading();return!0};e._computePointCount=function(a){let b=0;for(let c=0;c<a.length;c++){const d=this._index.getNode(a[c]);
d&&(b+=d.vertexCount)}return b};e._getLodMemoryFactor=function(){return this.view.resourceController.memoryController.memoryFactor};e._isRootNodeVisible=function(){let a=!1;this._traverseVisible({frustumPlanes:this.view.state.camera.frustum.planes,clippingBox:this._clippingBox},{predicate:(b,c,d)=>{a=d;return!1},pageMiss:()=>{}});return a};e._computeNodesForMinimumDensity=function(a){const b=this.view.state.camera,c=b.frustum,d=this._clippingBox,f=b.viewForward,h=Z.dot(f,b.eye),g=O.plane.fromNormalAndOffset(f,
-h,qa),l=b.perScreenPixelRatio/2,t=a*a,w=this._nodeIdArray;w.length=0;const {minScale:y,maxScale:z}=M.extractSafeScaleBounds(this.layer),q=0===y&&0===z?r=>w.push(r):r=>{const x=this._getScale(r);M.scaleBoundsPredicate(x,y,z)&&w.push(r)};this._traverseVisible({frustumPlanes:c.planes,clippingBox:d},{predicate:(r,x,A)=>{if(!A)return!1;if(0===x.childCount)return q(r),!1;A=this._index.getRenderObb(r);return this._computeAveragePixelArea(A,x.lodThreshold,x.vertexCount,g,l)<=t?(q(r),!1):!0},pageMiss:(r,
x)=>{q(r);0>this._indexQueue.indexOf(x)&&this._indexQueue.push(x)}});return w};e._getScale=function(a){var b=this._nodeScales.get(a);null==b&&(b=this._index.getNode(a).obb.center,this._tmpPoint.x=b[0],this._tmpPoint.y=b[1],this._tmpPoint.z=b[2],b=this.view.basemapTerrain.getScale(this._tmpPoint),this._nodeScales.set(a,b));return b};e._computeAveragePixelArea=function(a,b,c,d,f){a=Math.max(1E-7,ma.minimumDistancePlane(a,d));return b/(a*a)/(4*f*f)/c};e.loadNode=function(a,b){try{return this.loadNodeAsync(a,
b)}catch(c){throw p.isAbortError(c)||F.error(c),c;}};e.loadAdditionalUserAttributes=async function(a,b,c){var d=this.layer.outFields;if(!d)return[];d=J.unpackFieldNames(this.layer.fields,d);a=new Set(a.map(g=>u.isSome(g)?g.name:null));const f=this.layer.attributeStorageInfo,h=[];for(const g of d)a.has(g)||(d=v.getAttributeInfo(f,g))&&h.push(b(d));b=await p.eachAlwaysValues(h);p.throwIfAborted(c);return u.mapSome(b,g=>g)};e.loadNodeAsync=async function(a,b){const c=this._index.getNode(a),d=v.getRendererInfo(this.layer),
f=v.getFilterInfo(this.layer),h=c.resourceId,g=async l=>{if(u.isNone(l))return null;if(l.useElevation)return{attributeInfo:l,buffer:null};const t=await this._loadAttribute(h,l,b);return u.isSome(t)?{attributeInfo:l,buffer:t}:null};return this._idleQueue.push(async()=>{var l=this._loadGeometry(h,b);const {primaryAttribute:t,modulationAttribute:w}=d,y=g(t),z=g(w);var q=f.map(H=>H.attributeInfo);const r=q.map(H=>g(H));q=this.loadAdditionalUserAttributes([t,w,...q],g,b);const [x,A,ra,sa,ta]=await p.all([l,
y,z,p.all(r),q]);p.throwIfAborted(b);l={geometryBuffer:x,primaryAttributeData:A,modulationAttributeData:ra,filterAttributesData:sa,userAttributesData:ta,schema:this.layer.store.defaultGeometrySchema,rendererInfo:d,filterInfo:f,obb:this._index.getRenderObb(a),elevationOffset:this._elevationOffset,inSR:this.layer.spatialReference.toJSON(),outSR:this.view.renderCoordsHelper.spatialReference.toJSON()};return this._worker.invoke(l,b)},b)};e._loadGeometry=async function(a,b){return this._requestData(`${this.baseUrl}/nodes/${a}/geometries/0`,
b)};e._loadAttribute=async function(a,b,c){return u.isNone(b)||!b.storageInfo?null:this._requestData(`${this.baseUrl}/nodes/${a}/attributes/${b.storageInfo.key}`,c)};e._requestNodePage=function(a,b){return this._indexRequester.request(a,"json",{query:{f:"json"},signal:b})};e._requestData=function(a,b){return this._dataRequester.request(a,"binary",{signal:b})};e._removeFromRenderer=function(a){if(this._renderedNodes.has(a)){const b=this._renderer.removeNode(a);this._renderedNodes.delete(a);this._nodeScales.delete(a);
this._memCache.put(b.id.toString(),b,5*b.coordinates.length+128)}};e._addToRenderer=function(a){this._renderedNodes.has(a.id)||(this._renderedNodes.add(a.id),this._renderer.addNode(a))};e._setupRendererData=function(a,b){const c=this._index.getNode(a),d=Math.sqrt(c.lodThreshold/c.vertexCount),f=this._index.getRenderObb(a);if(R.PointRenderer.isInstanceOfNode(b))return b.splatSize=d,b.obb=f,b.origin=N.clone(b.obb.center),b;if(b.obb.halfSize[0]>1.001*f.halfSize[0]||b.obb.halfSize[1]>1.001*f.halfSize[1]||
b.obb.halfSize[2]>1.001*f.halfSize[2]){if(0<this._maxLoggedBoxWarnings){const h=g=>`[${g.halfSize[0]}, ${g.halfSize[1]}, ${g.halfSize[2]}]`;F.warn(`Node ${a} reported bounding box too small. got ${h(f)} but points cover ${h(b.obb)}`);0===--this._maxLoggedBoxWarnings&&F.warn("  Too many bounding box errors, stopping reporting for this layer.")}this._index.setRenderObb(a,b.obb)}return{id:a,coordinates:b.points,origin:N.clone(f.center),rgb:b.rgb,attributes:b.attributes,pointIdFilterMap:b.pointIdFilterMap,
highlights:null,splatSize:d,obb:f,isLeaf:0===c.childCount}};e.getUsedMemory=function(){let a=0;this._renderer.forEachNode(b=>{a+=160;a+=C.estimateSize(b.coordinates);for(const c of b.attributes)b=c.values,C.isArrayBuffer(b.buffer)&&(a+=C.estimateSize(b))});return a};e.getUnloadedMemory=function(){var a=this._renderedNodes.size;if(4>a)return 0;const b=[...this._renderedNodes].reduce((f,h)=>f+this._index.getNode(h).vertexCount);let c=this._loadingNodes.size;for(var d=0;d<this._workQueue.length;d++)c+=
this._workQueue[d].load.length,c-=this._workQueue[d].remove.length;if(0>c)return 0;d=c*b/a;a=(this.getUsedMemory()-160*a)/b;return d*a+160*c};e.ignoresMemoryFactor=function(){return!1};I._createClass(B,[{key:"pointScale",get:function(){const a=v.getSplatSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.scaleFactor?a.scaleFactor:1}},{key:"useRealWorldSymbolSizes",get:function(){const a=v.getFixedSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.useRealWorldSymbolSizes?
a.useRealWorldSymbolSizes:!1}},{key:"pointSize",get:function(){const a=v.getFixedSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.size?a.size:0}},{key:"inverseDensity",get:function(){return this.layer&&this.layer.renderer?96/this.layer.renderer.pointsPerInch:5}},{key:"availableFields",get:function(){var a=v.getRendererInfo(this.layer);const b=new Set;a.primaryAttribute&&b.add(a.primaryAttribute.name);a.modulationAttribute&&b.add(a.primaryAttribute.name);if(a=v.getFilterInfo(this.layer))for(const c of a)b.add(c.attributeInfo.name);
if(this.layer.outFields)for(const c of J.unpackFieldNames(this.layer.fields,this.layer.outFields))b.add(c);return Array.from(b)}},{key:"_clippingBox",get:function(){if(!this.view||!this.view.clippingArea)return null;const a=fa.create();return ia.projectToBoundingBox(this.view.clippingArea,a,this.view.renderSpatialReference)?a:null}},{key:"_elevationOffset",get:function(){const a=this.layer&&this.layer.elevationInfo;if(a&&"absolute-height"===a.mode){const b=aa.getMetersPerVerticalUnitForSR(this.layer.spatialReference),
c=ca.getMetersPerUnit(a.unit);return u.unwrapOr(a.offset,0)*c/b}return 0}},{key:"updatingProgressValue",get:function(){if(this.suspended)return this._updateViewNeeded?0:1;const a=this._computeWork();return 1-Math.min(this._totalWork,a)/this._totalWork}},{key:"performanceInfo",get:function(){return{nodes:this._renderedNodes.size,displayedNumberOfFeatures:[...this._renderedNodes].reduce((a,b)=>a+this._index.getNode(b).vertexCount,0),maximumNumberOfFeatures:this.maximumPointCount,totalNumberOfFeatures:-1,
core:null,"Loading Nodes":this._loadingNodes.size,"Index Queue":this._indexQueue.length,"Work Queue":this._workQueue.length,"Idle Queue":this._idleQueue.length}}},{key:"test",get:function(){return{index:this._index,visibleNodes:this._renderedNodes}}}]);return B}(pa.PopupSceneLayerView(ja.LayerView3D(la)));m.__decorate([n.property()],k.prototype,"layer",void 0);m.__decorate([n.property({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],k.prototype,"baseUrl",void 0);m.__decorate([n.property({readOnly:!0,
dependsOn:["layer.renderer"]})],k.prototype,"pointScale",null);m.__decorate([n.property({readOnly:!0,dependsOn:["layer.renderer"]})],k.prototype,"useRealWorldSymbolSizes",null);m.__decorate([n.property({readOnly:!0,dependsOn:["layer.renderer"]})],k.prototype,"pointSize",null);m.__decorate([n.property({readOnly:!0,dependsOn:["layer.renderer"]})],k.prototype,"inverseDensity",null);m.__decorate([n.property()],k.prototype,"maximumPointCount",void 0);m.__decorate([n.property({readOnly:!0,dependsOn:["layer.renderer",
"layer.filters","layer.outFields"]})],k.prototype,"availableFields",null);m.__decorate([n.property({readOnly:!0,dependsOn:["view.clippingArea"]})],k.prototype,"_clippingBox",null);m.__decorate([n.property({readOnly:!0,dependsOn:["layer.elevationInfo"]})],k.prototype,"_elevationOffset",null);m.__decorate([n.property({type:Boolean})],k.prototype,"slicePlaneEnabled",void 0);m.__decorate([n.property()],k.prototype,"updating",void 0);m.__decorate([n.property(ka.updatingProgress)],k.prototype,"updatingProgress",
void 0);m.__decorate([n.property({readOnly:!0,dependsOn:["suspended"]})],k.prototype,"updatingProgressValue",null);k=m.__decorate([U.subclass("esri.views.3d.layers.PointCloudLayerView3D")],k);const S=L.create();return k});