<template>
  <NuxtLink class="location" :to="location.url" title="">
    <img class="location__image" :src="location.images.thumbnail" :alt="`Image of ${location.title}`" />
    <div class="location__overlay">
      <div class="location__caption font-regular">Explore</div>
      <h3 class="location__title font-medium">{{ location.title }}</h3>
    </div>
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      location: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .location {
    flex: 33.333% 0;
    flex: calc(33.333% - 1em) 0;
    background-color: $clr-shade;
    border-radius: $border-radius;
    display: block;
    overflow: hidden;
    padding-top: 22%;
    position: relative;
  }
  .location__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .location__overlay {
    background-color: $clr-secondary-transparent-50;
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
  }
  .location:hover .location__overlay {
    background-color: $clr-secondary-transparent-75;
  }
  .location__caption {
    font-family: $font-cursive;
    color: $clr-primary;
  }
  .location__title {
    color: $clr-white;
  }
</style>