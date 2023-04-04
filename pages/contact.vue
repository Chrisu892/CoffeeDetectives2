<template>
  <main id="main">
    <AppMasthead title="Contact Us" tagline="Do you have questions? Do you want to find our more about us? Don't hesitate to contact us!" />
    
    <section class="section section--padding">
      <div class="inner">
        <div class="page-content">
          <p>What do we need for this page?</p>
          <ul>
            <li>Some blurb with why to contact us and how.</li>
            <li>Contact information, i.e., email address only!</li>
            <li>No forms and phone numbers to avoid excessive spam.</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  const { page } = useContent()

  useContentHead(page)
</script>