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

<style scoped lang="scss">
  .header {
    left: 0;
    padding: 2rem 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  .header__container {
    @include flex-row;
    align-items: center;
  }
  .header__logo {
    @include flex-row;
    align-items: center;
  }
  .header__nav {
    flex: 1 0;
    margin-left: 10%;
  }
</style>