<template>
  <NuxtLink class="toggle font-medium" to="?view=list"><ph-list-dashes /></NuxtLink>
</template>

<script>
  import { PhListDashes } from 'phosphor-vue'

  export default {
    components: {
      PhListDashes
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