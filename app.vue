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
