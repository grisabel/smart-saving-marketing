import { component$ } from "@builder.io/qwik";
import type {
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";

import { Features } from "~/components/Home/Features/Features";

import { JSONObject, routeAction$ } from "@builder.io/qwik-city";
import { MarketingFactoryRepository } from "~/repository/MarketingRepository/MarketingFactoryRepository";
import { config } from "~/speak-config";
import { Layout } from "~/components/Layout";

const marketingRepository = MarketingFactoryRepository.getInstance();

export const useContactForm = routeAction$(async (data: JSONObject) => {
  try {
    await marketingRepository.sendContactForm({
      name: data.name as string,
      email: data.email as string,
      description: data.description as string,
      subject: data.subject as string,
    });
    return {
      sucess: true,
    };
  } catch (error) {
    return {
      sucess: false,
    };
  }
});

export default component$(() => {
  return (
    <>
      <Layout>
        <Features />
      </Layout>
    </>
  );
});

export const head: DocumentHead = {
  title: "Smart Savings",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: config.supportedLocales.map((lng) => {
      return {
        lang: lng.lang,
      };
    }),
  };
};
