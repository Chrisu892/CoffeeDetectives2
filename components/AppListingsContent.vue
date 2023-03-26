<template>
  <div class="content">
    <div class="content__header">
      <div class="content__summary">
        Showing [x] cafes in [location/amenities/etc].
      </div>
      <div class="content__actions">
        <NuxtLink class="content__toggle" to="?view=list"><PhListDashes /></NuxtLink>
        <NuxtLink class="content__toggle" to="?view=grid"><PhSquaresFour /></NuxtLink>
        <NuxtLink class="content__toggle" to="?view=map"><PhMapPinLine /></NuxtLink>
      </div>
    </div>
    <div class="content__main">
      <AppCafeListing v-if="view == 'list' || view == 'grid'" v-for="listing, key in content" :key="key" :cafe="listing" :view="view" />
      <LocationMapView v-if="view == 'map'" />
    </div>
    <div class="content__footer">
      <div class="content__summary">
        Showing [x] cafes in [location/amenities/etc].
      </div>
      <div class="content__actions">
        <AppPagination />
      </div>
    </div>
  </div>
</template>

<script>
  import { PhSquaresFour, PhListDashes, PhMapPinLine } from 'phosphor-vue'

  export default {
    components: {
      PhSquaresFour,
      PhListDashes,
      PhMapPinLine
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
    display: flex;
    padding-bottom: 1rem;
    text-align: right;
  }
  .content__actions {
    flex: 1 0;
  }
  .content__toggle {
    align-items: center;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    width: 44px;

    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
  .content__main {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
  }
  .content__footer {
    align-items: center;
    display: flex;
    flex-flow: row;
    padding-top: 1rem;
  }
</style>