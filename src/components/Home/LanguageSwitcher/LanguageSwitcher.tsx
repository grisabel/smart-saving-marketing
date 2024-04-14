import { $, component$ } from "@builder.io/qwik";
import styles from "./LanguageSwitcher.module.scss";
import { useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

export const LanguageSwitcher = component$(() => {
  const t = inlineTranslate();
  const location = useLocation();
  const currentLang = location.params.lang || "es";

  const toggleLanguage = $(() => {
    if (currentLang === "en") {
      const newPath = location.prevUrl
        ? location.prevUrl.href.replace("/en/", "/")
        : "/";
      console.log(newPath);
      window.location.href = newPath;
    } else {
      const newPath = "/en" + location?.prevUrl?.pathname;
      window.location.href =
        location?.prevUrl?.origin + newPath + location?.prevUrl?.search;
    }
  });

  return (
    <button class={styles.switcher} onClick$={toggleLanguage}>
      {t("changeLanguageBtn")}
    </button>
  );
});
