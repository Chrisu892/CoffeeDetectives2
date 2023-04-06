<template>
  <div class="search-field" :class="{ 'search-field--active': active }">
    <label class="search-field__label" :for="title">{{ title }}</label>
    <input class="search-field__input" :id="title" type="text" :placeholder="placeholder" v-model="term" autocomplete="off" required />
    <ul class="search-field__autocomplete" v-show="active">
      <li v-for="item, key in simpleSearch" :key="key" @click="toggle(item.title)" class="search-field__autocomplete__item">
        {{ item.title }}
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
      search: {
        type: Array,
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        term: '',
        active: false
      }
    },
    computed: {
      simpleSearch() {
        if (this.term.trim().length > 2) {
          this.active = true

          const items = this.search.filter(item => {
            return item.title.toLowerCase().includes(this.term.trim())
          })

          return items
        }
      }
    },
    methods: {
      toggle(value) {
        this.term = value
        this.active = false
        console.log(this.active)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-field {
    position: relative;
  }
  .search-field__label {
    display: block;
    margin-bottom: 0.25rem;
  }
  .search-field__input {
    width: 100%;
  }
  .search-field--active .search-field__input {
    border-radius: $border-radius $border-radius 0 0;
  }
  .search-field__autocomplete {
    position: absolute;
    top: auto;
    left: 0;
    width: 100%;
    background-color: $clr-white;
    z-index: 1;
    max-height: 200px;
    overflow-y: scroll;
    border-radius: 0 0 $border-radius $border-radius;
    overflow-x: hidden;
    border: solid 1px $clr-shade;
    border-top: 0;
    display: none;
  }
  .search-field--active .search-field__autocomplete {
    display: block;
  }
  .search-field__autocomplete__item {
    color: $clr-text;
    padding: 0.4rem 0.975rem;
    border-top: solid 1px $clr-shade;
  }
</style>