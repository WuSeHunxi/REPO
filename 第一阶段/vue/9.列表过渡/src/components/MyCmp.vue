<template>
    <div class="demo">
        <button @click="handleAdd">添加</button>
        <button @click="handleRemove">移除</button>
        <button @click="handleShuffle">洗牌</button>
        <br/>
        <transition-group tag="ul">
            <li v-for="item in lists" :key="item">{{item}}</li>
        </transition-group>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lists:[1,2,3,4,5,6,7,8,9],
            nextNum:11
        }
    },
    methods:{
        handleAdd(){
            const randomIndex=Math.floor(Math.random()*this.lists.length);
            this.lists.splice(randomIndex,0,this.nextNum++);
        },
        handleRemove(){
            const randomIndex=Math.floor(Math.random()*this.lists.length);
            this.lists.splice(randomIndex,1);
        },
        handleShuffle(){
            this.lists.sort(()=>Math.random()-0.5);
        }
    }
}
</script>

<style scoped>
button{
    margin-bottom: 10px;
    margin-right: 10px;
}
ul,li{
    padding: 0;
    margin: 0;
}

li{
    list-style: none;
    display: inline-block;
    margin-right: 10px;
}

.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateX(30px);
}

.v-enter-active,
.v-leave-active{
    transition: all 0.3s;
}

.v-enter-to,
.v-leave{
    opacity: 1;
    transform: translateX(0px);
}

/**打乱顺序的过渡效果 */
.v-move{
    transition: transform 0.3s;
}

</style>