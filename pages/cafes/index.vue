<template>
  <main id="main">
    <AppMasthead title="Cafes" tagline="Find a cafe in Tyne and Wear" />

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
  </main>
</template>

<script>
  export default {
    data() {
      return {
        view: 'list',
        cafes: [
          { title: 'Flat Caps Cafe', url: '/cafes/flat-caps-cafe/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Cafe Nero', url: '/cafes/cafe-nero-eldon-sq/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Waterstones Cafe', url: '/cafes/waterstones-newcastle/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Luther\'s NSU Bar', url: '/cafes/luthers-newcastle-university/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Habita NUSU Bar', url: '/cafes/habita-northumbria-university/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Vicolo', url: '/cafes/vicolo-tyneside-cinema/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'The Hooch', url: '/cafes/the-hooch/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'The Black Sheep Coffee', url: '/cafes/the-black-sheep-coffee/', images: { thumbnail: '/images/cafes/fallback.jpeg' } }
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