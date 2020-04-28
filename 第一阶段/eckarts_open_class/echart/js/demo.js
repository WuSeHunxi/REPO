(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
  };
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      right: "10%",
      textSize: {
        color: "#4c9bfd",
      },
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true,
    },
    toolbox: {},
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)",
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)",
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    series: [
      {
        name: "新增粉丝",
        type: "line",
        smooth: true,
        data: data.year[0],
      },
      {
        name: "新赠游客",
        type: "line",
        smooth: true,
        data: data.year[1],
      },
    ],
  };

  myChart.setOption(option);
})();
