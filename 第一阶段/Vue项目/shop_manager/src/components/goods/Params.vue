<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-alert title="注意：只允许为第三级分类设置相关参数！" :closable="false" show-icon type="warning"></el-alert>
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类：</span>
          <!-- 级联选择框 -->
          <el-cascader
            :options="catelist"
            :props="cateProps"
            clearable
            v-model="selectCateKeys"
            @change="CateChanged"
          ></el-cascader>
        </el-col>
      </el-row>

      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <el-tab-pane label="动态参数" name="many">
          <el-button
            :disabled="isBtnDisabled"
            type="primary"
            size="mini"
            @click="showAddDialog"
          >添加参数</el-button>
          <el-table :data="manyTableData" stripe border>
            <el-table-column type="expand">
              <template v-slot="scope">
                <el-tag
                  type="success"
                  v-for="(item, i) in scope.row.attr_vals"
                  @close="handleClosed(i, scope.row)"
                  :key="i"
                  closable
                >{{ item }}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)"
                ></el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput(scope.row)"
                >+ New Tag</el-button>
              </template>
            </el-table-column>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="参数名称" width="width"></el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <el-button
                  type="primary"
                  size="mini"
                  icon="el-icon-edit"
                  @click="showEditDialog(scope.row.attr_id)"
                >编辑</el-button>
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                  @click="removeParams(scope.row.attr_id)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="only">
          <el-button
            :disabled="isBtnDisabled"
            type="primary"
            size="mini"
            @click="showAddDialog"
          >添加属性</el-button>
          <el-table :data="onlyTableData" stripe border>
            <el-table-column type="expand">
              <template v-slot="scope">
                <el-tag
                  type="success"
                  v-for="(item, i) in scope.row.attr_vals"
                  @close="handleClosed(i, scope.row)"
                  :key="i"
                  closable
                >{{ item }}</el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="scope.row.inputVisible"
                  v-model="scope.row.inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.row)"
                  @blur="handleInputConfirm(scope.row)"
                ></el-input>
                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showInput(scope.row)"
                >+ New Tag</el-button>
              </template>
            </el-table-column>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="属性名称" width="width"></el-table-column>
            <el-table-column label="操作">
              <template v-slot="scope">
                <el-button
                  type="primary"
                  size="mini"
                  icon="el-icon-edit"
                  @click="showEditDialog(scope.row.attr_id)"
                >编辑</el-button>
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                  @click="removeParams(scope.row.attr_id)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 添加参数和添加属性对话框：标题是动态的 -->
    <el-dialog
      :title="'添加' + textTitle"
      :visible.sync="addDialogVisible"
      @close="addDialogClosed"
      width="50%"
    >
      <el-form ref="addFormRef" :model="addForm" :rules="addFormRules" label-width="100px">
        <el-form-item :label="textTitle" prop="attr_name">
          <el-input v-model="addForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addParams">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑对话框 -->
    <el-dialog
      :title="'修改' + textTitle"
      :visible.sync="editDialogVisible"
      @close="editDialogClosed"
      width="50%"
    >
      <el-form ref="editFormRef" :model="editForm" :rules="editFormRules" label-width="100px">
        <el-form-item :label="textTitle" prop="attr_name">
          <el-input v-model="editForm.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editParams">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //商品分类列表
      catelist: [],
      cateProps: {
        expandTrigger: "hover",
        value: "cat_id",
        label: "cat_name",
        children: "children"
      },
      //级联选择框双向绑定的数组
      selectCateKeys: [],
      //被激活的页签的名称
      activeName: "many",
      //动态参数的数据
      manyTableData: [],
      //静态参数的数据
      onlyTableData: [],
      //控制添加对话框的显示与隐藏
      addDialogVisible: false,
      editDialogVisible: false,
      addForm: {
        attr_name: ""
      },
      //添加表单验证的规则对象
      addFormRules: {
        attr_name: [{ required: true, message: "请输入", trigger: "blur" }]
      },
      editForm: {
        attr_name: ""
      },
      editFormRules: {
        attr_name: [{ required: true, message: "请输入", trigger: "blur" }]
      }
    };
  },
  methods: {
    async getCateList() {
      const { data } = await this.$http.get("categories");
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.catelist = data.data;
    },
    //级联选择框选中项变化时，触发的函数
    CateChanged() {
      this.getParamsData();
    },
    //tab页签点击事件的处理函数
    handleTabClick() {
      this.getParamsData();
    },
    //根据所选（当前的三级Id）的id和当前所处的面板获取对应的参数
    async getParamsData() {
      if (this.selectCateKeys.length !== 3) {
        this.selectCateKeys = [];
        this.manyTableData = [];
        this.onlyTableData = [];
        this.$message.error("此选项不是三级分类");
        return;
      }
      //证明选中的是三级分类
      const { data } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        {
          params: {
            sel: this.activeName
          }
        }
      );
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      //转成数组
      data.data.forEach(item => {
        item.attr_vals = item.attr_vals ? item.attr_vals.split(" ") : [];
        // 每一行控制是否按钮和文本框输入
        item.inputVisible = false;
        item.inputValue = "";
      });
      //判断数据是哪个面板中的  
      if (this.activeName === "many") {
        this.manyTableData = data.data;
      } else {
        this.onlyTableData = data.data;
      }
    },
    showAddDialog() {
      this.addDialogVisible = true;
    },
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    addParams() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return;
        const { data } = await this.$http.post(
          `categories/${this.cateId}/attributes`,
          {
            attr_name: this.addForm.attr_name,
            attr_sel: this.activeName
          }
        );
        if (data.meta.status !== 201) {
          return this.$message.error(data.meta.msg);
        }
        this.$message.success("添加属性成功！");
        this.addDialogVisible = false;
        this.getParamsData();
      });
    },
    //点击按钮，修改参数信息
    async showEditDialog(attr_id) {
      const { data } = await this.$http.get(
        `categories/${this.cateId}/attributes/${attr_id}`,
        {
          params: { attr_sel: this.activeName }
        }
      );
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.editForm = data.data;
      this.editDialogVisible = true;
    },
    editDialogClosed() {
      //重置没修改之前的，修改的表单数据对象
      this.$refs.editFormRef.resetFields();
    },
    //点击按钮修改参数信息
    editParams() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return;
        const { data } = await this.$http.put(
          `categories/${this.cateId}/attributes/${this.editForm.attr_id}`,
          {
            attr_name: this.editForm.attr_name,
            attr_sel: this.activeName
          }
        );
        if (data.meta.status !== 200) {
          return this.$message.error(data.meta.msg);
        }
        this.$message.success("修改成功!");
        this.getParamsData();
        this.editDialogVisible = false;
      });
    },
    removeParams(attr_id) {
        //返回的是Promise，因此可以简化操作
      this.$confirm("此操作将永久删除该选项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const { data } = await this.$http.delete(
            `categories/${this.cateId}/attributes/${attr_id}`
          );
          if (data.meta.status !== 200) {
            return this.$message.error(data.meta.msg);
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getParamsData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleInputConfirm(row) {
      if (row.inputValue.trim().length === 0) {
        row.inputValue = "";
        row.inputVisible = false;
        return;
      }
      row.attr_vals.push(row.inputValue.trim());
      row.inputValue = "";
      row.inputVisible = false;
      this.setAttrVals(row);
    },
    showInput(row) {
      row.inputVisible = true;
      // 文本框自动获得焦点
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleClosed(i, row) {
      row.attr_vals.splice(i, 1);
      this.setAttrVals(row);
    },
    async setAttrVals(row) {
      const { data } = await this.$http.put(
        `categories/${this.cateId}/attributes/${row.attr_id}`,
        {
          attr_name: row.attr_name,
          attr_sel: row.attr_sel,
          attr_vals: row.attr_vals.join(" ")
        }
      );
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.$message.success("修改成功！");
    }
  },
  created() {
    this.getCateList();
  },
  computed: {
    //如果按钮需要被禁用则返回true，反之返回false
    isBtnDisabled() {
      if (this.selectCateKeys.length !== 3) {
        return true;
      }
      return false;
    },
    // 当前选中三级分类的id：从数组中取最后一项
    cateId() {
      if (this.selectCateKeys.length === 3) {
        return this.selectCateKeys[2];
      }
      return null;
    },
    //动态计算标题的文本
    textTitle() {
      if (this.activeName === "many") {
        return "动态参数";
      }
      return "静态属性";
    }
  }
};
</script>

<style lang="less" scoped>
.cat_opt {
  margin: 15px 0;
}

.el-tag {
  margin: 10px;
}

.input-new-tag {
  width: 120px;
}
</style>
