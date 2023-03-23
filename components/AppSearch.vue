<template>
  <section class="search">
    <div class="inner">
      <form class="search__form" method="post">
        <div class="search__form__text">
          <p v-if="title" class="search__form__title font-medium"><strong>{{ title }}</strong></p>
          <p v-if="tagline" class="search__form__tagline font-regular">{{ tagline }}</p>
        </div>
        
        <div class="flex-container flex-container--gutter flex-container--align-bottom">
          <div class="search__form__field">
            <AppSearchField title="Place or Location" placeholder="Where are you going?" :search="locations" />
          </div>

          <div class="search__form__field">
            <AppSearchField title="Coffee Blend" placeholder="What's your favourite coffee blend?" :search="coffeeBlends" />
          </div>

          <div class="search__form__field">
            <AppSearchField title="Amenities" placeholder="What do you need?" :search="amenities" />
          </div>

          <div class="search__form__field">
            <AppButton btnType="button" title="Search" />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
      tagline: String,
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
    color: $clr-white;
  }
  .search__form {
    background-color: $clr-secondary;
    border-radius: $border-radius;
    margin-top: -4rem;
    padding: 2rem;
  }
  .search__form__text {
    margin-bottom: 2rem;
    text-align: center;
  }
  .search__form__tagline {
    margin-top: 0.5rem;
  }
  .search__form__field {
    flex: 1 0;

    &:last-child {
      max-width: 150px;
    }
  }
  .search__form__label {
    display: block;
  }
  .search__form__button {
    margin-top: 2.4rem;
  }
</style>