<template>
  <header class="header" :class="{ 'header--absolute': isHome }">
    <div class="inner header__container">
      <div class="header__logo">
        <AppLogo />
      </div>
      <div class="header__nav">
        <AppNav />
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
      z-index: 10;
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