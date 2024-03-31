import { component$ } from "@builder.io/qwik";
import InputBase from "./component/InputBase";

export const Contact = component$(() => {
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
    <div>
      <h1 id="contact">Contact</h1>
     <InputBase type="text" label="label" placeholder="placeholder"/>
    </div>
  );
});
