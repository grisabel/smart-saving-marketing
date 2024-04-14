import { component$ } from "@builder.io/qwik";

import DropDown from "./components/drop-down";

import styles from "./QAs.module.scss";
import { inlineTranslate } from "qwik-speak";
export interface LanguageStore {
  lang: string;
}
export const QAs = component$(() => {
  const t = inlineTranslate();

  return (
    <div class={styles.qas}>
      <h1 id="qas">{t("qas")}</h1>
      <div class={styles.faqContainer}>
        <DropDown question={t("question1")} answer={t("answer1")} />
        <DropDown question={t("question2")} answer={t("answer2")} />
        <DropDown question={t("question3")} answer={t("answer3")} />
        <DropDown question={t("question4")} answer={t("answer4")} />
        <DropDown question={t("question5")} answer={t("answer5")} />
        <DropDown question={t("question6")} answer={t("answer6")} />
        <DropDown question={t("question7")} answer={t("answer7")} />
      </div>
    </div>
  );
});
