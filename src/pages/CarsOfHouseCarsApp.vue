
<script>
import {store} from '../store.js'
import axios from 'axios';
export default {
    name:'CarsOfHouseCarCard',
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
            })
        }
    },
    
}
</script>
<template lang="">
    {{$route.params.id}}
    <div v-if="carsOfHouse.length != 0">
        {{carsOfHouse}}
        ciao
    </div>
    <div v-if="carsOfHouse == 0">
        nessun elemento trovato  
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
    
</style>