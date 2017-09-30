<template>
  <div id="ong-landing-page">
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" v-bind:class="{'is-active': tab.id === selectedTab}" @click="selectedTab = tab.id"><a>{{ tab.name }}</a></li>
      </ul>
    </div>
    <ong-feed v-if="selectedTab === 1"></ong-feed>
    <ong-active-donations v-if="selectedTab === 2"></ong-active-donations>
    <ong-past-donations v-if="selectedTab === 3"></ong-past-donations>
  </div>
</template>

<script>
import OngFeed from '@/components/OngFeed';
import OngActiveDonations from '@/components/OngActiveDonations';
import OngPastDonations from '@/components/OngPastDonations';

export default {
  components: {
    OngFeed,
    OngActiveDonations,
    OngPastDonations,
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: 'Feed de Doações',
        },
        {
          id: 2,
          name: 'Doações Ativas',
        },
        {
          id: 3,
          name: 'Doações Passadas',
        },
      ],
      selectedTab: 1,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
