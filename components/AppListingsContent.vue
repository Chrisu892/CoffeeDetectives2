<script setup lang="ts">
  const { page } = useContent()
</script>

<script lang="ts">
  import { 
    PhSquaresFour, 
    PhRows, 
    PhMapPin,
    PhSmileySad
  } from 'phosphor-vue'

  export default {
    components: {
      PhSquaresFour, PhRows, PhMapPin, PhSmileySad
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


<template>
  <div class="content">
    <div class="content__header">
      <div class="content__count font-regular">
        <template v-if="page.type === 'amenity'">Found {{ content.length }} {{ page.title.toLowerCase() }} cafés.</template>
        <template v-else>Found {{ content.length }} cafes in {{ page.title.toLowerCase() }}.</template>
      </div>
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
      <div v-else class="content__empty">
        <ph-smiley-sad />
        <p class="content__empty__message">Sorry, we couldn't find any cafe in this location. Did you find a cafe that you think should be listed here? <NuxtLink to="/contact">Get in touch</NuxtLink>.</p>
      </div>
    </div>

    <div class="content__footer">
      <div class="content__summary">
        <template v-if="page.type === 'amenity'">Showing {{ content.length }} {{ page.title.toLowerCase() }} cafés.</template>
        <template v-else>Showing 1 - {{ content.length }} out of {{ content.length }} cafes<template v-if="page.title != 'Cafés'"> in {{ page.title.toLowerCase() }}</template>.</template>
      </div>
      <div class="content__actions">
        <AppPagination />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content__header {
    align-items: center;
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
  .content__empty {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    padding: 2rem;
    text-align: center;

    svg {
      @include font-xl;
      color: $clr-primary;
      margin-bottom: 0.75rem;
    }
  }
  .content__empty__message {
    margin: 0;
  }
  .content__footer {
    @include flex-row;
    align-items: center;
  }
  .content__summary {
    flex: 1 0;
  }
</style>