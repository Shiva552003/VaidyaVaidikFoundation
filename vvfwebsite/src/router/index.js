import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/About.vue'
import Activities from '@/components/services.vue'
import PrivacyPolicy from '@/components/trivialComponents/privacyPolicy.vue'
import TermsAndConditions from '@/components/trivialComponents/termsAndConditions.vue'
import Schedule from '../components/schedule.vue'
// import RefundPolicy from '@/components/trivialComponents/refundPolicy.vue'x

const routes = [
    { path: '/', component: Home },    
    { path: '/activities', component: Activities},
    { path: '/about', component: About },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms-and-conditions', component: TermsAndConditions },
    { path: '/schedule', component: Schedule },
    // { path: '/refund-policy', component: RefundPolicy },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router