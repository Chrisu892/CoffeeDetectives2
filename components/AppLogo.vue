<template>
  <NuxtLink to="/" title="Go to homepage" class="logo">
    <div class="logo__graphic">
      <span class="logo__graphic__text">CP</span>
    </div>
    <div class="logo__text">ChrisPrusakiewicz</div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .logo {
    align-items: center;
    color: $clr-white;
    display: inline-flex;
    font-weight: $bold-weight;
    letter-spacing: 0.5px;
    line-height: 1;
    text-decoration: none;
  }
  .logo__graphic {
    align-items: center;
    border-radius: 100%;
    color: transparent;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    letter-spacing: 1px;
    margin-right: 0.8rem;
    overflow: hidden;
    width: 44px;
    -webkit-text-stroke: 1px $clr-secondary;
  }
  .logo__graphic__text {
    display: inline-block;
    position: relative;
    top: 5px;
    transform: scale(2.125);
  }
  .logo__text {
    padding-top: 5px;
  }
</style>