<template>
  <div class="map">
    <img class="map__image" src="/images/dummy-map.png" alt="" />
  </div>
</template>

<style scoped lang="scss">
  .map {
    border-radius: $border-radius;
    overflow: hidden;
    padding-top: 40%;
    position: relative;
  }
  .map__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>