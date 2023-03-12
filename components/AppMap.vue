<template>
  <div class="map">
    <img src="/images/dummy-map.png" alt="" />
  </div>
</template>

<style scoped lang="scss">
  .map {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, $clr-secondary 0%, rgba($clr-secondary, 0.5) 15%);
    }
  }
  .map__inner {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    z-index: 2;
    color: $clr-white;
  }
  .map__title {

  }
</style>