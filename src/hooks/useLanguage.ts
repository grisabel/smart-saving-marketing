import { useStore, useVisibleTask$ } from "@builder.io/qwik";

export interface LanguageStore {
  lang: string;
}

export const useLanguage = () => {
  const store = useStore<LanguageStore>({ lang: "es" });

  useVisibleTask$(() => {
    const language = window.localStorage.getItem("language");
    console.log(language);
    if (language) {
      store.lang = language;
    }
  });

  return store;
};
