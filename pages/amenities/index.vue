<template>
  <main id="main" class="main">
    <AppPlainMasthead :title="page.title" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>

    <AppSection v-for="amenity, key in amenities" :key="key" class="padding" :class="key % 2 === 0 ? 'shade' : ''" :title="amenity.altTitle" :url="amenity.url">
      <div class="amenity">
        <div class="amenity__col">
          <ContentRenderer :value="amenity">
            <ContentRendererMarkdown :value="amenity" />
          </ContentRenderer>
        </div>
        <div class="amenity__col"></div>
      </div>
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).find()
</script>

<style scoped lang="scss">
  .amenity {
    @include flex-row;
  }
  .amenity__col {
    flex: 1 0;
  }
</style>