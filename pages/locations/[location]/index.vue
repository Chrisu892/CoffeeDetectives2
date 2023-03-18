<template>
  <main id="main">
    <section class="masthead">
      <picture>
        <img class="masthead__background" src="/images/newcastle-gateshead.jpeg" alt="Image of Newcastle and Gatehsead Quayside" />
      </picture>
      <div class="masthead__overlay">
        <div class="inner">
          <div class="flex-container">
            <div class="masthead__content">
              <h1 class="masthead__title font-xl">Location</h1>
              <p class="masthead__tagline font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci iure officia obcaecati recusandae doloremque sint molestiae aperiam ea quisquam ducimus.</p>
              <div class="masthead__actions">
                <AppButton to="#explore" title="Find a Cafe" />
              </div>
            </div>
            <div class="masthead__aside">
              <!-- <LocationFeaturedCafe /> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="explore">
      <div class="inner">
        <div class="flex-container flex-container--gutter">
          <div class="filters">
            <LocationFilters />
          </div>
          <div class="listings">
            <div class="listings__actions">
              <LocationListToggle @click="toggle('list')" />
              <LocationGridToggle @click="toggle('grid')" />
              <LocationMapToggle @click="toggle('map')" />
            </div>
            <div class="flex-container flex-container--gutter">
              <AppCafeListing v-if="view == 'list' || view == 'grid'" v-for="(cafe, key) in cafes" :key="key" :cafe="cafe" :view="view" />
              <LocationMapView v-if="view == 'map'" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--shade">
      <div class="inner">
        <div class="feature">
          <h2 class="feature__title font-large">About</h2>
          <p class="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia consequatur hic consectetur enim incidunt vitae officia aliquam fugiat illum doloremque ea quos itaque natus, alias facere quae nobis expedita accusantium cumque voluptatibus dolore? Aspernatur, voluptatem tempora quod eum iste cumque porro similique vel. Architecto inventore quibusdam nobis expedita reprehenderit? Praesentium magni fugiat excepturi esse dolores beatae incidunt tempora aliquam provident itaque libero obcaecati consectetur minima, explicabo dicta impedit eligendi illum ex! Minima eaque ab, cum facere pariatur laboriosam, veritatis doloremque sed porro voluptates a ratione, aperiam nisi? Ex tempora ipsa officiis accusantium voluptatem voluptate, sed inventore nostrum recusandae sapiente!</p>
        </div>
      </div>
    </section>
  </main>
</template>

<!-- <script setup>
  const route = useRoute()
</script> -->

<script>
  export default {
    data() {
      return {
        view: 'list',
        cafes: [
          { title: 'Flat Caps Cafe', url: '/reviews/flat-caps-cafe/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Cafe Nero', url: '/reviews/cafe-nero-eldon-sq/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Waterstones Cafe', url: '/reviews/waterstones-newcastle/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Luther\'s NSU Bar', url: '/reviews/luthers-newcastle-university/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Habita NUSU Bar', url: '/reviews/habita-northumbria-university/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Vicolo', url: '/reviews/vicolo-tyneside-cinema/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'The Hooch', url: '/reviews/the-hooch/', images: { thumbnail: '/images/cafes/fallback.jpeg' } }
        ]
      }
    },
    methods: {
      toggle(view) {
        this.view = view
      }
    }
  }
</script>

<style scoped lang="scss">
  .masthead {
    overflow: hidden;
    position: relative;
  }
  .masthead__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .masthead__overlay {
    background-color: $clr-secondary-transparent-75;
    position: relative;
    z-index: 1;
  }
  .masthead__content {
    color: $clr-white;
    flex: 60% 0;
    padding: 6rem 0;
    padding-top: calc(6rem + 80px);
  }
  .masthead__tagline {
    margin-top: 1.5rem;
  }
  .masthead__actions {
    margin-top: 1.5rem;
  }
  .masthead__aside {
    align-items: center;
    display: inline-flex;
    flex: 1 0;
    justify-content: flex-end;
    padding-top: 80px;
  }

  .filters {
    flex: 240px 0;
  }

  .listings {
    flex: 1 0;
    align-items: flex-start;
  }
  .listings__actions {
    background-color: $clr-shade-lighten-10;
    border-radius: $border-radius;
    padding: 0.2rem;
    display: flex;
    gap: 0.2rem;
    flex: 100% 0;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
</style>