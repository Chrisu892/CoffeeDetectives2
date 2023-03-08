<template>
  <footer class="footer">
    <div class="inner">
      <div class="flex-container flex-container--gutter footer__container">
        <div class="footer__col footer__col--first">
          <AppLogo />
          <div class="footer__detail footer__detail--first font-small">
            We are independent reviewers of coffee and coffee shops helping you to find a coffee bean trail to the best coffee shops in the North East.
          </div>
          <div class="footer__detail font-small">
            <PhEnvelope />
            <a href="mailto:hello@coffeebeantrails.co.uk" title="Send email to Coffee Bean Trails" target="_blank">hello@coffeebeantrails.co.uk</a>
          </div>
          <AppSocials />
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular">Explore</h2>
          <ul class="footer__list">
            <li v-for="page, key in pages" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link font-small" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular">Coffee Shops</h2>
          <ul class="footer__list">
            <li v-for="page, key in coffeeShops" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link font-small" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular">Destinations</h2>
          <ul class="footer__list">
            <li v-for="page, key in destinations" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link font-small" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright font-xs">
      <div class="inner flex-container">
        <p class="copyright__text">&copy; Copyright 2023 <a href="" title="" target="" rel="">Coffee Bean Trails</a>.</p>
        <p clas="copyright__text">Read our <NuxtLink to="/privacy-policy/" title="Read privacy policy">privacy policy</NuxtLink> and <NuxtLink to="/terms-and-conditions/" title="Read terms and conditions">terms and conditions</NuxtLink>. Website by <a href="https://www.chrisprusakiewicz.com/" title="Visit Chris Prusakiewicz's website (opens in new tab)" target="_blank">Chris Prusakiewicz</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
  import { PhPhone, PhEnvelope } from 'phosphor-vue'

  export default {
    components: {
      PhPhone, PhEnvelope
    },
    data() {
      return {
        pages: [
          { title: 'Find a Coffee', url: '/coffee-shops/' },
          { title: 'Destinations', url: '/destinations/' },
          { title: 'Blog', url: '/blog/' },
          { title: 'About', url: '/about/' },
          { title: 'Contact', url: '/contact/' }
        ],
        coffeeShops: [
          { title: 'Cafe Nero (Eldon Sq)', url: '/coffee-shops/cafe-nero-eldon-sq/' },
          { title: 'Waterstones (Newcastle)', url: '/coffee-shops/waterstones-newcastle/' },
          { title: 'Luther\'s (Newcastle University)', url: '/coffee-shops/luthers-newcastle-university/' },
          { title: 'Habita (Northumbria University)', url: '/coffee-shops/habita-northumbria-university/' },
          { title: 'Vicolo (Tyneside Cinema)', url: '/coffee-shops/vicolo-tyneside-cinema/' },
          { title: 'View all', url: '/coffee-shops/' }
        ],
        destinations: [
          { title: 'Newcastle upon Tyne', url: '/destinations/newcastle-upon-tyne/' },
          { title: 'Tynemouth', url: '/destinations/tynemouth/' },
          { title: 'Whitley Bay', url: '/destinations/whitley-bay/' },
          { title: 'South Shields', url: '/destinations/south-shields/' },
          { title: 'Gateshead', url: '/destinations/gateshead/' },
          { title: 'View all', url: '/destinations/' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer {
    background-color: $clr-secondary;
    color: $clr-white-transparent-75;
    padding-top: 5rem;
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

    span::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      border-bottom: solid 2px $clr-secondary;
    }
  }
  .footer__list-link {
    color: $clr-white;
    text-decoration-color: $clr-white-transparent-20;

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
      text-decoration-color: $clr-white-transparent-20;

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
      text-decoration-color: $clr-white-transparent-20;

      &:hover {
        text-decoration-color: $clr-white;
      }
    }
  }
  .copyright__text:nth-child(1) {
    flex: 1 0;
  }
</style>