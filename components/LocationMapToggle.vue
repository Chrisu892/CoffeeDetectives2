<template>
  <button class="toggle font-medium" type="button">
    <ph-map-pin-line />
  </button>
</template>

<script>
  import { PhMapPinLine } from 'phosphor-vue'

  export default {
    components: {
      PhMapPinLine
    }
  }
</script>

<style scoped lang="scss">
  .toggle {
    appearance: none;
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 54px;
    width: 54px;
  }
</style>