<template>
  <div>
    <AppNavToggle />
    
    <nav class="nav">
      <ul class="flex-container flex-container--just-right nav__list">
        <li v-for="page, key in pages" :key="key" class="nav__list-item">
          <NuxtLink class="nav__list-link font-small" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
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
          { title: 'Find a Coffee', altTitle: 'Find a Coffee', url: '/coffee-shops/' },
          { title: 'Destinations', altTitle: 'Destinations', url: '/destinations/' },
          { title: 'Blog', altTitle: 'Blog', url: '/blog/' },
          { title: 'About', altTitle: 'About', url: '/about/' },
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

  @media screen and (max-width: 930px) {
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($clr-primary, 0.8);

      &::before {
        content: 'Menu';
        top: 10%;
        left: 10%;
        color: $clr-white;
        font-size: $font-large;
        position: absolute;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
    .nav__list {
      border: solid 1px rgba($clr-white, 0.2);
      border-radius: $border-radius;
      position: absolute;
      top: 20%;
      left: 10%;
      bottom: 20%;
      right: 10%;
      background-color: $clr-primary;
      min-height: 600px;
      overflow-y: auto;
      flex-direction: column;
    }
    .nav__list-item {
      flex: 1;
      width: 100%;

      &:not(:first-child) {
        border-top: solid 1px rgba($clr-white, 0.2);
        margin-left: 0;
      }
    }
    .nav__list-link {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
</style>