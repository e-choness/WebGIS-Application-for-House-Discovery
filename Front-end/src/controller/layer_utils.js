layui.define(['createFillSymbol', 'jquery', 'arcgis', 'element'], function(
  exports
) {
  var { createFillSymbol } = layui.createFillSymbol
  var $ = layui.jquery
  var element = layui.element
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
    connect
  } = layui.arcgis

  function points_layer(
    basemap,
    baseview,
    geojsonLayer_point,
    callback,
    popupID,
    popup_callback
  ) {
    console.log(typeof callback)
    if (callback instanceof Function) {
      callback(geojsonLayer_point)
    }

    baseview.on('click', function(event) {
      // only include graphics from hurricanesLayer in the hitTest
      const opts = {
        include: geojsonLayer_point
      }
      baseview.popup.autoOpenEnabled = false

      console.log('clicked', event)
      baseview.hitTest(event, opts).then(response => {
        if (response.results.length) {
          const graphic = response.results[0].graphic
          console.log(graphic)
          console.log(event.screenPoint)
          var { x, y } = event.screenPoint
          // Get the coordinates of the click on the view
          // var lat = Math.round(event.mapPoint.latitude * 1000) / 1000 // Y
          // var lon = Math.round(event.mapPoint.longitude * 1000) / 1000 //X
          var {
            Name,
            GPOutletNode,
            MSOutletNode,
            WaterQualityType,
            WaterQualityMeterName,
            WaterQualityDeviceID,
            WaterQuantityType,
            WaterQuantityMeterName,
            WaterQuantityDeviceID
          } = graphic.attributes

          document.getElementById(popupID).style.top = y - 100 + 'px'
          document.getElementById(popupID).style.left = x + 20 + 'px'

          document.getElementById('Name').innerHTML =
            Name + ' ' + WaterQuantityMeterName
          document.getElementById('Index').innerHTML =
            WaterQualityDeviceID + ' ' + WaterQuantityDeviceID

          document.getElementById(popupID).style.visibility = 'visible'
          var obj = {
            MSOutletNode,
            WaterQualityDeviceID,
            WaterQuantityDeviceID
          }
          if (popup_callback instanceof Function) {
            popup_callback(obj)
          }

          // baseview.popup.open({
          //   // Set the popup's title to the coordinates of the location
          //   title: 'Reverse geocode: [' + X + ', ' + Y + ']',
          //   updateLocationEnabled: true,
          //   location: event.mapPoint, // Set the location of the popup to the clicked location
          //   content: 'This is a point of interest' // content displayed in the popup
          // })
        } else {
          document.getElementById(popupID).style.visibility = 'hidden'
          // element.render(popupID)
        }
      })
    })

    return geojsonLayer_point
  }

  exports('layer_utils', {
    points_layer
  })
})
