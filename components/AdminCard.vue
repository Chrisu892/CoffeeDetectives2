<script>
  import { PhInfo, PhWarning } from 'phosphor-vue';

  export default {
    components: {
      PhInfo, PhWarning
    },
    props: {
      title: {
        type: String,
        default: null
      },
      help: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: null
      }
    }
  }
</script>

<template>
  <section class="card" :class="{ 'danger': type }">
    <div v-if="title" class="card__header">
      <h3 class="card__title font-medium">
        <PhWarning v-if="type === 'danger'" />
        {{ title }}
      </h3>
      <button v-if="help" class="card__help font-xs" type="button">
        <PhInfo /> What's This?
      </button>
    </div>
    <div class="card__content">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .card {
    background-color: $clr-white;
    border-radius: $border-radius;
    margin: 1.25rem 1.25rem 0 1.25rem;
  }
  .card__header {
    @include flex-row;
    border-bottom: solid 1px $clr-shade;
    padding: 1rem;
  }
  .card__title {
    @include flex-row;
    align-items: center;
    flex: 1 0;
    margin: 0;

    svg {
      margin-right: 0.5rem;
    }
  }
  .card.danger .card__title {
    color: $clr-danger;
  }
  .card__content {
    padding: 1rem;
  }
  .card__help {
    @include flex-row;
    align-items: center;
    background-color: $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    padding: 0.135rem 0.3rem;
    line-height: 1;

    &:hover {
      background-color: darken($clr-shade, 5%);
    }

    svg {
      margin-right: 0.25rem;
    }
  }
</style>