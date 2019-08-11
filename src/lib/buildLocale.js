import i18next from 'i18next';
import i18nextXHRBackend from 'i18next-xhr-backend';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Vue from 'vue';
import VueI18Next from '@panter/vue-i18next';

export default (store) => {
    Vue.use(VueI18Next);
    
    i18next.on('loaded', loaded => {
        store.commit('fetchI18nSuccess');
    });
    
    i18next.on('error', function () {
        store.commit('fetchI18nFailure');
    });
    
    i18next
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextXHRBackend)
    .init({
        fallbackLng: 'en-US',
        debug: process.env.NODE_ENV !== 'production',
        backend: {
            loadPath: '/i18n/{{ lng }}.json'
        }
    });
    
    return new VueI18Next(i18next);
};
