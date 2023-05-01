<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const locations = await queryContent('locations').where({ type: { $eq: 'location'} }).find()
</script>

<template>
  <main id="main" class="main">
    <AppMasthead :title="page.title" :tagline="page.tagline" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>
    
    <AppSection class="padding shade">
      <div class="flex-container flex-container--gutter">
        <AppLocationListing v-for="location, key in locations" :key="key" :location="location" />
      </div>
    </AppSection>
  </main>
</template>