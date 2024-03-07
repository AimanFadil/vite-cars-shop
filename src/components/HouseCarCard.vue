<script>
import {store} from '../store.js'
export default {
    name:'HouseCarCard',
    props:{
        CarHouse:Object
    },
    data() {
        return {
            store,
        }
    },
    
}
</script>
<template lang="">
<router-link class=" link-offset-2 link-underline link-underline-opacity-0" :to="{ name: 'housecars-car', params: {id: CarHouse.id} }">
    <div class='col-12 mt-2 color_black rounded p-3 d-flex'>

        <div class="container_img">
            <img :src="CarHouse.logo == null ? 'https://casadellautoancona.it/wp-content/uploads/2023/07/Logo-casadellauto.jpg': `${store.Url}storage/${CarHouse.logo}`" alt="logo">
        </div>
             
         <div class="mx-5  ">
            <h3 class="color_gold fw-bolder">{{CarHouse.nome}}</h3>
            <p><strong>Tipologia: </strong>{{CarHouse.tipologia}}</p>
            <p><strong>Indirizzo: </strong>{{CarHouse.indirizzo}}</p>
            <p><strong>Indirizzo Email: </strong>{{CarHouse.mail}}</p>
            <p><strong>Telefono: </strong>{{CarHouse.tel}}</p>
            <p><strong>Social: </strong>{{CarHouse.social}}</p>
         </div>          
    </div>
</router-link>    
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
        .container_img{
            width: 45vw;
           
            img{
                width: 500px;
                height: 250px;
                object-fit: contain;
            }
        } 
</style>