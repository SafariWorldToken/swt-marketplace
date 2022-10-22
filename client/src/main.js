import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Moralis from './plugins/moralis'




const app = createApp(App)

app
.provide('$moralis', Moralis)
.use(VueSmoothScroll)
.use(store)
.use(router)
.mount('#app')
