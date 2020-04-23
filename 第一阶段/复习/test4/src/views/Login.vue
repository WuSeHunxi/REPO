<template>
  <button @click="handleClick">{{ btnText }}</button>
</template>

<script>
  import auth from "../utils/auth";
  export default {
    data() {
      return {
        isLogin:auth.isLogin()
      };
    },
    methods: {
      handleClick() {
        if (this.isLogin) {
          auth.cancelLogin();
        } else {
          auth.login();
          this.goBack();
        }
        this.isLogin=!this.isLogin;
      },
      goBack() {
        const isBack = window.confirm("你是否想要回到原界面?");
        if (isBack) {
          this.$router.go(-1);
        } else {
        }
      },
    },
    computed:{
        btnText(){
            return this.isLogin?'取消登录':'登录';
        }
    }
  };
</script>
