<template>
  <div class="range" :class="{ 'range--active': active }">
    <button class="range__toggle" @click="toggle()">
      <div class="range__title font-regular">{{ title }}</div>
      <div class="range__icon"><ph-caret-down /></div>
    </button>
    <div class="__range__group">
      <div class="range__group">
        <div class="range__field">
          <label class="range__label font-small" for="min_price">From:</label>
          <input class="range__input" id="min_price" type="number" :value="range.min" />
        </div>
        <div class="range__field">
          <label class="range__label font-small" for="max_price">To:</label>
          <input class="range__input font-small" id="max_price" type="number" :value="range.max" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { PhCaretDown } from 'phosphor-vue'

  export default {
    components: {
      PhCaretDown
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .range {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    position: relative;

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
    align-items: center;
    background-color: $clr-white;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    padding: 0.5rem 0.75rem;
    width: 100%;
    text-align: left;
  }
  .range__title {
    flex: 1;
  }
  .range__icon {
    color: $clr-primary;
    margin-left: 0.5rem;
    transform: translateY(2px) scale(1);
  }
  .range--active .range__icon {
    transform: translateY(-3px) scale(-1);
  }

  .__range__group {
    display: none;
    position: absolute;
    top: auto;
    left: -1px;
    right: -1px;
  }
  .range--active .__range__group {
    display: block;
  }
  .range__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-top: 0;
    border-radius: 0 0 $border-radius $border-radius;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    padding: 0 0.5rem 0.5rem;
  }
  .range__field {
    flex: 1 0;
  }
  .range__input {
    padding: 0.5rem;
  }
</style>