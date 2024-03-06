<script>
export default {
    props: {
        car: Object
    },
    
}
</script>
<template lang="">
    <div class='col-4'>
        <router-link :to="{ name: 'single-car', params: {id: car.id} }">
            <div class="card my-2" style="width: 18rem;">
                <!-- <img class="card-img-top" :src="cars.img != null ? `${store.baseUrl}/storage/${project.logo}` : `${store.baseUrl}/placeholder/logo.jpeg`" alt="Card image cap"> -->
                <div class="card-body">
                    <h4> {{car.modello}} </h4>
                    <p class="card-text">{{car.descrizione }}...</p> 
                </div>
    
            </div>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
    
</style>