<template>
  <section class="section blog">
    <div class="inner">
      <div class="section__container">
        <h2 class="section__title font-medium">{{ title }}</h2>
        <div class="section__action">
          <NuxtLink to="/blog/">View All</NuxtLink>
        </div>
      </div>
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Latest Articles'
      },
      articles: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .blog {
    background-color: $clr-white;
    padding: 4rem 0;
  }
</style>