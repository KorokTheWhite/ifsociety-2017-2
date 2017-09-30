import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import PersonSettings from '../components/PersonSettings';
import OngSettings from '../components/OngSettings';
import AddDonation from '../components/AddDonation';

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
      path: '/person-settings',
      component: PersonSettings,
    },
    {
      path: '/ong-settings',
      component: OngSettings,
    },
    {
      path: '/add-donation',
      component: AddDonation,
    },

  ],
});
