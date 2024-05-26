import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler } from "@builder.io/qwik-city";
import { Features } from "~/components/Home/Features/Features";
import { Layout } from "~/components/Layout";
import { config } from "~/speak-config";

export default component$(() => {
  return (
    <Layout>
      <Features />
    </Layout>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: config.supportedLocales.map((lng) => {
      return {
        lang: lng.lang,
      };
    }),
  };
};
