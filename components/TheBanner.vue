<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

//let resizeBar = this.$refs.resizeBar;
let x = ref(0);
let touchX= ref(0);
let w= ref(0);
let touchW= ref(0);
let dx= ref(0);
let dxTouch= ref(0);
let percentageWidth= ref(0);
let isGrabbing= ref(false);

onMounted(() => {
  nextTick(() => {
    getPercentageBanner();

      window.addEventListener("resize", () => {
        getPercentageBanner();
      });
    });
  })



const touchStartHandler = (e)=> {
isGrabbing.value = true;
//get current position of the mouse

touchX.value = e.touches[0].clientX;

const resizeContainer = document.getElementById("resizeMe");

//calculate the dimension of the div
const styles = window.getComputedStyle(resizeContainer);

w.value = parseInt(styles.width, 10);

//attach the listener to the document
document.addEventListener("touchmove", touchMoveHandler, {
  passive: false,
});
document.addEventListener("touchend", touchEndHandler);
}

const mouseDownHandler =(e)=> {
isGrabbing.value = true;

//get current position of the mouse

x.value = e.clientX;

const resizeContainer = document.getElementById("resizeMe");

//calculate the dimension of the div
const styles = window.getComputedStyle(resizeContainer);

w.value = parseInt(styles.width, 10);

//attach the listner to the document
document.addEventListener("mousemove", mouseMoveHandler);
document.addEventListener("mouseup", mouseUpHandler);
}

const touchMoveHandler =(e) => {
e.preventDefault();

const resizeContainer = document.getElementById("resizeMe");

touchX.value = 0;

getPercentageBanner();

//calculate till where the div can be moved
dxTouch.value = e.touches[0].clientX - touchX.value;
//adjust the dimension of the element
resizeContainer.style.width = `${touchW.value + dxTouch.value}px`;
}

const mouseMoveHandler =(e) => {
const resizeContainer = document.getElementById("resizeMe");

getPercentageBanner();
//calculate till where the div can be moved
dx.value = e.clientX - x.value;

//adjust the dimension of the element
resizeContainer.style.width = `${w.value + dx.value}px`;
}

const touchEndHandler =()=> {
  isGrabbing.value = false;

  //  ADD {passive: true,} as third property if it does not work in mobile.
  document.removeEventListener("touchmove", touchMoveHandler,);
  document.removeEventListener("touchend", touchEndHandler);
}

const mouseUpHandler = ()=> {
      isGrabbing.value = false;
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }

    const getPercentageBanner = ()=>{
  const resizeContainer = document.getElementById("resizeMe");
  const resize = document.querySelector(".resize");

  //calculate percentage of parent div of resize
  const styles = window.getComputedStyle(resizeContainer);
  const containerWidth = window.getComputedStyle(resize);

  percentageWidth.value =
        (parseInt(styles.width, 10) / parseInt(containerWidth.width, 10)) * 100;
}
</script>


<template>
  <div class="banner">
    <div class="resize">
      <div class="resize__container" id="resizeMe">
        <div
          class="resize__right-side"
          :class="{ 'resize__right-side--active': isGrabbing }"
          @mousedown.prevent="mouseDownHandler"
          @touchstart.prevent="touchStartHandler"
        >
          <div class="resize__arrows">
            <div class="resize__arrows-text">déplace moi</div>
            <div class="resize__arrows-left">
              <font-awesome :icon="['fas', 'arrow-left']" />
            </div>
            <div class="resize__arrows-right">
              <font-awesome :icon="['fas', 'arrow-right']" />
            </div>
          </div>
        </div>
        <div class="resize__text-left">
          <h1 class="banner-title">
            &lt;<span class="title-1">Hello</span>
            <span class="title-2">World!</span> /&gt;
          </h1>
          <p>Je suis Pietro Ciccarello,</p>
          <p>développeur web front.</p>
        </div>
        <div class="resize__function-img">
          <img
            src="/imgs/banner/functionText.png"
            alt="js function myDay"
            v-if="percentageWidth > 80"
          />
        </div>
      </div>
      <div class="resize__background">
        <div class="resize__text-left resize__text-left-back">
          <h1 class="banner-title">
            &lt;<span class="title-1 title-1-back">Hello</span>
            <span class="title-2 title-2-back">World!</span> /&gt;
          </h1>
          <p>Je suis Pietro Ciccarello,</p>
          <p>développeur web front.</p>
        </div>
        <img
          src="/imgs/banner/Code-typing-bro-transparent-background.svg"
          alt="computer working"
        />
      </div>
    </div>
  </div>
</template>