import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthError } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Username is required")
      .min(2, "The username must be at least 2 characters long")
      .max(100, "The username must be less than 100 characters"),
    email: Yup.string()
      .email("Incorrect email address")
      .required("Email address is required"),
    password: Yup.string()
      .min(8, "The password must contain at least 8 characters")
      .required("Password confirmation is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });
  const dispatch = useDispatch();
  const errors = useSelector(selectAuthError);

  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration successful");
      })
      .catch(() => {
        toast.error("Registration");
      });
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>User name:</span>
            <Field
              type="text"
              className={css.field}
              name="name"
              placeholder="Emma"
            />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Email address:</span>
            <Field
              type="text"
              className={css.field}
              name="email"
              placeholder="emma.example@gmail.com"
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
              className={css.field}
              type="password"
              name="password"
              placeholder="Entet your password"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Password confirmation:</span>
            <Field
              type="password"
              className={css.field}
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              className={css.errorText}
              name="confirmPassword"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
