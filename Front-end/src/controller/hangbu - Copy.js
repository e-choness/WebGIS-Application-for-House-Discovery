layui.define(['arcgis'], function(exports) {
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
    LayerList
  } = layui.arcgis

  function render_layer(container, callback) {
    // const url_WholeRainSubCatchment =
    //   'json/Hangbu/Hangbu_WholeRainSubCatchment_v01.json'
    const url_RiverNetwork = 'json/Hangbu/Hangbu_RiverNetwork_v01.json'
    const url_RiverCrossSections =
      'json/Hangbu/Hangbu_RiverCrossSections_v01.json'
    const url_RiverWeir = ''
    const url_RiverDischarge = 'json/Hangbu/Hangbu_RiverDischarge_v01.json'

    const url_RainPipeline = 'json/Hangbu/Hangbu_RainPipeline_v01.json'
    const url_RainManhole = 'json/Hangbu/Hangbu_RainManHole_v01.json'
    // const url_RainStorages =
    //   'json/Hangbu/Hangbu_RainStorages_v01.json'
    // const url_RainWeirs =
    //   'json/Hangbu/Hangbu_RainWeirs_v01.json'

    const url_SewagePipeline = 'json/Hangbu/Hangbu_SewagePipeline_v01.json'
    const url_SewageManhole = 'json/Hangbu/Hangbu_SewageManhole_v01.json'
    const url_SewagePumpSump = 'json/Hangbu/Hangbu_SewagePumpSump_v01.json'
    const url_SewagePumpStation =
      'json/Hangbu/Hangbu_SewagePumpStation_v01.json'
    const url_SewagePumpDischarge =
      'json/Hangbu/Hangbu_SewagePumpDischarge_v01.json'

    // const url_DischargeRainSubCatchment =
    //   'json/Hangbu/Hangbu_DischargeRainSubCatchment_v01.json'
    // const url_BlockRainSubCatchment =
    //   'json/Hangbu/Hangbu_BlockRainSubCatchment_v01.json'
    // const url_PlotRainSubCatchment =
    //   'json/Hangbu/Hangbu_PlotRainSubCatchment_v01.json'
    const url_CellRainSubCatchment =
      'json/Hangbu/Hangbu_CellRainSubCatchment_v01.json'

    // const url_WholeSewageSubCatchment =
    //   'json/Hangbu/Hangbu_WholeSewageSubCatchment_v01.json'
    const url_BlockSewageSubCatchment =
      'json/Hangbu/Hangbu_BlockSewageSubCatchment_v01.json'

    // const url_PlotSewageSubCatchment =
    //   'json/Hangbu/Hangbu_PlotSewageSubCatchment_v01.json'

    const url_WeatherMonitoring =
      'json/Hangbu/Hangbu_WeatherMonitoring_v01.json'

    // const url_PlotRainMonitoring =
    //   'json/Hangbu/Hangbu_PlotRainMonitoringPoints_v01.json'
    // const url_BlockRainMonitoring =
    //   'json/Hangbu/Hangbu_BlockRainMonitoringpoints_v01.json'
    // const url_DischargeRainMonitoring =
    //   'json/Hangbu/Hangbu_DischargeRainMonitoringpoints_v01.json'

    var chartAction = {
      title: 'Chart',
      id: 'chart',
      image: 'src/style/res/Chart.svg'
    }

    // const template_WholeRainSubCatchment = {
    //   title: '<b>???????????????</b>',
    //   content: '<b>??????: </b> {Area} km^2 <br><br>',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template_RiverNetwork = {
      title: '<b>???????????????</b>',
      content:
        '<b>??????: </b> {Length} km <br>\
                <b>????????????: </b> {WidthAvg} m <br>\
                <b>????????????: </b> {DepthAvg} m <br>\
                <b>??????????????????: </b> {ElevBottAv} m <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverCrossSections = {
      title: '<b>?????????????????????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>?????????X: </b> {X} <br>\
                <b>?????????Y: </b> {Y} <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverDischarge = {
      title: '<b>???????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????: </b> {River} <br>\
                <b>????????????: </b> {MSName} <br>\
                <b>????????????: </b> {GPName} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RainPipeline = {
      title: '<b>???????????????????????????</b>',
      content:
        '<b>????????????: </b> {Name} <br>\
                <b>?????????????????????: </b> {FromNode} <br>\
                <b>?????????????????????: </b> {ToNode} <br>\
                <b>??????: </b> {Length} m <br>\
                <b>??????: </b> {ShapeO} <br>\
                <b>????????????1: </b> {Geom1} <br>\
                <b>????????????2: </b> {Geom2} <br>\
                <b>????????????3: </b> {Geom3} <br>\
                <b>????????????4: </b> {Geom4} <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RainManhole = {
      title: '<b>???????????????????????????</b>',
      content:
        '<b>????????????: </b> {MSName} <br>\
                <b>????????????: </b> {GPName} <br>\
                <b>??????: </b> {Elevation} m <br>\
                <b>??????: </b> {DepthMax} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    // const template_RainStorages = {
    //   title: '<b>????????????????????????????????????</b>',
    //   content:
    //     '<b>??????: </b> {Name} <br>\
    //             <b>?????????????????????: </b> {MSOutletNode} <br>\
    //             <b>?????????????????????: </b> {GPOutletNode} <br>\
    //             <b>??????: </b> {DepthMax} m <br>\
    //             <b>?????????: </b> {Area} m <br>\
    //           ',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    // const template_RainWeirs = {
    //   title: '<b>????????????????????????????????????</b>',
    //   content:
    //     '<b>??????: </b> {NAME} <br>\
    //             <b>?????????????????????: </b> {InletNode} <br>\
    //             <b>?????????????????????: </b> {OutletNode} <br>\
    //             <b>??????: </b> {Elevation} <br>\
    //             <b>??????: </b> {ShapeO} <br>\
    //             <b>????????????1: </b> {Geom1} m <br>\
    //             <b>????????????2: </b> {Geom2} m <br>\
    //           ',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template_SewagePipeline = {
      title: '<b>???????????????????????????</b>',
      content:
        '<b>????????????: </b> {Name} <br>\
                <b>?????????????????????: </b> {FromNode} <br>\
                <b>?????????????????????: </b> {ToNode} <br>\
                <b>??????: </b> {Length} m <br>\
                <b>??????: </b> {ShapeO} <br>\
                <b>????????????1: </b> {Geom1} <br>\
                <b>????????????2: </b> {Geom2} <br>\
                <b>????????????3: </b> {Geom3} <br>\
                <b>????????????4: </b> {Geom4} <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewageManhole = {
      title: '<b>???????????????????????????</b>',
      content:
        '<b>????????????: </b> {MSName} <br>\
                <b>????????????: </b> {GPName} <br>\
                <b>??????: </b> {Elevation} m <br>\
                <b>??????: </b> {DepthMax} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewagePumpSump = {
      title: '<b>?????????????????????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>?????????????????????: </b> {MSOutletNode} <br>\
                <b>?????????????????????: </b> {GPOutletNode} <br>\
                <b>??????: </b> {Elevation} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewagePumpStation = {
      title: '<b>??????????????????????????????</b>',
      content:
        '<b>??????: </b> {NAME} <br>\
                <b>?????????????????????: </b> {InletNode} <br>\
                <b>?????????????????????: </b> {OutletNode} <br>\
                <b>?????????????????????: </b> {PumpCurve} m <br>\
                <b>????????????: </b> {StartupDep} <br>\
                <b>????????????: </b> {ShutoffDep} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewagePumpDischarge = {
      title: '<b>?????????????????????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b> </b> {Elevation} <br>\
                <b> </b> {StageData} <br>\
                <b> </b> {RouteTo} m <br>\
                <b> </b> {Type} <br>\
                <b> </b> {Gated}  <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    // const template_DischargeRainSubCatchment = {
    //   title: '<b>??????????????????</b>',
    //   content:
    //     '<b>??????: </b> {Name} <br>\
    //             <b>???????????????: </b> {Discharge} <br>\
    //             <b>???????????????????????????: </b> {MSOutletNode} <br>\
    //             <b>???????????????????????????: </b> {GPOutletNode} <br>\
    //   ',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template_BlockRainSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotRainSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellRainSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {NAME} <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
                <b>????????????????????????: </b> {ImpervP} % <br>\
                <b>????????????: </b> {Slope} % <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_WholeSewageSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>??????: </b> {Area} km^2 <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_DischargeSewageSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>??????: </b> {Area} km^2 <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_BlockSewageSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>??????: </b> {Area} km^2 <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotSewageSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>??????: </b> {Area} km^2 <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellSewageSubCatchment = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>??????: </b> {Area} km^2 <br>\
                <b>???????????????????????????: </b> {MSOutletNode} <br>\
                <b>???????????????????????????: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_WeatherMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????ID: </b> {WeatherStationID} <br>\
                <b>????????????: </b> {WeatherStationType} <br>\
                <b>???????????????: </b> {WeatherMeterName} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverDischargeMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverCrossSectionsMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellRainMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotRainMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_BlockRainMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_DischargeRainMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [chartAction],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellSewageMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotSewageMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_BlockSewageMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_DischargeSewageMonitoring = {
      title: '<b>??????????????????</b>',
      content:
        '<b>??????: </b> {Name} <br>\
                <b>????????????????????????: </b> {} <br>\
                <b>????????????ID??????: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    // const renderer_WholeRainSubCatchment = {
    //   type: 'simple',
    //   symbol: {
    //     // type: "polygon-3d",
    //     type: 'line-3d',
    //     symbolLayers: [
    //       {
    //         // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
    //         type: 'line',
    //         size: 5.0, // points
    //         material: { color: 'fuchsia' },
    //         cap: 'round',
    //         join: 'round'
    //       }
    //     ]
    //   }
    // }

    const renderer_RiverNetwork = {
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

    const renderer_RiverCrossSections = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 2.5,
            material: {
              color: 'red'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_RiverDischarge = {
      type: 'simple',
      symbol: {
        type: 'simple-marker', // autocasts as new PictureMarkerSymbol()
        style: 'square',
        size: 15,
        color: 'blue',
        outline: {
          // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: 'white'
        }
      }
    }

    const renderer_RainPipeline = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 2.5,
            material: {
              color: '#33CC33'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_RainManhole = {
      type: 'simple',
      symbol: {
        type: 'simple-marker', // autocasts as new PictureMarkerSymbol()
        size: 6,
        color: 'blue',
        outline: {
          // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: 'white'
        }
      }
    }

    // const renderer_RainStorages = {
    //   type: 'simple',
    //   symbol: {
    //     type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
    //     url: 'src/style/res/waterPool.svg',
    //     width: '40px',
    //     height: '40px'
    //   }
    // }

    // const renderer_RainWeirs = {
    //   type: 'simple',
    //   symbol: {
    //     type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
    //     url: 'src/style/res/weir.png',
    //     width: '40px',
    //     height: '40px'
    //   }
    // }

    const renderer_SewagePipeline = {
      type: 'simple',
      symbol: {
        type: 'line-3d',
        symbolLayers: [
          {
            type: 'line',
            size: 2.5,
            material: {
              color: '#996633'
            },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_SewageManhole = {
      type: 'simple',
      symbol: {
        type: 'simple-marker', // autocasts as new PictureMarkerSymbol()
        size: 6,
        color: 'black',
        outline: {
          // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: 'white'
        }
      }
    }

    const renderer_SewagePumpSump = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/waterPool.svg',
        width: '40px',
        height: '40px'
      }
    }

    const renderer_SewagePumpStation = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/pump.png',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_SewagePumpDischarge = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/waterPool.svg',
        width: '40px',
        height: '40px'
      }
    }

    // const renderer_DischargeRainSubCatchment = {
    //   type: 'simple',
    //   symbol: {
    //     // type: "polygon-3d",
    //     type: 'line-3d',
    //     symbolLayers: [
    //       {
    //         // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
    //         type: 'line',
    //         size: 4.0, // points
    //         material: { color: 'fuchsia' },
    //         cap: 'round',
    //         join: 'round'
    //       }
    //     ]
    //   }
    // }

    const renderer_BlockRainSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 3.0, // points
            material: { color: 'fuchsia' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_PlotRainSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 2.0, // points
            material: { color: 'fuchsia' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_CellRainSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 1.0, // points
            material: { color: 'fuchsia' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_WholeSewageSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 5.0, // points
            material: { color: 'black' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_DischargeSewageSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 4.0, // points
            material: { color: 'black' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_BlockSewageSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 3.0, // points
            material: { color: 'black' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_PlotSewageSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 2.0, // points
            material: { color: 'black' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_CellSewageSubCatchment = {
      type: 'simple',
      symbol: {
        // type: "polygon-3d",
        type: 'line-3d',
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: 'line',
            size: 1.0, // points
            material: { color: 'black' },
            cap: 'round',
            join: 'round'
          }
        ]
      }
    }

    const renderer_WeatherMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/RainGage.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_RiverDischargeMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Stream.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_RiverCrossSectionsMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Stream.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_CellRainMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Rain.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_PlotRainMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Rain.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_BlockRainMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Rain.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_DischargeRainMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Rain.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_CellSewageMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Sewage.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_PlotSewageMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Sewage.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_BlockSewageMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Sewage.svg',
        width: '60px',
        height: '60px'
      }
    }

    const renderer_DischargeSewageMonitoring = {
      type: 'simple',
      symbol: {
        type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
        url: 'src/style/res/Sewage.svg',
        width: '60px',
        height: '60px'
      }
    }

    // const geojsonLayer_WholeRainSubCatchment = new GeoJSONLayer({
    //   url: url_WholeRainSubCatchment,
    //   title: '????????????',
    //   popupTemplate: template_WholeRainSubCatchment,
    //   renderer: renderer_WholeRainSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_RiverNetwork = new GeoJSONLayer({
      url: url_RiverNetwork,
      title: '????????????',
      popupTemplate: template_RiverNetwork,
      renderer: renderer_RiverNetwork,
      opacity: 0.9
    })

    const geojsonLayer_RiverCrossSections = new GeoJSONLayer({
      url: url_RiverCrossSections,
      title: '????????????',
      popupTemplate: template_RiverCrossSections,
      renderer: renderer_RiverCrossSections,
      opacity: 0.9
    })

    const geojsonLayer_RiverDischarge = new GeoJSONLayer({
      url: url_RiverDischarge,
      title: '?????????????????????',
      popupTemplate: template_RiverDischarge,
      renderer: renderer_RiverDischarge,
      opacity: 0.9
    })

    const geojsonLayer_RainPipeline = new GeoJSONLayer({
      url: url_RainPipeline,
      title: '??????',
      popupTemplate: template_RainPipeline,
      renderer: renderer_RainPipeline,
      opacity: 0.9
    })

    const geojsonLayer_RainManhole = new GeoJSONLayer({
      url: url_RainManhole,
      title: '??????',
      popupTemplate: template_RainManhole,
      renderer: renderer_RainManhole,
      opacity: 0.9
    })

    // const geojsonLayer_RainStorages = new GeoJSONLayer({
    //   url: url_RainStorages,
    //   title: '?????????',
    //   popupTemplate: template_RainStorages,
    //   renderer: renderer_RainStorages,
    //   opacity: 0.9
    // })

    // const geojsonLayer_RainWeirs = new GeoJSONLayer({
    //   url: url_RainWeirs,
    //   title: '?????????',
    //   popupTemplate: template_RainWeirs,
    //   renderer: renderer_RainWeirs,
    //   opacity: 0.9
    // })

    const geojsonLayer_SewagePipeline = new GeoJSONLayer({
      url: url_SewagePipeline,
      title: '??????',
      popupTemplate: template_SewagePipeline,
      renderer: renderer_SewagePipeline,
      opacity: 0.9
    })

    const geojsonLayer_SewageManhole = new GeoJSONLayer({
      url: url_SewageManhole,
      title: '??????',
      popupTemplate: template_SewageManhole,
      renderer: renderer_SewageManhole,
      opacity: 0.9
    })

    const geojsonLayer_SewagePumpSump = new GeoJSONLayer({
      url: url_SewagePumpSump,
      title: '????????????',
      popupTemplate: template_SewagePumpSump,
      renderer: renderer_SewagePumpSump,
      opacity: 0.9
    })

    const geojsonLayer_SewagePumpStation = new GeoJSONLayer({
      url: url_SewagePumpStation,
      title: '?????????',
      popupTemplate: template_SewagePumpStation,
      renderer: renderer_SewagePumpStation,
      opacity: 0.9
    })

    const geojsonLayer_SewagePumpDischarge = new GeoJSONLayer({
      url: url_SewagePumpDischarge,
      title: '????????????',
      popupTemplate: template_SewagePumpDischarge,
      renderer: renderer_SewagePumpDischarge,
      opacity: 0.9
    })

    // const geojsonLayer_DischargeRainSubCatchment = new GeoJSONLayer({
    //   url: url_DischargeRainSubCatchment,
    //   title: '???????????????',
    //   popupTemplate: template_DischargeRainSubCatchment,
    //   renderer: renderer_DischargeRainSubCatchment,
    //   opacity: 0.9
    // })

    // const geojsonLayer_BlockRainSubCatchment = new GeoJSONLayer({
    //   url: url_BlockRainSubCatchment,
    //   title: '???????????????',
    //   popupTemplate: template_BlockRainSubCatchment,
    //   renderer: renderer_BlockRainSubCatchment,
    //   opacity: 0.9
    // })

    // const geojsonLayer_PlotRainSubCatchment = new GeoJSONLayer({
    //   url: url_PlotRainSubCatchment,
    //   title: '???????????????',
    //   popupTemplate: template_PlotRainSubCatchment,
    //   renderer: renderer_PlotRainSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_CellRainSubCatchment = new GeoJSONLayer({
      url: url_CellRainSubCatchment,
      title: '??????????????????',
      popupTemplate: template_CellRainSubCatchment,
      renderer: renderer_CellRainSubCatchment,
      opacity: 0.9
    })

    // const geojsonLayer_WholeSewageSubCatchment = new GeoJSONLayer({
    //   url: url_WholeSewageSubCatchment,
    //   title: '???????????????',
    //   popupTemplate: template_WholeSewageSubCatchment,
    //   renderer: renderer_WholeSewageSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_BlockSewageSubCatchment = new GeoJSONLayer({
      url: url_BlockSewageSubCatchment,
      title: '???????????????',
      popupTemplate: template_BlockSewageSubCatchment,
      renderer: renderer_BlockSewageSubCatchment,
      opacity: 0.9
    })

    // const geojsonLayer_PlotSewageSubCatchment = new GeoJSONLayer({
    //   url: url_PlotSewageSubCatchment,
    //   title: '???????????????',
    //   popupTemplate: template_PlotSewageSubCatchment,
    //   renderer: renderer_PlotSewageSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_WeatherMonitoring = new GeoJSONLayer({
      url: url_WeatherMonitoring,
      title: '????????????',
      popupTemplate: template_WeatherMonitoring,
      renderer: renderer_WeatherMonitoring,
      opacity: 1
    })

    // const geojsonLayer_PlotRainMonitoring = new GeoJSONLayer({
    //   url: url_PlotRainMonitoring,
    //   title: '?????????????????????',
    //   popupTemplate: template_PlotRainMonitoring,
    //   renderer: renderer_PlotRainMonitoring,
    //   opacity: 1
    // })

    // const geojsonLayer_BlockRainMonitoring = new GeoJSONLayer({
    //   url: url_BlockRainMonitoring,
    //   title: '?????????????????????',
    //   popupTemplate: template_BlockRainMonitoring,
    //   renderer: renderer_BlockRainMonitoring,
    //   opacity: 1
    // })

    // const geojsonLayer_DischargeRainMonitoring = new GeoJSONLayer({
    //   url: url_DischargeRainMonitoring,
    //   title: '?????????????????????',
    //   popupTemplate: template_DischargeRainMonitoring,
    //   outFields: ['*'],
    //   renderer: renderer_DischargeRainMonitoring,
    //   opacity: 1
    // })

    var WholeRainSubCatchmentGroupLayer = new GroupLayer({
      title: '????????????',
      visible: true,
      visibilityMode: 'independent',
      layers: [
        geojsonLayer_RiverDischarge,
        geojsonLayer_RiverCrossSections,
        geojsonLayer_RiverNetwork
        // geojsonLayer_WholeRainSubCatchment
      ],
      opacity: 0.75
    })

    var RainPipeNetworkGroupLayer = new GroupLayer({
      title: '?????????????????????',
      visible: true,
      visibilityMode: 'independent',
      layers: [
        // geojsonLayer_RainWeirs,
        // geojsonLayer_RainStorages,
        geojsonLayer_RainPipeline,
        geojsonLayer_RainManhole
      ],
      opacity: 0.75
    })

    var SewagePipeNetworkGroupLayer = new GroupLayer({
      title: '?????????????????????',
      visible: true,
      visibilityMode: 'independent',
      layers: [
        geojsonLayer_SewagePumpStation,
        geojsonLayer_SewagePumpSump,
        geojsonLayer_SewagePipeline,
        geojsonLayer_SewageManhole,
        geojsonLayer_SewagePumpDischarge
      ],
      opacity: 0.75
    })

    var RainSubCatchmentZoneGroupLayer = new GroupLayer({
      title: '??????????????????',
      visible: true,
      visibilityMode: 'independent',
      layers: [
        geojsonLayer_CellRainSubCatchment
        // geojsonLayer_PlotRainSubCatchment,
        // geojsonLayer_BlockRainSubCatchment,
        // geojsonLayer_DischargeRainSubCatchment
      ],
      opacity: 0.75
    })

    var SewageSubCatchmentZoneGroupLayer = new GroupLayer({
      title: '??????????????????',
      visible: true,
      visibilityMode: 'independent',
      layers: [
        // geojsonLayer_PlotSewageSubCatchment,
        // geojsonLayer_WholeSewageSubCatchment,
        geojsonLayer_BlockSewageSubCatchment
      ],
      opacity: 0.75
    })

    // var RainMonitoringGroupLayer = new GroupLayer({
    //   title: '????????????',
    //   visible: true,
    //   visibilityMode: 'independent',
    //   layers: [
    //     geojsonLayer_PlotRainMonitoring,
    //     geojsonLayer_BlockRainMonitoring,
    //     geojsonLayer_DischargeRainMonitoring
    //   ],
    //   opacity: 1
    // })

    var MonitoringGroupLayer = new GroupLayer({
      title: '????????????',
      visible: true,
      visibilityMode: 'independent',
      layers: [
        // RainMonitoringGroupLayer,
        geojsonLayer_WeatherMonitoring
      ],
      opacity: 1
    })

    var map = new Map({
      basemap: 'topo-vector',
      // basemap: "dark-gray",
      // basemap: "gray-vector",
      // basemap: "oceans",
      ground: 'world-elevation'
    })

    map.layers.addMany([
      MonitoringGroupLayer,
      SewageSubCatchmentZoneGroupLayer,
      RainSubCatchmentZoneGroupLayer,
      SewagePipeNetworkGroupLayer,
      RainPipeNetworkGroupLayer,
      WholeRainSubCatchmentGroupLayer
    ])

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
          position: 'top-center'
        }
      },
      camera: {
        position: {
          // observation point
          x: 117.157921,
          y: 31.512831,
          z: 1000 // altitude in meters
        },
        tilt: -75 // perspective in degrees
      }
    })

    map.ground.opacity = 0.7

    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: 'satellite'
    })

    view.ui.add(basemapToggle, 'top-left')

    view.when(function() {
      var layerList = new LayerList({
        view: view
      })
      view.ui.add(layerList, 'top-right')
    })

    view.popup.on('trigger-action', function(event) {
      var attrs = view.popup.selectedFeature.attributes
      var event_id = event.action.id
      console.log(callback)
      if (event_id === 'chart') {
        if (callback[event_id] && callback[event_id] instanceof Function) {
          // console.log(callback, attrs)
          callback[event_id](attrs)
        }
      }
    })

    var res = {
      basemap: map,
      baseview: view,
      layers: {
        // stationLayer: geojsonLayer_DischargeRainMonitoring
      }
    }

    return res
  }

  exports('hangbu', {
    render_layer
  })
})
