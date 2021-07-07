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
    setter = layui.setter,
    request = setter.request,
    form = layui.form;

  const headers = {};
  headers[request.tokenName] = layui.sessionData(setter.tableName)[
    request.tokenName
  ];
  //角色管理
  table.render({
    elem: "#LAY-app-content-list",
    url: "http://36.7.72.89:8102/role", //模拟接口
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
          title: "角色ID",
          sort: true,
        },
        {
          field: "role_name",
          title: "角色名",
        },
        {
          field: "label",
          title: "角色标签",
          minWidth: 100,
        },
        {
          field: "desc",
          title: "角色描述",
          minWidth: 100,
        },
        {
          field: "createdtime",
          title: "创建时间",
          sort: true,
        },
        {
          field: "status",
          title: "角色状态",
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
    console.log("--编辑角色--");
    console.log(obj);
    var data = obj.data;
    var id = data.id;
    let res = this.getAttribute("class").split(" ");
    if (res.indexOf("layui-btn-disabled") !== -1) return;
    if (obj.event === "del") {
      layer.confirm("确定删除此角色？", function (index) {
        admin.req({
          type: "DELETE",
          url: "http://36.7.72.89:8102/role/" + data.id,
          success: function (res) {
            table.reload("LAY-app-content-list");
            layer.msg("已删除");
          },
        });
        layer.close(index);
      });
    } else if (obj.event === "edit") {
      admin.popup({
        title: "编辑角色",
        area: ["550px", "550px"],
        id: "LAY-popup-content-edit",
        success: function (layero, index) {
          view(this.id)
            .render("app/content/roleform", data)
            .done(function () {
              form.render(null, "layuiadmin-app-form-list");

              //监听提交
              form.on("submit(layuiadmin-app-form-submit)", function (data) {
                var field = data.field; //获取提交的字段
                var mr = [];
                var data = {};
                Object.keys(field).forEach((i) => {
                  if (i.indexOf("authids") !== -1) {
                    mr.push(parseInt(field[i]));
                  } else {
                    data[i] = field[i];
                  }
                });
                data.menus = mr;
                console.log("---edit----");
                console.log(data);
                //提交 Ajax 成功后，关闭当前弹层并重载表格
                //$.ajax({});
                admin.req({
                  type: "PUT",
                  url: "http://36.7.72.89:8102/role/" + id,
                  data: data,
                  success: function (res) {
                    table.reload("LAY-app-content-list"); //重载表格
                    layer.close(index); //执行关闭
                  },
                });
                layui.table.reload("LAY-app-content-list"); //重载表格
                layer.close(index); //执行关闭
              });
            });
        },
      });
    }
  });
  exports("rolelist", {});
});
