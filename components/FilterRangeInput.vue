<script>
  import { PhCaretDown, PhClock } from 'phosphor-vue'

  export default {
    components: {
      PhCaretDown,
      PhClock,
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
      },
      symbol: {
        type: String,
        default: null
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

<template>
  <div class="filter" :class="{ 'active': active }">
    <button class="filter__toggle" @click="toggle()">
      <div class="filter__title font-regular">{{ title }}</div>
      <div class="filter__icon"><PhCaretDown /></div>
    </button>

    <div class="__filter__group" :class="{ 'active': active }">
      <div class="filter__group">
        <div class="filter__field">
          <label class="filter__field__label font-small" for="from">From:</label>
          <div class="filter__field__wrap">
            <div v-if="symbol" class="filter__field__symbol font-small">
              <template v-if="symbol === 'currency'">&pound;</template>
              <template v-if="symbol === 'clock'"><PhClock /></template>
            </div>
            <input class="filter__field__input font-small" id="from" type="number" :value="range.min" />
          </div>
        </div>

        <div class="filter__field">
          <label class="filter__field__label font-small" for="to">To:</label>
          <div class="filter__field__wrap">
            <div v-if="symbol" class="filter__field__symbol font-small">
              <template v-if="symbol === 'currency'">&pound;</template>
              <template v-if="symbol === 'clock'"><PhClock /></template>
            </div>
            <input class="filter__field__input font-small" id="to" type="number" :value="range.max" />
          </div>
        </div>

        <div class="filter__action">
          <AppButton btnType="submit" class="primary animate font-small" title="Apply" />
          <AppButton btnType="button" class="animate font-small" title="Clear" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .filter {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    position: relative;

    &.active {
      border-color: $clr-shade;
      border-bottom: 0;
      border-radius: $border-radius $border-radius 0 0;
    }

    &:hover {
      border-color: darken($clr-shade, 10%);
    }
  }
  .filter__toggle {
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
  .filter__title {
    flex: 1;
  }
  .filter__icon {
    color: $clr-primary;
    margin-left: 0.5rem;
    transform: translateY(2px) scale(1);
  }
  .filter.active .filter__icon {
    transform: translateY(-3px) scale(-1);
  }

  .__filter__group {
    display: none;
    position: absolute;
    top: auto;
    left: -1px;
    right: -1px;
    display: none;
    overflow: hidden;
  }
  .filter.active .__filter__group {
    display: block;
  }
  .filter__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-top: 0;
    border-radius: 0 0 $border-radius $border-radius;
    margin-bottom: 0;
    max-height: 240px;
    overflow-y: auto;
    padding: 0 0.8rem 1rem 0.8rem;
  }
  .filter:hover .filter__group {
    border-color: darken($clr-shade, 10%);
  }

  .filter__field:not(:first-child) {
    margin-top: 0.5rem;
  }
  .filter__field__label {
    display: block;
    margin-bottom: 0.25rem;
  }
  .filter__field__wrap {
    @include flex-row;
    align-items: center;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
  }
  .filter__field__symbol {
    flex: 20px 0;
    padding: 5px;

    svg {
      display: inline-block;
      height: 16px;
      position: relative;
      top: 2px;
      width: 16px;
    }
  }
  .filter__field__input {
    @include font-small;
    flex: 1 0;
    width: 10%;
    padding: 0.25em;
  }

  .filter__action {
    @include flex-row;
    gap: 1rem;
    margin-top: 1rem;
  }
  .filter__action .button {
    flex: 1 0;
  }
</style>