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


<template>
  <article class="article">
    <NuxtLink class="article__thumbnail" :to="article._path" :title="`Read more about ${article.title}`">
      <img class="article__thumbnail-image" :src="article.images.thumbnail" :alt="article.title" />
    </NuxtLink>
    <div class="article__details">
      <h3 class="article__title font-medium">
        <NuxtLink :to="article._path" :title="`Read ${article.title}`">{{ article.title }}</NuxtLink>
      </h3>
      <p class="article__tagline font-regular">{{ article.abstract }}</p>
      <NuxtLink class="article__link font-regular" :to="article._path" title="Read a full story">Read full story</NuxtLink>
    </div>
  </article>
</template>

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
  .article__link {
    display: inline-block;
    font-weight: $bold-weight;
    margin-top: 0.75rem;
    text-decoration: underline dashed $clr-secondary 2px;
    text-decoration-color: rgba($clr-secondary, 0.3);
    text-underline-offset: 7px;

    &:hover {
      text-decoration: underline dashed $clr-secondary 2px;
    }
  }
</style>