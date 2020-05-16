<template>
    <div class="m-header-topbar m-header">
        <el-col :span="10">
            <geo/>
        </el-col>
        <el-col :span="14">
            <m-nav/>
        </el-col>
    </div>
</template>
<script>
import geo from './geo.vue'
import MNav from './nav'

export default {
    components:{
        geo,
        MNav
    }    

}
</script>
<style lang="scss" scoped>
@import '@/assets/css/public/header/topbar.scss';
</style>