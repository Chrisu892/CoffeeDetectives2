<template>
  <section class="section section--padding">
    <div class="inner">
      <div class="flex-container">
        <h2 class="section__title font-medium">{{ title }}</h2>
        <div class="section__action">
          <NuxtLink to="/cafes/">View All</NuxtLink>
        </div>
      </div>
      <Splide :options="options">
        <SplideSlide v-for="cafe, key in cafes" :key="key">
          <AppCafeListing :cafe="cafe" view="grid" class="cafe--extra-margin" />
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
    rewind: false,
    gap: '2rem',
    perMove: 1,
    perPage: 3
  }
</script>