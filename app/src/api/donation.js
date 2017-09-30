import http from './http';

const URL = '/donation';

export function saveDonation(name, date, state, products) {
  return http.post(URL, {
    name, date, state, products,
  });
}

export function getPendentDonations(cpf) {
  return http.get(`${URL}/pendent/${cpf}`);
}

export function getAcceptedDonations(cpf) {
  return http.get(`${URL}/accepted/${cpf}`);
}

export function getCancelledDonations(cpf) {
  return http.get(`${URL}/cancelled/${cpf}`);
}

export function getExpiredDonations(cpf) {
  return http.get(`${URL}/expired/${cpf}`);
}

export function getCompletedDonations(cpf) {
  return http.get(`${URL}/completed/${cpf}`);
}

export function getIncompletedDonations(cpf) {
  return http.get(`${URL}/incompleted/${cpf}`);
}
