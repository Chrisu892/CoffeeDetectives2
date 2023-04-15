<template>
  <section class="cta">
    <div class="inner">
      <AppFeature 
        title="Join the Community of Coffee Lovers" 
        tagline="Together we can make it easier to find a perfect cafe, connect with other coffee lovers and support local businesses that make sure there is always enough coffee to keep us going." 
        class="center"
      />
      
      <div class="cta__container">
        <div class="cta__col">
          <article class="cta__card">
            <div class="cta__card__thumbnail">
              <div class="cta__card__thumbnail-image"></div>
            </div>
            <div class="cta__card__content">
              <h3 class="cta__card__title">Become a coffee detective</h3>
              <p class="cta__card__text">Get access to all the tools and guidance on to how become a coffee detective. Start writing reviews, blog articles and build your audience.</p>
              <AppButton to="/become-a-detective/" title="Become a Detective" class="animate" />
            </div>
          </article>
        </div>
        <div class="cta__col">
          <article class="cta__card">
            <div class="cta__card__thumbnail">
              <div class="cta__card__thumbnail-image"></div>
            </div>
            <div class="cta__card__content">
              <h3 class="cta__card__title">Get your cafe listed</h3>
              <p class="cta__card__text">Register your cafe with us to start building your audience, track the cafe listing performance, and promote your business.</p>
              <AppButton to="/get-listed/" title="Get Listed" class="animate" />
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .cta {
    background-color: $clr-shade;
    padding: 4rem 0;
  }
  .cta__container {
    @include flex-row;
    gap: 2rem;
    margin-top: 4rem;
  }
  .cta__col {
    flex: 1 0;
  }
  .cta__card {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border-radius: $border-radius;
    gap: 3rem;
    padding: 3rem 2rem;
    position: relative;
  }
  .cta__card__thumbnail {
    flex: 30% 0;
    position: relative;

    &::before {
      @include subtle-formal-invitation-pattern;
      content: '';
      position: absolute;
      top: -15%;
      right: -40%;
      width: 80%;
      padding-top: 80%;
      border-radius: 100%;
    }
  }
  .cta__card__thumbnail-image {
    background-color: $clr-shade;
    border: solid 0.75rem $clr-white;
    border-radius: 100%;
    box-shadow: 0 0 10px 0 $clr-shade;
    padding-top: 100%;
    padding-top: calc(100% - 1.5rem);
    position: relative;
    z-index: 1;
  }
  .cta__card__content {
    flex: 1 0;
    position: relative;
    z-index: 1;
  }
</style>