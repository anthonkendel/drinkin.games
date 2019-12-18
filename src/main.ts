import "@/assets/main.scss";
import { router } from '@/router';
import { store } from '@/store';
import Vue from 'vue';
import { VNode } from 'vue/types/umd';
import App from './App.vue';
import '@/sw';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app')
