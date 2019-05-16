<template lang="pug">
.app
  nuxt
  g-nav
</template>

<script>
import GNav from '~/components/GNav.vue'

export default {
  name: 'app',
  components: {
    GNav
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/base.scss';
</style>
