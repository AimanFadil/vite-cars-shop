<script>
 import HeaderApp from './components/HeaderApp.vue'; 
export default {
  components: {
    HeaderApp
  },
}
</script>
<template lang="">
  <HeaderApp/>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';

</style>