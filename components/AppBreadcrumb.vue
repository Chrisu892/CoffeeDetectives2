<template>
  <ul
    v-if="crumbs"
    class="reset--list breadcrumb"
    itemscope
    itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(crumb, idx) in crumbs"
        :key="idx"
        class="breadcrumb__item"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem">
        <NuxtLink v-if="idx + 1 < crumbs.length"
          :to="crumb.path"
          :title="crumb.title"
          itemprop="item"
          :content="crumb.path"
          class="breadcrumb__link font-small">
          <span itemprop="name">{{ crumb.title }}</span>
        </NuxtLink>
        <div v-else class="breadcrumb__link font-small">{{ crumb.title }}</div>
        <PhCaretRight v-if="idx + 1 < crumbs.length" />
        <meta itemprop="position" content="1" />
      </li>
  </ul>
</template>

<script>
  import { PhCaretRight } from 'phosphor-vue'

  export default {
    components: {
      PhCaretRight
    },
    props: {
      crumbs: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .breadcrumb {
    @include flex-row;
    margin-bottom: 0;
  }
  .breadcrumb__item {
    margin: 0;
    padding: 0 3rem 0 0;
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
    }
  }
  .breadcrumb__item:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 4px;
    height: 4px;
    background-color: var(--clr-white);
    transform: translateY(-50%);
  }
  .breadcrumb__link {
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .breadcrumb__title {
    font: $font-body;
  }
</style>