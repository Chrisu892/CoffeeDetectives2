<script>
  import { PhCaretDown } from 'phosphor-vue';

  export default {
    components: {
      PhCaretDown
    },
    data() {
      return {
        isActive: false
      }
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
    },
    methods: {
      toggleNav() {
        this.isActive = !this.isActive

        document.querySelectorAll('html, body').forEach((elem) => {
          elem.classList.toggle('locked', this.isActive)
        }, 350)
      },
      removeActive() {
        setTimeout(() => {
          this.isActive = false

          document.querySelectorAll('html', 'body').forEach((elem, _) => {
            elem.classList.toggle('locked', this.isActive)
          })
        }, 350)
      }
    }
  }
</script>

<template>
  <nav class="nav" :class="{ 'rev': isRev }">
    <ul class="nav__list nav__list--primary" :class="{ 'nav__list--active': isActive }">
      <li v-for="page, key in nav" :key="key" class="nav__item">
        <NuxtLink class="nav__link font-regular" :to="page._path" :title="`Go to ${page.title}`" @click="removeActive">
          {{ page.title }}
          <template v-if="page.title !== 'Blog' && page.title !== 'Cafés'">
            <ph-caret-down v-if="page.children" />
          </template>
        </NuxtLink>
        <div v-if="page.title !== 'Blog' && page.title !== 'Cafés' && page.children" class="__nav__group">
          <ul class="nav__group">
            <li v-for="page, key in page.children" :key="key" class="nav__group__item">
              <NuxtLink class="nav__group__link font-small" :to="page._path" @click="removeActive">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <button class="nav-toggle" :class="{ 'nav-toggle--active': isActive }" type="button" @click="toggleNav">
      <span />
      <span />
      <span />
    </button>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    @include flex-row;
    align-items: center;
    justify-content: flex-end;
  }
  .nav__list {
    @include flex-row;
    margin-bottom: 0;

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
    letter-spacing: 0.5px;
    line-height: 1;
    margin-bottom: 0;
    padding: 0.575rem 1.725rem;
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
  .nav-toggle {
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 44px;
    width: 44px;
    padding: 0;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    margin-left: 1.25rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    span {
      border-bottom: solid 3px $clr-white;
      border-radius: $border-radius;
      display: block;
      margin: 4px 0;
      width: 100%;
      transition: transform 350ms ease-in-out,
        opacity 350ms ease-in-out;
    }

    &--active {
      span:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
      }
      span:nth-child(2) {
        transform: scale(0);
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-11px) rotate(-45deg);
      }
    }
  }

  /*-------------------------*\
      #MEDIA QUERIES
  \*-------------------------*/

  @media (max-width: 1160px) {
    .nav__link {
      padding: 0.475rem 1.225rem;
    }
  }

  @media (max-width: 1080px) {
    .nav__link {
      padding: 0.475rem 1rem;
    }
  }

  @media (max-width: 1030px) {
    .nav__list {
      &--primary {
        display: none;
        padding: 1rem;
        padding-top: 110px;
        overflow-y: auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $clr-secondary;
      }

      &--active {
        display: block;
      }
    }
    .nav__item:not(:first-child) {
      margin-top: 0.5rem;
    }
    .nav__link {
      align-items: center;
      background-color: darken($clr-secondary, 3%);
      border-radius: $border-radius;
      display: flex;
      justify-content: space-between;
      padding: 0.875rem;
    }
    .__nav__group {
      opacity: 1;
      position: relative;
      visibility: visible;
      transform: initial;

      &::before {
        display: none;
      }
    }
    .nav__group {
      background-color: darken($clr-secondary, 3%);
      border: 0;
      column-count: 3;
      column-gap: 1rem;
      padding: 0.5rem;
      min-width: 100%;
    }
    .nav__group__link {
      border-radius: $border-radius;
      color: $clr-white;
      display: block;
      padding: 0.5rem 0.75rem;
      transition: background-color 350ms ease-in-out;

      &:hover {
        background-color: darken($clr-secondary, 5%);
      }
    }

    .nav-toggle {
      align-items: center;
      background-color: transparent;
      display: flex;
      height: 44px;
      width: 44px;
      padding: 0;
      cursor: pointer;
      flex-direction: column;
      justify-content: center;
      margin-right: 1.25rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      span {
        border-bottom: solid 3px $clr-white;
        border-radius: $border-radius;
        display: block;
        margin: 4px 0;
        width: 100%;
        transition: transform 350ms ease-in-out,
          opacity 350ms ease-in-out;
      }

      &--active {
        span:nth-child(1) {
          transform: translateY(11px) rotate(45deg);
        }
        span:nth-child(2) {
          transform: scale(0);
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translateY(-11px) rotate(-45deg);
        }
      }
    }
  }

  @media (max-width: 590px) {
    .nav__group {
      column-count: 2;
    }
  }

  @media (max-width: 520px) {
    .nav__cta {
      display: none;
    }

    .nav-toggle {
      margin-right: 0;
    }
  }

  @media (max-width: 460px) {
    .nav__group {
      column-count: 1;
    }
  }
</style>