<template>
  <div>
    Project Page
  </div>
</template>

<script setup>
  definePageMeta({
    validate: async (route) => {
      // check if the id is made up of digits
      return /^\d+$/.test(route.params.id)
    }
  })
</script>