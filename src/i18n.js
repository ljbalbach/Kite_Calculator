import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('es', () => import('./locales/es.json'));
// Add more languages as needed

init({
  fallbackLocale: 'en',
  initialLocale: 'en',
});