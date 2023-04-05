<template>
  <NuxtLink class="amenity" :to="amenity.url" :title="amenity.title">
    <div class="amenity__content">
      <ph-wifi-high v-if="amenity.altTitle == 'Free Wi-Fi'" />
      <ph-cloud-sun v-if="amenity.altTitle == 'Outdoor Sitting'" />
      <ph-plug v-if="amenity.altTitle == 'Power Outlets'" />
      <ph-toilet v-if="amenity.altTitle == 'Restrooms'" />
      <ph-book-open v-if="amenity.altTitle == 'Books & Magazines'" />
      <ph-microphone-stage v-if="amenity.altTitle == 'Live Music'" />
      <ph-sparkle v-if="amenity.altTitle == 'Loyalty Programs'" />
      <ph-paw-print v-if="amenity.altTitle == 'Pet-friendly'" />
      <ph-baby v-if="amenity.altTitle == 'Children-friendly'" />
      <ph-pizza v-if="amenity.altTitle == 'Catering'" />
      <ph-ticket v-if="amenity.altTitle == 'Live Events'" />
      <ph-leaf v-if="amenity.altTitle == 'Plant-based'" />
      <ph-lamp v-if="amenity.altTitle == 'Unique Decor'" />
      <ph-wheelchair v-if="amenity.altTitle == 'Wheelchair Accessible'" />
      <div class="font-xs">{{ amenity.altTitle }}</div>
    </div>
  </NuxtLink>
</template>

<script>
  import { 
    PhWifiHigh, PhCloudSun, PhPlug, PhToilet,
    PhBookOpen, PhMicrophoneStage, PhSparkle,
    PhPawPrint, PhBaby, PhPizza, PhTicket,
    PhLeaf, PhLamp, PhWheelchair,
  } from 'phosphor-vue';

  export default {
    components: {
      PhWifiHigh, PhCloudSun, PhPlug, PhSparkle,
      PhToilet, PhBookOpen, PhMicrophoneStage,
      PhPawPrint, PhBaby, PhPizza, PhTicket,
      PhLeaf, PhLamp, PhWheelchair,
    },
    props: {
      amenity: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .amenity {
    align-items: center;
    background-color: $clr-white;
    border-radius: $border-radius;
    display: flex;
    flex: 14.28% 0;
    flex: calc(14.28% - 1.75rem) 0;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;

    svg {
      font-size: $font-large;
    }
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