import Vue from 'vue';
import Router from 'vue-router';

import About from '../components/About';
import Access from '../components/Access';
import Login from '../components/Login';
import PersonRegister from '../components/PersonRegister';
import OrganizationPerson from '../components/OrganizationRegister';
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
  ],
});
