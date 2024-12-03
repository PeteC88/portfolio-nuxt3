<template>
  <section class="about" id="about">
    <div class="about__title">
      <h1>{{ $t('about') }}</h1>
      <div class="about__dots-container">
        <div class="about__dot"></div>
        <div class="about__dot"></div>
        <div class="about__dot"></div>
      </div>
    </div>
    <div class="about__wrapper">
      <div class="about__photo">
        <img src="/imgs/about-me/photo-Pietro-Ciccarello.jpg" alt="photo Pietro Ciccarello" />
      </div>
      <div class="about__text">
        <p>
          {{ $t('aboutText') }}
        </p>
      </div>
    </div>
  </section>
</template>