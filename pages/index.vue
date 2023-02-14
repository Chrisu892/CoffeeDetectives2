<template>
  <div>
    <h1>Welcome to the homepage</h1>
  </div>
</template>

<script setup lang="ts">
  import { useHead } from 'unhead'

  useHead({
    title: 'My awesome site'
  })
</script>