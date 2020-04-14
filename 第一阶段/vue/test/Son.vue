<template>
    <div>
        <p>{{user.age}}</p>
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
    }
}
</script>

<style scoped>

</style>