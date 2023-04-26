<template>
  <div class="form">
    <AppStepper :steps="steps" />

    <AppSection v-for="step, key in steps" :key="key" :id="step.id" class="narrow padding-top" :class="{ 'padding-bottom': (key + 1) == steps.length }">
      <div class="form__card">
        <h2 class="form__title font-large">{{ step.title }}</h2>
        <p v-if="step.content" class="form__text font-regular">{{ step.content }}</p>

        <ol v-if="step.fields" class="form__fields">
          <li v-for="field, key in step.fields" :key="key" class="form__row">
            <FormField v-if="field.type !== 'multiselect'" :field="field" />
            <FormField v-else :field="field" :options="amenities" />
          </li>
        </ol>

        <div class="form__action">
          <AppButton v-if="(key + 1) < steps.length" :to="step.action.url" :title="`${step.action.title}: ${steps[key + 1].title}`" :icon="step.action.icon" class="animate" />
          <AppButton v-else :to="step.action.url" :title="step.action.title" :icon="step.action.icon" class="animate" />
        </div>
      </div>
    </AppSection>
  </div>
</template>

<script>
  export default {
    props: {
      steps: {
        type: Array,
        default: () => []
      },
      amenities: {
        type: Array,
        default: () => []
      }
    }
  }
</script>