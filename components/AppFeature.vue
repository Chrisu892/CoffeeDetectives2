<template>
  <div v-if="title" class="feature">
    <div class="feature__container">
      <h2 v-if="title" class="feature__title font-large">{{ title }}</h2>
      <div v-if="url" class="feature__action">
        <NuxtLink :to="url" :title="`View all ${title}`">View All</NuxtLink>
      </div>
    </div>
  </div>
</template>

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
</style>