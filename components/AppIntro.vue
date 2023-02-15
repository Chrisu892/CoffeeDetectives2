<template>
  <section class="section">
    <div class="inner">
      <div class="flex-container flex-container--gutter">
        <div class="section__main">
          <div class="feature">
            <h2 class="feature__title">Creating Long-Lasting Impressions</h2>
            <div class="feature__text">
              <p>
                My mission is to provide a high quality, affordable, and ethical web and data analytics to individuals and small-to-medium businesses. I have <NuxtLink to="/portfolio/">proven record</NuxtLink> of helping clients to create their own online footprint and accelerate their growth with beautifully crafted digital products that are user-friendly and optimised for search engines.
              </p>
            </div>
            <div class="signature">
              <img class="signature__image" src="/images/signature.png" alt="" />
              <div class="signature__text">Chris Prusakiewicz</div>
            </div>
          </div>
        </div>
        <div class="section__aside">
          <picture>
            <img class="page-image page-image--flipped" src="/images/me-cutout.png" alt="Me - cutout" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: 0;
  }
  .section__aside {
    align-items: flex-end;
    display: flex;
    flex: 380px 0;
  }
  .section__main {
    flex: 1 0;
    padding: 6rem 0;
  }

  .page-image {
    filter: grayscale(1);
    margin: 0 auto;
  }

  .signature {
    margin-top: 2rem;
  }
  .signature__image {
    max-width: 200px;
  }
  .signature__text {
    margin-top: 0.75rem;
  }
</style>