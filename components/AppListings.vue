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

<template>
  <div>
    <AppListingsFilters :filters="filters" />
    <AppListingsContent :content="listings" />
  </div>
</template>