<template>
  <div class="listings">
    <AppListingsFilters :filters="filters" />
    <AppListingsContent :content="listings" />
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