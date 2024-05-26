import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler } from "@builder.io/qwik-city";
import { QAs } from "~/components/Home/QAs/QAs";
import { Layout } from "~/components/Layout";
import { config } from "~/speak-config";

export default component$(() => {
  return (
    <Layout>
      <QAs />
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
