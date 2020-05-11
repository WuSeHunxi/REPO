import MovieList from "../components/MovieList.js";
import Loading from "../components/loading.js";
import Pager from "../components/pager.js";

const template = `<div id="myDiv">
<MovieList :movies="datas"/>
<Pager 
v-model="current"
:total="total" 
:page-size="pageSize" 
/>
<Loading :show="isLoading"/>
</div>`;

export default {
    template,
    mounted(){

    },
    computed:{

    },
    components:{
        MovieList,
        Pager,
        Loading
    }
}
