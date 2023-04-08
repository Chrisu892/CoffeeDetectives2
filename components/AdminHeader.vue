<script>
  export default {
    props: {
      title: {
        type: String,
        default: null
      },
      create: {
        type: Object,
        default: null
      }
    }
  }
</script>

<template>
  <header class="header">
    <h1 v-if="title" class="header__title font-xl">{{ title }}</h1>
    <div v-if="create" class="header__actions">
      <AppButton btnType="link" :to="create.url" :title="create.title" />
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border-bottom: solid 1px $clr-shade;
    left: 0;
    padding: 1rem 1.25rem;
    position: sticky;
    top: 0;
  }
  .header__title {
    flex: 1 0;
    margin: 0;
  }
</style>