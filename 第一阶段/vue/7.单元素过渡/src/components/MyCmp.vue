<template>
    <div class="demo">
        <button @click="show=!show">click</button>
        <!-- <transition>
            <div class="box" v-if="show">hell world</div>
        </transition>

        <transition name="box1">
            <div class="box" v-if="show">hello world</div>
        </transition>
        <transition name="box" >
            <div class="box" v-if="show">three</div>
        </transition>
        <transition enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutDown"
        >
            <div class="box" v-if="show">four</div>
        </transition>
        <transition appear-active-class="animated awing" enter-active-class="animated tada">
            <div class="box" v-if="show">five</div>
        </transition> -->
        <transition :css="false" @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
        >
            <div class="box" v-if="show">hello world</div>
        </transition>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            show:false,
            x:200,
        }
    },
    methods:{
        beforeEnter(el){
            el.style.transform='translateX(200px)';
        },
        enter(el,done){
            done.canceled=true;
            const trimer=setInterval(()=>{
                this.x-=2;
                el.style.transform=`translateX(${this.x}px)`;
                if(this.x<=0){
                    clearInterval(trimer);
                    done();//done执行才会执行afterEnter()
                }
            })
        },
        afterEnter(){
            this.x==200;
            console.log("papp")
        },
        enterCancelled(){

        }
    }
}
</script>

<style scoped>
button{
    margin-bottom: 10px;
}

.box{
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border:1px solid #f0f;
    color:#f0f
}

.v-enter,
.v-leave-to{
    opacity: 0;
}

.v-enter-active,
.v-leave-active{
    transition: opacity 1s;
}

.v-leave,
.v-enter-to{
    opacity: 1;
}

.box1-enter,
.box1-leave-to{
    transform: translateX(200px);
    opacity: 0;
}

.box1-enter-active,
.box1-leave-active{
    transition: all 1s;
}

.box1-enter-to,
.box1-leave{
    transform: translateX(0px);
    opacity: 1;
}

.box-enter-active{
    animation: animate 0.1s;
}

.box-leave-active{
    animation: animate 0.1s reverse;
}

@keyframes animate {
    0% {
    opacity: 0;
    transform: translateX(400px) scale(1);
  }

  50% {
    opacity: .5;
    transform: translateX(200px) scale(1.5);
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>