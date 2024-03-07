<script>
import CarCard from '../components/CarCard.vue';
import AppLoader from '../components/AppLoader.vue';
import {store} from '../store.js';
import axios from 'axios';

    export default {
        name: 'AppCars',
        components:{
        CarCard,
        AppLoader
    }, 
    data() {
        return {
            store,
            cars: [],
        }
    },
    created(){
        this.getcar()
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
                <div class="col-12 d-flex justify-content-center transparent_"> 
                    <span class="badge rounded-pill hover_color m-2 p-3" v-for="CarHouse, index in store.houseCars" :key="index">
                        <router-link :to="{ name: 'housecars-car', params: {id: CarHouse.id} }" class="dropdown-item gold_color hover_bg">
                            <strong>{{CarHouse.nome}}</strong>
                        </router-link>
                    </span>
                 </div>
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.transparent_{
background-color: rgba(0, 0, 0, 0.32);
}

.hover_color{
    color: white;
    background-color: rgb(54, 54, 54);
    &:hover{
            color: rgb(173, 134, 71);
    }
}
    
</style>