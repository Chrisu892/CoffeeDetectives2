<script lang="ts">
  export default defineComponent({
    name: 'AppCard',
    props: {
      title: {
        type: String,
        required: true
      },
      tagline: {
        type: String,
        default: null
      }
    }
  })
</script>

<template>
  <div class="card">
    <h3 class="card__title font-medium">{{ title }}</h3>
    <p class="card__tagline font-regular">{{ tagline }}</p>
  </div>
</template>

<style scoped lang="scss">
  .card {
    background-color: $clr-shade;
    border-radius: $border-radius;
    padding: $gutter-large $gutter-half $gutter-half;
  }
</style>