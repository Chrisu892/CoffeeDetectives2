<template>
  <main id="main" class="main">
    <AppPlainMasthead :title="page.title" />

    <div class="section">
      <div class="inner">
        <AppListings :filters="filters" :listings="cafes" />
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
        }]
      }
    }
  }
</script>

<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  const cafes = await queryContent('cafes').where({ type: { $eq: 'cafe' } }).limit(12).find()
</script>