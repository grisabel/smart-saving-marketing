import { component$ } from "@builder.io/qwik";
import i18n from "~/i18n";

import styles from "./Menu.module.scss";
import Logo from "./components/Logo";
import { InputDropDown } from "~/components/stories/atoms/Inputs/InputDropDown/InputDropDown";

export const Menu = component$(() => {
  const { t } = i18n;

  return (
    <div class={styles.header}>
      <Logo />
      <ul class={styles.menuWp}>
        <li class={styles.menuItem}>
          <a href="#features">{t("features")}</a>
        </li>
        <li class={styles.menuItem}>
          <a href="#qas">{t("qas")}</a>
        </li>
        <li class={styles.menuItem}>
          <a href="#contact">{t("contact")}</a>
        </li>
      </ul>
      {/* 
      <div>
        <InputDropDown
          id="language-selector"
          options={i18n.options}
          value={state.currentLanguage}
          onChange={handleChangeLanguage}
        />
      </div> */}
    </div>
  );
});
