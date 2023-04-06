<template>
  <main id="main" class="main">
    <AppPlainMasthead title="Latest news and updates from our Coffee Detectives" />

    <AppSection>
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const articles = await queryContent('blog').where({ type: { $eq: 'article' } }).limit(12).find()
</script>