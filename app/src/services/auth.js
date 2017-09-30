import firebase from 'firebase';

export function userLogged() {
  return firebase.auth().currentUser;
}

export function isLogged() {
  return userLogged() != null;
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function registerVolunteer() {

}

export function registerOrganization() {

}
