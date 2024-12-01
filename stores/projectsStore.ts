import { defineStore } from 'pinia';
import {type Project} from '../interfaces/project'

export const useProjectsSTore = defineStore('projectsStore', () => {
const projectCards:Ref<Project[]> = ref([
    {
        id: 1,
        titleFront: 'E-commerce site\'s page',
        descriptionFront: 'Projet pris sur le site frontendmentor.io',
        titleBack: 'E-commerce site\'s page',
        descriptionBack: 'Projet pris sur le site frontendmentor.io',
        languagesUsed: ['HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "projectECommerce.jpg",
        link: "https://petec88.github.io/projects-frontend_mentor/",
        isFlipped: false
    },
    {
        id: 2,
        titleFront: 'Countdown project',
        descriptionFront: 'Projet pris sur le site frontendmentor.io',
        titleBack: 'Countdown project',
        descriptionBack: 'Projet pris sur le site frontendmentor.io',
        languagesUsed: ['HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "projectCountdown.png",
        link: "https://petec88.github.io/countdown-frontend-mentor-challenge/",
        isFlipped: false
    },
    {
        id: 3,
        titleFront: 'Rock Scissors Paper game',
        descriptionFront: 'Projet pris sur le site frontendmentor.io',
        titleBack: 'Rock Scissors Paper game',
        descriptionBack: 'Projet pris sur le site frontendmentor.io',
        languagesUsed: ['HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "rockScissorsPaperGame.png",
        link: "https://petec88.github.io/frontend-mentor-rock-paper-scissors-game/",
        isFlipped: false
    },
    {
        id: 4,
        titleFront: 'Flags of the world',
        descriptionFront: 'Projet pris sur le site frontendmentor.io',
        titleBack: 'Flag of the wordld',
        descriptionBack: 'Projet pris sur le site frontendmentor.io',
        languagesUsed: ['VUE.JS with Vuex', 'HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "flagsProject.jpg",
        link: "https://pietro-ciccarello-flags-project.netlify.app/home",
        isFlipped: false
    },
    {
        id: 5,
        titleFront: 'URL-Shortner',
        descriptionFront: 'Projet pris sur le site frontendmentor.io',
        titleBack: 'URL-Shortner',
        descriptionBack: 'Projet pris sur le site frontendmentor.io',
        languagesUsed: ['VUE.JS with Vuex', 'HTML', 'CSS', 'SASS', 'JavaScript'],
        img: "urlShortner.png",
        link: "https://url-shortener-pietro-ciccarello.netlify.app/",
        isFlipped: false
    },
    {
        id: 6,
        titleFront: 'Multi-step form',
        descriptionFront: 'Projet pris sur le site frontendmentor.io',
        titleBack: 'Multi-step form',
        descriptionBack: 'Projet pris sur le site frontendmentor.io',
        languagesUsed: ['VUE.JS with Pinia', 'HTML', 'CSS', 'SASS', 'Typescript'],
        img: "multistep-project.png",
        link: "https://multistep-form-pietro-ciccarello.netlify.app",
        isFlipped: false
    }
]);

const flipCardAction = (cardId:number)=>{
    
    let foundCard = projectCards.value.find(card =>{
        return card.id === cardId;
    })
    
    if(foundCard)foundCard.isFlipped = !foundCard?.isFlipped; 
}

return { projectCards, flipCardAction}
})
