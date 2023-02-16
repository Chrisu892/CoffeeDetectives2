<template>
  <footer class="footer">
    <div class="inner">
      <div class="flex-container flex-container--gutter footer__container">
        <div class="footer__col footer__col--first">
          <AppLogo />
          <div class="footer__detail footer__detail--first font-small">
            Reach your potential and accelerate your growth with a bespoke, data-driven digital solutions. I'm based in Gateshead but I work with clients in the North East, United Kingdom, and Europe.
          </div>
          <div class="footer__detail font-small">
            <PhEnvelope />
            <a href="mailto:chris.prusakiewicz@gmail.com" title="Send email to Chris" target="_blank">chris.prusakiewicz@gmail.com</a>
          </div>
          <div class="footer__detail font-small">
            <PhPhone />
            <a href="tel:07446034447" title="Call Chris" target="_blank">+44 (0) 7446 034 447</a>
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
          <h2 class="footer__title font-regular">What I Do</h2>
          <ul class="footer__list">
            <li v-for="page, key in services" :key="key" class="footer__list-item">
              <NuxtLink class="footer__list-link font-small" :to="page.url" :title="`Go to ${page.title} page`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright font-xs">
      <div class="inner flex-container">
        <div class="copyright__text">
          &copy; Copyright 2023 <a href="" title="" target="" rel="">Chris Prusakiewicz</a>
        </div>
        <div clas="copyright__text">
          Read <NuxtLink to="/privacy-policy/" title="Read privacy policy">privacy policy</NuxtLink> and <NuxtLink to="/terms-and-conditions/" title="Read terms and conditions">terms and conditions</NuxtLink>
        </div>
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
          { title: 'What I Do', url: '/services/' },
          { title: 'My Work', url: '/projects/' },
          { title: 'Contact', url: '/contact/' }
        ],
        services: [
          { title: 'Mobile & Web Design', url: '/services/mobile-and-web-design/' },
          { title: 'Web Development', url: '/services/web-development' },
          { title: 'Search Engine Optimisation', url: '/services/search-engine-optimisation' },
          { title: 'Data Analytics', url: '/services/data-analytics/' },
          { title: 'Training & Consulting', url: '/services/training-and-consulting/' },
          { title: 'CV & Conver Letters', url: '/services/cv-and-cover-letters/' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer {
    background: linear-gradient(180deg, $clr-primary 0%, $clr-primary-dark 100%);
    color: $clr-white;
    padding-top: 5rem;
  }
  .footer__container {
    padding-bottom: 5rem;
  }
  .footer__col {
    flex: 30% 0;
    flex: calc(30% - 1rem) 0;

    &--align-right {
      text-align: right;
    }

    &--first {
      flex: 40% 0;
      flex: calc(40% - 2rem) 0;
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
    opacity: 0.8;

    &:hover {
      opacity: 1;
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
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    svg {
      color: $clr-secondary;
      display: inline-block;
      height: 24px;
      margin-right: 10px;
      width: 24px;
    }
  }

  .copyright {
    border-top: solid 1px $clr-white;
    border-top-color: rgba($clr-white, 0.1);
    padding: 1.2rem 0 0.8rem;

    a {
      color: $clr-white;
    }
  }
  .copyright__text:nth-child(1) {
    flex: 1 0;
  }
</style>