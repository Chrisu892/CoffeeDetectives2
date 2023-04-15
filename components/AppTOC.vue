<script setup lang="ts">
  const { toc } = useContent()
</script>

<template>
  <div class="toc">
    <h3 class="toc__title font-medium">Jump to</h3>
    <ul v-if="toc && toc.links" class="toc__list">
      <li v-for="link in toc.links" :key="link.text" class="toc__item">
        <div class="toc__link">
          <a :href="`#${link.id}`" title="">{{ link.text }}</a>
        </div>
        <ul v-if="link.children" class="toc__list">
          <li v-for="child in link.children" :key="child.text" class="toc__item">
            <div class="toc__link">
              <a :href="`#${child.id}`" title="">{{ child.text }}</a>
            </div>
            <ul v-if="child.children" class="toc__list">
              <li v-for="child2 in child.children" :key="child2.text" class="toc__item">
                <div class="toc__link">
                  <a :href="`#${child2.id}`" title="">{{ child2.text }}</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .toc {
    padding-left: 2.5rem;
    position: sticky;
    top: 2rem;

    &::before {
      content: '';
      position: absolute;
      left: -2px;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: $clr-primary;
      border-radius: $border-radius;
    }
  }
  .toc__list {
    margin: 0;
  }
  .toc__item {
    padding-left: 1em;
    position: relative;
    margin-bottom: 0.75em;

    svg {
      position: absolute;
      left: 0;
      top: 4px;
      height: 14px;
      width: 14px;
    }
  }
  .toc__link {
    display: block;
    line-height: 1.4;
    margin-bottom: 0.75em;
  }
</style>