import Vue from 'vue';
import Router from 'vue-router';

import Access from '../components/Access';
import OngFeed from '../components/OngFeed';
import Login from '../components/Login';
import PersonSettings from '../components/PersonSettings';
import OngSettings from '../components/OngSettings';
import AddDonation from '../components/AddDonation';
import PersonRegister from '../components/PersonRegister';
import OrganizationPerson from '../components/OngRegister';

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
    {
      path: '/settings/person',
      component: PersonSettings,
    },
    {
      path: '/settings/ong',
      component: OngSettings,
    },
    {
      path: '/donation/add',
      component: AddDonation,
    },

  ],
});
