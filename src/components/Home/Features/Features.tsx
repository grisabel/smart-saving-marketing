import { component$ } from "@builder.io/qwik";

import styles from "./Features.module.scss";
import { en } from "~/i18n/en";
import { es } from "~/i18n/es";
import { useLanguage } from "~/hooks/useLanguage";
import { FeatureImgRight } from "./components/FeatureImgRight/FeatureImgRight";
import ImgDetails from "/images/details.png";
import ImgSummary from "/images/summary.png";
import ImgContent from "/images/content.png";
import ImgTools from "/images/tools.png";
import { FeatureImgLeft } from "./components/FeatureImgLeft/FeatureImgLeft";

export const Features = component$(() => {
  const { lang } = useLanguage();
  const i18n = lang === "en" ? en : es;

  return (
    <div class={styles.features}>
      <h1 id="features">{lang === "en" ? en.features : es.features}</h1>
      <FeatureImgRight 
      imgSrc={ImgSummary}
      title={i18n.feature1Title} 
      description={i18n.feature1Description} 
      altImg="tools"
    />
      <FeatureImgLeft
      imgSrc={ImgDetails}
      title={i18n.feature2Title} 
      description={i18n.feature2Description} 
      altImg="details"
    />
      <FeatureImgRight 
      imgSrc={ImgTools}
      title={i18n.feature3Title} 
      description={i18n.feature3Description} 
      altImg="tools"
    />
      <FeatureImgLeft
      imgSrc={ImgSummary}
      title={i18n.feature4Title} 
      description={i18n.feature4Description} 
      altImg="content"
    />
    </div>
  );
});
