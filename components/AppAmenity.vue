<script lang="ts">
  export default {
    props: {
      amenity: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <NuxtLink :to="amenity._path" class="amenity">
    <picture v-if="amenity.images.thumbnail">
      <img class="amenity__thumbnail" :src="amenity.images.thumbnail.src" :alt="amenity.images.thumbnail.alt" />
    </picture>
    <div class="amenity__overlay">
      <div class="amenity__content">
        <div class="amenity__caption font-regular">Explore</div>
        <h2 class="amenity__title font-large">{{ amenity.altTitle }}</h2>
        <p v-if="amenity.tagline" class="amenity__tagline font-regular">{{ amenity.tagline }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .amenity {
    background-color: $clr-shade;
    border-radius: $border-radius;
    display: block;
    flex: calc(33.333% - 1.35rem) 0;
    overflow: hidden;
    padding-top: 33.333%;
    position: relative;
    text-align: center;
    transition: transform 350ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
  .amenity__thumbnail {
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
  .amenity:hover .amenity__thumbnail {
    transform: scale(1);
  }
  .amenity__overlay {
    color: $clr-white;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(180deg, transparent 50%, $clr-dark 100%);
  }
  .amenity__caption {
    color: $clr-primary;
    font-family: $font-cursive;
  }
  .amenity__title {
    margin: 0;
  }
  .amenity__tagline {
    margin: 1.5rem 0 0 0;
  }
</style>