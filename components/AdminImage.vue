<script lang="ts">
  export default {
    props: {
      size: {
        type: String,
        default: null
      }
    }
  }
</script>

<template>
  <article class="image" :class="{ 'small': size }">
    <div class="image__preview">
      <img src="/images/newcastle-gateshead.jpeg" alt="" />
    </div>
    <div class="image__details">
      <div class="image__content">
        <h3 class="image__title">Example of an image title</h3>
        <p class="image__description">A view of the Millenium Bridge and the Sage Gateshead from the Tyne Bridge, Newcastle upon Tyne</p>
        <p class="image__info">Format: jpeg, Dimensions: 600px by 400px, File Size: 145kb</p>
      </div>
      <div class="image__actions">
        <AppButton btnType="button" title="Replace Image" class="animate" />
        <AppButton btnType="button" title="Delete Image" class="animate" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .image {
    @include flex-row;
    gap: 1rem;
  }
  .image.small:not(:first-of-type) {
    margin-top: 1.25rem;
  }
  .image__preview {
    border-radius: $border-radius;
    flex: 1 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .image.small .image__preview {
    max-width: 200px;
  }
  .image__details {
    flex: 1 0;
  }
  .image.small .image__details {
    @include flex-row;
    align-items: center;
    gap: 2rem;
  }
  .image__info {
    margin: 0;
  }
  .image__content {
    flex: 1 0;
  }
  .image__actions {
    @include flex-row;
    gap: 1rem;
    margin-top: 1.5rem;
  }
</style>