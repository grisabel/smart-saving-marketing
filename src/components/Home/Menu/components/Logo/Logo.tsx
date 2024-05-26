import { component$ } from "@builder.io/qwik";
import styles from "./Logo.module.scss";
import ImgLogo from "@/styles/assets/logo/logo.ico";

const Logo = component$(() => {
  return (
    <div class={styles.logo}>
      <img src={ImgLogo} width={150} height={80} alt="Logo Icon" />
      <div class={styles.logoTitle}>
        <p class={styles.titleBold}>SMART</p>
        <p class={styles.titleThin}>SAVINGS</p>
      </div>
    </div>
  );
});

export default Logo;
