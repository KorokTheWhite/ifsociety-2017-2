<template>
    <form class="form" v-on:submit="registerPerson()">
        <input placeholder="Nome" type="text" v-model="name">
        <input placeholder="Email" type="email" v-model="email">
        <input placeholder="Senha" type="password" v-model="password">
        <input placeholder="CPF" type="text" v-model="cpf">
        <button class="button" type="submit">Cadastre-me</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      cpf: ''
    }
  },
  methods() {
    registerPerson() {

    }
  }
}
</script>

<style lang="sass" scoped>

</style>
