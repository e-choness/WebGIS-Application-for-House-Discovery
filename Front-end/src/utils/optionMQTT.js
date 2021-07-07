layui.define(function(exports) {
  var optionMQTT = {
    optionGageCO2: {
      series: [
        {
          name: 'CO2',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 5,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.1, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 5,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 10,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '75%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 15
            }
          },
          data: [
            {
              value: 0,
              name: 'CO2 %'
            }
          ]
        }
      ]
    },
    optionGageH: {
      series: [
        {
          name: 'Humidity',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 100,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.1, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 5,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 10,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '75%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 15
            }
          },
          data: [
            {
              value: 0,
              name: 'Humidity %'
            }
          ]
        }
      ]
    },
    optionGageO2: {
      series: [
        {
          name: 'O2',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 25,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.1, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 5,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 10,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '75%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 15
            }
          },
          data: [
            {
              value: 0,
              name: 'O2 %'
            }
          ]
        }
      ]
    },
    optionGageOTE: {
      series: [
        {
          name: 'OTE',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 100,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.1, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 5,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 10,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '75%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 15
            }
          },
          data: [
            {
              value: 0,
              name: 'OTE %'
            }
          ]
        }
      ]
    },
    optionGageT: {
      series: [
        {
          name: 'Temperature',
          type: 'gauge',
          z: 3,
          min: -20,
          max: 60,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.3, 'lime'], [0.7, '#1e90ff'], [1, '#ff4500']],
              width: 5,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 10,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '75%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 15
            }
          },
          data: [
            {
              value: 0,
              name: 'Temperature C'
            }
          ]
        }
      ]
    },
    optionGageV: {
      series: [
        {
          name: 'Velocity',
          type: 'gauge',
          z: 3,
          min: 0,
          max: 20,
          splitNumber: 5,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.1, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 5,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 10,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 10,
              fontStyle: 'italic',
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '75%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 15
            }
          },
          data: [
            {
              value: 0,
              name: 'V m/s'
            }
          ]
        }
      ]
    },
    optionLineCO2: {
      title: {
        text: 'CO2 (%)',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20
        }
      },
      grid: {
        left: '4%',
        top: 35,
        right: '1.5%',
        bottom: 35
      },
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: (function() {
          var now = new Date()
          var res = []
          var len = 100
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
            now = new Date(now - 1000)
          }
          return res
        })()
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true
        },
        splitNumber: 5,
        axisLabel: {
          fontFamily: 'Courier New',
          fontSize: 12,
          fontWeight: 'bold'
        },
        max: 5,
        min: -1
      },
      series: [
        {
          name: 'CO2',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: (function() {
            var res = []
            var len = 0
            while (len < 100) {
              res.push(0)
              len++
            }
            return res
          })()
        }
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 2.5,
            lte: 3.5,
            color: '#F26767'
          }
        ],
        outOfRange: {
          color: '#0076FF'
        }
      }
    },
    optionLineH: {
      title: {
        text: 'Humidity (%)',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20
        }
      },
      grid: {
        left: '4%',
        top: 35,
        right: '1.5%',
        bottom: 35
      },
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: (function() {
          var now = new Date()
          var res = []
          var len = 100
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
            now = new Date(now - 1000)
          }
          return res
        })()
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true
        },
        splitNumber: 5,
        axisLabel: {
          fontFamily: 'Courier New',
          fontSize: 12,
          fontWeight: 'bold'
        },
        max: 100,
        min: 0
      },
      series: [
        {
          name: 'Humidity',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: (function() {
            var res = []
            var len = 0
            while (len < 100) {
              res.push(0)
              len++
            }
            return res
          })()
        }
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 50,
            lte: 75,
            color: '#F26767'
          }
        ],
        outOfRange: {
          color: '#0076FF'
        }
      }
    },
    optionLineO2: {
      title: {
        text: 'O2 (%)',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20
        }
      },
      grid: {
        left: '4%',
        top: 35,
        right: '1.5%',
        bottom: 35
      },
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: (function() {
          var now = new Date()
          var res = []
          var len = 100
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
            now = new Date(now - 1000)
          }
          return res
        })()
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true
        },
        splitNumber: 5,
        axisLabel: {
          fontFamily: 'Courier New',
          fontSize: 12,
          fontWeight: 'bold'
        },
        max: 25,
        min: 0
      },
      series: [
        {
          name: 'O2',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: (function() {
            var res = []
            var len = 0
            while (len < 100) {
              res.push(0)
              len++
            }
            return res
          })()
        }
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 16,
            lte: 19,
            color: '#F26767'
          }
        ],
        outOfRange: {
          color: '#0076FF'
        }
      }
    },
    optionLineOTE: {
      title: {
        text: 'OTE (%)',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20
        }
      },
      grid: {
        left: '4%',
        top: 35,
        right: '1.5%',
        bottom: 35
      },
      tooltip: {
        trigger: 'axis',
        // formatter: function (params) {
        //   params = params[0];
        //   var date = new Date(params.name);
        //   return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' : OTE = ' + params.value[1] + '%';
        // },
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      xAxis: {
        // type: 'time',
        // splitLine: {
        //   show: true
        // },
        // maxInterval: 60 * 30 * 1000,
        // axisLabel: {
        //   fontFamily: 'Courier New',
        //   fontSize: 12,
        //   fontWeight: 'bold'
        // }
        type: 'category',
        boundaryGap: true,
        data: (function() {
          var now = new Date()
          var res = []
          var len = 100
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
            now = new Date(now - 1000)
          }
          return res
        })()
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 1],
        splitLine: {
          show: true
        },
        splitNumber: 5,
        axisLabel: {
          fontFamily: 'Courier New',
          fontSize: 12,
          fontWeight: 'bold'
        },
        max: 60,
        min: 0
      },
      series: [
        {
          name: 'OTE',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: (function() {
            var res = []
            var len = 0
            while (len < 100) {
              res.push(0)
              len++
            }
            return res
          })()
        }
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 28,
            lte: 32,
            color: '#F26767'
          }
        ],
        outOfRange: {
          color: '#0076FF'
        }
      }
    },
    optionLineT: {
      title: {
        text: 'Temperature (C deg)',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20
        }
      },
      grid: {
        left: '4%',
        top: 35,
        right: '1.5%',
        bottom: 35
      },
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: (function() {
          var now = new Date()
          var res = []
          var len = 100
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
            now = new Date(now - 1000)
          }
          return res
        })()
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true
        },
        splitNumber: 5,
        axisLabel: {
          fontFamily: 'Courier New',
          fontSize: 12,
          fontWeight: 'bold'
        },
        max: 60,
        min: -20
      },
      series: [
        {
          name: 'Temperature',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: (function() {
            var res = []
            var len = 0
            while (len < 100) {
              res.push(0)
              len++
            }
            return res
          })()
        }
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 22,
            lte: 32,
            color: '#F26767'
          }
        ],
        outOfRange: {
          color: '#0076FF'
        }
      }
    },
    optionLineV: {
      title: {
        text: 'Velocity (m/s)',
        textStyle: {
          fontFamily: 'Courier New',
          fontSize: 20
        }
      },
      grid: {
        left: '4%',
        top: 35,
        right: '1.5%',
        bottom: 35
      },
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: (function() {
          var now = new Date()
          var res = []
          var len = 100
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''))
            now = new Date(now - 1000)
          }
          return res
        })()
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: true
        },
        splitNumber: 5,
        axisLabel: {
          fontFamily: 'Courier New',
          fontSize: 12,
          fontWeight: 'bold'
        },
        max: 20,
        min: -5
      },
      series: [
        {
          name: 'Velocity',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: (function() {
            var res = []
            var len = 0
            while (len < 100) {
              res.push(0)
              len++
            }
            return res
          })()
        }
      ],
      visualMap: {
        top: 10,
        right: 10,
        pieces: [
          {
            gt: 550,
            lte: 650,
            color: '#F26767'
          }
        ],
        outOfRange: {
          color: '#0076FF'
        }
      }
    }
  }
  exports('optionMQTT', optionMQTT)
})
