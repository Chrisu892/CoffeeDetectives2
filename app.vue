<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import { createHead, useHead } from "unhead"
  const head = createHead()

  useHead({
    link: [{
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    }, {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    }, {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Gloock&family=Red+Hat+Display&family=Satisfy&display=swap'
    }]
  })
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
