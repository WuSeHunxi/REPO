import Vue from 'vue';
import Vuerouter from 'vue-router';
import Home from "./views/Home";

Vue.use(Vuerouter);

const routes=[
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/student',component:()=>import ('./views/Student')},
    {path:'/learn',component:()=>import ('./views/Learn')},
    {path:'/about',component:()=>import ('./views/About')},
    {path:'/activity',redirect:"/activity/academic",component:()=>import ('./views/Activity'),
        children:[
            {path:'/activity/academic',name:'/activity/academic',component:()=>import("./views/Academic"),
                children:[{path:'academic/name',name:'academic/name',component:()=>import('./views/Questionsname')}]
            },
            {path:'/activity/download',name:'/activity/download',component:()=>import("./views/Download")},
            {path:'/activity/question',name:'/activity/question',component:()=>import("./views/Question")},
            {path:"/question/:id",name:'question',component:()=>import("./views/Questionsname")}
        ]
    }
]

export default new Vuerouter({
    routes,
    mode:'history'
})
