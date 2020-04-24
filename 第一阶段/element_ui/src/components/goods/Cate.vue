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
          <el-button type="primary" @click="showAddCateDialog"
            >添加分类</el-button
          >
        </el-col>
      </el-row>

      <!-- 使用注册插件：表格 -->
      <tree-table
        :data="catelist"
        show-index
        index-text="#"
        class="TreeTable"
        border
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
      >
        <!-- 是否有效插槽 -->
        <template v-slot:isok="scope">
          <i
            class="el-icon-success"
            v-if="!scope.row.cat_deleted"
            style="color:lightgreen"
          ></i>
          <i class="el-icon-error" v-else style="color:red"></i>
        </template>
        <!-- 排序插槽 -->
        <template v-slot:order="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag size="mini" v-if="scope.row.cat_level === 1" type="success"
            >二级</el-tag
          >
          <el-tag size="mini" v-if="scope.row.cat_level === 2" type="warning"
            >三级</el-tag
          >
        </template>
        <!-- 操作插槽 -->
        <template slot="opt">
          <el-button size="mini" type="primary" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button size="mini" type="warning" icon="el-icon-delete"
            >删除</el-button
          >
        </template>
      </tree-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[3, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加分类对话框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      @close="addCateDialogClosed"
      width="50%"
    >
      <el-form
        ref="addCateFormRef"
        :model="addCateForm"
        :rules="addCateFormRules"
        label-width="100px"
      >
        <el-form-item label="分类名称：" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类：">
          <el-cascader
            :options="parentCateList"
            :props="cascadarProps"
            clearable
            v-model="selectKeys"
            @change="parentCateChanged"
          >
          </el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catelist: [],//商品列表
      queryInfo: {//请求参数
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      total: 0,
      columns: [//表格中的每一列
        {
          label: "分类名称",
          prop: "cat_name"
        },
        {
          label: "是否有效",
          type: "template",//tree-table得模板
          template: "isok"//模板名称
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
      //控制添加分类对话框的显示与隐藏
      addCateDialogVisible: false,
      //添加分类的表单数据对象
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
      parentCateList: [],
      //级联选择框的配置对象
      cascadarProps: {
        expandTrigger: "hover",
        value: "cat_id",//指定选中的值
        label: "cat_name",//看到的分类
        children: "children",//父子嵌套用的是哪个属性
        checkStrictly: true
      },
      //选中的父级分类的Id数组
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
      this.catelist = data.data.result;
      this.total = data.data.total;
    },
    //监听pageSize改变
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getCateList();
    },
    //监听pageNum得改变
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getCateList();
    },
    // 点击按钮，展示添加分类的对话框
    showAddCateDialog() {
      //先获取父级分类的数据列表
      this.getParentCateList();
      //再展示出对话框
      this.addCateDialogVisible = true;
    },
    //获取父级分类的数据列表
    async getParentCateList() {
      const { data } = await this.$http.get("categories", {
        params: { type: 2 }
      });
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.parentCateList = data.data;
    },
    //只要级联选择的选择项发生变化就触发这个函数change事件，selectKeys发生变化
    parentCateChanged() {
      //如果大于0 则证明选中了父级分类，要选择最后一项作为Id； 反之没有
      if (this.selectKeys.length > 0) {
        //父级分类的Id
        this.addCateForm.cat_pid = this.selectKeys[this.selectKeys.length - 1];
        //为当前分类的等级赋值
        this.addCateForm.cat_level = this.selectKeys.length;
        return;
      } else {
        this.addCateForm.cat_pid = 0;
        this.addCateForm.cat_level = 0;
      }
    },
    //关闭了就要立即清空，并且表单重置
    addCateDialogClosed() {
      this.$refs.addCateFormRef.resetFields();
      this.selectKeys = [];
      this.addCateForm.cat_pid = 0;
      this.addCateForm.cat_level = 0;
    },
    //点击按钮，添加新的分类
    addCate() {
      this.$refs.addCateFormRef.validate(async valid => {
        if (!valid) return;
        //第二个参数是请求体
        const { data } = await this.$http.post("categories", this.addCateForm);
        if (data.meta.status !== 201) {
          return this.$message.error(data.meta.msg);
        }
        this.$message.success('添加分类成功！')
        //刷新数据列表
        this.getCateList()
        this.addCateDialogVisible = false
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

.el-cascader {
  width: 100%;
}
</style>
