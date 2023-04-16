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

<template>
  <div class="filter" :class="{ 'active': active }">
    <button class="filter__toggle font-regular" @click="toggle()">
      <div class="filter__title">{{ title }}</div>
      <div class="filter__icon"><PhCaretDown /></div>
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
    padding: 0 0.25rem 0.5rem;
  }
  .filter:hover .filter__group {
    border-color: darken($clr-shade, 10%);
  }
  .filter__item, .filter__label {
    display: block;
  }
  .filter__item {
    margin-bottom: 0.25rem;
    padding: 0;

    &:last-of-type {
      margin-bottom: 0;
    }

    &::before {
      display: none;
    }
  }
  .filter__label {
    border-radius: $border-radius;
    cursor: pointer;
    padding: 0 0.25rem;

    &:hover {
      background-color: $clr-shade;
    }
  }
</style>