<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
  const amenities = await queryContent('amenities').where({ type: { $eq: 'amenity' } }).find()
</script>

<template>
  <main id="main" class="main">
    <ApplicationForm :steps="steps" :amenities="amenities" />
  </main>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        steps: [
          { 
            id: 'account-information',
            title: 'Account Information',
            content: 'To start using our platform as a business owner, please create an account using your company email address. This will become your unique username, as well as the main point of contact for any communication from us.',
            fields: [
              { title: 'Email Address', type: 'email', id: 'email', required: true },
              { title: 'Password', type: 'password', id: 'password', required: true },
              { title: 'Confirm Password', type: 'password', id: 'password', required: true }
            ],
            action: {
              title: 'Next',
              icon: 'next',
              url: '#cafe-details'
            }
          },
          { 
            id: 'cafe-details',
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
              icon: 'next',
              url: '#business-information'
            }
          },
          {
            id: 'business-information',
            title: 'Business Information',
            content: 'To list your café on our platform, we need information about your business. Please tell us your business hours, write a brief description of your business and choose available amenities from the list. Once you create your account, you will be able to add more information in the administration area.',
            fields: [
              { title: 'Business Hours', type: 'text', id: 'businessHours', required: true },
              { title: 'About the Business', type: 'textarea', id: 'aboutBusiness', required: true, placeholder: 'A brief description...' },
              { title: 'Amenities', type: 'multiselect', id: 'amenities', required: true, options: [] }
            ],
            action: {
              title: 'Next',
              icon: 'next',
              url: '#review-confirm'
            }
          },
          { 
            id: 'review-confirm',
            title: 'Review & Confirm',
            content: 'Check if the information provided are correct, sign and submit your application. We aim to process all applications within 3 days, but some applications can be processed sooner. Please get in touch if you have any questions about your application.',
            fields: [
              { title: 'I confirm that the above information is correct', type: 'text', id: 'signature', required: true, placeholder: 'Type your name here...' }
            ],
            action: {
              title: 'Create an Account',
              icon: 'confirm',
              url: '/account'
            }
          }
        ]
      }
    }
  }
</script>