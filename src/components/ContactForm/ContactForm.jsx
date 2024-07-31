// import React from "react";
import { Formik, Form, Field } from "formik";

import css from "../ContactForm/ContactForm.module.css";

const ContactForm = ({
  initialValues,
  handleSubmit,
  nameFieldId,
  telFieldId,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.contactForm}>
        <span className={css.formItem}>
          <label className={css.titleField} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            required
          />
        </span>
        <span className={css.formItem}>
          <label className={css.titleField} htmlFor={telFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={telFieldId}
            required
          />
        </span>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
