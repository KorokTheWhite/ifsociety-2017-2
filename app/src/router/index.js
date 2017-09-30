import Vue from 'vue';
import Router from 'vue-router';

import About from '../components/About';
import Access from '../components/Access';
import Login from '../components/Login';
import PersonSettings from '../components/PersonSettings';
import OngSettings from '../components/OngSettings';
import AddDonation from '../components/AddDonation';
import PersonRegister from '../components/PersonRegister';
import OrganizationPerson from '../components/OngRegister';
import OngLandingPage from '../components/OngLandingPage';
import PersonLandingPage from '../components/PersonLandingPage';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: About,
    },
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
      path: '/ong',
      name: 'Home Ong',
      component: OngLandingPage,
    },
    {
      path: '/person',
      name: 'Home Pessoa',
      component: PersonLandingPage,
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
