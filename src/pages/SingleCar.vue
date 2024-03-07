<script>
import {store} from '../store.js';
import axios from 'axios';

    export default {
        data() {
            return {
                store,
                car: null
            }
        },
        created(){
            this.GetCarData()
        },
        methods: {
            GetCarData() {
                axios.get(`${this.store.Url}api/car/${this.$route.params.id}`).then((response) => {
                    this.car = response.data.results;
                    
                })
            }
        }
    }
</script>
<template lang="">
    <div class="cont">
        <img src="https://static.vecteezy.com/ti/vettori-gratis/p1/2048582-disegno-di-un-auto-argento-su-sfondo-nero-vettoriale.jpg" alt="">
    </div>
    <!-- <div class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <h2 class="card-title m-2">{{ car.modello }}</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>PREZZO: {{ car.prezzo }}€</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>ALIMENTAZIONE: {{ car.alimentazione }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>ANNO: {{ car.anno }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>DESCRIZIONE: {{ car.descrizione }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>NUMERO TELAIO: {{ car.numero_telaio }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>TRAZIONE: {{ car.trazione }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>PORTE: {{ car.porte }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>CARROZZERIA: {{ car.carrozzeria }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>CAVALLI: {{ car.cavalli }}</h3>
                        </li>
                        <li class="list-group-item bg-info-subtle border border-2 border-info">
                            <h3>CILINDRATA: {{ car.cilindrata }}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> -->
</template>
<style lang="scss" scoped>
.cont{
    img{
        width: 100%;
        height: 100vh;
        
    }
}
    
</style>