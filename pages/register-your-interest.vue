<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)

  definePageMeta({
    layout: "default"
  })
</script>

<script lang="ts">
  export default {
    data() {
      return {
        form: {
          fields: [
            {
              id: 'fullName',
              title: 'Full Name',
              type: 'text',
              required: true
            },
            {
              id: 'businessName',
              title: 'Business Name',
              type: 'text',
              required: true
            },
            {
              id: 'emailAddress',
              title: 'Email Address',
              type: 'email',
              required: true
            },
            {
              id: 'agreement',
              title: 'Agreement text...',
              type: 'checkbox',
              required: true
            }
          ],
          action: {
            title: 'Submit',
            icon: 'envelope',
            url: '#'
          }
        }
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AppMasthead title="Register Your Interest" tagline="Let us know that you want to join our community and we will add you to our early access list. We will drop you an email when the registration opens." />

    <AppSection v-if="form" class="padding">
      <form class="form__card">
        <h2 class="form__title font-large">Your details, please...</h2>
        
        <ol v-if="form.fields" class="form__fields">
          <li v-for="field, key in form.fields" class="form__row">
            <FormField v-if="field.type != 'checkbox'" :field="field" />
            <FormCheckbox v-else :field="field" />
          </li>
        </ol>

        <div class="form__action">
          <AppButton btnType="submit" :title="form.action.title" :icon="form.action.icon" class="animate" />
        </div>
      </form>
    </AppSection>
  </main>
</template>