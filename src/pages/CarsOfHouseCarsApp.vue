
<script>
import {store} from '../store.js'
import axios from 'axios';
import CarCard from '../components/CarCard.vue';
import AppLoader from '../components/AppLoader.vue';
import NotFoundApp from './NotFoundApp.vue';
export default {
    name:'CarsOfHouseCarCard',
    components:{
        CarCard,
        AppLoader,
        NotFoundApp
    }, 
    data(){
        return{
            store,
            carsOfHouse:[],
        }
    },
    created() {
        this.getCarsOfHouse();
    },
    methods: {
        getCarsOfHouse(){
            axios.get(`${this.store.Url}api/car/carhouse/${this.$route.params.id}`).then((response)=>{
                 this.carsOfHouse=response.data.results
                 store.loading=false
            })
        },
    },
    
}
</script>
<template lang="">
    <!-- controllo del esistenza delle auto di una determinata casa automobilistica -->
    <div v-if="carsOfHouse.length != 0">
         <AppLoader v-if="store.loading"/>
            <div v-else> 
                <div class="container">
                    <div class='row'>
                        <div class="col-12 d-flex justify-content-center transparent_" @click="getCarsOfHouse()"> 
                            <span class="badge rounded-pill hover_color m-2 p-3 " v-for="CarHouse, index in store.houseCars" :key="index">
                            <router-link :to="{ name: 'housecars-car', params: {id: CarHouse.id} }" class="dropdown-item gold_color hover_bg"> <strong>{{CarHouse.nome}}</strong></router-link>
                            </span>
                        </div>
                        <CarCard v-for="car, index in carsOfHouse" :key="index" :car="car"/>
                    </div>
                </div>
            </div> 
    </div>
        <!-- se non esistono auto di quetsa categoria  -->
    <div v-if="carsOfHouse == 0">
        <AppLoader v-if="store.loading"/>
            <div v-else> 
                <div class="container">
                    <div class='row'>
                        <div class="col-12 d-flex justify-content-center transparent_" @click="getCarsOfHouse()"> 
                            <span class="badge rounded-pill hover_color m-2 p-3 " v-for="CarHouse, index in store.houseCars" :key="index">
                            <router-link :to="{ name: 'housecars-car', params: {id: CarHouse.id} }" class="dropdown-item gold_color hover_bg"> <strong>{{CarHouse.nome}}</strong></router-link>
                            </span>
                        </div>
                        <CarCard v-for="car, index in carsOfHouse" :key="index" :car="car"/>
                    </div>
                </div>
            </div> 
            <div class="container ">
                <div class="row d-flex justify-content-center ">
                    <div class="col-5 color_errore rounded text-center align-items-center mt-5 ">
                       <h1 class="text-white">
                             <i class="fa-solid fa-circle-exclamation" style="color: #ffffff;"></i>
                             Non ci sono risultati da mostrare :( 
                        </h1>
                    </div>
                </div>
            </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
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

.color_errore{
    background-color: rgba(255, 0, 0, 0.322);
}
</style>