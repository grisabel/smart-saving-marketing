import { component$ } from "@builder.io/qwik";
import styles from "./Alert.module.scss";
import crossBigIcon from "@/styles/assets/svg/cross-big.svg";
import successIcon from "@/styles/assets/svg/success.svg";

export interface AlertProps {
  title: string;
  description: string;
  type: "warning" | "danger" | "success";
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Alert = component$(
  ({ title, description, type, open, setOpen }: AlertProps) => {
    let name: "danger" | "info-circle" | "success";

    switch (type) {
      case "danger":
        name = "danger";
        break;
      case "warning":
        name = "info-circle";
        break;
      case "success":
        name = "success";
        break;
    }

    return (
      open && (
        <div class={`${styles.container} ${styles[`container--${type}`]}`}>
          <div class={`${styles.iconWp}`}>
            <div class={`${styles.icon}`}>
              {name && (
                <img
                  src={successIcon}
                  alt="sucess"
                  width={32}
                  height={32}
                />
              )}
            </div>
            <div class={styles.content}>
              <p class={styles.content__title}>{title}</p>
              <p class={styles.content__description}>{description}</p>
            </div>
          </div>
          <div
            class={styles.close}
            onClick$={() => {
              setOpen(false);
            }}
          >
            <img src={crossBigIcon} alt="cross-big" width={16} height={16} />
          </div>
        </div>
      )
    );
  }
);

export default Alert;
