<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
  definePageMeta({ layout: "account" })
</script>

<script lang="ts">
  export default {
    data() {
      return {
        cafe: {
          title: 'Your Cafe',
          _path: '/cafes/backyard-bike-shop',
          newTab: true,
          images: {
            thumbnail: {
              src: '/images/newcastle-gateshead.jpeg',
              alt: 'Fallback image'
            }
          },
          rating: 4.83,
          abstract: 'This is a preview of your cafe listing. You can edit your listing in the admin area.',
          amenities: [
            { title: 'Unique Decor', unique: true },
            { title: 'Single Origin' },
          ],
          address: 'Example Road, Example City, Country and Postcode'
        }
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Dashboard" icon="PhGauge" />
    <AdminCard title="Your Listing">
      <!-- <AppCafeListing :cafe="cafe" /> -->
    </AdminCard>
    <AdminCard title="Recent Activity">
      
    </AdminCard>
    <AdminCard title="Latest Performance">

    </AdminCard>
  </main>
</template>