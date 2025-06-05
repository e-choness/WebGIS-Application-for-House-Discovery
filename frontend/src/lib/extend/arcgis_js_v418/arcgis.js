layui.define(function(exports) {
  require([
    'esri/Map',
    'esri/layers/GeoJSONLayer',
    'esri/views/MapView',
    'esri/layers/FeatureLayer',
    'esri/views/SceneView',
    'esri/widgets/BasemapToggle',
    'esri/widgets/BasemapGallery',
    'esri/widgets/Search',
    'esri/widgets/Legend',
    'esri/PopupTemplate',
    'esri/symbols/PointSymbol3D',
    'package/echartsLayer',
    'esri/layers/GraphicsLayer',
    'esri/geometry/Multipoint',
    'esri/geometry/Point',
    'esri/Graphic',
    'esri/layers/GroupLayer',
    'esri/widgets/LayerList',
    "esri/layers/OpenStreetMapLayer"
  ], function(Map, GeoJSONLayer, FeatureLayer, MapView, SceneView, BasemapToggle, BasemapGallery, Search, Legend, PopupTemplate, PointSymbol3D, echartsLayer, GraphicsLayer, Multipoint, Point, Graphic, GroupLayer, LayerList, OpenStreetMapLayer) {
    var arcgis = {
      Map,
      GeoJSONLayer,
      MapView,
      SceneView,
      BasemapToggle,
      BasemapGallery,
      Search,
      PointSymbol3D,
      FeatureLayer,
      Legend,
      PopupTemplate,
      echartsLayer,
      GraphicsLayer,
      Multipoint,
      Point,
      Graphic,
      GroupLayer,
      LayerList,
      OpenStreetMapLayer
    }
    exports('arcgis', arcgis)
  })
})
