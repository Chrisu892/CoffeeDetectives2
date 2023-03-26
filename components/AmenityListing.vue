<template>
  <section class="section">
    <div class="inner">
      <div class="section__title">
        <h2 class="font-medium">Free Wi-Fi</h2>
      </div>
    </div>
  </section>
  <!-- <section class="amenity">
    <div class="amenity__icon"><PhWifiHigh /></div>
    <h2 class="amenity__title font-large">Free Wi-Fi</h2>
    <p class="amenity__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab culpa soluta? Quisquam suscipit voluptatum fugit voluptates ut ullam eius!</p>
  </section> -->
</template>

<script>
  import { PhWifiHigh } from 'phosphor-vue';

  export default {
    components: {
      PhWifiHigh
    }
  }
</script>

<style scoped lang="scss">
  .amenity {
    flex: 33.333% 0;
    flex: calc(33.333% - 1.65rem) 0;
  }
  .amenity__icon {
    font-size: $font-xl;
    display: flex;
    align-items: center;
  }
  .amenity__title {
    margin: 1rem 0;
  }
</style>