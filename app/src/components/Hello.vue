<template>
  <div id="app">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">Core Docs</a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">Forum</a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
        </li>
        <br>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "~bulma/bulma";
@import "~bulma/sass/utilities/initial-variables";

$palegreen: #26ff9b;
$paleblue: #72d0eb;
$green: #34f85b;
$paleorange: #f26d4c;
$orange: #cf1c44;
=======
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
>>>>>>> front-init:app/src/components/Hello.vue

$primary: $palegreen;
$info: $paleblue;
$success: $green;
$warning: $paleorange;
$danger: $orange;
</style>
