<template>
  <div class="filter" :class="{ 'filter--active': active }">
    <button class="filter__toggle font-regular" @click="toggle()">
      <div class="filter__title">{{ title }}</div>
      <div class="filter__icon"><ph-caret-down /></div>
    </button>
    <div class="__filter__group">
      <ul class="filter__group">
        <li v-for="option, key in list" :key="key" class="filter__item">
          <label class="filter__label font-small" :for="option.title">
            <input class="filter__input" :id="option.title" type="checkbox" /> {{ option.title }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { PhCaretDown } from 'phosphor-vue'

  export default {
    components: {
      PhCaretDown,
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
      list: {
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
  .filter {
    border: solid 1px $clr-shade-lighten-10;
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
  .filter__toggle {
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
  .filter__title {
    flex: 1;
  }
  .filter__icon {
    color: $clr-primary;
    margin-left: 0.5rem;
    transform: translateY(2px) scale(1);
  }
  .filter--active .filter__icon {
    transform: translateY(-3px) scale(-1);
  }

  .__filter__group {
    display: none;
    position: absolute;
    top: auto;
    left: -1px;
    right: -1px;
    display: none;
  }
  .filter--active .__filter__group {
    display: block;
  }
  .filter__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-top: 0;
    border-radius: 0 0 $border-radius $border-radius;
    padding: 0 0.25rem 0.5rem;
  }
  .filter__item, .filter__label {
    display: block;
  }
  .filter__label {
    border-radius: $border-radius;
    cursor: pointer;
    padding: 0 0.25rem;

    &:hover {
      background-color: $clr-shade-lighten-10;
    }
  }
</style>