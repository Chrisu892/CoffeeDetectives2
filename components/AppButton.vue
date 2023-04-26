<script>
  import { PhMagnifyingGlass, PhArrowRight, PhEnvelope } from 'phosphor-vue';

  export default {
    components: {
      PhMagnifyingGlass,
      PhArrowRight,
      PhEnvelope,
    },
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
        default: 'link'
      },
      icon: {
        type: String,
        default: 'arrow-right'
      }
    }
  }
</script>

<template>
  <button v-if="['button', 'submit'].includes(btnType)" class="button" :type="btnType" :title="title">
    <PhMagnifyingGlass v-if="icon === 'magnifying-glass'" />
    <PhEnvelope v-if="icon === 'envelope'" />
    <span class="button__inner">{{ title }}</span>
  </button>
  <NuxtLink v-else class="button" :to="to" :title="`Go to ${title} page`">
    <PhMagnifyingGlass v-if="icon === 'magnifying-glass'" />
    <span class="button__inner">{{ title }}</span>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .button {
    appearance: none;
    align-items: center;
    background-color: transparent;
    border: solid 1px $clr-secondary;
    border-radius: $border-radius;
    color: $clr-secondary;
    cursor: pointer;
    display: inline-flex;
    font-size: $font-regular;
    gap: 0.5rem;
    justify-content: center;
    line-height: 1;
    overflow: hidden;
    padding: 0.85rem 1.5rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 350ms ease-in-out;

    span {
      position: relative;
      z-index: 1;
    }

    svg {
      display: inline-block;
      height: 20px;
      position: relative;
      width: 20px;
      z-index: 1;
    }

    &:hover {
      color: $clr-primary;
    }

    &.animate::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $clr-secondary;
      opacity: 0;
      transform: translateY(100%);
      transition: opacity 350ms ease-in-out, transform 350ms ease-in-out;
    }
    &.animate:hover::before {
      opacity: 1;
      transform: translateY(0%);
    }

    &.rev {
      border-color: $clr-primary;
      color: $clr-primary;
    }
    &.animate.rev:hover {
      color: $clr-secondary;
    }
    &.animate.rev::before {
      background-color: $clr-primary;
    }

    &.primary {
      background-color: $clr-primary;
      border-color: $clr-primary;
      color: $clr-secondary;
    }
    &.primary::before {
      background-color: darken($clr-primary, 10%);
    }

    &.margin-top {
      margin-top: 2rem;
    }
  }
</style>