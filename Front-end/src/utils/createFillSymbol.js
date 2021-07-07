layui.define(function (exports) {
  createFillSymbol: function createFillSymbol(value, color) {
    return {
      value: value,
      symbol: {
        color: color,
        type: "simple-fill",
        style: "solid",
        outline: {
          style: "none",
          width: "0px"
        }
      },
      label: value
    };
  }

  exports('createFillSymbol',{createFillSymbol})
})
