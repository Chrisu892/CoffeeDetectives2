<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
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
    background: linear-gradient(180deg, $clr-shade 0%, $clr-white 100%);
    padding: 7.25rem 0 calc(5rem - 24px);
  }
  .plain-masthead__content {
    background-color: $clr-white;
    border-radius: $border-radius;
    padding: 12rem 3rem 3rem 3rem;
  }
  .plain-masthead__title {
    margin: 0;
  }
  .plain-masthead__tagline {
    margin: 1.5rem 0 0 0;
  }
</style>