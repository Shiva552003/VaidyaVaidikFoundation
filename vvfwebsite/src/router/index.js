import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/About.vue'
import Activities from '@/components/Activities.vue'
import PrivacyPolicy from '@/components/trivialComponents/privacyPolicy.vue'
import TermsAndConditions from '@/components/trivialComponents/termsAndConditions.vue'

const routes = [
    { path: '/', component: Home },    
    { path: '/activities', component: Activities},
    { path: '/about', component: About },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-and-conditions', component: TermsAndConditions }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router