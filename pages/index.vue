<template lang="pug">
.container
  div
    logo
    h1.title hinagata-nuxt
    h2.subtitle My grand Nuxt.js project
    .links
      a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
      a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
