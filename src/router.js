import { createRouter, createWebHistory } from 'vue-router';
import HomeApp from './pages/HomeApp.vue';
import NotFoundApp from './pages/NotFoundApp.vue'

import AppCars from './pages/AppCars.vue';
import SingleCar from './pages/SingleCar.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeApp,
        },
        {
            path: '/cars',
            name: 'cars',
            component: AppCars
        },
        {
            path: '/cars/:id',
            name: 'single-car',
            component: SingleCar
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundApp
        }

    ]
});
export { router }