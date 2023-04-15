<script>
  import { PhCaretDown } from 'phosphor-vue';

  export default {
    components: {
      PhCaretDown
    },
    data() {
      return {
        pages: {
          primary: [{
            title: 'Cafes',
            altTitle: 'Cafes',
            url: '/cafes/',
            columnCount: 2,
            children: [
              { title: 'Cafes with Free Wi-Fi', url: '/amenities/cafes-with-free-wifi/' },
              { title: 'Cafes with Outdoor Sitting', url: '/amenities/cafes-with-outdoor-sitting/' },
              { title: 'Cafes with Power Outlets', url: '/amenities/cafes-with-power-outlets/' },
              { title: 'Cafes with Restrooms', url: '/amenities/cafes-with-restrooms/' },
              { title: 'Cafes with Books & Magazines', url: '/amenities/cafes-with-books-magazines' },
              { title: 'Cafes with Live Music', url: '/amenities/cafes-with-live-music/' },
              { title: 'Cafes with Loyalty Programs', url: '/amenities/cafes-with-loyalty-programs/' }
            ]
          },{ 
            title: 'Locations',
            altTitle: 'Locations',
            url: '/locations/',
            columnCount: 3,
            children: [
              { title: 'Newcastle upon Tyne', url: '/locations/newcastle-upon-tyne/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Gateshead', url: '/locations/gateshead', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Sunderland', url: '/locations/sunderland/', images: { thumbnail: '/images/locations/fallback.jpeg'} },
              { title: 'Tynemouth', url: '/locations/tynemouth/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'South Shields', url: '/locations/south-shields/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Whitley Bay', url: '/locations/whitley-bay/', images: { thumbnail: '/images/locations/whitley-bay-promenade-in-england-north-east.jpeg' } },
              { title: 'North Shields', url: '/locations/north-shields/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Gosforth', url: '/locations/gosforth/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Newburn', url: '/locations/newburn/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Longbenton', url: '/locations/seaton-valley/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Boldon', url: '/locations/boldon/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Hebburn', url: '/locations/hebburn/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Felling', url: '/locations/felling/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Whickham', url: '/locations/whickham/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Blydon', url: '/locations/blydon/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Ryton', url: '/locations/ryton/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Washington', url: '/locations/washington/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Haughton-le-Spring', url: '/locations/haughton-le-spring/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Hetton', url: '/locations/hetton/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Castle Ward', url: '/locations/castle-ward', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Chester-le-Street', url: '/locations/chester-le-street', images: { thumbnail: '/images/locations/fallback.jpeg' } },
              { title: 'Easington', url: '/locations/easington/', images: { thumbnail: '/images/locations/fallback.jpeg' } },
            ]
          }, {
            title: 'Blog',
            altTitle: 'Blog', 
            url: '/blog/',
            columnCount: 1
          },{ 
            title: 'About Us', 
            altTitle: 'About Us', 
            url: '/about-us/',
            columnCount: 1
          }],
          secondary: [{
            title: 'Nominate',
            altTitle: 'Nominate',
            url: '/nominate/',
            columnCount: 1,
            status: 'draft'
          }, {
            title: 'Get Listed',
            altTitle: 'Get Listed',
            url: '/get-listed/',
            columnCount: 1,
            status: 'live'
          }]
        }
      }
    },
    props: {
      nav: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      isHome() {
        return this.$route.path === '/'
      }
    }
  }
</script>

<template>
  <div>
    <AppNavToggle />

    <nav class="nav" :class="{ 'home': isHome }">
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
          <NuxtLink class="nav__link font-regular" to="/get-listed">Get Listed</NuxtLink>
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
    padding-left: 0;
    position: relative;

    &::before {
      display: none;
    }
  }
  .nav__link {
    color: $clr-text;
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
  .nav.home .nav__link {
    color: $clr-white;
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
      background-color: $clr-secondary;
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
    background-color: $clr-secondary;
    border-radius: $border-radius;
    column-count: 2;
    column-gap: 2rem;
    min-width: 660px;
    padding: 1rem 1.5rem;
  }
  .nav__group__item {
    margin: 0;
  }
  .nav__group__link {
    color: $clr-white;
  }
</style>