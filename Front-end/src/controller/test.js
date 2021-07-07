var popupElement = document.createElement("div");
popupElement.innerHTML = "<b>断面索引号: </b> {Index} <br><b>断面名称: </b> {Name} <br><b>经度: </b> {X}<br><b>纬度: </b> {Y}<br><b>距离入南淝河口: </b> {Series} km<br>" +
  `
            <div id='HistorianDataDiv' style='height:800px;width:370px;'>
              <div id='chartBoxplot' class='chartBoxplot_class' style='height:30px;width:370px';></div>
              <div id='chartLineplot' class='chartLineplot_class' style='height:300px;width:370px';></div>
            </div>
          `;

console.log(popupElement.innerHTML)
