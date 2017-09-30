<template>
  <div id="ong-active-donations">
    <donation-list :donations="donations"></donation-list>
  </div>
</template>

<script>

/* eslint-disable */

import * as donation from '@/api/PersonDonation';
import DonationList from '@/components/DonationList';

export default {
  components: {
    DonationList,
  },
  data() {
    return {
      donations: [
        {
          address: {
            street: 'rua',
            number: 1,
            square: 'bairro',
            city: 'cidade',
            state: 'estado',
          },
          foods: [
            'queijo',
            'goiabada',
          ],
          expiry: new Date(),
          organization: 'ong um',
        },
      ],
    };
  },
  onCreated() {
    donation.getAcceptedDonations().then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
