<template>
  <section class="section locations">
    <div class="inner">
      <div class="flex-container">
        <h2 class="section__title font-medium">{{ title }}</h2>
        <div class="section__action">
          <NuxtLink to="/locations/">View All</NuxtLink>
        </div>
      </div>
      <Splide :options="options">
        <SplideSlide v-for="chunk, key in locationChunks" :key="key">
          <div class="grid-container">
            <AppLocationListing v-for="location, key in chunk" :key="key" :location="location" />
          </div>
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
        default: 'Popular Locations'
      },
      tagline: {
        type: String,
        default: "Whether it's a quick visit to grab a coffee on the go, or stay in, we've got you covered."
      },
      locations: {
        type: Array,
        required: true
      }
    },
    computed: {
      locationChunks() {
        const chunkSize = 5
        let chunks = []
        
        for (let i = 0; i < this.locations.length; i += chunkSize) {
          chunks.push(this.locations.slice(i, i + chunkSize))
        }

        return chunks
      }
    }
  }
</script>

<script setup>
  const options = {
    rewind: false,
    gap: '2rem',
    perMove: 1,
    perPage: 1
  }
</script>

<style scoped lang="scss">
  .locations {
    background-color: $clr-white;
    padding: 4rem 0;
  }
  .grid-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .location {
    padding-top: 50%;

    &:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/3;
    }
  }
</style>