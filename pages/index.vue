
<template>
  <main id="main">
    <AppMasthead title="The Coffee Detectives" tagline="We are independent reviewers of establishments that serve coffee, helping the citizens of Tyne and Wear find a place for a coffee break and help local businesses connect with their customers" />
    <AppSearch title="Find a perfect cafe for your coffee break, study session or cath up in Tyne and Wear" />
    <AppFeaturedAmenities :amenities="amenities" />
    <AppFeaturedLocations :locations="locations" />
    <AppFeaturedCafes :cafes="cafes" />
    <AppFeaturedBlog :articles="articles" />
    <AppAboutStrip />

    <section v-if="false" class="section">
      <div class="inner">
        <div class="page-content">
          <p>What we need for this page:</p>
          <ul>
            <li>Hero should contain search facility to let people find a coffee shop to either read a reviews, write a review.</li>
            <li>The coffee blend and amenities should be a multi-select option.</li>
            <li>A section demonstrating the map to let users know that they can use it.</li>
            <li>A strip with recently reviewed coffee shops.</li>
            <li>A strip with this week's top destinations.</li>
            <li>A strip with recent blog posts.</li>
            <li>A short section pointing to about us page.</li>
            <li>A call to action stip.</li>
            <li>A newsletter signup (in the future).</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        amenities: [
          { title: 'Free Wi-Fi', url: '/amenities/free-wifi/' },
          { title: 'Outdoor Sitting', url: '/amenities/outdoor-sitting/' },
          { title: 'Power Outlets', url: '/amenities/power-outlets/' },
          { title: 'Restrooms', url: '/amenities/restrooms/' },
          { title: 'Books & Magazines', url: '/amenities/books-magazines/' },
          { title: 'Live Music', url: '/amenities/live-music/' },
          { title: 'Loyalty Programs', url: '/amenities/loyalty-programs/' }
        ],
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
          { title: 'Flat Caps Cafe', url: '/cafes/flat-caps-cafe/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Cafe Nero', url: '/cafes/cafe-nero-eldon-sq/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Waterstones Cafe', url: '/cafes/waterstones-newcastle/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Luther\'s NSU Bar', url: '/cafes/luthers-newcastle-university/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Habita NUSU Bar', url: '/cafes/habita-northumbria-university/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'Vicolo', url: '/cafes/vicolo-tyneside-cinema/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'The Hooch', url: '/cafes/the-hooch/', images: { thumbnail: '/images/cafes/fallback.jpeg' } },
          { title: 'The Black Sheep Coffee', url: '/cafes/the-black-sheep-coffee/', images: { thumbnail: '/images/cafes/fallback.jpeg' } }
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