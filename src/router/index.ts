import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Sandbox = () => import('@/Sandbox.vue');
const Start = () => import('@/views/Start.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    name: 'Start',
    path: '/',
    component: Start,
  },
  {
    name: 'Sandbox',
    path: '/sandbox',
    component: Sandbox,
  
  }
];

export const router = new VueRouter({ routes });
