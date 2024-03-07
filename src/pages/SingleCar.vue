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
        <div class="container" v-if="car!=null">
            <div class="row d-flex">
                <div class="content">
                    <div class="card black text-white" style="display: contents;">
                        <img src="https://www.pollinauto.it/wp-content/uploads/2022/03/Immagine-Auto-in-arrivo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title yellowW">{{car.modello}}</h5>
                            <p class="card-text yellow">Descrizione: <span class="text-white">{{car.descrizione}}</span></p>
                            <p class="card-text yellow">Prezzo: <span class="text-white">{{car.prezzo}} €</span></p>
                            <p class="card-text yellow">Alimentazione: <span class="text-white">{{car.alimentazione}}</span></p> 
                            <p class="card-text yellow">Anno: <span class="text-white">{{car.anno}}</span></p>
                            <p class="card-text yellow">Numero telaio: <span class="text-white">{{car.numero_telaio}}</span></p>
                            <p class="card-text yellow">Porte: <span class="text-white">{{car.porte}}</span></p>
                            <p class="card-text yellow">Carrozzeria: <span class="text-white">{{car.carrozzeria}}</span></p>
                            <p class="card-text yellow">Cavalli: <span class="text-white">{{car.cavalli}}</span></p>
                            <p class="card-text yellow">Cilindrata: <span class="text-white">{{car.cilindrata}}</span></p>
                            <p class="card-text yellow">Optionals:</p>
                            <div class="form-check form-check-inline bg-yellowW bordi" v-for="optional, index in optionals" :key="index">
                                <input class="form-check-input optional" type="checkbox" id="inlineCheckbox1" :value='optional.prezzo' >
                                <label class="form-check-label" for="inlineCheckbox1">{{ optional.name }}</label>
                            </div>
                            
                            <div class="py-3">
                                <button @click="this.show_price = !this.show_price"  class='btn bg-yellow text-white me-2'>Calcola prezzo</button>
                                <span v-if="this.show_price" class="yellow">PREZZO TOTALE: {{ TotalPrice() }}</span>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>
    
.content{
    border: 10px solid rgb(249, 203, 115);
    display: flex;
    padding: 30px;
    margin: 30px;
    background-color: rgb(48, 46, 46);
    border-radius: 20px;

    img{
        border-radius: 10px;
        width: 500px;
        object-fit: cover;
    }
}
.yellowW{
    color:rgb(249, 203, 115);

}
.yellow{
    color:rgb( 173,134,71);
    
}
.bg-yellowW{

    background-color: rgb(82, 82, 82);
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
.bordi{
    border-radius: 4px;
    width: fit-content;
}

</style>