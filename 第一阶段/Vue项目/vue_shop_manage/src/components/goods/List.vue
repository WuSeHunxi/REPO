<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入要查询的内容" clearable v-model="queryInfo.query" @clear="getData">
            <el-button @click="getData" icon="el-icon-search" slot="append"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加商品</el-button>
        </el-col>
      </el-row>
      <el-table :data="goodslist" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格(元)"></el-table-column>
        <el-table-column prop="goods_weight" label="商品重量"></el-table-column>
        <el-table-column prop="add_time" label="创建时间">
          <template v-slot="scope">{{ scope.row.add_time | dateFormat }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="getById(scope.row.goods_id)"
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteGoodsList(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-size="queryInfo.pagesize"
        :page-sizes="[2,5,10]"
        layout="total, sizes, prev, pager, next,jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <el-dialog title="修改信息" :visible.sync="editVisibleDailog" width="50%" @close="editFormReset">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
        <el-form-item label="商品ID" prop="goods_id">
          <el-input v-model="editForm.goods_id"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="goods_price">
          <el-input v-model="editForm.goods_price"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="goods_number">
          <el-input v-model="editForm.goods_number"></el-input>
        </el-form-item>
        <el-form-item label="重量" prop="goods_weight">
          <el-input v-model="editForm.goods_weight"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisibleDailog = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      total: 0,
      goodslist: [],
      editVisibleDailog: false,
      editFormRules: {
        goods_name: [{ required: true, message: "", trigger: "blur" }],
        goods_price: [{ required: true, message: "", trigger: "blur" }],
        goods_number: [{ required: true, message: "", trigger: "blur" }],
        goods_weight: [{ required: true, message: "", trigger: "blur" }]
      },
      editForm: {}
    };
  },
  methods: {
    async getData() {
      const { data } = await this.$http.get("goods", {
        params: this.queryInfo
      });
      if (data.meta.status !== 200) {
        return this.$message.error("");
      }
      this.goodslist = data.data.goods;
      this.total = data.data.total;
      //   console.log(this.goodslist);
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getData();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getData();
    },
    async getById(id) {
      console.log(id);
      const { data } = await this.$http.get("goods/" + id);
      console.log(data);
      if (data.meta.status !== 200) {
        return this.$message.error("查询商品信息失败");
      }
      this.editForm = data.data;
      console.log(this.editForm);
      this.editVisibleDailog = true;
    },
    async editUser() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return;
        const { data } = await this.$http.put("goods/" + this.editForm.goods_id);
        console.log(data);
        if (data.meta.status !== 200) {
          return this.$message.error("修改商品信息失败");
        }
        this.$message.success(data.meta.msg);
        this.getData();
        this.editVisibleDailog = false;
      });
    },
    editFormReset() {},
    deleteGoodsList(id) {
      console.log(id);
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
</style>