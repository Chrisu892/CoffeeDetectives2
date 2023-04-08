<script>
  import { PhPencil, PhTrash } from 'phosphor-vue'

  export default {
    components: {
      PhPencil, PhTrash
    },
    props: {
      row: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<template>
  <section class="row">
    <div class="row__details">
      <h2 class="row__title font-medium"><NuxtLink :to="row.actions.edit.url">{{ row.title }}</NuxtLink></h2>
      <p class="row__tagline">{{ row.tagline }}</p>
    </div>
    <div class="row__actions">
      <NuxtLink class="row__action" :to="row.actions.edit.url"><PhPencil /> Edit</NuxtLink>
      <NuxtLink class="row__action delete" :to="row.actions.delete.url"><PhTrash /> Delete</NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .row {
    @include flex-row;
    background-color: $clr-white;
    border-radius: $border-radius;
    margin: 1.25rem 1.25rem 0 1.25rem;
    padding: 1rem;
  }
  .row__details {
    flex: 1 0;
  }
  .row__title {
    margin: 0;
  }
  .row__tagline {
    color: darken($clr-shade, 25%);
    line-height: 1.2;
    margin: 0.25rem 0 0 0;
  }
  .row__actions {
    @include flex-row;
    align-items: center;
    gap: 0.75rem;
  }
  .row__action {
    @include flex-row;
    align-items: center;
    background-color: $clr-shade;
    border-radius: $border-radius;
    line-height: 1;
    padding: 0.335rem 0.425rem;

    svg {
      margin-right: 0.335rem;
    }

    &.delete {
      color: $clr-danger;
    }
  }
</style>