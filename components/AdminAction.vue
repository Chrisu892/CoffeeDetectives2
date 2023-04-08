<template>
  <div class="action">
    <div class="action__message">Please save before navigating elsewhere, otherwise your changes will be lost.</div>
    <div class="action__button">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .action {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border-top: solid 1px $clr-shade;
    position: sticky;
    bottom: 0;
    right: 0;
    padding: 1.25rem;
    margin-top: 1.25rem;
  }
  .action__message {
    color: darken($clr-shade, 20%);
    flex: 1 0;
  }
</style>