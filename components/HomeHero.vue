<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Tyne & Wear Coffee Finder and Reviews'
      },
      tagline: {
        type: String,
        default: 'Find a cafe for your relaxing coffee break, study session or place to catch up'
      },
      locations: {
        type: Array,
        required: true
      },
      amenities: {
        type: Array,
        required: true
      }
    }
  }
</script>

<template>
  <section class="hero">
    <slot />
    <div class="hero__overlay">
      <div class="inner">
        <div class="hero__content">
          <h1 class="hero__title font-regular">{{ title }}</h1>
          <p class="hero__tagline font-xxl">{{ tagline }}</p>
        </div>
        <AppSearch :locations="locations" :amenities="amenities" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .hero {
    position: relative;
  }
  .hero__overlay {
    position: absolute;
    left: 0;
    bottom: 5rem;
    right: 0;
  }
  .hero__content {
    color: $clr-white;
    margin-bottom: 5rem;
    max-width: 768px;
    text-shadow: 0 0 10px rgba($clr-dark, 0.2);
  }
  .hero__title {
    opacity: 0.75;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  .hero__tagline {
    font-weight: bold;
    line-height: 1.2;
  }
</style>