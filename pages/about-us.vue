<template>
  <main id="main" class="main">
    <AppMasthead title="About Us" tagline="About the Coffee Detectives and our mission" />

    <AppSection class="narrow padding">
      <ContentDoc />
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>
