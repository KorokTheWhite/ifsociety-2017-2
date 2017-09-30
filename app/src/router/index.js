import Vue from 'vue';
import Router from 'vue-router';

import Access from '../components/Access';
import OngFeed from '@/components/OngFeed';
import Login from '../components/Login';
import PersonRegister from '../components/PersonRegister';
import OrganizationPerson from '../components/OrganizationRegister';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/access',
      component: Access,
      children: [
        {
          path: 'login',
          component: Login,
        },
        {
          path: 'register/person',
          component: PersonRegister,
        },
        {
          path: 'register/organization',
          component: OrganizationPerson,
        },
      ],
    },
    {
      path: '/feed',
      name: 'Feed de Doações',
      component: OngFeed,
    },
  ],
});
