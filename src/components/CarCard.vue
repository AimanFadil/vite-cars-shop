<script>
export default {
    props: {
        car: Object
    },
    
}
</script>
<template lang="">
    
            <div class="content">
                <div class="card black text-white" style="">
                    <img :src="car.image == null ? 'https://www.mercedes-benz.it/content/italy/it/passengercars/models/coupe/amg-gt-c192/overview/_jcr_content/root/responsivegrid/simple_stage_copy_co.component.damq1.3392150797189.jpg/mercedes-amg-gt-c192-stage-3840x3840-07-2023.jpg':`${store.Url}storage/${car.image}` " class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title yellowW">{{car.modello}}</h5>


                      <p class="card-text yellow">Prezzo: <span class="text-white">{{new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(car.prezzo)}}</span></p>

                      <p class="card-text yellow">Anno: <span class="text-white">{{car.anno}}</span></p>
                      <router-link class='btn bg-yellow text-white' :to="{ name: 'single-car', params: {id: car.id} }">Seleziona la Macchina</router-link>
                    </div>
                </div>
            </div>
</template>
<style lang="scss" scoped>

    .content{
        border: 5px solid rgb(249, 203, 115);
        width: fit-content;
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