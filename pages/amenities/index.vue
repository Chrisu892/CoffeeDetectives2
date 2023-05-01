<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).find()
</script>

<template>
  <main id="main" class="main">
    <AppMasthead :title="page.title" :tagline="page.tagline" />

    <AppSection class="padding">
      <div class="flex-container flex-container--gutter">
        <AppAmenity v-for="amenity, key in amenities" :key="key" :amenity="amenity" />
      </div>
    </AppSection>
  </main>
</template>