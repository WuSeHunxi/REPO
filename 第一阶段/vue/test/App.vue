<template>
    <div>
        <div>{{name}}</div>
        <base-son>
            <p>哈哈哈哈</p>
        </base-son>
    </div>
</template>
<script>

import BaseSon from "./Son";

export default {
    data(){
        return {
            name:"hahah"
        }
    },
    components:{
        BaseSon
    }
}
</script>
<style scoped>


</style>