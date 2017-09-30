<template>
  <div id="navbar">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="" alt="Logo">
        </a>
        <!-- add notification icon here -->
        <button class="button navbar-burger" type="submit" v-bind:class="{'is-active' : burguerIsActive}" @click="burguerClick()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <sidebar v-if="burguerIsActive"></sidebar>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      burguerIsActive: false,
    };
  },
  methods: {
    burguerClick() {
      this.burguerIsActive = !this.burguerIsActive;
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #26ff9b;
#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  nav.navbar {
    background-color: $primary;
    .navbar-brand {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .navbar-burger {
        background-color: $primary;
        border: none;
        display: block;
      }
    }
  }
  #sidebar {
    padding: 15px;
    position: absolute;
    width: 100%;
    height: 100vh;
    right: 0;
    top: 52px;
    display: flex;
    background-color: white;
    z-index: 10;
    .menu {
      height: 100%;
      .menu-label {
        background-color: $primary;
      }
    }
  }
}
</style>
