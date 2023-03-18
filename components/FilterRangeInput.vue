<template>
  <div class="range" :class="{ 'range--active': active }">
    <button class="range__toggle font-small" @click="toggle()">
      <div class="range__title">{{ title }}</div>
      <div class="range__icon"><ph-caret-down /></div>
    </button>
    <div class="__range__group">
      <div class="range__group">
        <div class="range__field">
          <label class="range__label font-small" for="min_price">From:</label>
          <input class="range__input" id="min_price" type="number" :value="min" />
        </div>
        <div class="range__field">
          <label class="range__label font-small" for="max_price">To:</label>
          <input class="range__input" id="max_price" type="number" :value="max" />
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
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
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
    position: relative;
  }
  .range__toggle {
    align-items: center;
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    padding: 0.975rem 0.875rem 0.875rem;
    width: 100%;
    text-align: left;

    &:hover {
      background-color: $clr-shade;
    }
  }
  .range--active .range__toggle {
    border-radius: $border-radius $border-radius 0 0;
  }
  .range__title {
    flex: 1;
  }
  .range__icon {
    align-items: center;
    background-color: $clr-primary;
    border-radius: 100%;
    color: $clr-white;
    display: inline-flex;
    height: 28px;
    justify-content: center;
    width: 28px;
  }
  .range--active .range__icon {
    transform: scale(-1);
  }

  .__range__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-top: 0;
    border-radius: 0 0 $border-radius $border-radius;
    padding: 0.975rem 0.875rem;
    width: 100%;
    display: none;
  }
  .range--active .__range__group {
    display: block;
  }
  .range__group {
    display: flex;
    flex-flow: row wrap;
  }
  .range__field {
    flex: 50% 0;
  }
</style>