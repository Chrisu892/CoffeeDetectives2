<template>
  <main id="main">
    <AppPlainMasthead :title="page.title" />

    <AppSection v-for="amenity, key in amenities" :key="key" :class="key % 2 != 0 ? 'section--shade' : ''" :title="amenity.altTitle" :url="amenity.url">
      <div class="flex-container flex-container--gutter">

      </div>
    </AppSection>
  </main>
</template>

<script lang="ts">
  export default {
    data() {
      return {
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
    }
  }
</script>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const amenities = await queryContent('amenities').where({ title: { $ne: 'Amenities' } }).find()
</script>

<style scoped lang="scss">
  .listings {
    display: flex;
    flex-flow: row wrap;
  }
</style>