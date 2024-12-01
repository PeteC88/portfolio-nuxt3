import { defineStore } from 'pinia';

export const useActivityStore = defineStore('activityStore', () => {
    const activity = ref({});
    const getActivity = async()=> {
        try {
            const data:object = await $fetch('https://bored.api.lewagon.com/api/activity');
            activity.value = data;
        }
        catch (error) {
            console.log(error);
        }
    }

    return {getActivity, activity}
})