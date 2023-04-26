// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *; @use "@/assets/styles/_mixins.scss" as *;'
        }
      }
    }
  },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'slide', mode: 'out-in'}
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/strapi'
  ],
  content: {
    documentDriven: true
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  }
})