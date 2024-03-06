
<script>
import {store} from '../store.js';
export default {
  name: 'HeaderApp',
  data(){
        return{
            store,
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
                      <li class="list-inline-item align-self-center gold_color mx-3">
                        <strong>
<!--                             <router-link :to="/"
                            class="link-offset-2 link-underline link-underline-opacity-0   change-color">
                                Home
                            </router-link> -->
                            <i class="fa-solid fa-house" ></i>
                            Home
                        </strong>
                      </li>
                      <li class="list-inline-item align-self-center gold_color mx-3">
                        <strong>
<!--                             <router-link :to="/"
                            class="link-offset-2 link-underline link-underline-opacity-0   change-color">
                                 Cars
                            </router-link> -->
                            <i class="fa-solid fa-car" ></i>
                            Cars
                        </strong>
                      </li>
                      <li class="list-inline-item align-self-center gold_color mx-3">
                        <strong>
<!--                             <router-link :to="/"
                            class="link-offset-2 link-underline link-underline-opacity-0   change-color">
                                House Cars
                            </router-link> -->
                            <i class="fa-solid fa-industry"></i>
                            House Cars
                        </strong>
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
        width: 200px; ;  
    }
    .gold_color{
        color:rgb( 173,134,71) ;

        &:hover{
            color: rgb(249, 203, 115);
        }
    }
}
</style>