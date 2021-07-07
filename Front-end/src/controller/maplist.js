/**

 @Name：layuiAdmin 内容系统
 @Author：star1029
 @Site：http://www.layui.com/admin/
 @License：LPPL
    
 */

layui.define(["table", "form", "excel"], function (exports) {
  var $ = layui.$,
    admin = layui.admin,
    view = layui.view,
    table = layui.table,
    excel = layui.excel,
    form = layui.form,
    setter = layui.setter,
    request = setter.request;
  //菜单管理
  const headers = {};
  headers[request.tokenName] = layui.sessionData(setter.tableName)[
    request.tokenName
  ];

  table.render({
    elem: "#LAY-app-content-list",
    url: "http://36.7.72.89:8102/mapdata", //模拟接口
    headers,
    toolbar: "#toolbarDemo", //操作1:启用自定义模板表格头部工具栏
    cols: [
      [
        {
          type: "checkbox",
          fixed: "left",
        },
        {
          field: "province",
          title: "省份",
          sort: true,
          minWidth: 50,
        },
        {
          field: "city",
          title: "城市",
          sort: true,
          minWidth: 60,
        },
        {
          field: "address",
          title: "地址",
        },

        {
          field: "code",
          title: "stcd编号",
          minWidth: 40,
          event: "code",
          templet: function (d) {
            return (
              '<p class="layui-table-link" style="cursor:pointer">' +
              d.code +
              "</p>"
            );
            // return "<a class='layui-table-link' target='_blank' stcd=" + d.code + " href=" + "/src/views/database/code.html?" +  d.code + ">" + d.code + "</a>";
          },
        },
        {
          field: "rvnm",
          title: "河流名称",
        },
        {
          field: "name",
          title: "站点名",
        },
        {
          field: "lon",
          title: "经度",
          maxWidth: 20,
        },
        {
          field: "lat",
          title: "纬度",
          maxWidth: 20,
        },
        {
          field: "type",
          title: "站点类型",
          minWidth: 50,
        },
        {
          field: "tm",
          title: "创建时间",
          minWidth: 100,
        },

        {
          title: "操作",
          minWidth: 150,
          align: "center",
          fixed: "right",
          minWidth: 200,
          toolbar: "#table-content-list",
        },
      ],
    ],
    page: true,
    limit: 10,
    limits: [10, 15, 20, 25, 30],
    text: "对不起，加载出现异常！",
  });

  //监听表头，注意是要用toolbar
  table.on("toolbar(LAY-app-content-list)", function (obj) {
    if (obj.event === "table_export") {
      //使用ajax请求获取所有数据
      console.log("--export table---");
      admin.req({
        url: "http://36.7.72.89:8102/mapdata",
        type: "GET",
        success: function (res) {
          //使用table.exportFile()导出数据
          table.exportFile("LAY-app-content-list", res.data, "xls");
        },
      });
    }
  });

  //监听工具条
  table.on("tool(LAY-app-content-list)", function (obj) {
    // var checkStatus = table.checkStatus(obj.config.id),
    // 			data = checkStatus.data;
    var data = obj.data;
    // let res = this.getAttribute("class").split(" ");
    // if (res.indexOf("layui-btn-disabled") !== -1) return;
    console.log(obj.event);

    if (obj.event === "code") {
      // 详情
      console.log(data);
      var index = layui.layer.open({
        title: "站点" + data.code + "详情",
        type: 2,
        content: "/src/views/database/code.html",
        success: function (layero, index) {
          setTimeout(function () {
            layui.layer.tips(
              "点击此处返回列表",
              ".layui-layer-setwin .layui-layer-close",
              {
                tips: 3,
              }
            );
          }, 500);
        },
      });
      layui.layer.full(index);
      $(window).on("resize", function () {
        //  console.log('---resize---')
        layui.layer.full(index);
      });
    } else if (obj.event === "del") {
      layer.confirm("确定删除此菜单？", function (index) {
        admin.req({
          type: "DELETE",
          url: "http://36.7.72.89:8102/menu/" + data.id,
          success: function (res) {
            table.reload("LAY-app-content-list");
            layer.msg("已删除");
          },
        });
        table.reload("LAY-app-content-list");
        layer.close(index);
      });
    } else if (obj.event === "edit") {
      admin.popup({
        title: "编辑菜单",
        area: ["550px", "550px"],
        id: "LAY-popup-content-edit",
        success: function (layero, index) {
          console.log("admin popup");
          console.log(data);
          view(this.id)
            .render("app/content/menuform", data)
            .done(function () {
              form.render(null, "layuiadmin-app-form-list");
              console.log("编辑菜单");
              //监听提交
              form.on("submit(layuiadmin-app-form-submit)", function (data) {
                var field = data.field; //获取提交的字段
                console.log(field);
                //提交 Ajax 成功后，关闭当前弹层并重载表格
                //$.ajax({});
                admin.req({
                  type: "PUT",
                  url: "http://36.7.72.89:8102/menu/" + field.id,
                  data: field,
                  success: function (res) {
                    table.reload("LAY-app-content-list"); //重载表格
                    layer.close(index); //执行关闭
                  },
                });
                // layui.table.reload('LAY-app-content-list'); //重载表格
                // layer.close(index); //执行关闭
              });
            });
        },
      });
    }
  });

  // $(".export").click(function(){
  //   var ins1=table.render({
  //       elem: '#data_export',
  //       url: "url", //数据接口
  //       method: 'post',
  //       title: '表名',
  //       where: {
  //           mycode: "all"
  //       },
  //       limit: 10,
  //       cols: [[
  //           {field: 'id', title: 'ID'},
  //           {field: 'name', title: '名字'},
  //       ]],
  //       done: function (res, curr, count) {
  //           exportData=res.data;
  //           table.exportFile(ins1.config.id,exportData, 'xls');
  //       }
  //   });
  // })

  exports("maplist", {});
});
