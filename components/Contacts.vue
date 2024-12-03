<template>
  <div class="contacts" id="contacts">
    <h1>{{ $t('stayInContact') }}</h1>
    <div class="contacts__logos">
      <div class="contacts__logo">
        <a href="https://fr.linkedin.com/in/pietro-ciccarello" target="_blank"
          ><font-awesome
            :icon="['fab', 'linkedin']"
            class="contacts__icon"
        /></a>
        <p>LinkedIn</p>
      </div>
      <div class="contacts__logo">
        <a href="mailto:pietrociccarello@gmail.com"
          ><font-awesome
            :icon="['fas', 'envelope']"
            class="contacts__icon"
        /></a>
        <p>E-mail</p>
      </div>
      <div class="contacts__logo">
        <a href="https://github.com/PeteC88" target="_blank"
          ><font-awesome :icon="['fab', 'github']" class="contacts__icon"
        /></a>
        <p>GitHub</p>
      </div>
      <div class="contacts__logo cv__logo">
          <ResumeLogoSvg class="resume-icon" @click="openMenu" />
          <div class="lang-cv-buttons">
            <a
          :href="`/cv/CV_Pietro_Ciccarello_FR.pdf`"
          download="CV Pietro Ciccarello FR"
          target="_blank">
          <div class="fr-cv cv-button" :class="{'cv-button--active': isCvMenuOpen}">
            <img src="/imgs/round-flags/france-flag-circular-17753.png" alt="download french cv">
          </div>
          </a>
          <a
          :href="`/cv/CV_Pietro_Ciccarello_EN.pdf`"
          download="CV Pietro Ciccarello EN"
          target="_blank">
          <div class="en-cv cv-button"  :class="{'cv-button--active': isCvMenuOpen}">
            <img src="/imgs/round-flags/uk-flag-circular-17883.png" alt="download english cv">
          </div>
        </a>
        <a :href="`/cv/CV_Pietro_Ciccarello_IT.pdf`"
          download="CV Pietro Ciccarello IT"
          target="_blank">
          <div class="it-cv cv-button" :class="{'cv-button--active': isCvMenuOpen}">
            <img src="/imgs/round-flags/italy-flag-circular-17751.png" alt="download italian cv">
          </div>
          </a>
          </div>
          
          <p>{{ $t('DowloadCV') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import ResumeLogoSvg from "./ResumeLogoSvg.vue";

let isCvMenuOpen = ref(false);

const openMenu = ()=>{
  isCvMenuOpen.value = !isCvMenuOpen.value;
}
</script>