<script>
  import { PhCheck } from 'phosphor-vue'

  export default {
    components: {
      PhCheck
    },
    props: {
      tabs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
      toggle(key) {
        this.active = key
      }
    }
  }
</script>

<template>
  <div class="tabs">
    <div class="tabs__buttons">
      <button v-for="tab, key in tabs" :key="key" class="tabs__button" :class="{ 'active': active == key }" type="button"  @click="toggle(key)">{{ tab.title }}</button>
    </div>
    <div class="tabs__wrapper">
      <div v-for="tab, key in tabs" :key="key" class="tabs__tab" :class="{ 'active': active == key }">
        <h2 class="tab__title font-medium">{{ tab.subtitle }}</h2>
        <template v-if="tab.title === 'Amenities'">
          <div class="amenities">
            <div v-for="amenity, key in tab.data" :key="key">
              <PhCheck /> {{ amenity.title }}
            </div>
          </div>
        </template>
        <template v-else-if="tab.title === 'Opening Times'">
          <ul class="opening-times">
            <li v-for="opening, key in tab.data" :key="key" class="opening-times__day">
              {{ opening.day }}: {{ opening.from }} - {{ opening.to }}
            </li>
          </ul>
        </template>
        <template v-else>
          {{ tab.data }}
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tabs {
    @include flex-row;
  }
  .tabs__buttons {
    @include flex-column;
    flex: 1 0;
    max-width: 250px;
  }
  .tabs__button {
    border-radius: $border-radius 0 0 $border-radius;
    border: solid 1px $clr-shade;
    border-right: 0;
    cursor: pointer;
    margin-bottom: -1px;
    padding: 0.675rem 1rem;
    text-align: left;

    &:not(:first-child) {
      margin-top: 0.35rem;
    }

    &.active {
      background-color: #fff;
      font-weight: $bold-weight;
    }
  }
  .tabs__wrapper {
    flex: 1 0;
  }
  .tabs__tab {
    border: solid 1px $clr-shade;
    display: none;
    padding: 1rem;

    &.active {
      display: block;
    }
  }
</style>