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
      }
    }
  }
</script>

<template>
  <section class="hero">
    <slot name="heroSlider" />
    <div class="hero__overlay">
        <div class="hero__content">
          <h1 class="hero__title font-small">{{ title }}</h1>
          <p class="hero__tagline font-xl">{{ tagline }}</p>
        </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .hero {
    position: relative;
  }
  .hero__overlay {
    align-items: center;
    display: flex;
    left: 0;
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
    justify-content: center;
  }
  .hero__content {
    color: $clr-white;
    margin: 0 1rem;
    text-align: center;
  }
  .hero__title {
    opacity: 0.75;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba($clr-dark, 0.3);
  }
  .hero__tagline {
    font-weight: bold;
    line-height: 1.2;
    text-shadow: 0 0 10px rgba($clr-dark, 0.3);
  }
</style>