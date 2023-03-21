<template>
  <NuxtLink to="/" title="Go to homepage" class="logo font-medium">
    The Coffee Detectives
  </NuxtLink>
</template>

<style scoped lang="scss">
  .logo {
    align-items: center;
    color: $clr-white;
    display: inline-flex;
    font-family: $font-cursive;
    letter-spacing: 0.5px;
    line-height: 1;
    text-decoration: none;

    &--rev {
      color: $clr-text;
    }
  }
  .logo__graphic {
    align-items: center;
    border-radius: 100%;
    color: transparent;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    letter-spacing: 1px;
    margin-right: 0.6rem;
    overflow: hidden;
    width: 44px;
    -webkit-text-stroke: 1px $clr-secondary;
  }
  .logo__graphic__text {
    display: inline-block;
    position: relative;
    top: 0;
    transform: scale(3.25);
  }
  .logo__text {
    padding-top: 5px;
  }
</style>