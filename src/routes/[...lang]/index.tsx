import { component$ } from "@builder.io/qwik";
import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";

import { Features } from "~/components/Home/Features/Features";
import { QAs } from "~/components/Home/QAs/QAs";
import { Contact } from "~/components/Home/Contact/Contact";
import { Menu } from "~/components/Home/Menu/Menu";
import styles from "./index.module.scss";

import {JSONObject, routeAction$ } from "@builder.io/qwik-city";
import { MarketingFactoryRepository } from "~/repository/MarketingRepository/MarketingFactoryRepository";
import { config } from "~/speak-config";

const marketingRepository = MarketingFactoryRepository.getInstance();

export const useContactForm = routeAction$( async (data: JSONObject) => {

 try {
  await marketingRepository.sendContactForm({
    name: data.name as string,
    email: data.email as string,
    description: data.description as string,
    subject: data.subject as string
  })
	return {
		sucess: true
	}
 } catch (error) {

  return {
		sucess: false
	}
 }
})


export default component$(() => {

  const contactFormAction = useContactForm();

  return (
    <>
      <Menu />
      <div class={styles.contentWp}>
        <Features />
        <QAs />
        <Contact contactFormAction={contactFormAction}/>
      </div>
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
    params: config.supportedLocales.map(lng => {
      return {
        lang : lng.lang
      }
    })
  };
};