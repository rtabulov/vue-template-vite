<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

const count = ref(0);
const dark = useDark();
const toggle = useToggle(dark);
</script>

<template>
  <div class="space-x-4 flex items-center justify-center">
    <app-button
      class="
        text-xl
        bg-green-600
        text-gray-100
        focus:ring-green-900
        dark:focus:ring-gray-800 dark:bg-green-900
      "
      @click="count++"
    >
      {{ $t('hello') }}:
      <span class="font-medium font-mono">{{ count }}</span>
    </app-button>

    <app-button
      class="text-xl focus:ring-purple-900 bg-gray-300 dark:bg-gray-800"
      @click="toggle"
    >
      <svg-icon v-show="!dark" name="sun" width="28" height="28" />
      <svg-icon
        v-show="dark"
        name="moon"
        width="28"
        height="28"
        class="text-gray-200"
      />
    </app-button>
  </div>
</template>
