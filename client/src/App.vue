<template id="app">
  <body>
    
    <div class="app_container">
      <div class="header_container" :class="{ light_mode: isActive}">
        <NavigationMobile/>
      </div>
      <aside class="slider_container" :class="{ light_mode: isActive}" id="left">
        <NavigationDesktop/>
      </aside>
      <div class="content_container" :class="{ light_mode: isActive}" id="right">
        <div id="light_mode_button">
          <img src="./assets/img/dl.webp" @click="lightMode" class="theme_img">
        </div>
        <router-view />
      </div>
    </div>
  </body>
</template>
<script>
import NavigationMobile from './components/NavigationMobile.vue';
import NavigationDesktop from './components/NavigationDesktop.vue';
//import { checkNetwork } from './js/mrkt_api.js';



import { ref, inject } from 'vue';
import { useStore } from 'vuex';


export default {
  name: "App",
  components: {
    NavigationMobile,
    NavigationDesktop
  },
  setup() {
    const store = useStore()
    const $moralis = inject('$moralis')

    const isActive = ref(false)
    const lightMode = async () => {
      isActive.value = !isActive.value;
      return
    }

    $moralis.onAccountChanged((chain) => {
      console.log(chain);
      $moralis.User.logOut()
      store.state.user = {}
      store.state.address = null
      store.state.provider = null
    });

    return {
      isActive,
      lightMode
    }
  }
}
</script>
<style lang="scss">
@import "./assets/style/main.scss";


@import '~primevue/resources/themes/luna-amber/theme.css';
@import '~primevue/resources/primevue.min.css';
</style>
