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
    //   title: '<b>区位信息：</b>',
    //   content: '<b>面积: </b> {Area} km^2 <br><br>',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template_RiverNetwork = {
      title: '<b>河道信息：</b>',
      content:
        '<b>长度: </b> {Length} km <br>\
                <b>平均宽度: </b> {WidthAvg} m <br>\
                <b>平均深度: </b> {DepthAvg} m <br>\
                <b>河底平均高程: </b> {ElevBottAv} m <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverCrossSections = {
      title: '<b>所选河道断面相关信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>基准点X: </b> {X} <br>\
                <b>基准点Y: </b> {Y} <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverDischarge = {
      title: '<b>排口信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>所属河道: </b> {River} <br>\
                <b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RainPipeline = {
      title: '<b>所选管段相关信息：</b>',
      content:
        '<b>模型编号: </b> {Name} <br>\
                <b>上游井模型编号: </b> {FromNode} <br>\
                <b>下游井模型编号: </b> {ToNode} <br>\
                <b>长度: </b> {Length} m <br>\
                <b>形状: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} <br>\
                <b>形状参数2: </b> {Geom2} <br>\
                <b>形状参数3: </b> {Geom3} <br>\
                <b>形状参数4: </b> {Geom4} <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RainManhole = {
      title: '<b>所选管井相关信息：</b>',
      content:
        '<b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
                <b>高程: </b> {Elevation} m <br>\
                <b>井深: </b> {DepthMax} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    // const template_RainStorages = {
    //   title: '<b>所选雨水调蓄池相关信息：</b>',
    //   content:
    //     '<b>名称: </b> {Name} <br>\
    //             <b>出流点模型编号: </b> {MSOutletNode} <br>\
    //             <b>出流点物探编号: </b> {GPOutletNode} <br>\
    //             <b>池深: </b> {DepthMax} m <br>\
    //             <b>表面积: </b> {Area} m <br>\
    //           ',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    // const template_RainWeirs = {
    //   title: '<b>所选雨水溢流堰相关信息：</b>',
    //   content:
    //     '<b>名称: </b> {NAME} <br>\
    //             <b>入流点模型编号: </b> {InletNode} <br>\
    //             <b>出流点模型编号: </b> {OutletNode} <br>\
    //             <b>高程: </b> {Elevation} <br>\
    //             <b>堰形: </b> {ShapeO} <br>\
    //             <b>形状参数1: </b> {Geom1} m <br>\
    //             <b>形状参数2: </b> {Geom2} m <br>\
    //           ',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template_SewagePipeline = {
      title: '<b>所选管段相关信息：</b>',
      content:
        '<b>模型编号: </b> {Name} <br>\
                <b>上游井模型编号: </b> {FromNode} <br>\
                <b>下游井模型编号: </b> {ToNode} <br>\
                <b>长度: </b> {Length} m <br>\
                <b>形状: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} <br>\
                <b>形状参数2: </b> {Geom2} <br>\
                <b>形状参数3: </b> {Geom3} <br>\
                <b>形状参数4: </b> {Geom4} <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewageManhole = {
      title: '<b>所选管井相关信息：</b>',
      content:
        '<b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
                <b>高程: </b> {Elevation} m <br>\
                <b>井深: </b> {DepthMax} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewagePumpSump = {
      title: '<b>所选泵站前池相关信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>出流点模型编号: </b> {MSOutletNode} <br>\
                <b>出流点物探编号: </b> {GPOutletNode} <br>\
                <b>高程: </b> {Elevation} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewagePumpStation = {
      title: '<b>所选泵机组相关信息：</b>',
      content:
        '<b>名称: </b> {NAME} <br>\
                <b>入流点模型编号: </b> {InletNode} <br>\
                <b>出流点模型编号: </b> {OutletNode} <br>\
                <b>泵特性曲线编号: </b> {PumpCurve} m <br>\
                <b>启泵水深: </b> {StartupDep} <br>\
                <b>停泵水深: </b> {ShutoffDep} m <br>\
              ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_SewagePumpDischarge = {
      title: '<b>所选泵后出流相关信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
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
    //   title: '<b>汇水区信息：</b>',
    //   content:
    //     '<b>名称: </b> {Name} <br>\
    //             <b>对应排口名: </b> {Discharge} <br>\
    //             <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
    //             <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
    //   ',
    //   actions: [],
    //   overwriteActions: true,
    //   opacity: 0.6
    // }

    const template_BlockRainSubCatchment = {
      title: '<b>汇水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotRainSubCatchment = {
      title: '<b>汇水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellRainSubCatchment = {
      title: '<b>汇水区信息：</b>',
      content:
        '<b>名称: </b> {NAME} <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
                <b>不透水区面积占比: </b> {ImpervP} % <br>\
                <b>平均坡度: </b> {Slope} % <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_WholeSewageSubCatchment = {
      title: '<b>收水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_DischargeSewageSubCatchment = {
      title: '<b>收水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_BlockSewageSubCatchment = {
      title: '<b>收水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotSewageSubCatchment = {
      title: '<b>收水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellSewageSubCatchment = {
      title: '<b>收水区信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_WeatherMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>外源平台ID: </b> {WeatherStationID} <br>\
                <b>类型编码: </b> {WeatherStationType} <br>\
                <b>物理站点名: </b> {WeatherMeterName} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverDischargeMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_RiverCrossSectionsMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellRainMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotRainMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_BlockRainMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_DischargeRainMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [chartAction],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_CellSewageMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_PlotSewageMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_BlockSewageMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
      ',
      actions: [],
      overwriteActions: true,
      opacity: 0.6
    }

    const template_DischargeSewageMonitoring = {
      title: '<b>监测点信息：</b>',
      content:
        '<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {} <br>\
                <b>对应设备ID编号: </b> {} <br>\
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
    //   title: '区域边界',
    //   popupTemplate: template_WholeRainSubCatchment,
    //   renderer: renderer_WholeRainSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_RiverNetwork = new GeoJSONLayer({
      url: url_RiverNetwork,
      title: '自然河道',
      popupTemplate: template_RiverNetwork,
      renderer: renderer_RiverNetwork,
      opacity: 0.9
    })

    const geojsonLayer_RiverCrossSections = new GeoJSONLayer({
      url: url_RiverCrossSections,
      title: '河道断面',
      popupTemplate: template_RiverCrossSections,
      renderer: renderer_RiverCrossSections,
      opacity: 0.9
    })

    const geojsonLayer_RiverDischarge = new GeoJSONLayer({
      url: url_RiverDischarge,
      title: '沿河湖重要排口',
      popupTemplate: template_RiverDischarge,
      renderer: renderer_RiverDischarge,
      opacity: 0.9
    })

    const geojsonLayer_RainPipeline = new GeoJSONLayer({
      url: url_RainPipeline,
      title: '管道',
      popupTemplate: template_RainPipeline,
      renderer: renderer_RainPipeline,
      opacity: 0.9
    })

    const geojsonLayer_RainManhole = new GeoJSONLayer({
      url: url_RainManhole,
      title: '管井',
      popupTemplate: template_RainManhole,
      renderer: renderer_RainManhole,
      opacity: 0.9
    })

    // const geojsonLayer_RainStorages = new GeoJSONLayer({
    //   url: url_RainStorages,
    //   title: '调蓄池',
    //   popupTemplate: template_RainStorages,
    //   renderer: renderer_RainStorages,
    //   opacity: 0.9
    // })

    // const geojsonLayer_RainWeirs = new GeoJSONLayer({
    //   url: url_RainWeirs,
    //   title: '溢流堰',
    //   popupTemplate: template_RainWeirs,
    //   renderer: renderer_RainWeirs,
    //   opacity: 0.9
    // })

    const geojsonLayer_SewagePipeline = new GeoJSONLayer({
      url: url_SewagePipeline,
      title: '管道',
      popupTemplate: template_SewagePipeline,
      renderer: renderer_SewagePipeline,
      opacity: 0.9
    })

    const geojsonLayer_SewageManhole = new GeoJSONLayer({
      url: url_SewageManhole,
      title: '管井',
      popupTemplate: template_SewageManhole,
      renderer: renderer_SewageManhole,
      opacity: 0.9
    })

    const geojsonLayer_SewagePumpSump = new GeoJSONLayer({
      url: url_SewagePumpSump,
      title: '泵站前池',
      popupTemplate: template_SewagePumpSump,
      renderer: renderer_SewagePumpSump,
      opacity: 0.9
    })

    const geojsonLayer_SewagePumpStation = new GeoJSONLayer({
      url: url_SewagePumpStation,
      title: '泵机组',
      popupTemplate: template_SewagePumpStation,
      renderer: renderer_SewagePumpStation,
      opacity: 0.9
    })

    const geojsonLayer_SewagePumpDischarge = new GeoJSONLayer({
      url: url_SewagePumpDischarge,
      title: '泵后出流',
      popupTemplate: template_SewagePumpDischarge,
      renderer: renderer_SewagePumpDischarge,
      opacity: 0.9
    })

    // const geojsonLayer_DischargeRainSubCatchment = new GeoJSONLayer({
    //   url: url_DischargeRainSubCatchment,
    //   title: '排口级分区',
    //   popupTemplate: template_DischargeRainSubCatchment,
    //   renderer: renderer_DischargeRainSubCatchment,
    //   opacity: 0.9
    // })

    // const geojsonLayer_BlockRainSubCatchment = new GeoJSONLayer({
    //   url: url_BlockRainSubCatchment,
    //   title: '街区级分区',
    //   popupTemplate: template_BlockRainSubCatchment,
    //   renderer: renderer_BlockRainSubCatchment,
    //   opacity: 0.9
    // })

    // const geojsonLayer_PlotRainSubCatchment = new GeoJSONLayer({
    //   url: url_PlotRainSubCatchment,
    //   title: '小区级分区',
    //   popupTemplate: template_PlotRainSubCatchment,
    //   renderer: renderer_PlotRainSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_CellRainSubCatchment = new GeoJSONLayer({
      url: url_CellRainSubCatchment,
      title: '元汇水级分区',
      popupTemplate: template_CellRainSubCatchment,
      renderer: renderer_CellRainSubCatchment,
      opacity: 0.9
    })

    // const geojsonLayer_WholeSewageSubCatchment = new GeoJSONLayer({
    //   url: url_WholeSewageSubCatchment,
    //   title: '全区级分区',
    //   popupTemplate: template_WholeSewageSubCatchment,
    //   renderer: renderer_WholeSewageSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_BlockSewageSubCatchment = new GeoJSONLayer({
      url: url_BlockSewageSubCatchment,
      title: '街区级分区',
      popupTemplate: template_BlockSewageSubCatchment,
      renderer: renderer_BlockSewageSubCatchment,
      opacity: 0.9
    })

    // const geojsonLayer_PlotSewageSubCatchment = new GeoJSONLayer({
    //   url: url_PlotSewageSubCatchment,
    //   title: '小区级分区',
    //   popupTemplate: template_PlotSewageSubCatchment,
    //   renderer: renderer_PlotSewageSubCatchment,
    //   opacity: 0.9
    // })

    const geojsonLayer_WeatherMonitoring = new GeoJSONLayer({
      url: url_WeatherMonitoring,
      title: '气象监测',
      popupTemplate: template_WeatherMonitoring,
      renderer: renderer_WeatherMonitoring,
      opacity: 1
    })

    // const geojsonLayer_PlotRainMonitoring = new GeoJSONLayer({
    //   url: url_PlotRainMonitoring,
    //   title: '小区级雨水监测',
    //   popupTemplate: template_PlotRainMonitoring,
    //   renderer: renderer_PlotRainMonitoring,
    //   opacity: 1
    // })

    // const geojsonLayer_BlockRainMonitoring = new GeoJSONLayer({
    //   url: url_BlockRainMonitoring,
    //   title: '街区级雨水监测',
    //   popupTemplate: template_BlockRainMonitoring,
    //   renderer: renderer_BlockRainMonitoring,
    //   opacity: 1
    // })

    // const geojsonLayer_DischargeRainMonitoring = new GeoJSONLayer({
    //   url: url_DischargeRainMonitoring,
    //   title: '排口级雨水监测',
    //   popupTemplate: template_DischargeRainMonitoring,
    //   outFields: ['*'],
    //   renderer: renderer_DischargeRainMonitoring,
    //   opacity: 1
    // })

    var WholeRainSubCatchmentGroupLayer = new GroupLayer({
      title: '基础要素',
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
      title: '雨水管网及厂站',
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
      title: '污水管网及厂站',
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
      title: '雨水汇水分区',
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
      title: '污水收水分区',
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
    //   title: '雨水监测',
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
      title: '监测站点',
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
