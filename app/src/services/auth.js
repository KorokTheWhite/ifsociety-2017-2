import firebase from 'firebase';

import * as person from '@/api/person';
import * as organization from '@/api/organization';

function createFirebaseUser(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function userLogged() {
  return firebase.auth().currentUser;
}

export function isLogged() {
  return userLogged() != null;
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function registerVolunteer(name, email, password, cpf, address) {
  return new Promise((resolve, reject) => {
    createFirebaseUser(email, password).then((user) => {
      person.create(name, email, user.uid, cpf, address).then(() => {
        resolve(user.uuid);
      }).catch(reject);
    }).catch(reject);
  });
}

export function registerOrganization(name, email, password, cnpj, cnas) {
  return new Promise((resolve, reject) => {
    createFirebaseUser(email, password).then((user) => {
      organization.create(name, email, user.uid, cnpj, cnas).then(() => {
        resolve(user.uid);
      }).catch(reject);
    }).catch(reject);
  });
}
