
<script>
import {store} from '../store.js';
import axios from 'axios';
import HouseCarCard from '../components/HouseCarCard.vue';
export default {
name: 'HouseCarsApp',
components: {
    HouseCarCard
  },
  data(){
        return{
            store,
            houseCars:[],
        }
    },
    created() {
        this.getHouseCars();
    }, 
    methods: {
        getHouseCars(){
            axios.get(`${this.store.Url}api/carhouse`).then((response)=>{
                this.houseCars=response.data.results; })
        }   
    },
}
</script>
<template lang="">
<div class="container">
    <div class="row">
        <HouseCarCard v-for="CarHouse, index in houseCars" :key="index" :CarHouse="CarHouse"/>
    </div>
</div>
</template>
<style lang="scss" scoped>
    
</style>