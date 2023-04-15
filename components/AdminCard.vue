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
    },
    data() {
      return {
        modal: false
      }
    },
    methods: {
      toggle() {
        this.modal = !this.modal
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
      <button v-if="help" @click="toggle" class="card__help font-xs" type="button">
        <PhInfo /> What's This?
      </button>
    </div>
    
    <div class="card__content">
      <slot />
    </div>

    <div v-if="help" class="card__modal" :class="{ 'active': modal }">
      <div class="card__modal__wrap">
        <h4 class="card__modal__header font-large">What's this?</h4>
        <div class="card__modal__content">{{ help }}</div>
        <div class="card__modal__action">
          <AppButton @click="toggle" btnType="button" title="Hide this message" class="animate" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .card {
    background-color: $clr-white;
    border-radius: $border-radius;
    margin: 1.25rem 1.25rem 0 1.25rem;

    &.danger {
      background-color: rgba($clr-danger, 0.2);
    }
  }
  .card__header {
    @include flex-row;
    border-bottom: solid 1px $clr-shade;
    padding: 1rem;
  }
  .card.danger .card__header {
    border-bottom-color: rgba($clr-danger, 0.4);
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
  .card__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($clr-dark, 0.15);
    z-index: 101;
    visibility: hidden;
    opacity: 0;
    transition: visibility 350ms ease-in, opacity 350ms ease-in;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
  .card__modal__wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 540px;
    width: 100%;
    background-color: $clr-white;
    border-radius: $border-radius;
    max-height: 400px;
    transform: translate(-50%, -50%) scale(0.9);
    box-shadow: 0 0 120px 5px rgba($clr-dark, 0.3);
    transition: transform 350ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
    will-change: transform;
  }
  .card__modal.active .card__modal__wrap {
    transform: translate(-50%, -50%) scale(1);
  }
  .card__modal__header {
    border-bottom: solid 1px $clr-shade;
    margin: 0;
    padding: 1.25rem;
  }
  .card__modal__content {
    overflow-y: auto;
    padding: 1.25rem;
  }
  .card__modal__action {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
</style>