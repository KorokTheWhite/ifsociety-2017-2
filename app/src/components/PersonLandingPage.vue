<template>
  <div id="person-landing-page">
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" v-bind:class="{'is-active': tab.id === selectedTab}" @click="selectedTab = tab.id"><a>{{ tab.name }}</a></li>
      </ul>
    </div>
    <person-active-donations v-if="selectedTab === 1"></person-active-donations>
    <person-past-donations v-if="selectedTab === 2"></person-past-donations>
  </div>
</template>

<script>
import PersonActiveDonations from '@/components/PersonActiveDonations';
import PersonPastDonations from '@/components/PersonPastDonations';

export default {
  components: {
    PersonActiveDonations,
    PersonPastDonations,
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: 'Doações Ativas',
        },
        {
          id: 2,
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
