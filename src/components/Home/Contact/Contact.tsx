import { component$ } from "@builder.io/qwik";
import InputBase from "../../stories/atoms/Inputs/InputBase";
import InputText from "../../stories/atoms/Inputs/InputText";
import InputTextEmail from "../../stories/atoms/Inputs/InputTextEmail";
import Button from "~/components/stories/atoms/Buttons/Button";
import InputTextArea from "~/components/stories/atoms/Inputs/InputTextArea";
import i18n from "~/i18n";

import { ActionStore, Form } from "@builder.io/qwik-city";

import styles from "./Contact.module.scss";


export const Contact = component$(() => {

  // const menu = useSignal<{label: string, route: string}[]>([])

  // const handlerAddItem = $(() => {
  //     menu.value = [
  //     ...menu.value,
  //     {
  //         label: Exanple ,
  //         route: /example'
  //     }
  //     ]
  // })

  const { t } = i18n;

  return (
    <>
      <h1 id="contact">Contact</h1>
      <Form class={styles.formLayout}>
        <InputBase
          id="name"
          name="name"
          type="text"
          label={t("contactForm.inputName.label")}
          placeholder={t("contactForm.inputName.placeholder")}
        />
        <InputText
          id="email"
          name="email"
          label={t("contactForm.inputEmail.label")}
          placeholder={t("contactForm.inputEmail.placeholder")}
        />
        <InputTextEmail
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
        <Button label={t("contactForm.btnSend")} type="submit"/>
      </Form>
    </>
  );
});
