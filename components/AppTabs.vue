<script>
  export default {
    data() {
      return {
        active: 'amenities'
      }
    },
    methods: {
      toggle(name) {
        this.active = name
      }
    }
  }
</script>

<template>
  <div class="tabs">
    <div class="tabs__controls" :class="active">
      <button class="tabs__button font-medium active" type="button" @click="toggle('amenities')">Browse by Amenity</button>
      <button class="tabs__button font-medium" type="button" @click="toggle('locations')">Browse by Location</button>
    </div>
    <div class="tabs__content" :class="{ 'active': active == 'amenities' }">
      <slot name="amenities" />
    </div>
    <div class="tabs__content" :class="{ 'active': active == 'locations' }">
      <slot name="locations" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tabs__controls {
    @include flex-row;
    background-color: $clr-white;
    border-radius: 50px;
    margin-bottom: 2.5rem;
    padding: 4px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      bottom: 4px;
      left: 4px;
      width: calc(50% - 4px);
      background-color: $clr-shade;
      border-radius: 50px;
      transition: transform 350ms ease-in-out;
    }

    &.amenities::before {
      transform: translateX(0%);
    }
    &.locations::before {
      transform: translateX(100%);
    }
  }
  .tabs__button {
    background-color: transparent;
    border-radius: 50px;
    cursor: pointer;
    flex: 1 0;
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    z-index: 1;
  }
  .tabs__content {
    display: none;

    &.active {
      display: block;
    }
  }
</style>