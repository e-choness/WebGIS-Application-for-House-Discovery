layui.define(['createFillSymbol'],function (exports) {
  function landuse(container, Map, GeoJSONLayer, SceneView, BasemapToggle) {
    var {createFillSymbol }= layui.createFillSymbol
    const url_Watershed_W = "json/Shahe/Shahe_Watershed_W.geojson";
    const url_Stream_W = "json/Shahe/Shahe_Stream_W.geojson";
    const url_Landuse = "json/Shahe/LandUse_Origin/Shahe_LandUse_Final.geojson";

    const template_Watershed_W = {
      title: "<b>沙河流域区位信息：</b>",
      content: "<b>沙河流域面积: </b> {Area} km^2 <br><b>经度跨越范围: </b> {Xmin} ~ {Xmax}<br><b>纬度跨越范围: </b> {Ymin} ~ {Ymax}<br><b>其它有效信息: </b> 沙河流域是巢湖流域内典型的城郊村镇型小流域 <br>",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_Stream_W = {
      title: "<b>沙河河道相关信息：</b>",
      content: "<b>沙河河道长度: </b>自迎春水库至河口长 {Length} km <br><b>其它有效信息: </b> 沙河是巢湖流域内南淝河左岸支流，流经龙泉村、桥头集镇、复兴乡、长乐乡于李六村的板桥入南淝河<br>",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_Landuse = {
      title: "<b>沙河土地利用相关信息：</b>",
      content: "<b>根据需要，沙河流域共区分了10种土地利用类型：</b><br><b>村镇(Town)</b><br><b>裸地(Bare)</b><br><b>矿区(Mining)</b><br><b>水田(Wet)</b><br><b>道路(Road)</b><br><b>水面(Water)</b><br><b>旱地(Dry)</b><br><b>林地(Wood)</b><br><b>果园(Fruit)</b><br><b>稻田(Paddy)</b><br><br><b>当前所选地块的土地利用类型: </b> {LandUse} <br><b>所属子流域: </b> {Index} <br><b>所属行政村: </b> {region} <br><b>所属TMDL分区: </b> {Zone} <br><b>坡度分级: </b> {SlopeClass} <br><b>面积: </b> {Area} m2 <br><br><b>向沙河贡献COD负荷总量: </b> {COD_LO} kg/年 <br><b>向沙河贡献COD负荷源强: </b> {COD_SI} kg/年/km2 <br><b>向沙河贡献氨氮负荷总量: </b> {NH3_LO} kg/年 <br><b>向沙河贡献氨氮负荷源强: </b> {NH3_SI} kg/年/km2 <br><b>向沙河贡献总氮负荷总量: </b> {TN_LO} kg/年 <br><b>向沙河贡献总氮负荷源强: </b> {TN_SI} kg/年/km2 <br><b>向沙河贡献总磷负荷总量: </b> {TP_LO} kg/年 <br><b>向沙河贡献总磷负荷源强: </b> {TP_SI} kg/年/km2 <br>",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };


    const renderer_Watershed_W = {
      type: "simple",
      symbol: {
        type: "line-3d",
        symbolLayers: [{
          type: "line",
          size: 1.5,
          material: {
            color: "fuchsia"
          },
          cap: "round",
          join: "round"
        }]
      }
    };

    const renderer_Stream_W = {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 225, 225, 0.9],
        outline: {
          color: [0, 225, 225, 0.9],
          width: "1px"
        }
      }
    };



    const renderer_Landuse = {
      type: "unique-value",
      field: "LandUse",
      uniqueValueInfos: [
        createFillSymbol("Road", "#330000"),
        createFillSymbol("Road02", "#330000"),
        createFillSymbol("Water", "#99FFFF"),
        createFillSymbol("Water001", "#99FFFF"),
        createFillSymbol("Water01", "#99FFFF"),
        createFillSymbol("Water02", "#99FFFF"),
        createFillSymbol("WaterP", "#99FFFF"),
        createFillSymbol("Dry", "#FFCC00"),
        createFillSymbol("Dry001", "#FFCC00"),
        createFillSymbol("Dry01", "#FFCC00"),
        createFillSymbol("Dry02", "#FFCC00"),
        createFillSymbol("DryP", "#FFCC00"),
        createFillSymbol("Town", "#CC33FF"),
        createFillSymbol("Town02", "#CC33FF"),
        createFillSymbol("TownP", "#CC33FF"),
        createFillSymbol("Wood", "#33CC33"),
        createFillSymbol("Wood001", "#33CC33"),
        createFillSymbol("Wood01", "#33CC33"),
        createFillSymbol("Wood02", "#33CC33"),
        createFillSymbol("Fruit", "#FF9999"),
        createFillSymbol("Paddy", "#FFFF00"),
        createFillSymbol("Paddy02", "#FFFF00"),
        createFillSymbol("Mining", "#330066"),
        createFillSymbol("Mining01", "#330066"),
        createFillSymbol("Bare", "#CCCC99"),
        createFillSymbol("Bare001", "#CCCC99"),
        createFillSymbol("Bare02", "#CCCC99"),
        createFillSymbol("Plant", "red"),
        createFillSymbol("Wet", "#0033FF")
      ]
    };

    const geojsonLayer_Watershed_W = new GeoJSONLayer({
      url: url_Watershed_W,
      popupTemplate: template_Watershed_W,
      renderer: renderer_Watershed_W,
      opacity: .9
    });

    const geojsonLayer_Stream_W = new GeoJSONLayer({
      url: url_Stream_W,
      popupTemplate: template_Stream_W,
      renderer: renderer_Stream_W,
      opacity: .9
    });

    const geojsonLayer_Landuse = new GeoJSONLayer({
      url: url_Landuse,
      popupTemplate: template_Landuse,
      renderer: renderer_Landuse,
      opacity: .9
    });

    var map = new Map({
      basemap: "topo-vector",
      ground: "world-elevation",
      layers: [geojsonLayer_Watershed_W, geojsonLayer_Stream_W, geojsonLayer_Landuse]
    });

    var view = new SceneView({
      container,
      map: map,
      popup: {
        dockEnabled: true,

        dockOptions: {
          // Disables the dock button from the popup
          buttonEnabled: false,
          // Ignore the default sizes that trigger responsive docking
          breakpoint: false,
          position: 'top-right'
        }
      },
      camera: {
        position: { // observation point
          x: 117.52,
          y: 31.753,
          z: 21000 // altitude in meters
        },
        tilt: 0 // perspective in degrees
      }
    });

    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "satellite"
    });

    view.ui.add(basemapToggle, "top-left");
  }
  exports('landuse', {
    landuse
  })
})
