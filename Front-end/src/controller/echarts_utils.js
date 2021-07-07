layui.define(['echarts'], function(exports) {
  function init_echarts(container, option) {
    var $ = layui.$
    var echarts = layui.echarts
    var echarts_div = $(container)[0]
    console.log('init echarts ', echarts_div)
    var echarts_instance = echarts.init(echarts_div, layui.echartsTheme)
    echarts_instance.setOption(option)
    window.onresize = echarts_instance.resize
    return echarts_instance
  }

  exports('echarts_utils', { init_echarts })
})
