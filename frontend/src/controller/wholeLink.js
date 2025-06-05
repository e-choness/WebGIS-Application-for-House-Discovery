layui.define([ 'jquery', 'splitRiverSummaryData','createFillSymbol', 'optionCharts'], function (exports) {
  
  var { optionChartLink } = layui.optionCharts;
  var $ = layui.jquery;
  var { splitRiverSummaryData } = layui.splitRiverSummaryData;
  var { createFillSymbol } = layui.createFillSymbol;

  function wholeLink(container, optionID, chartID, Map, echartsLayer, GeoJSONLayer, SceneView, BasemapToggle) {
    
    var datas_river_summary_raw = new Object();
    var datas_river_summary_tran = new Array();

    $.ajaxSetup({
        async: false
    });
    str_stream = 'json/data/wq/present/' + 'stream' + '.json'
    $.getJSON(str_stream, function (stream) {
        datas_river_summary_raw = stream;
    });
    datas_river_summary_tran = splitRiverSummaryData(datas_river_summary_raw);
    
    $.get('json/linkage/Shahe_StreamLines_V1.json', function (data) {

      var lines = data.features.map(function (track) {
          return {
              coords: track.geometry.coordinates,
              type: track.properties.Type
          };

      });

      const url_Watershed_V4 = "json/Shahe/Shahe_Watershed_V4.geojson";
      const url_Stream_V4 = "json/Shahe/Shahe_Stream_V4.geojson";
      const url_Zone_V2 = "json/Shahe/Shahe_Zone_V2.geojson";

      const template_Zone_V2 = {
          title: "<b>所选TMDL分区相关信息：</b>",
          content: "<b>索引号: </b> {Zone} <br><b>面积: </b> {Area} km2 <br>",
          actions: [],
          overwriteActions: true,
          opacity: .6
      };

      const template_Watershed_V4 = {
          title: "<b>所选沙河子流域相关信息：</b>",
          content: "<b>索引号: </b> {Index} <br><b>面积: </b> {Area} km2 <br>",
          actions: [],
          overwriteActions: true,
          opacity: .6
      };

      const template_Stream_V4 = {
          title: "<b>所选沙河子河道相关信息：</b>",
          content: "<b>索引号: </b> {Index} <br><b>长度: </b> {Specific_L} m <br><b>平均宽度: </b> {Width} m <br><b>平均水面面积: </b> {Area} m2 <br>",
          actions: [],
          overwriteActions: true,
          opacity: .6
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
              createFillSymbol("F", "#CCCC99")
          ]
      };

      const renderer_Watershed_V4 = {
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

      const renderer_Stream_V4 = {
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

      const geojsonLayer_Zone_V2 = new GeoJSONLayer({
          url: url_Zone_V2,
          popupTemplate: template_Zone_V2,
          renderer: renderer_Zone_V2,
          opacity: .3
      });

      const geojsonLayer_Watershed_V4 = new GeoJSONLayer({
          url: url_Watershed_V4,
          popupTemplate: template_Watershed_V4,
          renderer: renderer_Watershed_V4,
          opacity: .9
      });

      const geojsonLayer_Stream_V4 = new GeoJSONLayer({
          url: url_Stream_V4,
          popupTemplate: template_Stream_V4,
          renderer: renderer_Stream_V4,
          opacity: .9
      });

      var map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation",
          layers: [geojsonLayer_Zone_V2, geojsonLayer_Watershed_V4,
              geojsonLayer_Stream_V4]
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

      option = {
          series: [{
              type: 'lines',
              coordinateSystem: 'arcgis',
              data: lines,
              polyline: true,
              effect: {
                  show: true,
                  // symbol: 'arrow',
                  period: 6,
                  trailLength: 0.001,
                  symbolSize: 12
              },
              lineStyle: {
                  normal: {
                      color: function (params) {
                          var colorList = [];
                          if (params.data.type == 'S') {
                              return '#0099FF';
                          } else {
                              return '#009999';
                          }
                      },
                      opacity: 0.6,
                      width: 0.0
                  }
              }
          }]
      };



      view.on('layerview-create', function () {
          var chart = new echartsLayer(view, echarts);
          chart.setChartOption(option);
      });


      window.addEventListener('resize', function () {
          chart.resize();
      });

      var ChartLink = echarts.init(document.getElementById(chartID), null, {});
      var ChartLinkOption = optionChartLink('TP', datas_river_summary_tran);

      var waterQualitySelect = $("#" + optionID + " option:selected").val();
      console.log(waterQualitySelect);
      
      if (waterQualitySelect === 'COD') {
          ChartLinkOption = optionChartLink('COD', datas_river_summary_tran);
      } else if (waterQualitySelect === 'NH4') {
          ChartLinkOption = optionChartLink('NH4', datas_river_summary_tran);
      } else if (waterQualitySelect === 'TN') {
          ChartLinkOption = optionChartLink('TN', datas_river_summary_tran);
      } else if (waterQualitySelect === 'TP') {
          ChartLinkOption = optionChartLink('TP', datas_river_summary_tran);
      }

      ChartLink.setOption(ChartLinkOption);

      window.addEventListener('resize', function () {
          ChartLink.resize();
      });

  });


  }

  exports('wholeLink', {wholeLink})
})
