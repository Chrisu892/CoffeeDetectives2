<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
  definePageMeta({ layout: "account" })
</script>

<script lang="ts">
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Base Details',
            fields: [
              { title: 'Title', type: 'text', id: 'title', required: true, placeholder: 'The name of your offer...' },
              { title: 'Date From', type: 'date', id: 'dateFrom', required: true },
              { title: 'Date To', type: 'date', id: 'dateTo', required: false },
              { title: 'Link to Your Offer', type: 'url', id: 'website', required: false, placeholder: 'https://www...' }
            ]
          },
          {
            title: 'Settings',
            fields: [
            { title: 'Status', type: 'select', id: 'status', required: true, selected: 'active', options: ['live', 'private', 'draft'] }
            ]
          },
          {
            title: 'Additional Content',
            fields: [
              { title: 'Description', type: 'textarea', id: 'description', required: false }
            ]
          }
        ]
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Promotion #" icon="PhTicket" />

    <form class="form">
      <AdminCard v-for="card, key in cards" :key="key" :title="card.title">
        <FormField v-for="field, key in card.fields" :key="key" :field="field" />
      </AdminCard>

      <AdminCard title="Danger Zone" type="danger">
        Do you really want to delete this offer? This action is irreversible!
      </AdminCard>

      <AdminAction>
        <AppButton btnType="submit" title="Save Offer" />
      </AdminAction>
    </form>
  </main>
</template>