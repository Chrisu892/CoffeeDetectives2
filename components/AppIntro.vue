<template>
  <section class="section">
    <div class="inner">
      <div class="flex-container flex-container--gutter">
        <div class="section__main">
          <div class="feature">
            <h2 class="feature__title">Creating Long-Lasting Impressions</h2>
            <div class="feature__text">
              <p>
                My mission is to provide a high quality, affordable, and ethical web and data analytics to individuals and small-to-medium businesses. I have <NuxtLink to="/portfolio/">proven record</NuxtLink> of helping clients to create their own digital identity and accelerate their growth with beautifully crafted digital products that are user-friendly and optimised for search engines.
              </p>
            </div>
            <div class="feature__action">
              <AppButton to="/about/" title="About Me" />
            </div>
          </div>
        </div>
        <div class="section__aside">
          <div class="page-image">
            <picture>
              <img class="page-image__source" src="/images/sketchbook.jpg" alt="Image of sketchbook, pencils and eraser" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    overflow: hidden;
    padding: 0;
  }
  .section__aside {
    align-items: flex-end;
    display: flex;
    flex: 380px 0;
    position: relative;
  }
  .section__main {
    flex: 1 0;
    padding: 6rem 0;
  }

  .page-image {
    position: absolute;
    right: -30%;
    bottom: 0;
    padding-top: 100%;
    width: 100%;
    border-radius: 100%;
    overflow: hidden;
    transform: scale(1.6);
  }
  .page-image__source {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1) rotate(-10deg);
    filter: grayscale(1);
  }
</style>