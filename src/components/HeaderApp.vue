
<script>
import {store} from '../store.js';
import axios from 'axios';
export default {
  name: 'HeaderApp',
  data(){
        return{
            store,
        }
    },
    created() {
        this.getHouseCars();
    }, 
    methods: {
        getHouseCars(){
            axios.get(`${this.store.Url}api/carhouse`).then((response)=>{
                this.store.houseCars=response.data.results; })
        }   
    }, 
}
</script>
<template lang="">
  <header class="color_header">
          <div class="container p-3 ">
              <div class="row d-flex justify-content-between">
                <img src="../assets/logo-png.png" alt="" class="size_">
                  <ul class="list-unstyled list-inline w-50 m-0 d-flex justify-content-end ">
                      <li class="list-inline-item align-self-center  mx-3">
                        <strong>

                          <router-link :to="{name: `home`}"
                            class=" gold_color link-offset-2 link-underline link-underline-opacity-0">
                                <i class="fa-solid fa-house" ></i>
                                Home
                            </router-link>

                        </strong>
                      </li>
                      <li class="list-inline-item align-self-center gold_color mx-3">
                        <strong>
<!--                             <router-link :to="{name:}"
                            class="gold_color  link-offset-2 link-underline link-underline-opacity-0">
                                 Cars
                            </router-link> -->
                            <i class="fa-solid fa-car" ></i>
                            Cars
                        </strong>
                      </li>
                      <li class="list-inline-item align-self-center gold_color mx-3">
                        <strong>
                           <router-link :to="{name: `housecars` }"
                            class="gold_color link-offset-2 link-underline link-underline-opacity-0 ">
                                <i class="fa-solid fa-industry"></i>
                                House Cars
                            </router-link> 
                        </strong>
                      </li>
                      <li class="d-flex">
                        <div class="btn-group ">
                          <div class=" align-self-center dropdown-toggle gold_color" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            <strong>Filtra per Marca</strong> 
                          </div>
                          <ul class="dropdown-menu bg-black" aria-labelledby="defaultDropdown">
                            <li v-for="CarHouse, index in store.houseCars" :key="index">
                              <router-link :to="{ name: 'housecars-car', params: {id: CarHouse.id} }" class="dropdown-item gold_color hover_bg">{{CarHouse.nome}}</router-link>
                            </li>     
                          </ul>
                        </div>
                      </li> 
                  </ul>
              </div>  
          </div>
      </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;

.color_header
{
  font-family: "Kode Mono", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  background-color: rgb(0, 0, 0); /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, black 20px , rgb(46, 46, 46) 260px, rgb(82, 82, 82) );
    .size_{
        width: 200px;  
    }
    .gold_color{
        color:rgb( 173,134,71) ;

        &:hover{
            color: rgb(249, 203, 115);
        }

    }
    .hover_bg{

      &:hover{
        background-color: black;
      }
    }
}
</style>