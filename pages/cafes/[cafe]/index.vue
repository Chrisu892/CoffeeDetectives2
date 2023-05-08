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
   * Fetch data required for the cafe page
   */
  const cafes = await queryContent('cafes').where({ type: { $eq: 'cafe' } }).limit(6).find()
  const events: Array<any> = []

  /**
   * Cafe listings carousel options
   */
  const cafeSliderOptions = {
    rewind: false,
    gap: '2rem',
    perMove: 3,
    perPage: 3
  }
</script>

<script lang="ts">
  import { 
    PhMapPin, PhHeart, PhShare, 
    PhClock, PhStar, PhCoffee, 
    PhPhone, PhEnvelope, PhDesktop
  } from 'phosphor-vue';

  export default {
    components: {
      PhMapPin,
      PhHeart,
      PhShare,
      PhClock,
      PhStar,
      PhCoffee,
      PhPhone,
      PhEnvelope,
      PhDesktop
    }
  }
</script>

<template>
  <main id="main" class="main">

    <section id="masthead" class="masthead">
      <div class="inner masthead__inner">
        <div class="masthead__container">
          <div class="masthead__content">
            <h1 v-if="page.title" class="masthead__title font-xl">{{ page.title }}</h1>
            <p v-if="page.address" class="masthead__location font-regular"><PhMapPin /> {{ page.address }}</p>
          </div>
          <div class="masthead__actions">
            <button type="button" class="masthead__action"><PhHeart /></button>
            <button type="button" class="masthead__action"><PhShare /></button>
          </div>
        </div>
        <div class="masthead__gallery">
          <AppLocationGallery v-if="page.images.gallery" :images="page.images.gallery" />
          <img v-else class="masthead__gallery-image" :src="page.images.thumbnail" :title="`${page.title} gallery image`" />
        </div>
      </div>
    </section>

    <AppSection class="padding-bottom">
      <div class="card">
        <div class="card__content">
          <h3 class="card__title font-medium"><PhCoffee /> About {{ page.title }}</h3>
          <div class="card__container">
            <div class="card__text">
              <p class="font-regular">{{ page.content.description }}</p>
            </div>
            <div class="card__contact">
              <h4 class="font-regular">Contact Information</h4>
              <div v-if="page.contact.telephone" class="card__external-link">
                <PhPhone /> <a :href="`tel:${page.contact.telephone}`" :title="`Call ${page.contact.telephone}`">{{ page.contact.telephone }}</a>
              </div>
              <div v-if="page.contact.emailAddress" class="card__external-link">
                <PhEnvelope /> <a :href="`mailto:${page.contact.emailAddress}`" :title="`Send email to ${page.contact.emailAddress}`">{{ page.contact.emailAddress }}</a>
              </div>
              <div v-if="page.contact.website" class="card__external-link">
                <PhDesktop /> <a :href="page.contact.website" :title="`Visit ${page.title} website (opens in new tab)`" target="_blank">Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__content">
          <h3 class="card__title font-medium"><PhStar /> Amenities</h3>
          <div class="card__text">
            <p>{{ page.title }} has the following amenities:</p>
            <ul class="card__amenities">
              <li v-for="amenity, key in page.amenities" :key="key">{{ amenity.title }}</li>
            </ul>
          </div>
        </div>
        <div class="card__content">
          <h3 class="card__title font-medium"><PhClock /> Opening Times</h3>
          <div class="card__text">
            <ul class="card__opening-times">
              <li v-for="opening, key in page.openingsTimes" :key="key">{{ opening.day }}: {{ opening.from }} - {{ opening.to }}</li>
            </ul>
            <p class="card__note">The opening times at {{ page.title }} may be subject to change.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__content">
          <h3 class="card__title font-medium"><PhMapPin /> Directions to {{ page.title }}</h3>
          <div class="card__text font-regular">{{ page.content.directions }}</div>
          <AppMap :lat="page.geolocation.latitude" :lng="page.geolocation.longitude" />
        </div>
      </div>
    </AppSection>

    <AppSection class="padding shade">
      <div class="large-card">
        <div class="large-card__description">
          <h2 class="large-card__title font-medium">Events at {{ page.title }}</h2>
          <div v-if="events.length > 0" class="flex-container"></div>
          <div v-else>Sorry, there are no events at {{ page.title }} at the moment. Please check again soon.</div>
        </div>
      </div>
    </AppSection>

    <AppSection class="padding" title="You might also like" url="/cafes">
      <Splide :options="cafeSliderOptions">
        <SplideSlide v-for="cafe, key in cafes" :key="key">
          <AppCafeListing :cafe="cafe" view="grid" />
        </SplideSlide>
      </Splide>
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  .masthead {
    @include subtle-formal-invitation-pattern;
    padding: calc(80px + 6rem) 0 2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #fff 0%, transparent 100%);
    }
  }
  .masthead__inner {
    position: relative;
    z-index: 1;
  }
  .masthead__container {
    @include flex-row;
    align-items: flex-end;
    margin-bottom: 1.5rem;
  }
  .masthead__content {
    flex: 1 0;
  }
  .masthead__title {
    margin: 0;
  }
  .masthead__location {
    @include flex-row;
    align-items: center;
    margin-top: 0.25rem;

    svg {
      margin-right: 0.25rem;
    }
  }
  .masthead__actions {
    @include flex-row;
    gap: 0.75rem;
  }
  .masthead__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 100%;
    cursor: pointer;
  }

  .card {
    @include flex-row;
    gap: 3rem;
    margin-top: 3rem;
  }
  .card__content {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    flex: 1 0;
    overflow: hidden;
  }
  .card__title {
    align-items: center;
    background: linear-gradient(0deg, $clr-shade 0%, #fff 100%);
    border-bottom: solid 1px $clr-shade;
    border-radius: $border-radius $border-radius 0 0;
    display: flex;
    margin: 0;
    padding: 0.875rem 1rem;

    svg {
      color: $clr-primary;
      margin-right: 0.5rem;
    }
  }
  .card__container {
    @include flex-row;
    gap: 2rem;
  }
  .card__text {
    flex: 3 0;
    padding: 0.875rem 1rem;
  }
  .card__amenities {
    column-count: 3;
    column-gap: 1rem;
    margin-top: 1rem;
  }
  .card__opening-times {
    column-count: 2;
    column-gap: 1rem;
  }
  .card__note {
    font-style: italic;
    color: darken($clr-shade, 25%);
  }
  .card__contact {
    flex: 1.5 0;
    padding: 0.875rem 1rem;
  }
  .card__external-link {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 0.5rem;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
</style>