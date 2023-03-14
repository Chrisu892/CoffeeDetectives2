<template>
  <div class="cafe">
    <div class="cafe__inner">

    </div>
  </div>
</template>

<style scoped lang="scss">
  .cafe {
    background-color: $clr-secondary;
    border-radius: 100%;
    padding-top: 80%;
    position: relative;
    width: 80%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 30%;
      padding-top: 14%;
      border-radius: $border-radius;
      background-color: inherit;
      transform: rotate(-50deg);
    }
  }
  .cafe__inner {
    background-color: $clr-primary;
    border-radius: 100%;
    position: absolute;
    top: 5%;
    left: 5%;
    right: 5%;
    bottom: 5%;
  }
</style>