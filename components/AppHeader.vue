<template>
  <header class="header">
    <div class="inner flex-container">
      <div class="header__logo">
        <AppLogo />
      </div>
      <div class="header__nav">
        <AppNav />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    background-color: rgba($clr-primary, 0.1);
    padding: 2rem 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }
  .header__logo {
    flex: 25% 0;
  }
  .header__nav {
    flex: 75% 0;
  }
</style>