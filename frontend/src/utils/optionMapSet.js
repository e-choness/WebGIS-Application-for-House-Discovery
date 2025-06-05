layui.define(['splitData'], function(exports) {
  var { splitData_map } = layui.splitData
  var optionMapSet = {
    optionsMapSet3D: function optionsMapSet3D(
      datas_river_summary_tran,
      MainStreamPoint,
      InnerPoint,
      lines,
      map,
      object,
      waterQuality,
      PointSource
    ) {
      var objectName
      var des
      var MainStreamPoint_this = new Array()
      var InnerPoint_this = new Array()
      var max
      var opacity = 1
      var color = {
        A: '#99FF99',
        B: '#999966',
        C: '#FF66FF',
        D: '#FFFF99',
        E: '#FF9999',
        F: '#CCCC99'
      }

      var regionData = [
        {
          name: 'L01',
          itemStyle: {
            areaColor: color.F,
            opacity: opacity
          }
        },
        {
          name: 'L40',
          itemStyle: {
            areaColor: color.F,
            opacity: opacity
          }
        },
        {
          name: 'L02',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L03',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L04',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L05',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L06',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L07',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L08',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L41',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L42',
          itemStyle: {
            areaColor: color.E,
            opacity: opacity
          }
        },
        {
          name: 'L09',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L10',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L11',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L12',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L13',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L14',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L15',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L16',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L17',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L18',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L43',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L44',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L45',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L46',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L47',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L48',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L49',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L50',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L51',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L52',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L53',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L54',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L55',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L56',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L57',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L58',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L59',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L60',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L61',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L62',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L63',
          itemStyle: {
            areaColor: color.D,
            opacity: opacity
          }
        },
        {
          name: 'L19',
          itemStyle: {
            areaColor: color.C,
            opacity: opacity
          }
        },
        {
          name: 'L20',
          itemStyle: {
            areaColor: color.C,
            opacity: opacity
          }
        },
        {
          name: 'L64',
          itemStyle: {
            areaColor: color.C,
            opacity: opacity
          }
        },
        {
          name: 'L65',
          itemStyle: {
            areaColor: color.C,
            opacity: opacity
          }
        },
        {
          name: 'L21',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L22',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L23',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L24',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L25',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L26',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L66',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L67',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L68',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L69',
          itemStyle: {
            areaColor: color.B,
            opacity: opacity
          }
        },
        {
          name: 'L27',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L28',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L29',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L30',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L31',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L32',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L33',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L34',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L35',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L36',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L37',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L38',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L39',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L70',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L71',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L72',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L73',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L74',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L75',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L76',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L77',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L78',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L79',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L80',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        },
        {
          name: 'L81',
          itemStyle: {
            areaColor: color.A,
            opacity: opacity
          }
        }
      ]

      if (object === 'S') {
        for (let i = 0; i < MainStreamPoint.length; i++) {
          let F_Num = MainStreamPoint[i].name.substr(1, 2)
          F_Num = Number(F_Num) - 1
          // console.log(F_Num);

          if (waterQuality === 'COD') {
            max = 40
            let temp =
              (datas_river_summary_tran.RQUAL_COD[F_Num] /
                datas_river_summary_tran.RO[F_Num]) *
              1000
            temp = MainStreamPoint[i].value.concat(temp)
            MainStreamPoint_this[i] = {
              name: MainStreamPoint[i].name,
              value: temp
            }
          } else if (waterQuality === 'NH4') {
            max = 2
            let temp =
              (datas_river_summary_tran.RQUAL_TAM[F_Num] /
                datas_river_summary_tran.RO[F_Num]) *
              1000
            temp = MainStreamPoint[i].value.concat(temp)
            MainStreamPoint_this[i] = {
              name: MainStreamPoint[i].name,
              value: temp
            }
          } else if (waterQuality === 'TN') {
            max = 2
            let temp =
              (datas_river_summary_tran.RQUAL_TN[F_Num] /
                datas_river_summary_tran.RO[F_Num]) *
              1000
            temp = MainStreamPoint[i].value.concat(temp)
            MainStreamPoint_this[i] = {
              name: MainStreamPoint[i].name,
              value: temp
            }
          } else if (waterQuality === 'TP') {
            max = 0.4
            let temp =
              (datas_river_summary_tran.RQUAL_TP[F_Num] /
                datas_river_summary_tran.RO[F_Num]) *
              1000
            temp = MainStreamPoint[i].value.concat(temp)
            MainStreamPoint_this[i] = {
              name: MainStreamPoint[i].name,
              value: temp
            }
          }
        }

        InnerPoint = []
        objectName = '河道'
        des = '（mg/L）'
      } else if (object === 'L') {
        for (let i = 0; i < InnerPoint.length; i++) {
          let F_Num = InnerPoint[i].name.substr(1, 2)
          F_Num = Number(F_Num) - 1
          // console.log(F_Num);

          if (waterQuality === 'COD') {
            max = 15000
            let temp =
              datas_river_summary_tran.PSRQUAL_COD[F_Num] +
              datas_river_summary_tran.LURQUAL_COD[F_Num]
            temp = InnerPoint[i].value.concat(temp)
            InnerPoint_this[i] = {
              name: InnerPoint[i].name,
              value: temp
            }
          } else if (waterQuality === 'NH4') {
            max = 500
            let temp =
              datas_river_summary_tran.PSRQUAL_TAM[F_Num] +
              datas_river_summary_tran.LURQUAL_TAM[F_Num]
            temp = InnerPoint[i].value.concat(temp)
            InnerPoint_this[i] = {
              name: InnerPoint[i].name,
              value: temp
            }
          } else if (waterQuality === 'TN') {
            max = 500
            let temp =
              datas_river_summary_tran.PSRQUAL_TN[F_Num] +
              datas_river_summary_tran.LURQUAL_TN[F_Num]
            temp = InnerPoint[i].value.concat(temp)
            InnerPoint_this[i] = {
              name: InnerPoint[i].name,
              value: temp
            }
          } else if (waterQuality === 'TP') {
            max = 150
            let temp =
              datas_river_summary_tran.PSRQUAL_TP[F_Num] +
              datas_river_summary_tran.LURQUAL_TP[F_Num]
            temp = InnerPoint[i].value.concat(temp)
            InnerPoint_this[i] = {
              name: InnerPoint[i].name,
              value: temp
            }
          }
        }

        MainStreamPoint = []
        objectName = '陆源'
        des = '（kg/年）'
      }

      var option

      option = {
        baseOption: {
          title: {
            text:
              '沙河流域' +
              objectName +
              waterQuality +
              des +
              '空间年均统计-3D (2018年1月1日-2019年8月30日)',
            subtext: '基于沙河流域产流产污模型V1.0版计算结果',
            left: 'center',
            top: '2%',
            textStyle: {
              color: 'black',
              fontSize: 30
            }
          },
          tooltip: {
            show: true,
            formatter: params => {
              let data =
                '名称:' +
                params.name +
                '<br/>' +
                '数值:' +
                params.value[2].toFixed(3) +
                des +
                '<br/>' +
                '坐标:[' +
                params.value[0].toFixed(5) +
                ',' +
                params.value[1].toFixed(5) +
                ']'
              return data
            }
          },
          visualMap: [
            {
              type: 'continuous',
              seriesIndex: 0,
              text: ['河道水质浓度（mg/L）'],
              calculable: true,
              max: max,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026'
                ]
              },
              outOfRange: {
                colorAlpha: 0
              }
            },
            {
              type: 'continuous',
              seriesIndex: 1,
              text: ['陆源污染负荷（kg/年）'],
              left: 'right',
              max: max,
              calculable: true,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026'
                ]
              },
              outOfRange: {
                colorAlpha: 0
              }
            }
          ],
          geo3D: {
            map: map,
            regionHeight: 1,
            boxHeight: 10,
            viewControl: {
              distance: 65,
              minBeta: -360,
              maxBeta: 360
            },
            itemStyle: {
              areaColor: 'rgb(0,139,139)',
              opacity: 1,
              borderWidth: 0.1,
              borderColor: 'rgb(0,0,0)'
            },
            groundPlane: {
              show: true,
              color: 'white'
            },
            //  label: {
            //      show: true,
            //      textStyle: {
            //          color: '#000', //地图初始化区域字体颜色
            //          fontSize: 8,
            //          opacity: 1,
            //          backgroundColor: 'rgba(0,23,11,0)'
            //      },
            //  },
            emphasis: {
              //当鼠标放上去  地区区域是否显示名称
              label: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 3
                  // backgroundColor: 'rgba(0,23,11,0)'
                }
              }
            },
            regions: regionData,
            shading: 'realistic',
            light: {
              main: {
                color: '#fff', //光照颜色
                intensity: 1.2, //光照强度
                shadowQuality: 'high', //阴影亮度
                shadow: false, //是否显示阴影
                //                        alpha: 55,
                beta: 10
              },
              ambient: {
                intensity: 0.3
              }
            }
          },
          series: [
            {
              name: '河道水质浓度',
              type: 'bar3D',
              coordinateSystem: 'geo3D',
              barSize: 0.5, //柱子粗细
              shading: 'lambert',
              bevelSize: 0.3,
              bevelSmoothness: 3,
              itemStyle: {
                color: '#0099FF'
              },
              label: {
                show: false,
                formatter: '{b}'
              },
              data: MainStreamPoint_this
            },
            {
              name: '陆源污染负荷',
              type: 'bar3D',
              coordinateSystem: 'geo3D',
              barSize: 2, //柱子粗细
              shading: 'lambert',
              bevelSize: 0.2,
              bevelSmoothness: 3,
              itemStyle: {
                color: 'lightblue'
              },
              label: {
                show: false,
                formatter: '{b}'
              },
              data: InnerPoint_this
            },
            {
              type: 'lines3D',
              coordinateSystem: 'geo3D',
              polyline: true,
              effect: {
                show: true,
                trailWidth: 10,
                trailOpacity: 1,
                trailLength: 3,
                constantSpeed: 6
              },
              // blendMode: 'lighter',
              lineStyle: {
                color: function(params) {
                  if (params.data.type == 'S') {
                    return 'blue'
                  } else {
                    return 'green'
                  }
                },
                opacity: 1,
                width: 1.0
              },
              data: lines
              // data: LtoS
            },
            {
              type: 'scatter3D',
              coordinateSystem: 'geo3D',
              symbol: 'pin',
              symbolSize: 50,
              opacity: 1,
              label: {
                show: false,
                formatter: '{b}'
              },
              itemStyle: {
                color: 'red',
                borderWidth: 0.5,
                borderColor: '#fff'
              },
              data: PointSource
            }
          ]
        },
        options: []
      }
      return option
    },

    optionsMapSet2D: function optionsMapSet2D(
      datas_sim_tran,
      lines,
      map,
      object,
      waterQuality,
      PointSource
    ) {
      var objectName
      var des
      var max

      if (object === 'S') {
        objectName = '河道'
        des = '（mg/L）'
        if (waterQuality === 'COD') {
          max = 40
        } else if (waterQuality === 'NH4') {
          max = 2
        } else if (waterQuality === 'TN') {
          max = 4
        } else if (waterQuality === 'TP') {
          max = 1
        }
      } else {
        objectName = '陆源'
        des = '（kg/天）'
        if (waterQuality === 'COD') {
          max = 200
        } else if (waterQuality === 'NH4') {
          max = 10
        } else if (waterQuality === 'TN') {
          max = 20
        } else if (waterQuality === 'TP') {
          max = 5
        }
      }

      var itemStyle = {
        normal: {
          borderWidth: 0.05,
          borderColor: 'black'
        },
        emphasis: {
          label: {
            show: true
          }
        }
      }

      var option = {
        geo: {
          show: true,
          map: map,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#3B5077'
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          }
        },
        timeline: {
          axisType: 'category',
          data: datas_sim_tran[0].categoryData,
          playInterval: 200,
          loop: true,
          bottom: '5%',
          symbolSize: 10,
          autoPlay: false
        },
        baseOption: {
          title: {
            text:
              '沙河流域' +
              objectName +
              waterQuality +
              des +
              '时空演化-2D (2018年1月1日-2019年8月30日)',
            subtext: '基于沙河流域产流产污模型V1.0版计算结果',
            left: 'center',
            top: '2%',
            textStyle: {
              color: 'black',
              fontSize: 30
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              var value = (params.value + '').split('.')
              value =
                value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
                '.' +
                value[1]
              return (
                params.seriesName + '<br/>' + params.name + ' : ' + value + des
              )
            }
          },
          visualMap: {
            min: 0,
            max: max,
            // top: "10%",
            text: [des],
            realtime: true,
            calculable: true,
            color: ['orangered', 'yellow', 'lightskyblue']
          },
          series: [
            {
              name: objectName,
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              data: PointSource,
              symbolSize: 60,
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#05C3F9',
                  shadowBlur: 10,
                  shadowColor: '#05C3F9'
                }
              },
              zlevel: 6
            }
          ]
        },
        options: []
      }

      for (var n = 0; n < datas_sim_tran[0].categoryData.length; n++) {
        var Arr = splitData_map(datas_sim_tran, [object, waterQuality], n)

        option.options.push({
          series: [
            {
              name: objectName,
              type: 'map',
              map: map,
              roam: true,
              // top: 60,
              width: '80%',
              itemStyle: itemStyle,
              data: Arr
            }
          ]
        })
      }
      return option
    },

    optionStreamCrossLineplot: function optionStreamCrossLineplot(
      para,
      select
    ) {
      let SC_data = []
      console.log('Index: ', select)
      for (let i = 0; i < para.value.length; i++) {
        // console.log(para.value[i])
        if (para.value[i].Index === select) {
          ;[...SC_data] = para.value[i].value.V
        }
      }
      console.log(SC_data)

      return {
        title: {
          text: '横断面' + select + '高程数据',
          x: 'center',
          bottom: '0px'
        },
        grid: {
          // left: '4%',
          // right: '2%',
          // bottom: '15%'
          top: 50,
          x: 45,
          x2: 30,
          y2: 80
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
          data: [select + '断面'],
          x: 'left'
        },
        xAxis: [
          {
            type: 'value',
            max: 'dataMax',
            min: 'dataMin',
            boundaryGap: false,
            axisLine: {
              onZero: false
            }
          }
        ],
        yAxis: [
          {
            name: select + '高程(m)',
            type: 'value',
            min: 'dataMin',
            max: 'dataMax'
          }
        ],
        series: [
          {
            name: select + '断面',
            type: 'line',
            symbol: 'emptyCircle',
            symbolColor: 'red',
            symbolSize: '0',
            animation: false,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'yellow' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'black' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            lineStyle: {
              width: 3,
              color: 'red'
            },
            data: SC_data
          }
        ]
      }
    }
  }

  exports('optionMapSet', optionMapSet)
})
