 
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
        }
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
                        <CarCard v-for="car, index in carsOfHouse" :key="index" :car="car"/>
                    </div>
                </div>
            </div> 
        </div>
        <!-- se non esistono auto di quetsa categoria  -->
    <div v-if="carsOfHouse == 0">
        <NotFoundApp/>  
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
    
</style>