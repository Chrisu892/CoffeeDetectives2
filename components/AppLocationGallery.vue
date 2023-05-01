<script setup lang="ts">
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'
</script>

<script lang="ts">
  export default {
    props: {
      images: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        options: {
          rewind: false,
          gap: '1rem',
          perMove: 1,
          perPage: 1
        }
      }
    },
    computed: {
      gallery(): any {
        const chunkSize = 5
        const gallery = []

        for (let i = 0; i < this.images.length; i += chunkSize) {
          gallery.push(this.images.slice(i, i + chunkSize))
        }

        return gallery
      }
    }
  }
</script>

<template>
  <div class="gallery">
    <Splide v-if="gallery" :options="options">
      <SplideSlide v-for="group, key in gallery" :key="key">
        <div class="group">
          <picture v-for="image, key in group" :key="key" class="picture">
            <img :src="image.src" :alt="image.alt" class="image" />
          </picture>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped lang="scss">
  .group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
  }
  .picture:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .image {
    border-radius: $border-radius;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
</style>