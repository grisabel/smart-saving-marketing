import { $, component$ } from "@builder.io/qwik";
import styles from "./LanguageSwitcher.module.scss";
import { useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

export const LanguageSwitcher = component$(() => {
  const t = inlineTranslate();
  const location = useLocation();
  const currentLang = location.params.lang || "es";

  const toggleLanguage = $(() => {
    currentLang === "en" ? "en" : "es";
  });

  return (
    <button class={styles.switcher} onClick$={toggleLanguage}>
      {t("changeLanguageBtn")}
    </button>
  );
});
