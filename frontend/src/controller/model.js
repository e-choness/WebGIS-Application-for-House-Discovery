layui.define(['optionMapSet', 'jquery', 'splitData'], function(exports) {
  var { optionsMapSet2D, optionsMapSet3D } = layui.optionMapSet

  var { splitRiverSummaryData, splitData } = layui.splitData

  var $ = layui.$

  var N = 81
  var datas_map = new Array()
  var lines
  var MainStreamPoint
  var InnerPoint
  var PointSource = new Array()
  var data_is = 0
  var datas_sim_raw_global = new Array()
  var datas_sim_tran_global = new Array()
  var datas_exp_raw_global = new Array()
  var datas_exp_tran_global = new Array()

  for (var i = 0; i < N; i++) {
    datas_sim_raw_global[i] = new Array()
    datas_sim_tran_global[i] = new Object()
    datas_exp_raw_global[i] = new Array()
    datas_exp_tran_global[i] = new Object()
  }

  var datas_river_summary_raw = new Object()
  var datas_river_summary_tran = new Array()

  function model(
    chartMap,
    map,
    objSelect,
    styleSelect,
    ZoneSelect,
    waterQualitySelect
  ) {
    $.get('json/Shahe/Shahe_V4.json', function(Shahe_Stream) {
      $.get('json/linkage/Shahe_StreamLines_V1.json', function(StreamLines) {
        $.get('json/Shahe/Shahe_Watershed_InnerPoint.geojson', function(
          WatershedInnerPoint
        ) {
          $.get('json/linkage/Shahe_StreamLines_V1_M.json', function(
            StreamLines_M
          ) {
            echarts.registerMap('Shahe_Stream', Shahe_Stream)

            lines = StreamLines.features.map(function(track) {
              return {
                coords: track.geometry.coordinates.map(function(res) {
                  return res.concat(0)
                }),
                type: track.properties.Type
              }
            })

            MainStreamPoint = StreamLines_M.features.map(function(track) {
              return {
                value:
                  track.geometry.coordinates[
                    track.geometry.coordinates.length - 1
                  ],
                name: track.properties.Index.split('_', 1)[0]
              }
            })

            InnerPoint = WatershedInnerPoint.features.map(function(track) {
              return {
                value: track.geometry.coordinates,
                name: track.properties.Index
              }
            })

            // console.log(lines);
            // console.log(MainStreamPoint);
            // console.log(InnerPoint);

            $.ajaxSetup({
              async: false
            })
            str = 'json/Shahe/Shahe_PS_V_1_0.geojson'
            $.getJSON(str, function(PS) {
              temp = PS.features
              temp.forEach(element => {
                PointSource.push({
                  name: element.properties.Name,
                  value: element.geometry.coordinates.concat(0)
                })
              })
            })

            $.ajaxSetup({
              async: false
            })
            str_stream = 'json/data/wq/present/' + 'stream' + '.json'
            $.getJSON(str_stream, function(stream) {
              datas_river_summary_raw = stream
            })
            datas_river_summary_tran = splitRiverSummaryData(
              datas_river_summary_raw
            )

            // console.log(datas_river_summary_raw);
            // console.log(datas_river_summary_tran);

            if (styleSelect === '2D') {
              chartMap.clear()
              if (data_is === 0) {
                $.ajaxSetup({
                  async: false
                })
                for (var i = 0; i < N; i++) {
                  str = 'json/data/wq/present/' + (i + 1) + '.json'
                  $.getJSON(str, function(wq) {
                    datas_sim_raw_global[i] = wq
                  })
                  datas_sim_tran_global[i] = splitData(datas_sim_raw_global[i])
                }

                data_is = 1
              }

              chartMap.setOption(
                optionsMapSet2D(
                  datas_sim_tran_global,
                  lines,
                  map,
                  objSelect,
                  waterQualitySelect,
                  PointSource
                )
              )
            } else if (styleSelect === '3D') {
              chartMap.clear()
              chartMap.setOption(
                optionsMapSet3D(
                  datas_river_summary_tran,
                  MainStreamPoint,
                  InnerPoint,
                  lines,
                  map,
                  objSelect,
                  waterQualitySelect,
                  PointSource
                )
              )
            }
          })
        })
      })
    })
  }
  exports('model', {
    model
  })
})
