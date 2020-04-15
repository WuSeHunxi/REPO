<template>
    <div class="demo">
        <input type="text" v-model="inpVal">
        <transition-group tag="ul"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave">
            <li v-for="list in selectLists" :key="list.name">{{list.name}}</li>
        </transition-group>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            inpVal:'',
            lists:[
                {name:"kakaik"},
                {name:"oooo"},
                {name:"oaod"},
                {name:"ijij"}
            ]
        }
    },
    computed:{
        selectLists(){
            return this.lists.filter(item=>{
                return  item.name.includes(this.inpVal)
            })
        }
    },
    methods:{
        beforeEnter(el){
            el.style.opacity=0;
            el.style.height=0;
        },
        enter(el,done){
            Velocity(el,{opacity:1,height:'24px'},{duration:300,complete:done})
        },
        leave(el,done){
            Velocity(el,{opacity:0,height:'0px'},{duration:300,eomplete:done})
        }
    }
}
</script>

<style scoped>
li{
    height: 24px;
}
/* ul ,li{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
    height: 24px;
}

.v-enter,
.v-leave-to{
    opacity: 0;
    height: 0;
}

.v-leave-active,
.v-enter-active{
    transition:all 0.3s;
}

.v-leave,
.v-enter-to{
    opacity: 1;
    height:24px;
} */
li{
    height: 24px;
}
</style>