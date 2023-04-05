<template>
  <section class="section section--padding">
    <div class="inner">
      <div class="section__title">
        <div class="section__container">
          <h2 class="section__title font-medium">{{ title }}</h2>
          <div v-if="url" class="section__action">
            <NuxtLink to="/amenities/">View All</NuxtLink>
          </div>
        </div>
      </div>
      <div class="section__content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        default: null
      }
    }
  }
</script>