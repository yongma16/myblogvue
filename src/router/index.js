import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Article',
            component: Article
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('../components/Register.vue')
        }
    ]
})