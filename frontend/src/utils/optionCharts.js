layui.define(['jquery', 'splitData'], function (exports) {
  var $ = layui.jquery;
  var {
    splitData,
    splitRiverSummaryData
  } = layui.splitData;
  var colors = ['blue', 'Aqua', 'Purple'];

  var optionCharts = {

    dataAllocationStatF: function dataAllocationStatF(AllocationPlan, MOSSelect) {
      var dataRaw = new Object();

      var VarPSSelect = "";
      var VarWQ_IV_Select = "";
      var VarWQ_V_Select = "";
      var str_wq = "";

      var dataG = {
        dataPresent: {},
        dataPS: {},
        dataV: {},
        dataIV: {}
      };

      if (AllocationPlan === "TP_TN") {
        VarPSSelect = "TN_0PS";
        if (MOSSelect === "None") {
          VarWQ_IV_Select = "TN_IV";
          VarWQ_V_Select = "TN_V";
        } else if (MOSSelect === "Default") {
          VarWQ_IV_Select = "TN_IV_MOS";
          VarWQ_V_Select = "TN_V_MOS";
        } else if (MOSSelect === "Total") {
          VarWQ_IV_Select = "TN_IV_TotalMOS";
          VarWQ_V_Select = "TN_V_TotalMOS";
        }
      } else if (AllocationPlan === "TP") {
        VarPSSelect = "TP_0PS";
        if (MOSSelect === "None") {
          VarWQ_IV_Select = "TP_IV";
          VarWQ_V_Select = "TP_V";
        } else if (MOSSelect === "Default") {
          VarWQ_IV_Select = "TP_IV_MOS";
          VarWQ_V_Select = "TP_V_MOS";
        } else if (MOSSelect === "Total") {
          VarWQ_IV_Select = "TP_IV_TotalMOS";
          VarWQ_V_Select = "TP_V_TotalMOS";
        }
      }

      // 现状数据
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/present/' + 'stream' + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataPresentTran = splitRiverSummaryData(dataRaw);
      // 削点源后
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/' + VarPSSelect + '/' + 'stream' + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataPSTran = splitRiverSummaryData(dataRaw);
      // 达V类后
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/' + VarWQ_V_Select + '/' + 'stream' + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataVTran = splitRiverSummaryData(dataRaw);
      // 达IV类后
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/' + VarWQ_IV_Select + '/' + 'stream' + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataIVTran = splitRiverSummaryData(dataRaw);

      dataG.dataPresent = dataPresentTran;
      dataG.dataPS = dataPSTran;
      dataG.dataV = dataVTran;
      dataG.dataIV = dataIVTran;

      return dataG;
    },

    optionChartAllocationStat: function optionChartAllocationStat(AllocationStatData, zone, WQSelect, ResultSelect) {

      var Num;
      var strStreamDown = {};
      var strStreamUp = {};
      var Load_data = {};

      if (zone === 'Whole') {
        strStreamDown = {
          W: 1,
          A: 26,
          B: 21,
          C: 19,
          D: 9,
          E: 2,
          F: 1
        };
        strStreamUp = {
          W: null,
          A: null,
          B: 26,
          C: 21,
          D: 19,
          E: 9,
          F: 2
        }
        Num = Object.keys(strStreamDown).length;

        if (WQSelect === 'COD') {
          Load_data = {
            W: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.W - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.W - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.W - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.W - 1]
            ],
            A: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.A - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.A - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.A - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.A - 1]
            ],
            B: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.B - 1] - AllocationStatData.dataPresent.RQUAL_COD[strStreamUp.B - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.B - 1] - AllocationStatData.dataPS.RQUAL_COD[strStreamUp.B - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.B - 1] - AllocationStatData.dataV.RQUAL_COD[strStreamUp.B - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.B - 1] - AllocationStatData.dataIV.RQUAL_COD[strStreamUp.B - 1]
            ],
            C: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.C - 1] - AllocationStatData.dataPresent.RQUAL_COD[strStreamUp.C - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.C - 1] - AllocationStatData.dataPS.RQUAL_COD[strStreamUp.C - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.C - 1] - AllocationStatData.dataV.RQUAL_COD[strStreamUp.C - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.C - 1] - AllocationStatData.dataIV.RQUAL_COD[strStreamUp.C - 1]
            ],
            D: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.D - 1] - AllocationStatData.dataPresent.RQUAL_COD[strStreamUp.D - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.D - 1] - AllocationStatData.dataPS.RQUAL_COD[strStreamUp.D - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.D - 1] - AllocationStatData.dataV.RQUAL_COD[strStreamUp.D - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.D - 1] - AllocationStatData.dataIV.RQUAL_COD[strStreamUp.D - 1]
            ],
            E: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.E - 1] - AllocationStatData.dataPresent.RQUAL_COD[strStreamUp.E - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.E - 1] - AllocationStatData.dataPS.RQUAL_COD[strStreamUp.E - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.E - 1] - AllocationStatData.dataV.RQUAL_COD[strStreamUp.E - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.E - 1] - AllocationStatData.dataIV.RQUAL_COD[strStreamUp.E - 1]
            ],
            F: [AllocationStatData.dataPresent.RQUAL_COD[strStreamDown.F - 1] - AllocationStatData.dataPresent.RQUAL_COD[strStreamUp.F - 1],
              AllocationStatData.dataPS.RQUAL_COD[strStreamDown.F - 1] - AllocationStatData.dataPS.RQUAL_COD[strStreamUp.F - 1],
              AllocationStatData.dataV.RQUAL_COD[strStreamDown.F - 1] - AllocationStatData.dataV.RQUAL_COD[strStreamUp.F - 1],
              AllocationStatData.dataIV.RQUAL_COD[strStreamDown.F - 1] - AllocationStatData.dataIV.RQUAL_COD[strStreamUp.F - 1]
            ]
          }
        } else if (WQSelect === 'NH4') {
          Load_data = {
            W: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.W - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.W - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.W - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.W - 1]
            ],
            A: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.A - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.A - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.A - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.A - 1]
            ],
            B: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.B - 1] - AllocationStatData.dataPresent.RQUAL_TAM[strStreamUp.B - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.B - 1] - AllocationStatData.dataPS.RQUAL_TAM[strStreamUp.B - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.B - 1] - AllocationStatData.dataV.RQUAL_TAM[strStreamUp.B - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.B - 1] - AllocationStatData.dataIV.RQUAL_TAM[strStreamUp.B - 1]
            ],
            C: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.C - 1] - AllocationStatData.dataPresent.RQUAL_TAM[strStreamUp.C - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.C - 1] - AllocationStatData.dataPS.RQUAL_TAM[strStreamUp.C - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.C - 1] - AllocationStatData.dataV.RQUAL_TAM[strStreamUp.C - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.C - 1] - AllocationStatData.dataIV.RQUAL_TAM[strStreamUp.C - 1]
            ],
            D: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.D - 1] - AllocationStatData.dataPresent.RQUAL_TAM[strStreamUp.D - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.D - 1] - AllocationStatData.dataPS.RQUAL_TAM[strStreamUp.D - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.D - 1] - AllocationStatData.dataV.RQUAL_TAM[strStreamUp.D - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.D - 1] - AllocationStatData.dataIV.RQUAL_TAM[strStreamUp.D - 1]
            ],
            E: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.E - 1] - AllocationStatData.dataPresent.RQUAL_TAM[strStreamUp.E - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.E - 1] - AllocationStatData.dataPS.RQUAL_TAM[strStreamUp.E - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.E - 1] - AllocationStatData.dataV.RQUAL_TAM[strStreamUp.E - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.E - 1] - AllocationStatData.dataIV.RQUAL_TAM[strStreamUp.E - 1]
            ],
            F: [AllocationStatData.dataPresent.RQUAL_TAM[strStreamDown.F - 1] - AllocationStatData.dataPresent.RQUAL_TAM[strStreamUp.F - 1],
              AllocationStatData.dataPS.RQUAL_TAM[strStreamDown.F - 1] - AllocationStatData.dataPS.RQUAL_TAM[strStreamUp.F - 1],
              AllocationStatData.dataV.RQUAL_TAM[strStreamDown.F - 1] - AllocationStatData.dataV.RQUAL_TAM[strStreamUp.F - 1],
              AllocationStatData.dataIV.RQUAL_TAM[strStreamDown.F - 1] - AllocationStatData.dataIV.RQUAL_TAM[strStreamUp.F - 1]
            ]
          }
        } else if (WQSelect === 'TN') {
          Load_data = {
            W: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.W - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.W - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.W - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.W - 1]
            ],
            A: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.A - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.A - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.A - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.A - 1]
            ],
            B: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.B - 1] - AllocationStatData.dataPresent.RQUAL_TN[strStreamUp.B - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.B - 1] - AllocationStatData.dataPS.RQUAL_TN[strStreamUp.B - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.B - 1] - AllocationStatData.dataV.RQUAL_TN[strStreamUp.B - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.B - 1] - AllocationStatData.dataIV.RQUAL_TN[strStreamUp.B - 1]
            ],
            C: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.C - 1] - AllocationStatData.dataPresent.RQUAL_TN[strStreamUp.C - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.C - 1] - AllocationStatData.dataPS.RQUAL_TN[strStreamUp.C - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.C - 1] - AllocationStatData.dataV.RQUAL_TN[strStreamUp.C - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.C - 1] - AllocationStatData.dataIV.RQUAL_TN[strStreamUp.C - 1]
            ],
            D: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.D - 1] - AllocationStatData.dataPresent.RQUAL_TN[strStreamUp.D - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.D - 1] - AllocationStatData.dataPS.RQUAL_TN[strStreamUp.D - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.D - 1] - AllocationStatData.dataV.RQUAL_TN[strStreamUp.D - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.D - 1] - AllocationStatData.dataIV.RQUAL_TN[strStreamUp.D - 1]
            ],
            E: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.E - 1] - AllocationStatData.dataPresent.RQUAL_TN[strStreamUp.E - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.E - 1] - AllocationStatData.dataPS.RQUAL_TN[strStreamUp.E - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.E - 1] - AllocationStatData.dataV.RQUAL_TN[strStreamUp.E - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.E - 1] - AllocationStatData.dataIV.RQUAL_TN[strStreamUp.E - 1]
            ],
            F: [AllocationStatData.dataPresent.RQUAL_TN[strStreamDown.F - 1] - AllocationStatData.dataPresent.RQUAL_TN[strStreamUp.F - 1],
              AllocationStatData.dataPS.RQUAL_TN[strStreamDown.F - 1] - AllocationStatData.dataPS.RQUAL_TN[strStreamUp.F - 1],
              AllocationStatData.dataV.RQUAL_TN[strStreamDown.F - 1] - AllocationStatData.dataV.RQUAL_TN[strStreamUp.F - 1],
              AllocationStatData.dataIV.RQUAL_TN[strStreamDown.F - 1] - AllocationStatData.dataIV.RQUAL_TN[strStreamUp.F - 1]
            ]
          }
        } else if (WQSelect === 'TP') {
          Load_data = {
            W: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.W - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.W - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.W - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.W - 1]
            ],
            A: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.A - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.A - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.A - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.A - 1]
            ],
            B: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.B - 1] - AllocationStatData.dataPresent.RQUAL_TP[strStreamUp.B - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.B - 1] - AllocationStatData.dataPS.RQUAL_TP[strStreamUp.B - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.B - 1] - AllocationStatData.dataV.RQUAL_TP[strStreamUp.B - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.B - 1] - AllocationStatData.dataIV.RQUAL_TP[strStreamUp.B - 1]
            ],
            C: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.C - 1] - AllocationStatData.dataPresent.RQUAL_TP[strStreamUp.C - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.C - 1] - AllocationStatData.dataPS.RQUAL_TP[strStreamUp.C - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.C - 1] - AllocationStatData.dataV.RQUAL_TP[strStreamUp.C - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.C - 1] - AllocationStatData.dataIV.RQUAL_TP[strStreamUp.C - 1]
            ],
            D: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.D - 1] - AllocationStatData.dataPresent.RQUAL_TP[strStreamUp.D - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.D - 1] - AllocationStatData.dataPS.RQUAL_TP[strStreamUp.D - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.D - 1] - AllocationStatData.dataV.RQUAL_TP[strStreamUp.D - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.D - 1] - AllocationStatData.dataIV.RQUAL_TP[strStreamUp.D - 1]
            ],
            E: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.E - 1] - AllocationStatData.dataPresent.RQUAL_TP[strStreamUp.E - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.E - 1] - AllocationStatData.dataPS.RQUAL_TP[strStreamUp.E - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.E - 1] - AllocationStatData.dataV.RQUAL_TP[strStreamUp.E - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.E - 1] - AllocationStatData.dataIV.RQUAL_TP[strStreamUp.E - 1]
            ],
            F: [AllocationStatData.dataPresent.RQUAL_TP[strStreamDown.F - 1] - AllocationStatData.dataPresent.RQUAL_TP[strStreamUp.F - 1],
              AllocationStatData.dataPS.RQUAL_TP[strStreamDown.F - 1] - AllocationStatData.dataPS.RQUAL_TP[strStreamUp.F - 1],
              AllocationStatData.dataV.RQUAL_TP[strStreamDown.F - 1] - AllocationStatData.dataV.RQUAL_TP[strStreamUp.F - 1],
              AllocationStatData.dataIV.RQUAL_TP[strStreamDown.F - 1] - AllocationStatData.dataIV.RQUAL_TP[strStreamUp.F - 1]
            ]
          }
        }

      } else if (zone === 'A') {} else if (zone === 'B') {} else if (zone === 'C') {} else if (zone === 'D') {} else if (zone === 'E') {} else if (zone === 'F') {}


      for (let i = 0; i < Load_data.W.length; i++) {
        Load_data.W[i] = Load_data.W[i].toFixed(3);
        Load_data.A[i] = Load_data.A[i].toFixed(3);
        Load_data.B[i] = Load_data.B[i].toFixed(3);
        Load_data.C[i] = Load_data.C[i].toFixed(3);
        Load_data.D[i] = Load_data.D[i].toFixed(3);
        Load_data.E[i] = Load_data.E[i].toFixed(3);
        Load_data.F[i] = Load_data.F[i].toFixed(3);


      }
      // console.log(Load_data);

      function getTableLine(num) {
        var list = [];
        var bottom = 150;
        var height = 20;
        for (var i = 0; i < num; i++) {
          list.push({
            type: 'line',
            bottom: bottom - i * height,
            right: 10,
            style: {
              fill: '#333'
            },
            shape: {
              x1: 0,
              y1: 0,
              x2: 3200,
              y2: 0
            }

          });
        }
        return list;
      }
      var lineList = getTableLine(8);

      option = {
        color: ['blue', '#CCCC99', '#FF9999', '#FFFF99', '#FF66FF', '#999966', '#99FF99'],
        title: [{
          text: '\n全流域\nF区\nE区\nD区\nC区\nB区\nA区',
          bottom: 60,
          left: 10,
          textStyle: {
            lineHeight: 20,
            fontSize: 13,
            fontWeight: 'bold',
            formatter: function (value) {
              return '{table|' + value + '}';
            },
            rich: {
              table: {
                align: 'center'
              }
            }
          }
        }],
        legend: {
          data: ['流域总量', 'F区', 'E区', 'D区', 'C区', 'B区', 'A区']
        },
        grid: {
          top: 10,
          bottom: 200,
          left: 60,
          right: 10
        },
        yAxis: {
          type: 'value',
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          offset: 20,
          axisTick: {
            length: 190
          },
          data: ['现状', '最大程度削减点源', '执行V类标准', '执行IV类标准'],
          axisLabel: {
            formatter: function (value, index) {
              return '{table|' + value +
                '}\n{table|' + Load_data.W[index] +
                '}\n{table|' + Load_data.F[index] +
                '}\n{table|' + Load_data.E[index] +
                '}\n{table|' + Load_data.D[index] +
                '}\n{table|' + Load_data.C[index] +
                '}\n{table|' + Load_data.B[index] +
                '}\n{table|' + Load_data.A[index] + '}';
            },
            rich: {
              table: {
                lineHeight: 20,
                fontWeight: 'bold',
                align: 'right'
              }
            }
          }
        }],
        series: [{
          type: 'bar',
          name: '流域总量',
          data: Load_data.W,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: '流域总量'
            }
          }
        }, {
          type: 'bar',
          name: 'F区',
          data: Load_data.F,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: 'F区',
            }
          }
        }, {
          type: 'bar',
          name: 'E区',
          data: Load_data.E,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: 'E区',
            }
          }
        }, {
          type: 'bar',
          name: 'D区',
          data: Load_data.D,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: 'D区',
            }
          }
        }, {
          type: 'bar',
          name: 'C区',
          data: Load_data.C,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: 'C区',
            }
          }
        }, {
          type: 'bar',
          name: 'B区',
          data: Load_data.B,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: 'B区',
            }
          }
        }, {
          type: 'bar',
          name: 'A区',
          data: Load_data.A,
          label: {
            normal: {
              show: true,
              position: 'bottom',
              textStyle: {
                color: '#000'
              },
              formatter: 'A区',
            }
          }
        }],
        graphic: lineList
      };

      return option;

    },

    dataAllocationF: function dataAllocationF(F_Num, AllocationPlan, MOSSelect) {
      var dataRaw = new Object();

      var VarPSSelect = "";
      var VarWQ_IV_Select = "";
      var VarWQ_V_Select = "";
      var str_wq = "";

      var dataG = {
        dataPresent: {},
        dataPS: {},
        dataV: {},
        dataIV: {}
      };

      if (AllocationPlan === "TP_TN") {
        VarPSSelect = "TN_0PS";
        if (MOSSelect === "None") {
          VarWQ_IV_Select = "TN_IV";
          VarWQ_V_Select = "TN_V";
        } else if (MOSSelect === "Default") {
          VarWQ_IV_Select = "TN_IV_MOS";
          VarWQ_V_Select = "TN_V_MOS";
        } else if (MOSSelect === "Total") {
          VarWQ_IV_Select = "TN_IV_TotalMOS";
          VarWQ_V_Select = "TN_V_TotalMOS";
        }
      } else if (AllocationPlan === "TP") {
        VarPSSelect = "TP_0PS";
        if (MOSSelect === "None") {
          VarWQ_IV_Select = "TP_IV";
          VarWQ_V_Select = "TP_V";
        } else if (MOSSelect === "Default") {
          VarWQ_IV_Select = "TP_IV_MOS";
          VarWQ_V_Select = "TP_V_MOS";
        } else if (MOSSelect === "Total") {
          VarWQ_IV_Select = "TP_IV_TotalMOS";
          VarWQ_V_Select = "TP_V_TotalMOS";
        }
      }

      // 现状数据
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/present/' + F_Num + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataPresentTran = splitData(dataRaw);
      // 削点源后
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/' + VarPSSelect + '/' + F_Num + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataPSTran = splitData(dataRaw);
      // 达V类后
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/' + VarWQ_V_Select + '/' + F_Num + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataVTran = splitData(dataRaw);
      // 达IV类后
      $.ajaxSetup({
        async: false
      });
      str_wq = 'json/data/wq/' + VarWQ_IV_Select + '/' + F_Num + '.json'
      $.getJSON(str_wq, function (wq) {
        dataRaw = wq;
      });
      var dataIVTran = splitData(dataRaw);

      dataG.dataPresent = dataPresentTran;
      dataG.dataPS = dataPSTran;
      dataG.dataV = dataVTran;
      dataG.dataIV = dataIVTran;

      return dataG;
    },

    optionChartAllocation: function optionChartAllocation(dataAllocation, select, F_Num) {
      var WQ_dataPresent = [];
      var WQ_dataPS = [];
      var WQ_dataV = [];
      var WQ_dataIV = [];
      var time = dataAllocation.dataPresent.categoryData;

      for (let i = 0; i < dataAllocation.dataPresent.categoryData.length; i++) {
        if (select === 'COD') {
          WQ_dataPresent = dataAllocation.dataPresent.COD;
          WQ_dataPS = dataAllocation.dataPS.COD;
          WQ_dataV = dataAllocation.dataV.COD;
          WQ_dataIV = dataAllocation.dataIV.COD;
        } else if (select === 'NH4') {
          WQ_dataPresent = dataAllocation.dataPresent.TAM;
          WQ_dataPS = dataAllocation.dataPS.TAM;
          WQ_dataV = dataAllocation.dataV.TAM;
          WQ_dataIV = dataAllocation.dataIV.TAM;
        } else if (select === 'TN') {
          WQ_dataPresent = dataAllocation.dataPresent.TN;
          WQ_dataPS = dataAllocation.dataPS.TN;
          WQ_dataV = dataAllocation.dataV.TN;
          WQ_dataIV = dataAllocation.dataIV.TN;
        } else if (select === 'TP') {
          WQ_dataPresent = dataAllocation.dataPresent.TP;
          WQ_dataPS = dataAllocation.dataPS.TP;
          WQ_dataV = dataAllocation.dataV.TP;
          WQ_dataIV = dataAllocation.dataIV.TP;
        } else if (select === 'DO') {
          WQ_dataPresent = dataAllocation.dataPresent.DO;
          WQ_dataPS = dataAllocation.dataPS.DO;
          WQ_dataV = dataAllocation.dataV.DO;
          WQ_dataIV = dataAllocation.dataIV.DO;
        }
      }
      var WQ_V = [];
      var WQ_IV = [];
      for (let i = 0; i < time.length; i++) {
        if (select === 'COD') {
          WQ_V.push(40);
          WQ_IV.push(30);
        } else if (select === 'NH4') {
          WQ_V.push(2);
          WQ_IV.push(1.5);
        } else if (select === 'TN') {
          WQ_V.push(2);
          WQ_IV.push(1.5);
        } else if (select === 'TP') {
          WQ_V.push(0.4);
          WQ_IV.push(0.3);
        } else if (select === 'DO') {
          WQ_V.push(2);
          WQ_IV.push(3);
        }
      }

      // console.log(time);

      // console.log(WQ_dataPresent);

      // console.log(WQ_dataPS);

      // console.log(WQ_dataV);

      // console.log(WQ_V);

      // console.log(WQ_IV);

      return {
        // title: {
        //     text: '降雨量-河道出流量-河道' + select + '浓度（S' + F_Num + '）',
        //     subtext: '流域模型-计算结果',
        //     x: 'center',
        //     align: 'right'
        // },
        grid: {

          bottom: 70,
          left: '3%'
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        legend: {
          data: ['雨量(mm/day)',
            '流量(m3/s)',
            '现状' + select + '浓度(mg/L)',
            '点源削减后' + select + '浓度(mg/L)',
            '达V类' + select + '浓度(mg/L)',
            '达IV类' + select + '浓度(mg/L)',
            'V类' + select + '标准(mg/L)',
            'IV类' + select + '标准(mg/L)'
          ],
          x: 'left'
        },
        dataZoom: [{
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            filterMode: 'empty',
            width: 20,
            showDataShadow: false,
            filterMode: 'none',
            left: '1%',
            start: 0,
            end: 100
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [1],
            filterMode: 'empty',
            width: 20,
            showDataShadow: false,
            filterMode: 'none',
            left: '91%',
            start: 0,
            end: 10
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [2],
            filterMode: 'empty',
            width: 20,
            showDataShadow: false,
            filterMode: 'none',
            left: '95%',
            start: 0,
            end: 100
          },

        ],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            onZero: false
          },
          data: time.map(function (str) {
            return str.replace(' ', '\n')
          })
        }],
        yAxis: [{
            name: '降雨量(mm/day)',
            nameLocation: 'start',
            type: 'value',
            inverse: true,
            max: 250
          },
          {
            name: '出流量(m3/s)',
            max: 50,
            type: 'value',
            position: 'right',
            offset: 0
          },
          {
            name: select + '浓度(mg/L)',
            max: (parseInt(Math.max(...WQ_dataPresent) / 0.5) + 1) * 0.5,
            splitNumber: 5,
            type: 'value',
            position: 'right',
            offset: 70,
          }
        ],
        series: [{
            name: '降雨量(mm/day)',
            yAxisIndex: 0,
            type: 'bar',
            animation: false,
            position: 'left',
            areaStyle: {
              normal: {}
            },
            lineStyle: {
              normal: {
                width: 1
              }
            },
            data: dataAllocation.dataPresent.PREC
          },
          {
            name: '出流量(m3/s)',
            yAxisIndex: 1,
            type: 'line',
            animation: false,
            symbolSize: 0,
            areaStyle: {
              normal: {}
            },
            lineStyle: {
              normal: {
                width: 1
              }
            },
            data: dataAllocation.dataPresent.RO
          },
          {
            name: '现状' + select + '浓度(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            animation: false,
            symbolSize: 0,
            // areaStyle: {
            //     normal: {}
            // },
            lineStyle: {
              color: 'red'
            },
            data: WQ_dataPresent
          },
          {
            name: '点源削减后' + select + '浓度(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            animation: false,
            symbolSize: 0,
            itemStyle: {
              color: 'Maroon'
            },
            data: WQ_dataPS
          },
          {
            name: '达V类' + select + '浓度(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            animation: false,
            symbolSize: 0,
            itemStyle: {
              color: 'blue'
            },
            data: WQ_dataV
          },
          {
            name: '达IV类' + select + '浓度(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            animation: false,
            symbolSize: 0,
            itemStyle: {
              color: 'yellow'
            },
            data: WQ_dataIV
          },
          {
            name: 'V类' + select + '标准(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            symbol: 'none',
            data: WQ_V,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: '#FF9933'
            },
          },
          {
            name: 'IV类' + select + '标准(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            symbol: 'none',
            data: WQ_IV,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: '#33CCFF'
            },
          }
        ]
      }
    },

    optionChart: function optionChart(para) {
      return {
        title: {
          text: '降雨量-河道出流量-河道' + para.type + '浓度（' + FIndex + '）',
          subtext: '流域模型-计算结果示例',
          x: 'center',
          align: 'right'
        },
        grid: {
          bottom: 70,
          left: '3%'
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        legend: {
          data: ['降雨量(mm/day)', '河道出流量(m3/s)', '河道' + para.type + '模型浓度(mg/L)', '河道' + para.type + '实测浓度(mg/L)'],
          x: 'left'
        },
        dataZoom: [{
            type: 'slider',
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            filterMode: 'empty',
            width: 20,
            showDataShadow: false,
            filterMode: 'none',
            left: '1%',
            start: 0,
            end: 100
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [1],
            filterMode: 'empty',
            width: 20,
            showDataShadow: false,
            filterMode: 'none',
            left: '91%',
            start: 0,
            end: 10
          },
          {
            type: 'slider',
            show: true,
            yAxisIndex: [2],
            filterMode: 'empty',
            width: 20,
            showDataShadow: false,
            filterMode: 'none',
            left: '98%',
            start: 0,
            end: 100
          },

        ],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            onZero: false
          },
          data: datas_sim_tran.categoryData.map(function (str) {
            return str.replace(' ', '\n')
          })
        }],
        yAxis: [{
            name: '降雨量(mm/day)',
            nameLocation: 'start',
            type: 'value',
            inverse: true,
            max: 250
          },
          {
            name: '河道出流量(m3/s)',
            max: 50,
            type: 'value',
            position: 'right',
            offset: 0
          },
          {
            name: '河道' + para.type + '浓度(mg/L)',
            max: para.qualityMax,
            type: 'value',
            position: 'right',
            offset: 100,
          }
        ],
        series: [{
            name: '降雨量(mm/day)',
            yAxisIndex: 0,
            type: 'bar',
            animation: false,
            position: 'left',
            areaStyle: {
              normal: {}
            },
            lineStyle: {
              normal: {
                width: 1
              }
            },
            data: datas_sim_tran.PREC
          },
          {
            name: '河道出流量(m3/s)',
            yAxisIndex: 1,
            type: 'line',
            animation: false,
            areaStyle: {
              normal: {}
            },
            lineStyle: {
              normal: {
                width: 1
              }
            },
            data: datas_sim_tran.RO
          },
          {
            name: '河道' + para.type + '模型浓度(mg/L)',
            yAxisIndex: 2,
            type: 'line',
            animation: false,
            // areaStyle: {
            //     normal: {}
            // },
            lineStyle: {
              normal: {
                width: 3
              }
            },
            data: []
          },
          {
            name: '河道' + para.type + '实测浓度(mg/L)',
            yAxisIndex: 2,
            type: 'scatter',
            animation: false,
            symbolSize: 10,
            itemStyle: {
              color: 'Maroon'
            },
            data: []
          }
        ]
      }
    },

    optionChartLineplotStream: function optionChartLineplotStream(para, select) {
      var WQ_data = [];
      for (let i = 0; i < para.value.length; i++) {
        if (para.value[i].Index === select.Index) {
          if (select.str === 'COD') {
            WQ_data = para.value[i].value.COD;
          } else if (select.str === 'NH4') {
            WQ_data = para.value[i].value.NH4;
          } else if (select.str === 'TN') {
            WQ_data = para.value[i].value.TN;
          } else if (select.str === 'TP') {
            WQ_data = para.value[i].value.TP;
          } else if (select.str === 'DO') {
            WQ_data = para.value[i].value.DO;
          }
        }
      }
      var WQ_V = [];
      var WQ_IV = [];
      for (let i = 0; i < WQ_data.length; i++) {
        let [...arr1] = WQ_data[i];
        let [...arr2] = WQ_data[i];
        if (select.str === 'COD') {
          WQ_V.push([arr1[0], 40]);
          WQ_IV.push([arr2[0], 30]);
        } else if (select.str === 'NH4') {
          WQ_V.push([arr1[0], 2]);
          WQ_IV.push([arr2[0], 1.5]);
        } else if (select.str === 'TN') {
          WQ_V.push([arr1[0], 2]);
          WQ_IV.push([arr2[0], 1.5]);
        } else if (select.str === 'TP') {
          WQ_V.push([arr1[0], 0.4]);
          WQ_IV.push([arr2[0], 0.3]);
        } else if (select.str === 'DO') {
          WQ_V.push([arr1[0], 2]);
          WQ_IV.push([arr2[0], 3]);
        }
      }
      // console.log(WQ_V);

      return {
        title: {
          text: '断面' + select.Index + '历史' + select.str + '数据',
          x: 'center',
          align: 'right'
        },
        grid: {
          left: '4%',
          right: '2%',
          bottom: '15%'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        legend: {
          data: [select.str + '历史数据', select.str + ' V类', select.str + ' IV类'],
          x: 'left'
        },
        xAxis: [{
          type: 'time',
          boundaryGap: false,
          min: 'dataMin',
          max: 'dataMax',
          interval: 3600 * 24 * 1000 * 30 * 1,
          axisLine: {
            onZero: false
          }
        }],
        yAxis: [{
          name: select.str + '浓度(mg/L)',
          type: 'value'
        }],
        series: [{
            name: select.str + ' V类',
            type: 'line',
            symbol: 'none',
            data: WQ_V,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: '#FF9933'
            },
          },
          {
            name: select.str + ' IV类',
            type: 'line',
            symbol: 'none',
            data: WQ_IV,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: '#33CCFF'
            },
          },
          {
            name: select.str + '历史数据',
            type: 'line',
            symbol: 'emptyCircle',
            symbolColor: 'red',
            symbolSize: '16',
            animation: false,
            // areaStyle: {},
            lineStyle: {
              width: 3,
              color: 'red'
            },
            data: WQ_data
          }
        ]
      }
    },

    optionChartBoxplotStream: function optionChartBoxplotStream(para, str) {

      // let max = Math.max.apply(null, para.info[0].Series) + 2;
      let max = 400;
      var tem = new Array(max);
      var name = new Array(max);
      var WQ_V = new Array(max);
      var WQ_IV = new Array(max);
      for (let k = 0; k <= max; k++) {
        tem[k] = [];
        name[k] = '';
        if (str === 'COD') {
          WQ_V[k] = 40;
          WQ_IV[k] = 30;
        } else if (str === 'NH4') {
          WQ_V[k] = 2;
          WQ_IV[k] = 1.5;
        } else if (str === 'TN') {
          WQ_V[k] = 2;
          WQ_IV[k] = 1.5;
        } else if (str === 'TP') {
          WQ_V[k] = 0.4;
          WQ_IV[k] = 0.3;
        } else if (str === 'DO') {
          WQ_V[k] = 2;
          WQ_IV[k] = 3;
        }
      }
      if (str === 'COD') {
        for (let i = 0; i < para.info[0].Series.length; i++) {
          tem[para.info[0].Series[i] + 1] = para.value[i].value.COD;
          name[para.info[0].Series[i] + 1] = para.info[0].Name[i];
        };
      } else if (str === 'NH4') {
        for (let i = 0; i < para.info[0].Series.length; i++) {
          tem[para.info[0].Series[i] + 1] = para.value[i].value.NH4;
          name[para.info[0].Series[i] + 1] = para.info[0].Name[i];
        };
      } else if (str === 'TN') {
        for (let i = 0; i < para.info[0].Series.length; i++) {
          tem[para.info[0].Series[i] + 1] = para.value[i].value.TN;
          name[para.info[0].Series[i] + 1] = para.info[0].Name[i];
        };
      } else if (str === 'TP') {
        for (let i = 0; i < para.info[0].Series.length; i++) {
          tem[para.info[0].Series[i] + 1] = para.value[i].value.TP;
          name[para.info[0].Series[i] + 1] = para.info[0].Name[i];
        };
      } else if (str === 'DO') {
        for (let i = 0; i < para.info[0].Series.length; i++) {
          tem[para.info[0].Series[i] + 1] = para.value[i].value.DO;
          name[para.info[0].Series[i] + 1] = para.info[0].Name[i];
        };
      }


      var BoxplotData = new Array(max);
      for (let i = 0; i < tem.length; i++) {
        if (tem[i] != null) {
          BoxplotData[i] = [];
          for (let k = 0; k < tem[i].length; k++) {
            if (tem[i][k][1] != null) {
              BoxplotData[i].push(tem[i][k][1]);
            }
          }
        } else {
          // BoxplotData.push(null);
        }
      }

      // console.log(BoxplotData);

      var data = echarts.dataTool.prepareBoxplotData(BoxplotData);

      return {

        title: [{
          text: '沙河主河道断面沿程水质' + str + '监测结果箱线图',
          left: 'center',
        }],
        legend: {
          y: '10%',
          data: ['箱线分析结果', '异常值', str + ' V类', str + ' IV类']
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '4%',
          right: '2%',
          bottom: '10%'
        },
        xAxis: {
          type: 'category',
          data: name,
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          name: str + '(mg/L)',
          // splitArea: {
          //     show: true
          // }
        },
        series: [{
            name: '箱线分析结果',
            type: 'boxplot',
            data: data.boxData,
            tooltip: {
              formatter: function (param) {
                if (param.name != "") {
                  return [
                    param.name + ': ',
                    '正常上限值: ' + param.data[5],
                    '75%值: ' + param.data[4],
                    '中位值: ' + param.data[3],
                    '25%值: ' + param.data[2],
                    '正常下限值: ' + param.data[1]
                  ].join('<br/>');
                }

              }
            }
          },
          {
            name: '异常值',
            type: 'scatter',
            data: data.outliers
          },
          {
            name: str + ' V类',
            type: 'line',
            symbol: 'none',
            data: WQ_V,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: '#FF9933'
            },
          },
          {
            name: str + ' IV类',
            type: 'line',
            symbol: 'none',
            data: WQ_IV,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: '#33CCFF'
            },
          }

        ]

      }
    },

    optionChartLink: function optionChartLink(str, arr) {
      var scale = 1;
      var bgColor = 'white';
      var dataLink = [{
          "name": "一级子流域",
          "color": '#009999',
          "data": [{
            "name": "南淝河",
            "coords": [
              [100, 100],
              [100, 100]
            ],
            "value": [100, 100]
          }, {
            "name": "L01",
            "coords": [
              [300, 100],
              [100, 100]
            ],
            "value": [300, 100]
          }, {
            "name": "L02",
            "coords": [
              [500, 100],
              [300, 100]
            ],
            "value": [500, 100]
          }, {
            "name": "L03",
            "coords": [
              [700, 100],
              [500, 100]
            ],
            "value": [700, 100]
          }, {
            "name": "L04",
            "coords": [
              [900, 100],
              [700, 100]
            ],
            "value": [900, 100]
          }, {
            "name": "L05",
            "coords": [
              [1100, 100],
              [900, 100]
            ],
            "value": [1100, 100]
          }, {
            "name": "L06",
            "coords": [
              [1300, 100],
              [1100, 100]
            ],
            "value": [1300, 100]
          }, {
            "name": "L07",
            "coords": [
              [1500, 100],
              [1300, 100]
            ],
            "value": [1500, 100]
          }, {
            "name": "L08",
            "coords": [
              [1700, 100],
              [1500, 100]
            ],
            "value": [1700, 100]
          }, {
            "name": "L09",
            "coords": [
              [1900, 100],
              [1700, 100]
            ],
            "value": [1900, 100]
          }, {
            "name": "L10",
            "coords": [
              [2100, 100],
              [1900, 100]
            ],
            "value": [2100, 100]
          }, {
            "name": "L11",
            "coords": [
              [2300, 100],
              [2100, 100]
            ],
            "value": [2300, 100]
          }, {
            "name": "L12",
            "coords": [
              [2500, 100],
              [2300, 100]
            ],
            "value": [2500, 100]
          }, {
            "name": "L13",
            "coords": [
              [2700, 100],
              [2500, 100]
            ],
            "value": [2700, 100]
          }, {
            "name": "L14",
            "coords": [
              [2900, 100],
              [2700, 100]
            ],
            "value": [2900, 100]
          }, {
            "name": "L15",
            "coords": [
              [3100, 100],
              [2900, 100]
            ],
            "value": [3100, 100]
          }, {
            "name": "L16",
            "coords": [
              [3300, 100],
              [3100, 100]
            ],
            "value": [3300, 100]
          }, {
            "name": "L17",
            "coords": [
              [3500, 100],
              [3300, 100]
            ],
            "value": [3500, 100]
          }, {
            "name": "L18",
            "coords": [
              [3900, 100],
              [3500, 100]
            ],
            "value": [3900, 100]
          }, {
            "name": "",
            "coords": [
              [4300, 100],
              [3900, 140]
            ],
            "value": [4300, 100]
          }, {
            "name": "L19",
            "coords": [
              [4300, 100],
              [3900, 100]
            ],
            "value": [4300, 100]
          }, {
            "name": "L20",
            "coords": [
              [4500, 100],
              [4300, 100]
            ],
            "value": [4500, 100]
          }, {
            "name": "L21",
            "coords": [
              [4700, 100],
              [4500, 100]
            ],
            "value": [4700, 100]
          }, {
            "name": "L22",
            "coords": [
              [4900, 100],
              [4700, 100]
            ],
            "value": [4900, 100]
          }, {
            "name": "L23",
            "coords": [
              [5100, 100],
              [4900, 100]
            ],
            "value": [5100, 100]
          }, {
            "name": "L24",
            "coords": [
              [5300, 100],
              [5100, 100]
            ],
            "value": [5300, 100]
          }, {
            "name": "L25",
            "coords": [
              [5500, 100],
              [5300, 100]
            ],
            "value": [5500, 100]
          }, {
            "name": "L26",
            "coords": [
              [5700, 100],
              [5500, 100]
            ],
            "value": [5700, 100]
          }, {
            "name": "L27",
            "coords": [
              [5900, 100],
              [5700, 100]
            ],
            "value": [5900, 100]
          }, {
            "name": "L28",
            "coords": [
              [6100, 100],
              [5900, 100]
            ],
            "value": [6100, 100]
          }, {
            "name": "L29",
            "coords": [
              [6300, 100],
              [6100, 100]
            ],
            "value": [6300, 100]
          }, {
            "name": "L30",
            "coords": [
              [6500, 100],
              [6300, 100]
            ],
            "value": [6500, 100]
          }, {
            "name": "L31",
            "coords": [
              [6700, 100],
              [6500, 100]
            ],
            "value": [6700, 100]
          }, {
            "name": "L32",
            "coords": [
              [6900, 100],
              [6700, 100]
            ],
            "value": [6900, 100]
          }, {
            "name": "L33",
            "coords": [
              [7100, 100],
              [6900, 100]
            ],
            "value": [7100, 100]
          }, {
            "name": "L34",
            "coords": [
              [7300, 100],
              [7100, 100]
            ],
            "value": [7300, 100]
          }, {
            "name": "L35",
            "coords": [
              [7500, 100],
              [7300, 100]
            ],
            "value": [7500, 100]
          }, {
            "name": "L36",
            "coords": [
              [7700, 100],
              [7500, 100]
            ],
            "value": [7700, 100]
          }]
        },
        {
          "name": "二级子流域",
          "color": '#FF9900',
          "data": [{
            "name": "L80",
            "coords": [
              [7900, 100],
              [7700, 100]
            ],
            "value": [7900, 100]
          }, {
            "name": "L37",
            "coords": [
              [7700, 80],
              [7700, 100]
            ],
            "value": [7700, 80]
          }, {
            "name": "L79",
            "coords": [
              [7100, 120],
              [7100, 100]
            ],
            "value": [7100, 120]
          }, {
            "name": "L78",
            "coords": [
              [6700, 80],
              [6700, 100]
            ],
            "value": [6700, 80]
          }, {
            "name": "L75",
            "coords": [
              [6500, 80],
              [6500, 100]
            ],
            "value": [6500, 80]
          }, {
            "name": "L74",
            "coords": [
              [6100, 80],
              [6100, 100]
            ],
            "value": [6100, 80]
          }, {
            "name": "L70",
            "coords": [
              [5900, 120],
              [5900, 100]
            ],
            "value": [5900, 120]
          }, {
            "name": "L69",
            "coords": [
              [5500, 80],
              [5500, 100]
            ],
            "value": [5500, 80]
          }, {
            "name": "L66",
            "coords": [
              [4700, 80],
              [4700, 100]
            ],
            "value": [4700, 80]
          }, {
            "name": "L65",
            "coords": [
              [4500, 120],
              [4500, 100]
            ],
            "value": [4500, 120]
          }, {
            "name": "L64",
            "coords": [
              [4300, 80],
              [4300, 100]
            ],
            "value": [4300, 80]
          }, {
            "name": "L54",
            "coords": [
              [2700, 80],
              [2700, 100]
            ],
            "value": [2700, 80]
          }, {
            "name": "L51",
            "coords": [
              [1900, 60],
              [1900, 100]
            ],
            "value": [1900, 60]
          }, {
            "name": "L43",
            "coords": [
              [1900, 140],
              [1900, 100]
            ],
            "value": [1900, 140]
          }, {
            "name": "L42",
            "coords": [
              [1300, 120],
              [1300, 100]
            ],
            "value": [1300, 120]
          }, {
            "name": "L41",
            "coords": [
              [700, 80],
              [700, 100]
            ],
            "value": [700, 80]
          }, {
            "name": "L40",
            "coords": [
              [300, 80],
              [300, 100]
            ],
            "value": [300, 80]
          }]
        },
        {
          "name": "三级子流域",
          "color": '#FF00FF',
          "data": [{
            "name": "L81",
            "coords": [
              [7900, 80],
              [7700, 80]
            ],
            "value": [7900, 80]
          }, {
            "name": "L38",
            "coords": [
              [7700, 60],
              [7700, 80]
            ],
            "value": [7700, 60]
          }, {
            "name": "L39",
            "coords": [
              [7700, 40],
              [7700, 60]
            ],
            "value": [7700, 40]
          }, {
            "name": "L77",
            "coords": [
              [6500, 60],
              [6500, 80]
            ],
            "value": [6500, 60]
          }, {
            "name": "L76",
            "coords": [
              [6300, 80],
              [6500, 80]
            ],
            "value": [6300, 80]
          }, {
            "name": "L73",
            "coords": [
              [5900, 160],
              [5900, 140]
            ],
            "value": [5900, 160]
          }, {
            "name": "L72",
            "coords": [
              [5900, 140],
              [5900, 120]
            ],
            "value": [5900, 140]
          }, {
            "name": "L71",
            "coords": [
              [5700, 120],
              [5900, 120]
            ],
            "value": [5700, 120]
          }, {
            "name": "L68",
            "coords": [
              [4900, 80],
              [4700, 80]
            ],
            "value": [4900, 80]
          }, {
            "name": "L67",
            "coords": [
              [4700, 60],
              [4700, 80]
            ],
            "value": [4700, 60]
          }, {
            "name": "L50",
            "coords": [
              [3900, 180],
              [3900, 160]
            ],
            "value": [3900, 180]
          }, {
            "name": "L49",
            "coords": [
              [4100, 160],
              [3900, 160]
            ],
            "value": [4100, 160]
          }, {
            "name": "L48",
            "coords": [
              [3900, 160],
              [3900, 140]
            ],
            "value": [3900, 160]
          }, {
            "name": "L47",
            "coords": [
              [4100, 140],
              [3900, 140]
            ],
            "value": [4100, 140]
          }, {
            "name": "L46",
            "coords": [
              [3900, 140],
              [2500, 140]
            ],
            "value": [3900, 140]
          }, {
            "name": "",
            "coords": [
              [3900, 140],
              [3300, 120]
            ],
            "value": [3900, 140]
          }, {
            "name": "L45",
            "coords": [
              [3300, 120],
              [3100, 60]
            ],
            "value": [3300, 120]
          }, {
            "name": "南干渠",
            "coords": [
              [3300, 180],
              [3300, 120]
            ],
            "value": [3300, 180]
          }, {
            "name": "L44",
            "coords": [
              [2500, 140],
              [1900, 140]
            ],
            "value": [2500, 140]
          }, {
            "name": "其它灌溉#1",
            "coords": [
              [2500, 140],
              [2500, 180]
            ],
            "value": [2500, 180]
          }, {
            "name": "L63",
            "coords": [
              [4100, 20],
              [3900, 20]
            ],
            "value": [4100, 20]
          }, {
            "name": "L62",
            "coords": [
              [3900, 20],
              [3700, 20]
            ],
            "value": [3900, 20]
          }, {
            "name": "L61",
            "coords": [
              [3700, 20],
              [3500, 20]
            ],
            "value": [3700, 20]
          }, {
            "name": "L60",
            "coords": [
              [3500, 20],
              [3500, 40]
            ],
            "value": [3500, 20]
          }, {
            "name": "L59",
            "coords": [
              [3500, 40],
              [3500, 60]
            ],
            "value": [3500, 40]
          }, {
            "name": "L58",
            "coords": [
              [3900, 60],
              [3500, 60]
            ],
            "value": [3900, 60]
          }, {
            "name": "L57",
            "coords": [
              [3500, 60],
              [3100, 60]
            ],
            "value": [3500, 60]
          }, {
            "name": "L56",
            "coords": [
              [3100, 60],
              [2700, 60]
            ],
            "value": [3100, 60]
          }, {
            "name": "L55",
            "coords": [
              [2700, 60],
              [2100, 60]
            ],
            "value": [2700, 60]
          }, {
            "name": "其它灌溉#2",
            "coords": [
              [2700, 60],
              [2700, 20]
            ],
            "value": [2700, 20]
          }, {
            "name": "L53",
            "coords": [
              [2100, 60],
              [1900, 60]
            ],
            "value": [2100, 60]
          }, {
            "name": "L52",
            "coords": [
              [1900, 40],
              [1900, 60]
            ],
            "value": [1900, 40]
          }]
        }
      ];

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < dataLink[i].data.length; j++) {
          let num = Number(dataLink[i].data[j].name.substr(1, 2)) - 1;

          if (str === "COD") {
            dataLink[i].data[j].value.push(arr.LURQUAL_COD[num] + arr.PSRQUAL_COD[num]);
            scale = 0.001;
          } else if (str === "NH4") {
            dataLink[i].data[j].value.push(arr.LURQUAL_TAM[num] + arr.PSRQUAL_TAM[num]);
            scale = 0.01;
          } else if (str === "TN") {
            dataLink[i].data[j].value.push(arr.LURQUAL_TN[num] + arr.PSRQUAL_TN[num]);
            scale = 0.01;
          } else if (str === "TP") {
            dataLink[i].data[j].value.push(arr.LURQUAL_TP[num] + arr.PSRQUAL_TP[num]);
            scale = 0.01;
          }

          // dataLink[i].data[j].value.push(Math.round(Math.random() * 200));
        }
      }

      // console.log(dataLink);
      return {
        backgroundColor: bgColor,
        series: [{
          "type": "lines",
          "name": "一级子流域",
          "polyline": true,
          "color": dataLink[0].color,
          "coordinateSystem": 'cartesian2d',
          "data": dataLink[0].data,
          "effect": {
            show: true,
            symbol: 'arrow',
            period: 5,
            trailLength: 0.3,
            symbolSize: 5,
            color: dataLink[0].color,
          },
          "smooth": true,
          "symbolSize": 1
        }, {
          "type": "lines",
          "name": "二级子流域",
          "polyline": true,
          "color": dataLink[1].color,
          "coordinateSystem": 'cartesian2d',
          "data": dataLink[1].data,
          "effect": {
            show: true,
            symbol: 'arrow',
            period: 5,
            trailLength: 0.3,
            symbolSize: 5,
            color: dataLink[1].color,
          },
          "smooth": true,
          "symbolSize": 1
        }, {
          "type": "lines",
          "name": "三级子流域",
          "polyline": true,
          "color": dataLink[2].color,
          "coordinateSystem": 'cartesian2d',
          "data": dataLink[2].data,
          "effect": {
            show: true,
            symbol: 'arrow',
            period: 5,
            trailLength: 0.3,
            symbolSize: 5,
            color: dataLink[2].color,
          },
          "smooth": true,
          "symbolSize": 1
        }, {
          "type": "effectScatter",
          "name": "一级子流域",
          "color": dataLink[0].color,
          "data": dataLink[0].data,
          "smooth": true,
          "label": {
            "normal": {
              "show": true,
              formatter: "{b}",
              fontSize: 10,
              position: "insideBottomLeft",
              offset: [0, 0]
            },
            // "emphasis": {
            //     "show": true,
            //     fontSize: 25,
            //     backgroundColor: "#000"
            // }
          },
          "symbolSize": function (e) {
            return (e[2]) * scale;
          }
        }, {
          "type": "effectScatter",
          "name": "二级子流域",
          "color": dataLink[1].color,
          "data": dataLink[1].data,
          "smooth": true,
          "label": {
            "normal": {
              "show": true,
              formatter: "{b}",
              fontSize: 10,
              position: "insideBottomLeft",
              offset: [0, 0]
            },
            // "emphasis": {
            //     "show": true,
            //     fontSize: 25,
            //     backgroundColor: "#000"
            // }
          },
          "symbolSize": function (e) {
            return (e[2]) * scale;
          }
        }, {
          "type": "effectScatter",
          "name": "三级子流域",
          "color": dataLink[2].color,
          "data": dataLink[2].data,
          "smooth": true,
          "label": {
            "normal": {
              "show": true,
              formatter: "{b}",
              fontSize: 10,
              position: "insideBottomLeft",
              offset: [0, 0]
            },
            // "emphasis": {
            //     "show": true,
            //     fontSize: 25,
            //     backgroundColor: "#000"
            // }
          },
          "symbolSize": function (e) {
            return (e[2]) * scale;
          }
        }],
        title: [{
          "text": "沙河流域污染物负荷输运路线概览图",
          "left": "center"
        }],
        grid: {
          left: '1%',
          right: '1%',
          bottom: '5%'
        },
        xAxis: [{
          "show": false,
          "data": {},
          "position": "bottom",
          "boundaryGap": true,
          "splitNumber": 5,
          "type": "value",
          "name": "",
          "axisLabel": {
            "rotate": 0
          },
          "gridIndex": 0,
          "scale": true
        }],
        yAxis: [{
          "show": false,
          "position": "left",
          "scale": true,
          "splitNumber": 5,
          "type": "value",
          "name": "",
          "gridIndex": 0
        }],
        legend: {
          "data": [{
            "name": "一级子流域"
          }, {
            "name": "二级子流域"
          }, {
            "name": "三级子流域"
          }],
          "left": "right",
          "right": "auto",
          "top": "auto",
          "bottom": "auto"
        },
        tooltip: {
          "show": true,
          "trigger": "item",
          formatter: function (e) {
            var dataIn = dataLink[e.seriesIndex - 3].data[e.dataIndex].value[2];
            return "<span style='color:" + e.color + "'>█ </span>" + e.seriesName + " - " + e.name + "<br>点源及非点源负荷：" + dataIn.toFixed(3) + 'kg/年';
          }
        },
        dataZoom: [{
          "show": false,
          "type": "slider",
          "start": 0,
          "end": 100,
          "xAxisIndex": 0,
          "realtime": true
        }]
      }

    },


  }

  exports('optionCharts', optionCharts)
})
