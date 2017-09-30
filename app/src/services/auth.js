import firebase from 'firebase';

import * as Person from '@/api/person';
import * as Organization from '@/api/organization';

export function userLogged() {
  return firebase.auth().currentUser;
}

export function isLogged() {
  return userLogged() != null;
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function registerVolunteer(name, email, uuid, cpf, address) {
  Person.create(name, email, uuid, cpf, address);
}

export function registerOrganization(name, email, uuid, cnpj, cnas, address) {
  Organization.create(name, email, uuid, cnpj, cnas, address);
}
