<script>
import { store } from './store.js';
import HeaderApp from './components/HeaderApp.vue';


export default {
  components: {
    HeaderApp,

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
    <HeaderApp/>
    <router-view></router-view>
</div>
</template>

<style lang="scss">
@use './styles/generals.scss';
</style>