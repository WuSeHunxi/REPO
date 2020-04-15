<template>
    <div class="demo">
        <!-- <button @click="show=!show">click</button> -->
        <button @click="handleClick">click</button>
        <!-- <transition mode="out-in">
            <div :key="keyName">hello {{keyName}}</div> -->
            <!-- <div class="box" v-if="show" key="world">hello world</div>
            <div class="box" v-else key="shan">hello</div> -->
        <!-- </transition> -->

        <!-- 动态组件 -->
        <transition mode="in-out">
            <component :is="cmpName"></component>
        </transition>
    </div>
</template>

<script>
import Demo1 from "./BaseDemo5-1";
import Demo2 from "./BaseDemo5-2";

export default {
    components:{
        Demo1,
        Demo2
    },
    data(){
        return {
            show:true,
            keyName:'world',
            cmpName:"demo1"
        }
    },
    methods:{
        handleClick(){
            // const isWord=this.keyName==='world';
            // this.keyName=isWord?'shanshan':'world'
            const isDemo1=this.cmpName==='demo1';
            this.cmpName=isDemo1?'demo2':'demo1';
        }
    }
}
</script>

<style scoped>
/* .v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.v-enter-to,
.v-leave {
  opacity: 1;
} */
.demo {
  margin-left: 100px;
}

button {
  display: block;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(80px);
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.v-enter-to  {
  opacity: 1;
  transform: translateX(0px);
}

.v-leave {
  opacity: 1;
  transform: translateX(0px);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}
</style>