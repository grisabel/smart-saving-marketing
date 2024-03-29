import { component$, $ } from "@builder.io/qwik";
import styles from "./Logo.module.scss";

const Logo = component$(() => {
  return (
    <div class={styles.logo}>
      <img src="/logo.ico" width={150} height={80} alt="Logo Icon" />
      <div class={styles.logoTitle}>
        <p class={styles.titleBold}>SMART</p>
        <p class={styles.titleThin}>SAVINGS</p>
      </div>
    </div>
  );
});

export default Logo;
