<script>
import CarCard from '../components/CarCard.vue';
import {store} from '../store.js';
import axios from 'axios';

    export default {
        name: 'AppCars',
        components:{
        CarCard,
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
                
            })
        }
    }
    }
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center my-3">
                    Le nostre auto
                </div>
            </div>
            <div class='row'>
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>