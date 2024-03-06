<script>
export default {
    name:'HouseCarCard',
    props:{
        CarHouse:Object
    },
    
}
</script>
<template lang="">
    <div class='col-12 mt-2 color_black rounded p-3 d-flex'>

        <div class="container_img">
            <img src="https://casadellautoancona.it/wp-content/uploads/2023/07/Logo-casadellauto.jpg" alt="immagine">
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
</template>
<style lang="scss" scoped>
.container_img{
    width: 45vw;
    img{
        width: 100%;
    }
}
    
</style>