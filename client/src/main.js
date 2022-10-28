import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSmoothScroll from 'vue3-smooth-scroll'
import Moralis from './plugins/moralis'
import PrimeVue from 'primevue/config';
import ProgressBar from 'primevue/progressbar';


const app = createApp(App)

app
.component('ProgressBar', ProgressBar)
.provide('$moralis', Moralis)
.use(PrimeVue)
.use(VueSmoothScroll)
.use(store)
.use(router)
.mount('#app')
