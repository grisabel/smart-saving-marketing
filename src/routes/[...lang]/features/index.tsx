import { component$ } from "@builder.io/qwik";
import { Features } from "~/components/Home/Features/Features";
import { Layout } from "~/components/Layout";

export default component$(() => {
  return (
    <Layout>
      <Features />
    </Layout>
  );
});
