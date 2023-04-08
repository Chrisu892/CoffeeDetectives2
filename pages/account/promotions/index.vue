<script setup lang="ts">
  definePageMeta({
    layout: "account"
  })
</script>

<script lang="ts">
  export default {
    data() {
      return {
        rows: [
          { 
            id: 1,
            title: 'Example Promotion', 
            tagline: 'This is an example text for this promotion.', 
            status: 'live',
            actions: {
              edit: {
                title: 'Edit',
                url: '/account/promotions/1'
              },
              delete: {
                title: 'Delete',
                url: '?delete=1'
              }
            }
          },
          { 
            id: 2,
            title: 'Another Promotion', 
            tagline: 'This is another example text for this promotion.', 
            status: 'expired',
            actions: {
              edit: {
                title: 'Edit',
                url: '/account/promotions/2'
              },
              delete: {
                title: 'Delete',
                url: '?delete=2'
              }
            }
          }
        ],
        create: {
          title: 'Add Promotion',
          url: '/account/promotions/id'
        }
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Promotions" :create="create" />

    <AdminRow v-for="row, key in rows" :key="key" :row="row" />
  </main>
</template>

<style scoped lang="scss">
  .main {
    height: 100vh;
  }
</style>