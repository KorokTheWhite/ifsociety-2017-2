import Vue from 'vue';
import Router from 'vue-router';

import OngFeed from '@/components/OngFeed';
import Login from '../components/Login';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/access/login',
      component: Login,
    },
    {
      path: '/feed',
      name: 'Feed de Doações',
      component: OngFeed,
    },
  ],
});
