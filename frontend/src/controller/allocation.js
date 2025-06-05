layui.define(
  ['optionCharts'],
  function (exports) {
    var {
      optionChartAllocation,
      dataAllocationF,
      optionChartAllocationStat,
      dataAllocationStatF
    } = layui.optionCharts;

    function allocationDisplay(F_NumVar = 1, PlanSelect = "TP", ZoneSelect="Whole", waterQualitySelect = "TP", MOSSelect = "Default", ResultSelect="Load") {
      console.log('----call allocationDisplay----')
      var dataAllocation = dataAllocationF(F_NumVar, PlanSelect, MOSSelect);

      var Chart_StandardReachingOption = optionChartAllocation(dataAllocation, waterQualitySelect, F_NumVar);

      Chart_StandardReaching = echarts.init(document.getElementById('Chart_StandardReachingDiv'), null, {});

      Chart_StandardReaching.setOption(Chart_StandardReachingOption);

      var AllocationStatData = dataAllocationStatF(PlanSelect, MOSSelect);

      var Chart_LoadAllocationOption = optionChartAllocationStat(AllocationStatData, ZoneSelect, waterQualitySelect,
        ResultSelect);

      var Chart_LoadAllocation = echarts.init(document.getElementById('Chart_LoadAllocationDiv'), null, {});

      Chart_LoadAllocation.setOption(Chart_LoadAllocationOption);

      window.addEventListener('resize', function () {
        Chart_StandardReaching.resize();
        Chart_LoadAllocation.resize();
      });
    };
    exports('allocation', {
      allocationDisplay
    })
  })
