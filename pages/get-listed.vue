<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  definePageMeta({
    layout: "default"
  })
</script>

<template>
  <main id="main" class="main">
    <AppMasthead title="Get Listed" tagline="Connect with your customers and get authentic reviews" />

    <AppSection class="padding">
      <ContentDoc />
      <AppButton to="/register-your-interest" title="Register Your Interest" class="animate margin-top" />
    </AppSection>
  </main>
</template>