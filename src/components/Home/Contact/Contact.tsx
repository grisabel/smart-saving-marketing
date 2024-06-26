import { component$, useSignal, $ } from "@builder.io/qwik";
import InputBase from "../../stories/atoms/Inputs/InputBase";
import InputText from "../../stories/atoms/Inputs/InputText";
import InputTextEmail from "../../stories/atoms/Inputs/InputTextEmail";
import Button from "~/components/stories/atoms/Buttons/Button";
import InputTextArea from "~/components/stories/atoms/Inputs/InputTextArea";

import { ActionStore, Form } from "@builder.io/qwik-city";

import styles from "./Contact.module.scss";
import Alert from "~/components/stories/atoms/Alert";
import { inlineTranslate } from "qwik-speak";

interface ContactProps {
  contactFormAction: ActionStore<any, any>;
}

export const Contact = component$((props: ContactProps) => {
  const t = inlineTranslate();
  const { contactFormAction } = props;

  const open = useSignal<boolean>(true);

  const setOpen$ = $((value: boolean) => (open.value = value));

  return (
    <div class={styles.contact}>
      <h1 id="contact">{t("contactForm.title")}</h1>
      {contactFormAction.status === 200 && (
        <Alert
          open={open.value}
          title={t("contactForm.success.title")}
          description={t("contactForm.success.subtitle")}
          type="success"
          setOpen$={setOpen$}
        />
      )}
      <Form class={styles.formLayout} action={contactFormAction}>
        <InputBase
          id="name"
          name="name"
          type="text"
          label={t("contactForm.inputName.label")}
          placeholder={t("contactForm.inputName.placeholder")}
        />
        <InputTextEmail
          id="email"
          name="email"
          label={t("contactForm.inputEmail.label")}
          placeholder={t("contactForm.inputEmail.placeholder")}
        />
        <InputText
          id="subject"
          name="subject"
          label={t("contactForm.inputSubject.label")}
          placeholder={t("contactForm.inputSubject.placeholder")}
        />
        <InputTextArea
          id="description"
          name="description"
          label={t("contactForm.inputDescription.label")}
          placeholder={t("contactForm.inputDescription.placeholder")}
        />
        <Button label={t("contactForm.btnSend")} type="submit" />
      </Form>
    </div>
  );
});
