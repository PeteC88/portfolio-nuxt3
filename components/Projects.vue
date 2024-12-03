<script setup lang="ts">
import {ref, computed} from 'vue';
import { useProjectsStore } from '../stores/projectsStore'
const store = useProjectsStore();


const  isCardFlipped = ref(false);

const projectCards = computed(()=>{
  return store.translatedProjectCards;
})

const flipCard = (id:number)=>{

  store.flipCardAction(id)
}
</script>
<template>
  <section class="projects" id="projects">
    <h1>{{ $t('myProjects') }}</h1>
    <div class="projects__cards">
      <CardTemplate
        v-for="card in projectCards"
        :key="card.id"
        :cardId="card.id"
        :descriptionFront="card.descriptionFront"
        :titleBack="card.titleBack"
        :languagesUsed="card.languagesUsed"
        :descriptionBack="card.descriptionBack"
        :siteLink="card.link"
        :cardImage="card.img"
        :cardTitle="card.titleFront"
        @flipCardAction="flipCard(card.id)"
        :singleCardFlipped="card.isFlipped"
      />
    </div>
  </section>
</template>