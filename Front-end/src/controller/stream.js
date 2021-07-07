layui.define(['readWorkbookFromRemoteFile', 'optionMapSet'], function(exports) {
  var { readWorkbookFromRemoteFile } = layui.readWorkbookFromRemoteFile
  var { optionStreamCrossLineplot } = layui.optionMapSet

  function stream(
    container,
    Map,
    GeoJSONLayer,
    SceneView,
    BasemapToggle,
    PopupTemplate
  ) {
    const url_Watershed_W =
      'http://10.0.225.2:18085/geoserver/Shahe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Shahe%3ABG_Watershed&maxFeatures=50000000&outputFormat=application%2Fjson'
    const url_Stream_V4 =
      'http://10.0.225.2:18085/geoserver/Shahe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Shahe%3ABG_SubStream&maxFeatures=50000000&outputFormat=application%2Fjson'
    const url_StreamCross_V1 = 'json/Shahe/Shahe_StreamCross_V1.geojson'

    const template_Watershed_W = {
      title: '<b>沙河流域区位信息：</b>',
      content:
        '<b>沙河流域面积: </b> {Area} km^2 <br><b>经度跨越范围: </b> {Xmin} ~ {Xmax}<br><b>纬度跨越范围: </b> {Ymin} ~ {Ymax}<br><b>其它有效信息: </b> 沙河流域是巢湖流域内典型的城郊村镇型小流域 <br>',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_Stream_V4 = {
      title: '<b>所选沙河子河道相关信息：</b>',
      content:
        '<b>索引号: </b> {SubStreamID} <br><b>长度: </b> {Length} m <br><b>平均宽度: </b> {Width} m <br><b>平均水面面积: </b> {Area} m2 <br>',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    var chartAction = {
      title: 'Chart',
      id: 'chart',
      image: 'src/style/res/Chart.svg'
    }

    const template_StreamCross_V1 = {
      title: '<b>所选沙河测绘横断面相关信息：</b>',
      content:
        '<b>索引号: </b> {Index} <br><b>Name: </b> {Name} m <br><b>其它信息: </b> {Info} m <br>',
      actions: [chartAction],
      overwriteActions: true,
      opacity: 0.6
    }

    const template = {
      title: '<b>所选沙河测绘横断面相关信息：</b>',
      type: 'attachments',
      content: createPopup
      // actions: [],
      // overwriteActions: true,
    }

    const renderer_Watershed_W = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 1.5,
            material: {
              color: 'fuchsia'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_Stream_V4 = {
      type: 'simple',
      symbol: {
        type: 'simple-fill',
        color: [0, 225, 225, 0.9],
        outline: {
          color: [0, 225, 225, 0.9],
          width: '1px'
        }
      }
    }

    const renderer_StreamCross_V1 = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 1.5,
            material: {
              color: 'black'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const geojsonLayer_Watershed_W = new GeoJSONLayer({
      url: url_Watershed_W,
      // url: "http://10.0.225.2:18085/geoserver/Shahe/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Shahe%3ABG_SubWatershed&maxFeatures=50000000&outputFormat=application%2Fjson",
      popupTemplate: template_Watershed_W,
      renderer: renderer_Watershed_W,
      opacity: 0.9
    })

    console.log('water sheld : ', geojsonLayer_Watershed_W)

    const geojsonLayer_Stream_V4 = new GeoJSONLayer({
      url: url_Stream_V4,
      popupTemplate: template_Stream_V4,
      renderer: renderer_Stream_V4,
      opacity: 0.9
    })

    const geojsonLayer_StreamCross_V1 = new GeoJSONLayer({
      url: url_StreamCross_V1,
      // attention!!
      outFields: ['*'],
      popupTemplate: template,
      renderer: renderer_StreamCross_V1,
      opacity: 0.9
    })

    var map = new Map({
      basemap: 'topo-vector',
      ground: 'world-elevation',
      layers: [
        geojsonLayer_StreamCross_V1,
        geojsonLayer_Watershed_W,
        geojsonLayer_Stream_V4
      ]
    })

    var view = new SceneView({
      container,
      map: map,
      popup: {
        title: 'stream echarts',
        dockEnabled: true,
        dockOptions: {
          // Disables the dock button from the popup
          buttonEnabled: false,
          // Ignore the default sizes that trigger responsive docking
          breakpoint: false,
          position: 'top-right'
        }
        // type: "attachments",
        // content: createPopup
      },
      camera: {
        position: {
          // observation point
          x: 117.52,
          y: 31.753,
          z: 21000 // altitude in meters
        },
        tilt: 0 // perspective in degrees
      }
    })

    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: 'satellite'
    })

    view.ui.add(basemapToggle, 'top-left')
  }

  function createPopup({ graphic }) {
    var { Index, Info, Name, OBJECTID, Shape_Length } = graphic.attributes

    try {
      var popupElement = document.createElement('div')
      popupElement.innerHTML =
        '<b>索引号: </b> ' +
        Index +
        '<br><b>Name: </b>' +
        Name +
        'm <br><b>其它信息: </b>' +
        Info +
        'm <br> ' +
        "<div id='chartLineplot' style='height:355px;width:370px;'></div>"

      var container = popupElement.querySelector('#chartLineplot')

      console.log(container)

      var StreamCrossLineplot = echarts.init(
        popupElement.querySelector('#chartLineplot'),
        null,
        {}
      )

      readWorkbookFromRemoteFile(
        '/json/characteristics/general/StreamCross.xlsx',
        function(StreamCross) {
          var StreamCrossLineplotOption = optionStreamCrossLineplot(
            StreamCross,
            Index
          )
          StreamCrossLineplot.setOption(StreamCrossLineplotOption)
        }
      )

      // popupElement.querySelector("#chartDiv").appendChild(canvas);
      return popupElement
    } catch (error) {
      console.error(error)
    }
    return (
      '<b>索引号: </b> ' +
      Index +
      '<br><b>Name: </b>' +
      Name +
      'm <br><b>其它信息: </b>'
    )
  }

  exports('stream', {
    stream
  })
})
