<template>
  <div id="add-donation">
    <section>
      <div class="hero is-primary has-shadow">
        <div class="hero-body">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
      <div class="field">
        <label  class="label">Descricao: </label>
        <div class="control">
          <textarea v-model="donation.name" class="textarea" placeholder="Minha primeira doação..."/>
        </div>
      </div>

      <div class="field">
        <label class="label">Data: </label>
        <div class="control">
          <input class="input" type="date">
        </div>
      </div>
    </section>
    <section class>
      <div class="field">
        <label class="label">Nome do produto</label>
        <div class="control">
          <input class="input" type="text" placeholder="Arroz...">
        </div>
      </div>
      <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Produto perecivel
        </label>
      </div>
      <div class="field">
      <label class="label">Quantidade</label>
      <div class="control">
        <input class="input" type="number" placeholder="4" min=1>
      </div>
      <div class="control">
        <button class="button is-danger">Adicionar</button>
      </div>
    </div>
    </div>
    </section>
    
    <section>
      <h1 class="title is-danger">aaaa {{ donation.name }}</h1>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Criar evento de doação',
        donation: {
          name: '',
          date: '',
        },
      };
    },
  };

</script>
<style lang="scss" scoped>

.field {
  padding: 10px;
  justify-content: flex-start;
}




</style>
