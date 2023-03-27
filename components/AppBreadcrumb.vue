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
          class="breadcrumb__link">
          <span itemprop="name">{{ crumb.title }}</span>
        </NuxtLink>
        <div v-else class="breadcrumb__link">
          {{ crumb.title }}
        </div>
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
    computed: {
      crumbs() {
        const fullPath = this.$route.fullPath
        const params = fullPath.substring(1).split('/')
        const crumbs = [];

        let path = ''

        params.forEach((param, idx) => {
          if (param != '') {
            path = `${path}/${param}`

            let pageTitle = param.replace(/-/g, ' ')

            crumbs.push({
              title: pageTitle,
              path: path + '/'
            })
          }
        })

        return crumbs
      }
    }
  }
</script>

<style scoped lang="scss">
  .breadcrumb {
    display: flex;
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
    font-size: 0.8em;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
</style>