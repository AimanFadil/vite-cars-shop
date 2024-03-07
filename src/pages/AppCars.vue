<script>
import CarCard from '../components/CarCard.vue';
import AppLoader from '../components/AppLoader.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppCars',
    components: {
        CarCard,
        AppLoader
    },
    data() {
        return {
            store,
            cars: [],
        }
    },
    created() {
        this.getcar();

    },
    methods: {
        getcar() {
            axios.get(`${this.store.Url}api/car`).then((response) => {
                this.cars = response.data.results;
                store.loading = false
            })
        }
    }
}
</script>

<template lang="">
    <AppLoader v-if="store.loading"/>
    <div v-else>
        <div class="container">
            <div class='row'>
            <div class="col-12 d-flex justify-content-center"> 
                <span class="badge rounded-pill  m-2 color_gold bg-dark" v-for="CarHouse, index in store.houseCars" :key="index">
                    <router-link :to="{ name: 'housecars-car', params: {id: CarHouse.id} }" class="dropdown-item gold_color hover_bg">{{CarHouse.nome}}</router-link>
                </span>
            </div>
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>