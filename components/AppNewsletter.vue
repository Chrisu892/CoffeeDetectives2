<template>
  <section class="newsletter">
    <div class="inner inner--narrow">
      <div class="flex-container flex-container--align-center">
        <div class="flex-container flex-container--align-center newsletter__content">
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
    background-color: $clr-primary;
    padding: 1.5rem 0;
  }
  .newsletter__content {
    color: $clr-white;
    flex: 1;
  }
  .newsletter__content__icon {
    display: flex;
    font-size: $font-xl;
    margin-right: 1.5rem;
  }
</style>