<template>
  <ul class="pagination">
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="/cafes/" title="Go to page 1">1</NuxtLink>
    </li>
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="?pg=2" title="Go to page 2">2</NuxtLink>
    </li>
    <li class="pagination__item">
      <div class="pagination__link">...</div>
    </li>
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="?pg=11" title="Go to page 3">11</NuxtLink>
    </li>
    <li class="pagination__item">
      <NuxtLink class="pagination__link" to="?pg=12" title="Go to page 3">12</NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .pagination {
    background-color: $clr-shade-lighten-10;
    border-radius: $border-radius;
    padding: 0.2rem;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    width: 100%;
  }
  .pagination__item {
    margin-left: 0.2rem;
  }
  .pagination__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: $clr-white;
    border: solid 1px $clr-secondary;
    border-radius: $border-radius;
    height: 54px;
    width: 54px;
  }
</style>