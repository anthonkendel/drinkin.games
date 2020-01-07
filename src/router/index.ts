import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const TheHome = () => import('@/views/TheHome.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: TheHome,
  },
];

export const router = new VueRouter({ routes });
