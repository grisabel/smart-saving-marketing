import { component$  } from "@builder.io/qwik";

import styles from "./FeatureImgLeft.module.scss";

export interface FeatureImgLeftProps {
  imgSrc: string;
  altImg: string;
  title: string;
  description: string;
}

export const FeatureImgLeft = component$((props: FeatureImgLeftProps) => {

  return (
    <div class={styles.feature}>
      <img class={styles.img} width={240} height={240}  src={props.imgSrc} alt={props.altImg} />
        <div class={styles.featureData}>      
            <h3 class={styles.title}>{props.title}</h3>
            <p class={styles.description}>{props.description}</p>
        </div>
        
    </div>
  );
});
