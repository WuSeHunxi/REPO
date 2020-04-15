<template>
    <div>
        <p @click="click">{{user.age}}</p>
        <div :data="data">{{data}}</div>
        <div v-for="item in data" :key="item">{{item}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'base-son',
    props:{
        data:{
            type:Array,
        },
    },
    data(){
        return {
            user:{
                name:"oaoa",
                age:12
            }
        }
    }, 
    created(){
        console.log(this.data)
        console.log(0)
    },
    methods:{
        click(){
            console.log(this.user.name)
        }
    }
}
</script>

<style scoped>

</style>