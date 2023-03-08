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
    background-color: $clr-secondary;
    border-bottom: solid 1px $clr-secondary-dark;
    padding: 1.25rem 0;
  }
  .header__logo {
    flex: 1;
  }
</style>