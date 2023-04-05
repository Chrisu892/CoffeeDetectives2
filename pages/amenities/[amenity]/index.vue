<template>
  <main id="main">
    <AppPlainMasthead title="" />

    <div class="section">
      <div class="inner">
        <AppListings :filters="filters" :listings="listings" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        filters: [{
          title: 'Location',
          type: 'multiselect',
          options: [{ 
            title: 'Newcastle upon Tyne', 
            url: '/locations/newcastle-upon-tyne/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Gateshead', 
            url: '/locations/gateshead', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Sunderland', 
            url: '/locations/sunderland/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg'
            } 
          }, { 
            title: 'Tynemouth', 
            url: '/locations/tynemouth/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg'
            } 
          }, { 
            title: 'South Shields', 
            url: '/locations/south-shields/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Whitley Bay', 
            url: '/locations/whitley-bay/', 
            images: { 
              thumbnail: '/images/locations/whitley-bay-promenade-in-england-north-east.jpeg' 
            } 
          }, { 
            title: 'North Shields', 
            url: '/locations/north-shields/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Gosforth', 
            url: '/locations/gosforth/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Newburn', 
            url: '/locations/newburn/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Longbenton', 
            url: '/locations/seaton-valley/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Boldon', 
            url: '/locations/boldon/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Hebburn', 
            url: '/locations/hebburn/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Felling', 
            url: '/locations/felling/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Whickham', 
            url: '/locations/whickham/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Blydon', 
            url: '/locations/blydon/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Ryton', 
            url: '/locations/ryton/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Washington', 
            url: '/locations/washington/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Haughton-le-Spring',
            url: '/locations/haughton-le-spring/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Hetton', 
            url: '/locations/hetton/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Castle Ward', 
            url: '/locations/castle-ward', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Chester-le-Street', 
            url: '/locations/chester-le-street', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }, { 
            title: 'Easington', 
            url: '/locations/easington/', 
            images: { 
              thumbnail: '/images/locations/fallback.jpeg' 
            } 
          }
        ]
        }, {
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
          ],
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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
          openingTimes: [
            { day: 'Monday', from: '9:00', to: '20:00' },
            { day: 'Tuesday', from: '9:00', to: '20:00' },
            { day: 'Wednesday', from: '9:00', to: '20:00' },
            { day: 'Thursday', from: '9:00', to: '20:00' },
            { day: 'Friday', from: '9:00', to: '20:00' },
            { day: 'Saturday', from: '9:00', to: '20:00' },
            { day: 'Sunday', from: '10:00', to: '16:00' }
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

<script setup lang="ts">
  const { page } = useContent()

  useContentHead(page)
</script>