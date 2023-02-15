<template>
  <section class="hero">
    <picture>
      <img class="hero__background" src="/images/millenium-bridge.jpg" alt="" />
    </picture>
    <div class="hero__overlay">
      <div class="inner">
        <div class="hero__content">
          <div class="hero__caption font-small">Sky is not the limit</div>
          <h1 class="hero__title font-xxl">Hello, my name is Chris</h1>
          <p class="hero__tagline font-medium">I'm a web designer, web developer, and data scientist. I use insights from data to creatively solve problems.</p>
          <div class="hero__actions">
            <AppButton to="/projects/" title="My Work" class="button--solid" />
            <AppButton to="/contact/" title="Get in Touch" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .hero {
    background-color: $clr-primary;
    overflow: hidden;
    position: relative;
  }
  .hero__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .hero__overlay {
    background-color: rgba($clr-primary, 0.8);
    padding: 200px 0;
    padding-top: 291px;
    position: relative;
    z-index: 2;
  }
  .hero__content {
    color: $clr-white;
    max-width: 1024px;
  }
  .hero__caption {
    opacity: 0.3;
    text-transform: uppercase;
  }
  .hero__title {
    margin-top: 2rem;
  }
  .hero__tagline {
    margin-top: 1rem;
  }
  .hero__actions {
    margin-top: 2rem;
  }
  .hero__actions .button:last-child {
    margin-left: 1.5rem;
  }
</style>