import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Features } from "~/components/Home/Features/Features";
import { QAs } from "~/components/Home/QAs/QAs";
import { Contact } from "~/components/Home/Contact/Contact";
import { Menu } from "~/components/Home/Menu/Menu";

export default component$(() => {
  return (
    <>
    <Menu/>
    <Features/>
    <QAs/>
    <Contact/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
