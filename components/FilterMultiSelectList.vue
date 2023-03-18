<template>
  <div class="filter">
    <h3 class="filter__title font-small">{{ title }}</h3>
    <ul class="filter__list font-small">
      <li v-for="(item, key) in list" :key="key" class="filter__item">
        <label :for="item.title" class="filter__label">
          <input type="checkbox" :id="item.title" class="filter__input" /> {{ item.title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .filter__title {
    
  }
</style>