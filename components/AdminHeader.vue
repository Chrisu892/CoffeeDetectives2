<script>
  import { PhGauge, PhChartBar, PhImage, PhTicket, PhWrench } from 'phosphor-vue'

  export default {
    components: {
      PhGauge, PhChartBar, PhImage, PhTicket, PhWrench
    },
    props: {
      title: {
        type: String,
        default: null
      },
      create: {
        type: Object,
        default: null
      },
      icon: {
        type: String,
        default: null
      }
    }
  }
</script>

<template>
  <header class="header">
    <PhGauge v-if="icon === 'PhGauge'" />
    <PhChartBar v-if="icon == 'PhChartBar'" />
    <PhImage v-if="icon === 'PhImage'" />
    <PhTicket v-if="icon === 'PhTicket'" />
    <PhWrench v-if="icon === 'PhWrench'" />
    <h1 v-if="title" class="header__title font-xl">{{ title }}</h1>
    <div v-if="create" class="header__actions">
      <AppButton btnType="link" :to="create.url" :title="create.title" />
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    @include flex-row;
    align-items: center;
    background-color: $clr-white;
    border-bottom: solid 1px $clr-shade;
    left: 0;
    padding: 1rem 1.25rem;
    position: sticky;
    top: 0;

    svg {
      color: $clr-primary;
      display: inline-block;
      height: 44px;
      margin-right: 0.5rem;
      width: 44px;
    }
  }
  .header__title {
    flex: 1 0;
    margin: 0;
  }
</style>