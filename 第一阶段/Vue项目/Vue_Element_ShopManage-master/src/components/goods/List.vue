<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" clearable v-model="queryInfo.query" @clear="getGoodsList">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="handleCurrentChange(1);getGoodsList;"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddPage">添加商品</el-button>
        </el-col>
      </el-row>

      <!-- table表格区 -->
      <el-table :data="goodslist" stripe border style="width: 100%">
        <!-- 索引列 -->
        <el-table-column type="index"></el-table-column>
        <!-- 其他列 -->
        <el-table-column prop="goods_name" label="商品名称"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格（元）" width="95px"></el-table-column>
        <el-table-column prop="goods_weight" label="商品重量" width="70px"></el-table-column>
        <!-- 时间自定义渲染，因此也需要插操 -->
        <el-table-column prop="add_time" label="创建时间" width="170px">
          <template v-slot="scope">{{ scope.row.add_time | dateFormat }}</template>
        </el-table-column>
        <!-- 操作列需要使用作用域插槽 -->
        <el-table-column label="操作" width="130px">
          <template v-slot="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-delete"
              @click="removeById(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[10, 20, 50]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10//每页显示的条数
      },
      goodslist: [],
      total: 0
    };
  },
  methods: {
    async getGoodsList() {
      const { data } = await this.$http.get("goods", {
        params: this.queryInfo
      });
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.goodslist = data.data.goods;
      this.total = data.data.total;
    },
    //触发该函数就可以拿到最新pageSize
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getGoodsList();
    },
    //当前的页码值改变 
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getGoodsList();
    },
    //删除
    removeById(id) {
      //返回的是Promise
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const { data } = await this.$http.delete(`goods/${id}`);
          if (data.meta.status !== 200) {
            return this.$message.error(data.meta.msg);
          }
          this.getGoodsList();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {//捕获用户的取消行为
          // this.$message({
          //   type: "info",
          //   message: "已取消删除"
          // });
          this.$message.info("已取消删除")
        });
    },
    //点击跳转添加页面
    goAddPage() {
      this.$router.push("goods/add");
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>

<style lang="less" scoped></style>
