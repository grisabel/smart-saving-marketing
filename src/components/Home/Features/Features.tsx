import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./Features.scss?inline";
import i18n from "~/i18n";

export const Features = component$(() => {
  useStylesScoped$(styles);

  const { t } = i18n;

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
    <div class="features">
      Features
      <p>{t("app.test")}</p>
    </div>
  );
});
