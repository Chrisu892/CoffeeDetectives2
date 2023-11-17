<script>
  import { PhCamera } from 'phosphor-vue'

  export default {
    components: {
      PhCamera
    },
    props: {
      title: {
        type: String,
        default: null
      },
      path: {
        type: String,
        default: null
      },
      image: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <div class="slide">
    <picture>
      <img class="slide__image" :src="image.src" :alt="image.alt" />
    </picture>
    
    <div v-if="title" class="slide__credit">
      <div class="inner">
        <NuxtLink :to="path" title="Visit ..." class="slide__credit-text">
          <PhCamera /> {{ title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .slide {
    @include flex-row;
    align-items: flex-end;
    position: relative;
    height: 80vh;
    min-height: 600px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba($clr-dark, 0.45) 0%, transparent 50%, rgba($clr-dark, 0.3) 100%);
      z-index: 2;
    }

    &.rounded {
      border: solid 0.75rem $clr-shade;
      border-radius: 100%;
      overflow: hidden;
      margin: 0 auto;
      padding-top: calc(65% - 1.5rem);
      position: relative;
      width: 65%;
      max-height: initial;
      min-height: initial;
      height: initial;
    }
    &.rounded::before {
      display: none;
    }
  }
  .slide__image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .slide__credit {
    align-items: center;
    display: inline-flex;
    padding-bottom: 7.5rem;
    position: relative;
    width: 100%;
    z-index: 1;
  }
  .slide__credit-text {
    @include font-small;
    align-items: center;
    background-color: rgba($clr-white, 0.15);
    border-radius: 50px;
    color: $clr-white;
    display: inline-flex;
    line-height: 0;
    padding: 0.375rem 0.75rem 0.475rem;
  }
  .slide__credit-text svg {
    display: inline-block;
    height: 1.125rem;
    margin-right: 0.5rem;
    width: 1.125rem;
    margin-top: 2px;
  }
</style>