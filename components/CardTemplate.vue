<template>
  <section>
    <div
      class="projects__project card"
      :class="{ 'card--flipped': singleCardFlipped }"
      @click="flipCardAction"
    >
      <div class="card__front" :class="classById">
        <img :src="cardImageSrc" :alt="props.cardTitle" />
        <h3>{{ props.cardTitle }}</h3>
      </div>
      <div class="card__back back">
        <div class="back__title">
          <h3>{{ props.cardTitle }}</h3>
          <p>{{ props.descriptionBack }}</p>
        </div>
        <div class="back__languages">
          <h4>{{ $t('competencesLanguages') }}</h4>
          <ul>
            <li v-for="language in props.languagesUsed" :key="language">
              {{ language }}
            </li>
          </ul>
        </div>

        <button>
          <a @click.stop :href="props.siteLink" target="_blank"
            >{{ $t('visitSite') }} <font-awesome :icon="['fas', 'eye']"
          /></a>
        </button>
      </div>
    </div>
    <div class="card__instruction">
      <p>
        {{ $t('moreInfoText') }}
        <span
          ><font-awesome :icon="['fas', 'hand-point-up']" bounce
        /></span>
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import {computed} from 'vue';
const emit = defineEmits(['flipCardAction'])

const props =  defineProps([
  "siteLink", 
  "cardImage", 
  "cardTitle",
  "singleCardFlipped",
  "cardId",
  "descriptionFront",
  "titleBack",
  "descriptionBack",
  "languagesUsed",])



const classById =computed(()=>{
    return `card__front-${props.cardId}`;
  }) 

const cardImageSrc = computed(()=>{
 return `/imgs/projects/${props.cardImage}`

})

const flipCardAction = ()=>{
  emit('flipCardAction');
}
</script>