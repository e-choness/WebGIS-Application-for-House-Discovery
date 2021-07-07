layui.define(function (exports) {

  function terrain(container, Map, GeoJSONLayer, SceneView, BasemapToggle) {
    const url_Watershed_W = "json/Shahe/Shahe_Watershed_W.geojson";
    const url_Stream_W = "json/Shahe/Shahe_Stream_W.geojson";

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

    var map = new Map({
      basemap: "topo-vector",
      ground: "world-elevation",
      layers: [geojsonLayer_Watershed_W, geojsonLayer_Stream_W]
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
  };
  
  exports('terrain', { terrain })
})
