import { component$, $ } from "@builder.io/qwik";

export const Menu = component$(() => {
  // useStyle$(stlyles) //como un decorador de angular

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
    <ul>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#qas">QAs</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
});
