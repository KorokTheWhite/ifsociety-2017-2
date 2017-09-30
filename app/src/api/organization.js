import http from './http';

const URL = '/organization/';

export function create(name, email, uuid, cnpj, cnas, address) {
  return http.post(URL, {
    name, email, uuid, cnpj, cnas, address,
  });
}

export function get(cnpj) {
  return http.get(URL + cnpj);
}

export function update(cnpj, name) {
  return http.put(URL + cnpj, {
    name,
  });
}

export function remove(cnpj) {
  return http.delete(URL + cnpj);
}

export function getDonations(cnpj) {
  return http.get(`${URL}${cnpj}/donations`);
}

export function getDonationsByState(cnpj, state) {
  return http.get(`${URL}${cnpj}/${state}`);
}

export function getOneDonation(cnpj, idDonation) {
  return http.get(`${URL}${cnpj}/${idDonation}`);
}
