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
  import { PhMapPin, PhShieldCheck, PhHeart, PhShare } from 'phosphor-vue';

  export default {
    components: {
      PhMapPin,
      PhShieldCheck,
      PhHeart,
      PhShare
    }
  }
</script>

<template>
  <main id="main" class="main">

    <section id="masthead" class="masthead">
      <div class="inner masthead__inner">
        <div class="masthead__container">
          <div class="masthead__content">
            <h1 class="masthead__title font-xl">{{ page.title }}</h1>
            <p class="masthead__location font-regular"><PhMapPin /> {{ page.address }}</p>
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

    <AppSection class="padding">
      <div class="large-card">
        <div class="large-card__description">
          <h2 class="large-card__title font-medium">About {{ page.title }}</h2>
          <div class="large-card__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora ad rerum exercitationem, alias nostrum eum minima, saepe voluptate, quasi magni? Numquam, aliquid! Commodi voluptates reiciendis, et incidunt laborum rem consequuntur quaerat dignissimos ad natus earum quos est aliquid quod ducimus ipsa a laudantium ipsam voluptatibus ab aspernatur, repudiandae eveniet molestias expedita. Iure cum nobis voluptatem libero vel. Nisi quisquam ipsum aut voluptates ab eligendi repudiandae cupiditate vel, facere saepe est sit natus consectetur, aliquid expedita debitis inventore doloremque ducimus. Corrupti ut quisquam dolorem maxime totam illo, porro enim sed in accusamus, quaerat laboriosam, unde optio. Velit ipsum quam possimus.</div>
        </div>
        <div class="large-card__amenities">
          <h2 class="large-card__title font-medium">Amenities</h2>
          <ul class="large-card__list font-regular">
            <li class="large-card__amenity" v-for="amenity, key in page.amenities" :key="key">{{ amenity.title }}</li>
          </ul>
        </div>
      </div>
    </AppSection>

    <AppSection class="padding shade">
      <div class="large-card">
        <div class="large__card__main">
          <h2 class="large-card__title font-medium">Events at {{ page.title }}</h2>
          <div v-if="events.length > 0" class="flex-container"></div>
          <div v-else>Sorry, there are no events at {{ page.title }} at the moment. Please check again soon.</div>
        </div>
      </div>
    </AppSection>

    <AppSection class="padding">
      <div class="large-card">
        <div class="large-card__main">
          <h2 class="large-card__title font-medium">Directions to {{ page.title }}</h2>
          <AppMap />
        </div>
      </div>
    </AppSection>

    <AppSection class="padding shade" title="You might also like" url="cafes">
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
  

  .large-card {
    @include flex-row;
    gap: 3rem;
  }
  .large-card__description {
    flex: 3 0;
  }
  .large-card__amenities {
    flex: 1 0;
  }
  .large-card__thumbnail {
    background-color: $clr-shade;
    @include flex-row;
    align-items: flex-end;
    flex: 1 0;
  }
  .large-card__title {
    margin: 0 0 1.25rem 0;
  }
  .large-card__thumbnail {
    position: relative;
  }
  .large-card__thumbnail-image {
    transform-origin: bottom left;
    transform: scale(1.1);
  }

  .large-card__verdict {
    @include flex-row;
    align-items: center;
    background-color: $clr-primary;
    border-radius: $border-radius;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    left: 0;

    svg {
      fill: $clr-secondary;
      display: inline-block;
      height: 34px;
      width: 34px;
    }
  }
  .large-card__verdict__content {
    flex: 1 0;
  }
  .large-card__verdict__title {
    line-height: 1;
    margin-bottom: 0.125rem;
  }
  .large-card__verdict__message {
    font-weight: $bold-weight;
    line-height: 1;
  }
</style>