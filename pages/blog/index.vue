<script setup>
  const { page } = useContent()
  useContentHead(page)

  const articles = await queryContent('blog').where({ type: { $eq: 'article' } }).limit(12).find()
</script>

<template>
  <main id="main" class="main">
    <AppMasthead :title="page.title" :tagline="page.tagline" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>

    <AppSection class="padding shade">
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </AppSection>
  </main>
</template>