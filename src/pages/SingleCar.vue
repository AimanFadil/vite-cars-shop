<script>
import {store} from '../store.js';
import axios from 'axios';

    export default {
        data() {
            return {
                store,
                car: null,
                optionals: [],
                show_price: false
            }
        },
        created(){
            this.GetCarData(),
            this.GetOptional()
        },
        methods: {
            GetCarData() {
                axios.get(`${this.store.Url}api/car/${this.$route.params.id}`).then((response) => {
                    this.car = response.data.results;
                    
                })
            },
            GetOptional() {
                axios.get(`${this.store.Url}api/optional`).then((response) => {
                    this.optionals = response.data.results;
                    console.log(this.optionals)
                    
                })
            },
            TotalPrice() {
                let optionals_selected = document.querySelectorAll('.optional:checked');
                let sum = 0;
                for (let i = 0; i < optionals_selected.length; i++ ) {
                    let price_optional = 0
                    price_optional = parseInt(optionals_selected[i].value)
                    console.log(price_optional)
                    sum += price_optional;
                }
                let total_price = parseInt(this.car.prezzo + sum);
                total_price = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(total_price)
                return total_price
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
                            <h3>PREZZO BASE: {{ car.prezzo }}€</h3>
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
                    <div class="form-check form-check-inline" v-for="optional, index in optionals" :key="index">
                        <input class="form-check-input optional" type="checkbox" id="inlineCheckbox1" :value= 'optional.prezzo' >
                        <label class="form-check-label" for="inlineCheckbox1">{{ optional.name }}</label>
                    </div>
                    <button @click="this.show_price = !this.show_price">Calcola prezzo</button>
                    <div v-if="this.show_price">PREZZO TOTALE: {{ TotalPrice() }}</div>
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