<template>
  <main id="main" class="main">
    <AppPlainMasthead title="Cafes" />

    <AppSection class="padding-bottom">
      <AppListings :filters="filters" :listings="cafes" />
    </AppSection>
  </main>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        filters: [{
          title: 'Price Range',
          type: 'range',
          range: {
            min: 1,
            max: 5
          }
        }, {
          title: 'Opening Times',
          type: 'range',
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

<script setup lang="ts">
  /**
   * Use page content in the head
   */
  const { page } = useContent()
  useContentHead(page)

  /**
   * Get the page slug
   */
  const route = useRoute()
  const slug = route.path.split('/')[route.path.split('/').length - 1]

  /**
   * Fetch data required for this page
   */
   const cafes = await queryContent('cafes')
    .where({ locationId: { $eq: slug } })
    .limit(12).find()
</script>