
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
        }
    },
    
}
</script>
<template lang="">
<div class="container">
    <div class="row">
        <HouseCarCard v-for="CarHouse, index in store.houseCars" :key="index" :CarHouse="CarHouse"/>
    </div>
</div>
</template>
<style lang="scss" scoped>
    
</style>