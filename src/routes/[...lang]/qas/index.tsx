import { component$ } from "@builder.io/qwik";
import { QAs } from "~/components/Home/QAs/QAs";
import { Layout } from "~/components/Layout";

export default component$(() => {
  return (
    <Layout>
      <QAs />
    </Layout>
  );
});
