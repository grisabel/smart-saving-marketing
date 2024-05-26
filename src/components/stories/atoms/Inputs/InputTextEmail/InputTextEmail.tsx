import { component$ } from "@builder.io/qwik";
import { InputTextEmailProps } from "./InputTextEmail.types";
import InputBase from "../InputBase";

const InputTextEmail = component$((props: InputTextEmailProps) => {
  return <InputBase {...props} type="email" />;
});

export default InputTextEmail;
