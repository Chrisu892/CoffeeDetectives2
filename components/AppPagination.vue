<template>
  <ul class="pagination">
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="/cafes" title="Go to page 1">1</NuxtLink>
    </li>
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="/cafes?pg=2" title="Go to page 2">2</NuxtLink>
    </li>
    <li class="pagination__item">
      <div class="pagination__link">...</div>
    </li>
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="/cafes?pg=11" title="Go to page 3">11</NuxtLink>
    </li>
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="/cafes?pg=12" title="Go to page 3">12</NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .pagination {
    @include flex-row;
    margin: 0;
  }
  .pagination__item {
    margin-left: 0.75rem;
    padding-left: 0;

    &::before {
      display: none;
    }
  }
  .pagination__link {
    align-items: center;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    width: 44px;

    &:hover {
      border-color: darken($clr-shade, 10%);
    }
  }
</style>