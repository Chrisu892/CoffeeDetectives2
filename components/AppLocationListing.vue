<template>
  <NuxtLink class="destination" :to="destination.url" title="">
    <img class="destination__image" :src="destination.images.thumbnail" :alt="`Image of ${destination.title}`" />
    <div class="destination__overlay">
      <div class="destination__caption font-regular">Explore</div>
      <h3 class="destination__title font-medium">{{ destination.title }}</h3>
    </div>
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      destination: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .destination {
    flex: 33.333% 0;
    flex: calc(33.333% - 1em) 0;
  }
  .destination {
    background-color: $clr-shade;
    border-radius: $border-radius;
    display: block;
    overflow: hidden;
    padding-top: 22%;
    position: relative;
  }
  .destination__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .destination__overlay {
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
  .destination:hover .destination__overlay {
    background-color: $clr-secondary-transparent-75;
  }
  .destination__caption {
    font-family: $font-cursive;
    color: $clr-primary;
  }
  .destination__title {
    color: $clr-white;
  }
</style>