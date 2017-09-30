import http from './http';

const URL = '/organization';

export function getPendentDonations(cnpj) {
  return http.get(`${URL}/${cnpj}/pendent`);
}

export function getAcceptedDonations(cnpj) {
  return http.get(`${URL}/${cnpj}/accepted`);
}

export function getCancelledDonations(cnpj) {
  return http.get(`${URL}/${cnpj}/cancelled`);
}

export function getExpiredDonations(cnpj) {
  return http.get(`${URL}/${cnpj}/expired`);
}

export function getCompletedDonations(cnpj) {
  return http.get(`${URL}/${cnpj}/completed`);
}

export function getIncompletedDonations(cnpj) {
  return http.get(`${URL}/${cnpj}/incompleted`);
}
