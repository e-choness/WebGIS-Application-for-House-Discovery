layui.define(function(exports) {
  // callback params: {info: [], value: []}
  function readWorkbookFromRemoteFile(url, callback) {
    var res = {
      info: [],
      value: []
    }

    var xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = function(e) {
      if (xhr.status == 200) {
        var data = new Uint8Array(xhr.response)
        var workbook = XLSX.read(data, {
          type: 'array'
        })
        // console.log(workbook);
        var sheetNames = workbook.SheetNames // 工作表名称集合
        var info = {}
        sheetNames.forEach(element => {
          if (element === workbook.SheetNames[0]) {
            let worksheet = workbook.Sheets[element]
            let worksheet_json = XLSX.utils.sheet_to_json(worksheet)

            for (let i = 0; i < worksheet_json.length; i++) {
              // console.log(worksheet_json[i]);

              Object.keys(worksheet_json[i]).forEach((key, index) => {
                if (!info[key]) info[key] = []
                info[key].push(worksheet_json[i][key])
              })

              // console.log(info);
            }

            res.info.push(info)
          } else {
            var temp = {
              Index: element,
              value: {}
            }

            let worksheet = workbook.Sheets[element]
            let worksheet_json = XLSX.utils.sheet_to_json(worksheet)
            console.log('workbook length: ', worksheet_json.length)
            for (let i = 0; i < worksheet_json.length; i++) {
              // if (worksheet_json[i].H && worksheet_json[i].V != undefined) {
              //   tmp.push([worksheet_json[i].H, worksheet_json[i].V]);
              // }
              var k

              Object.keys(worksheet_json[i]).forEach((key, index) => {
                if (index === 0) {
                  k = key
                }
                if (
                  worksheet_json[i][k] !== undefined &&
                  worksheet_json[i][key] !== undefined
                ) {
                  if (!temp.value[key]) temp.value[key] = []
                  temp.value[key].push([
                    worksheet_json[i][k],
                    worksheet_json[i][key]
                  ])
                }
              })
            }

            res.value.push(temp)
          }
        })
        console.log(res)
        if (callback) return callback(res)
        else return res
      }
    }
    xhr.send()
  }

  exports('readWorkbookFromRemoteFile', {
    readWorkbookFromRemoteFile
  })
})
