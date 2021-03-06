//在这个文件中应该导出一个包含自定义配置选项的对象
//通过chainWebpack自定义打包入口
module.exports = {
  chainWebpack: (config) => {
    //发布模式
    config.when(process.env.NODE_ENV === "production", (config) => {
      config
        .entry("app")
        .clear()
        .add("./src/main-prod.js");

      config.set("externals", {
        vue: "Vue",
        "vue-router": "VueRouter",
        axios: "axios",
        lodash: "_",
        echarts: "echarts",
        nprogress: "NProgress",
        "vue-quill-editor": "VueQuillEditor",
      });

      //自定义首页内容
      config.plugin("html").tap((args) => {
        args[0].isProd = true;
        return args;
      });
    });

    //开发模式
    config.when(process.env.NODE_ENV === "development", (config) => {
      config
        .entry("app")
        .clear()
        .add("./src/main-dev.js");
    });
    config.plugin("html").tap((args) => {
      args[0].isProd = false;
      return args;
    });
  },
};
