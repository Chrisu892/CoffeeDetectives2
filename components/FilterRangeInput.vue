<template>
  <div class="range" :class="{ 'active': active }">
    <button class="range__toggle" @click="toggle()">
      <div class="range__title font-regular">{{ title }}</div>
      <div class="range__icon"><PhPlus /></div>
    </button>

    <div class="__range__group" :class="{ 'active': active }">
      <div class="range__group">
        <div class="range__title">{{ title }}</div>
        <div class="range__row">

          <div class="range__input">
            <label class="range__input__label" for="min_price">From:</label>
            <div class="range__input__group">
              <div class="range__input__symbol">&pound;</div>
              <input class="range__input__field min" id="min_price" type="number" :value="range.min" />
            </div>
          </div>

          <div class="range__input">
            <label class="range__input__label" for="max_price">To:</label>
            <div class="range__input__group">
              <div class="range__input__symbol">&pound;</div>
              <input class="range__input__field max" id="max_price" type="number" :value="range.max" />
            </div>
          </div>

        </div>
        <div class="range__row">
          <button class="range__input__button" @click="apply()">Apply</button>
          <button class="range__input__button" @click="cancel()">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { PhPlus } from 'phosphor-vue'

  export default {
    components: {
      PhPlus
    },
    data() {
      return {
        active: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      range: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggle() {
        this.active = !this.active
      },
      apply() {
        console.log('apply filter')
      },
      cancel() {
        console.log('hide filter')
        this.active = !this.active
      }
    }
  }
</script>

<style scoped lang="scss">
  .range {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;

    &--active {
      border-color: $clr-shade;
      border-bottom: 0;
      border-radius: $border-radius $border-radius 0 0;
    }

    &:hover {
      border-color: $clr-shade;
    }
  }
  .range__toggle {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border-radius: $border-radius;
    cursor: pointer;
    margin-bottom: 0;
    padding: 0.5rem 0.75rem;
    width: 100%;
    text-align: left;
  }
  .range__title {
    flex: 1;
    margin-bottom: 0;
  }
  .range__icon {
    color: $clr-primary;
    margin-left: 0.5rem;
    transform: translateY(2px) scale(1);
  }
  .range.active .range__icon {
    transform: translateY(-3px) scale(-1);
  }

  .__range__group {
    @include flex-row;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba($clr-text, 0.3);
    visibility: hidden;
    opacity: 0;
  }
  .range.active .__range__group {
    opacity: 1;
    visibility: visible;
  }
  .range__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-top: 0;
    border-radius: $border-radius;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 360px;
    max-height: 420px;
  }
  .range__row {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
  .range__input {
    flex: 1 0;
  }
  .range__input__label {
    display: block;
  }
  .range__input__group {
    @include flex-row;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    width: 100%;
  }
  .range__input__symbol {
    background-color: $clr-shade;
    padding: 0.75em;
  }
  .range__input__field {
    flex: 1 0;
    width: 100%;
  }
  .range__input__button {
    background-color: $clr-primary;
    border-radius: $border-radius;
    cursor: pointer;
    padding: 0.5em;
  }
</style>