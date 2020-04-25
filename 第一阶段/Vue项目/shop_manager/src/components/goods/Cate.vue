<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCateDialog">添加分类</el-button>
        </el-col>
      </el-row>
      <tree-table
        :data="cateList"
        border
        :selection-type="false"
        :expand-type="false"
        class="TreeTable"
        index-text="#"
        show-index
        :columns="columns"
      >
        <template v-slot:isok="scope">
          <i class="el-icon-success" v-if="!scope.row.cat_deleted" style="color:lightgreen"></i>
          <i class="el-icon-error" v-else style="color:red"></i>
        </template>
        <template v-slot:order="scope">
          <el-tag size="mini" v-if="scope.row.cat_level=='0'">一级</el-tag>
          <el-tag size="mini" v-if="scope.row.cat_level=='1'" type="success">二级</el-tag>
          <el-tag size="mini" v-if="scope.row.cat_level=='2'" type="warning">三级</el-tag>
        </template>
        <template slot="opt">
          <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button size="mini" type="warning" icon="el-icon-delete">删除</el-button>
        </template>
      </tree-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[3,5,10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <el-dialog
      title="添加分类"
      width="50%"
      :visible.sync="addCateDialogVisible"
      @close="addCateDialogClosed"
    >
      <el-form ref="addCateFormRef" :rules="addCateFormRules" :model="addCateForm" width="100px">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类：">
          <el-cascader
            :options="parentCateList"
            :props="cascadarProps"
            clearable
            v-model="selectKeys"
            @change="parentCateChanged"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addCateDialogVisible=false">取消</el-button>
        <el-button type="primary" @click="addCate">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateList: [],
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      columns: [
        {
          label: "分类名称",
          prop: "cat_name"
        },
        {
          label: "是否有效",
          type: "template",
          template: "isok"
        },
        {
          label: "排序",
          type: "template",
          template: "order"
        },
        {
          label: "操作",
          type: "template",
          template: "opt"
        }
      ],
      addCateDialogVisible: false,
      addCateForm: {
        cat_name: "",
        cat_pid: 0,
        cat_level: 0
      },
      addCateFormRules: {
        cat_name: [
          { required: true, message: "请输入分类名称", trigger: "blur" }
        ]
      },
      cascadarProps: {
        expandTrigger: "hover",
        value: "cat_id",
        label: "cat_name",
        children: "children",
        checkStrictly: true
      },
      parentCateList: [],
      selectKeys: []
    };
  },
  methods: {
    async getCateList() {
      const { data } = await this.$http.get("categories", {
        params: this.queryInfo
      });
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.cateList = data.data.result;
      this.total = data.data.total;
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getCateList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getCateList();
    },
    showAddCateDialog() {
      this.getParentCateList();
      this.addCateDialogVisible = true;
    },
    async getParentCateList() {
      const { data } = await this.$http.get("categories", {
        params: { type: 2 }
      });
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.parentCateList = data.data;
    },
    parentCateChanged() {
      console.log(0);
      if (this.selectKeys.length > 0) {
        this.addCateForm.cat_pid = this.selectKeys[this.selectKeys.length - 1];
        this.addCateForm.cat_level = this.selectKeys.length;
        return;
      } else {
        this.addCateForm.cat_pid = 0;
        this.addCateForm.cat_level = 0;
      }
    },
    addCateDialogClosed() {
      this.$refs.addCateFormRef.resetFields();
      this.selectKeys = [];
      this.addCateForm.cat_id = 0;
      this.addCateForm.cat_level = 0;
    },
    addCate() {
      this.$refs.addCateFormRef.validate(async valid => {
        if (!valid) {
          return;
        }
        const { data } = await this.$http.post("categories", this.addCateForm);
        if (data.meta.status !== 201) {
          return this.$message.error(data.meta.msg);
        }
        this.message.success("添加成功");
        this.getCateList();
        this.addCateDialogVisible = false;
      });
    }
  },
  created() {
    this.getCateList();
  }
};
</script>

<style lang="less" scoped>
.TreeTable {
  margin-top: 15px;
}
</style>