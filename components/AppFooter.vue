<script>
  import { PhPhone, PhEnvelope } from 'phosphor-vue'

  export default {
    components: {
      PhPhone, PhEnvelope
    },
    data() {
      return {
        pages: [
          { title: 'Become a Detective', url: '/become-a-detective' },
          { title: 'Get Listed', url: '/get-listed' },
          { title: 'Your Account', url: '/account' },
          { title: 'Contact', url: '/contact' },
          { title: 'About', url: '/about-us' },
          { title: 'Blog', url: '/blog' }
        ],
        cafes: [
          { title: 'Flat Caps Café', url: '/cafes/flat-caps-cafe' },
          { title: 'Waterstones Café', url: '/cafes/waterstones-cafe' },
          { title: 'Luther\'s NSU Bar', url: '/cafes/luthers' },
          { title: 'Vicolo', url: '/cafes/vicolo' },
          { title: 'View all', url: '/cafes/' }
        ],
        destinations: [
          { title: 'Newcastle upon Tyne', url: '/locations/newcastle-upon-tyne' },
          { title: 'Tynemouth', url: '/locations/tynemouth' },
          { title: 'Whitley Bay', url: '/locations/whitley-bay' },
          { title: 'South Shields', url: '/locations/south-shields' },
          { title: 'Gateshead', url: '/locations/gateshead' },
          { title: 'View all', url: '/locations' }
        ],
        settings: {
          site_name: 'Coffee Detectives',
          site_email: 'hello@coffeedetectives.co.uk'
        }
      }
    }
  }
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <div class="flex-container flex-container--gutter footer__container">
        <div class="footer__col footer__col--first">
          <AppLogo />
          <div class="footer__detail footer__detail--first">
            We are independent reviewers of cafes, helping the citizens of Tyne and Wear find a place for a coffee break and help local businesses connect with their customers.
          </div>
          <div class="footer__detail">
            <PhEnvelope />
            <a :href="`mailto:${settings.site_email}`" :title="`Send email to ${settings.site_name}`" target="_blank">{{ settings.site_email }}</a>
          </div>
          <AppSocials />
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular">Explore</h2>
          <ul class="footer__list">
            <li v-for="page, key in pages" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular">New Cafés</h2>
          <ul class="footer__list">
            <li v-for="page, key in cafes" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular">Popular Locations</h2>
          <ul class="footer__list">
            <li v-for="page, key in destinations" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="inner flex-container">
        <p class="copyright__text font-small">&copy; 2023 <NuxtLink to="/" title="Go to Homepage">{{ settings.site_name }}</NuxtLink>. Read our <NuxtLink to="/privacy-policy/" title="Read privacy policy">privacy policy</NuxtLink> and <NuxtLink to="/terms-and-conditions/" title="Read terms and conditions">terms and conditions</NuxtLink></p>
        <p class="copyright__text font-small">Challenging the status quo of monopoly chains since 2023</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    background-color: $clr-primary;
    color: $clr-white;
    color: rgba($clr-white, 0.5);
    padding-top: 5rem;
    position: relative;
    z-index: 1;
  }
  .footer__container {
    padding-bottom: 5rem;
  }
  .footer__col {
    flex: 25% 0;
    flex: calc(25% - 1.5rem) 0;

    &--align-right {
      text-align: right;
    }
  }
  .footer__title {
    margin-bottom: 1.5rem;
    letter-spacing: 1px;

    span::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      border-bottom: solid 2px $clr-secondary;
    }
  }
  .footer__list-item {
    padding: 0;
  }
  .footer__list-link {
    color: $clr-white;
    text-decoration-color: $clr-white;

    &:hover {
      text-decoration-color: $clr-white;
    }
  }
  .footer__detail {
    align-items: center;
    display: inline-flex;
    margin-top: 1rem;

    &--first {
      margin-top: 1.5rem;
    }

    a {
      color: $clr-white;
      text-decoration-color: $clr-white;

      &:hover {
        text-decoration-color: $clr-white;
      }
    }

    svg {
      color: $clr-primary;
      display: inline-block;
      height: 24px;
      margin-right: 10px;
      width: 24px;
    }
  }

  .copyright {
    border-top: solid 1px $clr-white;
    border-top-color: rgba($clr-white, 0.1);
    padding: 1.2rem 0;

    a {
      color: $clr-white;
      text-decoration-color: $clr-white;

      &:hover {
        text-decoration-color: $clr-white;
      }
    }
  }
  .copyright__text {
    margin: 0;

    &:nth-child(1) {
      flex: 1 0;
    }
  }
</style>