<template>
  <section class="section amenities">
    <div class="amenities__background">
      <div class="inner">
        <div class="section__container">
          <h2 class="section__title font-medium">Browse by Amenity</h2>
          <div class="section__action">
            <NuxtLink to="/amenities/">View All</NuxtLink>
          </div>
        </div>
        <div class="flex-container flex-container--gutter">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .amenities {
    background-color: $clr-white;
  }
  .amenities__background {
    background-color: $clr-shade;
    padding: 4rem 0;
  }
</style>