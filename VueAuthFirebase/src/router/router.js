import {createRouter, createWebHistory} from 'vue-router'
import Auth from '../components/UI/Auth.vue'
import Registration from '../components/UI/Registration.vue'
import Main from '../components/UI/Main.vue'
const routes = [
    {
        path: '/auth',
        component: Auth,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/registration',
        component: Registration,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/',
        component: Main,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;