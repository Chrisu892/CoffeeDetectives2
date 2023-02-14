// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_colours.scss" as *;'
        }
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'slide', mode: 'out-in'}
  }
})