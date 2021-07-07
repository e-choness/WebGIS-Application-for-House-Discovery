layui.define(function(exports) {
  var mqttOption = {
    //mqtt客户端的id，这里面应该还可以加上其他参数，具体看官方文档
    clientId:
      'mqttjs_' +
      Math.random()
        .toString(16)
        .substr(2, 8),
    username: 'admin',
    password: 'public'
  }

  var url = 'ws://36.7.72.89:8083/mqtt'
  exports('mqttOption', { mqttOption, url })
})
