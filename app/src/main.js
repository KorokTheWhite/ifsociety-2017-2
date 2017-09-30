import Vue from 'vue';
/* eslint-disable no-unused-vars */
import firebase from 'firebase';

import App from './App';
import router from './router';

const firebaseConfig = {
  apiKey: 'AIzaSyCue-ArXdWmvv8n-SqvLrwxqQfpjK0gnT0',
  authDomain: 'ifsociety-2017-2.firebaseapp.com',
  databaseURL: 'https://ifsociety-2017-2.firebaseio.com',
  projectId: 'ifsociety-2017-2',
  storageBucket: 'ifsociety-2017-2.appspot.com',
  messagingSenderId: '526702980084',
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
