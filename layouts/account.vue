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
  html, body {
    overflow: hidden;
  }
  .dashboard {
    @include flex-row;
    background-color: $clr-shade;
    height: 100vh;
    overflow: hidden;
  }
  .dashboard__aside {
    height: 100vh;
    overflow-y: auto;
  }
  .dashboard__main {
    flex: 1 0;
    height: 100vh;
    overflow-y: scroll;
  }
</style>