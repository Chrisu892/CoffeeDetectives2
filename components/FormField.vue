<script>
  export default {
    props: {
      field: {
        type: Object,
        required: true
      },
      options: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<template>
  <div class="form-field">
    <label class="form-field__label" :for="field.id">
      {{ field.title }}
      <span v-if="!field.required" class="form-field__optional">Optional</span>
    </label>
    <input v-if="['text', 'email', 'url', 'password', 'date'].includes(field.type)" class="form-field__input" :id="field.id" :type="field.type" :required="field.required" :value="field.default ?? ''" :placeholder="field.placeholder ?? ''" />
    <textarea v-if="field.type == 'textarea'" class="form-field__input" :id="field.id" :required="field.required" :placeholder="field.placeholder ?? ''"></textarea>
    <div v-if="options.length > 0 && field.type == 'multiselect'" class="form-field__multiselect">
      <label v-for="option, key in options" :key="key" class="form-field__multiselect__label" :for="option._id">
        <input class="form-field__multiselect__input" type="checkbox" :id="option._id" /> {{ option.altTitle }}
      </label>
      <input class="form-field__multiselect__other" type="text" :id="`${field.type}_other`" required="false" placeholder="Other, please specify..." />
    </div>
    <select v-if="field.type == 'select'" class="form-field__select" :id="field.id" :required="field.required">
      <option value="" disabled>Please select...</option>
      <option value="" disabled></option>
      <option v-for="option, key in field.options" :key="key" :value="option" :selected="option == field.selected">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
  .form-field {
    margin-top: 1rem;
  }
  .form-field__label {
    display: block;
    margin-bottom: 0.25rem;
  }
  .form-field__optional {
    color: darken($clr-shade, 20%);
    float: right;
  }
  .form-field__input {
    border: solid 1px $clr-shade;
    width: 100%;
    
    &:hover, &:focus {
      border-color: darken($clr-shade, 10%);
    }

    &::placeholder {
      font-style: italic;
    }
  }
  .form-field__multiselect {
    @include flex-grid;
    gap: 0.5rem;
  }
  .form-field__multiselect__label {
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
  .form-field__multiselect__input {
    margin-right: 0.75rem;
  }
  .form-field__multiselect__other {
    border: solid 1px $clr-shade;
    border-radius: $border-radius;
    font: $font-body;
    font-size: $font-regular;
    flex: 33.333% 0;
    flex: calc(33.333% - 0.335rem) 0;
    padding: 0.5rem;
  }
  .form-field__select {
    border: solid 1px $clr-shade;
    padding: 0.75rem;
    font: $font-body;
    font-size: $font-regular;
  }
</style>