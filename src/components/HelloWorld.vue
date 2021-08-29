<script setup>
import { ref } from 'vue';
import useDarkMode from '../composables/useDarkMode';

const count = ref(0);
const { toggle, dark } = useDarkMode();
</script>

<template>
  <div class="space-x-4 flex items-center justify-center">
    <app-button
      class="text-xl bg-green-600 text-gray-100 focus:ring-green-900"
      @click="count++"
    >
      {{ $t('hello') }}:
      <span class="font-medium">{{ count }}</span>
    </app-button>

    <app-button
      class="text-xl focus:ring-purple-900"
      :class="{
        'bg-gray-300 text-gray-800': !dark,
        'bg-gray-800 text-gray-100': dark,
      }"
      @click="toggle"
    >
      <svg-icon v-show="!dark" name="sun" width="28" height="28" />
      <svg-icon v-show="dark" name="moon" width="28" height="28" color="#ddd" />
    </app-button>
  </div>
</template>
