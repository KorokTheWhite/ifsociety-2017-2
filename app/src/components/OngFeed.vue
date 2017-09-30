<template>
  <div id="ong-feed">
    <navbar></navbar>
    <div class="card" v-for="donation in donations">
      <header class="card-header">
        <p class="card-header-title">
          {{ donation.address }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <ul>
            <li v-for="food in donation.foods">
              {{ food }}
            </li>
          </ul>
          <span>Horário para retirada: {{ donation.expiry.getDate() }}/{{ donation.expiry.getMonth() }}/{{ donation.expiry.getFullYear() }}</span>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Estou interessado</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      donations: [

      ],
    };
  },
  onCreated() {
    // TODO: get pendent donations
  },
};
</script>

<style lang="scss" scoped>
#ong-feed {
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
