<template lang="pug">
.top
  logo
  h1.top__title hinagata-nuxt top page
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  name: 'top',
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top__title {
  margin-top: 1em;
}
</style>
