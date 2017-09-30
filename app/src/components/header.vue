<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="">
      </a>
      <!-- add notification icon here -->
      <button class="button navbar-burguer" v-bind:class="{'is-active' : burguerIsActive}" v-on:click="burguerClick()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        burguerIsActive: false
      }
    },
    methods() {
      function burguerClick() {
        this.burguerIsActive = !this.burguerIsActive;
      }
    }
  }
</script>

<style lang="sass" scope>

</style>
