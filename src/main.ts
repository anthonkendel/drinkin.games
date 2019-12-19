import '@/assets/main.scss';
import { router } from '@/router';
import { store } from '@/store';
import Vue from 'vue';
import { VNode } from 'vue/types/umd';
import App from '@/App.vue';
import '@/sw';
import { ComponentPlugin } from '@/logic/ComponentPlugin';

Vue.config.productionTip = false;

Vue.use(ComponentPlugin);


new Vue({
  router,
  store,
  render: (h): VNode => h(App)
}).$mount('#app');
