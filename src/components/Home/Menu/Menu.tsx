import { component$ } from "@builder.io/qwik";
import styles from "./Menu.module.scss";
import Logo from "./components/Logo";
import { inlineTranslate } from "qwik-speak";
import Button from "~/components/stories/atoms/Buttons/Button";
import { useLocation } from "@builder.io/qwik-city";

export const Menu = component$(() => {
  const location = useLocation();
  const t = inlineTranslate();

  const currentLang = location.params.lang || "es";
  const getUrl = (path: any) =>
    currentLang === "es" ? `/${path}` : `/${currentLang}/${path}`;

  return (
    <div class={styles.header}>
      <Logo />
      <div class={styles.itemsMenu}>
        <ul class={styles.menuWp}>
          <li class={styles.menuItem}>
            <a href={getUrl("features")}>{t("features")}</a>
          </li>
          <li class={styles.menuItem}>
            <a href={getUrl("qas")}>{t("qas")}</a>
          </li>
          <li class={styles.menuItem}>
            <a href={getUrl("contact")}>{t("contact")}</a>
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
