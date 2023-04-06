<template>
  <main id="main" class="main">
    <AppPlainMasthead title="Cafes" />
    
    <AppSection>
      <div class="flex-container flex-container--gutter">
        <AppLocationListing v-for="location, key in locations" :key="key" :location="location" />
      </div>
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const locations = await queryContent('locations').where({ type: { $eq: 'location'} }).find()
</script>