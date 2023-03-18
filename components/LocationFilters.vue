<template>
  <div class="filters">
    <div class="filters__group">
      <FilterRangeInput title="Price Range" :min="priceRange.min" :max="priceRange.max" />
    </div>

    <div class="filters__group">
      <FilterRangeInput title="Opening Hours" :min="openingHours.min" :max="openingHours.max" />
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

<script>
  export default {
    data() {
      return {
        priceRange: {
          min: 1,
          max: 5
        },
        openingHours: {
          min: '8',
          max: '20'
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