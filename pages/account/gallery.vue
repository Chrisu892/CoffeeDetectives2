<script setup lang="ts">
  definePageMeta({
    layout: "account"
  })
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Gallery" />

    <AdminCard title="Thumbnail Image">

    </AdminCard>

    <AdminCard title="Gallery Images">

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