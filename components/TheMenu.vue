<template>
  <section class="menu">
    <div class="menu-header" :class="{ 'menu-header-is-hidden': !showHeader }">
      <button class="burger" @click="toggleMenu">
        <div
          class="burger__container"
          :class="{
            'burger__container--active': burgerActivated,
            'burger__container--animation': isMenuOn,
            'burger__container--animation-reverse': menuAnimationReverse,
          }"
        ></div>
      </button>
      <section
        class="menu-body"
        :class="isMenuBodyActive ? ['menu-body--active'] : ''"
      >
        <nav class="menu-nav">
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#home" @click="toggleMenu">Accueil</a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#about" @click="toggleMenu">Quelques lignes sur moi </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#compétences" @click="toggleMenu">Compétences </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#projects" @click="toggleMenu">Projets </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#API" @click="toggleMenu">Moment API </a>
          </li>
          <li
            class="menu-nav-link"
            :class="{ 'menu-nav-link--active': isMenuBodyActive }"
          >
            <a href="#contacts" @click="toggleMenu">Contacts </a>
          </li>
        </nav>
      </section>
      <section
        class="menu-footer"
        :class="{ 'menu-footer--active': isMenuFooterActive }"
      >
        <nav class="menu-footer-nav">
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a
              href="https://fr.linkedin.com/in/pietro-ciccarello"
              target="_blank"
            >
              <font-awesome
                :icon="['fab', 'linkedin']"
                class="menu-footer-icon"
                :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
              />
            </a>
          </li>
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a href="mailto:pietrociccarello@gmail.com">
              <font-awesome
                :icon="['fas', 'envelope']"
                class="menu-footer-icon"
                :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
              />
            </a>
          </li>
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a href="https://github.com/PeteC88" target="_blank">
              <font-awesome
                :icon="['fab', 'github']"
                class="menu-footer-icon"
                :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
              />
            </a>
          </li>
          <li
            :class="{ 'menu-footer-nav-link--active': isMenuFooterActive }"
            class="menu-footer-nav-link"
          >
            <a
              :href="`/cv/CVPietroCiccarello.pdf`"
              download="CV Pietro Ciccarello"
              target="_blank"
              :class="{ 'menu-footer-icon--active': isMenuBodyActive }"
            >
              <ResumeLogoSvg class="resume-icon" />
            </a>
          </li>
        </nav>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import ResumeLogoSvg from "./ResumeLogoSvg.vue";
import {ref, watch, onMounted} from 'vue';

let isMenuOn = ref(false);
let menuAnimationReverse = ref(false);
let burgerActivated= ref(false);
let isMenuBodyActive= ref(false);
let isMenuFooterActive=ref(false);
let showHeader=  ref(true);
let lastScrollPosition= ref(0);
let scrollOffset= ref(40);

onMounted(()=>{
  lastScrollPosition.value = window.pageYOffset;
  window.addEventListener("scroll", onScroll);
})

watch(isMenuOn, (_, __) => {
  if (isMenuOn.value) {
    document.documentElement.style.overflow = "hidden";
    return;
  } else {
    document.documentElement.style.overflow = "auto";
  }

});

const onScroll = ()=> {
  if (!isMenuOn.value) {
    if (window.pageYOffset < 0) {
      return;
    } //Math.abs to return the absolute value of the number
    if (
      Math.abs(window.pageYOffset - lastScrollPosition.value) <
      scrollOffset.value
    ) {
      return;
    }
    showHeader.value = window.pageYOffset < lastScrollPosition.value;
    lastScrollPosition.value = window.pageYOffset;
  }
}




const toggleMenu = ()=> {
      if (isMenuOn.value) {
        isMenuOn.value = true;
        setTimeout(() => {
          burgerActivated.value = true;
        }, 500);
      } else {
        menuAnimationReverse.value = true;
        setTimeout(() => {
          isMenuOn.value = false;
          menuAnimationReverse.value = false;
          burgerActivated.value = false;
        }, 500);
      }
      isMenuBodyActive.value = !isMenuBodyActive.value;
      isMenuFooterActive.value = !isMenuFooterActive.value;
    }

/* export default {
  components: {
    ResumeLogoSvg,
  },
  data() {
    return {
      isMenuOn: false,
      menuAnimationReverse: false,
      burgerActivated: false,
      isMenuBodyActive: false,
      isMenuFooterActive: false,
      showHeader: true,
      lastScrollPosition: 0,
      scrollOffset: 40,
    };
  },
  computed: {
    ...mapGetters(["resumeImage"]),
    ...mapState(["publicPath"]),
  },
  watch: {
    isMenuOn() {
      if (this.isMenuOn) {
        document.documentElement.style.overflow = "hidden";
        console.log(document.body.style.overflow);
        return;
      } else {
        document.documentElement.style.overflow = "auto";
        console.log(document.body.style.overflow);
      }
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (!this.isMenuOn) {
        if (window.pageYOffset < 0) {
          return;
        } //Math.abs to return the absolute value of the number
        if (
          Math.abs(window.pageYOffset - this.lastScrollPosition) <
          this.scrollOffset
        ) {
          return;
        }
        this.showHeader = window.pageYOffset < this.lastScrollPosition;
        this.lastScrollPosition = window.pageYOffset;
      }
    },
    toggleMenu() {
      if (!this.isMenuOn) {
        this.isMenuOn = true;
        setTimeout(() => {
          this.burgerActivated = true;
        }, 500);
      } else {
        this.menuAnimationReverse = true;
        setTimeout(() => {
          this.isMenuOn = false;
          this.menuAnimationReverse = false;
          this.burgerActivated = false;
        }, 500);
      }
      this.isMenuBodyActive = !this.isMenuBodyActive;
      this.isMenuFooterActive = !this.isMenuFooterActive;
    },
  },
}; */
</script>
<style lang="scss">
</style>