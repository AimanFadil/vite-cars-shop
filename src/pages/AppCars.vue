<script>
import carCard from './components/CarCard.vue';
    export default {
        components:{
        carCard,
    }, 
    }
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center my-3">
                    Le nostre auto
                </div>
            </div>
            <div class='row'>
                <CarCard />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>