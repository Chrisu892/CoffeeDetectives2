<template>
  <div class="form">
    <AppStepper :steps="steps" />

    <AppSection v-for="step, key in steps" :key="key" class="narrow padding-top" :class="{ 'padding-bottom': (key + 1) == steps.length }">
      <div class="form__card">
        <h2 class="form__title font-large">{{ step.title }}</h2>
        <p v-if="step.content" class="form__text font-regular">{{ step.content }}</p>

        <ol v-if="step.fields" class="form__fields">
          <li v-for="field, key in step.fields" :key="key" class="form__row">
            <div class="form__field">
              <label class="form__field__label" :for="field.id">{{ field.title }}<span v-if="!field.required" class="form__field__optional">Optional</span></label>
              <input v-if="['text', 'email', 'url', 'password'].includes(field.type)" class="form__field__input" :id="field.id" :type="field.type" :required="field.required" :value="field.default ?? ''" :placeholder="field.placeholder ?? ''" />
              <textarea v-if="field.type == 'textarea'" class="form__field__input" :id="field.id" :required="field.required" :placeholder="field.placeholder ?? ''"></textarea>
              <div v-if="field.type == 'multiselect'" class="form__multiselect">
                <label v-for="option, key in field.options" :key="key" class="form__multiselect__label" :for="option._id">
                  <input class="form__multiselect__input" type="checkbox" :id="option._id" /> {{ option.altTitle }}
                </label>
                <input class="form__multiselect__other" :id="`${field.type}_other`" required="false" placeholder="Other, please specify..." />
              </div>
            </div>
          </li>
        </ol>

        <div class="form__action">
          <AppButton v-if="key + 1 < steps.length" btnType="button" :title="`${step.action.title}: ${steps[key + 1].title}`" :icon="step.action.icon" />
          <AppButton v-else btnType="button" :title="step.action.title" :icon="step.action.icon" />
        </div>
      </div>
    </AppSection>
  </div>
</template>

<script lang="ts">
  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).find()

  export default {
    data() {
      return {
        steps: [
          { 
            title: 'Account Information',
            content: 'To start using our platform as a business owner, please create an account using your company email address. This will become your unique username, as well as the main point of contact for any communication from us.',
            fields: [
              { title: 'Email Address', type: 'email', id: 'email', required: true },
              { title: 'Password', type: 'password', id: 'password', required: true },
              { title: 'Confirm Password', type: 'password', id: 'password', required: true }
            ],
            action: {
              title: 'Next',
              icon: 'next'
            }
          },
          { 
            title: 'Café Details',
            content: 'We need to collect details about your café to make sure that we show the correct information to coffee lovers on our platform. If you business is mobile (i.e., truck, van, bike), please provide company registration address. Once you create an account, you will be able to update your information in the administration area.',
            fields: [
              { title: 'Café Name', type: 'text', id: 'cafeName', required: true },
              { title: "Owner's Name", type: 'text', id: 'ownerName', required: true, placeholder: 'e.g., Mx Coffee Lover' },
              { title: 'Phone Number', type: 'text', id: 'phoneNumber', required: true },
              { title: 'Address', type: 'text', id: 'address', required: true },
              { title: 'Wesbite', type: 'url', id: 'website', required: false, placeholder: 'e.g., https://www...' },
              { title: 'Social Media', type: 'url', id: 'socialMedia', required: false, placeholder: 'e.g., https://www...' }
            ],
            action: {
              title: 'Next',
              icon: 'next'
            }
          },
          {
            title: 'Business Information',
            content: 'To list your café on our platform, we need information about your business. Please tell us your business hours, write a brief description of your business and choose available amenities from the list. Once you create your account, you will be able to add more information in the administration area.',
            fields: [
              { title: 'Business Hours', type: 'text', id: 'businessHours', required: true },
              { title: 'About the Business', type: 'textarea', id: 'aboutBusiness', required: true, placeholder: 'A brief description...' },
              { title: 'Amenities', type: 'multiselect', id: 'amenities', required: true, options: amenities }
            ],
            action: {
              title: 'Next',
              icon: 'next'
            }
          },
          { 
            title: 'Review & Confirm',
            content: 'Check if the information provided are correct, sign and submit your application. We aim to process all applications within 3 days, but some applications can be processed sooner. Please get in touch if you have any questions about your application.',
            fields: [
              { title: 'I confirm that the above information is correct', type: 'text', id: 'signature', required: true, placeholder: 'Type your name here...' }
            ],
            action: {
              title: 'Submit',
              icon: 'confirm'
            }
          }
        ]
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
    flex: 33.333% 0;
    flex: calc(33.333% - 0.335rem) 0;
    padding: 0.5rem;
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