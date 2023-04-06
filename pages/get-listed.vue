<template>
  <main id="main" class="main">
    <AppMasthead title="Get Listed" tagline="Connect with your customers and get authentic reviews" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>