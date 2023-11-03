<template>
  <div>
    <AppHeader>
      <AppNav :nav="navigation" />
    </AppHeader>
    <NuxtPage />
    <AppNewsletter />
    <AppFooter />
    <!-- <AppBeta /> -->
  </div>
</template>

<script setup lang="ts">
  import { createHead, useHead } from "unhead"
  const head = createHead()
  const { data: navigation } = await useAsyncData('navigation', () => {
    return fetchContentNavigation()
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