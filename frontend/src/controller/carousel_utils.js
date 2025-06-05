layui.define(['admin', 'carousel', 'echarts'], function(exports) {
  function init_carousel_text() {
    var $ = layui.$,
      carousel = (layui.admin, layui.carousel),
      element = layui.element,
      device = layui.device()
    $('.layadmin-carousel').each(function() {
      var a = $(this)
      carousel.render({
        elem: this,
        width: '100%',
        arrow: 'none',
        interval: a.data('interval'),
        autoplay: a.data('autoplay') === !0,
        trigger: device.ios || device.android ? 'click' : 'hover',
        anim: a.data('anim')
      })
    })
    // element.render('progress')
    //这里需要仔细看下渲染问题
    element.render('StationPopup')
  }

  function init_carousel_echarts(data) {
    var $ = layui.$,
      carousel = layui.carousel,
      echarts = layui.echarts,
      echarts_instances = [],
      echarts_divs = $('#LAY-index-dataview').children('div'),
      echarts_render = function(index) {
        echarts_instances[index] = echarts.init(
          echarts_divs[index],
          layui.echartsTheme
        )
        echarts_instances[index].setOption(data[index])
        window.onresize = echarts_instances[index].resize
      }
    if (echarts_divs[0]) {
      echarts_render(0)
      var current = 0
      carousel.on('change(LAY-index-dataview)', function(e) {
        echarts_render((current = e.index))
      })
      // layui.admin.on('side', function() {
      //   setTimeout(function() {
      //     echarts_render(current)
      //   }, 300)
      // })
      // layui.admin.on('hash(tab)', function() {
      //   layui.router().path.join('') || echarts_render(current)
      // })
    }
  }
  exports('carousel_utils', {
    init_carousel_text,
    init_carousel_echarts
  })
})
