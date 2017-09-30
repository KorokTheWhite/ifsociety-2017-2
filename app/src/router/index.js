import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import OngFeed from '@/components/OngFeed';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/feed',
      name: 'Feed de Doações',
      component: OngFeed,
    },
  ],
});
