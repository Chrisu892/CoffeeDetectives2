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

    <AppSection class="narrow padding">
      <ContentDoc />
      <AppButton to="/sign-up" btnType="link" title="Create a Free Account" />
    </AppSection>
  </main>
</template>