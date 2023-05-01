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
  <section class="section">
    <div class="inner">
      <AppFeature v-if="title" :title="title" :url="url" />
      <div class="section__content">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    background-color: $clr-white;

    &.shade {
      background-color: $clr-shade;
    }

    &.padding {
      padding: 3rem 0;
    }
    &.padding-top {
      padding-top: 3rem;
    }
    &.padding-bottom {
      padding-bottom: 3rem;
    }
    &.center {
      text-align: center;
    }
    &.typography {
      @include topography;
    }
  }
  .section__content {
    h2, h3, h4, h5, h6 {
      margin-bottom: 1rem;
    }
  }
  .section.narrow .inner {
    max-width: 1120px;
  }
</style>