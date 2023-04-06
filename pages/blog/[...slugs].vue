<template>
  <main id="main" class="main">
    <AppPlainMasthead :title="page.title" :showTitle="false" />

    <AppSection class="narrow padding">
      <article class="article">
        <header class="article__header">
          <h1 class="article__title font-xl">{{ page.title }}</h1>
          <p class="article__details font-regular">Posted on {{ page.date }} by {{ page.author }}</p>
        </header>

        <main class="article__main">
          <div class="article__image">
            <img class="article__image__source" :src="page.images.thumbnail" :alt="page.title" />
          </div>
          <div class="article__content">
            <ContentDoc />
          </div>
        </main>
      </article>
    </AppSection>

    <AppSection class="padding shade" title="More Stories" url="/blog/">
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </AppSection>
  </main>
</template>

<script setup lang="ts">
    const { page } = useContent()
    useContentHead(page)

    const articles = await queryContent('blog').where({ type: { $eq: 'article' } }).limit(3).find()
</script>

<style scoped lang="scss">
  .article__header {
    padding: 2.5rem 0;
    text-align: center;
  }
  .article__title {
    margin: 0 auto;
  }
  .article__details {
    margin: 1.25rem 0 0;
  }
  .article__image {
    border-radius: $border-radius;
    overflow: hidden;
    padding-top: 50%;
    position: relative;
  }
  .article__image__source {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .article__content {
    margin-top: 2rem;
  }
</style>