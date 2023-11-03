<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  definePageMeta({
    layout: "default"
  })
</script>

<template>
  <main id="main" class="main">
    <AppMasthead title="Privacy Policy" tagline="We respect your privacy" />

    <AppSection class="padding">
      <ContentDoc />
    </AppSection>
  </main>
</template>