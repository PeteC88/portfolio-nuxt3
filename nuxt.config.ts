// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/portfolio.ico" }]
        }
},
  modules: ['@pinia/nuxt', '@nuxt/icon', '@nuxtjs/i18n'],
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
    transpile:["three", '@fortawesome/vue-fontawesome', 'vue-i18n']
},
i18n: {
  strategy: 'prefix_except_default',
  vueI18n: './i18n.config.ts',
  defaultLocale: 'fr',
  locales: [
    { code: 'en', language: 'en-US' },
    { code: 'fr', language: 'fr-FR' },
    { code: 'it', language: 'it-IT' }
  ],
  lazy: true,
  //langDir: 'locales/',
},

})