<template>
  <div class="tech">
    <img class="tech__thumbnail" loading="lazy" width="" height="" :src="tech.images.thumbnail" :alt="tech.title" />
  </div>
</template>

<script>
  export default {
    props: {
      tech: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .tech {
    background-color: $clr-white;
    display: inline-flex;
    flex: calc(100% / 7) 0;
    height: 100px;
    justify-content: center;
    width: 100px;
  }
  .tech__thumbnail {
    height: 60px;
    width: auto;
  }
</style>