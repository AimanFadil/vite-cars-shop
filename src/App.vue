<script>
import { store } from './store.js';
import HeaderApp from './components/HeaderApp.vue';
import AppLoader from './components/AppLoader.vue';

export default {
  components: {
   HeaderApp,
   AppLoader
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template lang="">
<div>
  <AppLoader/>
  <HeaderApp/>
  <router-view></router-view>
</div>
</template>

<style lang="scss" >
@use './styles/generals.scss';

</style>