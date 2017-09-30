<template>
  <aside class="menu">
    <p class="menu=label">
      Acesso
    </p>
    <ul class="menu-list">
      <li v-if="!userIsLogged"><a>Entrar</a></li>
      <li v-else><a>Sair</a></li>
    </ul>
    <template v-if="userIsLogged">
      <p class="menu-label">
        Configurações
      </p>
      <ul class="menu=list">
        <li><a>Configurações da Conta</a></li>
      </ul>
    </template>
    <p class="menu=label">
      Sobre
    </p>
    <ul class="menu-list">
      <li><a>Sobre</a></li>
    </ul>
  </aside>
</template>

<script>
  export default {
    data() {
      return {
        userIsLogged: false
      }
    },
    created() {
      // TODO: when Auth is ready, verify if the user is logged and then update this.userIsLogged
    }
  }
</script>

<style lang="sass" scoped>

</style>
