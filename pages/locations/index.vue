<template>
  <AppMasthead title="Locations" tagline="Find the best coffee experience in your area" />
  <section class="section">
    <div class="inner">
      <div class="flex-container flex-container--gutter">
        <AppLocation v-for="(destination, key) in destinations" :key="key" :destination="destination" />
        <AppGetListed title="" text="" action="" />
      </div>
    </div>
  </section>
  <section class="section section--shade">
    <div class="inner">
      <div class="page-content">
        <p>What we need for this page:</p>
        <ul>
          <li>Maybe show a today's featured destination instead of masthead? Or aside?</li>
          <li>A grid of destinations with thumbnail images showing the coffee shop front or interior.</li>
          <li>A box that encourages coffee shop owners to get listed (future addition).</li>
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
        destinations: [
          { title: 'Newcastle upon Tyne', url: '/locations/newcastle-upon-tyne/' },
          { title: 'Gateshead', url: '/locations/gateshead' },
          { title: 'Sunderland', url: '/locations/sunderland/' },
          { title: 'Tynemouth', url: '/locations/tynemouth/' },
          { title: 'South Shields', url: '/locations/south-shields' },
          { title: 'Gosforth', url: '/locations/gosforth/' },
          { title: 'Newburn', url: '/locations/newburn/' },
          { title: 'Longbenton', url: '/locations/seaton-valley/' },
          { title: 'Boldon', url: '/locations/boldon/' },
          { title: 'Hebburn', url: '/locations/hebburn/' },
          { title: 'Felling', url: '/locations/felling/' },
          { title: 'Whickham', url: '/locations/whickham/' },
          { title: 'Blydon', url: '/locations/blydon/' },
          { title: 'Ryton', url: '/locations/ryton/' },
          { title: 'Washington', url: '/locations/washington/' },
          { title: 'Haughton-le-Spring', url: '/locations/haughton-le-spring/' },
          { title: 'Hetton', url: '/locations/hetton/' },
          { title: 'Castle Ward', url: '/locations/castle-ward' },
          { title: 'Chester-le-Street', url: '/locations/chester-le-street' },
          { title: 'Easington', url: '/locations/easington/' }
        ]
      }
    }
  }
</script>