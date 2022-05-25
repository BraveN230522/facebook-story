import { LanguageType } from '@type/base/common.types';
import i18next from 'i18next';

export const translateLocales = () => {
    const currentLanguage = i18next.language;
    switch (currentLanguage) {
        case 'cn':
            return { lang: LanguageType.CN };
        case 'en':
            return { lang: LanguageType.EN };
        default:
            return { lang: LanguageType.ZH };
    }
};

export const currentLanguage = translateLocales();
