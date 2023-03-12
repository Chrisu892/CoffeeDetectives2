<template>
  <article class="get-listed">
    <div class="get-listed__wrap">
      <h3 class="get-listed__title font-large">Can't find your location?</h3>
      <p class="get-listed__text font-regular">Our mission is to get listed all locations with great cafes in Tyne and Wear. You can help us by sending a request to add a missing location.</p>
      <AppButton to="/contact/" title="Add a Location" />
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
    padding: 4rem;
    margin-top: 2rem;
  }
  .get-listed__title {
    margin-bottom: 1rem;
  }
  .get-listed__text {
    margin-bottom: 1rem;
  }
</style>