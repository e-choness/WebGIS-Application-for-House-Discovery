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
    Search,
    LayerList
  } = layui.arcgis

  function render_layer(container, callback) {
    const url_RiverNetwork = "json/Hangbu/Hangbu_RiverNetwork_2D_v01.json";
    const url_RiverCrossSections = "json/Hangbu/Hangbu_RiverCrossSections_v01.json";
    const url_RiverWeir_2D = "";
    const url_RiverDischarge = "json/Hangbu/Hangbu_RiverDischarge_v01.json";
    
    const url_RainPipeline_2D = "json/Hangbu/Hangbu_RainPipeline_2D_v01.json";
    const url_RainManhole_2D = "json/Hangbu/Hangbu_RainManhole_2D_v01.json";
    const url_RainStorages = "";
    const url_RainWeirs_2D = "";
    const url_RainPumpSump = "";
    const url_RainPumpStation = "";
    const url_RainPumpDischarge = "";

    const url_SewagePipeline_2D = "json/Hangbu/Hangbu_SewagePipeline_2D_v01.json";
    const url_SewageManhole_2D = "json/Hangbu/Hangbu_SewageManhole_2D_v01.json";
    const url_SewagePumpSump = "json/Hangbu/Hangbu_SewagePump_Sump_v01.json";
    const url_SewagePumpStation = "json/Hangbu/Hangbu_SewagePump_Station_v01.json";
    const url_SewagePumpDischarge = "json/Hangbu/Hangbu_SewagePump_Discharge_v01.json";

    const url_CSOPipeline_2D = "";
    const url_CSOManhole_2D = "";
    const url_Outfalls = "";

    const url_RainSubCatchment_1Whole = "json/Hangbu/Hangbu_RainSubCatchment_1Whole_v01.json";
    const url_RainSubCatchment_2Discharge = "";
    const url_RainSubCatchment_3Block = "";
    const url_RainSubCatchment_4Plot = "";
    const url_RainSubCatchment_5Cell = "json/Hangbu/Hangbu_RainSubCatchment_5Cell_v01.json";

    const url_SewageSubCatchment_1Whole = "";
    const url_SewageSubCatchment_2Discharge = "";
    const url_SewageSubCatchment_3Block = "json/Hangbu/Hangbu_SewageSubCatchment_3Block_v01.json";
    const url_SewageSubCatchment_4Plot = "";
    const url_SewageSubCatchment_5Cell = "";

    const url_Monitoring_Weather = "json/Hangbu/Hangbu_Monitor_Weather_v01.json";

    const url_Monitoring_Water = "";

    const url_Monitoring_RiverDischarge = "";
    const url_Monitoring_RiverCrossSections = "";
    
    const url_Monitoring_Rain_1Whole = "";
    const url_Monitoring_Rain_2Discharge = "";
    const url_Monitoring_Rain_3Block = "";
    const url_Monitoring_Rain_4Plot = "";
    const url_Monitoring_Rain_5Cell = "";

    const url_Monitoring_Sewage_1Whole = "";
    const url_Monitoring_Sewage_2Discharge = "";
    const url_Monitoring_Sewage_3Block = "";
    const url_Monitoring_Sewage_4Plot = "";
    const url_Monitoring_Sewage_5Cell = "";

    var StationChartAction = {
        title: "Chart",
        id: "StationChart",
        image: "src/style/res/Chart.svg"
    };

    var NodeChartAction = {
            title: "Chart",
            id: "NodeChart",
            image: "src/style/res/Chart.svg"
        };

    var LinkChartAction = {
        title: "Chart",
        id: "LinkChart",
        image: "src/style/res/Chart.svg"
    };

    var SubcatchmentChartAction = {
        title: "Chart",
        id: "SubcatchmentChart",
        image: "src/style/res/Chart.svg"
    };

    const template_RiverNetwork = {
      title: "<b>河道信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>名称(中文): </b> {ChName} <br>\
                <b>长度: </b> {Length} km <br>\
                <b>平均宽度: </b> {WidthAvg} m <br>\
                <b>平均深度: </b> {DepthAvg} m <br>\
                <b>河底平均高程: </b> {ElevBottAv} m <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_RiverCrossSections = {
      title: "<b>所选河道断面相关信息：</b>",
      content: "<b>模型名称: </b> {MSName} <br>\
                <b>测绘名称: </b> {GPName} <br>\
                <b>基准点X: </b> {X} <br>\
                <b>基准点Y: </b> {Y} <br>\
                <b>基准点底高程: </b> {Elevation} m <br>\
                <b>最大水深: </b> {DepthMax} m <br>\
                <b>初始水深: </b> {DepthInit} m <br>\
                <b>容许淹没水深: </b> {DepthSur} m <br>\
                <b>淹没时受水面积: </b> {Aponded} m^2 <br>\
                <b>状态: </b> {State} <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RiverWeir_2D = {
      title: "<b>所选河道堰坝相关信息：</b>",
      content: "<b>名称: </b> {NAME} <br>\
                <b>入流点模型编号: </b> {InletNode} <br>\
                <b>出流点模型编号: </b> {OutletNode} <br>\
                <b>堰底高程: </b> {Elevation} m <br>\
                <b>堰形: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} m <br>\
                <b>形状参数2: </b> {Geom2} m <br>\
                <b>类型: </b> {Type} <br>\
                <b>CrestHt: </b> {CrestHt} <br>\
                <b>过流系数Cd: </b> {Cd} <br>\
                <b>是否有拍门: </b> {Gated} <br>\
                <b>EC: </b> {EC} <br>\
                <b>过流系数Cd2: </b> {Cd2} <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RiverDischarge = {
      title: "<b>排口信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>类型: </b> {Type} <br>\
                <b>所属河道: </b> {River} <br>\
                <b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
      ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainPipeline_2D = {
      title: "<b>所选管段相关信息：</b>",
      content: "<b>模型编号: </b> {Name} <br>\
                <b>上游井模型编号: </b> {FromNode} <br>\
                <b>上游井底高程: </b> {FromNodeElev} m <br>\
                <b>下游井模型编号: </b> {ToNode} <br>\
                <b>下游井底高程: </b> {ToNodeElev} m <br>\
                <b>长度: </b> {Length} m <br>\
                <b>粗糙度: </b> {Roughness} <br>\
                <b>上游管接入偏离井底距离: </b> {InOffset} m <br>\
                <b>下游管接入偏离井底距离: </b> {OutOffset} m <br>\
                <b>初始流量: </b> {InitFlow} m^3/s <br>\
                <b>最大流量: </b> {MaxFlow} m^3/s <br>\
                <b>形状: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} m <br>\
                <b>形状参数2: </b> {Geom2} m <br>\
                <b>形状参数3: </b> {Geom3} m <br>\
                <b>形状参数4: </b> {Geom4} m <br>\
                <b>并行管数: </b> {Barrels} <br>\
                <b>Culvert: </b> {Culvert} <br>\
                <b>管道类型: </b> {Type} <br>\
                <b>埋设方式: </b> {BuryType} <br>\
                <b>权属单位: </b> {Belong} <br>\
                <b>埋设日期: </b> {BuryDate} <br>\
                <b>材质: </b> {Material} <br>\
                <b>使用单位: </b> {Owner} <br>\
                <b>淤积程度: </b> {Silt} <br>\
                <b>连通状况: </b> {Connectivity} <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainManhole_2D = {
      title: "<b>所选管井相关信息：</b>",
      content: "<b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
                <b>井底高程: </b> {Elevation} m <br>\
                <b>井深: </b> {DepthMax} m <br>\
                <b>初始水深: </b> {DepthInit} m <br>\
                <b>容许淹没水深: </b> {DepthSur} m <br>\
                <b>淹没时受水面积: </b> {Aponded} m^2 <br>\
                <b>使用状态: </b> {State} <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainStorages = {
      title: "<b>所选雨水调蓄池相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>出流点模型编号: </b> {MSOutletNode} <br>\
                <b>出流点物探编号: </b> {GPOutletNode} <br>\
                <b>池深: </b> {DepthMax} m <br>\
                <b>表面积: </b> {Area} m^2 <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainWeirs_2D = {
      title: "<b>所选雨水溢流堰相关信息：</b>",
      content: "<b>名称: </b> {NAME} <br>\
                <b>入流点模型编号: </b> {InletNode} <br>\
                <b>出流点模型编号: </b> {OutletNode} <br>\
                <b>堰底高程: </b> {Elevation} m <br>\
                <b>堰形: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} m <br>\
                <b>形状参数2: </b> {Geom2} m <br>\
                <b>类型: </b> {Type} <br>\
                <b>CrestHt: </b> {CrestHt} <br>\
                <b>过流系数Cd: </b> {Cd} <br>\
                <b>是否有拍门: </b> {Gated} <br>\
                <b>EC: </b> {EC} <br>\
                <b>过流系数Cd2: </b> {Cd2} <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };


    const template_RainPumpSump = {
      title: "<b>所选泵站前池相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>池底高程: </b> {Elevation} m <br>\
                <b>池深: </b> {DepthMax} m <br>\
                <b>初始水深: </b> {DepthInit} m <br>\
                <b>池体水深-表面积曲线编号: </b> {CurveName} <br>\
                <b>A0: </b> {A0} m <br>\
                <b>A1: </b> {A1} <br>\
                <b>A2: </b> {A2} <br>\
                <b>Apond: </b> {Apond} <br>\
                <b>Fevap: </b> {Fevap} <br>\
                <b>Psi: </b> {Psi} <br>\
                <b>Ksat: </b> {Ksat} <br>\
                <b>IMD: </b> {IMD} <br>\
              ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainPumpStation = {
      title: "<b>所选泵站机组相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>名称(中文): </b> {ChName} <br>\
                <b>类型: </b> {Type} <br>\
                <b>入流点模型编号: </b> {InletNode} <br>\
                <b>出流点模型编号: </b> {OutletNode} <br>\
                <b>泵特性曲线编号: </b> {PumpCurve} <br>\
                <b>初始状态: </b> {InitStatus} <br>\
                <b>启泵水深: </b> {StartupDep} m <br>\
                <b>停泵水深: </b> {ShutoffDep} m <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainPumpDischarge = {
      title: "<b>所选泵站出流相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>类型: </b> {Type} <br>\
                <b>高程: </b> {Elevation} <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };


    const template_SewagePipeline_2D = {
      title: "<b>所选管段相关信息：</b>",
      content: "<b>模型编号: </b> {Name} <br>\
                <b>上游井模型编号: </b> {FromNode} <br>\
                <b>上游井底高程: </b> {FromNodeElev} m <br>\
                <b>下游井模型编号: </b> {ToNode} <br>\
                <b>下游井底高程: </b> {ToNodeElev} m <br>\
                <b>长度: </b> {Length} m <br>\
                <b>粗糙度: </b> {Roughness} <br>\
                <b>上游管接入偏离井底距离: </b> {InOffset} m <br>\
                <b>下游管接入偏离井底距离: </b> {OutOffset} m <br>\
                <b>初始流量: </b> {InitFlow} m^3/s <br>\
                <b>最大流量: </b> {MaxFlow} m^3/s <br>\
                <b>形状: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} m <br>\
                <b>形状参数2: </b> {Geom2} m <br>\
                <b>形状参数3: </b> {Geom3} m <br>\
                <b>形状参数4: </b> {Geom4} m <br>\
                <b>并行管数: </b> {Barrels} <br>\
                <b>Culvert: </b> {Culvert} <br>\
                <b>管道类型: </b> {Type} <br>\
                <b>埋设方式: </b> {BuryType} <br>\
                <b>权属单位: </b> {Belong} <br>\
                <b>埋设日期: </b> {BuryDate} <br>\
                <b>材质: </b> {Material} <br>\
                <b>使用单位: </b> {Owner} <br>\
                <b>淤积程度: </b> {Silt} <br>\
                <b>连通状况: </b> {Connectivity} <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewageManhole_2D = {
      title: "<b>所选管井相关信息：</b>",
      content: "<b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
                <b>井底高程: </b> {Elevation} m <br>\
                <b>井深: </b> {DepthMax} m <br>\
                <b>初始水深: </b> {DepthInit} m <br>\
                <b>容许淹没水深: </b> {DepthSur} m <br>\
                <b>淹没时受水面积: </b> {Aponded} m^2 <br>\
                <b>使用状态: </b> {State} <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewagePumpSump = {
      title: "<b>所选泵站前池相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>池底高程: </b> {Elevation} m <br>\
                <b>池深: </b> {DepthMax} m <br>\
                <b>初始水深: </b> {DepthInit} m <br>\
                <b>池体水深-表面积曲线编号: </b> {CurveName} <br>\
                <b>A0: </b> {A0} m <br>\
                <b>A1: </b> {A1} <br>\
                <b>A2: </b> {A2} <br>\
                <b>Apond: </b> {Apond} <br>\
                <b>Fevap: </b> {Fevap} <br>\
                <b>Psi: </b> {Psi} <br>\
                <b>Ksat: </b> {Ksat} <br>\
                <b>IMD: </b> {IMD} <br>\
              ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewagePumpStation = {
      title: "<b>所选泵站机组相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>名称(中文): </b> {ChName} <br>\
                <b>类型: </b> {Type} <br>\
                <b>入流点模型编号: </b> {InletNode} <br>\
                <b>出流点模型编号: </b> {OutletNode} <br>\
                <b>泵特性曲线编号: </b> {PumpCurve} <br>\
                <b>初始状态: </b> {InitStatus} <br>\
                <b>启泵水深: </b> {StartupDep} m <br>\
                <b>停泵水深: </b> {ShutoffDep} m <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewagePumpDischarge = {
      title: "<b>所选泵站出流相关信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>类型: </b> {Type} <br>\
                <b>高程: </b> {Elevation} <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };


    const template_CSOPipeline_2D = {
      title: "<b>所选管段相关信息：</b>",
      content: "<b>模型编号: </b> {Name} <br>\
                <b>上游井模型编号: </b> {FromNode} <br>\
                <b>上游井底高程: </b> {FromNodeElev} m <br>\
                <b>下游井模型编号: </b> {ToNode} <br>\
                <b>下游井底高程: </b> {ToNodeElev} m <br>\
                <b>长度: </b> {Length} m <br>\
                <b>粗糙度: </b> {Roughness} <br>\
                <b>上游管接入偏离井底距离: </b> {InOffset} m <br>\
                <b>下游管接入偏离井底距离: </b> {OutOffset} m <br>\
                <b>初始流量: </b> {InitFlow} m^3/s <br>\
                <b>最大流量: </b> {MaxFlow} m^3/s <br>\
                <b>形状: </b> {ShapeO} <br>\
                <b>形状参数1: </b> {Geom1} m <br>\
                <b>形状参数2: </b> {Geom2} m <br>\
                <b>形状参数3: </b> {Geom3} m <br>\
                <b>形状参数4: </b> {Geom4} m <br>\
                <b>并行管数: </b> {Barrels} <br>\
                <b>Culvert: </b> {Culvert} <br>\
                <b>管道类型: </b> {Type} <br>\
                <b>埋设方式: </b> {BuryType} <br>\
                <b>权属单位: </b> {Belong} <br>\
                <b>埋设日期: </b> {BuryDate} <br>\
                <b>材质: </b> {Material} <br>\
                <b>使用单位: </b> {Owner} <br>\
                <b>淤积程度: </b> {Silt} <br>\
                <b>连通状况: </b> {Connectivity} <br>\
              ",
      actions: [LinkChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_CSOManhole_2D = {
      title: "<b>所选管井相关信息：</b>",
      content: "<b>模型编号: </b> {MSName} <br>\
                <b>物探编号: </b> {GPName} <br>\
                <b>井底高程: </b> {Elevation} m <br>\
                <b>井深: </b> {DepthMax} m <br>\
                <b>初始水深: </b> {DepthInit} m <br>\
                <b>容许淹没水深: </b> {DepthSur} m <br>\
                <b>淹没时受水面积: </b> {Aponded} m^2 <br>\
                <b>使用状态: </b> {State} <br>\
              ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };



    const template_Outfalls = {
      title: "<b>出流排口信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>类型: </b> {Type} <br>\
                <b>是否有拍门: </b> {Gated} <br>\
                <b>模型编号: </b> {Name} <br>\
                <b>物探编号: </b> {} <br>\
                <b>高程: </b> {Elevation} <br>\
      ",
      actions: [NodeChartAction],
      overwriteActions: true,
      opacity: .6
    };


    const template_RainSubCatchment_1Whole = {
      title: "<b>区位信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
                <br>",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };


    const template_RainSubCatchment_2Discharge = {
      title: "<b>汇水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应排口名: </b> {Discharge} <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainSubCatchment_3Block = {
      title: "<b>汇水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainSubCatchment_4Plot = {
      title: "<b>汇水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_RainSubCatchment_5Cell = {
      title: "<b>汇水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>元汇水区平均宽度: </b> {Width} m <br>\
                <b>元汇水区对应气象站: </b> {RainGage} <br>\
                <b>Curb Length: </b> {CurbLen} m <br>\
                <b>雪堆编号: </b> {Snowpack} <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
                <b>不透水区面积占比: </b> {ImpervP} % <br>\
                <b>平均坡度: </b> {Slope} % <br>\
      ",
      actions: [SubcatchmentChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewageSubCatchment_1Whole = {
      title: "<b>收水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
                <br>",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewageSubCatchment_2Discharge = {
      title: "<b>收水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应排口名: </b> {Discharge} <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewageSubCatchment_3Block = {
      title: "<b>收水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewageSubCatchment_4Plot = {
      title: "<b>收水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_SewageSubCatchment_5Cell = {
      title: "<b>收水区信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>面积: </b> {Area} km^2 <br>\
                <b>对应出流口模型编号: </b> {MSOutletNode} <br>\
                <b>对应出流口物探编号: </b> {GPOutletNode} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Weather = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>外源平台ID: </b> {WeatherStationID} <br>\
                <b>类型编码: </b> {WeatherStationType} <br>\
                <b>物理站点名称: </b> {WeatherMeterName} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Water = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>类型: </b> {Type} <br>\
                <b>监测目标: </b> {Target} <br>\
      ",
      actions: [],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_RiverDischarge = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_RiverCrossSections = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Rain_1Whole = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Rain_2Discharge = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Rain_3Block = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Rain_4Plot = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };
    
    const template_Monitoring_Rain_5Cell = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Sewage_1Whole = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Sewage_2Discharge = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Sewage_3Block = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Sewage_4Plot = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const template_Monitoring_Sewage_5Cell = {
      title: "<b>监测点信息：</b>",
      content: "<b>名称: </b> {Name} <br>\
                <b>对应点位模型编号: </b> {MSOutletNode} <br>\
                <b>对应点位物探编号: </b> {GPOutletNode} <br>\
                <b>对应点位水质仪表ID编号: </b> {WaterQualityDeviceID} <br>\
                <b>对应点位水质仪表类型编号: </b> {WaterQualityType} <br>\
                <b>对应点位水质仪表物理编号: </b> {WaterQualityMeterName} <br>\
                <b>对应点位水量仪表ID编号: </b> {WaterQuantityDeviceID} <br>\
                <b>对应点位水量仪表类型编号: </b> {WaterQuantityType} <br>\
                <b>对应点位水量仪表物理编号: </b> {WaterQuantityMeterName} <br>\
                <b>所属项目区域: </b> {Project} <br>\
                <b>所属总量管控分区级别: </b> {Class} <br>\
      ",
      actions: [StationChartAction],
      overwriteActions: true,
      opacity: .6
    };

    const renderer_RiverNetwork = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "simple-fill",
        color: [0, 225, 225, 0.9],
        outline: {  // autocasts as new SimpleLineSymbol()
          color: [0, 225, 225, 0.9],
          width: "1px"
        }
      }
    };

    const renderer_RiverCrossSections = {
      type: "simple",
      symbol: {
        type: "line-3d",
        symbolLayers: [{
          type: "line",
          size: 2.5,
          material: {
            color: "red"
          },
          cap: "round",
          join: "round"
        }]
      }
    };

    const renderer_RiverWeir_2D = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/weir.png",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_RiverDischarge = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        style: "square",
        size: 15,
        color: "blue",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };

    const renderer_RainPipeline_2D = {
      type: "simple",
      symbol: {
        type: "line-3d",
        symbolLayers: [{
          type: "line",
          size: 2.5,
          material: {
            color: "#33CC33"
          },
          cap: "round",
          join: "round"
        }]
      }
    };

    const renderer_RainManhole_2D = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        size: 6,
        color: "blue",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };

    const renderer_RainStorages = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/waterPool.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_RainWeirs_2D = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/weir.png",
        width: "40px",
        height: "40px"
      }
    };


    const renderer_RainPumpSump = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/waterPool.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_RainPumpStation = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/pump.png",
        width: "60px",
        height: "60px"
      }
    };

    const renderer_RainPumpDischarge = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        style: "square",
        size: 15,
        color: "brown",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };


    const renderer_SewagePipeline_2D = {
      type: "simple",
      symbol: {
        type: "line-3d",
        symbolLayers: [{
          type: "line",
          size: 2.5,
          material: {
            color: "#996633"
          },
          cap: "round",
          join: "round"
        }]
      }
    };

    const renderer_SewageManhole_2D = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        size: 6,
        color: "black",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };

    const renderer_SewagePumpSump = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/waterPool.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_SewagePumpStation = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/pump.png",
        width: "60px",
        height: "60px"
      }
    };

    const renderer_SewagePumpDischarge = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        style: "square",
        size: 15,
        color: "brown",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };


    const renderer_CSOPipeline_2D = {
      type: "simple",
      symbol: {
        type: "line-3d",
        symbolLayers: [{
          type: "line",
          size: 2.5,
          material: {
            color: "#996633"
          },
          cap: "round",
          join: "round"
        }]
      }
    };

    const renderer_CSOManhole_2D = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        size: 6,
        color: "black",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };

    const renderer_Outfalls = {
      type: "simple",
      symbol: {
        type: "simple-marker", // autocasts as new PictureMarkerSymbol()
        style: "square",
        size: 15,
        color: "brown",
        outline: {  // autocasts as new SimpleLineSymbol()
          width: 0.5,
          color: "white"
        }
      }
    };


    const renderer_RainSubCatchment_1Whole = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 5.0,  // points
            material: { color: "fuchsia" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };


    const renderer_RainSubCatchment_2Discharge = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 4.0,  // points
            material: { color: "fuchsia" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_RainSubCatchment_3Block = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 3.0,  // points
            material: { color: "fuchsia" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_RainSubCatchment_4Plot = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 2.0,  // points
            material: { color: "fuchsia" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_RainSubCatchment_5Cell = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 1.0,  // points
            material: { color: "fuchsia" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_SewageSubCatchment_1Whole = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 5.0,  // points
            material: { color: "black" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_SewageSubCatchment_2Discharge = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 4.0,  // points
            material: { color: "black" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_SewageSubCatchment_3Block = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 3.0,  // points
            material: { color: "black" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_SewageSubCatchment_4Plot = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 2.0,  // points
            material: { color: "black" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_SewageSubCatchment_5Cell = {
      type: "simple",
      symbol: {
        // type: "polygon-3d",
        type: "line-3d",
        symbolLayers: [
          {
            // type: "extrude" // autocasts as new ExtrudeSymbol3DLayer()
            type: "line",
            size: 1.0,  // points
            material: { color: "black" },
            cap: "round",
            join: "round"
          }
        ]
      }
    };

    const renderer_Monitoring_Weather = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/RainGage.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Water = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Water.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_RiverDischarge = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Stream.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_RiverCrossSections = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Stream.svg",
        width: "40px",
        height: "40px"
      }
    };


    const renderer_Monitoring_Rain_1Whole = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Rain.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Rain_2Discharge = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Rain.svg",
        width: "40px",
        height: "40px"
      }
    };
    
    const renderer_Monitoring_Rain_3Block = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Rain.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Rain_4Plot = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Rain.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Rain_5Cell = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Rain.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Sewage_1Whole = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Sewage.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Sewage_2Discharge = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Sewage.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Sewage_3Block = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Sewage.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Sewage_4Plot = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Sewage.svg",
        width: "40px",
        height: "40px"
      }
    };

    const renderer_Monitoring_Sewage_5Cell = {
      type: "simple",
      symbol: {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "src/style/res/Sewage.svg",
        width: "40px",
        height: "40px"
      }
    };

    const geojsonLayer_RiverNetwork = new GeoJSONLayer({
      url: url_RiverNetwork,
      title: "自然河道",
      popupTemplate: template_RiverNetwork,
      renderer: renderer_RiverNetwork,
      opacity: .9
    });

    const geojsonLayer_RiverCrossSections = new GeoJSONLayer({
      url: url_RiverCrossSections,
      title: "河道断面",
      popupTemplate: template_RiverCrossSections,
      renderer: renderer_RiverCrossSections,
      opacity: .9
    });

    const geojsonLayer_RiverWeir_2D = new GeoJSONLayer({
      url: url_RiverWeir_2D,
      title: "河道堰坝",
      popupTemplate: template_RiverWeir_2D,
      renderer: renderer_RiverWeir_2D,
      opacity: .9
    });

    const geojsonLayer_RiverDischarge = new GeoJSONLayer({
      url: url_RiverDischarge,
      title: "沿河湖重要排口",
      popupTemplate: template_RiverDischarge,
      renderer: renderer_RiverDischarge,
      opacity: .9
    });

    const geojsonLayer_RainPipeline_2D = new GeoJSONLayer({
      url: url_RainPipeline_2D,
      title: "管道",
      popupTemplate: template_RainPipeline_2D,
      renderer: renderer_RainPipeline_2D,
      opacity: .9
    });

    const geojsonLayer_RainManhole_2D = new GeoJSONLayer({
      url: url_RainManhole_2D,
      title: "管井",
      popupTemplate: template_RainManhole_2D,
      renderer: renderer_RainManhole_2D,
      opacity: .9
    });

    const geojsonLayer_RainStorages = new GeoJSONLayer({
      url: url_RainStorages,
      title: "调蓄池",
      popupTemplate: template_RainStorages,
      renderer: renderer_RainStorages,
      opacity: .9
    });

    const geojsonLayer_RainWeirs_2D = new GeoJSONLayer({
      url: url_RainWeirs_2D,
      title: "溢流堰",
      popupTemplate: template_RainWeirs_2D,
      renderer: renderer_RainWeirs_2D,
      opacity: .9
    });


    const geojsonLayer_RainPumpSump = new GeoJSONLayer({
      url: url_RainPumpSump,
      title: "泵站前池",
      popupTemplate: template_RainPumpSump,
      renderer: renderer_RainPumpSump,
      opacity: .9
    });

    const geojsonLayer_RainPumpStation = new GeoJSONLayer({
      url: url_RainPumpStation,
      title: "泵机组",
      popupTemplate: template_RainPumpStation,
      renderer: renderer_RainPumpStation,
      opacity: .9
    });
    
    const geojsonLayer_RainPumpDischarge = new GeoJSONLayer({
      url: url_RainPumpDischarge,
      title: "泵站出流",
      popupTemplate: template_RainPumpDischarge,
      renderer: renderer_RainPumpDischarge,
      opacity: .9
    });
    

    const geojsonLayer_SewagePipeline_2D = new GeoJSONLayer({
      url: url_SewagePipeline_2D,
      title: "管道",
      popupTemplate: template_SewagePipeline_2D,
      renderer: renderer_SewagePipeline_2D,
      opacity: .9
    });

    const geojsonLayer_SewageManhole_2D = new GeoJSONLayer({
      url: url_SewageManhole_2D,
      title: "管井",
      popupTemplate: template_SewageManhole_2D,
      renderer: renderer_SewageManhole_2D,
      opacity: .9
    });

    const geojsonLayer_SewagePumpSump = new GeoJSONLayer({
      url: url_SewagePumpSump,
      title: "泵站前池",
      popupTemplate: template_SewagePumpSump,
      renderer: renderer_SewagePumpSump,
      opacity: .9
    });

    const geojsonLayer_SewagePumpStation = new GeoJSONLayer({
      url: url_SewagePumpStation,
      title: "泵机组",
      popupTemplate: template_SewagePumpStation,
      renderer: renderer_SewagePumpStation,
      opacity: .9
    });
    
    const geojsonLayer_SewagePumpDischarge = new GeoJSONLayer({
      url: url_SewagePumpDischarge,
      title: "泵站出流",
      popupTemplate: template_SewagePumpDischarge,
      renderer: renderer_SewagePumpDischarge,
      opacity: .9
    });

    

    const geojsonLayer_CSOPipeline_2D = new GeoJSONLayer({
      url: url_CSOPipeline_2D,
      title: "CSO相关管道",
      popupTemplate: template_CSOPipeline_2D,
      renderer: renderer_CSOPipeline_2D,
      opacity: .9
    });

    const geojsonLayer_CSOManhole_2D = new GeoJSONLayer({
      url: url_CSOManhole_2D,
      title: "CSO相关管井",
      popupTemplate: template_CSOManhole_2D,
      renderer: renderer_CSOManhole_2D,
      opacity: .9
    });

    const geojsonLayer_Outfalls = new GeoJSONLayer({
      url: url_Outfalls,
      title: "排口出流",
      popupTemplate: template_Outfalls,
      renderer: renderer_Outfalls,
      opacity: .9
    });
    

    const geojsonLayer_RainSubCatchment_1Whole = new GeoJSONLayer({
      url: url_RainSubCatchment_1Whole,
      title: "区域边界",
      popupTemplate: template_RainSubCatchment_1Whole,
      renderer: renderer_RainSubCatchment_1Whole,
      opacity: .9
    });

    const geojsonLayer_RainSubCatchment_2Discharge = new GeoJSONLayer({
      url: url_RainSubCatchment_2Discharge,
      title: "排口级分区",
      popupTemplate: template_RainSubCatchment_2Discharge,
      renderer: renderer_RainSubCatchment_2Discharge,
      opacity: .9
    });

    const geojsonLayer_RainSubCatchment_3Block = new GeoJSONLayer({
      url: url_RainSubCatchment_3Block,
      title: "街区级分区",
      popupTemplate: template_RainSubCatchment_3Block,
      renderer: renderer_RainSubCatchment_3Block,
      opacity: .9
    });

    const geojsonLayer_RainSubCatchment_4Plot = new GeoJSONLayer({
      url: url_RainSubCatchment_4Plot,
      title: "小区级分区",
      popupTemplate: template_RainSubCatchment_4Plot,
      renderer: renderer_RainSubCatchment_4Plot,
      opacity: .9
    });

    const geojsonLayer_RainSubCatchment_5Cell = new GeoJSONLayer({
      url: url_RainSubCatchment_5Cell,
      title: "元汇水级分区",
      popupTemplate: template_RainSubCatchment_5Cell,
      renderer: renderer_RainSubCatchment_5Cell,
      opacity: .9
    });

    const geojsonLayer_SewageSubCatchment_1Whole = new GeoJSONLayer({
      url: url_SewageSubCatchment_1Whole,
      title: "全区级分区",
      popupTemplate: template_SewageSubCatchment_1Whole,
      renderer: renderer_SewageSubCatchment_1Whole,
      opacity: .9
    });

    const geojsonLayer_SewageSubCatchment_2Discharge = new GeoJSONLayer({
      url: url_SewageSubCatchment_2Discharge,
      title: "排口级分区",
      popupTemplate: template_SewageSubCatchment_2Discharge,
      renderer: renderer_SewageSubCatchment_2Discharge,
      opacity: .9
    });

    const geojsonLayer_SewageSubCatchment_3Block = new GeoJSONLayer({
      url: url_SewageSubCatchment_3Block,
      title: "街区级分区",
      popupTemplate: template_SewageSubCatchment_3Block,
      renderer: renderer_SewageSubCatchment_3Block,
      opacity: .9
    });

    const geojsonLayer_SewageSubCatchment_4Plot = new GeoJSONLayer({
      url: url_SewageSubCatchment_4Plot,
      title: "小区级分区",
      popupTemplate: template_SewageSubCatchment_4Plot,
      renderer: renderer_SewageSubCatchment_4Plot,
      opacity: .9
    });

    const geojsonLayer_SewageSubCatchment_5Cell = new GeoJSONLayer({
      url: url_SewageSubCatchment_5Cell,
      title: "元收水级分区",
      popupTemplate: template_SewageSubCatchment_5Cell,
      renderer: renderer_SewageSubCatchment_5Cell,
      opacity: .9
    });

    const geojsonLayer_Monitoring_Weather = new GeoJSONLayer({
      url: url_Monitoring_Weather,
      title: "气象监测",
      popupTemplate: template_Monitoring_Weather,
      renderer: renderer_Monitoring_Weather,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Water = new GeoJSONLayer({
      url: url_Monitoring_Water,
      title: "供水监测",
      popupTemplate: template_Monitoring_Water,
      renderer: renderer_Monitoring_Water,
      opacity: 1
    });

    const geojsonLayer_Monitoring_RiverDischarge = new GeoJSONLayer({
      url: url_Monitoring_RiverDischarge,
      title: "河湖沿线排口监测",
      popupTemplate: template_Monitoring_RiverDischarge,
      renderer: renderer_Monitoring_RiverDischarge,
      opacity: 1
    });

    const geojsonLayer_Monitoring_RiverCrossSections = new GeoJSONLayer({
      url: url_Monitoring_RiverCrossSections,
      title: "河道断面监测",
      popupTemplate: template_Monitoring_RiverCrossSections,
      renderer: renderer_Monitoring_RiverCrossSections,
      opacity: 1
    });


    const geojsonLayer_Monitoring_Rain_1Whole = new GeoJSONLayer({
      url: url_Monitoring_Rain_1Whole,
      title: "全区级雨水监测",
      popupTemplate: template_Monitoring_Rain_1Whole,
      renderer: renderer_Monitoring_Rain_1Whole,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Rain_2Discharge = new GeoJSONLayer({
      url: url_Monitoring_Rain_2Discharge,
      title: "排口级雨水监测",
      popupTemplate: template_Monitoring_Rain_2Discharge,
      renderer: renderer_Monitoring_Rain_2Discharge,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Rain_3Block = new GeoJSONLayer({
      url: url_Monitoring_Rain_3Block,
      title: "街区级雨水监测",
      popupTemplate: template_Monitoring_Rain_3Block,
      renderer: renderer_Monitoring_Rain_3Block,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Rain_4Plot = new GeoJSONLayer({
      url: url_Monitoring_Rain_4Plot,
      title: "小区级雨水监测",
      popupTemplate: template_Monitoring_Rain_4Plot,
      renderer: renderer_Monitoring_Rain_4Plot,
      opacity: 1
    });


    const geojsonLayer_Monitoring_Rain_5Cell = new GeoJSONLayer({
      url: url_Monitoring_Rain_5Cell,
      title: "元汇水区级雨水监测",
      popupTemplate: template_Monitoring_Rain_5Cell,
      renderer: renderer_Monitoring_Rain_5Cell,
      opacity: 1
    });
        
    const geojsonLayer_Monitoring_Sewage_1Whole = new GeoJSONLayer({
      url: url_Monitoring_Sewage_1Whole,
      title: "全区级污水监测",
      popupTemplate: template_Monitoring_Sewage_1Whole,
      renderer: renderer_Monitoring_Sewage_1Whole,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Sewage_2Discharge = new GeoJSONLayer({
      url: url_Monitoring_Sewage_2Discharge,
      title: "排口级污水监测",
      popupTemplate: template_Monitoring_Sewage_2Discharge,
      renderer: renderer_Monitoring_Sewage_2Discharge,
      opacity: 1
    });


    const geojsonLayer_Monitoring_Sewage_3Block = new GeoJSONLayer({
      url: url_Monitoring_Sewage_3Block,
      title: "街区级污水监测",
      popupTemplate: template_Monitoring_Sewage_3Block,
      renderer: renderer_Monitoring_Sewage_3Block,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Sewage_4Plot = new GeoJSONLayer({
      url: url_Monitoring_Sewage_4Plot,
      title: "小区级污水监测",
      popupTemplate: template_Monitoring_Sewage_4Plot,
      renderer: renderer_Monitoring_Sewage_4Plot,
      opacity: 1
    });

    const geojsonLayer_Monitoring_Sewage_5Cell = new GeoJSONLayer({
      url: url_Monitoring_Sewage_5Cell,
      title: "元收水区级污水监测",
      popupTemplate: template_Monitoring_Sewage_5Cell,
      renderer: renderer_Monitoring_Sewage_5Cell,
      opacity: 1
    });

    var RainSubCatchment_1WholeGroupLayer = new GroupLayer({
          title: "河道要素",
          visible: true,
          visibilityMode: "independent",
          layers: [
            geojsonLayer_RiverDischarge,
            geojsonLayer_RiverWeir_2D,
            geojsonLayer_RiverCrossSections,
            geojsonLayer_RiverNetwork
          ],
          opacity: 0.75
        });

      var RainPipeNetworkGroupLayer = new GroupLayer({
        title: "雨水管网及厂站",
        visible: true,
        visibilityMode: "independent",
        layers: [
          geojsonLayer_Outfalls,
          geojsonLayer_CSOPipeline_2D, 
          geojsonLayer_CSOManhole_2D,
          geojsonLayer_RainPumpDischarge,
          geojsonLayer_RainPumpStation,
          geojsonLayer_RainPumpSump,
          geojsonLayer_RainWeirs_2D,
          geojsonLayer_RainStorages,
          geojsonLayer_RainPipeline_2D, 
          geojsonLayer_RainManhole_2D
        ],
        opacity: 0.75
      });

      var SewagePipeNetworkGroupLayer = new GroupLayer({
        title: "污水管网及厂站",
        visible: true,
        visibilityMode: "independent",
        layers: [
          geojsonLayer_SewagePumpDischarge,
          geojsonLayer_SewagePumpStation,
          geojsonLayer_SewagePumpSump,
          geojsonLayer_SewagePipeline_2D, 
          geojsonLayer_SewageManhole_2D
        ],
        opacity: 0.75
      });

      var RainSubCatchmentZoneGroupLayer = new GroupLayer({
        title: "雨水汇水分区",
        visible: true,
        visibilityMode: "independent",
        layers: [
          geojsonLayer_RainSubCatchment_5Cell,
          geojsonLayer_RainSubCatchment_4Plot,
          geojsonLayer_RainSubCatchment_3Block, 
          geojsonLayer_RainSubCatchment_2Discharge,
          geojsonLayer_RainSubCatchment_1Whole
        ],
        opacity: 0.75
      });

      var SewageSubCatchmentZoneGroupLayer = new GroupLayer({
        title: "污水收水分区",
        visible: true,
        visibilityMode: "independent",
        layers: [
          geojsonLayer_SewageSubCatchment_5Cell,
          geojsonLayer_SewageSubCatchment_4Plot, 
          geojsonLayer_SewageSubCatchment_3Block,
          geojsonLayer_SewageSubCatchment_2Discharge,
          geojsonLayer_SewageSubCatchment_1Whole,
        ],
        opacity: 0.75
      });

      var MonitoringStreamGroupLayer = new GroupLayer({
          title: "河道监测",
          visible: true,
          visibilityMode: "independent",
          layers: [
            geojsonLayer_Monitoring_RiverDischarge,
            geojsonLayer_Monitoring_RiverCrossSections
          ],
          opacity: 1
        });

      var MonitoringRainGroupLayer = new GroupLayer({
        title: "雨水监测",
        visible: true,
        visibilityMode: "independent",
        layers: [
          geojsonLayer_Monitoring_Rain_5Cell,
          geojsonLayer_Monitoring_Rain_4Plot,
          geojsonLayer_Monitoring_Rain_3Block, 
          geojsonLayer_Monitoring_Rain_2Discharge, 
          geojsonLayer_Monitoring_Rain_1Whole
        ],
        opacity: 1
      });

      var MonitoringSewageGroupLayer = new GroupLayer({
        title: "污水监测",
        visible: true,
        visibilityMode: "independent",
        layers: [
          geojsonLayer_Monitoring_Sewage_5Cell,
          geojsonLayer_Monitoring_Sewage_4Plot,
          geojsonLayer_Monitoring_Sewage_3Block, 
          geojsonLayer_Monitoring_Sewage_2Discharge, 
          geojsonLayer_Monitoring_Sewage_1Whole
        ],
        opacity: 1
      });


      var MonitoringGroupLayer = new GroupLayer({
        title: "监测站点",
        visible: true,
        visibilityMode: "independent",
        layers: [
          MonitoringSewageGroupLayer,
          MonitoringRainGroupLayer,
          MonitoringStreamGroupLayer,
          geojsonLayer_Monitoring_Weather,
          geojsonLayer_Monitoring_Water
        ],
        opacity: 1
      });

    var generalGroup = new GroupLayer({
      title: "图层管理",
      visible: true,
      visibilityMode: "independent",
      layers: [
         MonitoringGroupLayer,
        SewageSubCatchmentZoneGroupLayer,
        RainSubCatchmentZoneGroupLayer,
        SewagePipeNetworkGroupLayer, 
        RainPipeNetworkGroupLayer, 
        RainSubCatchment_1WholeGroupLayer
      ],
      opacity: 1
    });

    var map = new Map({
      basemap: "topo-vector",
      // basemap: "dark-gray",
      // basemap: "gray-vector",
      // basemap: "oceans",
      ground: "world-elevation",
      layers: [
        generalGroup
        // MonitoringGroupLayer,
        // SewageSubCatchmentZoneGroupLayer,
        // RainSubCatchmentZoneGroupLayer,
        // SewagePipeNetworkGroupLayer, 
        // RainPipeNetworkGroupLayer, 
        // WholeRainSubCatchmentGroupLayer
      ]
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
          position: 'top-center'
        }
      },
          // scale: 25000,
          // center: [117.828, 31.585],
      camera: {
        position: {  // observation point
          x: 117.175,
          y: 31.516,
          z: 6000 // altitude in meters
        },
        tilt: 0  // perspective in degrees
      }
    });

    var basemapToggle = new BasemapToggle({
      view: view,
      nextBasemap: "satellite"
    });

    var searchWidget = new Search({
      view: view
    });

    view.ui.add(basemapToggle, "top-left");
    // Add the search widget to the top right corner of the view
    view.ui.add(searchWidget, {
      position: "bottom-left"
    });

    view.when(function() {
          var layerList = new LayerList({
            view: view
          });

          // Add widget to the top right corner of the view
          view.ui.add(layerList, "top-right");
        });


    view.popup.on('trigger-action', function(event) {
      var attrs = view.popup.selectedFeature.attributes
      var event_id = event.action.id
      console.log(event_id)
      
      if (callback[event_id] && callback[event_id] instanceof Function) {
        console.log(callback, attrs)
        callback[event_id](attrs)
      }
    
    })

    console.log('hangbu res: ', map, view)

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
