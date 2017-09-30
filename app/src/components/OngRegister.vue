<template>
  <div class="container">
    <form class="form" @submit="registerPerson()">
      <div class="field">
        <div class="control">
          <input class="input" placeholder="Razão Social" type="text" v-model="socialReason">
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
          <input class="input" placeholder="CNPJ" type="text" v-model="cnpj">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" placeholder="CNAS" type="text" v-model="cnas">
        </div>
      </div>
      <button class="button is-pulled-right is-primary" type="submit">Cadastre-me</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      socialReason: '',
      email: '',
      password: '',
      cpf: '',
      cnas: '',
    };
  },
  methods: {
    register() {

    },
  },
};
</script>
<style lang="scss" scoped>

</style>
