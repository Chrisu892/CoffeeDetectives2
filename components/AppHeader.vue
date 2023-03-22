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
    padding: 1.25rem 0;
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