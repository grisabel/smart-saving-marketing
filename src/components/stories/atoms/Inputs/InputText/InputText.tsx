import { component$ } from "@builder.io/qwik";
import { InputTextProps } from "./InputText.types";
import InputBase from "../InputBase";

const InputText = component$((props: InputTextProps) => {
  return <InputBase {...props} type="text" />;
});

export default InputText;
