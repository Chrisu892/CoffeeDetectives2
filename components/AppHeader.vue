<template>
  <header class="header">
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
    background-color: $clr-secondary;
    padding: 2rem 0;

    &--absolute {
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
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