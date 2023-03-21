<template>
  <section class="section section--shade">
    <div class="inner">
      <div class="flex-container">
        <div class="section__title">{{ title }}</div>
        <div class="section__action">
          <NuxtLink to="/locations/">View All</NuxtLink>
        </div>
      </div>
      <div class="grid-container">
        <AppLocationListing v-for="location, key in locations" :key="key" :location="location" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
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
    }
  }
</script>

<style scoped lang="scss">
  .grid-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .location {
    padding-top: 50%;
  }
  .location:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/4;
  }
  .location:nth-child(2) {
    grid-column: 3/4;
    grid-row: 1/4;
  }
  .location:nth-child(3) {
    grid-column: 4/5;
    grid-row: 1/4;
  }
  .location:nth-child(4) {
    grid-column: 5/6;
    grid-row: 1/4;
  }
  .location:nth-child(5) {
    grid-column: 1/2;
    grid-row: 4/7;
  }
  .location:nth-child(6) {
    grid-column: 2/3;
    grid-row: 4/7;
  }
  .location:nth-child(7) {
    grid-column: 3/4;
    grid-row: 4/7;
  }
  .location:nth-child(8) {
    grid-column: 4/6;
    grid-row: 4/7;
  }
</style>