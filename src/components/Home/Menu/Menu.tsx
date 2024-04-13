import { component$, useStore,  $, useContext } from "@builder.io/qwik";
import styles from "./Menu.module.scss";
import Logo from "./components/Logo";
import { InputDropDown } from "~/components/stories/atoms/Inputs/InputDropDown/InputDropDown";
import { useLanguage } from "~/hooks/useLanguage";
import { en } from "~/i18n/en";
import { es } from "~/i18n/es";
import { GlobalStateContext } from "~/context/globalState";

export const Menu = component$(() => {
  const { lang } = useLanguage();
  const i18n = lang === "en" ? en : es;
  const globalState = useContext(GlobalStateContext);

  const state = useStore({
    currentLanguage: 'es', 
  });

  const handleChangeLanguage = $( (event: InputEvent) => {
    const newLanguage = (event.target as HTMLInputElement).value;
    globalState.setLanguage(newLanguage)
  });

  return (
    <div class={styles.header}>
      <Logo />
      <ul class={styles.menuWp}>
        <li class={styles.menuItem}>
          <a href="#features">Features</a>
        </li>
        <li class={styles.menuItem}>
          <a href="#qas">QAs</a>
        </li>
        <li class={styles.menuItem}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div>
      <InputDropDown
        id="language-selector"
        options={i18n.options}
        value={state.currentLanguage}
        onChange={handleChangeLanguage}
      />
      </div>
    </div>
  );
});
