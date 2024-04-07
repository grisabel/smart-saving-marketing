import { component$, PropFunction  } from "@builder.io/qwik";

import styles from "./FeatureImgRight.module.scss";
import { en } from "~/i18n/en";
import { es } from "~/i18n/es";

export interface FeatureImgRightProps {
  imgSrc: string;
  altImg: string;
  title: string;
  description: string;
}

export const FeatureImgRight = component$((props: FeatureImgRightProps) => {

  return (
    <div class={styles.feature}>
        <div class={styles.featureData}>      
            <h3 class={styles.title}>{props.title}</h3>
            <p class={styles.description}>{props.description}</p>
        </div>
        <img class={styles.img} width={240} height={240}  src={props.imgSrc} alt={props.altImg} />
    </div>
  );
});
