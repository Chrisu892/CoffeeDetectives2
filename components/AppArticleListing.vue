<template>
  <article class="article">
    <NuxtLink class="article__thumbnail" :to="article.url" :title="`Read more about ${article.title}`">
      <img class="article__thumbnail-image" :src="article.images.thumbnail" :alt="article.title" />
    </NuxtLink>
    <div class="article__details">
      <h3 class="article__title font-medium">
        <NuxtLink :to="article.url" :title="`Read ${article.title}`">{{ article.title }}</NuxtLink>
      </h3>
      <p class="article__tagline font-regular">{{ article.tagline }}</p>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .article {
    flex: 33.333% 0;
    flex: calc(33.333% - 1.5rem) 0;
  }
  .article__thumbnail {
    background-color: $clr-shade;
    border-radius: $border-radius;
    display: block;
    overflow: hidden;
    padding-top: 65%;
    position: relative;
  }
  .article__thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .article__title {
    margin-top: 1rem;
  }
  .article__tagline {
    margin-top: 1rem;
  }
</style>