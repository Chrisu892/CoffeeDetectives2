<script>
  export default {
    props: {
      location: {
        type: Object,
        required: true
      },
      slider: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template>
  <NuxtLink class="location" :class="{ 'location--slider': slider }" :to="location._path" :title="location.title">
    <img class="location__image" :src="location.images.thumbnail.src" :alt="`Image of ${location.altTitle}`" />
    <div class="location__overlay">
      <div class="location__content">
        <div class="location__caption font-regular">Explore</div>
        <h3 class="location__title font-medium">{{ location.altTitle }}</h3>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .location {
    flex: 33.333% 0;
    flex: calc(33.333% - 1.5rem) 0;
    background-color: $clr-shade;
    border-radius: $border-radius;
    display: block;
    overflow: hidden;
    padding-top: 20%;
    position: relative;

    &:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    &--slider {
      padding-top: 64%;
      width: 100%;
    }
  }
  .location__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
    transition: transform 350ms ease-in-out;
    will-change: transform;
  }
  .location:hover .location__image {
    transform: scale(1);
  }
  .location__overlay {
    background-color: rgba($clr-primary, 0.75);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    transition: background-color 350ms ease-in-out;
    will-change: background-color;
  }
  .location:hover .location__overlay {
    background-color: rgba($clr-primary, 0.6);
  }
  .location__content {
    max-width: 300px;
    margin: 0 auto;
  }
  .location__caption {
    font-family: $font-cursive;
    color: $clr-secondary;
  }
  .location__title {
    color: $clr-white;
  }
</style>