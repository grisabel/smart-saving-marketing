import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import DropDown from "./components/drop-down";
import { en } from "~/i18n/en";
import { es } from "~/i18n/es";
import { useLanguage } from "~/hooks/useLanguage";
import styles from "./QAs.module.scss";
export interface LanguageStore {
  lang: string;
}
export const QAs = component$(() => {
  const { lang } = useLanguage();

  return (
    <div class={styles.qas}>
      <h1 id="qas">{lang === "en" ? en.qas : es.qas}</h1>
      <div class={styles.faqContainer}>
        <DropDown
          question={lang === "en" ? en.question1 : es.question1}
          answer={lang === "en" ? en.answer1 : es.answer1}
        />
        <DropDown
          question={lang === "en" ? en.question2 : es.question2}
          answer={lang === "en" ? en.answer2 : es.answer2}
        />
        <DropDown
          question={lang === "en" ? en.question3 : es.question3}
          answer={lang === "en" ? en.answer3 : es.answer3}
        />
        <DropDown
          question={lang === "en" ? en.question4 : es.question4}
          answer={lang === "en" ? en.answer4 : es.answer4}
        />
        <DropDown
          question={lang === "en" ? en.question5 : es.question5}
          answer={lang === "en" ? en.answer5 : es.answer5}
        />
        <DropDown
          question={lang === "en" ? en.question6 : es.question6}
          answer={lang === "en" ? en.answer6 : es.answer6}
        />
        <DropDown
          question={lang === "en" ? en.question7 : es.question7}
          answer={lang === "en" ? en.answer7 : es.answer7}
        />
      </div>
    </div>
  );
});
