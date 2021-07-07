layui.define(['optionMQTT', 'mxClient'], function(exports) {
  var {
    optionGageV,
    optionGageO2,
    optionGageCO2,
    optionGageH,
    optionGageT,
    optionGageOTE
  } = layui.optionMQTT
  var mxClient = layui.mxClient

  console.log(mxClient)

  function console_mx(container, mqttClient) {
    if (!mxClient.isBrowserSupported()) {
      mxUtils.error('Browser is not supported!', 200, false)
    } else {
      //建立连接
      // Fixes possible clipping issues in Chrome
      mxClient.NO_FO = true
      // Loads the stencils into the registry
      var req = mxUtils.load(
        './src/lib/extend/mxgraph/stencils/Offgas_meter.xml'
      )
      var root = req.getDocumentElement()
      var shape = root.firstChild
      while (shape != null) {
        if (shape.nodeType == mxConstants.NODETYPE_ELEMENT) {
          mxStencilRegistry.addStencil(
            shape.getAttribute('name'),
            new mxStencil(shape)
          )
        }
        shape = shape.nextSibling
      }
      // Disables the built-in context menu
      mxEvent.disableContextMenu(container)
      // Creates the graph inside the given container
      var graph = new mxGraph(container)
      // Editing Enabled false
      graph.setEnabled(false)
      // Adds custom HTML labels
      graph.setHtmlLabels(true)
      // Returns canvas with dynamic chart for vertex labels
      var graphConvertValueToString = graph.convertValueToString

      graph.convertValueToString = function(cell) {
        if (this.model.isVertex(cell)) {
          if (cell.value === 'Velocity') {
            let node = document.createElement('canvas')
            node.setAttribute('width', cell.geometry.width)
            node.setAttribute('height', cell.geometry.height)
            let gageVChart = echarts.init(node)

            gageVChart.setOption(optionGageV, true)
            //如果client订阅主题成功，那么这里就是当接收到自己订阅主题的处理逻辑
            mqttClient.on('message', function(topic, message) {
              // message is Buffer,此处就是打印消息的具体内容
              //console.log('-> ' + message)
              if (topic === 'og001_V') {
                optionGageV.series[0].data[0].value = message
                gageVChart.setOption(optionGageV, true)
              }
            })

            // setInterval(function () {

            // }, 2000);
            return node
          } else if (cell.value === 'O2') {
            let node = document.createElement('canvas')
            node.setAttribute('width', cell.geometry.width)
            node.setAttribute('height', cell.geometry.height)
            let gageO2Chart = echarts.init(node)

            gageO2Chart.setOption(optionGageO2, true)
            //如果client订阅主题成功，那么这里就是当接收到自己订阅主题的处理逻辑
            mqttClient.on('message', function(topic, message) {
              // message is Buffer,此处就是打印消息的具体内容
              //console.log('-> ' + message)
              if (topic === 'og001_O2') {
                optionGageO2.series[0].data[0].value = message
                gageO2Chart.setOption(optionGageO2, true)
              }
            })

            // setInterval(function () {

            // }, 2000);
            return node
          } else if (cell.value === 'CO2') {
            let node = document.createElement('canvas')
            node.setAttribute('width', cell.geometry.width)
            node.setAttribute('height', cell.geometry.height)
            let gageCO2Chart = echarts.init(node)

            gageCO2Chart.setOption(optionGageCO2, true)
            //如果client订阅主题成功，那么这里就是当接收到自己订阅主题的处理逻辑
            mqttClient.on('message', function(topic, message) {
              // message is Buffer,此处就是打印消息的具体内容
              //console.log('-> ' + message)
              if (topic === 'og001_CO2') {
                optionGageCO2.series[0].data[0].value = message
                gageCO2Chart.setOption(optionGageCO2, true)
              }
            })
            return node
          } else if (cell.value === 'Humidity') {
            let node = document.createElement('canvas')
            node.setAttribute('width', cell.geometry.width)
            node.setAttribute('height', cell.geometry.height)
            let gageHChart = echarts.init(node)

            gageHChart.setOption(optionGageH, true)
            //如果client订阅主题成功，那么这里就是当接收到自己订阅主题的处理逻辑
            mqttClient.on('message', function(topic, message) {
              // message is Buffer,此处就是打印消息的具体内容
              //console.log('-> ' + message)
              if (topic === 'og001_H') {
                optionGageH.series[0].data[0].value = message
                gageHChart.setOption(optionGageH, true)
              }
            })
            return node
          } else if (cell.value === 'Temperature') {
            let node = document.createElement('canvas')
            node.setAttribute('width', cell.geometry.width)
            node.setAttribute('height', cell.geometry.height)
            let gageTChart = echarts.init(node)

            gageTChart.setOption(optionGageT, true)
            //如果client订阅主题成功，那么这里就是当接收到自己订阅主题的处理逻辑
            mqttClient.on('message', function(topic, message) {
              // message is Buffer,此处就是打印消息的具体内容
              //console.log('-> ' + message)
              if (topic === 'og001_T') {
                optionGageT.series[0].data[0].value = message
                gageTChart.setOption(optionGageT, true)
              }
            })
            return node
          } else if (cell.value === 'OTE') {
            let node = document.createElement('canvas')
            node.setAttribute('width', cell.geometry.width)
            node.setAttribute('height', cell.geometry.height)

            // document.body.appendChild(node);
            let gageOTEChart = echarts.init(node)
            //----------------------------------------------------------------------------------------------------------------------------
            //
            //                          add here the algorithm to calculate OTE
            //----------------------------------------------------------------------------------------------------------------------------
            // optionGageOTE.series[0].data[0].value = 40;
            gageOTEChart.setOption(optionGageOTE, true)

            return node
          }
        }
        return graphConvertValueToString.apply(this, arguments)
      }

      new mxRubberband(graph)
      var parent = graph.getDefaultParent()
      var pipeStyle =
        'strokeWidth=2;fillColor=#ffffff;strokeColor=black;' +
        'gradientColor=#a0a0a0;fontColor=black;fontStyle=1'
      graph.getModel().beginUpdate()
      try {
        var offgasMainPipe = graph.insertVertex(
          parent,
          null,
          'Offgas Main Pipe',
          20,
          20,
          1200,
          40,
          'shape=pipe01;' + pipeStyle
        )
        var offgasSubPipe = graph.insertVertex(
          parent,
          null,
          'Offgas Sub Pipe',
          220,
          60,
          20,
          200,
          'shape=pipe02;' + pipeStyle
        )
        var airPipe = graph.insertVertex(
          parent,
          null,
          'Air Pipe',
          20,
          270,
          190,
          20,
          'shape=pipe02;' + pipeStyle
        )
        var sensorV = graph.insertVertex(
          parent,
          null,
          'sensor Velocity',
          95,
          20,
          40,
          40,
          'shape=PipeSensor01;'
        )
        var teeValve = graph.insertVertex(
          parent,
          null,
          'Tee Valve',
          210,
          260,
          40,
          40,
          'shape=TeeValve;'
        )
        var sensorChamber = graph.insertVertex(
          parent,
          null,
          'sensor Chamber',
          250,
          250,
          800,
          60,
          'shape=sensorChamber;' + pipeStyle
        )
        var vPump = graph.insertVertex(
          parent,
          null,
          'vPump',
          1050,
          250,
          60,
          60,
          'shape=VPump;'
        )
        var offgasEffPipe = graph.insertVertex(
          parent,
          null,
          'Offgas Eff Pipe',
          1110,
          270,
          110,
          20,
          'shape=pipe02;' + pipeStyle
        )
        var gageV = graph.insertVertex(
          parent,
          null,
          'Velocity',
          40,
          80,
          150,
          150,
          'shape=Gage'
        )
        var gageO2 = graph.insertVertex(
          parent,
          null,
          'O2',
          290,
          80,
          150,
          150,
          'shape=Gage'
        )
        var gageCO2 = graph.insertVertex(
          parent,
          null,
          'CO2',
          480,
          80,
          150,
          150,
          'shape=Gage'
        )
        var gageH = graph.insertVertex(
          parent,
          null,
          'Humidity',
          670,
          80,
          150,
          150,
          'shape=Gage'
        )
        var gageT = graph.insertVertex(
          parent,
          null,
          'Temperature',
          860,
          80,
          150,
          150,
          'shape=Gage'
        )
        var gageOTE = graph.insertVertex(
          parent,
          null,
          'OTE',
          1050,
          80,
          150,
          150,
          'shape=Gage'
        )
        var signalV = graph.insertEdge(
          parent,
          null,
          '',
          offgasMainPipe,
          gageV,
          'strokeWidth=3;endArrow=block;endSize=2;endFill=1;strokeColor=black;rounded=1;'
        )
        signalV.geometry.points = [new mxPoint(115, 60)]
        graph.orderCells(true, [signalV])
        var signalO2 = graph.insertEdge(
          parent,
          null,
          '',
          sensorChamber,
          gageO2,
          'strokeWidth=3;endArrow=block;endSize=2;endFill=1;strokeColor=black;rounded=1;'
        )
        signalO2.geometry.points = [new mxPoint(365, 250)]
        graph.orderCells(true, [signalO2])
        var signalCO2 = graph.insertEdge(
          parent,
          null,
          '',
          sensorChamber,
          gageCO2,
          'strokeWidth=3;endArrow=block;endSize=2;endFill=1;strokeColor=black;rounded=1;'
        )
        signalCO2.geometry.points = [new mxPoint(555, 250)]
        graph.orderCells(true, [signalCO2])
        var signalH = graph.insertEdge(
          parent,
          null,
          '',
          sensorChamber,
          gageH,
          'strokeWidth=3;endArrow=block;endSize=2;endFill=1;strokeColor=black;rounded=1;'
        )
        signalH.geometry.points = [new mxPoint(745, 250)]
        graph.orderCells(true, [signalH])
        var signalT = graph.insertEdge(
          parent,
          null,
          '',
          sensorChamber,
          gageT,
          'strokeWidth=3;endArrow=block;endSize=2;endFill=1;strokeColor=black;rounded=1;'
        )
        signalT.geometry.points = [new mxPoint(935, 250)]
        graph.orderCells(true, [signalT])
      } finally {
        graph.getModel().endUpdate()
      }
      var stateV = graph.view.getState(signalV)
      stateV.shape.node
        .getElementsByTagName('path')[0]
        .removeAttribute('visibility')
      stateV.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke-width', '6')
      stateV.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke', 'lightGray')
      stateV.shape.node
        .getElementsByTagName('path')[1]
        .setAttribute('class', 'flow')
      var stateO2 = graph.view.getState(signalO2)
      stateO2.shape.node
        .getElementsByTagName('path')[0]
        .removeAttribute('visibility')
      stateO2.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke-width', '6')
      stateO2.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke', 'lightGray')
      stateO2.shape.node
        .getElementsByTagName('path')[1]
        .setAttribute('class', 'flow')
      var stateCO2 = graph.view.getState(signalCO2)
      stateCO2.shape.node
        .getElementsByTagName('path')[0]
        .removeAttribute('visibility')
      stateCO2.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke-width', '6')
      stateCO2.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke', 'lightGray')
      stateCO2.shape.node
        .getElementsByTagName('path')[1]
        .setAttribute('class', 'flow')
      var stateH = graph.view.getState(signalH)
      stateH.shape.node
        .getElementsByTagName('path')[0]
        .removeAttribute('visibility')
      stateH.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke-width', '6')
      stateH.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke', 'lightGray')
      stateH.shape.node
        .getElementsByTagName('path')[1]
        .setAttribute('class', 'flow')
      var stateT = graph.view.getState(signalT)
      stateT.shape.node
        .getElementsByTagName('path')[0]
        .removeAttribute('visibility')
      stateT.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke-width', '6')
      stateT.shape.node
        .getElementsByTagName('path')[0]
        .setAttribute('stroke', 'lightGray')
      stateT.shape.node
        .getElementsByTagName('path')[1]
        .setAttribute('class', 'flow')
    }
  }

  exports('console_mx', console_mx)
})
