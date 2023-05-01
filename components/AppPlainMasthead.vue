<script lang="ts">
  export default {
    props: {
      title: {
        type: String,
        default: null
      },
      tagline: {
        type: String,
        default: null
      }
    },
    computed: {
      crumbs() {
        const fullPath = this.$route.path
        const params = fullPath.substring(1).split('/')
        const crumbs: Array<any> = [];
        let path = ''

        params.forEach((param, _) => {
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


<template>
  <section class="plain-masthead">
    <div class="inner">
      <div class="plain-masthead__content">
        <h1 v-if="title" class="plain-masthead__title font-xl">{{ title }}</h1>
        <p v-if="tagline" class="plain-masthead__tagline font-medium">{{ tagline }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .plain-masthead {
    background-color: $clr-secondary;
    padding: calc(80px + 5rem) 0 5rem;
    text-align: center;
  }
</style>