<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="main" style="width: 750px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";

export default {
  data() {
    return {
      options: {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#E9EEF3"
            }
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ]
      }
    };
  },
  methods: {},
  async mounted() {
    const myChart = echarts.init(document.getElementById("main"));
    const { data } = await this.$http.get("reports/type/1");
    if (data.meta.status !== 200) {
      return this.$message.error("获取数据报表失败");
    }
    this.$message.success(data.meta.msg);
    const result = _.merge(data.data, this.options);
    myChart.setOption(result);
    console.log(data);
  }
};
</script>
<style scoped>
</style>