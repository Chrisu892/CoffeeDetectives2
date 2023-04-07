<template>
  <div class="form">
    <AppStepper :steps="steps" />

    <AppSection v-for="step, key in steps" :key="key" :id="step.id" class="narrow padding-top" :class="{ 'padding-bottom': (key + 1) == steps.length }">
      <div class="form__card">
        <h2 class="form__title font-large">{{ step.title }}</h2>
        <p v-if="step.content" class="form__text font-regular">{{ step.content }}</p>

        <ol v-if="step.fields" class="form__fields">
          <li v-for="field, key in step.fields" :key="key" class="form__row">
            <div class="form__field">
              <label class="form__field__label" :for="field.id">{{ field.title }}<span v-if="!field.required" class="form__field__optional">Optional</span></label>
              <input v-if="['text', 'email', 'url', 'password'].includes(field.type)" class="form__field__input" :id="field.id" :type="field.type" :required="field.required" :value="field.default ?? ''" :placeholder="field.placeholder ?? ''" />
              <textarea v-if="field.type == 'textarea'" class="form__field__input" :id="field.id" :required="field.required" :placeholder="field.placeholder ?? ''"></textarea>
              <div v-if="amenities.length > 0 && field.type == 'multiselect'" class="form__multiselect">
                <label v-for="option, key in amenities" :key="key" class="form__multiselect__label" :for="option._id">
                  <input class="form__multiselect__input" type="checkbox" :id="option._id" /> {{ option.altTitle }}
                </label>
                <input class="form__multiselect__other" :id="`${field.type}_other`" required="false" placeholder="Other, please specify..." />
              </div>
            </div>
          </li>
        </ol>

        <div class="form__action">
          <AppButton v-if="(key + 1) < steps.length" :to="step.action.url" :title="`${step.action.title}: ${steps[key + 1].title}`" :icon="step.action.icon" />
          <AppButton v-else :to="step.action.url" :title="step.action.title" :icon="step.action.icon" />
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

<style scoped lang="scss">
  .form__card {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    padding: 2rem;
  }
  .form__text {
    margin-top: 1rem;
  }
  .form__fields {
    margin-top: 2rem;
  }
  .form__field {
    margin-top: 1rem;
  }
  .form__field__label {
    display: block;
    margin-bottom: 0.25rem;
  }
  .form__field__optional {
    color: darken($clr-shade, 20%);
    float: right;
  }
  .form__field__input {
    border: solid 1px $clr-shade;
    width: 100%;

    &::placeholder {
      font-style: italic;
    }
  }
  .form__multiselect {
    @include flex-grid;
    gap: 0.5rem;
  }
  .form__multiselect__label {
    @include flex-row;
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    cursor: pointer;
    flex: 33.333% 0;
    flex: calc(33.333% - 0.335rem) 0;
    padding: 0.5rem;

    &:hover {
      border-color: darken($clr-shade, 10%);
    }
  }
  .form__multiselect__input {
    margin-right: 0.75rem;
  }
  .form__multiselect__other {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    flex: 33.333% 0;
    flex: calc(33.333% - 0.335rem) 0;
    padding: 0.5rem;
    font: $font-body;
    font-size: $font-regular;
  }
  .form__action {
    margin-top: 2rem;
  }
</style>