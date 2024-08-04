import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};
const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "The profile name must be at least 3 characters long")
    .max(50, "The profile name must be less than 50 characters"),
  number: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "The phone number must match the format xxx-xx-xx"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };
    addContact(contactObject);
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.contactForm}>
          <span className={css.formItem}>
            <label className={css.titleField}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              required
            />{" "}
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </span>
          <span className={css.formItem}>
            <label className={css.titleField}>Number</label>
            <Field className={css.field} type="tel" name="number" required />
            <ErrorMessage
              className={css.errorText}
              name="number"
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
