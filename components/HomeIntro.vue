<script>
  import { PhMapPin, PhStorefront } from 'phosphor-vue'

  export default {
    components: {
      PhMapPin,
      PhStorefront,
    }
  }
</script>

<template>
  <AppSection class="padding-bottom typography">
    <div class="intro">
      <slot name="introSearch" />
      <div class="intro__border">
        <div class="intro__col intro__content">
          <PhStorefront />
          <h2 class="intro__title font-xl">We help to put local independent cafés on the map</h2>
          <p class="intro__tagline font-regular">Discover the best local independent cafes with us. At Coffee Detktives, we're passionate about promoting and supporting independent cafes. Our platform features independent reviews written by coffee hobbyists who explore and try different places, so you can trust that you're getting an authentic perspective. Join us on our mission to celebrate and support local independent cafes!</p>
          <div class="intro__action">
            <AppButton to="/cafes" title="Start Exploring" class="animate" />
          </div>
        </div>
        <div class="intro__col intro__carousel">
          <slot name="carousel" />
          <picture>
            <img class="intro__image" src="/images/green-cup-of-coffee.png" alt="" />
          </picture>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<style scoped lang="scss">
  .intro {
    
  }
  .intro__border {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    box-shadow: 0 0 0 15px rgba($clr-white, 0.5);
    gap: 3rem;
    padding: 3rem;
    margin-top: $gutter;
  }
  .intro__col {
    flex: 1 0;
    position: relative;
  }
  .intro__content {

    svg {
      color: $clr-primary;
      display: inline-block;
      margin-bottom: 1.25rem;
      height: 3rem;
      width: 3rem;
    }
  }
  .intro__tagline {
    margin-top: 1rem;
  }
  .intro__action {
    margin-top: 1.5rem;
  }
  .intro__image {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 40%;
  }
  .intro__carousel {

    &::before {
      @include subtle-formal-invitation-pattern;
      content: '';
      position: absolute;
      top: 10%;
      bottom: 10%;
      left: 0;
      width: 40%;
      padding-top: 25%;
      border-radius: $border-radius;
    }
  }

  /* ---------------------------- *\
      MEDIA QUERIES
  \* ---------------------------- */

  @media (max-width: 1160px) {
    .intro__col {
      flex: 100% 0;
    }

    .intro__carousel {
      display: none;
    }
  }
</style>