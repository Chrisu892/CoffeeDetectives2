<template>
  <form id="search" class="search" method="post">
    <p v-if="title" class="search__title font-medium"><strong>{{ title }}</strong></p>
    
    <div class="search__container">
      <div class="search__field">
        <AppSearchField title="Place or Location" :search="locations" placeholder="Where are you going?" />
      </div>
      <div class="search__field">
        <AppSearchField title="Coffee Blend" :search="coffeeBlends" />
      </div>
      <div class="search__field">
        <AppSearchField title="Amenities" :search="amenities" />
      </div>
      <div class="search__action">
        <AppButton btnType="button" title="Search" />
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Find a cafe in Tyne & Wear'
      },
      locations: {
        type: Array,
        default: () => []
      },
      amenities: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        coffeeBlends: [
          { title: 'Arabica', altTitle: 'Arabica', slug: 'arabica' },
          { title: 'Robusta', altTitle: 'Robusta', slug: 'robusta' },
          { title: 'Espresso', altTitle: 'Espresso', slug: 'espresso' },
          { title: 'Mocha', altTitle: 'Mocha', slug: 'mocha' },
          { title: 'Colombian', altTitle: 'Colombian', slug: 'colombian' },
          { title: 'Ethiopian', altTitle: 'Ethiopian', slug: 'ethiopian' }
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    @include formal-invitation-pattern;
    border-radius: $border-radius;
    box-shadow: 0 0 15px 5px rgba($clr-text, 0.3);
    color: $clr-white;
    padding: 2rem;
    position: relative;
    transform: translateY(5rem);
    z-index: 10;
  }
  .search__title {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .search__container {
    align-items: flex-end;
    display: flex;
    flex-flow: row;
    gap: 1rem;
    margin-top: 0.75rem;
  }
  .search__field {
    flex: 1 0;
  }
</style>