<script lang="ts">
  export default defineComponent({
    name: 'AppContainer',
    props: {
      cols: {
        type: Number,
        default: 3
      },
      mbCols: {
        type: Number,
        default: null
      }
    },
    computed: {
      customClass() {
        let customClass = `cols-${this.cols}`

        if (this.mbCols) {
          customClass = `${customClass} mb-cols-${this.mbCols}`
        }

        return customClass
      }
    }
  })
</script>

<template>
  <div class="container" :class="customClass">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $gutter;

    &.cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    &.cols-4 {
      grid-template-columns: repeat(4, 1fr);
    }

    &.margin-bottom {
      margin-bottom: var(--gutter);
    }
  }

  @media (max-width: 1024px) {
    .container.cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 920px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
    .container.mb-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .container.cols-2 {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 520px) {
    .container.cols-4 {
      grid-template-columns: 1fr;
    }
  }
</style>