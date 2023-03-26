<template>
  <div class="listings">
    <div class="listings__filter">
      <AppListingsFilters :filters="filters" />
    </div>
    <div class="listings__content">
      <AppListingsContent :content="listings" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      filters: {
        type: Array,
        required: true
      },
      listings: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .listings {
    display: flex;
    flex-flow: row;
    gap: 2rem;
  }
  .listings__filter {
    flex: 300px 0;
  }
  .listings__content {
    flex: 1 0;
  }
</style>