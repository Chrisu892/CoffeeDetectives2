<template>
  <footer class="footer">
    <div class="inner">
      <div class="flex-container flex-container--gutter footer__container">
        <div class="footer__col">
          <AppLogo />
          <div class="footer__detail font-xs">
            Freelance web designer, web developer, and data scientist based in the heart of North East.
            Providing bespoke digital solutions to individuals and small-to-medium business that unlock their digital potential and accelerate their growth.
            Get in touch today.
          </div>
          <div class="footer__detail font-xs">
            <a href="mailto:chris.prusakiewicz@gmail.com" title="Send email to Chris" target="_blank">chris.prusakiewicz@gmail.com</a>
          </div>
          <div class="footer__detail font-xs">
            <a href="tel:07446034447" title="Call Chris" target="_blank">+44 (0) 7446 034 447</a>
          </div>
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular"><span>Explore</span></h2>
          <ul class="footer__list">
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/projects/" title="View all projects">Projects</NuxtLink>
            </li>
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/contact/" title="Contact me">Contact</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__col--align-right">
          <h2 class="footer__title font-regular"><span>My Work</span></h2>
          <ul class="footer__list">
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/projects/catherine-cookson-charitable-trust/" title="View project">Catherine Cookson Charitable Trust</NuxtLink>
            </li>
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/projects/fat-hippo/" title="View project">Fat Hippo</NuxtLink>
            </li>
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/projects/haystax/" title="View project">Haystax</NuxtLink>
            </li>
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/projects/bryan-james-recruitment/" title="View project">Bryan James Recruitment</NuxtLink>
            </li>
            <li class="footer__list-item">
              <NuxtLink class="footer__list-link font-xs" to="/projects/" title="View all projects">View All</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright font-xs">
      <div class="inner flex-container">
        <div class="copyright__text">
          &copy; 2023. Read <NuxtLink to="/privacy-policy/" title="Read privacy policy">privacy policy</NuxtLink> and <NuxtLink to="/terms-and-conditions/" title="Read terms and conditions">terms and conditions</NuxtLink>.
        </div>
        <div clas="copyright__text">
          Website created in Nuxt 3 by <a href="https://www.linkedin.com/li/chris-prusakiewicz" title="View Chris's LinkedIn profile" target="_blank" rel="nofollow noopener">Chris Prusakiewicz</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    color: $clr-white;
    padding-top: 5rem;
  }
  .footer__container {
    padding-bottom: 5rem;
  }
  .footer__col {
    flex: 33.333% 0;
    flex: calc(33.333% - 1.34rem) 0;
  }
  .footer__col--align-right {
    text-align: right;
  }
  .footer__title {
    border-bottom: solid 1px $clr-white;
    border-bottom-color: rgba($clr-white, 0.2);
    margin-bottom: 1rem;
  }
  .footer__title span {
    display: inline-block;
    padding-bottom: 1rem;
    position: relative;
  }
  .footer__title span::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: solid 2px $clr-secondary;
  }
  .footer__list-link {
    opacity: 0.8;
  }
  .footer__list-link:hover {
    opacity: 1;
  }
  .footer__detail {
    margin-top: 1rem;
  }

  .copyright {
    border-top: solid 1px $clr-white;
    border-top-color: rgba($clr-white, 0.1);
    padding: 1.2rem 0 0.8rem;
  }
  .copyright__text:nth-child(1) {
    flex: 1 0;
  }
</style>