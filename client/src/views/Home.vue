<template>
  <div class="content_grid home">
    <div class="top_container">
      <div class="top_content">
        <h1>WELCOME</h1>
        <p>CREATE - CONSERVE - NATUREFI</p>
      </div>
    </div>
    <!--
    <div class="login_container">
      <Login/>
    </div>
    -->
    <div class="filter_container">
      <Filter/>
    </div>
    <div class="grid_container">
      <NftGrid :gridTitle="gridTitle"/>
    </div>
  </div>
</template>

<script>
//import Login from '@/components/Login.vue';
import NftGrid from '@/components/NftGrid.vue';
import Filter from '@/components/Filter.vue';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    //Login,
    NftGrid,
    Filter
  },
  setup() {
    const gridTitle = ref("User Collection")
    return { gridTitle }
  }

}
</script>


<style lang="scss" scoped>

</style>