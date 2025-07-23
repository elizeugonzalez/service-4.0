import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './pt/translations.json';
import es from './es/translations.json';

const resources = {
  pt: { translation: pt },
  es: { translation: es },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: Localization.locale.startsWith('es') ? 'es' : 'pt',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;
