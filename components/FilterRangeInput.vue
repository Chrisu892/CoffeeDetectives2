<template>
  <div class="range">
    <h3 class="range__title font-small">{{ title }}</h3>
    <div class="range__container">
      <div class="range__field">
        <label class="range__label" for="min_price">From:</label>
        <input class="range__input" id="min_price" type="number" :value="min" />
      </div>
      <div class="range__field">
        <label class="range__label" for="max_price">To:</label>
        <input class="range__input" id="max_price" type="number" :value="max" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .range__container {
    display: flex;
    flex-flow: row;
  }
  .range__label {
    display: block;
    margin-bottom: 0.125rem;
  }
  .range__field {
    flex: 50% 0;

    &:nth-child(1) {
      border-top-right-radius: 0;
    }
  }
</style>