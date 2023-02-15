<template>
  <section class="cta">
    <picture>
      <img class="cta__background" src="/images/millenium-bridge.jpg" alt="" />
    </picture>
    <div class="cta__overlay">
      <div class="inner">
        <h2 class="cta__title">Let's work together</h2>
        <p class="cta__tagline">What sort of clients I want to work with?</p>
        <div class="cta__action">
          <AppButton to="/contact/" title="Get in Touch" class="button--solid" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .cta {
    overflow: hidden;
    position: relative;
  }
  .cta__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .cta__overlay {
    background-color: rgba($clr-primary, 0.8);
    color: $clr-white;
    padding: 20rem 0 10rem;
    position: relative;
    z-index: 2;
  }
  .cta__tagline {
    margin-top: 1rem;
  }
  .cta__action {
    margin-top: 2rem;
  }
</style>