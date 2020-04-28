<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="4">
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="roleslist" border style="width: 100%">
        <el-table-column type="expand">
          <template v-slot="scope">
            <el-row v-for="item in scope.row.children" :key="item.id">
              <el-col :span="5">
                <el-tag>{{item.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                  <el-row v-for="item2 in item.children" :key="item2.id">
                      <el-col :span="6">
                          <el-tag type="success">{{item2.authName}}</el-tag>
                      </el-col>
                      <el-col :span='18'>
                          <e-tag type='warning' v-for="item3 in item2.children" :key="item3.id">{{item3.authName}}</e-tag>
                      </el-col>
                  </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作" width="450px">
          <template>
            <el-button type="primary" icon="el-icon-edit">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
            <el-button type="warning" icon="el-icon-setting">分配角色</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roleslist: []
    };
  },
  methods: {
    async getData() {
      const { data } = await this.$http.get("roles");
      if (data.meta.status !== 200) {
        return this.$message.error("获取权限列表失败");
      }
      this.roleslist = data.data;
      console.log(this.roleslist);
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.el-tag {
  margin: 7px;
}
</style>