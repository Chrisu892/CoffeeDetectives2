<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
  definePageMeta({ layout: "account" })
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Gallery" icon="PhImage" />

    <AdminCard title="Thumbnail Image">
      <AdminImage />
    </AdminCard>

    <AdminCard title="Gallery Images">
      <AdminImage size="small" />
      <AdminImage size="small" />
      <AdminImage size="small" />
    </AdminCard>

    <AdminAction>
      <AppButton type="submit" title="Update Gallery" />
    </AdminAction>
  </main>
</template>

<style scoped lang="scss">
  .main {
    height: 100vh;
  }
</style>