<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
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
$white: #000000;

$primary: $palegreen;
$info: $paleblue;
$success: $green;
$warning: $paleorange;
$danger: $orange;
</style>
