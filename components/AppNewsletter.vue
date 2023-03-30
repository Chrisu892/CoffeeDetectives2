<template>
  <section class="newsletter">
    <div class="inner inner--narrow">
      <div class="newsletter__container">
        <div class="newsletter__content">
          <div class="newsletter__content__icon">
            <PhNewspaper />
          </div>
          <div class="newsletter__content__text">
            <h3 class="newsletter__title font-medium">Sign up to our Newsletter</h3>
            <p class="newsletter__tagline font-regular">And never miss an offer, review, and updates</p>
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
      background-color: $clr-primary;
      opacity: 0.8;
    }
  }
  .newsletter__container {
    display: flex;
    flex-flow: row wrap;
    position: relative;
    z-index: 1;
  }
  .newsletter__content {
    color: $clr-white;
    display: flex;
    align-items: center;
    flex: 1;
  }
  .newsletter__content__icon {
    display: flex;
    font-size: $font-xl;
    margin-right: 1.5rem;
  }
</style>