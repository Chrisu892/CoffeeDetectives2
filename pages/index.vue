
import AppButton from '../components/AppButton.vue';

<template>
  <div>
    <AppHero />
    <AppIntro />

    <section class="section section--shade">
      <div class="inner inner--narrow">
        <div class="feature feature--margin feature--center">
          <h2 class="feature__title">My Work</h2>
          <div class="feature__text">I am passionate about writing code and creating digital products. That's why I am committed to delivering projects that often exceed clients' expectations. But don't take my word for it and check out my portfolio.</div>
        </div>
      </div>
      <div class="inner">
        <div class="flex-container flex-container--gutter">
          <AppProject v-for="project, key in projects" :key="key" :project="project" />
        </div>
        <div class="page-action page-action--center">
          <AppButton to="/projects/" title="Wait, there is more" />
        </div>
      </div>
    </section>

    <AppCTA />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          { title: 'Catherine Cookson Charitable Trust', summary: 'Responsive website and content management system for Catherine Cookson Charitable Trust.', url: '/projects/catherine-cookson-charitable-trust/', images: { header: '/images/projects/catherine-cookson-charitable-trust/header.jpg', desktopPreview: '/images/projects/catherine-cookson-charitable-trust/screenshot-desktop.jpg', mobilePreview: '/images/projects/catherine-cookson-charitable-trust/screenshot-mobile.jpg' }, brandColour: '#3a0ca3' },
          { title: 'Fat Hippo', summary: 'Website redevelopment and search engine optimasation for burger restaurant chain.', url: '/projects/fat-hippo/', images: { header: '/images/projects/fat-hippo/header.jpg', desktopPreview: '/images/projects/fat-hippo/screenshot-desktop.jpg', mobilePreview: '/images/projects/fat-hippo/screenshot-mobile.jpg' }, brandColour: '#000' },
          { title: 'Haystax', summary: 'Web design and development for inclusive farm experience.', url: '/projects/haystax/', images: { header: '/images/projects/haystax/header.jpg', desktopPreview: '/images/projects/haystax/screenshot-desktop.jpg', mobilePreview: '/images/projects/haystax/screenshot-mobile.jpg' }, brandColour: '#56345c' },
          { title: 'Bryan James Recruitment', summary: 'Web design and development for a financial headhunter.', url: 'https://www.bryanjamesrecruitment.co.uk/', images: { header: '/images/projects/bryan-james-recruitment/header.jpg', desktopPreview: '/images/projects/bryan-james-recruitment/screenshot-desktop.jpg', mobilePreview: '/images/projects/bryan-james-recruitment/screenshot-mobile.jpg' }, brandColour: '#9d302a' },
          { title: 'Ginny D', summary: 'E-commerce website for a bespoke jewellery designer.', url: 'https://www.ginnyd.co.uk/', images: { header: '/images/projects/ginny-d/header.jpg', desktopPreview: '/images/projects/ginny-d/screenshot-desktop.jpg', mobilePreview: '/images/projects/ginny-d/screenshot-mobile.jpg' }, brandColour: '#ff0099' }
        ]
      }
    }
  }
</script>