
<template>
  <main id="main">
    <HomeHero :title="page.title" :tagline="page.tagline" />
    <HomeIntro />

    <AppSection class="section--shade" title="Amenities" url="/amenities/">
      <div class="flex-container flex-container--gutter">
        <AppAmenityListing v-for="amenity, key in amenities" :key="key" :amenity="amenity" />
      </div>
    </AppSection>

    <AppSection title="Popular Locations" url="/locations/">
      <Splide :options="locationsSliderOptions">
        <SplideSlide v-for="chunk, key in locationChunks" :key="key">
          <div class="grid-container">
            <AppLocationListing v-for="location, key in chunk" :key="key" :location="location" :slider="true" />
          </div>
        </SplideSlide>
      </Splide>
    </AppSection>

    <AppSection class="section--shade" title="Popular Cafes" url="/cafes/">
      <Splide :options="sliderOptions">
        <SplideSlide v-for="cafe, key in cafes" :key="key">
          <AppCafeListing :cafe="cafe" view="grid" />
        </SplideSlide>
      </Splide>
    </AppSection>

    <AppSection title="Latest News" url="/blog/">
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="article, key in articles" :key="key" :article="article" />
      </div>
    </AppSection>

    <AppSocialMedia />
  </main>
</template>

<script setup lang="ts">
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'

  const { page } = useContent()
  useContentHead(page)

  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).limit(14).find()
  const locations = await queryContent('locations').where({ altTitle: { $ne: 'Locations' } }).limit(20).find()
  const cafes = await queryContent('cafes').where({ altTitle: { $ne: 'Cafes' } }).limit(12).find()
  const articles = await queryContent('blog').where({ type: { $eq: 'article' } }).limit(3).find()
  
  const chunkSize = 5
  const locationChunks = []

   for (let i = 0; i < locations.length; i += chunkSize) {
    locationChunks.push(locations.slice(i, i + chunkSize))
  }

  const locationsSliderOptions = {
    rewind: false,
    gap: '2rem',
    perMove: 1,
    perPage: 1
  }

  const sliderOptions = {
    rewind: false,
    gap: '2rem',
    perMove: 3,
    perPage: 3
  }
</script>