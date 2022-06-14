import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

//Настройка стандартного http модуля для вызовов от api
Vue.config.productionTip = false
//Загрузка токена из локального хранилища(localStorage)
Vue.prototype.$http = axios
const token = localStorage.getItem('token')
//Проверка наличия токена. Если есть то проводим авторизацию
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
