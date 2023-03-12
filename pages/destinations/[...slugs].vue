<template>
  <main id="main">
    <AppMap />
    <section class="section">
      <div class="inner">
        <div class="feature feature--margin">
          <h2 class="feature__title">{{ route.params.slugs[0] }}</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  const route = useRoute()
</script>