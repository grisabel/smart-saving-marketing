import { component$, Slot } from "@builder.io/qwik";

import styles from "./Layout.module.scss";
import { Menu } from "./Home/Menu/Menu";
import { LanguageSwitcher } from "./Home/LanguageSwitcher/LanguageSwitcher";

export const Layout = component$(() => {
  return (
    <div class={styles.layout}>
      <Menu />
      <LanguageSwitcher />
      <div>
        <Slot />
      </div>
    </div>
  );
});
