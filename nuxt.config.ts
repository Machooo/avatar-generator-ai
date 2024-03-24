// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/api/**": { proxy: "http://localhost:8000/**" },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
