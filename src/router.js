import { createRouter, createWebHistory } from 'vue-router';

import AppCars from './pages/AppCars.vue';
import SingleCar from './pages/SingleCar.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        /* {
            path: '/',
            name: '',
            component: ,
        }, */
        {
            path: '/cars',
            name: 'cars',
            component: AppCars
        },
        {
            path: '/cars/:id',
            name: 'single-car',
            component: SingleCar
        }
    ]
});
export { router }