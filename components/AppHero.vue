<template>
  <section class="hero">
      <div class="inner">
        <div class="hero__content">
          <h1 class="hero__title font-regular">Find a Cafe in Tyne and Wear</h1>
          <p class="hero__tagline font-xl">Search for a perfect coffee break, study session or place to catch up</p>
        </div>
        <div class="hero__search">
          <AppSearch title="Browse over [x] cafes in Tyne & Wear" />
        </div>
      </div>
    </section>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
  .hero {
    background: url('/images/homepage-hero.jpeg') center center/cover no-repeat;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $clr-secondary;
      opacity: 0.9;
    }
  }
  .hero__content {
    color: $clr-white;
    margin: 0 auto;
    max-width: 900px;
    padding: 12rem 0 2rem;
    position: relative;
    text-align: center;
    z-index: 1;
  }
  .hero__title {
    opacity: 0.8;
  }
  .hero__tagline {
    margin-top: 1.25rem;
  }
  .hero__actions {
    margin-top: 2.25rem;
  }
</style>