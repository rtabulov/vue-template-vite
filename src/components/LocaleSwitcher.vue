<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const availableLocales = ['ru', 'en', 'kk'];

function onClick(loc) {
  locale.value = loc;
}
</script>

<template>
  <div class="space-x-4">
    <button
      v-for="loc in availableLocales"
      :key="loc"
      class="
        px-4
        py-1
        rounded-md
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-purple-900
      "
      :class="{
        'bg-purple-600 dark:bg-purple-900 text-gray-100': locale === loc,
        'bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100':
          locale !== loc,
      }"
      @click="onClick(loc)"
    >
      {{ loc }}
    </button>
  </div>
</template>
