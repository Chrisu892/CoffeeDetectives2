<template>
  <NuxtLink class="button" :to="to" :title="title">
    <span class="button__inner">{{ title }}</span>
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      to: String,
      title: String,
    }
  }
</script>

<style scoped lang="scss">
  .button {
    border: solid 2px $clr-secondary;
    border-radius: 50px;
    display: inline-block;
    font-weight: $bold-weight;
    text-decoration: none;
  }
  .button--solid {
    background-color: $clr-secondary;
    color: $clr-white;
    transition: background-color 350ms ease-in-out;
  }
  .button--solid:hover {
    background-color: darken($clr-secondary, 5%);
  }
  .button__inner {
    display: block;
    padding: 0.875rem 2.25rem 0.625rem;
  }
</style>