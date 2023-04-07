<script>
  import { PhGauge, PhChartBar, PhWrench, PhSignOut } from 'phosphor-vue'

  export default {
    components: {
      PhGauge, PhChartBar, PhWrench, PhSignOut
    }
  }
</script>

<template>
  <nav id="nav" class="nav">
    <div class="nav__logo">
      <AppLogo class="rev" />
    </div>
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink class="nav__link" to="/account">
          <PhGauge />
          <span class="nav__link__content">
            <span class="nav__link__title">Dashboard</span>
            <span class="nav__link__text font-xs">The overview of your cafe</span>
          </span>
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" to="/account/analytics">
          <PhChartBar />
          <span class="nav__link__content">
            <span class="nav__link__title">Analytics</span>
            <span class="nav__link__text font-xs">Track the performance of your cafe</span>
          </span>
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" to="/account/settings">
          <PhWrench />
          <span class="nav__link__content">
            <span class="nav__link__title">Settings</span>
            <span class="nav__link__text font-xs">Update account or cafe details</span>
          </span>
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink class="nav__link" to="/sign-out">
          <PhSignOut />
          <span class="nav__link__content">
            <span class="nav__link__title">Sign Out</span>
            <span class="nav__link__text font-xs">Securely sign out from your account</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="nav__version font-xs">
      <div>Version 0.0.1</div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    display: flex;
    flex-flow: column;
    background-color: $clr-dark;
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
      background-color: lighten($clr-dark, 3%);
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