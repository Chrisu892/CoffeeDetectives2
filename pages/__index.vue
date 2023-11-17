<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>

<template>
  <main id="main" class="main">

    <div class="video">
      <video class="video__source" preload="true" muted autoplay loop playisinline>
        <source src="/video/107566729.mp4" type="video/mp4" />
      </video>

      <section class="hero">
        <div class="hero__overlay">
          <div class="inner">
            <div class="hero__content">
              <h1 class="hero__title">Uncover Hidden Coffee Gems in Your City</h1>
              <p class="hero__tagline">Navigate the urban coffee scene like never before. Find, rate, and share your favourite local cafe discoveries with fellow aficionados.</p>
              <div class="hero__actions">
                <AppButton to="#intro" title="Our Mission" class="button--outlined" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <AppSection>
      <AppFeature title="Our Mission" />
    </AppSection>
  </main>
</template>

<style scoped lang="scss">
  .video {
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .video__source {
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 2;
  }
  .hero {
    position: relative;
    z-index: 3;
  }
  .hero__overlay {
    align-items: center;
    background: linear-gradient(180deg, rgba($clr-primary,0.5) 50%, rgba($clr-primary, 1) 100%);
    display: flex;
    height: 100vh;
    position: relative;
    z-index: 3;
  }
  .hero__content {
    color: #fff;
    margin: 0 auto;
    max-width: 1024px;
    padding-top: $gutter;
    text-align: center;
  }
  .hero__title {
    @include font-regular;
    font: $font-body;
  }
  .hero__tagline {
    font: $font-header;
    @include font-xxxl;
    margin: 1.25rem 0 0;
  }
  .hero__actions {
    margin-top: 1.75rem;
  }
</style>