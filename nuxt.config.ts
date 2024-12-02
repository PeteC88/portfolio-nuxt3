// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/icon'],
  css: ['~/assets/scss/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  build:{
    transpile:["three"]
},

})