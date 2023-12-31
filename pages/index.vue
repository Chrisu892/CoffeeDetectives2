<script setup lang="ts">
  /**
   * Import required dependencies
   */
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'

  /**
   * Use page content in the head
   */
  const { page } = useContent()
  useContentHead(page)

  /**
   * Fetch data required for the homepage
   */
  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).limit(14).find()
  const locations = await queryContent('locations').where({ title: { $ne: 'Locations' } }).limit(20).find()
  const cafes = await queryContent('cafes').where({ type: { $eq: 'cafe' } }).limit(6).find()
  const articles = await queryContent('blog').where({ type: { $eq: 'article' } }).limit(3).find()

  /**
   * Split the locations into 5 chunks
   */
  interface LocationChunks {}
  const chunkSize = 5
  const locationChunks: LocationChunks[] = []

  for (let i = 0; i < locations.length; i += chunkSize) {
    locationChunks.push(locations.slice(i, i + chunkSize))
  }

  /**
   * Locations slider options
   */
  const locationsSliderOptions = {
    rewind: false,
    gap: '2rem',
    perMove: 1,
    perPage: 1
  }

  /**
   * General slider options
   */
  const sliderOptions = {
    rewind: false,
    gap: '2rem',
    perMove: 3,
    perPage: 3
  }

  /**
   * Hero slider options
   */
  const heroSliderOptions = {
    perMove: 1,
    perPage: 1,
    pagination: false,
    arrows: false,
    rewind: true,
    autoplay: true,
    type: 'fade'
  }

  /**
   * Intro slides
   */
  const introSlides = [
    { src: '/images/confident-cafe-owner.jpeg', alt: 'Confident Male Cafe Owner' },
    { src: '/images/confident-cafe-owner-2.jpeg', alt: 'Confident Female Cafe Owner' }
  ]
</script>

<template>
  <main id="main" class="main">

    <HomeHero :title="page.longTitle" :tagline="page.tagline">
      <template #heroSlider>
        <Splide :options="heroSliderOptions">
          <template v-for="location, key in locations">
            <SplideSlide v-if="location.images.header && location.settings.slider" :key="key">
              <AppSlide :title="location.title" :path="location._path" :image="location.images.header" />
            </SplideSlide>
          </template>
        </Splide>
      </template>
    </HomeHero>

    <AppSection class="standard">
      <AppSearch :locations="locations" :amenities="amenities" />
    </AppSection>

    <HomeIntro>
      <template #carousel>
        <Splide :options="heroSliderOptions">
          <SplideSlide v-for="slide, key in introSlides">
            <AppSlide :image="slide" class="rounded" />
          </SplideSlide>
        </Splide>
      </template>
    </HomeIntro>

    <AppSection class="padding shade">
      <AppTabs>
        <template #locations>
          <Splide :options="locationsSliderOptions">
            <SplideSlide v-for="chunk, key in locationChunks" :key="key">
              <div class="grid-container">
                <AppLocationListing v-for="location, key in chunk" :key="key" :location="location" :slider="true" />
              </div>
            </SplideSlide>
          </Splide>
        </template>
        <template #amenities>
          <AppAmenitiesFilter :amenities="amenities" />
        </template>
      </AppTabs>
    </AppSection>

    <AppSection class="padding" title="Popular Cafés in Tyne and Wear" url="/cafes/">
      <div class="flex-container flex-container--gutter">
        <AppCafeListing v-for="cafe, key in cafes" :key="key" :cafe="cafe" view="grid" />
      </div>
    </AppSection>

    <AppSection class="padding shade" title="Latest News" url="/blog/">
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </AppSection>
  </main>
</template>