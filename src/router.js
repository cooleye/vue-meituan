import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import TuanGou from './pages/TuanGou.vue'
import Order from './pages/Order.vue'
import Pay from './pages/Pay.vue'
import Me from './pages/Me.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:"/home"
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/tg',
            component:TuanGou
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/pay',
            component:Pay
        },
        {
            path:'/me',
            component:Me
        },
    ]
})

export default router;