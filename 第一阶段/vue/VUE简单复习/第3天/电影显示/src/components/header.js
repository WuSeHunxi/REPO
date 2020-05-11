const  template=`
    <nav>
        <div class="left">
            <router-link to="/">首页<router-link/>
            <router-link to="/movie">电影页<router-link/>
        </div>
        <div class="right" v-if="">
            <span></span>
            <button>退出登录<button/>
        </div>
    </nav>
`;

export default {
    template
}