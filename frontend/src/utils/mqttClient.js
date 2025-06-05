layui.define(['optionMQTT', 'mqtt', 'mqttOption'], function(exports) {
  var mqtt = layui.mqtt
  var { mqttOption, url } = layui.mqttOption

  var mqttClient = mqtt.connect(url, mqttOption)
  //建立连接
  mqttClient.on('connect', function() {
    console.log('connect success!')
    //订阅主题
    mqttClient.subscribe('3414002101', function(err) {
      if (!err) {
        console.log('subscribe 3414002101 success!')
        //发布主题presence,消息内容为Hello mqtt
        //mqttClient.publish('presence', 'Hello mqtt')
      } else {
        //打印错误
        console.log('subscribe 3414002101 fail!')
        console.log(err)
      }
    })
    mqttClient.subscribe('3414002102', function(err) {
      if (!err) {
        console.log('subscribe 3414002102 success!')
        //发布主题presence,消息内容为Hello mqtt
        //mqttClient.publish('presence', 'Hello mqtt')
      } else {
        //打印错误
        console.log('subscribe 3414002102 fail!')
        console.log(err)
      }
    })
    mqttClient.subscribe('44335', function(err) {
      if (!err) {
        console.log('subscribe 44335 success!')
        //发布主题presence,消息内容为Hello mqtt
        //mqttClient.publish('presence', 'Hello mqtt')
      } else {
        //打印错误
        console.log('subscribe 44335 fail!')
        console.log(err)
      }
    })
  })

  //如果连接错误，打印错误
  // mqttClient.on('error', function(err) {
  //   mqttClient.end()
  //   exports('mqttClient', null)
  // })

  exports('mqttClient', mqttClient)
})
