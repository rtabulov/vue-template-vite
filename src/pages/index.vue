<script lang="ts" setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'Home',
});
</script>

<template>
  <div class="flex items-center justify-center mb-12 space-x-6">
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      ><svg-icon name="vite" width="100" height="100" />
    </a>
    <a href="https://v3.vuejs.org/" target="_blank"
      ><svg-icon name="vue" width="105" height="105" class="pt-15px" />
    </a>
  </div>

  <locale-switcher class="mb-12" />

  <hello-world />
</template>
