<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
  definePageMeta({ layout: "account" })
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Dashboard" icon="PhGauge" />
    <AdminCard title="Recent Activity">
      
    </AdminCard>
    <AdminCard title="Latest Performance">

    </AdminCard>
  </main>
</template>