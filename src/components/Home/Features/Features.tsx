import { component$ } from "@builder.io/qwik";

import styles from "./Features.module.scss";
import { en } from "~/i18n/en";
import { es } from "~/i18n/es";
import { useLanguage } from "~/hooks/useLanguage";

export const Features = component$(() => {
  const { lang } = useLanguage();

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
    <div class={styles.features}>
      <h1 id="features">{lang === "en" ? en.features : es.features}</h1>
    </div>
  );
});
