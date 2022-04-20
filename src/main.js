import Vue,{ createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import CountryFlag from 'vue-country-flag-next'


createApp(App).mount('#app')
Vue.component('country-flag-next', CountryFlag)
