// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@vesp/nuxt-fontawesome'],
  css: ['~/assets/scss/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  fontawesome: {
    icons: {
      solid: ['faBars', 'faArrowsSpin', 'faCode', 'faLaptopCode', 'faLaptop', 'faEye', 'faFileArrowDown', 'faEnvelope', 'faArrowLeft', 'faArrowRight', 'faHandPointUp' ],
      regular: [''],
      brands: ['faGithub', 'faLinkedin' ],

    }
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  build:{
    transpile:["three"]
}
})