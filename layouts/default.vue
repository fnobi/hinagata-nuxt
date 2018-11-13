<template lang="pug">
.wrapper
  nuxt
  nav.nav
    .nav__item: nuxt-link(to="/") top
    .nav__item: nuxt-link(to="/about") about
</template>

<style lang="scss">
.nav {
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1em 0em;
  text-align: center;
}

.nav__item {
  &:after {
    content: '|';
    padding: 0em 1em;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  a {
    color: inherit;
  }
}
</style>
