<template>
  <main id="main" class="main">
    <AppMasthead title="Become a Dedective" tagline="Let's build a network of cafes in Tyne and Wear together" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>