<template>
  <div class="container">
    <form class="form" @submit="registerPerson()">
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Nome" type="text" v-model="name">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Email" type="email" v-model="email">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Senha" type="password" v-model="password">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="CPF" type="text" v-model="cpf">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Rua, Avenida e etc" v-model="street">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Nº" v-model="number">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Bairro" v-model="square">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Cidade" v-model="city">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-fullwidth">
            <select v-model="selectedState">
              <option selected>Estado</option>
              <option v-for="state in states">{{ state }}</option>
            </select>
          </div>
        </div>
      </div>
      <button class="button is-pulled-right" type="submit">Cadastre-me</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      cpf: '',
      street: '',
      number: '',
      square: '',
      city: '',
      selectedState: '',
      states: [
        'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO',
        'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
        'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO',
      ],
    };
  },
  methods: {
    registerPerson() {

    },
  },
};
</script>

<style lang="scss" scoped>

</style>
