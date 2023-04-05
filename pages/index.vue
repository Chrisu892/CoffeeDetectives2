
<template>
  <main id="main">
    <HomeHero :title="page.title" :tagline="page.tagline" />
    <HomeIntro />

    <AppSection class="section--shade" title="Amenities" url="/amenities/">
      <div class="flex-container flex-container--gutter">
        <AppAmenityListing v-for="amenity, key in amenities" :key="key" :amenity="amenity" />
      </div>
    </AppSection>

    <HomeFeaturedLocations :locations="locations" />

    <AppFeaturedCafes :cafes="cafes" />
    <AppFeaturedBlog :articles="articles" />
    <AppSocialMedia />
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const amenities = await queryContent('amenities').where({ title: { $ne: 'Amenities' } }).find()
</script>

<script lang="ts">
  export default {
    data() {
      return {
        locations: [
          { title: 'Newcastle upon Tyne', url: '/locations/newcastle-upon-tyne/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Gateshead', url: '/locations/gateshead', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Sunderland', url: '/locations/sunderland/', images: { thumbnail: '/images/locations/fallback.jpeg'} },
          { title: 'Tynemouth', url: '/locations/tynemouth/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Jesmond', url: '/locations/jesmond/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'South Shields', url: '/locations/south-shields/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Whitley Bay', url: '/locations/whitley-bay/', images: { thumbnail: '/images/locations/whitley-bay-promenade-in-england-north-east.jpeg' } },
          { title: 'North Shields', url: '/locations/north-shields/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Gosforth', url: '/locations/gosforth/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Newburn', url: '/locations/newburn/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Longbenton', url: '/locations/seaton-valley/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
          { title: 'Ponteland', url: '/locations/ponteland/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
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
          { title: 'Whitburn', url: '/locations/whitburn/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
        ],
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
        articles: [
          { title: 'Newcastle City Centre Transformation To Bring Four New Cafes', tagline: 'The ongoing transformation of the Newcastle\'s City Centre will bring new businesses to the heart of the city, including four new coffee shops.', url: '/blog/newcastle-city-centre-transformation-to-bring-4-new-coffee-shops', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Bread-making Workshops Available at Toast Cafe in Tynemouth', tagline: 'Looking for something different next month? Toast is running a monthly, 3 hour workshop to teach you how to bake your own sourdough bread at home.', url: '/blog/bread-making-workshops-available-at-toast-in-tynemouth', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Price Increases at the Backyard Bike Shop Complemented by Brand New Coffee Flavours', tagline: 'With the rising cost of living, independent coffee shops like the Backyard Bike Shop look for ways to compensate the price increases with brand new coffee flavours.', url: '/blog/price-increases-at-backyard-bike-shop-complemented-by-brand-new-coffee-flavours/', images: { thumbnail: '/images/blog/fallback.jpeg'} }
        ]
      }
    }
  }
</script>