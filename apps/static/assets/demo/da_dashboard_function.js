type = ['primary', 'info', 'success', 'warning', 'danger'];
demo_modify_function = {

  initDashboardPageCharts: function() {

    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
            beginAtZero: true // 设置X轴从0开始
          }
        }]
      }
    };


    

    // Function to generate random data for bubbles
    function generateData(count) {
      var data = [];
      for (var i = 0; i < count; i++) {
        data.push({
          x: randomInteger(0, 200), // Random x-coordinate
          y: randomInteger(0, 200), // Random y-coordinate
          r: randomInteger(5, 20)    // Random radius
        });
      }
      return data;
    }

    
    // 泡泡圖共三類
    var ctx = document.getElementById('bubbleChart_Category').getContext('2d');
    var data = {
      datasets: [{
        label: 'Category 1',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        data: generateData(20)
      }, {
        label: 'Category 2',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        data: generateData(20)
      }, {
        label: 'Category 3',
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
        data: generateData(20)
      }]
    };

    var myBubbleChart = new Chart(ctx, {
      type: 'bubble',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });



    // Function to generate random integer between min and max (inclusive)
    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }




    var ctx = document.getElementById('modelComparison').getContext('2d');

    var modelComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Model 1', 'Model 2'],
            datasets: [{
                label: 'Accuracy',
                data: [0.85, 0.78], // Replace with your actual accuracy values for each model
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'F1 Score',
                data: [0.82, 0.75], // Replace with your actual F1 score values for each model
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Model Performance Comparison'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });



    fetch('/static/assets/demo/treedata_for_work_demo.json')
    // fetch('/static/assets/demo/treedata_0318wr.json')

    .then(response => response.json())
    .then(data => {
      Highcharts.chart('treegraph_chart', data);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });



    // fetch('/static/assets/demo/sankey_diagram_data_0326wr_weibo.json')
    fetch('/static/assets/demo/sankey_diagram_data_0326wr_tiktok.json')
    // fetch('/static/assets/demo/sankey_diagram_data.json')
    .then(response => response.json())
    .then(data => {
      Highcharts.chart('sankey_diagram', data);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });



    // 預期Comparing Various ML models(ROC curve comparison)
    // 主圖 三Tab切換

    // 創建一個函數，將輸入的色碼和透明度轉換為相應的 rgba 格式
    function rgbaColor(color, alpha) {
      // 將色碼解析為 RGB 組件
      var matches = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      var r = parseInt(matches[1], 16);
      var g = parseInt(matches[2], 16);
      var b = parseInt(matches[3], 16);
      
      // 返回 rgba 格式的顏色
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }


    function LineChart(data, label, color, gradientStroke) {
      var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      gradientStroke.addColorStop(1, rgbaColor(color, 0.1));
      gradientStroke.addColorStop(0.4, rgbaColor(color, 0));
      gradientStroke.addColorStop(0, rgbaColor(color, 0)); //purple colors

      var dataset = {
          fill: true,
          backgroundColor: gradientStroke,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: data,
          label: label, // 使用傳入的標籤
          borderColor: color,
          pointBackgroundColor: color,
          pointHoverBackgroundColor: color,
          pointBorderWidth: 20,
          pointHoverRadius: 4
      };
      return dataset;
    }

    fetch('/static/assets/demo/data.json')
    .then(response => response.json())
    .then(data => {
        chart_labels = data.labels;
        chart_data = data.data_c0;
        chart_data_c0 = data.data_c0;
        chart_data_c1 = data.data_c1;
        chart_data_c2 = data.data_c2;

        var ctx = document.getElementById("chartBig2").getContext('2d');

        // 使用示例：
        var dataset1 = LineChart(chart_data_c0, 'Platform 1', '#d346b1', gradientStroke);
        var dataset2 = LineChart(chart_data_c1, 'Platform 2', '#EAC100', gradientStroke);
        var dataset3 = LineChart(chart_data_c2, 'Platform 3', '#00d6b4', gradientStroke);

        var config = {
          type: 'line',
          data: {
            labels: chart_labels,
            datasets: [dataset1, dataset2, dataset3]
          },
          options: {
            maintainAspectRatio: false,
            legend: {
              display: true
            }
          }
        };
        var myChartData_2 = new Chart(ctx, config);
        $("#00").click(function() {
          var data = myChartData_2.config.data;
          data.datasets[0].data = chart_data_c0;
          data.labels = chart_labels;
          myChartData_2.update();
        });
        $("#01").click(function() {
          var data = myChartData_2.config.data;
          data.datasets[0].data = chart_data_c1;
          data.labels = chart_labels;
          myChartData_2.update();
        });

        $("#02").click(function() {
          var data = myChartData_2.config.data;
          data.datasets[0].data = chart_data_c2;
          data.labels = chart_labels;
          myChartData_2.update();
        });
    })
    .catch(error => console.error('Error fetching data:', error));



    
    fetch('/static/assets/demo/combining_chart_data.json')
    .then(response => response.json())
    .then(data => {
      Highcharts.chart('combining_chart_types', {
        // 使用載入的數據配置圖表
        chart: {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        title: {
          text: null,
          align: 'left'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          labels: {
            style: {
              color: '#9e9e9e'
            }
          }
        },
        yAxis: {
          title: {
            text: 'Comment Counts'
          },
          labels: {
            style: {
              color: '#9e9e9e'
            }
          }
        },
        legend: {
          itemStyle: {
            color: '#9e9e9e'
          }
        },
        tooltip: {
          valueSuffix: ' Comment Counts'
        },
        plotOptions: {
          series: {
            borderRadius: '25%'
          }
        },
        series: data.series // 從 JSON 文件中設定數據系列
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });






    // 改成读json且加入image
    // fetch('/static/assets/demo/network_test_0328.json')
    fetch('/static/assets/demo/network_test_0402.json')
    .then(response => response.json())
    .then(data => {
        // 提供vis格式的数据
        const visNodes = data.nodes.map(node => ({
            id: node.id,
            label: node.label,
            image: node.imagePath,
            size: node.size,
            // 根据节点的不同设置不同的图片路径
            chosen: false // 确保特定节点的图片不会因事件变化而变化
        }));

        const container = document.getElementById('network');

        const networkData = {
            nodes: visNodes,
            edges: data.edges,
            size: data.size,
        };

        // 配色设置参考gradientBarChartConfiguration
        const options = {
            nodes: {
                fixed: false,
                font: '20px arial #9e9e9e',
                scaling: { label: true },
                shadow: true,
                shape: 'image',
                image: '/static/assets/img/user-origin.png',
                margin: 0
            },
            edges: {
                color: '#2b60a5',
                scaling: { label: true },
                shadow: true,
                width: 5
            },
            interaction: { hover: true },
        };

        // 初始化网络
        const network = new vis.Network(container, networkData, options);
        // 特定节点的标识函数，如前所述
        function isSpecialNode(nodeId) {
          return ['facebook_platform', 'youtube_platform', 'tiktok_platform', 'x_platform'].includes(nodeId);
        }

        network.on("hoverNode", function (params) {
          const nodeId = params.node;
          // 获取与悬停节点相连的所有节点和边
          const connectedNodes = network.getConnectedNodes(nodeId);
          const connectedEdges = network.getConnectedEdges(nodeId);

          if (isSpecialNode(nodeId)) {
              // 对于特定节点和它们相连的边和节点应用特定样式
              connectedEdges.forEach(edgeId => {
                  network.body.data.edges.update({
                      id: edgeId,
                      color: '#FFFFFF', // 例如，变为白色
                      width: 3, // 例如，宽度变为3
                  });
              });

              connectedNodes.forEach(connectedNodeId => {
                  if (!isSpecialNode(connectedNodeId)) {
                      network.body.data.nodes.update({
                          id: connectedNodeId,
                          image: '/static/assets/img/user-hover.png', // 更改图片
                          size: 50, // 改变大小
                      });
                  }
              });

              network.body.data.nodes.update({
                id: nodeId,
                size: 65,
              });
          } else {
              // 对于非特定节点，你可以在这里应用不同的样式
              // 例如，改变这个节点相连的边的样式为另一种
              connectedEdges.forEach(edgeId => {
                  network.body.data.edges.update({
                      id: edgeId,
                      color: '#FFFFFF', // 示例：变为灰色
                      width: 3, // 示例：稍微减小宽度
                  });
              });

              // 也可以选择更改非特定节点相连节点的样式
              connectedNodes.forEach(connectedNodeId => {
                  if (!isSpecialNode(connectedNodeId)) {
                      network.body.data.nodes.update({
                          id: connectedNodeId,
                          size: 45, // 示例：稍微减小大小
                          // 你可以决定是否要更改图片或其他属性
                      });
                  }
              });
              // 更新节点样式
              network.body.data.nodes.update({
                id: nodeId,
                size: 50,
                image: '/static/assets/img/user-hover.png',
              });
          }
        });

        // 在blurNode事件中添加逻辑来恢复原始样式
        network.on("blurNode", function (params) {
          const nodeId = params.node;
          const connectedNodes = network.getConnectedNodes(nodeId);
          const connectedEdges = network.getConnectedEdges(nodeId);

          // 逻辑来恢复边和节点的原始样式
          
          connectedEdges.forEach(edgeId => {
              network.body.data.edges.update({
                  id: edgeId,
                  color: '#2b60a5', // 恢复到原始颜色
                  width: 5, // 恢复到原始宽度
              });
          });
          if (isSpecialNode(nodeId)) {
          connectedNodes.forEach(connectedNodeId => {
              network.body.data.nodes.update({
                  id: connectedNodeId,
                  size: 43, // 恢复到原始大小
                  image: '/static/assets/img/user-origin.png', // 恢复到原始图片
              });
              network.body.data.nodes.update({
                id: nodeId,
                size: 55,
              });
          });
          } else {
            // 更新节点样式
            network.body.data.nodes.update({
              id: nodeId,
              size: 43,
              image: '/static/assets/img/user-origin.png',
            });
        }
        });


        // 边悬停和离开的事件处理
        network.on("hoverEdge", function (params) {
            network.body.data.edges.update({ id: params.edge, color: '#ffffff' });
        });

        network.on("blurEdge", function (params) {
            network.body.data.edges.update({ id: params.edge, color: '#2b60a5' });
        });

    })
    .catch(error => console.error('Error fetching data:', error));

  



    
    fetch('/static/assets/demo/pie_data.json')
    .then(response => response.json())
    .then(data => {
      Highcharts.chart('pie', {
        // 使用載入的數據配置圖表
        chart: {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        title: {
          text: null,
          align: 'left'
        },
        legend: {
          itemStyle: {
            color: '#9e9e9e'
          }
        },
        tooltip: {
          valueSuffix: ' Comment Counts'
        },
        plotOptions: {
          series: {
            borderRadius: '25%'
          }
        },
        series: data.series // 從 JSON 文件中設定數據系列
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });

















    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data", // 數據集的標籤 彈窗顯示
        fill: true, // 指定是否填充數據集下方的區域
        backgroundColor: gradientStroke, //指定填充區域的顏色（這裡使用了前面建立的漸變）
        // borderColor: '#d048b6', //指定線的顏色'#d048b6'
        borderColor: '#d048b6', //指定線的顏色'#d048b6'
        borderWidth: 2,//指定線的寬度
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [800, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });


    var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [90, 27, 60, 12, 80],
      }]
    };

    var myChart = new Chart(ctxGreen, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });




    fetch('/static/assets/demo/horizontal_bar_chart.json')
    .then(response => response.json())
    .then(data => {
      // 解析 JSON 数据并赋值给变量
      var labels = data.labels;
      var data = data.values;
      var ctx = document.getElementById("horizontal_bar_chart").getContext("2d");
      // 在这里可以使用 chart_labels 和 chart_data 进行其他操作
      var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        responsive: true,
        legend: {
            display: false
        },
        data: {
            labels: labels, // 将标签数据从 JSON 中读取
            datasets: [{
                label: "Countries",
                fill: true,
                backgroundColor: gradientStroke,
                hoverBackgroundColor: gradientStroke,
                borderColor: '#1f8ef1',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: data, // 将数据从 JSON 中读取
            }]
        },
        options: gradientBarChartConfiguration
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });


    


    


    


    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var myChart = new Chart(ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
        datasets: [{
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [503, 20, 10, 80, 100, 45],
        }]
      },
      options: gradientBarChartConfiguration
    });

  },





















  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },


  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },



  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8ec3b9"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1a3646"
          }]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#64779e"
          }]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#334e87"
          }]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6f9ba5"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3C7680"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#304a7d"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2c6675"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#b0d5ce"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3a4762"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#0e1626"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#4e6d70"
          }]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function(from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};