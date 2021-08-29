<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import useDarkMode from './composables/useDarkMode';
import i18n, { loadLocaleMessages, setI18nLanguage } from './translations';

// i18n dynamic loader
watch(useI18n().locale, async (locale) => {
  if (!i18n.global.availableLocales.includes(locale)) {
    await loadLocaleMessages(i18n, locale);
  }

  setI18nLanguage(i18n, locale);
});

useDarkMode().dark.value = true;
</script>

<template>
  <div
    class="
      bg-light-900
      text-dark-200 text-center text-xl
      py-24
      min-h-100vh
      transition-colors
      duration-100
      dark:bg-dark-900 dark:text-light-900
    "
  >
    <div class="space-x-4 mb-12">
      <router-link
        class="hover:opacity-50 transition-opacity duration-100 underline"
        to="/"
        >home</router-link
      >

      <router-link
        class="hover:opacity-50 transition-opacity duration-100 underline"
        to="/about"
        >about</router-link
      >
    </div>

    <router-view />
  </div>
</template>

<style>
body {
  font-family: 'Mont', 'Montserrat', 'Roboto', Avenir, Helvetica, Arial,
    sans-serif;
}
</style>
