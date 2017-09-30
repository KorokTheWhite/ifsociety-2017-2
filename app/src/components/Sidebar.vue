<template>
  <div id="sidebar">
    <aside class="menu">
      <p class="menu-label">
        Acesso
      </p>
      <ul class="menu-list">
        <li v-if="!userIsLogged"><a>Entrar</a></li>
        <li v-else><a>Sair</a></li>
      </ul>
      <template v-if="userIsLogged">
        <p class="menu-label">
          Conta
        </p>
        <ul class="menu-list">
          <li><a>Configurações da Conta</a></li>
          <li><a>Notificações</a></li>
        </ul>
      </template>
    </aside>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userIsLogged: false,
      };
    },
    created() {
      // TODO: when Auth is ready, verify if the user is logged and then update this.userIsLogged
    },
  };
</script>

<style lang="scss" scoped>

</style>
