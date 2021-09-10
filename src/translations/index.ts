// /* eslint-disable no-param-reassign */
import { createI18n } from 'vue-i18n';
// import { nextTick } from 'vue';

import ru from './messages/ru.json';
import en from './messages/en.json';
import kk from './messages/kk.json';

// type ExportedType = typeof i18n;

// export function setI18nLanguage(i18n: ExportedType, locale: string) {
//   i18n.global.locale = locale;

//   /**
//    * NOTE:
//    * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
//    * The following is an example for axios.
//    *
//    * axios.defaults.headers.common['Accept-Language'] = locale
//    */
//   document.documentElement.setAttribute('lang', locale);
//   localStorage.setItem('locale', locale);
// }

// export async function loadLocaleMessages(i18n: ExportedType, locale: string) {
//   // load locale messages with dynamic import
//   const messages = await import(`./messages/${locale}.json`);

//   // set locale and locale message
//   i18n.global.setLocaleMessage(locale, messages.default);

//   return nextTick();
// }

// export function setupI18n() {
//   const i18n = createI18n({
//     locale: DEFAULT_LOCALE, // set locale
//     fallbackLocale: FALLBACK_LOCALE, // set fallback locale,
//     messages: { [FALLBACK_LOCALE]: FALLBACK_MESSAGES },

//     legacy: false,
//     globalInjection: true,

//     // suppress warnings
//     fallbackWarn: false,
//     missingWarn: false,
//   });
//   setI18nLanguage(i18n, DEFAULT_LOCALE);
//   return i18n;
// }

// const i18n = setupI18n();

export default createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale,
  messages: { ru, kk, en },

  legacy: false,
  globalInjection: true,

  // suppress warnings
  fallbackWarn: false,
  missingWarn: false,
});
