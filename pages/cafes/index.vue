<script setup lang="ts">
  const cafes = await queryContent('cafes').where({ type: { $eq: 'cafe' } }).find()
  const { page } = useContent()
  useContentHead(page)
</script>

<script lang="ts">
  export default {
    data() {
      return {
        filters: [{
          title: 'Price Range',
          type: 'range',
          symbol: 'currency',
          range: {
            min: 1,
            max: 5
          }
        }, {
          title: 'Opening Times',
          type: 'range',
          symbol: 'clock',
          range: {
            min: 8,
            max: 20
          }
        }, {
          title: 'Coffee Blends',
          type: 'multiselect',
          options: [
            { title: 'Arabica' },
            { title: 'Robusta' },
            { title: 'Espresso' },
            { title: 'Mocha' },
            { title: 'Colombian' },
            { title: 'Ethiopian' },
            { title: 'Speciality' }
          ]
        }, {
          title: 'Food Served',
          type: 'multiselect',
          options: [
            { title: 'Sandwiches' },
            { title: 'Salads'},
            { title: 'Pastries' },
            { title: 'Baked Goods' },
            { title: 'Pancakes' },
            { title: 'Waffles' },
            { title: 'Omelets' },
          ]
        }, {
          title: 'Cuisine Served',
          type: 'multiselect',
          options: [
            { title: 'French' },
            { title: 'Italian' },
            { title: 'Middle Eastern' }
          ]
        }, {
          title: 'Amenities',
          type: 'multiselect',
          options: [
            { title: 'Free Wi-Fi' },
            { title: 'Outdoor Seating' },
            { title: 'Power Outlets' },
            { title: 'Restrooms' },
            { title: 'Books and Magazines' },
            { title: 'Live Music' },
            { title: 'Loyalty programs' },
            { title: 'Catering' }
          ]
        }]
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AppMasthead :title="page.longTitle" :tagline="page.tagline" />

    <AppSection class="padding">
      <AppListings :filters="filters" :listings="cafes" />
    </AppSection>
  </main>
</template>