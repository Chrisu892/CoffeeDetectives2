<template>
  <ul class="flex-container socials">
    <li v-for="social, key in socials" class="social__item">
      <a class="social__link" :href="social.url" :title="`View ${social.title} (opens in a new tab)`" target="_blank" rel="nofollow noopener">
        <PhTwitterLogo v-if="social.title == 'Twitter'" />
        <PhInstagramLogo v-if="social.title == 'Instagram'" />
      </a>
    </li>
  </ul>
</template>

<script>
  import { PhLinkedinLogo, PhTwitterLogo, PhBehanceLogo, PhInstagramLogo } from 'phosphor-vue'

  export default {
    components: {
      PhLinkedinLogo, PhTwitterLogo, PhBehanceLogo, PhInstagramLogo
    },
    data() {
      return {
        socials: [
          { title: 'Instagram', url: 'https://www.instagram.com/' },
          { title: 'Twitter', url: 'https://www.twitter.com/' },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .socials {
    margin-top: 2rem;
  }
  .social__item:not(:first-child) {
    margin-left: 1rem;
  }
  .social__link {
    align-items: center;
    background-color: $clr-secondary-dark;
    border-radius: 30px 20px;
    color: $clr-white;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 44px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: darken($clr-secondary, 5%);
      border-radius: 30px 20px;
      transform: translateY(100%);
      transition: transform 250ms ease-in-out;
      z-index: 1;
    }

    &:hover::before {
      transform: translateY(0%);
    }

    svg {
      position: relative;
      z-index: 2;
    }
  }
</style>