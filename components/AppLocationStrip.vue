<script lang="ts">
  export default {
    props: {
      location: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<template>
  <section class="location">
    <div class="location__container">
      <picture class="location__background">
        <img class="location__background-image" :src="location.images.header.src" :alt="location.images.header.alt" />
      </picture>
      <div class="location__content">
        <h2 class="location__title font-xl">About {{ location.title }}</h2>
        <div class="location__text font-regular" v-if="location.content">{{ location.content }}</div>
        <div class="location__action">
          <AppButton :to="location._path" :title="`Explore ${location.title}`" class="animate" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .location {
    background-color: $clr-shade;
  }
  .location__container {
    @include flex-row;
  }
  .location__background {
    flex: 50% 0;
  }
  .location__content {
    flex: 50% 0;
    padding: 5rem 8vw 5rem 3rem;
  }
  .location__action {
    margin-top: 1.5rem;
  }
  .location__background-image {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
</style>