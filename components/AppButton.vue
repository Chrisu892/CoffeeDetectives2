<template>
  <button v-if="btnType == 'button'" class="button" :title="title">
    <span class="button__inner">{{ title }}</span>
  </button>
  <NuxtLink v-else class="button" :to="to" :title="`Go to ${title} page`">
    <span class="button__inner">{{ title }}</span>
  </NuxtLink>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      to: String,
      btnType: String,
    }
  }
</script>

<style scoped lang="scss">
  .button {
    appearance: none;
    background-color: $clr-primary;
    border: solid 1px $clr-primary;
    border-radius: $border-radius;
    color: $clr-white;
    cursor: pointer;
    display: inline-block;
    font-size: $font-regular;
    font-weight: $bold-weight;
    padding: 1rem;
    max-width: 220px;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
</style>