<template>
  <section class="section">
    <div class="inner">
      <div class="flex-container">
        <div class="section__title font-medium">{{ title }}</div>
        <div class="section__action">
          <NuxtLink to="/cafes/">View All</NuxtLink>
        </div>
      </div>
      <Splide :options="options">
        <SplideSlide v-for="cafe, key in cafes" :key="key">
          <AppCafeListing :cafe="cafe" view="grid" />
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'

  export default {
    components: {
      Splide, SplideSlide
    },
    props: {
      title: {
        type: String,
        default: 'Featured Cafes'
      },
      cafes: {
        type: Array,
        required: true
      }
    }
  }
</script>

<script setup>
  const options = {
    rewind: true,
    gap: '2rem',
    perMove: 1,
    perPage: 4
  }
</script>