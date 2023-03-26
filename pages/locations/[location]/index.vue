<template>
  <main id="main">
    <AppMasthead title="Cafes in Tyne and Wear" tagline="Find a cafe that suit you" />

    <div class="section">
      <div class="inner">
        <AppListings :filters="filters" :listings="listings" />
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        filters: [{
          title: 'Price Range',
          type: 'range',
          range: {
            min: 1,
            max: 5
          }
        }, {
          title: 'Opening Times',
          type: 'range',
          range: {
            min: 8,
            max: 20
          }
        }, {
          title: 'Coffee Blends',
          type: 'multiselect',
          options: [
            { title: 'Arabica' },
            { title: 'Robusta' },
            { title: 'Espresso' },
            { title: 'Mocha' },
            { title: 'Colombian' },
            { title: 'Ethiopian' },
            { title: 'Speciality' }
          ]
        }, {
          title: 'Food Served',
          type: 'multiselect',
          options: [
            { title: 'Sandwiches' },
            { title: 'Salads'},
            { title: 'Pastries' },
            { title: 'Baked Goods' },
            { title: 'Pancakes' },
            { title: 'Waffles' },
            { title: 'Omelets' },
          ]
        }, {
          title: 'Cuisine Served',
          type: 'multiselect',
          options: [
            { title: 'French' },
            { title: 'Italian' },
            { title: 'Middle Eastern' }
          ]
        }, {
          title: 'Amenities',
          type: 'multiselect',
          options: [
            { title: 'Free Wi-Fi' },
            { title: 'Outdoor Seating' },
            { title: 'Power Outlets' },
            { title: 'Restrooms' },
            { title: 'Books and Magazines' },
            { title: 'Live Music' },
            { title: 'Loyalty programs' },
            { title: 'Catering' }
          ]
        }],
        listings: [{ 
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
        }, {
          title: 'Backyard Bike Shop',
          url: '/cafes/backyard-bike-shop/',
          abstract: 'A hidden gem of Gateshead, the cafe is right under the Tyne Bridge, right next to the Tyne River, offers a selection of single origin coffee sourced from Pink Lane Coffee Company, and delightful selection of snacks.',
          rating: 4.89,
          amenities: [
            { title: 'Unique Decor', unique: true },
            { title: 'Unique View', unique: true },
            { title: 'Speciality Coffee', unique: true }
          ],
          address: 'Gateshead Quayside, Gateshead, NE10 0DU',
          images: {
            thumbnail: '/images/cafes/fallback.jpeg'
          }
        }, { 
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
        }, { 
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
        }, { 
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
        }, { 
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
        }, { 
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
        }, { 
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
        }, { 
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
        }]
      }
    }
  }
</script>