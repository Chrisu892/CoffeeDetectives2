<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>

<template>
  <main id="main" class="main">

    <section class="hero">
      <div class="hero__video">
        <div class="hero__video-frame" data-aos="zoom-out" data-aos-delay="300">
          <video class="hero__video-source" preload="true" muted autoplay loop playsinline>
            <source src="/video/107566729.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="hero__overlay">
        <div class="inner">
          <div class="hero__content">
            <h1 class="hero__title font-xxl">Our mission is to put local independent cafes on the map</h1>
            <p class="hero__tagline font-medium">We want to challenge status quo of monopoly chains.</p>
            <AppButton class="hero__action rev" to="contact" title="Our Mission" />
          </div>
        </div>
      </div>
    </section>

    <AppSection class="padding">
      <AppFeature title="How we do this" tagline="Our mission is simple. We want to help local independent cafes to get discovered by coffee hobbyist like you." class="center margin-bottom" />
      <AppContainer cols="3">
        <AppCard />
        <AppCard />
        <AppCard />
      </AppContainer>
    </AppSection>

  </main>
</template>

<style scoped lang="scss">
  .hero {
    background-color: $clr-secondary;
    color: $clr-white;
    position: relative;
  }
  .hero__video {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .hero__video-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .hero__video-source {
    height: auto;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: auto;
  }
  .hero__overlay {
    position: relative;
    z-index: 1;
  }
  .hero__content {
    margin-right: 50%;
    padding: calc(12vw + 176px) $gutter calc(12vw + 50px) 0;
    width: 50%;
  }
  .hero__title {
    margin: 0;
  }
  .hero__tagline {
    margin: 1.5rem 0 0;
  }
  .hero__action {
    margin-top: 1.5rem;
  }

  @media (max-width: 640px) {
    .hero__video {
      width: 100%;
    }
    .hero__overlay {
      align-items: center;
      display: flex;
      max-height: 820px;
      min-height: 520px;
      height: 100vh;
    }
    .hero__content {
      margin-left: 0;
      padding: 0;
      width: 100%;
    }
  }
</style>