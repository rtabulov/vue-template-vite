<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Home',
});

const links = [
  {
    href: 'https://github.com/vueuse/vueuse',
    name: 'vue-use',
  },
  {
    href: 'https://github.com/antfu/vite-plugin-components',
    name: 'vite-plugin-components',
  },
  {
    href: 'https://github.com/hannoeru/vite-plugin-pages',
    name: 'vite-plugin-pages',
  },
  {
    href: 'https://github.com/anncwb/vite-plugin-imagemin',
    name: 'vite-plugin-imagemin',
  },
  {
    href: 'https://github.com/anncwb/vite-plugin-svg-icons',
    name: 'vite-plugin-svg-icons',
  },
  {
    href: 'https://github.com/windicss/windicss',
    name: 'windicss',
  },
];
</script>

<template>
  <h1 class="text-3xl mb-8">{{ $t('credits') }}</h1>

  <ul>
    <li v-for="link in links" :key="link.href" class="mb-4">
      <a
        class="
          text-purple-600
          transition-colors
          dark:text-purple-400
          hover:opacity-75
        "
        target="_blank"
        :href="link.href"
        >{{ link.name }}</a
      >
    </li>
  </ul>
</template>
