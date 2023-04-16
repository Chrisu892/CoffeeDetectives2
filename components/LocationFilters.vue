<script>
  export default {
    data() {
      return {
        locations: [{
          options: [
            { title: 'Newcastle upon Tyne', url: '/locations/newcastle-upon-tyne/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Gateshead', url: '/locations/gateshead', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Sunderland', url: '/locations/sunderland/', images: { thumbnail: '/images/locations/fallback.jpeg'} },
            { title: 'Tynemouth', url: '/locations/tynemouth/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'South Shields', url: '/locations/south-shields/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Whitley Bay', url: '/locations/whitley-bay/', images: { thumbnail: '/images/locations/whitley-bay-promenade-in-england-north-east.jpeg' } },
            { title: 'North Shields', url: '/locations/north-shields/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Gosforth', url: '/locations/gosforth/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Newburn', url: '/locations/newburn/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Longbenton', url: '/locations/seaton-valley/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Boldon', url: '/locations/boldon/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Hebburn', url: '/locations/hebburn/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Felling', url: '/locations/felling/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Whickham', url: '/locations/whickham/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Blydon', url: '/locations/blydon/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Ryton', url: '/locations/ryton/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Washington', url: '/locations/washington/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Haughton-le-Spring', url: '/locations/haughton-le-spring/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Hetton', url: '/locations/hetton/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Castle Ward', url: '/locations/castle-ward', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Chester-le-Street', url: '/locations/chester-le-street', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            { title: 'Easington', url: '/locations/easington/', images: { thumbnail: '/images/locations/fallback.jpeg' } }
          ]
        }],
        priceRange: {
          range: {
            min: 1,
            max: 5
          }
        },
        openingHours: {
          range: {
            min: 8,
            max: 20
          }
        },
        blends: [{
          options: [
            { title: 'Arabica' },
            { title: 'Robusta' },
            { title: 'Espresso' },
            { title: 'Mocha' },
            { title: 'Colombian' },
            { title: 'Ethiopian' },
            { title: 'Speciality' }
          ]
        }],
        cuisine: [{
          title: 'Food Served',
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
          options: [
            { title: 'French' },
            { title: 'Italian' },
            { title: 'Middle Eastern' }
          ]
        }],
        dietaryRequirements: [{
          options: [
            { title: 'Gluten-Free' },
            { title: 'Vegeterian' },
            { title: 'Vegan' }
          ]
        }],
        amenities: [{
          options: [
            { title: 'Free Wi-Fi' },
            { title: 'Outdoor Seating' },
            { title: 'Power Outlets' },
            { title: 'Restrooms' },
            { title: 'Books and Magazines' },
            { title: 'Live Music or Entertainment' },
            { title: 'Loyalty programs' },
            { title: 'Catering' }
          ]
        }]
      }
    }
  }
</script>

<template>
  <div class="filters">
    <div class="filters__group">
      <FilterMultiSelectList title="Location" :list="locations" />
    </div>

    <div class="filters__group">
      <FilterRangeInput title="Price Range" :range="priceRange.range" />
    </div>

    <div class="filters__group">
      <FilterRangeInput title="Opening Hours" :range="openingHours.range" />
    </div>

    <div class="filters__group">
      <FilterMultiSelectList title="Coffee Blends" :list="blends" />
    </div>

    <div class="filters__group">
      <FilterMultiSelectList title="Cuisine" :list="cuisine" />
    </div>

    <div class="filters__group">
      <FilterMultiSelectList title="Dietary Requirements" :list="dietaryRequirements" />
    </div>

    <div class="filters__group">
      <FilterMultiSelectList title="Amenities" :list="amenities" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .filters {
    position: sticky;
    top: 1rem;
  }
  .filters__group {
    flex: 14.28% 0;
    flex: calc(14.28% - 5rem);

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
</style>