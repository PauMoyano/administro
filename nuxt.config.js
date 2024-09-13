// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },

  css: ["@mdi/font/css/materialdesignicons.css"],

  runtimeConfig: {
    public: {
      backendUrl: '',
    },
  },

  compatibilityDate: '2024-09-04'
})