<script setup lang="ts">
    const { page } = useContent()
    useContentHead(page)

    const articles = await queryContent('blog').where({ type: { $eq: 'article' } }).limit(3).find()
</script>

<template>
  <main id="main" class="main">
    <section class="main-article">
      <header class="main-article__header">
        <div class="inner inner--narrow">
          <h1 class="main-article__title font-xl">{{ page.title }}</h1>
          <p class="main-article__details font-regular">Posted on {{ page.date }} by {{ page.author }}</p>
          <div class="main-article__image">
            <img class="main-article__image__source" :src="page.images.thumbnail" :alt="page.title" />
          </div>
        </div>
      </header>
      <main class="main-article__main">
        <div class="inner inner--narrow">
          <div class="main-article__content">
            <ContentDoc />
          </div>
        </div>
      </main>
    </section>

    <AppSection class="padding shade" title="You may also like" url="/blog/">
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  .main-article {
    padding-bottom: 3rem;
  }
  .main-article__header {
    @include subtle-formal-invitation-pattern;
    padding: calc(5rem + 80px) 0 0;
    text-align: center;
  }
  .main-article__title {
    margin: 0 auto;
  }
  .main-article__details {
    margin: 1.5rem 0 2rem;
  }
  .main-article__image {
    border-radius: $border-radius;
    overflow: hidden;
    padding-top: 50%;
    position: relative;
  }
  .main-article__image__source {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main-article__content {
    margin-top: 2rem;
  }
</style>