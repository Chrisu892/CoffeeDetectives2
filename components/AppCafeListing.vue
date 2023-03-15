<template>
  <article class="cafe">
    <NuxtLink class="cafe__thumbnail" :to="cafe.url" :title="`Read more about ${cafe.title}`">
      <img class="cafe__thumbnail-image" :src="cafe.images.thumbnail" :alt="cafe.title" />
    </NuxtLink>
    <div class="cafe__details">
      <h3 class="cafe__title font-medium">
        <NuxtLink :to="cafe.url" :title="`Read more about ${cafe.title}`">{{ cafe.title }}</NuxtLink>
      </h3>
      <p class="cafe__tagline font-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore.</p>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      cafe: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .cafe {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    &:not(:first-child) {
      margin-top: 1.5rem;
    }
  }
  .cafe__thumbnail {
    background-color: $clr-shade;
    border-radius: $border-radius 0 0 $border-radius;
    display: block;
    flex: 30% 0;
    overflow: hidden;
    padding-top: 20%;
    position: relative;
  }
  .cafe__thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cafe__details {
    flex: 60% 0;
    padding: 1.5rem;
  }
  .cafe__tagline {
    margin-top: 1rem;
  }
</style>