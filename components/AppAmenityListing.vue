<script>
  import { 
    PhWifiHigh, PhCloudSun, PhPlug, PhToilet,
    PhBookOpen, PhMicrophoneStage, PhSparkle,
    PhPawPrint, PhBaby, PhPizza, PhTicket,
    PhLeaf, PhLamp, PhWheelchair, PhCheckCircle,
  } from 'phosphor-vue';

  export default {
    components: {
      PhWifiHigh, PhCloudSun, PhPlug, PhSparkle,
      PhToilet, PhBookOpen, PhMicrophoneStage,
      PhPawPrint, PhBaby, PhPizza, PhTicket,
      PhLeaf, PhLamp, PhWheelchair, PhCheckCircle,
    },
    props: {
      amenity: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        selected: false
      }
    },
    methods: {
      select() {
        this.$emit('selectAmenity', this.amenity)
        this.selected = !this.selected;
      }
    }
  }
</script>

<template>
  <button class="amenity" :class="{ 'active': selected }" :title="amenity.title" @click="select">
    <div class="amenity__content">
      <ph-wifi-high v-if="amenity.title == 'Free Wi-Fi'" />
      <ph-cloud-sun v-if="amenity.title == 'Outdoor Sitting'" />
      <ph-plug v-if="amenity.title == 'Power Outlets'" />
      <ph-toilet v-if="amenity.title == 'Restrooms'" />
      <ph-book-open v-if="amenity.title == 'Books & Magazines'" />
      <ph-microphone-stage v-if="amenity.title == 'Live Music'" />
      <ph-sparkle v-if="amenity.title == 'Loyalty Programs'" />
      <ph-paw-print v-if="amenity.title == 'Pet-friendly'" />
      <ph-baby v-if="amenity.title == 'Children-friendly'" />
      <ph-pizza v-if="amenity.title == 'Catering'" />
      <ph-ticket v-if="amenity.title == 'Live Events'" />
      <ph-leaf v-if="amenity.title == 'Vegan'" />
      <ph-lamp v-if="amenity.title == 'Unique Decor'" />
      <ph-wheelchair v-if="amenity.title == 'Accessible'" />
      <PhCheckCircle v-if="selected" class="amenity__selected" />
      <div class="font-xs">{{ amenity.title }}</div>
    </div>
  </button>
</template>

<style scoped lang="scss">
  .amenity {
    align-items: center;
    background-color: $clr-white;
    border: solid 1px $clr-white;
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    flex: 14.28% 0;
    flex: calc(14.28% - 1.75rem) 0;
    justify-content: center;
    padding: 2rem 1rem;
    position: relative;
    text-align: center;
    transition: border-color 350ms ease-in-out;
    will-change: border-color;

    svg {
      font-size: $font-large;
      transition: transform 350ms ease-in-out;
      will-change: transform;
    }

    &:hover {
      border: solid 1px rgba($clr-secondary, 0.3);
      color: $clr-secondary;

      svg {
        transform: scale(1.1);
      }
    }

    &.active {
      border: solid 1px $clr-secondary;
      
      svg {
        transform: scale(1.1);
      }
    }
  }
  .amenity__selected {
    background-color: $clr-white;
    border-radius: 100%;
    color: $clr-success;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    transform: scale(0) translate(35%, -35%);
    transition: transform 350ms ease-in-out, opacity 350ms ease-in-out;
  }
  .amenity.active .amenity__selected {
    opacity: 1;
    transform: scale(1) translate(35%, -35%);
  }
</style>