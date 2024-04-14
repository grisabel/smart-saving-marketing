import { QRL } from "@builder.io/qwik";
import { JSX } from "@builder.io/qwik/jsx-runtime";

export interface InputBaseProps {
  className?: string;

  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;

  value?: string | null;
  onChange$?: QRL<(value: InputEvent) => void>;
}
