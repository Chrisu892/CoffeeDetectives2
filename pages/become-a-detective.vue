<template>
  <main id="main" class="main">
    <AppMasthead title="Become a Dedective" tagline="Let's build a network of cafes in Tyne and Wear together" />

    <section class="section section--padding">
      <div class="inner">
        <div class="feature">
          <h2 class="feature__title font-large">Why to become a coffee detective?</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()

  useContentHead(page)
</script>