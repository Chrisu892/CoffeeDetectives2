<script lang="ts">
  import { PhCoffee, PhCaretDown } from '@phosphor-icons/vue'

  export default {
    components: {
      PhCoffee,
      PhCaretDown,
    },
    props: {
      title: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selected: new Set(),
        dropdown: false,
      }
    },
    methods: {
      toggle(option:string) {
        if (this.selected.has(option)) {
          this.selected.delete(option)
        } else {
          this.selected.add(option)
        }
      },
      showDropDown() {
        this.dropdown = !this.dropdown
      }
    }
  }
</script>

<template>
  <div class="select" :class="{ 'active': dropdown }">
    <div class="select__label">{{ title }}</div>
    <div class="select__container">
      <template v-for="option, key in options">
        <button v-if="option.show" :key="key" class="select__option" :class="{ 'active': selected.has(option.title) }" type="button" @click="toggle(option.title)">
          <span class="select__option__checkbox"></span> {{ option.title }}
        </button>
      </template>

      <button class="select__button" type="button" @click="showDropDown">
        <PhCaretDown />
      </button>

      <div v-show="dropdown" class="select__group">
        <template v-for="option, key in options">
          <button v-if="!option.show" :key="key" class="select__group__option font-small" :class="{ 'active': selected.has(option.title) }" type="button" @click="toggle(option.title)">
            <span class="select__option__checkbox"></span> {{ option.title }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .select__label {
    margin-bottom: 0.25rem;
  }
  .select__container {
    @include flex-row;
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    position: relative;
  }
  .select__option {
    display: flex;
    flex-flow: row;
    align-items: center;
    background-color: $clr-white;
    border-right: solid 1px darken($clr-shade, 10%);
    cursor: pointer;
    font-size: $font-small;
    flex: 1 0;
    line-height: 1;
    padding: 0.96rem 0.65rem;

    &:hover {
      background-color: darken($clr-white, 5%);
    }

    svg {
      margin-right: 0.25rem;
    }

    &:first-child {
      border-radius: $border-radius 0 0 $border-radius;
    }
  }
  .select__button {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border-radius: 0 $border-radius $border-radius 0;
    cursor: pointer;
    font-size: $font-regular;
    flex: 1 0;
    justify-content: center;
    line-height: 1;
    padding: 0.5rem;
    max-width: 44px;

    &:hover {
      background-color: darken($clr-white, 5%);
    }

    svg {
      color: $clr-secondary;
      display: inline-block;
      height: 16px;
      width: 16px;
    }
  }
  .select.active .select__button svg {
    transform: scale(-1);
  }
  .select__group {
    background-color: $clr-shade;
    border-radius: $border-radius;
    margin-top: 0.5rem;
    max-height: 250px;
    overflow: auto;
    padding: 0.5rem;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .select__group__option {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      background-color: darken($clr-shade, 5%);
    }

    &:not(:first-child) {
      margin-top: 0.5rem;
    }
  }
  .select__option__checkbox {
    background-color: $clr-white;
    border: solid 1px darken($clr-shade, 5%);
    border-radius: 3px;
    display: inline-block;
    height: 16px;
    position: relative;
    margin-right: 0.35rem;
    width: 16px;

    &::before {
      content: '';
      position: absolute;
      left: 1px;
      right: 1px;
      bottom: 1px;
      top: 1px;
      width: 12px;
      height: 12px;
      background-color: $clr-secondary;
      border-radius: 3px;
      display: none;
    }
  }
  .select__option.active .select__option__checkbox::before,
  .select__group__option.active .select__option__checkbox::before {
    display: block;
  }

  @media (max-width: 1320px) {
    .select__option {
      padding: 0.9rem 0.5rem;
    }
  }
</style>