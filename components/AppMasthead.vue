<script>
  export default {
    props: {
      title: { 
        type: String, 
        required: true 
      },
      tagline: { 
        type: String, 
        required: true 
      }
    }
  }
</script>

<template>
  <section id="masthead" class="masthead">
    <div class="inner">
      <div class="masthead__container">
        <div class="masthead__col masthead__content">
          <h1 class="masthead__title font-xl">{{ title }}</h1>
          <p class="masthead__tagline font-medium">{{ tagline }}</p>
        </div>
        <div class="masthead__col masthead__header">
          <img class="masthead__header-image" src="/images/about-us.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .masthead {
    @include subtle-formal-invitation-pattern;
    overflow: hidden;
  }
  .masthead__container {
    @include flex-row;
  }
  .masthead__col {
    flex: 1 0;
  }
  .masthead__content {
    padding: 7rem 0;
  }
  .masthead__tagline {
    margin: 0;
  }
  .masthead__header {
    position: relative;
  }
  .masthead__header-image {
    position: absolute;
    top: 1rem;
    right: 0;
    width: 60%;
    height: auto;
  }
</style>