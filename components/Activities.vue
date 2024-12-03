<script setup lang="ts">

import {computed, ref, onMounted} from 'vue';
import { useActivityStore } from '../stores/activitiesStore'

const store = useActivityStore();


onMounted(async ()=>{
  await store.getActivity();
})

let isSliding = ref(false);
let oldActivity = ref({});

const activity = computed(()=>{
return store.activity;
}) 


const slideAnimation =()=> {
      isSliding.value = true;

      setTimeout(() => {
        store.getActivity();
  
        oldActivity.value = store.activity;
        
        isSliding.value = false;

      }, 1000);
    }




</script>

<template>
  <div class="activity" id="API">
      <h1>{{$t('apiMenu')}}</h1>
      <h5>
        {{$t('momentApiText')}}
      </h5>
      <div class="activity__wrapper">
        <div class="activity__carousel">
          <div class="activity__slide slide-1">
            <p>{{ activity.activity }}</p>
            <ul>
              <li>prix : {{ activity.price }}</li>
              <li>participant&#40;s&#41; : {{ activity.participants }}</li>
              <li>type : {{ activity.type }}</li>
            </ul>
          </div>
          <div
            class="activity__slide slide-2"
            :class="{ 'slide-2--active': isSliding }"
          >
            <div v-if="oldActivity.activity">
              <p>{{ oldActivity.activity }}</p>
              <ul>
                <li>prix : {{ oldActivity.price }}</li>
                <li>participant&#40;s&#41; : {{ oldActivity.participants }}</li>
                <li>type : {{ oldActivity.type }}</li>
              </ul>
            </div>
            <h3 v-else>Pick one activity</h3>
          </div>
        </div>
        <button @click="slideAnimation" :disabled="isSliding">
         {{ $t('newActivity') }}
        </button>
      </div>
    </div>
  
  </template>