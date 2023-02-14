<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import { createHead } from "unhead"
  const head = createHead()
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
