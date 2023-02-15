
import AppButton from '../components/AppButton.vue';

<template>
  <div>
    <AppHero />

    <section class="section">
      <div class="inner">
        <div class="feature">
          <h2 class="feature__title">What I Do</h2>
          <div class="feature__text">My mission is to create inclusive and accessible website for everyone. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ipsam, ad facere voluptatibus vitae nobis maiores. Mollitia quisquam nam eveniet rerum ab impedit? Inventore molestiae consectetur tempora. Sunt dolores itaque deserunt placeat consequatur asperiores id? Commodi nesciunt blanditiis ullam unde vel aliquam suscipit, sed consectetur repellendus possimus, eum obcaecati accusantium omnis sit labore corrupti tempore rerum exercitationem, dolore nostrum deleniti asperiores quam. Quas voluptatem architecto blanditiis quaerat aliquid eum expedita voluptate veniam ad illum? Porro ad cumque iure repellendus? Debitis?</div>
          <div class="feature__signature">Chris Prusakiewicz</div>
        </div>
      </div>
    </section>

    <section class="section section--shade">
      <div class="inner">
        <div class="feature feature--margin feature--center">
          <h2 class="feature__title">My Work</h2>
          <div class="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quia.</div>
        </div>

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
          { title: 'Catherine Cookson Charitable Trust', url: '/projects/catherine-cookson-charitable-trust/', images: { header: '/images/projects/catherine-cookson-charitable-trust/header.jpg', desktopPreview: '/images/projects/catherine-cookson-charitable-trust/screenshot-desktop.jpg', mobilePreview: '/images/projects/catherine-cookson-charitable-trust/screenshot-mobile.jpg' }, brandColour: '#3a0ca3' },
          { title: 'Fat Hippo', url: '/projects/fat-hippo/', images: { header: '/images/projects/fat-hippo/header.jpg', desktopPreview: '/images/projects/fat-hippo/screenshot-desktop.jpg', mobilePreview: '/images/projects/fat-hippo/screenshot-mobile.jpg' }, brandColour: '#000' },
          { title: 'Haystax', url: '/projects/haystax/', images: { header: '/images/projects/haystax/header.jpg', desktopPreview: '/images/projects/haystax/screenshot-desktop.jpg', mobilePreview: '/images/projects/haystax/screenshot-mobile.jpg' }, brandColour: '#56345c' },
          { title: 'Bryan James Recruitment', url: '/projects/bryan-james-recruitment/', images: { header: '/images/projects/bryan-james-recruitment/header.jpg', desktopPreview: '/images/projects/bryan-james-recruitment/screenshot-desktop.jpg', mobilePreview: '/images/projects/bryan-james-recruitment/screenshot-mobile.jpg' }, brandColour: '#9d302a' },
          { title: 'Ginny D', url: '/projects/ginny-d/', images: { header: '/images/projects/ginny-d/header.jpg', desktopPreview: '/images/projects/ginny-d/screenshot-desktop.jpg', mobilePreview: '/images/projects/ginny-d/screenshot-mobile.jpg' }, brandColour: '#ff0099' }
        ]
      }
    }
  }
</script>