<template>
  <AppPlainMasthead title="Cafes" />
  
  <AppSection>
    <div class="flex-container flex-container--gutter">
      <AppLocationListing v-for="location, key in locations" :key="key" :location="location" />
    </div>
  </AppSection>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const locations = await queryContent('locations').where({ altTitle: { $ne: 'Locations' } }).limit(20).find()
</script>