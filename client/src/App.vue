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
        <div class='login-container'>
          <h1>Login Module</h1>
          <p>METAMASK</p>
          <template v-if="isAuthenticated">
            <p>disconnect to logout</p>
            <h1>USER</h1>
            <p>{{user_ref}}</p>
            <button @click="switchCurrentUser">Change User/Logout</button>
          </template>
          <template v-else>
            <button @click="metaLogin">USER LOGIN</button>
          </template>
          <p>ACCOUNT BALANCE/LOGOUT</p>
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



import { ref, inject, onMounted, computed } from 'vue';
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
    const user_ref = ref(store.state.address)

    const setUser = (payload) => store.commit('setUser', payload)
    const setAccountAddress = (address) => store.commit('setAccountAddress', address)
    const setProvider = (provider) => store.commit('setProvider', provider)

    const isActive = ref(false)
    const lightMode = async () => {
      isActive.value = !isActive.value;
      return
    }
    const checkNetwork = async (chainId) => {
      if ( chainId != 56 ) {
            //store.state.modal["messageModal"]["message"] = "switching network...";
            //store.state.modal["messageModal"]["status"] = true;
            const newId = 56;
            await $moralis.switchNetwork(newId);
            //store.state.modal["messageModal"]["status"] = false;
            return
        }
      else {
        console.log('network okay')
      }
    }
    const metaLogin = async () => {
      try {
        const provider = await $moralis.enableWeb3()
        const chainId = await provider.chainId;
        checkNetwork(chainId)
        const user = await $moralis.Web3.authenticate()
        const address = user.get('ethAddress')
        setUser(user)
        setAccountAddress(address)
        setProvider(provider)
        //getUserNfts()
        console.log(user)
        user_ref.value = address
      } catch (error) {
        console.log(error)
      }

    }
    const switchCurrentUser = async () => {
      try {
          $moralis.User.logOut()
          store.state.user = {}
          store.state.address = null
          store.state.provider = null
        } catch (error) {
          console.log(error)
      }
    }

      onMounted(() => {
        console.log("mounted")
      })
    $moralis.onAccountChanged((chain) => {
      console.log(chain);
      const isWeb3Active = $moralis.ensureWeb3IsInstalled();
      $moralis.User.logOut()
      store.state.user = {}
      store.state.address = null
      store.state.provider = null
      if(isWeb3Active) {
        return isWeb3Active
      } else {
        window.location.reload();
      }

    });
    $moralis.onChainChanged((chain) => {
      console.log(chain);
      if (chain != 0x38) {
        $moralis.User.logOut()
        store.state.user = {}
        store.state.address = null
        store.state.provider = null
        window.location.reload();
      }
    });


    return {
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
      user: computed(() => store.state.user),
      address: computed(() => store.state.address),
      provider: computed(() => store.state.provider),
      isActive,
      lightMode,
      metaLogin,
      switchCurrentUser,
      user_ref
    }
  }
}
</script>
<style lang="scss">
@import "./assets/style/main.scss";


@import '~primevue/resources/themes/luna-amber/theme.css';
@import '~primevue/resources/primevue.min.css';
</style>
