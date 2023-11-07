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
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/dye1syi.css' }
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/strapi',
    'nuxt-mapbox'
  ],
  mapbox: {
    accessToken: 'pk.eyJ1IjoiY2hyaXNwcnVzYWtpZXdpY3oiLCJhIjoiY2xoYzNrNTE5MHNqNTNmcGN3bjJmM21rZSJ9.UG-xMOInvNTFt7LRyb0JVw'
  },
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