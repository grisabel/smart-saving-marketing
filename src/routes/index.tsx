import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Features } from "~/components/Home/Features/Features";
import { QAs } from "~/components/Home/QAs/QAs";
import { Contact } from "~/components/Home/Contact/Contact";
import { Menu } from "~/components/Home/Menu/Menu";
import styles from "./index.module.scss";

import {JSONObject, RequestEventAction, routeAction$ } from "@builder.io/qwik-city";


export const useContactForm = routeAction$( async (data: JSONObject, request:RequestEventAction) => {
	return {
		sucess: true
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
