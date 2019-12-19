import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Sandbox = () => import('@/Sandbox.vue');
const Home = () => import('@/views/Home.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Sandbox',
    path: '/sandbox',
    component: Sandbox,
  
  }
];

export const router = new VueRouter({ routes });
