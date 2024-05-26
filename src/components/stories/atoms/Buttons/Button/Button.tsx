import { component$, $, QRL } from "@builder.io/qwik";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick$?: QRL<() => void>;
  disabled?: boolean;
  className?: string;
}

const Button = component$(
  ({
    label,
    onClick$,
    color = "primary",
    type = "button",
    disabled,
    className,
  }: ButtonProps) => {
    const handleClick = $(() => {
      onClick$?.();
    });
    return (
      <button
        type={type}
        onClick$={handleClick}
        class={`${styles.button} ${styles[`button--${color}`]} ${className}`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
);

export default Button;
