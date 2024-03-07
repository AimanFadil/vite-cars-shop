<script>
export default {
    props: {
        car: Object
    },
    
}
</script>
<template lang="">
    <div class="container">
        <div class="row d-flex">
            <div class="content">
                <div class="card black text-white" style="display: contents;">
                    <img src="https://www.mercedes-benz.it/content/italy/it/passengercars/models/coupe/amg-gt-c192/overview/_jcr_content/root/responsivegrid/simple_stage_copy_co.component.damq1.3392150797189.jpg/mercedes-amg-gt-c192-stage-3840x3840-07-2023.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title yellowW">{{car.modello}}</h5>
                      <!-- <p class="card-text yellow">Descrizione: <span class="text-white">{{car.descrizione}}</span></p> -->
                      <p class="card-text yellow">Prezzo: <span class="text-white">{{car.prezzo}}</span></p>
                      <!-- <p class="card-text yellow">Alimentazione: <span class="text-white">{{car.alimentazione}}</span></p> -->
                      <p class="card-text yellow">Anno: <span class="text-white">{{car.anno}}</span></p>
                      <!-- <p class="card-text yellow">Numero telaio: <span class="text-white">{{car.numero_telaio}}</span></p>
                      <p class="card-text yellow">Porte: <span class="text-white">{{car.porte}}</span></p>
                      <p class="card-text yellow">Carrozzeria: <span class="text-white">{{car.carrozzeria}}</span></p>
                      <p class="card-text yellow">Cavalli: <span class="text-white">{{car.cavalli}}</span></p>
                      <p class="card-text yellow">Cilindrata: <span class="text-white">{{car.cilindrata}}</span></p> -->
                      <router-link class='btn bg-yellow text-white' :to="{ name: 'single-car', params: {id: car.id} }">Seleziona la Macchina</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class='col-4'>
        <router-link class='decoration-none' :to="{ name: 'single-car', params: {id: car.id} }">
            <div class="card my-2" style="width: 18rem;"> -->
                <!-- <img class="card-img-top" :src="cars.img != null ? `${store.baseUrl}/storage/${project.logo}` : `${store.baseUrl}/placeholder/logo.jpeg`" alt="Card image cap"> -->
                <!-- <div class="card-body">
                    <h4> {{car.modello}} </h4>
                    <p class="card-text">{{ car.descrizione.substr(0, 50) }}...</p> 
                </div>
    
            </div>
        </router-link>
    </div> background-image: url(https://vf-architectures.com/wp-content/uploads/2023/09/luxury-private-garage-vielliard-francheteau-architect-1.jpg);-->
</template>
<style lang="scss" scoped>

    .container{
        background-image: url(https://cbx-prod.b-cdn.net/COLOURBOX58821536.jpg?width=800&height=800&quality=90);
    }
    .content{
        border: 10px solid rgb(249, 203, 115);
        display: flex;
        padding: 30px;
        margin: 30px;
        background-color: rgb(48, 46, 46);
        border-radius: 20px;

        img{
            border-radius: 10px;
            width: 300px;
        }
    }
    .yellowW{
        color:rgb(249, 203, 115);
    
    }
    .yellow{
        color:rgb( 173,134,71);
        
    }
    .bg-yellow{
        
        background-color: rgb( 173,134,71);
    }
    .black{
        background-image: linear-gradient(to right, rgb(36, 35, 35) 20px , rgb(63, 61, 61) 260px, rgb(83, 80, 80) );
    }
    .decoration-none{
        text-decoration: none;
    }
</style>