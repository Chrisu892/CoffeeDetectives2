<template>
  <article class="project" :style="{ background: brandColour }">
    <NuxtLink class="project__thumbnail" :to="project.url" :title="project.title">
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .project {
    background-color: $clr-white;
    border-radius: $border-radius;
    flex: 33.333% 0;
    flex: calc(33.333% - 1.38rem) 0;
    padding-top: 23%;
    position: relative;
  }
  .project:nth-child(1), .project:nth-child(2) {
    flex: 50% 0;
    flex: calc(50% - 1rem) 0;
    padding-top: 34%;
  }
  .project__thumbnail {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .project__thumbnail-desktop, .project__thumbnail-mobile {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    overflow: hidden;
    position: absolute;
  }
  .project__thumbnail-desktop {
    border-top-width: 1.5rem;
    padding-top: 50%;
    position: absolute;
    top: 50%;
    left: 7.5%;
    transform: translateY(-50%);
    width: 74%;
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
  .project__thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

</style>