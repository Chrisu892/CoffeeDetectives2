<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Find a café in Tyne & Wear'
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
        location: {
          type: 'text',
          id: 'location',
          required: true,
          title: 'Place or Location',
          placeholder: 'Where are you going?'
        },
        coffeeBlends: [
          { id: 'arabica', title: 'Arabica', altTitle: 'Arabica', slug: 'arabica', show: true },
          { id: 'robusta', title: 'Robusta', altTitle: 'Robusta', slug: 'robusta', show: true },
          { id: 'espresso', title: 'Espresso', altTitle: 'Espresso', slug: 'espresso', show: false },
          { id: 'mocha', title: 'Mocha', altTitle: 'Mocha', slug: 'mocha', show: false },
          { id: 'colombian', title: 'Colombian', altTitle: 'Colombian', slug: 'colombian', show: false },
          { id: 'ethiopian', title: 'Ethiopian', altTitle: 'Ethiopian', slug: 'ethiopian', show: false }
        ],
      }
    }
  }
</script>

<template>
  <form id="search" class="search" method="post">
    <div class="search__container">
      <div class="search__field">
        <FormField :field="location" />
      </div>
      <div class="search__field">
        <FormOpenSelect title="Coffee Blends" :options="coffeeBlends" />
      </div>
      <div class="search__field">
        <FormOpenSelect title="Amenities" :options="amenities" />
      </div>
      <div class="search__action">
        <AppButton btnType="submit" title="Search" class="primary" icon="magnifying-glass" />
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
  .search {
    background-color: $clr-secondary;
    @include formal-invitation-pattern;
    border-radius: $border-radius;
    box-shadow: 0 0 15px 5px rgba($clr-text, 0.3);
    color: $clr-white;
    margin-top: -6rem;
    padding: $gutter;
    position: relative;
    z-index: 1;
  }
  .search__container {
    align-items: flex-end;
    display: flex;
    flex-flow: row;
    gap: 1rem;
  }
  .search__field {
    flex: 1 0;
  }

  @media (max-width: 1440px) {
    .search {
      padding: $gutter-half;
    }
  }

  @media (max-width: 1160px) {
    .search__container {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
    }
    .search__action {
      grid-column: 1/4;
      text-align: center;
    }
  }

  @media (max-width: 1030px) {
    .search__container {
      grid-template-columns: repeat(2, 1fr);
    }
    .search__action {
      grid-column: 2/3;
      grid-row: 2/3;
      text-align: left;

      .button {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .search__container {
      grid-template-columns: 1fr;
    }
    .search__action {
      grid-column: initial;
      grid-row: initial;

      .button {
        margin-top: 1rem;
      }
    }
  }
</style>