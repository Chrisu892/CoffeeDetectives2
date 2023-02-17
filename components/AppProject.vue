<template>
  <article class="project">
    <div v-if="project.isNew" class="project__badge"><span>New</span></div>
    <a v-if="isExternal" class="project__thumbnail" :href="project.url" :title="title" target="_blank" :style="{ background: brandColour }">
      <div class="project__thumbnail-desktop">
        <picture>
          <img class="project__thumbnail-image" loading="lazy" width="" height="" :src="project.images.desktopPreview" :alt="project.title" />
        </picture>
      </div>
      <div class="project__thumbnail-mobile">
        <picture>
          <img class="project__thumbnail-image" loading="lazy" width="" height="" :src="project.images.mobilePreview" :alt="project.title" />
        </picture>
      </div>
    </a>
    <NuxtLink v-else class="project__thumbnail" :to="project.url" :title="project.title" :style="{ background: brandColour }">
      <div class="project__thumbnail-desktop">
        <picture>
          <img class="project__thumbnail-image" loading="lazy" width="" height="" :src="project.images.desktopPreview" :alt="project.title" />
        </picture>
      </div>
      <div class="project__thumbnail-mobile">
        <picture>
          <img class="project__thumbnail-image" loading="lazy" width="" height="" :src="project.images.mobilePreview" :alt="project.title" />
        </picture>
      </div>
    </NuxtLink>
    <div class="project__details">
      <h3 class="project__title font-medium">
        <a v-if="isExternal" :href="project.url" :title="title" target="_blank">{{ project.title }}</a>
        <NuxtLink v-else :to="project.url" :title="title">{{ project.title }}</NuxtLink>
      </h3>
      <p class="project__summary font-regular">{{ project.summary }}</p>
    </div>
    <div class="project__action">
      <a v-if="isExternal" :href="project.url" :title="title" target="_blank">Live Preview</a>
      <NuxtLink v-else :to="project.url" :title="title">Case Study</NuxtLink>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    computed: {
      brandColour() {
        if (this.project.brandColour !== undefined) {
          return `linear-gradient(45deg, ${this.project.brandColour} 0%, ${this.project.brandColour} 100%)`
        }

        return null;
      },
      title() {
        return this.project.title
      },
      isExternal() {
        const url = this.project.url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        return (url !== null)
      }
    }
  }
</script>

<style scoped lang="scss">
  .project {
    background-color: $clr-white;
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    flex: 33.333% 0;
    flex: calc(33.333% - 1.38rem) 0;
    overflow: hidden;
    position: relative;
  }
  .project:nth-child(1), .project:nth-child(2) {
    flex: 50% 0;
    flex: calc(50% - 1rem) 0;
  }
  .project__badge {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    color: $clr-white;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font: $font-header;
    font-weight: $bold-weight;
    letter-spacing: 1px;
    transform: rotate(-5deg);
    text-transform: uppercase;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $clr-secondary;
      z-index: 1;
    }
    &::before {
      transform: rotate(45deg);
    }

    span {
      position: relative;
      top: 2px;
      z-index: 2;
    }
  }
  .project__thumbnail {
    display: block;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 70%;
  }
  .project__thumbnail-desktop, .project__thumbnail-mobile {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    overflow: hidden;
    position: absolute;
    transition: transform 350ms ease-in-out;
    will-change: transform;
  }
  .project__thumbnail-desktop {
    border-top-width: 1.5rem;
    padding-top: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 74%;
  }
  .project:hover .project__thumbnail-desktop {
    transform: translate(-55%, -50%);
  }
  .project__thumbnail-mobile {
    border-top-width: 1rem;
    border-radius: 15px;
    right: 7.5%;
    padding-top: 44.5%;
    position: absolute;
    top: 25%;
    width: 25%;
  }
  .project:hover .project__thumbnail-mobile {
    transform: translate(5%, 0%);
  }
  .project__thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .project__details {
    flex: 1;
    padding: 1.5rem;
  }
  .project__summary {
    margin-top: 0.5rem;
  }
  .project__action {
    border-top: solid 1px $clr-shade;
    padding: 1.5rem;
  }
</style>