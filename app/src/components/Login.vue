<template>
  <div class="container">
    <form @submit="login()" class="form">
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input v-model="email" class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input v-model="password" class="input" type="password" placeholder="Senha">
          <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
        </div>
      </div>
      <button type="submit" class="button is-success is-pulled-right">Entrar</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push('/');
      }).catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
      });
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
