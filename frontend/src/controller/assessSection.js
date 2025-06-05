layui.define(["createFillSymbol"], function (exports) {
  var { createFillSymbol } = layui.createFillSymbol;
  function assessSection(
    container,
    Map,
    GeoJSONLayer,
    SceneView,
    BasemapToggle
  ) {
    const url_Watershed_V4 = "json/Shahe/Shahe_Watershed_V4.geojson";
    const url_Stream_V4 = "json/Shahe/Shahe_Stream_V4.geojson";
    const url_Zone_V2 = "json/Shahe/Shahe_Zone_V2.geojson";
    const url_assessSection_V1 =
      "json/characteristics/waterObjective/Shahe_assessSection.geojson";

    const template_assessSection_V1 = {
      title: "<b>所选推荐考核断面相关信息：</b>",
      content:
        "<b>索引号: </b> {Index} <br><b>断面名称: </b> {Name} <br><b>目标考核区域: </b> {TargetZone} <br><b>重要信息: </b> {Des} <br>",
      actions: [],
      overwriteActions: true,
      opacity: 0.6,
    };

    const template_Zone_V2 = {
      title: "<b>所选TMDL分区相关信息：</b>",
      content: "<b>索引号: </b> {Zone} <br><b>面积: </b> {Area} km2 <br>",
      actions: [],
      overwriteActions: true,
      opacity: 0.6,
    };

    const template_Watershed_V4 = {
      title: "<b>所选沙河子流域相关信息：</b>",
      content: "<b>索引号: </b> {Index} <br><b>面积: </b> {Area} km2 <br>",
      actions: [],
      overwriteActions: true,
      opacity: 0.6,
    };

    const template_Stream_V4 = {
      title: "<b>所选沙河子河道相关信息：</b>",
      content:
        "<b>索引号: </b> {Index} <br><b>长度: </b> {Specific_L} m <br><b>平均宽度: </b> {Width} m <br><b>平均水面面积: </b> {Area} m2 <br>",
      actions: [],
      overwriteActions: true,
      opacity: 0.6,
    };

    const renderer_Zone_V2 = {
      type: "unique-value",
      field: "Zone",
      uniqueValueInfos: [
        createFillSymbol("A", "#33CC33"),
        createFillSymbol("B", "#330066"),
        createFillSymbol("C", "#CC33FF"),
        createFillSymbol("D", "#FFFF00"),
        createFillSymbol("E", "#FF9999"),
        createFillSymbol("F", "#CCCC99"),
      ],
    };

    const renderer_Watershed_V4 = {
      type: "simple",
      symbol: {
        type: "line-3d",
        symbolLayers: [
          {
            type: "line",
            size: 1.5,
            material: {
              color: "fuchsia",
            },
            cap: "round",
            join: "round",
          },
        ],
      },
    };

    const renderer_Stream_V4 = {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [0, 225, 225, 0.9],
        outline: {
          color: [0, 225, 225, 0.9],
          width: "1px",
        },
      },
    };

    const renderer_assessSection_V1 = {
      type: "simple", // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        style: "triangle",
        size: 20,
        color: "#FF0000",
        outline: {
          // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white",
        },
      },
    };

    const geojsonLayer_Zone_V2 = new GeoJSONLayer({
      url: url_Zone_V2,
      popupTemplate: template_Zone_V2,
      renderer: renderer_Zone_V2,
      opacity: 0.3,
    });

    const geojsonLayer_Watershed_V4 = new GeoJSONLayer({
      url: url_Watershed_V4,
      popupTemplate: template_Watershed_V4,
      renderer: renderer_Watershed_V4,
      opacity: 0.9,
    });

    const geojsonLayer_Stream_V4 = new GeoJSONLayer({
      url: url_Stream_V4,
      popupTemplate: template_Stream_V4,
      renderer: renderer_Stream_V4,
      opacity: 0.9,
    });

    const geojsonLayer_assessSection_V1 = new GeoJSONLayer({
      url: url_assessSection_V1,
      popupTemplate: template_assessSection_V1,
      renderer: renderer_assessSection_V1,
      opacity: 0.9,
    });

    var map = new Map({
      basemap: "topo-vector",
      ground: "world-elevation",
      layers: [
        geojsonLayer_assessSection_V1,
        geojsonLayer_Zone_V2,
        geojsonLayer_Watershed_V4,
        geojsonLayer_Stream_V4,
      ],
    });

    var view = new SceneView({
      container: container,
      map: map,
      popup: {
        dockEnabled: true,

        dockOptions: {
          // Disables the dock button from the popup
          buttonEnabled: false,
          // Ignore the default sizes that trigger responsive docking
          breakpoint: false,
          position: "top-right",
        },
      },
      camera: {
        position: {
          // observation point
          x: 117.52,
          y: 31.753,
          z: 21000, // altitude in meters
        },
        tilt: 0, // perspective in degrees
      },
    });

    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "satellite",
    });

    view.ui.add(basemapToggle, "top-left");
    // chartDone(F_Num, "TP", "Whole", "TP", 'Default', "Load");

    // chartAllocationStat();
  }
  exports("assessSection", {
    assessSection,
  });
});
