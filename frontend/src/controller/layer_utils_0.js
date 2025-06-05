layui.define(
  [
    'readWorkbookFromRemoteFile',
    'optionCharts',
    'createFillSymbol',
    'jquery',
    'arcgis',
    'element'
  ],
  function(exports) {
    var { readWorkbookFromRemoteFile } = layui.readWorkbookFromRemoteFile
    var { createFillSymbol } = layui.createFillSymbol
    var {
      optionChartLineplotStream,
      optionChartBoxplotStream
    } = layui.optionCharts
    var $ = layui.jquery
    var element = layui.element
    var {
      Map,
      GeoJSONLayer,
      SceneView,
      GraphicsLayer,
      Multipoint,
      Point,
      Graphic,
      BasemapToggle,
      PopupTemplate,
      connect
    } = layui.arcgis

    function points_layer(
      basemap,
      baseview,
      point_url,
      callback,
      popupID,
      popup_callback
    ) {
      readWorkbookFromRemoteFile(
        './json/characteristics/waterDeterioration/historianData.xlsx',
        function(Res) {
          const HistoryData_HeZhangZhi = Res
          // console.log(HistoryData_HeZhangZhi)

          const template_point = {
            title: '<b>监测站点相关信息：</b>',
            content: createPopup,
            actions: [],
            overwriteActions: true,
            opacity: 0.6
          }

          const renderer_point = {
            type: 'simple',
            symbol: {
              type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
              url: 'src/style/res/HeZhangZhi.svg',
              width: '40px',
              height: '40px'
            }
          }

          const geojsonLayer_point = new GeoJSONLayer({
            url: point_url,
            outFields: ['*'],
            popupTemplate: template_point,
            renderer: renderer_point
          })

          function createPopup({ graphic }) {
            console.log(graphic.attributes)
            var { Index, Name, X, Y, Distance } = graphic.attributes

            var HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(
              HistoryData_HeZhangZhi,
              'TP'
            )
            var HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(
              HistoryData_HeZhangZhi,
              {
                Index,
                str: 'TP'
              }
            )

            try {
              var popupElement = document.createElement('div')
              popupElement.innerHTML =
                `<b>站点索引号: </b> ${Index} <br><b>断面名称: </b> ${Name} <br><b>经度: </b> ${X} <br><b>纬度: </b> ${Y} <br><b>距离入南淝河口: </b> ${Distance} km<br>` +
                `
            <div id='HistorianDataDiv' style='width:100%;height:100%'>
              <select id="waterQualitySelect">
                <option value="COD">COD</option>
                <option value="NH4">NH4</option>
                <option value="TN">TN</option>
                <option value="TP" selected>TP</option>
              </select>
              <div id="chartLineplot" class='chartLineplot_class' style='min-width: 300px;height: 400px'></div>
              <div id="chartBoxplot" class='chartBoxplot_class' style='min-width: 300px;height: 400px'></div>
              
            </div>
          `

              // console.log(popupElement)
              var ChartLineplot = echarts.init(
                popupElement.querySelector('#chartLineplot'),
                null,
                {}
              )
              var ChartBoxplot = echarts.init(
                popupElement.querySelector('#chartBoxplot'),
                null,
                {}
              )
              ChartLineplot.setOption(HistoryDataChartLineplot_HeZhangZhiOption)
              ChartBoxplot.setOption(HistoryDataChartBoxplot_HeZhangZhiOption)

              var select = popupElement.querySelector('#waterQualitySelect')

              select.addEventListener('change', chart)

              function chart() {
                var waterQualitySelect =
                  select.options[select.selectedIndex].value
                console.log(waterQualitySelect)

                if (waterQualitySelect === 'COD') {
                  HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(
                    HistoryData_HeZhangZhi,
                    {
                      Index,
                      str: 'COD'
                    }
                  )
                  HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(
                    HistoryData_HeZhangZhi,
                    'COD'
                  )
                } else if (waterQualitySelect === 'NH4') {
                  HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(
                    HistoryData_HeZhangZhi,
                    {
                      Index,
                      str: 'NH4'
                    }
                  )
                  HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(
                    HistoryData_HeZhangZhi,
                    'NH4'
                  )
                } else if (waterQualitySelect === 'TN') {
                  HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(
                    HistoryData_HeZhangZhi,
                    {
                      Index,
                      str: 'TN'
                    }
                  )
                  HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(
                    HistoryData_HeZhangZhi,
                    'TN'
                  )
                } else if (waterQualitySelect === 'TP') {
                  HistoryDataChartLineplot_HeZhangZhiOption = optionChartLineplotStream(
                    HistoryData_HeZhangZhi,
                    {
                      Index,
                      str: 'TP'
                    }
                  )
                  HistoryDataChartBoxplot_HeZhangZhiOption = optionChartBoxplotStream(
                    HistoryData_HeZhangZhi,
                    'TP'
                  )
                }
                ChartLineplot.setOption(
                  HistoryDataChartLineplot_HeZhangZhiOption
                )
                ChartBoxplot.setOption(HistoryDataChartBoxplot_HeZhangZhiOption)
              }
              window.addEventListener('resize', function() {
                ChartLineplot.resize()
                ChartBoxplot.resize()
              })

              // popupElement.querySelector("#chartDiv").appendChild(canvas);
              return popupElement
            } catch (error) {
              console.error(error)
            }
            return '<b>站点索引号: </b> {Index} <br><b>断面名称: </b> {Name} <br><b>经度: </b> {X}<br><b>纬度: </b> {Y}<br><b>距离入南淝河口: </b> {Series} km<br>'
          }

          basemap.add(geojsonLayer_point)
          // console.log(basemap.allLayers)
          // basemap.allLayers.on('change', function(event) {
          //   console.log('Layer added: ', event.added)
          //   console.log('Layer removed: ', event.removed)
          //   console.log('Layer moved: ', event.moved)
          // })

          // connect.connect(geojsonLayer_point, 'onClick', printInitialExtent)

          // function printInitialExtent(layer) {
          //   console.log('onload------')
          //   console.log(layer.initialExtent)
          // }

          // graphic's onclick event
          // connect.connect(basemap, 'onClick', function(e) {
          //   console.log('map clicked')
          //   var html = e.graphic.infoTemplate
          //   map.infoWindow.setTitle('Station')
          //   map.infoWindow.setContent(html)
          //   map.infoWindow.resize('300', '120')
          //   map.infoWindow.show(slcGraphic.geometry) // slcGraphic is a global variable
          // })

          console.log(typeof callback)
          if (callback instanceof Function) {
            callback(geojsonLayer_point)
          }

          baseview.on('click', function(event) {
            // only include graphics from hurricanesLayer in the hitTest
            const opts = {
              include: geojsonLayer_point
            }
            // baseview.popup.autoOpenEnabled = false

            console.log('clicked', event)
            baseview.hitTest(event, opts).then(response => {
              // check if a feature is returned from the hurricanesLayer
              if (response.results.length) {
                const graphic = response.results[0].graphic
                // do something with the graphic
                console.log(graphic)
                console.log(event.screenPoint)
                var { x, y } = event.screenPoint
                // Get the coordinates of the click on the view
                // var lat = Math.round(event.mapPoint.latitude * 1000) / 1000 // Y
                // var lon = Math.round(event.mapPoint.longitude * 1000) / 1000 //X

                var { Index, Name, X, Y } = graphic.attributes

                // document.getElementById(popupID).style.top = y - 100 + 'px'
                // document.getElementById(popupID).style.left = x + 20 + 'px'

                document.getElementById('Name').innerHTML = Name
                document.getElementById('Index').innerHTML = Index

                document.getElementById(popupID).style.visibility = 'visible'

                if (popup_callback instanceof Function) {
                  popup_callback(Index)
                }

                // baseview.popup.open({
                //   // Set the popup's title to the coordinates of the location
                //   title: 'Reverse geocode: [' + X + ', ' + Y + ']',
                //   updateLocationEnabled: true,
                //   location: event.mapPoint, // Set the location of the popup to the clicked location
                //   content: 'This is a point of interest' // content displayed in the popup
                // })
              } else {
                document.getElementById(popupID).style.visibility = 'hidden'
                // element.render(popupID)
              }
            })
          })

          return geojsonLayer_point
        }
      )
    }

    exports('layer_utils_0', {
      points_layer
    })
  }
)
