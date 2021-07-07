layui.define(['readWorkbookFromRemoteFile', 'optionCharts', 'createFillSymbol', 'jquery'], function (exports) {
  var {
    readWorkbookFromRemoteFile
  } = layui.readWorkbookFromRemoteFile;
  var {
    createFillSymbol
  } = layui.createFillSymbol;
  var {
    optionChartLineplotStream,
    optionChartBoxplotStream
  } = layui.optionCharts;
  var $ = layui.jquery;

  function historianData(container, Map, GeoJSONLayer, SceneView, BasemapToggle) {
    readWorkbookFromRemoteFile('./json/characteristics/waterDeterioration/historianData.xlsx', function (Res) {      
      const url_Watershed_V4 = "json/Shahe/Shahe_Watershed_V4.geojson";
      const url_Stream_V4 = "json/Shahe/Shahe_Stream_V4.geojson";
      const url_Zone_V2 = "json/Shahe/Shahe_Zone_V2.geojson";

      const url_HistorianDataPoint = "json/Shahe/Shahe_HistorianDataPoint.geojson";

      const HistoryData_HeZhangZhi = Res;
      console.log(HistoryData_HeZhangZhi)

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

      const template_HistorianDataPoint = {
        title: "<b>监测断面相关信息：</b>",
        content: createPopup,
        actions: [],
        overwriteActions: true,
        opacity: .6
      };

      // 

      function createPopup({
        graphic
      }) {
        console.log(graphic.attributes);
        var {
          Index
        } = graphic.attributes;


        var HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(HistoryData_HeZhangZhi, 'TP');
        var HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(HistoryData_HeZhangZhi, {
          Index,
          str: 'TP'
        });


        try {

          var popupElement = document.createElement("div");
          popupElement.innerHTML = "<b>断面索引号: </b> {Index} <br><b>断面名称: </b> {Name} <br><b>经度: </b> {X}<br><b>纬度: </b> {Y}<br><b>距离入南淝河口: </b> {Series} km<br>" +
            `
            <div id='HistorianDataDiv' style='height:800px;width:600px;'>
              <select id="waterQualitySelect">
                <option value="COD">COD</option>
                <option value="NH4">NH4</option>
                <option value="TN">TN</option>
                <option value="TP" selected>TP</option>
              </select>
              <div id="chartLineplot" class='chartLineplot_class' style='height:400px;width:1200px;'></div>
              <div id="chartBoxplot" class='chartBoxplot_class' style='height:300px;width:1200px;'></div>
              
            </div>
          `;

          console.log(popupElement)
          var ChartLineplot = echarts.init(popupElement.querySelector('#chartLineplot'), null, {});
          var ChartBoxplot = echarts.init(popupElement.querySelector('#chartBoxplot'), null, {});
          ChartLineplot.setOption(HistoryDataChartLineplot_HeZhangZhiOption);
          ChartBoxplot.setOption(HistoryDataChartBoxplot_HeZhangZhiOption);

          var select = popupElement.querySelector('#waterQualitySelect');

          select.addEventListener("change", chart);

          function chart() {
            var waterQualitySelect = select.options[select.selectedIndex].value;
            console.log(waterQualitySelect);

            if (waterQualitySelect === 'COD') {
              HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(HistoryData_HeZhangZhi, {
                Index,
                str: 'COD'
              });
              HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(HistoryData_HeZhangZhi, 'COD');
            } else if (waterQualitySelect === 'NH4') {
              HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(HistoryData_HeZhangZhi, {
                Index,
                str: 'NH4'
              });
              HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(HistoryData_HeZhangZhi, 'NH4');
            } else if (waterQualitySelect === 'TN') {
              HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(HistoryData_HeZhangZhi, {
                Index,
                str: 'TN'
              });
              HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(HistoryData_HeZhangZhi, 'TN');
            } else if (waterQualitySelect === 'TP') {
              HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(HistoryData_HeZhangZhi, {
                Index,
                str: 'TP'
              });
              HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(HistoryData_HeZhangZhi, 'TP');
            }
            ChartLineplot.setOption(HistoryDataChartLineplot_HeZhangZhiOption);
            ChartBoxplot.setOption(HistoryDataChartBoxplot_HeZhangZhiOption);
          }



          window.addEventListener('resize', function () {
            ChartLineplot.resize();
            ChartBoxplot.resize();
          });


          // popupElement.querySelector("#chartDiv").appendChild(canvas);
          return popupElement;
        } catch (error) {
          console.error(error);

        }
        return "<b>断面索引号: </b> {Index} <br><b>断面名称: </b> {Name} <br><b>经度: </b> {X}<br><b>纬度: </b> {Y}<br><b>距离入南淝河口: </b> {Series} km<br>"
      }



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

      const renderer_HistorianDataPoint = {
        type: "simple",
        symbol: {
          type: "picture-marker", // autocasts as new PictureMarkerSymbol()
          url: "src/style/res/HeZhangZhi.svg",
          width: "40px",
          height: "40px"
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

      const geojsonLayer_HistorianDataPoint = new GeoJSONLayer({
        url: url_HistorianDataPoint,
        outFields: ["*"],
        popupTemplate: template_HistorianDataPoint,
        renderer: renderer_HistorianDataPoint
      });

      var map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation",
        layers: [geojsonLayer_HistorianDataPoint, geojsonLayer_Zone_V2, geojsonLayer_Watershed_V4, geojsonLayer_Stream_V4]
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

      // Event handler that fires each time an action is clicked.
      view.popup.on("trigger-action", function (event) {
        if (event.action.id === "chart") {
          dataUpdate()
          chart();
        }
      });

      view.ui.add(basemapToggle, "top-left");

      function dataUpdate() {
        FIndex = view.popup.selectedFeature.attributes.Index;
      }


      function formatDate(numb, format) {
        const time = new Date(numb);
        return time;
      };

    });
  }

  exports('historianData', {
    historianData
  })
})
