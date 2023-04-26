<script>
  import { PhCamera } from 'phosphor-vue'

  export default {
    components: {
      PhCamera
    }
  }
</script>

<template>
  <div class="slide">
    
    <div class="slide__credit">
      <div class="inner">
        <NuxtLink to="/cafes" title="Visit ..." class="slide__credit-text">
          <PhCamera /> Cafe / Location Name
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .slide {
    @include flex-row;
    align-items: flex-end;
    background: url('/images/homepage-hero.jpeg') center center/cover no-repeat;
    height: 90vh;
  }
  .slide__credit {
    padding-bottom: 1.5rem;
    width: 100%;
  }
  .slide__credit-text {
    @include flex-row;
    align-items: center;
    color: $clr-secondary;
    line-height: 1;
  }
  .slide__credit-text svg {
    display: inline-block;
    height: 1.5rem;
    margin-right: 0.5rem;
    width: 1.5rem;
  }
</style>