<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入查询内容" clearable @clear="getData" v-model="queryInfo.query">
            <el-button icon="el-icon-search" slot="append" @click="getData"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogShow">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="userslist" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column label="状态">
          <template v-slot="scope">
            <el-switch v-model="scope.row.mg_state" backgroud-color="success" @change="userStateChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="getUserById(scope.row.id)"
            ></el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteList(scope.row.id)"
            ></el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
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
        :total="10"
      ></el-pagination>
    </el-card>

    <el-dialog title="添加信息" :visible.sync="addVisibleDailog" width="50%" @close="addFormReset">
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisibleDailog = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="修改信息" :visible.sync="editVisibleDialog" width="50%" @close="editFormReset">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisibleDialog = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkEmail = (rule, value, cb) => {
      const regEail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      if (regEail.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    // 自定义手机号校验规则
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      userslist: [],
      total: 0,
      addVisibleDailog: false,
      editVisibleDialog: false,
      addFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            required: true,
            min: 3,
            max: 10,
            message: "用户长度再3-10个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            required: true,
            min: 3,
            max: 10,
            message: "用户长度再6-15个字符",
            trigger: "blur"
          }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" }
        ]
      },
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      editForm: {
      },
      editFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async getData() {
      const { data } = await this.$http.get("users", {
        params: this.queryInfo
      });
      if (data.meta.status !== 200) {
        return this.$message.error("获取失败");
      }
      this.userslist = data.data.users;
      console.log(this.userslist);
      this.total = data.data.total;
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getData();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getData();
    },
    async userStateChange(info){
      const {data}=await this.$http.put('users/'+info.id+'/state/'+info.mg_state);
      if(data.meta.status!==200){
        return this.$message.error("状态设置失败");
      }
      this.$message.success(data.meta.msg);
      this.getData()
    },
    addDialogShow() {
      this.addVisibleDailog = true;
    },
    editDialogShow() {
      this.editVisibleDialog = true;
    },
    editFormReset() {
      this.$refs.editFormRef.resetFields();
    },
    addFormReset() {
      this.$refs.addFormRef.resetFields();
    },
    addUser() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) {
          return;
        }
        const { data } = await this.$http.post("users", this.addForm);
        if (data.meta.status !== 201) {
          return this.$message.error("添加用户失败");
        }
        this.$message.success(data.meta.msg);
        this.addVisibleDailog = false;
        this.getData();
      });
    },
    async getUserById(id) {
      const { data } = await this.$http.get("users/" + id);
      if (data.meta.status !== 200) {
        return this.$message.error("查询失败");
      }
      this.editForm = data.data;
      this.editVisibleDialog = true;
    },
    async editUser() {
      this.$refs.editFormRef.validate(async valid => {
        if (!valid) return;
        const { data } = await this.$http.put(
          "users/" + this.editForm.id,
          {
            email:this.editForm.email,
            mobile:this.editForm.mobile
          }
        );
        if (data.meta.status !== 200) {
          return this.$message.error("更新失败");
        }
        this.$message.success(data.meta.msg);
        this.editVisibleDialog = false;
        this.getData();
      });
    },
    async deleteList(id) {
      this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const { data } = await this.$http.delete("users/" + id);
          if (data.meta.status !== 200) {
            return this.$message.error("删除失败");
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>