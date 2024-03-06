<script>
import {store} from '../store.js';
export default {
    name: 'HomeApp',
  data(){
        return{
            store,
        }
    },
    
}
</script>
<template lang="">
    <div class="container_homepage">
        <div class="blur_effect d-flex justify-content-center align-items-center">
            <div class="slogan p-4 text-center">
                <h2>Prestazioni high-tech a un prezzo low-tech</h2>
                <p class="my-2 gold_color"> 
                    <i class="fa-solid fa-arrow-pointer me-1"></i>
                    Clicca su Cars per scoprire la nostra gamma di auto nuove 
                </p>        
            </div>
        </div>     
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;

.container_homepage{
    
width: 100vw;
height: 90vh;
background-image:url(../assets/home.jpeg);
background-size: cover;

  .blur_effect{
    background-color: rgba(27, 27, 27, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(0.2px);
    width: 100%;
    height: 100%;

    .slogan{
        background-color: rgba(36, 36, 36, 0.7);
        border-radius: 15px;
        color:white;
        font-family: "Maven Pro", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;

        .gold_color{
            color:rgb( 173,134,71)
        }
    }
  }
    

}
    
</style>