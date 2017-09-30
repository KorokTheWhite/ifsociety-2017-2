<template>
  <div id="ong-settings">
    <section >
      <div class="hero is-primary has-shadow">
        <div class="hero-body">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
      <div class="tabs">
        <ul style="justify-content: space-around">
          <li @click="isEditable = true" ><a>Meus dados</a></li>
          <li @click="isEditable = false"><a>Editar</a></li>
        </ul>
      </div>
      <div v-show="isEditable">
        <ul class="ds-container">
          <li class="ds-field">
            <p class="ds-label">Nome:</p> 
            <div class="ds-value">{{ong.name}}</div>
          </li>
          <li class="ds-field">
            <p class="ds-label">Email:</p> 
            <div class="ds-value">{{ong.email}}</div>
          </li>
          <li class="ds-field">
            <p class="ds-label">CNPJ:</p> 
            <div class="ds-value">{{ong.cnpj}}</div>
          </li>
          <li class="ds-field">
            <p class="ds-label">CNAS:</p> 
            <div class="ds-value">{{ong.cnas}}</div>
          </li>
        </ul>
      </div>
      <div v-show="!isEditable">
        <ul class="ds-form">
          <li class="ds-field">
            <label class="ds-label" for="name">Nome</label>
            <input class="ds-input input" type="text" name="" id="name" placeholder="nome">
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: false,
      isEditable: false,
      title: 'Configurações da ONG',
      ong: {
        name: 'aaa',
        email: 'bbbb',
        cnpj: 'vvvv',
        cnas: 'ccccc',
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: column;
}

.ds-field {
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-around;
}
  .ds-label {
    width: 20%;
     
  }
 



  .ds-value {
    width: 210px;
  }



</style>
