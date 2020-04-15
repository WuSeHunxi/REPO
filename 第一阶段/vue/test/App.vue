<template>
    <div id="app">
        <!-- <div>{{name}}</div> -->
        <!-- <base-son :data="data">
            <p>哈哈哈哈</p>
        </base-son> -->
        <async-cmp-1></async-cmp-1>
        <async-cmp-2></async-cmp-2>
    </div>
</template>
<script>

// import BaseSon from "./Son";

export default {
    name:'app',
    components:{
        // BaseSon,
        AsyncCmp1: () => import(/*webpackChunkName:"async"*/  './component/AsyncCmp1'),
        AsyncCmp2: () => import(/* webpackChunkName: "async" */  './component/AsyncCmp2'),
    },
    data(){  
        return {
            // name:"hahah",
            data:[1,2,3,4,5]//父组件的数据要直接给组件
        }
    },
    
}
</script>
<style scoped>


</style>