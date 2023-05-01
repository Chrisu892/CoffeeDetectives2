<template>
  <main id="main" class="main">
    <AppMasthead :title="title" :tagline="tagline" />
    
    <section class="section">
      <div class="inner">
        <div class="page-content">
          <p>What we need for this page:</p>
          <ul>
            <li>A grid or list of reviews.</li>
            <li>Maybe a simple text search to filter the reviews.</li>
            <li>A box that encourages people to write reviews (future addition).</li>
            <li>A call to action strip.</li>
            <li>A newsletter signup strip (future addition).</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    computed: {
      title() {
        return this.$route.params.slugs[0]
      },
      tagline() {
        return this.$route.fullPath
      }
    }
  }
</script>