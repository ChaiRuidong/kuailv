import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import my from '../../components/my.vue'
import login from '../../components/login.vue'
import register from '../../components/register.vue'
import sort from '../../components/sort.vue'
import detail from '../../components/detail.vue'
import shop from '../../components/shop.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: first,
            children: [
                {
                    path: '/index',
                    component: index,
                },
                {
                    path: '/sort',
                    component: sort
                },
                {
                    path: '/shop',
                    component: shop
                },
                {
                    path: '/my',
                    component: my,
                }
            ],
            redirect: '/index'
        },
        {
            path: '/login',
            component: login,
        },
        {
            path: '/register',
            component: register,
        },
        {
            path: '/detail',
            component: detail,
        }
    ]
})
export default router