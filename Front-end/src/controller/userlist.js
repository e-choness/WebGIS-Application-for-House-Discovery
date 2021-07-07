/**

 @Name：layuiAdmin 内容系统
 @Author：star1029
 @Site：http://www.layui.com/admin/
 @License：LPPL
    
 */

layui.define(["table", "form"], function (exports) {
  var $ = layui.$,
    admin = layui.admin,
    view = layui.view,
    table = layui.table,
    form = layui.form,
    setter = layui.setter,
    request = setter.request;
  //菜单管理
  const headers = {};
  headers[request.tokenName] = layui.sessionData(setter.tableName)[
    request.tokenName
  ];

  //用户管理
  table.render({
    elem: "#LAY-app-content-list",
    url: "http://36.7.72.89:8102/user", //模拟接口
    headers,
    cols: [
      [
        {
          type: "checkbox",
          fixed: "left",
        },
        {
          field: "id",
          width: 100,
          title: "用户ID",
          sort: true,
        },
        {
          field: "user_name",
          title: "用户名",
        },
        {
          field: "gender",
          title: "性别",
          minWidth: 100,
        },
        {
          field: "email",
          title: "用户邮箱",
          minWidth: 100,
        },
        {
          field: "phone",
          title: "用户电话",
          minWidth: 100,
        },
        {
          field: "createdtime",
          title: "创建时间",
          sort: true,
        },
        {
          field: "status",
          title: "用户状态",
          templet: "#buttonTpl",
          minWidth: 80,
          align: "center",
        },
        {
          title: "操作",
          minWidth: 150,
          align: "center",
          fixed: "right",
          toolbar: "#table-content-list",
        },
      ],
    ],
    page: true,
    limit: 10,
    limits: [10, 15, 20, 25, 30],
    text: "对不起，加载出现异常！",
  });

  //监听工具条
  table.on("tool(LAY-app-content-list)", function (obj) {
    var data = obj.data;
    let res = this.getAttribute("class").split(" ");
    if (res.indexOf("layui-btn-disabled") !== -1) return;
    if (obj.event === "del") {
      layer.confirm("确定删除此用户？", function (index) {
        admin.req({
          type: "DELETE",
          url: "http://36.7.72.89:8102/user/" + data.id,
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
        title: "编辑用户",
        area: ["550px", "550px"],
        id: "LAY-popup-content-edit",
        success: function (layero, index) {
          view(this.id)
            .render("app/content/userform", data)
            .done(function () {
              form.render(null, "layuiadmin-app-form-list");

              //监听提交
              form.on("submit(layuiadmin-app-form-submit)", function (data) {
                var field = data.field; //获取提交的字段
                var mr = [];
                var data = {};
                Object.keys(field).forEach((i) => {
                  if (i.indexOf("roles") != -1) {
                    const id = parseInt(i.split("-")[2]);
                    mr.push(id);
                  } else {
                    data[i] = field[i];
                  }
                });
                data.roles = mr;
                //提交 Ajax 成功后，关闭当前弹层并重载表格
                //$.ajax({});
                admin.req({
                  type: "PUT",
                  url: "http://36.7.72.89:8102/user/" + data.id,
                  data: data,
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
  exports("userlist", {});
});
