<template>
  <article class="destination">
    <NuxtLink class="destination__thumbnail" :to="destination.url" title="">
      <img src="/images/newcastle.jpeg" :alt="`Image of ${destination.title}`" />
    </NuxtLink>
    <div class="destination__details">
      <h3 class="destination__title font-medium">
        <NuxtLink :to="destination.url" :title="`Find coffee in ${destination.title}`">{{ destination.title }}</NuxtLink></h3>
      <p class="destination__tagline font-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vero. Earum harum minima fugiat quaerat incidunt, corporis modi nulla dolorum.</p>
    </div>
  </article>
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
  .destination__thumbnail {
    border-radius: $border-radius;
    display: block;
    overflow: hidden;
  }
  .destination__title {
    margin-top: 1.5rem;
  }
  .destination__tagline {
    margin-top: 1rem;
  }
</style>