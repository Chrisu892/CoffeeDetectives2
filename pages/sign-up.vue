<template>
  <main id="main" class="main">
    <ApplicationForm />
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>