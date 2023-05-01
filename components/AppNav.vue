<script>
  import { PhCaretDown } from 'phosphor-vue';

  export default {
    components: {
      PhCaretDown
    },
    props: {
      nav: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      isRev() {
        return this.$route.path.includes('/cafes/') || this.$route.path.includes('/blog/')
      }
    }
  }
</script>

<template>
  <div>
    <AppNavToggle />

    <nav class="nav" :class="{ 'rev': isRev }">
      <ul class="nav__list nav__list--primary">
        <li v-for="page, key in nav" :key="key" class="nav__item">
          <NuxtLink class="nav__link font-regular" :to="page._path" :title="`Go to ${page.title}`">
            {{ page.title }}
            <template v-if="page.title !== 'Blog' && page.title !== 'Cafés'">
              <ph-caret-down v-if="page.children" />
            </template>
          </NuxtLink>
          <div v-if="page.title !== 'Blog' && page.title !== 'Cafés' && page.children" class="__nav__group">
            <ul class="nav__group">
              <li v-for="page, key in page.children" :key="key" class="nav__group__item">
                <NuxtLink class="nav__group__link font-small" :to="page._path">{{ page.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul class="nav__list">
        <li class="nav__item">
          <AppButton btnType="link" to="/get-listed" class="primary animate" title="Get Listed" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
  .nav {
    @include flex-row;
    align-items: center;
  }
  .nav__list {
    @include flex-row;
    margin-bottom: 0;

    &--primary {
      flex: 1;
    }
  }
  .nav__item {
    line-height: 1;
    margin-bottom: 0;
    padding: 0;
    position: relative;

    &::before {
      display: none;
    }
  }
  .nav__link {
    color: $clr-white;
    display: inline-block;
    font-weight: $bold-weight;
    letter-spacing: 0.5px;
    margin-bottom: 0;
    padding: 0.475rem 1.725rem;
    text-decoration-color: $clr-text;
    transition: opacity 350ms ease-in-out;

    svg {
      color: $clr-primary;
      display: inline-block;
      height: 16px;
      width: 16px;
    }
  }
  .nav.rev .nav__link {
    color: $clr-secondary;
  }
  .nav__item:hover .nav__link {
    text-decoration-color: $clr-text;
  }

  .__nav__group {
    padding-top: 0.5rem;
    position: absolute;
    left: 0;
    top: auto;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transform: translateY(1rem);
    transition: opacity 350ms ease-in-out,
      visibility 350ms ease-in-out,
      transform 350ms ease-in-out;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 4rem;
      width: 1rem;
      height: 1rem;
      background-color: $clr-white;
      border-left: solid 1px $clr-shade;
      border-top: solid 1px $clr-shade;
      transform: rotate(45deg);
    }
  }
  .nav__item:nth-last-child(1) .__nav__group,
  .nav__item:nth-last-child(2) .__nav__group {
    left: initial;
    right: 0;

    &::before {
      left: initial;
      right: 4rem;
    }
  }
  .nav__item:hover .__nav__group {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .nav__group {
    background-color: $clr-white;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    box-shadow: 0 0 8px 5px rgba($clr-dark, 0.1);
    column-count: 2;
    column-gap: 2rem;
    margin: 0;
    min-width: 660px;
    padding: 1rem 1.5rem 0.75rem;
  }
  .nav__group__item {
    margin: 0 0 0.25rem 0;
    padding: 0;

    &::before {
      display: none;
    }
  }
  .nav__group__link {
    color: $clr-secondary;
  }
</style>