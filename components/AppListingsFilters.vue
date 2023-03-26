<template>
  <div class="filters">
    <div v-for="filter, key in filters" :key="key" class="filters__group">
      <FilterMultiSelectList v-if="filter.type == 'multiselect'" :title="filter.title" :list="filter.options" />
      <FilterRangeInput v-if="filter.type == 'range'" :title="filter.title" :range="filter.range" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      filters: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .filters {
    position: sticky;
    top: 2rem;
  }
  .filters__group:not(:first-child) {
    margin-top: 1rem;
  }
</style>