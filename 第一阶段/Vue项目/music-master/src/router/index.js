import Vue from 'vue'
import Router from 'vue-router'
import MRecommend from 'components/m-recommend//m-recommend'
import MSinger from 'components/m-singer//m-singer'
import MRank from 'components/m-rank/m-rank'
import MSearch from 'components/m-search/m-search'
Vue.use(Router)

export default new Router({
  mode:'history',
  fallback:true,
  routes: [
    { 
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      component:MRecommend
    },
    { 
      path:'/singer',
      component:MSinger
    },
    {
      path:'/rank',
      component:MRank
    },
    {
      path:'/search',
      component:MSearch
    }
  ]
})
