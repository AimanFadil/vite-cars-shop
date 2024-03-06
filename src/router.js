import { createRouter, createWebHistory } from 'vue-router';
import HomeApp from './pages/HomeApp.vue';
import NotFoundApp from './pages/NotFoundApp.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeApp,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundApp
        }

    ]
});
export { router }