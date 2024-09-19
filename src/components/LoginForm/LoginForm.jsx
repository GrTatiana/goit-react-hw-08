import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import toast from "react-hot-toast";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Incorrect email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "The password must contain at least 8 characters")
    .required("Password confirmation is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .then(() => {
        toast.success("Login successful");
      })
      .catch(() => {
        toast.error("Login error");
      });
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              className={css.field}
              name="email"
              placeholder="kirilo.example@gmail.com"
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              className={css.field}
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
