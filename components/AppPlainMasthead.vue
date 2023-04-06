<template>
  <section v-if="crumbs.length > 0" class="plain-masthead">
    <div class="plain-masthead__breadcrumb">
      <div class="inner">
        <AppBreadcrumb v-if="crumbs.length > 0" :crumbs="crumbs" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      showTitle: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      crumbs() {
        const fullPath = this.$route.path
        const params = fullPath.substring(1).split('/')
        const crumbs = [];
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

<style scoped lang="scss">
  .plain-masthead__breadcrumb {
    background-color: $clr-shade;
    padding: 0.5rem 0;
  }
  .plain-masthead__text {
    padding-top: 1rem;
  }
</style>