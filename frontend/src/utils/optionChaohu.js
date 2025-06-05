layui.define(['splitData', ], function(exports) {
  var {valueMax} = layui.splitData
  function optionChart(para, modelInfo) {
    var colors = [
      'Aqua',
      'blue',
      'Purple',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc',
      '#3ba272',
      '#5470c6',
      '#91cc75',
      '#fac858'
    ]
    var { FIndex, modelData } = modelInfo
    var unit = para.unit 
    if(unit == undefined) {
      unit = "(mg/L)"
    }
    return {
      title: {
        text: '降雨量-出流量-' + para.type + '浓度（' + FIndex + '）',
        subtext: '监测及流域模型计算结果',
        x: 'center',
        y: 20,
        align: 'right'
        // subtextStyle: {
        //   //副标题文本样式{"color": "#aaa"}
        //   fontFamily: 'Arial, Verdana, sans...',
        //   fontSize: 8,
        //   fontStyle: 'normal',
        //   fontWeight: 'normal'
        // }
      },
      grid: {
        x: 150, //图表左上角到左边界的距离
        y: 70, //图表左上角到上边界的距离
        x2: 80, //图表右下角到右边界的距离
        y2: 50 // 图表右下角到下边界的距离
        // containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: { show: true },
          saveAsImage: { show: true }
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
        data: [
          '降雨量(mm/day)',
          '出流量(m3/s)',
          para.type + '模型浓度' + unit,
          para.type + '实测浓度' + unit,
          '模型液位(m)'
        ],
        x: 'left'
      },
      dataZoom: [
        // {
        //   type: 'slider',
        //   show: true,
        //   realtime: true,
        //   width: 10,
        //   start: 0,
        //   end: 100
        // },
        {
          type: 'slider',
          show: true,
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
          width: 10,
          showDataShadow: false,
          filterMode: 'none',
          left: 140, //组件离容器左侧的距离,'left', 'center', 'right','20%'
          start: 0,
          end: 100
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [1],
          filterMode: 'empty',
          width: 10,
          showDataShadow: false,
          filterMode: 'none',
          left: 100,
          start: 0,
          end: 100
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [2, 3],
          filterMode: 'empty',
          width: 10,
          showDataShadow: false,
          filterMode: 'none',
          right: 70,
          start: 0,
          end: 100
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [4],
          filterMode: 'empty',
          width: 10,
          showDataShadow: false,
          filterMode: 'none',
          right: 40,
          start: 0,
          end: 100
        }
      ],
      xAxis: [
        {
          type: 'time',
          boundaryGap: false,
          axisLine: { onZero: false }
        }
      ],
      yAxis: [
        {
          name: '降雨量',
          nameLocation: 'start',
          type: 'value',
          inverse: true,
          max: 40
        },
        {
          name: '出流量',
          nameLocation: 'end',
          max: 10,
          type: 'value',
          position: 'left',
          offset: 40
        },
        {
          name: para.type + '浓度' + unit,
          nameLocation: 'end',
          nameTextStyle: { padding: [10, 0, 0, 0] },
          max: para.qualityMax,
          type: 'value',
          position: 'right',
          offset: 0
        },
        {
          name: para.type + '实测浓度' + unit,
          show: false,
          nameLocation: 'end',
          max: para.qualityMax,
          type: 'value',
          position: 'right',
          offset: 40
        },
        {
          name: '模型液位',
          // show: false,
          nameLocation: 'start',
          type: 'value',
          position: 'right',
          nameTextStyle: { padding: [0, 0, 0, 20] },
          offset: 40,      
          max: valueMax(modelData.depth)
        },
      ],
      series: [
        {
          name: '出流量(m3/s)',
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
          data: modelData.flow
        },
        {
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
          data: [],
          connectNull: true,
        },
        {
          name: para.type + '模型浓度' + unit,
          yAxisIndex: 2,
          type: 'line',
          animation: false,
          // areaStyle: {
          //     normal: {}
          // },
          // symbolSize: 10,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          data: []
        },
        {
          name: para.type + '实测浓度' + unit,
          yAxisIndex: 3,
          type: 'line',
          animation: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          itemStyle: {
            color: 'Maroon'
          },
          data: []
        },
        {
          name: '模型液位(m)',
          yAxisIndex: 4,
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
          data: modelData.depth
        },
      ]
    }
  }

  function optionChartHisSL(option, water_quantity_data) {
    var { rj_speed, rj_level, rj_flow } = water_quantity_data
    option.legend.data.push('瞬时流量(m3/s)')
    option.legend.data.push('流速(m/s)')
    option.legend.data.push('液位(m)')

    option.yAxis.push({
      name: '瞬时流量',
      nameLocation: 'end',
      nameTextStyle: { padding: [0, 10, 0, 0] },
      max: valueMax(rj_flow),
      type: 'value',
      position: 'left',
      offset: 80
    })
    option.series.push({
      name: '瞬时流量(m3/s)',
      yAxisIndex: 5,
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
      data: rj_flow
    })

    option.yAxis.push({
      show: false,
      name: '流速(m/s)',
      max: valueMax(rj_speed),
      type: 'value',
      position: 'left',
      offset: 0
    })
    option.series.push({
      name: '流速(m/s)',
      yAxisIndex: 6,
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
      data: rj_speed
    })

    option.yAxis.push({
      name: '液位',
      nameLocation: 'end',
      nameTextStyle: { padding: [0, 10, 0, 0] },
      max: valueMax(rj_level),
      type: 'value',
      position: 'left',
      offset: 120
    })
    option.series.push({
      name: '液位(m)',
      yAxisIndex: 7,
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
      data: rj_level
    })

    option.dataZoom.push({
      type: 'slider',
      show: true,
      yAxisIndex: [5],
      filterMode: 'empty',
      width: 10,
      showDataShadow: false,
      filterMode: 'none',
      left: 60, //组件离容器左侧的距离,'left', 'center', 'right','20%'
      start: 0,
      end: 100
    })
    option.dataZoom.push({
      type: 'slider',
      show: true,
      yAxisIndex: [7],
      filterMode: 'empty',
      width: 10,
      showDataShadow: false,
      filterMode: 'none',
      left: 20, //组件离容器左侧的距离,'left', 'center', 'right','20%'
      start: 0,
      end: 100
    })
    return option
  }

  function optionChartHisSZ(option, water_quality_data, type = 'COD') {
    var data = water_quality_data[type]
    if(data instanceof Array){
      option.yAxis[3].max = valueMax(data)
      option.series[3].data = data
    }
    return option
  }

  exports('optionChaohu', {
    optionChart,
    optionChartHisSL,
    optionChartHisSZ
  })
})
