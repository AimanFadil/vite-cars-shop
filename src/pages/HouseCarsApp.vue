
<script>
import {store} from '../store.js';
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import HouseCarCard from '../components/HouseCarCard.vue';
export default {
name: 'HouseCarsApp',
components: {
    HouseCarCard,
    AppLoader
  },
  data(){
        return{
            store,
        }
    },
    created(){
        setTimeout(() => {
            store.loading = false
        }, 2000);
    }
}
</script>
<template lang="">
<AppLoader v-if="store.loading"/>
<div v-else >
    <div class="container">
        <div class="row">
            <HouseCarCard v-for="CarHouse, index in store.houseCars" :key="index" :CarHouse="CarHouse"/>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
    
</style>