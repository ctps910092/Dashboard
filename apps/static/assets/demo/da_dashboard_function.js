type = ['primary', 'info', 'success', 'warning', 'danger'];



  // 除了 Chart.js，還有其他一些流行的 JavaScript 圖表庫可以用來創建各種類型的圖表。以下是一些常見的選擇：

  // D3.js: D3.js 是一個功能強大且靈活的 JavaScript 库，用於創建交互式數據視覺化。它提供了豐富的功能和彈性，可以用來創建各種類型的圖表，包括但不限於折線圖、柱狀圖、散點圖、熱力圖等。
  // Plotly.js: Plotly.js 是一個開源的 JavaScript 圖表庫，提供了豐富的功能和簡單易用的 API，用於創建各種類型的交互式圖表，包括線性圖、散點圖、直方圖、熱力圖等。它也支持在 Jupyter Notebook 等環境中使用。
  // Highcharts: Highcharts 是一個商業級的 JavaScript 圖表庫，提供了豐富的圖表類型和各種定製選項。它易於使用且具有豐富的文檔和示例。
  // Google Charts: Google Charts 是由 Google 提供的一個免費的 JavaScript 圖表庫，提供了各種圖表類型和配置選項，可以用於創建各種類型的靜態圖表。
  // amCharts: amCharts 是一個功能豐富的 JavaScript 圖表庫，提供了各種交互式圖表類型，包括線性圖、柱狀圖、地圖、熱力圖等。它具有豐富的特性和配置選項。
  // 這些圖表庫各有其特點和用途，您可以根據自己的需求和偏好來選擇適合的庫來創建圖表。






// 參考 gradientBarChartConfiguration 配色設定

