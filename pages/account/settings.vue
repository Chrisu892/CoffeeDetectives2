<script setup lang="ts">
  definePageMeta({ layout: "account" })
  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).find()
</script>

<script lang="ts">
  export default {
    data() {
      return {
        forms: [
          {
            title: 'Café Details',
            fields: [
              { title: 'Café Name', type: 'text', id: 'cafeName', required: true },
              { title: "Owner's Name", type: 'text', id: 'ownerName', required: true },
              { title: 'Phone Number', type: 'text', id: 'phoneNumber', required: true },
              { title: 'Address', type: 'text', id: 'address', required: true },
              { title: 'Website', type: 'url', id: 'website', required: false },
              { title: 'Social Media', type: 'url', id: 'socialMedia', required: false }
            ]
          },
          {
            title: 'Business Information',
            fields: [
              { title: 'Business Hours', type: 'text', id: 'businessHours', required: true },
              { title: 'About the Business', type: 'textarea', id: 'aboutBusiness', required: true },
              { title: 'Amenities', type: 'multiselect', id: 'amenities', required: true }
            ]
          },
          {
            title: 'Account Information',
            fields: [
              { title: 'Email Address', type: 'email', id: 'email', required: true },
              { title: 'Password', type: 'password', id: 'password', required: true },
            ]
          }
        ]
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Settings" />

    <form method="post" action="">
      <AdminCard v-for="form, key in forms" :key="key" :title="form.title">
        <ol class="">
          <li v-for="field, key in form.fields" :key="key" class="form-row">
            <FormField v-if="field.id !== 'amenities'" :field="field" />
            <FormField v-else :field="field" :options="amenities" />
          </li>
        </ol>
      </AdminCard>

      <AdminCard title="Danger Zone" type="danger">
        Do you really want to delete your account? This action is irreversible!
      </AdminCard>

      <AdminAction>
        <AppButton btnType="submit" title="Save Settings" />
      </AdminAction>
    </form>
  </main>
</template>