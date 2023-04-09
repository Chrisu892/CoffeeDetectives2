<script setup lang="ts">
  const { page } = useContent()
  useContentHead(page)
  definePageMeta({ layout: "account" })
</script>

<script lang="ts">
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Listing Views',
            help: `The number of users who have viewed your cafe's listing.`,
            content: 'You have 0 views in the last 30 days.'
          },
          {
            title: 'Rating & Reviews',
            help: `The average rating and the number of reviews left by users.`,
            content: 'You received 0 ratings and 0 reviews in the last 30 days.'
          },
          {
            title: 'Favourites',
            help: `The number of users who have added your cafe to their favourites.`,
            content: 'Your cafe was saved to favourites by 0 users.'
          },
          {
            title: 'Clicks on External Links',
            help: `The number of users who have clicked on the cafe's link to website or social media page.`,
            content: 'Users visited your website 0 times, and your social media 0 times.'
          },
          {
            title: 'Promotions',
            help: `The number of special offer redemptions and overall effecives of the campaign.`,
            content: 'Your promotions were redeemed 0 times. The most popular promotions is [N/A].'
          }
        ]
      }
    }
  }
</script>

<template>
  <main id="main" class="main">
    <AdminHeader title="Analytics" icon="PhChartBar" />

    <AdminCard v-for="card, key in cards" :key="key" :title="card.title" :help="card.help">
      {{ card.content }}
    </AdminCard>
  </main>
</template>