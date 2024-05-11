// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/main.css',
    '~/assets/style.css'
  ],
  


  buildModules: [
    '@nuxt/image',
  ],

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ]
})