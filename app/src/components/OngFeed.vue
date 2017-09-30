<template>
  <div id="ong-feed">
    <donation-list donations="donations"></donation-list>
  </div>
</template>

<script>
import DonationList from '@/components/DonationList';

export default {
  components: {
    DonationList,
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
