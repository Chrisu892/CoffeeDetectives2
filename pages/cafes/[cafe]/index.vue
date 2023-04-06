<template>
  <main id="main" class="main">
    <AppPlainMasthead />

    <section id="masthead" class="masthead">
      <div class="inner masthead__inner">
        <div class="flex-container flex-container--gutter flex-container--align-center">
          <div class="masthead__content">
            <h1 class="masthead__title font-xl">{{ page.title }}</h1>
            <p class="masthead__location font-regular">{{ page.address }}</p>
            <p class="masthead__tagline font-regular">{{ page.abstract }}</p>
            <div class="masthead__action">
              <AppButton to="#reviews" title="Read Reviews" />
              <AppButton v-if="!page.owner" to="/get-listed?cafe=1" title="Claim Yours" class="button--outlined" />
            </div>
          </div>
          <div class="masthead__gallery">
            <Splide v-if="page.images.gallery" :options="options">
              <SplideSlide v-for="image, key in page.images.gallery" :key="key">
                  <img class="masthead__gallery-image" :src="image" :title="`${page.title} gallery image`" />
              </SplideSlide>
            </Splide>
            <div v-else>
              <img class="masthead__gallery-image" :src="page.images.thumbnail" :title="`${page.title} gallery image`" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reviews" class="section section--padding">
      <div class="inner">
        <h2 class="section__title font-medium">About {{ page.title }}</h2>
        <div class="page-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero placeat debitis doloremque labore autem qui voluptates natus distinctio dignissimos nesciunt in quisquam et id magnam suscipit excepturi adipisci, quidem pariatur praesentium. Officia laudantium obcaecati exercitationem! Velit optio minus alias dolorum odit sequi delectus officiis consequuntur maxime quibusdam veniam neque animi est, nisi sit aliquam natus harum tenetur rem temporibus voluptate ea saepe ullam! Maxime quis voluptate omnis, nulla reprehenderit magni ratione amet adipisci pariatur harum. Quidem animi corrupti reiciendis, error debitis cupiditate, quas ullam deleniti, inventore ratione minima consequuntur quo molestiae velit aperiam deserunt aliquam! Tenetur, dolor. In, nihil?</div>
      </div>
    </section>

    <section id="features" class="section section--padding">
      <div class="inner">
        <div class="flex-container">
          <h2 class="section__title font-medium">{{ page.title }} at Glance</h2>
        </div>
        <div class="page-content">Amenities, Coffee Blends, Cuisine, etc.</div>
      </div>
    </section>

    <section id="evens" class="section section--padding">
      <div class="inner">
        <div class="flex-container">
          <h2 class="section__title font-medium">Events at {{ page.title }}</h2>
        </div>
      </div>
    </section>

    <section id="map" class="section section--padding">
      <div class="inner">
        <div class="flex-container">
          <h2 class="section__title font-medium">How to get to {{ page.title }}</h2>
        </div>
        <AppMap />
      </div>
    </section>

    <AppSection class="section--shade" title="Popular Cafes" url="/cafes/">
      <Splide :options="cafeSliderOptions">
        <SplideSlide v-for="cafe, key in cafes" :key="key">
          <AppCafeListing :cafe="cafe" view="grid" />
        </SplideSlide>
      </Splide>
    </AppSection>
  </main>
</template>

<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  import '@splidejs/vue-splide/css'
</script>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const cafes = await queryContent('cafes').where({ type: { $eq: 'cafe' } }).limit(6).find()

  const options = {
    rewind: false,
    gap: '1rem',
    perMove: 1,
    perPage: 1
  }

  const cafeSliderOptions = {
    rewind: false,
    gap: '2rem',
    perMove: 3,
    perPage: 3
  }
</script>

<style scoped lang="scss">
  .masthead {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23915c4c' fill-opacity='0.14' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
    padding: 3rem 0;
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
  .masthead__content {
    flex: 1 0;
  }
  .masthead__breadcrumbs {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .masthead__breadcrumb-item a {
    padding-right: 0.5rem;
  }
  .masthead__title {
    margin-top: 1.5rem;
  }
  .masthead__location {
    margin-top: 1rem;
  }
  .masthead__tagline {
    font-weight: $bold-weight;
    margin-top: 1.5rem;
  }
  .masthead__action {
    margin-top: 2rem;

    .button:not(:first-child) {
      margin-left: 1rem;
    }
  }

  .masthead__gallery {
    border-radius: $border-radius;
    flex: 1 0;
    overflow: hidden;
  }
  .masthead__gallery-image {
    border-radius: $border-radius;
    width: 100%;
    height: 100%;
    max-height: 400px;
    object-fit: cover;
  }
</style>