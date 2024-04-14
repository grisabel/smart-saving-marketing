import { component$ } from "@builder.io/qwik";
import styles from "./Features.module.scss";

import { FeatureImgRight } from "./components/FeatureImgRight/FeatureImgRight";
import ImgDetails from "@/styles/assets/images/details.png";
import ImgSummary from "@/styles/assets/images/summary.png";
import ImgTools from "@/styles/assets/images/tools.png";

import { FeatureImgLeft } from "./components/FeatureImgLeft/FeatureImgLeft";
import { inlineTranslate } from "qwik-speak";

export const Features = component$(() => {
  const t = inlineTranslate();
  return (
    <div class={styles.features}>
      <h1 id="features">{t("features")}</h1>
      <FeatureImgRight
        imgSrc={ImgSummary}
        title={t("feature1Title")}
        description={t("feature1Description")}
        altImg="tools"
      />
      <FeatureImgLeft
        imgSrc={ImgDetails}
        title={t("feature2Title")}
        description={t("feature2Description")}
        altImg="details"
      />
      <FeatureImgRight
        imgSrc={ImgTools}
        title={t("feature3Title")}
        description={t("feature3Description")}
        altImg="tools"
      />
      <FeatureImgLeft
        imgSrc={ImgSummary}
        title={t("feature4Title")}
        description={t("feature4Description")}
        altImg="content"
      />
    </div>
  );
});
