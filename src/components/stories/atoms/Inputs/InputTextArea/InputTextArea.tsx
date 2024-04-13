import { component$, $ } from "@builder.io/qwik";

import { InputBaseProps } from "./InputTextArea.types";

import styles from "./InputTextArea.module.scss";

const InputTextArea = component$(
  ({
    id,
    name,
    label,
    placeholder,
    icon,
    value: defaultValue,
    onChange,
    className,
  }: InputBaseProps) => {

    const handleChange = $((event: InputEvent) => {
      if (typeof onChange === "function") {
        onChange(event);
      }
    });

    return (
      <div class={`${styles.inputTextArea} ${className}`}>
        <label class={`${styles.label}`}>{label}</label>
        <div class={`${styles.inputContainer}`}>
          <textarea
            id={id}
            name={name}
            class={`${styles.input} `}
            placeholder={placeholder}
            value={defaultValue ?? undefined}
            onInput$={handleChange}
            autocomplete="off"
          />
          {icon && icon}
        </div>
      </div>
    );
  }
);

export default InputTextArea;
