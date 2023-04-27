<script>
  import { PhCamera } from 'phosphor-vue'

  export default {
    components: {
      PhCamera
    },
    props: {
      slide: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <div class="slide">
    <picture>
      <img class="slide__image" :src="slide.images.header.src" :alt="slide.images.header.alt" />
    </picture>
    
    <div class="slide__credit">
      <div class="inner">
        <NuxtLink :to="slide._path" title="Visit ..." class="slide__credit-text">
          <PhCamera /> {{ slide.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .slide {
    @include flex-row;
    align-items: flex-end;
    height: 90vh;
  }
  .slide__image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .slide__credit {
    padding-bottom: 1.5rem;
    position: relative;
    width: 100%;
    z-index: 2;
  }
  .slide__credit-text {
    @include flex-row;
    align-items: center;
    color: $clr-white;
    line-height: 1;
  }
  .slide__credit-text svg {
    display: inline-block;
    height: 1.5rem;
    margin-right: 0.5rem;
    width: 1.5rem;
  }
</style>