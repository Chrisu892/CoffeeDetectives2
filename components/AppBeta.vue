<template>
  <div class="beta">
    <div class="inner beta__container">
      <div class="beta__text">This is an early preview of our website. Some features might not work as expected.</div>
      <NuxtLink to="/feedback/" title="Write a feedback">Leave a feedback</NuxtLink>.
    </div>
  </div>
</template>

<style scoped lang="scss">
  .beta {
    background-color: $clr-primary;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 100;
  }
  .beta__container {
    display: flex;
    flex-flow: row wrap;
  }
  .beta__text {
    flex: 1 0;
  }
</style>