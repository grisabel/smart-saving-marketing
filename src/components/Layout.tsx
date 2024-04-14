import { component$, Slot } from "@builder.io/qwik";

import styles from "./Layout.module.scss";
import { Menu } from "./Home/Menu/Menu";

export const Layout = component$(() => {
  return (
    <div class={styles.layout}>
      <Menu />
      <div>
        <Slot />
      </div>
    </div>
  );
});
