import Vue from 'vue';

import router from './router';
import App from './components/App.vue';

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

/* eslint-disable no-new */
