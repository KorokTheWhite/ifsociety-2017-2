<template>
  <div id="footnote">
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p><strong>{{ appName }}</strong> por</p>
          <span v-for="collaborator in collaborators">
            {{ collaborator.name }} <a class="icon" :href="githubURI + collaborator.github"><i class="fa fa-github"></i></a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: 'Nome Provisório',
      githubURI: 'https://github.com/',
      collaborators: [
        {
          name: 'Calvin Gerling',
          github: 'calvingerling',
        },
        {
          name: 'Davi Spindola',
          github: 'DaviSpindola',
        },
        {
          name: 'Diogo Korok',
          github: 'KorokTheWhite',
        },
        {
          name: 'João Ortiz',
          github: 'ortiz-joao',
        },
        {
          name: 'Leonardo Alves',
          github: 'leunardo',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
