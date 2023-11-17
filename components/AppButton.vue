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
    align-items: center;
    background-color: $clr-primary;
    border: 0;
    border-radius: $border-radius;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-weight: normal;
    gap: 0.75rem;
    line-height: 1;
    position: relative;
    padding: 0.975rem 1.4rem;
    text-align: center;
    overflow: hidden;
    transition: left ease .375s;
    outline-color: transparent;
    text-transform: uppercase;

    &--outlined {
      background: none;
      border: 1px solid #fff;
      color: #fff;
    }
  }
</style>