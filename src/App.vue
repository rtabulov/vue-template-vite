<script setup lang="ts">
import { useDark, useLocalStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

useDark();
useLocalStorage('locale', useI18n().locale);
</script>

<template>
  <div
    class="
      bg-light-900
      text-dark-200 text-center text-xl
      py-24
      min-h-100vh
      transition-colors
      dark:bg-dark-900 dark:text-light-900
    "
  >
    <div class="space-x-4 mb-12">
      <router-link
        class="hover:opacity-50 transition-opacity underline"
        to="/"
        >{{ $t('home') }}</router-link
      >

      <router-link
        class="hover:opacity-50 transition-opacity underline"
        to="/about"
        >{{ $t('about') }}</router-link
      >
    </div>

    <router-view />
  </div>
</template>
