<template>
  <section class="newsletter">
    <div class="inner inner--narrow">
      <div class="newsletter__container">
        <div class="newsletter__content">
          <div class="newsletter__content__icon">
            <PhNewspaper />
          </div>
          <div class="newsletter__content__text">
            <h3 class="newsletter__title font-medium font-cursive">Sign up to our Newsletter</h3>
            <p class="newsletter__tagline font-regular">And stay up-to-date with news and updates from Tyne & Wear</p>
          </div>
        </div>
        <form class="newsletter__action">
          <FormIntegratedField type="email" placeholder="Type your email address..." />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import { PhNewspaper } from 'phosphor-vue'

  export default {
    components: {
      PhNewspaper
    }
  }
</script>

<style scoped lang="scss">
  .newsletter {
    background: url('/images/coffee-beans.jpeg') center center/cover no-repeat;
    padding: 1.5rem 0;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $clr-secondary;
      opacity: 0.8;
    }
  }
  .newsletter__container {
    @include flex-row;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .newsletter__content {
    @include flex-row;
    align-items: center;
    color: $clr-white;
    flex: 1;
  }
  .newsletter__content__icon {
    @include flex-row;
    background-color: $clr-primary;
    border-radius: 100%;
    color: $clr-secondary;
    font-size: $font-xl;
    margin-right: 1.5rem;
    padding: 0.75rem;
  }
  .newsletter__title {
    margin: 0;
  }
  .newsletter__tagline {
    margin: 0;
  }
</style>