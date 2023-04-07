<template>
  <div class="dashboard">
    <div class="dashboard__aside">
      <AdminNav />
    </div>
    <div class="dashboard__main">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .dashboard {
    @include flex-row;
    background-color: $clr-shade;
  }
  .dashboard__main {
    flex: 1 0;
    padding: 1.25rem;
  }
</style>