import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ProfileValidationSchema = Yup.object().shape({
  profileName: Yup.string()
    .required("Ім'я профілю є обов'язковим")
    .min(2, "Ім'я профілю має бути мінімум в 2 символи")
    .max(50, "Ім'я профілю має бути меншим за 50 символів"),
  profileNumber: Yup.string()
    .matches(
      phoneRegExp,
      "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
    )
    .required("Номер телефону є обов'язковий"),
});

const ContactForm = ({
  onAddContact,
  initialValues,
  nameFieldId,
  telFieldId,
}) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.profileName,
      number: values.profileNumber,
    };
    onAddContact(contactObject);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
      {({ errors }) => (
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
            />{" "}
            <ErrorMessage
              className={css.errorText}
              name="contactName"
              component="span"
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
            <ErrorMessage
              className={css.errorText}
              name="contactNumber"
              component="span"
            />
          </span>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
