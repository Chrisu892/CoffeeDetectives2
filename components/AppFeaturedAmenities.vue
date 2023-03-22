<template>
  <section class="section">
    <div class="inner">
      <div class="section__title font-medium">Browse by Amenity</div>
      <div class="flex-container flex-container--gutter">
        <NuxtLink class="amenity" v-for="amenity, key in amenities" :key="key" :to="amenity.url">
          <div class="amenity__content">
            <ph-wifi-high v-if="amenity.title == 'Free Wi-Fi'" />
            <ph-cloud-sun v-if="amenity.title == 'Outdoor Sitting'" />
            <ph-plug v-if="amenity.title == 'Power Outlets'" />
            <ph-toilet v-if="amenity.title == 'Restrooms'" />
            <ph-book-open v-if="amenity.title == 'Books & Magazines'" />
            <ph-microphone-stage v-if="amenity.title == 'Live Music'" />
            <ph-sparkle v-if="amenity.title == 'Loyalty Programs'" />
            <div class="font-xs">{{ amenity.title }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
  import { 
    PhWifiHigh, PhCloudSun, PhPlug, PhToilet,
    PhBookOpen, PhMicrophoneStage, PhSparkle
  } from 'phosphor-vue';

  export default {
    components: {
      PhWifiHigh, PhCloudSun, PhPlug, PhSparkle,
      PhToilet, PhBookOpen, PhMicrophoneStage,
    },
    props: {
      amenities: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .amenity {
    align-items: center;
    border: solid 1px $clr-primary;
    border-radius: $border-radius;
    display: flex;
    flex: 14.28% 0;
    flex: calc(14.28% - 1.75rem) 0;
    justify-content: center;
    padding: 1rem;
    text-align: center;

    svg {
      font-size: $font-large;
    }
  }
</style>