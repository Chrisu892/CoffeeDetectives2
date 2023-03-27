<template>
  <AppMasthead title="Blog" tagline="Periodical news and updates about what we do, with ocassional tips on where to find a good coffee" />
  
  <section class="section section--padding">
    <div class="inner">
      <div class="flex-container flex-container--gutter">
        <AppArticleListing v-for="(article, key) in articles" :key="key" :article="article" />
      </div>
    </div>
  </section>

  <section v-if="false" class="section section--shade">
    <div class="inner">
      <div class="page-content">
        <p>What we need for this page:</p>
        <ul>
          <li>A grid of latest news and updates.</li>
          <li>A call to action strip.</li>
          <li>A newsletter signup strip (future addition).</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        articles: [
          { title: 'Newcastle City Centre Transformation To Bring Four New Cafes', tagline: 'The ongoing transformation of the Newcastle\'s City Centre will bring new businesses to the heart of the city, including four new coffee shops.', url: '/blog/newcastle-city-centre-transformation-to-bring-4-new-coffee-shops', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Bread-making Workshops Available at Toast Cafe in Tynemouth', tagline: 'Looking for something different next month? Toast is running a monthly, 3 hour workshop to teach you how to bake your own sourdough bread at home.', url: '/blog/bread-making-workshops-available-at-toast-in-tynemouth', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Price Increases at the Backyard Bike Shop Complemented by Brand New Coffee Flavours', tagline: 'With the rising cost of living, independent coffee shops like the Backyard Bike Shop look for ways to compensate the price increases with brand new coffee flavours.', url: '/blog/price-increases-at-backyard-bike-shop-complemented-by-brand-new-coffee-flavours/', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Opening of a Cafe in Tynemouth is a Great Success', tagline: 'A new place to enjoy fresh coffee and pastries is now open in Tynemouth. Located conviniently on Front Street, Toast enjoys positive reviews on Google.', url: '/blog/opening-of-a-new-coffee-shop-in-tynemouth-is-a-great-success', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Views of the Millenium Bridge and the Tyne River from the Hootch Cafe', tagline: 'The Hootch is a great place to visit if you are looking for amazing views of the Millenium Bridge, especially when the bridge is lit up in the evening.', url: '/blog/views-of-the-millenium-bridge-and-the-tyne-river-from-the-hootch-cafe', images: { thumbnail: '/images/blog/fallback.jpeg'} },
          { title: 'Our Thoughts About Cat and Dog Cafes in Newcastle upon Tyne', tagline: 'Ever wondered how it feels to have a cup of coffee with a furry animal right beside you? We\'ve reviewed six cafes in Newcastle upon Tyne. Here are our thoughts.', url: '/blog/our-thoughts-about-cat-and-dog-cafes-in-newcastle-upon-tyne', images: { thumbnail: '/images/blog/fallback.jpeg'} },
        ]
      }
    }
  }
</script>