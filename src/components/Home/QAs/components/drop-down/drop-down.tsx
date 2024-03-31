import { component$, useSignal } from "@builder.io/qwik";
import styles from "./drop-down.module.scss";
import chevronIcon from "@/styles/assets/svg/chevron-forward-outline.svg";

interface DropDownProps {
  question: string;
  answer: string;
}

const DropDown = component$((props: DropDownProps) => {
  const visible = useSignal(false);

  return (
    <div class={styles.dropdown}>
      <div
        class={`${styles.question} ${visible.value ? styles.rotate : ""}`}
        onClick$={() => (visible.value = !visible.value)}
      >
        {props.question}
        <img
          src={chevronIcon}
          alt="Toggle"
          class={`${styles.icon} ${visible.value ? styles.rotate : ""}`}
          width={16}
          height={16}
        />
      </div>
      {visible.value && <div class={styles.answer}>{props.answer}</div>}
    </div>
  );
});

export default DropDown;
