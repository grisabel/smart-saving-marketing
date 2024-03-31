import { JSX } from "@builder.io/qwik/jsx-runtime";

export interface InputBaseProps {
  className?: string;

  id?: string;
  label?: string;
  placeholder?: string;
  type: "email" | "password" | "text" | "number";
  icon?: JSX.Element;

  value?: string | null;
  onChange?: (value: InputEvent) => void;
}
