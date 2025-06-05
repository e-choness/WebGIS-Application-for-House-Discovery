layui.define(['readWorkbookFromRemoteFile', 'optionMapSet', 'arcgis'], function(
  exports
) {
  var { readWorkbookFromRemoteFile } = layui.readWorkbookFromRemoteFile
  var { optionStreamCrossLineplot } = layui.optionMapSet
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
    GroupLayer,
    LayerList,
    OpenStreetMapLayer
  } = layui.arcgis
  function stream_3d(container) {
    //子流域
    const url_Watershed = 'json/biguiyuan/BiguiyuanNan_Watershed_V04.geojson'
    //子河道
    const url_Stream = 'json/biguiyuan/BiguiyuanNan_Stream_V04.geojson'
    //雨水管网走向
    const url_Stream_RainDesign =
      'json/biguiyuan/BiguiyuanNan_Stream_RainDesign_V03.json'
    //污水管网走向
    const url_Stream_WSDesign =
      'json/biguiyuan/BiguiyuanNan_Stream_WSDesign_V03.json'
    //污水分区
    const url_Sub_WSDesign = 'json/biguiyuan/BiguiyuanNan_WS_SubZone_V1.geojson'
    //沟渠：中沟和西沟
    const channel_url = 'json/biguiyuan/BiguiyuanNan_Channel_V2.geojson'

    //断面数据：断面位置依据物探数据2
    const Biguiyuan_CrossSection_GeoJson =
      'json/biguiyuan/BiguiyuanNan_StreamCross_V2_2D.geojson'
    // const template_Watershed_W = {
    //   title: '<b>流域信息：</b>',
    //   content:
    //     '<b>流域面积: </b> {Area} km^2 <br><b>经度跨越范围: </b> {Xmin} ~ {Xmax}<br><b>纬度跨越范围: </b> {Ymin} ~ {Ymax}<br><b>其它有效信息: </b> <br>',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    // const template_Stream_W = {
    //   title: '<b>子河道相关信息：</b>',
    //   content:
    //     '<b>索引号: </b> {SubStreamID} <br><b>长度: </b> {Length} m <br><b>平均宽度: </b> {Width} m <br><b>平均水面面积: </b> {Area} m2 <br>',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    var chartAction = {
      title: 'Chart',
      id: 'chart',
      image: 'src/style/res/Chart.svg'
    }

    // const template_StreamCross_V1 = {
    //   title: '<b>横断面相关信息：</b>',
    //   content:
    //     '<b>索引号: </b> {Index} <br><b>Name: </b> {Name} m <br><b>其它信息: </b> {Info} m <br>',
    //   actions: [chartAction],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template = {
      title: '<b>横断面相关信息：</b>',
      type: 'attachments',
      content: createPopup
      // actions: [],
      // overwriteActions: true,
    }

    const renderer_Watershed_W = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 1.5, // points
            material: { color: 'fuchsia' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_Stream_W = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'simple-fill',
        color: [0, 225, 225, 0.9],
        outline: {
          // autocasts as new SimpleLineSymbol()
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

    const renderer_Stream_RainDesign_W = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 1.5,
            material: {
              color: 'blue'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_Stream_WSDesign_W = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 1.5,
            material: {
              color: 'Yellow'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_Sub_WSDesign_W = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'simple-fill',
        color: [225, 225, 0, 0.3],
        outline: {
          // autocasts as new SimpleLineSymbol()
          color: [0, 0, 0, 1],
          width: '2px'
        }
      }
    }

    const channel_body = new GeoJSONLayer({
      url: channel_url,
      title: 'channel_body',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'polygon-3d',
          symbolLayers: [
            {
              type: 'extrude', // autocasts as new ExtrudeSymbol3DLayer()
              size: 0.5, // Height of the extrusion in meters
              material: { color: '#0066FF' }
            }
          ]
        }
      }
    })

    const channel_surface = new GeoJSONLayer({
      url: channel_url,
      title: 'channel_surface',
      renderer: {
        type: 'simple',
        symbol: {
          type: 'polygon-3d',
          symbolLayers: [
            {
              type: 'water',
              waveDirection: 270,
              color: '#0066FF',
              waveStrength: 'moderate',
              waterbodySize: 'medium'
            }
          ]
        }
      },
      elevationInfo: {
        mode: 'absolute-height',
        offset: 0.5
      }
    })

    const geojsonLayer_Watershed_W = new GeoJSONLayer({
      url: url_Watershed,
      title: 'waterSheld_W',
      // popupTemplate: template_Watershed_W,
      renderer: renderer_Watershed_W,
      opacity: 0.9
    })

    const geojsonLayer_Stream_W = new GeoJSONLayer({
      url: url_Stream,
      title: 'Stream_W',
      // popupTemplate: template_Stream_W,
      renderer: renderer_Stream_W,
      opacity: 0.9
    })

    const geojsonLayer_StreamCross = new GeoJSONLayer({
      url: Biguiyuan_CrossSection_GeoJson,
      title: 'stream cross',
      // attention!!
      outFields: ['*'],
      popupTemplate: template,
      renderer: renderer_StreamCross_V1,
      opacity: 0.9
    })

    const geojsonLayer_Stream_RainDesign_W = new GeoJSONLayer({
      url: url_Stream_RainDesign,
      title: 'rainDesign_W',
      // popupTemplate: template_Stream_W,
      renderer: renderer_Stream_RainDesign_W,
      opacity: 0.9
    })

    const geojsonLayer_Stream_WSDesign_W = new GeoJSONLayer({
      url: url_Stream_WSDesign,
      title: 'WSDeisgn_W',
      // popupTemplate: template_Stream_W,
      renderer: renderer_Stream_WSDesign_W,
      opacity: 0.9
    })

    const geojsonLayer_Sub_WSDesign_W = new GeoJSONLayer({
      url: url_Sub_WSDesign,
      title: 'sub_wsdesign',
      // popupTemplate: template_Stream_W,
      renderer: renderer_Sub_WSDesign_W,
      opacity: 0.9
    })

    var groupStream = new GroupLayer({
      title: 'Stream',
      visible: true,
      layers: [
        geojsonLayer_Stream_W,
        geojsonLayer_Stream_RainDesign_W,
        geojsonLayer_Stream_WSDesign_W,
        geojsonLayer_StreamCross
      ],
      opacity: 0.8
    })

    var groupChannel = new GroupLayer({
      title: 'Channel',
      visible: true,
      layers: [channel_body, channel_surface],
      opacity: 0.8
    })

    var wsj_layer = new GraphicsLayer({
      title: 'WS_J'
    })

    var wsj_pgp_layer = new GraphicsLayer({
      title: 'WS_J_PGP'
    })

    var layers = [
      'WS_J',
      'WS_J_PGP',
      'WS_C',
      'WS_C_GP',
      'YS_J',
      'YS_J_PGP',
      'YS_C',
      'YS_C_GP'
    ]

    var cube_lines = []
    for (var i = 0; i < 8; i++) {
      var graphic_layer = new GraphicsLayer({
        title: layers[i]
      })
      cube_lines.push(graphic_layer)
    }

    var group3D = new GroupLayer({
      title: '3D',
      visible: true,
      layers: cube_lines
      // opacity: 0.8
    })

    var map = new Map({
      basemap: 'topo-vector',
      ground: 'world-elevation'
    })

    map.layers.addMany([
      new OpenStreetMapLayer(),
      geojsonLayer_Sub_WSDesign_W,
      geojsonLayer_Watershed_W,
      groupStream,
      groupChannel,
      group3D
    ])

    var view = new SceneView({
      container,
      map: map,
      // popup: {
      //   title: 'stream echarts',
      //   dockEnabled: true,
      //   dockOptions: {
      //     // Disables the dock button from the popup
      //     buttonEnabled: false,
      //     // Ignore the default sizes that trigger responsive docking
      //     breakpoint: false,
      //     position: 'top-right'
      //   }
      //   // type: "attachments",
      //   // content: createPopup
      // },
      camera: {
        position: {
          // observation point
          x: 117.818,
          y: 31.605,
          z: 1000 // altitude in meters
        },
        tilt: -75 // perspective in degrees
      }
    })

    // view.popup.autoOpenEnabled = false

    // map.add(channel_body)
    // map.add(channel_surface)
    // map.add(graphicsLayer)

    map.ground.opacity = 0.7

    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: 'satellite'
    })

    view.ui.add(basemapToggle, 'top-left')

    view.when(function() {
      // Create the LayerList widget with the associated actions
      // and add it to the top-right corner of the view.
      var layerList = new LayerList({
        view: view
        // executes for each ListItem in the LayerList
        // listItemCreatedFunction: defineActions
      })
      // Add widget to the top right corner of the view
      view.ui.add(layerList, 'top-right')
    })

    var res = {
      basemap: map,
      baseview: view,
      graphicsLayer: cube_lines
    }

    // parseFeature(
    //   'json/biguiyuan/BiguiyuanNan_WS_Junctions_3D_V2.json',
    //   wsj_layer
    // )

    // parseFeature(
    //   'json/biguiyuan/BiguiyuanNan_WS_Junctions_GP_V1_North.json',
    //   wsj_pgp_layer
    // )
    // map.on('update-end', function() {
    //   console.log('--------------updata end')
    // })
    // map.on('click', function(event) {
    //   if (event.graphic) {
    //     // do what needs to happen on marker click
    //     console.log(event.graphic)
    //   } else {
    //     // do what needs to happen on map click
    //     console.log('clicked')
    //     map.infoWindow.show(event.mapPoint)
    //   }
    // })

    return res
  }

  function parseFeature(url, graphicsLayer) {
    /*url: json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    console.log('parseFeatures ', graphicsLayer)
    var request = new XMLHttpRequest()
    request.open('get', url) /*设置请求方法与路径*/
    request.send(null) /*不发送数据到服务器*/
    request.onload = function() {
      /*XHR对象获取到返回信息后执行*/
      if (request.status == 200) {
        /*返回状态为200，即为数据获取成功*/
        var dataText = JSON.parse(request.responseText)
        var geometryType = dataText['geometryType']
        // console.log(geometryType);
        if (geometryType === 'esriGeometryPolyline') {
          var lineFeature = dataText['features']

          for (var i = 0; i < lineFeature.length; i++) {
            var pipeShape = lineFeature[i]['attributes']['PipeShape']
            var pipeType = lineFeature[i]['attributes']['Layer']
            var lineSymbol, polyline, lineColor
            if (pipeType === 'WSLINE') {
              lineColor = 'red'
            } else {
              lineColor = 'blue'
            }
            if (pipeShape === 'circular') {
              var DN = lineFeature[i]['attributes'].DN01 / 1000 //管径
              console.log('circular')
              lineSymbol = {
                type: 'line-3d', // autocasts as new LineSymbol3D()
                symbolLayers: [
                  {
                    type: 'path', // autocasts as new PathSymbol3DLayer()
                    profile: 'circle',
                    width: DN, // width of the tube in meters
                    // height: DN,
                    material: { color: lineColor }
                  }
                ]
              }
              polyline = {
                type: 'polyline', // autocasts as new Polyline()
                paths: lineFeature[i]['geometry']['paths'],
                hasZ: true,
                hasM: false
              }
            } else if (pipeShape === 'cube') {
              width = lineFeature[i]['attributes'].DN01 / 1000
              height = lineFeature[i]['attributes'].DN02 / 1000
              console.log('cube')
              lineSymbol = {
                type: 'line-3d', // autocasts as new LineSymbol3D()
                symbolLayers: [
                  {
                    type: 'path', // autocasts as new PathSymbol3DLayer()
                    profile: 'quad',
                    width: width, // the width in m
                    // height: height, // the height in m
                    material: { color: lineColor }
                  }
                ]
              }
              polyline = {
                type: 'polyline', // autocasts as new Polyline()
                paths: lineFeature[i]['geometry']['paths'],
                hasZ: true,
                hasM: false
              }
            }

            var polylineGraphic = new Graphic({
              geometry: polyline,
              symbol: lineSymbol
            })

            graphicsLayer.add(polylineGraphic)
          }
        } else if (geometryType === 'esriGeometryPoint') {
          var pointFeature = dataText['features']
          console.log(pointFeature.length)
          for (var i = 0; i < pointFeature.length; i++) {
            var geometryValue = pointFeature[i]['geometry']
            var attributes = pointFeature[i]['attributes']
            var height = attributes.SurElev - attributes.InvertElev //检查井井底到地表的高度
            var point = {
              type: 'point',
              x: geometryValue.x,
              y: geometryValue.y,
              z: geometryValue.z
            }
            pointSymbol = {
              type: 'point-3d', // autocasts as new PointSymbol3D()
              symbolLayers: [
                {
                  type: 'object', // autocasts as new ObjectSymbol3DLayer()
                  width: 1, // diameter of the object from east to west in meters
                  height: height, // height of object in meters
                  depth: 1, // diameter of the object from north to south in meters
                  resource: { primitive: 'cylinder' },
                  material: { color: 'green' }
                }
              ]
            }

            var pointGraphic = new Graphic({
              geometry: point,
              symbol: pointSymbol
            })

            graphicsLayer.add(pointGraphic)
          }
        }
        console.log(graphicsLayer)
        return graphicsLayer
      }
    }
  }

  function createPopup({ graphic }) {
    var { Index, Info, Name, OBJECTID, SHAPE_Length } = graphic.attributes
    console.log(graphic)
    try {
      var popupElement = document.createElement('div')
      popupElement.innerHTML =
        '<b>索引号: </b> ' +
        Index +
        '<br><b>Name: </b>' +
        Name +
        // ' <br><b>其它信息: </b>' +
        // Info +
        '<br> ' +
        "<div id='chartLineplot' style='height:355px;width:370px;'></div>"

      var container = popupElement.querySelector('#chartLineplot')

      console.log(container)

      var StreamCrossLineplot = echarts.init(
        popupElement.querySelector('#chartLineplot'),
        null,
        {}
      )

      readWorkbookFromRemoteFile(
        '/json/characteristics/general/StreamCross_Biguiyuan.xlsx',
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

  exports('stream_3d', {
    stream_3d,
    parseFeature
  })
})
