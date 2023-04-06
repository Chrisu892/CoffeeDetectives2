<template>
  <main id="main" class="main">
    <AppMasthead title="Contact Us" tagline="Do you have questions? Do you want to find our more about us? Don't hesitate to contact us!" />
    
    <AppSection class="padding">
      <ContentDoc />
    </AppSection>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()

  useContentHead(page)
</script>