import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../components/SearchPostsForm/SearchPostsForm.module.css";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const RegistrationForm = () => {
  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Ім'я користувача є обов'язковим")
      .min(2, "Ім'я користувача має бути мінімум в 2 символи")
      .max(100, "Ім'я користувача має бути меншим за 100 символів"),
    email: Yup.string()
      .email("Некоректна електронна адреса")
      .required("Електронна адреса є обов'язковою"),
    password: Yup.string()
      .min(8, "Пароль має містити не менше 8 символів")
      .required("Пароль є обов’язковим"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролі повинні збігатися")
      .required("Підтвердження паролю є обов’язковим"),
  });

  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
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
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Ім&apos;я користувача:</span>
            <Field type="text" name="name" placeholder="Василь" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Електронна адреса:</span>
            <Field
              type="text"
              name="email"
              placeholder="vasil.example@gmail.com"
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Пароль:</span>
            <Field
              type="password"
              name="password"
              placeholder="Введіть свій пароль"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Підтвердження паролю:</span>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Підтвердіть свій пароль"
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
            Зареєструватися
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
