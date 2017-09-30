<template>
  <div id="about">
    <div class="container">
      <h1 class="title">{{ appName }}</h1>
      <p>
      Somos a {{ appName }} e nosso objetivo é facilitar o acesso de pessoas que se sentem
      movidas a doar alimentos a fim de ajudar os desfavorecidos à ONGs que trabalham
      com essa ideia mas que possuem escassez de recursos fincanceiros.
      </p>
    </div>
    <footnote></footnote>
  </div>
</template>

<script>
import Footnote from '@/components/Footnote';

export default {
  components: {
    Footnote,
  },
  data() {
    return {
      appName: 'Doatop',
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
#footnote {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
