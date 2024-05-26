import { component$ } from "@builder.io/qwik";
import { JSONObject, routeAction$ } from "@builder.io/qwik-city";
import { Contact } from "~/components/Home/Contact/Contact";
import { Layout } from "~/components/Layout";
import { MarketingFactoryRepository } from "~/repository/MarketingRepository/MarketingFactoryRepository";

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
  const contactFormAction = useContactForm();
  return (
    <Layout>
      <Contact contactFormAction={contactFormAction} />
    </Layout>
  );
});
