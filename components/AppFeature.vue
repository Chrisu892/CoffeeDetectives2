<script>
  export default {
    props: {
      title: {
        type: String,
        default: null
      },
      tagline: {
        type: String,
        default: null
      },
      url: {
        type: String,
        default: null
      }
    }
  }
</script>

<template>
  <div v-if="title" class="feature">
    <div class="feature__container">
      <div class="feature__content">
        <h2 v-if="title" class="feature__title font-large">{{ title }}</h2>
        <p v-if="tagline" class="feature__tagline font-medium">{{ tagline }}</p>
      </div>
      <div v-if="url" class="feature__action">
        <NuxtLink class="feature__link" :to="url" :title="`View all ${title}`">View All</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .feature {
    margin-bottom: 1.5rem;

    &.center {
      text-align: center
    }
  }
  .feature__container {
    @include flex-row;
    align-items: center;
  }
  .feature__content {
    flex: 1 0;
  }
  .feature__title {
    margin: 0;
  }
  .feature__tagline {
    margin: 1em auto 0;
    max-width: 1024px;
  }
  .feature__action {
    text-align: right;
  }
  .feature__link {
    display: inline-block;
    font-weight: $bold-weight;
    margin-top: 0.75rem;
    text-decoration: underline dashed $clr-secondary 2px;
    text-decoration-color: rgba($clr-secondary, 0.3);
    text-underline-offset: 7px;

    &:hover {
      text-decoration: underline dashed $clr-secondary 2px;
    }
  }
</style>