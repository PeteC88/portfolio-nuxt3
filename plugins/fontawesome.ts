import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars,faArrowsSpin, faCode, faLaptopCode, faLaptop,faEye, faFileArrowDown, faEnvelope, faArrowLeft, faArrowRight, faHandPointUp} from '@fortawesome/free-solid-svg-icons'


library.add(faGithub, faLinkedin,faBars,faArrowsSpin, faCode, faLaptopCode, faLaptop,faEye, faFileArrowDown, faEnvelope, faArrowLeft, faArrowRight, faHandPointUp )

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome', FontAwesomeIcon)
})
