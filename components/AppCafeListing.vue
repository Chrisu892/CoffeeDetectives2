<template>
  <article class="cafe" :class="`cafe--${view}`">
    <div class="cafe__thumbnail">
      <NuxtLink class="cafe__thumbnail-link" :to="cafe.url" :title="`Read more about ${cafe.title}`">
        <img class="cafe__thumbnail-image" :src="cafe.images.thumbnail" :alt="cafe.title" />
      </NuxtLink>
      <div class="cafe__thumbnail-logo"></div>
    </div>

    <div class="cafe__content">
      <div class="cafe__section cafe__section--flex">
        <h3 class="cafe__title font-medium">
          <NuxtLink :to="cafe.url" :title="`Read more about ${cafe.title}`">{{ cafe.title }}</NuxtLink>
        </h3>
        <button v-if="cafe.rating" class="cafe__rating font-small">
          <PhStar /> <span class="cafe__rating-score">{{ cafe.rating }}</span>
        </button>
      </div>

      <div class="cafe__section">
        <p class="cafe__abstract font-small">{{ cafe.abstract }}</p>
        <div class="cafe__amenities font-xs">
          <div v-for="amenity, key in cafe.amenities" :key="key" class="cafe__amenity" :class="{ 'cafe__amenity--unique': amenity.unique }">
            <PhStar v-if="amenity.unique" /> {{ amenity.title }}
          </div>
          <div class="cafe__amenity">+ 4 more</div>
        </div>

        <div class="cafe__detail">
          <div class="cafe__detail-icon"><PhMapPinLine /></div> 
          <div class="font-small">{{ cafe.address }}</div>
        </div>

        <div class="cafe__detail">
          <div class="cafe__detail-icon"><PhClock /></div>
          <div class="font-small">Open now, closes at 7:30pm</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import { PhStar, PhMapPinLine, PhPhone, PhClock } from 'phosphor-vue'

  export default {
    components: {
      PhStar,
      PhMapPinLine,
      PhPhone,
      PhClock,
    },
    props: {
      cafe: {
        type: Object,
        required: true
      },
      view: {
        type: String,
        default: 'list'
      }
    }
  }
</script>

<style scoped lang="scss">
  .cafe {
    border-radius: $border-radius;
    display: flex;
    flex-flow: row wrap;

    &--list {
      flex: 100% 0;
    }
    &--grid {
      flex: 33.333% 0;
      flex: calc(33.333% - 1.35rem) 0;
      flex-flow: column;
      min-width: 33.333%;
      min-width: calc(33.333% - 1.35rem);
    }

    &--extra-margin {
      margin: 0.25rem 0.125rem;
    }
  }

  .cafe__thumbnail {
    border-radius: $border-radius;
    position: relative;
  }
  .cafe--list .cafe__thumbnail {
    flex: 31.5% 0;
  }
  .cafe__thumbnail-link {
    background-color: $clr-shade;
    border-radius: $border-radius;
    display: block;
    overflow: hidden;
    padding-top: 75%;
    position: relative;
  }
  .cafe--list .cafe__thumbnail-link {
    border-radius: $border-radius;
    height: 100%;
    margin-bottom: 0;
  }
  .cafe__thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cafe__thumbnail-logo {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 22%;
    padding-top: 22%;
    background-color: $clr-shade;
    border-radius: 100%;
  }

  .cafe__content {
    background-color: $clr-white;
    border-radius: $border-radius;
    padding-top: 1rem;
    position: relative;
  }
  .cafe--list .cafe__content {
    flex: 1 0;
    margin-top: 0;
    padding: 1rem;
  }

  .cafe__section--flex {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .cafe__title {
    flex: 1 0;
  }

  .cafe__rating {
    align-items: center;
    border: 0;
    background-color: $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    display: inline-flex;
    padding: 0.075rem 0.525rem;
  }
  .cafe__rating-score {
    margin-left: 0.225rem;
  }

  .cafe__abstract {
    margin: 0.75rem 0;
    max-height: 76px;
    overflow: hidden;
  }
  .cafe__amenities {
    display: flex;
    flex-flow: row;
    margin: 0.75rem 0 1rem;
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1.5rem;
      background: linear-gradient(90deg, transparent, $clr-white);
    }
  }
  .cafe__amenity {
    align-items: center;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    display: inline-flex;
    padding: 0.001rem 0.5rem;
    white-space: nowrap;

    &:not(:first-child) {
      margin-left: 0.425rem;
    }

    svg {
      margin-right: 0.3rem;
    }

    &--unique {
      background-color: $clr-shade;
    }
  }
  .cafe__detail {
    align-items: center;
    display: flex;
    margin-top: 0.75rem;
    padding: 0.125rem 0 0 2rem;
    position: relative;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 1.5rem;
      background: linear-gradient(90deg, transparent, $clr-white);
    }
  }
  .cafe__detail-icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: $clr-shade;
    height: 1.65rem;
    width: 1.65rem;
  }

  .cafe__action {
    margin-top: 1rem;
  }
</style>