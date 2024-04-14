import { component$ } from "@builder.io/qwik";
import styles from "./Menu.module.scss";
import Logo from "./components/Logo";
import { inlineTranslate } from "qwik-speak";
import Button from "~/components/stories/atoms/Buttons/Button";

export const Menu = component$(() => {
  const t = inlineTranslate();

  return (
    <div class={styles.header}>
      <Logo />
      <div class={styles.itemsMenu}>
        <ul class={styles.menuWp}>
          <li class={styles.menuItem}>
            <a href="/features">{t("features")}</a>
          </li>
          <li class={styles.menuItem}>
            <a href="/qas">{t("qas")}</a>
          </li>
          <li class={styles.menuItem}>
            <a href="/contact">{t("contact")}</a>
          </li>
        </ul>
        <div class={styles.buttons}>
          <Button label={t("feBtn")} type="button" color="secondary" />
          <Button label={t("loginBtn")} type="button" />
        </div>
      </div>
    </div>
  );
});
