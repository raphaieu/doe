import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Kanban from '@/views/kanban/Kanban'
import Register from '@/views/Register'
import WhoIam from '@/views/static/WhoIam'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'kanban',
        path: '/kanban',
        component: Kanban
    },
    {
        name: 'whoiam',
        path: '/quem-sou',
        component: WhoIam
    }
    ,
    {
        name: 'register',
        path: '/cadastro',
        component: Register
    }
]

const router = new Router({ routes })

export default router
