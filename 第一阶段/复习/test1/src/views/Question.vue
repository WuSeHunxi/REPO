<template>
    <div class="question">
        <ul>
            <router-link :to="{name:'question',params:{id:question.id}}"
             v-for="question in questionList"
             :key="question.id" tag='li'
              @click="getData()">{{question.title}}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            questionList:[],
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            this.$axios.get(`/question`).then(res=>{
                this.questionList=res;
                // console.log(this.questionList)
            })
            // console.log(this.$axios)
        }
    }
}
</script>

<style scoped>
li {
  margin-bottom: 15px;
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
  color: #3385ff;
}
</style>