<template>
  <div >
    <h1>Login Module</h1>
    <p>METAMASK</p>
    <template v-if="isAuthenticated">
      <p>disconnect to logout</p>
    </template>
    <template v-else>
      <button @click="metaLogin">Metamask</button>
    </template>
    <p>ACCOUNT BALANCE/LOGOUT</p>
  </div>
</template>

<script>
import { onMounted, inject, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Login",
    setup() {
      const store = useStore()
      const $moralis = inject('$moralis')


      const setUser = (payload) => store.commit('setUser', payload)
      const setAccountAddress = (address) => store.commit('setAccountAddress', address)
      const setProvider = (provider) => store.commit('setProvider', provider)

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
        } catch (error) {
          console.log(error)
        }

        
      }
      const handleCurrentUser = async () => {
          const provider = await $moralis.enableWeb3()
          const chainId = await provider.chainId;
          checkNetwork(chainId)
          const user = $moralis.User.current()
          if (user) {
            const address = user.get('ethAddress')
            setUser(user)
            setAccountAddress(address)
            setProvider(provider)

          }
        }

        onMounted(() => {
          console.log(Object.keys(store.state.user))
          handleCurrentUser()
          console.log("mounted")
        })
      return {
        metaLogin,
        isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
        user: computed(() => store.state.user),
        address: computed(() => store.state.address),
        provider: computed(() => store.state.provider),
      }
    }
}
</script>

<style>

</style>