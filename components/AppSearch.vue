<template>
  <form class="search" method="post">
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
      }
    },
    data() {
      return {
        locations: [
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
          { title: 'Easington', url: '/locations/easington/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
        ],
        coffeeBlends: [
          { title: 'Arabica', slug: 'arabica' },
          { title: 'Robusta', slug: 'robusta' },
          { title: 'Espresso', slug: 'espresso' },
          { title: 'Mocha', slug: 'mocha' },
          { title: 'Colombian', slug: 'colombian' },
          { title: 'Ethiopian', slug: 'speciality' }
        ],
        amenities: [
          { title: 'Free Wi-Fi', slug: 'free-wifi' },
          { title: 'Outdoor Sitting', slug: 'outdoor-sitting' },
          { title: 'Power Outlets', slug: 'power-outlets' },
          { title: 'Restrooms', slug: 'restrooms' },
          { title: 'Books & Magazines', slug: 'books-magazines' },
          { title: 'Live Music & Entertainment', slug: 'live-music-entertainment' },
          { title: 'Loyalty Programs', slug: 'loyalty-programs' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .search {
    background-color: $clr-third;
    border-radius: 40px;
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