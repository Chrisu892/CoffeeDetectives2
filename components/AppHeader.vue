<template>
  <header class="header">
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

<style scoped lang="scss">
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 2rem 0;
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