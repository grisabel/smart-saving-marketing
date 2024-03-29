import { component$, $ } from "@builder.io/qwik";
import styles from "./Menu.module.scss";
import Logo from "./components/Logo";

export const Menu = component$(() => {
  // const menu = useSignal<{label: string, route: string}[]>([])

  // const handlerAddItem = $(() => {
  //     menu.value = [
  //     ...menu.value,
  //     {
  //         label: Exanple ,
  //         route: /example'
  //     }
  //     ]
  // })

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
    </div>
  );
});
