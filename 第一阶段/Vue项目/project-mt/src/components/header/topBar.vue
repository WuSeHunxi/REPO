<template>
    <div class="top">
        <el-col :span="10">
            geo
        </el-col>
        <el-col :span="14">

        </el-col>
    </div>
</template>
<script>
import geo from './geo.vue'

export default {
    components:{
        geo,
        
    }    

}
</script>
<style lang="scss" scoped>
@import '@/assets/css/public/header/topbar.scss';
</style>