<template>
  <div class="login">
    <button @click="handleClick">{{btnText}}</button>
  </div>
</template>

<script>
  import auth from "../utils/auth";

  export default {
    data() {
      return {
        isLogin: auth.isLogin(),
      };
    },
    methods: {
      handleClick() {
        if(this.isLogin){
            auth.cancelLogin();
        }else{
            auth.login();
        }
      },
    },
    computed:{
        btnText(){
            return this.isLogin?'取消登录':'登录'
        }
    }
  };
</script>

<style scoped></style>
