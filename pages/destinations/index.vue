<template>
  <AppMasthead title="Destinations" tagline="Find the best coffee experience in your area" />
  <section class="section">
    <div class="inner">
      <div class="flex-container flex-container--gutter">
        <AppDestination v-for="(destination, key) in destinations" :key="key" :destination="destination" />
      </div>
    </div>
  </section>
  <section class="section">
    <div class="inner">
      <div class="page-content">
        <p>What we need for this page:</p>
        <ul>
          <li>Maybe show a today's featured destination instead of masthead? Or aside?</li>
          <li>A grid of destinations with thumbnail images showing the coffee shop front or interior.</li>
          <li>Maybe a simple text search to filter the reviews.</li>
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
          { title: 'Newcastle upon Tyne', url: '/destinations/newcastle-upon-tyne/' },
          { title: 'Gateshead', url: '/destinations/gateshead' },
          { title: 'Sunderland', url: '/destinations/sunderland/' },
          { title: 'Tynemouth', url: '/destinations/tynemouth/' },
          { title: 'South Shields', url: '/destinations/south-shields' },
          { title: 'Gosforth', url: '/destinations/gosforth/' },
          { title: 'Newburn', url: '/destinations/newburn/' },
          { title: 'Longbenton', url: '/destinations/seaton-valley/' },
          { title: 'Boldon', url: '/destinations/boldon/' },
          { title: 'Hebburn', url: '/destinations/hebburn/' },
          { title: 'Felling', url: '/destinations/felling/' },
          { title: 'Whickham', url: '/destinations/whickham/' },
          { title: 'Blydon', url: '/destinations/blydon/' },
          { title: 'Ryton', url: '/destinations/ryton/' },
          { title: 'Washington', url: '/destinations/washington/' },
          { title: 'Haughton-le-Spring', url: '/destinations/haughton-le-spring/' },
          { title: 'Hetton', url: '/destinations/hetton/' },
          { title: 'Castle Ward', url: '/destinations/castle-ward' },
          { title: 'Chester-le-Street', url: '/destinations/chester-le-street' },
          { title: 'Easington', url: '/destinations/easington/' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
</style>