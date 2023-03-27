<template>
  <section class="plain-masthead">
    <div class="inner">
      <div class="flex-container flex-container--align-center">
        <AppBreadcrumb />
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .plain-masthead {
    background-color: $clr-shade-lighten-10;
    padding: 0.5rem 0;
  }
</style>