function drawHeatmap() {
  // set the dimensions and margins of the graph
  var margin = {top: 0, right: 25, bottom: 30, left: 40},
    width = 450 - margin.left - margin.right,
    height = 220 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#heatmap")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  //Read the data
  d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function(data) {

    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    var myGroups = d3.map(data, function(d){return d.group;}).keys()
    var myVars = d3.map(data, function(d){return d.variable;}).keys()

    // Build X scales and axis:
    var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(myGroups)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain").remove()

    // Build Y scales and axis:
    var y = d3.scaleBand()
      .range([ height, 0 ])
      .domain(myVars)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain").remove()

    // Build color scale
    var myColor = d3.scaleSequential()
      .interpolator(d3.interpolateInferno)
      .domain([1,100])

    // create a tooltip
    var tooltip = d3.select("#heatmap")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "#f5f5f5")
      .style("border", "solid")
      .style("border-width", "0px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      tooltip
        .style("opacity", 1)
      d3.select(this)
        .style("stroke", "#f5f5f5")
        .style("opacity", 1)
    }
    var mousemove = function(d) {
      tooltip
        .html("The exact value of<br>this cell is: " + d.value)
        .style("left", (d3.mouse(this)[0]+70) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    }
    var mouseleave = function(d) {
      tooltip
        .style("opacity", 0)
      d3.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
    }

    // add the squares
    svg.selectAll()
      .data(data, function(d) {return d.group+':'+d.variable;})
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.group) })
        .attr("y", function(d) { return y(d.variable) })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return myColor(d.value)} )
        .style("stroke-width", 4)
        .style("stroke", "none")
        .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
  })
}



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

    // 主圖 三Tab切換
    fetch('/static/assets/demo/data.json')
    .then(response => response.json())
    .then(data => {
        chart_labels = data.labels;
        chart_data = data.data_c0;
        chart_data_c0 = data.data_c0;
        chart_data_c1 = data.data_c1;
        chart_data_c2 = data.data_c2;

        var ctx = document.getElementById("chartBig1").getContext('2d');

        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
        gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
        var config = {
          type: 'line',
          data: {
            labels: chart_labels,
            datasets: [{
              label: "label~My First dataset****",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: '#d346b1',
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#d346b1',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#d346b1',
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: chart_data_c0,
            }]
          },
          options: gradientChartOptionsConfigurationWithTooltipPurple
        };
        var myChartData = new Chart(ctx, config);
        $("#0").click(function() {
          var data = myChartData.config.data;
          data.datasets[0].data = chart_data_c0;
          data.labels = chart_labels;
          myChartData.update();
        });
        $("#1").click(function() {
          // var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
          var data = myChartData.config.data;
          data.datasets[0].data = chart_data_c1;
          data.labels = chart_labels;
          myChartData.update();
        });

        $("#2").click(function() {
          // var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
          var data = myChartData.config.data;
          data.datasets[0].data = chart_data_c2;
          data.labels = chart_labels;
          myChartData.update();
        });
    })
    .catch(error => console.error('Error fetching data:', error));


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


    // // 隨機產生100資料的泡泡圖
    // var ctx = document.getElementById('bubbleChart').getContext('2d');
    // var data = [];

    // // Generate random data points
    // for (var i = 0; i < 100; i++) {
    //   data.push({
    //     x: Math.random() * 100,
    //     y: Math.random() * 100,
    //     r: Math.random() * 30, // Adjust the radius range as needed
    //   });
    // }

    // var myBubbleChart = new Chart(ctx, {
    //   type: 'bubble',
    //   data: {
    //     datasets: [{
    //       label: 'Bubble Chart Example',
    //       data: data,
    //       backgroundColor: 'rgba(133, 99, 132, 0.6)', // Adjust the background color
    //       borderColor: 'rgba(133, 99, 132, 1)',
    //       borderWidth: 2,
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }],
    //       xAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });




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




    // 改成讀json且加入image

    fetch('/static/assets/demo/network.json')
    .then(response => response.json())
    .then(data => {

      // provide the data in the vis format
      var visNodes = data.nodes.map(node => {
        return {
            id: node.id,
            label: node.label,
            image: node.image, // 根據節點的不同設置不同的圖片路徑
        };
      });


      // create a network
      var container = document.getElementById('network');

      // provide the data in the vis format
      var data = {
        nodes: visNodes,
        edges: data.edges
      };
      // 參考 gradientBarChartConfiguration 配色設定
      var options = {
        nodes:{
            color: '#ffffff',
            fixed: false,
            font: '20px arial #9e9e9e',
            scaling: {
                label: true
            },
            shadow: true,
            // shape: 'circle',
            shape: 'image',
            size: 43,
            // image:'/static/assets/img/code.png',
            margin: 5
        },
        edges: {
            arrows: 'to',
            color: '#9e9e9e',
            scaling: {
                label: true,
            },
            shadow: true,
        }
      };

      // initialize your network!
      var network = new vis.Network(container, data, options);

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });




    // highcharts.js
    $('#density_heatmap').highcharts({

      // title: {
      //   text: 'Random points locations',
      // },
      // subtitle: {
      //   text: 'Sometimes your data samples are not not in a pretty grid, but looks nice and smooth anyway ;)',
      // },
      title: null,
      subtitle: null,

      chart: {
          type: 'contour',
          inverted: false,
          backgroundColor: 'rgba(0, 0, 0, 0)', // 将背景色设置为透明
          events: {
            load: function () {
                var chart = this;
                var plotLeft = chart.plotLeft;
                var plotTop = chart.plotTop;
                // 添加图像到底层
                chart.renderer.image('/static/assets/img/cat.jpg', 
                plotLeft+37, plotTop+49, chart.plotWidth-74, chart.plotHeight-98) // 图像的位置和大小
                    .add();
            }
          },
      },
      xAxis: {
          categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura','Timd', 'Laudra'],
          // min: -100,
          // max: 100,
          labels: {
            style: {
                color: '#9e9e9e' // 将 X 轴标签颜色设置为白色
            }
          }
      },
      yAxis: {
          categories: ['categories1', 'categories2', 'categories3', 'categories4', 'categories5'],
          // min: -100,
          // max: 100,
          title: null,
          labels: {
            style: {
                color: '#9e9e9e' // 将 X 轴标签颜色设置为白色
            }
          }
      },
     colorAxis: {
          stops: [
               [0, 'rgba(89, 116, 255, 0.6)'],
              [0.5, 'rgba(127, 255, 89, 0.6)'],
              [0.9, 'rgba(255, 175, 89, 0.6)']
          ],
          labels: {
            style: {
                color: '#9e9e9e' // 将 X 轴标签颜色设置为白色
            }
          }
  
      },
      series: [{
          borderWidth: 0,
          data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91],[10, 0, 47], [10, 1, 114], [10, 2, 31], [10, 3, 48], [10, 4, 91]],
          tooltip: {
              headerFormat: 'Temperature<br/>',
              pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
          }
      }]
  
    });






  



    fetch('/static/assets/demo/treeData.json')
    .then(response => response.json())
    .then(data => {
      Highcharts.chart('treegraph_chart', data);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });

    // Highcharts.chart('container', {
    //   chart: {
    //       spacingBottom: 30,
    //       marginRight: 120,
    //       height: 1200
    //   },
    //   title: {
    //       text: 'Phylogenetic language tree'
    //   },
    //   series: [
    //       {
    //           type: 'treegraph',
    //           keys: ['parent', 'id', 'level'],
    //           clip: false,
              // data: [],
    //           marker: {
    //               symbol: 'circle',
    //               radius: 6,
    //               fillColor: '#ffffff',
    //               lineWidth: 3
    //           },
    //           dataLabels: {
    //               align: 'left',
    //               pointFormat: '{point.id}',
    //               style: {
    //                   color: '#000000',
    //                   textOutline: '3px #ffffff',
    //                   whiteSpace: 'nowrap'
    //               },
    //               x: 24,
    //               crop: false,
    //               overflow: 'none'
    //           },
    //           levels: [
    //               {
    //                   level: 1,
    //                   levelIsConstant: false
    //               },
    //               {
    //                   level: 2,
    //                   colorByPoint: true
    //               },
    //               {
    //                   level: 3,
    //                   colorVariation: {
    //                       key: 'brightness',
    //                       to: -0.5
    //                   }
    //               },
    //               {
    //                   level: 4,
    //                   colorVariation: {
    //                       key: 'brightness',
    //                       to: 0.5
    //                   }
    //               },
    //               {
    //                   level: 6,
    //                   dataLabels: {
    //                       x: 10
    //                   },
    //                   marker: {
    //                       radius: 4
    //                   }
    //               }
    //           ]
    //       }
    //   ]
    // });









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