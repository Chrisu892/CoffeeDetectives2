<template>
  <nav class="nav">
    <ul class="flex-container flex-container--just-right nav__list">
      <li v-for="page, key in pages" :key="key" class="nav__list-item">
        <NuxtLink class="nav__list-link font-small" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  // const route = useRoute()
  // When accessing /posts/1, route.params.id will be 1
  // console.log(route.params.id)
</script>

<script>
  export default {
    data() {
      return {
        pages: [
          { title: 'Home', altTitle: 'Homepage', url: '/' },
          { title: 'What I Do', altTitle: 'Services', url: '/services/' },
          { title: 'My Work', altTitle: 'Portfolio', url: '/portfolio/' },
          { title: 'Contact', altTitle: 'Get in Touch', url: '/contact/' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav__list-item:not(:first-child) {
    margin-left: 3rem;
  }
  .nav__list-link {
    color: $clr-white;
    font-weight: $bold-weight;
    letter-spacing: 1px;
    opacity: 0.8;
    text-transform: uppercase;
    transition: opacity 350ms ease-in-out;
  }
  .nav__list-link:hover {
    opacity: 1;
    text-decoration-color: $clr-secondary;
  }
</style>