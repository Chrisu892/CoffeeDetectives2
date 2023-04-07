<template>
  <header class="header" :class="{ 'home': isHome }">
    <div class="inner header__container">
      <div class="header__logo">
        <AppLogo />
      </div>
      <div class="header__nav">
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    computed: {
      isHome() {
        return this.$route.path === '/'
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    background-color: $clr-white;
    padding: 2rem 0;
    position: relative;
    z-index: 100;

    &.home {
      background-color: $clr-secondary;
    }
  }
  .header__container {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .header__logo {
    display: flex;
    align-items: center;
  }
  .header__nav {
    flex: 1;
    margin-left: 4rem;
  }
</style>