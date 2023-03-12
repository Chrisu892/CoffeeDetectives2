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
    padding: 1.25rem 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .header__logo {
    flex: 1;
  }
</style>