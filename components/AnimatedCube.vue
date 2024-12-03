

<script setup lang="ts">
import {onMounted} from 'vue';
import { useCubeLoaderStore } from '../stores/cubeLoaderStore'
const store = useCubeLoaderStore();

const cubeLoader = ()=>{
store.cubeLoaderAction(store.isCubeLoaded.value);
}

onMounted(()=>{
  cubeLoader();
})
</script>   

<template>
  <div>
    <div class="canvas__wrapper">
      <div class="canvas-container">
        <canvas class="canvas"></canvas>
      </div>
      <h3 class="canvas__text">
        <i>{{ $t('rotateMe') }}</i
        ><font-awesome
          :icon="['fas', 'arrows-spin']"
          spin
          class="canvas__icon"
        />

      </h3>
    </div>
  </div>
</template>