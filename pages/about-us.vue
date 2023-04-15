<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
</script>

<template>
  <main id="main" class="main">
    <AppMasthead :title="page.title" :tagline="page.tagline" />

    <AppSection class="padding">
      <div class="section__container">
        <div class="section__main">
          <ContentDoc />
        </div>
        <div class="section__aside">
          <AppTOC :page="page" />
        </div>
      </div>
    </AppSection>

    <AppCTA />
  </main>
</template>

<style scoped lang="scss">
  .section__container {
    @include flex-row;
    gap: 2.5rem;
  }
  .section__main {
    flex: 1 0;
  }
  .section__aside {
    border-left: solid 1px $clr-shade;
    flex: 1 0;
    max-width: 320px;
  }
</style>