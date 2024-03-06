import { createRouter, createWebHistory } from 'vue-router';
import HomeApp from './pages/HomeApp.vue';
import AppCars from './pages/AppCars.vue';
import SingleCar from './pages/SingleCar.vue';
import HouseCarsApp from './pages/HouseCarsApp.vue';
// import CarsOfHouseCarsApp from './pages/CarsOfHouseCarsApp.vue';
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
            path: '/housecars',
            name: 'housecars',
            component: HouseCarsApp,
        },
        // {
        //     path: '/housecars/:id',
        //     name: 'housecars-car',
        //     component: CarsOfHouseCarsApp
        // },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundApp
        },

    ]
});
export { router }