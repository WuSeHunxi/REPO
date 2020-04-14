<template>
    <div>
        <p @click="click">{{user.age}}</p>
        <div :data="hah">{{data}}</div>
        <div v-for="item in data" :key="item">{{item}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                name:"oaoa",
                age:12
            }
        }
    },
    props:{
        // data:{
        //     type:String,
        //     // required: true
        //     // default:()=>'jajja'
        // },
        data:{
            type:Array,
            required:true
        }
    },
    created(){
        console.log(this.name)
        console.log(0)
    },
    methods:{
        click(){
            console.log(this.name)
        }
    }
}
</script>

<style scoped>

</style>