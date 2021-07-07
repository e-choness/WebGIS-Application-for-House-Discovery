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
  console.log(headers);
  table.render({
    elem: "#LAY-app-content-list",
    url: "http://36.7.72.89:8102/menu", //模拟接口
    headers,
    cols: [
      [
        {
          type: "checkbox",
          fixed: "left",
        },
        {
          field: "id",
          width: 50,
          title: "菜单ID",
          sort: true,
        },
        {
          field: "menu_name",
          title: "菜单名",
          sort: true,
        },
        {
          field: "title",
          title: "菜单显示",
        },
        {
          field: "menu_url",
          title: "菜单路径",
        },
        {
          field: "parent_id",
          title: "父级菜单",
          maxWidth: 20,
        },
        {
          field: "level",
          title: "菜单级别",
          maxWidth: 20,
        },
        {
          field: "order",
          title: "菜单顺序",
          maxWidth: 20,
        },
        {
          field: "icon",
          title: "菜单图标",
          minWidth: 200,
          templet: function (d) {
            var cls = '"layui-icon ' + d.icon + '"';
            return "<i class=" + cls + "></i>" + " " + d.icon;
          },
        },
        {
          field: "permission",
          title: "权限标识",
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

  //监听工具条
  table.on("tool(LAY-app-content-list)", function (obj) {
    var data = obj.data;
    let res = this.getAttribute("class").split(" ");
    if (res.indexOf("layui-btn-disabled") !== -1) return;
    if (obj.event === "del") {
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
          console.log(data)
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
  exports("menulist", {});
});
