/* eslint-disable no-param-reassign */
import { createI18n } from 'vue-i18n';
import { nextTick } from 'vue';

import FALLBACK_MESSAGES from './messages/en.json';

export const FALLBACK_LOCALE = 'en';
export const DEFAULT_LOCALE = 'en';

export function setI18nLanguage(i18n, locale) {
  i18n.global.locale.value = locale;

  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale);
  localStorage.setItem('locale', locale);
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(`./messages/${locale}.json`);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

export function setupI18n(options) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

export default setupI18n({
  locale: DEFAULT_LOCALE, // set locale
  fallbackLocale: FALLBACK_LOCALE, // set fallback locale,
  messages: { [FALLBACK_LOCALE]: FALLBACK_MESSAGES },

  legacy: false,
  globalInjection: true,

  // suppress warnings
  fallbackWarn: false,
  missingWarn: false,
});
