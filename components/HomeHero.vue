<template>
  <section class="hero">
      <div class="inner">
        <div class="hero__content">
          <h1 class="hero__title font-regular">{{ caption }}</h1>
          <p class="hero__tagline font-xl">{{ title }}</p>
        </div>
        <div class="hero__search">
          <AppSearch title="Browse over [x] cafes in Tyne & Wear" />
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    props: {
      caption: {
        type: String,
        default: 'Tyne & Wear Coffee Finder and Reviews'
      },
      title: {
        type: String,
        default: 'Find a cafe for your relaxing coffee break, study session or place to catch up'
      }
    }
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
    opacity: 0.725;
  }
  .hero__tagline {
    margin-top: 1.25rem;
  }
  .hero__actions {
    margin-top: 2.25rem;
  }
</style>