import { ref, watch } from 'vue';

const dark = ref(false);

export default function useDarkMode() {
  watch(dark, (newval) => {
    if (newval) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  function toggle() {
    dark.value = !dark.value;
  }
  function setDark() {
    dark.value = true;
  }
  function setLight() {
    dark.value = false;
  }

  return { dark, toggle, setDark, setLight };
}
