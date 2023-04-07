<template>
  <div class="stepper">
    <div class="inner stepper__inner">
      <div v-for="step, key in steps" :key="key" class="stepper__step" :class="{ 'active': key == 0 }">
        <h1 v-if="key === 0" class="stepper__title font-regular">
          <span class="stepper__number">{{ key + 1 }}</span>
          {{ step.title }}
        </h1>
        <div v-else class="stepper__title font-regular">
          <span class="stepper__number">{{ key + 1 }}</span>
          {{ step.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      steps: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
  .stepper {
    background-color: $clr-shade;
    position: sticky;
    top: 0;
    left: 0;
  }
  .stepper__inner {
    @include flex-row;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 5%;
      right: 5%;
      border-bottom: solid 1px darken($clr-shade, 5%);
    }
  }
  .stepper__step {
    @include flex-row;
    align-items: center;
    justify-content: center;
    flex: 1 0;
    line-height: 1;
    padding: 1rem 1.75rem 1rem 1rem;
  }
  .stepper__title {
    background-color: $clr-shade;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
  }
  .stepper__number {
    @include vertical-center;
    color: $clr-secondary;
    background-color: darken($clr-shade, 10%);
    border-radius: 100%;
    padding: 0.5rem;
    height: 30px;
    margin-right: 0.5rem;
    width: 30px;
  }
  .stepper__step.active .stepper__number {
    background-color: $clr-primary;
    color: $clr-secondary;
  }
</style>