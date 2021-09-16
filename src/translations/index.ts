import { createI18n } from 'vue-i18n';

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('./messages/*.json')).map(
    ([key, value]) => {
      console.log(key);
      return [key.slice('./messages/'.length, -5), value.default];
    }
  )
);

console.log(messages);

export default createI18n({
  legacy: false,
  globalInjection: true,

  locale: 'en',
  messages,

  fallbackWarn: false,
  missingWarn: false,
});
