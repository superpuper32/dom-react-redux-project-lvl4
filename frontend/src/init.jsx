import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

import resources from './locales/index.js';
import AuthProvider from './providers/AuthProvider';

import App from './App.jsx';

const init = async () => {
  const i18n = i18next.createInstance();

  console.log('from init');

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
