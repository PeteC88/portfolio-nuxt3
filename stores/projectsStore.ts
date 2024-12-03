import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { type Ref, ref, computed } from 'vue';
import { type Project } from '../interfaces/project';

export const useProjectsStore = defineStore('projectsStore', () => {
const { t, locale } = useI18n(); 


const projectCards: Ref<Project[]>= ref([
    {
        id: 1,
        key: 'card1',
        languagesUsed: ['HTML', 'CSS', 'SASS', 'JavaScript'],
        img: 'projectECommerce.jpg',
        link: 'https://petec88.github.io/projects-frontend_mentor/',
        isFlipped: false,
    },
    {
        id: 2,
        key:'card2',
        languagesUsed: ['HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "projectCountdown.png",
        link: "https://petec88.github.io/countdown-frontend-mentor-challenge/",
        isFlipped: false
    },
    {
        id: 3,
        key:'card3',
        languagesUsed: ['HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "rockScissorsPaperGame.png",
        link: "https://petec88.github.io/frontend-mentor-rock-paper-scissors-game/",
        isFlipped: false
    },
    {
        id: 4,
        key:"card4",
        languagesUsed: ['VUE.JS with Vuex', 'HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "flagsProject.jpg",
        link: "https://pietro-ciccarello-flags-project.netlify.app/home",
        isFlipped: false
    },
    {
        id: 5,
        key:"card5",
        languagesUsed: ['VUE.JS with Vuex', 'HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "urlShortner.png",
        link: "https://url-shortener-pietro-ciccarello.netlify.app/",
        isFlipped: false
    },
    {
        id: 6,
        key:'card6',
        languagesUsed: ['VUE.JS with Pinia', 'HTML', 'CSS', 'SASS', 'Typescript'],
        img: "multistep-project.png",
        link: "https://multistep-form-pietro-ciccarello.netlify.app",
        isFlipped: false
    }
]);

  //Dynamic translation of projects
const translatedProjectCards = computed(() =>

    projectCards.value.map((project) => ({
    ...project,
    titleFront: t(`titleProjectCard.${project.key}`),
    descriptionFront: t(`descriptionCardFront.${project.key}`),
    titleBack: t(`titleBackCard.${project.key}`),
    descriptionBack: t(`descriptionBackCard.${project.key}`),
    }))
);

  // Azione per girare una card
const flipCardAction = (cardId: number) => {
    const foundCard = projectCards.value.find((card) => card.id === cardId);
    if (foundCard) {
    foundCard.isFlipped = !foundCard.isFlipped;
    }
};

return { translatedProjectCards, flipCardAction };
});