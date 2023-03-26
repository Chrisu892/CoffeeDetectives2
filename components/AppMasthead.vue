<template>
  <section id="masthead" class="masthead">
    <div class="masthead__overlay">
      <div class="inner">
        <div class="masthead__content">
          <h1 class="masthead__title font-large">{{ title }}</h1>
          <p class="masthead__tagline font-regular">{{ tagline }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: true },
      tagline: { type: String, required: true }
    }
  }
</script>

<style scoped lang="scss">
  .masthead {
    background: url('/images/newcastle-gateshead.jpeg') center center/cover no-repeat;
  }
  .masthead__overlay {
    background-color: $clr-secondary-transparent-75;
    padding: 6rem 0;
  }
  .masthead--homepage .masthead__overlay {
    padding: 6.5rem 0 9rem;
  }
  .masthead__content {
    color: $clr-white;
    margin: 0 auto;
    max-width: 1024px;
    text-align: center;
  }
  .masthead__tagline {
    margin-top: 0.75rem;
  }
</style>