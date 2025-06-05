layui.define(function (exports) {

  console.log('echarts version: ', echarts.version)

  function formatter(v) {
    return echarts.format.formatTime('yyyy-MM-dd hh:mm', new Date(v))
  }

  function unitMapper(name) {
    var units = {
      "COD": '(mg/L)',
      "TSS": '(mg/L)',
      "BOD": '(mg/L)',
      "NO3-N(有机污染物)": '(ads/m)',
      "UV254(有机污染物)": '(mg/L)',
      "TOC": '(mg/L)',
      "色度": '(度)',
      "HS-(硫化物)": '(mg/L)',
    }
    return units[name]
  }

  function nameMapper(name) {
    var units = {
      "COD": 'COD',
      "TSS": 'TSS',
      "BOD": 'BOD',
      "NO3-N(有机污染物)": 'NOx',
      "UV254(有机污染物)": 'UV254',
      "TOC": 'TOC',
      "色度": '色度',
      "HS-(硫化物)": 'HS',
    }
    return units[name]
  }

  function valueMax(tupleArray) {
    var max = +0.0000;
    var tmp;
    // console.log(tupleArray)
    if (tupleArray instanceof Array) {
      for (var i = 0; i < tupleArray.length; i++) {
        tmp = parseFloat(tupleArray[i][1])
        if (max < tmp) max = tmp
      }
      // console.log('res max: ', max)
      if (max > 1) max = Math.ceil(max + max / 3)
      else if(max < 0.001){
        max = 0.001
      }
      else {
        max = 2 * max
        max = parseFloat(max).toFixed(3)
      }
      // console.log('max ', max)
      return parseFloat(max)
    }
    else {
      console.log(typeof tupleArray, tupleArray)
      return 'not tupleArray'
    }
  }

  function DateDiff(d1, d2) {
    d1 = new Date(d1)
    d2 = new Date(d2)
    var t2 = d2.getTime();
    var t1 = d1.getTime();

    return parseInt((t2 - t1) / (24 * 3600 * 1000));
  }

  function splitData(rawData) {
    var categoryData = []
    var Inflow = []
    var Flooding = []
    var Depth = []
    var Head = []
    var TSS = []
    var BOD = []
    var COD = []
    var CODi = []
    var org_P = []
    var PO4 = []
    var org_N = []
    var NH4 = []
    var NOx = []
    var TN = []
    var TP = []
    var tm
    for (var i = 0; i < rawData.values.length; i++) {
      tm = formatter(rawData.values[i].splice(0, 1)[0])
      // console.log(tm)
      categoryData.push(tm)
      Inflow.push([tm, rawData.values[i].splice(0, 1)[0]])
      Flooding.push([tm, rawData.values[i].splice(0, 1)[0]])
      Depth.push([tm, rawData.values[i].splice(0, 1)[0]])
      Head.push([tm, rawData.values[i].splice(0, 1)[0]])
      TSS.push([tm, rawData.values[i].splice(0, 1)[0]])
      BOD.push([tm, rawData.values[i].splice(0, 1)[0]])
      CODi.push([tm, rawData.values[i].splice(0, 1)[0]]);
      COD.push([tm, (parseFloat(BOD[i][1]) + parseFloat(CODi[i][1])).toFixed(2)]);
      org_P.push([tm, rawData.values[i].splice(0, 1)[0]])
      PO4.push([tm, rawData.values[i].splice(0, 1)[0]])
      org_N.push([tm, rawData.values[i].splice(0, 1)[0]])
      NH4.push([tm, rawData.values[i].splice(0, 1)[0]])
      NOx.push([tm, rawData.values[i].splice(0, 1)[0]])
      TN.push(
        [tm, (
          parseFloat(org_N[i][1]) +
          parseFloat(NH4[i][1]) +
          parseFloat(NOx[i][1])
        ).toFixed(2)]
      )
      TP.push([tm, (parseFloat(org_P[i][1]) + parseFloat(PO4[i][1])).toFixed(2)])
    }

    return {
      categoryData: categoryData,
      Inflow: Inflow,
      Flooding: Flooding,
      Depth: Depth,
      Head: Head,
      TSS: TSS,
      BOD: BOD,
      COD: COD,
      org_P: org_P,
      PO4: PO4,
      org_N: org_N,
      NH4: NH4,
      NOx: NOx,
      TN: TN,
      TP: TP
    }
  }

  function splitLinkData(rawData) {
    var categoryData = []
    var Flow = [];
    var Velocity = [];
    var Depth = [];
    var Capacity = [];
    var TSS = []
    var BOD = []
    var CODi = [];
       var COD = []
    var CODi = []
    var org_P = []
    var PO4 = []
    var org_N = []
    var NH4 = []
    var NOx = []
    var TN = []
    var TP = []
    var tm
    for (var i = 0; i < rawData.values.length; i++) {
      tm = formatter(rawData.values[i].splice(0, 1)[0])
      // console.log(tm)
      categoryData.push(tm)
      Flow.push([tm, rawData.values[i].splice(0, 1)[0]]);
      Velocity.push([tm, rawData.values[i].splice(0, 1)[0]]);
      Depth.push([tm, rawData.values[i].splice(0, 1)[0]]);
      Capacity.push([tm, rawData.values[i].splice(0, 1)[0]]);
      TSS.push([tm, rawData.values[i].splice(0, 1)[0]])
      BOD.push([tm, rawData.values[i].splice(0, 1)[0]])
      CODi.push([tm, rawData.values[i].splice(0, 1)[0]]);
      COD.push([tm, (parseFloat(BOD[i][1]) + parseFloat(CODi[i][1])).toFixed(2)]);
      org_P.push([tm, rawData.values[i].splice(0, 1)[0]])
      PO4.push([tm, rawData.values[i].splice(0, 1)[0]])
      org_N.push([tm, rawData.values[i].splice(0, 1)[0]])
      NH4.push([tm, rawData.values[i].splice(0, 1)[0]])
      NOx.push([tm, rawData.values[i].splice(0, 1)[0]])
      TN.push(
        [tm, (
          parseFloat(org_N[i][1]) +
          parseFloat(NH4[i][1]) +
          parseFloat(NOx[i][1])
        ).toFixed(2)]
      )
      TP.push([tm, (parseFloat(org_P[i][1]) + parseFloat(PO4[i][1])).toFixed(2)])
    }

    return {
      categoryData: categoryData,
      Flow: Flow,
      Velocity: Velocity,
      Depth: Depth,
      Capacity: Capacity,
      TSS: TSS,
      BOD: BOD,
      COD: COD,
      org_P: org_P,
      PO4: PO4,
      org_N: org_N,
      NH4: NH4,
      NOx: NOx,
      TN: TN,
      TP: TP
    }
  }

  function splitSubcatchmentData(rawData) {
    var categoryData = []
    var Precip = [];
    var Losses = [];
    var Runoff = [];
    var TSS = []
    var BOD = []
    var CODi = [];
       var COD = []
    var CODi = []
    var org_P = []
    var PO4 = []
    var org_N = []
    var NH4 = []
    var NOx = []
    var TN = []
    var TP = []
    var tm
    for (var i = 0; i < rawData.values.length; i++) {
      tm = formatter(rawData.values[i].splice(0, 1)[0])
      // console.log(tm)
      categoryData.push(tm)
      Precip.push([tm, rawData.values[i].splice(0, 1)[0]]);
      Losses.push([tm, rawData.values[i].splice(0, 1)[0]]);
      Runoff.push([tm, rawData.values[i].splice(0, 1)[0]]);
      TSS.push([tm, rawData.values[i].splice(0, 1)[0]])
      BOD.push([tm, rawData.values[i].splice(0, 1)[0]])
      CODi.push([tm, rawData.values[i].splice(0, 1)[0]]);
      COD.push([tm, (parseFloat(BOD[i][1]) + parseFloat(CODi[i][1])).toFixed(2)]);
      org_P.push([tm, rawData.values[i].splice(0, 1)[0]])
      PO4.push([tm, rawData.values[i].splice(0, 1)[0]])
      org_N.push([tm, rawData.values[i].splice(0, 1)[0]])
      NH4.push([tm, rawData.values[i].splice(0, 1)[0]])
      NOx.push([tm, rawData.values[i].splice(0, 1)[0]])
      TN.push(
        [tm, (
          parseFloat(org_N[i][1]) +
          parseFloat(NH4[i][1]) +
          parseFloat(NOx[i][1])
        ).toFixed(2)]
      )
      TP.push([tm, (parseFloat(org_P[i][1]) + parseFloat(PO4[i][1])).toFixed(2)])
    }

    return {
      categoryData: categoryData,
      Precip: Precip,
      Losses: Losses,
      Runoff: Runoff,
      TSS: TSS,
      BOD: BOD,
      COD: COD,
      org_P: org_P,
      PO4: PO4,
      org_N: org_N,
      NH4: NH4,
      NOx: NOx,
      TN: TN,
      TP: TP
    }
  }

  function splitHisDataSL(res) {
    var { time, values } = res;
    var rj_speed = []
    var rj_level = []
    var rj_flow = []
    for (var i = 0; i < time.length; i++) {
      var tm = formatter(time[i])
      rj_speed.push([tm, values["流速"][i]])
      rj_level.push([tm, values["液位"][i]/1000])
      rj_flow.push([tm, values["瞬时流量"][i]])
    }
    return { rj_speed, rj_level, rj_flow }
  }

  function splitHisDataSZ(res) {
    var { time, values, state } = res;
    var COD = []
    var CODi = []
    var TSS = []
    var BOD = []
    var NOx = []
    var UV = []
    var TOC = []
    var COLOR = []
    var HS = []
    if(state === 1) {
      for (var i = 0; i < time.length; i++) {
        var tm = formatter(time[i])
        COD.push([tm, values["COD"][i]])
        TSS.push([tm, values["TSS"][i]])
      }
      return { COD, TSS}
    }
    else {
      for (var i = 0; i < time.length; i++) {
        var tm = formatter(time[i])
        COD.push([tm, values["COD"][i]])
        TSS.push([tm, values["TSS"][i]])
        BOD.push([tm, values["BOD"][i]])
        NOx.push([tm, values["NO3-N(有机污染物)"][i]])
        UV.push([tm, values["UV254(有机污染物)"][i]])
        TOC.push([tm, values["TOC"][i]])
        COLOR.push([tm, values["色度"][i]])
        HS.push([tm, values["HS-(硫化物)"][i]])
      }
      return {
         COD, 
         TSS, 
         BOD, 
         NOx, 
         "UV254(有机污染物)": UV, 
         TOC, 
         "色度": COLOR, 
         "HS-(硫化物)": HS
        }
    }
  }

  function splitWeatherData(rawData) {
    var categoryData = [];
    var rainfall = [];
    var tm
    var curr
    for (var i = 0; i < rawData.values.length; i++) {
      tm = formatter(rawData.values[i].splice(0, 1)[0])
      curr = rawData.values[i].splice(0, 1)[0]
      categoryData.push(tm)
      rainfall.push([tm, curr])
    }

    return {
      categoryData: categoryData,
      rainfall: rainfall,
    };
  }


  exports('splitData', {formatter, valueMax, unitMapper,  nameMapper, DateDiff, splitData, splitLinkData, splitSubcatchmentData, splitHisDataSL, splitHisDataSZ, splitWeatherData})
})
