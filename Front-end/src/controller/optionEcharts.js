layui.define([], function(exports) {
  function lineOption(options) {
    // console.log('lineOption', options)
    var { title, xAxis_data, yAxis_data } = options
    var option = {
      title: {
        text: title,
        x: 'center',
        textStyle: { fontSize: 14 }
      },
      tooltip: { trigger: 'axis' },
      legend: { data: ['', ''] },
      xAxis: [
        {
          type: 'category',
          boundaryGap: !1,
          data: xAxis_data
        }
      ],
      yAxis: [{ type: 'value' }],
      series: [
        {
          name: 'PV',
          type: 'line',
          smooth: !0,
          itemStyle: { normal: { areaStyle: { type: 'default' } } },
          data: yAxis_data
        }
      ]
    }
    return option
  }

  exports('optionEcharts', {
    lineOption
  })
})
