<template>
  <div class="filter" :class="{ 'filter--active': active }">
    <button class="filter__toggle font-small" @click="toggle()">
      <h3 class="filter__title font-regular">{{ title }}</h3>
      <div class="filter__icon"><ph-caret-down /></div>
    </button>
    <div class="__filter__group">
      <div v-for="group, key in list" :key="key" class="filter__group">
        <h4 v-if="group.title" class="filter__subtitle font-small">{{ group.title }}</h4>
        <ul class="filter__list font-small">
          <li v-for="option, key in group.options" :key="key" class="filter__item">
            <label class="filter__label" :for="option.title">
              <input class="filter__input" :id="option.title" type="checkbox" /> {{ option.title }}
            </label>
          </li>
        </ul>
      </div>
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
  .filter__toggle {
    align-items: center;
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    padding: 0.775rem 0.875rem 0.675rem;
    width: 100%;
    text-align: left;

    &:hover {
      background-color: $clr-shade;
    }
  }
  .filter--active .filter__toggle {
    border-radius: $border-radius $border-radius 0 0;
  }
  .filter__title {
    flex: 1;
  }
  .filter__icon {
    align-items: center;
    background-color: $clr-primary;
    border-radius: 100%;
    color: $clr-white;
    display: inline-flex;
    height: 28px;
    justify-content: center;
    width: 28px;
  }
  .filter--active .filter__icon {
    transform: scale(-1);
  }

  .__filter__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-top: 0;
    border-radius: 0 0 $border-radius $border-radius;
    padding: 0.975rem 0.875rem;
    width: 100%;
    display: none;
  }
  .filter--active .__filter__group {
    display: block;
  }
  .filter__group:not(:first-child) {
    margin-top: 0.875rem;
  }
  .filter__subtitle {
    font-weight: $bold-weight;
  }
</style>