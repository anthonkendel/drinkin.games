import '@/assets/main.scss';
import { router } from '@/router';
import { store } from '@/store';
import Vue from 'vue';
import { VNode } from 'vue/types/umd';
import App from './App.vue';
import '@/sw';
import { GenericPlugin } from './components/generic/plugin';

Vue.config.productionTip = false;

Vue.use(GenericPlugin);


new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app');
