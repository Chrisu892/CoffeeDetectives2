<template>
  <div class="content">
    <div class="content__header">
      <div class="content__count font-small">Found [x] cafes in [location name].</div>
      <div class="content__actions">
        <NuxtLink class="content__toggle" to="?view=list"><PhRows />List</NuxtLink>
        <NuxtLink class="content__toggle" to="?view=grid"><PhSquaresFour />Grid</NuxtLink>
        <NuxtLink class="content__toggle" to="?view=map"><PhMapPin />Map</NuxtLink>
      </div>
    </div>

    <div class="content__main">
      <div v-if="content.length > 0" class="content__container">
        <AppCafeListing v-if="view == 'list' || view == 'grid'" v-for="listing, key in content" :key="key" :cafe="listing" :view="view" />
        <LocationMapView v-if="view == 'map'" />
      </div>
      <div v-else>
        Sorry, we couldn't find any cafe in this location. Did you find a cafe that you think should be listed here? <NuxtLink to="/contact">Get in touch</NuxtLink>.
      </div>
    </div>

    <!-- <div class="content__footer">
      <div class="content__summary">
        Showing [x] cafes in [location/amenities/etc].
      </div>
      <div class="content__actions">
        <AppPagination />
      </div>
    </div> -->
  </div>
</template>

<script>
  import { PhSquaresFour, PhRows, PhMapPin } from 'phosphor-vue'

  export default {
    components: {
      PhSquaresFour, PhRows, PhMapPin
    },
    props: {
      content: {
        type: Array,
        required: true
      }
    },
    computed: {
      view() {
        return this.$route.query.view || 'list'
      }
    }
  }
</script>

<style scoped lang="scss">
  .content__header {
    align-items: center;
    color: $clr-shade;
    display: flex;
    padding: 0.125rem 0;
  }
  .content__count {
    flex: 1 0;
  }
  .content__toggle {
    align-items: center;
    border-radius: $border-radius;
    display: inline-flex;
    font-weight: $bold-weight;
    margin-left: 1rem;
    padding: 0.25rem 0.5rem;

    &:hover {
      background-color: $clr-shade;
    }

    svg {
      margin: 1px 0.25rem 0;
      height: 20px;
      width: 20px;
    }
  }
  .content__main {
    padding: 1.5rem 0;
  }
  .content__container {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    padding-bottom: 2rem;
  }
</style>