import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import PTBR from './locales/pt-br/pt-br.json';
import EN from './locales/en/en.json';



i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...PTBR
        },
        pt: {
            ...EN
        }
    },
    lng: 'pt',
})
export default i18n;