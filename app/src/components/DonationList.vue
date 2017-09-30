<template>
  <div id="donation-list">
    <div class="card" v-for="donation in donations">
      <header class="card-header">
        <p class="card-header-title">
          {{ donation.address.street }}, {{ donation.address.number }} - {{ donation.address.square }} - {{ donation.address.city }}/{{ donation.address.state }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li v-for="food in donation.foods">
              {{ food }}
            </li>
          </ul>
          <span>Horário para retirada: {{ donation.expiry.getDate() < 10 ? '0' : '' }}{{ donation.expiry.getDate() }}/{{ donation.expiry.getMonth() < 10 ? '0' : '' }}{{ donation.expiry.getMonth() }}/{{ donation.expiry.getFullYear() }}</span>
          <span>{{ donation.expiry.getHours() < 10 ? '0' : '' }}{{ donation.expiry.getHours() }}:{{ donation.expiry.getMinutes() < 10 ? '0' : '' }}{{ donation.expiry.getMinutes() }}:{{ donation.expiry.getSeconds() < 10 ? '0' : '' }}{{ donation.expiry.getSeconds() }}</span>
        </div>
        <p v-if="donation.donator">
          Doador: {{ donation.donator }}
        </p>
        <p v-else-if="donation.organization">
          Ong: {{ donation.organization }}
        </p>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Estou interessado</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['donations'],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
#donation-list {
padding: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
align-items: center;
.card {
  width: 300px;
  margin: 10px;
  }
}
</style>
