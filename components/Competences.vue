<template>
  <div class="competences" id="compétences">
    <h1 class="competences__title">{{ $t('myCompetences') }}</h1>
    <ClientOnly >
      <AnimatedCube />
    </ClientOnly>
  
    <section class="competences__wrapper">
      <div class="competences__developer competences__box">
        <div class="competences__icon">
          <font-awesome :icon="['fas', 'laptop-code']" />
        </div>
        <div class="competences__texts">
          <h4>{{ $t('competencesTitleCard1') }}</h4>
          <p>{{ $t('competencesTextCard1') }}</p>

          <h4>{{ $t('competencesLanguages') }}</h4>

          <ul>
            <li>{{ $t('html') }}</li>
            <li>{{ $t('css') }}</li>
            <li>{{ $t('sass') }}</li>
            <li>{{ $t('bootstrapTailwind') }}</li>
            <li>{{ $t('js') }}</li>
            <li>{{ $t('vue') }}</li>
            <li>{{ $t('nuxt') }}</li>
          </ul>
          <h4>{{ $t('tools') }}</h4>
          <ul>
            <li>{{ $t('github') }}</li>
            <li>{{ $t('trello') }}</li>
          </ul>
        </div>
      </div>
      <div class="competences__webmaster competences__box">
        <div class="competences__icon">
          <font-awesome :icon="['fas', 'laptop']" />
        </div>
        <div class="competences__texts">
          <h4>{{ $t('competencesTitleCard2') }}</h4>
          <p>{{ $t('competencesTextCard2') }}</p>

          <h4>{{ $t('cms') }}</h4>

          <ul>
            <li>{{ $t('sitecore') }}</li>
            <li>{{ $t('aem') }}</li>
            <li>{{ $t('contentStack') }}</li>
          </ul>
          <h4>{{ $t('tools') }}</h4>
          <ul>
            <li>{{ $t('jira') }}</li>
            <li>{{ $t('digitalCore') }}</li>
            <li>{{ $t('trados') }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>