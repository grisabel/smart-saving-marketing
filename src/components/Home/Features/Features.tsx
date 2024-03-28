import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from './Features.css?inline';

export const Features = component$(() => {
    useStylesScoped$(styles) 

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

  return <div class="features">Features</div>;
});
