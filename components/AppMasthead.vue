<script>
  export default {
    props: {
      title: { 
        type: String, 
        required: true 
      },
      tagline: { 
        type: String, 
        default: null 
      }
    }
  }
</script>

<template>
  <section id="masthead" class="masthead">
    <div class="inner">
      <div class="masthead__content">
        <h1 class="masthead__title font-xl">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .masthead {
    background-color: $clr-secondary;
    color: $clr-white;
    overflow: hidden;
    padding: calc(80px + 5rem) 0 5rem;
    text-align: center;
  }
</style>