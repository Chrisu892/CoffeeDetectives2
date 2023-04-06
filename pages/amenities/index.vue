<template>
  <main id="main" class="main">
    <AppPlainMasthead :title="page.title" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>

    <AppSection v-for="amenity, key in amenities" :key="key" class="padding" :class="key % 2 === 0 ? 'shade' : ''" :title="amenity.altTitle" :url="amenity.url">
      <div class="flex-container flex-container--gutter">

      </div>
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const amenities = await queryContent('amenities').where({ title: { $ne: 'Amenities' } }).find()
</script>

<style scoped lang="scss">
  .listings {
    display: flex;
    flex-flow: row wrap;
  }
</style>