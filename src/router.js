import { createRouter, createWebHistory } from 'vue-router';
import HomeApp from './pages/HomeApp.vue';
import HouseCarsApp from './pages/HouseCarsApp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeApp,
        },
        {
            path: '/housecars',
            name: 'housecars',
            component: HouseCarsApp,
        },

    ]
});
export { router }