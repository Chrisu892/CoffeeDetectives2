<script>
  export default {
    props: {
      amenities: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedAmenities: new Set()
      }
    },
    methods: {
      handleSelect(amenity) {
        this.selectedAmenities.add(amenity)
      }
    }
  }
</script>

<template>
  <div class="amenities">
    <div class="flex-container flex-container--gutter">
      <AppAmenityListing v-for="amenity, key in amenities" :key="key" :amenity="amenity" @selectAmenity="handleSelect" />
    </div>
    <div class="amenities__action">
      <p class="amenities__title font-large">Choose amenities you want and hit "Find Cafes" button below</p>
      <AppButton btnType="button" title="Find Cafes" class="primary animate" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .amenities__action {
    background-color: darken($clr-white, 10%);
    border-radius: $border-radius;
    gap: 4px;
    margin-top: 2rem;
    padding: 2rem 1rem;
    text-align: center;
  }
  .amenities__title {
    font: $font-header;
    margin-bottom: 1rem;
  }
</style>