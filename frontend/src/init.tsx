/* eslint-disable functional/no-expression-statement */

import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import App from './App.tsx';
import resources from './locales/index.ts';
import AuthProvider from './providers/AuthProvider.tsx';
import './assets/application.scss';
import './index.css';

const init = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
    });

  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nextProvider>
  );
};

export default init;