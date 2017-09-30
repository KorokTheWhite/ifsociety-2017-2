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
  props: ['donations'],
  components: {
    Navbar,
  },
  data() {
    return {

    };
  },
  onCreated() {
    // TODO: get pendent donations
  },
};
</script>

<style lang="scss" scoped>

</style>
