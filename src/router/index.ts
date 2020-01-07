import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const TheHome = () => import('@/views/TheHome.vue');
const TheGame = () => import('@/views/TheGame.vue');

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    component: TheHome,
  },
  {
    name: 'Game',
    path: '/:gId',
    props: true,
    component: TheGame,
  }
];

export const router = new VueRouter({ routes });
