<script>
  import { PhGauge, PhChartBar, PhWrench, PhSignOut, PhImage, PhTicket } from 'phosphor-vue'

  export default {
    components: {
      PhGauge, PhChartBar, PhWrench, PhSignOut, PhImage, PhTicket
    },
    data() {
      return {
        nav: [
          { title: 'Dashboard', tagline: 'The overview of your café', url: '/account', icon: 'PhGauge' },
          { title: 'Analytics', tagline: 'Track the performance of your café', url: '/account/analytics', icon: 'PhChartBar' },
          { title: 'Gallery', tagline: 'Add or update images shown on your café', url: '/account/gallery', icon: 'PhImage' },
          { title: 'Promotions', tagline: 'Add or manage existing promotions', url: '/account/promotions', icon: 'PhTicket' },
          { title: 'Settings', tagline: 'Update your account or café details', url: '/account/settings', icon: 'PhWrench' },
          { title: 'Sign Out', tagline: 'Securely sign out from your account', url: '/sign-out', icon: 'PhSignOut' }
        ]
      }
    }
  }
</script>

<template>
  <nav id="nav" class="nav">
    <div class="nav__logo">
      <AppLogo class="rev" />
    </div>
    <ul class="nav__list">
      <li v-for="link, key in nav" :key="key" class="nav__item">
        <NuxtLink class="nav__link" :to="link.url">
          <PhGauge v-if="link.icon == 'PhGauge'" />
          <PhChartBar v-if="link.icon == 'PhChartBar'" />
          <PhImage v-if="link.icon == 'PhImage'" />
          <PhWrench v-if="link.icon == 'PhWrench'" />
          <PhSignOut v-if="link.icon == 'PhSignOut'" />
          <PhTicket v-if="link.icon == 'PhTicket'" />
          <span class="nav__link__content">
            <span class="nav__link__title">{{ link.title }}</span>
            <span class="nav__link__text font-xs">{{ link.tagline }}</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="nav__version font-xs">
      <div>Coffee Maker v.0.0.2</div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    display: flex;
    flex-flow: column;
    background-color: $clr-secondary;
    height: 100vh;
    min-width: 300px;
  }
  .nav__logo {
    border-bottom: solid 1px rgba($clr-white, 0.15);
    padding: 2rem 1rem;
  }
  .nav__list {
    margin: 0;
    flex: 1;
  }
  .nav__item {
    border-bottom: solid 1px rgba($clr-white, 0.15);
    margin: 0;
  }
  .nav__link {
    @include flex-row;
    align-items: center;
    color: $clr-white;
    padding: 1rem;
    line-height: 1.4;
    transition: background-color 350ms ease-in-out;

    svg {
      font-size: $font-large;
    }

    &:hover {
      background-color: lighten($clr-secondary, 3%);
    }
  }
  .nav__link__content {
    margin-left: 1rem;
  }
  .nav__link__title, .nav__link__text {
    display: block;
  }
  .nav__link__text {
    opacity: 0.5;
  }
  .nav__version {
    color: $clr-white;
    padding: 1rem;
    line-height: 1.6;
    opacity: 0.3;
  }
</style>