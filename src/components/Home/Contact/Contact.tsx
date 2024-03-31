import { component$ } from "@builder.io/qwik";
import InputBase from "../../stories/atoms/Inputs/InputBase";
import InputText from "../../stories/atoms/Inputs/InputText";
import InputTextEmail from "../../stories/atoms/Inputs/InputTextEmail";
import Button from "~/components/stories/atoms/Buttons/Button";
import InputTextArea from "~/components/stories/atoms/Inputs/InputTextArea";

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
      <InputBase type="text" label="label" placeholder="placeholder" />
      <InputText label="label" placeholder="placeholder" />
      <InputTextEmail label="label" placeholder="placeholder" />
      <Button label="hola"/>
      <InputTextArea label="label" placeholder="placeholder"/>
    </div>
  );
});
