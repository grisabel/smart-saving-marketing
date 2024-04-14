import { component$, $ } from "@builder.io/qwik";

import { InputBaseProps } from "./InputBase.types";

import styles from "./InputBase.module.scss";

const InputBase = component$(
  ({
    id,
    name,
    label,
    placeholder,
    type,
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
      <div class={`${styles.inputWp} ${className}`}>
        <label class={`${styles.label}`}>{label}</label>
        <div class={`${styles.inputContainer}`}>
          <input
            id={id}
            name={name}
            class={`${styles.input} `}
            placeholder={placeholder}
            type={type}
            value={defaultValue}
            onInput$={handleChange}
            autoComplete="off"
            required
          />
          {icon && icon}
        </div>
      </div>
    );
  }
);

export default InputBase;
