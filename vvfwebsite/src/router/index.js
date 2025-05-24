import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/About.vue'
import Activities from '../components/activities.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/activities', component: Activities }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router