<template>
  <article class="get-listed">
    <div class="get-listed__wrap">
      <h3 class="get-listed__title font-medium">Can't find your destination?</h3>
      <p class="get-listed__text font-regular">Our mission is to get listed all destinations with great coffee places in Tyne and Wear. Send request to add a missing destination.</p>
      <AppButton to="/contact/" title="Add a Destination" />
    </div>
  </article>
</template>

<style scoped lang="scss">
  .get-listed {
    align-items: flex-end;
    border-radius: $border-radius;
    box-shadow: 0 0 20px 3px $clr-shade;
    display: flex;
    flex: 33.333% 0;
    flex: calc(33.333% - 1.5rem) 0;
    padding: 2rem;
  }
  .get-listed__title {
    margin-bottom: 1rem;
  }
  .get-listed__text {
    margin-bottom: 1rem;
  }
</style>