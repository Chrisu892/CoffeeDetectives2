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

<template>
  <div class="filters">
    <div v-for="filter, key in filters" :key="key" class="filters__group">
      <FilterMultiSelectList v-if="filter.type == 'multiselect'" :title="filter.title" :list="filter.options" />
      <FilterRangeInput v-if="filter.type == 'range'" :title="filter.title" :range="filter.range" :symbol="filter.symbol" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .filters {
    background-color: $clr-white;
    display: flex;
    gap: 1rem;
    padding: 1.5rem 0;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .filters__group {
    flex: 1 0;
  }
</style>