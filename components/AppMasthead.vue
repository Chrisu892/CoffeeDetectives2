<template>
  <section id="masthead" class="masthead">
    <div class="masthead__overlay">
      <div class="inner">
        <h1 class="masthead__title">{{ title }}</h1>
        <p class="masthead__tagline">{{ tagline }}</p>
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
  .masthead__overlay {
    padding: 10rem 0;
    padding-top: calc(10rem + 80px);
  }
</style>