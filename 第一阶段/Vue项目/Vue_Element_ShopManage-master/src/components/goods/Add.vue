<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <el-alert title="添加商品信息" :closable="false" center show-icon type="info"></el-alert>
      <!-- 步骤条区域 -->
      <el-steps :space="200" :active="activeIndex - 0" finish-status="success" align-center>
        <!-- 展示的每一项 -->
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品信息"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <el-form
        ref="addFormRef"
        :model="addForm"
        :rules="addFormRules"
        label-width="80px"
        label-position="top"
      >
        <!-- 指定标签所在位置 -->
        <el-tabs
          v-model="activeIndex"
          :before-leave="beforTabLeave"
          :tab-position="'left'"
          @tab-click="tabClicked"
        >
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="goods_name">
              <!-- v-model的值是请求的参数 -->
              <el-input v-model="addForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
              <el-input v-model="addForm.goods_price" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight">
              <el-input v-model="addForm.goods_weight" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number">
              <el-input v-model="addForm.goods_number" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品分类：" prop="goods_cat">
              <el-cascader
                :options="catelist"
                :props="cateProps"
                clearable
                v-model="addForm.goods_cat"
                @change="CateChanged"
              ></el-cascader>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">
            <!-- 每一个表单项 -->
            <el-form-item :label="item.attr_name" v-for="item in manyTabelData" :key="item.attr_id">
              <el-checkbox-group v-model="item.attr_vals">
                <el-checkbox :label="cb" border v-for="(cb, i) in item.attr_vals" :key="i"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品属性" name="2">
            <el-form-item :label="item.attr_name" v-for="item in onlyTabelData" :key="item.attr_id">
              <el-input v-model="item.attr_vals"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品图片" name="3">
            <el-upload
              action="https://www.liulongbin.top:8888/api/private/v1/upload"
              :headers="headerobj"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-tab-pane>
          <el-tab-pane label="商品内容" name="4">
            <!-- 父文本编辑组件，双向绑定的数据要添加到addForm中 -->
            <quill-editor v-model="addForm.goods_introduce"></quill-editor>
            <el-button type="primary" class="btnAdd" @click="add">添加商品</el-button>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>

    <el-dialog title="图片预览" :visible.sync="previewVisible" width="50%">
      <img :src="previewPath" alt class="previewImg" />
    </el-dialog>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      activeIndex: "0",
      //添加商品的表单对象
      addForm: {
        goods_name: "",
        goods_price: 0,
        goods_weight: 0,
        goods_number: 0,
        //商品所属的分类的Id数组
        goods_cat: [],
        //可以没有图片，但是如果要上传的话就必须将图片的信息添加到pics中
        pics: [], //请求的参数，可以为空
        goods_introduce: "",
        attrs: []
      },
      addFormRules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ],
        goods_price: [
          { required: true, message: "请输入商品价格", trigger: "blur" }
        ],
        goods_wight: [
          { required: true, message: "请输入商品重量", trigger: "blur" }
        ],
        goods_number: [
          { required: true, message: "请输入商品数量", trigger: "blur" }
        ],
        goods_cat: [
          { required: true, message: "请选择商品分类", trigger: "blur" }
        ]
      },
      //商品分类列表
      catelist: [],
      cateProps: {
        expandTrigger: "hover",
        value: "cat_id",
        label: "cat_name",
        children: "children"
      },
      //动态参数列表数据
      manyTabelData: [],
      //静态参数列表数据
      onlyTabelData: [],
      //没有使用axios而是自己封装了
      //请求头，包含Authorization，可以进行token验证
      headerobj: {
        Authorization: window.sessionStorage.getItem("token")
      },
      previewPath: "",
      previewVisible: false
    };
  },
  methods: {
    //获取所有商品分类数据
    async getCateList() {
      const { data } = await this.$http.get("categories");
      if (data.meta.status !== 200) {
        return this.$message.error(data.meta.msg);
      }
      this.catelist = data.data;
    },
    //级联选择器选中项变化就会触发该事件
    CateChanged() {
      //只能选中第三级
      if (this.addForm.goods_cat.length !== 3) {
        this.addForm.goods_cat = [];
        this.$message.error("请选择三级分类");
      }
    },
    //将要发生标签页的切换
    beforTabLeave(activeName, oldActiveName) {
      //当前选中项的长度！=3并且当前的标签为0 则不允许切换
      if (oldActiveName === "0" && this.addForm.goods_cat.length !== 3) {
        this.$message.error("请先选择分类！");
        return false;
      }
    },
    //点击面板触发的事件
    async tabClicked() {
      //面板为1的话，需要获取数据
      if (this.activeIndex === "1") {
        const { data } = await this.$http.get(
          `categories/${this.cateId}/attributes`, //利用计算属性
          {
            params: {
              sel: "many" //获取的是动态参数
            }
          }
        );
        if (data.meta.status !== 200) {
          return this.$message.error(data.meta.msg);
        }
        data.data.forEach(item => {
          item.attr_vals =
            item.attr_vals.length === 0 ? [] : item.attr_vals.split(" ");
        });
        //动态参数列表数据
        this.manyTabelData = data.data;
      } else {
        //获取静态数据（面板不是1）
        const { data } = await this.$http.get(
          `categories/${this.cateId}/attributes`,
          {
            params: {
              sel: "only"
            }
          }
        );
        if (data.meta.status !== 200) {
          return this.$message.error(data.meta.msg);
        }
        this.onlyTabelData = data.data;
      }
    },
    //处理图片预览效果（图片预览时出发的事件）
    handlePreview(file) {
      //获取完整的url
      this.previewPath = file.response.data.url;
      //图片对话框显示
      this.previewVisible = true;
    },
    //点击叉号就会触发，立即拿到要移除的图片的信息（图片移除）
    handleRemove(fire) {
      const picPath = fire.response.data.tmp_path;
      //拿到对应项的索引值
      const i = this.addForm.pics.findIndex(x => x.pic === picPath);
      this.addForm.pics.splice(i, 1);
    },
    //上传成功触发的事件，拿到服务器返回的数据
    handleSuccess(response) {
      //1.拼接得到一个图片那的信息对象
      //2.将图片的信息对象push到pics
      const picInfo = { pic: response.data.tmp_path };
      this.addForm.pics.push(picInfo);
     
    },
    //添加商品
    add() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) {
          return this.$message.error("请先填写必填项！");
        }
        //执行添加的业务逻辑
        //将对象深拷贝---lodash包中的方法--->为了防止改变原来的数据类型
        const form = _.cloneDeep(this.addForm);
        //将goods_cat数组改造成字符串
        form.goods_cat = form.goods_cat.join(",");
        //处理动态参数和静态属性
        this.manyTabelData.forEach(item => {
          //构建对象的结构
          const newInfo = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals.join(" ")
          };
          this.addForm.attrs.push(newInfo);
        });
        this.onlyTabelData.forEach(item => {
          const newInfo = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals
          };
          this.addForm.attrs.push(newInfo);
          
        });
        //将复制的对象和本来的对象联系起来
        form.attrs = this.addForm.attrs;
        //发起请求：向服务器提交的是form
        const { data } = await this.$http.post("goods", form);
        if (data.meta.status !== 201) {
          return this.$message.error(data.meta.msg);
        }
        this.$message.success("添加商品成功！");
        this.$router.push("/goods");
      });
    }
  },
  created() {
    this.getCateList();
  },
  computed: {
    //三级分类的Id
    cateId() {
      if (this.addForm.goods_cat.length === 3) {
        //三级Id索引为2
        return this.addForm.goods_cat[2];
      }
      return null;
    }
  }
};
</script>

<style lang="less" scoped>
.el-checkbox {
  margin: 0 10px 0 0 !important;
}

.previewImg {
  width: 100%;
}

.btnAdd {
  margin-top: 15px;
}
</style>
