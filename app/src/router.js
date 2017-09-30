import Vue from 'vue';
import Router from 'vue-router';

//Components
import PersonCadastre from './components/Header.vue';

Vue.use(Router);

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
      {
        path: 'signup/civil',
        component: PersonCadastre
      }
    ]
});
