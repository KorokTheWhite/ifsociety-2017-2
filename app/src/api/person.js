import http from './http';

const URL = '/person/';

export function create(name, email, uuid, cpf, address) {
  return http.post(URL, {
    name,
    email,
    uuid,
    cpf,
    address,
  });
}

export function get(cpf) {
  return http.get(URL + cpf);
}

export function update(cpf, name, address) {
  return http.put(URL + cpf, {
    name,
    address,
  });
}

export function remove(cpf) {
  return http.delete(URL + cpf);
}

