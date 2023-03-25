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
              <h1 class="masthead__title font-xl">Cafes in [location]</h1>
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
          <h2 class="feature__title font-large">About [Location Name]</h2>
          <p class="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia consequatur hic consectetur enim incidunt vitae officia aliquam fugiat illum doloremque ea quos itaque natus, alias facere quae nobis expedita accusantium cumque voluptatibus dolore? Aspernatur, voluptatem tempora quod eum iste cumque porro similique vel. Architecto inventore quibusdam nobis expedita reprehenderit? Praesentium magni fugiat excepturi esse dolores beatae incidunt tempora aliquam provident itaque libero obcaecati consectetur minima, explicabo dicta impedit eligendi illum ex! Minima eaque ab, cum facere pariatur laboriosam, veritatis doloremque sed porro voluptates a ratione, aperiam nisi? Ex tempora ipsa officiis accusantium voluptatem voluptate, sed inventore nostrum recusandae sapiente!</p>
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
          { 
            title: 'Flat Caps Cafe',
            url: '/cafes/flat-caps-cafe/',
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 4.91, 
            amenities: [
              { title: 'Speciality Coffee', unique: true }, 
              { title: 'Unique Decor', unique: true }, 
              { title: 'Hot Food' }
            ], 
            address: 'Example Street, Newcastle upon Tyne, NE1 2LA', 
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg'
            }
          },
          { 
            title: 'Cafe Nero', 
            url: '/cafes/cafe-nero-eldon-sq/',
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 3.8, 
            amenities: [
              { title: 'Unique Decor', unique: true },
              { title: 'Power Outlets' },
              { title: 'Free Wi-Fi' }
            ], 
            address: 'Northumberland Street, Eldon Square, Newcastle upon Tyne, NE1 2LA',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          },
          { 
            title: 'Waterstones Cafe', 
            url: '/cafes/waterstones-newcastle/', 
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 4.82, 
            amenities: [
              { title: 'Books & Magazines', unique: true },
              { title: 'Unique Decor', unique: true },
              { title: 'Loyality Programs' }
            ],
            address: 'Example Street, Newcastle upon Tyne, NE1 2LA',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          },
          { 
            title: 'Luther\'s NSU Bar', 
            url: '/cafes/luthers-newcastle-university/', 
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 4.44, 
            amenities: [
              { title: 'Free Wi-Fi' },
              { title: 'Outdoor Sitting' }
            ],
            address: 'Newcastle University Student Union, Newcastle upon Tyne, NE1 0DU',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          },
          { 
            title: 'Habita NUSU Bar', 
            url: '/cafes/habita-northumbria-university/', 
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 4.41, 
            amenities: [
              { title: 'Free Wi-Fi' },
              { title: 'Outdoor Sitting' },
              { title: 'Power Outlets' }
            ],
            address: 'Northumbria University Student Union, Ellison Square, Newcastle upon Tyne, NE1 0LA',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          },
          { 
            title: 'Vicolo', 
            url: '/cafes/vicolo-tyneside-cinema/', 
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 4.72, 
            amenities: [
              { title: 'Outdoor Sitting', unique: true },
              { title: 'Books and Magazines' }
            ],
            address: 'Tyneside Cinema, Northumberland Street, Newcastle upon Tyne, NE1 2SA',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          },
          { 
            title: 'The Hooch', 
            url: '/cafes/the-hooch/', 
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 2.82, 
            amenities: [
              { title: 'Unique Decor', unique: true },
              { title: 'Unique View', unique: true },
              { title: 'Outdoor Sitting' }
            ],
            address: 'Newcastle Quaside, Newcastle upon Tyne, NE1 0AB',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          },
          { 
            title: 'The Black Sheep Coffee', 
            url: '/cafes/the-black-sheep-coffee/', 
            abstract: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus exercitationem totam.',
            rating: 4.38, 
            amenities: [
              { title: 'Outdoor Sitting' },
              { title: 'Power Outlets' }
            ],
            address: 'Grainger Street, Newcastle upon Tyne, NE1 0AL',
            images: { 
              thumbnail: '/images/cafes/fallback.jpeg' 
            } 
          }
        ],
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