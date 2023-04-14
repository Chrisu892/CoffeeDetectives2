<script>
  export default {
    props: {
      title: {
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
      <h2 v-if="title" class="feature__title font-large">{{ title }}</h2>
      <div v-if="url" class="feature__action">
        <NuxtLink class="feature__link" :to="url" :title="`View all ${title}`">View All</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .feature {
    margin-bottom: 1.5rem;
  }
  .feature__container {
    @include flex-row;
    align-items: center;
  }
  .feature__title {
    flex: 1 0;
    margin: 0;
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