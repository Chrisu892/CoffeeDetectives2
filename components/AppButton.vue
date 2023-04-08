<template>
  <button v-if="['button', 'submit'].includes(btnType)" class="button" :type="btnType" :title="title">
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
      to: {
        type: String,
        default: ''
      },
      btnType: {
        type: String,
        default: 'button'
      }
    }
  }
</script>

<style scoped lang="scss">
  .button {
    appearance: none;
    background-color: $clr-primary;
    border: solid 2px $clr-primary;
    border-radius: 50px;
    color: $clr-secondary;
    cursor: pointer;
    display: inline-block;
    font-size: $font-regular;
    font-weight: $bold-weight;
    line-height: 1.4;
    padding: 0.675rem 1.325rem;
    text-align: center;
    text-decoration: none;

    &--outlined {
      background-color: transparent;
      color: $clr-primary;
    }

    &.plain {
      background: none;
      border: none;

      &:hover {
        background-color: $clr-shade;
      }
    }
  }
</style>