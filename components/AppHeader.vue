<template>
  <header class="header">
    <div class="inner flex-container">
      <div class="header__logo">
        <AppLogo class="logo--rev" />
      </div>
      <div class="header__nav">
        <AppNav />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding: 2rem 0;
  }
  .header__logo {
    flex: 1;
  }
</style>