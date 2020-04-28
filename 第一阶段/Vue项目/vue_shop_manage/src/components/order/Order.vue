<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入查询内容" clearable @clear="getData" v-model="queryInfo.query">
            <el-button icon="el-icon-search" slot="append" @click="getData"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="orderlist" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="order_number" label="订单编号"></el-table-column>
        <el-table-column prop="order_price" label="订单价格"></el-table-column>
        <el-table-column prop="order_pay" label="是否付款">
          <template v-slot="scope">
            <el-tag type="success" v-if="scope.row.pay_status === '1'">已付款</el-tag>
            <el-tag type="warning" v-if="scope.row.pay_status === '0'">未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货"></el-table-column>
        <el-table-column prop="create_time" label="下单时间"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="editVisibleDialog = true"
            ></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-location"
              @click="getLocation(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-size="queryInfo.pagesize"
        :page-sizes="[5,10,20]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <el-dialog title="修改信息" :visible.sync="editVisibleDialog" width="50%" @close="editFormReset">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="100px">
        <el-form-item label="省市区/县" prop="address1">
          <el-cascader :options="cityData" v-model="editForm.address1" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address2">
          <el-input v-model="editForm.address2" placeholder></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisibleDialog = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="物流信息" :visible.sync="locationDialogVisible" width="50%">
      <el-timeline>
        <el-timeline-item
          v-for="(item,index) in locationData"
          :key="index"
          :timestamp="item.time"
        >{{item.context}}</el-timeline-item>
      </el-timeline>
      <div slot="footer">
        <el-button @click="locationDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="locationDialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import cityData from "./citydata";
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      orderlist: [],
      total: 0,
      editVisibleDialog: false,
      editForm: {
        address1: [],
        address2: ""
      },
      editFormRules: {
        address1: [
          { required: true, message: "请选择省市区/县", trigger: "blur" }
        ],
        address2: [
          { required: true, message: "请选择详细地址", trigger: "blur" }
        ]
      },
      provinceArr: [],
      cityData,
      locationDialogVisible: false,
      locationData: []
    };
  },
  methods: {
    async getData() {
      const { data } = await this.$http.get("orders", {
        params: this.queryInfo
      });
      if (data.meta.status !== 200) {
        return this.$message.error("获取失败");
      }
      //   this.$message.success(data.meta.msg);
      this.orderlist = data.data.goods;
      this.total = data.data.total;
      console.log(data);
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getData();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getData();
    },
    handleChange() {},
    editFormReset() {
      this.$refs.editFormRef.resetFields();
    },
    editUser() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return;
        const { data } = await this.$http.put("order/" + this.editForm.id);
        if (data.meta.status !== 200) {
          this.$message.error("修改订单信息失败");
        }
        this.$message.success("修改订单信息成功");
        this.editVisibleDialog = false;
      });
    },
    async getLocation(id) {
      const { data } = await this.$http.get("kuaidi/" + id);
      if (data.meta.status !== 200) {
        return this.$message.error("获取物流信息失败");
      }
      this.locationData = data.data;
      console.log(data);
      this.locationDialogVisible = true;
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
.el-cascader {
  width: 100%;
}
</style>